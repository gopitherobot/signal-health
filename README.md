# Signal

**Health, explained plainly — and by urgency.**

Signal is a two-part public health-education website:

- **Symptoms** — 20 common symptoms, each organised by *real urgency* (usually harmless / worth checking / act now), with red flags, likely causes in relative frequency bands, symptom types, and a region-aware note for the Indian and South Asian context.
- **Procedures** — 20 common medical procedures, each explained through a structural / functional / chemical model with a **before ↔ after** toggle, plus indications, a benefit/risk trade-off, the patient journey, myth-busting, and questions worth asking your doctor.
- **Medicines** — 16 common medicine *groups* (a concepts layer, deliberately **no brand names or doses**), each organised by the single most useful public distinction: **take every day / take when needed / take as a course**. Covers what each does, how it helps, the syndromes it treats, common dangerous mistakes (like stopping a preventive medicine because you "feel fine"), and questions to ask. Its signature feature is a mode filter to instantly see "which of my medicines should I never stop?"

The guiding idea: most health sites answer *"what could this be?"* Signal answers the questions people actually arrive with — *"how worried should I be?"*, *"what's really happening inside me?"*, and *"should I keep taking this medicine, or only when I have symptoms?"*

---

## ⚠️ Important — this is a prototype, not a published medical resource

**Nothing in this repository has been signed off for public deployment yet.** Before any of this content goes live to real users, every entry needs:

1. **Physician review and sign-off** — a named, qualified clinician accountable for each entry.
2. **Cited clinical sources** — the frequency bands and risk descriptions here are *illustrative teaching devices*, deliberately qualitative ("common / uncommon / rare", "usually minor"), **not statistics**. A production version must replace these with sourced, referenced figures or keep them qualitative by explicit editorial policy.
3. **A medico-legal review** — disclaimers, scope, and jurisdiction (this content leans India/South Asia-aware) should be checked by someone who understands the liability of publishing health information.

The persistent red banner, the "not a diagnosis" framing, and the footer disclaimers are all deliberate and should **not** be removed or softened.

**The Medicines section carries extra responsibility.** It deliberately gives no brand names or doses, and every entry's "rule" (take daily / when needed / as a course) is *general* — it exists to correct dangerous public misconceptions (chiefly, stopping preventive medicines because you feel well), never to instruct an individual. The banner on that section explicitly tells readers never to start, stop or change a medicine based on the page. A qualified clinician must sign off each entry, paying particular attention to the anticoagulant, insulin, steroid, epilepsy and antidepressant entries, where discontinuation advice is genuinely safety-critical.

---

## Structure

```
signal-health/
├── index.html              # Shared landing page
├── symptoms/
│   └── index.html          # Symptoms explorer (renders from ../data/symptoms.js)
├── procedures/
│   └── index.html          # Procedures explainer (renders from ../data/procedures.js)
├── medicines/
│   └── index.html          # Medicines guide (renders from ../data/medicines.js)
├── data/
│   ├── symptoms.js          # 20 symptom entries — window.SYMPTOMS
│   ├── procedures.js        # 20 procedure entries — window.PROCEDURES
│   └── medicines.js         # 16 medicine-group entries — window.MEDICINES
├── assets/                  # (reserved for future images/icons)
├── README.md
├── LICENSE
└── .gitignore
```

### Why content is split from presentation

All content lives in `data/*.js` as structured objects, completely separate from the HTML that renders it. This is deliberate: it's the architecture that lets the site scale from 20 entries to hundreds without touching the page logic, and it's what would later allow the same content to feed a database, an API, or an app. To add an entry, you add an object to the data file — the page picks it up automatically.

## Running locally

It's plain static HTML/CSS/JS — no build step. Because the pages load the data files with relative paths, use a tiny local server rather than opening the file directly:

```bash
cd signal-health
python3 -m http.server 8000
# then open http://localhost:8000
```

## Data shape

**Symptom** (`window.SYMPTOMS[key]`): `system`, `name`, `rail`, `mini`, `story`, `urgency{level,badge,text}`, `flags[]`, `causes[{f,n,d}]`, `types[{n,d}]`, `region{t,note}`.

**Procedure** (`window.PROCEDURES[key]`): `cat`, `name`, `mini`, `story`, `urgency[{c,t}]`, `indications`, `axes{before[{l,b}],after[{l,b}]}`, `benefits[]`, `risks[]`, `rbnote`, `journey[{n,d}]`, `myths[{m,t}]`, `ask[]`.

**Medicine** (`window.MEDICINES[key]`): `cat`, `name`, `mode` (`daily`/`when`/`course`/`mixed`), `modeText`, `mini`, `story`, `why`, `how`, `rule`, `syndrome`, `examples`, `mistakes[]`, `flags[]`, `ask[]`.

---

## Pushing this to your own GitHub

This repo was built as a clean, commit-ready starting point. To get it onto your GitHub:

```bash
# 1. From inside the signal-health folder:
cd signal-health
git init
git add .
git commit -m "Signal — 20 symptoms + 20 procedures + 16 medicine groups"

# 2. Create an EMPTY repo on github.com (no README/license — this repo has them).
#    Copy its URL, then:
git branch -M main
git remote add origin https://github.com/<your-username>/signal-health.git
git push -u origin main
```

If you'd rather use SSH, swap the remote URL for the `git@github.com:...` form. To publish it live for free, enable **GitHub Pages** in the repo's Settings → Pages, serving from the `main` branch root — the landing page will appear at `https://<your-username>.github.io/signal-health/`.

> Reminder before you enable Pages: publishing makes the medico-legal disclaimer above real. Get the physician sign-off first.

## Roadmap ideas

- Physician-review workflow (a `reviewed_by` / `last_reviewed` field per entry, surfaced in the UI).
- Sourced references per entry.
- Cross-linking: a symptom's likely procedures, and vice versa.
- Search across both sections from the landing page.
- Accessibility pass (focus trapping in the modal, ARIA roles, reduced-motion support).

## License

See [LICENSE](LICENSE). Content is authored educational material; the medico-legal caveats above apply regardless of license.
