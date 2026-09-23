/* Signal — editorial identity
 *
 * Who writes this, and on what authority. On a health site this is not
 * marketing copy: a reader deciding whether to trust a page about stopping
 * their blood thinners is entitled to know who wrote it and what they are
 * qualified in. It lives in data/ for the same reason every entry does —
 * one source, quoted identically in the footer of every page, on the About
 * page, and in the byline of all 84 entries.
 *
 * WHAT THE SITE CLAIMS, AND WHAT IT DOES NOT: Signal is authored by the
 * practising clinician named below. That is the clinical authority behind the
 * content, and there is no separate review gate. What the site does claim, on
 * every entry, is the thing that actually protects a reader — this is
 * educational information about concepts, and it does not replace the doctor
 * who has their history, their medicines and them in front of them.
 *
 * The per-entry `reviewedBy` / `lastReviewed` fields remain as an OPTIONAL
 * extra credit, for the case where a specialist contributes to a particular
 * entry. They are a credit, not a gate. See CLAUDE.md §7.6.
 */

window.EDITORIAL = {

  author: {
    name:        "Dr. Gopi Krishnan Palanivel",
    short:       "Dr. Gopi Krishnan Palanivel",
    credentials: "MD (Anaesthesia) · MBA (Healthcare & Hospital Management)",

    /* Primary role first — it is the one that gives the site its authority.
       An anaesthesiologist and intensivist is present for exactly the phase
       most patients understand least: the one they are unconscious for. */
    roles:       ["Specialist Anaesthesiologist & Intensivist",
                  "Geriatrician",
                  "Healthcare entrepreneur"],
    primaryRole: "Specialist Anaesthesiologist & Intensivist",
    affiliation: "St. Isabel's Hospital, Mylapore, Chennai",
    byline:      "Written and edited by Dr. Gopi Krishnan Palanivel, MD",

    /* The thesis of the whole project, in the author's own framing. */
    mission: "Signal exists to explain the medical concepts people meet around a hospital stay — the symptoms that decide whether you need admission, the procedures that happen once you are inside, and the medicines you are sent home with. Those three moments are where most patients are given the least explanation and asked to make the most consequential decisions."
  },

  /* The peri-hospitalisation arc. This is the spine of the site: the three
     sections are not three topics, they are three moments in one journey. */
  arc: {
    label: "The peri-hospitalisation arc",
    intro: "Most health sites are organised by body system or by disease. Signal is organised by when you need the information — because the questions a person actually asks change completely depending on where they are in a hospital stay."
  }

};
