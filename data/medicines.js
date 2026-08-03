// Signal · Medicines — content database
// 16 common drug GROUPS explained by syndrome and, crucially, by whether they are
// taken every day, only when needed, or as a fixed course.
// This is a CONCEPTS layer, not a drug index: no brand names, no doses. It exists to
// correct the single most dangerous public misunderstanding — stopping a preventive
// medicine because you "feel fine".
// Every entry needs physician sign-off before any public deployment. Nothing here is
// individual advice; a person's own doctor's instructions always override it.
// mode: 'daily' | 'when' | 'course' | 'mixed'

window.MEDICINES = {
  bp: {
    cat: "Heart & circulation", name: "Blood-pressure medicines", mode: "daily",
    modeText: "Take every day — even when you feel completely well",
    mini: "High blood pressure has no symptoms. That's exactly why the tablets must continue.",
    story: "This is the most important idea on this whole page. High blood pressure usually causes no symptoms at all — you cannot feel it. The tablets don't make you 'feel better' because there was nothing to feel. What they do is quietly lower the pressure that, over years, damages arteries and leads to strokes, heart attacks and kidney disease. The commonest and most dangerous mistake in all of medicine-taking is stopping these because you 'feel fine'. Feeling fine is the medicine working, not a reason to stop it.",
    why: "To lower the sustained pressure in your arteries and prevent the strokes, heart attacks and kidney damage that high pressure causes over time.",
    how: "Different groups work in different ways — relaxing artery walls, removing excess salt and water, or easing the heart's workload — but all bring the numbers down to a safer range.",
    rule: "<b>Every day, indefinitely, unless your doctor changes it.</b> Blood pressure rises straight back up when the medicine stops — often silently. You keep taking it precisely because it removes the symptom you were never able to feel.",
    syndrome: "Hypertension; also used in heart failure, after heart attack, in kidney disease and diabetes to protect the organs.",
    examples: "Several classes exist — some relax vessels, some shed salt and water, some slow the heart. Many people need more than one to reach target.",
    mistakes: [
      "Stopping because 'my blood pressure is fine now' — it's fine <i>because</i> of the tablet.",
      "Taking it only when you feel tense or have a headache — it doesn't work that way.",
      "Stopping because of a side effect without telling anyone — there are usually alternatives."
    ],
    flags: ["Feeling faint or very dizzy on standing (pressure may be too low)", "Swelling of lips or face, or a persistent dry cough with certain types", "Very high readings with chest pain, breathlessness or visual changes — seek care now"],
    ask: ["Is this to be taken for life, or reviewed?", "What's my target blood pressure?", "What do I do if I miss a dose?", "Which side effects should I report rather than just stop?"]
  },

  statin: {
    cat: "Heart & circulation", name: "Cholesterol medicines (statins)", mode: "daily",
    modeText: "Take every day — the benefit is invisible but real",
    mini: "They don't make you feel different. They lower the odds of a future heart attack or stroke.",
    story: "Statins are preventive medicines, and like blood-pressure tablets their benefit is something you'll never feel: a lower chance of a heart attack or stroke years down the line. Because there's no sensation of them 'working', people often quietly stop. But the protection only lasts while you take them. They're prescribed when your overall cardiovascular risk — not just a cholesterol number — is high enough that lowering it is worthwhile.",
    why: "To lower cholesterol and, more importantly, to reduce the overall risk of heart attack and stroke — especially if you've already had one, or have diabetes or high risk.",
    how: "They reduce the amount of harmful cholesterol the liver makes, and stabilise the fatty deposits in artery walls so they're less likely to rupture and cause a clot.",
    rule: "<b>Every day, long-term.</b> The risk reduction disappears when they stop. There's no 'symptom' to take them for — the whole point is preventing an event before it happens.",
    syndrome: "High cardiovascular risk; after heart attack or stroke; diabetes; familial high cholesterol.",
    examples: "A single daily tablet, often taken in the evening. Doses vary by how much reduction is needed.",
    mistakes: [
      "Stopping because 'my cholesterol is normal now' — normal because the statin is working.",
      "Stopping over muscle aches without review — genuine muscle problems are uncommon and there are alternatives.",
      "Believing diet alone always replaces them — it helps, but often isn't enough for high-risk people."
    ],
    flags: ["Unexplained, severe or widespread muscle pain or weakness", "Dark urine with muscle pain (rare but important)", "New yellowing of eyes or skin"],
    ask: ["What's my actual heart-attack/stroke risk, with and without this?", "Is the muscle ache I have related, and what are my options?", "Is this lifelong?", "Does my diet change the plan?"]
  },

  diabetesoral: {
    cat: "Hormones & metabolism", name: "Diabetes tablets", mode: "daily",
    modeText: "Take every day — steady control prevents long-term damage",
    mini: "High sugar quietly damages nerves, eyes, kidneys and vessels. Steady treatment prevents that.",
    story: "Type 2 diabetes often causes few symptoms until damage is already done. The tablets keep blood sugar in a range that protects your nerves, eyes, kidneys and blood vessels over the long term. Some people, encouraged by good numbers or weight loss, stop — and the sugar drifts back up unnoticed. Good control is a daily, ongoing project, though for some it can genuinely improve with sustained lifestyle change, always guided by testing.",
    why: "To keep blood glucose in a safe range and prevent the slow damage high sugar does to nerves, eyes, kidneys, heart and circulation.",
    how: "Different tablets work differently — improving the body's response to insulin, reducing sugar the liver releases, helping the kidneys clear sugar, or prompting more insulin — to lower glucose without causing it to crash.",
    rule: "<b>Every day, guided by your sugar readings and reviews.</b> Not a 'take-when-high' medicine for most people — steady control is what protects the organs. Any reduction should be doctor-led and evidence-based, not because you feel well.",
    syndrome: "Type 2 diabetes; some agents also protect the heart and kidneys.",
    examples: "Often one or more daily tablets; the combination is tailored to your sugars, weight and other conditions.",
    mistakes: [
      "Stopping because 'my sugar is normal' — usually normal because of the medicine and lifestyle together.",
      "Taking a tablet only after a sweet meal — that's not how most of them work.",
      "Ignoring the tablets and relying on how you feel — high sugar is often symptomless."
    ],
    flags: ["Shakiness, sweating, confusion (possible low sugar) — treat and review", "Very high sugars with thirst, drowsiness, breathlessness — seek care", "Persistent vomiting or illness (sick-day rules may apply)"],
    ask: ["What are my sugar and HbA1c targets?", "Can any tablet cause low sugars?", "What are the sick-day rules?", "Could lifestyle change safely reduce these, and how would we know?"]
  },

  insulin: {
    cat: "Hormones & metabolism", name: "Insulin", mode: "daily",
    modeText: "Take as prescribed — never simply stop",
    mini: "For some, insulin is not optional — stopping it can be life-threatening within hours to days.",
    story: "Insulin replaces or supplements a hormone the body can't make enough of. In type 1 diabetes it is absolutely essential — the body makes almost none, and stopping insulin can lead to a life-threatening emergency (DKA) quickly. In type 2 it may be added when tablets aren't enough. The dose often needs adjusting around food, illness and activity, but the principle is constant: it is managed and adjusted, never abruptly abandoned.",
    why: "To replace or supplement insulin so glucose can move from the blood into cells for energy, keeping sugar in a safe range.",
    how: "Injected insulin does the job the body's own insulin would — lowering blood sugar. Types differ in how fast and how long they act, which is why timing matters.",
    rule: "<b>As prescribed, every day — dose adjusted, never stopped on your own.</b> In type 1 especially, stopping is an emergency. Adjustments for food, illness or exercise are normal and should be planned with your team.",
    syndrome: "Type 1 diabetes (essential); type 2 diabetes when other treatment is insufficient; diabetes in pregnancy.",
    examples: "Fast-acting and long-acting types, often combined, matched to meals and daily rhythm.",
    mistakes: [
      "Skipping insulin when not eating much — some insulin is often still needed; get advice.",
      "Stopping when sugars look good — good <i>because</i> of the insulin.",
      "Not knowing how to treat a low sugar (hypo)."
    ],
    flags: ["Sweating, trembling, confusion — a low sugar needs fast sugar, then review", "Nausea, vomiting, deep breathing, fruity breath — possible emergency, seek care now", "Illness where you can't eat or keep fluids down"],
    ask: ["What are my sick-day rules for insulin?", "How do I recognise and treat a hypo?", "How do I adjust around exercise and meals?", "Who do I call urgently if sugars are very high or I can't eat?"]
  },

  heartfailure: {
    cat: "Heart & circulation", name: "Heart-failure medicines", mode: "daily",
    modeText: "Take every day — they protect the heart and prolong life",
    mini: "These don't just ease symptoms; several of them help the heart last longer. Continuity is the point.",
    story: "Heart-failure medicines are a special case, because some of them do two jobs at once: relieve symptoms like breathlessness and swelling, and — separately — actually help a weakened heart survive longer and stay out of hospital. That survival benefit only exists while the medicines are taken, and it builds up over time. Doses are often increased slowly to a target. Stopping when you feel better removes exactly the protection that made you feel better.",
    why: "To ease the breathlessness and fluid build-up of heart failure, and, with several drug groups, to reduce strain on the heart so it lasts longer and you stay out of hospital.",
    how: "Some remove excess fluid (easing symptoms), while others relax the circulation and block the harmful stress hormones that otherwise wear a failing heart down — the groups shown to prolong life.",
    rule: "<b>Every day, long-term, often built up to a target dose.</b> The fluid tablets ease symptoms; the protective groups only work while taken. Feeling better is the reason to continue, not to stop.",
    syndrome: "Heart failure with a weakened pump; several agents also used after heart attack.",
    examples: "Usually a combination: a fluid-clearing tablet plus one or more heart-protecting groups, adjusted over weeks.",
    mistakes: [
      "Stopping the protective medicines once breathing improves — that's them working.",
      "Doubling fluid tablets without advice, or stopping them and gaining fluid.",
      "Not weighing yourself — a sudden weight gain can signal fluid building up."
    ],
    flags: ["Rapid weight gain, worsening swelling, or breathlessness lying flat", "Waking at night gasping for breath", "Feeling very dizzy, or a very low or irregular pulse"],
    ask: ["Which of my tablets ease symptoms, and which protect my heart?", "What weight gain should prompt me to call?", "Why is the dose being increased?", "What do I do on a day I feel dehydrated or unwell?"]
  },

  anticoag: {
    cat: "Heart & circulation", name: "Blood thinners (anticoagulants)", mode: "daily",
    modeText: "Take exactly as prescribed — never start or stop on your own",
    mini: "They prevent dangerous clots. Both stopping them and doubling them carry real risk.",
    story: "Anticoagulants reduce the blood's tendency to form clots, preventing strokes in people with an irregular heartbeat (atrial fibrillation) and treating or preventing clots in the legs and lungs. They walk a fine line: too little and a clot can form; too much and bleeding becomes a risk. That balance is why they are taken exactly as prescribed, why some need monitoring, and why you should never stop them — even for a procedure — without medical advice.",
    why: "To prevent clots that cause strokes (in atrial fibrillation), or to treat and prevent clots in the legs and lungs.",
    how: "They interrupt the clotting cascade, making the blood less likely to form a clot — without 'dissolving' blood, as the nickname wrongly suggests.",
    rule: "<b>Every day, exactly as prescribed — never stop or restart alone.</b> Stopping can let a stroke-causing clot form; doubling up risks bleeding. Any pause (for surgery or dental work) must be planned with your doctor.",
    syndrome: "Atrial fibrillation (stroke prevention); deep-vein thrombosis and pulmonary embolism; some heart valve conditions.",
    examples: "Some types need regular blood tests and have food interactions; newer types need less monitoring. Which is right depends on your condition.",
    mistakes: [
      "Stopping before dental work or surgery without asking — this must be planned.",
      "Missing or double-dosing — both matter; ask what to do if a dose is missed.",
      "Not mentioning the medicine to every clinician and dentist you see."
    ],
    flags: ["Bleeding that won't stop, blood in urine or stool, or black stools", "A severe headache, or a fall or head injury while on them", "Unusual bruising, or coughing/vomiting blood — seek care"],
    ask: ["Why am I on this, and for how long?", "What do I do if I miss a dose?", "How do I handle surgery or dental work?", "What bleeding signs mean I should seek urgent care?"]
  },

  antiplatelet: {
    cat: "Heart & circulation", name: "Antiplatelet medicines", mode: "daily",
    modeText: "Take every day — usually protecting a heart or brain event",
    mini: "Low-dose aspirin and its relatives keep platelets from clumping after a heart attack, stent or stroke.",
    story: "Antiplatelet medicines (such as low-dose aspirin and similar drugs) make the blood's platelets less 'sticky', reducing the chance of a clot forming on a diseased artery or a stent. They're a mainstay after a heart attack, a stent, or certain strokes. After a stent especially, stopping early can be dangerous — a fresh stent can clot off. As with the others, the protection is silent and continuous, not something you feel.",
    why: "To prevent clots forming on diseased arteries or stents — protecting against heart attack and certain strokes.",
    how: "They stop platelets (the cells that start a clot) from clumping together, so a clot is less likely to block a narrowed or stented artery.",
    rule: "<b>Every day. After a stent, the duration is critical — do not stop early without your cardiologist.</b> This is preventive: there's no symptom to take it 'for', and stopping quietly removes the protection.",
    syndrome: "After heart attack, angioplasty/stent, or certain strokes and 'mini-strokes' (TIAs).",
    examples: "Sometimes one antiplatelet, sometimes two together for a defined period after a stent, then often one long-term.",
    mistakes: [
      "Stopping after a stent because you 'feel fine' — among the most dangerous timing errors.",
      "Stopping for minor procedures without checking.",
      "Taking extra for aches — these aren't general painkillers at this dose."
    ],
    flags: ["Black or bloody stools, or vomiting blood", "Easy or heavy bruising and bleeding", "Chest pain returning after a stent — seek urgent care"],
    ask: ["How long must I take this, especially after a stent?", "One or two antiplatelets, and for how long?", "What do I do before surgery or dental work?", "What bleeding should I report?"]
  },

  thyroid: {
    cat: "Hormones & metabolism", name: "Thyroid replacement", mode: "daily",
    modeText: "Take every day — it replaces a hormone you can't make enough of",
    mini: "This is pure replacement: your body needs the hormone daily, so the tablet is needed daily.",
    story: "An underactive thyroid means the gland doesn't make enough thyroid hormone — which sets the body's whole metabolic pace. The tablet simply replaces what's missing, restoring normal energy, temperature regulation, weight and mood. Because it's replacement of an essential hormone, it's almost always lifelong, taken once daily on an empty stomach, with occasional blood tests to fine-tune the dose.",
    why: "To replace thyroid hormone when the gland is underactive, restoring normal metabolism, energy, weight and mood.",
    how: "The tablet is the same hormone the thyroid would make. Once the dose matches your body's need, everything the hormone governs returns to normal.",
    rule: "<b>Every day, usually for life, on an empty stomach.</b> Stopping brings the underactive symptoms back over weeks. The dose is adjusted by blood tests, not by how you feel day to day.",
    syndrome: "Hypothyroidism (an underactive thyroid), including after thyroid surgery.",
    examples: "A single daily tablet, best taken on an empty stomach, away from certain foods, supplements and other medicines.",
    mistakes: [
      "Stopping when you feel well — you feel well <i>because</i> the level is corrected.",
      "Taking it with coffee, calcium or iron, which can block absorption.",
      "Changing brand or timing without rechecking levels."
    ],
    flags: ["Palpitations, tremor, heat intolerance (dose may be too high)", "Returning fatigue, cold intolerance, weight gain (dose may be too low)", "Pregnancy — needs prompt review, as requirements change"],
    ask: ["Is this lifelong?", "How and when should I take it for best absorption?", "How often are my levels checked?", "What changes in pregnancy?"]
  },

  reliever: {
    cat: "Lungs & breathing", name: "Reliever inhaler", mode: "when",
    modeText: "Take WHEN you need it — for sudden breathlessness or wheeze",
    mini: "This is the genuine 'when-needed' one: it opens tight airways within minutes during symptoms.",
    story: "The reliever (usually blue) is the inhaler you reach for when you're wheezy, tight-chested or breathless — it relaxes the airway muscles within minutes. Unlike almost everything else on this page, it genuinely is a symptomatic, take-when-needed medicine. But there's an important flip side: needing it often is a warning sign that the underlying condition isn't controlled — which is what the preventer inhaler is for. Frequent reliever use should prompt a review, not just more reliever.",
    why: "To quickly relieve sudden breathlessness, wheeze or chest tightness in asthma and some other lung conditions.",
    how: "It relaxes the muscles that have tightened around the airways, opening them within minutes so air moves freely again.",
    rule: "<b>When needed, for symptoms — this one genuinely is 'as required'.</b> But needing it three or more times a week is a red flag that control is poor: see your doctor rather than simply using it more.",
    syndrome: "Asthma; some cases of COPD, for symptom relief.",
    examples: "A quick-acting inhaler, often blue, used at the time of symptoms or before exercise if advised.",
    mistakes: [
      "Relying on it heavily instead of using a preventer — a dangerous pattern in asthma.",
      "Poor inhaler technique, so little medicine reaches the lungs.",
      "Not noticing that rising use means worsening control."
    ],
    flags: ["Needing it more and more, or it helping less than usual", "Breathlessness so severe you can't speak in full sentences — emergency", "Reliever not working in an attack — seek emergency care"],
    ask: ["How often is it safe to use before I should worry?", "Is my inhaler technique correct?", "Do I need a preventer as well?", "What's my action plan for an attack?"]
  },

  preventer: {
    cat: "Lungs & breathing", name: "Preventer inhaler", mode: "daily",
    modeText: "Take every day — even when your breathing feels perfectly fine",
    mini: "The one people wrongly skip. It calms airway inflammation you can't feel, preventing attacks.",
    story: "The preventer inhaler is the mirror image of the reliever, and confusing the two is a classic, risky mistake. It contains a low dose of steroid that calms the ongoing inflammation in the airways — inflammation you can't feel day to day. Because you feel fine, it's tempting to skip it. But skipping it lets the inflammation smoulder, and that's what leads to a bad attack weeks later. It's a daily, preventive medicine, taken whether or not you have symptoms.",
    why: "To calm the underlying airway inflammation in asthma, preventing attacks and reducing the need for the reliever.",
    how: "A low, inhaled dose of steroid settles the inflammation in the airway lining over days to weeks, so the airways are less twitchy and less likely to flare.",
    rule: "<b>Every day, even when you feel well — its whole job is preventing symptoms you don't currently have.</b> Stopping it because breathing is fine is exactly how a preventable attack builds.",
    syndrome: "Asthma; certain cases of COPD (often combined with other inhaled medicines).",
    examples: "A daily inhaler (sometimes combined with a long-acting reliever). Rinsing the mouth after use reduces side effects.",
    mistakes: [
      "Stopping when breathing feels fine — the fine breathing is the preventer working.",
      "Treating it like a reliever and only using it during symptoms.",
      "Not rinsing the mouth, leading to oral thrush or a hoarse voice."
    ],
    flags: ["Worsening symptoms despite regular use", "Needing the reliever far more often", "A severe attack — always an emergency"],
    ask: ["Which inhaler is my preventer, and which is my reliever?", "Do I take the preventer even when well? (usually yes)", "Is my technique right, and should I rinse after?", "What's my written asthma action plan?"]
  },

  acid: {
    cat: "Stomach & digestion", name: "Acid & reflux medicines", mode: "mixed",
    modeText: "Depends on the type — some for symptoms, some for a planned course",
    mini: "Antacids are true 'when-needed'. Acid-blockers (PPIs) are often a defined course, sometimes longer.",
    story: "Stomach medicines split into two useful categories. Antacids neutralise acid on the spot and are genuinely take-when-you-have-symptoms. Acid-suppressing tablets (PPIs and similar) reduce how much acid the stomach makes and are usually taken as a planned course — for a few weeks to heal irritation or an ulcer, or longer-term for specific reasons, or to protect the stomach alongside certain other drugs. The key is knowing which kind you're on and why, because long-term acid suppression should be for a clear reason and periodically reviewed.",
    why: "To relieve heartburn and reflux, heal irritation or ulcers, or protect the stomach lining alongside medicines that can irritate it.",
    how: "Antacids neutralise existing acid quickly; acid-suppressing tablets reduce how much acid the stomach produces, giving the lining time to heal.",
    rule: "<b>Antacids: when needed. Acid-suppressants: usually a defined course, sometimes ongoing for a clear reason.</b> Ask which you're on. Long-term acid suppression isn't wrong, but it should have a reason and be reviewed — not drift on indefinitely by default.",
    syndrome: "Heartburn and reflux; gastritis and ulcers; protection alongside painkillers or blood thinners.",
    examples: "Fast antacids for symptoms; a course of acid-suppressant to heal; sometimes long-term for reflux disease or stomach protection.",
    mistakes: [
      "Staying on a strong acid-blocker for years with no one reviewing why.",
      "Using antacids to mask persistent symptoms that need investigating.",
      "Stopping a healing course early once symptoms ease, before the lining has healed."
    ],
    flags: ["Difficulty or pain swallowing, or food sticking", "Vomiting blood, or black tarry stools — seek care", "Unexplained weight loss with the symptoms", "Persistent symptoms despite treatment"],
    ask: ["Which type am I on — quick relief or acid-suppressing?", "Is this a course or long-term, and why?", "When should it be reviewed?", "Which symptoms mean I need investigating, not just more tablets?"]
  },

  painkiller: {
    cat: "Pain & inflammation", name: "Everyday painkillers", mode: "when",
    modeText: "Usually when needed — but with real limits and cautions",
    mini: "Mostly for symptoms, at the lowest dose that works — but 'over-the-counter' doesn't mean risk-free.",
    story: "Simple painkillers are largely symptomatic: you take them when you have pain, at the lowest dose that helps, for the shortest time you need. But 'everyday' and 'available without prescription' don't mean harmless. Paracetamol is dangerous in overdose. Anti-inflammatory painkillers can irritate the stomach, affect the kidneys, and interact with blood-pressure and blood-thinning medicines. And painkillers taken too often for headaches can, paradoxically, cause more headaches.",
    why: "To relieve pain and, for anti-inflammatories, to reduce inflammation.",
    how: "Different painkillers act on different pain pathways — some dampen pain signalling, others reduce the inflammation that drives pain.",
    rule: "<b>When needed, at the lowest effective dose, for the shortest time — but respect the limits.</b> Some conditions need regular, scheduled pain relief (e.g. after surgery or in chronic pain), which should be doctor-guided. Never exceed stated doses.",
    syndrome: "Short-term pain, injury, fever; anti-inflammatories for inflammatory pain; specialist regimens for chronic or post-operative pain.",
    examples: "Common options include paracetamol and anti-inflammatory tablets; stronger painkillers are a separate, prescription category with more caution.",
    mistakes: [
      "Assuming 'over-the-counter' means completely safe — overdose and interactions are real.",
      "Taking painkillers for frequent headaches so often that they cause more (rebound) headaches.",
      "Combining products that secretly contain the same ingredient, risking overdose."
    ],
    flags: ["Stomach pain, black stools, or vomiting blood with anti-inflammatories", "Taking painkillers for headache more than a couple of days a week", "Any suspected overdose — seek emergency care immediately, even if feeling well"],
    ask: ["What's the safe maximum for me in a day?", "Do these interact with my other medicines?", "Are anti-inflammatories safe with my stomach, kidneys and blood pressure?", "When does pain need reviewing rather than more tablets?"]
  },

  epilepsy: {
    cat: "Brain & nerves", name: "Epilepsy medicines", mode: "daily",
    modeText: "Take every day, on time — never stop abruptly",
    mini: "They prevent seizures by keeping a steady level in the blood. Missed doses are the commonest trigger.",
    story: "Anti-epileptic medicines prevent seizures by maintaining a steady, protective level in the bloodstream at all times. They aren't taken 'when a seizure is coming' — they work by never letting the level drop. This is why missed or late doses are one of the most common seizure triggers, and why stopping suddenly can provoke severe, even dangerous seizures. Any change is made gradually and under specialist guidance.",
    why: "To prevent seizures in epilepsy by keeping the brain's electrical activity stable.",
    how: "They steady the excitable electrical signalling in the brain, raising the threshold at which a seizure would start — but only while a consistent level is maintained.",
    rule: "<b>Every day, at consistent times — never stop or skip abruptly.</b> There's no 'take it when a seizure starts'; the protection is the steady level. Stopping suddenly can trigger dangerous seizures. Changes are always gradual and specialist-led.",
    syndrome: "Epilepsy and seizure disorders; some agents also used for nerve pain or mood.",
    examples: "One or more daily medicines, timed consistently; the choice depends on seizure type and the individual.",
    mistakes: [
      "Missing doses or taking them erratically — a leading cause of breakthrough seizures.",
      "Stopping because you've been seizure-free — that's the medicine working.",
      "Running out before getting a repeat prescription."
    ],
    flags: ["Any breakthrough seizure, or clusters of them", "Rash, especially early in treatment (can rarely be serious)", "Planning pregnancy — needs planned specialist review in advance"],
    ask: ["What do I do if I miss a dose?", "Could I ever safely reduce these, and how is that decided?", "Do they interact with other medicines or contraception?", "What should I plan before pregnancy?"]
  },

  antibiotic: {
    cat: "Infections", name: "Antibiotics", mode: "course",
    modeText: "Take as a defined course — follow the plan you're given",
    mini: "Not a 'take-till-you-feel-better' medicine. Complete the course your prescriber sets, and don't demand them for viruses.",
    story: "Antibiotics treat bacterial infections, and they're prescribed as a defined course. Two public misunderstandings cause real harm. First, antibiotics do nothing for viral illnesses like most coughs, colds and sore throats — taking them then is useless and drives resistance. Second, the course is set for a reason: stopping the moment you feel better can leave infection behind, though modern advice increasingly tailors course length, so follow the specific plan you're given rather than a blanket rule. Resistance — bacteria evolving to survive — is a genuine global threat fuelled by misuse.",
    why: "To treat genuine bacterial infections — not viral ones, which they don't touch.",
    how: "They kill bacteria or stop them multiplying, letting your immune system clear the infection. Different antibiotics target different bacteria.",
    rule: "<b>Exactly as prescribed, for the course you're given.</b> Not 'until you feel better' by default, and never saved, shared, or demanded for colds and flu. Follow your prescriber's specific instructions.",
    syndrome: "Confirmed or strongly suspected bacterial infections — chest, urine, skin, and others.",
    examples: "A time-limited course; the specific antibiotic and length are matched to the infection.",
    mistakes: [
      "Expecting or demanding them for viral coughs, colds and most sore throats.",
      "Saving leftovers or sharing them with family — both are unsafe.",
      "Stopping against advice, or ignoring the specific course instructions given."
    ],
    flags: ["A spreading rash, swelling, or breathing difficulty (possible allergy) — seek urgent care", "Severe or bloody diarrhoea during or after a course", "Not improving after a few days, or getting worse"],
    ask: ["Is my infection actually bacterial?", "Exactly how long is my course?", "What are the important side effects or interactions?", "What should I do if I don't improve?"]
  },

  antidepressant: {
    cat: "Mind & mood", name: "Antidepressant medicines", mode: "daily",
    modeText: "Take every day — they work gradually, not on the day you feel low",
    mini: "Not a 'take-when-sad' pill. They build up over weeks, and stopping should always be gradual.",
    story: "Antidepressants are widely misunderstood. They're not taken on the day you feel low — they work by building a steady effect over two to six weeks, and are then continued for a planned period to prevent relapse. Two things matter most for the public to know: they aren't instant or 'as-needed', so patience early on is important; and they should not be stopped abruptly, because that can cause unpleasant discontinuation effects. Coming off them is done slowly, and always in partnership with your doctor.",
    why: "To treat depression and several anxiety conditions, lifting mood and easing symptoms over time and reducing the risk of relapse.",
    how: "They gradually adjust the balance and signalling of brain chemicals involved in mood — a process that takes weeks, which is why the benefit isn't immediate.",
    rule: "<b>Every day, continued for a planned period even after you feel better — then reduced slowly, never stopped abruptly.</b> Feeling better is the reason to keep going for the agreed time, not to stop; stopping early raises relapse risk.",
    syndrome: "Depression; anxiety disorders; some are used for chronic pain or other conditions.",
    examples: "A daily tablet; the class and choice depend on your symptoms, other conditions and side-effect profile.",
    mistakes: [
      "Expecting them to work the first day, and giving up before they've had weeks to act.",
      "Stopping the moment you feel better — relapse risk is highest then.",
      "Stopping suddenly, causing dizziness, flu-like or electric-shock sensations."
    ],
    flags: ["Worsening mood, or any thoughts of self-harm — seek help promptly", "New agitation or restlessness, especially early on", "Discontinuation symptoms when doses are missed"],
    ask: ["How long until I should feel a difference?", "How long should I stay on it after I feel well?", "How is it stopped safely when the time comes?", "What early side effects should I expect, and which should I report?"],
    sensitive: true
  },

  steroid: {
    cat: "Inflammation & immunity", name: "Steroid tablets (corticosteroids)", mode: "course",
    modeText: "Take as directed — and never stop a longer course suddenly",
    mini: "Powerful anti-inflammatories. Short courses end simply; longer ones must be tapered, never stopped abruptly.",
    story: "Oral corticosteroids (not the same as the muscle-building kind) are powerful medicines that calm inflammation and overactive immune responses. A short course ends straightforwardly. But if they're taken for more than a couple of weeks, the body reduces its own natural steroid production — and stopping suddenly then can cause a dangerous crash. That's why longer courses are 'tapered' down gradually, and why people on them carry a steroid card. Follow the exact instructions, and never stop a longer course on your own.",
    why: "To rapidly reduce inflammation or dampen an overactive immune response — in severe asthma flares, many inflammatory and autoimmune conditions, and more.",
    how: "They powerfully suppress inflammation and immune activity throughout the body, which is why they work quickly but also why longer use has wider effects.",
    rule: "<b>Exactly as directed. Short courses: stop when told. Longer courses: taper slowly, never stop abruptly.</b> After a couple of weeks the body relies on the medicine, so a sudden stop can be dangerous — reductions are planned by your doctor.",
    syndrome: "Severe asthma or COPD flares; inflammatory and autoimmune conditions; many other uses.",
    examples: "A short defined course, or a longer plan with a step-down (tapering) schedule and a steroid card to carry.",
    mistakes: [
      "Stopping a longer course suddenly — potentially dangerous.",
      "Not carrying a steroid card, so other clinicians don't know.",
      "Not knowing that illness or surgery may need the dose temporarily increased."
    ],
    flags: ["Feeling very unwell, faint, or vomiting when doses are reduced or missed", "Signs of infection (steroids can mask them)", "Mood changes, high sugars, or stomach pain on higher doses"],
    ask: ["Is this a short course or long-term?", "Do I need to taper, and to what schedule?", "Should I carry a steroid card?", "What do I do about doses if I get ill or need surgery?"]
  }
};
