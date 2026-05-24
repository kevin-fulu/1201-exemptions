// build.mjs — §1201 data-layer build pipeline entry point. Node stdlib only.
//
//   node analysis/build/build.mjs            validate → derive → render → write
//   node analysis/build/build.mjs --check    same, but no write (dry run)
//
// The data layer (analysis/lineages.json + analysis/views/*.json) is the
// source of truth; this regenerates diagram-data.js / diagram-repair-data.js
// and analysis/derived/*. validate.mjs is the integrity gate. Inspect `git
// diff` to see what an edit changed.

import { writeText, evalDataFile } from "./lib.mjs";
import { validate } from "./validate.mjs";
import { derive, writeDerived } from "./derive.mjs";
import { render } from "./render.mjs";

const check = process.argv.includes("--check");

// ---- 1. validate (integrity gate) ----------------------------------------
const { errors, warnings } = validate();
for (const w of warnings) console.log("  warn  " + w);
if (errors.length) {
  for (const e of errors) console.log("  ERROR " + e);
  console.log(`\nvalidate: ${errors.length} error(s) — aborting.`);
  process.exit(1);
}
console.log(`validate: ok (${warnings.length} warning(s))`);

// ---- 2. derive -----------------------------------------------------------
const d = derive();
console.log(`derive:   ${d.lineages} lineages × ${d.cycles} cycles → derived/status-grid.json, derived/exemptions-master.json`);

// ---- 3. render -----------------------------------------------------------
const out = render();

// ---- 4. self-check: rendered files are well-formed -----------------------
function selfCheck(code, globalName, keys) {
  let obj;
  try { obj = evalDataFile(code, globalName); }
  catch (e) { return `${globalName}: render output not evaluable — ${e.message}`; }
  if (!obj || typeof obj !== "object") return `${globalName}: global not assigned`;
  for (const k of keys) if (!(k in obj)) return `${globalName}: missing top-level key "${k}"`;
  return null;
}
const problems = [
  selfCheck(out.diagram, "DMCA1201_DIAGRAM", ["cycles", "matrix", "details"]),
  selfCheck(out.repair, "DMCA1201_REPAIR", ["CYCLES", "ROWS"]),
].filter(Boolean);
if (problems.length) {
  for (const p of problems) console.log("  ERROR " + p);
  console.log("\nrender: malformed output — aborting.");
  process.exit(1);
}
console.log("render:   diagram-data.js, diagram-repair-data.js — well-formed");

// ---- 5. write ------------------------------------------------------------
if (check) {
  console.log("\n--check: ok, no files written.");
  process.exit(0);
}
writeDerived(d);
writeText("diagram-data.js", out.diagram);
writeText("diagram-repair-data.js", out.repair);
console.log("write:    derived/status-grid.json, derived/exemptions-master.json, diagram-data.js, diagram-repair-data.js\n\nbuild ok.");
