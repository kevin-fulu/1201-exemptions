# AGENTS.md

Guidance for AI agents (Claude Code, Claude on the API, or any other) working in this repository. `CLAUDE.md` is a symlink to this file — there is only one source of guidance.

For a human-readable description of what this repo is, see `README.md`. This file is operational: where things live, how to work efficiently, what's been learned about §1201 that you don't need to re-derive.

---

## What this project is

A document archive of every U.S. Copyright Office DMCA §1201 anticircumvention rulemaking cycle (2000, 2003, 2006, 2010, 2012, 2015, 2018, 2021, 2024), plus a cross-cycle analytical synthesis (`analysis/`) and a self-contained HTML matrix (`diagram.html`) showing every exemption that's been granted, denied, expanded, narrowed, or dropped.

**There is no build, lint, or test step. There is no code.** Just PDFs, their pypdf text extractions, JSON consolidations, and a growing layer of Markdown reports.

The git repository may have no commits — `git log` will fail until the first commit lands.

---

## Repository layout

```
1201/                        ← raw archive (primary sources)
  Final Rules/               ← Librarian of Congress final rules (9 PDFs + .txt)
  Reg Recommendation/        ← Register's recommendations (9 PDFs + .txt)
  first-round-comments/      ← NPRM comments — 2015, 2018, 2021, 2024 only
    YYYY/                    ← one subdir per cycle, each with a manifest.csv
    README.md                ← filename conventions, manifest schema, quirks
  INDEX.md                   ← cycle-by-cycle map of codified § 201.40(b) classes
  Claude Reports/            ← long-form prior research (one MD file per topic)

analysis/                    ← cross-cycle synthesis (built on top of the archive)
  inventory.md
  cycle-YYYY.json            ← per-cycle granted classes (9 files)
  cycle-YYYY-denials.json    ← per-cycle denied proposals (9 files)
  exemptions-master.json     ← consolidated, substance-matched across cycles
  audit-existing.md          ← independent audit of cycle-{2000..2015}.json
  verification-report.md     ← independent verification of master file claims
  verification-denials.md    ← independent verification of denial assignments

diagram.html                 ← 51-row × 9-cycle color-coded visual reference
README.md                    ← human-facing description
AGENTS.md                    ← this file
CLAUDE.md                    ← symlink to AGENTS.md
```

### About `1201/` (the raw archive)

- **`1201/Final Rules/`** — the Librarian of Congress's final rule for each cycle. The legally operative exemptions. Every grant ultimately rests on the codified `§ 201.40(b)` text in these documents.
- **`1201/Reg Recommendation/`** — the Register of Copyrights' Recommendation that preceded each Final Rule. The analytical record. The 2018 file is the *Acting* Register's Recommendation (Karyn A. Temple) — cite that filename accurately.
- **`1201/first-round-comments/`** — first-round NPRM comments filed in support of proposed exemptions for the 2015, 2018, 2021, and 2024 cycles only (313 PDFs total, organized as `2015/`, `2018/`, `2021/`, `2024/`, each with a `manifest.csv`). The 2015 cycle calls these "Initial Comments"; later cycles call them "Round 1 Comments." **Petitions, Round 2 (opposition), and Round 3 (reply) comments are not included.** See `1201/first-round-comments/README.md` for filename conventions, the manifest schema, and known quirks.
- **`1201/INDEX.md`** — cycle-by-cycle map of the codified `§ 201.40` exemption classes with the PDF page where the codified text begins. **Read this first** when answering "what was granted in cycle X." The labels are short navigation tags, not authoritative; verify against the codified text.
- **`1201/Claude Reports/`** — long-form research findings from prior sessions (one Markdown file per topic). **Check here before re-researching a question** — the answer may already be written up with citations. See "Writing research reports" below.

For every `.pdf` in `Final Rules/`, `Reg Recommendation/`, and `first-round-comments/` there is a sibling `.txt` with the same basename, extracted via `pypdf`. The `.txt` files preserve `[PAGE N]` markers so search results can be cited back to the original PDF page.

About 20 PDFs in `first-round-comments/2018/` (mostly `Class07_*` and `Class08_*`) extract to near-empty `.txt` files containing only `[PAGE N]` markers — those source PDFs are **image-only scans without an embedded text layer**, not extraction bugs. To search their content, the PDFs themselves need to be OCR'd (no OCR layer is in the archive).

---

## Working in this repository

- **Prefer `grep` on `.txt` files** for any keyword or regex search — re-parsing PDFs is slow and produces garbage characters. Example: `grep -rn "jailbreak" "1201/Final Rules"`.
- **Only `Read` the PDFs directly** when you need formatting, tables, or signatures — e.g., to verify a signature page. PDFs all exceed 10 pages, so unbounded `Read` will fail; pass the `pages` parameter. The 2015 Recommendation (~407 pp.) and 2018 Recommendation (~342 pp.) are the densest — grep first, read only the relevant span.
- **The `[PAGE N]` markers in the `.txt` files match PDF page numbers**, not the printed Federal Register pagination. Cite as "PDF p. N" or "`.txt` page marker N" to avoid ambiguity.
- **When citing across cycles, prefer cycle-year references** (e.g., "2015 Recommendation at PDF p. 207") over file paths.
- **If you ever need to re-extract a PDF**, the system has Python 3 with `pypdf` 6.10.2 (no poppler). The original extraction script wrapped mid-word hyphens and collapsed triple blank lines — match that if you rebuild.
- **Sub-agents may hit content filters on §1201 topics.** Several extraction subagents during this archive's build were blocked by the API content filter — apparently certain language patterns (jailbreaking, circumvention, security research) in long verbose outputs trigger it. Workarounds: (a) do the extraction in the main session with the codified text in context; (b) instruct subagents to deliver findings inline in their final message if Write is denied, so the parent agent can save them; (c) keep outputs terse. Verification subagents asking for short confirmations (rather than verbose rewrites) didn't hit the filter.

### Common cross-cycle questions

- **"What does the § 201.40 codified text say in cycle X?"** → start with `1201/INDEX.md`, then jump to `Final Rules/YYYY-Final-Rule.txt` at the page noted there.
- **"When was exemption X first granted / how has it evolved?"** → consult `analysis/exemptions-master.json` (find the topic by `id`, read `per_cycle_status` and `evolution_notes`); or open `diagram.html` and scan the row. Verify against the Final Rule for any specific cycle.
- **"Why did the Register decide X?"** → the reasoning lives in `Reg Recommendation/`, not the Final Rule. Recommendations are the analytical record; Final Rules are largely a preamble + the codified `§ 201.40` text.
- **"Was topic Y ever denied?"** → consult `analysis/exemptions-master.json` (denied-only entries have `id` prefix `denial-`; granted entries may carry `partial_denials` arrays); for per-cycle detail, see `analysis/cycle-YYYY-denials.json`.

---

## How to use the `analysis/` files

### `exemptions-master.json` (start here for cross-cycle questions)

The consolidated source of truth for "what happened to topic X across cycles."

- `cycles_in_order` — `[2000, 2003, 2006, 2010, 2012, 2015, 2018, 2021, 2024]`
- `status_legend` — definitions of every per-cycle status value (`new`, `renewed_unchanged`, `renewed_expanded`, `renewed_narrowed`, `not_renewed`, `not_yet_proposed`, `petitioned_denied`, `petitioned_denied_procedural`, `petitioned_denied_de_minimis`, `not_proposed`)
- `denial_reason_categories` — definitions for `reason_category`
- `categories_in_order` — the 13 substantive categories used for grouping
- `exemptions[]` — 51 entries. 30 are granted exemptions (id like `smartphone-jailbreaking`); 21 are standalone-denied topics (id prefix `denial-`)

Each exemption entry has: `id`, `name`, `category`, `summary`, `first_granted` (year or `null`), `per_cycle_status` (keyed by cycle year, with optional `class_number`, `notes`, `reason_quote`, `source_pdf_pages`, `partial_denials[]`), and `evolution_notes`.

**Matching across cycles is by substance, not by class number.** `§ 201.40(b)(N)` is renumbered every cycle. Use the `id` (stable across cycles) to find a topic; use `class_number` only to cite the codified rule for a specific year.

### `cycle-YYYY.json` (use for per-cycle granted-class detail)

One per cycle. Lists every codified `§ 201.40(b)(N)` class with verbatim quote from the Final Rule, permitted uses, exclusions, definitions, renewal status, and `[PAGE N]` citations. The 2018-2024 entries also carry `expansion_notes` documenting what changed from the prior cycle.

### `cycle-YYYY-denials.json` (use for per-cycle denied-class detail)

One per cycle. Lists every proposed class the Register did **not** recommend. Each entry has `proposed_class_number` (the cycle's internal numbering — see "Numbering conventions" below), `topic_label`, `reason_category`, short verbatim `reason_quote`, and `source_pdf_pages`.

### `audit-existing.md`, `verification-report.md`, `verification-denials.md`

Three independent-subagent verification passes ran during construction. All substantive claims in `exemptions-master.json` were spot-checked against the Final Rule .txt files (35/36, 13/13, and 12/12 confirmed respectively). If you change the master file, run a new verification pass.

### `diagram.html`

Self-contained HTML, no external assets. 51 rows × 9 cycles. Granted exemptions in regular text; denied petitions in italic/muted. Red corner triangle = partial denial within an otherwise-granted cycle. Below the matrix is a per-exemption details section (`<details>` blocks, expandable, also searchable with ⌘F / Ctrl-F and printable). Includes a print stylesheet with symbol fallbacks (✓ ● ▲ ▼ ✗ — ◆ ◈ ◇ ·) for black-and-white printing.

---

## Substantive lessons about the §1201 process

Orientation, not gospel — verify against the source documents.

### Document hierarchy & authority

1. **Only the Final Rule grants exemptions.** Recommendations are advisory; comments are proposals. The codified `§ 201.40(b)` text in the Final Rule is the source of truth.
2. The **Register of Copyrights** writes the Recommendation; the **Librarian of Congress** issues the Final Rule. They almost always agree, but not always — see "2010 Librarian override" below.
3. **2018 was the Acting Register** (Karyn A. Temple). Cite accordingly: `2018_Section_1201_Acting_Registers_Recommendation`, not "Register's Recommendation."

### Cycle structure

4. The **NPRM** groups petitions into numbered "Proposed Classes." The Final Rule preamble walks through each Proposed Class, says whether it was recommended, and then codifies the granted ones into `§ 201.40(b)(N)` paragraphs. **The codified numbering is NOT the same as the Proposed Class numbering.** A single Proposed Class can be split into multiple codified subclasses; multiple Proposed Classes can be consolidated into one codified class.
5. **Streamlined renewal exists from 2018 onward.** Before 2018, every grant required a full record each cycle. 2018+, the Register fast-tracks renewal of unopposed prior-cycle grants. The Final Rule's preamble has a distinct "Renewal Recommendations" section (Section A) and a "New or Expanded Designations" section (Section B), with denied proposals in a "Classes Considered but Not Recommended" section (often Section C, but section letters vary by cycle).

### Cross-cycle matching is hard but necessary

6. **Class numbers are renumbered every cycle.** Substantively identical exemptions get different `(b)(N)` numbers each cycle. Match by substance (topic + permitted uses + key conditions), not by number.
7. The codified text often gets restructured between cycles even when the substantive scope doesn't change — boilerplate language is normalized, definitions get moved between subsections, etc. Compare the substantive permitted-uses and exclusions, not the prose.
8. **`INDEX.md` is a navigation aid, not a primary source.** It has been wrong at least once (a mislabel for 2015 (b)(9) was caught and fixed during this build). Always verify class labels against the codified text.

### Threshold doctrine: what petitioners get wrong

9. `§ 1201(a)(1)(C)` requires defining a "particular class of copyrighted works" by **qualities of the work itself**, not by use or user. Petitions framed as "all fair use" or "all works for noninfringing uses" or "all works for educators" have been denied **every time** they've been tried (2000, 2003, 2006, 2012). This is the single most-rejected pattern in §1201 history.
10. **§1201 only applies to copyrighted works.** Petitions to circumvent TPMs on public-domain works are denied as unnecessary (the underlying prohibition doesn't apply). Petitions to access non-copyrightable material (e.g., factual aircraft data, 2018 Class 11) are denied as outside §1201's scope.
11. **Existing statutory exemptions narrow the rulemaking's scope.** §1201(f) covers reverse engineering for interoperability; §1201(g) covers encryption research; §1201(j) covers security testing. Petitions to broaden these have been repeatedly denied because the Register holds the statutory exemption adequate.

### Recurring failed proposals

12. **Space-shifting / format-shifting**: petitioned and denied in 8 of 9 cycles (2000-2021). Register's position is stable — without fair-use precedent recognizing space-shifting as noninfringing, §1201 won't create one.
13. **DVD region coding / Linux DVD playback**: denied 2000-2010, then stopped being petitioned (technical solutions emerged).
14. **Broadcast flag bypass**: denied 2003-2010 (the FCC mandate kept being struck down).
15. **Backup copies of optical media**: denied 2003 and 2006.
16. **Video game console jailbreaking**: denied 2012 and 2015; the Register cites correlation with piracy.

### Denial → later grant patterns

17. **Tablet jailbreaking**: denied 2012, granted 2015 (folded into the smartphone class).
18. **General good-faith security research**: a broader 2010 proposal (Halderman, covering sound recordings + AV + non-game literary works) was denied; only a narrow video-game-PC subset granted that year. The full general class was granted in 2015 with a 3-device-class restriction and then progressively broadened (2018: any device + computers/networks with auth; 2021: CFAA-non-violation precondition removed).
19. **DRM-authentication-server shutdown**: a broad cross-work proposal denied 2010; a narrower video-game-only version granted 2015.

### Two unusual mechanics worth knowing

20. **2010 Librarian-Register split** — the Librarian of Congress GRANTED the literary-works-accessibility renewal in 2010 even though the Register recommended denial. The only known instance of such an override in this archive. The codified rule controls, so the diagram shows the class as granted that year, but readers should know the Register-Librarian distinction can matter.
21. **Partial denials within otherwise-granted cycles** are common. A Proposed Class can be granted with most of its requested scope but with a specific sub-scope rejected. The diagram marks these with a red corner triangle. Examples: 2006 dongle-class expansion (procedurally untimely); 2012 fictional-filmmaker portion of motion-pictures-clips; 2024 OTW rewrite and MOOC for-profit expansions; 2024 software-preservation single-user-removal; 2024 broader commercial/industrial repair.

### Numbering conventions across cycles (a quirky catalog)

Each Final Rule's preamble uses its own scheme for labeling denied proposals. When citing a denial, use the cycle's native designation:

| Cycle | Denial section | Numbering scheme |
|------:|---|---|
| 2000  | Section III.E "Other Exemptions Considered, But Not Recommended" | `E.1` through `E.10` |
| 2003  | Section III.B "Other Exemptions Considered, But Not Recommended" | `Class 1` through `Class 25` |
| 2006  | Section III.B "Other Exemptions Considered, But Not Recommended" | `B.1` through `B.11` (plus 2 sub-proposals in granted sections) |
| 2010  | Section IV "Other Classes Considered, but Not Recommended" | `IV.A` through `IV.E` (some with `.1`/`.2` for sub-proposals) |
| 2012  | Section IV "Classes Considered But Not Recommended" | `Class 1`, `Class 3`, `Class 4`, `Class 10` (plus partial denials in granted classes) |
| 2015  | Section B "Classes Considered but Not Recommended" | `Class 8`, `Class 10`, `Class 18`, `Class 19`, `Class 24` |
| 2018+ | "Classes the Acting Register / Register Did Not Recommend" | `Proposed Class N` |

The diagram visually normalizes denial cells (just shows "denied" / "procedural" / "de minimis"), but the underlying JSON preserves each cycle's native scheme.

---

## Writing research reports

When you produce a substantive finding (more than a few sentences, with quoted source material and citations), save it to `1201/Claude Reports/` rather than letting it live only in chat history. The next session won't have your conversation, but it will see these files.

- **One topic per file.** If a new question is genuinely a follow-up that refines a prior report, append to that file rather than starting a new one. If it's a distinct topic, write a new file.
- **Filename:** `YYYY-MM-DD__Short-Title-With-Hyphens.md`. The date prefix sorts the directory chronologically; the title should describe the topic specifically enough that a future agent can tell from the filename whether the file is relevant.
- **Cite by `[PAGE N]` marker.** Every factual claim about what the Final Rule or Recommendation says should cite the file and PDF page. Verify quotes by grepping the `.txt` extraction before including them — do not rely on memory or an earlier subagent's report.
- **Distinguish what you analyzed from what you didn't.** This archive contains the §1201 rulemaking record only. It does not contain court opinions, the Copyright Act text, or state law. If a question touches material outside the archive, say so plainly rather than answering from training data.
- **Not legal advice.** Reports document what the rulemaking record says; they are not legal conclusions.

---

## Extending the archive when a new cycle ships

When the 2027 cycle's Final Rule lands:

1. Add `Final Rules/2027-Final-Rule.{pdf,txt}` and `Reg Recommendation/2027_Section_1201_Registers_Recommendation.{pdf,txt}` to the archive. Extract the `.txt` to match the existing format (pypdf with mid-word-hyphen wrapping and triple-blank-line collapse).
2. Update `1201/INDEX.md` with the new cycle's codified classes (start with the codified `§ 201.40(b)` text — find the PDF page where it begins, copy the class labels).
3. Extract `analysis/cycle-2027.json` (granted) and `analysis/cycle-2027-denials.json` (denied) following the same schema as the 2024 files.
4. Update `analysis/exemptions-master.json`:
   - Add a `"2027"` entry to every existing exemption's `per_cycle_status`.
   - Add new entries for any genuinely-new topics granted or denied for the first time in 2027.
   - Update `cycles_in_order` to include 2027.
5. Update `diagram.html` to add a 10th column for 2027. Add corresponding `<td>` cells for every row. Update the per-exemption details section. The print stylesheet, symbol fallbacks, and color CSS variables don't need changes.
6. Run an independent verification pass (subagent given only the master file + Final Rule .txt files; ask for confirmation of specific claims).
7. Update `README.md`'s "Last cycle covered" line.

---

## Not legal advice

This archive describes the §1201 rulemaking record. Nothing here is a legal conclusion. The diagram and JSON files are research aids; the codified `§ 201.40(b)` text in the Final Rules is the operative regulation.
