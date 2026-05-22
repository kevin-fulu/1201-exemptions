// derive.mjs — compute the cross-cycle status grid and regenerate the derived
// artifacts (status-grid.json, exemptions-master.json) from Layers 1 + 2.
// Node stdlib only.

import { readJSON, writeJSON, deriveGrid, loadLayer1, GRANT_STATUSES } from "./lib.mjs";

export function derive() {
  const ldoc = readJSON("analysis/lineages.json");
  const lineages = ldoc.lineages;
  const cycles = ldoc.cycles;
  const layer1 = loadLayer1(cycles);

  // ---- status grid ------------------------------------------------------
  const grid = {
    schema: "status-grid-v1",
    generated_by: "analysis/build/derive.mjs",
    cycles,
    lineages: lineages.map((lin) => ({
      id: lin.id,
      kind: lin.kind,
      facets: lin.facets,
      first_granted: lin.first_granted,
      member_cycles: lin.members.map((m) => m.cycle),
      grid: deriveGrid(lin, cycles),
    })),
  };
  writeJSON("analysis/derived/status-grid.json", grid);

  // ---- regenerated exemptions-master.json -------------------------------
  // Faithful consolidation in the legacy schema so the citation reference in
  // diagram.html's footer keeps resolving. This file is now GENERATED.
  const exemptions = lineages.map((lin) => {
    const byCycle = {};
    for (const m of lin.members) byCycle[m.cycle] = m;
    const derived = deriveGrid(lin, cycles);
    const per_cycle_status = {};
    cycles.forEach((y, i) => {
      const m = byCycle[y];
      if (!m) { per_cycle_status[y] = { status: derived[i] }; return; }
      if (GRANT_STATUSES.has(m.status)) {
        const e = { status: m.status };
        const l1 = layer1.byId[m.class_id];
        if (l1 && l1.class_number) e.class_number = l1.class_number;
        if (m.notes) e.notes = m.notes;
        if (m.partial_denials) e.partial_denials = m.partial_denials;
        per_cycle_status[y] = e;
      } else {
        const e = { status: m.status };
        if (m.class_number_proposed) e.class_number_proposed = m.class_number_proposed;
        if (m.reason_category) e.reason_category = m.reason_category;
        if (m.reason_quote) e.reason_quote = m.reason_quote;
        if (m.source_pdf_pages) e.source_pdf_pages = m.source_pdf_pages;
        if (m.notes) e.notes = m.notes;
        per_cycle_status[y] = e;
      }
    });
    return {
      id: lin.master_id || lin.id,
      lineage_id: lin.id,
      name: lin.name,
      category: lin.category,
      summary: lin.summary,
      first_granted: lin.first_granted,
      per_cycle_status,
      evolution_notes: lin.evolution_notes,
    };
  });

  const categories_in_order = [...new Set(lineages.map((l) => l.category))];
  writeJSON("analysis/derived/exemptions-master.json", {
    schema_version: 3,
    generated: new Date().toISOString().slice(0, 10),
    generator: "analysis/build/derive.mjs (GENERATED — do not hand-edit; edit analysis/lineages.json)",
    cycles_in_order: cycles,
    status_legend: ldoc.status_legend,
    denial_reason_categories: ldoc.denial_reason_categories,
    categories_in_order,
    notes: "Generated consolidation of analysis/lineages.json + the Layer-1 cycle-*.json files. The hand-built predecessor of this file was retired when the data layer landed; see analysis/DATA-LAYER-PROPOSAL.md.",
    exemptions,
  });

  return { lineages: lineages.length, cycles: cycles.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = derive();
  console.log(`derive: ${r.lineages} lineages × ${r.cycles} cycles → derived/status-grid.json, derived/exemptions-master.json`);
}
