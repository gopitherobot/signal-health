/* Signal — classification layer
 *
 * Two independent ways to look at the same medicines:
 *
 *   window.PHARM   — the PHARMACOLOGICAL axis. Families → classes.
 *                    "What kind of drug is this, and how does it work?"
 *
 *   window.SYSTEMS — the CLINICAL axis. Body system → conditions → the
 *                    classes used in each. "I have this condition — what
 *                    groups of medicine are used, and why?"
 *
 * Both axes reference:
 *   - class ids  (keys of PHARM[...].classes)
 *   - medicine keys (keys of window.MEDICINES in medicines.js)
 * so the three views stay in sync from one source of truth.
 *
 * SAFETY RULES (see CLAUDE.md §7) — these hold here too:
 *   - Class names are generic pharmacological groups, NEVER brand names.
 *   - No doses, no regimens, no individual instruction anywhere.
 *   - Mechanisms are simplified teaching models, not prescribing information.
 *   - Every entry still needs physician sign-off before public deployment.
 */

/* Clinical sign-off for this layer.
 *
 * The taxonomy is reviewed as a SET rather than entry-by-entry: the classes and
 * conditions here are a coherent map, and a clinician signing it off is
 * attesting to the map, not to 50 independent statements. Set `reviewedBy` to
 * the named reviewer and `lastReviewed` to an ISO date (YYYY-MM-DD) once that
 * review has happened. Leave null until then — the UI says so plainly.
 */
window.CLASSIFICATION_REVIEW = { reviewedBy: null, lastReviewed: null };

window.PHARM = {

  /* ───────────────────────── CARDIOVASCULAR ───────────────────────── */
  cardio: {
    name: "Heart & circulation",
    icon: "heart",
    blurb: "Drugs that change pressure, rhythm, clotting or cholesterol. Most are preventive — they work silently, which is exactly why people stop them.",
    classes: {
      acei: {
        name: "ACE inhibitors",
        tag: "Blood pressure",
        mech: "Block the enzyme that makes angiotensin II, the body's most powerful vessel-tightener. Arteries relax and the kidneys hold on to less salt and water.",
        use: "High blood pressure, heart failure, after a heart attack, and to protect kidneys in diabetes.",
        note: "A dry, tickly cough is the classic recognisable effect — it is harmless but worth reporting, because a closely related class avoids it.",
        med: "bp", mode: "daily"
      },
      arb: {
        name: "Angiotensin receptor blockers (ARBs)",
        tag: "Blood pressure",
        mech: "Block the receptor that angiotensin II acts on, rather than blocking its production. Same end result — relaxed arteries — by a different door.",
        use: "The same jobs as ACE inhibitors, and the usual substitute when the ACE-inhibitor cough is troublesome.",
        note: "Chosen over ACE inhibitors mainly on tolerability, not on strength.",
        med: "bp", mode: "daily"
      },
      ccb: {
        name: "Calcium channel blockers",
        tag: "Blood pressure",
        mech: "Stop calcium entering muscle cells in artery walls. Without calcium the muscle cannot contract, so vessels widen. Some types also slow the heart's electrical pace.",
        use: "High blood pressure, angina, and some rhythm problems.",
        note: "Ankle swelling is a common, dose-related effect of the vessel-widening types — mention it rather than stopping.",
        med: "bp", mode: "daily"
      },
      thiazide: {
        name: "Thiazide diuretics",
        tag: "Blood pressure",
        mech: "Make the kidney excrete more salt, and water follows it out. Less fluid in the circulation means lower pressure.",
        use: "A long-standing first-line option in high blood pressure, often combined with other classes.",
        note: "Can nudge potassium and sodium levels, which is why occasional blood tests are part of the deal.",
        med: "bp", mode: "daily"
      },
      loop: {
        name: "Loop diuretics",
        tag: "Fluid overload",
        mech: "Act on a different, more powerful part of the kidney tubule, shifting a much larger volume of salt and water.",
        use: "Fluid overload — the breathlessness and leg swelling of heart failure, and some kidney and liver conditions.",
        note: "This is the class people most often self-adjust. Symptoms improve fast, which makes it feel optional; it usually is not.",
        med: "diuretic", mode: "daily"
      },
      potsparing: {
        name: "Potassium-sparing diuretics",
        tag: "Fluid overload",
        mech: "Remove salt and water while holding potassium back, rather than flushing it out as the stronger diuretics do.",
        use: "Often paired with another diuretic to offset the potassium loss that one would otherwise cause.",
        note: "Potassium can rise too far, particularly alongside certain blood-pressure medicines, so blood tests are part of the arrangement.",
        med: "diuretic", mode: "daily"
      },
      mra: {
        name: "Mineralocorticoid receptor antagonists",
        tag: "Heart failure",
        mech: "Block aldosterone, a hormone that drives salt retention and, over time, scarring of heart muscle.",
        use: "Heart failure and resistant high blood pressure — as much for the long-term remodelling benefit as the fluid effect.",
        note: "Potassium can rise, so blood monitoring matters more with this class than most.",
        med: "heartfailure", mode: "daily"
      },
      bb: {
        name: "Beta-blockers",
        tag: "Rate & protection",
        mech: "Blunt adrenaline's effect on the heart. It beats slower and less forcefully, using less oxygen and giving itself more filling time.",
        use: "Angina, after heart attack, heart failure, some rhythm disturbances, and high blood pressure.",
        note: "One of the few groups that can be genuinely dangerous to stop abruptly — the rebound can provoke angina or rhythm problems.",
        med: "heartfailure", mode: "daily"
      },
      nitrate: {
        name: "Nitrates",
        tag: "Angina",
        mech: "Release nitric oxide, which relaxes vessels — reducing the work the heart must do and easing the pain of a starved heart muscle.",
        use: "Angina: some forms for an attack in progress, others taken regularly to prevent them.",
        note: "One of the genuinely 'when needed' cardiac treatments — and a good example of why the take-daily/when-needed distinction matters.",
        med: "heartfailure", mode: "mixed"
      },
      statin: {
        name: "Statins (HMG-CoA reductase inhibitors)",
        tag: "Cholesterol",
        mech: "Block the liver's rate-limiting cholesterol-making enzyme. The liver compensates by pulling more LDL cholesterol out of the blood.",
        use: "Lowering cardiovascular risk — after a heart attack or stroke, in diabetes, and where calculated risk is high.",
        note: "Muscle aching is the effect people fear most; it is far less common than assumed and is usually manageable by switching within the class.",
        med: "statin", mode: "daily"
      },
      ezet: {
        name: "Cholesterol-absorption inhibitors",
        tag: "Cholesterol",
        mech: "Reduce how much cholesterol the gut absorbs from food and bile, complementing what statins do in the liver.",
        use: "Added when a statin alone does not reach target, or when statins are not tolerated.",
        note: "Usually an add-on rather than a replacement.",
        med: "statin", mode: "daily"
      },
      antiplat: {
        name: "Antiplatelet agents",
        tag: "Clot prevention",
        mech: "Make platelets less sticky, so they are slower to clump on a damaged or stented artery wall.",
        use: "After heart attack, stent, or stroke caused by a clot in an artery.",
        note: "Arterial clots are platelet-driven; this is a different job from the anticoagulants below, and the two are not interchangeable.",
        med: "antiplatelet", mode: "daily"
      },
      doac: {
        name: "Direct oral anticoagulants",
        tag: "Clot prevention",
        mech: "Directly block one specific clotting factor in the cascade that turns liquid blood into a solid clot.",
        use: "Atrial fibrillation, deep-vein thrombosis and pulmonary embolism.",
        note: "Safety-critical. Missing doses leaves a real window of clotting risk; doubling up raises bleeding risk.",
        med: "anticoag", mode: "daily"
      },
      vka: {
        name: "Vitamin K antagonists",
        tag: "Clot prevention",
        mech: "Block the vitamin-K-dependent step the liver uses to build several clotting factors.",
        use: "Mechanical heart valves and other situations where the newer agents are not suitable.",
        note: "Needs regular blood-level monitoring, and interacts with diet and many other medicines — the reason it demands more attention than most.",
        med: "anticoag", mode: "daily"
      }
    }
  },

  /* ───────────────────────── ENDOCRINE ───────────────────────── */
  endo: {
    name: "Hormones & metabolism",
    icon: "metab",
    blurb: "Replacing a hormone the body no longer makes, or correcting a metabolic process that has drifted. Almost all are long-term by nature.",
    classes: {
      biguanide: {
        name: "Biguanides",
        tag: "Type 2 diabetes",
        mech: "Reduce the amount of glucose the liver releases and make body tissues more responsive to the insulin already present.",
        use: "Usually the first medicine started in type 2 diabetes.",
        note: "Does not itself push glucose dangerously low, which is part of why it is a first choice.",
        med: "diabetesoral", mode: "daily"
      },
      sulf: {
        name: "Sulfonylureas",
        tag: "Type 2 diabetes",
        mech: "Prod the pancreas into releasing more insulin, regardless of what the glucose level currently is.",
        use: "Type 2 diabetes, often added when a first medicine is not enough.",
        note: "Because they push insulin out regardless, missing meals can drop glucose too low — the classic hypo risk among tablets.",
        med: "diabetesoral", mode: "daily"
      },
      dpp4: {
        name: "DPP-4 inhibitors",
        tag: "Type 2 diabetes",
        mech: "Preserve the body's own incretin hormones, so insulin release rises when glucose does — and not otherwise.",
        use: "Type 2 diabetes, typically as an add-on.",
        note: "Glucose-dependent action means a much lower risk of dropping too low.",
        med: "diabetesoral", mode: "daily"
      },
      glp1: {
        name: "GLP-1 receptor agonists",
        tag: "Type 2 diabetes",
        mech: "Mimic a gut hormone: insulin rises with meals, the stomach empties more slowly, and appetite settles.",
        use: "Type 2 diabetes, particularly where weight and cardiovascular risk also matter.",
        note: "Nausea early on is common and usually settles as the body adjusts.",
        med: "diabetesoral", mode: "daily"
      },
      sglt2: {
        name: "SGLT2 inhibitors",
        tag: "Diabetes & heart",
        mech: "Stop the kidney reabsorbing filtered glucose, so surplus sugar leaves in the urine.",
        use: "Type 2 diabetes — and, increasingly, heart failure and kidney disease in their own right.",
        note: "One of the clearest recent examples of a diabetes drug earning a place in heart and kidney care.",
        med: "diabetesoral", mode: "daily"
      },
      insulin: {
        name: "Insulins",
        tag: "Diabetes",
        mech: "Replace the hormone directly. Preparations differ in how fast they start and how long they last, so they can mirror either background need or mealtime need.",
        use: "All of type 1 diabetes, and type 2 when other treatment is no longer enough.",
        note: "In type 1 this is not optional treatment — it is replacement of something the body cannot make, and stopping is dangerous within hours to days.",
        med: "insulin", mode: "daily"
      },
      thyroxine: {
        name: "Thyroid hormone replacement",
        tag: "Thyroid",
        mech: "Supplies the thyroid hormone an underactive gland is no longer producing in sufficient amount.",
        use: "Underactive thyroid (hypothyroidism).",
        note: "Pure replacement — the body needs a steady daily level, which is why it is taken consistently and monitored by blood test.",
        med: "thyroid", mode: "daily"
      },
      antithyroid: {
        name: "Antithyroid agents",
        tag: "Thyroid",
        mech: "Interrupt the gland's ability to build thyroid hormone, bringing an overactive gland back down.",
        use: "Overactive thyroid (hyperthyroidism).",
        note: "The mirror image of replacement — and typically a defined course with review, not automatically lifelong.",
        med: "thyroid", mode: "course"
      }
    }
  },

  /* ───────────────────────── RESPIRATORY ───────────────────────── */
  resp: {
    name: "Lungs & breathing",
    icon: "lungs",
    blurb: "The clearest illustration in medicine of 'reliever versus preventer' — and of the harm caused by confusing the two.",
    classes: {
      saba: {
        name: "Short-acting beta-2 agonists (relievers)",
        tag: "Reliever",
        mech: "Relax the muscle wrapped around the airways within minutes, opening a tightened tube.",
        use: "Symptom relief during asthma symptoms or an attack.",
        note: "A genuine 'when needed' medicine — but needing it often is itself a warning sign that prevention is not working.",
        med: "reliever", mode: "when"
      },
      ics: {
        name: "Inhaled corticosteroids (preventers)",
        tag: "Preventer",
        mech: "Damp down the ongoing inflammation in the airway lining — the underlying process that makes airways twitchy in the first place.",
        use: "Regular prevention in asthma and some COPD.",
        note: "The single most commonly skipped medicine on this page, because it changes nothing you can feel today while preventing what happens next month.",
        med: "preventer", mode: "daily"
      },
      laba: {
        name: "Long-acting beta-2 agonists",
        tag: "Preventer",
        mech: "The same airway-relaxing action as a reliever, but sustained across many hours.",
        use: "Regular control, always alongside an inhaled steroid in asthma.",
        note: "In asthma these are used with a preventer steroid, never as a lone treatment.",
        med: "preventer", mode: "daily"
      },
      lama: {
        name: "Long-acting antimuscarinics",
        tag: "Preventer",
        mech: "Block the nerve signal that keeps airway muscle partly contracted and drives mucus production.",
        use: "Mainly COPD, and some difficult asthma.",
        note: "Works on a different pathway from the beta-2 agonists, so the two can be combined.",
        med: "preventer", mode: "daily"
      },
      ltra: {
        name: "Leukotriene receptor antagonists",
        tag: "Preventer",
        mech: "Block leukotrienes, inflammatory messengers that tighten airways and drive mucus.",
        use: "Add-on prevention in asthma, especially with prominent allergy or exercise-triggered symptoms.",
        note: "A tablet rather than an inhaler, which suits some people better.",
        med: "preventer", mode: "daily"
      }
    }
  },

  /* ───────────────────────── GASTROINTESTINAL ───────────────────────── */
  gi: {
    name: "Stomach & digestion",
    icon: "gut",
    blurb: "A group where the take-daily / when-needed line is genuinely blurred — and where 'just keep taking it' has become a real problem.",
    classes: {
      antacid: {
        name: "Antacids",
        tag: "Immediate relief",
        mech: "Chemically neutralise acid already sitting in the stomach. Nothing more.",
        use: "Immediate, short-lived relief of heartburn.",
        note: "The truest 'when needed' medicine in this whole section — it does nothing preventive.",
        med: "acid", mode: "when"
      },
      h2ra: {
        name: "H2 receptor antagonists",
        tag: "Acid reduction",
        mech: "Block histamine's signal to the acid-producing cells, turning production down rather than mopping acid up.",
        use: "Heartburn and reflux, and some ulcer treatment.",
        note: "Slower to act than an antacid but longer lasting.",
        med: "acid", mode: "mixed"
      },
      ppi: {
        name: "Proton pump inhibitors",
        tag: "Acid reduction",
        mech: "Shut down the final pump that secretes acid — the most complete acid suppression available.",
        use: "Reflux disease, ulcers, protection alongside long-term anti-inflammatories, and part of H. pylori treatment.",
        note: "Usually intended as a defined course with review. Drifting into indefinite use without a reason is one of the commonest medication problems there is.",
        med: "acid", mode: "course"
      },
      bulk: {
        name: "Bulk-forming laxatives",
        tag: "Constipation",
        mech: "Hold water inside the stool so it becomes larger and softer, which is what prompts the bowel to move it along.",
        use: "First-line for ordinary constipation, and where the diet is short on fibre.",
        note: "They need plenty of fluid to work. Taken dry, they can make a blockage worse rather than better.",
        med: "laxative", mode: "when"
      },
      osmotic: {
        name: "Osmotic laxatives",
        tag: "Constipation",
        mech: "Draw water into the bowel by chemical attraction, softening what is there and increasing its volume.",
        use: "Constipation that has not responded to fibre and fluid, and the usual choice where a regular laxative is genuinely needed.",
        note: "Generally the safest group for sustained use, including alongside strong painkillers.",
        med: "laxative", mode: "when"
      },
      stimlax: {
        name: "Stimulant laxatives",
        tag: "Constipation",
        mech: "Act directly on the bowel wall to prompt the muscular contractions that move stool along.",
        use: "Shorter-term relief, and routinely alongside opioid painkillers, which slow the bowel markedly.",
        note: "Faster-acting and more likely to cause cramping, so usually intended for shorter runs than the osmotic group.",
        med: "laxative", mode: "when"
      },
      prokinetic: {
        name: "Prokinetics",
        tag: "Motility",
        mech: "Encourage the stomach to empty and the gut to move contents along more briskly.",
        use: "Reflux with sluggish emptying, and some nausea.",
        note: "Generally short-term use with review.",
        med: "acid", mode: "course"
      }
    }
  },

  /* ───────────────────────── NEUROLOGY & PSYCHIATRY ───────────────────────── */
  neuro: {
    name: "Brain, nerves & mood",
    icon: "brain",
    blurb: "Medicines where steady blood levels matter enormously, and where stopping suddenly is a distinct danger in its own right.",
    classes: {
      aed_na: {
        name: "Sodium-channel-blocking antiepileptics",
        tag: "Epilepsy",
        mech: "Steady over-excitable nerve membranes so a seizure is less able to start and spread.",
        use: "Epilepsy; several are also used in nerve pain.",
        note: "Prevention depends on an unbroken level in the blood — missed doses are the single commonest seizure trigger.",
        med: "epilepsy", mode: "daily"
      },
      aed_gaba: {
        name: "GABA-enhancing antiepileptics",
        tag: "Epilepsy",
        mech: "Strengthen the brain's main calming signal, raising the threshold at which a seizure can begin.",
        use: "Epilepsy, and some are used short-term in anxiety or muscle spasm.",
        note: "Abrupt withdrawal can precipitate seizures even in someone who has been stable for years.",
        med: "epilepsy", mode: "daily"
      },
      aed_sv2a: {
        name: "Synaptic-vesicle-modulating antiepileptics",
        tag: "Epilepsy",
        mech: "Act on the machinery that releases neurotransmitters, reducing runaway signalling.",
        use: "A widely used modern option in several seizure types.",
        note: "Mood or irritability changes are worth reporting rather than tolerating.",
        med: "epilepsy", mode: "daily"
      },
      benzo: {
        name: "Benzodiazepines",
        tag: "Sedative",
        mech: "Amplify the brain's main calming signal, reducing the excitability of nerve circuits throughout the nervous system.",
        use: "Short-term severe anxiety, crisis insomnia, alcohol withdrawal, muscle spasm and some seizure situations.",
        note: "Effective and habit-forming. The nervous system adapts within weeks, so these are started with an end date and stopped by gradual reduction, never abruptly.",
        med: "sleepanxiety", mode: "when"
      },
      zdrug: {
        name: "Z-drugs (non-benzodiazepine hypnotics)",
        tag: "Sedative",
        mech: "Act on the same calming receptor system as benzodiazepines, but more selectively towards sleep than towards anxiety.",
        use: "Short-term insomnia.",
        note: "Often presented as the safer alternative, but tolerance and dependence follow a similar pattern, so the same cautions apply.",
        med: "sleepanxiety", mode: "when"
      },
      ssri: {
        name: "SSRIs",
        tag: "Mood",
        mech: "Slow the reuptake of serotonin, leaving more available at the synapse. The downstream adaptation, not the immediate change, is what helps.",
        use: "Depression and anxiety disorders.",
        note: "Weeks to work, and tapered rather than stopped — abrupt withdrawal causes a distinct and unpleasant discontinuation syndrome.",
        med: "antidepressant", mode: "daily"
      },
      snri: {
        name: "SNRIs",
        tag: "Mood",
        mech: "Act on both serotonin and noradrenaline reuptake.",
        use: "Depression, anxiety, and certain chronic pain conditions.",
        note: "The pain indication surprises people — it is a genuine, separate use, not an off-label accident.",
        med: "antidepressant", mode: "daily"
      },
      tca: {
        name: "Tricyclic antidepressants",
        tag: "Mood & pain",
        mech: "An older, broader action across several neurotransmitter systems.",
        use: "Now used more often for nerve pain, migraine prevention and sleep than for depression alone.",
        note: "More side effects than newer classes, which is why their role has narrowed rather than disappeared.",
        med: "antidepressant", mode: "daily"
      }
    }
  },

  /* ───────────────────────── PAIN ───────────────────────── */
  pain: {
    name: "Pain & inflammation",
    icon: "pain",
    blurb: "Mostly genuinely symptomatic — take when needed, at the lowest dose that works. 'Over the counter' is not the same as 'harmless'.",
    classes: {
      para: {
        name: "Paracetamol / acetaminophen",
        tag: "Simple analgesic",
        mech: "Acts centrally to raise the pain threshold and lower fever. Notably, it is not an anti-inflammatory.",
        use: "Everyday pain and fever; usually the first step.",
        note: "Safe within limits and genuinely dangerous to the liver above them — and it hides inside many combination products.",
        med: "painkiller", mode: "when"
      },
      nsaid: {
        name: "NSAIDs",
        tag: "Anti-inflammatory",
        mech: "Block cyclo-oxygenase enzymes, cutting the prostaglandins that drive inflammation, pain and fever.",
        use: "Pain with an inflammatory component — injury, arthritis, period pain.",
        note: "The same enzymes protect the stomach lining and support kidney blood flow, which is where the risks come from.",
        med: "painkiller", mode: "when"
      },
      cox2: {
        name: "COX-2 selective inhibitors",
        tag: "Anti-inflammatory",
        mech: "Target the inflammation-related enzyme more selectively, sparing more of the stomach-protective one.",
        use: "Inflammatory pain where stomach risk is a particular concern.",
        note: "Gentler on the stomach does not mean risk-free elsewhere.",
        med: "painkiller", mode: "when"
      },
      opioid: {
        name: "Opioid analgesics",
        tag: "Strong analgesic",
        mech: "Act on opioid receptors in brain and spinal cord to blunt the perception of pain.",
        use: "Severe short-term pain, post-operative pain, and palliative care.",
        note: "Effective and appropriate in the right setting; tolerance and dependence make casual long-term use a different matter entirely.",
        med: "painkiller", mode: "when"
      },
      gabapentinoid: {
        name: "Gabapentinoids",
        tag: "Nerve pain",
        mech: "Quieten over-firing damaged nerves by acting on calcium channel subunits.",
        use: "Nerve pain — shingles, diabetic neuropathy, sciatica.",
        note: "Ordinary painkillers work poorly on nerve pain, which is why this different class exists.",
        med: "painkiller", mode: "daily"
      }
    }
  },

  /* ───────────────────────── INFECTION ───────────────────────── */
  infect: {
    name: "Infections",
    icon: "microbe",
    blurb: "The defining 'complete the course' group — and the one where public misunderstanding does measurable harm through resistance.",
    classes: {
      betalactam: {
        name: "Beta-lactams (penicillins, cephalosporins)",
        tag: "Antibacterial",
        mech: "Break the bacterial cell wall's construction, so the organism cannot hold itself together.",
        use: "A very wide range of common bacterial infections.",
        note: "The most commonly reported drug allergy — and frequently mislabelled, which narrows future options unnecessarily.",
        med: "antibiotic", mode: "course"
      },
      macrolide: {
        name: "Macrolides",
        tag: "Antibacterial",
        mech: "Block bacterial protein manufacture at the ribosome.",
        use: "Chest and skin infections, and an alternative in penicillin allergy.",
        note: "Interacts with a notable number of other medicines, so the full list matters.",
        med: "antibiotic", mode: "course"
      },
      tetracycline: {
        name: "Tetracyclines",
        tag: "Antibacterial",
        mech: "A different block on bacterial protein synthesis.",
        use: "Chest infections, acne, and several tick- and mite-borne illnesses relevant across South Asia.",
        note: "Sun sensitivity is a genuine and often-forgotten effect.",
        med: "antibiotic", mode: "course"
      },
      quinolone: {
        name: "Fluoroquinolones",
        tag: "Antibacterial",
        mech: "Disable the enzymes bacteria use to unwind and copy their DNA.",
        use: "Certain urinary, abdominal and respiratory infections.",
        note: "Reserved rather than routine, because of tendon and nerve effects and resistance pressure.",
        med: "antibiotic", mode: "course"
      },
      nitroimidazole: {
        name: "Nitroimidazoles",
        tag: "Antibacterial / antiprotozoal",
        mech: "Become active only in low-oxygen conditions, where they damage microbial DNA.",
        use: "Anaerobic bacterial infections and several protozoal infections common in the region.",
        note: "Alcohol during treatment causes a well-known and thoroughly unpleasant reaction.",
        med: "antibiotic", mode: "course"
      },
      azole: {
        name: "Azole antifungals",
        tag: "Antifungal",
        mech: "Block the fungus from building ergosterol, the molecule its cell membrane depends on, so the membrane fails.",
        use: "Skin, nail, mouth and genital fungal infections, and serious internal fungal infection.",
        note: "The oral forms interact with a notable number of other medicines, so the full list matters before starting.",
        med: "antifungal", mode: "course"
      },
      allylamine: {
        name: "Allylamine antifungals",
        tag: "Antifungal",
        mech: "Block an earlier step in the same membrane-building pathway, so toxic intermediates accumulate inside the fungus.",
        use: "Particularly stubborn skin and nail infections, where courses run for weeks to months.",
        note: "Liver function is sometimes monitored on the longer oral courses.",
        med: "antifungal", mode: "course"
      },
      antitb: {
        name: "Antitubercular agents",
        tag: "TB",
        mech: "Several drugs used together, each attacking the organism differently, for months rather than days.",
        use: "Tuberculosis — a leading example of why course completion is non-negotiable.",
        note: "Regionally important. Stopping early is the main driver of drug-resistant TB.",
        med: "antitb", mode: "course"
      }
    }
  },

  /* ───────────────────────── IMMUNITY ───────────────────────── */
  /* ───────────────────── BLOOD & NUTRITION ───────────────────── */
  nutri: {
    name: "Blood & nutrition",
    icon: "blood",
    blurb: "Replacing what the body is short of. The commonest error here is stopping when the symptom lifts, long before the store behind it is refilled.",
    classes: {
      ironsalt: {
        name: "Oral iron salts",
        tag: "Anaemia",
        mech: "Supply iron for the bone marrow to build haemoglobin, the protein that carries oxygen in red cells.",
        use: "Iron-deficiency anaemia from any cause, and prevention in pregnancy.",
        note: "Absorbed better on an empty stomach and with vitamin C, and markedly less well with tea, milk or calcium. Black stools are expected and harmless.",
        med: "ironfolate", mode: "course"
      },
      folate: {
        name: "Folic acid & vitamin B12",
        tag: "Anaemia",
        mech: "Supply the vitamins cells need to divide and mature properly — without them red cells are made large and ineffective.",
        use: "Folate or B12 deficiency, and routinely before and during early pregnancy to support neural development.",
        note: "Giving folate alone where B12 is the real deficiency can correct the blood count while nerve damage quietly continues, which is why both are checked.",
        med: "ironfolate", mode: "course"
      }
    }
  },

  /* ───────────────────── BONES & MINERALS ───────────────────── */
  bone: {
    name: "Bones & minerals",
    icon: "bone",
    blurb: "Silent, slow, and easy to abandon — because the benefit is a fracture that never happens.",
    classes: {
      calcium: {
        name: "Calcium salts",
        tag: "Bone health",
        mech: "Supply the mineral bone is built from, where diet does not provide enough of it.",
        use: "Osteoporosis and bone thinning, and alongside long-term steroid treatment.",
        note: "Absorbed better in divided amounts, and it blocks the absorption of iron, thyroid replacement and some antibiotics — so those are spaced apart from it.",
        med: "calciumvitd", mode: "daily"
      },
      vitd: {
        name: "Vitamin D",
        tag: "Bone health",
        mech: "Allows the gut to absorb calcium at all. Without it, calcium supplements achieve very little.",
        use: "Vitamin D deficiency, and as the foundation for any bone-strengthening treatment.",
        note: "Fat-soluble, so it accumulates in the body — very high doses bought without advice are not harmless.",
        med: "calciumvitd", mode: "daily"
      }
    }
  },

  immune: {
    name: "Inflammation & immunity",
    icon: "shield",
    blurb: "Powerful suppressors of the immune response. How they are stopped matters as much as how they are started.",
    classes: {
      steroid_sys: {
        name: "Systemic corticosteroids",
        tag: "Anti-inflammatory",
        mech: "Mimic the body's own cortisol, switching off inflammatory genes broadly and quickly.",
        use: "Flares of asthma, autoimmune disease, severe allergy and many inflammatory conditions.",
        note: "Safety-critical to stop correctly. After longer courses the body's own cortisol production is suppressed and needs a taper to recover.",
        med: "steroid", mode: "course"
      },
      dmard: {
        name: "Conventional DMARDs",
        tag: "Disease-modifying",
        mech: "Dial down the overactive immune process itself, rather than merely easing the resulting inflammation.",
        use: "Rheumatoid arthritis and other autoimmune disease.",
        note: "Slow to show benefit and monitored with regular blood tests — patience is part of the treatment.",
        med: "steroid", mode: "daily"
      },
      antihist: {
        name: "Antihistamines",
        tag: "Allergy",
        mech: "Block histamine, the messenger behind itching, sneezing, hives and swelling.",
        use: "Allergic rhinitis, urticaria and allergic reactions.",
        note: "Newer types are far less sedating; older ones remain useful but are best not taken before driving.",
        med: "antihistamine", mode: "when"
      }
    }
  }
};

/* ═══════════════════ THE CLINICAL AXIS ═══════════════════
 * Body system → the conditions within it → which classes and
 * which medicine groups are used, and the one thing worth knowing.
 */
window.SYSTEMS = {
  cardiosys: {
    name: "Heart & circulation",
    icon: "heart",
    blurb: "Where most silent, preventive, lifelong medicine lives.",
    conditions: [
      {
        id: "htn", name: "High blood pressure",
        desc: "Sustained pressure that causes no symptoms while quietly damaging arteries, heart, brain and kidneys.",
        classes: ["acei", "arb", "ccb", "thiazide", "bb"], meds: ["bp"],
        key: "Treatment is judged by the number and by long-term risk — never by how you feel."
      },
      {
        id: "chol", name: "High cholesterol",
        desc: "Circulating cholesterol that builds into artery plaque over years.",
        classes: ["statin", "ezet"], meds: ["statin"],
        key: "Also symptomless. The benefit is measured in strokes and heart attacks that never happen."
      },
      {
        id: "cad", name: "Coronary artery disease & angina",
        desc: "Narrowed heart arteries — chest pain on exertion, and the risk of a heart attack.",
        classes: ["bb", "nitrate", "antiplat", "statin", "acei"], meds: ["antiplatelet", "statin", "bp"],
        key: "Several classes with entirely different jobs run in parallel: rate control, symptom relief, clot prevention, plaque stabilisation."
      },
      {
        id: "hf", name: "Heart failure",
        desc: "A heart that cannot pump enough for the body's needs — breathlessness, fatigue, swelling.",
        classes: ["acei", "arb", "bb", "mra", "loop", "sglt2"], meds: ["heartfailure", "diuretic"],
        key: "Most of the combination is there to help you live longer, not to make today more comfortable. Only the diuretic does the latter."
      },
      {
        id: "af", name: "Atrial fibrillation",
        desc: "An irregular rhythm that lets blood pool and clot inside the heart, risking stroke.",
        classes: ["doac", "vka", "bb", "ccb"], meds: ["anticoag"],
        key: "Two separate objectives: control the rate, and prevent the stroke. The anticoagulant addresses the second and matters most."
      },
      {
        id: "vte", name: "Clots in veins & lungs",
        desc: "Deep-vein thrombosis and pulmonary embolism.",
        classes: ["doac", "vka"], meds: ["anticoag"],
        key: "Vein clots are treated with anticoagulants; artery clots with antiplatelets. Different medicines for different physics."
      }
    ]
  },

  endosys: {
    name: "Hormones & metabolism",
    icon: "metab",
    blurb: "Replacement and regulation — the most literally lifelong category.",
    conditions: [
      {
        id: "t2dm", name: "Type 2 diabetes",
        desc: "Rising glucose from insulin resistance and a gradually failing insulin response.",
        classes: ["biguanide", "sulf", "dpp4", "glp1", "sglt2", "insulin"], meds: ["diabetesoral", "insulin"],
        key: "Treatment is layered over time. Needing more medicines is the natural course of the condition, not a personal failure."
      },
      {
        id: "t1dm", name: "Type 1 diabetes",
        desc: "The pancreas no longer makes insulin at all.",
        classes: ["insulin"], meds: ["insulin"],
        key: "Not optional. This is replacement of something the body cannot produce, and stopping is dangerous within hours."
      },
      {
        id: "hypo", name: "Underactive thyroid",
        desc: "Too little thyroid hormone — fatigue, cold intolerance, weight gain, low mood.",
        classes: ["thyroxine"], meds: ["thyroid"],
        key: "Pure replacement, guided by blood tests, and taken consistently for a steady level."
      },
      {
        id: "hyper", name: "Overactive thyroid",
        desc: "Too much thyroid hormone — weight loss, tremor, palpitations, heat intolerance.",
        classes: ["antithyroid", "bb"], meds: ["thyroid"],
        key: "Often a defined course with review, sometimes with a beta-blocker early for symptom control."
      }
    ]
  },

  respsys: {
    name: "Lungs & breathing",
    icon: "lungs",
    blurb: "The reliever-versus-preventer distinction, and why it saves lives.",
    conditions: [
      {
        id: "asthma", name: "Asthma",
        desc: "Inflamed, twitchy airways that narrow in response to triggers.",
        classes: ["saba", "ics", "laba", "ltra"], meds: ["reliever", "preventer"],
        key: "The reliever treats today's symptom; the preventer decides whether you have symptoms next month. Heavy reliever use is a red flag."
      },
      {
        id: "copd", name: "COPD",
        desc: "Long-term airflow obstruction, usually from smoking or prolonged smoke exposure.",
        classes: ["saba", "lama", "laba", "ics"], meds: ["reliever", "preventer"],
        key: "Inhaler technique changes how much medicine actually reaches the lung — worth having checked."
      }
    ]
  },

  gisys: {
    name: "Stomach & digestion",
    icon: "gut",
    blurb: "Where 'when needed' and 'as a course' genuinely blur.",
    conditions: [
      {
        id: "gord", name: "Acid reflux & heartburn",
        desc: "Acid escaping upward into the gullet.",
        classes: ["antacid", "h2ra", "ppi"], meds: ["acid"],
        key: "Antacids are true when-needed. Acid-blockers are usually a course with review — not something to drift on indefinitely."
      },
      {
        id: "ulcer", name: "Peptic ulcer & H. pylori",
        desc: "An ulcer in the stomach or duodenum, often driven by a bacterium.",
        classes: ["ppi", "betalactam", "macrolide", "nitroimidazole"], meds: ["acid", "antibiotic"],
        key: "When a bacterium is the cause, an antibiotic course treats the root — the acid-blocker alone only treats the effect."
      },
      {
        id: "constipation", name: "Constipation",
        desc: "Infrequent or difficult stools — usually diet, fluid, inactivity or a medicine, and occasionally something structural.",
        classes: ["bulk", "osmotic", "stimlax"], meds: ["laxative"],
        key: "A lasting change in bowel habit in an adult, particularly over 45, is a symptom to investigate rather than a routine to manage."
      }
    ]
  },

  neurosys: {
    name: "Brain, nerves & mood",
    icon: "brain",
    blurb: "Steady levels matter; abrupt stopping is its own hazard.",
    conditions: [
      {
        id: "epilepsy", name: "Epilepsy",
        desc: "A tendency to recurrent seizures from abnormal electrical activity.",
        classes: ["aed_na", "aed_gaba", "aed_sv2a"], meds: ["epilepsy"],
        key: "Missed doses are the commonest trigger of a breakthrough seizure. Never stop abruptly."
      },
      {
        id: "depression", name: "Depression & anxiety",
        desc: "Persistent low mood or anxiety that affects daily functioning.",
        classes: ["ssri", "snri", "tca"], meds: ["antidepressant"],
        key: "Not a take-when-sad tablet. Weeks to work, months to consolidate, and always tapered rather than stopped."
      },
      {
        id: "neuropathy", name: "Nerve pain",
        desc: "Burning, shooting or electric pain from damaged nerves.",
        classes: ["gabapentinoid", "tca", "snri"], meds: ["painkiller", "antidepressant"],
        key: "Ordinary painkillers work poorly here. The medicines that help are borrowed from epilepsy and mood care — that is deliberate, not a mistake."
      },
      {
        id: "insomnia", name: "Insomnia & short-term anxiety",
        desc: "Sleeplessness or acute anxiety severe enough that a short course of sedation is being considered.",
        classes: ["benzo", "zdrug"], meds: ["sleepanxiety"],
        key: "These work quickly and stop working within weeks. They are started with an end date — and once taken regularly, stopped gradually rather than suddenly."
      }
    ]
  },

  painsys: {
    name: "Pain & inflammation",
    icon: "pain",
    blurb: "Genuinely symptomatic — lowest effective dose, shortest sensible time.",
    conditions: [
      {
        id: "acutepain", name: "Everyday & injury pain",
        desc: "Headache, strains, period pain, post-operative pain.",
        classes: ["para", "nsaid", "cox2", "opioid"], meds: ["painkiller"],
        key: "Step up only as needed. Over-the-counter does not mean risk-free, especially for stomach and kidneys."
      },
      {
        id: "arthritis", name: "Arthritis & autoimmune disease",
        desc: "Joint inflammation, from wear-related to immune-driven.",
        classes: ["nsaid", "cox2", "steroid_sys", "dmard"], meds: ["painkiller", "steroid"],
        key: "Anti-inflammatories ease symptoms; disease-modifying treatment changes the course. They are not substitutes for one another."
      }
    ]
  },

  infectsys: {
    name: "Infections",
    icon: "microbe",
    blurb: "Complete the course — the clearest public-health case on this site.",
    conditions: [
      {
        id: "bacterial", name: "Bacterial infections",
        desc: "Chest, urine, skin, throat and abdominal infections caused by bacteria.",
        classes: ["betalactam", "macrolide", "tetracycline", "quinolone", "nitroimidazole"], meds: ["antibiotic"],
        key: "Stopping when you feel better leaves the hardiest organisms behind. That is precisely how resistance is bred."
      },
      {
        id: "tb", name: "Tuberculosis",
        desc: "A slow bacterial infection, most often of the lungs — a major regional health issue.",
        classes: ["antitb"], meds: ["antitb"],
        key: "Months of several medicines together. Interrupting treatment is the main cause of drug-resistant TB."
      },
      {
        id: "fungal", name: "Fungal infections",
        desc: "Skin, nail, scalp, mouth and genital infections — very common in humid climates, and slow to clear properly.",
        classes: ["azole", "allylamine"], meds: ["antifungal"],
        key: "Courses run far longer than the rash looks like it needs, and a steroid-containing cream relieves the itch while letting the infection spread."
      }
    ]
  },

  nutrisys: {
    name: "Blood & nutrition",
    icon: "blood",
    blurb: "Deficiencies that are common, correctable, and very often treated for too short a time.",
    conditions: [
      {
        id: "irondef", name: "Iron-deficiency anaemia",
        desc: "Too little iron to build haemoglobin, so the blood carries less oxygen — causing tiredness, breathlessness and pallor.",
        classes: ["ironsalt", "folate"], meds: ["ironfolate"],
        key: "Two things matter equally: replacing the iron for long enough to refill the stores, and finding out why it ran low in the first place."
      }
    ]
  },

  bonesys: {
    name: "Bones & minerals",
    icon: "bone",
    blurb: "Treatment you cannot feel working, measured in fractures that do not happen.",
    conditions: [
      {
        id: "osteoporosis", name: "Osteoporosis & bone thinning",
        desc: "Bone loses density with age, after menopause, and with long-term steroid treatment — until a minor fall breaks something.",
        classes: ["calcium", "vitd"], meds: ["calciumvitd"],
        key: "Calcium and vitamin D are the foundation, not the whole treatment — established osteoporosis usually needs a specific bone-strengthening medicine as well."
      },
      {
        id: "vitddef", name: "Vitamin D deficiency",
        desc: "Widespread even in sunny climates, because sun exposure, skin pigmentation, clothing and diet all affect how much is actually made.",
        classes: ["vitd"], meds: ["calciumvitd"],
        key: "Common enough to be worth measuring rather than assuming — and high doses bought over the counter are not automatically safe."
      }
    ]
  },

  immunesys: {
    name: "Inflammation & immunity",
    icon: "shield",
    blurb: "How you stop matters as much as how you start.",
    conditions: [
      {
        id: "allergy", name: "Allergy",
        desc: "Hay fever, hives and allergic reactions.",
        classes: ["antihist", "steroid_sys"], meds: ["antihistamine", "steroid"],
        key: "Antihistamines are when-needed; a steroid course for a severe flare is not."
      },
      {
        id: "autoimmune", name: "Autoimmune & inflammatory disease",
        desc: "Conditions where the immune system attacks the body's own tissue.",
        classes: ["steroid_sys", "dmard"], meds: ["steroid"],
        key: "Longer steroid courses suppress the body's own cortisol and must be tapered, never stopped abruptly."
      }
    ]
  }
};
