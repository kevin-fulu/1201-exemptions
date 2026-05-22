// comments.mjs — generate analysis/comments.json (Layer 1) by normalizing the
// four first-round-comments/*/manifest.csv files into one JSON table.
//
// Run when the manifests change:  node analysis/build/comments.mjs
// Not part of build.mjs — the comment manifests change only once per cycle.

import fs from "node:fs";
import { A, writeJSON } from "./lib.mjs";

const CYCLES = [2015, 2018, 2021, 2024];

// minimal RFC-4180 CSV parser (quoted fields, embedded commas/quotes/newlines)
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field); field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ""));
}

const comments = [];
for (const cycle of CYCLES) {
  const raw = fs.readFileSync(A(`1201/first-round-comments/${cycle}/manifest.csv`), "utf8");
  const rows = parseCSV(raw);
  const header = rows[0];
  const col = (r, name) => r[header.indexOf(name)];
  for (const r of rows.slice(1)) {
    const local = col(r, "local_filename");
    const proposedClass = local.split("_")[0]; // ClassNN / General / Class03a-and-3b
    comments.push({
      comment_id: `${cycle}:${local.replace(/\.pdf$/i, "")}`,
      cycle,
      proposed_class: proposedClass,
      class_label_as_filed: col(r, "class"),
      party: col(r, "party"),
      source_url: col(r, "source_url"),
      local_filename: local,
      http_status: Number(col(r, "http_status")),
      bytes: Number(col(r, "bytes")),
      sha256: col(r, "sha256"),
    });
  }
}

writeJSON("analysis/comments.json", {
  schema: "comments-v1",
  generated_by: "analysis/build/comments.mjs — normalized from first-round-comments/*/manifest.csv",
  note: "First-round NPRM comments, 2015/2018/2021/2024 cycles. proposed_class is the ClassNN prefix of local_filename; class_label_as_filed is the verbatim manifest `class` column (format varies by cycle). The manifest.csv files remain the source of truth.",
  cycles: CYCLES,
  count: comments.length,
  comments,
});

const byCycle = {};
for (const c of comments) byCycle[c.cycle] = (byCycle[c.cycle] || 0) + 1;
console.log(`comments.json: ${comments.length} comments`, byCycle);
