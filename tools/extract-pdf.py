#!/usr/bin/env python3
"""Extract a PDF to .txt matching this repo's convention.

Convention (see 1201/Reg Recommendation/*.txt for samples):
- One `[PAGE N]` marker on its own line at the start of each page.
- Page content follows verbatim from pypdf's extract_text().
- Runs of 3+ blank lines collapsed to 2.
- Mid-word hyphens left as pypdf renders them (the existing archive
  preserves "seventy-\\n five" -> "seventy-" lineending without rejoining;
  genuine compound words stay correctly hyphenated).

Usage:
  python3 tools/extract-pdf.py input.pdf              # -> input.txt
  python3 tools/extract-pdf.py input.pdf -o out.txt
  python3 tools/extract-pdf.py file1.pdf file2.pdf ...  # batch
  python3 tools/extract-pdf.py --batch DIR            # recurse, write .txt
                                                       # alongside each .pdf
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit("pypdf not installed. Try: pip3 install --user pypdf")

TRIPLE_BLANK = re.compile(r"\n{3,}")


def extract_one(pdf_path: Path, out_path: Path) -> tuple[int, int]:
    """Extract pdf_path to out_path. Returns (page_count, bytes_written)."""
    reader = PdfReader(str(pdf_path))
    parts: list[str] = []
    for i, page in enumerate(reader.pages, start=1):
        parts.append(f"[PAGE {i}]\n")
        try:
            text = page.extract_text() or ""
        except Exception as e:
            text = f"<<extract error on page {i}: {e}>>"
        parts.append(text.rstrip() + "\n\n")
    body = "".join(parts).rstrip() + "\n"
    body = TRIPLE_BLANK.sub("\n\n", body)
    out_path.write_text(body, encoding="utf-8")
    return len(reader.pages), len(body.encode("utf-8"))


def iter_targets(args) -> list[tuple[Path, Path]]:
    if args.batch:
        root = Path(args.batch)
        if not root.is_dir():
            sys.exit(f"--batch path is not a directory: {root}")
        return [(p, p.with_suffix(".txt")) for p in sorted(root.rglob("*.pdf"))]
    if not args.inputs:
        sys.exit("no input PDFs given")
    if args.output and len(args.inputs) > 1:
        sys.exit("-o is only valid with a single input")
    targets = []
    for pdf in args.inputs:
        pdf_path = Path(pdf)
        out = Path(args.output) if args.output else pdf_path.with_suffix(".txt")
        targets.append((pdf_path, out))
    return targets


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("inputs", nargs="*", help="PDF files to extract")
    ap.add_argument("-o", "--output", help="output .txt path (single-input only)")
    ap.add_argument("--batch", help="recurse this directory, extract every .pdf")
    ap.add_argument("--skip-existing", action="store_true",
                    help="skip when the .txt already exists")
    ap.add_argument("-q", "--quiet", action="store_true")
    args = ap.parse_args()

    targets = iter_targets(args)
    n_done = n_skipped = n_failed = 0
    for pdf, out in targets:
        if args.skip_existing and out.exists():
            n_skipped += 1
            if not args.quiet:
                print(f"  skip  {pdf}")
            continue
        try:
            pages, nb = extract_one(pdf, out)
            n_done += 1
            if not args.quiet:
                print(f"  ok    {pdf} -> {out}  ({pages}p, {nb} B)")
        except Exception as e:
            n_failed += 1
            print(f"  FAIL  {pdf}: {e}", file=sys.stderr)

    if not args.quiet:
        print(f"done: {n_done} extracted, {n_skipped} skipped, {n_failed} failed")
    if n_failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
