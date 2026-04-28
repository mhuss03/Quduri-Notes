export interface FlashCard {
  q: string;
  a: string;
}

export interface Rule {
  title: string;
  body: string;
  accent: "green" | "red" | "amber" | "blue" | "purple" | "teal" | "gold";
}

export interface TableRow {
  cols: string[];
}

export interface ScholarTable {
  headers: string[];
  rows: TableRow[];
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  arabicText: string;
  rules: Rule[];
  tables: ScholarTable[];
  flashcards: FlashCard[];
}

export const chapters: Chapter[] = [
  {
    id: "iqala",
    number: "01",
    title: "Iqālah",
    arabicTitle: "الإقالة",
    subtitle: "Cancellation of Sale",
    arabicText:
      "جائزة في البيع بمثل الثمن الأول فإن شرط أقل منه أو أكثر فالشرط باطل ويرد مثل الثمن الأول وهي فسخ في حق المتعاقدين بيع جديد في حق غيرهما في قول أبي حنيفة. وهلاك الثمن لا يمنع صحة الإقالة وهلاك المبيع يمنع منها فإن هلك بعض المبيع جازت الإقالة في باقيه.",
    rules: [
      {
        title: "What is Iqālah?",
        body: "Mutual cancellation of a sale contract by agreement of both buyer and seller, returning each party to their original position.",
        accent: "green",
      },
      {
        title: "Price must be the original (al-thaman al-awwal)",
        body: "Iqālah is valid at the original price only. Any condition for more or less is bāṭil — but the iqālah itself still proceeds at the original price.",
        accent: "amber",
      },
      {
        title: "For the two parties — faskh (rescission)",
        body: "Iqālah simply unwinds the original sale. No new transaction occurs between the buyer and seller.",
        accent: "teal",
      },
      {
        title: "For third parties — new sale (Abū Ḥanīfa)",
        body: "Treated as a new sale toward outsiders. Third-party rights such as shuf3a (pre-emption) can be triggered.",
        accent: "blue",
      },
      {
        title: "Thaman (price) destroyed — Iqālah valid",
        body: "Money is fungible. The mithil (equivalent value) is returned instead. Iqālah remains valid.",
        accent: "teal",
      },
      {
        title: "Mabī' (goods) destroyed — Iqālah void",
        body: "If the sold item is destroyed, iqālah cannot proceed. A substitute could unfairly favour one party.",
        accent: "red",
      },
      {
        title: "Partial destruction of mabī'",
        body: "Iqālah is valid for the remaining portion only. Example: some fruit on a tree is destroyed → iqālah on the surviving fruit only.",
        accent: "amber",
      },
    ],
    tables: [
      {
        headers: ["Scenario", "Tafāḍul (excess)?", "Nasā' (deferral)?"],
        rows: [
          {
            cols: [
              "Both conditions (same jins + same 3illah)",
              "ḥarām",
              "ḥarām",
            ],
          },
          { cols: ["Neither condition", "ḥalāl", "ḥalāl"] },
          {
            cols: [
              "One condition only (same 3illah, diff jins)",
              "ḥalāl",
              "ḥarām",
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        q: "What is Iqālah?",
        a: "Mutual cancellation of a sale by both buyer and seller, reverting to the original state.",
      },
      {
        q: "What price must Iqālah be conducted at?",
        a: "The original price (al-thaman al-awwal). Any condition for more or less is bāṭil, but Iqālah still proceeds at the original price.",
      },
      {
        q: "What is Iqālah for the two contracting parties?",
        a: "A faskh (rescission) — it simply unwinds the original sale.",
      },
      {
        q: "What is Iqālah for third parties? (Abū Ḥanīfa)",
        a: "A new sale — third-party rights like shuf3a (pre-emption) can be triggered.",
      },
      {
        q: "Does destruction of the thaman (price) prevent Iqālah?",
        a: "No. The thaman is fungible; the mithil (equivalent value) is returned instead.",
      },
      {
        q: "Does destruction of the mabī' (goods) prevent Iqālah?",
        a: "Yes — Iqālah is void. If only part is destroyed, Iqālah is valid on the remaining portion only.",
      },
    ],
  },
  {
    id: "murabaha",
    number: "02",
    title: "Murābaḥa & Tawliya",
    arabicTitle: "المرابحة والتولية",
    subtitle: "Cost-Plus Sale & At-Cost Transfer",
    arabicText:
      "المرابحة: نقل ما ملكه بالعقد الأول بالثمن الأول مع زيادة ربح. والتولية: نقل ما ملكه بالعقد الأول بالثمن الأول من غير زيادة ربح.",
    rules: [
      {
        title: "Murābaḥa — cost plus profit",
        body: "Reselling at the original price plus a disclosed profit. The buyer knows exactly what the seller paid and the markup added.",
        accent: "green",
      },
      {
        title: "Tawliya — at cost only",
        body: "Reselling at exactly the original price — no profit, no loss. A transfer at cost price only.",
        accent: "blue",
      },
      {
        title: "3iwad must be fungible (mithli)",
        body: "Neither murābaḥa nor tawliya is valid unless the original consideration is a fungible (mithli) item.",
        accent: "purple",
      },
      {
        title: "Adding costs to rās al-māl",
        body: 'Wages of the dyer, bleacher, embroiderer, spinner, and transport cost may be added to the capital base. Seller must say "it cost me X" (qāma 3alayya) — not "I bought it for X" (ishtaraytuhu).',
        accent: "amber",
      },
      {
        title: "Movable goods — qabd required before resale",
        body: "Cannot resell a movable item until you have taken physical possession. e.g. an online order must arrive before you sell it on.",
        accent: "red",
      },
      {
        title: "Real estate — AH + AY permit sale before qabd",
        body: "Abū Ḥanīfa and Abū Yūsuf allow selling real estate before possession. Imām Muḥammad: not permitted.",
        accent: "teal",
      },
      {
        title: "Trading thaman before qabd is valid",
        body: "The seller may transact with the debt price before physically receiving it. e.g. sell a car for £1,000 and trade that £1,000 before the buyer has paid.",
        accent: "green",
      },
      {
        title: "Deferred payment — except loans (qard)",
        body: "Any due debt can be deferred by creditor agreement and becomes mu'ajjal (deferred). Exception: a loan — postponing it is not valid; it remains repayable on demand at any time.",
        accent: "amber",
      },
    ],
    tables: [
      {
        headers: ["Scholar", "Deception in murābaḥa", "Deception in tawliya"],
        rows: [
          {
            cols: [
              "Abū Ḥanīfa",
              "Buyer's choice: take at full price OR return",
              "Buyer deducts the deception amount (isqāṭ)",
            ],
          },
          {
            cols: ["Abū Yūsuf", "Price reduced (ḥaṭṭ)", "Price reduced (ḥaṭṭ)"],
          },
          {
            cols: [
              "Imām Muḥammad",
              "Buyer's choice in both: take or return",
              "Buyer's choice in both: take or return",
            ],
          },
        ],
      },
      {
        headers: ["Scholar", "Real estate before qabd", "Movables before qabd"],
        rows: [
          { cols: ["Abū Ḥanīfa", "✓ Permitted", "✗ Not permitted"] },
          { cols: ["Abū Yūsuf", "✓ Permitted", "✗ Not permitted"] },
          { cols: ["Imām Muḥammad", "✗ Not permitted", "✗ Not permitted"] },
        ],
      },
    ],
    flashcards: [
      {
        q: "Define Murābaḥa.",
        a: "Reselling at the original price plus a disclosed profit margin.",
      },
      {
        q: "Define Tawliya.",
        a: "Reselling at exactly the original price — no profit, no loss.",
      },
      {
        q: "What condition must the 3iwad meet?",
        a: "It must be fungible (mithli) — it has an equivalent.",
      },
      {
        q: "Can the seller add dyeing/embroidery costs to rās al-māl?",
        a: 'Yes — but must say "it cost me X" (qāma 3alayya), not "I bought it for X".',
      },
      {
        q: "Abū Ḥanīfa on deception in murābaḥa?",
        a: "Buyer's choice: take at full price or return the goods.",
      },
      {
        q: "Abū Ḥanīfa on deception in tawliya?",
        a: "Buyer deducts the deception amount from the price.",
      },
      {
        q: "Abū Yūsuf vs Imām Muḥammad on deception?",
        a: "AY: reduce price in both. Muḥammad: buyer has choice (take or return) in both.",
      },
      {
        q: "Can a buyer resell movables before qabd?",
        a: "No — all three scholars agree: qabd required for movables first.",
      },
      {
        q: "Can a buyer resell real estate before qabd?",
        a: "AH and AY: yes, permitted. Imām Muḥammad: not permitted.",
      },
      {
        q: "Can a loan (qard) be deferred?",
        a: "No — ta'jīl of a qard is not valid. A loan is repayable on demand at any time.",
      },
    ],
  },
  {
    id: "riba",
    number: "03",
    title: "Ribā",
    arabicTitle: "الربا",
    subtitle: "The Prohibition of Usury",
    arabicText:
      "الربا محرم · كل مكيل أو موزون إذا بيع بجنسه متفاضلا فالعلة فيه الكيل مع الجنس أو الوزن مع الجنس.",
    rules: [
      {
        title: "Ribā is ḥarām",
        body: "Any measured (makkīl) or weighed (mawzūn) item sold against its own kind with excess (tafāḍul) is ribā. The 3illah is: kayl + same jins, OR wazn + same jins.",
        accent: "red",
      },
      {
        title: "Tafāḍul — excess in amount",
        body: "Exchanging 1kg wheat for 1.5kg wheat is ribā. Quality differences do not justify excess: good dates for bad dates must still be equal by measure.",
        accent: "red",
      },
      {
        title: "Nasā' — deferral of delivery",
        body: "Delay in receiving one side when both items share the genus + measurement 3illah. Both prohibitions apply together when both conditions of the 3illah are present.",
        accent: "red",
      },
      {
        title: "Both conditions → both ḥarām",
        body: "Same jins + same 3illah (e.g. wheat:wheat, gold:gold): tafāḍul ḥarām and nasā' ḥarām. Must be equal in measure and exchanged hand-to-hand.",
        accent: "purple",
      },
      {
        title: "Neither condition → both ḥalāl",
        body: "Different jins + different 3illah (e.g. wheat:gold): both tafāḍul and nasā' are ḥalāl.",
        accent: "purple",
      },
      {
        title: "One condition only → tafāḍul ḥalāl, nasā' ḥarām",
        body: "e.g. wheat:barley (same 3illah, different jins). Excess OK but deferral forbidden. Also gold:silver (same wazn 3illah, different jins).",
        accent: "amber",
      },
      {
        title: "Fixed commodities vs custom (3urf)",
        body: "Wheat, barley, dates, salt → always makkīl (from prophetic text), even if people stop using measures. Gold, silver → always mawzūn. Anything not mentioned follows local custom (3urf).",
        accent: "green",
      },
      {
        title: "Ṣarf — both sides need qabd in same session",
        body: "When both sides are gold/silver (jins al-athmān), both must be physically received in the same session. For other ribā goods, only ta3yīn (identification) is needed.",
        accent: "blue",
      },
      {
        title: "Exceptions — no ribā applies",
        body: "Between a master and his slave (slave's wealth is effectively master's). Between a Muslim and a ḥarbī in dār al-ḥarb.",
        accent: "green",
      },
    ],
    tables: [
      {
        headers: ["Exchange", "Jins", "3illah", "Tafāḍul", "Nasā'"],
        rows: [
          { cols: ["Wheat : wheat", "Same", "Same (kayl)", "ḥarām", "ḥarām"] },
          { cols: ["Gold : gold", "Same", "Same (wazn)", "ḥarām", "ḥarām"] },
          {
            cols: [
              "Wheat : barley",
              "Different",
              "Same (kayl)",
              "ḥalāl",
              "ḥarām",
            ],
          },
          {
            cols: [
              "Gold : silver",
              "Different",
              "Same (wazn)",
              "ḥalāl",
              "ḥarām",
            ],
          },
          {
            cols: ["Wheat : gold", "Different", "Different", "ḥalāl", "ḥalāl"],
          },
          {
            cols: [
              "Good dates : bad dates",
              "Same",
              "Same (kayl)",
              "ḥarām",
              "ḥarām",
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        q: "What is the 3illah (legal cause) of ribā?",
        a: "Kayl (measurement) + same jins, OR wazn (weight) + same jins.",
      },
      {
        q: "What are the two types of ribā prohibition?",
        a: "Tafāḍul (excess in amount) and nasā' (deferral of delivery).",
      },
      {
        q: "Both same jins AND same 3illah — what is ruled?",
        a: "Both tafāḍul and nasā' are ḥarām. Must be equal in measure and same session.",
      },
      {
        q: "Same 3illah but different jins — what is ruled?",
        a: "Tafāḍul ḥalāl, nasā' ḥarām. (e.g. wheat:barley, gold:silver)",
      },
      {
        q: "Different 3illah AND different jins — what is ruled?",
        a: "Both tafāḍul and nasā' are ḥalāl. (e.g. wheat:gold)",
      },
      {
        q: "Why can't you sell wheat for flour (daqīq)?",
        a: "Same jins — wheat transformed into flour is still the same genus.",
      },
      {
        q: "Ruling on fresh dates (raṭab) for dried dates (tamr)?",
        a: "Permitted — but must be equal measure (mithlan bi-mithl).",
      },
      {
        q: "Why is selling olives for olive oil not permitted?",
        a: "Oil extracted exceeds oil inside the olives — surplus has no counterpart → ribā.",
      },
      {
        q: "What is 3aqd al-ṣarf?",
        a: "Exchange of currencies (gold/silver). Both sides must be physically received in the same session.",
      },
      {
        q: "Are prophetically-designated makkīl items always measured?",
        a: "Yes — wheat, barley, dates, salt are always makkīl. Gold and silver always mawzūn.",
      },
      {
        q: "Where does ribā not apply?",
        a: "Between master and slave, and between a Muslim and a ḥarbī in dār al-ḥarb.",
      },
      {
        q: "Difference in qabd for ṣarf vs other ribā goods?",
        a: "Ṣarf: both sides need actual hand-to-hand receipt. Other ribā goods: only ta3yīn (identification) needed.",
      },
    ],
  },
  {
    id: "salam",
    number: "04",
    title: "Salam",
    arabicTitle: "السلم",
    subtitle: "Forward Sale",
    arabicText:
      "السلم جائز في المكيلات والموزونات والمعدودات التي لا تتفاوت كالجوز والبيض وفي المذروعات ولا يجوز السلم في الحيوان ولا في أطرافه.",
    rules: [
      {
        title: "What is salam?",
        body: "A sale where the full price (ra's al-māl) is paid upfront and the described goods (musallam fīh) are delivered at a known future date.",
        accent: "green",
      },
      {
        title: "Valid categories",
        body: "Measured goods (makkīlāt), weighed goods (mawzūnāt), uniformly-counted goods with no significant variation (e.g. walnuts, eggs), and goods measured by length (cloth).",
        accent: "green",
      },
      {
        title: "Not valid in animals or animal parts",
        body: "Animals cannot be described with sufficient precision to eliminate uncertainty (gharar). Also invalid: hides by count, firewood by bundle, fresh fodder by bundle, gems, beads.",
        accent: "red",
      },
      {
        title: "General principle — describability",
        body: "Anything whose description can be controlled (ḍabṭ al-ṣifa) and quantity known (ma3rifat al-miqdār) is valid for salam. Failure on either test → invalid.",
        accent: "purple",
      },
      {
        title: "Must be deferred — no spot salam",
        body: "Salam must have a known future delivery date (ajal ma3lūm). Immediate salam is not valid. Also forbidden: salam by a specific person's measure, from a named village's crop, or from a specific tree.",
        accent: "red",
      },
      {
        title: "Ra's al-māl received before parties part",
        body: "Full capital must be handed over before buyer and seller physically separate. No dealing in ra's al-māl or musallam fīh before qabd. Shirka and tawliya in musallam fīh before qabd: not permitted.",
        accent: "blue",
      },
      {
        title: "AH: 7 conditions · AY + Muḥammad: 5 conditions",
        body: "AH additionally requires: stating the ra's al-māl quantity, and naming the delivery location if transport is needed. AY and Muḥammad: if capital is physically present, naming it is unnecessary; delivery defaults to place of contract.",
        accent: "amber",
      },
    ],
    tables: [
      {
        headers: ["Condition", "Abū Ḥanīfa", "AY + Muḥammad"],
        rows: [
          {
            cols: ["Known jins, naw3, ṣifa, ajal", "✓ Required", "✓ Required"],
          },
          {
            cols: [
              "State quantity of ra's al-māl",
              "✓ Required",
              "~ Only if not physically present",
            ],
          },
          {
            cols: [
              "Name delivery location",
              "✓ Required (if transport needed)",
              "✗ Not required — defaults to contract location",
            ],
          },
          {
            cols: [
              "Ra's al-māl received before parting",
              "✓ Required",
              "✓ Required",
            ],
          },
        ],
      },
      {
        headers: ["Commodity", "Salam valid?", "Reason"],
        rows: [
          {
            cols: [
              "Measured goods (grain, dates)",
              "✓ Valid",
              "Precisely quantifiable",
            ],
          },
          {
            cols: [
              "Weighed goods (metals, butter)",
              "✓ Valid",
              "Precisely quantifiable",
            ],
          },
          {
            cols: [
              "Uniform counted goods (walnuts, eggs)",
              "✓ Valid",
              "No significant variation",
            ],
          },
          {
            cols: [
              "Cloth (length + width + type)",
              "✓ Valid",
              "Measurable by length",
            ],
          },
          {
            cols: [
              "Bricks (with known mould)",
              "✓ Valid",
              "Mould eliminates uncertainty",
            ],
          },
          { cols: ["Animals", "✗ Not valid", "Cannot be described precisely"] },
          {
            cols: [
              "Hides by count",
              "✗ Not valid",
              "Variation in size and quality",
            ],
          },
          {
            cols: [
              "Gems / jewellery",
              "✗ Not valid",
              "Cannot describe quality precisely",
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        q: "What is salam?",
        a: "A sale where the full price (ra's al-māl) is paid upfront and described goods delivered at a known future date.",
      },
      {
        q: "Name the four valid categories for salam.",
        a: "Measured goods (makkīlāt), weighed goods (mawzūnāt), uniformly-counted goods, and goods measured by length (cloth).",
      },
      {
        q: "Why is salam not valid for animals?",
        a: "Animals cannot be described with sufficient precision to eliminate uncertainty (gharar).",
      },
      {
        q: "What is the key general principle for salam validity?",
        a: "Any commodity whose description can be controlled (ḍabṭ al-ṣifa) and quantity known (ma3rifat al-miqdār) is valid.",
      },
      {
        q: "Must salam be deferred?",
        a: "Yes — must have a known future delivery date. Immediate salam is not valid.",
      },
      {
        q: "AH's two extra conditions vs AY + Muḥammad?",
        a: "(1) State the ra's al-māl quantity; (2) name the delivery location if transport is needed.",
      },
      {
        q: "What must happen to ra's al-māl before the parties part?",
        a: "It must be fully received (qabd) before buyer and seller physically separate.",
      },
      {
        q: "Can you trade the musallam fīh before receiving it?",
        a: "No — no selling, shirka or tawliya in the musallam fīh before qabd.",
      },
      {
        q: "Is selling a dog or cheetah permitted?",
        a: "Yes — dogs, cheetahs, and wild predatory animals may be sold.",
      },
      {
        q: "Can silkworms be sold on their own?",
        a: "No — only if sold together with the silk (qazz). Bees only with the hive.",
      },
      {
        q: "How are dhimmīs treated in commercial transactions?",
        a: "Like Muslims in all sales — except wine is treated like grape juice and pork like a sheep for them.",
      },
      {
        q: "What makes salam in cloth valid?",
        a: "Specifying length (ṭūl), width (3arḍ), and fabric type (ruq3a) — all three must be stated.",
      },
    ],
  },
  {
    id: "sarf",
    number: "05",
    title: "Ṣarf",
    arabicTitle: "الصرف",
    subtitle: "Currency Exchange",
    arabicText:
      "الصرف هو البيع إذا كان كل واحد من العوضين من جنس الأثمان · لا بد من قبض العوضين قبل الافتراق.",
    rules: [
      {
        title: "Ṣarf — currency exchange defined",
        body: "A sale where both counter-values are from the genus of thamans (monetary metals: gold and/or silver).",
        accent: "blue",
      },
      {
        title: "Same genus (gold:gold or silver:silver)",
        body: "Must be equal in weight — no tafāḍul. Quality and workmanship (ṣiyāgha) are irrelevant: 10g worked silver = 10g raw silver. Both sides received before parting.",
        accent: "red",
      },
      {
        title: "Different genus (gold:silver)",
        body: "Tafāḍul (unequal amounts) is permitted. But mutual receipt (taqābuḍ) before parting is still obligatory.",
        accent: "green",
      },
      {
        title: "Parting before qabd → contract void",
        body: "If parties separate before receiving either or both counter-values, the contract is void (bāṭil). No transacting with the thaman before receiving it.",
        accent: "red",
      },
      {
        title: "Mujāzafa — bulk gold:silver exchange",
        body: "Selling gold for silver without specifying exact weights (mujāzafa) is permitted, since they are different genera and tafāḍul is allowed.",
        accent: "green",
      },
      {
        title: "Alloy coins — majority rule",
        body: "Silver majority → treated as silver. Gold majority → treated as gold. Base metal (ghish) majority → not treated as dirhams/dinars, tafāḍul between them permitted.",
        accent: "purple",
      },
      {
        title: "Coins go obsolete (kasād) — three opinions",
        body: "AH: sale void (bāṭil). AY: buyer pays value at time of sale. Muḥammad: buyer pays value at last time coins circulated.",
        accent: "amber",
      },
      {
        title: "Partially received silver vessel",
        body: "Contract valid for paid portion, void for unpaid portion. Vessel becomes jointly owned (mushāraka). If part is claimed by a third party (istiḥqāq): buyer may take the remainder at its proportional price, or return everything.",
        accent: "amber",
      },
      {
        title: "The pairing principle in mixed exchanges",
        body: "In any mixed exchange, dirhams match dirhams and dinars match dinars first. Any surplus crosses genera — tafāḍul is ḥalāl there. This prevents hidden ribā in bundled transactions.",
        accent: "purple",
      },
    ],
    tables: [
      {
        headers: ["Scholar", "Currency becomes obsolete after sale"],
        rows: [
          {
            cols: [
              "Abū Ḥanīfa",
              "Sale void (bāṭil) — currency no longer valid",
            ],
          },
          {
            cols: [
              "Abū Yūsuf",
              "Sale valid — buyer pays value at time of sale",
            ],
          },
          {
            cols: [
              "Imām Muḥammad",
              "Sale valid — buyer pays value at last circulation date",
            ],
          },
        ],
      },
      {
        headers: ["Exchange", "Ruling", "Reason"],
        rows: [
          {
            cols: [
              "11 dh for 10 dh + 1 dinar",
              "✓ Valid",
              "10 dh offset 10 dh; 1 dh is cross-genus price for 1 dinar",
            ],
          },
          {
            cols: [
              "2 dh + 1 dinar for 2 dinars + 1 dh",
              "✓ Valid",
              "Each genus matches its own genus first, surplus crosses",
            ],
          },
          {
            cols: [
              "2 good dh + 1 worn dh for 1 good + 2 worn",
              "✓ Valid",
              "Total count equal (3:3); quality within genus irrelevant",
            ],
          },
          {
            cols: [
              "Circulating fulūs (nāfiqa)",
              "✓ Valid without ta3yīn",
              "Market rate determines quantity",
            ],
          },
          {
            cols: [
              "Obsolete fulūs (kāsida)",
              "✗ Requires ta3yīn",
              "Must identify specific coins",
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        q: "What is ṣarf?",
        a: "A sale where both counter-values are from the genus of thamans (monetary metals: gold and/or silver).",
      },
      {
        q: "Same genus ṣarf — what is required?",
        a: "Must be equal in weight. Quality/workmanship irrelevant. Both sides received before parting.",
      },
      {
        q: "Different genus ṣarf — what is required?",
        a: "Tafāḍul permitted. But taqābuḍ (mutual receipt) before parting is still obligatory.",
      },
      {
        q: "What happens if parties part before qabd?",
        a: "The contract is void (bāṭil).",
      },
      {
        q: "Is mujāzafa (bulk gold:silver without specifying weights) permitted?",
        a: "Yes — different genera, tafāḍul allowed.",
      },
      {
        q: "How are alloy coins categorised?",
        a: "By majority component: silver majority → silver; gold majority → gold; base metal majority → neither, tafāḍul permitted.",
      },
      {
        q: "Three opinions on currency going obsolete?",
        a: "AH: sale void. AY: buyer pays value at time of sale. Muḥammad: value at last circulation date.",
      },
      {
        q: "11 dirhams for 10 dirhams + 1 dinar — valid?",
        a: "Yes — 10 dh offset 10 dh (equal), and 1 dh is the cross-genus price for 1 dinar (tafāḍul ḥalāl).",
      },
      {
        q: "Circulating fulūs — do they need ta3yīn?",
        a: "No — sale valid without identifying individual coins. Obsolete fulūs do require ta3yīn.",
      },
      {
        q: "'Half in fulūs, half minus one grain as a half-coin' — AH ruling?",
        a: "AH: entire transaction corrupt (fāsid). AY + Muḥammad: fulūs portion valid, silver half-coin void only.",
      },
      {
        q: "Silver vessel — parties part after partial payment?",
        a: "Contract void for unpaid portion, valid for paid portion. Vessel becomes jointly owned (mushāraka).",
      },
      {
        q: "What is the pairing principle in mixed exchanges?",
        a: "Each genus matches its own genus first. Surplus crosses genera — tafāḍul is ḥalāl there.",
      },
      {
        q: 'What is the "majority rule" for alloy coins?',
        a: "The dominant metal determines the coin's legal category. Base metal majority = not treated as currency at all.",
      },
    ],
  },
];
