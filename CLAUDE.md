# Signal — Project Brief & Build Context

> This file is the single source of truth for what Signal is, how it's built, and the rules that must not be broken. It's written to give Claude Code (or any developer) enough context to rebuild the site faithfully, extend it, and deploy it publicly. Keep it in the repo root — Claude Code reads it automatically.

---

## 1. What Signal is

**Signal is a plain-language public health-education website** for the general public, written with the **Indian / South Asian context** in mind. It is deliberately *not* a symptom-checker, a drug index, or a diagnostic tool. It explains, in calm everyday language, the three things people most often need to understand — organised around the actual question a worried person arrives with.

| Section | The question it answers | Content | Signature interaction |
|---|---|---|---|
| **Symptoms** | *"How worried should I be?"* | 20 common symptoms | Urgency-first sorting + red flags |
| **Procedures** | *"What will it do to my body?"* | 20 common procedures | Before ↔ After toggle across 3 body layers |
| **Medicines** | *"Every day, or only when I have symptoms?"* | 16 medicine groups | Take-daily / when-needed / course filter |

The guiding principle across all three: **lead with the real question, be honest about uncertainty, and be built to prevent harm** (never to replace a doctor).

---

## 2. Core architecture principle — content is split from presentation

This is the most important structural decision and must be preserved.

- **All content lives in `data/*.js`** as plain JavaScript objects attached to `window` (`window.SYMPTOMS`, `window.PROCEDURES`, `window.MEDICINES`).
- **Each page is a renderer.** The HTML/CSS/JS in each section's `index.html` reads its data file and builds the tiles and modal detail views from it. The page logic contains *no content*.
- **To add an entry, you add an object to the data file** — the page picks it up automatically. This is what lets Signal scale from 20 entries to hundreds without touching page logic, and what would later let the same data feed a database, an API, or a mobile app.

No build step, no framework, no dependencies. Plain static HTML/CSS/vanilla JS. This is intentional: it deploys anywhere, loads instantly, and has almost no attack surface or maintenance burden.

---

## 3. File structure

```
signal-health/
├── index.html              # Landing page — three-way hub
├── symptoms/
│   └── index.html          # Renders from ../data/symptoms.js
├── procedures/
│   └── index.html          # Renders from ../data/procedures.js
├── medicines/
│   └── index.html          # Renders from ../data/medicines.js
├── data/
│   ├── symptoms.js         # window.SYMPTOMS  — 20 entries
│   ├── procedures.js       # window.PROCEDURES — 20 entries
│   └── medicines.js        # window.MEDICINES  — 16 entries
├── assets/                 # (reserved for images/icons; .gitkeep placeholder)
├── CLAUDE.md               # This file
├── README.md               # Human-facing readme + push instructions
├── LICENSE                 # MIT + medical disclaimer
└── .gitignore
```

Because pages load data via relative `../data/` paths, **serve the site rather than opening files directly**:
```bash
cd signal-health && python3 -m http.server 8000   # → http://localhost:8000
```

---

## 4. Data schemas (exact)

Every entry is keyed by a short slug (e.g. `chest`, `ga`, `bp`).

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

---

## 5. Design system

**Typography (shared across all pages):**
- Serif (headings, names, story): `'Iowan Old Style','Palatino Linotype',Palatino,'Book Antiqua',Georgia,serif`
- Sans (body, UI): `'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif`

**Aesthetic direction:** warm, editorial, calm — *not* clinical-cold. Off-white paper backgrounds, generous whitespace, serif display type, soft shadows, rounded corners (14–18px). It should feel like a thoughtful magazine, not a hospital form. Each section has its own paper tint and accent so they feel related but distinct.

**Per-section palette:**

| | Accent | Accent-bg | Paper | Card | Ink |
|---|---|---|---|---|---|
| Landing | uses all three | — | `#f4f5f7` | `#ffffff` | `#161d24` |
| Symptoms | `--calm #3f7d6e` (green) | `#e6f0ec` | `#f6f3ec` | `#fffdf8` | `#14201d` |
| Procedures | `--deep #33507e` (blue) | `#e7ecf5` | `#f3f5f8` | `#ffffff` | `#141c26` |
| Medicines | `--plum #6d4b86` (violet) | `#efe8f4` | `#f5f2f7` | `#fffdff` | `#1e1726` |

**Shared functional colours (urgency / status), consistent site-wide:**
- Calm/safe/good: green `#2f7d63`–`#3f7d6e`, bg `#e3f0ea`/`#e6f0ec`
- Watch/caution: amber `#b8842b`, bg `#f6eddb`
- Now/danger/risk: red `#b23b2e`, bg `#f7e4e0`

**Shared components (same structure, section-tinted):**
1. **Red safety banner** — fixed at the very top of every page. Non-negotiable (see §7).
2. **Header** — `Signal.` serif wordmark + tagline + cross-links to the other two sections.
3. **Hero** — big serif headline with one italic accent word, subhead, section-specific framing.
4. **Search input** — filters tiles live by name/keywords.
5. **Tile grid** — `repeat(auto-fill, minmax(~240px, 1fr))`, each tile a button opening the modal.
6. **Modal "sheet"** — centered overlay with blurred scrim, `rise` entry animation, `×` close, Esc-to-close, click-outside-to-close. This is where the full entry renders.
7. **Footer disclaimer** — the "educational prototype, needs physician sign-off" text.

---

## 6. The three signature interactions (rebuild these precisely)

Each section has one distinctive interaction that carries its identity. These are the parts worth getting right.

**Symptoms — the urgency rail + red-flag block.**
Every tile has a coloured left rail (`calm`/`watch`/`now`, or a `mix` gradient for symptoms spanning the range). Inside the modal, the urgency verdict and a red-bordered "red flags — don't wait" list come *first*, before causes. Causes are shown with relative frequency chips (`common`/`some`/`rare`), never percentages. The whole section is organised so the "how worried?" answer is unmissable.

**Procedures — the Before ↔ After toggle.**
A pill toggle switches the three axis cards (Structural / Functional / Chemical) between the `before` and `after` state. Implementation: a sliding indicator animates between the two buttons; the three cards re-render and change their left-border colour (amber for *before*, blue for *after*) with a left-to-right background gradient wash. The three axes stay in the same order so the reader watches each layer *change*. This is the section's whole conceptual hook: you see what physically, functionally, and chemically transforms.

**Medicines — the mode filter + rule banner.**
A row of filter buttons (`All / Take every day / Take when needed / Take as a course / Depends on type`) filters the grid, with a live count ("Take every day — 11 groups"). This lets someone instantly answer *"which of my medicines should I never stop?"* Each tile shows a coloured mode pill. Inside the modal, a prominent colour-coded **rule banner** sits at the very top stating the take-daily/when-needed/course verdict — the single most useful thing on the page — followed by a two-column "why it's prescribed / how it helps", the syndrome, a red "common dangerous mistakes" block, when-to-seek-advice, and questions to ask.

---

## 7. Non-negotiable content & safety rules

These are not stylistic preferences — they are what keeps the project responsible and legally defensible. **Do not remove or soften them when rebuilding or extending.**

1. **Persistent red safety banner** on every page. Symptoms/procedures: "not a diagnosis / not medical advice." Medicines: **"Never start, stop or change a medicine based on this page."**
2. **No fake precision.** Frequency and risk are described in *relative, qualitative* terms (common / uncommon / rare; usually minor). No invented percentages, no fabricated country statistics. If real figures are ever added, each must carry a cited source.
3. **Red flags everywhere.** Every symptom and medicine entry names the signs that mean "seek care." This is the safety net for an educational tool that can't examine anyone.
4. **Medicines section carries no brand names and no doses — by design.** It's a *concepts* layer explaining groups of medicines, not a drug index (that space is mature and a medico-legal minefield). It exists to correct dangerous misconceptions — chiefly, stopping preventive medicines because you "feel fine" — never to instruct an individual.
5. **Everything is framed as general education, subordinate to the reader's own clinician.** The footer states nothing is a substitute for medical care.
6. **Physician sign-off is required before public deployment.** No entry is certified for real-user use until a named clinician has reviewed it. In the medicines data, the discontinuation ("rule") advice for **anticoagulants, insulin, steroids, epilepsy medicines, and antidepressants** is genuinely safety-critical and needs particular scrutiny — a second clinician read is wise.
7. **Region-awareness is a feature, not decoration.** The India/South-Asia notes (TB, dengue, earlier coronary disease, B12 deficiency, filariasis, the "stone belt", etc.) are part of what differentiates Signal. Keep them accurate and clearly caveated.

---

## 8. Building & deploying the public website

The site is already deployable as-is — it's static. Pick a host:

**Option A — GitHub Pages (free, simplest if it's already on GitHub):**
Settings → Pages → deploy from `main` branch, root folder. Live at `https://<user>.github.io/signal-health/`. Note: project-pages serve from a subpath, and all internal links here are relative, so they'll work.

**Option B — Netlify / Vercel / Cloudflare Pages (free tier, custom domain, HTTPS):**
Connect the repo, no build command, publish directory = repo root. These give a cleaner root URL and easy custom-domain + HTTPS. Cloudflare Pages is a strong default for an India audience (good regional edge coverage).

**Going-live checklist (do these before it faces real users):**
- [ ] **Physician sign-off** on all entries, with special attention to the five medicines flagged in §7.6. Consider adding a `reviewedBy` / `lastReviewed` field per entry and surfacing it in the UI.
- [ ] **Decide public vs private repo.** Push to a **private** repo first for backup + version control; make it public only when the content is signed off. Public + MIT means it's genuinely out there.
- [ ] **Confirm the LICENSE** — MIT is fine for the code; make sure you're happy to license the *content* that way too, or split them (e.g. code MIT, content CC-BY or all-rights-reserved).
- [ ] **Add real sources** if you ever replace any qualitative claim with a figure.
- [ ] **Accessibility pass** (see §9).
- [ ] Add a proper page `<title>`/meta and an `og:` image per section for link previews.
- [ ] Add a privacy note if you introduce any analytics (prefer a privacy-respecting, cookieless one).

---

## 9. Suggested ways to work with this in Claude Code

Good first prompts once this file is in the repo:

- *"Read CLAUDE.md. Run the site locally and confirm all three sections render from their data files."*
- *"Add 10 more symptoms to data/symptoms.js following the exact schema in CLAUDE.md §4. Keep the region notes India-aware and the frequency bands qualitative."*
- *"Do an accessibility pass on the modal: focus-trap it, add ARIA roles, restore focus on close, and honour prefers-reduced-motion. Don't change the visual design."*
- *"Add a `reviewedBy` and `lastReviewed` field to each entry's schema and surface a small 'Reviewed by … on …' line in each modal footer. Leave them blank/'Pending review' where unknown."*
- *"Add cross-linking: on a symptom, show related procedures/medicines, and vice versa, using a new `related` array of slugs."*
- *"Set up deployment to Cloudflare Pages and write the steps into README."*

**Guardrails to give Claude Code:** never invent statistics or add brand-name/dose data to medicines; never remove the safety banners or disclaimers; keep content in `data/*.js` and out of page logic; preserve the three signature interactions.

---

## 10. Extension roadmap (ideas, not commitments)

- Physician-review workflow surfaced in the UI (`reviewedBy` / `lastReviewed`).
- Cited references per entry.
- Cross-linking between the three sections (a symptom → its likely procedures → the medicines involved).
- Unified search across all three from the landing page.
- Offline support (service worker) — genuinely useful for low-connectivity regions.
- Localisation (Tamil / Hindi) — the plain-language ethos suits translation well.
- Print-friendly single-entry view, so a clinician can hand a patient a page.

---

*Signal is an educational project. Nothing in this repository is a substitute for professional medical care, and no content should face real users until a qualified clinician has reviewed it.*
