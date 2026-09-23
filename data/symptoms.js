// Signal · Symptoms — content database
// 20 highest-anxiety, highest-search symptoms across organ systems.
// Frequency bands (common/some/rare) are RELATIVE and illustrative, not statistics.
// Authored by the named clinician in data/editorial.js. Educational content:
// it explains, it never diagnoses, and it never replaces the reader's own doctor.
// rail: visual urgency spread — 'calm' | 'watch' | 'now' | 'mix'

window.SYMPTOMS = {
  chest: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','palpitations','swelling','anxiety','swallowing'], procedures: ['pci','bypass','ctcontrast','endoscopy','ecg','xray'], medicines: ['antiplatelet','statin','acid','bp'] },
    system: "Cardiac / respiratory", name: "Chest pain", rail: "mix",
    mini: "From muscle strain to heart attack — the range is enormous, so the red flags matter most.",
    story: "Chest pain is the symptom people fear most, and for good reason — it sits over the heart. But the majority of chest pain seen in general practice is not the heart at all: it's muscle, rib, gullet, or anxiety. The skill is separating the ordinary from the dangerous, and a few features do most of that work.",
    urgency: { level: "now", badge: "Can be an emergency", text: "<b>Call emergency services now</b> if chest pain is crushing or heavy, spreads to the arm, jaw or back, comes with sweating, breathlessness or nausea, or lasts more than a few minutes at rest — especially over 40 or with heart risk factors." },
    flags: ["Pressure or heaviness, not a sharp catch", "Spreads to left arm, jaw, neck or back", "Cold sweat, nausea, or shortness of breath", "Comes on with exertion, eases with rest", "Sudden tearing pain going through to the back", "Coughing blood, or one calf swollen and painful"],
    causes: [
      { f: "common", n: "Musculoskeletal", d: "Strained chest-wall muscle or rib joint — sharp, worse on movement or pressing the spot." },
      { f: "common", n: "Acid reflux", d: "Burning behind the breastbone, often after meals or lying down." },
      { f: "common", n: "Anxiety / panic", d: "Tightness with fast breathing, tingling, a sense of dread — real and physical." },
      { f: "some", n: "Angina", d: "Heart muscle short of blood on exertion; a warning sign, not yet a heart attack." },
      { f: "rare", n: "Heart attack", d: "Blocked coronary artery — the emergency the red flags screen for." },
      { f: "rare", n: "PE / aortic tear", d: "Clot in the lung or a split in the main artery — rare but immediately life-threatening." }
    ],
    types: [
      { n: "Pleuritic", d: "Sharp, stabbing, worse with a deep breath — points to lung or chest wall." },
      { n: "Pressure-like", d: "Heavy, squeezing, dull — the pattern most linked to the heart." },
      { n: "Burning", d: "Rising warmth behind the breastbone — classically reflux." },
      { n: "Positional", d: "Changes with posture or movement — usually musculoskeletal." }
    ],
    region: { t: "South Asia carries a heavier and earlier burden of coronary artery disease than most Western populations — heart attacks often present a decade younger. A lower threshold to take chest pain seriously is appropriate in Indian and wider South Asian adults.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  headache: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['visionloss','fever','confusion','nausea'], procedures: ['lp','ctcontrast','mri'], medicines: ['painkiller','bp'] },
    system: "Neurological", name: "Headache", rail: "mix",
    mini: "Almost everyone gets them; almost all are benign. A small pattern of features flags the rare dangerous one.",
    story: "Headache is nearly universal, and the overwhelming majority — tension and migraine — are unpleasant but not dangerous. The clinical job is spotting the rare 'secondary' headache caused by something serious underneath. Reassuringly, dangerous headaches usually announce themselves through a small set of features rather than through pain alone.",
    urgency: { level: "now", badge: "Usually benign, rarely serious", text: "<b>Seek emergency care</b> for a sudden 'thunderclap' headache peaking in seconds, or one with fever and a stiff neck, weakness, confusion, slurred speech, or after a head injury." },
    flags: ["Sudden 'thunderclap' — worst headache of your life in seconds", "Fever with a stiff neck or a rash", "Weakness, numbness, slurred speech or vision loss", "New headache after 50, or with cancer/immune conditions", "Steadily worsening over days, worse lying down or on waking", "Follows a significant blow to the head"],
    causes: [
      { f: "common", n: "Tension-type", d: "A tight band around the head from stress, posture or fatigue." },
      { f: "common", n: "Migraine", d: "Throbbing, often one-sided, with light or sound sensitivity, sometimes an aura." },
      { f: "common", n: "Dehydration / caffeine", d: "Too little water, a skipped meal, or caffeine withdrawal." },
      { f: "some", n: "Sinusitis", d: "Facial pressure and congestion, worse leaning forward." },
      { f: "rare", n: "Meningitis", d: "Infection of the brain's lining — fever, stiff neck, light-averse. Emergency." },
      { f: "rare", n: "Bleed / tumour", d: "Bleeding or a mass raising pressure — what the progressive red flags screen for." }
    ],
    types: [
      { n: "Tension-type", d: "Dull, band-like, both sides — pressure rather than throb." },
      { n: "Migraine", d: "Pulsating, one-sided, with nausea and light sensitivity." },
      { n: "Cluster", d: "Severe pain around one eye in bouts — rarer, intensely painful." },
      { n: "Secondary", d: "Caused by another condition — the category the red flags target." }
    ],
    region: { t: "Migraine is common worldwide but under-diagnosed across much of South Asia, where headaches are often attributed to 'gas', sinus, or 'tension'. Infective causes such as tuberculous meningitis also feature more prominently in serious headache regionally.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  breathless: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','cough','swelling','anxiety','fatigue','palpitations'], procedures: ['ventilation','ctcontrast','pci','bloodtransfusion','bypass','ecg'], medicines: ['reliever','preventer','heartfailure','anticoag','diuretic','ironfolate'] },
    system: "Respiratory / cardiac", name: "Breathlessness", rail: "mix",
    mini: "Being short of breath at rest, or far more easily than usual, always deserves attention.",
    story: "Breathlessness — the feeling of not getting enough air — spans the trivial (unfit, anxious) to the immediately dangerous (heart failure, clot, severe asthma). The single most useful question is: how quickly did it come on, and does it happen at rest? Sudden breathlessness at rest is a different animal from gradual breathlessness on climbing stairs.",
    urgency: { level: "now", badge: "Can be an emergency", text: "<b>Seek emergency care</b> for breathlessness that comes on suddenly, is severe at rest, comes with chest pain, blue lips, or means you can't speak a full sentence." },
    flags: ["Sudden onset at rest, over minutes", "Chest pain or a fast, pounding heartbeat with it", "Blue-tinged lips or fingertips", "Can't complete a sentence in one breath", "One leg swollen and painful (possible clot)", "Waking at night gasping, or needing pillows to breathe"],
    causes: [
      { f: "common", n: "Deconditioning / anxiety", d: "Being unfit, or the fast shallow breathing of a panic attack." },
      { f: "common", n: "Asthma / COPD", d: "Wheezy, tight airways — often with a trigger, cough or known diagnosis." },
      { f: "common", n: "Chest infection", d: "Pneumonia or bronchitis, usually with fever and a productive cough." },
      { f: "some", n: "Heart failure", d: "Fluid backing up into the lungs — breathless lying flat, swollen ankles." },
      { f: "some", n: "Anaemia", d: "Too few red cells to carry oxygen — pale, tired, breathless on effort." },
      { f: "rare", n: "Pulmonary embolism", d: "A clot in the lung — sudden breathlessness, sometimes with chest pain. Emergency." }
    ],
    types: [
      { n: "Acute", d: "Over minutes to hours — asthma, clot, infection, heart event." },
      { n: "Chronic", d: "Over weeks to months — COPD, heart failure, anaemia." },
      { n: "Positional", d: "Worse lying flat (orthopnoea) — points toward the heart." },
      { n: "Exertional", d: "Only on effort — the earliest sign of many heart and lung problems." }
    ],
    region: { t: "Tuberculosis remains a leading cause of chronic cough and breathlessness across India and should not be forgotten. High urban air-pollution levels also drive a heavy burden of asthma and COPD, including in non-smokers.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  abdopain: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['nausea','bloodstool','fever','diarrhoea','jaundice','urinary'], procedures: ['endoscopy','gallbladder','appendectomy','colonoscopy','csection','ctcontrast'], medicines: ['acid','painkiller','laxative'] },
    system: "Gastrointestinal", name: "Abdominal pain", rail: "mix",
    mini: "Where it hurts, how it started, and what comes with it separate a stomach upset from a surgical emergency.",
    story: "The abdomen holds many organs, so belly pain is one of medicine's great puzzles. Location is the first clue, timing the second. Most abdominal pain is self-limiting — trapped wind, gastroenteritis, period pain. But a handful of patterns point to problems that need an operating theatre, and delay in those is dangerous.",
    urgency: { level: "now", badge: "Sometimes surgical", text: "<b>Seek urgent care</b> for severe, constant pain, a rigid or board-like belly, pain with persistent vomiting, blood in vomit or stool, or pain with fever and inability to pass wind or stool." },
    flags: ["Severe, constant pain that's worsening", "Belly rigid, board-like, or agony to touch", "Pain that started around the navel then moved to the lower right", "Vomiting blood, or black tarry stools", "Fever with the pain, or looking very unwell", "Pain in a pregnant woman, or sudden testicular pain in a man"],
    causes: [
      { f: "common", n: "Gastroenteritis", d: "Cramps, diarrhoea, vomiting — a self-limiting bug." },
      { f: "common", n: "Indigestion / gastritis", d: "Upper-belly burning, related to meals or spicy food." },
      { f: "common", n: "Constipation / wind", d: "Crampy, shifting discomfort, eased by passing stool or gas." },
      { f: "some", n: "Gallstones / kidney stones", d: "Waves of severe pain — right upper belly, or loin to groin." },
      { f: "some", n: "Appendicitis", d: "Pain migrating to the lower right, worsening, with nausea. Often surgical." },
      { f: "rare", n: "Perforation / obstruction", d: "A burst or blocked gut — rigid belly, severe pain, very unwell. Emergency." }
    ],
    types: [
      { n: "Colicky", d: "Comes in waves — a hollow tube (gut, ureter, bile duct) in spasm." },
      { n: "Constant", d: "Steady and localising — inflammation of an organ." },
      { n: "Peritonitic", d: "Worse with any movement, cough or bump — lining of the belly inflamed." },
      { n: "Referred", d: "Felt away from its source — e.g. shoulder-tip pain from the diaphragm." }
    ],
    region: { t: "Enteric (typhoid) fever, amoebic liver abscess, and abdominal tuberculosis are far more common causes of abdominal pain in India than in Western textbooks. Persistent or febrile abdominal pain warrants a lower threshold for investigation.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  dizzy: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['palpitations','fatigue','confusion','earpain','nausea','numbness'], procedures: ['ctcontrast','pacemaker','ecg'], medicines: ['bp','diabetesoral','insulin'] },
    system: "Neurological / cardiac", name: "Dizziness", rail: "watch",
    mini: "'Dizzy' means different things — spinning, faintness, or unsteadiness — and each points somewhere different.",
    story: "Dizziness is one word for several distinct sensations, and untangling which one is half the diagnosis. True vertigo (the room spinning) usually comes from the inner ear. Feeling about to faint points to blood pressure or the heart. Unsteadiness on the feet points to the nerves or balance system. Most causes are benign, but a few need ruling out.",
    urgency: { level: "watch", badge: "Usually benign", text: "<b>Seek urgent care</b> if dizziness comes with slurred speech, facial droop, double vision, weakness, a severe headache, or fainting — these can signal a stroke or heart-rhythm problem." },
    flags: ["Slurred speech, facial droop, or limb weakness", "Double vision or difficulty walking", "Fainting, or near-fainting with chest palpitations", "Sudden severe headache with the dizziness", "New deafness or ringing in one ear", "Dizziness after a head injury"],
    causes: [
      { f: "common", n: "BPPV (inner ear)", d: "Brief spinning triggered by head position — benign and treatable." },
      { f: "common", n: "Low blood pressure on standing", d: "Light-headed on rising — dehydration, medication, or ageing." },
      { f: "common", n: "Anxiety / hyperventilation", d: "Light-headed with fast breathing and tingling." },
      { f: "some", n: "Inner-ear infection", d: "Days of vertigo with nausea, sometimes after a cold." },
      { f: "some", n: "Anaemia / low sugar", d: "Faint, pale, shaky — the body short of oxygen or fuel." },
      { f: "rare", n: "Stroke / heart rhythm", d: "Dizziness with neurological signs or palpitations. Emergency." }
    ],
    types: [
      { n: "Vertigo", d: "The world spins — usually the inner ear or, rarely, the brainstem." },
      { n: "Pre-syncope", d: "About to faint — blood pressure or heart." },
      { n: "Disequilibrium", d: "Unsteady on the feet — nerves, balance, vision." },
      { n: "Light-headedness", d: "Vague woozy feeling — often anxiety or breathing." }
    ],
    region: { t: "Vitamin B12 deficiency, common in vegetarian-predominant Indian diets, is an under-recognised contributor to unsteadiness and neuropathy. Anaemia is also highly prevalent, especially in women.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  palpitations: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','dizzy','breathless','anxiety'], procedures: ['pacemaker','ctcontrast','ecg'], medicines: ['thyroid','anticoag','bp'] },
    system: "Cardiac", name: "Palpitations", rail: "watch",
    mini: "Feeling your own heartbeat is usually harmless — but a few patterns need a tracing to be sure.",
    story: "Palpitations — an awareness of your heartbeat as fast, hard, or skipping — are alarming but usually benign. Extra beats, caffeine, stress and exercise account for most. The task is identifying the minority caused by an abnormal rhythm, which an ECG at the time settles quickly. What surrounds the palpitation — fainting, chest pain, breathlessness — matters more than the palpitation itself.",
    urgency: { level: "watch", badge: "Usually benign", text: "<b>Seek urgent care</b> if palpitations come with chest pain, fainting or severe breathlessness, or if a fast, regular racing heart won't settle after several minutes." },
    flags: ["Fainting or near-fainting with the palpitations", "Chest pain alongside them", "Severe breathlessness", "A sustained fast rate that won't slow down", "A family history of sudden cardiac death", "Palpitations starting during exercise, not after"],
    causes: [
      { f: "common", n: "Ectopic beats", d: "Extra beats felt as a skip or thud — usually harmless." },
      { f: "common", n: "Stimulants / stress", d: "Caffeine, nicotine, anxiety, or exertion driving the rate up." },
      { f: "common", n: "Fever / dehydration", d: "A fast heart as a normal response to being unwell." },
      { f: "some", n: "Overactive thyroid", d: "A persistently fast pulse with weight loss, tremor, heat intolerance." },
      { f: "some", n: "Atrial fibrillation", d: "An irregular, often fast rhythm — needs treatment to prevent stroke." },
      { f: "rare", n: "Dangerous arrhythmia", d: "A fast rhythm causing collapse — needs urgent assessment." }
    ],
    types: [
      { n: "Skipped beats", d: "A pause then a thump — ectopics, usually benign." },
      { n: "Fast & regular", d: "A sudden racing that starts and stops — an SVT pattern." },
      { n: "Fast & irregular", d: "Chaotic and irregular — suggests atrial fibrillation." },
      { n: "Pounding", d: "Normal-rate but forceful — often anxiety or after exercise." }
    ],
    region: { t: "Rheumatic heart disease, still common in India, is an important cause of atrial fibrillation in younger adults than in Western populations. Thyroid disease is also highly prevalent.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  fever: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['cough','rash','confusion','abdopain','bruising','diarrhoea'], procedures: ['bloodtransfusion','lp','ctcontrast','appendectomy'], medicines: ['antibiotic','painkiller','steroid','antitb'] },
    system: "General / infective", name: "Fever", rail: "watch",
    mini: "A sign the body is fighting something — usually an ordinary infection, occasionally something that needs speed.",
    story: "Fever is not an illness but a response — the body raising its thermostat to fight infection. In most cases it's a self-limiting viral illness. The judgement is about who is feverish (a baby, the elderly, the immunosuppressed are higher-stakes), how high and how long, and what other signs accompany it. A stiff neck or a non-blanching rash changes everything.",
    urgency: { level: "watch", badge: "Context-dependent", text: "<b>Seek urgent care</b> for fever with a stiff neck, a rash that doesn't fade under pressure, confusion, severe breathlessness, or fever in a baby under 3 months. Persistent high fever also needs review." },
    flags: ["A rash that doesn't fade when pressed (glass test)", "Stiff neck and dislike of bright light", "Confusion or unusual drowsiness", "Fever in a baby under 3 months", "Fever lasting beyond 5–7 days", "Fever with breathlessness or a very fast heartbeat"],
    causes: [
      { f: "common", n: "Viral infection", d: "Colds, flu, and other self-limiting viruses — the usual cause." },
      { f: "common", n: "Bacterial infection", d: "Throat, chest, urine or skin — often needing antibiotics." },
      { f: "some", n: "Mosquito-borne illness", d: "Dengue, malaria, chikungunya — key considerations in endemic regions." },
      { f: "some", n: "Typhoid", d: "Sustained fever with abdominal symptoms — enteric fever." },
      { f: "rare", n: "Meningitis / sepsis", d: "Overwhelming infection — the red flags above screen for this." },
      { f: "rare", n: "Non-infective causes", d: "Inflammatory conditions or, rarely, malignancy in prolonged fever." }
    ],
    types: [
      { n: "Acute", d: "Under a week — usually infection." },
      { n: "Prolonged", d: "Beyond a week or two — warrants systematic investigation." },
      { n: "Intermittent", d: "Spiking then settling — a pattern seen in malaria and abscess." },
      { n: "With rash", d: "The rash narrows the cause — and one type is an emergency." }
    ],
    region: { t: "In India, any acute fever should prompt thought about dengue, malaria, typhoid, and leptospirosis, especially seasonally and after monsoon. Dengue warning signs (bleeding, severe abdominal pain, a falling platelet count) demand urgent review.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  backpain: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['numbness','urinary','weightloss','jointpain'], procedures: ['ctcontrast','lp','mri','spinal','xray'], medicines: ['painkiller','calciumvitd'] },
    system: "Musculoskeletal", name: "Back pain", rail: "calm",
    mini: "Extremely common, almost always mechanical, and usually better within weeks — but a few red flags matter.",
    story: "Back pain is one of the most common reasons people see a doctor, and the reassuring truth is that the vast majority is 'mechanical' — muscle, ligament, disc — and settles with time and movement. Scans usually aren't needed early and often mislead. The clinical job is spotting the small number of backs whose pain signals something more: infection, fracture, or nerve compression.",
    urgency: { level: "calm", badge: "Usually benign", text: "<b>Seek urgent care</b> if back pain comes with loss of bladder or bowel control, numbness around the groin, progressive leg weakness, fever, or follows a significant fall — these can signal cord or nerve compression." },
    flags: ["Loss of bladder or bowel control", "Numbness around the groin or inner thighs", "Progressive weakness in the legs", "Fever, or night sweats and weight loss", "Pain after a significant fall or injury", "New severe back pain over 50, or with a cancer history"],
    causes: [
      { f: "common", n: "Mechanical strain", d: "Muscle or ligament — the everyday bad back, worse on movement." },
      { f: "common", n: "Disc-related", d: "A disc pressing a nerve — pain shooting down a leg (sciatica)." },
      { f: "common", n: "Postural / degenerative", d: "Wear-and-tear of the spine's joints with age." },
      { f: "some", n: "Osteoporotic fracture", d: "A crush fracture in thinner bone — often in older women." },
      { f: "rare", n: "Infection (e.g. TB spine)", d: "Fever, night pain, unwell — an important consideration in India." },
      { f: "rare", n: "Cauda equina / cancer", d: "Nerve-root compression or tumour — what the red flags target." }
    ],
    types: [
      { n: "Mechanical", d: "Varies with position and movement — the common kind." },
      { n: "Radicular", d: "Shoots down a leg along a nerve — sciatica." },
      { n: "Inflammatory", d: "Worse with rest and in the morning, better with movement." },
      { n: "Red-flag", d: "Constant, night-time, with systemic signs — needs investigation." }
    ],
    region: { t: "Spinal tuberculosis (Pott's disease) is a genuine and under-considered cause of chronic back pain in India, classically with night pain, fever, and weight loss. It should be actively excluded in the right presentation.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  nausea: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','headache','dizzy','diarrhoea','jaundice'], procedures: ['endoscopy','gallbladder','chemotherapy','appendectomy','ga'], medicines: ['acid','painkiller','antibiotic'] },
    system: "Gastrointestinal", name: "Nausea & vomiting", rail: "watch",
    mini: "A protective reflex with dozens of triggers — the concern is dehydration and the rare serious cause.",
    story: "Nausea and vomiting are protective reflexes — the body's way of ejecting something harmful or responding to an upset elsewhere. Most causes are benign and brief: infection, food, motion, pregnancy. The practical risks are dehydration (especially in the very young and old) and missing the vomiting that signals something serious underneath, like obstruction or raised pressure in the brain.",
    urgency: { level: "watch", badge: "Usually benign", text: "<b>Seek urgent care</b> for vomiting blood or black material, a severe headache or stiff neck with the vomiting, a rigid painful belly, signs of dehydration, or vomiting that won't stop for over a day." },
    flags: ["Vomiting blood, or dark 'coffee-ground' material", "Severe headache or stiff neck with it", "A rigid, severely painful abdomen", "Signs of dehydration — no urine, sunken eyes, drowsiness", "Green (bile-stained) vomit with belly swelling", "Projectile vomiting, or vomiting after a head injury"],
    causes: [
      { f: "common", n: "Gastroenteritis", d: "A stomach bug with diarrhoea — the usual cause." },
      { f: "common", n: "Food or motion", d: "Something eaten, or travel sickness." },
      { f: "common", n: "Pregnancy", d: "Especially early morning in the first trimester." },
      { f: "some", n: "Migraine / vertigo", d: "Vomiting driven by the head or the inner ear." },
      { f: "some", n: "Medication / infection elsewhere", d: "Drugs, or a UTI or chest infection making one feel sick." },
      { f: "rare", n: "Obstruction / raised pressure", d: "A blocked gut or pressure in the brain — the red flags target these." }
    ],
    types: [
      { n: "Acute", d: "Over hours — infection or something ingested." },
      { n: "Cyclical", d: "Recurrent bouts with well periods between." },
      { n: "Bilious", d: "Green, bile-stained — suggests obstruction below the stomach." },
      { n: "Projectile", d: "Forceful and sudden — can signal raised pressure or blockage." }
    ],
    region: { t: "In endemic regions, vomiting can be an early feature of typhoid, hepatitis, and mosquito-borne fevers. Rehydration (ORS) is the mainstay and is widely available — dehydration remains a major preventable cause of harm.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  fatigue: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','weightloss','swelling','bloodstool','bruising','confusion'], procedures: ['bloodtransfusion','dialysis','chemotherapy'], medicines: ['thyroid','diabetesoral','insulin','antidepressant','calciumvitd','heartfailure'] },
    system: "General", name: "Fatigue", rail: "calm",
    mini: "Nearly everyone feels tired sometimes — the question is when tiredness is a symptom rather than a state.",
    story: "Fatigue is one of the most common and least specific of all symptoms — the final common pathway for stress, poor sleep, low mood, and a long list of physical illnesses. Most of the time it reflects life: too little sleep, too much load. But persistent, unexplained fatigue that isn't relieved by rest deserves a basic look for treatable causes, because several common ones are easily missed.",
    urgency: { level: "calm", badge: "Rarely urgent", text: "<b>See a doctor</b> if fatigue is persistent and unexplained, comes with weight loss, breathlessness, or drenching night sweats, or is severe enough to interfere with daily life. It's rarely an emergency but often worth investigating." },
    flags: ["Unexplained weight loss with it", "Drenching night sweats or persistent fever", "Breathlessness or noticeable paleness", "New lumps, or bleeding that's unexplained", "Fatigue with low mood, or thoughts of self-harm", "A rapid, dramatic change from your normal energy"],
    causes: [
      { f: "common", n: "Sleep & lifestyle", d: "Too little or poor-quality sleep, overwork, stress." },
      { f: "common", n: "Low mood / anxiety", d: "Depression and anxiety are among the commonest causes of exhaustion." },
      { f: "common", n: "Anaemia", d: "Low red cells — pale, breathless on effort, especially in women." },
      { f: "some", n: "Thyroid problems", d: "An underactive thyroid — tired, cold, gaining weight." },
      { f: "some", n: "Diabetes / infection", d: "High sugar, or a lingering infection sapping energy." },
      { f: "rare", n: "Serious illness", d: "Persistent fatigue with red-flag features can signal cancer or organ disease." }
    ],
    types: [
      { n: "Acute", d: "New and short-lived — often infection or a rough patch." },
      { n: "Chronic", d: "Beyond several weeks — warrants a basic work-up." },
      { n: "Physical vs mental", d: "Bodily heaviness vs a foggy, unmotivated tiredness." },
      { n: "Post-viral", d: "Lingering exhaustion after an infection — usually improves." }
    ],
    region: { t: "Iron-deficiency anaemia and vitamin D and B12 deficiency are extremely common in India and are frequent, treatable causes of fatigue. Hypothyroidism is also highly prevalent, particularly in women.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  rash: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','jointpain','itching'], procedures: [], medicines: ['antibiotic','painkiller','steroid','antifungal','antihistamine'] },
    system: "Dermatological", name: "Skin rash", rail: "watch",
    mini: "Most rashes are harmless and self-limiting — one particular type is a true emergency.",
    story: "Rashes are enormously varied and mostly benign — irritation, allergy, viral illness, eczema. The single most important skill for the public is recognising the one rash that can't wait: a non-blanching rash (spots that don't fade when pressed) with fever, which can signal meningococcal infection. Beyond that, the concern is rashes that spread fast with facial or mouth swelling, signalling a severe allergic reaction.",
    urgency: { level: "now", badge: "Usually benign, rarely emergency", text: "<b>Seek emergency care</b> for a rash that doesn't fade under a glass, especially with fever; for a rash with swelling of the face, lips or tongue and difficulty breathing; or for widespread blistering and peeling skin." },
    flags: ["Spots that don't fade when pressed with a glass", "Facial, lip or tongue swelling with breathing trouble", "Widespread blistering, peeling, or raw skin", "Rash with high fever and feeling very unwell", "Rapidly spreading redness, hot and painful (possible cellulitis)", "Involvement of the eyes, mouth, or genitals"],
    causes: [
      { f: "common", n: "Eczema / dermatitis", d: "Itchy, dry, inflamed skin — often in known flexures." },
      { f: "common", n: "Contact / allergic", d: "A reaction to something touched, eaten, or a new product." },
      { f: "common", n: "Viral exanthem", d: "A widespread rash accompanying a viral illness." },
      { f: "some", n: "Fungal / bacterial", d: "Ringworm, impetigo, or spreading cellulitis." },
      { f: "some", n: "Urticaria (hives)", d: "Raised itchy welts that move around — usually allergic." },
      { f: "rare", n: "Meningococcal / severe drug reaction", d: "Non-blanching rash, or peeling skin — emergencies." }
    ],
    types: [
      { n: "Blanching", d: "Fades under pressure — the reassuring majority." },
      { n: "Non-blanching", d: "Doesn't fade — with fever, an emergency." },
      { n: "Weals (hives)", d: "Raised, itchy, transient — allergic." },
      { n: "Blistering", d: "Fluid-filled — infection, burns, or a serious drug reaction." }
    ],
    region: { t: "In India, consider heat rash, fungal infections (favoured by humidity), and the rashes of dengue, chikungunya, and measles. Scabies is also common and intensely itchy, typically worse at night.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  numbness: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['backpain','visionloss','dizzy'], procedures: ['ctcontrast','lp','mri'], medicines: ['diabetesoral','insulin','epilepsy'] },
    system: "Neurological", name: "Numbness & tingling", rail: "watch",
    mini: "Often a trapped or irritated nerve — but a sudden one-sided onset can signal a stroke.",
    story: "Numbness and tingling ('pins and needles') come from nerves under pressure, irritated, or short of blood supply. Most is benign and positional — a limb 'gone to sleep', or a trapped nerve like carpal tunnel. The urgent concern is sudden numbness affecting one side of the body, or the face, which can be a stroke, and numbness with back-related red flags signalling cord compression.",
    urgency: { level: "now", badge: "Usually benign, sometimes urgent", text: "<b>Call emergency services</b> for sudden numbness on one side of the body or face, especially with weakness, slurred speech, or vision loss — treat it as a stroke until proven otherwise." },
    flags: ["Sudden numbness or weakness on one side", "Face droop, slurred speech, or vision loss", "Numbness around the groin with bladder or bowel changes", "Rapidly progressing weakness in the legs", "Numbness after a neck or back injury", "Numbness with a severe headache"],
    causes: [
      { f: "common", n: "Compression / posture", d: "A limb 'asleep', or sitting awkwardly — resolves quickly." },
      { f: "common", n: "Carpal tunnel", d: "Nerve squeezed at the wrist — tingling in the hand, worse at night." },
      { f: "common", n: "Trapped nerve (neck/back)", d: "A disc or bony spur pressing a nerve root." },
      { f: "some", n: "Peripheral neuropathy", d: "Nerve damage from diabetes, alcohol, or vitamin deficiency." },
      { f: "some", n: "Migraine aura", d: "Spreading tingling before or with a migraine." },
      { f: "rare", n: "Stroke / MS / cord compression", d: "Sudden or progressive — the red flags target these." }
    ],
    types: [
      { n: "Positional", d: "Comes and goes with posture — benign compression." },
      { n: "Glove-and-stocking", d: "Symmetrical in hands and feet — peripheral neuropathy." },
      { n: "Dermatomal", d: "In a nerve-root strip — a trapped spinal nerve." },
      { n: "Sudden one-sided", d: "Affecting one half of the body — treat as a stroke." }
    ],
    region: { t: "Diabetic neuropathy is a leading cause of numbness in India, given the very high diabetes prevalence. B12 deficiency (common in vegetarian diets) and leprosy — still present in parts of India — are important, treatable causes not to overlook.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  cough: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','fever','weightloss'], procedures: ['ctcontrast','ventilation','xray'], medicines: ['reliever','preventer','antibiotic','bp','antitb'] },
    system: "Respiratory", name: "Persistent cough", rail: "watch",
    mini: "Most coughs clear in a couple of weeks; one lasting beyond three demands a proper look.",
    story: "An acute cough is usually a viral infection clearing itself. The clinically important line is duration: a cough that persists beyond about three weeks ('chronic') is a different conversation, and in the Indian context, one that must always raise the question of tuberculosis. Coughing blood, at any duration, needs assessment.",
    urgency: { level: "watch", badge: "Duration-dependent", text: "<b>Seek care</b> for a cough that brings up blood, a cough lasting more than three weeks, or cough with breathlessness, chest pain, high fever, or weight loss." },
    flags: ["Coughing up blood, at any duration", "A cough lasting more than three weeks", "Weight loss, night sweats, or persistent fever", "Breathlessness or chest pain with it", "A change in a long-standing smoker's cough", "Choking or cough that began after inhaling something"],
    causes: [
      { f: "common", n: "Viral / post-viral", d: "A cough that lingers a couple of weeks after a cold." },
      { f: "common", n: "Asthma / allergy", d: "Dry, worse at night or with triggers, sometimes wheezy." },
      { f: "common", n: "Reflux / post-nasal drip", d: "Acid or mucus irritating the throat — a common hidden cause." },
      { f: "some", n: "Chest infection", d: "Pneumonia or bronchitis with fever and phlegm." },
      { f: "some", n: "Tuberculosis", d: "A chronic cough with weight loss and night sweats. Key in India." },
      { f: "rare", n: "Lung cancer", d: "Especially a changing cough in a smoker — needs prompt work-up." }
    ],
    types: [
      { n: "Acute", d: "Under three weeks — usually infective." },
      { n: "Chronic", d: "Beyond three weeks — needs investigation; think TB in India." },
      { n: "Productive", d: "Brings up phlegm — infection or chronic lung disease." },
      { n: "Dry", d: "No phlegm — asthma, reflux, post-viral, some medications." }
    ],
    region: { t: "India has among the world's highest tuberculosis burdens. Any cough beyond two to three weeks, particularly with weight loss or night sweats, should be evaluated for TB with sputum testing and a chest X-ray. High air pollution also drives chronic cough.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  jointpain: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['rash','fever','backpain'], procedures: ['kneereplace','hipreplace','mri','xray'], medicines: ['painkiller','steroid','calciumvitd','statin'] },
    system: "Musculoskeletal", name: "Joint pain", rail: "calm",
    mini: "One hot swollen joint behaves very differently from many aching joints — the pattern is the diagnosis.",
    story: "Joint pain's cause is written in its pattern: how many joints, which ones, and whether they're hot and swollen. A single acutely hot, swollen joint is a 'don't miss' — it could be infection (a septic joint) and needs same-day assessment. Many small joints, stiff in the morning, suggests inflammatory arthritis. Wear-and-tear osteoarthritis, the commonest, is worse with use and age.",
    urgency: { level: "watch", badge: "Usually chronic, one emergency", text: "<b>Seek urgent care</b> for a single joint that is hot, swollen, and very painful, especially with fever — a septic joint is an emergency. Otherwise most joint pain is assessed non-urgently." },
    flags: ["A single hot, swollen, intensely painful joint", "Fever with the joint pain", "Inability to bear weight or use the joint at all", "Joint pain after a significant injury with deformity", "Rapidly spreading redness around the joint", "Joint symptoms with a widespread rash or feeling very unwell"],
    causes: [
      { f: "common", n: "Osteoarthritis", d: "Wear-and-tear — worse with use, stiff after rest, older adults." },
      { f: "common", n: "Injury / overuse", d: "Sprains, strains, and repetitive-use aches." },
      { f: "common", n: "Viral arthralgia", d: "Aching joints accompanying a viral illness." },
      { f: "some", n: "Gout", d: "A sudden, exquisitely painful joint (often the big toe) — crystals." },
      { f: "some", n: "Rheumatoid arthritis", d: "Many small joints, symmetrical, morning stiffness — inflammatory." },
      { f: "rare", n: "Septic arthritis", d: "A joint infected — hot, swollen, feverish. Emergency." }
    ],
    types: [
      { n: "Monoarticular", d: "One joint — think injury, gout, or infection." },
      { n: "Polyarticular", d: "Many joints — inflammatory or viral." },
      { n: "Inflammatory", d: "Worse with rest, morning stiffness over an hour." },
      { n: "Mechanical", d: "Worse with use, eased by rest — osteoarthritis." }
    ],
    region: { t: "Chikungunya, common in Indian outbreaks, causes a striking and sometimes prolonged arthritis. Both gout and rheumatoid arthritis are common. High-purine diets and alcohol contribute to rising gout prevalence.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  weightloss: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','cough','fever','backpain','bloodstool','swallowing'], procedures: ['endoscopy','colonoscopy','ctcontrast','chemotherapy','biopsy'], medicines: ['thyroid','diabetesoral','antitb'] },
    system: "General", name: "Unexplained weight loss", rail: "watch",
    mini: "Losing weight without trying — beyond a modest amount — is a symptom that always warrants explanation.",
    story: "Losing weight without dieting or increased activity is one of medicine's genuine red-flag symptoms. A loss of more than about 5% of body weight over six to twelve months, unintentionally, deserves investigation. The causes span the treatable (thyroid, diabetes, depression) to the serious (infection like TB, and cancer), and the point is not to alarm but to catch the treatable and the serious early.",
    urgency: { level: "watch", badge: "Warrants investigation", text: "<b>See a doctor promptly</b> for unintentional weight loss of more than about 5% of your body weight, especially with fever, night sweats, a persistent cough, a change in bowel habit, or bleeding." },
    flags: ["Losing weight without trying to", "Drenching night sweats or persistent fever", "A persistent cough or coughing blood", "A change in bowel habit, or blood in the stool", "Difficulty or pain on swallowing", "A new lump anywhere, or unusual bleeding"],
    causes: [
      { f: "common", n: "Stress / depression", d: "Low mood and anxiety commonly suppress appetite and weight." },
      { f: "common", n: "Overactive thyroid", d: "Weight loss with a fast pulse, tremor, heat intolerance." },
      { f: "common", n: "Uncontrolled diabetes", d: "Weight loss with thirst and frequent urination." },
      { f: "some", n: "Chronic infection (TB)", d: "Weight loss with fever, night sweats, cough — key in India." },
      { f: "some", n: "Malabsorption", d: "The gut failing to absorb nutrients — coeliac, chronic gut disease." },
      { f: "rare", n: "Cancer", d: "An important cause of unexplained weight loss to exclude." }
    ],
    types: [
      { n: "With appetite loss", d: "Points toward cancer, depression, chronic disease." },
      { n: "With normal/raised appetite", d: "Points toward thyroid, diabetes, malabsorption." },
      { n: "Rapid", d: "Over weeks — more concerning, needs prompt work-up." },
      { n: "Gradual", d: "Over months — still warrants explanation if unintentional." }
    ],
    region: { t: "In India, tuberculosis is a leading cause of unexplained weight loss and must be actively considered alongside diabetes and thyroid disease. HIV should also be considered in the right context.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  bloodstool: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','fatigue','weightloss','bruising'], procedures: ['colonoscopy','endoscopy','bloodtransfusion'], medicines: ['anticoag','antiplatelet','painkiller','laxative'] },
    system: "Gastrointestinal", name: "Blood in stool", rail: "watch",
    mini: "Often piles — but because it can signal cancer, it should never simply be assumed benign.",
    story: "Bleeding from the back passage is common and most often from something benign like haemorrhoids or a small tear. But it is also the cardinal symptom of bowel cancer, and the two can feel identical to the person experiencing them. The safe rule is simple: new rectal bleeding, a change in bowel habit, or blood mixed through the stool warrants assessment rather than assumption.",
    urgency: { level: "now", badge: "Sometimes urgent", text: "<b>Seek emergency care</b> for large amounts of blood, black tarry stools with dizziness or a racing heart (signs of significant bleeding), or bleeding with severe abdominal pain. Otherwise, arrange prompt assessment." },
    flags: ["Large volumes of fresh blood", "Black, tarry, foul stools (upper-gut bleeding)", "Dizziness, breathlessness or a racing heart with it", "A persistent change in bowel habit", "Weight loss or a constant urge to pass stool", "New bleeding over the age of 50"],
    causes: [
      { f: "common", n: "Haemorrhoids (piles)", d: "Bright blood on wiping or on the surface of stool — common, benign." },
      { f: "common", n: "Anal fissure", d: "A small tear — sharp pain on passing stool, with bright blood." },
      { f: "common", n: "Gastroenteritis", d: "Infective diarrhoea, sometimes blood-streaked." },
      { f: "some", n: "Inflammatory bowel disease", d: "Bloody diarrhoea with pain — colitis or Crohn's." },
      { f: "some", n: "Diverticular disease / polyps", d: "Pouches or growths in the bowel wall that can bleed." },
      { f: "rare", n: "Bowel cancer", d: "The reason new bleeding is never simply assumed to be piles." }
    ],
    types: [
      { n: "Bright red on surface", d: "Usually low down — piles or a fissure." },
      { n: "Mixed through stool", d: "Higher up — warrants investigation." },
      { n: "Black & tarry (melaena)", d: "Digested blood from the upper gut — can be serious." },
      { n: "With mucus & urgency", d: "Suggests inflammation of the bowel lining." }
    ],
    region: { t: "Amoebic and bacillary dysentery are common infective causes of bloody stool in India. This can obscure more serious causes, so persistent or unexplained bleeding should still be investigated rather than attributed to infection alone.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  swelling: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['breathless','chest','fatigue'], procedures: ['dialysis','ctcontrast','ultrasound'], medicines: ['heartfailure','bp','anticoag','diuretic'] },
    system: "Cardiac / vascular", name: "Leg swelling", rail: "watch",
    mini: "Swelling in both legs and in one leg mean very different things — the asymmetry is the key clue.",
    story: "Swollen legs come from fluid pooling in the tissues, and the single most useful distinction is one leg versus both. Both legs swelling together points to a body-wide cause — heart, kidney, liver, or simply gravity and inactivity. One leg swelling, especially if painful and warm, raises the specific and urgent concern of a deep-vein clot, which can travel to the lungs.",
    urgency: { level: "now", badge: "One leg can be urgent", text: "<b>Seek urgent care</b> for one leg that is newly swollen, painful, warm or red — this can be a deep-vein clot. Sudden swelling of both legs with breathlessness also needs prompt review." },
    flags: ["One leg swollen, painful, warm, or red", "Chest pain or breathlessness with the swelling", "Sudden swelling of both legs with breathlessness", "Swelling with skin breakdown or ulceration", "Fever with a hot, swollen, red leg", "Swelling after long travel or a period of immobility"],
    causes: [
      { f: "common", n: "Dependent / inactivity", d: "Fluid pooling from standing, sitting, heat, or long travel." },
      { f: "common", n: "Venous insufficiency", d: "Leaky leg veins — chronic swelling, worse by evening." },
      { f: "common", n: "Medication", d: "Some blood-pressure and other drugs cause ankle swelling." },
      { f: "some", n: "Heart / kidney / liver", d: "Body-wide fluid retention — usually both legs." },
      { f: "some", n: "Cellulitis", d: "A skin infection — one hot, red, tender, swollen leg with fever." },
      { f: "rare", n: "Deep-vein thrombosis", d: "A clot in a deep leg vein — one painful swollen leg. Urgent." }
    ],
    types: [
      { n: "Bilateral", d: "Both legs — a body-wide (systemic) cause." },
      { n: "Unilateral", d: "One leg — think clot or local infection." },
      { n: "Pitting", d: "A finger-press leaves a dent — fluid." },
      { n: "Non-pitting", d: "Firm, no dent — lymphatic or thyroid-related." }
    ],
    region: { t: "In parts of India, lymphatic filariasis remains a cause of chronic leg swelling (lymphoedema). Where it is endemic, this is an important additional consideration alongside the usual cardiac, venous, and renal causes.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  urinary: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','abdopain','backpain'], procedures: ['dialysis','ctcontrast','catheter'], medicines: ['diabetesoral','insulin','antibiotic','diuretic'] },
    system: "Genitourinary", name: "Urinary problems", rail: "watch",
    mini: "Burning, frequency, or blood in the urine — usually infection, but blood always needs explaining.",
    story: "Urinary symptoms — burning, going often, urgency, getting up at night — are extremely common and usually signal a urinary infection, easily treated. Two things raise the stakes: visible blood in the urine, which always warrants investigation, and infection climbing to the kidneys, signalled by fever, loin pain, and feeling systemically unwell.",
    urgency: { level: "watch", badge: "Usually treatable", text: "<b>Seek urgent care</b> for urinary symptoms with a high fever and back/loin pain (a kidney infection), inability to pass urine at all, or visible blood in the urine — the last always needs assessment even if painless." },
    flags: ["Fever with loin or back pain, feeling very unwell", "Being unable to pass urine at all", "Visible blood in the urine, even if painless", "Confusion in an older person (infection can present this way)", "Symptoms in pregnancy", "Severe one-sided loin pain in waves (a stone)"],
    causes: [
      { f: "common", n: "Bladder infection (cystitis)", d: "Burning, frequency, urgency — the common UTI." },
      { f: "common", n: "Irritation / dehydration", d: "Concentrated urine or irritants causing similar symptoms." },
      { f: "some", n: "Prostate enlargement", d: "In older men — poor stream, dribbling, night-time waking." },
      { f: "some", n: "Kidney infection", d: "Infection climbing up — fever, loin pain, unwell." },
      { f: "some", n: "Kidney stones", d: "Severe waves of loin-to-groin pain, sometimes blood." },
      { f: "rare", n: "Bladder/kidney cancer", d: "Why painless visible blood in urine is always investigated." }
    ],
    types: [
      { n: "Irritative", d: "Burning, frequency, urgency — infection or irritation." },
      { n: "Obstructive", d: "Poor stream, hesitancy, dribbling — often the prostate." },
      { n: "With blood", d: "Visible or microscopic — always needs explanation." },
      { n: "With fever", d: "Suggests the kidney is involved — more serious." }
    ],
    region: { t: "Kidney stones are highly prevalent across India's 'stone belt', driven by heat and dehydration. Urinary tuberculosis, though less common, is an important cause of persistent urinary symptoms with sterile pyuria.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  visionloss: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['headache','numbness','dizzy'], procedures: ['cataract','ctcontrast','lp'], medicines: ['diabetesoral','insulin','bp'] },
    system: "Ophthalmic / neurological", name: "Sudden vision change", rail: "now",
    mini: "Sudden loss or disturbance of vision is an emergency until proven otherwise — the eye and the brain don't wait.",
    story: "The eye tolerates delay poorly. Sudden loss of vision, whether painless or painful, in one eye or across a field, is one of the clearest 'act now' symptoms in medicine — because several causes (retinal artery blockage, retinal detachment, acute glaucoma, stroke) have short windows in which treatment preserves sight. Gradual visual change is usually benign; sudden change is not.",
    urgency: { level: "now", badge: "Emergency", text: "<b>Seek emergency care immediately</b> for any sudden loss or major change in vision, a curtain or shadow across your sight, sudden flashes and floaters, or a painful red eye with visual loss. Time directly affects whether sight is saved." },
    flags: ["Sudden loss of vision in one or both eyes", "A curtain or shadow descending across vision", "A shower of new floaters or flashing lights", "A painful, red eye with blurred vision and halos", "Vision loss with weakness, slurred speech, or facial droop", "Double vision that comes on suddenly"],
    causes: [
      { f: "some", n: "Retinal detachment", d: "Flashes, floaters, then a curtain across vision — urgent." },
      { f: "some", n: "Retinal vessel blockage", d: "Sudden painless loss — a 'stroke' of the eye. Time-critical." },
      { f: "some", n: "Acute glaucoma", d: "A painful red eye, halos, nausea — pressure in the eye. Urgent." },
      { f: "some", n: "Optic neuritis", d: "Painful loss over hours to days, often in younger adults." },
      { f: "rare", n: "Stroke / TIA", d: "Vision loss from the brain, often with other neurological signs." },
      { f: "common", n: "Migraine aura", d: "Temporary zig-zags or blind spots that fully resolve — benign." }
    ],
    types: [
      { n: "Painless & sudden", d: "Vascular — retinal artery/vein, or stroke. Emergency." },
      { n: "Painful & sudden", d: "Acute glaucoma or optic neuritis." },
      { n: "Curtain / field loss", d: "Detachment or a brain cause." },
      { n: "Transient", d: "Fully recovering — migraine aura, or a warning TIA." }
    ],
    region: { t: "India carries a very high burden of diabetic retinopathy and cataract, and glaucoma is often diagnosed late. Diabetics with any sudden visual change need urgent ophthalmology review; routine screening prevents avoidable blindness.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  confusion: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','dizzy','fatigue','headache'], procedures: ['lp','ctcontrast','dialysis','catheter','ventilation'], medicines: ['insulin','epilepsy','antidepressant','sleepanxiety'] },
    system: "Neurological", name: "Confusion", rail: "now",
    mini: "New confusion is a symptom, not a personality change — and in older people it often signals physical illness.",
    story: "Acute confusion — new disorientation, muddled thinking, not being oneself — is always a signal that something is wrong, and it's frequently missed or dismissed, especially in the elderly, where it's often the only sign of a serious physical illness like infection or low sodium. Sudden confusion with neurological signs can be a stroke. New confusion should never be shrugged off as 'just age'.",
    urgency: { level: "now", badge: "Emergency", text: "<b>Seek emergency care</b> for new or rapidly worsening confusion, especially with fever, a severe headache, weakness or slurred speech, a very high or low blood sugar in a diabetic, or after a head injury." },
    flags: ["New confusion coming on over hours to days", "Fever or a stiff neck with it", "Weakness, slurred speech, or facial droop", "A known diabetic who is drowsy or behaving oddly", "Confusion after a fall or head injury", "Drowsiness that's deepening, or a seizure"],
    causes: [
      { f: "common", n: "Infection", d: "A UTI or chest infection — a very common trigger in the elderly." },
      { f: "common", n: "Dehydration / medications", d: "Fluid loss, or sedating or anticholinergic drugs." },
      { f: "some", n: "Blood-sugar extremes", d: "Very high or very low glucose in a diabetic." },
      { f: "some", n: "Low sodium / metabolic", d: "Salt and other chemical imbalances muddling the brain." },
      { f: "rare", n: "Stroke / bleed", d: "Confusion with neurological signs — an emergency." },
      { f: "rare", n: "Meningitis / encephalitis", d: "Brain infection — fever, headache, confusion. Emergency." }
    ],
    types: [
      { n: "Delirium (acute)", d: "New, fluctuating, over hours to days — a physical cause until proven otherwise." },
      { n: "Dementia (chronic)", d: "Gradual over months to years — but can suddenly worsen when unwell." },
      { n: "Hyperactive", d: "Agitated, restless, sometimes hallucinating." },
      { n: "Hypoactive", d: "Quiet, withdrawn, drowsy — easily missed but equally serious." }
    ],
    region: { t: "In India, acute confusion with fever should prompt consideration of cerebral malaria, Japanese encephalitis, and enteric fever alongside the usual infective and metabolic causes. Hyponatraemia and sepsis are common, treatable triggers in the elderly.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  jaundice: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','itching','fatigue','nausea'], procedures: ['ultrasound','bloodtransfusion'], medicines: ['painkiller','antibiotic'] },
    system: "Hepatic / general", name: "Yellow eyes & skin (jaundice)", rail: "watch",
    mini: "Yellowing means bilirubin is building up — the question is whether the liver, the blood, or a blocked duct is behind it.",
    story: "The whites of the eyes yellow before the skin does, which is why someone else often notices before you do. Jaundice is not a disease — it is a signal that bilirubin, the pigment left over when red cells are broken down, is accumulating faster than the liver can clear it. That happens for three broad reasons: too much is being made, the liver is inflamed or damaged, or the drainage pipe out of the liver is blocked. Which of the three it is changes everything about what happens next, and it is not something you can tell from the colour alone.",
    urgency: { level: "watch", badge: "Always needs assessment", text: "<b>See a doctor promptly</b> for any new yellowing of the eyes or skin. <b>Go to emergency care</b> if it comes with confusion, unusual drowsiness, vomiting blood, a high fever with shaking chills, or if you are pregnant — these point to liver failure, infection in the bile ducts, or a pregnancy-specific liver problem." },
    flags: ["Confusion, drowsiness or disturbed sleep-wake pattern", "High fever with shaking chills and pain under the right ribs", "Vomiting blood, or black tarry stools", "Jaundice in pregnancy", "Pale, putty-coloured stools with very dark urine", "Rapidly deepening yellow over a few days"],
    causes: [
      { f: "common", n: "Viral hepatitis", d: "Inflammation of the liver from a virus — in South Asia most often hepatitis A or E, spread by contaminated water or food." },
      { f: "common", n: "Gilbert's syndrome", d: "A harmless inherited variation. Mild yellowing appears when unwell, fasting or stressed, and needs no treatment." },
      { f: "some", n: "Gallstone blocking the duct", d: "A stone slips into the drainage pipe — classically painful, and often with fever if infection follows." },
      { f: "some", n: "Alcohol or medicine-related", d: "Sustained alcohol use, or a drug reaction. Some traditional and over-the-counter remedies can injure the liver." },
      { f: "rare", n: "Haemolysis", d: "Red cells breaking down too fast, so bilirubin is overproduced rather than under-cleared." },
      { f: "rare", n: "Cancer of the pancreas or bile duct", d: "Painless, steadily deepening jaundice with weight loss — the pattern that must not be dismissed." }
    ],
    types: [
      { n: "Painless and deepening", d: "Steadily worsening with pale stools — the pattern that most urgently needs imaging." },
      { n: "Painful, with fever", d: "Suggests a blocked and infected duct — usually an emergency." },
      { n: "With flu-like illness", d: "Aching, nausea and loss of appetite first, then yellowing — typical of viral hepatitis." },
      { n: "Mild and fluctuating", d: "Comes and goes with illness or fasting, and is otherwise well — often Gilbert's." }
    ],
    region: { t: "Hepatitis A and E are widespread in India and much of South Asia and spread through contaminated water — they account for a large share of sudden jaundice in otherwise healthy young adults. Hepatitis E is particularly dangerous in pregnancy. Enteric fever, malaria and some traditional remedies are other locally common causes worth mentioning to your doctor.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  diarrhoea: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['abdopain','fever','nausea'], procedures: ['colonoscopy'], medicines: ['antibiotic','acid'] },
    system: "Gastrointestinal", name: "Diarrhoea", rail: "mix",
    mini: "Usually a self-limiting infection — and the danger is almost always dehydration, not the bug itself.",
    story: "Most diarrhoea is the gut flushing out something it doesn't want, and it stops on its own within a few days. The thing that actually harms people is not the infection but the water and salt lost along the way — which is why oral rehydration matters far more than any tablet. The other job is recognising the minority that behave differently: blood, high fever, severe pain, or an illness that simply refuses to end.",
    urgency: { level: "watch", badge: "Usually settles — dehydration is the risk", text: "<b>Seek care urgently</b> for blood in the stool, a fever that persists beyond three days, severe or localised abdominal pain, or any sign of dehydration — passing little or no urine, sunken eyes, extreme thirst, dizziness on standing or drowsiness. <b>Infants and older adults dehydrate far faster</b> and need a lower threshold." },
    flags: ["Blood or mucus in the stool", "Passing little or no urine, sunken eyes, drowsiness", "Severe or one-sided abdominal pain", "Fever lasting more than three days", "In an infant, an older adult, or in pregnancy", "Started after a hospital stay or a course of antibiotics", "Lasting more than two weeks"],
    causes: [
      { f: "common", n: "Viral gastroenteritis", d: "A short, watery illness, often with vomiting. It runs its course and needs fluids, not antibiotics." },
      { f: "common", n: "Food poisoning", d: "Toxin or bacteria in contaminated food — sudden, often dramatic, usually brief." },
      { f: "some", n: "Bacterial infection", d: "Typhoid, shigella and similar — typically more fever, more pain, sometimes blood." },
      { f: "some", n: "Amoebiasis or giardiasis", d: "Parasites from contaminated water. These can cause prolonged or recurrent illness rather than a brief one." },
      { f: "some", n: "Medicines", d: "Antibiotics are the usual culprit; many other medicines can do it too." },
      { f: "rare", n: "Inflammatory bowel disease", d: "Ongoing diarrhoea with blood, weight loss and night-time symptoms — a different kind of problem." },
      { f: "rare", n: "Bowel cancer", d: "A lasting change in bowel habit, particularly over 45 — what the persistent red flags screen for." }
    ],
    types: [
      { n: "Acute watery", d: "Sudden, frequent, no blood. The dehydration risk is highest here." },
      { n: "Bloody (dysentery)", d: "Blood or mucus with cramping — always needs assessment." },
      { n: "Persistent", d: "Lasting beyond two weeks — points towards parasites, inflammation or something structural." },
      { n: "Alternating with constipation", d: "A long-standing pattern with bloating, often irritable bowel syndrome — but new-onset change still needs checking." }
    ],
    region: { t: "Oral rehydration solution is the single most effective response to acute diarrhoea and is widely available across India — plain salt-and-sugar solution works when packets aren't. Water-borne typhoid, cholera, amoebiasis and giardiasis remain locally common, and antibiotics are widely over-used for what is usually a viral illness that will settle by itself.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  sorethroat: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','earpain','swallowing'], procedures: ['tonsillectomy'], medicines: ['antibiotic','painkiller','antihistamine'] },
    system: "ENT / infective", name: "Sore throat", rail: "calm",
    mini: "Nearly always a virus that needs no antibiotic — but a few need one, and a very few cannot wait.",
    story: "The overwhelming majority of sore throats are viral: they hurt, they last a few days, and antibiotics do nothing for them. A minority are bacterial, and a small number of those matter a great deal — not because the throat itself is dangerous, but because of what untreated infection can go on to do elsewhere in the body. Separating the two is a clinical judgement, which is why a sore throat with high fever and no cough is worth showing someone rather than treating yourself.",
    urgency: { level: "watch", badge: "Usually viral", text: "<b>Go to emergency care</b> if you cannot swallow your own saliva, are drooling, have difficulty breathing, your voice sounds muffled, or there is severe one-sided swelling. <b>See a doctor</b> for a high fever without a cough, a sore throat lasting beyond a week, or a rash alongside it." },
    flags: ["Cannot swallow saliva, or drooling", "Difficulty breathing or noisy breathing", "Muffled, 'hot potato' voice", "Severe swelling on one side, or unable to open the mouth fully", "Stiff neck with fever", "A widespread rash", "Still there after a week"],
    causes: [
      { f: "common", n: "Viral pharyngitis", d: "The ordinary sore throat, usually with a cough and runny nose. Antibiotics do not help it." },
      { f: "common", n: "Post-nasal drip or allergy", d: "Irritation from mucus running down the back of the throat — worse in the mornings." },
      { f: "some", n: "Streptococcal infection", d: "High fever, no cough, swollen glands and white patches. This is the one antibiotics are for." },
      { f: "some", n: "Tonsillitis", d: "Swollen, inflamed tonsils — viral or bacterial, and recurrent in some people." },
      { f: "some", n: "Reflux", d: "Acid reaching the throat overnight, giving a persistent morning soreness with no infection at all." },
      { f: "rare", n: "Quinsy (abscess)", d: "A collection of pus beside the tonsil — severe one-sided pain, needing drainage." },
      { f: "rare", n: "Epiglottitis", d: "Swelling that threatens the airway. Rapid, severe, and a genuine emergency." }
    ],
    types: [
      { n: "With a cough and cold", d: "Almost certainly viral — the cough is the clue that it is not strep." },
      { n: "High fever, no cough", d: "The pattern most associated with streptococcal infection." },
      { n: "Severe and one-sided", d: "Suggests an abscess rather than simple tonsillitis." },
      { n: "Persistent and mild", d: "Weeks rather than days — think reflux, allergy, smoking or dryness." }
    ],
    region: { t: "Untreated streptococcal throat infection can lead to rheumatic fever and, from there, to rheumatic heart disease — which remains a substantial and largely preventable burden in India, particularly in children and young adults. This is the reason a persistent sore throat with high fever in a child should be examined rather than waited out, even though most sore throats need no antibiotic at all.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  breastlump: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: [], procedures: ['ultrasound','biopsy','mri','chemotherapy'], medicines: [] },
    system: "Breast", name: "Breast lump", rail: "watch",
    mini: "Most lumps are not cancer — but a new lump is the one symptom that should never simply be watched and waited out.",
    story: "Breast tissue is naturally lumpy, and it changes with the menstrual cycle, with pregnancy, with feeding and with age. Most lumps that are found turn out to be benign. But the difference between a benign lump and a cancerous one cannot be judged by feel alone, by you or by anyone else — it takes examination and usually imaging. The single most important thing about this symptom is not how likely it is to be serious; it is that delay is the part you control.",
    urgency: { level: "watch", badge: "Always needs examining", text: "<b>See a doctor about any new breast lump</b>, at any age, without waiting to see whether it goes away. Arrange this <b>promptly</b> if the lump is hard and fixed, the skin is dimpled or thickened, the nipple has turned inward or is discharging blood, there is a lump in the armpit, or the lump is in a man." },
    flags: ["A hard, fixed, painless lump", "Skin dimpling, puckering, or an orange-peel texture", "A nipple newly turned inward, or bloody discharge", "A lump or swelling in the armpit", "Persistent redness or a rash on the nipple", "A breast lump in a man", "Any lump that is new, and still there after one cycle"],
    causes: [
      { f: "common", n: "Fibroadenoma", d: "A smooth, firm, mobile lump — the commonest lump in younger women, and harmless." },
      { f: "common", n: "Cyclical (fibrocystic) change", d: "Generalised lumpiness and tenderness that varies with the cycle, often worse before a period." },
      { f: "common", n: "Cyst", d: "A fluid-filled sac — often appears quickly and can be tender. Easily confirmed on ultrasound." },
      { f: "some", n: "Infection or abscess", d: "A painful, hot, red area — most common during breastfeeding, and treatable." },
      { f: "some", n: "Fat necrosis", d: "A firm lump after injury or surgery, as bruised fatty tissue heals." },
      { f: "rare", n: "Breast cancer", d: "The reason every new lump is examined. Found early, outcomes are far better — which is the entire argument against waiting." }
    ],
    types: [
      { n: "Smooth and mobile", d: "Slides under the fingers. Most often a fibroadenoma or a cyst." },
      { n: "Tender and cyclical", d: "Changes with the month, usually both sides — typical hormonal change." },
      { n: "Hard and fixed", d: "Feels anchored to the tissue around it. This is the pattern that needs urgent assessment." },
      { n: "With a skin or nipple change", d: "Dimpling, thickening or nipple change matters as much as the lump itself." }
    ],
    region: { t: "Breast cancer is now the commonest cancer among Indian women, and tends to present at a younger age and at a later stage than in Western populations. Organised screening is limited in many areas, so clinical breast examination and acting quickly on a self-noticed change carry more weight. Stigma and delay — not biology — are the largest modifiable factors in outcome.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  swallowing: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','weightloss','sorethroat'], procedures: ['endoscopy','biopsy'], medicines: ['acid'] },
    system: "Gastrointestinal", name: "Difficulty swallowing", rail: "watch",
    mini: "Food sticking is not a symptom to wait out — it always earns a look inside.",
    story: "Swallowing is so automatic that trouble with it is unnerving, and people often adapt quietly — chewing longer, choosing softer food, drinking with every mouthful — for months before mentioning it. That adaptation is the problem: the pattern that matters most is a gradual narrowing, and it hides well behind small changes in habit. Unlike most symptoms, this one has a low threshold for investigation precisely because the treatable window is early.",
    urgency: { level: "watch", badge: "Always needs investigation", text: "<b>See a doctor without delay</b> if food is sticking, especially if it is getting worse over weeks, if solids became difficult before liquids, or if you are losing weight. <b>Go to emergency care</b> for sudden difficulty swallowing with weakness, drooping or slurred speech (this can be a stroke), if something is completely stuck, or if you cannot swallow your own saliva." },
    flags: ["Food sticking, and worsening over weeks", "Unintended weight loss alongside it", "Solids difficult first, then liquids too", "Vomiting blood, or black stools", "Sudden onset with facial droop, weakness or slurred speech", "Painful swallowing that stops you eating", "A hoarse voice that persists"],
    causes: [
      { f: "common", n: "Reflux and oesophagitis", d: "Acid inflaming the gullet makes swallowing sore and sometimes sticky. Usually improves with treatment." },
      { f: "common", n: "Globus sensation", d: "A persistent feeling of a lump in the throat, but food actually goes down normally. Often linked to anxiety or reflux." },
      { f: "some", n: "Stricture", d: "A narrowing left behind by years of acid injury — solids stick, liquids pass." },
      { f: "some", n: "Neurological causes", d: "Stroke, Parkinson's and similar conditions affect the coordination of swallowing, often with coughing on liquids." },
      { f: "rare", n: "Achalasia", d: "The muscular valve at the base of the gullet fails to relax; both solids and liquids stick from early on." },
      { f: "rare", n: "Oesophageal cancer", d: "Steadily progressive sticking with weight loss — the reason this symptom is investigated rather than watched." }
    ],
    types: [
      { n: "Solids, then liquids", d: "A narrowing that is getting tighter. The most concerning pattern." },
      { n: "Liquids from the start", d: "Coughing or choking on drinks points to a problem with coordination, not a blockage." },
      { n: "Painful swallowing", d: "Suggests inflammation, infection or ulceration rather than obstruction." },
      { n: "A lump in the throat", d: "Present between meals, but food passes normally — usually globus rather than obstruction." }
    ],
    region: { t: "Oesophageal cancer is more common in parts of India than in many Western countries, and tobacco chewing, smoking, areca nut and very hot beverages are recognised contributors. In areas where chewing tobacco is widespread, new swallowing difficulty deserves an especially low threshold for endoscopy.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  anxiety: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['chest','palpitations','breathless','sleep'], procedures: ['ecg'], medicines: ['antidepressant','sleepanxiety'] },
    system: "Mental health", name: "Anxiety & panic", rail: "calm",
    mini: "Panic produces real, physical symptoms — which is exactly why it is so often mistaken for a heart attack.",
    story: "A panic attack is not imagined and it is not a lack of willpower. It is a genuine surge of adrenaline that raises the heart rate, tightens the chest, speeds the breathing and floods the body with a sense of danger — the same machinery that would help you escape a threat, firing when there is none. The symptoms are physical because the cause is physical. What makes this entry unusual is a deliberate caution: the first time these symptoms appear, they should be assessed rather than assumed, because the things anxiety imitates are worth ruling out once.",
    urgency: { level: "calm", badge: "Real, common, and treatable", text: "<b>Do not assume a first episode of chest pain or breathlessness is anxiety.</b> Have it assessed — especially over 40, with heart risk factors, or if the symptoms come on with exertion rather than at rest. <b>Seek help urgently</b> if you have thoughts of harming yourself. Once serious causes have been excluded, anxiety and panic respond well to treatment." },
    flags: ["Thoughts of harming yourself — seek help immediately", "Chest pain of a kind you have never had before", "Symptoms brought on by exertion, not by rest or stress", "Fainting, rather than feeling faint", "A first panic attack after 40, or with heart risk factors", "Weight loss, tremor and heat intolerance alongside it", "Drinking more, or using medicines, to cope"],
    causes: [
      { f: "common", n: "Panic disorder", d: "Discrete attacks that peak within minutes — racing heart, chest tightness, tingling, a sense of unreality and dread." },
      { f: "common", n: "Generalised anxiety", d: "Persistent background worry with physical tension, poor sleep and difficulty concentrating." },
      { f: "common", n: "Stress, sleep loss, caffeine", d: "The ordinary amplifiers. Often the whole explanation, and often the easiest thing to change." },
      { f: "some", n: "Overactive thyroid", d: "Produces almost exactly the same symptoms — a simple blood test separates them." },
      { f: "some", n: "Medicines, alcohol or withdrawal", d: "Stimulants, some inhalers and steroids provoke it; alcohol and sedative withdrawal do too." },
      { f: "rare", n: "Arrhythmia", d: "A genuine rhythm disturbance can feel identical to panic. A tracing during an episode settles it." },
      { f: "rare", n: "Hormone-secreting tumour", d: "Very rare, but the reason repeated, stereotyped attacks with high blood pressure get investigated." }
    ],
    types: [
      { n: "Panic attack", d: "Sudden, intense, peaking in minutes, then easing. Frightening but not dangerous in itself." },
      { n: "Generalised anxiety", d: "Constant low-level worry rather than discrete attacks, with physical tension and fatigue." },
      { n: "Health anxiety", d: "Repeated fear of illness, often intensified by searching symptoms online." },
      { n: "Situational", d: "Tied to specific triggers — crowds, travel, exams, social settings." }
    ],
    region: { t: "Across India and South Asia, psychological distress is very often described in bodily terms — burning, weakness, 'gas', heaviness or heat in the head — rather than as worry or low mood. This is a legitimate way for distress to present, not a failure to describe it properly, and experienced clinicians expect it. Stigma remains the main barrier to people seeking help for a condition that treats well.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  sleep: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fatigue','anxiety','breathless'], procedures: [], medicines: ['sleepanxiety','antidepressant'] },
    system: "General / neurological", name: "Sleep problems", rail: "calm",
    mini: "Most poor sleep is habit and stress — but loud snoring with daytime sleepiness is an entirely different problem.",
    story: "Almost everyone sleeps badly sometimes, and short runs of broken sleep after stress or a change of routine are normal and self-correcting. Chronic insomnia is different: it becomes self-sustaining, because the bed turns into a place associated with frustration rather than sleep. Separately and importantly, there is a group of people whose problem is not the quantity of sleep but its quality — they are in bed for eight hours and wake unrefreshed, because their breathing is repeatedly interrupted. That one is worth finding.",
    urgency: { level: "calm", badge: "Usually behavioural and treatable", text: "<b>See a doctor</b> if someone has seen you stop breathing in your sleep, if you fall asleep during the day while driving or at work, if insomnia comes with persistent low mood or loss of interest, or if you now need alcohol or sedatives to get to sleep at all. Everyday poor sleep responds better to routine and behaviour change than to tablets." },
    flags: ["Someone has witnessed you stop breathing in your sleep", "Falling asleep while driving or in conversation", "Persistent low mood, or loss of interest in things", "Needing alcohol or sedatives to sleep at all", "Acting out dreams, or injuring yourself in sleep", "Morning headaches with loud snoring", "New, severe insomnia over just a few days"],
    causes: [
      { f: "common", n: "Stress and irregular hours", d: "Worry, shift work, late screens and an inconsistent wake time — the usual combination." },
      { f: "common", n: "Caffeine, alcohol, naps", d: "Alcohol makes falling asleep easier and staying asleep harder. Late caffeine lingers far longer than people expect." },
      { f: "common", n: "Conditioned insomnia", d: "The bed becomes linked with lying awake, and the anxiety about sleeping keeps sleep away." },
      { f: "some", n: "Obstructive sleep apnoea", d: "The airway collapses repeatedly overnight — loud snoring, witnessed pauses, unrefreshing sleep, daytime sleepiness." },
      { f: "some", n: "Depression or anxiety", d: "Early-morning waking is a classic pattern in depression; difficulty falling asleep is more typical of anxiety." },
      { f: "some", n: "Restless legs", d: "An urge to move the legs in the evening, relieved by movement. Often linked to low iron." },
      { f: "rare", n: "Narcolepsy", d: "Overwhelming daytime sleep attacks, sometimes with sudden loss of muscle tone on strong emotion." }
    ],
    types: [
      { n: "Trouble falling asleep", d: "Lying awake at the start of the night — most often anxiety, stimulants or an irregular body clock." },
      { n: "Waking in the early hours", d: "Falling asleep normally then waking at three or four — a pattern often seen with low mood." },
      { n: "Unrefreshing sleep", d: "Adequate hours, no rest gained. Raises the question of sleep apnoea." },
      { n: "Excessive daytime sleepiness", d: "Sleepy despite enough time in bed — always worth investigating rather than tolerating." }
    ],
    region: { t: "Obstructive sleep apnoea is under-recognised in South Asian populations, who tend to develop it at a lower body-mass index than Western reference figures would predict — so a normal weight does not rule it out. Iron deficiency, which is widespread in India, is also a common and correctable contributor to restless legs.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  itching: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['rash','jaundice'], procedures: [], medicines: ['antihistamine','steroid','antifungal'] },
    system: "Dermatological / general", name: "Persistent itching", rail: "calm",
    mini: "Usually dry skin or an allergy — but itching all over with no rash points away from the skin entirely.",
    story: "Itch is its own sensation with its own nerve pathways, and scratching relieves it briefly while making it worse over time — the itch-scratch cycle keeps many skin problems going long after the original cause has gone. The most useful question is whether there is a rash. Itching with a rash is usually a skin problem. Itching everywhere without a rash is the version that occasionally signals something internal, and it is the one worth taking to a doctor rather than to a pharmacy.",
    urgency: { level: "calm", badge: "Usually skin — occasionally not", text: "<b>See a doctor</b> for itching all over the body with no visible rash, itching with yellow eyes, weight loss or night sweats, itching in pregnancy (particularly of the palms and soles), or itching that started soon after a new medicine. <b>Seek urgent care</b> for a spreading blistering rash, facial or lip swelling, or difficulty breathing." },
    flags: ["Itching all over, with no rash to see", "Yellowing of the eyes or skin alongside it", "Weight loss, night sweats or swollen glands", "Itching in pregnancy, especially palms and soles", "Started within weeks of a new medicine", "A spreading, blistering or peeling rash", "Swelling of the lips or face, or breathing difficulty"],
    causes: [
      { f: "common", n: "Dry skin and eczema", d: "The commonest cause by a wide margin — worse in winter, with hot water, and with harsh soaps." },
      { f: "common", n: "Scabies", d: "Intense itch, dramatically worse at night, typically between the fingers and at the wrists — and it spreads within a household." },
      { f: "common", n: "Fungal infection", d: "Ring-shaped, spreading, itchy patches in warm moist areas. Very common in humid climates." },
      { f: "some", n: "Urticaria (hives)", d: "Raised weals that come and go within hours, often with no cause ever identified." },
      { f: "some", n: "Liver or kidney disease", d: "Generalised itch with no rash — the pattern that points beyond the skin." },
      { f: "some", n: "Iron deficiency or thyroid disease", d: "Both can cause persistent generalised itching and are easily tested for." },
      { f: "rare", n: "Lymphoma", d: "Persistent whole-body itch with night sweats and weight loss — uncommon, but what those red flags target." }
    ],
    types: [
      { n: "With a visible rash", d: "Follow the rash — it usually names the cause." },
      { n: "Without any rash", d: "Generalised, often worse at night. This is the group that gets blood tests." },
      { n: "Worse at night", d: "Characteristic of scabies, and also of simple dryness." },
      { n: "Localised to one area", d: "Points to contact with something, a fungal patch, or a trapped nerve." }
    ],
    region: { t: "Scabies and fungal skin infections are very common across India and are highly treatable once correctly identified. A specific and widespread problem is the easy availability of combination creams containing strong steroids: applied to a fungal rash they relieve the itch for a few days while allowing the infection to spread further and become far harder to treat. Persistent or spreading itchy patches deserve a proper diagnosis rather than a repeat purchase.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  earpain: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['sorethroat','fever','dizzy'], procedures: ['tonsillectomy','rootcanal'], medicines: ['antibiotic','painkiller'] },
    system: "ENT", name: "Ear pain & discharge", rail: "watch",
    mini: "Common and usually simple — but an ear that discharges for weeks is not something to live with.",
    story: "Ear pain in children is usually a middle-ear infection behind the eardrum; in adults it is more often the outer canal, or pain referred from the teeth, jaw or throat rather than from the ear at all. Most settles. The situation that quietly does damage is the ear that runs — discharge continuing over weeks or recurring for years, which erodes hearing slowly enough that it is accepted rather than treated. Hearing lost that way is often preventable.",
    urgency: { level: "watch", badge: "Usually treatable", text: "<b>Seek urgent care</b> for swelling, redness or tenderness of the bone behind the ear, weakness of one side of the face, severe headache with neck stiffness, or sudden loss of hearing. <b>See a doctor</b> for discharge lasting more than a few days, any discharge that recurs, or ear pain with a high fever in a young child." },
    flags: ["Swelling, redness or tenderness behind the ear", "Weakness or drooping of one side of the face", "Severe headache, neck stiffness or confusion", "Sudden hearing loss in one ear", "Severe dizziness with vomiting", "Discharge continuing for weeks, or recurring over years", "Pain with high fever in an infant"],
    causes: [
      { f: "common", n: "Outer ear infection", d: "The canal itself is inflamed — pain on pulling the ear or pressing in front of it, often after water exposure." },
      { f: "common", n: "Middle ear infection", d: "Behind the eardrum, usually following a cold. The commonest cause of ear pain in children." },
      { f: "common", n: "Referred pain", d: "The ear is normal; the pain comes from teeth, the jaw joint or the throat and is simply felt in the ear." },
      { f: "some", n: "Glue ear", d: "Fluid persisting behind the drum after infection — little pain, but muffled hearing, and it matters in children." },
      { f: "some", n: "Wax or a foreign body", d: "Blockage causing pressure, muffled hearing and sometimes pain." },
      { f: "rare", n: "Mastoiditis", d: "Infection spreading into the bone behind the ear — swelling, fever, and an emergency." },
      { f: "rare", n: "Cholesteatoma", d: "An abnormal skin growth in the middle ear, causing chronic smelly discharge and progressive damage." }
    ],
    types: [
      { n: "Pain on pulling the ear", d: "Points to the outer canal rather than behind the drum." },
      { n: "Deep pain with fever", d: "Typical middle-ear infection, especially in a child after a cold." },
      { n: "With discharge", d: "A perforated drum or an outer-ear infection. Persistent discharge always needs assessment." },
      { n: "With hearing loss", d: "Wax, fluid, or something more structural — worth examining rather than assuming." }
    ],
    region: { t: "Chronic suppurative otitis media — a long-running discharging ear — remains a leading preventable cause of hearing loss in India, particularly in children, and is strongly linked to delayed treatment rather than to the infection being untreatable. Instilling oil, breast milk or other liquids into a painful ear is a widespread practice that can worsen infection, and cotton buds damage the canal.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  },

  bruising: {
    reviewedBy: null, lastReviewed: null,
    related: { symptoms: ['fever','fatigue','bloodstool'], procedures: ['bloodtransfusion','biopsy'], medicines: ['anticoag','antiplatelet','steroid','ironfolate'] },
    system: "Haematological", name: "Easy bruising & bleeding", rail: "watch",
    mini: "Occasional bruises are normal — bruising without injury, or bleeding from more than one site, is not.",
    story: "Everyone bruises, and older or thinner skin bruises far more easily without anything being wrong. What changes the picture is pattern rather than number: bruises appearing with no injury you can recall, bruises in unusual places, tiny red pinpoint spots that do not fade when pressed, or bleeding happening from several different places at once. Those suggest the problem is in the blood itself — the platelets or the clotting proteins — rather than in the skin.",
    urgency: { level: "watch", badge: "Can signal a blood problem", text: "<b>Seek urgent care</b> for bleeding that will not stop, tiny red or purple pinpoint spots that do not blanch when pressed, black tarry stools or blood in the urine, or any significant bruising while taking a blood thinner. <b>During a fever, especially in dengue season</b>, new bruising or bleeding needs same-day assessment." },
    flags: ["Bleeding from the gums or nose that will not stop", "Pinpoint red or purple spots that do not fade when pressed", "Black tarry stools, or blood in the urine", "Fever together with new bruising", "Heavy bruising while on a blood-thinning medicine", "Bleeding from several different sites at once", "Bruising with bone pain, weight loss or drenching night sweats"],
    causes: [
      { f: "common", n: "Age and thin skin", d: "Flat purple patches on the forearms and hands in older people — harmless, and not a clotting problem." },
      { f: "common", n: "Blood-thinning medicines", d: "Anticoagulants and antiplatelets both increase bruising. Expected to a degree; excessive bruising needs review." },
      { f: "common", n: "Long-term steroid use", d: "Including strong steroid creams used for months — the skin thins and bruises readily." },
      { f: "some", n: "Low platelets after a viral illness", d: "Platelet counts fall in many viral infections, dengue prominently among them." },
      { f: "some", n: "Liver disease", d: "The liver makes most clotting factors; when it struggles, bleeding follows." },
      { f: "rare", n: "Leukaemia", d: "Bruising with fatigue, fever, bone pain or recurrent infection — uncommon, and the reason blood counts get checked." },
      { f: "rare", n: "Inherited clotting disorder", d: "Usually evident from childhood, with bleeding after dental work or surgery, or into joints." }
    ],
    types: [
      { n: "Flat pinpoint spots", d: "Do not blanch on pressing. Suggests low platelets and needs prompt assessment." },
      { n: "Large spontaneous bruises", d: "No remembered injury, often on the trunk — worth a blood count." },
      { n: "Bleeding from gums or nose", d: "Mucosal bleeding points to a platelet problem rather than a skin one." },
      { n: "Bleeding into joints or muscles", d: "Deep, painful swelling — the pattern of a clotting-factor disorder." }
    ],
    region: { t: "In dengue-endemic parts of India, new bruising or bleeding during a febrile illness is the symptom that most needs same-day attention — the platelet count typically falls as the fever settles, around days three to seven, which is exactly when people assume they are recovering. Nutritional deficiency and widespread over-the-counter steroid cream use are other locally common contributors.", note: "Regional patterns are broad tendencies, never a substitute for individual assessment." }
  }
};
