// bootstrap.mjs — ONE-TIME generator of the data layer.
//
// Decomposes the frozen oracle files (diagram-data.js, diagram-repair-data.js)
// and the hand-built exemptions-master.json into:
//   analysis/lineages.json            (Layer 2)
//   analysis/views/diagram.json       (Layer 3)
//   analysis/views/diagram-repair.json(Layer 3)
//
// It is NOT part of the build pipeline (build.mjs). It is kept for provenance:
// re-running it reproduces the data layer from the oracle. Once the data layer
// is the source of truth, edits go to lineages.json / views/*.json directly.
//
// Run from the repo root:  node analysis/build/bootstrap.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const A = (p) => path.join(ROOT, p);

// ---------------------------------------------------------------- load oracle
function loadDiagramData() {
  const src = fs.readFileSync(A("diagram-data.js"), "utf8");
  const i = src.indexOf("{", src.indexOf("window.DMCA1201_DIAGRAM"));
  return JSON.parse(src.slice(i, src.lastIndexOf("}") + 1));
}
function loadRepairData() {
  const code = fs.readFileSync(A("diagram-repair-data.js"), "utf8");
  const window = {};
  // eslint-disable-next-line no-eval
  eval(code); // assigns window.DMCA1201_REPAIR
  return window.DMCA1201_REPAIR;
}
const diagram = loadDiagramData();
const repair = loadRepairData();
const master = JSON.parse(fs.readFileSync(A("analysis/exemptions-master.json"), "utf8"));

const CYCLES = diagram.cycles;
const layer1 = { grants: {}, denials: {} };
for (const y of CYCLES) {
  layer1.grants[y] = JSON.parse(fs.readFileSync(A(`analysis/cycle-${y}.json`), "utf8")).exemptions;
  layer1.denials[y] = JSON.parse(fs.readFileSync(A(`analysis/cycle-${y}-denials.json`), "utf8")).denials;
}

// ------------------------------------------------------------------- helpers
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(Boolean);
function jaccard(a, b) {
  const sa = new Set(a), sb = new Set(b);
  let inter = 0;
  for (const x of sa) if (sb.has(x)) inter++;
  return inter / (sa.size + sb.size - inter);
}

const GRANT_STATUSES = new Set(["new", "renewed_unchanged", "renewed_expanded", "renewed_narrowed"]);
const DENIAL_STATUSES = new Set(["petitioned_denied", "petitioned_denied_procedural", "petitioned_denied_de_minimis"]);

// grant class_id from a classNum like "b(10)" or "b(4-7)"  ->  "2018:b10"
function grantClassId(cycle, classNum) {
  const m = (classNum || "").match(/b\((\d+)/);
  return m ? `${cycle}:b${m[1]}` : null;
}
// One denial member has no machine-resolvable key (master carries no
// class_number_proposed and the diagram cell carries no classNum): the
// broader Halderman security-testing class denied in 2010 as III.D (partial).
const DENIAL_CLASS_ID_OVERRIDES = {
  "good-faith-security-research-general@2010": "2010:diii-d-partial",
};

// denial class_id: resolve a proposed-class string to a Layer-1 denial record.
function denialClassId(cycle, ...candidates) {
  const recs = layer1.denials[cycle];
  for (const cand of candidates) {
    if (!cand) continue;
    const cs = slug(cand);
    for (const r of recs) {
      const rs = slug(r.proposed_class_number);
      if (rs === cs || cs.startsWith(rs) || rs.startsWith(cs)) return r.class_id;
    }
    const cn = (cand.match(/\d+/) || [])[0];
    if (cn) {
      for (const r of recs) {
        const rn = (r.proposed_class_number.match(/\d+/) || [])[0];
        if (rn && rn === cn) return r.class_id;
      }
    }
  }
  return null;
}

// ----------------------------------------------- match diagram rows <-> master
const diagRows = diagram.matrix.filter((r) => r.type === "exemption" || r.type === "denial");
const usedMaster = new Set();
const pairs = [];
for (const dr of diagRows) {
  let best = null, bestScore = -1;
  for (const me of master.exemptions) {
    if (usedMaster.has(me.id)) continue;
    const s = jaccard(norm(dr.name), norm(me.name));
    if (s > bestScore) { bestScore = s; best = me; }
  }
  usedMaster.add(best.id);
  pairs.push({ diag: dr, master: best, score: bestScore });
}

// ----------------------------------------------------------- build lineages
const CATEGORY_FACET = {
  "Filtering & Internet Content": "filtering",
  "Legacy Access Controls (Obsolete or Broken)": "legacy-access-control",
  "Accessibility": "accessibility",
  "Audiovisual Use (Criticism, Comment, Education)": "audiovisual-use",
  "Research (TDM and Security)": "research",
  "Preservation by Libraries / Archives / Museums": "preservation-lam",
  "Wireless Network Connectivity": "wireless-connectivity",
  "Interoperability / Software Installation (Jailbreaking)": "interoperability-jailbreak",
  "Repair, Diagnosis, & Modification": "repair",
  "Patient / Owner Data Access": "owner-data-access",
  "Material / Feedstock Interoperability": "feedstock-interoperability",
  "Software License Compliance": "license-compliance",
  "Denied — Class-Definition Disputes & Threshold Issues": "denied-threshold",
};

const lineages = [];
const issues = [];

for (const { diag, master: me } of pairs) {
  const kind = diag.type === "exemption" ? "grant" : "denial";
  const facet = CATEGORY_FACET[me.category];
  if (!facet) issues.push(`no facet for category: ${me.category}`);

  const members = [];
  for (let ci = 0; ci < CYCLES.length; ci++) {
    const y = CYCLES[ci];
    const cell = diag.cells[ci];           // status backbone = the oracle
    const ps = me.per_cycle_status[String(y)] || {};
    if (GRANT_STATUSES.has(cell.status)) {
      const m = { cycle: y, class_id: grantClassId(y, cell.classNum), status: cell.status };
      if (ps.notes) m.notes = ps.notes;
      if (ps.partial_denials) m.partial_denials = ps.partial_denials;
      members.push(m);
    } else if (DENIAL_STATUSES.has(cell.status)) {
      const m = {
        cycle: y,
        class_id: DENIAL_CLASS_ID_OVERRIDES[`${diag.id}@${y}`]
          || denialClassId(y, ps.class_number_proposed, cell.classNum),
        status: cell.status,
      };
      if (ps.class_number_proposed) m.class_number_proposed = ps.class_number_proposed;
      if (ps.reason_category) m.reason_category = ps.reason_category;
      if (ps.reason_quote) m.reason_quote = ps.reason_quote;
      if (ps.source_pdf_pages) m.source_pdf_pages = ps.source_pdf_pages;
      if (ps.notes) m.notes = ps.notes;
      members.push(m);
    }
  }
  lineages.push({
    id: diag.id,
    master_id: me.id,
    kind,
    name: diag.name,
    category: me.category,
    facets: facet ? [facet] : [],
    summary: me.summary,
    first_granted: me.first_granted ?? null,
    members,
    evolution_notes: me.evolution_notes || null,
  });
}

// ----------------------------------------------------- derive status grid
// Gap rule: a grant lineage shows not_yet_proposed for every cycle before its
// FIRST GRANT (first member with a grant status) — including cycles after a
// failed petition — and not_renewed for gaps after the first grant. Denial
// lineages show not_proposed for every non-member cycle.
function deriveGrid(lin) {
  const byCycle = {};
  for (const m of lin.members) byCycle[m.cycle] = m;
  const firstGrant = lin.members.find((m) => GRANT_STATUSES.has(m.status));
  const firstGrantCycle = firstGrant ? firstGrant.cycle : null;
  return CYCLES.map((y) => {
    const m = byCycle[y];
    if (m) return m.status;
    if (lin.kind === "denial") return "not_proposed";
    return firstGrantCycle !== null && y >= firstGrantCycle ? "not_renewed" : "not_yet_proposed";
  });
}

let gridMismatch = 0;
for (let k = 0; k < pairs.length; k++) {
  const grid = deriveGrid(lineages[k]);
  const oracle = pairs[k].diag.cells.map((c) => c.status);
  for (let i = 0; i < 9; i++)
    if (grid[i] !== oracle[i]) {
      gridMismatch++;
      issues.push(`GRID ${lineages[k].id} ${CYCLES[i]}: derived=${grid[i]} oracle=${oracle[i]}`);
    }
}

let missGrant = 0, missDenial = 0;
for (const lin of lineages)
  for (const m of lin.members)
    if (!m.class_id) GRANT_STATUSES.has(m.status) ? missGrant++ : missDenial++;

// ----------------------------------------------------------- build view: diagram
const LABEL_MAP = {
  new: "new", renewed_unchanged: "renewed", renewed_expanded: "expanded",
  renewed_narrowed: "narrowed", not_renewed: "dropped", not_yet_proposed: "—",
  petitioned_denied: "denied", petitioned_denied_procedural: "denied",
  petitioned_denied_de_minimis: "de minimis", not_proposed: "not proposed",
};
const linById = Object.fromEntries(lineages.map((l) => [l.id, l]));

const viewMatrix = [];
for (const row of diagram.matrix) {
  if (row.type === "category") {
    const c = { type: "category", label: row.label };
    if (row.denialCategory) c.denialCategory = true;
    viewMatrix.push(c);
    continue;
  }
  const grid = deriveGrid(linById[row.id]);
  const cells = row.cells.map((c, i) => {
    const ov = {};
    if (c.classNum !== undefined) ov.classNum = c.classNum;
    if (c.label !== LABEL_MAP[grid[i]]) ov.label = c.label;
    if (c.note !== undefined) ov.note = c.note;
    if (c.partial) ov.partial = true;
    return Object.keys(ov).length ? ov : null;
  });
  viewMatrix.push({ type: "row", ref: row.id, summary: row.summary, summaryTitle: row.summaryTitle, cells });
}

const viewDetails = [];
for (const e of diagram.details) {
  if (e.type === "h3") { viewDetails.push({ type: "h3", text: e.text }); continue; }
  const d = { type: "detail", ref: e.id, name: e.name, tagKind: e.tagKind, tag: e.tag, summaryRow: e.summaryRow, timeline: e.timeline };
  if (e.evo !== undefined) d.evo = e.evo;
  viewDetails.push(d);
}

const viewDiagram = {
  view_id: "diagram",
  output: "diagram-data.js",
  global_name: "DMCA1201_DIAGRAM",
  cycles: CYCLES,
  label_map: LABEL_MAP,
  matrix: viewMatrix,
  details: viewDetails,
};

// ----------------------------------------------------- build view: diagram-repair
const viewRepair = {
  view_id: "diagram-repair",
  output: "diagram-repair-data.js",
  global_name: "DMCA1201_REPAIR",
  cycles: repair.CYCLES,
  rows: repair.ROWS.map((r) => {
    if (r.group) return { group: r.group };
    const cells = {};
    for (const [y, c] of Object.entries(r.cells)) {
      cells[y] = c.status === "na"
        ? { status: "na" }
        : {
            status: c.status, classNum: c.classNum, headline: c.headline,
            longDesc: c.longDesc ?? null, quote: c.quote ?? null, citation: c.citation ?? null,
          };
    }
    return { product: r.product, descr: r.descr, cells };
  }),
};

// ------------------------------------------------------------------ lineagesDoc
const lineagesDoc = {
  schema: "lineages-v1",
  generated: master.generated || "2026-05-22",
  generated_by: "analysis/build/bootstrap.mjs — reshaped from exemptions-master.json; status backbone from diagram-data.js",
  note: "A lineage is a cross-cycle thread. members[] are the cycles where the lineage was codified or petitioned-and-denied; member.status carries that cycle's status. All gap cells (not_yet_proposed / not_renewed / not_proposed) are derived — see derive.mjs.",
  cycles: CYCLES,
  facet_vocabulary: [...new Set(Object.values(CATEGORY_FACET))],
  status_legend: master.status_legend,
  denial_reason_categories: master.denial_reason_categories,
  lineages,
};

fs.writeFileSync(A("analysis/lineages.json"), JSON.stringify(lineagesDoc, null, 2) + "\n");
fs.writeFileSync(A("analysis/views/diagram.json"), JSON.stringify(viewDiagram, null, 2) + "\n");
fs.writeFileSync(A("analysis/views/diagram-repair.json"), JSON.stringify(viewRepair, null, 2) + "\n");

// ---------------------------------------------------------------------- report
console.log(`lineages: ${lineages.length}  (grant ${lineages.filter((l) => l.kind === "grant").length}, denial ${lineages.filter((l) => l.kind === "denial").length})`);
console.log(`grid mismatches vs oracle: ${gridMismatch}`);
console.log(`unresolved class_id: grant ${missGrant}, denial ${missDenial}`);
console.log(`issues (${issues.length}):`);
for (const m of issues.slice(0, 60)) console.log("  " + m);
