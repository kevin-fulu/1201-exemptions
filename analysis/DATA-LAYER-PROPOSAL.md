# Data-Layer Proposal — §1201 Exemption Views

Date: 2026-05-22
Status: Proposal / implementation spec — stage-1 frontend partly landed (see Update below)
Audience: the agent (or person) implementing the data layer and regenerating `diagram.html` / `diagram-repair.html`.

This document is an engineering spec, not §1201 research. It does not belong in `1201/Claude Reports/`.

> **Update — 2026-05-22. Stage 1 (frontend) is partly landed.** `diagram.html`
> and `diagram-repair.html` no longer embed their data — they render from
> external `diagram-data.js` / `diagram-repair-data.js` via `<script src>`, and
> `diagram.html` gained a click-to-open detail sidebar. Both data files were
> produced by a parser that re-renders and diffs against the pre-refactor HTML;
> verified byte-identical (modulo whitespace). **Those two files are now the
> frozen interface contract** between the frontend and the data layer: the data
> agent's `render.py` must emit exactly these shapes (§8.3, corrected below),
> and they double as the §9 regression oracle. Migration steps 6–7 (§10) are
> done; 1–5 and 8 remain. Three corrections from that work are folded into
> §5.2, §8.3, §9, §10 and §11.
>
> **Tooling language — Node, not Python.** Per a later instruction, the build
> pipeline (validate / derive / render) is implemented in **vanilla Node
> (`.mjs`, standard library only)**, not Python. Everywhere §4, §7, §9 and §10
> below say `*.py` or "Python", read `*.mjs` / Node. The authoritative,
> up-to-date description of the build lives in `CLAUDE.md`, and the scripts
> themselves in `analysis/build/`; this proposal is the original spec, kept for
> its rationale and schemas.

---

## 1. Purpose

`diagram.html` and `diagram-repair.html` are two HTML views of the same underlying §1201 record. Today each view stores its own copy of the data (hand-coded `<td>`s in one, an embedded `ROWS` JS literal in the other), and a third copy lives in `analysis/exemptions-master.json`. Updating one does not update the others.

This spec defines a **3-layer data layer** so that:

1. Every fact has exactly one home.
2. Cross-cycle status is *derived*, not hand-maintained.
3. A new view is a small config file, not a new copy of the data.
4. Data/HTML drift becomes a `validate.py` error instead of a silent inconsistency.

---

## 2. What exists today (inventory)

| Tier | Files | Role |
|---|---|---|
| Source | `1201/Final Rules/` (9), `1201/Reg Recommendation/` (9), `1201/first-round-comments/{2015,2018,2021,2024}/` (313 PDFs + `manifest.csv` each) | Primary record |
| Extraction | `analysis/cycle-YYYY.json` (9), `analysis/cycle-YYYY-denials.json` (9) | Per-cycle granted classes & denials, every field cited to a PDF page + verbatim quote. Verified by `audit-existing.md` (35/36) and `verification-report.md` (13/13). |
| Consolidation | `analysis/exemptions-master.json` | Hand-built cross-cycle lineage; 51 entries (30 granted + 21 denial); `per_cycle_status` keyed by year. |
| View data | embedded in `diagram.html` (static HTML) and `diagram-repair.html` (`ROWS` literal) | One data copy per view. |

### Existing `cycle-YYYY.json` schema (Layer-1 grants, as-is)

```
{
  "cycle": 2000,
  "final_rule_file": "1201/Final Rules/2000-Final-Rule.txt",
  "codified_text_starts_pdf_page": 19,
  "extractor_notes": "...",
  "exemptions": [
    {
      "class_number": "(b)(1)",
      "equipment_or_work": "...",
      "permitted_uses": ["..."],
      "exclusions": ["..."],
      "definitions_or_conditions": ["..."],
      "renewal_status": "renewed_unchanged",
      "renewal_status_source": { "pdf_pages": [2,3], "quote": "..." },
      "source": { "file": "...", "pdf_pages": [19], "txt_line_range": [3886,3919], "quote": "..." }
    }
  ]
}
```

### Existing `cycle-YYYY-denials.json` schema (Layer-1 denials, as-is)

```
{
  "cycle": 2024,
  "final_rule_file": "1201/Final Rules/2024-Final-Rule.txt",
  "extractor_notes": "...",
  "denials": [
    {
      "proposed_class_number": "1",
      "topic_label": "...",
      "reason_category": "evidence",
      "reason_quote": "...",
      "source_pdf_pages": [8],
      "later_granted_in_cycle": null
    }
  ]
}
```

---

## 3. The problems

1. **The same fact lives in 3–4 places with no enforced link.** The 2024 consumer-device class appears in `cycle-2024.json`, in `exemptions-master.json` (`per_cycle_status.2024`), as a `diagram.html` cell, and as a `diagram-repair.html` `ROWS` entry with a re-typed verbatim quote. `exemptions-master.json`'s own `notes` field is, in effect, a drift warning.
2. **Derived facts are stored as literals.** `renewal_status`, `first_granted`, "denied 4 cycles", "dropped after 2010" are all derivable from the lineage but are hand-typed. Each is a drift surface.
3. **The lineage join is implicit.** The thread "2024 (b)(15) ← 2021 (b)(14) ← 2018 (b)(10)" exists only as ordering inside `exemptions-master.json`. Nothing machine-checkable links a lineage to the `(cycle, class)` records it is composed of.
4. **One hard `category` per exemption; unstructured scope.** A class is forced into a single category, so a second view's grouping needs a second dataset. And the codified scope ("smartphones, home appliances, home systems") is one prose string — not the enumeration a product-axis view must pivot on.
5. **`diagram-repair.html` already forked.** It needed product-level granularity, verbatim regulatory quotes, and editorial `headline` prose — none in `exemptions-master.json` — so it grew its own ~600-line embedded dataset. The next view would do the same.

---

## 4. The 3-layer model

Strict dependency direction: **Layer 3 → Layer 2 → Layer 1**. Nothing references upward. Nothing in Layer 1 knows about cycles other than its own.

```
Layer 1  FACTS       cycle-YYYY.json, cycle-YYYY-denials.json, comments.json
   │                 per-cycle, cited to PDF page + verbatim quote; the audit trail
   ▼
Layer 2  LINEAGE     lineages.json
   │                 cross-cycle entities; members reference Layer-1 PKs;
   │                 stores only the irreducible cross-cycle judgment
   ▼
Layer 3  VIEWS       views/*.json
                     selector + grouping + presentation; references Layer 2,
                     pulls quotes from Layer 1; no data copies
```

### Proposed directory layout

```
analysis/
  cycle-YYYY.json            # Layer 1 — grants      (existing; + class_id, covered_items)
  cycle-YYYY-denials.json    # Layer 1 — denials     (existing; + class_id)
  comments.json              # Layer 1 — comments    (NEW; normalized from manifest.csv ×4)
  lineages.json              # Layer 2               (NEW; replaces hand-built master)
  views/
    diagram.json             # Layer 3 config        (NEW)
    diagram-repair.json      # Layer 3 config        (NEW)
  derived/
    exemptions-master.json   # GENERATED (keeps current consumers working)
    status-grid.json         # GENERATED (per-lineage × per-cycle status)
  build/
    validate.py              # NEW — integrity checks
    derive.py                # NEW — computes derived/*
    render.py                # NEW — emits the diagram-*-data.js files
  DATA-LAYER-PROPOSAL.md      # this file
diagram.html                 # static shell + render <script>
diagram-repair.html          # static shell + render <script>
diagram-data.js              # GENERATED — consumed by diagram.html
diagram-repair-data.js       # GENERATED — consumed by diagram-repair.html
```

`.js` (not `.json`) for the two generated view-data files: they are loaded by HTML opened directly from disk (`file://`), where `fetch()` of a sibling `.json` is blocked by the browser same-origin policy. A `<script src="diagram-data.js">` that assigns one global object works from `file://` and over GitHub Pages alike. The file is still pure data — a single object literal.

---

## 5. Layer 1 — Facts

**Rule: every field traces to a PDF page + verbatim quote. No cross-cycle reasoning in Layer 1.** Keep the existing `cycle-YYYY.json` / `cycle-YYYY-denials.json` files — they are verified. Two additions only.

### 5.1 Addition: `class_id` (canonical primary key)

Every grant and denial record gets a stable `class_id` string — the join key Layer 2 references.

- Grant: `"<cycle>:b<N>"` — e.g. `"2018:b10"`, `"2000:b1"`.
- Denial: `"<cycle>:d<proposed_class>"` — e.g. `"2024:d1"`, `"2012:d5-tablet"` (sanitize: lowercase, non-alphanumerics → `-`).

`class_id` must be unique across the whole archive. `validate.py` enforces this.

### 5.2 Addition: `covered_items[]` (structured scope) — grants only

Alongside the existing `equipment_or_work` prose, add the device/work types the codified text **explicitly enumerates**. This is still a faithful extraction — the items are named in the codified text — and it is what product-axis views pivot on.

```
"covered_items": ["smartphones", "home appliances", "home systems"]
```

For classes whose scope is a single undifferentiated work type (e.g. 2000 (b)(1) block-lists), `covered_items` is a one-element array or `[]`. Populating this is a one-time pass over the 9 Final Rules; see §9.

**Deferred (2026-05-22 review).** Neither view config in §8 actually pivots on `covered_items`: the repair view (§8.2) pins each cell to a lineage and hand-authors `headline`, and the matrix view never reads it. `covered_items[]` is therefore *not* on the critical path for regenerating the two existing diagrams — populate it only when a view that consumes it is actually built.

### 5.3 Layer-1 grant record (final shape)

```
{
  "class_id": "2000:b1",                       // NEW
  "class_number": "(b)(1)",
  "equipment_or_work": "Compilations consisting of lists of websites blocked by filtering software applications",
  "covered_items": ["filtering-software block-lists"],   // NEW
  "permitted_uses": ["..."],
  "exclusions": ["..."],
  "definitions_or_conditions": ["..."],
  "renewal_status": "new",                     // KEPT — see note below
  "renewal_status_source": { "pdf_pages": [...], "quote": "..." },
  "source": { "file": "...", "pdf_pages": [19], "txt_line_range": [3886,3919], "quote": "..." }
}
```

**Note on `renewal_status`.** It is a cross-cycle judgment, so strictly it belongs in Layer 2. It already exists in Layer 1 and is verified, so do **not** migrate it in this pass. Decision: Layer 2's `change_relationship` is canonical for views; Layer 1's `renewal_status` is retained as a redundant cross-check that `validate.py` reconciles against Layer 2. A later cleanup may drop it from Layer 1.

### 5.4 Layer-1 denial record (final shape)

Add `class_id`; everything else as-is. `later_granted_in_cycle` stays — it is a useful per-record fact, though Layer 2 will also express it structurally.

```
{
  "class_id": "2012:d5-tablet",                // NEW
  "proposed_class_number": "5 (tablet portion only)",
  "topic_label": "Tablet jailbreaking (extension of smartphone class to tablets)",
  "reason_category": "other",
  "reason_quote": "...",
  "source_pdf_pages": [4,5],
  "later_granted_in_cycle": 2015
}
```

### 5.5 New Layer-1 table: `comments.json`

Normalize the four `first-round-comments/*/manifest.csv` files into one JSON table so a future petition/comment view can join comments → proposed class → outcome. Pure mechanical transform; one row per comment PDF.

```
{
  "schema": "comments-v1",
  "comments": [
    {
      "comment_id": "2024:Class04:hackerone",
      "cycle": 2024,
      "proposed_class": "Class04",         // from the local_filename ClassNN_ prefix (uniform across cycles)
      "class_label_as_filed": "Class04",   // verbatim manifest `class` column (format varies by cycle)
      "party": "HackerOne",
      "source_url": "https://www.copyright.gov/1201/2024/comments/...",
      "local_filename": "Class04_HackerOne.pdf",
      "sha256": "0a1fcc...",
      "bytes": 131907
    }
  ]
}
```

Out of scope now, but the slot exists. The `manifest.csv` files remain the source of truth; `comments.json` is generated from them.

---

## 6. Layer 2 — Lineage

`lineages.json` replaces the hand-stated `per_cycle_status` of `exemptions-master.json`. A lineage is a cross-cycle thread. It stores **references** to Layer-1 records plus **only the one fact that cannot be derived**: how each cycle's text compares to the prior one.

### 6.1 File shape

```
{
  "schema": "lineages-v1",
  "cycles": [2000, 2003, 2006, 2010, 2012, 2015, 2018, 2021, 2024],
  "facet_vocabulary": ["filtering", "legacy-access-control", "accessibility",
    "audiovisual-use", "research-tdm", "research-security", "preservation-lam",
    "wireless-connectivity", "interoperability-jailbreak", "repair", "owner-data-access",
    "feedstock-interoperability", "license-compliance"],
  "change_relationship_vocabulary": ["new", "renewed_unchanged", "renewed_expanded",
    "renewed_narrowed"],
  "denial_reason_vocabulary": ["procedural", "substantive", "de_minimis", "evidence",
    "alternatives", "not_copyrightable", "noninfringing_use_not_shown", "other"],
  "lineages": [ /* see 6.2 and 6.3 */ ]
}
```

### 6.2 Grant lineage

```
{
  "id": "consumer-device-repair",
  "kind": "grant",
  "name": "Consumer-device diagnosis, maintenance & repair",
  "summary": "Circumvent TPMs on software controlling a lawfully acquired consumer device, for diagnosis, maintenance, or repair.",
  "facets": ["repair"],                        // ARRAY — a lineage may carry several
  "members": [
    {
      "cycle": 2018,
      "class_id": "2018:b10",                  // MUST resolve to a Layer-1 grant record
      "change_relationship": "new",
      "change_note": "First granted; enumerated as smartphones, home appliances, home systems.",
      "change_source": { "file": "...", "pdf_pages": [205], "quote": "..." }
    },
    {
      "cycle": 2021,
      "class_id": "2021:b14",
      "change_relationship": "renewed_expanded",
      "change_note": "Enumeration replaced by 'any device primarily designed for use by consumers'.",
      "change_source": { "file": "...", "pdf_pages": [235], "quote": "..." },
      "partial_denials": [
        { "topic": "...", "reason_category": "evidence", "reason_quote": "...", "source_pdf_pages": [...] }
      ]
    },
    {
      "cycle": 2024,
      "class_id": "2024:b15",
      "change_relationship": "renewed_unchanged",
      "change_note": "Renewed unchanged from 2021.",
      "change_source": { "file": "...", "pdf_pages": [2,3], "quote": "..." }
    }
  ],
  "evolution_notes": "Editorial cross-cycle prose. Authored opinion — fenced off from Layer-1 facts; may be revised without touching the citation record."
}
```

Rules:

- `members` is **ordered by cycle**. Each `class_id` MUST resolve to a Layer-1 record in the matching cycle file.
- A member appears only for cycles where the class was *codified*. Cycles before the first member and gaps after are **not** listed — their status is derived (§7).
- `change_relationship` is the **only** non-derivable field: it requires comparing two cycles' codified text. Always paired with a `change_source` citation. The first member is always `"new"`.
- `evolution_notes` is the editorial layer. Keep it; keep it clearly labelled.

### 6.3 Denial lineage

Same shape; `members` reference Layer-1 *denial* records. Tracks a topic petitioned-and-refused across cycles (e.g. space-shifting, denied across 8 cycles).

```
{
  "id": "denial-space-shifting",
  "kind": "denial",
  "name": "Space-shifting / format-shifting",
  "summary": "Shift lawfully acquired works to other devices/formats.",
  "facets": ["audiovisual-use"],
  "members": [
    { "cycle": 2000, "class_id": "2000:dE3", "reason_category": "alternatives" },
    { "cycle": 2003, "class_id": "2003:d8",  "reason_category": "noninfringing_use_not_shown" }
    /* ... */
  ],
  "evolution_notes": "..."
}
```

If a denial lineage is later granted, add a `granted_lineage` cross-reference to the grant lineage `id` rather than duplicating records.

---

## 7. Derivation — what is computed, never stored

`derive.py` reads Layers 1+2 and computes a **status grid**: for every lineage × every cycle, one status. Views consume the grid; they never hand-maintain status.

Per-cycle status for a grant lineage, derived purely from `members`:

| Condition | Derived status |
|---|---|
| cycle < first member's cycle | `not_yet_proposed` |
| cycle has a member | that member's `change_relationship` (`new` / `renewed_unchanged` / `renewed_expanded` / `renewed_narrowed`) |
| cycle > first member, no member this cycle | `not_renewed` |

For a denial lineage: `not_proposed` before/after/between members; otherwise the member's `reason_category` mapped to a denial status (`petitioned_denied` / `petitioned_denied_procedural` / `petitioned_denied_de_minimis`).

Also derived, never stored: `first_granted`, last-granted cycle, total cycles active, "denied N cycles", currently-in-force flag, the category-row `colspan` (= `cycles.length + fixed columns`).

`derive.py` additionally regenerates `derived/exemptions-master.json` in the *current* schema so any existing consumer of that file keeps working. After this change, `exemptions-master.json` is a build output — **do not hand-edit it**.

---

## 8. Layer 3 — Views

A view is a config file under `analysis/views/`. It selects lineages, groups them, and supplies **presentation only**. It contains no facts and no quotes — quotes are pulled from Layer 1 by `class_id` at render time.

The two diagrams are editorially curated (row order, prose labels, gap-marker rows), so a view config is part declarative (selector, grouping) and part an explicit ordered `rows` list. That ordered list is where curation lives — but it *references* lineages instead of copying their data.

### 8.1 View config — `views/diagram.json` (exemption × cycle matrix)

```
{
  "view_id": "diagram",
  "output": "diagram-data.js",
  "global_name": "DMCA1201_DIAGRAM",
  "cycles": [2000,2003,2006,2010,2012,2015,2018,2021,2024],
  "label_map": {
    "new": "new", "renewed_unchanged": "renewed", "renewed_expanded": "expanded",
    "renewed_narrowed": "narrowed", "not_renewed": "dropped", "not_yet_proposed": "—",
    "petitioned_denied": "denied", "not_proposed": "not proposed"
  },
  "rows": [
    { "type": "category", "label": "Filtering & Internet Content" },
    {
      "type": "lineage",
      "ref": "filtering-blocklists",
      "cell_overrides": {
        // keyed by cycle; overrides the derived label where the editorial copy differs
        "2006": { "label": "dropped", "note": "2006 — renewal petition (B.1) denied; effectively dropped." }
      },
      "detail_overrides": { "tag": "first granted 2000", "evo": "..." }
    }
    /* ... 51 rows ... */
  ]
}
```

- Each `lineage` row resolves via `ref` → Layer-2 lineage → derived status grid → 9 cells.
- `label_map` covers the common case. `cell_overrides` handles the non-1:1 editorial labels (`not_renewed` shows "dropped" / "no petition" / "subsumed" / "→ vg-pres" depending on the row) and the per-cell tooltip prose. Storing overrides only where they differ keeps the config small and the intent explicit.
- The per-exemption detail cards are generated from the lineage (`members` + `evolution_notes`) plus `detail_overrides`. Timeline bullets that carry inline `<b>`/`<i>`/`<span>` markup stay as HTML strings — see §8.3.

### 8.2 View config — `views/diagram-repair.json` (product × cycle matrix)

The repair view re-cuts the data along a **product** axis finer than codified classes. Its rows reference lineages but are grouped by product; some rows are pure editorial gap-markers with no lineage behind them (e.g. "Scientific / laboratory equipment — never petitioned"). The config makes that explicit:

```
{
  "view_id": "diagram-repair",
  "output": "diagram-repair-data.js",
  "global_name": "DMCA1201_REPAIR",
  "cycles": [...],
  "selector": { "facets_any": ["repair", "owner-data-access"] },   // documents intent
  "rows": [
    { "type": "group", "label": "Personal computing devices" },
    {
      "type": "product",
      "product": "Smartphones (phones)",
      "descr": "Owner / independent repair of smartphone firmware and hardware.",
      "cells": {
        // each cell pins to a lineage member; quote/cite are pulled from Layer 1
        "2018": { "lineage": "consumer-device-repair", "headline": "First granted" },
        "2021": { "lineage": "consumer-device-repair", "headline": "Folded into 'consumer devices'" },
        "2024": { "lineage": "consumer-device-repair", "headline": "Renewed unchanged" }
      }
    },
    {
      "type": "product",
      "product": "Scientific / laboratory / research equipment",
      "descr": "...",
      "editorial_only": true,           // no lineage exists; rendered as a gap row
      "cells": {
        "2021": { "status": "gap", "headline": "Not in the 2021 record", "note": "..." }
      }
    }
  ]
}
```

- A cell with a `lineage` ref derives its status from the grid and pulls the verbatim regulatory `quote` and `cite` from the referenced Layer-1 record — **the repair diagram stops re-typing quotes.**
- `headline` is editorial prose → it lives here, in Layer 3.
- `editorial_only` rows are honestly flagged: they are scaffolding to show a gap, not projections of Layer-1 data.

### 8.3 Generated output — FROZEN CONTRACT (implemented 2026-05-22)

`render.py` emits one global object literal per view. **This shape is already
implemented and consumed** by the render `<script>` in each HTML file;
`render.py` must reproduce it exactly. The committed `diagram-data.js` /
`diagram-repair-data.js` are the regression oracle (§9).

`diagram-data.js` — the exemption × cycle matrix:

```
window.DMCA1201_DIAGRAM = {
  cycles: [2000, 2003, 2006, 2010, 2012, 2015, 2018, 2021, 2024],
  matrix: [                       // ordered rows of the matrix table
    { type: "category", label: "...", denialCategory?: true },
    { type: "exemption" | "denial", id, name, summary, summaryTitle,
      cells: [ { status, classNum?, label, note?, partial?: true }, ... ×9 ] }
  ],
  details: [                      // ordered entries of the details section
    { type: "h3", text: "..." },
    { type: "detail", id, name, tagKind: "cat" | "denial", tag,
      summaryRow, timeline: ["<b>2000</b> ..."], evo? }
  ]
};
```

**Correction to the earlier sketch:** `matrix` and `details` are **two
separate ordered arrays — not one `rows` list.** The details section splits
each category that has both grants and denials into a "*— Granted*" h3 and a
"*— Denied Petitions*" h3 whose label is an editorially-shortened category
name ("Audiovisual Use", "Repair", …). That h3 structure is **not derivable**
from the matrix's category order, so `details` is materialised explicitly. A
matrix row and its detail block are joined by a shared `id`; the sidebar
resolves clicks through that `id`. In the current data all 51 rows have a
detail entry.

`diagram-repair-data.js` — the product × cycle matrix (unchanged from its
pre-existing embedded form, just moved into a file and exported on `window`):

```
window.DMCA1201_REPAIR = {
  CYCLES: [2000, ...],
  ROWS: [
    { group: "Personal computing devices" },                        // group header
    { product: "...", descr: "...", cells: { 2018: <cell>, ... } }   // product row
  ]
};
// <cell> = { status, classNum, headline, longDesc, quote, citation }  (granted/denied)
//        | { status: "na" }                                          (pre-class)
```

**Field escaping contract** (the render `<script>` honours this; it is
documented as a header comment in each generated file):

- *Plain text — escape on render:* matrix `name`, `summary`, `summaryTitle`,
  cell `label` / `classNum` / `note`, category `label`, detail `name` / `tag`,
  h3 `text`; repair `product` / `descr` / `headline` / `longDesc` / `quote` /
  `citation`.
- *Raw HTML — injected as-is:* `summaryRow`, `timeline[]` entries, and `evo`
  (they carry `<b>` / `<i>` / `<span class="denial-tag">`). `summaryRow` was
  checked during extraction and **is** treated as raw HTML.

---

## 9. Build pipeline & tooling

```
Layer 1 (cycle-*.json, comments.json) ─┐
                                       ├─► validate.py   (gate: fail the build on any error)
Layer 2 (lineages.json) ───────────────┘
                                       ├─► derive.py     ─► derived/status-grid.json,
                                       │                    derived/exemptions-master.json
views/*.json ──────────────────────────┴─► render.py     ─► diagram-data.js, diagram-repair-data.js
```

- **`validate.py`** — every Layer-2 `member.class_id` resolves to a real Layer-1 record in the right cycle; every `class_id` is globally unique; every facet / `change_relationship` / `reason_category` is in its vocabulary; every `members` list is cycle-ordered; Layer-1 `renewal_status` reconciles with Layer-2 `change_relationship`; every `views/*.json` `ref` resolves to a lineage. **This is the check that is impossible today.**
- **`derive.py`** — computes the status grid and regenerates `derived/*`.
- **`render.py`** — applies each view config, pulls quotes from Layer 1, writes the `.js` files.
- Python 3 standard library only — no new dependencies (the repo already standardizes on Python via `pypdf`). One `make` / `build.py` entry point runs validate → derive → render. Run by hand; commit the generated `derived/*` and `diagram-*-data.js`. The data changes triennially, so no CI is needed.

### Verification gate

**The HTML→data half is already done** (in Node — the proposal predates it). A
parser extracts the pre-refactor `diagram.html` into the §8.3 shape, re-renders,
and diffs — verified byte-identical modulo whitespace (see the 2026-05-22 update
at the top). The committed `diagram-data.js` / `diagram-repair-data.js` are
therefore the **regression oracle**: `render.py` succeeds when its output diffs
clean against those two files. The data agent does **not** re-derive the oracle
from HTML — it is a committed artifact. (The existing parser is Node and
throwaway; `render.py` is a fresh Python implementation, but it aims at a fixed
committed target rather than at moving HTML, so the round-trip is still exact by
construction.)

---

## 10. Migration plan

1. **Layer 1 enrichment.** Add `class_id` to all 18 cycle files (mechanical). **`covered_items[]` is deferred** — see §5.2; no current view consumes it, so it is off the critical path for regenerating the two diagrams.
2. **`comments.json`.** Generate from the four `manifest.csv` files (mechanical). Optional; unblocks future comment views.
3. **Layer 2.** Reshape `exemptions-master.json` into `lineages.json`: `category` → `facets[]`; `per_cycle_status` → `members[]` with validated `class_id` references; keep only `change_relationship` + citation as stored cross-cycle fact; move `evolution_notes` into the lineage. The data is all present in `exemptions-master.json` — this is a re-shaping, not new research.
4. **Tooling.** Write `validate.py`, `derive.py`, `render.py`.
5. **Views.** Write `views/diagram.json` and `views/diagram-repair.json` (use `extract.py` to seed them from current HTML).
6. ✅ **Done (2026-05-22).** `diagram.html` / `diagram-repair.html` are now static chrome + a render `<script>` + `<script src="diagram-*-data.js">`.
7. ✅ **Done (2026-05-22)** for the HTML→data direction — the extraction was verified byte-identical against the pre-refactor HTML. **Remaining:** once `render.py` exists, diff its output against the committed `diagram-*-data.js`.
8. **Document.** Update `CLAUDE.md` so future edits go to Layer 1/2 and the build is re-run.

---

## 11. Honest caveats

- **`change_relationship` is irreducible hand-judgment.** Knowing a class was "expanded" vs "renewed unchanged" requires comparing two cycles' codified text. It stays a stored, *cited* Layer-2 field; `verification-report.md` documents how such judgments were checked.
- **`covered_items` extraction cost.** A real, if modest, one-time pass over 9 Final Rules. **Deferred** (see §5.2): neither current view consumes it, so it is off the critical path — do it only when a view needs it.
- **The product axis is partly editorial.** Some repair-diagram rows are gap-markers with no codified class behind them. They remain hand-authored rows in the view config, flagged `editorial_only`. The data layer makes the *factual* rows single-sourced; it does not pretend the editorial scaffolding is derived.
- **Not legal advice.** This spec concerns data tooling. The §1201 record itself is documented in `1201/` and the verification files; this proposal does not re-interpret it.
