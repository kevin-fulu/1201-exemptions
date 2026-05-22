# AGENTS.md — maintaining the §1201 exemption diagrams

This file explains how to **change the data behind `diagram.html` and
`diagram-repair.html`**. For archive-wide guidance (the PDF corpus, research
reports, search conventions) see `CLAUDE.md`. For the design rationale and full
schemas see `analysis/DATA-LAYER-PROPOSAL.md`.

## The golden rule

**Never hand-edit a generated file.** Edit a *source* file, then run `make build`.

| Generated — do NOT edit | Source — edit these |
|---|---|
| `diagram-data.js` | `analysis/lineages.json` (Layer 2) |
| `diagram-repair-data.js` | `analysis/views/diagram.json` (Layer 3) |
| `analysis/derived/exemptions-master.json` | `analysis/views/diagram-repair.json` (Layer 3) |
| `analysis/derived/status-grid.json` | `analysis/cycle-*.json` (Layer 1 facts) |

The diagrams are served as static files (GitHub Pages); `make build` is the
only step between editing the source and the live page.

## Build commands

```
make build      # validate → derive → render → write the generated files
make check      # same, but dry run (no write) — use to validate an edit
make comments   # regenerate analysis/comments.json (only when a manifest.csv changes)
```

Requires Node (stdlib only — no `npm install`). The build aborts on any
validation error; fix the source and re-run. The pipeline lives in
`analysis/build/*.mjs`.

## The three layers

1. **Layer 1 — facts** (`analysis/cycle-YYYY.json`, `cycle-YYYY-denials.json`).
   Per-cycle codified classes and denials, each cited to a PDF page + verbatim
   quote. Every record has a unique `class_id` (`"2018:b10"`, `"2024:d1"`).
2. **Layer 2 — lineage** (`analysis/lineages.json`). Cross-cycle threads. A
   lineage's `members[]` list only the cycles where it was codified or
   petitioned-and-denied; each member references a Layer-1 `class_id`. The full
   per-cycle status grid (the `not_yet_proposed` / `not_renewed` / `not_proposed`
   gap cells) is **derived** — never store it.
3. **Layer 3 — views** (`analysis/views/*.json`). Per-view ordering and
   presentation. `diagram.json` is the exemption × cycle matrix; it references
   lineages by `id` and carries only presentation overrides. `diagram-repair.json`
   is the product × cycle matrix and is largely editorial (each cell carries its
   own `status` / `headline` / `quote` / `citation`).

## Recipes

**Reword a tooltip, label, or detail-card prose in the main matrix.**
Edit `analysis/views/diagram.json` — the matrix row's `cells[i]` override
(`label` / `note`) or the matching `details` entry (`timeline` / `evo` /
`summaryRow`). `make build`.

**Change a cell's status** (a class was renewed/narrowed/dropped differently).
This is a cross-cycle fact → edit `analysis/lineages.json`. Add, remove, or
re-`status` a member in the lineage's `members[]`; the matrix status derives
from it. If the new status changes the displayed label, update the view's
`cells[i].label` override too. `make build`.

**Fix a Layer-1 fact** (a wrong quote, PDF page, reason category).
Edit the record in `analysis/cycle-YYYY*.json`. Keep `class_id` stable —
lineages reference it. `make build` (validation re-checks the links).

**Edit the repair-by-product diagram.**
Edit `analysis/views/diagram-repair.json` directly — it is product-centric and
the cells are editorial (`status`, `classNum`, `headline`, `longDesc`, `quote`,
`citation`, or `{"status":"na"}` for pre-class cycles). `make build`.

**Add a brand-new exemption lineage.**
1. Add a lineage object to `analysis/lineages.json` (`id`, `kind`, `name`,
   `facets`, `summary`, `members[]` with `class_id`s pointing at Layer-1
   records, `evolution_notes`).
2. Add a matrix `{"type":"row","ref":"<id>",…}` and a `details`
   `{"type":"detail","ref":"<id>",…}` entry to `analysis/views/diagram.json`.
3. `make build`.

**Add the next triennial cycle (e.g. 2027).**
1. Create `analysis/cycle-2027.json` and `cycle-2027-denials.json` (Layer-1
   extraction; `class_id`s `2027:bN` / `2027:d…`).
2. Append `2027` to the `cycles` array in `lineages.json` **and** both
   `views/*.json`.
3. For each lineage active in 2027, append a member to its `members[]`.
4. Append a 2027 cell to every row in `views/diagram.json` (`cells` array) and
   add 2027 cells in `views/diagram-repair.json`.
5. `make build`. This is the largest routine change — every view row's `cells`
   array grows by one.

## Invariants the build enforces (`validate.mjs`)

- Every `class_id` is globally unique across Layer 1.
- Every lineage member's `class_id` resolves to a Layer-1 record of the matching
  kind in the matching cycle.
- `members[]` are strictly cycle-ordered; a grant lineage has ≥1 grant member.
- Every `ref` in a view resolves to a real lineage; every matrix row has the
  right number of cells.
- All facets are in the lineage doc's `facet_vocabulary`.

## Notes

- `analysis/build/bootstrap.mjs` is the one-time migration that created the data
  layer from the old hand-built files. It is kept for provenance; it is **not**
  part of `make build` and should not need to run again.
- The hand-built `analysis/exemptions-master.json` is **retired** — superseded
  by the generated `analysis/derived/exemptions-master.json`. (It is still on
  disk only because the diagram footers cite that path; repoint them to
  `analysis/derived/` next time the HTML is edited.)
- Do not edit the diagrams' HTML/CSS or their render `<script>` blocks to change
  data — they read `window.DMCA1201_DIAGRAM` / `window.DMCA1201_REPAIR` and are
  data-agnostic.
