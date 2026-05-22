// validate.mjs — integrity checks across Layers 1, 2 and 3.
// Node stdlib only. Returns { errors, warnings }; build.mjs fails on errors.

import { readJSON, loadLayer1, deriveGrid, GRANT_STATUSES, DENIAL_STATUSES } from "./lib.mjs";

const ALL_STATUSES = new Set([
  ...GRANT_STATUSES, ...DENIAL_STATUSES, "not_yet_proposed", "not_renewed", "not_proposed",
]);

export function validate() {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);

  const ldoc = readJSON("analysis/lineages.json");
  const lineages = ldoc.lineages;
  const cycles = ldoc.cycles;
  const cycleSet = new Set(cycles);
  const layer1 = loadLayer1(cycles);

  // ---- Layer 1: class_id uniqueness ------------------------------------
  const seen = new Set();
  for (const id of Object.keys(layer1.byId)) {
    if (seen.has(id)) err(`Layer 1: duplicate class_id ${id}`);
    seen.add(id);
  }

  // ---- Layer 2: lineages ------------------------------------------------
  const facetVocab = new Set(ldoc.facet_vocabulary);
  const linIds = new Set();
  for (const lin of lineages) {
    if (linIds.has(lin.id)) err(`lineage: duplicate id ${lin.id}`);
    linIds.add(lin.id);
    if (lin.kind !== "grant" && lin.kind !== "denial") err(`lineage ${lin.id}: bad kind ${lin.kind}`);
    for (const f of lin.facets || []) if (!facetVocab.has(f)) err(`lineage ${lin.id}: unknown facet ${f}`);

    let prev = -1;
    for (const m of lin.members) {
      if (!cycleSet.has(m.cycle)) err(`lineage ${lin.id}: member cycle ${m.cycle} not in cycles[]`);
      if (m.cycle <= prev) err(`lineage ${lin.id}: members not strictly cycle-ordered (${m.cycle})`);
      prev = m.cycle;
      if (!ALL_STATUSES.has(m.status)) err(`lineage ${lin.id} @${m.cycle}: bad status ${m.status}`);

      // class_id must resolve to a Layer-1 record of the matching kind & cycle
      const rec = layer1.byId[m.class_id];
      const wantKind = GRANT_STATUSES.has(m.status) ? "grant" : "denial";
      if (!m.class_id) {
        err(`lineage ${lin.id} @${m.cycle}: member has no class_id`);
      } else if (!rec) {
        err(`lineage ${lin.id} @${m.cycle}: class_id ${m.class_id} resolves to no Layer-1 record`);
      } else {
        if (rec.cycle !== m.cycle) err(`lineage ${lin.id} @${m.cycle}: class_id ${m.class_id} is in cycle ${rec.cycle}`);
        if (rec.kind !== wantKind) err(`lineage ${lin.id} @${m.cycle}: status ${m.status} wants a ${wantKind} record but ${m.class_id} is a ${rec.kind}`);
      }

      // §5.3 reconcile: Layer-1 grant renewal_status vs lineage member.status
      if (rec && rec.kind === "grant" && rec.renewal_status && rec.renewal_status !== m.status) {
        warn(`reconcile ${lin.id} @${m.cycle}: Layer-1 renewal_status="${rec.renewal_status}" vs lineage status="${m.status}"`);
      }
    }
    const firstGrant = lin.members.find((m) => GRANT_STATUSES.has(m.status));
    if (lin.kind === "grant" && !firstGrant) err(`lineage ${lin.id}: kind=grant but no grant member`);
    if (lin.kind === "denial" && firstGrant) err(`lineage ${lin.id}: kind=denial but has a grant member`);
  }

  // ---- Layer 3: views reference real lineages --------------------------
  for (const viewName of ["diagram", "diagram-repair"]) {
    const view = readJSON(`analysis/views/${viewName}.json`);
    if (viewName === "diagram") {
      for (const row of view.matrix) {
        if (row.type !== "row") continue;
        if (!linIds.has(row.ref)) err(`view diagram: matrix ref ${row.ref} resolves to no lineage`);
        if (row.cells.length !== cycles.length) err(`view diagram: row ${row.ref} has ${row.cells.length} cells, expected ${cycles.length}`);
      }
      const detailRefs = new Set();
      for (const e of view.details) {
        if (e.type !== "detail") continue;
        if (!linIds.has(e.ref)) err(`view diagram: detail ref ${e.ref} resolves to no lineage`);
        detailRefs.add(e.ref);
      }
      for (const row of view.matrix)
        if (row.type === "row" && !detailRefs.has(row.ref))
          warn(`view diagram: matrix row ${row.ref} has no detail entry`);
    }
  }

  // ---- internal consistency: grid is well-formed -----------------------
  for (const lin of lineages) {
    const g = deriveGrid(lin, cycles);
    if (g.some((s) => !ALL_STATUSES.has(s))) err(`lineage ${lin.id}: derived grid has an unknown status`);
  }

  return { errors, warnings };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { errors, warnings } = validate();
  for (const w of warnings) console.log("WARN  " + w);
  for (const e of errors) console.log("ERROR " + e);
  console.log(`validate: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(errors.length ? 1 : 0);
}
