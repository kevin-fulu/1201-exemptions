# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Contents

This repository is a **document archive**, not a software project. It contains primary-source PDFs from every triennial U.S. Copyright Office DMCA §1201 anticircumvention rulemaking proceeding from 2000 through 2024.

Top-level directory: `1201/`. Inside it:

- `1201/Final Rules/` — the Librarian of Congress's final rule for each cycle (the legally operative exemptions).
- `1201/Reg Recommendation/` — the Register of Copyrights' Recommendation that preceded each Final Rule (the underlying analysis and reasoning). The 2018 file is the *Acting* Register's Recommendation.
- `1201/first-round-comments/` — first-round NPRM comments filed in support of proposed exemptions for the 2015, 2018, 2021, and 2024 cycles (313 PDFs total, organized as `2015/`, `2018/`, `2021/`, `2024/`, each with a `manifest.csv`). The 2015 cycle calls these "Initial Comments"; later cycles call them "Round 1 Comments." Petitions, Round 2 (opposition), and Round 3 (reply) comments are **not** included. See `1201/first-round-comments/README.md` for filename conventions, the manifest schema, and known quirks.
- `1201/INDEX.md` — cycle-by-cycle map of the codified `§ 201.40` exemption classes, with the page in each Final Rule where the codified text begins. **Read this first** when answering a question about which classes existed in which cycle.
- `1201/Claude Reports/` — long-form research findings produced by Claude in prior sessions (one Markdown file per topic). **Check here before re-researching a question** — the answer may already be written up with citations. See "Writing research reports" below.

For every `.pdf` in `Final Rules/`, `Reg Recommendation/`, and `first-round-comments/` there is a sibling `.txt` with the same basename, extracted via `pypdf`. The `.txt` files preserve `[PAGE N]` markers so search results can be cited back to the original PDF page.

About 20 PDFs in `first-round-comments/2018/` (mostly `Class07_*` and `Class08_*`) extract to near-empty `.txt` files containing only `[PAGE N]` markers — those source PDFs are **image-only scans without an embedded text layer**, not extraction bugs. To search their content, the PDFs themselves need to be OCR'd (no OCR layer is in the archive).

## Working In This Repository

- **Prefer `grep` on `.txt` files** for any keyword or regex search — re-parsing PDFs is slow and produces garbage characters. Example: `grep -rn "jailbreak" "1201/Final Rules"`.
- **Only `Read` the PDFs directly** when you need to see formatting, tables, or signatures — e.g., to verify the Librarian's signature page. PDFs all exceed 10 pages, so unbounded `Read` will fail; pass the `pages` parameter. The 2015 Recommendation (~407 pp.) and 2018 Recommendation (~342 pp.) are the densest.
- **The `[PAGE N]` markers in the `.txt` files match PDF page numbers**, not the printed Federal Register pagination. Cite as "PDF p. N" or "`.txt` page marker N" to avoid ambiguity.
- **The archive itself has no build step** — the PDFs/`.txt` files are static. The one piece of code is the exemption-diagram data layer (see the next section); its build is `make build`.
- If you ever need to re-extract a PDF, the system has Python 3 with `pypdf` 6.10.2 (no poppler). The original extraction script wrapped mid-word hyphens and collapsed triple blank lines — match that if you rebuild.

## The exemption diagrams & data layer

`diagram.html` (exemption × cycle matrix) and `diagram-repair.html` (repair classes by product) are interactive views served via GitHub Pages. **They are generated — do not hand-edit the HTML data or the `.js` files.** `AGENTS.md` has step-by-step recipes for changing the data; `analysis/DATA-LAYER-PROPOSAL.md` has the design rationale and full schemas. Three layers:

- **Layer 1 — facts.** `analysis/cycle-YYYY.json` / `cycle-YYYY-denials.json` — per-cycle codified classes and denials, each cited to a PDF page + verbatim quote. Every record has a `class_id` (`"2018:b10"`, `"2024:d1"`). `analysis/comments.json` is the normalized first-round-comment table.
- **Layer 2 — lineage.** `analysis/lineages.json` — cross-cycle threads. Each lineage's `members[]` reference Layer-1 `class_id`s; the full per-cycle status grid is *derived*, not stored.
- **Layer 3 — views.** `analysis/views/diagram.json` and `diagram-repair.json` — per-view ordering and presentation.

**To change a diagram, edit the data layer, then rebuild:**

- `make build` — validate → derive → render → write `diagram-data.js`, `diagram-repair-data.js`, and `analysis/derived/*`.
- `make check` — same, but verify only (no write).
- `make comments` — regenerate `analysis/comments.json` (only when a `manifest.csv` changes).

The build is `analysis/build/*.mjs` (Node, stdlib only — no `npm install`). `analysis/build/bootstrap.mjs` is the one-time migration that created the data layer from the old hand-built files; it is kept for provenance and is not part of `make build`.

`analysis/derived/exemptions-master.json` is a **generated** consolidation. The hand-built `analysis/exemptions-master.json` it replaced is retired (kept only because the diagram footers still cite that path — repoint them to `analysis/derived/` next time the HTML is edited).

## Common cross-cycle questions

- "What does the §201.40 codified text say in cycle X?" → start with `1201/INDEX.md`, then jump to the `Final Rules/YYYY-Final-Rule.txt` at the page noted there.
- "When was exemption X first granted / how has it evolved?" → `grep -n` across all nine `Final Rules/*.txt`, then verify in the Recommendation for the cycle in question.
- "Why did the Register decide X?" → the reasoning lives in `Reg Recommendation/`, not the Final Rule. Recommendations are the analytical record; Final Rules are largely a preamble + the codified `§ 201.40` text.

When citing across cycles, prefer cycle-year references (e.g., "2015 Recommendation at PDF p. 207") over file paths.

## Writing research reports

When you produce a substantive finding (more than a few sentences, with quoted source material and citations), save it to `1201/Claude Reports/` rather than letting it live only in chat history. The next session won't have your conversation, but it will see these files.

- **One topic per file.** If a new question is genuinely a follow-up that refines a prior report, append to that file rather than starting a new one. If it's a distinct topic, write a new file.
- **Filename:** `YYYY-MM-DD__Short-Title-With-Hyphens.md`. The date prefix sorts the directory chronologically; the title should describe the topic specifically enough that a future Claude can tell from the filename whether the file is relevant.
- **Cite by `[PAGE N]` marker.** Every factual claim about what the Final Rule or Recommendation says should cite the file and PDF page. Verify quotes by grepping the `.txt` extraction before including them — do not rely on memory or an earlier subagent's report.
- **Distinguish what you analyzed from what you didn't.** This archive contains the §1201 rulemaking record only. It does not contain court opinions, the Copyright Act text, or state law. If a question touches material outside the archive, say so plainly rather than answering from training data.
- **Not legal advice.** Reports document what the rulemaking record says; they are not legal conclusions.
