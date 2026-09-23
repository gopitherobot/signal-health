/* Signal — section identity
 *
 * The three topics are the spine of the site, so their names and framing are
 * content, not page furniture. They live here for the same reason every entry
 * does: one source, so the wording cannot drift between the landing page, the
 * section index and the 84 entry pages that sit underneath them.
 *
 * Each section carries:
 *   name    — the topic title. Rendered large. This is the h1 on an index page.
 *   kicker  — the question a reader actually arrives with, in their words.
 *   intro   — the thesis of the section in two sentences. The "why this exists".
 *   card    — the longer blurb used on the landing page pillar card.
 *   order   — the numeral shown on the landing card.
 *   phase   — WHERE IN A HOSPITAL STAY this section belongs. See below.
 *   when    — the phase spelled out for a reader.
 *
 * THE PHASE IS THE SPINE. The three sections are not three loose topics, they
 * are three moments in one journey: the symptoms that decide whether you need
 * admission, the procedures that happen once you are inside, and the medicines
 * you are sent home with. Most health sites organise by body system or by
 * disease; Signal organises by WHEN you need the information, because the
 * question a person asks changes completely depending on where they are.
 * Keep the phase visible — it is the reason the site is shaped this way.
 *
 * Keep `kicker` phrased as the reader's question, never as a feature. The
 * whole editorial premise of Signal is that people arrive with a question,
 * not a diagnosis, and these three lines are where that premise is stated.
 */

window.SECTIONS = {

  symptoms: {
    order: "01",
    phase: "Before",
    when:  "Before admission",
    name:   "Symptoms",
    kicker: "How worried should I be?",
    intro:  "Every symptom tells a story. Some are whispers, a few are alarms — and the skill that matters is not naming the disease, it is telling which is which, and knowing when to move.",
    card:   "Common symptoms sorted by real urgency — what's usually harmless, what's worth checking, and the red flags that mean act now."
  },

  procedures: {
    order: "02",
    phase: "During",
    when:  "During your stay",
    name:   "Procedures",
    kicker: "What will it do to my body?",
    intro:  "A procedure is not a name on a consent form. It is a change to your structure, your function and your chemistry — and you are entitled to see that change before you agree to it.",
    card:   "Common procedures explained across structure, function and chemistry — flip between before and after to see the whole picture."
  },

  medicines: {
    order: "03",
    phase: "After",
    when:  "After you go home",
    name:   "Medicines",
    kicker: "Every day, or only when I need it?",
    intro:  "Some medicines treat what you can feel. Others prevent what you cannot. Confusing the two is how people stop the tablets that were quietly keeping them well.",
    card:   "Find a medicine three ways — by how you take it, by drug class, or by the condition it treats."
  }

};
