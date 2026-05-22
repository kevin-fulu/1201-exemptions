# First-Round NPRM Comments — DMCA §1201 Rulemakings

Archive of the **first-round substantive comments** filed in support of proposed exemptions during the §1201 triennial rulemakings from the 2015 cycle (6th triennial) through the 2024 cycle (9th triennial). These are the comments filed after the Notice of Proposed Rulemaking (NPRM) of each cycle — they post-date the petitions and pre-date Round 2 (opposition) and Round 3 (reply) comments.

The 2015 cycle uses the term **"Initial Comments"** for what later cycles call **"Round 1 Comments"**; both refer to the same first round of the post-NPRM phased comment structure that the Office introduced in the 2015 rulemaking (see `1201/Final Rules/2018-Final-Rule.txt` line 568 noting the structure was "introduced in the last proceeding").

## Layout

```
first-round-comments/
├── 2015/                  # 6th triennial — "Initial Comments", due Feb 6, 2015
│   ├── ClassNN_Party.pdf  (159 files)
│   └── manifest.csv
├── 2018/                  # 7th triennial — "Round 1 Comments", due Dec 18, 2017
│   ├── ClassNN_Party.pdf  (64 files)
│   └── manifest.csv
├── 2021/                  # 8th triennial — "Round 1 Comments", due Dec 14, 2020
│   ├── ClassNN_Party.pdf  (77 files)
│   └── manifest.csv
├── 2024/                  # 9th triennial — "Round 1 Comments", due Dec 22, 2023
│   ├── ClassNN_Party.pdf  (13 files)
│   └── manifest.csv
├── README.md              # this file
└── VERIFICATION_REPORT.md # independent audit report (all four cycles PASS)
```

**Total: 313 PDF files (~179 MB).**

## Source pages

- 2015: https://www.copyright.gov/1201/2015/comments-020615/
- 2018: https://www.copyright.gov/1201/2018/comments-121817/
- 2021: https://www.copyright.gov/1201/2021/comments/
- 2024: https://www.copyright.gov/1201/2024/comments/

## Filename convention

`ClassNN_PartyName.pdf` — two-digit zero-padded class number followed by an underscore and a sanitized party name (alphanumerics + hyphens; spaces → hyphens; apostrophes/commas/periods dropped; `&` → `and`). Examples:

- `Class01_Electronic-Frontier-Foundation.pdf`
- `Class10_Center-for-Democracy-and-Technology.pdf`
- `General_Public-Knowledge.pdf` — non-class general comments (2015 only)

Disambiguation:

- Multiple filings by the same party in the same class → `_2`, `_3` suffix.
- Multiple commenters labeled "Anonymous" → `Class10_Anonymous.pdf`, `Class10_Anonymous-2.pdf`, etc.
- 2024 Class 3 was filed jointly under sub-classes 3(a) and 3(b) by a single coalition with a single PDF → `Class03a-and-3b_...pdf`.
- 2021 Class 12 Transtate filing includes seven separately-linked exhibit PDFs → `Class12_Transtate_Ex-list.pdf`, `Class12_Transtate_Exs-1-18.pdf`, etc.

## manifest.csv format

Every cycle directory contains a `manifest.csv` with columns:

| Column | Meaning |
|---|---|
| `class` | The class label as displayed on the live index page (format varies by cycle — see below) |
| `party` | Commenter / party name as displayed on the index page (verbatim) |
| `source_url` | Absolute URL from which the file was downloaded |
| `local_filename` | Filename within the cycle directory |
| `http_status` | HTTP response status at download time (200 for every row in this archive) |
| `bytes` | File size in bytes |
| `sha256` | SHA-256 hex digest of the file |

Class-column format varies by cycle (the manifest preserves whatever the live page displayed):

- **2015**: full class title (e.g. `"Proposed Class 1: Audiovisual works – educational uses – colleges and universities"`) or `"General Comments"`
- **2018**: full class title (e.g. `"Class 1: Audiovisual works – criticism and comment"`)
- **2021**: bare number (e.g. `1`, `12`)
- **2024**: compact identifier (e.g. `Class02`, `Class03a-and-3b`)

If you need the class number across all four cycles uniformly, the `local_filename`'s `ClassNN_` prefix is the consistent place to read it.

## Known quirks (documented during verification)

These are faithful reproductions of the live archive, not errors:

- **2015 — duplicate anchors on source page.** The Copyright Office's 2015 index lists `EFF_merged_shortform_comments_class01.pdf` and `InitialComments_ShortForm_Garver_Class17.pdf` each twice. The archive de-duplicates to one file per unique URL.
- **2015 — content-duplicate filings.** New Media Rights filed the identical PDF under Classes 6, 7, 16, and 17 (different URLs, same sha256). Mike Battilana filed identical PDFs under Classes 23 and 24. Each is preserved as a separate file per class slot.
- **2024 — Class 1 absent.** The 2024 page lists Class 1 (Audiovisual Works – Noncommercial Videos) with commenter "N/A" — no first-round comment was filed for that class.
- **2024 — Class 3a/3b combined PDF.** One coalition (Authors Alliance, AAUP, Library Copyright Alliance) filed a single PDF jointly covering proposed sub-classes 3(a) and 3(b).
- **2021 Class 12 — Transtate exhibits.** Transtate's filing is one main comment plus seven separately-linked exhibit PDFs; each is its own row in the manifest.

## Scope boundaries — what is NOT here

- **Petitions** (the brief one-page proposals filed under the NPRM-preceding NOI). Not collected.
- **Round 2 / Opposition Comments.** Not collected.
- **Round 3 / Reply Comments.** Not collected.
- **Hearing transcripts, post-hearing letters, ex parte materials.** Not collected.
- **Cycles prior to 2015 (2000, 2003, 2006, 2010, 2012).** Those cycles used a different comment structure (full proposal at intake, then comments-and-replies); they are out of scope for this Round-1 archive.

For final rules and the Registers' Recommendations across all nine cycles (2000–2024), see `1201/Final Rules/` and `1201/Reg Recommendation/`.

## Verification

`VERIFICATION_REPORT.md` documents an independent audit performed by a subagent that did not perform any downloads. All four cycles PASS: live link counts equal file counts equal manifest row counts; every PDF starts with `%PDF`; every recorded sha256 matches the on-disk file; every HTTP status is 200.
