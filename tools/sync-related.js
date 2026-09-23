#!/usr/bin/env node
/*
 * Signal — related-link symmetry
 *
 * "Related" is a mutual relationship: if chest pain points at angioplasty, then
 * angioplasty should point back at chest pain. Authoring both directions by hand
 * across hundreds of links guarantees drift, so links are written in whichever
 * direction is natural and this script completes the other side.
 *
 * It also reports any slug that does not resolve, so a typo shows up here rather
 * than as a silently missing chip on the page.
 *
 * Run after editing any `related` array:   node tools/sync-related.js
 * Then regenerate the manifest:            node tools/build-manifest.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SECTIONS = ['symptoms', 'procedures', 'medicines'];
const GLOBAL = { symptoms: 'SYMPTOMS', procedures: 'PROCEDURES', medicines: 'MEDICINES' };

/* A cap keeps one popular entry (general anaesthesia, say) from accumulating a
   related list longer than the entry itself. Hand-authored links are kept first. */
const CAP = 6;

global.window = {};
SECTIONS.forEach(s => require(path.join(ROOT, 'data', s + '.js')));
const DATA = {};
SECTIONS.forEach(s => { DATA[s] = global.window[GLOBAL[s]]; });

/* ── 1. collect, validate, and mirror ── */
const rel = {};   // rel[section][slug][targetSection] = Set of slugs
SECTIONS.forEach(s => {
  rel[s] = {};
  Object.keys(DATA[s]).forEach(k => {
    rel[s][k] = { symptoms: new Set(), procedures: new Set(), medicines: new Set() };
  });
});

let dangling = 0;
SECTIONS.forEach(s => {
  for (const [k, d] of Object.entries(DATA[s])) {
    for (const t of SECTIONS) {
      for (const ref of (d.related && d.related[t]) || []) {
        if (!DATA[t][ref]) {
          console.error(`  dangling: ${s}/${k} -> ${t}/${ref}`);
          dangling++;
          continue;
        }
        if (t === s && ref === k) continue;          // never link to self
        rel[s][k][t].add(ref);
        rel[t][ref][s].add(k);                        // the mirrored half
      }
    }
  }
});

/* ── 2. write back, capped ── */
let added = 0, capped = 0;
SECTIONS.forEach(s => {
  const file = path.join(ROOT, 'data', s + '.js');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  let slug = null;

  const out = lines.map(line => {
    const open = line.match(/^  ([a-zA-Z0-9_]+): \{$/);
    if (open) { slug = open[1]; return line; }
    if (!slug || !/^    related: \{/.test(line)) return line;

    const original = DATA[s][slug].related;
    const parts = SECTIONS.map(t => {
      /* hand-authored links first, then mirrored ones, then cap */
      const authored = (original[t] || []).filter(x => DATA[t][x] && !(t === s && x === slug));
      const extra = [...rel[s][slug][t]].filter(x => !authored.includes(x)).sort();
      const all = authored.concat(extra);
      added += extra.length;
      if (all.length > CAP) capped += all.length - CAP;
      const list = all.slice(0, CAP);
      return `${t}: ` + (list.length ? "['" + list.join("','") + "']" : '[]');
    });
    return `    related: { ${parts.join(', ')} },`;
  });

  fs.writeFileSync(file, out.join('\n'));
});

console.log(`related links synced — ${added} mirrored link(s) added, ${capped} trimmed at the cap of ${CAP} per section`);
if (dangling) { console.error(`${dangling} dangling reference(s) — fix these.`); process.exit(1); }
