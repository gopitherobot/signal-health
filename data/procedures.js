// Signal · Procedures — content database
// 20 highest-anxiety procedures, each with the structural / functional / chemical
// before-and-after model, risks, benefits, journey, myths, and questions to ask.
// Risk descriptions are illustrative and qualitative rather than statistical.
// Authored by the named clinician in data/editorial.js; educational, not advice.

window.PROCEDURES = {
  ga: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['nausea'], procedures: ['spinal','ventilation','appendectomy','bypass','catheter','colonoscopy'], medicines: ['painkiller'] },
    cat: "Anaesthesia", name: "General anaesthesia",
    mini: "Not sleep — a reversible, controlled, closely-watched shutdown of consciousness.",
    story: "People fear anaesthesia more than the surgery it enables, and almost always for the wrong reasons. It isn't sleep, and it isn't a coma. It's a drug-induced, carefully titrated and continuously monitored state in which consciousness, memory, movement and pain response are switched off — and then deliberately switched back on. Someone watches your breathing and circulation second by second, the entire time. That person is the reason it is now extraordinarily safe.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "emerg", t: "Also used in emergencies" }],
    indications: "Any operation where you must be still, unaware and pain-free — abdominal, cardiac, orthopaedic, neurosurgical — or where a breathing tube is needed to protect the airway.",
    axes: {
      before: [
        { l: "Structural", b: "Your airway is <b>open and self-maintained</b>. Muscles hold the tongue and throat clear; the lungs inflate by your own effort." },
        { l: "Functional", b: "Consciousness, memory and reflexes are <b>intact</b>. You'd cough or gag if something touched your throat. You breathe and regulate blood pressure automatically." },
        { l: "Chemical", b: "Your own <b>adrenaline and cortisol</b> run the show. Brain neurotransmission is at baseline; pre-op anxiety genuinely raises heart rate and blood pressure." }
      ],
      after: [
        { l: "Structural", b: "Muscles relax; the airway <b>would collapse unaided</b> — so it's held open by a tube or airway device. The ventilator, not your diaphragm, moves the air." },
        { l: "Functional", b: "Consciousness and memory are <b>switched off</b>; protective reflexes are abolished (why you fast — an unprotected stomach could empty into the lungs). Blood pressure typically falls and is actively supported." },
        { l: "Chemical", b: "Drugs <b>amplify GABA</b> (the brain's brake) and blunt glutamate. Opioids occupy pain receptors; muscle relaxants block the nerve–muscle junction. Each is measured, and each is reversed or metabolised on the way out." }
      ]
    },
    benefits: ["Complete absence of pain and awareness", "Allows surgery otherwise impossible", "Airway and breathing actively protected", "Death from anaesthesia itself is now very rare in healthy adults"],
    risks: ["Sore throat, grogginess, nausea — common and short-lived", "Shivering and temporary confusion, especially in older adults", "Dental damage from airway insertion — uncommon", "Serious allergic reaction or awareness — rare"],
    rbnote: "Risk depends far more on your heart, lungs and age than on the anaesthetic drug itself.",
    journey: [
      { n: "Days before", d: "Pre-anaesthetic check: heart, lungs, airway, allergies, medications assessed. This visit is where risk is actually reduced — be honest here." },
      { n: "The night before", d: "Fasting begins. It stops stomach contents entering the lungs once reflexes are off." },
      { n: "Induction", d: "A drug goes into the drip. Consciousness leaves in seconds — most never finish the count." },
      { n: "During", d: "An anaesthetist stays beside you the whole operation, adjusting depth, breathing, blood pressure and fluids minute by minute." },
      { n: "Emergence", d: "Drugs stopped or reversed; breathing returns; the tube comes out. You wake in recovery, usually with no memory of it." },
      { n: "Recovery", d: "Grogginess and a sore throat for hours; nausea sometimes. Don't drive or sign anything for 24 hours." }
    ],
    myths: [
      { m: "\u201cI might wake up during surgery and feel everything.\u201d", t: "<b>Very rare</b> — and depth is now continuously monitored. Far rarer than the fear suggests." },
      { m: "\u201cAnaesthesia damages memory permanently.\u201d", t: "<b>Mostly not.</b> Short-lived fog is common; lasting change is uncommon and mainly a concern in the elderly and very unwell." },
      { m: "\u201cThe surgeon gives the anaesthetic.\u201d", t: "<b>No.</b> A separate specialist physician does — their entire job, for those hours, is keeping you alive." }
    ],
    ask: ["What kind of anaesthesia do I need, and why that one?", "What are my personal risks, given my heart, lungs and age?", "Which regular medicines do I stop, and when?", "Exactly when must I stop eating and drinking?", "Who will be with me the whole time?"]
  },

  spinal: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['backpain'], procedures: ['ga','csection','herniarepair','hipreplace','hysterectomy','kneereplace'], medicines: ['painkiller','anticoag'] },
    cat: "Anaesthesia", name: "Spinal anaesthesia",
    mini: "You stay awake; a single injection numbs everything below the waist.",
    story: "Spinal anaesthesia unsettles people because they stay awake while being operated on — but for the right operations it is often safer than being put fully under. A fine needle places local anaesthetic into the fluid around the spinal cord, and within minutes the lower half of the body goes numb and heavy. You feel pressure and movement, but no pain. It's the standard for most caesareans, and many hip, knee and lower-limb operations.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Common for urgent C-sections" }],
    indications: "Caesarean section, hip and knee replacement, lower-limb and pelvic surgery, and when avoiding a general anaesthetic is safer — for example in significant lung disease.",
    axes: {
      before: [
        { l: "Structural", b: "Nerves leaving the spinal cord <b>conduct normally</b>. The legs bear weight; the bladder empties on cue." },
        { l: "Functional", b: "You have <b>full sensation and movement</b> below the waist, and normal blood-pressure control from these nerves." },
        { l: "Chemical", b: "Nerve signals pass freely as <b>sodium channels open and close</b> to carry each impulse up to the brain." }
      ],
      after: [
        { l: "Structural", b: "The lower body is <b>numb and heavy</b>; you can't lift your legs. The cord itself is untouched — the needle sits below where it ends." },
        { l: "Functional", b: "Pain, temperature and movement below the block are <b>gone</b>; you stay fully awake and breathing on your own. Bladder sensation is off, so a catheter is often used." },
        { l: "Chemical", b: "Local anaesthetic <b>blocks sodium channels</b> on the nerve roots, so impulses can't propagate. Blood vessels in the legs relax too, which is why blood pressure can drop and is watched closely." }
      ]
    },
    benefits: ["Stay awake — often preferred for birth", "Avoids the risks of full general anaesthesia", "Excellent pain relief into the early recovery", "Less nausea and grogginess afterwards"],
    risks: ["A drop in blood pressure — common, and actively managed", "Headache afterwards in a minority", "Temporary difficulty passing urine", "Rarely, longer-lasting nerve symptoms or infection"],
    rbnote: "For many lower-body operations, a spinal avoids the bigger physiological hit of a general anaesthetic.",
    journey: [
      { n: "Positioning", d: "You sit or lie curled forward to open the gaps between the vertebrae." },
      { n: "The injection", d: "Local anaesthetic numbs the skin first; then the fine spinal needle. Brief pressure, rarely sharp." },
      { n: "Onset", d: "Warmth then heaviness spreads up the legs over a few minutes. The team checks the level is high enough." },
      { n: "During", d: "You're awake, monitored, blood pressure supported as needed. A screen usually shields the surgical field." },
      { n: "Wearing off", d: "Sensation and movement return over a few hours, from the toes upward." },
      { n: "After", d: "You'll be asked to pass urine; a headache, if it occurs, is treatable. Full leg strength before walking." }
    ],
    myths: [
      { m: "\u201cThe needle can paralyse me.\u201d", t: "<b>The needle sits below where the cord ends</b>, in fluid, not in the cord. Serious nerve injury is very rare." },
      { m: "\u201cI'll feel the surgery.\u201d", t: "<b>You feel pressure and movement, not pain.</b> The block is tested before starting." },
      { m: "\u201cA spinal always causes chronic back pain.\u201d", t: "<b>Not so.</b> Brief local tenderness is normal; lasting back pain isn't a typical consequence." }
    ],
    ask: ["Why a spinal rather than a general for my operation?", "What happens if it doesn't work fully?", "How long will the numbness last?", "What are the chances of a headache, and how is it treated?", "Will I have a urinary catheter?"]
  },

  pci: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','breathless'], procedures: ['bypass','ctcontrast','ecg','pacemaker'], medicines: ['antiplatelet','statin','bp','heartfailure'] },
    cat: "Cardiac", name: "Angioplasty & stent",
    mini: "A blocked heart artery is reopened from the inside, through a wrist puncture.",
    story: "A coronary artery narrowed by plaque starves heart muscle of blood — that's angina, and when it blocks completely, a heart attack. Angioplasty threads a fine wire from your wrist to your heart, inflates a balloon inside the narrowing, and leaves a metal scaffold to hold it open. In a heart attack it is a race: muscle dies every minute the artery stays shut. Done fast enough, it saves heart that would otherwise be lost forever.",
    urgency: [{ c: "emerg", t: "Emergency in a heart attack" }, { c: "planned", t: "Planned for stable angina" }],
    indications: "Heart attack (emergency, ideally within 90 minutes of arrival), or angina limiting daily life despite medication. Not every narrowing needs a stent — many do better on drugs alone.",
    axes: {
      before: [
        { l: "Structural", b: "A <b>plaque narrows the artery lumen</b>. In a heart attack the plaque has cracked and a clot has sealed the vessel shut." },
        { l: "Functional", b: "Blood flow past the narrowing is <b>inadequate under demand</b> — pain on exertion. In a full block, muscle downstream is dying and pumping fails." },
        { l: "Chemical", b: "Starved cells switch to <b>anaerobic metabolism</b>: lactate rises, cells leak troponin into the blood (the marker that confirms a heart attack)." }
      ],
      after: [
        { l: "Structural", b: "The plaque is <b>crushed outward</b> and a stent holds the lumen open. The vessel wall is injured by design — it heals over the metal in weeks." },
        { l: "Functional", b: "Flow is <b>restored downstream</b>. Angina typically eases immediately; in a heart attack, surviving muscle is rescued — muscle already dead does not come back." },
        { l: "Chemical", b: "Lactate clears; troponin peaks then falls. You now <b>must take blood thinners</b> — the fresh stent is a clot magnet until the wall heals over it. Stopping them early is the single most dangerous thing you can do." }
      ]
    },
    benefits: ["In a heart attack: saves heart muscle and lives", "In angina: rapid, often dramatic relief of chest pain", "No open surgery — usually a wrist puncture", "Most people home in 1–2 days"],
    risks: ["Bruising or bleeding at the puncture site — common, minor", "Contrast dye can strain the kidneys, especially if already impaired", "Stent clotting if blood thinners stop early — uncommon but dangerous", "Re-narrowing over time; rarely stroke or vessel injury"],
    rbnote: "In stable angina, a stent reliably relieves symptoms — but medication does much of the same protective work. That trade-off is worth asking about.",
    journey: [
      { n: "Before", d: "Blood tests, ECG, kidney function. In an emergency all of this happens in parallel — speed is the treatment." },
      { n: "The lab", d: "Awake, under local anaesthetic and light sedation. You may feel pressure at the wrist; you generally don't feel the wire." },
      { n: "During", d: "Dye outlines the arteries on X-ray, the balloon inflates across the narrowing, the stent deploys. Often under an hour." },
      { n: "Immediately after", d: "Pressure on the wrist, bed rest, monitoring. Angina pain often already gone." },
      { n: "Weeks after", d: "Dual blood thinners — non-negotiable, for the duration your cardiologist specifies. Cardiac rehab begins." },
      { n: "Long term", d: "The stent fixes a pipe; it doesn't cure the disease. Statins, blood-pressure control, no smoking, and exercise prevent the next one." }
    ],
    myths: [
      { m: "\u201cA stent cures my heart disease.\u201d", t: "<b>It doesn't.</b> It fixes one narrowing. The process that built the plaque is still active everywhere else." },
      { m: "\u201cI feel fine, so I can stop the blood thinners.\u201d", t: "<b>The most dangerous myth here.</b> Stopping early can clot the stent and cause a heart attack. Never stop without your cardiologist." },
      { m: "\u201cEvery blockage needs a stent.\u201d", t: "<b>No.</b> For many stable narrowings, medication does as well for survival. Ask why a stent is recommended for you." }
    ],
    ask: ["Is this an emergency, or do I have time to consider options?", "Would medication alone work as well for me?", "How long must I take blood thinners, and what if I miss doses?", "What kind of stent, and why?", "What must change in my life so this doesn't recur?"]
  },

  csection: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain'], procedures: ['spinal','ga'], medicines: ['antibiotic','painkiller'] },
    cat: "Obstetric / surgical", name: "Caesarean section",
    mini: "Delivery through a cut in the abdomen and womb — sometimes planned, sometimes an emergency.",
    story: "A caesarean delivers a baby through a surgical incision rather than the birth canal. It can be carefully planned (for the baby's position, a previous caesarean, or other reasons) or decided in minutes when labour becomes unsafe for mother or baby. Most are done under a spinal, so the mother is awake to meet her baby. It's one of the most common major operations in the world, and understanding it removes much of the fear.",
    urgency: [{ c: "planned", t: "Often planned (elective)" }, { c: "emerg", t: "Sometimes an emergency" }],
    indications: "Baby in the wrong position, placenta covering the exit, a labour that stalls or distresses the baby, certain maternal conditions, or a previous caesarean where vaginal birth carries higher risk.",
    axes: {
      before: [
        { l: "Structural", b: "The <b>womb is intact and closed</b>; the baby sits within it, cushioned by fluid, connected by the cord and placenta." },
        { l: "Functional", b: "In labour, the womb <b>contracts to push the baby down</b> the birth canal. The placenta delivers oxygen until the cord is cut." },
        { l: "Chemical", b: "<b>Oxytocin drives contractions</b>; the baby's oxygen and nutrients cross the placenta from the mother's blood." }
      ],
      after: [
        { l: "Structural", b: "A low incision opens the abdomen and womb; the baby is <b>lifted out</b>, then the layers are closed. A scar remains internally and on the skin." },
        { l: "Functional", b: "Delivery is <b>immediate</b> rather than progressive. The womb must then contract down to control bleeding; the mother recovers from abdominal surgery, not a vaginal birth." },
        { l: "Chemical", b: "<b>Oxytocin is given</b> to clamp down the womb and limit blood loss. Breastfeeding hormones still switch on; the surgical stress response is managed with pain relief." }
      ]
    },
    benefits: ["A safe route when vaginal birth is risky", "Can be planned and scheduled", "Rapid delivery in an emergency", "Usually done awake, under a spinal, to meet the baby"],
    risks: ["Longer recovery than an uncomplicated vaginal birth", "Bleeding and infection — managed but real", "Affects how future pregnancies are planned and delivered", "Blood clots — prevented with early movement and sometimes medication"],
    rbnote: "A caesarean is major surgery, but a well-timed one can be far safer than persisting with an unsafe labour.",
    journey: [
      { n: "Preparation", d: "Spinal anaesthetic placed, a catheter inserted, the abdomen cleaned. Your birth partner is usually beside you." },
      { n: "Delivery", d: "You feel pressure and pulling, not pain. The baby is usually out within minutes of starting." },
      { n: "First contact", d: "Skin-to-skin is often possible while the surgeon closes the layers, which takes longer than the delivery itself." },
      { n: "Recovery room", d: "Close monitoring as the spinal wears off; pain relief begins; feeding is encouraged." },
      { n: "Next days", d: "Early walking to prevent clots, wound care, and support with feeding and moving." },
      { n: "Weeks after", d: "Avoid heavy lifting while the wound heals; discuss future birth plans at follow-up." }
    ],
    myths: [
      { m: "\u201cA C-section is the easy way out.\u201d", t: "<b>It's major abdominal surgery</b> with a longer recovery than most vaginal births. There is nothing easy about it." },
      { m: "\u201cOnce a caesarean, always a caesarean.\u201d", t: "<b>Not necessarily.</b> Many women safely have a vaginal birth afterwards — it depends on the individual case." },
      { m: "\u201cI'll be asleep and miss the birth.\u201d", t: "<b>Usually not.</b> Most are done under a spinal, so you're awake to meet your baby." }
    ],
    ask: ["Why is a caesarean being recommended for me?", "Will I be awake, and can my partner be there?", "What is recovery realistically like at home?", "What does this mean for future pregnancies?", "What pain relief will I have afterwards?"]
  },

  endoscopy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','nausea','bloodstool','chest','swallowing','weightloss'], procedures: ['colonoscopy','ga','biopsy','gallbladder'], medicines: ['acid','painkiller'] },
    cat: "Diagnostic", name: "Endoscopy (gastroscopy)",
    mini: "A thin camera passed through the mouth to see the gullet, stomach and upper bowel directly.",
    story: "An endoscopy lets a doctor look directly inside your upper digestive tract with a slim, flexible camera — no cuts, no scars. It's how the cause of persistent indigestion, swallowing trouble, or suspected bleeding is found, and it allows biopsies and even treatment (stopping a bleed, stretching a narrowing) in the same sitting. Most people dread it more than it deserves; with throat spray or light sedation, it's usually brief and tolerable.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Urgent if bleeding" }],
    indications: "Persistent indigestion or reflux not settling, difficulty swallowing, unexplained weight loss, suspected ulcer, anaemia, or to find and treat the source of upper-gut bleeding.",
    axes: {
      before: [
        { l: "Structural", b: "The gullet, stomach and duodenum are <b>closed to view</b> — their lining can only be inferred from symptoms." },
        { l: "Functional", b: "The upper gut is <b>doing its normal job</b> of swallowing and digesting; any problem is hidden inside." },
        { l: "Chemical", b: "Symptoms hint at chemistry — <b>acid, infection (H. pylori), inflammation</b> — but nothing is confirmed." }
      ],
      after: [
        { l: "Structural", b: "The lining is <b>seen directly</b> on a screen. Ulcers, inflammation, narrowings or growths are identified; tissue samples are taken painlessly." },
        { l: "Functional", b: "The scope is passed and withdrawn; normal function resumes almost at once. A treatment (banding a vein, stopping a bleed) may have been done in the same visit." },
        { l: "Chemical", b: "Biopsies allow <b>testing for H. pylori and for cell changes</b>; a diagnosis replaces guesswork, and targeted treatment can begin." }
      ]
    },
    benefits: ["Sees the problem directly, no cuts", "Allows biopsy for a firm diagnosis", "Can treat in the same sitting — e.g. stop a bleed", "Quick, day-case, home the same day"],
    risks: ["A sore throat and bloating afterwards — common, minor", "Reaction to sedation — why you're monitored", "Rarely, a small tear or bleeding, especially after treatment", "Missed findings are uncommon but possible"],
    rbnote: "Discomfort is brief and manageable; the diagnostic value is high, especially for alarm symptoms.",
    journey: [
      { n: "Before", d: "Fasting so the stomach is empty and clearly seen. Medication may be adjusted." },
      { n: "Preparation", d: "Throat spray, light sedation, or both. You lie on your left side; a mouthguard protects your teeth." },
      { n: "During", d: "The scope passes as you breathe steadily — it doesn't block breathing. Usually a few minutes. You may burp; that's expected." },
      { n: "Recovery", d: "A short rest while sedation wears off. A sore throat and wind settle quickly." },
      { n: "Results", d: "Visual findings are often explained immediately; biopsy results follow in days." },
      { n: "After", d: "No driving if sedated; someone should take you home. Normal eating usually resumes soon after." }
    ],
    myths: [
      { m: "\u201cI'll choke or be unable to breathe.\u201d", t: "<b>The scope goes down the gullet, not the windpipe.</b> Breathing is unaffected; you're monitored throughout." },
      { m: "\u201cIt's unbearably painful.\u201d", t: "<b>Uncomfortable, not agonising.</b> Throat spray or sedation makes it very tolerable for most." },
      { m: "\u201cSedation puts me fully to sleep.\u201d", t: "<b>Usually it's light</b> — relaxed and drowsy, often with little memory, but not a full general anaesthetic." }
    ],
    ask: ["Will I have throat spray, sedation, or both?", "What are you looking for in my case?", "Will you take biopsies, and when will results come?", "How long until I can eat and drive?", "What symptoms after the test should prompt me to call?"]
  },

  ventilation: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','confusion','cough'], procedures: ['ga','centralline','bypass'], medicines: ['antibiotic','steroid','reliever'] },
    cat: "Critical care", name: "Mechanical ventilation",
    mini: "A machine breathes for you when your own lungs or drive can't — a support, not a treatment in itself.",
    story: "A ventilator is one of the most misunderstood machines in medicine. It does not cure anything — it buys time, taking over the work of breathing so the body can survive while the underlying problem (pneumonia, injury, a drug overdose, surgery) is treated or recovers. A tube in the windpipe connects to the machine, which delivers carefully controlled breaths. Families often fear 'being on a ventilator'; understanding what it does, and doesn't, changes that conversation.",
    urgency: [{ c: "emerg", t: "Emergency / critical care" }, { c: "planned", t: "Planned during surgery" }],
    indications: "Failure to breathe adequately — severe pneumonia or lung injury, a depressed level of consciousness, during major surgery under general anaesthesia, or to rest a body overwhelmed by critical illness.",
    axes: {
      before: [
        { l: "Structural", b: "The airway is <b>open and unaided</b>; the diaphragm and chest muscles do the work of drawing air in." },
        { l: "Functional", b: "Breathing is <b>automatic and effort-driven</b>; the body senses oxygen and carbon dioxide and adjusts the rate itself." },
        { l: "Chemical", b: "The lungs keep <b>oxygen and carbon dioxide in balance</b> automatically; blood acidity stays in a tight range." }
      ],
      after: [
        { l: "Structural", b: "A tube sits in the windpipe, <b>sealing the airway to the machine</b>. Sedation relaxes the drive to breathe against it." },
        { l: "Functional", b: "The <b>machine delivers each breath</b> — volume, pressure and rate set by the team. The body's own breathing effort is supported or temporarily taken over, letting exhausted muscles rest." },
        { l: "Chemical", b: "Oxygen and carbon-dioxide levels are <b>controlled by the ventilator settings</b> and checked with blood-gas tests, keeping blood acidity in a safe range while the illness is treated." }
      ]
    },
    benefits: ["Takes over breathing when the body can't", "Buys time for the real problem to be treated", "Precisely controls oxygen and carbon dioxide", "Allows deep sedation and major surgery safely"],
    risks: ["Ventilator-associated pneumonia over time", "Weakness from prolonged sedation and immobility", "Pressure or injury to the lungs if not carefully managed", "The need, sometimes, for a tracheostomy if support is prolonged"],
    rbnote: "A ventilator is a bridge, not a destination — the goal from day one is to get the person off it safely.",
    journey: [
      { n: "Intubation", d: "Under sedation, a tube is placed into the windpipe and connected to the machine." },
      { n: "Stabilising", d: "Settings are tuned to the person's lungs; sedation keeps them comfortable and in sync with the machine." },
      { n: "Daily assessment", d: "The team checks readiness to breathe independently and lightens sedation when safe — 'sedation holds'." },
      { n: "Weaning", d: "Support is gradually reduced as the lungs recover, testing the person's own breathing." },
      { n: "Extubation", d: "When strong enough, the tube comes out and breathing returns to normal, sometimes with oxygen support." },
      { n: "Recovery", d: "Rehabilitation for muscle weakness and, sometimes, the psychological aftermath of intensive care." }
    ],
    myths: [
      { m: "\u201cBeing on a ventilator means the end.\u201d", t: "<b>Many people recover fully.</b> It's a support during the worst of an illness, not a verdict." },
      { m: "\u201cThe ventilator is doing the healing.\u201d", t: "<b>It isn't.</b> It buys time; the treatment of the underlying illness does the healing." },
      { m: "\u201cThey'll be awake and in pain.\u201d", t: "<b>Sedation and pain relief keep them comfortable</b>, adjusted continuously by the ICU team." }
    ],
    ask: ["What is the underlying problem the ventilator is supporting?", "What has to improve before breathing on their own?", "How is comfort and sedation being managed?", "What are the realistic expectations and timeline?", "What complications are you watching for?"]
  },

  gallbladder: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','nausea'], procedures: ['ga','endoscopy'], medicines: ['painkiller','antibiotic'] },
    cat: "Surgical", name: "Gallbladder removal",
    mini: "Keyhole removal of a small organ whose stones cause big pain — you live perfectly well without it.",
    story: "The gallbladder stores bile, but when it fills with stones it causes attacks of severe pain, and sometimes dangerous complications like infection or blockage. The reassuring truth is that you don't need it: removing it (usually by keyhole surgery) cures the problem, and the liver simply drips bile straight into the gut instead. It's one of the most common operations, and most people go home within a day.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Urgent if infected/blocked" }],
    indications: "Recurrent gallstone pain (biliary colic), inflammation of the gallbladder (cholecystitis), stones causing jaundice or pancreatitis, or gallbladder disease affecting quality of life.",
    axes: {
      before: [
        { l: "Structural", b: "The gallbladder <b>sits under the liver, holding bile and stones</b>. Stones may block its neck or the bile duct." },
        { l: "Functional", b: "It <b>concentrates bile and squeezes it out</b> after fatty meals — but a stone blocking the exit causes intense pain." },
        { l: "Chemical", b: "Bile (which digests fats) is <b>stored and concentrated</b>; a blocked duct can back bile up, causing jaundice." }
      ],
      after: [
        { l: "Structural", b: "The gallbladder is <b>removed entirely</b> through small keyhole incisions. The bile duct and liver remain, intact." },
        { l: "Functional", b: "Bile now <b>flows continuously from liver to gut</b> rather than being stored and released in a bolus. Digestion adapts; most people notice no lasting difference." },
        { l: "Chemical", b: "Bile still does its job of <b>digesting fats</b> — just delivered steadily. Some people are briefly looser after fatty meals while the body adjusts." }
      ]
    },
    benefits: ["Cures the pain and prevents complications", "Usually keyhole — small scars, fast recovery", "Most people home within a day", "You live normally without a gallbladder"],
    risks: ["Bruising and shoulder-tip pain from the gas used — short-lived", "Infection or bleeding — uncommon", "Injury to the bile duct — rare but serious", "Occasionally, conversion to open surgery if it's difficult"],
    rbnote: "For symptomatic gallstones, removal is definitive — leaving them risks worse complications later.",
    journey: [
      { n: "Before", d: "Fasting, and a general anaesthetic. Imaging confirms the stones and checks the bile duct." },
      { n: "During", d: "Keyhole ports are placed; the abdomen is gently inflated with gas for space; the gallbladder is freed and removed. Usually under an hour." },
      { n: "Immediately after", d: "Waking in recovery with small dressings and often mild shoulder-tip ache from the gas." },
      { n: "Going home", d: "Often the same or next day, with simple pain relief." },
      { n: "First week", d: "Gradual return to normal activity; the small wounds heal quickly." },
      { n: "After", d: "A normal diet resumes; a few people prefer to limit very fatty meals at first." }
    ],
    myths: [
      { m: "\u201cI can't live without my gallbladder.\u201d", t: "<b>You can, completely normally.</b> The liver simply delivers bile straight to the gut." },
      { m: "\u201cI'll never eat fatty food again.\u201d", t: "<b>Most people eat normally.</b> Any early looseness after fatty meals usually settles." },
      { m: "\u201cStones can just be dissolved with medicine.\u201d", t: "<b>Rarely practical.</b> For symptomatic stones, surgery is the reliable cure." }
    ],
    ask: ["Is keyhole surgery planned, and what raises the chance of open surgery?", "Has my bile duct been checked for stones?", "What's recovery like, and when can I return to work?", "Will my digestion change afterwards?", "What warning signs after surgery should I act on?"]
  },

  dialysis: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['swelling','fatigue','urinary','confusion'], procedures: ['centralline','catheter'], medicines: ['bp','insulin','diabetesoral','diuretic'] },
    cat: "Renal", name: "Dialysis",
    mini: "A machine or the belly lining does the kidneys' filtering job when they can no longer cope.",
    story: "When kidneys fail, waste and fluid build up in the blood to dangerous levels. Dialysis takes over their core filtering role — either by pumping blood through an external filter (haemodialysis) or by using the lining of the abdomen as a natural filter (peritoneal dialysis). It's life-sustaining, often several times a week, and it reshapes daily life. Understanding it helps people and families make the choices that fit their lives, not just their kidneys.",
    urgency: [{ c: "planned", t: "Usually planned (chronic)" }, { c: "emerg", t: "Emergency in acute failure" }],
    indications: "Kidney failure — chronic (end-stage kidney disease) or acute — with rising waste products, dangerous potassium or acid levels, or fluid overload the body can't clear.",
    axes: {
      before: [
        { l: "Structural", b: "Failing kidneys <b>can no longer filter</b> effectively; nephrons are damaged and scarred." },
        { l: "Functional", b: "Waste, potassium, acid and fluid <b>accumulate</b> because the kidneys can't remove them. Urine output often falls." },
        { l: "Chemical", b: "<b>Urea and creatinine rise; potassium and acid climb</b> to levels that threaten the heart; red-cell production falls, causing anaemia." }
      ],
      after: [
        { l: "Structural", b: "Blood is routed through an <b>external filter</b> via a fistula or line — or the <b>peritoneal membrane</b> filters internally. The kidneys themselves are unchanged." },
        { l: "Functional", b: "Waste and excess fluid are <b>removed in sessions</b> rather than continuously — so levels rise between treatments and fall during them. Diet and fluid limits bridge the gaps." },
        { l: "Chemical", b: "<b>Urea, potassium and acid are pulled back toward safe levels</b> each session; fluid is drawn off. Anaemia and bone chemistry are managed with additional medicines." }
      ]
    },
    benefits: ["Life-sustaining when kidneys fail", "Removes dangerous waste and excess fluid", "Two modes — clinic-based or home-based — to fit life", "Buys time toward a possible transplant"],
    risks: ["Blood-pressure swings and cramps during sessions", "Access problems — fistula or catheter infection or clotting", "A demanding schedule affecting work and travel", "Long-term strain on the heart and bones"],
    rbnote: "Dialysis replaces only part of what kidneys do — a transplant, where possible, restores far more.",
    journey: [
      { n: "Preparing access", d: "A fistula (a joined artery and vein in the arm) is created ahead of time, or a catheter placed for peritoneal dialysis." },
      { n: "First sessions", d: "Settings are eased in gently to avoid rapid shifts. The team finds the right 'dry weight'." },
      { n: "A typical week", d: "Haemodialysis often three times weekly, several hours each; peritoneal exchanges done daily at home." },
      { n: "Between sessions", d: "Fluid and diet limits (especially potassium and salt) keep levels safe until the next treatment." },
      { n: "Ongoing", d: "Regular blood checks; medicines for anaemia, bone health and blood pressure." },
      { n: "Longer term", d: "Assessment for transplant suitability, which offers a fuller return to normal life." }
    ],
    myths: [
      { m: "\u201cDialysis cures my kidneys.\u201d", t: "<b>It replaces their filtering, not their function.</b> It's ongoing support, not a cure — a transplant comes closest to that." },
      { m: "\u201cOnce on dialysis, I can eat and drink anything.\u201d", t: "<b>Fluid and diet limits still matter</b> — levels rise between sessions and must be controlled." },
      { m: "\u201cIt's always in a hospital.\u201d", t: "<b>Not necessarily.</b> Peritoneal and home haemodialysis let many people treat at home." }
    ],
    ask: ["Which type of dialysis suits my life best?", "Am I a candidate for a transplant?", "What diet and fluid limits will I need?", "How will this fit around work and travel?", "How do I care for my access and spot problems?"]
  },

  kneereplace: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['jointpain'], procedures: ['hipreplace','spinal','ga'], medicines: ['painkiller','anticoag','calciumvitd'] },
    cat: "Orthopaedic", name: "Knee replacement",
    mini: "A worn-out joint's surfaces are resurfaced with metal and plastic to end the pain and restore movement.",
    story: "When arthritis wears the cartilage of the knee down to bare bone, every step hurts and movement shrinks. A knee replacement doesn't remove the whole knee — it resurfaces the damaged ends of the bones with metal and a plastic spacer, recreating a smooth, gliding joint. It's one of the most successful operations in medicine for quality of life, but it demands real rehabilitation: the result depends as much on the physiotherapy afterwards as on the surgery itself.",
    urgency: [{ c: "planned", t: "Planned (elective)" }],
    indications: "Severe knee arthritis with pain and stiffness that limit walking, sleep and daily life despite exercise, weight management, painkillers and sometimes injections.",
    axes: {
      before: [
        { l: "Structural", b: "The <b>cartilage is worn away</b>, leaving bone grinding on bone; the joint may be bowed or stiff." },
        { l: "Functional", b: "Movement is <b>painful and restricted</b>; walking distance shrinks; stairs and rising from a chair become hard." },
        { l: "Chemical", b: "Worn cartilage drives <b>local inflammation</b> — the swelling, warmth and pain of an arthritic joint." }
      ],
      after: [
        { l: "Structural", b: "The worn bone ends are <b>capped with metal, with a plastic spacer between</b> — a resurfaced, smoothly gliding joint. Ligaments are preserved or balanced." },
        { l: "Functional", b: "Pain-free movement is <b>rebuilt through rehabilitation</b>; strength and bend return over weeks to months. The result depends heavily on doing the physiotherapy." },
        { l: "Chemical", b: "With the arthritic surfaces gone, the <b>inflammatory cycle settles</b>; post-operative swelling is managed and gradually resolves as healing progresses." }
      ]
    },
    benefits: ["Dramatic, lasting relief of arthritis pain", "Restored walking and independence", "Improved sleep and quality of life", "Modern implants last many years"],
    risks: ["Blood clots — prevented with movement and medication", "Infection — uncommon but serious, sometimes needing further surgery", "Stiffness if rehabilitation is neglected", "Implants can wear or loosen over many years"],
    rbnote: "The operation resurfaces the joint; the physiotherapy delivers the result. Both are essential.",
    journey: [
      { n: "Before", d: "'Prehab' to strengthen the leg, medical optimisation, and planning for help at home." },
      { n: "Surgery", d: "Usually under a spinal; the surfaces are replaced. Often 1–2 hours." },
      { n: "First days", d: "Standing and walking begin within a day; pain relief and clot prevention start immediately." },
      { n: "Early weeks", d: "Intensive physiotherapy to regain bend and strength — the hardest and most important phase." },
      { n: "Months", d: "Steady improvement; return to most activities, often better than before surgery." },
      { n: "Long term", d: "A durable joint with sensible activity; very high-impact sport is generally discouraged." }
    ],
    myths: [
      { m: "\u201cThe whole knee is removed.\u201d", t: "<b>Only the worn surfaces are resurfaced.</b> Much of your own knee, including ligaments, remains." },
      { m: "\u201cRecovery is quick and effortless.\u201d", t: "<b>Rehabilitation is real work</b> over weeks. The physiotherapy is what makes the surgery succeed." },
      { m: "\u201cI'll set off airport metal detectors constantly.\u201d", t: "<b>Occasionally</b> — but it's a minor, well-understood issue, not a reason to avoid surgery." }
    ],
    ask: ["Have I exhausted non-surgical options first?", "What's the realistic rehabilitation commitment?", "How long should the implant last for someone my age?", "What help will I need at home early on?", "What activities can I return to?"]
  },

  ctcontrast: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','headache','abdopain','backpain','breathless','confusion'], procedures: ['colonoscopy','lp','appendectomy','mri','pci','ultrasound'], medicines: ['diabetesoral','epilepsy'] },
    cat: "Diagnostic", name: "CT scan with contrast",
    mini: "A fast, detailed X-ray cross-section; a dye injection lights up blood vessels and abnormalities.",
    story: "A CT scanner takes X-rays from many angles and reconstructs detailed cross-sectional 'slices' of the body — far more than a plain X-ray shows. A contrast dye, injected into a vein, highlights blood vessels and many abnormalities, making them stand out. People worry about the dye and the radiation; both are worth understanding plainly, because for the right question a CT can be genuinely life-saving and fast.",
    urgency: [{ c: "planned", t: "Often planned" }, { c: "emerg", t: "Emergency in trauma/stroke" }],
    indications: "Investigating internal injury, suspected clots, cancer staging, unexplained pain, or acute emergencies like stroke and major trauma — where speed and detail matter.",
    axes: {
      before: [
        { l: "Structural", b: "Internal structures <b>overlap on plain imaging</b>; subtle problems may be hidden or ambiguous." },
        { l: "Functional", b: "The question — a clot, a bleed, a tumour — is <b>unanswered</b>; management waits on the image." },
        { l: "Chemical", b: "Blood vessels and many tissues look <b>similar in density</b>, so abnormalities can be hard to distinguish." }
      ],
      after: [
        { l: "Structural", b: "Detailed <b>cross-sectional slices</b> reveal organs, vessels and lesions separately and in three dimensions." },
        { l: "Functional", b: "The clinical question is usually <b>answered quickly</b> — often in minutes — allowing decisive treatment in emergencies." },
        { l: "Chemical", b: "The <b>iodine-based dye absorbs X-rays</b>, making vessels and abnormal tissue light up brightly against their surroundings, revealing what plain imaging misses." }
      ]
    },
    benefits: ["Fast, detailed images — often life-saving in emergencies", "Contrast highlights vessels, clots and tumours", "Non-invasive and widely available", "Guides precise treatment decisions"],
    risks: ["Radiation exposure — justified against the benefit", "Contrast can strain the kidneys, especially if already impaired", "Rarely, an allergic reaction to the dye", "A warm flush during injection — normal, not dangerous"],
    rbnote: "The radiation and dye carry small risks that are usually far outweighed by a fast, accurate answer.",
    journey: [
      { n: "Before", d: "Kidney function may be checked; allergies reviewed; you may fast briefly if dye is used." },
      { n: "Preparation", d: "A cannula is placed for the contrast. You lie on a table that moves through the ring-shaped scanner." },
      { n: "During", d: "The scan takes minutes. The dye injection often causes a brief warm flush and a metallic taste — expected." },
      { n: "Immediately after", d: "You can usually leave straight away; drinking water helps clear the dye." },
      { n: "Results", d: "A radiologist reviews the images; findings reach your doctor, urgently if needed." },
      { n: "After", d: "No special restrictions for most; those with kidney concerns get specific advice." }
    ],
    myths: [
      { m: "\u201cThe dye is the same as an MRI magnet dye.\u201d", t: "<b>Different agents.</b> CT uses iodine-based contrast; MRI uses a different type. Allergies and cautions differ." },
      { m: "\u201cOne CT will give me cancer.\u201d", t: "<b>The individual risk is small</b> and weighed against the benefit. Scans aren't ordered casually." },
      { m: "\u201cThe warm rush means I'm reacting badly.\u201d", t: "<b>That flush is normal</b> and expected with the injection — not an allergic reaction." }
    ],
    ask: ["What question is this scan meant to answer?", "Is contrast needed, and are my kidneys okay for it?", "Have I had any reaction to contrast before?", "When and how will I get the results?", "Is there a non-radiation alternative for my case?"]
  }
};

// ---- Procedures 11–20 ----
Object.assign(window.PROCEDURES, {
  bypass: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','breathless'], procedures: ['pci','ga','ventilation'], medicines: ['antiplatelet','statin','bp'] },
    cat: "Cardiac", name: "Bypass surgery (CABG)",
    mini: "Blocked heart arteries are bypassed with grafts — open-heart surgery for advanced disease.",
    story: "When several coronary arteries are severely narrowed, or the disease is in a critical location, stents may not be enough — a bypass reroutes blood around the blockages using vessels borrowed from the chest, arm or leg. It's major open-heart surgery, often using a heart-lung machine, and the recovery is substantial. But for the right patient it can outperform stents, relieving angina and prolonging life.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Urgent in severe disease" }],
    indications: "Severe multi-vessel coronary disease, disease of the main left artery, diabetes with widespread disease, or angina not controlled by stents and medication.",
    axes: {
      before: [
        { l: "Structural", b: "<b>Multiple coronary arteries are narrowed</b> by plaque, starving large areas of heart muscle." },
        { l: "Functional", b: "The heart muscle is <b>chronically short of blood</b>, causing angina and limiting the heart's pumping reserve." },
        { l: "Chemical", b: "Under-supplied muscle works <b>anaerobically under stress</b>, producing pain and, over time, weakening the heart." }
      ],
      after: [
        { l: "Structural", b: "<b>New graft vessels bypass the blockages</b>, restoring a route for blood around the narrowed segments. The chest bone is wired back together to heal." },
        { l: "Functional", b: "Blood supply to the muscle is <b>restored</b>; angina typically resolves and the heart's reserve improves. Recovery from open-chest surgery takes weeks to months." },
        { l: "Chemical", b: "With flow restored, muscle returns to <b>normal aerobic metabolism</b>. Blood thinners and statins protect the grafts; the underlying disease still needs lifelong control." }
      ]
    },
    benefits: ["Relieves angina, often completely", "Can prolong life in severe disease", "Grafts can outlast stents in the right patients", "Treats several blockages in one operation"],
    risks: ["Major surgery with a longer recovery than stents", "Bleeding, infection, and stroke — uncommon but serious", "Temporary memory or concentration effects", "Grafts can narrow over years; the disease continues elsewhere"],
    rbnote: "For advanced multi-vessel disease, bypass can beat stenting for survival — but it's a bigger undertaking.",
    journey: [
      { n: "Before", d: "Detailed heart imaging, optimisation of other conditions, and preparation for a longer hospital stay." },
      { n: "Surgery", d: "Under general anaesthesia, often on a heart-lung machine; grafts are harvested and sewn in. Several hours." },
      { n: "Intensive care", d: "Close monitoring for the first day or two as the heart and body recover." },
      { n: "Ward recovery", d: "Gradual mobilisation, breathing exercises, and wound care over about a week." },
      { n: "Cardiac rehab", d: "A structured programme rebuilds fitness and confidence over weeks." },
      { n: "Long term", d: "Lifelong medication and risk-factor control keep the grafts and remaining arteries healthy." }
    ],
    myths: [
      { m: "\u201cBypass cures heart disease for good.\u201d", t: "<b>It reroutes blood; it doesn't stop the disease.</b> Lifestyle and medication remain essential." },
      { m: "\u201cIt's always better than stents.\u201d", t: "<b>It depends on the pattern of disease.</b> For some, stents are equally good; for others, bypass wins." },
      { m: "\u201cRecovery takes just a few days.\u201d", t: "<b>It takes weeks to months.</b> This is major surgery, and rehab is part of the treatment." }
    ],
    ask: ["Why bypass rather than stents for my disease?", "On-pump or off-pump, and which grafts will be used?", "What's the realistic recovery timeline?", "What are my personal risks?", "What must I do long-term to protect the grafts?"]
  },

  centralline: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: [], procedures: ['ventilation','dialysis','bloodtransfusion','chemotherapy'], medicines: ['antibiotic'] },
    cat: "Critical care", name: "Central line",
    mini: "A long catheter into a large vein — for drugs, fluids and monitoring that small veins can't handle.",
    story: "A central line is a thin catheter placed into one of the body's large veins, usually in the neck, chest or groin. It's a workhorse of intensive care and cancer treatment — allowing powerful drugs, large volumes of fluid, feeding, and pressure monitoring that ordinary arm cannulas can't manage. Families often see it and fear the worst; in reality it's a routine, enabling tool, placed under sterile conditions with ultrasound guidance.",
    urgency: [{ c: "urgent", t: "Often urgent" }, { c: "planned", t: "Sometimes planned" }],
    indications: "Drugs too strong for small veins (some chemotherapy, vasopressors), large-volume fluids, intravenous feeding, repeated blood sampling, or close pressure monitoring in critical illness.",
    axes: {
      before: [
        { l: "Structural", b: "Only <b>small peripheral veins</b> are accessible — easily damaged by strong drugs or high flows." },
        { l: "Functional", b: "Powerful medicines and large volumes <b>can't be given safely</b>; central pressures can't be measured." },
        { l: "Chemical", b: "Concentrated or irritant drugs would <b>injure small veins</b>; nutrition-rich fluids are too strong for them." }
      ],
      after: [
        { l: "Structural", b: "A catheter tip sits in a <b>large central vein</b> near the heart, where high blood flow dilutes whatever is infused. Its position is confirmed before use." },
        { l: "Functional", b: "Strong drugs, feeding and large volumes can be given <b>safely</b>; central venous pressure can be monitored to guide fluid decisions." },
        { l: "Chemical", b: "The <b>rapid central blood flow dilutes irritant or concentrated agents</b> instantly, protecting the vessel wall and allowing therapies impossible through small veins." }
      ]
    },
    benefits: ["Delivers drugs too strong for small veins", "Allows large-volume fluids and IV feeding", "Enables pressure monitoring in critical illness", "Spares repeated needle-sticks for sampling"],
    risks: ["Infection if not scrupulously cared for", "Bleeding or, rarely, a dropped lung during insertion", "Clot formation in the vein", "Line displacement needing replacement"],
    rbnote: "A central line enables care that small veins can't — its main ongoing risk, infection, is minimised by strict handling.",
    journey: [
      { n: "Before", d: "Consent, clotting check, and positioning. Ultrasound identifies the target vein." },
      { n: "Insertion", d: "Under sterile drapes and local anaesthetic, the line is guided in — usually quick and well-tolerated." },
      { n: "Confirmation", d: "Position is checked (often by X-ray) before the line is used." },
      { n: "In use", d: "Drugs, fluids or feeding run through it; the site is kept clean and inspected daily." },
      { n: "Care", d: "Strict hand hygiene and dressing care prevent infection — the key ongoing task." },
      { n: "Removal", d: "Taken out simply once no longer needed; the small site heals quickly." }
    ],
    myths: [
      { m: "\u201cA central line means they're giving up.\u201d", t: "<b>The opposite</b> — it enables active, intensive treatment that small veins can't support." },
      { m: "\u201cIt goes into the heart.\u201d", t: "<b>The tip sits in a large vein near the heart</b>, not inside it, in high-flow blood." },
      { m: "\u201cIt's very painful.\u201d", t: "<b>Local anaesthetic makes insertion well-tolerated.</b> Most discomfort is brief." }
    ],
    ask: ["Why is a central line needed rather than a normal drip?", "Where will it be placed, and for how long?", "How is infection being prevented?", "What signs of a problem should we watch for?", "When can it come out?"]
  },

  colonoscopy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['bloodstool','abdopain','weightloss','diarrhoea'], procedures: ['endoscopy','ga','ctcontrast'], medicines: ['painkiller','anticoag','ironfolate','laxative'] },
    cat: "Diagnostic", name: "Colonoscopy",
    mini: "A camera examines the large bowel from below — the gold standard for finding and removing polyps.",
    story: "A colonoscopy inspects the entire large bowel with a flexible camera passed through the back passage. It's how bowel cancer is caught early — often by finding and removing polyps before they ever turn cancerous, making it both a test and a treatment. The preparation (clearing the bowel) is the part people dread most; the procedure itself, usually done with sedation, is generally well-tolerated and hugely worthwhile.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Urgent for bleeding" }],
    indications: "Bowel-cancer screening, investigation of rectal bleeding, a change in bowel habit, unexplained anaemia, or monitoring inflammatory bowel disease and previous polyps.",
    axes: {
      before: [
        { l: "Structural", b: "The large bowel's lining is <b>hidden from view</b>; polyps or early cancers can grow silently." },
        { l: "Functional", b: "Symptoms (or a screening interval) suggest a problem, but its <b>nature and location are unknown</b>." },
        { l: "Chemical", b: "Bleeding or inflammation may be signalled in stool tests, but the <b>source isn't localised</b>." }
      ],
      after: [
        { l: "Structural", b: "The entire lining is <b>seen directly</b>; polyps are found and usually removed in the same session, and any suspicious areas biopsied." },
        { l: "Functional", b: "Normal bowel function resumes within a day. Removing polyps <b>prevents future cancer</b> — the procedure treats as well as diagnoses." },
        { l: "Chemical", b: "Biopsies allow <b>tissue diagnosis</b> of inflammation or cancer; the source of bleeding is identified and, where possible, treated." }
      ]
    },
    benefits: ["Finds bowel cancer early, when curable", "Removes polyps before they become cancer", "Diagnoses the cause of bleeding or bowel changes", "A day-case test with a fast recovery"],
    risks: ["The bowel prep is unpleasant — the main downside", "Bloating and wind afterwards — brief", "Rarely, bleeding or a tear, especially after polyp removal", "Sedation-related effects — why you're monitored"],
    rbnote: "The dreaded part is the preparation; the test itself prevents cancer and is generally well-tolerated.",
    journey: [
      { n: "Preparation", d: "A strong laxative regimen clears the bowel the day before — the least pleasant part, but essential for a clear view." },
      { n: "Arrival", d: "Sedation is offered; you lie on your side. Monitoring is continuous." },
      { n: "During", d: "The camera passes gently around the bowel; air or CO2 opens the view. Polyps are removed as found. Usually 20–45 minutes." },
      { n: "Recovery", d: "A short rest as sedation wears off; bloating settles as trapped air passes." },
      { n: "Results", d: "Visual findings often explained the same day; biopsy and polyp results follow." },
      { n: "After", d: "No driving if sedated; normal eating resumes. Any heavy bleeding or severe pain warrants a call." }
    ],
    myths: [
      { m: "\u201cThe procedure is agonising.\u201d", t: "<b>Sedation makes it well-tolerated.</b> The preparation, not the test, is what most people find hard." },
      { m: "\u201cIf I have no symptoms I don't need it.\u201d", t: "<b>Screening finds cancer before symptoms appear</b> — that's precisely its value." },
      { m: "\u201cRemoving a polyp means I have cancer.\u201d", t: "<b>Most polyps aren't cancer</b> — removing them prevents one from ever developing." }
    ],
    ask: ["Why is a colonoscopy recommended for me now?", "What does the bowel prep involve?", "Will I be sedated, and can I drive after?", "What happens if you find and remove a polyp?", "When will I get the biopsy results?"]
  },

  hipreplace: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['jointpain'], procedures: ['kneereplace','spinal','ga'], medicines: ['painkiller','anticoag','calciumvitd'] },
    cat: "Orthopaedic", name: "Hip replacement",
    mini: "A worn hip joint's ball and socket are replaced — one of surgery's great quality-of-life wins.",
    story: "Arthritis of the hip turns walking, sleeping and even putting on shoes into daily pain. A hip replacement removes the worn ball at the top of the thigh bone and the damaged socket, replacing them with a smooth artificial joint. It is among the most reliably successful operations in all of medicine — most people are astonished by how completely the pain lifts, and are walking within a day.",
    urgency: [{ c: "planned", t: "Planned (elective)" }],
    indications: "Severe hip arthritis with pain and stiffness limiting walking, sleep and daily activities despite non-surgical measures; also certain hip fractures in older adults.",
    axes: {
      before: [
        { l: "Structural", b: "The <b>ball and socket are worn</b>, cartilage gone, bone grinding on bone; the joint may be stiff and shortened." },
        { l: "Functional", b: "Walking, bending and sleeping are <b>painful and limited</b>; the leg may feel shorter or weaker." },
        { l: "Chemical", b: "Worn surfaces drive <b>joint inflammation</b> — the deep ache and stiffness of hip arthritis." }
      ],
      after: [
        { l: "Structural", b: "The worn ball is <b>replaced with a metal or ceramic head on a stem</b>, seated in a new socket lining — a smooth, gliding artificial joint." },
        { l: "Functional", b: "Pain-free movement returns <b>rapidly for many</b>; walking often improves within a day, with full recovery over weeks as strength rebuilds." },
        { l: "Chemical", b: "With arthritic surfaces gone, the <b>inflammatory ache resolves</b>; post-operative swelling is managed and settles during healing." }
      ]
    },
    benefits: ["Often dramatic, rapid relief of pain", "Restored walking and independence", "Improved sleep and daily function", "Modern implants are highly durable"],
    risks: ["Blood clots — prevented with movement and medication", "Dislocation early on — certain positions are avoided at first", "Infection — uncommon but serious", "Small difference in leg length occasionally"],
    rbnote: "Among the most successful operations in medicine — but early movement precautions protect the new joint.",
    journey: [
      { n: "Before", d: "Optimisation, prehab exercises, and planning for home aids and support." },
      { n: "Surgery", d: "Usually under a spinal; the joint is replaced. Typically 1–2 hours." },
      { n: "First day", d: "Standing and walking usually begin the same or next day, with clot prevention and pain relief." },
      { n: "Early weeks", d: "Physiotherapy rebuilds strength; certain movements are avoided to prevent dislocation." },
      { n: "Months", d: "Steady return to normal activities, frequently pain-free for the first time in years." },
      { n: "Long term", d: "A durable joint with sensible activity; very high-impact sport is generally discouraged." }
    ],
    myths: [
      { m: "\u201cI'll be bedbound for weeks.\u201d", t: "<b>Most people walk within a day.</b> Early movement is encouraged and speeds recovery." },
      { m: "\u201cThe new hip will set off alarms and wear out fast.\u201d", t: "<b>Modern implants last many years.</b> Detector issues are minor and manageable." },
      { m: "\u201cI can never bend or move normally again.\u201d", t: "<b>Precautions are temporary.</b> Most people return to near-normal movement." }
    ],
    ask: ["Have non-surgical options been exhausted?", "Which approach and implant, and why?", "What movement precautions apply early on?", "What help will I need at home?", "What activities can I safely return to?"]
  },

  cataract: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['visionloss'], procedures: [], medicines: ['diabetesoral','steroid'] },
    cat: "Ophthalmic", name: "Cataract surgery",
    mini: "A clouded natural lens is replaced with a clear artificial one — quick, and often transformative.",
    story: "A cataract is the gradual clouding of the eye's natural lens, blurring vision as though looking through frosted glass. Surgery removes the cloudy lens and slips a clear artificial one into its place — usually in under half an hour, under local anaesthetic, with the person awake. It is the most commonly performed operation in the world, and for many people it restores vision they'd quietly given up on.",
    urgency: [{ c: "planned", t: "Planned (elective)" }],
    indications: "A cataract impairing vision enough to affect reading, driving, work or daily life — or interfering with the treatment of other eye conditions.",
    axes: {
      before: [
        { l: "Structural", b: "The eye's <b>natural lens has become cloudy</b>, scattering light before it reaches the retina." },
        { l: "Functional", b: "Vision is <b>blurred, dimmed, and glare-prone</b>; colours fade; night driving becomes difficult." },
        { l: "Chemical", b: "Proteins in the lens have <b>clumped and discoloured</b> with age, reducing its transparency." }
      ],
      after: [
        { l: "Structural", b: "The cloudy lens is <b>broken up and removed, and a clear artificial lens implanted</b> in the same capsule. The eye's structure is otherwise preserved." },
        { l: "Functional", b: "Clear, brighter vision usually returns <b>within days</b>; the implant's power can also reduce dependence on glasses." },
        { l: "Chemical", b: "The <b>clouded protein is gone</b>, replaced by a stable, transparent lens that doesn't cloud again — restoring the clear passage of light to the retina." }
      ]
    },
    benefits: ["Restores clear, bright vision", "Quick, usually under 30 minutes", "Done awake under local anaesthetic", "Can reduce reliance on glasses"],
    risks: ["Temporary grittiness and light sensitivity", "Infection — rare but taken seriously", "A cloudy membrane later, easily treated with a laser", "Rarely, retinal or other complications"],
    rbnote: "One of the safest, most effective operations there is — the benefit for daily life is often profound.",
    journey: [
      { n: "Before", d: "Measurements select the implant power; eye drops and mild sedation may be arranged." },
      { n: "Preparation", d: "Anaesthetic drops (sometimes an injection) numb the eye; you stay awake but relaxed." },
      { n: "During", d: "The cloudy lens is broken up and removed and the new lens inserted through a tiny opening. Usually painless, often under 30 minutes." },
      { n: "Immediately after", d: "A shield protects the eye; vision may be blurry at first, clearing over days." },
      { n: "First weeks", d: "Eye drops prevent infection and inflammation; avoid rubbing the eye." },
      { n: "After", d: "Vision stabilises; a new glasses prescription is checked once healed. The second eye follows if needed." }
    ],
    myths: [
      { m: "\u201cThe cataract is cut out with a laser blade.\u201d", t: "<b>It's broken up and gently removed</b> through a tiny opening; a clear implant replaces it." },
      { m: "\u201cI have to wait until it's 'ripe'.\u201d", t: "<b>Modern surgery doesn't require waiting.</b> It's done when vision affects your life." },
      { m: "\u201cCataracts grow back.\u201d", t: "<b>They don't.</b> A membrane can cloud later, but a quick laser clears it permanently." }
    ],
    ask: ["How much of my vision problem is the cataract?", "What lens implant suits my eyes and lifestyle?", "Will I still need glasses afterwards?", "What's the recovery and drop routine?", "When will the second eye be done, if needed?"]
  },

  appendectomy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','fever','nausea'], procedures: ['ga','ctcontrast'], medicines: ['antibiotic','painkiller'] },
    cat: "Surgical", name: "Appendix removal",
    mini: "Emergency removal of an inflamed appendix — usually keyhole, and usually straightforward.",
    story: "The appendix is a small pouch off the large bowel that, when it becomes inflamed (appendicitis), causes worsening pain that classically shifts to the lower right abdomen. Left untreated it can burst, spilling infection into the belly — so removal is usually an emergency. The good news: it's a common, well-practised operation, generally done by keyhole, and the appendix serves no essential function you'll miss.",
    urgency: [{ c: "emerg", t: "Usually an emergency" }],
    indications: "Acute appendicitis — worsening abdominal pain localising to the lower right, with nausea, fever and tenderness — to prevent the appendix bursting.",
    axes: {
      before: [
        { l: "Structural", b: "The appendix is <b>inflamed and swollen</b>, its wall thinning; it may be close to bursting." },
        { l: "Functional", b: "The inflammation causes <b>escalating pain, nausea and fever</b>; a burst would spread infection widely." },
        { l: "Chemical", b: "Trapped bacteria drive <b>infection and inflammation</b>; the body mounts a rising immune and fever response." }
      ],
      after: [
        { l: "Structural", b: "The inflamed appendix is <b>removed through keyhole incisions</b>; the bowel it branched from is closed and intact." },
        { l: "Functional", b: "The source of infection is <b>gone</b>; pain resolves as healing begins. Digestion is unaffected — the appendix isn't needed." },
        { l: "Chemical", b: "With the infected tissue removed, the <b>inflammatory and fever response settles</b>; antibiotics cover any residual infection during recovery." }
      ]
    },
    benefits: ["Removes the source before it can burst", "Usually keyhole — small scars, quick recovery", "Definitive cure of appendicitis", "No lasting effect from losing the appendix"],
    risks: ["Wound infection — usually minor", "If already burst, a longer recovery and antibiotics", "Rarely, a collection of infection needing drainage", "Occasionally, conversion to open surgery"],
    rbnote: "The main risk is delay — a burst appendix is far more serious than a timely removal.",
    journey: [
      { n: "Diagnosis", d: "Examination, blood tests, and often a scan confirm appendicitis." },
      { n: "Preparation", d: "Fasting, fluids, antibiotics, and a general anaesthetic are arranged, often urgently." },
      { n: "Surgery", d: "Keyhole ports allow the appendix to be freed and removed. Usually under an hour." },
      { n: "Immediately after", d: "Waking with small dressings; pain relief and early sips of fluid." },
      { n: "Recovery", d: "Home within a day or two if uncomplicated; longer if the appendix had burst." },
      { n: "After", d: "Gradual return to activity over one to two weeks; wounds heal quickly." }
    ],
    myths: [
      { m: "\u201cAppendicitis can be slept off.\u201d", t: "<b>It usually worsens and can burst.</b> Escalating right-lower pain needs prompt assessment." },
      { m: "\u201cLosing my appendix will affect my digestion.\u201d", t: "<b>It won't.</b> The appendix has no essential digestive role you'll notice." },
      { m: "\u201cIt always needs a big open cut.\u201d", t: "<b>Most are keyhole</b>, with small scars and a quick recovery." }
    ],
    ask: ["How confident is the diagnosis, and was a scan done?", "Keyhole or open, and what could change that?", "Has it burst, and how does that affect recovery?", "How long until I can return to work?", "What warning signs after surgery should I act on?"]
  },

  bloodtransfusion: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','breathless','bloodstool','bruising','fever','jaundice'], procedures: ['centralline','chemotherapy'], medicines: ['ironfolate'] },
    cat: "Haematology", name: "Blood transfusion",
    mini: "Donated blood replaces what's been lost or isn't being made — carefully matched and monitored.",
    story: "A transfusion gives you blood, or a specific component of it, from a screened donor — to replace serious blood loss, correct severe anaemia, or supply clotting factors. It's tightly regulated, meticulously matched to your blood group, and given slowly under observation. Fears about safety are understandable but largely outdated: modern screening and cross-matching make transfusion very safe, and for the right patient it's genuinely life-saving.",
    urgency: [{ c: "emerg", t: "Emergency in blood loss" }, { c: "planned", t: "Planned for anaemia" }],
    indications: "Significant bleeding (trauma, surgery, childbirth), severe anaemia causing symptoms, or specific deficiencies of platelets or clotting factors.",
    axes: {
      before: [
        { l: "Structural", b: "There are <b>too few red cells, platelets, or clotting factors</b> — from bleeding or reduced production." },
        { l: "Functional", b: "Oxygen delivery or clotting is <b>impaired</b> — causing breathlessness, fatigue, or dangerous bleeding." },
        { l: "Chemical", b: "Low haemoglobin means <b>less oxygen carried</b>; low platelets or factors mean blood <b>can't clot</b> properly." }
      ],
      after: [
        { l: "Structural", b: "Matched donor <b>red cells, platelets or plasma are added</b> to the circulation, restoring the deficient component." },
        { l: "Functional", b: "Oxygen-carrying capacity or clotting is <b>restored</b>; symptoms ease and bleeding is controlled. The effect is immediate but the underlying cause still needs treating." },
        { l: "Chemical", b: "<b>Haemoglobin rises, restoring oxygen transport</b>; transfused platelets or factors re-enable clotting. Blood group compatibility prevents a harmful immune reaction." }
      ]
    },
    benefits: ["Immediately restores oxygen-carrying or clotting capacity", "Life-saving in major bleeding", "Carefully matched and screened for safety", "Given slowly with close monitoring"],
    risks: ["Mild fever or chills — usually minor and treatable", "Allergic reactions — uncommon", "Fluid overload, especially in the frail — managed by slow rates", "Serious mismatched reactions — very rare with modern checks"],
    rbnote: "Modern screening and matching make transfusion very safe; it treats the deficiency, not its cause.",
    journey: [
      { n: "Before", d: "Your blood group is determined and donor blood cross-matched — the crucial safety step." },
      { n: "Checks", d: "Two staff verify your identity against the blood pack — a rigorously enforced safeguard." },
      { n: "During", d: "Blood runs in slowly through a cannula; you're observed closely, especially in the first minutes." },
      { n: "Monitoring", d: "Temperature, pulse and blood pressure are checked to catch any reaction early." },
      { n: "After", d: "Symptoms of anaemia often ease quickly; a blood test may confirm the rise." },
      { n: "Ongoing", d: "The cause of the low blood count is investigated and treated." }
    ],
    myths: [
      { m: "\u201cTransfusions are likely to give me an infection.\u201d", t: "<b>Modern screening makes this extremely rare.</b> Donated blood is rigorously tested." },
      { m: "\u201cAny blood will do in an emergency.\u201d", t: "<b>Blood is carefully matched.</b> Only in the direst emergencies is universal-donor blood used briefly." },
      { m: "\u201cA transfusion fixes the underlying problem.\u201d", t: "<b>It replaces what's missing</b>; the cause of the loss or anaemia still needs treating." }
    ],
    ask: ["Why do I need a transfusion, and which component?", "How is my blood matched and checked?", "What reactions should I report during it?", "How many units, and over what time?", "What's being done about the underlying cause?"]
  },

  chemotherapy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['nausea','fatigue','weightloss','breastlump'], procedures: ['centralline','bloodtransfusion','biopsy'], medicines: ['steroid','antibiotic'] },
    cat: "Oncology", name: "Chemotherapy",
    mini: "Drugs that target rapidly dividing cells to kill cancer — powerful, and given in carefully planned cycles.",
    story: "Chemotherapy uses medicines that attack rapidly dividing cells, the hallmark of cancer. Because some healthy cells also divide fast — hair, gut lining, blood-forming marrow — the familiar side effects follow, though modern supportive care has softened many of them. It's given in cycles, allowing the body to recover between doses. Understanding the logic behind it — why the cycles, why the side effects, why the blood tests — makes a daunting treatment far less frightening.",
    urgency: [{ c: "planned", t: "Planned in cycles" }],
    indications: "Treating many cancers — to cure, to control, to shrink a tumour before surgery, or to reduce the chance of return afterwards, depending on the cancer and stage.",
    axes: {
      before: [
        { l: "Structural", b: "<b>Cancer cells divide unchecked</b>, forming or spreading a tumour; healthy fast-dividing tissues are intact." },
        { l: "Functional", b: "The cancer <b>grows or spreads</b>; the body's normal fast-renewing tissues (blood, gut, hair) function normally." },
        { l: "Chemical", b: "Cancer cells <b>replicate their DNA rapidly and continuously</b>, driving uncontrolled growth." }
      ],
      after: [
        { l: "Structural", b: "The drugs <b>damage dividing cells' DNA or machinery</b>, killing cancer cells — but temporarily affecting healthy fast-dividing tissues too, hence the side effects." },
        { l: "Functional", b: "Tumours may <b>shrink or be controlled</b>; meanwhile marrow, gut and hair are transiently affected, then recover in the gaps between cycles — the reason for the cyclical schedule." },
        { l: "Chemical", b: "By <b>disrupting DNA replication or cell division</b>, the drugs stop cancer cells multiplying; blood counts are tracked because the marrow is temporarily suppressed." }
      ]
    },
    benefits: ["Can cure or control many cancers", "Reaches cancer throughout the body", "Can shrink tumours before surgery", "Lowers the chance of recurrence in many cases"],
    risks: ["Fatigue, nausea, hair loss — varying by regimen", "Lowered blood counts raising infection risk", "Effects on fertility — discussed beforehand", "Specific drug effects monitored throughout"],
    rbnote: "Side effects come from healthy fast-dividing cells being caught in the crossfire — most recover between cycles.",
    journey: [
      { n: "Planning", d: "The regimen, cycles and supportive medicines are chosen for your specific cancer; fertility is discussed if relevant." },
      { n: "Each cycle", d: "Drugs are given (by drip or tablet), followed by a recovery gap before the next." },
      { n: "Between doses", d: "Blood counts are checked; anti-sickness and other supportive care manage side effects." },
      { n: "Monitoring", d: "Scans and tests assess how the cancer is responding, guiding any adjustments." },
      { n: "Supportive care", d: "Infection precautions matter when counts are low; report fever promptly." },
      { n: "After", d: "Fast-dividing healthy tissues recover; follow-up watches for response and recurrence." }
    ],
    myths: [
      { m: "\u201cChemotherapy always means hair loss and constant vomiting.\u201d", t: "<b>It varies by regimen</b>, and modern anti-sickness care has transformed tolerability." },
      { m: "\u201cIf I feel unwell, it's working; if not, it isn't.\u201d", t: "<b>Side effects don't measure effectiveness.</b> Scans and tests do." },
      { m: "\u201cChemo is the same for everyone.\u201d", t: "<b>It's tailored</b> to the cancer type, stage, and the individual." }
    ],
    ask: ["What is the goal — cure, control, or shrinking?", "What side effects are likely with my regimen?", "How will response be measured?", "What symptoms mean I must call urgently?", "What about fertility and long-term effects?"]
  },

  pacemaker: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['palpitations','dizzy'], procedures: ['ga','pci','ecg'], medicines: ['anticoag','bp','heartfailure'] },
    cat: "Cardiac", name: "Pacemaker",
    mini: "A small device that steps in when the heart's own electrical timing fails or slows dangerously.",
    story: "The heart has its own electrical wiring that sets the beat. When that system falters — beating too slowly, or with dangerous pauses — a pacemaker takes over the timing, delivering tiny electrical impulses to keep the rhythm steady. It's implanted under the skin near the collarbone in a short procedure, usually under local anaesthetic. For people plagued by blackouts or exhausting slow heartbeats, it can be quietly transformative.",
    urgency: [{ c: "planned", t: "Often planned" }, { c: "urgent", t: "Urgent for dangerous slow rhythms" }],
    indications: "A heart beating too slowly or pausing dangerously (heart block, sick sinus syndrome), causing blackouts, dizziness, or breathlessness — and certain forms of heart failure.",
    axes: {
      before: [
        { l: "Structural", b: "The heart's <b>natural electrical pathway is faulty</b> — signals are blocked or the pacemaker cells fire too slowly." },
        { l: "Functional", b: "The heart <b>beats too slowly or pauses</b>, so the body is under-supplied with blood — causing faints, dizziness, fatigue." },
        { l: "Chemical", b: "The heart's <b>electrical impulses fail to propagate normally</b> through its conducting tissue." }
      ],
      after: [
        { l: "Structural", b: "A small device sits <b>under the skin, with fine leads into the heart</b>, ready to deliver impulses when the natural beat falters." },
        { l: "Functional", b: "The pacemaker <b>maintains an adequate heart rate</b>, ending blackouts and restoring energy. It only fires when needed, sensing the heart's own activity." },
        { l: "Chemical", b: "The device <b>supplies the electrical impulse the heart's own tissue can't</b>, triggering each beat and keeping blood flow steady." }
      ]
    },
    benefits: ["Ends blackouts and dangerous slow rhythms", "Restores energy and safety", "A short procedure, usually under local anaesthetic", "Batteries last many years, checked remotely"],
    risks: ["Bruising or bleeding at the site — usually minor", "Rarely, a dropped lung or lead displacement", "Infection of the device — uncommon but important", "Occasional lead or battery issues needing revision"],
    rbnote: "For dangerous slow rhythms, a pacemaker is definitive — it restores both safety and quality of life.",
    journey: [
      { n: "Before", d: "Rhythm monitoring confirms the need; blood thinners may be adjusted." },
      { n: "Implantation", d: "Under local anaesthetic and sedation, the device is placed under the skin and leads guided into the heart. Usually an hour or so." },
      { n: "Checking", d: "The device is tested and programmed to your needs before you leave." },
      { n: "Early days", d: "Some arm-movement restrictions let the leads settle; the wound heals over a week or two." },
      { n: "Follow-up", d: "Regular checks — often remote — confirm function and battery life." },
      { n: "Living with it", d: "Most activities resume normally; a card identifies the device for security scanners and clinicians." }
    ],
    myths: [
      { m: "\u201cA pacemaker means my heart is about to fail.\u201d", t: "<b>It usually fixes an electrical timing problem</b>, often restoring a normal, active life." },
      { m: "\u201cMicrowaves and phones will stop it.\u201d", t: "<b>Everyday devices are safe.</b> Only specific strong fields need caution, and you'll be advised." },
      { m: "\u201cIt controls my heart every second.\u201d", t: "<b>It mostly watches and only steps in</b> when your own rhythm falters." }
    ],
    ask: ["Why do I need a pacemaker, and which type?", "Will it pace all the time or only when needed?", "What activity limits apply early on?", "How is it monitored, and how long does the battery last?", "What precautions matter in daily life?"]
  },

  lp: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['headache','fever','confusion','backpain','numbness','visionloss'], procedures: ['ctcontrast'], medicines: ['antibiotic','epilepsy'] },
    cat: "Diagnostic", name: "Lumbar puncture",
    mini: "A needle samples the fluid around the spinal cord — vital for diagnosing meningitis and more.",
    story: "A lumbar puncture ('spinal tap') collects a small sample of the cerebrospinal fluid that bathes the brain and spinal cord, from the lower back — safely below where the cord ends. It's the definitive test for meningitis and several neurological conditions, and can also relieve pressure or deliver medication. The image is scarier than the reality: done under local anaesthetic, it's usually brief, and the information it gives can be genuinely life-saving.",
    urgency: [{ c: "emerg", t: "Emergency for meningitis" }, { c: "planned", t: "Planned for diagnosis" }],
    indications: "Suspected meningitis or brain inflammation, certain bleeds not seen on scans, some neurological conditions, measuring or relieving fluid pressure, or delivering medication.",
    axes: {
      before: [
        { l: "Structural", b: "The <b>cerebrospinal fluid is sealed within the spine and skull</b>; its contents can't be examined." },
        { l: "Functional", b: "A serious condition (infection, bleed, inflammation) may be present, but <b>can't be confirmed</b> without sampling the fluid." },
        { l: "Chemical", b: "The fluid's <b>cell count, protein, sugar and organisms are unknown</b> — the very things that reveal the diagnosis." }
      ],
      after: [
        { l: "Structural", b: "A fine needle, placed <b>below where the cord ends</b>, has withdrawn a small fluid sample; the cord itself is untouched." },
        { l: "Functional", b: "The <b>diagnosis is clarified</b> — often confirming or excluding meningitis quickly, guiding urgent treatment. Pressure may also have been measured or relieved." },
        { l: "Chemical", b: "Analysis reveals <b>white cells, protein, glucose and any organisms</b> — the fingerprint that distinguishes bacterial from viral meningitis and other conditions." }
      ]
    },
    benefits: ["The definitive test for meningitis", "Can distinguish bacterial from viral causes fast", "Can measure or relieve fluid pressure", "Allows targeted delivery of some medications"],
    risks: ["A headache afterwards in a minority — treatable", "Backache or brief nerve twinges during the procedure", "Rarely, bleeding or infection", "It's avoided if pressure signs suggest a scan is needed first"],
    rbnote: "The needle sits safely below the spinal cord — the test's diagnostic power in serious illness is high.",
    journey: [
      { n: "Before", d: "Sometimes a scan first if raised pressure is suspected; clotting is checked." },
      { n: "Positioning", d: "You curl on your side or lean forward to open the gaps between vertebrae." },
      { n: "The procedure", d: "Local anaesthetic numbs the skin; the fine needle collects fluid. Brief pressure, occasionally a twinge down a leg." },
      { n: "Immediately after", d: "Lying flat for a while may reduce the chance of a headache." },
      { n: "Results", d: "Some findings come within hours; cultures take longer. Treatment often starts before all results return if meningitis is likely." },
      { n: "After", d: "A headache, if it develops, is managed; most people recover quickly." }
    ],
    myths: [
      { m: "\u201cThe needle will hit my spinal cord and paralyse me.\u201d", t: "<b>It's placed below where the cord ends.</b> Serious injury is very rare." },
      { m: "\u201cIt's excruciating.\u201d", t: "<b>Local anaesthetic makes it tolerable</b> — pressure more than sharp pain for most." },
      { m: "\u201cA headache afterwards means something went wrong.\u201d", t: "<b>A post-procedure headache is a known, treatable effect</b>, not a sign of damage." }
    ],
    ask: ["Why is this test needed for my diagnosis?", "Do I need a scan before it?", "How is the headache risk reduced and treated?", "When will results be back, and will treatment start before then?", "What should I watch for afterwards?"]
  },

  xray: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','cough','backpain','jointpain'], procedures: ['ctcontrast','mri'], medicines: ['antitb'] },
    cat: "Diagnostic", name: "X-ray",
    mini: "A shadow picture made in a fraction of a second — and it changes nothing about you except a very small radiation dose.",
    story: "An X-ray is the oldest medical image there is, and still the most used, because it answers a narrow question extremely fast: is the bone broken, is there fluid or infection in the lung, is something where it should not be. It works by shadow — dense tissue such as bone blocks the beam and appears white, air passes it and appears black. The most useful thing to understand is how little is done to you: you stand or lie still, nothing enters your body, and the entire exposure lasts a fraction of a second.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Often urgent" }, { c: "emerg", t: "Used in emergencies" }],
    indications: "Suspected fracture, chest infection, fluid around the lung, bowel obstruction, swallowed objects, and as the first look before deciding whether a more detailed scan is needed.",
    axes: {
      before: [
        { l: "Structural", b: "The question is unanswered. A bone may or may not be broken; a lung may or may not be full of fluid — and <b>nothing on the outside reliably tells you which</b>." },
        { l: "Functional", b: "Treatment is on hold, or is being chosen by guesswork. Pain relief can start, but the decision that matters is waiting on information." },
        { l: "Chemical", b: "Nothing has been introduced into the body. Your usual medicines continue unchanged." }
      ],
      after: [
        { l: "Structural", b: "<b>Nothing in your body has been altered.</b> No incision, no instrument, no contact beyond lying against a plate. The change is to what is known, not to you." },
        { l: "Functional", b: "The decision is unblocked — a fracture can be set, an infection treated, an obstruction acted on. <b>Function is restored by what follows the image, not by the image.</b>" },
        { l: "Chemical", b: "A very small dose of ionising radiation has passed through. A chest X-ray is roughly comparable to a few days of ordinary background radiation; the risk from one image is extremely small, but it is not zero, which is why they are not taken casually." }
      ]
    },
    benefits: ["Fast — often minutes from request to answer", "Painless, with nothing entering the body", "Widely available and inexpensive", "Answers many urgent questions definitively", "Guides whether a bigger scan is even needed"],
    risks: ["A small dose of ionising radiation", "Cumulative dose matters if repeated often", "Avoided where possible in pregnancy", "Can miss what it is not designed to show — soft tissue, early fractures, small tumours", "A normal X-ray does not always mean nothing is wrong"],
    rbnote: "The dose from a single X-ray is very small; the real judgement is whether the image will change what happens next. If it will, it is almost always worth taking.",
    journey: [
      { n: "Beforehand", d: "Remove metal from the area — jewellery, belts, some clothing. Tell the radiographer if you are or might be pregnant." },
      { n: "Positioning", d: "You are placed against a plate or table. Getting the angle right takes longer than the picture itself." },
      { n: "The exposure", d: "You hold still, sometimes hold a breath. It lasts a fraction of a second and you feel nothing at all." },
      { n: "Afterwards", d: "You leave immediately. There is nothing to recover from and no restriction on your day." },
      { n: "The report", d: "The image is read by a radiologist. The urgency of the question decides how quickly you are told." }
    ],
    myths: [
      { m: "“An X-ray leaves radiation in my body.”", t: "<b>It does not.</b> The beam passes through and stops. You are not radioactive afterwards and pose no risk to anyone around you." },
      { m: "“A normal X-ray means nothing is wrong.”", t: "<b>Not necessarily.</b> X-rays show bone and air well and soft tissue poorly. Some fractures only become visible days later." },
      { m: "“It's dangerous, so I should refuse one.”", t: "<b>The dose is very small.</b> The greater risk in most situations is treating a serious problem blind." }
    ],
    ask: ["What question is this X-ray meant to answer?", "Will the result change my treatment?", "How many X-rays have I had recently?", "Could I be pregnant — does that change anything?", "When and how will I get the result?"]
  },

  ultrasound: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','jaundice','swelling','breastlump'], procedures: ['ctcontrast','biopsy','hysterectomy'], medicines: [] },
    cat: "Diagnostic", name: "Ultrasound scan",
    mini: "Sound, not radiation — a live moving picture of soft tissue that adds nothing to your body at all.",
    story: "Ultrasound sends high-frequency sound into the body and listens to the echoes coming back from the boundaries between tissues. Because it uses no radiation, it can be repeated as often as needed and is the first choice in pregnancy and in children. Its other distinguishing feature is that it is live: the person scanning is watching movement in real time — blood flowing, a heart valve opening, a baby shifting — rather than reading a still image afterwards.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Often urgent" }],
    indications: "Gallstones, kidney and bladder problems, liver disease, pregnancy monitoring, thyroid and breast lumps, clots in leg veins, and guiding a needle accurately during a biopsy or drainage.",
    axes: {
      before: [
        { l: "Structural", b: "A lump, an organ or a swelling is unexplained. It can be felt, or suspected, but its internal character — solid or fluid-filled, smooth or irregular — is unknown." },
        { l: "Functional", b: "Flow and movement are invisible. Whether a vein is blocked, or a heart valve leaking, cannot be judged from outside." },
        { l: "Chemical", b: "Nothing introduced. In most scans no injection of any kind is involved." }
      ],
      after: [
        { l: "Structural", b: "The internal structure is visible — and crucially, <b>a fluid-filled cyst can be told apart from a solid mass</b>, which is often the entire question being asked." },
        { l: "Functional", b: "Movement and flow are seen directly and in real time: blood direction and speed, valve motion, a fetal heartbeat. <b>Your own function is unchanged</b>; only what is known about it has changed." },
        { l: "Chemical", b: "Nothing has been added to the body and no radiation has been used. You may simply be left with cool gel on the skin, which wipes off." }
      ]
    },
    benefits: ["No ionising radiation at all", "Safe in pregnancy and in children", "Shows movement and blood flow live", "Painless and usually quick", "Can be repeated as often as needed", "Can guide a needle precisely during a biopsy"],
    risks: ["Very few — there is no known harm from diagnostic ultrasound", "Limited by gas and by body habitus; bowel gas can obscure the view", "Cannot see through bone or air, so lungs and brain are poorly assessed in adults", "Highly dependent on the skill of the operator", "May raise questions that then need a CT or MRI anyway"],
    rbnote: "Ultrasound is about as low-risk as a medical test gets. Its limitation is not safety but reach — some areas simply cannot be seen with sound.",
    journey: [
      { n: "Preparation", d: "Depends on the area. A gallbladder scan usually needs several hours without food; a pelvic scan often needs a full bladder." },
      { n: "The gel", d: "Cool gel is spread on the skin so sound passes in rather than reflecting off air. This is the only unpleasant part for most people." },
      { n: "Scanning", d: "The probe is pressed and angled across the area. It can be firm over a tender spot, but it is not cutting or piercing anything." },
      { n: "Afterwards", d: "Gel is wiped off and you go straight back to normal. No recovery, no restrictions." },
      { n: "The result", d: "Often discussed immediately by the person scanning, with a formal report following." }
    ],
    myths: [
      { m: "“Ultrasound uses radiation like an X-ray.”", t: "<b>It does not.</b> It uses sound waves, which is exactly why it is the scan of choice in pregnancy." },
      { m: "“If the ultrasound is clear, nothing can be wrong.”", t: "<b>Not so.</b> Sound does not travel through gas or bone, so some areas are simply not visible to it." },
      { m: "“An ultrasound can tell whether a lump is cancer.”", t: "<b>It narrows it down.</b> It can distinguish fluid from solid and describe the shape — but only tissue, from a biopsy, gives a definite answer." }
    ],
    ask: ["What are you hoping to see?", "Do I need to fast or fill my bladder first?", "Will I be told the result today?", "If this is unclear, what is the next test?", "Does this need repeating, and when?"]
  },

  mri: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['backpain','headache','numbness','jointpain','breastlump'], procedures: ['ctcontrast','xray'], medicines: [] },
    cat: "Diagnostic", name: "MRI scan",
    mini: "A powerful magnet, no radiation, and the best view of soft tissue in medicine — at the cost of noise, time and stillness.",
    story: "MRI works by putting the body inside a very strong magnetic field, nudging the water molecules in your tissues with radio waves, and listening to the signal they give back as they settle. Different tissues settle at different rates, and that difference is what produces astonishing detail in things X-rays barely register — brain, spinal cord, ligaments, cartilage, muscle. The trade is comfort: it is loud, it is slow, and it requires you to lie still in a tunnel, which some people find genuinely difficult.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Sometimes urgent" }],
    indications: "Spinal cord and nerve compression, stroke and brain conditions, knee and shoulder ligament injuries, tumour staging, and any question where soft-tissue detail matters more than speed.",
    axes: {
      before: [
        { l: "Structural", b: "Soft tissue detail is unknown. A disc may be pressing on a nerve, a ligament may be torn — <b>and an X-ray will show none of it</b>." },
        { l: "Functional", b: "Symptoms are present without an explanation precise enough to act on. Surgery in particular cannot be planned without knowing exactly what and where." },
        { l: "Chemical", b: "Nothing introduced, unless contrast is planned. Metal implants and devices need to be declared before you go anywhere near the magnet." }
      ],
      after: [
        { l: "Structural", b: "Soft tissue is mapped in fine detail — nerve, cord, cartilage, tumour margins. <b>Nothing in you has been altered by the scan itself.</b>" },
        { l: "Functional", b: "A precise target exists. An operation can be planned to the correct level, or avoided because the picture shows it would not help." },
        { l: "Chemical", b: "No ionising radiation has been used. If gadolinium contrast was given, it is cleared by the kidneys over the following day — which is why kidney function is checked first." }
      ]
    },
    benefits: ["The clearest view of soft tissue available", "No ionising radiation", "Can often distinguish scar tissue from active disease", "Allows precise surgical planning", "Can image in any plane without moving you"],
    risks: ["Absolutely unsuitable for some metal implants and devices — declare everything", "Claustrophobia is common and worth raising in advance", "Very noisy; ear protection is provided", "Long — often 20 to 45 minutes of lying still", "Contrast, when used, needs adequate kidney function", "Expensive and less widely available than CT"],
    rbnote: "MRI gives more detail than anything else and costs you no radiation. What it asks in return is time, stillness and tolerance of a loud, enclosed space.",
    journey: [
      { n: "Safety screening", d: "The most important step. Every implant, clip, pacemaker, stent, metal fragment or piercing must be declared — the magnet is always on." },
      { n: "Changing", d: "Metal-free clothing, no jewellery, no cards with magnetic strips in the room." },
      { n: "In the scanner", d: "You lie on a table that slides into the tunnel. You are given ear protection and a buzzer to call the staff at any time." },
      { n: "The scan", d: "Loud knocking and buzzing in bursts. Staying still is the whole job — movement blurs the images and may mean repeating a sequence." },
      { n: "Afterwards", d: "You get up and leave. No recovery is needed unless you were sedated for claustrophobia." }
    ],
    myths: [
      { m: "“MRI is a stronger X-ray.”", t: "<b>Different physics entirely.</b> It uses magnetism and radio waves, and involves no ionising radiation." },
      { m: "“I can just get through it if I'm claustrophobic.”", t: "<b>Say so beforehand.</b> Open scanners, sedation or a different test may be options — an abandoned scan helps nobody." },
      { m: "“My old implant is probably fine.”", t: "<b>Never assume.</b> Bring the details. Some devices are absolutely incompatible with the magnet, and the consequences are serious." }
    ],
    ask: ["What will this show that a cheaper or faster scan would not?", "How long will I need to lie still?", "I find enclosed spaces difficult — what are my options?", "Will I need contrast, and is my kidney function adequate?", "How long until the result?"]
  },

  biopsy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breastlump','weightloss','bruising','swallowing'], procedures: ['ultrasound','endoscopy','chemotherapy'], medicines: [] },
    cat: "Diagnostic", name: "Biopsy",
    mini: "Taking a small piece of tissue to look at under a microscope — the only test that gives a definite answer.",
    story: "Every scan describes shape, size and density. None of them can say what a thing actually is. A biopsy answers that by taking a genuine sample of the tissue and examining its cells directly — which is why, however good the imaging, a diagnosis of cancer is almost never made without one. People understandably fear the procedure and fear the result, and the two often blur together. Worth separating: the procedure itself is usually brief, done under local anaesthetic, and far less dramatic than the wait that follows it.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "urgent", t: "Often urgent" }],
    indications: "Any lump, mass or abnormal area where the cell type must be known — breast, liver, kidney, lymph node, bone marrow, skin, prostate — and to monitor rejection or disease activity in a transplanted or diseased organ.",
    axes: {
      before: [
        { l: "Structural", b: "A lesion is visible on a scan but its nature is unknown. <b>Benign and malignant can look identical from the outside.</b>" },
        { l: "Functional", b: "No treatment can be started properly. Cancer treatment in particular depends entirely on cell type — the wrong assumption means the wrong drug." },
        { l: "Chemical", b: "No tissue-level information exists. Blood markers may hint, but they do not name what is there." }
      ],
      after: [
        { l: "Structural", b: "A small tract has been made and a sample removed. <b>A little bleeding and bruising along that track is expected</b>; the defect itself heals over days." },
        { l: "Functional", b: "The organ continues working — the sample is tiny relative to the whole. What changes is that treatment now has a target and a name." },
        { l: "Chemical", b: "The cells can be typed, graded and tested for the specific markers that decide which treatments will work. <b>This is the information that personalises everything that follows.</b>" }
      ]
    },
    benefits: ["Gives a definite diagnosis where imaging can only suggest", "Identifies the exact cell type, which selects the treatment", "Can show that a worrying lesion is benign — ending the uncertainty", "Usually quick, and usually under local anaesthetic", "Allows testing for markers that predict treatment response"],
    risks: ["Bleeding or bruising at the site — usually minor", "Infection, uncommon", "Pain for a day or two", "An inconclusive sample, sometimes needing a repeat", "Rarely, damage to a nearby structure — reduced by image guidance", "The wait for results is, for most people, the hardest part"],
    rbnote: "The procedure is usually small; the information is usually decisive. Treating a cancer without knowing its type is the larger risk by far.",
    journey: [
      { n: "Beforehand", d: "Blood-thinning medicines are often paused — this must be arranged by the team who prescribed them, never by you alone." },
      { n: "Local anaesthetic", d: "The skin and deeper tissue are numbed. The sting of the injection is usually the worst of it." },
      { n: "Taking the sample", d: "Often guided by ultrasound or CT so the needle reaches exactly the right spot. You may feel pushing and a sharp click." },
      { n: "Immediately after", d: "Pressure over the site, then observation for a period depending on which organ was sampled." },
      { n: "The wait", d: "Tissue is processed, stained and examined — typically several days to a couple of weeks. Ask who will contact you, and when." }
    ],
    myths: [
      { m: "“A biopsy makes cancer spread.”", t: "<b>This is not supported by evidence</b>, and the fear delays diagnosis. The risk of not knowing what you are treating is far greater." },
      { m: "“The scan already showed it's cancer.”", t: "<b>A scan raises the suspicion; tissue confirms it.</b> Treatment depends on the cell type, which only a biopsy provides." },
      { m: "“A benign result could be wrong, so it's pointless.”", t: "<b>Sampling error is uncommon and accounted for.</b> If a result does not fit the picture, your team repeats or escalates rather than ignoring it." }
    ],
    ask: ["Which organ is being sampled, and how will you guide the needle?", "Do I need to stop any blood thinners, and who arranges that?", "What are the specific risks for this site?", "When will I get the result, and who will tell me?", "What happens if the sample is inconclusive?"]
  },

  ecg: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','palpitations','dizzy','breathless','anxiety'], procedures: ['pci','pacemaker'], medicines: ['bp','antiplatelet'] },
    cat: "Cardiac / diagnostic", name: "ECG (heart tracing)",
    mini: "Ten stickers, ten seconds, no current entering you — it only listens to the electricity your heart already makes.",
    story: "The heart runs on its own electrical signal, and that signal is strong enough to be detected at the skin. An ECG places electrodes at standard points and records that activity from several angles at once, producing the familiar trace. It is one of the fastest and most informative tests in medicine, and the source of most confusion about it is a single misunderstanding: nothing is sent into you. The machine only listens.",
    urgency: [{ c: "planned", t: "Often routine" }, { c: "urgent", t: "Frequently urgent" }, { c: "emerg", t: "First test in a suspected heart attack" }],
    indications: "Chest pain, palpitations, blackouts, breathlessness, before surgery, monitoring the effect of certain medicines, and as the immediate first test whenever a heart attack is suspected.",
    axes: {
      before: [
        { l: "Structural", b: "The heart's chambers and conduction pathways are unassessed. A previous silent heart attack, or a thickened muscle, leaves electrical traces nobody has looked for." },
        { l: "Functional", b: "Rhythm and rate are unknown beyond a pulse at the wrist — which cannot distinguish the many rhythms that feel similar." },
        { l: "Chemical", b: "Potassium and other salt disturbances that alter the heart's electrical behaviour are not yet visible." }
      ],
      after: [
        { l: "Structural", b: "The trace reveals strain, thickening, conduction blocks and the scars of previous damage. <b>Your heart is entirely unchanged by the recording</b> — ten seconds of listening alters nothing." },
        { l: "Functional", b: "The rhythm is named rather than guessed — atrial fibrillation, heart block, a fast rhythm from above or below. <b>In a heart attack this single tracing decides whether you go straight to the cath lab.</b>" },
        { l: "Chemical", b: "Characteristic patterns can flag dangerously high or low potassium, and the effects of certain medicines, before a blood result has returned." }
      ]
    },
    benefits: ["Fast — under a minute to record", "Completely painless, with nothing entering the body", "No radiation whatsoever", "Can be repeated as often as needed", "In a heart attack, it is the test that decides immediate treatment", "Inexpensive and available almost everywhere"],
    risks: ["Essentially none from the recording itself", "Skin irritation from the sticky electrodes, occasionally", "A normal ECG does not exclude heart disease — it is a ten-second snapshot", "An abnormal ECG in a well person can cause unnecessary alarm and further tests", "Intermittent rhythm problems are easily missed and may need longer monitoring"],
    rbnote: "An ECG carries no meaningful physical risk. Its real limitation is time: it shows ten seconds of a heart that has to be right every minute of every day.",
    journey: [
      { n: "Preparation", d: "The upper body is exposed and electrode sites may be shaved or wiped. Dignity is easy to arrange — ask." },
      { n: "Placing electrodes", d: "Ten sticky electrodes go on the chest, arms and legs in standard positions. Placement accuracy matters more than people realise." },
      { n: "Recording", d: "You lie still and breathe normally for about ten seconds. You feel nothing at all." },
      { n: "Afterwards", d: "Electrodes come off and you resume immediately. There is nothing to recover from." },
      { n: "Interpretation", d: "In an emergency it is read within minutes. Routinely it is reviewed alongside your symptoms — the trace alone means little without them." }
    ],
    myths: [
      { m: "“The machine sends electricity through me.”", t: "<b>It does not.</b> An ECG only records the heart's own electrical activity. You are being listened to, not stimulated." },
      { m: "“A normal ECG means my heart is fine.”", t: "<b>Not reliably.</b> It captures ten seconds. Angina, and intermittent rhythm problems, are frequently invisible on a resting trace." },
      { m: "“An abnormal ECG means a heart attack.”", t: "<b>Often not.</b> Many variations are benign or long-standing. It is interpreted with your symptoms, your history and sometimes a previous tracing." }
    ],
    ask: ["What did this tracing show?", "Is there an older ECG of mine to compare it with?", "If it's normal but my symptoms continue, what is the next step?", "Would longer monitoring help catch what I'm feeling?", "Do any of my medicines affect this trace?"]
  },

  herniarepair: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain'], procedures: ['ga','spinal'], medicines: ['painkiller','antibiotic'] },
    cat: "Surgical", name: "Hernia repair",
    mini: "A gap in the abdominal wall that lets something push through — closed, and usually reinforced with mesh.",
    story: "A hernia is a hole, not a lump. The bulge you can see or feel is abdominal contents pushing through a weak point in the muscle wall, which is why it appears on standing or straining and often disappears on lying down. Hernias do not heal themselves and belts do not fix them. The real decision is timing: many can safely be watched, but a hernia that becomes stuck and painful is an emergency, because the trapped tissue can lose its blood supply within hours.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "emerg", t: "Emergency if trapped" }],
    indications: "A hernia causing pain or limiting activity, one that is enlarging, and urgently any hernia that becomes firm, tender and cannot be pushed back — which suggests the contents are trapped.",
    axes: {
      before: [
        { l: "Structural", b: "There is a defect in the abdominal wall, and fat or bowel protrudes through it — more on standing, coughing or lifting. <b>The gap does not close on its own.</b>" },
        { l: "Functional", b: "Lifting, coughing and exercise may be uncomfortable or limited. If contents become trapped, the bowel can obstruct and its blood supply can be cut off." },
        { l: "Chemical", b: "Nothing systemic, unless strangulation has begun — then inflammatory and metabolic markers rise sharply as tissue starts to die." }
      ],
      after: [
        { l: "Structural", b: "The contents are returned and <b>the defect is closed, usually reinforced with a synthetic mesh</b> that your own tissue grows into over the following weeks, creating a repair stronger than stitching alone." },
        { l: "Functional", b: "The bulge is gone and the risk of strangulation is largely removed. <b>Full strength returns gradually</b> — lifting restrictions for several weeks are about protecting the repair while it integrates." },
        { l: "Chemical", b: "Ordinary post-surgical inflammation as the mesh integrates and tissue heals. This settles over weeks." }
      ]
    },
    benefits: ["Removes the risk of the bowel becoming trapped", "The bulge and its discomfort are gone", "Return to lifting, work and exercise", "Mesh repair has a low recurrence rate", "Keyhole repair often means a faster recovery"],
    risks: ["Recurrence — uncommon with mesh, but possible", "Chronic groin pain in a minority, which can persist", "Infection, occasionally requiring mesh removal", "Injury to nearby nerves, bowel or blood vessels — uncommon", "Fluid collection (seroma) at the site, usually settling by itself", "Anaesthetic risks, which depend on your general health"],
    rbnote: "For a painful or enlarging hernia, repair prevents a genuine emergency. For a small painless one, watchful waiting is often a legitimate choice — ask which situation you are in.",
    journey: [
      { n: "The decision", d: "Size, symptoms, your work and your general health decide between watching and repairing, and between open and keyhole surgery." },
      { n: "Anaesthetic", d: "General anaesthetic for keyhole; open repair is sometimes done under spinal or even local anaesthetic." },
      { n: "The repair", d: "Contents are reduced, the defect closed, and mesh placed to reinforce it. Usually under an hour." },
      { n: "Going home", d: "Often the same day. Walking is encouraged straight away — early movement helps rather than harms." },
      { n: "Recovery", d: "Desk work within one to two weeks for many; heavy lifting restricted for around four to six weeks. Your surgeon's instruction overrides any general figure." }
    ],
    myths: [
      { m: "“A truss or belt will cure it.”", t: "<b>It will not.</b> A support may make a hernia more comfortable, but the defect remains and so does the risk of trapping." },
      { m: "“It doesn't hurt, so it's fine.”", t: "<b>Painless hernias can still strangulate.</b> Watchful waiting is reasonable, but it is a decision made with a surgeon, not by default." },
      { m: "“Mesh is dangerous.”", t: "<b>Mesh substantially reduces recurrence</b> and is standard practice. Complications exist but are uncommon — discuss your specific situation." }
    ],
    ask: ["Does mine need repairing now, or can it be watched?", "Open or keyhole, and why that choice for me?", "Will mesh be used?", "How long off work, and when can I lift again?", "What exactly should make me come back urgently?"]
  },

  hysterectomy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain'], procedures: ['ga','spinal','ultrasound'], medicines: ['painkiller','ironfolate'] },
    cat: "Gynaecological / surgical", name: "Hysterectomy",
    mini: "Removal of the uterus — definitive for several conditions, and irreversible, which is why alternatives come first.",
    story: "A hysterectomy ends menstruation and the ability to carry a pregnancy, permanently. That finality is precisely why it sits at the end of a list of options rather than the start of one: medicines, hormonal coils, fibroid-specific procedures and ablation can resolve many of the problems it is offered for. When those have failed, or when the condition demands it, it is highly effective — and many people describe substantial relief. The single most important thing to establish beforehand is exactly what is being removed, because 'hysterectomy' covers several quite different operations.",
    urgency: [{ c: "planned", t: "Usually planned" }, { c: "emerg", t: "Rarely, an emergency" }],
    indications: "Heavy bleeding that has not responded to other treatment, large or symptomatic fibroids, endometriosis or adenomyosis, prolapse, cancer of the uterus, cervix or ovary, and rarely uncontrollable bleeding after childbirth.",
    axes: {
      before: [
        { l: "Structural", b: "The uterus is in place — perhaps enlarged by fibroids, thickened by adenomyosis, or prolapsing. Ovaries and cervix are present unless previously removed." },
        { l: "Functional", b: "Periods continue, often heavily. Pregnancy remains possible. Pain, pressure, bleeding or prolapse symptoms may be limiting daily life." },
        { l: "Chemical", b: "If the ovaries are working, the normal hormonal cycle continues. Chronic heavy bleeding may have driven iron levels and haemoglobin down." }
      ],
      after: [
        { l: "Structural", b: "The uterus is removed, with the cervix depending on the type of operation. <b>The ovaries are a separate decision</b> and are often left in place — establish this beforehand, because it changes everything below." },
        { l: "Functional", b: "<b>Menstruation stops permanently and pregnancy is no longer possible.</b> Bleeding, pressure and pain from the uterus resolve. Bladder, bowel and sexual function are usually unaffected in the long run." },
        { l: "Chemical", b: "<b>If the ovaries are kept, hormones continue and menopause arrives naturally.</b> If they are removed, menopause begins immediately — a different experience, and one that should be planned for, not discovered." }
      ]
    },
    benefits: ["Definitive — the bleeding cannot return", "Resolves fibroid and prolapse pressure symptoms", "Curative for early cancer of the uterus", "Ends the anaemia that chronic heavy bleeding causes", "No further need for contraception", "Many report a marked improvement in quality of life"],
    risks: ["Permanent and irreversible loss of fertility", "Immediate surgical menopause if the ovaries are also removed", "Bleeding, infection, or injury to bladder, bowel or ureter — uncommon but serious", "Blood clots in the legs or lungs", "Weeks of recovery, longer after open surgery", "Some experience a sense of loss that deserves to be acknowledged rather than dismissed"],
    rbnote: "It is highly effective and it is permanent. Both halves of that sentence matter — make sure the less drastic options have genuinely been considered and named.",
    journey: [
      { n: "Exploring alternatives", d: "Hormonal treatment, a hormone-releasing coil, fibroid embolisation or endometrial ablation may resolve the problem without surgery." },
      { n: "Choosing the route", d: "Vaginal, keyhole or open — decided by the reason, the size of the uterus and previous surgery. Keyhole and vaginal recover faster." },
      { n: "The operation", d: "Under general anaesthetic, typically one to two hours. What is removed depends on the plan agreed with you." },
      { n: "In hospital", d: "Usually one to three days, longer after open surgery. Early walking reduces the risk of clots." },
      { n: "Recovery", d: "Around two to six weeks depending on the route, with restrictions on lifting. Emotional recovery can run on a different timetable — that is normal." }
    ],
    myths: [
      { m: "“Hysterectomy always causes menopause.”", t: "<b>Only if the ovaries are removed too.</b> With the ovaries kept, hormones continue and menopause arrives at its natural time. Ask exactly what is planned." },
      { m: "“It's the only answer for heavy bleeding.”", t: "<b>Often it is not.</b> A hormone-releasing coil, medicines or ablation resolve many cases. Ask what has been tried and what remains." },
      { m: "“Sex will be worse afterwards.”", t: "<b>Most people report it is unchanged or better</b>, particularly when pain and bleeding were the problem. Raise this directly — it is a legitimate question." }
    ],
    ask: ["Exactly what will be removed — uterus, cervix, ovaries?", "What less drastic options are there, and why not those?", "Will I need hormone treatment afterwards?", "Which route, and what is the recovery for it?", "How will this affect menopause timing for me?"]
  },

  tonsillectomy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['sorethroat','earpain'], procedures: ['ga'], medicines: ['painkiller','antibiotic'] },
    cat: "ENT / surgical", name: "Tonsil removal",
    mini: "A short operation with a famously uncomfortable recovery — reserved for when tonsillitis is genuinely frequent, or breathing is obstructed.",
    story: "Tonsils are lymphoid tissue at the back of the throat, and they are part of the immune system's early warning network — which is why they are not removed casually. Two situations justify it: infections frequent enough to disrupt school, work or life, and tonsils large enough to obstruct breathing during sleep. The second is the more important in children, and the more commonly missed. The recovery is genuinely sore for one to two weeks, and being told that honestly in advance changes how people experience it.",
    urgency: [{ c: "planned", t: "Almost always planned" }],
    indications: "Recurrent tonsillitis at a frequency that disrupts daily life, obstructive sleep apnoea caused by enlarged tonsils, recurrent abscess beside the tonsil, and rarely to biopsy an asymmetrically enlarged tonsil.",
    axes: {
      before: [
        { l: "Structural", b: "Enlarged or repeatedly infected tonsils sit either side of the throat, sometimes narrowing the airway substantially during sleep." },
        { l: "Functional", b: "Repeated painful infections, days lost, repeated antibiotic courses. Where the tonsils obstruct, sleep is fragmented — often with snoring, pauses, and daytime tiredness or behavioural problems in children." },
        { l: "Chemical", b: "Recurrent inflammatory episodes and repeated antibiotic exposure, with all that implies for resistance and for gut flora." }
      ],
      after: [
        { l: "Structural", b: "The tonsils are removed from their beds, leaving raw surfaces that heal with a white slough over one to two weeks. <b>That white coating is normal healing, not infection.</b>" },
        { l: "Functional", b: "Episodes of tonsillitis largely stop. <b>Where obstruction was the problem, the airway opens and sleep quality improves markedly</b> — often the most striking benefit of all." },
        { l: "Chemical", b: "Inflammatory episodes and repeated antibiotic courses fall away. Immune function is not meaningfully impaired — the rest of the immune system more than compensates." }
      ]
    },
    benefits: ["Substantially fewer throat infections", "Opens the airway where tonsils obstructed sleep", "Fewer antibiotic courses and days lost", "In children with sleep apnoea, often marked gains in sleep, behaviour and growth", "Removes the risk of recurrent peritonsillar abscess"],
    risks: ["Significant throat pain for one to two weeks — expect this", "Bleeding, including a delayed bleed around days five to ten, which is an emergency", "Dehydration if pain stops adequate drinking", "Anaesthetic risks", "Referred ear pain during healing, which is normal but alarming", "Sore throats can still occur afterwards, just far less often"],
    rbnote: "The operation is short; the recovery is the hard part. It earns its place when infections are genuinely frequent or the airway is genuinely obstructed — not for occasional sore throats.",
    journey: [
      { n: "Deciding", d: "Frequency and severity of episodes are counted over one to two years, or sleep-disordered breathing is assessed. Thresholds exist for a reason." },
      { n: "The operation", d: "Under general anaesthetic, usually around 30 minutes, entirely through the mouth — there is no external cut." },
      { n: "First hours", d: "Often home the same day. Drinking is encouraged early, and regular pain relief is started before the pain builds." },
      { n: "Days 1-10", d: "Pain frequently peaks around days four to seven, and ear pain is common. Eating normally — even coarse food — actually helps the beds heal." },
      { n: "Bleeding watch", d: "Any bleeding from the mouth after the operation means going straight to hospital, day or night. This is the one non-negotiable instruction." }
    ],
    myths: [
      { m: "“Removing tonsils weakens the immune system.”", t: "<b>Not meaningfully.</b> Tonsils are one small part of a large immune network, and no significant increase in infections elsewhere follows." },
      { m: "“Soft food helps it heal.”", t: "<b>The opposite is usually advised.</b> Eating normally keeps the healing surfaces clean; many surgeons specifically encourage ordinary food." },
      { m: "“The white patches mean it's infected.”", t: "<b>They are normal healing slough.</b> Fever, worsening pain or bleeding are the things to report — not the white coating." }
    ],
    ask: ["How many episodes have I actually had, and do I meet the threshold?", "Is sleep-disordered breathing part of the reason?", "What pain relief will I have, and for how long?", "What exactly do I do if there is any bleeding?", "How long off school or work?"]
  },

  rootcanal: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['earpain'], procedures: [], medicines: ['painkiller','antibiotic'] },
    cat: "Dental", name: "Root canal treatment",
    mini: "It removes the pain rather than causing it — the infected nerve inside the tooth is taken out and the space sealed.",
    story: "Root canal treatment has a reputation it no longer deserves. The pain people associate with it is the pain of the infected nerve that brings them in — a genuinely severe, throbbing, sleep-destroying ache — and the treatment is what stops it. Inside every tooth is a chamber containing nerve and blood vessels; when decay or trauma lets bacteria in, that tissue becomes inflamed and then dies, and the infection tracks out through the root tip into the bone. The choice is usually between cleaning that chamber out and keeping the tooth, or extracting it.",
    urgency: [{ c: "planned", t: "Often planned" }, { c: "urgent", t: "Urgent when infected" }],
    indications: "An abscessed or irreversibly inflamed dental pulp, a tooth with deep decay reaching the nerve, a cracked or traumatised tooth with a dying nerve, and re-treatment of a previous root filling that has failed.",
    axes: {
      before: [
        { l: "Structural", b: "Decay or a crack has reached the pulp chamber. Bacteria are inside the root canal system, and often an abscess has formed at the root tip, eroding the surrounding bone." },
        { l: "Functional", b: "Severe throbbing pain, often worse lying down and with heat, and the tooth may be too tender to bite on. <b>Untreated, the tooth is usually lost</b> and the infection can spread into the face and neck." },
        { l: "Chemical", b: "Active bacterial infection with an inflammatory response in the surrounding bone. Antibiotics can suppress this temporarily but cannot reach inside the dead canal itself." }
      ],
      after: [
        { l: "Structural", b: "The canals are cleaned, shaped and <b>sealed with an inert filling material</b>. The tooth is then usually crowned, because a root-treated tooth is more brittle and prone to fracture." },
        { l: "Functional", b: "The pain resolves. <b>The tooth stays in place and continues to bite and chew</b> — but it no longer has a living nerve, so it cannot feel hot or cold." },
        { l: "Chemical", b: "The bacterial reservoir is removed, so the infection resolves and the bone at the root tip heals over months. <b>This is the definitive treatment; antibiotics alone were never going to be.</b>" }
      ]
    },
    benefits: ["Ends severe toothache at its source", "Keeps your own tooth rather than extracting it", "Preserves the bite, and avoids the drift of neighbouring teeth", "Resolves the infection definitively rather than suppressing it", "High success rate in competent hands"],
    risks: ["Can fail, needing re-treatment or eventual extraction", "The tooth becomes more brittle and usually requires a crown", "An instrument can separate, or a canal be missed, in complex roots", "Soreness for a few days afterwards", "Cost, and usually more than one appointment", "Persistent infection if the seal is not complete"],
    rbnote: "The realistic comparison is not root canal versus nothing — it is root canal versus losing the tooth. Antibiotics alone do not cure an infection inside a dead canal.",
    journey: [
      { n: "Diagnosis", d: "Examination, tapping and cold tests, and an X-ray to see the root tip and the extent of any bone loss." },
      { n: "Numbing", d: "Local anaesthetic. A severely inflamed tooth can be harder to numb — say so if you still feel sharpness, as more can be given." },
      { n: "Cleaning the canals", d: "An opening is made, the pulp removed, and the canals cleaned, shaped and disinfected. This is the longest part." },
      { n: "Sealing", d: "Canals are filled and sealed, sometimes at a second visit with a medicated dressing in between." },
      { n: "The crown", d: "Usually recommended afterwards to protect the tooth from fracture. Skipping it is a common reason root-treated teeth are later lost." }
    ],
    myths: [
      { m: "“Root canal treatment is agonising.”", t: "<b>It relieves agony.</b> Under proper local anaesthetic it is comparable to having a filling. The pain people remember is the abscess that preceded it." },
      { m: "“Antibiotics will sort out the abscess.”", t: "<b>Only temporarily.</b> They cannot reach inside a dead canal. Without treating the source, the infection returns." },
      { m: "“It's easier to just pull the tooth.”", t: "<b>It's quicker, not simpler.</b> Losing a tooth means neighbouring teeth drift, bone resorbs, and replacement costs more than the root canal would have." }
    ],
    ask: ["What are my realistic options — treat or extract?", "How many visits, and will I need a crown?", "What is the chance of success for this particular tooth?", "What should I do if the pain returns afterwards?", "What is the total cost, including the crown?"]
  },

  catheter: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['urinary','confusion'], procedures: ['ga','dialysis'], medicines: ['antibiotic'] },
    cat: "Urological care", name: "Urinary catheter",
    mini: "A soft tube draining the bladder — simple, often necessary, and best removed as soon as it is no longer needed.",
    story: "A urinary catheter is one of the most common things done in hospitals and one of the least explained. A soft, flexible tube is passed along the urethra into the bladder and held in place by a small balloon, so urine drains continuously into a bag. It is frequently the right thing to do — for a blocked bladder it is genuinely relieving. But every day a catheter stays in carries a real and rising risk of infection, which is why the most important question about a catheter is not how it goes in but when it is coming out.",
    urgency: [{ c: "planned", t: "Often routine in care" }, { c: "urgent", t: "Urgent in retention" }, { c: "emerg", t: "Emergency if the bladder is blocked" }],
    indications: "Acute urinary retention (a blocked bladder that cannot empty), accurate monitoring of urine output in serious illness, during and after many operations, and long-term management of certain bladder and neurological conditions.",
    axes: {
      before: [
        { l: "Structural", b: "In retention, the bladder is distended — sometimes dramatically — and pressure is transmitted back towards the kidneys. The urethra is otherwise undisturbed." },
        { l: "Functional", b: "The bladder cannot empty. This is genuinely painful, and if it persists it damages the bladder muscle and can impair kidney function." },
        { l: "Chemical", b: "If obstruction has lasted, waste products including urea and creatinine accumulate in the blood — sustained back-pressure injures the kidneys." }
      ],
      after: [
        { l: "Structural", b: "A tube sits along the urethra into the bladder, held by a balloon. <b>The bladder is decompressed and the back-pressure on the kidneys is relieved.</b>" },
        { l: "Functional", b: "Urine drains continuously and painlessly, and output can be measured precisely. <b>The bladder muscle is not doing its own work while the catheter is in</b>, which is one reason prolonged use is avoided." },
        { l: "Chemical", b: "Kidney function typically recovers as pressure falls. Against this: <b>the tube is a direct route for bacteria into the bladder, and infection risk climbs with every day it stays.</b>" }
      ]
    },
    benefits: ["Immediate relief of a painfully blocked bladder", "Protects the kidneys from sustained back-pressure", "Allows accurate measurement of urine output in serious illness", "Keeps skin dry and intact where incontinence causes breakdown", "Enables many operations to be done safely"],
    risks: ["Urinary infection — the risk rises with every day it remains in place", "Discomfort, bladder spasms and a persistent urge to pass urine", "Injury to the urethra, particularly if insertion is difficult", "Blockage or bypassing around the tube", "Narrowing of the urethra after long-term or traumatic use", "Loss of dignity and independence, which is worth naming"],
    rbnote: "A catheter can be exactly the right thing on day one and the wrong thing by day five. The single question worth repeating to the team is: can this come out yet?",
    journey: [
      { n: "The decision", d: "There should be a clear reason. Ask what it is — 'for convenience' is not one, and alternatives sometimes exist." },
      { n: "Insertion", d: "Done with sterile technique and anaesthetic gel. Uncomfortable rather than painful for most people, and over in a few minutes." },
      { n: "While it's in", d: "The bag stays below bladder level so urine cannot flow back. Good fluid intake and hygiene reduce infection risk." },
      { n: "Removal", d: "The balloon is deflated and the tube slides out — quicker and easier than insertion. Some stinging when first passing urine afterwards is normal." },
      { n: "Afterwards", d: "Normal passing of urine should return within hours. Not being able to go again, fever, or heavy bleeding all need reporting." }
    ],
    myths: [
      { m: "“Insertion is extremely painful.”", t: "<b>Uncomfortable, not usually painful.</b> Anaesthetic gel is used, and the relief in a blocked bladder is immediate and considerable." },
      { m: "“It's safer to leave it in a bit longer, just in case.”", t: "<b>The opposite.</b> Infection risk accumulates daily. Prompt removal when no longer needed is the single most effective safety measure." },
      { m: "“Cloudy urine in a catheter means I need antibiotics.”", t: "<b>Often not.</b> Bacteria colonise every long-term catheter. Antibiotics are for genuine illness — fever, pain, feeling unwell — not for the appearance of the bag." }
    ],
    ask: ["Why exactly do I need this, and is there an alternative?", "When can it come out — and who decides?", "What symptoms mean an infection rather than normal colonisation?", "Who do I contact if it blocks or leaks?", "If it's long-term, what care and change schedule do I need?"]
  }
});
