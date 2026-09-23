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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['dizzy','swelling','headache','chest','cough','palpitations'], procedures: ['pci','dialysis','bypass','ecg','pacemaker'], medicines: ['statin','heartfailure','diabetesoral','diuretic'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['jointpain','chest'], procedures: ['pci','bypass'], medicines: ['bp','antiplatelet'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['urinary','fatigue','numbness','dizzy','visionloss','weightloss'], procedures: ['ctcontrast','dialysis','cataract'], medicines: ['insulin','bp'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['urinary','fatigue','confusion','dizzy','numbness','visionloss'], procedures: ['dialysis'], medicines: ['diabetesoral'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','swelling','fatigue'], procedures: ['pacemaker','pci'], medicines: ['bp','anticoag','diuretic'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['bloodstool','swelling','breathless','bruising','palpitations'], procedures: ['pacemaker','colonoscopy','kneereplace','hipreplace','spinal'], medicines: ['antiplatelet','heartfailure'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','bloodstool','bruising'], procedures: ['pci','bypass','ecg'], medicines: ['anticoag','statin'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','weightloss','palpitations'], procedures: [], medicines: [] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','cough'], procedures: ['ventilation'], medicines: ['preventer','steroid'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['cough','breathless'], procedures: [], medicines: ['reliever','steroid'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','abdopain','nausea','diarrhoea','swallowing'], procedures: ['endoscopy'], medicines: ['painkiller'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['backpain','jointpain','headache','abdopain','bloodstool','earpain'], procedures: ['kneereplace','hipreplace','appendectomy','colonoscopy','csection','endoscopy'], medicines: ['acid','steroid','laxative'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['confusion','numbness'], procedures: ['lp','ctcontrast'], medicines: [] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','cough','urinary','diarrhoea','earpain','jaundice'], procedures: ['appendectomy','catheter','centralline','chemotherapy','csection','gallbladder'], medicines: ['antitb'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','confusion','anxiety','sleep'], procedures: [], medicines: ['sleepanxiety'] },
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
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['rash','jointpain','breathless','bruising','fever','itching'], procedures: ['cataract','chemotherapy','ventilation'], medicines: ['preventer','painkiller','antifungal','antihistamine','calciumvitd','reliever'] },
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
  },

  antihistamine: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['itching','rash','sorethroat'], procedures: [], medicines: ['steroid','antifungal'] },
    cat: "Allergy & immunity", name: "Antihistamines", mode: "when",
    modeText: "Usually when symptoms are there — though some people take them daily through a season",
    mini: "They block the chemical behind itch, sneeze and swelling — and they do nothing for an asthma attack.",
    story: "Histamine is released by immune cells when they meet something they have decided is a threat, and it produces the familiar package: itching, sneezing, a streaming nose, watering eyes, raised weals. Antihistamines occupy the receptors histamine would otherwise act on, so the message never lands. The most important distinction to understand is between the older drowsy ones and the newer non-drowsy ones — they treat the same thing, but they affect your day very differently. The second is that antihistamines are not a rescue treatment for breathing problems.",
    why: "To control the itching, sneezing, runny nose, watering eyes and hives caused by allergic reactions, hay fever and urticaria.",
    how: "They block histamine receptors, so the histamine released by allergy cells cannot deliver its message. The symptoms ease because the signal is interrupted, not because the allergy has gone.",
    rule: "<b>Usually taken when you have symptoms, and stopped when you don't.</b> Through a known allergy season, or for ongoing hives, a doctor may advise taking one every day — which works better than chasing symptoms after they start. Neither pattern is wrong; follow the one you were given.",
    syndrome: "Hay fever and other allergic rhinitis, hives and urticaria, itching from insect bites and some skin conditions, and as one part of the treatment of an allergic reaction.",
    examples: "Older ones cause noticeable drowsiness and are sometimes used deliberately for that; newer ones are designed not to. Some are taken once daily, some more often. Available as tablets, syrups, nasal sprays and eye drops.",
    mistakes: [
      "Using an antihistamine to treat an asthma attack or breathing difficulty — it does not open the airways, and relying on it wastes critical time.",
      "Assuming a severe allergic reaction with facial swelling or breathing difficulty can be managed with a tablet. That is an emergency needing adrenaline and emergency services.",
      "Driving or operating machinery after an older, sedating antihistamine without realising how much it slows reactions.",
      "Giving adult preparations to young children, or repeating doses because the first did not work quickly enough.",
      "Using them long-term for sleep, which is not what they are designed for and works poorly over time."
    ],
    flags: [
      "Swelling of the lips, tongue or throat, or any difficulty breathing — emergency, not an antihistamine",
      "Hives lasting more than six weeks, which need proper assessment",
      "Marked drowsiness affecting work, driving or safety",
      "Symptoms not controlled despite regular use through a season",
      "Needing them every day for months without ever having been reviewed"
    ],
    ask: [
      "Should I take this only when I have symptoms, or every day through the season?",
      "Is this one likely to make me drowsy — can I drive on it?",
      "Is it safe alongside my other medicines?",
      "What should I do if a reaction ever involves my breathing?",
      "Is a nasal spray or eye drop better than a tablet for my symptoms?"
    ]
  },

  diuretic: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['swelling','breathless','urinary'], procedures: ['dialysis'], medicines: ['bp','heartfailure'] },
    cat: "Heart & circulation", name: "Water tablets (diuretics)", mode: "daily",
    modeText: "Usually every day — some people are taught to adjust the dose, always under instruction",
    mini: "They make the kidneys shed salt and water — which relieves swelling and breathlessness, and dehydrates you if you're already losing fluid.",
    story: "Diuretics act on the kidney's filtering tubes to stop salt being reabsorbed. Water follows the salt out, so the total fluid in the circulation falls — which is why swollen legs go down and a waterlogged lung becomes easier to breathe through. They work, often dramatically. The catch is that the same mechanism that helps when you are holding too much fluid is a liability when you are losing it: during fever, vomiting or diarrhoea, a diuretic keeps pulling fluid out while you are already running dry. Many people are given specific instructions for those days, and those instructions matter.",
    why: "To remove excess fluid in heart failure, liver or kidney disease, and to lower blood pressure by reducing the volume the heart has to push around.",
    how: "They block salt reabsorption in the kidney tubules, so more salt and water leave in the urine. Less circulating fluid means less swelling, less congestion in the lungs, and lower pressure in the arteries.",
    rule: "<b>Usually every day, and not something to skip because it is inconvenient.</b> Some people with heart failure are taught to take extra on days their weight rises — and to pause during vomiting, diarrhoea or high fever. Those are specific, individual instructions from your own clinician; never invent them for yourself.",
    syndrome: "Heart failure; high blood pressure; fluid retention from liver or kidney disease; and some are used to prevent kidney stones or to treat raised pressure in the eye or brain.",
    examples: "Some act strongly and briefly, so people take them in the morning to avoid a night of interruptions. Others are milder and longer-acting. Some also conserve potassium while others deplete it, which is why blood tests are checked periodically.",
    mistakes: [
      "Stopping because of the frequent urination, without telling anyone. Fluid then re-accumulates, sometimes ending in a hospital admission for breathlessness.",
      "Continuing the usual dose through vomiting, diarrhoea or high fever, when the body is already losing fluid — a common route to kidney injury.",
      "Taking a second dose late in the day to 'catch up', then being awake all night.",
      "Restricting fluid drastically as well, on the assumption that less drinking means less swelling.",
      "Using someone else's water tablets for swollen ankles — the cause of swelling matters enormously, and not all of it is fluid overload."
    ],
    flags: [
      "Dizziness on standing, or fainting",
      "Passing much less urine than usual, or none",
      "Sudden weight gain of two kilograms or more over a few days",
      "Increasing breathlessness, or swelling climbing up the legs",
      "Muscle cramps, marked weakness, or palpitations — these can signal low potassium",
      "Vomiting or diarrhoea while taking one — ask what to do that day"
    ],
    ask: [
      "What time of day should I take this?",
      "What should I do on days I have fever, vomiting or diarrhoea?",
      "Should I weigh myself daily, and what change should I report?",
      "How often do my kidney function and potassium need checking?",
      "How much should I be drinking — more, less, or the same?"
    ]
  },

  ironfolate: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','breathless','bruising'], procedures: ['bloodtransfusion','colonoscopy','hysterectomy'], medicines: [] },
    cat: "Blood & nutrition", name: "Iron & folic acid", mode: "course",
    modeText: "A defined course — and usually for months longer than you feel you need it",
    mini: "Feeling better comes early; refilling the body's iron stores takes months. Stopping at the first is why anaemia keeps coming back.",
    story: "Iron is needed to build haemoglobin, the protein that carries oxygen in red cells. When iron runs short the body prioritises circulating haemoglobin over its reserves, which means blood counts can look nearly normal while the stores behind them are empty. That is why treatment works in two stages: the first few weeks lift how you feel, and the several months after that refill the tank. People almost universally stop after the first stage, and the anaemia returns. There is also a question that matters as much as the tablets: <i>why</i> the iron ran out in the first place.",
    why: "To treat and prevent iron-deficiency anaemia — the commonest nutritional deficiency in the world — and, in pregnancy, to support the mother's increased needs and the baby's neural development.",
    how: "Iron is absorbed in the upper gut and used by the bone marrow to build haemoglobin, so red cells can carry oxygen properly. Folic acid is needed for cells to divide and mature, which is why it matters in pregnancy and alongside rapid red-cell production.",
    rule: "<b>A course — and a longer one than most people expect.</b> Typically continued for around three months <i>after</i> the blood count returns to normal, to rebuild stores rather than just the circulating level. Stopping when you feel better is the single commonest reason anaemia recurs. Finding the cause of the deficiency is a separate and equally important task.",
    syndrome: "Iron-deficiency anaemia from any cause — heavy periods, poor dietary intake, pregnancy, blood loss from the gut, hookworm and other parasitic infections. Folic acid is also given routinely before and during early pregnancy.",
    examples: "Taken on an empty stomach where tolerated, since food reduces absorption; vitamin C or citrus improves it, while tea, coffee, milk and calcium supplements taken at the same time substantially reduce it. Black stools are expected and harmless.",
    mistakes: [
      "Stopping as soon as the tiredness lifts, leaving the stores unfilled — the reason anaemia so often returns a few months later.",
      "Treating the anaemia without ever asking what caused it. In an adult, and particularly over 45, unexplained iron deficiency needs the gut investigated.",
      "Taking it with tea, milk or a calcium tablet, which markedly reduces how much iron is actually absorbed.",
      "Giving up because of constipation or nausea rather than asking about a different preparation, a lower frequency, or taking it with a little food.",
      "Mistaking the normal black stools for bleeding — or, the reverse, dismissing genuinely black tarry stools as 'just the iron'."
    ],
    flags: [
      "Black tarry stools with abdominal pain, dizziness or feeling faint — this may be bleeding, not the tablets",
      "No improvement in the blood count after a reasonable period",
      "Severe constipation or vomiting that stops you taking it",
      "Unexplained iron deficiency in a man, or in a woman past menopause",
      "Breathlessness at rest, chest pain, or fainting",
      "Accidental overdose, particularly in a child — iron is genuinely dangerous in overdose and needs emergency care"
    ],
    ask: [
      "How long exactly should I take this, and how will we know when to stop?",
      "Why did my iron run low — does anything need investigating?",
      "What should I avoid taking it with?",
      "What do I do if it upsets my stomach?",
      "When will my blood count be rechecked?"
    ]
  },

  antitb: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['cough','weightloss','fever'], procedures: ['xray'], medicines: ['antibiotic'] },
    cat: "Infections", name: "TB medicines", mode: "course",
    modeText: "A long, fixed, uninterrupted course — months, not weeks, and finishing it is the whole treatment",
    mini: "You feel well within weeks and the treatment runs for months. That gap is exactly where drug resistance is created.",
    story: "Tuberculosis is treated with several medicines together, for months, and the reason is biological rather than bureaucratic. TB bacteria divide extremely slowly and some lie almost dormant; short courses kill the active ones and leave the sleepers behind. Using several drugs at once means a bacterium resistant to one is still killed by the others. Both principles collapse if doses are missed or the course is stopped early — the survivors are precisely the ones the treatment struggled with, and what grows back is harder to treat, takes far longer, and is more dangerous to everyone around. Feeling completely well after a few weeks is expected, and is not the finish line.",
    why: "To cure tuberculosis — in the lungs or elsewhere in the body — and to prevent its spread to others.",
    how: "Different drugs attack the bacterium in different ways, and are given together so that no single resistant organism survives. The long duration is needed to reach the slow-dividing and dormant bacteria that short courses leave behind.",
    rule: "<b>Every dose, for the full duration, without interruption.</b> This is the most important 'course' on this page. Stopping early does not simply risk relapse — it actively selects for drug-resistant TB, which is far harder to cure. If side effects are making it difficult, the answer is to contact your TB clinic, not to stop.",
    syndrome: "Pulmonary tuberculosis and TB affecting lymph nodes, bone, abdomen, the lining of the brain and other sites; also preventive treatment for latent infection in people at high risk.",
    examples: "Usually several medicines taken together, often as combined tablets to make the regimen simpler. An intensive initial phase is followed by a continuation phase. Treatment is monitored, and support to complete it is part of the programme rather than an optional extra.",
    mistakes: [
      "Stopping once the cough and fever settle — the commonest and most damaging error, and the main driver of drug-resistant TB.",
      "Missing doses intermittently, which is more dangerous than people realise for exactly the same reason.",
      "Taking only some of the prescribed medicines — for example dropping the one thought to cause nausea — which removes the protection the combination provides.",
      "Not reporting yellowing of the eyes, which can signal liver injury and needs immediate attention.",
      "Not telling the team about other medicines: TB drugs interact with many, including hormonal contraception, HIV treatment and some epilepsy medicines.",
      "Hiding the diagnosis so that household contacts are never screened — they may be infected and treatable."
    ],
    flags: [
      "Yellowing of the eyes or skin, dark urine, or persistent vomiting — possible liver injury, stop and seek advice the same day",
      "New problems with vision or colour perception",
      "Numbness or tingling in the hands or feet",
      "A rash, especially if widespread or with fever",
      "Coughing blood, or worsening breathlessness",
      "Any missed doses — report them rather than doubling up"
    ],
    ask: [
      "Exactly how many months is my course, and when is the finish date?",
      "What do I do if I miss a dose, or vomit one back up?",
      "Which side effects mean I should stop and call you immediately?",
      "Do my household contacts need screening?",
      "Do these interact with anything else I take, including contraception?",
      "How and when will we confirm the treatment has worked?"
    ]
  },

  antifungal: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['itching','rash'], procedures: [], medicines: ['steroid','antihistamine'] },
    cat: "Infections", name: "Antifungal medicines", mode: "course",
    modeText: "A course — and skin and nail infections need far longer courses than people expect",
    mini: "Fungal skin infections look better long before they are gone, and a steroid cream makes them dramatically worse.",
    story: "Fungi grow slowly and live in the outer layers of skin, nail and hair, which are themselves slow to turn over. That combination is why antifungal courses are measured in weeks for skin and in months for nails — the treatment has to outlast the tissue it lives in. The specific trap, and it is a widespread one, is the combination cream containing a strong steroid: it calms the redness and itch within days, which feels like success, while suppressing the local immune response and letting the fungus spread further and deeper. Recognising that pattern is one of the most useful things on this page.",
    why: "To clear fungal infections of the skin, nails, scalp, mouth or genital area, and in serious illness to treat fungal infection affecting internal organs.",
    how: "They damage the fungal cell membrane or block its construction, so the fungus cannot maintain itself and dies. Because they act on growing organisms in slow-turnover tissue, they need sustained contact over time.",
    rule: "<b>A defined course, completed — usually well beyond the point where the skin looks normal.</b> For skin, that often means continuing for one to two weeks after it appears clear; for nails, months. Stopping when it looks better is the main reason fungal infections come back and become steadily harder to treat.",
    syndrome: "Ringworm and other tinea infections of the body, groin and feet; scalp and nail infections; thrush of the mouth and genital area; and serious systemic fungal infection in people with weakened immunity.",
    examples: "Creams and shampoos for localised skin and scalp infections; tablets where the infection is widespread, involves the nails or scalp, or has not responded to topical treatment. Choice depends on the site and how deep the infection sits.",
    mistakes: [
      "Using a combination cream containing a strong steroid. It relieves itch quickly while letting the infection spread and become far harder to treat — a very common and avoidable problem.",
      "Stopping as soon as the rash looks clear, leaving live fungus in the skin to regrow.",
      "Treating only the visible patch and not the feet, groin, scalp or nails that are reseeding it.",
      "Sharing towels, combs or footwear within a household without treating everyone affected.",
      "Assuming any itchy ring-shaped rash is fungal — some are not, and antifungals will not help those.",
      "Taking antifungal tablets without mentioning other medicines, since several interact significantly."
    ],
    flags: [
      "A rash that is spreading despite treatment",
      "Increasing pain, swelling, warmth or pus — that suggests bacterial infection instead",
      "Scalp involvement with hair loss, which needs oral treatment rather than cream",
      "Yellowing of the eyes, or persistent nausea, while on antifungal tablets",
      "Recurrent or unusually widespread infection, which can point to diabetes or reduced immunity",
      "No improvement at all after a properly completed course"
    ],
    ask: [
      "Exactly how long should I use this, including after it looks clear?",
      "Is the cream I have a plain antifungal, or does it contain a steroid?",
      "Do I need tablets rather than a cream for this site?",
      "Does anyone else in my household need treating?",
      "Should anything be tested to confirm it is fungal?"
    ]
  },

  laxative: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','bloodstool'], procedures: ['colonoscopy'], medicines: ['painkiller'] },
    cat: "Stomach & digestion", name: "Laxatives", mode: "when",
    modeText: "Mostly when needed — but some are taken regularly, and that is a legitimate plan",
    mini: "Different types work in completely different ways, and the real question is why the constipation is there at all.",
    story: "Constipation is a symptom, not a diagnosis, and laxatives treat the symptom. Some add bulk, some draw water into the stool, some stimulate the bowel wall to contract, and some soften from within — and choosing the wrong type for the situation is why people often conclude that laxatives do not work for them. Two things matter more than the choice of product. First, whether something is causing it: medicines, particularly strong painkillers, are a very common cause. Second, whether the constipation is new — because a lasting change in bowel habit in an adult is a symptom that needs looking at, not managing.",
    why: "To relieve constipation, to prevent it where a medicine or condition makes it likely, and to empty the bowel before procedures such as a colonoscopy.",
    how: "Bulk-forming types hold water in the stool so it is larger and softer; osmotic types draw water into the bowel; stimulant types prompt the bowel wall to contract; softeners let water mix into the stool. The right one depends on the cause.",
    rule: "<b>Usually when needed, and stopped when things are moving.</b> But some situations genuinely call for a regular laxative — alongside strong painkillers, in long-standing constipation, or in some neurological conditions — and taking one every day on that advice is correct, not a failure. What matters is that new constipation gets a cause before it gets a routine.",
    syndrome: "Constipation from diet, dehydration or inactivity; constipation caused by medicines, especially opioid painkillers; irritable bowel syndrome; pregnancy; and bowel preparation before investigations.",
    examples: "Bulk-forming types need plenty of water to work and are unsuitable if there is any suspicion of obstruction. Osmotic types are often preferred for regular use. Stimulants act faster and are generally for shorter-term use. Suppositories and enemas act locally and quickly.",
    mistakes: [
      "Treating new, persistent constipation in an adult over 45 with laxatives instead of getting it investigated — a change in bowel habit is a symptom that matters.",
      "Starting a strong painkiller without a laxative alongside it, then becoming severely constipated.",
      "Taking a bulk-forming laxative without enough fluid, which can make the blockage worse rather than better.",
      "Escalating the dose steadily without ever reviewing why the constipation is there.",
      "Using laxatives for weight control, which does not work and causes real harm.",
      "Continuing to push laxatives through severe abdominal pain, vomiting or a completely blocked bowel — that needs assessment, not more laxative."
    ],
    flags: [
      "Blood in the stool, or black tarry stools",
      "A persistent change in bowel habit, particularly over 45",
      "Unintended weight loss alongside it",
      "Severe abdominal pain, a distended belly, or vomiting",
      "Complete inability to pass stool or wind",
      "Constipation that started soon after a new medicine"
    ],
    ask: [
      "Which type is right for my situation, and why that one?",
      "Should I take it regularly or only when needed?",
      "Does one of my other medicines cause this?",
      "How much fluid should I be drinking with it?",
      "At what point should this be investigated rather than treated?"
    ]
  },

  sleepanxiety: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['sleep','anxiety','confusion'], procedures: [], medicines: ['antidepressant'] },
    cat: "Mind & mood", name: "Sleep & anxiety sedatives", mode: "when",
    modeText: "Short-term and sparing — yet never stopped abruptly once taken regularly",
    mini: "They work quickly, they stop working over weeks, and the body adapts to them — which is why both starting and stopping need care.",
    story: "This group calms the nervous system, and it does so effectively — which is exactly the problem. Used for a few nights in a crisis they are genuinely useful. Used for months, three things happen: the effect fades as the body adapts, the dose creeps up, and stopping produces rebound anxiety and insomnia worse than the original complaint. That rebound is often misread as proof the medicine is still needed. The unusual feature of this entry is that it carries two opposite warnings at once — do not take them for longer than intended, and do not stop them suddenly once you have.",
    why: "For short-term relief of severe anxiety or insomnia, for specific situations such as before a procedure, and in some conditions such as alcohol withdrawal or certain seizure and muscle-spasm problems.",
    how: "They enhance the brain's main calming signal, reducing the excitability of nerve circuits. That produces sedation, muscle relaxation and reduced anxiety — and, with repeated use, an adapted nervous system that now expects the drug to be there.",
    rule: "<b>Intended for short-term use — typically days to a few weeks, not months.</b> But once taken regularly, <b>never stop abruptly</b>: sudden withdrawal can cause severe rebound anxiety, confusion and, at higher doses, seizures. Coming off is done by gradual reduction, planned with your doctor. Both halves of this rule matter equally.",
    syndrome: "Severe short-term anxiety, crisis insomnia, premedication before procedures, alcohol withdrawal, muscle spasm, and some seizure situations.",
    examples: "Some act briefly and are used for sleep; others last longer and are used for daytime anxiety. Related non-benzodiazepine sleep medicines behave similarly enough that the same cautions apply. For ongoing anxiety, other treatments — talking therapies and non-sedating medicines — are generally preferred precisely because they do not carry this pattern.",
    mistakes: [
      "Continuing well beyond the intended few weeks, so that tolerance and dependence develop quietly.",
      "Stopping suddenly after regular use — this can be genuinely dangerous, not merely uncomfortable.",
      "Combining with alcohol or with strong painkillers, which together can suppress breathing.",
      "Driving the morning after a longer-acting one, while still measurably impaired.",
      "Using them as the main treatment for long-term anxiety, where they work poorly and other treatments work better.",
      "Taking someone else's, or an old leftover supply, without any review."
    ],
    flags: [
      "Needing more than before to get the same effect",
      "Anxiety, sweating, tremor, confusion or a seizure after missing doses — seek help urgently",
      "Falls, unsteadiness or confusion, particularly in an older person",
      "Excessive daytime drowsiness affecting work or driving",
      "Low mood or thoughts of self-harm",
      "Still taking it months after it was first prescribed, with no review"
    ],
    ask: [
      "How many days or weeks is this meant to be for?",
      "What is the plan for coming off it, and when do we start?",
      "What are the non-medicine options for my situation?",
      "Is it safe with my other medicines, and with alcohol?",
      "Can I drive while taking this?"
    ]
  },

  calciumvitd: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['jointpain','backpain','fatigue'], procedures: ['hipreplace','kneereplace'], medicines: ['steroid'] },
    cat: "Bones & joints", name: "Calcium & vitamin D", mode: "daily",
    modeText: "Every day — they work slowly, silently, and only over years",
    mini: "Nothing about taking them feels like anything. The benefit is a fracture that never happens.",
    story: "Vitamin D allows the gut to absorb calcium, and calcium is the mineral bone is built from — so the two are prescribed together because one without the other achieves little. Like blood-pressure tablets, they belong to the category of treatment you cannot feel working, and for the same reason they are among the most frequently abandoned. It is also worth being honest about the limits: they support bone health and correct a deficiency, but in established osteoporosis they are the foundation for a specific bone-strengthening treatment rather than a substitute for it.",
    why: "To correct vitamin D deficiency, to support bone strength in osteoporosis and in people at risk of it, and alongside long-term steroid treatment which thins bone.",
    how: "Vitamin D enables calcium absorption from the gut and helps maintain the blood calcium level; calcium provides the raw material for bone. Together they support bone density and muscle function, and reduce fracture risk over years rather than weeks.",
    rule: "<b>Every day, long-term, and you will not feel any difference — that is expected.</b> The benefit is measured in fractures that do not happen. If you are also on a specific osteoporosis treatment, these support it rather than replace it. A high loading dose of vitamin D is sometimes given to correct a marked deficiency, followed by a regular daily maintenance dose.",
    syndrome: "Vitamin D deficiency; osteoporosis and osteopenia; prevention of bone loss during long-term steroid treatment; pregnancy and breastfeeding; and some kidney and parathyroid conditions.",
    examples: "Often a single combined tablet or chewable preparation. Calcium is absorbed better in divided amounts than all at once, and it interferes with the absorption of several other medicines — including iron, thyroid replacement and some antibiotics — so spacing them apart matters.",
    mistakes: [
      "Stopping because nothing feels different — the entire benefit is silent and long-term.",
      "Taking calcium at the same time as thyroid replacement, iron or certain antibiotics, which reduces how much of those is absorbed.",
      "Assuming these alone treat established osteoporosis, when a specific bone-strengthening medicine is what reduces fracture risk most.",
      "Taking very high doses of vitamin D bought without advice, on the assumption that more is better. It is fat-soluble and accumulates.",
      "Continuing calcium without review in someone with kidney stones or a high blood calcium level."
    ],
    flags: [
      "Nausea, vomiting, constipation, excessive thirst or confusion — these can indicate a high calcium level",
      "Kidney stones, or pain in the flank",
      "Bone pain, or a fracture from a minor fall",
      "Loss of height, or a new stoop",
      "Taking high-dose vitamin D bought over the counter without it being checked"
    ],
    ask: [
      "Has my vitamin D level actually been measured?",
      "Do I need a bone density scan?",
      "Should I be on a specific osteoporosis treatment as well as this?",
      "Which of my other medicines should I space apart from the calcium?",
      "How long am I expected to take this for, and when is it reviewed?"
    ]
  }
};
