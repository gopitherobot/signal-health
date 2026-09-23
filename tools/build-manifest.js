#!/usr/bin/env node
/*
 * Signal — manifest generator
 *
 * Writes data/manifest.js (window.SIGNAL_INDEX): one small record per entry across
 * all three sections. It exists so that:
 *   - a section page can render cross-links to the other two sections by NAME
 *     without loading their full data files (~200KB) on a low-bandwidth connection;
 *   - the landing page can search all three sections from a single ~20KB file.
 *
 * The manifest is DERIVED. Never hand-edit data/manifest.js — edit the data files
 * and re-run:   node tools/build-manifest.js
 *
 * This is not a build step for deployment: the site serves as plain static files
 * either way. It is a one-command regeneration after content changes.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'data', 'symptoms.js'));
require(path.join(ROOT, 'data', 'procedures.js'));
require(path.join(ROOT, 'data', 'medicines.js'));
require(path.join(ROOT, 'data', 'classification.js'));
const { SYMPTOMS, PROCEDURES, MEDICINES, PHARM, SYSTEMS } = global.window;

const rows = [];
const push = (s, k, d, group, tag) => rows.push({ s, k, n: d.name, c: group, m: d.mini, x: tag });

for (const [k, d] of Object.entries(SYMPTOMS))   push('symptoms',   k, d, d.system, d.rail);
for (const [k, d] of Object.entries(PROCEDURES)) push('procedures', k, d, d.cat, (d.urgency[0] || {}).c || 'planned');
for (const [k, d] of Object.entries(MEDICINES))  push('medicines',  k, d, d.cat, d.mode);

const esc = v => JSON.stringify(v);
const body = rows.map(r =>
  `{s:${esc(r.s)},k:${esc(r.k)},n:${esc(r.n)},c:${esc(r.c)},x:${esc(r.x)},m:${esc(r.m)}}`
).join(',\n');

/* Headline counts, so the landing page never quotes a stale number. */
const classCount = Object.values(PHARM)
  .reduce((n, fam) => n + Object.keys(fam.classes).length, 0);
const conditionCount = Object.values(SYSTEMS)
  .reduce((n, sys) => n + sys.conditions.length, 0);

const counts = {
  symptoms: Object.keys(SYMPTOMS).length,
  procedures: Object.keys(PROCEDURES).length,
  medicines: Object.keys(MEDICINES).length,
  classes: classCount,
  conditions: conditionCount
};

const out = `// Signal — GENERATED FILE. Do not edit by hand.
// Regenerate with:  node tools/build-manifest.js
// A lightweight index of every entry across all three sections, used for
// cross-section links and for unified search on the landing page.
//   s = section, k = slug, n = name, c = category/system, x = rail/urgency/mode, m = one-line hook
window.SIGNAL_INDEX = [
${body}
];

window.SIGNAL_COUNTS = ${JSON.stringify(counts)};
`;

fs.writeFileSync(path.join(ROOT, 'data', 'manifest.js'), out);
console.log(`manifest.js written — ${rows.length} entries ` +
  `(${counts.symptoms} symptoms, ${counts.procedures} procedures, ${counts.medicines} medicines; ` +
  `${counts.classes} drug classes, ${counts.conditions} conditions)`);
