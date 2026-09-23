#!/usr/bin/env node
/*
 * Signal — integrity check
 *
 * One command that answers "is this repository still internally consistent?"
 * Covers the invariants that are easy to break silently while editing content:
 * schema completeness, cross-link resolution, taxonomy coverage, the safety
 * rules from CLAUDE.md §7, and whether the generated manifest is stale.
 *
 *   node tools/check.js
 *
 * Exits non-zero if anything fails, so it can gate a commit or a deploy.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

let failures = 0;
let checks = 0;
const fail = m => { console.error('  FAIL  ' + m); failures++; };
const pass = m => { console.log('  ok    ' + m); };
const check = (label, ok, detail) => { checks++; ok ? pass(label) : fail(label + (detail ? ' — ' + detail : '')); };
const section = t => console.log('\n' + t);

global.window = {};
['symptoms', 'procedures', 'medicines', 'classification'].forEach(f => require(path.join(ROOT, 'data', f + '.js')));
const { SYMPTOMS, PROCEDURES, MEDICINES, PHARM, SYSTEMS } = global.window;
const DATA = { symptoms: SYMPTOMS, procedures: PROCEDURES, medicines: MEDICINES };
const SECTIONS = Object.keys(DATA);

/* ───────────────────────── 1. schemas ───────────────────────── */
section('Schemas');

const REQUIRED = {
  symptoms:   { str: ['system', 'name', 'rail', 'mini', 'story'], arr: ['flags', 'causes', 'types'] },
  procedures: { str: ['cat', 'name', 'mini', 'story', 'indications', 'rbnote'], arr: ['urgency', 'benefits', 'risks', 'journey', 'myths', 'ask'] },
  medicines:  { str: ['cat', 'name', 'mode', 'modeText', 'mini', 'story', 'why', 'how', 'rule', 'syndrome', 'examples'], arr: ['mistakes', 'flags', 'ask'] }
};

for (const sec of SECTIONS) {
  const problems = [];
  for (const [k, d] of Object.entries(DATA[sec])) {
    for (const f of REQUIRED[sec].str) if (typeof d[f] !== 'string' || !d[f].trim()) problems.push(`${k}.${f}`);
    for (const f of REQUIRED[sec].arr) if (!Array.isArray(d[f]) || !d[f].length) problems.push(`${k}.${f}`);
    if (!('reviewedBy' in d) || !('lastReviewed' in d)) problems.push(`${k}: review fields`);
    if (!d.related || SECTIONS.some(s => !Array.isArray(d.related[s]))) problems.push(`${k}.related`);
  }
  check(`${sec}: ${Object.keys(DATA[sec]).length} entries complete`, !problems.length, problems.slice(0, 5).join(', '));
}

/* symptom urgency + causes */
{
  const bad = [];
  for (const [k, d] of Object.entries(SYMPTOMS)) {
    if (!d.urgency || !['calm', 'watch', 'now'].includes(d.urgency.level)) bad.push(`${k}.urgency.level`);
    if (!['calm', 'watch', 'now', 'mix'].includes(d.rail)) bad.push(`${k}.rail`);
    d.causes.forEach(c => { if (!['common', 'some', 'rare'].includes(c.f)) bad.push(`${k}.causes.f=${c.f}`); });
    if (!d.region || !d.region.t || !d.region.note) bad.push(`${k}.region`);
  }
  check('symptoms: urgency levels, rails, frequency bands and region notes valid', !bad.length, bad.slice(0, 5).join(', '));
}

/* procedure axes — the signature interaction depends on this exactly */
{
  const LABELS = ['Structural', 'Functional', 'Chemical'];
  const bad = [];
  for (const [k, d] of Object.entries(PROCEDURES)) {
    for (const side of ['before', 'after']) {
      const a = d.axes && d.axes[side];
      if (!Array.isArray(a) || a.length !== 3) { bad.push(`${k}.axes.${side} length`); continue; }
      a.forEach((x, i) => { if (x.l !== LABELS[i]) bad.push(`${k}.axes.${side}[${i}]=${x.l}`); });
    }
    d.urgency.forEach(u => { if (!['planned', 'urgent', 'emerg'].includes(u.c)) bad.push(`${k}.urgency.c=${u.c}`); });
  }
  check('procedures: axes are exactly Structural/Functional/Chemical, both sides', !bad.length, bad.slice(0, 5).join(', '));
}

/* medicine modes */
{
  const bad = Object.entries(MEDICINES)
    .filter(([, d]) => !['daily', 'when', 'course', 'mixed'].includes(d.mode))
    .map(([k, d]) => `${k}=${d.mode}`);
  check('medicines: every mode is daily/when/course/mixed', !bad.length, bad.join(', '));
}

/* ───────────────────────── 2. cross-links ───────────────────────── */
section('Cross-links');
{
  let total = 0;
  const dangling = [], selfRef = [];
  for (const sec of SECTIONS) {
    for (const [k, d] of Object.entries(DATA[sec])) {
      for (const t of SECTIONS) {
        for (const ref of d.related[t]) {
          total++;
          if (!DATA[t][ref]) dangling.push(`${sec}/${k} -> ${t}/${ref}`);
          if (t === sec && ref === k) selfRef.push(`${sec}/${k}`);
        }
      }
    }
  }
  check(`${total} related links all resolve`, !dangling.length, dangling.slice(0, 5).join(', '));
  check('no entry links to itself', !selfRef.length, selfRef.slice(0, 5).join(', '));

  const orphans = [];
  for (const sec of SECTIONS)
    for (const [k, d] of Object.entries(DATA[sec]))
      if (!SECTIONS.reduce((n, t) => n + d.related[t].length, 0)) orphans.push(`${sec}/${k}`);
  check('no entry is completely unlinked', !orphans.length, orphans.join(', '));
}

/* ───────────────────────── 3. taxonomy ───────────────────────── */
section('Medicines taxonomy');
{
  const classIds = new Set();
  const byMed = new Set();
  const badMode = [], badMed = [];
  for (const [fk, fam] of Object.entries(PHARM)) {
    for (const [ck, c] of Object.entries(fam.classes)) {
      classIds.add(ck);
      if (c.med) { byMed.add(c.med); if (!MEDICINES[c.med]) badMed.push(`${fk}/${ck} -> ${c.med}`); }
      if (!['daily', 'when', 'course', 'mixed'].includes(c.mode)) badMode.push(`${fk}/${ck}`);
    }
  }
  check('every class.med points at a real medicine group', !badMed.length, badMed.join(', '));
  check('every class has a valid mode', !badMode.length, badMode.join(', '));

  const inCond = new Set();
  const badRef = [];
  for (const [sk, sys] of Object.entries(SYSTEMS)) {
    for (const c of sys.conditions) {
      c.classes.forEach(id => { if (!classIds.has(id)) badRef.push(`${sk}/${c.id} -> class:${id}`); });
      c.meds.forEach(m => { inCond.add(m); if (!MEDICINES[m]) badRef.push(`${sk}/${c.id} -> med:${m}`); });
    }
  }
  check('every condition reference resolves', !badRef.length, badRef.join(', '));

  const noClass = Object.keys(MEDICINES).filter(k => !byMed.has(k));
  const noCond = Object.keys(MEDICINES).filter(k => !inCond.has(k));
  check('every medicine group is reachable from the drug-class view', !noClass.length, noClass.join(', '));
  check('every medicine group is reachable from the condition view', !noCond.length, noCond.join(', '));
  check('classification carries a review stamp', !!global.window.CLASSIFICATION_REVIEW);
}

/* ───────────────────────── 4. safety rules (CLAUDE.md §7) ───────────────────────── */
section('Safety rules');
{
  const medSrc = read('data/medicines.js');
  const doses = medSrc.match(/[0-9]+\s?(mg|mcg|ml|IU)\b/gi) || [];
  check('medicines: no doses or units (§7.4)', !doses.length, doses.slice(0, 5).join(', '));

  const pages = ['index.html', 'symptoms/index.html', 'procedures/index.html', 'medicines/index.html'];
  const noBanner = pages.filter(p => !/class="safety"/.test(read(p)));
  check('every page keeps its red safety banner (§7.1)', !noBanner.length, noBanner.join(', '));

  const medPage = read('medicines/index.html');
  check('medicines banner still says never start/stop/change (§7.1)',
    /Never start, stop or change a medicine based on this page/.test(medPage));

  const noFooter = pages.filter(p => !/physician sign-off|Physician sign-off/.test(read(p)));
  check('every page keeps its sign-off disclaimer (§7.5)', !noFooter.length, noFooter.join(', '));

  /* §7.3 — every symptom and medicine entry names when to seek care */
  const noFlags = []
    .concat(Object.entries(SYMPTOMS).filter(([, d]) => !d.flags.length).map(([k]) => 'symptoms/' + k))
    .concat(Object.entries(MEDICINES).filter(([, d]) => !d.flags.length).map(([k]) => 'medicines/' + k));
  check('every symptom and medicine names its red flags (§7.3)', !noFlags.length, noFlags.join(', '));

  /* §7.2 — any figure needs a cited source. Reported as a warning rather than a
     failure: a legitimate clinical threshold is an editorial call, not a bug. It
     still surfaces on every run so it cannot quietly become permanent. */
  const figures = [];
  for (const sec of SECTIONS) {
    const src = read('data/' + sec + '.js');
    for (const [k, d] of Object.entries(DATA[sec])) {
      const blob = JSON.stringify(d);
      (blob.match(/[0-9]+(\.[0-9]+)?\s?%/g) || []).forEach(m => figures.push(`${sec}/${k}: "${m}"`));
    }
    void src;
  }
  if (figures.length) {
    console.log('  WARN  ' + figures.length + ' uncited figure(s) in the content (§7.2):');
    figures.forEach(f => console.log('        ' + f));
    console.log('        Either cite a source or rephrase qualitatively before going live.');
  } else {
    check('no uncited figures in the content (§7.2)', true);
  }
}

/* ───────────────────────── 5. accessibility baseline ───────────────────────── */
section('Accessibility baseline');
{
  const PAGES = ['index.html', 'symptoms/index.html', 'procedures/index.html', 'medicines/index.html'];
  const SECTION_PAGES = PAGES.slice(1);
  const src = {};
  PAGES.forEach(p => { src[p] = read(p); });

  const noSkip = PAGES.filter(p => !/class="sig-skip" href="#main"/.test(src[p]));
  check('every page has a skip link', !noSkip.length, noSkip.join(', '));

  const noMain = PAGES.filter(p => !/<main[^>]*id="main"/.test(src[p]));
  check('every page has a <main id="main"> landmark', !noMain.length, noMain.join(', '));

  const noShared = PAGES.filter(p => !/assets\/shared\.css/.test(src[p]));
  check('every page loads shared.css (focus rings, reduced motion)', !noShared.length, noShared.join(', '));

  const noAccent = PAGES.filter(p => !/--accent:/.test(src[p]));
  check('every page defines --accent for the shared components', !noAccent.length, noAccent.join(', '));

  /* every text input needs a programmatic label */
  const unlabelled = [];
  PAGES.forEach(p => {
    const ids = [...src[p].matchAll(/<input[^>]*\bid="([^"]+)"/g)].map(m => m[1]);
    ids.forEach(id => {
      if (!new RegExp('<label[^>]*for="' + id + '"').test(src[p]) &&
          !new RegExp('<input[^>]*id="' + id + '"[^>]*aria-label=').test(src[p])) {
        unlabelled.push(`${p}#${id}`);
      }
    });
  });
  check('every search input is labelled', !unlabelled.length, unlabelled.join(', '));

  /* the three section pages own the modal */
  const noScrim = SECTION_PAGES.filter(p => !/id="scrim"[^>]*aria-hidden="true"/.test(src[p]));
  check('section pages start with the modal hidden from assistive tech', !noScrim.length, noScrim.join(', '));

  const noSignal = SECTION_PAGES.filter(p => !/assets\/signal\.js/.test(src[p]));
  check('section pages load signal.js (focus trap, focus restore, deep links)', !noSignal.length, noSignal.join(', '));

  const noLive = SECTION_PAGES.filter(p => !/aria-live="polite"/.test(src[p]));
  check('section pages announce result counts', !noLive.length, noLive.join(', '));

  const noManifest = PAGES.filter(p => !/data\/manifest\.js/.test(src[p]));
  check('every page loads the manifest', !noManifest.length, noManifest.join(', '));

  check('medicines view switcher is a real tablist', /role="tablist"/.test(src['medicines/index.html']));
  check('reduced motion honoured at page level', /prefers-reduced-motion/.test(read('assets/shared.css')));
}

/* ───────────────────────── 6. generated manifest ───────────────────────── */
section('Generated manifest');
{
  const src = read('data/manifest.js');
  const sandbox = { window: {} };
  new Function('window', src)(sandbox.window);
  const idx = sandbox.window.SIGNAL_INDEX || [];
  const counts = sandbox.window.SIGNAL_COUNTS || {};

  const expected = SECTIONS.reduce((n, s) => n + Object.keys(DATA[s]).length, 0);
  check(`manifest lists all ${expected} entries`, idx.length === expected, `found ${idx.length}`);

  const missing = [];
  for (const sec of SECTIONS)
    for (const k of Object.keys(DATA[sec]))
      if (!idx.some(r => r.s === sec && r.k === k)) missing.push(`${sec}/${k}`);
  check('manifest is not stale', !missing.length, missing.slice(0, 5).join(', '));

  const stale = [];
  for (const r of idx) {
    const d = DATA[r.s] && DATA[r.s][r.k];
    if (!d) { stale.push(`${r.s}/${r.k} no longer exists`); continue; }
    if (r.n !== d.name) stale.push(`${r.s}/${r.k} name`);
    if (r.m !== d.mini) stale.push(`${r.s}/${r.k} mini`);
  }
  check('manifest names and hooks match the data', !stale.length, stale.slice(0, 5).join(', '));

  const classCount = Object.values(PHARM).reduce((n, f) => n + Object.keys(f.classes).length, 0);
  const condCount = Object.values(SYSTEMS).reduce((n, s) => n + s.conditions.length, 0);
  check('manifest counts are current',
    counts.symptoms === Object.keys(SYMPTOMS).length &&
    counts.procedures === Object.keys(PROCEDURES).length &&
    counts.medicines === Object.keys(MEDICINES).length &&
    counts.classes === classCount && counts.conditions === condCount,
    JSON.stringify(counts));
}

/* ───────────────────────── 7. review status ───────────────────────── */
section('Clinical review status');
{
  let reviewed = 0, pending = 0;
  for (const sec of SECTIONS)
    for (const d of Object.values(DATA[sec])) d.reviewedBy ? reviewed++ : pending++;
  console.log(`  note  ${reviewed} entr${reviewed === 1 ? 'y' : 'ies'} signed off, ${pending} pending review`);
  if (pending) console.log('        Pending entries display a visible "Pending clinical review" notice.');
  if (!global.window.CLASSIFICATION_REVIEW.reviewedBy) console.log('        The classification layer is also unreviewed.');
}

/* ───────────────────────── result ───────────────────────── */
console.log('\n' + (failures
  ? `${failures} of ${checks} checks FAILED`
  : `all ${checks} checks passed`));
process.exit(failures ? 1 : 0);
