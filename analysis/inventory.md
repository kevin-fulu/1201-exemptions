# Phase 1 — Inventory of `1201/`

Snapshot of what is present (and what is not) under `1201/`, organized by triennial rulemaking cycle. Used as the source list for Phase 2 extraction.

## Top-level layout

`1201/` is **not** organized one-folder-per-cycle. It is organized by document type, with cycle years encoded in filenames:

- `1201/Final Rules/` — one PDF + `.txt` pair per cycle. **Authoritative source** for granted exemptions.
- `1201/Reg Recommendation/` — one Register's (or Acting Register's, 2018) Recommendation per cycle. Context only — advisory.
- `1201/first-round-comments/` — petitioner NPRM comments organized in per-cycle subdirs `2015/`, `2018/`, `2021/`, `2024/` (with `manifest.csv` each, plus a `README.md` and `VERIFICATION_REPORT.md`). Comments only — proposals, not grants.
- `1201/Policy Studies/` — the Register's two standalone 2016–17 policy studies (separate from the triennial rulemakings): `Section-1201-of-Title-17-2017/` and `Software-Enabled-Consumer-Products-2016/`. Each holds the Full Report (`.pdf` + `.txt`), the Federal Register notices, public-roundtable transcripts and agendas, and a `Comments/` directory with every regulations.gov submission from the corresponding docket. Each has a `README.md`. Policy recommendations to Congress, not §1201 rulemaking outputs.
- `1201/Proposed Legislation/` — forward-looking draft bills (currently the *Freedom To Fix Act* — a §1201 amendment adding a permanent exemption for diagnosis / maintenance / cybersecurity research / repair). Not part of the rulemaking record; included here so the archive can track proposed-legislation iterations.
- `1201/INDEX.md` — cycle-by-cycle navigation map of codified `§ 201.40` classes (pre-built navigation aid; not authoritative for permitted-uses/exclusions text).
- `1201/Claude Reports/` — prior research outputs.

## Cycles present (9 total)

For each cycle: Final Rule and Register's Recommendation are both present as PDF + `.txt`. `[PAGE N]` markers in the `.txt` files align with PDF page numbers (not Federal Register printed pagination).

| Cycle | Final Rule (`Final Rules/`) | Recommendation (`Reg Recommendation/`) | First-round comments? |
|------:|---|---|---|
| 2000 | `2000-Final-Rule.{pdf,txt}` (19 pp.) | `2000_Section_1201_Registers_Recommendation.{pdf,txt}` (20 pp.) | none archived |
| 2003 | `2003-Final-Rule.{pdf,txt}` (8 pp.)  | `2003_Section_1201_Registers_Recommendation.{pdf,txt}` (198 pp.) | none archived |
| 2006 | `2006-Final-Rule.{pdf,txt}` (9 pp.)  | `2006_Section_1201_Registers_Recommendation.{pdf,txt}` (88 pp.) | none archived |
| 2010 | `2010-Final-Rule.{pdf,txt}` (15 pp.) | `2010_Section_1201_Registers_Recommendation.{pdf,txt}` (262 pp.) | none archived |
| 2012 | `2012-Final-Rule.{pdf,txt}` (20 pp.) | `2012_Section_1201_Registers_Recommendation.{pdf,txt}` (169 pp.) | none archived |
| 2015 | `2015-Final-Rule.{pdf,txt}` (21 pp.) | `2015_Section_1201_Registers_Recommendation.{pdf,txt}` (407 pp.) | `first-round-comments/2015/` (≈159 PDFs + .txt pairs) |
| 2018 | `2018-Final-Rule.{pdf,txt}` (22 pp.) | `2018_Section_1201_Acting_Registers_Recommendation.{pdf,txt}` (342 pp.) — **Acting** Register | `first-round-comments/2018/` (≈64 PDFs + .txt pairs) |
| 2021 | `2021-Final-Rule.{pdf,txt}` (15 pp.) | `2021_Section_1201_Registers_Recommendation.{pdf,txt}` (356 pp.) | `first-round-comments/2021/` (≈77 PDFs + .txt pairs) |
| 2024 | `2024-Final-Rule.{pdf,txt}` (14 pp.) | `2024_Section_1201_Registers_Recommendation.{pdf,txt}` (239 pp.) | `first-round-comments/2024/` (≈13 PDFs + .txt pairs) |

Per-cycle PDF page counts and the PDF page where codified `§ 201.40` text begins are tabulated in `1201/INDEX.md` and are reproduced in the Phase 2 subagent prompts.

## What is missing / ambiguous

1. **No first-round comments for pre-2015 cycles** (2000, 2003, 2006, 2010, 2012). Per `1201/INDEX.md`, this is intentional — those cycles used a different intake structure and are out of archive scope. Not a blocker; the Final Rule alone establishes what was granted.
2. **No petition documents, Round 2 (opposition), or Round 3 (reply) comments** for any cycle. The archive contains only first-round NPRM comments (for the four most recent cycles). Per task domain note #1, this does not impair the inventory of grants — only the Final Rule is authoritative.
3. **Some first-round comment `.txt` files are near-empty** (≈20 PDFs in `2018/`, mostly Class07/Class08, are image-only scans without OCR). Not relevant to Phase 2 since Phase 2 reads Final Rules, not comments. A smaller number of older Policy-Studies comment PDFs (and the Grassley-Leahy request letter) are similarly image-only.
4. **2018 is "Acting Register's" Recommendation** rather than the Register's — flagged for citation accuracy. Substantively the same role (advisory to the Librarian).
5. **No streamlined "renewal" documents** are present as separate artifacts. Since 2018, renewed exemptions are addressed inside the same Final Rule (and Recommendation) as the new petitions, so the cycle Final Rule remains the single source of truth.

## Phase 2 plan

Spawn one subagent per cycle (9 total) in parallel. Each subagent:
- Reads **only** its cycle's Final Rule `.txt` (PDFs only if formatting/tables matter — they don't, since codified `§ 201.40` is plain text).
- May consult its cycle's Recommendation `.txt` for context on what a class means, but every claim about what was *granted* must trace to the Final Rule.
- Does **not** consult `1201/INDEX.md` (which is a navigation aid, not a primary source) for permitted_uses or exclusions — only to confirm starting PDF page.
- Writes `analysis/cycle-YYYY.json` with one record per granted class.

Cycles 2000–2012 will have no `first-round-comments/` cross-reference available; subagents are told this explicitly.
