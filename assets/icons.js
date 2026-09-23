/* Signal — animated icon set
 *
 * Every icon here is ORIGINAL WORK authored for this project as inline SVG
 * with CSS/SMIL animation. Nothing is imported, traced or derived from any
 * third-party icon set, stock library or GIF. There is therefore no licensing,
 * attribution or corporate-usage question anywhere on the site — and no
 * external network request, which keeps the pages fast and privacy-clean.
 *
 * Usage:  el.innerHTML = SignalIcon('heart', 34)
 *
 * All motion is wrapped so that `prefers-reduced-motion: reduce` stops it —
 * see the .sig-anim rule in each page's stylesheet.
 */
(function () {
  const S = {

    /* ── Heart: a genuine two-phase beat (squeeze, pause, squeeze, rest) ── */
    heart: (c) => `
      <g class="sig-anim sig-beat">
        <path d="M24 41s-15-9.4-15-20.2A8.8 8.8 0 0 1 24 15a8.8 8.8 0 0 1 15 5.8C39 31.6 24 41 24 41z"
              fill="${c}" opacity=".14"/>
        <path d="M24 41s-15-9.4-15-20.2A8.8 8.8 0 0 1 24 15a8.8 8.8 0 0 1 15 5.8C39 31.6 24 41 24 41z"
              fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/>
      </g>
      <path class="sig-anim sig-trace" d="M6 27h7l3-6 4 12 3.5-8 2.5 4h6"
            fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>`,

    /* ── Lungs: inflate and deflate on a slow, calm respiratory cycle ── */
    lungs: (c) => `
      <path d="M24 10v16" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M18 20h12" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
      <g class="sig-anim sig-breathe" style="transform-origin:24px 30px">
        <path d="M18 20c-6 1-9 7-9 14 0 5 1.5 8 5 8s6-2.5 6-7V20z"
              fill="${c}" opacity=".14" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M30 20c6 1 9 7 9 14 0 5-1.5 8-5 8s-6-2.5-6-7V20z"
              fill="${c}" opacity=".14" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      </g>`,

    /* ── Brain: signal travelling between nodes, one after another ── */
    brain: (c) => `
      <path d="M17 12c-5 0-8 3.6-8 8 0 2-2 3-2 6s2 4 2 6c0 4.4 3.4 7 8 7"
            fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M31 12c5 0 8 3.6 8 8 0 2 2 3 2 6s-2 4-2 6c0 4.4-3.4 7-8 7"
            fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M24 11v26" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
      <g fill="${c}">
        <circle cx="16" cy="19" r="2.4" class="sig-anim sig-fire" style="animation-delay:0s"/>
        <circle cx="24" cy="25" r="2.4" class="sig-anim sig-fire" style="animation-delay:.28s"/>
        <circle cx="32" cy="19" r="2.4" class="sig-anim sig-fire" style="animation-delay:.56s"/>
        <circle cx="24" cy="34" r="2.4" class="sig-anim sig-fire" style="animation-delay:.84s"/>
      </g>`,

    /* ── Gut: a peristaltic wave running along the tube ── */
    gut: (c) => `
      <path d="M14 10v9c0 7 20 5 20 12v7c0 4-3 6-7 6"
            fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" opacity=".3"/>
      <path class="sig-anim sig-flow" d="M14 10v9c0 7 20 5 20 12v7c0 4-3 6-7 6"
            fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"
            stroke-dasharray="9 60"/>
      <circle cx="14" cy="10" r="2.6" fill="${c}"/>`,

    /* ── Metabolism: two electrons orbiting a nucleus ── */
    metab: (c) => `
      <circle cx="24" cy="24" r="4.6" fill="${c}" opacity=".2"/>
      <circle cx="24" cy="24" r="4.6" fill="none" stroke="${c}" stroke-width="2"/>
      <g class="sig-anim sig-spin" style="transform-origin:24px 24px">
        <ellipse cx="24" cy="24" rx="15" ry="6.5" fill="none" stroke="${c}" stroke-width="1.8" opacity=".5"/>
        <circle cx="39" cy="24" r="2.6" fill="${c}"/>
      </g>
      <g class="sig-anim sig-spin-rev" style="transform-origin:24px 24px">
        <ellipse cx="24" cy="24" rx="15" ry="6.5" fill="none" stroke="${c}" stroke-width="1.8"
                 opacity=".5" transform="rotate(60 24 24)"/>
        <circle cx="31.5" cy="11" r="2.6" fill="${c}"/>
      </g>`,

    /* ── Microbe: a cell drifting, its flagellum whipping behind it ── */
    microbe: (c) => `
      <g class="sig-anim sig-drift">
        <ellipse cx="21" cy="24" rx="10" ry="8" fill="${c}" opacity=".16"/>
        <ellipse cx="21" cy="24" rx="10" ry="8" fill="none" stroke="${c}" stroke-width="2.2"/>
        <circle cx="18" cy="22" r="1.7" fill="${c}" opacity=".7"/>
        <circle cx="24" cy="26" r="1.4" fill="${c}" opacity=".7"/>
        <path class="sig-anim sig-whip" d="M31 24c4 0 4-4 8-4"
              fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"
              style="transform-origin:31px 24px"/>
      </g>`,

    /* ── Pain: waves radiating outward from a point ── */
    pain: (c) => `
      <circle cx="24" cy="24" r="4" fill="${c}"/>
      <circle class="sig-anim sig-radiate" cx="24" cy="24" r="9" fill="none"
              stroke="${c}" stroke-width="2" style="animation-delay:0s"/>
      <circle class="sig-anim sig-radiate" cx="24" cy="24" r="9" fill="none"
              stroke="${c}" stroke-width="2" style="animation-delay:.7s"/>
      <circle class="sig-anim sig-radiate" cx="24" cy="24" r="9" fill="none"
              stroke="${c}" stroke-width="2" style="animation-delay:1.4s"/>`,

    /* ── Shield: protection sweeping into place ── */
    shield: (c) => `
      <path d="M24 8l13 5v11c0 9-5.6 15-13 18-7.4-3-13-9-13-18V13z"
            fill="${c}" opacity=".13"/>
      <path d="M24 8l13 5v11c0 9-5.6 15-13 18-7.4-3-13-9-13-18V13z"
            fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/>
      <path class="sig-anim sig-check" d="M17.5 24.5l4.5 4.5 9-9"
            fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,

    /* ── Capsule: the daily-dose marker, with a travelling shine ── */
    pill: (c) => `
      <g transform="rotate(-40 24 24)">
        <rect x="12" y="18" width="24" height="12" rx="6" fill="${c}" opacity=".14"/>
        <rect x="12" y="18" width="24" height="12" rx="6" fill="none" stroke="${c}" stroke-width="2.2"/>
        <path d="M24 18v12" stroke="${c}" stroke-width="2.2"/>
        <rect class="sig-anim sig-shine" x="12" y="18" width="6" height="12" fill="${c}" opacity=".3"/>
      </g>`,

    /* ── Calendar: the every-day rhythm, ticking across the week ── */
    daily: (c) => `
      <rect x="9" y="13" width="30" height="26" rx="4" fill="none" stroke="${c}" stroke-width="2.2"/>
      <path d="M9 21h30" stroke="${c}" stroke-width="2.2"/>
      <path d="M17 9v6M31 9v6" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
      <g fill="${c}">
        <rect class="sig-anim sig-tick" x="14" y="26" width="5" height="5" rx="1.4" style="animation-delay:0s"/>
        <rect class="sig-anim sig-tick" x="21.5" y="26" width="5" height="5" rx="1.4" style="animation-delay:.35s"/>
        <rect class="sig-anim sig-tick" x="29" y="26" width="5" height="5" rx="1.4" style="animation-delay:.7s"/>
        <rect class="sig-anim sig-tick" x="14" y="32.5" width="5" height="5" rx="1.4" style="animation-delay:1.05s"/>
        <rect class="sig-anim sig-tick" x="21.5" y="32.5" width="5" height="5" rx="1.4" style="animation-delay:1.4s"/>
      </g>`,

    /* ── Bell: the when-needed marker, ringing only on demand ── */
    when: (c) => `
      <g class="sig-anim sig-ring" style="transform-origin:24px 13px">
        <path d="M24 10a10 10 0 0 1 10 10v7l3 5H11l3-5v-7a10 10 0 0 1 10-10z"
              fill="${c}" opacity=".14" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      </g>
      <path d="M20.5 36a3.5 3.5 0 0 0 7 0" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>`,

    /* ── Course: a bar that fills, then resets — finish what you started ── */
    course: (c) => `
      <rect x="8" y="20" width="32" height="9" rx="4.5" fill="none" stroke="${c}" stroke-width="2.2"/>
      <rect class="sig-anim sig-fill" x="10.5" y="22.5" width="27" height="4" rx="2" fill="${c}"
            style="transform-origin:10.5px 24.5px"/>
      <path d="M14 14v3M24 12v5M34 14v3" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>`,

    /* ── Eye: the pupil narrowing to light, then opening again ── */

    /* ── Ear: sound arriving as expanding rings, gathered by the outer ear ── */
    ear: (c) => `
      <path d="M17 20a7 7 0 0 1 14 0c0 4-3.5 5.5-3.5 9.5 0 3-1.5 5.5-4.5 5.5"
            fill="${c}" opacity=".12"/>
      <path d="M17 20a7 7 0 0 1 14 0c0 4-3.5 5.5-3.5 9.5 0 3-1.5 5.5-4.5 5.5"
            fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M22 21a2.6 2.6 0 0 1 5 0c0 2.4-2.2 3.2-2.2 5.6"
            fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <path d="M17 38c-2.5 0-4-1.8-4-4V22" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>
      <g fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round">
        <path class="sig-anim sig-radiate" d="M36 17a9 9 0 0 1 0 12" style="animation-delay:0s"/>
        <path class="sig-anim sig-radiate" d="M40 13a15 15 0 0 1 0 20" style="animation-delay:.35s" opacity=".6"/>
      </g>`,

    /* ── Tooth: the crown, with the root canal lit from the inside ── */
    tooth: (c) => `
      <path d="M24 11c-4 0-5-1.5-8.5-1.5C11 9.5 9 13 9 18c0 6 2.5 8 4 14 1 4 1.5 7 3.5 7s2.5-3 3-6.5c.5-3.2 1.5-5 4.5-5s4 1.8 4.5 5c.5 3.5 1 6.5 3 6.5s2.5-3 3.5-7c1.5-6 4-8 4-14 0-5-2-8.5-6.5-8.5C29 9.5 28 11 24 11z"
            fill="${c}" opacity=".12"/>
      <path d="M24 11c-4 0-5-1.5-8.5-1.5C11 9.5 9 13 9 18c0 6 2.5 8 4 14 1 4 1.5 7 3.5 7s2.5-3 3-6.5c.5-3.2 1.5-5 4.5-5s4 1.8 4.5 5c.5 3.5 1 6.5 3 6.5s2.5-3 3.5-7c1.5-6 4-8 4-14 0-5-2-8.5-6.5-8.5C29 9.5 28 11 24 11z"
            fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/>
      <path class="sig-anim sig-fill" d="M19 20v8M29 20v8" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".6"/>`,

    /* ── Breast: tissue in section, with a small focus under examination ── */
    breast: (c) => `
      <path d="M10 33c0-9 6-16 14-16s14 7 14 16" fill="${c}" opacity=".12"/>
      <path d="M10 33c0-9 6-16 14-16s14 7 14 16" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 33h32" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
      <circle cx="28" cy="27" r="3" fill="${c}" opacity=".9"/>
      <circle class="sig-anim sig-radiate" cx="28" cy="27" r="7" fill="none" stroke="${c}" stroke-width="1.8"/>`,

    eye: (c) => `
      <path d="M6 24s7-10 18-10 18 10 18 10-7 10-18 10S6 24 6 24z"
            fill="${c}" opacity=".12" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="6.5" fill="none" stroke="${c}" stroke-width="2.2"/>
      <circle class="sig-anim sig-pupil" cx="24" cy="24" r="3" fill="${c}"/>`,

    /* ── Bone: a joint flexing through its range ── */
    bone: (c) => `
      <g class="sig-anim sig-flex" style="transform-origin:24px 24px">
        <path d="M11 13a4.4 4.4 0 1 1 6.4 6L24 25.6" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M11 13a4.4 4.4 0 1 0-4.4 6.4" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>
      </g>
      <path d="M24 25.6l6.6 6.6a4.4 4.4 0 1 0 6.4-6" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M37 26a4.4 4.4 0 1 0-6.4-6" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="24" cy="25.6" r="2.6" fill="${c}" opacity=".5"/>`,

    /* ── Skin: layers, with a sensation spreading across the surface ── */
    skin: (c) => `
      <path d="M8 17c5-3 11-4.5 16-4.5S35 14 40 17" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 25c5-3 11-4.5 16-4.5S35 22 40 25" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".6"/>
      <path d="M8 33c5-3 11-4.5 16-4.5S35 30 40 33" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".35"/>
      <circle class="sig-anim sig-radiate" cx="24" cy="17" r="6" fill="none" stroke="${c}" stroke-width="1.8"/>`,

    /* ── Kidney: filtering, with drops forming and falling ── */
    kidney: (c) => `
      <path d="M20 10c-6 0-10 5.5-10 12s4 12 10 12c4 0 5-3 5-6s-2-4-2-6 2-3 2-6-1-6-5-6z"
            fill="${c}" opacity=".14" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M25 22h7" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".6"/>
      <g fill="${c}">
        <circle class="sig-anim sig-drop" cx="34" cy="28" r="2.2" style="animation-delay:0s"/>
        <circle class="sig-anim sig-drop" cx="34" cy="28" r="2.2" style="animation-delay:.9s"/>
      </g>`,

    /* ── Blood: a drop swelling, with cells drifting inside ── */
    blood: (c) => `
      <g class="sig-anim sig-swell" style="transform-origin:24px 28px">
        <path d="M24 9s11 12.5 11 19a11 11 0 0 1-22 0c0-6.5 11-19 11-19z"
              fill="${c}" opacity=".15" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      </g>
      <circle class="sig-anim sig-fire" cx="21" cy="28" r="2" fill="${c}" style="animation-delay:0s"/>
      <circle class="sig-anim sig-fire" cx="27" cy="31" r="2" fill="${c}" style="animation-delay:.5s"/>`,

    /* ── Scan: a beam sweeping down through the body ── */
    scan: (c) => `
      <path d="M9 16v-4a3 3 0 0 1 3-3h4M39 16v-4a3 3 0 0 0-3-3h-4M9 32v4a3 3 0 0 0 3 3h4M39 32v4a3 3 0 0 1-3 3h-4"
            fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="7" fill="${c}" opacity=".14" stroke="${c}" stroke-width="2"/>
      <rect class="sig-anim sig-sweep" x="10" y="23" width="28" height="2.4" rx="1.2" fill="${c}"/>`,

    /* ── Scalpel: a precise, controlled pass ── */
    scalpel: (c) => `
      <path d="M12 34l14-14 8-8a3.5 3.5 0 0 1 5 5l-8 8-14 14z" fill="${c}" opacity=".13"/>
      <path class="sig-anim sig-pass" d="M12 34l14-14 8-8a3.5 3.5 0 0 1 5 5l-8 8-14 14z"
            fill="none" stroke="${c}" stroke-width="2.3" stroke-linejoin="round"/>
      <path d="M9 39l5-5" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>`,

    /* ── Anaesthesia: consciousness fading, reversibly ── */
    sleep: (c) => `
      <path d="M31 8a13 13 0 1 0 9 22A15 15 0 0 1 31 8z"
            fill="${c}" opacity=".14" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      <g fill="none" stroke="${c}" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        <path class="sig-anim sig-float" d="M28 36h6l-6 6h6" style="animation-delay:0s"/>
        <path class="sig-anim sig-float" d="M37 27h5l-5 5h5" style="animation-delay:.8s" opacity=".7"/>
      </g>`,

    /* ── Oncology: one cell dividing into two ── */
    cell: (c) => `
      <circle cx="24" cy="24" r="12" fill="${c}" opacity=".1"/>
      <circle class="sig-anim sig-divide-a" cx="24" cy="24" r="8.5" fill="none" stroke="${c}" stroke-width="2.3"/>
      <circle class="sig-anim sig-divide-b" cx="24" cy="24" r="8.5" fill="none" stroke="${c}" stroke-width="2.3"/>
      <circle cx="24" cy="24" r="2.4" fill="${c}" opacity=".75"/>`,

    /* ── Fever: the column rising and settling ── */
    fever: (c) => `
      <path d="M20 27V13a4 4 0 0 1 8 0v14a7 7 0 1 1-8 0z"
            fill="none" stroke="${c}" stroke-width="2.3" stroke-linejoin="round"/>
      <circle cx="24" cy="33" r="4" fill="${c}"/>
      <rect class="sig-anim sig-rise-col" x="22.4" y="16" width="3.2" height="15" rx="1.6" fill="${c}"
            style="transform-origin:24px 31px"/>
      <path d="M31 15h4M31 20h4M31 25h4" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,

    /* ── Obstetrics: two heartbeats, one faster than the other ── */
    baby: (c) => `
      <path d="M24 40c-8 0-14-6.5-14-15 0-9 6-15 14-15s14 6 14 15c0 8.5-6 15-14 15z"
            fill="${c}" opacity=".11" stroke="${c}" stroke-width="2.2"/>
      <g class="sig-anim sig-beat" style="transform-origin:20px 23px">
        <path d="M20 28s-6-3.8-6-8.1A3.6 3.6 0 0 1 20 17a3.6 3.6 0 0 1 6 2.9c0 4.3-6 8.1-6 8.1z" fill="${c}"/>
      </g>
      <g class="sig-anim sig-beat-fast" style="transform-origin:30px 30px">
        <circle cx="30" cy="30" r="3.4" fill="${c}" opacity=".65"/>
      </g>`,

    /* ── Critical care: a supported, machine-steady waveform ── */
    vent: (c) => `
      <rect x="6" y="12" width="36" height="24" rx="4" fill="none" stroke="${c}" stroke-width="2.2"/>
      <path class="sig-anim sig-trace" d="M10 25h5l3-6 4 12 3-8 2.5 4h10"
            fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 40h12" stroke="${c}" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>`
  };

  /* Maps a free-text category or system label onto the closest icon.
   * Falls back to a neutral marker so a new label can never break a page. */
  const MAP = [
    [/anaesth/i, 'sleep'],       [/critical|ventil|intensive/i, 'vent'],
    [/cardiac|heart|circul|vascul/i, 'heart'],
    [/respir|lung|breath|pulmon/i, 'lungs'],
    [/neuro|brain|nerve|mood|mind/i, 'brain'],
    [/gastro|stomach|digest|bowel|abdom/i, 'gut'],
    [/breast|mammar/i, 'breast'],
    [/dental|tooth|dentist/i, 'tooth'],
    [/\bent\b|ear\b|otolog|tonsil/i, 'ear'],
    [/mental|psych|anxiet|depress/i, 'brain'],
    [/ophthalm|eye|visual/i, 'eye'],
    [/orthop|musculo|bone|joint/i, 'bone'],
    [/dermat|skin/i, 'skin'],
    [/renal|kidney|urin|urolog|genitourinary/i, 'kidney'],
    [/haemat|hemat|blood|transfus/i, 'blood'],
    [/diagnos|scan|imaging|endoscop/i, 'scan'],
    [/surg/i, 'scalpel'],
    [/oncol|cancer|chemo/i, 'cell'],
    [/obstet|matern|birth|pregnan/i, 'baby'],
    [/infect|infective|antibiot|microb/i, 'microbe'],
    [/hormon|metabol|endocrin|thyroid|diabet/i, 'metab'],
    [/pain|inflam/i, 'pain'],
    [/immun/i, 'shield'],
    [/general|systemic/i, 'fever']
  ];
  window.SignalIconName = function (label) {
    const s = String(label || '');
    for (const [re, name] of MAP) if (re.test(s)) return name;
    return 'pill';
  };
  window.SignalIconFor = function (label, size, color) {
    return window.SignalIcon(window.SignalIconName(label), size, color);
  };

  /* Renders one icon. `size` in px, `color` defaults to currentColor. */
  window.SignalIcon = function (name, size, color) {
    const body = S[name] || S.pill;
    const c = color || 'currentColor';
    return `<svg viewBox="0 0 48 48" width="${size || 34}" height="${size || 34}"
                 fill="none" aria-hidden="true" focusable="false">${body(c)}</svg>`;
  };

  window.SignalIconNames = Object.keys(S);
})();
