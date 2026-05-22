# Round 1 Comments — Verification Report

Verified on: 2026-05-20
Verifier: independent subagent that did not perform downloads

## Per-cycle summary

| Cycle | Live index links (unique URLs) | Files on disk | Manifest rows | All PDFs valid? | Sha256 matches manifest? | Status |
|------:|-------------------------------:|--------------:|--------------:|:---------------:|:------------------------:|:------:|
| 2015  | 159 | 159 | 159 | YES | YES | PASS |
| 2018  | 64  | 64  | 64  | YES | YES | PASS |
| 2021  | 77  | 77  | 77  | YES | YES | PASS |
| 2024  | 13  | 13  | 13  | YES | YES | PASS |

"Live index links (unique URLs)" excludes three boilerplate footer URLs (`recordation/pilot/faq.pdf`, `recordation/pilot/rules.pdf`, `registration/docs/processing-times-faqs.pdf`) that appear on every copyright.gov page and are not comment documents.

## 2015

- Live page (https://www.copyright.gov/1201/2015/comments-020615/) yielded 161 comment-document anchor hits, of which 159 are unique URLs. The two duplicate links on the page are:
  - `EFF_merged_shortform_comments_class01.pdf` (appears twice)
  - `InitialComments_ShortForm_Garver_Class17.pdf` (appears twice)
  This matches the task brief's note that the 2015 page reportedly contains a few duplicate entries. Counting unique URLs gives 159.
- Files on disk: 159 PDFs; manifest rows: 159. Set of source URLs in manifest matches set of unique URLs on the live page exactly (no extras, none missing).
- All 159 files begin with bytes `%PDF`. `file(1)` spot-checks confirm valid PDFs (versions 1.4–1.7). No zero-byte files. Size range 7,250 – 3,870,029 bytes; total ~94.8 MB.
- Sha256: every file's sha256 (computed by `hashlib`) matches the manifest's `sha256` column. An external `shasum -a 256` spot-check on 5 random rows also matched. All 159 `http_status` values are `200`.
- Two sha256 collisions exist, but they are **legitimate content duplication**, not download bugs. The Copyright Office hosts the same PDF at distinct URLs under multiple class slots:
  - `dc13a8b9…` — New Media Rights filed the identical PDF under Classes 6, 7, 16, and 17.
  - `dd18b2d4…` — Mike Battilana filed the identical PDF under Classes 23 and 24.
  Each pair/group of files comes from a separately published URL on the live page. The downloader correctly preserved one file per class slot.
- Spot-check (5 random rows): all 5 have `class` and `party` text that matches what the live page shows at the corresponding link, and `local_filename` reflects the correct class number and party.
- Stray non-comment files: only `manifest.csv`. No scratch HTML/JSON.
- Verdict: **PASS**.

## 2018

- Live page (https://www.copyright.gov/1201/2018/comments-121817/) yielded 64 comment-document links, all unique. No duplicates on the live page.
- Files on disk: 64 PDFs; manifest rows: 64. URL sets match perfectly.
- All 64 files begin with `%PDF`. No zero-byte files. Size range 32,472 – 5,134,247 bytes; total ~26.7 MB.
- Sha256: every file matches the manifest. External `shasum` spot-check (5 random rows) all matched. No sha256 collisions within the cycle. All 64 `http_status` values are `200`.
- Spot-check (5 random rows): class and party fields match the live page; filenames are sensible.
- Stray non-comment files: only `manifest.csv`.
- Verdict: **PASS**.

## 2021

- Live page (https://www.copyright.gov/1201/2021/comments/) yielded 77 comment-document links, all unique. No duplicates on the live page.
- Files on disk: 77 PDFs; manifest rows: 77. URL sets match perfectly.
- All 77 files begin with `%PDF`. No zero-byte files. Size range 13,088 – 7,485,927 bytes; total ~49.9 MB.
- Sha256: every file matches the manifest. External `shasum` spot-check (5 random rows) all matched. No sha256 collisions within the cycle. All 77 `http_status` values are `200`.
- Spot-check (5 random rows): class and party fields match the live page; filenames are sensible.
- **Resolution of the "76 + 7 = 77" inconsistency:** The live page lists Transtate Equipment as **one main comment** plus **seven separate exhibit PDFs**, each as its own anchor on the page (`Transtate Ex list.pdf`, `Transtate Ex 1-18.pdf`, `Transtate Ex 19-21.pdf`, `Transtate Ex 22.pdf`, `Transtate Ex 23-25.pdf`, `Transtate Ex 26.pdf`, `Transtate Ex 27-29.pdf`). The downloader's "76 + 7 = 77" narrative is arithmetically wrong but the underlying count of 77 files is correct. The accurate breakdown is: 69 non-Transtate comments + 1 Transtate main comment + 7 Transtate exhibit PDFs = 77 total links on the live page. The manifest captures all 8 Transtate items (8 rows tagged with class=12, with `party` distinguishing the main comment from each exhibit). The exhibits are *separate index links*, not extracted from inside a single `<li>`.
- Stray non-comment files: `manifest.csv`, `_index_2021.html` (41,608 B HTML snapshot of the live page), and `_plan.json` (27,219 B JSON). Both leading-underscore files appear to be scratch artifacts from the downloader; presence noted, not modified.
- Verdict: **PASS**.

## 2024

- Live page (https://www.copyright.gov/1201/2024/comments/) yielded 13 comment-document links, all unique. No duplicates on the live page.
- Files on disk: 13 PDFs; manifest rows: 13. URL sets match perfectly (after normalizing percent-encoding — the manifest stored fully percent-encoded URLs, the live page anchors mix unencoded spaces; both decode to the same set).
- All 13 files begin with `%PDF`. No zero-byte files. Size range 15,474 – 4,529,478 bytes; total ~8.0 MB.
- Sha256: every file matches the manifest. External `shasum` spot-check (5 random rows) all matched. No sha256 collisions. All 13 `http_status` values are `200`.
- Spot-check (5 random rows): class and party fields match the live page; filenames are sensible.
- **Confirmation of Class 1 N/A:** The live page's table shows `Class 1: Audiovisual Works – Noncommercial Videos` with commenter field `N/A`. There is no Class 1 anchor on the page. Not a parsing miss — the page truly has no Class 1 comment to download.
- **Confirmation of Class 3a/3b combined PDF:** The live page lists Classes 3(a) and 3(b) jointly with a single commenter (Authors Alliance, AAUP, Library Copyright Alliance) and a single combined PDF (`Class 3a-and-3b-Initial-Comments-Authors-Alliance-Library-Copyright-Alliance-and-Am-A.pdf`). Manifest correctly represents this as one row with `class=Class03a-and-3b`.
- Per-class file distribution: Class02=1, Class03a-and-3b=1, Class04=3, Class05=1, Class06a=1, Class06b=4, Class07=2 → 13 total.
- Stray non-comment files: `manifest.csv` AND `index.html` (30,864 B — not flagged in the task brief, but it's a downloader scratch artifact saved with no leading underscore/dot prefix). Presence noted, not modified.
- Verdict: **PASS**.

## Discrepancies found

- **2015 sha256 duplicates (severity: informational, does not block PASS):** Two groups of files share sha256 because the same party filed identical PDFs under multiple class slots, hosted at separate URLs on the live page. This is faithful reproduction of the live archive, not an error.
- **2021 downloader's self-reported math "76 + 7 = 77" (severity: cosmetic, does not block PASS):** The arithmetic narrative is wrong but the file count (77) is correct. Accurate framing: 69 non-Transtate + 1 Transtate main + 7 Transtate exhibits = 77.
- **2024 has an undocumented scratch file `index.html` (severity: low, does not block PASS):** The task brief mentioned only the 2021 scratch files (`_index_2021.html`, `_plan.json`), but the 2024 directory also contains an `index.html` from the downloader. It is plain HTML, not a PDF, so it cannot be mistaken for a comment. Per instructions, not deleted.
- **2015 live page contains 2 duplicate anchor entries (severity: informational, does not block PASS):** The Copyright Office's page itself lists `EFF_merged_shortform_comments_class01.pdf` and `InitialComments_ShortForm_Garver_Class17.pdf` twice each. Counting unique URLs (159) matches the manifest.

No download corruption, no zero-byte files, no non-PDF content saved as `.pdf`, no missing files, no extra files, no sha256 mismatches against the manifest, and no non-200 HTTP statuses in any of the four cycles.

## Overall verdict

- **2015: PASS** — 159 unique live URLs = 159 files on disk = 159 manifest rows; all PDFs valid; all sha256s match; sha256 content-duplicates are legitimate same-PDF-under-multiple-classes filings.
- **2018: PASS** — 64 = 64 = 64; all PDFs valid; all sha256s match; no anomalies.
- **2021: PASS** — 77 = 77 = 77; all PDFs valid; all sha256s match; the "76+7=77" narrative is wrong arithmetic but the count of 77 is independently correct (69 + 1 Transtate main + 7 Transtate exhibits).
- **2024: PASS** — 13 = 13 = 13; all PDFs valid; all sha256s match; Class 1 N/A and Class 3a/3b combined PDF both confirmed against the live page.

## Post-audit amendment — 2026-05-20

While building the sibling `.txt` extraction layer for this archive, two 2024 PDFs were found to be **truncated downloads** despite the audit above showing them as `%PDF`-headed and sha256-consistent with the manifest:

| File | Original size (this audit) | Re-download size | Cause |
|---|---:|---:|---|
| `2024/Class04_OpenPolicy.pdf` | 15,474 B | 263,182 B | truncated, corrupt `/Pages` |
| `2024/Class07_MEMA.pdf` | 55,087 B | 4,802,294 B | truncated, corrupt `/Pages` |

Both truncated copies started with `%PDF-1.7` and contained internally consistent objects (which is why the audit's "starts with `%PDF`" check passed), but their cross-reference tables were broken; pypdf, pdfminer.six, and pikepdf (qpdf backend) all rejected them. Re-downloading from the same `source_url` produced complete, parseable PDFs ending in `%%EOF`.

**Action taken:** the two files on disk were replaced with the fresh re-downloads, and `2024/manifest.csv` was updated with the new `bytes` and `sha256` values:

- `Class04_OpenPolicy.pdf` → `263182` bytes, sha256 `da245742a9fb368ffc1d85614a7d21050592cedf1f67f32f2cd843a9081e941d`
- `Class07_MEMA.pdf` → `4802294` bytes, sha256 `1d951935538ca94efe96b7610fca13c8918b4e5fb693e828b044ebf7e01b4bae`

The pre-audit table above and the 2024 size range (`15,474 – 4,529,478 bytes`) reflect the *original* truncated snapshot; current on-disk sizes for 2024 now range up to 4,802,294 bytes. The remaining 11 files in the 2024 cycle are unchanged and their sha256s remain as audited.

**Lessons for the verifier:** the audit's `%PDF`-prefix check is necessary but not sufficient — a truncated PDF can still pass it. A stricter check for future verifications would also confirm the file ends with `%%EOF` (or open cleanly under pikepdf/qpdf), which would have caught these two at audit time.
