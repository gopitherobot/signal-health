// Signal · Symptoms — content database
// 20 highest-anxiety, highest-search symptoms across organ systems.
// Frequency bands (common/some/rare) are RELATIVE and illustrative, not statistics.
// Every entry needs physician sign-off before any public deployment.
// rail: visual urgency spread — 'calm' | 'watch' | 'now' | 'mix'

window.SYMPTOMS = {
  chest: {
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
  }
};
