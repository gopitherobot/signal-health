# Signal — Project Brief & Build Context

> This file is the single source of truth for what Signal is, how it's built, and the rules that must not be broken. It's written to give Claude Code (or any developer) enough context to rebuild the site faithfully, extend it, and deploy it publicly. Keep it in the repo root — Claude Code reads it automatically.

---

## 1. What Signal is

**Signal is a plain-language public health-education website** for the general public, written with the **Indian / South Asian context** in mind. It is deliberately *not* a symptom-checker, a drug index, or a diagnostic tool. It explains, in calm everyday language, the three things people most often need to understand — organised around the actual question a worried person arrives with.

| Section | The question it answers | Content | Signature interaction |
|---|---|---|---|
| **Symptoms** | *"How worried should I be?"* | 30 common symptoms | Urgency-first sorting + red flags |
| **Procedures** | *"What will it do to my body?"* | 30 common procedures | Before ↔ After toggle across 3 body layers |
| **Medicines** | *"Every day, or only when I have symptoms?"* | 24 medicine groups, 62 drug classes, 29 conditions | Take-daily / when-needed / course filter |

Every entry also carries a **clinical-review stamp** and a **`related` map** linking it to the other two sections. Both are described in §4.

The guiding principle across all three: **lead with the real question, be honest about uncertainty, and be built to prevent harm** (never to replace a doctor).

---

## 2. Core architecture principle — content is split from presentation

This is the most important structural decision and must be preserved.

- **All content lives in `data/*.js`** as plain JavaScript objects attached to `window` (`window.SYMPTOMS`, `window.PROCEDURES`, `window.MEDICINES`).
- **Each page is a renderer.** A section's `index.html` reads its data file and builds the tile grid; its `entry.html` reads the same file and renders one full article, chosen by `?e=<slug>`. The page logic contains *no content*.
- **Entries are pages, not modals.** Every entry has its own URL, so it can be shared, bookmarked, printed and indexed. There is still no per-entry HTML file — one template serves all of a section's entries.
- **To add an entry, you add an object to the data file** — the page picks it up automatically. This is what lets Signal scale from 20 entries to hundreds without touching page logic, and what would later let the same data feed a database, an API, or a mobile app.

No framework, no dependencies, no bundler. Plain static HTML/CSS/vanilla JS. This is intentional: it deploys anywhere, loads instantly, and has almost no attack surface or maintenance burden.

**One caveat to "no build step":** `data/manifest.js` is *generated* (see §3a). The site serves as plain static files either way — nothing is compiled — but after editing content you re-run one command so the cross-links and the landing-page search stay in step. It exists so a symptom page can name a related medicine without downloading every data file on a slow connection.

---

## 3. File structure

```
signal-health/
├── index.html              # Landing page — hero, search, pillars, trust
├── a-z.html                # Everything alphabetically (entries + conditions)
├── symptoms/
│   ├── index.html          # Tile grid from ../data/symptoms.js
│   └── entry.html          # One article, chosen by ?e=<slug>
├── procedures/
│   ├── index.html          # Tile grid from ../data/procedures.js
│   └── entry.html          # One article, chosen by ?e=<slug>
├── medicines/
│   ├── index.html          # Three views from ../data/medicines.js + classification.js
│   └── entry.html          # One article, chosen by ?e=<slug>
├── data/
│   ├── symptoms.js         # window.SYMPTOMS   — 30 entries
│   ├── procedures.js       # window.PROCEDURES — 30 entries
│   ├── medicines.js        # window.MEDICINES  — 24 entries
│   ├── classification.js   # window.PHARM (10 families / 62 classes)
│   │                       # window.SYSTEMS (10 systems / 29 conditions)
│   │                       # window.CLASSIFICATION_REVIEW
│   └── manifest.js         # GENERATED — window.SIGNAL_INDEX + window.SIGNAL_COUNTS
├── assets/
│   ├── icons.js            # Animated icon set + label→icon routing
│   ├── anim.css            # Shared motion layer
│   ├── theme.css           # THE design system — tokens, chrome, components
│   └── signal.js           # Review stamp, cross-links, TOC, progress, read time
├── tools/
│   ├── build-manifest.js   # Regenerates data/manifest.js
│   ├── sync-related.js     # Mirrors `related` links + reports dangling slugs
│   └── check.js            # Integrity + safety-rule gate (exits non-zero on failure)
├── CLAUDE.md               # This file
├── README.md               # Human-facing readme + push instructions
├── LICENSE                 # MIT + medical disclaimer
└── .gitignore
```

Because pages load data via relative `../data/` paths, **serve the site rather than opening files directly**:
```bash
cd signal-health && python3 -m http.server 8000   # → http://localhost:8000
```

### 3a. After editing content — run these two

Both are plain Node scripts with no dependencies. Neither is needed to *serve* the site; both are needed to keep derived data honest.

```bash
node tools/sync-related.js     # mirrors related links, fails loudly on a bad slug
node tools/build-manifest.js   # regenerates data/manifest.js
node tools/check.js            # verifies everything still holds together
```

- **`sync-related.js`** — `related` is a mutual relationship. Author the link in whichever direction feels natural; this script writes the other half, refuses to create self-links, caps each list at 6 per section so one popular entry cannot accumulate an enormous list, and **exits non-zero naming any slug that does not resolve**. That last part is the real safety net against a typo becoming a silently missing chip.
- **`build-manifest.js`** — rebuilds `data/manifest.js`: one small record per entry (section, slug, name, category, tag, hook) plus the headline counts. Pages read names from here instead of loading another section's full data file, and the landing page searches it. **Never hand-edit `data/manifest.js`.**
- **`check.js`** — the gate. Verifies schema completeness, that every cross-link resolves, that the procedure axes are exactly Structural/Functional/Chemical on both sides, that every medicine group is reachable from all three views, that the §7 safety rules still hold (banners present, no doses, red flags on every symptom and medicine), and that the manifest is not stale. Exits non-zero on failure, so it can gate a commit or a deploy. It also prints the current review count and warns about any uncited figure — both are reported rather than failed, because they are editorial decisions, not defects.

---

## 4. Data schemas (exact)

Every entry is keyed by a short slug (e.g. `chest`, `ga`, `bp`).

### Shared by all three — review stamp + cross-links

These two fields lead every entry, in all three data files:

```js
{
  reviewedBy: null,          // null OR the named clinician, e.g. "Dr A. Rao, MD"
  lastReviewed: null,        // null OR an ISO date, "YYYY-MM-DD"
  related: {                 // slugs into the other sections (and siblings)
    symptoms:   ['chest','breathless'],
    procedures: ['pci'],
    medicines:  ['statin']
  },
  // …then the section-specific fields below
}
```

- **`reviewedBy` / `lastReviewed`** drive the stamp near the foot of every entry page. While `reviewedBy` is `null` the entry renders a visible amber **"Pending clinical review"** notice; set it and the stamp turns green and names the reviewer and date. This is deliberately not subtle — an unreviewed entry should look unreviewed (§7.6). `data/classification.js` carries a single file-level `window.CLASSIFICATION_REVIEW` instead, because the taxonomy is reviewed as one coherent map rather than as 62 independent statements.
- **`related`** is rendered as the "Related on Signal" block in the article rail. Every chip is a link to `<section>/entry.html?e=<slug>`, resolved through the manifest; a slug missing from the manifest is skipped rather than rendered as a dead link. Run `tools/sync-related.js` after editing (§3a).

### Symptom — `window.SYMPTOMS[key]`
```js
{
  system: "Cardiac / respiratory",         // organ-system label
  name: "Chest pain",
  rail: "mix",                              // 'calm' | 'watch' | 'now' | 'mix' — colours the left rail
  mini: "One-line hook shown on the tile.",
  story: "2–4 sentence narrative framing the symptom honestly.",
  urgency: {
    level: "now",                          // 'calm' | 'watch' | 'now'
    badge: "Can be an emergency",          // short chip label
    text: "<b>Call emergency services…</b> HTML allowed."
  },
  flags: ["Red flag one", "Red flag two"], // the 'don't wait' list
  causes: [                                // relative frequency, NOT percentages
    { f: "common", n: "Musculoskeletal", d: "Short description." },
    // f ∈ 'common' | 'some' | 'rare'
  ],
  types: [ { n: "Pleuritic", d: "What it feels like / points to." } ],
  region: {
    t: "India/South-Asia-specific note (e.g. earlier CAD, TB, dengue).",
    note: "Standing caveat that regional patterns aren't individual diagnosis."
  }
}
```

### Procedure — `window.PROCEDURES[key]`
```js
{
  cat: "Anaesthesia",                      // category label
  name: "General anaesthesia",
  mini: "One-line hook.",
  story: "Narrative that reframes the fear honestly.",
  urgency: [ { c: "planned", t: "Usually planned" } ],  // c ∈ 'planned'|'urgent'|'emerg'; array (a procedure can be both)
  indications: "One sentence: when it's used.",
  axes: {                                  // THE signature data — the before/after model
    before: [
      { l: "Structural", b: "HTML-capable body text." },
      { l: "Functional", b: "…" },
      { l: "Chemical",   b: "…" }
    ],
    after: [ /* same three labels, the 'after' state */ ]
  },
  benefits: ["…"],                         // "Why it's done" column
  risks: ["…"],                            // "What to weigh" column
  rbnote: "One-line honest framing of the trade-off.",
  journey: [ { n: "Induction", d: "What happens at this step." } ],
  myths: [ { m: "\u201cThe myth in quotes.\u201d", t: "<b>Correction.</b>" } ],
  ask: ["Question to ask your doctor", "…"]
}
```
> **Axes must always have exactly 3 entries each (Structural / Functional / Chemical), in that order**, for the toggle to line up visually.

### Medicine — `window.MEDICINES[key]`
```js
{
  cat: "Heart & circulation",              // syndrome/system group
  name: "Blood-pressure medicines",
  mode: "daily",                           // 'daily' | 'when' | 'course' | 'mixed' — drives filter + rule banner colour
  modeText: "Take every day — even when you feel completely well",
  mini: "One-line hook.",
  story: "Narrative — often the key teaching moment.",
  why:  "Why it's prescribed.",
  how:  "How it helps, in plain language.",
  rule: "<b>The continue-or-symptomatic verdict.</b> The single most important field.",
  syndrome: "Conditions it's used in.",
  examples: "How it looks in practice (no brand names, no doses).",
  mistakes: ["Common dangerous error, e.g. stopping when you feel fine."],
  flags: ["When to seek advice."],
  ask: ["Question for the doctor/pharmacist."]
}
```

### Classification — `window.PHARM` and `window.SYSTEMS`

The medicines section has two further axes beyond "by rule", both living in `data/classification.js`.

```js
window.PHARM.<family> = {
  name: "Heart & circulation",
  icon: "heart",                           // name from assets/icons.js
  blurb: "One line framing the family.",
  classes: {
    acei: {
      name: "ACE inhibitors",
      tag:  "Blood pressure",              // short chip
      mech: "How it works, in plain language.",
      use:  "What it's used for.",
      note: "The one thing worth knowing.",
      med:  "bp",                          // key into window.MEDICINES
      mode: "daily"                        // 'daily' | 'when' | 'course' | 'mixed'
    }
  }
}

window.SYSTEMS.<system> = {
  name: "Heart & circulation",
  icon: "heart",
  blurb: "One line framing the system.",
  conditions: [{
    id: "htn", name: "High blood pressure",
    desc: "What the condition is.",
    classes: ["acei","arb"],               // ids from PHARM[*].classes
    meds: ["bp"],                          // keys from window.MEDICINES
    key: "The one thing worth knowing."
  }]
}
```

> **Invariant:** every medicine group should be reachable from all three views. A group with no class pointing at it (`med`) and no condition listing it (`meds`) is invisible in two of the three axes. Check with:
> ```bash
> node -e "global.window={};require('./data/medicines.js');require('./data/classification.js');const{MEDICINES:M,PHARM:P,SYSTEMS:S}=window;const c=new Set(),d=new Set();Object.values(P).forEach(f=>Object.values(f.classes).forEach(x=>x.med&&c.add(x.med)));Object.values(S).forEach(s=>s.conditions.forEach(x=>x.meds.forEach(m=>d.add(m))));console.log('no class:',Object.keys(M).filter(k=>!c.has(k)).join()||'none');console.log('no condition:',Object.keys(M).filter(k=>!d.has(k)).join()||'none')"
> ```

---

## 5. Design system

**Everything lives in `assets/theme.css`.** It is the single source of truth: tokens, chrome, controls, cards, the article layout, the safety components and the responsive rules. Pages add only the handful of layout rules unique to them. Do not reintroduce per-section stylesheets.

**Typography:**
- Display (headings, entry names): `'Instrument Serif', 'Iowan Old Style', Palatino, Georgia, serif`
- Body and UI: `'Geist', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Labels, eyebrows, meta: `'Geist Mono', ui-monospace, Menlo, monospace`

Loaded from Google Fonts with `display=swap` and real system fallbacks, so a slow connection renders immediately in the fallback and reflows when the webfont lands. This is the one external network request on the site.

**Aesthetic direction:** warm editorial, not clinical-cold. Paper backgrounds, generous whitespace, very large serif display type, a single rust accent, and rounded corners (16–28px). It should read like a thoughtful magazine, not a hospital form.

**One palette, site-wide.** The earlier per-section green/blue/violet tinting is gone. Sections are distinguished by an accent word and a label, not by their own colour — which matters, because it leaves the safety colours unambiguous wherever they appear.

| Token | Value | Used for |
|---|---|---|
| `--paper` | `#F3EFE7` | page background |
| `--card` | `#FBF9F5` | cards, tiles, panels |
| `--warm` / `--warm-deep` | `#EDE8DE` / `#E7DFD0` | table headers, feature art |
| `--line` | `#D9D3C7` | every border |
| `--ink` | `#15171B` | headings, dark bands |
| `--ink-body` | `#26282D` | article body copy |
| `--ink-muted` / `--ink-faint` | `#4E4C47` / `#5C5A55` | secondary text, meta |
| `--rust` | `#C43E17` | **the accent** — links, eyebrows, progress, focus |
| `--rust-deep` / `--rust-light` / `--rust-bg` | `#A33412` / `#F2A58C` / `#FBEDE7` | on light / on dark / tint |
| `--green` | `#1E4A3C` | the deep green band, reviewer mark |
| `--green-light` / `--green-pale` / `--green-bg` | `#A8D5BF` / `#D3E3DA` / `#DDE9E1` | on green / on green / tint |

**Safety colours, used identically everywhere:**
- Calm / safe / *keep taking it*: `--calm #2F6B4F`, bg `--calm-bg #DDE9E1`
- Watch / caution / *only when needed*: `--watch #8A5A00`, bg `--watch-bg #F6EDDB`
- Now / danger / *finish the course*: `--now #C43E17`, bg `--now-bg #FBEDE7`

`--accent` / `--accent-bg` alias the rust so shared components need no per-page overrides.

**Shared chrome, identical on all eight pages:**
1. **Utility bar** (`.utility`) — dark strip carrying *EDUCATIONAL, NOT A DOCTOR · IN AN EMERGENCY CALL 112*. Always the first thing on the page.
2. **Nav** (`.nav`) — ECG wordmark, the four sections, and a search link. On phones the links become a horizontally scrollable row rather than hiding behind a menu, so nothing becomes unreachable.
3. **Red safety banner** (`.safety`) — sits under the nav with the section-specific wording. Non-negotiable (see §7).
4. **Footer** (`.footer`) — four columns and an emergency line. Every link points at something that exists.

**Page components:**
5. **Hero** — eyebrow, very large display headline with one italic rust accent phrase, standfirst.
6. **Tile grid** (`.tilegrid` / `.tile`) — `repeat(auto-fill, minmax(300px, 1fr))`; each tile is an `<a>` to `entry.html?e=<slug>`.
7. **Article layout** (`.art-grid`) — TOC | article | rail. The TOC is generated from the article's `h2`s and scroll-spied; the rail carries related links and a safety card. Below 1200px the rail moves under the article rather than being dropped, because it is content.
8. **Reading progress** (`.progress`) — sticky rust bar, driven by `SignalArticle.init()`.
9. **Answer box** (`.answer`) — the dark "what you came to find out" block that opens every article.
10. **Related block** — `SignalRelated(entry)`, cross-section chips resolved through the manifest.
11. **Review stamp** — `SignalReview(entry)`, near the end of every article.

**`assets/signal.js` provides:** `SignalSlug`, `SignalReview`, `SignalReviewLine`, `SignalRelated`, `SignalKeepReading`, `SignalReadTime`, `SignalNotFound`, `SignalArticle.init`.

**Accessibility baseline (do not regress):** every page has a skip link, one `<main id="main">`, labelled search inputs, `role="status" aria-live="polite"` on the result counts, and `:focus-visible` rings from `theme.css`. Tile grids are `role="list"` with `role="listitem"` links. On phones the section nav becomes a scrollable row rather than disappearing. The medicines view switcher is a real `role="tablist"`; its collapsible family headers are `role="button"` with `tabindex="0"`, `aria-expanded`, and Enter/Space handling. Entry pages carry a generated, scroll-spied table of contents and print styles. `prefers-reduced-motion` is honoured in `anim.css` (icon layer) and `theme.css` (page layer). `tools/check.js` enforces all of this.

---

## 6. The three signature interactions (rebuild these precisely)

Each section has one distinctive interaction that carries its identity. These are the parts worth getting right.

**Symptoms — the urgency rail + red-flag block.**
Every tile has a coloured left rail (`calm`/`watch`/`now`, or a `mix` gradient for symptoms spanning the range), and the grid is **sorted loudest-first** so the emergencies are at the top. On the entry page the urgency verdict fills the dark answer box at the very top, and a rust-bordered "red flags — don't wait" block is the first `h2`, before causes. Causes use relative frequency chips (`common`/`some`/`rare`), never percentages.

**Procedures — the Before ↔ After toggle.**
A pill toggle switches the three axis cards (Structural / Functional / Chemical) between the `before` and `after` state. A sliding indicator animates between the two buttons and the cards re-render, changing their left-border colour (amber for *before*, green for *after*). The three axes stay in the same order so the reader watches each layer *change*. This is the section's whole conceptual hook, and it lives in the middle of the article page.

**Medicines — the mode filter + rule banner.**
A row of filter pills (`All / Take every day / Take when needed / Take as a course / Depends on type`) filters the grid with a live count. This lets someone instantly answer *"which of my medicines should I never stop?"* Each tile shows a coloured mode pill and rail. On the entry page a colour-coded **rule banner** is the very first thing in the article — green for *keep taking it*, amber for *only when needed*, rust for *finish the course* — followed by why/how, where it's used, the dangerous-mistakes block, when to seek advice, and questions to ask. The rail repeats the one-line rule so it stays visible while scrolling.

**The fourth surface — Conditions A–Z.** `a-z.html` lists all 84 entries plus the 29 conditions in one alphabetical index, filterable by type, with a sticky letter bar. Conditions have no page of their own, so they link into the medicines condition view via `?view=cond&q=<name>`.

---

## 7. Non-negotiable content & safety rules

These are not stylistic preferences — they are what keeps the project responsible and legally defensible. **Do not remove or soften them when rebuilding or extending.**

1. **Persistent red safety banner** on every page. Symptoms/procedures: "not a diagnosis / not medical advice." Medicines: **"Never start, stop or change a medicine based on this page."**
2. **No fake precision.** Frequency and risk are described in *relative, qualitative* terms (common / uncommon / rare; usually minor). No invented percentages, no fabricated country statistics. If real figures are ever added, each must carry a cited source.
3. **Red flags everywhere.** Every symptom and medicine entry names the signs that mean "seek care." This is the safety net for an educational tool that can't examine anyone.
4. **Medicines section carries no brand names and no doses — by design.** It's a *concepts* layer explaining groups of medicines, not a drug index (that space is mature and a medico-legal minefield). It exists to correct dangerous misconceptions — chiefly, stopping preventive medicines because you "feel fine" — never to instruct an individual.
5. **Everything is framed as general education, subordinate to the reader's own clinician.** The footer states nothing is a substitute for medical care.
6. **Physician sign-off is required before public deployment.** No entry is certified for real-user use until a named clinician has reviewed it. This is now tracked in the data: every entry carries `reviewedBy` / `lastReviewed` (§4), and while `reviewedBy` is `null` the entry openly displays a **"Pending clinical review"** notice. Do not pre-fill these fields with a placeholder name — an unreviewed entry must look unreviewed.

   In the medicines data, the discontinuation ("rule") advice for **anticoagulants, insulin, steroids, epilepsy medicines, antidepressants, TB medicines and sedatives** is genuinely safety-critical and needs particular scrutiny — a second clinician read is wise. TB medicines and sedatives join that list because both carry a two-sided instruction: complete the course / do not stop abruptly.
7. **Region-awareness is a feature, not decoration.** The India/South-Asia notes (TB, dengue, earlier coronary disease, B12 deficiency, filariasis, the "stone belt", etc.) are part of what differentiates Signal. Keep them accurate and clearly caveated.

---

## 8. Building & deploying the public website

The site is already deployable as-is — it's static. Pick a host:

**Option A — GitHub Pages (free, simplest if it's already on GitHub):**
Settings → Pages → deploy from `main` branch, root folder. Live at `https://<user>.github.io/signal-health/`. Note: project-pages serve from a subpath, and all internal links here are relative, so they'll work.

**Option B — Netlify / Vercel / Cloudflare Pages (free tier, custom domain, HTTPS):**
Connect the repo, no build command, publish directory = repo root. These give a cleaner root URL and easy custom-domain + HTTPS. Cloudflare Pages is a strong default for an India audience (good regional edge coverage).

**Going-live checklist (do these before it faces real users):**

Done:
- [x] **`reviewedBy` / `lastReviewed` per entry**, surfaced on every entry page, defaulting to a visible "Pending clinical review" notice.
- [x] **Accessibility pass** — focus trap, focus restore, ARIA roles, skip links, labelled inputs, live regions, `prefers-reduced-motion`. Baseline recorded in §5.
- [x] **Page `<title>`, `<meta name="description">`, canonical URL, Open Graph and Twitter card tags** on the index pages; entry pages set title and description from the entry at runtime.
- [x] **Entries are real pages** with their own URLs — shareable, printable (there are print styles) and indexable.
- [x] **One editorial design system** in `assets/theme.css`, with `tools/check.js` guarding the accessibility baseline.

Still open — **the first item is the blocker**:
- [ ] **Physician sign-off on all 84 entries plus the classification layer.** Nothing else on this list gates public use the way this does. Special attention to the medicines flagged in §7.6. Until then, every entry openly says it is unreviewed, which is the honest state — not a bug to paper over.
- [ ] **`og:image` per section.** The textual OG tags are in place; there is no image asset yet, so link previews will show no thumbnail.
- [ ] **Decide public vs private repo.** Push to a **private** repo first for backup + version control; make it public only when the content is signed off. Public + MIT means it's genuinely out there.
- [ ] **Confirm the LICENSE** — MIT is fine for the code; make sure you're happy to license the *content* that way too, or split them (e.g. code MIT, content CC-BY or all-rights-reserved).
- [ ] **Add real sources** if you ever replace any qualitative claim with a figure. One already needs this: the `weightloss` symptom cites "more than about 5% of body weight" — a standard clinical threshold, but the only number in the corpus, and currently uncited (§7.2).
- [ ] Add a privacy note if you introduce any analytics (prefer a privacy-respecting, cookieless one).

---

## 9. Suggested ways to work with this in Claude Code

Good first prompts once this file is in the repo:

- *"Read CLAUDE.md. Run the site locally and confirm all three sections render from their data files."*
- *"Add 10 more symptoms to data/symptoms.js following the exact schema in CLAUDE.md §4. Keep the region notes India-aware and the frequency bands qualitative. Then run tools/sync-related.js and tools/build-manifest.js."*
- *"Record Dr X's sign-off: set reviewedBy and lastReviewed on the entries they reviewed."*
- *"Add cited sources per entry — a new `sources` array — and surface them under the review stamp."*
- *"Add a print-friendly single-entry view so a clinician can hand a patient one page."*
- *"Add a service worker so the site works offline on a poor connection."*
- *"Set up deployment to Cloudflare Pages and write the steps into README."*

**Guardrails to give Claude Code:** never invent statistics or add brand-name/dose data to medicines; never remove the safety banners or disclaimers; keep content in `data/*.js` and out of page logic; preserve the three signature interactions.

---

## 10. Extension roadmap (ideas, not commitments)

Done since this file was first written:
- ~~Physician-review workflow surfaced in the UI (`reviewedBy` / `lastReviewed`).~~ — the *fields and UI* exist; the actual review does not.
- ~~Cross-linking between the three sections.~~ — `related`, mirrored by `tools/sync-related.js`.
- ~~Unified search across all three from the landing page.~~ — via the generated manifest.

Still ideas, not commitments:
- Cited references per entry (a `sources` array, rendered beneath the review stamp).
- Offline support (service worker) — genuinely useful for low-connectivity regions.
- Localisation (Tamil / Hindi) — the plain-language ethos suits translation well.
- Print-friendly single-entry view, so a clinician can hand a patient a page.
- `og:image` per section for link previews.
- A "reviewed only" toggle, so the site can go public with a signed-off subset while the rest stays in draft.

---

*Signal is an educational project. Nothing in this repository is a substitute for professional medical care, and no content should face real users until a qualified clinician has reviewed it.*
