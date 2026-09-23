# Signal

**Health, explained plainly — and by urgency.**

Signal is a three-part public health-education website:

- **Symptoms** — 30 common symptoms, each organised by *real urgency* (usually harmless / worth checking / act now), with red flags, likely causes in relative frequency bands, symptom types, and a region-aware note for the Indian and South Asian context.
- **Procedures** — 30 common medical procedures, each explained through a structural / functional / chemical model with a **before ↔ after** toggle, plus indications, a benefit/risk trade-off, the patient journey, myth-busting, and questions worth asking your doctor.
- **Medicines** — 24 common medicine *groups* (a concepts layer, deliberately **no brand names or doses**), explorable along **three independent axes**: by the take-daily / when-needed / course rule, by **pharmacological drug class** (62 classes in 10 families), and by **condition** (29 conditions across 10 body systems). Each group covers what it does, how it helps, the syndromes it treats, common dangerous mistakes (like stopping a preventive medicine because you "feel fine"), and questions to ask. Its signature feature is a mode filter that instantly answers *"which of my medicines should I never stop?"*

Every entry also carries a **clinical-review stamp** and a **Related on Signal** block linking it across the three sections, and the landing page searches all 84 entries at once.

The guiding idea: most health sites answer *"what could this be?"* Signal answers the questions people actually arrive with — *"how worried should I be?"*, *"what's really happening inside me?"*, and *"should I keep taking this medicine, or only when I have symptoms?"*

---

## ⚠️ Important — this is a prototype, not a published medical resource

**Nothing in this repository has been signed off for public deployment yet.** Before any of this content goes live to real users, every entry needs:

1. **Physician review and sign-off** — a named, qualified clinician accountable for each entry. This is now tracked in the data: every entry has `reviewedBy` / `lastReviewed`, and until `reviewedBy` is set the entry openly displays a **"Pending clinical review"** notice on its page. As of today that is **all 84 entries**, plus the classification layer.
2. **Cited clinical sources** — the frequency bands and risk descriptions here are *illustrative teaching devices*, deliberately qualitative ("common / uncommon / rare", "usually minor"), **not statistics**. A production version must replace these with sourced, referenced figures or keep them qualitative by explicit editorial policy.
3. **A medico-legal review** — disclaimers, scope, and jurisdiction (this content leans India/South Asia-aware) should be checked by someone who understands the liability of publishing health information.

The persistent red banner, the "not a diagnosis" framing, and the footer disclaimers are all deliberate and should **not** be removed or softened.

**The Medicines section carries extra responsibility.** It deliberately gives no brand names or doses, and every entry's "rule" (take daily / when needed / as a course) is *general* — it exists to correct dangerous public misconceptions (chiefly, stopping preventive medicines because you feel well), never to instruct an individual. The banner on that section explicitly tells readers never to start, stop or change a medicine based on the page. A qualified clinician must sign off each entry, paying particular attention to the **anticoagulant, insulin, steroid, epilepsy, antidepressant, TB and sedative** entries, where the continue/stop advice is genuinely safety-critical. The last two carry a deliberately two-sided instruction — *complete the course* for TB, *never stop abruptly* for sedatives — and both halves matter.

---

## Structure

```
signal-health/
├── index.html              # Landing page + unified search across all three sections
├── a-z.html                # Everything alphabetically — entries and conditions
├── symptoms/
│   ├── index.html          # Tile grid (renders from ../data/symptoms.js)
│   └── entry.html          # One full article, chosen by ?e=<slug>
├── procedures/
│   ├── index.html          # Tile grid (renders from ../data/procedures.js)
│   └── entry.html          # One full article, chosen by ?e=<slug>
├── medicines/
│   ├── index.html          # Three views (rule / class / condition)
│   └── entry.html          # One full article, chosen by ?e=<slug>
├── data/
│   ├── symptoms.js          # 30 symptom entries — window.SYMPTOMS
│   ├── procedures.js        # 30 procedure entries — window.PROCEDURES
│   ├── medicines.js         # 24 medicine-group entries — window.MEDICINES
│   ├── classification.js    # window.PHARM (drug classes) + window.SYSTEMS (conditions)
│   └── manifest.js          # GENERATED — lightweight index of all 84 entries
├── assets/
│   ├── icons.js             # original animated SVG icon set — no third-party assets
│   ├── anim.css             # shared keyframes; honours prefers-reduced-motion
│   ├── theme.css            # the design system — tokens, chrome, components
│   └── signal.js            # review stamp, cross-links, TOC, progress, read time
├── tools/
│   ├── build-manifest.js    # regenerates data/manifest.js
│   ├── sync-related.js      # mirrors `related` links; fails loudly on a bad slug
│   └── check.js             # integrity + safety-rule gate
├── CLAUDE.md                # full project brief, schemas and safety rules
├── README.md
├── LICENSE
└── .gitignore
```

### Why content is split from presentation

All content lives in `data/*.js` as structured objects, completely separate from the HTML that renders it. This is deliberate: it's the architecture that lets the site scale from tens of entries to hundreds without touching the page logic, and it's what would later allow the same content to feed a database, an API, or an app. To add an entry, you add an object to the data file — the page picks it up automatically.

## Running locally

It's plain static HTML/CSS/JS — no framework, no bundler, no dependencies. Because the pages load the data files with relative paths, use a tiny local server rather than opening the file directly:

```bash
cd signal-health
python3 -m http.server 8000
# then open http://localhost:8000
```

### After editing any content

One file, `data/manifest.js`, is generated. It exists so a symptom page can name a related medicine without downloading every data file on a slow connection, and so the landing page can search everything from ~20 KB. Re-run these after any content change:

```bash
node tools/sync-related.js     # mirrors related links; exits non-zero on a bad slug
node tools/build-manifest.js   # regenerates data/manifest.js
node tools/check.js            # verifies the whole repo still holds together
```

None of these are needed to *serve* the site — nothing is compiled — but skipping the first two leaves cross-links and counts stale. **Never hand-edit `data/manifest.js`.**

`tools/check.js` is the one worth running before any commit. It checks schema completeness, that all 708 cross-links resolve, that the procedure axes are exactly Structural/Functional/Chemical on both sides, that every medicine group is reachable from all three views, that the safety rules in [CLAUDE.md](CLAUDE.md) §7 still hold (banners present, no doses in medicines, red flags on every symptom and medicine), and that the manifest is current. It exits non-zero on failure, and separately reports how many entries are still awaiting clinical review.

## Data shape

Every entry in all three sections begins with the same shared metadata:

**Shared**: `reviewedBy` (`null` or a named clinician), `lastReviewed` (`null` or `YYYY-MM-DD`), `related{symptoms[],procedures[],medicines[]}` (slugs into the other sections).

**Symptom** (`window.SYMPTOMS[key]`): `system`, `name`, `rail`, `mini`, `story`, `urgency{level,badge,text}`, `flags[]`, `causes[{f,n,d}]`, `types[{n,d}]`, `region{t,note}`.

**Procedure** (`window.PROCEDURES[key]`): `cat`, `name`, `mini`, `story`, `urgency[{c,t}]`, `indications`, `axes{before[{l,b}],after[{l,b}]}`, `benefits[]`, `risks[]`, `rbnote`, `journey[{n,d}]`, `myths[{m,t}]`, `ask[]`.

**Medicine** (`window.MEDICINES[key]`): `cat`, `name`, `mode` (`daily`/`when`/`course`/`mixed`), `modeText`, `mini`, `story`, `why`, `how`, `rule`, `syndrome`, `examples`, `mistakes[]`, `flags[]`, `ask[]`.

**Drug class** (`window.PHARM[family].classes[id]`): `name`, `tag`, `mech`, `use`, `note`, `med` (the `MEDICINES` key it belongs to), `mode`.

**Condition** (`window.SYSTEMS[system].conditions[]`): `id`, `name`, `desc`, `classes[]` (class ids), `meds[]` (medicine keys), `key` (the one thing worth knowing).

The two classification axes reference medicine keys and class ids rather than duplicating content, so all three views stay in sync from a single source of truth. Full schemas, invariants and safety rules are in [CLAUDE.md](CLAUDE.md).

## Design

One editorial system, in `assets/theme.css`: Instrument Serif for display, Geist for body and UI, Geist Mono for labels, on warm paper with a single rust accent. Sections are distinguished by an accent word rather than their own colour, which keeps the safety colours — green for *keep taking it*, amber for *only when needed*, rust for *act now* / *finish the course* — unambiguous wherever they appear.

Every entry is a full article page with a reading-progress bar, a generated table of contents, and a rail carrying related links. Below 1200px the rail moves under the article rather than disappearing, because it is content.

## Accessibility

Every page has a skip link, one `<main>` landmark, labelled search inputs, and live-region result counts. On phones the section nav becomes a scrollable row rather than hiding behind a menu, so nothing is unreachable. The medicines view switcher is a genuine tablist, and its collapsible headers are keyboard-operable. `prefers-reduced-motion: reduce` stops all motion, at both the icon and page level.

Entries are individually addressable — `symptoms/entry.html?e=chest` is a real page — so an explainer can be linked, shared, bookmarked or printed. Each entry page carries print styles that drop the chrome and keep the content.

## Motion and imagery

Every icon and animation is **original work authored for this project** as inline SVG with CSS keyframes (`assets/icons.js`, `assets/anim.css`). Nothing is imported, traced or derived from any third-party icon set, stock library or GIF — so there is no licensing, attribution or corporate-usage question, and no external network request. Motion always explains something (a heart beating, a course completing, peristalsis travelling), never decorates. All of it stops under `prefers-reduced-motion: reduce`.

---

## Pushing this to your own GitHub

```bash
cd signal-health
git add .
git commit -m "Signal — 30 symptoms, 30 procedures, 24 medicine groups"
git push
```

Setting up a fresh remote instead:

```bash
# Create an EMPTY repo on github.com (no README/license — this repo has them), then:
git branch -M main
git remote add origin https://github.com/<your-username>/signal-health.git
git push -u origin main
```

To publish it live for free, enable **GitHub Pages** in the repo's Settings → Pages, serving from the `main` branch root — the landing page will appear at `https://<your-username>.github.io/signal-health/`.

> Reminder before you enable Pages: publishing makes the medico-legal disclaimer above real. Get the physician sign-off first.

## Roadmap ideas

Done since the first draft:

- ~~Physician-review workflow surfaced in the UI~~ — the fields and the UI exist; **the review itself does not**.
- ~~Cross-linking: a symptom's likely procedures, and vice versa.~~
- ~~Search across all sections from the landing page.~~
- ~~Accessibility pass (focus trapping, ARIA roles, reduced-motion support).~~

Still open:

- Sourced references per entry.
- `og:image` per section — the textual Open Graph tags are in place, but there is no image asset yet.
- Offline support (service worker) — genuinely useful for low-connectivity regions.
- Localisation (Tamil / Hindi).
- Print-friendly single-entry view, so a clinician can hand a patient a page.
- A "reviewed only" toggle, so the site could go public with a signed-off subset while the rest stays in draft.

## License

See [LICENSE](LICENSE). Content is authored educational material; the medico-legal caveats above apply regardless of license.
