// render.mjs — emit diagram-data.js and diagram-repair-data.js from the data
// layer (lineages.json + views/*.json). Node stdlib only.
//
// render() returns the two file bodies as strings; build.mjs writes them.

import {
  readJSON, deriveGrid, DIAGRAM_HEADER, REPAIR_HEADER,
} from "./lib.mjs";

// Build one matrix cell with keys in the frozen order: status, classNum,
// label, note, partial.
function buildCell(status, override, labelMap) {
  const cell = { status };
  if (override && override.classNum !== undefined) cell.classNum = override.classNum;
  cell.label = override && override.label !== undefined ? override.label : labelMap[status];
  if (override && override.note !== undefined) cell.note = override.note;
  if (override && override.partial) cell.partial = true;
  return cell;
}

export function renderDiagram() {
  const lineages = readJSON("analysis/lineages.json").lineages;
  const view = readJSON("analysis/views/diagram.json");
  const linById = Object.fromEntries(lineages.map((l) => [l.id, l]));
  const cycles = view.cycles;

  const matrix = [];
  for (const row of view.matrix) {
    if (row.type === "category") {
      const c = { type: "category", label: row.label };
      if (row.denialCategory) c.denialCategory = true;
      matrix.push(c);
      continue;
    }
    const lin = linById[row.ref];
    const grid = deriveGrid(lin, cycles);
    const cells = grid.map((status, i) => buildCell(status, row.cells[i], view.label_map));
    matrix.push({
      type: lin.kind === "grant" ? "exemption" : "denial",
      id: lin.id,
      name: lin.name,
      summary: row.summary,
      summaryTitle: row.summaryTitle,
      cells,
    });
  }

  const details = [];
  for (const e of view.details) {
    if (e.type === "h3") { details.push({ type: "h3", text: e.text }); continue; }
    const d = {
      type: "detail", id: e.ref, name: e.name, tagKind: e.tagKind, tag: e.tag,
      summaryRow: e.summaryRow, timeline: e.timeline,
    };
    if (e.evo !== undefined) d.evo = e.evo;
    details.push(d);
  }

  const obj = { cycles, matrix, details };
  return DIAGRAM_HEADER + `window.${view.global_name} = ` + JSON.stringify(obj, null, 2) + ";\n";
}

export function renderRepair() {
  const view = readJSON("analysis/views/diagram-repair.json");
  const ROWS = view.rows.map((r) => {
    if (r.group !== undefined) return { group: r.group };
    const cells = {};
    for (const [y, c] of Object.entries(r.cells)) {
      if (c.status === "na") { cells[y] = { status: "na" }; continue; }
      const cell = {
        status: c.status, classNum: c.classNum, headline: c.headline,
        longDesc: c.longDesc, quote: c.quote, citation: c.citation,
      };
      if (c.petitioners) cell.petitioners = c.petitioners;
      cells[y] = cell;
    }
    return { product: r.product, descr: r.descr, cells };
  });
  const obj = { CYCLES: view.cycles, ROWS };
  return REPAIR_HEADER + `window.${view.global_name} = ` + JSON.stringify(obj, null, 2) + ";\n";
}

export function render() {
  return { diagram: renderDiagram(), repair: renderRepair() };
}
