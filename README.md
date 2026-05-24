# DMCA §1201 Anticircumvention Exemptions — Archive & Cross-Cycle Analysis

A research archive of every U.S. Copyright Office DMCA §1201 anticircumvention rulemaking from 2000 through 2024, plus a cross-cycle analytical synthesis showing which exemption classes have been granted, denied, expanded, narrowed, or dropped across the nine triennial cycles.

## View it online

The diagrams are published on GitHub Pages — open them directly, no download:

- **<https://kevin-fulu.github.io/1201-exemptions/>** — landing page.
- **[Cycle-by-cycle exemption history](https://kevin-fulu.github.io/1201-exemptions/diagram.html)** — the full matrix of every class granted, denied, expanded, narrowed, or dropped across the nine cycles, with a click-to-open per-exemption detail panel.
- **[Repair exemptions by product](https://kevin-fulu.github.io/1201-exemptions/diagram-repair.html)** — diagnosis/maintenance/repair classes (plus owner-data access) remapped from codified §201.40 classes onto product categories.

## What is §1201?

Section 1201 of the Digital Millennium Copyright Act prohibits circumventing technological protection measures ("TPMs") that control access to copyrighted works. Every three years, the U.S. Copyright Office runs a rulemaking proceeding under 17 U.S.C. § 1201(a)(1)(C) to consider exemptions for specific classes of works where the prohibition would adversely affect noninfringing uses. The Register of Copyrights makes recommendations; the Librarian of Congress issues a Final Rule codifying granted exemptions at 37 CFR § 201.40(b).

The exemptions include things you may have heard of: smartphone jailbreaking (granted since 2010), cell phone unlocking (granted since 2006), motorized vehicle repair (granted since 2015), good-faith security research (granted since 2015), and many others. They also include many proposals that have been denied — repeatedly — such as space-shifting, console jailbreaking, and broad "all fair use" petitions.

## What's in this repository

### The diagrams
**`diagram.html`** — a color-coded matrix showing all 51 substantive topics (30 granted, 21 denied-but-notable) across the 9 cycles, with a per-exemption detail panel carrying the full per-cycle evolution narrative. **`diagram-repair.html`** — the repair-relevant classes remapped onto product categories. **`index.html`** is the landing page linking both. The pages render in the browser from a generated JSON data layer under `analysis/` (the diagram is no longer a single self-contained file — see `AGENTS.md` for how to change the data and rebuild); both include a print-friendly stylesheet with black-and-white symbol fallbacks.

### The primary-source archive (`1201/`)

| Folder | Contents |
|---|---|
| `1201/Final Rules/` | The Librarian of Congress's Final Rule for each cycle (9 PDFs). The legally operative exemptions. |
| `1201/Reg Recommendation/` | The Register of Copyrights' Recommendation that preceded each Final Rule (9 PDFs). The analytical record. 2018 is the Acting Register's Recommendation. |
| `1201/first-round-comments/` | Petitioner NPRM comments for 2015, 2018, 2021, and 2024 (313 PDFs total). One subdirectory per cycle with a `manifest.csv`. Pre-2015 cycles used a different intake structure and are not represented here. |
| `1201/INDEX.md` | A cycle-by-cycle map of the codified `§ 201.40(b)` exemption classes, with PDF page numbers and `[NEW]` markers for first appearances. The fastest way to find "what was granted in cycle X." |
| `1201/Claude Reports/` | Long-form topic-specific research files produced in earlier sessions (smart-TV ACR, voice-assistant petitioning strategy, GE water-filter coverage, smart-appliance end-of-support strategy). |

Every PDF in `Final Rules/`, `Reg Recommendation/`, and `first-round-comments/` has a sibling `.txt` extracted with pypdf and preserving `[PAGE N]` markers that match PDF page numbers. Searching is much faster against the `.txt` files than against the PDFs. About 20 of the 2018 first-round comments are image-only scans with no OCR layer — their `.txt` files are nearly empty by design, not by extraction bug.

### The cross-cycle analysis (`analysis/`)

| File | Contents |
|---|---|
| `inventory.md` | Top-level map of the archive's structure and what's missing. |
| `cycle-{2000…2024}.json` | Layer 1 — one per cycle. Every granted `§ 201.40(b)(N)` class with a verbatim quote from the Final Rule, permitted uses, exclusions, definitions, PDF page citations, and a stable `class_id`. |
| `cycle-{2000…2024}-denials.json` | Layer 1 — one per cycle. Every proposed class *not* recommended (or denied procedurally), with the cycle's internal class numbering, reason category, short verbatim quote, and PDF page citations. |
| `comments.json` | Layer 1 — the 313 first-round NPRM comments, normalized from the per-cycle `manifest.csv` files. |
| `lineages.json` | Layer 2 — the consolidated cross-cycle view: 51 threads (30 granted exemptions, 21 denied-but-notable topics), each linking the per-cycle classes that compose it. The source of truth for the diagrams. |
| `views/` | Layer 3 — per-view ordering and presentation for `diagram.html` and `diagram-repair.html`. |
| `derived/` | GENERATED by the build — `status-grid.json` and a flat `exemptions-master.json` consolidation. Do not hand-edit. |
| `build/` | The Node build pipeline (`make build`) that renders the data layer into the diagrams' `.js` data files. |
| `audit-existing.md`, `verification-report.md`, `verification-denials.md` | Independent verification passes run during construction (35/36, 13/13, 12/12 records confirmed). |

The diagrams are generated from this data layer — `make build` turns `lineages.json` + `views/` into the `.js` files the HTML reads. See `AGENTS.md` for how to change the data and rebuild; don't hand-edit the generated `.js` or `derived/` files.

### Documentation

- **`README.md`** — this file. For human readers.
- **`AGENTS.md`** — for AI agents working in this repository. Explains the file structure, what was learned about the §1201 process, and how to extend the archive in future cycles.
- **`CLAUDE.md`** — symlink to `AGENTS.md`.

## How to use this

### Quick questions

- **"Which exemptions were granted in cycle X?"** → `1201/INDEX.md` lists every cycle's codified `§ 201.40(b)` classes with the PDF page where the codified text begins.
- **"When was exemption Y first granted? How has it evolved?"** → Open `diagram.html` and find the row, or look up the topic in `analysis/lineages.json` and read its `members` and `evolution_notes`.
- **"Why was proposal Z denied?"** → Search `analysis/cycle-{YYYY}-denials.json` for the topic, then follow the `source_pdf_pages` citation back to the Final Rule's preamble. The full reasoning lives in that cycle's Register's Recommendation if you need more depth.

### Deeper research

For substantive research, the most efficient pattern is:

1. Start with `analysis/lineages.json` (or the diagram) to orient.
2. Drop into the per-cycle JSON (`analysis/cycle-YYYY.json` or `analysis/cycle-YYYY-denials.json`) for the verbatim codified or denial language.
3. Open the corresponding `.txt` file in `1201/Final Rules/` or `1201/Reg Recommendation/` and grep for the topic. Cite back using the `[PAGE N]` markers (these match PDF page numbers, not Federal Register printed pagination).
4. Read the source PDF directly only when formatting, tables, or signatures matter.

The big Recommendations are long — the 2015 Recommendation is 407 pages, the 2018 Acting Register's Recommendation is 342 — so grep first, read only the relevant span.

## A few things worth knowing

1. **Class numbers are renumbered every cycle.** "Smartphone jailbreaking" is `(b)(2)` in 2010, `(b)(2)` again in 2012, `(b)(4)` in 2015, `(b)(6)` in 2018, `(b)(9)` in 2021 and 2024. Match exemptions across cycles by substance, not by number.

2. **Only the Final Rule is authoritative.** The Register's Recommendation is advisory (almost always followed, but advisory). Comments are proposals. The codified `§ 201.40(b)` text in the Final Rule is the operative regulation.

3. **There is one known instance of the Librarian overriding the Register**: in 2010, the Librarian of Congress granted the literary-works-accessibility renewal even though the Register recommended denial. Noted in the diagram.

4. **Many proposals have been petitioned but never granted.** The diagram highlights the most notable recurring failures — space-shifting (denied in 8 cycles), DVD region coding, broadcast flag, broad "all fair use" exemptions, video game console jailbreaking — and the one-cycle denials of avionics, generative-AI research, livestream recording, and others. The 21 denied-petition rows in the diagram cover the substantively important denials; minor one-off denials are captured in the per-cycle `*-denials.json` files but not given their own diagram row.

5. **The streamlined renewal process exists from 2018 onward.** Before 2018, every grant required a fresh full record each cycle. From 2018, the Register fast-tracks renewal of prior-cycle exemptions unless they are meaningfully opposed.

6. **This archive does not include**: petitions to the Office (the initial filings before the NPRM), Round 2 (opposition) comments, Round 3 (reply) comments, court opinions interpreting §1201, the Copyright Act text, or state-law variations. The archive is the §1201 rulemaking *record* — what the Office considered and what the Librarian published.

## Caveats

- **Not legal advice.** Everything in this repository describes the §1201 rulemaking record; nothing here is a legal conclusion. The codified `§ 201.40(b)` text in the Final Rules is the operative regulation. Consult a lawyer for any actual legal question.
- **Verification is contemporaneous, not continuous.** The verification reports under `analysis/` confirm the master file's claims against the Final Rule text as of the date the reports were generated. If anyone edits the underlying files, run a fresh verification pass.
- **Image-only scans.** A small number of 2018 first-round comments (mostly `Class07_*` and `Class08_*`) are image-only PDFs with no embedded text. They are searchable only by re-OCRing the PDFs.

## Last cycle covered

The most recent cycle in this archive is the **ninth triennial proceeding (2024)**, with the Final Rule effective October 28, 2024. The next cycle's NPRM is expected in 2026, with a Final Rule typically issued in late 2027.

## License & attribution

The U.S. Copyright Office publications in `1201/Final Rules/` and `1201/Reg Recommendation/` are works of the federal government and are in the public domain. The first-round NPRM comments under `1201/first-round-comments/` are public-record filings; consult the original commenters for any reuse questions. The cross-cycle synthesis in `analysis/` and the diagram are derivative research products documenting what the public record contains.
