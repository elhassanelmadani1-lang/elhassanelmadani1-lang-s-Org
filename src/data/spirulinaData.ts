export interface FAQItem {
  q: string;
  a: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
  science: string;
  icon: string;
}

export interface StepItem {
  title: string;
  desc: string;
}

export interface PackItem {
  id: 'single' | 'double' | 'family';
  title: string;
  desc: string;
  price: number;
  badge?: string;
  bonus?: string;
}

export interface LocalizedCopy {
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  heroCTAOrder: string;
  heroCTAConsult: string;
  trustBadgeSub: string;
  benefitsHeading: string;
  benefitsSub: string;
  ingredientsHeading: string;
  ingredientsSub: string;
  ingredientsText: string;
  phycoTitle: string;
  phycoDesc: string;
  chloroTitle: string;
  chloroDesc: string;
  proteinTitle: string;
  proteinDesc: string;
  howToUseTitle: string;
  howToUseSub: string;
  packagesTitle: string;
  packagesSub: string;
  moroccoDelivery: string;
  extraGift: string;
  consultationIncluded: string;
  orderBtn: string;
  checkoutHeading: string;
  checkoutSub: string;
  checkoutNameLabel: string;
  checkoutAddressLabel: string;
  checkoutPhoneLabel: string;
  checkoutBtnSubmit: string;
  secureCheckoutBadge: string;
  addonsHeading: string;
  addonsSub: string;
  addonToothpasteName: string;
  addonToothpasteDesc: string;
  addonCoffeeName: string;
  addonCoffeeDesc: string;
  faqHeading: string;
  faqSub: string;
  complHeading: string;
  complSub: string;
  backToCatalog: string;
}

export const spirulinaLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  en: {
    heroBadge: "👑 THE KING OF ALKALI SUPERFOODS",
    heroTitle: "The Green Gold of Imperial Vitality & Pure Detox",
    heroSub: "Experience Samira Naturale's premium Organic Spirulina Powder. 100% pure sun-harvested alpine superfood, packed with active chlorophyll, phycocyanin, vegan iron, and complete proteins to cleanse your cells and wake up your natural energy.",
    heroCTAOrder: "Acquire Your Vitality Pack",
    heroCTAConsult: "Free Wellness Consultation",
    trustBadgeSub: "Cultivated in DXN mountain farms. 100% Organic, biological safety verified.",
    benefitsHeading: "Why Nature's Green Gold is a Miracle",
    benefitsSub: "Each teaspoon of Samira Naturale's premium Spirulina delivers an exceptional concentration of live bio-nutrients.",
    ingredientsHeading: "What's Inside Our Premium Green Jar?",
    ingredientsSub: "Absolutely zero chemical synthesis. Only pristine life-giving organic cells.",
    ingredientsText: "Our Spirulina contains 100% pure organic Spirulina platensis powder. Crafted inside pristine alkaline sunpools using natural micro-filtration. Certified free of heavy metals, herbicides, and GMO fillers.",
    phycoTitle: "Active Phycocyanin (20%+)",
    phycoDesc: "The rare blue antioxidant pigment that supports deep immune rejuvenation.",
    chloroTitle: "Pure Chlorophyll",
    chloroDesc: "Nature's blood cleanser, deodorizing and oxygenating cellular tissue.",
    proteinTitle: "65% Complete Plant Protein",
    proteinDesc: "Rich, clean, alkaline protein containing all essential building blocks.",
    howToUseTitle: "Three Daily Sacred Rituals",
    howToUseSub: "How to integrate this organic powder into your daily lifestyle for maximum bio-availability.",
    packagesTitle: "Choose Your Wellness Alignment",
    packagesSub: "Select a package below to start your premium health transformation. Direct speed delivery across Morocco.",
    moroccoDelivery: "Free Express Shipping in Morocco Included",
    extraGift: "Premium Wellness Spoon Gift Included",
    consultationIncluded: "Exclusive Wellness Call with Samira Included",
    orderBtn: "Order Pack & Confirm on WhatsApp",
    checkoutHeading: "Frictionless Direct Checkout",
    checkoutSub: "Confirm your delivery details below to transmit your custom WhatsApp order.",
    checkoutNameLabel: "Your Noble Full Name *",
    checkoutAddressLabel: "Morocco Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Phone Number *",
    checkoutBtnSubmit: "CONFIRM MY LUXURY ORDER ON WHATSAPP",
    secureCheckoutBadge: "🔒 Secure direct-to-WhatsApp delivery. Pay cash-on-delivery upon arrival.",
    addonsHeading: "Enhance Your Daily Ritual (Optional Add-ons)",
    addonsSub: "Check these premium essentials to combine inside your package with no extra shipping fees:",
    addonToothpasteName: "DXN Ganozhi Plus Toothpaste (+85 DH)",
    addonToothpasteDesc: "Premium Ganoderma-infused chemical-free toothpaste for bleeding teeth.",
    addonCoffeeName: "DXN Lingzhi Gourmet Black Coffee (+130 DH)",
    addonCoffeeDesc: "Premium low-acid, low-caffeine espresso infused with organic Reishi mushroom to boost morning focus.",
    faqHeading: "Ancient Wisdom, Answered Secrets",
    faqSub: "Important questions answered regarding our premium DXN Organic Spirulina Powder.",
    complHeading: "Complete Your Wellness Ritual",
    complSub: "Other premium DXN natural essentials hand-selected by Samira for your longevity.",
    backToCatalog: "Back to complete catalog"
  },
  fr: {
    heroBadge: "👑 LE ROI DES SUPER-ALIMENTS ALCALINS",
    heroTitle: "L'Or Vert de la Vitalité Impériale & Détox Cellulaire",
    heroSub: "Découvrez la poudre de Spiruline Biologique Samira Naturale. Un super-aliment 100% pur séché à basse température, gorgé de chlorophylle active, de phycocyanine, de fer hautement bio-disponible et d'acides aminés pour purifier votre sang et libérer votre énergie naturelle.",
    heroCTAOrder: "Recevoir ma Cure Vitalité",
    heroCTAConsult: "Consultation Personnalisée de Santé",
    trustBadgeSub: "Cultivée dans les fermes de montagne DXN. pureté 100% biologique certifiée.",
    benefitsHeading: "Pourquoi Cet Or Vert Est Un Miracle",
    benefitsSub: "Chaque cuillerée de notre spiruline offre une concentration nutritionnelle inégalée sur terre.",
    ingredientsHeading: "Que Renferme Notre Flacon Premium ?",
    ingredientsSub: "Aucune synthèse chimique. Uniquement la force pure des cellules de vie.",
    ingredientsText: "Notre poudre contient à 100% de la Spiruline Platensis biologique d'une pureté exceptionnelle, récoltée dans notre bassin alcalin isolé, exempte de métaux lourds, d'OGM, de pesticides ou de liants synthétiques.",
    phycoTitle: "Phycocyanine Active (20%+)",
    phycoDesc: "L'antioxydant bleu roi exceptionnel qui régénère les globules rouges et protège vos cellules.",
    chloroTitle: "Chlorophylle Pure",
    chloroDesc: "Véritable sang vert naturel qui élimine les odeurs internes et oxygène l'organisme.",
    proteinTitle: "65% Protéines Complètes Végétales",
    proteinDesc: "Des acides aminés d'assimilation directe énergisants, hautement alcalinisants.",
    howToUseTitle: "Trois Rituels de Vie Quotidiens",
    howToUseSub: "Comment intégrer facilement cette poudre pure dans votre journée pour une assimilation parfaite.",
    packagesTitle: "Choisissez Votre Formule de Santé",
    packagesSub: "Sélectionnez un pack ci-dessous pour démarrer votre transformation. Livraison express à domicile partout au Maroc.",
    moroccoDelivery: "Livraison Express Offerte partout au Maroc",
    extraGift: "Cuillère de dosage premium en bambou offerte",
    consultationIncluded: "Mise au point de santé personnalisée offerte avec Samira",
    orderBtn: "Commander & Valider via WhatsApp",
    checkoutHeading: "Formulaire de Commande Express",
    checkoutSub: "Remplissez vos coordonnées ci-dessous pour lancer l'ordre WhatsApp sécurisé.",
    checkoutNameLabel: "Votre Nom Complet Noble *",
    checkoutAddressLabel: "Adresse de Livraison au Maroc *",
    checkoutPhoneLabel: "Numéro de Téléphone WhatsApp *",
    checkoutBtnSubmit: "TRANSMETTRE LA COMMANDE VIA WHATSAPP",
    secureCheckoutBadge: "🔒 Commande directe 100% sécurisée. Paiement cash à la livraison.",
    addonsHeading: "Complétez Votre Rituel (Options sans frais de port)",
    addonsSub: "Ajoutez ces indispensables de bien-être DXN directement dans votre colis sans payer de livraison supplémentaire :",
    addonToothpasteName: "Dentifrice DXN Ganozhi Plus (+85 DH)",
    addonToothpasteDesc: "Dentifrice biologique au Reishi qui soulage les saignements des gencives et blanchit en douceur.",
    addonCoffeeName: "Café Noir Gourmet DXN Lingzhi (+130 DH)",
    addonCoffeeDesc: "Café de torréfaction fine extra-faible en acidité enrichi en Reishi adaptogène pour un focus matinal parfait.",
    faqHeading: "Savoir Ancestral & Réponses Claires",
    faqSub: "Tout ce que vous devez savoir sur notre poudre de Spiruline Biologique DXN.",
    complHeading: "Complétez Votre Routine de Vie",
    complSub: "Les secrets complémentaires d'hygiène et énergie DXN sélectionnés pour vous.",
    backToCatalog: "Retourner au catalogue complet"
  },
  ar: {
    heroBadge: "👑 ملك الأغذية العضوية الخارقة (سوبر فود)",
    heroTitle: "الذهب الأخضر ونبع الحيوية والمناعة الحديدية",
    heroSub: "اكتشف مسحوق السبيرولينا العضوي الفاخر من سميرة ناتورال. سوبر فود طبيعي نقي 100% مستخلص تحت أشعة الشمس المشرقة ومجفف بعناية فائقة، محمل بالكلوروفيل النشط والفيكوسيانين والحديد العضوي عالي الامتصاص لبناء خلايا قوية وتجديد شبابك وحيويتك.",
    heroCTAOrder: "احصل على باقة الحيوية الخاصة بك",
    heroCTAConsult: "استشارة صحية مخصصة ومجانية",
    trustBadgeSub: "مستزرعة في مزارع دي إكس إن الجبلية النقية وخاضعة لأعلى معايير السلامة البيولوجية.",
    benefitsHeading: "لماذا السبيرولينا العضوية كنز حقيقي لصحتك؟",
    benefitsSub: "كل ملعقة صغيرة من هذه الطحالب الذكية تمنح خلايا جسمك تركيزاً غذائياً نادراً يفوق أي طعام آخر على الأرض.",
    ingredientsHeading: "ماذا يختبئ داخل هذا الوعاء الأخضر الثمين؟",
    ingredientsSub: "خالٍ تماماً من الكيماويات والمواد الصناعية. عافية نقية من خلايا الطبيعة.",
    ingredientsText: "تحتوي تركيبتنا على بودرة السبيرولينا بلاتينس العضوية بنسبة 100%. مستخرجة بلطف من أحواض مياه عذبة نقية ومكثفة بالليزر الطبيعي، خالية من الشوائب والمعادن الضارة أو أي ملونات كيميائية.",
    phycoTitle: "الفيكوسيانين النشط بنسبة (+20%)",
    phycoDesc: "الصبغة الزرقاء النادرة المضادة للأكسدة التي تدعم تجديد الخلايا الجذعية وتقوي النخاع الشوكي.",
    chloroTitle: "الكلوروفيل الطبيعي النقي",
    chloroDesc: "الدم الأخضر الذي يطهر الجهاز الهضمي، يعقم الدم، ويزيل أي روائح غير مستحبة من الفم والجسم.",
    proteinTitle: "65% بروتين نباتي كامل متكامل",
    proteinDesc: "أسرع بروتين أحماض أمينية عالي القيمة يُمتص فوراً لتغذية العضلات ومنع الهزال.",
    howToUseTitle: "ثلاثة طقوس يومية مقدسة للامتصاص المثالي",
    howToUseSub: "كيفية دمج هذه البودرة السحرية في يومك للحصول على أقصى فائدة لصحتك ونشاطك.",
    packagesTitle: "اختر الباقة المناسبة لعافيتك وعائلتك",
    packagesSub: "حدد العرض المفضل لديك لبدء رحلة التغيير الصحي. شحن سريع ومجاني لكافة مدن المغرب.",
    moroccoDelivery: "توصيل سريع مجاني مدمج لكافة المدن المغربية",
    extraGift: "ملعقة خشبية فاخرة لتحديد الجرعة هدية مجانية مدمجة",
    consultationIncluded: "استشارة ومتابعة هاتفية مخصصة ومجانية معك مباشرة من لالة سميرة",
    orderBtn: "طلب الباقة وتأكيد الشراء عبر واتساب",
    checkoutHeading: "الطلب الفوري ومباشر في صفحة واحدة",
    checkoutSub: "يرجى تعبئة معلوماتك الحقيقية هنا لنقوم بتوصيل الطلب إليك بكل أمان وسرعة.",
    checkoutNameLabel: "الاسم الكامل الكريم للمستلم *",
    checkoutAddressLabel: "عنوان التوصيل أو المدينة بالدقة لضمان سرعة التوصيل *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط لتأكيد الاتصال والمتابعة *",
    checkoutBtnSubmit: "إرسال وتأكيد الطلب الفوري عبر واتساب",
    secureCheckoutBadge: "🔒 طلب مشفر وآمن 100%. الدفع نقداً عند التوصيل والاستلام عند باب منزلك.",
    addonsHeading: "عزز طقوسك اليومية بأفضل بدائل العناية الطبية (اختياري)",
    addonsSub: "يمكنك إضافة هذه المنتجات لتعزيز صحتك في نفس الطرد مع شحن مجاني شامل وبدون رسوم إضافية:",
    addonToothpasteName: "معجون أسنان دي إكس إن جانوزي بلس (+85 درهم)",
    addonToothpasteDesc: "بديل طبيعي راقٍ بمستخلص الفطر الريشي والنعناع لتقوية نزيف اللثة وتبييض الأسنان بشكل صحي.",
    addonCoffeeName: "قهوة دي إكس إن لينجزي السوداء 2 في 1 (+130 درهم)",
    addonCoffeeDesc: "قهوة فاخرة حارقة للدهون تمنحك طاقة وتركيزاً دون رجفة أو حموضة للمعدة وبنسبة كافيين ضئيلة.",
    faqHeading: "إجابات علمية وأسرار الحيوية والصحة",
    faqSub: "الأسئلة الشائعة التي تهمك حول جودة واستعمال مسحوق السبيرولينا العضوي دي إكس إن.",
    complHeading: "اكتمل رحلتك الصحية بمنتجاتنا المتكاملة",
    complSub: "بدائل تجميلية وحيوية طبيعية فاخرة ومكملة لنظامك الصحي من لالة سميرة.",
    backToCatalog: "الرجوع لتصفح الكاتالوج العام مجدداً"
  }
};

export const benefitsData: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  en: [
    {
      title: "Intense Cellular Detox",
      desc: "High levels of chlorophyll and rare Phycocyanin bond with heavy metals and toxins, washing them safely out of your blood and organs.",
      science: "Chlorophyll & Phycocyanin active",
      icon: "ShieldAlert"
    },
    {
      title: "Endless Energy & Stamina",
      desc: "Packed with organic plantic iron and vitamin B12, directly stimulating hemoglobin production to eliminate fatigue and boost muscle power.",
      science: "High Bio-Iron and B-Complex",
      icon: "Zap"
    },
    {
      title: "Unshakable Immune Guard",
      desc: "Provides all 8 essential amino acids, activating antibodies and defense cells to build an ironclad shield against seasonal threats.",
      science: "8 Essential Amino Acids",
      icon: "ShieldCheck"
    },
    {
      title: "Radiant Skin & Hair Glow",
      desc: "Rich in beta-carotenes and antioxidants that combat cellular aging and revitalize skin radiance from the inside out.",
      science: "High Beta-Carotenes",
      icon: "Sparkles"
    }
  ],
  fr: [
    {
      title: "Détoxification Cellulaire",
      desc: "La chlorophylle active et la Phycocyanine se lient aux métaux lourds et toxines pour les éliminer en toute sécurité de votre système sanguin.",
      science: "Chlorophylle & Phycocyanine pures",
      icon: "ShieldAlert"
    },
    {
      title: "Énergie Nouvelle & Endurance",
      desc: "Gorgé de fer organique végétal et de vitamines B12, stimulant l'oxygénation sanguine et éliminant la fatigue chronique.",
      science: "Haute teneur en Fer et Vitamines B",
      icon: "Zap"
    },
    {
      title: "Bouclier Immunitaire Royal",
      desc: "Apporte les 8 acides aminés essentiels que le corps ne peut synthétiser, boostant instantanément vos lymphocytes de défense.",
      science: "8 Acides Aminés Essentiels",
      icon: "ShieldCheck"
    },
    {
      title: "Jeunesse de la Peau & Cheveux",
      desc: "Riche en bêta-carotènes et antioxydants puissants pour réparer les cellules, stopper l'anémie et redonner un éclat radieux à votre peau.",
      science: "Puissants Bêta-carotènes",
      icon: "Sparkles"
    }
  ],
  ar: [
    {
      title: "تنقية عميقة من السموم والمعادن",
      desc: "الكلوروفيل النشط ومضاد الأكسدة النادر (الفيكوسيانين) يتحدان مع السموم والمعادن الثقيلة في جسمك ويطردانها خارج الدم والخلية لتنقية أعضائك الداخلية.",
      science: "كلوروفيل نشط وفيكوسيانين مضاد للأكسدة",
      icon: "ShieldAlert"
    },
    {
      title: "طاقة ونشاط لا ينفدان",
      desc: "غنية جداً بالحديد النباتي المتكامل وفيتامينات ب12 المركبة مما يزيد من إنتاج الهيموجلوبين في الدم ويقضي على التعب المزمن وفقر الدم تماماً.",
      science: "حديد عضوي طبيعي وتركيز فيتامين ب",
      icon: "Zap"
    },
    {
      title: "درع مناعي لا يقهر",
      desc: "تمد جسمك بجميع الأحماض الأمينية الأساسية الثمانية التي لا يستطيع تصنيعها بمفرده، مما يقوي كفاءة الكريات البيضاء والأجسام المضادة لصد الأمراض.",
      science: "8 أحماض أمينية كاملة الامتصاص",
      icon: "ShieldCheck"
    },
    {
      title: "شعر كثيف وبشرة مشرقة وشابة",
      desc: "تحتوي على البيتا كاروتين ومضادات الأكسدة التي محاربة تلف الخلايا وتمنح بشرتك نضارة خلابة وتقوي بصيلات الشعر لينمو بكثافة وصحة.",
      science: "مستويات مرتفعة من البيتا كاروتين",
      icon: "Sparkles"
    }
  ]
};

export const stepsData: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  en: [
    {
      title: "1. The Morning Qi Shot",
      desc: "Mix 1/2 teaspoon into a glass of warm water with a squeeze of fresh lemon. Consume on an empty stomach to reset alkaline balance."
    },
    {
      title: "2. The Vitality Power Shake",
      desc: "Blend 1 full teaspoon with a banana, dates, almond milk, and a pinch of cinnamon. Fantastic as pre-workout energy or afternoon fuel."
    },
    {
      title: "3. The Green Glow Bowl",
      desc: "Sprinkle lightly over fresh avocado toast, green salads, or a bowl of natural yogurt to convert your meal into a vitamin powerhouse."
    }
  ],
  fr: [
    {
      title: "1. L'Élixir de l'Aube (Détox)",
      desc: "Mélangez 1/2 cuillère à café dans un grand verre d'eau tiède avec un filet de citron frais. À jeun pour rééquilibrer le pH."
    },
    {
      title: "2. Le Shaker d'Énergie Vitalité",
      desc: "Mixez 1 cuillère à café avec une banane, des dattes, du lait d'amande et une pincée de cannelle. Parfait avant le sport ou l'après-midi."
    },
    {
      title: "3. Le Bol de Beauté Nourrissant",
      desc: "Saupoudrez délicatement sur vos toasts d'avocat, salades ou bol de yaourt pour un concentré immédiat de micronutriments."
    }
  ],
  ar: [
    {
      title: "1. طقس الفجر (لتطهير الجسم والدم)",
      desc: "امزج نصف ملعقة صغيرة من السبيرولينا في كوب ماء دافئ مع بضع قطرات من الليمون الطازج بـعـد الاستيقاظ مباشرة على معدة فارغة لتوازن المعدة وتعقيمها."
    },
    {
      title: "2. عصير النشاط والقوة العضلية",
      desc: "اخفق ملعقة صغيرة في العصير المفضل لديك (موز، تمر، حليب اللوز، رشة قرفة). ممتاز جداً كطاقة طبيعية قبل التمرين أو لتجاوز خمول منتصف اليوم."
    },
    {
      title: "3. طبق التغذية المتكاملة والجمال",
      desc: "رش كمية خفيفة فوق سلطة الخضار الطازجة، أو خبز الأفوكادو الساخن، أو كوب الزبادي الطبيعي ليتحول طبقك فوراً لمركز طاقة غني بالفيتامينات."
    }
  ]
};

export const packagePacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  en: [
    {
      id: "single",
      title: "Vitality Starter Pack",
      desc: "Perfect for a 1-month trial of pure natural energy.",
      price: 260
    },
    {
      id: "double",
      title: "Imperial Renewal Pack",
      desc: "Ideal 2-month treatment. Perfect for deep detox and results.",
      price: 520,
      badge: "⭐ MOST POPULAR",
      bonus: "Free Morocco Shipping"
    },
    {
      id: "family",
      title: "Family Immunity Ritual",
      desc: "Full family wellness kit. Complete cure for maximum shielding.",
      price: 780,
      badge: "👑 BEST VALUE",
      bonus: "Free Shipping + Premium Wood Spoon"
    }
  ],
  fr: [
    {
      id: "single",
      title: "Pack Découverte Énergie",
      desc: "Idéal pour tester la force de la spiruline pure sur 1 mois.",
      price: 260
    },
    {
      id: "double",
      title: "Pack Cure Impériale",
      desc: "Cure recommandée de 2 mois pour une détox profonde et des résultats durables.",
      price: 520,
      badge: "⭐ LE PLUS POPULAIRE",
      bonus: "Livraison Offerte"
    },
    {
      id: "family",
      title: "Pack Immunité Familiale",
      desc: "3 grands flacons de pure santé. Cure souveraine pour protéger les vôtres.",
      price: 780,
      badge: "👑 MEILLEURE VALEUR",
      bonus: "Livraison Offerte + Doseur Bambou"
    }
  ],
  ar: [
    {
      id: "single",
      title: "باقة الحيوية الفردية (عبوة واحدة)",
      desc: "عبوة واحدة تكفي لمدة شهر لتجربة طاقة ونشاط السبيرولينا العضوية النقية.",
      price: 260
    },
    {
      id: "double",
      title: "باقة التجديد والديتوكس (عبوتين)",
      desc: "كورس متكامل لمدة شهرين لتنظيف الجسم العميق وجني الفوائد والنتائج المستدامة.",
      price: 520,
      badge: "⭐ الأكثر طلباً وشعبية",
      bonus: "توصيل مجاني شامل"
    },
    {
      id: "family",
      title: "الباقة العائلية والمناعة (3 عبوات)",
      desc: "3 عبوات عائلية ممتازة لحماية مناعة عائلتك وصحتهم المتكاملة لشهور طويلة.",
      price: 780,
      badge: "👑 الباقة الذهبية - أفضل توفير",
      bonus: "توصيل مجاني + ملعقة خشبية هدية"
    }
  ]
};

export const faqItems: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  en: [
    {
      q: "How is Samira Naturale Spirulina different from normal pharmacy products?",
      a: "Most commercial spirulina is bound with chemical starches, heated excessively, and sourced from polluted industrial setups. Samira Naturale distributes 100% pure DXN Spirulina powder, cultivated in mountain-wind-cleansed, high-alkaline sun-farms, dried at ultra-low heat to preserve live enzymes, bio-iron, and antioxidants. It contains absolutely zero synthetic binders, offering 100% bio-availability."
    },
    {
      q: "What are the first benefits I will feel after starting?",
      a: "Within the first 3 to 7 days, you will feel a natural, steady lift in your daily focus and physical stamina, free from the jitters of caffeine. Over 2 to 4 weeks of continuous use, you will see a reduction in chronic fatigue, improved blood test markers (especially hemoglobin levels), stronger hair growth, and a beautiful natural skin radiance due to cellular detoxification."
    },
    {
      q: "How is delivery processed in Morocco?",
      a: "We offer express, safe shipping to all cities in Morocco (Casablanca, Rabat, Marrakech, Tangier, Agadir, Fez, Oujda, etc.). Your package is hand-prepared with care and dispatched within 24 to 48 hours. You pay Cash-On-Delivery when the driver hands you the package."
    },
    {
      q: "Who can safely consume this organic powder?",
      a: "Because it is a 100% raw, wholesome organic food (not a synthetic chemical drug), it is safe and highly recommended for everyone! It is outstanding for pregnant and lactating women to supply natural organic iron/folate, excellent for growing children to load essential amino acids, fantastic for elderly people to guard muscle strength, and a must-have for active athletes to power muscle recovery."
    }
  ],
  fr: [
    {
      q: "Quelle est la différence avec la spiruline classique du commerce ?",
      a: "La majorité des spirulines en pharmacie sont frelatées, compressées à chaud avec des liants synthétiques ou cultivées dans des eaux stagnantes industrielles. La Spiruline distribuée par Samira Naturale provient des fermes DXN, réputées pour leurs installations de culture sous soleil à haute altitude, filtrées scientifiquement. Séchée à froid pour préserver intacts ses principes actifs, elle offre une digestibilité de 100% sans aucun contaminant."
    },
    {
      q: "Quels résultats vais-je ressentir en premier ?",
      a: "Dès la première semaine, vous ressentirez un surcroît d'énergie naturelle sans excitation ni palpitation nerveuse. Votre digestion s'identifiera. En 2 à 4 semaines, les symptômes de carence en fer s'estoppent, les cheveux se fortifient, la peau s'assainit et l'immunité générale résiste face aux coups de fatigue et maladies saisonnières."
    },
    {
      q: "Comment se déroule la livraison au Maroc ?",
      a: "Nous livrons toutes les villes (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, Oujda, etc.) sous 24h à 48h. Le colis vous est remis en main propre, et vous payez en espèces (Cash On Delivery) uniquement à la réception à votre porte."
    },
    {
      q: "Qui peut en consommer au quotidien ?",
      a: "Étant un aliment naturel hautement biocompatible (et non un médicament chimique de synthèse), la spiruline est idéale pour toute la famille. Elle est essentielle pour les femmes enceintes et allaitantes (pour le fer naturel), les enfants en croissance, les personnes âgées contre l'affaiblissement musculaire, et les sportifs pour la reconstruction musculaire."
    }
  ],
  ar: [
    {
      q: "ما الذي يميز سبيرولينا سميرة ناتورال عن الحبوب بالمطاحن والصيدليات؟",
      a: "أغلب حبوب السبيرولينا التجارية رخيصة السعر يتم كبسها حرارياً بمواد تنشئ غراء صناعي أو تستزرع في بحيرات راكدة ملوثة. سبيرولينا دي إكس إن التي نوفرها لكم هي طحالب نقية مجففة بتقنية التجميد والترشيح الطبيعي تحت شمس الجبال الصافية، خالية تماماً من الشوائب والملونات وتعمل بكفاءة 100% داخل خلايا جسمك دون أي عبء هضمي."
    },
    {
      q: "ما هي أولى الفوائد التي سأشعر بها بصفتي مستهلكاً جديداً؟",
      a: "في الأسبوع الأول، ستلاحظ نشاطاً صافياً مدهشاً وتلاشياً تاماً للكسل والخمول الصباحي دون الحاجة للإفراط في المنبهات. ومع إتمام الشهر الأول، ستختفي آثار فقر الدم والأنيميا وتتسع كفاءة رئتيك وتتحسن نظافة جهازك الهضمي ويصبح شعرك وبشرتك أكثر حيوية ونضارة."
    },
    {
      q: "كيف يتم توصيل الطلب وطريقة الدفع في المغرب المتوفرة؟",
      a: "نوفر توصيلاً سريعاً وآمناً لكل مدن المغرب (الدار البيضاء، الرباط، طنجة، مراكش، أكادير، فاس، وجدة، وغيرها) في غضون 24 إلى 48 ساعة فقط. الدفع كاش عند الاستلام بالدرهم المغربي عندما يسلمك الموزع العبوة عند عتبة بيتك."
    },
    {
      q: "من هم الأشخاص الذين يمكنهم تناول السبيرولينا بأمان؟",
      a: "السبيرولينا غذاء طبيعي سوبر فود متكامل وليس عقاقير كيماوية، لذا هي آمنة وموصى بها بشدة للجميع! هي رائعة للنساء الحوامل والمرضعات لإمداد الجنين بالحديد والجرعات الضرورية، ممتازة للأطفال لتركيب الأحماض الأمينية اللازمة لنمو سليم، مثالية للرياضيين لترميم العضلات، وممتازة لكبار السن لتوفير طاقة صحية."
    }
  ]
};
