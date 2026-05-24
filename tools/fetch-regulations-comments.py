#!/usr/bin/env python3
"""Fetch every public comment from a regulations.gov docket.

Walks the v4 API, downloads inline comment text and every attachment,
writes a manifest.csv. Designed for the Copyright Office's policy-study
dockets (COLC-2015-0011 software, COLC-2015-0012 §1201).

Requires a regulations.gov API key (free at https://api.data.gov/signup/).
Free tier is 1000 requests/hour — well above the ~170 calls these dockets
need. The script paces itself with a 0.4s sleep between calls.

Usage:
  REG_API_KEY=... python3 tools/fetch-regulations-comments.py \\
      --docket COLC-2015-0012 \\
      --out "1201/Policy Studies/Section-1201-of-Title-17-2017/Comments"

The output directory ends up with:
  manifest.csv                                       index of every comment
  COLC-2015-0012-NNNN_Submitter_comment.txt          inline comment text
  COLC-2015-0012-NNNN_Submitter_<attid>.<ext>        each attachment

Comment text is the body the submitter typed into the regulations.gov
form (if any). Attachments are PDFs / DOCs the submitter uploaded.
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

API_ROOT = "https://api.regulations.gov/v4"
# The API tolerates any User-Agent, but the attachment CDN
# (downloads.regulations.gov, CloudFront-fronted) 403s anything that
# doesn't look like a browser. Use a browser UA across the board.
USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def api_get(path: str, params: dict | None = None, key: str = "") -> dict:
    """GET <API_ROOT>/<path>?<params>, return parsed JSON.

    Note: brackets in regulations.gov v4 param names (e.g. ``filter[docketId]``,
    ``page[size]``) MUST be percent-encoded — leaving them literal returns
    HTTP 400. Don't add ``safe='[]'`` to urlencode here.
    """
    qs = ("?" + urllib.parse.urlencode(params)) if params else ""
    req = urllib.request.Request(
        f"{API_ROOT}/{path}{qs}",
        headers={"X-Api-Key": key, "User-Agent": USER_AGENT, "Accept": "application/vnd.api+json"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def fetch_file(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = r.read()
    dest.write_bytes(data)
    return len(data)


def list_all_comments(docket: str, key: str, pause: float) -> list[dict]:
    out: list[dict] = []
    page = 1
    while True:
        d = api_get(
            "comments",
            {"filter[docketId]": docket, "page[size]": 250, "page[number]": page},
            key=key,
        )
        out.extend(d.get("data", []))
        meta = d.get("meta", {})
        total_pages = meta.get("totalPages", 1)
        if page >= total_pages or not d.get("data"):
            break
        page += 1
        time.sleep(pause)
    return out


_filename_bad = re.compile(r"[^A-Za-z0-9.-]+")


def safe_filename(s: str, maxlen: int = 60) -> str:
    s = _filename_bad.sub("-", (s or "").strip()).strip("-")
    return s[:maxlen] if s else "Anonymous"


def submitter_label(attrs: dict) -> str:
    org = (attrs.get("organization") or "").strip()
    last = (attrs.get("lastName") or "").strip()
    first = (attrs.get("firstName") or "").strip()
    if org:
        return org
    if last and first:
        return f"{last}-{first}"
    if last:
        return last
    return "Anonymous"


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--docket", required=True, help="e.g. COLC-2015-0012")
    ap.add_argument("--out", required=True, help="output directory")
    ap.add_argument("--pause", type=float, default=0.4,
                    help="seconds between API calls (default 0.4)")
    ap.add_argument("--limit", type=int, default=0,
                    help="stop after N comments (debug); 0 = all")
    ap.add_argument("--skip-existing", action="store_true",
                    help="skip a comment whose manifest row + files exist")
    args = ap.parse_args()

    key = os.environ.get("REG_API_KEY")
    if not key:
        sys.exit("Set REG_API_KEY env var (https://api.data.gov/signup/)")

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Listing {args.docket} ...", file=sys.stderr)
    try:
        all_comments = list_all_comments(args.docket, key, args.pause)
    except urllib.error.HTTPError as e:
        sys.exit(f"list failed: HTTP {e.code} {e.reason}")
    print(f"  found {len(all_comments)} comments", file=sys.stderr)

    if args.limit:
        all_comments = all_comments[: args.limit]

    rows: list[dict] = []
    for i, c in enumerate(all_comments, start=1):
        cid = c["id"]
        try:
            detail = api_get(f"comments/{cid}", {"include": "attachments"}, key=key)
        except urllib.error.HTTPError as e:
            print(f"  {cid}: detail HTTP {e.code} — skipping", file=sys.stderr)
            continue

        attrs = detail["data"]["attributes"]
        who = submitter_label(attrs)
        prefix = f"{cid}_{safe_filename(who)}"

        # Inline comment text
        text = (attrs.get("comment") or "").strip()
        text_file = ""
        if text:
            text_file = f"{prefix}_comment.txt"
            tp = out_dir / text_file
            tp.write_text(
                f"Comment ID: {cid}\n"
                f"Title: {attrs.get('title', '')}\n"
                f"Posted: {attrs.get('postedDate', '')}\n"
                f"Submitter: {who}\n\n"
                f"{text}\n",
                encoding="utf-8",
            )

        # Attachments
        att_files: list[str] = []
        for inc in detail.get("included", []):
            if inc.get("type") != "attachments":
                continue
            att_id_suffix = inc["id"].rsplit("-", 1)[-1]
            for fmt in inc.get("attributes", {}).get("fileFormats") or []:
                url = fmt.get("fileUrl")
                if not url:
                    continue
                ext = url.rsplit(".", 1)[-1].lower().split("?")[0]
                if len(ext) > 5:
                    ext = "bin"
                fname = f"{prefix}_{att_id_suffix}.{ext}"
                fp = out_dir / fname
                if args.skip_existing and fp.exists():
                    att_files.append(fname)
                    continue
                try:
                    fetch_file(url, fp)
                    att_files.append(fname)
                except Exception as e:
                    print(f"  {cid}: attachment {url}: {e}", file=sys.stderr)

        rows.append({
            "id": cid,
            "posted_date": attrs.get("postedDate", ""),
            "submitter": who,
            "organization": attrs.get("organization") or "",
            "last_name": attrs.get("lastName") or "",
            "first_name": attrs.get("firstName") or "",
            "title": attrs.get("title") or "",
            "text_file": text_file,
            "attachment_files": "|".join(att_files),
        })

        if i % 10 == 0 or i == len(all_comments):
            print(f"  {i}/{len(all_comments)}", file=sys.stderr)
        time.sleep(args.pause)

    manifest_path = out_dir / "manifest.csv"
    with manifest_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["id", "posted_date", "submitter", "organization",
                        "last_name", "first_name", "title",
                        "text_file", "attachment_files"],
        )
        w.writeheader()
        w.writerows(rows)
    print(f"Wrote manifest.csv with {len(rows)} rows ({manifest_path})", file=sys.stderr)


if __name__ == "__main__":
    main()
