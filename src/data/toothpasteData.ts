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
  reishiTitle: string;
  reishiDesc: string;
  mintTitle: string;
  mintDesc: string;
  pureTitle: string;
  pureDesc: string;
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
  addonSpirulinaName: string;
  addonSpirulinaDesc: string;
  addonCoffeeName: string;
  addonCoffeeDesc: string;
  faqHeading: string;
  faqSub: string;
  complHeading: string;
  complSub: string;
  backToCatalog: string;
}

export const toothpasteLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  en: {
    heroBadge: "👑 CROWN JEWEL OF NATURAL ORAL HYGIENE",
    heroTitle: "Premium Ganozhi Ganoderma Plus Toothpaste",
    heroSub: "Experience the supreme elegance of botanical oral care. Infused with pristine organic Ganoderma (Reishi) extract and refreshing food-grade spearmint oil. Free of fluoride, high-abrasive silica, saccharin, and chemical colorants to protect delicate gums, eliminate bad breath, and promote dazzling natural dental health.",
    heroCTAOrder: "Acquire Your Botanical Toothpaste Pack",
    heroCTAConsult: "Free Health Consultation with Samira",
    trustBadgeSub: "Enriched with 100% certified organic Ganoderma. Free from high abrasive elements.",
    benefitsHeading: "Why Ganozhi is the Golden Standard of Modern Dental Care",
    benefitsSub: "A non-toxic, highly concentrated biological formula designed for luxury daily protection and comprehensive wellness.",
    ingredientsHeading: "Pristine Luxury Formula Secrets",
    ingredientsSub: "Absolutely zero synthetic abrasives. Rich in cellular active nourishment.",
    ingredientsText: "DXN Ganozhi Plus Toothpaste is formulated using premium Ganoderma lucidum extract, natural spearmint herbal oil, and food-grade ingredients. It maintains a clean, balanced pH inside your oral cavity, reinforcing the natural defense mechanisms of your gums.",
    reishiTitle: "Rich Ganoderma (Reishi) Extract",
    reishiDesc: "Soothes, moisturizes, and nourishes premium gum tissues and enamel naturally.",
    mintTitle: "Natural Herbal Spearmint",
    mintDesc: "Triggers deep, long-lasting biological freshness while keeping breath crisp.",
    pureTitle: "100% Fluoride & Silica-Free",
    pureDesc: "Protects tooth enamel from harsh mechanical wear. Completely safe to swallow.",
    howToUseTitle: "Simple Rituals for Premium Longevity",
    howToUseSub: "How to use this concentrated formula to elevate your daily hygiene routine.",
    packagesTitle: "Choose Your Premium Dental Wellness Kit",
    packagesSub: "Select a package below to start your premium oral rejuvenation. Fresh stock, fast and free delivery across Morocco.",
    moroccoDelivery: "Free Express Shipping in Morocco Included",
    extraGift: "Premium Eco-friendly Toothbrush Gift Included",
    consultationIncluded: "Exclusive Wellness Call with Samira Included",
    orderBtn: "Order Pack & Confirm on WhatsApp",
    checkoutHeading: "Frictionless Direct Checkout",
    checkoutSub: "Confirm your delivery details below to transmit your custom WhatsApp order.",
    checkoutNameLabel: "Your Noble Full Name *",
    checkoutAddressLabel: "Morocco Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Phone Number *",
    checkoutBtnSubmit: "CONFIRM MY LUXURY ORDER ON WHATSAPP",
    secureCheckoutBadge: "🔒 Secure direct-to-WhatsApp delivery. Pay cash-on-delivery upon arrival.",
    addonsHeading: "Enhance Your Daily Routine (Optional Add-ons)",
    addonsSub: "Check these premium essentials to combine inside your package with no extra shipping fees:",
    addonSpirulinaName: "DXN Organic Spirulina Powder (+260 DH)",
    addonSpirulinaDesc: "Pure green superfood packed with plant proteins and iron for systemic vitality and detox.",
    addonCoffeeName: "DXN Lingzhi Gourmet Black Coffee (+130 DH)",
    addonCoffeeDesc: "Premium low-acid, low-caffeine espresso infused with organic Reishi mushroom to boost morning focus.",
    faqHeading: "Botanical Wisdom, Answered Secrets",
    faqSub: "Important questions answered regarding our premium DXN Ganozhi Ganoderma Plus Toothpaste.",
    complHeading: "Complete Your Wellness Ritual",
    complSub: "Other premium DXN natural essentials hand-selected by Samira for your longevity.",
    backToCatalog: "Back to complete catalog"
  },
  fr: {
    heroBadge: "👑 LE JOYAU DE L'HYGIÈNE BUCCO-DENTAIRE NATURELLE",
    heroTitle: "Dentifrice de Prestige Ganozhi Ganoderma Plus",
    heroSub: "Offrez-vous le raffinement ultime d'un rituel botanique d'exception. Infusé d'extrait de Ganoderma (Reishi) biologique d'une pureté absolue et d'essence de menthe douce. Formulé sans fluor, sans silice abrasive, sans saccharine ni colorant chimique pour dorloter vos gencives, chasser l'haleine lourde et polir vos dents sainement.",
    heroCTAOrder: "Bénéficier de Mon Coffret Ganozhi",
    heroCTAConsult: "Entretien d'Hygiène Offert avec Samira",
    trustBadgeSub: "Enrichi en Ganoderma 100% biologique certifié. Formulation douce sans agents abrasifs.",
    benefitsHeading: "Pourquoi le Dentifrice Ganozhi est la Référence Absolue",
    benefitsSub: "Une formule hautement concentrée, biologique et comestible pour une protection complète et un confort gingival durable.",
    ingredientsHeading: "Les Secrets de Notre Formule Pure",
    ingredientsSub: "Aucun ingrédient nocif pour l'émail. Uniquement des actifs précieux.",
    ingredientsText: "Le dentifrice DXN Ganozhi Plus utilise un processus de fabrication de haute technologie pour intégrer le Reishi et l'huile essentielle de menthe naturelle. Il respecte et stimule l'écosystème bactérien sain de la bouche tout en purifiant l'haleine.",
    reishiTitle: "Extrait Pur de Ganoderma (Reishi)",
    reishiDesc: "Soutient et régénère les gencives fragiles, en apaisant les irritations localisées.",
    mintTitle: "Menthe Douce Naturelle",
    mintDesc: "Libère une fraîcheur botanique vivifiante de longue durée dès la première glisse.",
    pureTitle: "Sans Fluor ni Silice Abrasive",
    pureDesc: "Une formule protectrice délicate qui n'érode pas l'émail et convient même aux tout-petits.",
    howToUseTitle: "Trois Gestes Quotidiens d'Exception",
    howToUseSub: "Adoptez une gestuelle haut de gamme pour exploiter toute la puissance du Ganoderma.",
    packagesTitle: "Choisissez Vos Soins de Prestige",
    packagesSub: "Sélectionnez votre formule ci-dessous. Livraison express sécurisée et gratuite à domicile au Maroc.",
    moroccoDelivery: "Livraison Express Offerte partout au Maroc",
    extraGift: "Brosse à dents écologique en bambou offerte",
    consultationIncluded: "Mise au point d'hygiène buccale de 15 min offerte avec Samira",
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
    addonSpirulinaName: "Poudre de Spiruline Biologique DXN (+260 DH)",
    addonSpirulinaDesc: "Super-aliment vert alcalinisant, riche en fer et minéraux pour l'énergie interne.",
    addonCoffeeName: "Café Noir Gourmet DXN Lingzhi (+130 DH)",
    addonCoffeeDesc: "Café de torréfaction fine extra-faible en acidité enrichi en Reishi adaptogène pour un focus matinal parfait.",
    faqHeading: "Savoir Botanique & Réponses Claires",
    faqSub: "Tout ce que vous devez savoir sur notre dentifrice biologique Ganozhi Ganoderma Plus.",
    complHeading: "Complétez Votre Routine de Vie",
    complSub: "Les secrets complémentaires d'hygiène et énergie DXN sélectionnés pour vous.",
    backToCatalog: "Retourner au catalogue complet"
  },
  ar: {
    heroBadge: "👑 تاج الوقاية والعناية الطبيعية الراقية بالفم",
    heroTitle: "معجون الأسنان الفاخر جانوزي بالجانوديرما بلس",
    heroSub: "استمتع بالفخامة المطلقة لطقوس العناية النباتية الفائقة بأسنانك ولثتك. تركيبة غنية بخلاصة فطر الجانوديرما (الريشي) العضوي النقي وزيت النعناع الطبيعي. خالٍ تماماً من الفلورايد، السيليكا الخشنة، السكرين، والألوان الكيميائية ليوفر حماية عميقة للثة، يقضي على البكتيريا الضارة، ويمنحك نفساً عذباً ونضارة صحية.",
    heroCTAOrder: "احصل على باقة معجون جانوزي الفاخر",
    heroCTAConsult: "استشارة ومتابعة مباشرة مجانية مع لالة سميرة",
    trustBadgeSub: "معزز بنسبة 100% بخلاصة الفطر الريشي العضوي المعتمد. تركيبة لطيفة خالية من الكاشطات النخرية.",
    benefitsHeading: "لماذا يعتبر معجون جـانوزي المعيار الذهبي لجمال الفم؟",
    benefitsSub: "تركيبة بيولوجية مركزة للغاية ومتعددة الفوائد، غنية بصيغ الشفاء الطبيعية لحماية اللثة والعناية الأسنان.",
    ingredientsHeading: "أسرار التركيبة العلاجية الفاخرة",
    ingredientsSub: "خالٍ تماماً من الكواشط الكيميائية السامة. غني بمغذيات دقيقة مفعمة بالحيوية.",
    ingredientsText: "يجمع معجون أسنان جانوزي بلس دي إكس إن بين فوائد الفطر الريشي الغني بالمضادات والمهدئات الطبيعية وزيت النعناع المنعش. تركيبته اللطيفة ذات رغوة ناعمة ممتازة لتطهير الفم دون التسبب في خدش رقة المينا أو تهييج اللثة.",
    reishiTitle: "خلاصة فطر الجانوديرما (الريشي) المركز",
    reishiDesc: "يغذي أنسجة اللثة بعمق ويساعد على التئام تقرحات الفم ومكافحة الالتهابات والنزيف بلطف.",
    mintTitle: "زيت النعناع العشبي الطبيعي",
    mintDesc: "يكافح روائح الفم المزعجة ويمنح تجويف فمك انتعاشاً يدوم طويلاً طوال اليوم.",
    pureTitle: "خالٍ 100% من الفلورايد والسيليكا الخشنة",
    pureDesc: "آمن وصحي تماماً ولا يحتوي على مبيضات كيميائية ضارة، مما يجعله آمناً كلياً للأطفال عند البلع الخفيف.",
    howToUseTitle: "ثلاثة طقوس وعادات يومية لابتسامة صحية",
    howToUseSub: "كيفية تطبيق هذا المعجون الفاخر المركز لتحقيق أقصى درجات النظافة والطهور.",
    packagesTitle: "اختر باقة العناية والصحة الفموية الفائقة لديرة عائلتك",
    packagesSub: "حدد العرض المناسب لحماية صحة عائلتك بأسعار ممتازة شاملة للتوصيل والضمان لباب المنزل بالمغرب.",
    moroccoDelivery: "توصيل سريع مجاني مدمج لكافة المدن المغربية",
    extraGift: "فرشاة أسنان خشبية فاخرة وصديقة للبيئة هدية مجانية مدمجة",
    consultationIncluded: "استشارة ومتابعة هاتفية مخصصة ومجانية معك مباشرة من لالة سميرة",
    orderBtn: "طلب الباقة وتأكيد الشراء عبر واتساب",
    checkoutHeading: "الطلب الفوري ومباشر في صفحة واحدة",
    checkoutSub: "يرجى تعبئة معلوماتك الحقيقية هنا لنقوم بتوصيل الطلب إليك بكل أمان وسرعة.",
    checkoutNameLabel: "الاسم الكامل الكريم للمستلم *",
    checkoutAddressLabel: "عنوان التوصيل أو المدينة بالدقة لضمان سرعة التوصيل *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط لتأكيد الاتصال والمتابعة *",
    checkoutBtnSubmit: "إرسال وتأكيد الطلب الفوري عبر واتساب",
    secureCheckoutBadge: "🔒 طلب مشفر وآمن 100%. الدفع نقداً عند التوصيل والاستلام عند باب منزلك.",
    addonsHeading: "عزز طقوسك اليومية بأفضل المكملات الحيوية العضوية (اختياري)",
    addonsSub: "يمكنك إضافة هذه المنتجات لتعزيز صحتك في نفس الطرد مع شحن مجاني شامل وبدون رسوم إضافية:",
    addonSpirulinaName: "مسحوق السبيرولينا العضوي دي إكس إن (+260 درهم)",
    addonSpirulinaDesc: "سوبر فود صحي ممتاز غني بالحديد الطبيعي والبروتينات لبناء مناعة ونشاط لا ينضب.",
    addonCoffeeName: "قهوة دي إكس إن لينجزي السوداء 2 في 1 (+130 درهم)",
    addonCoffeeDesc: "قهوة عشبية فاخرة تمنحك نشاطاً ذهنياً فائقاً دون التسبب في حموضة أو قلق للمعدة.",
    faqHeading: "إجابات وحقائق العناية بالفم الطبيعية",
    faqSub: "الأسئلة الشائعة التي تهمك حول جودة واستعمال معجون الأسنان جانوزي بلس بالريشي الطبيعي.",
    complHeading: "اكتمل رحلتك الصحية بمنتجاتنا المتكاملة",
    complSub: "بدائل تجميلية وحيوية طبيعية فاخرة ومكملة لنظامك الصحي من لالة سميرة.",
    backToCatalog: "الرجوع لتصفح الكاتالوج العام مجدداً"
  }
};

export const toothpasteBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  en: [
    {
      title: "Gum Fortification & Soothing",
      desc: "The adaptogenic active triterpenes in Reishi extract reduce gum sensitivity, encourage capillary healing, and calm localized redness naturally.",
      science: "Active Triterpenoids from organic Reishi",
      icon: "ShieldCheck"
    },
    {
      title: "Biological Plaque Control",
      desc: "Protects and polishes tooth enamel carefully without using abrasive silica, avoiding microscopic scratches of the dentin.",
      science: "Zero silica non-abrasive action",
      icon: "Activity"
    },
    {
      title: "Absolute Fresh Breath",
      desc: "Pure food-grade spearmint extract targets odor-producing compounds, giving a smooth and long-lasting fresh aroma rather than masking chemicals.",
      science: "Pure Mint herbal extracts",
      icon: "Sparkles"
    },
    {
      title: "Highly Concentrated Value",
      desc: "Contains absolutely no water fillers or starch thickening agents. A tiny pea-sized drop is enough for deep, rich therapeutic cleaning.",
      science: "Concentrated biological density",
      icon: "Award"
    }
  ],
  fr: [
    {
      title: "Fortification Active des Gencives",
      desc: "Les triterpènes bio-actifs du Ganoderma diminuent la sensibilité des gencives et calment les micro-saignements et aphtes de manière apaisante.",
      science: "Triterpénoïdes actifs du Reishi biologique",
      icon: "ShieldCheck"
    },
    {
      title: "Blanchiment & Nettoyage Doux",
      desc: "Polit l'émail délicatement sans silice agressive. Évite la fatigue mécanique des surfaces et élimine en douceur les dépôts comme le tartre.",
      science: "Formule non-abrasive de haute technologie",
      icon: "Activity"
    },
    {
      title: "Fraîcheur Botanique Durable",
      desc: "L'essence naturelle de menthe verte cible les débris alimentaires et les molécules odorantes, créant une haleine délicieusement saine.",
      science: "Essence pure de menthe sylvestre",
      icon: "Sparkles"
    },
    {
      title: "Rendement Économique Triplé",
      desc: "Sans eau de remplissage ni poudres inertes de charge. Une noisette infime suffit pour créer un écran protecteur optimal.",
      science: "Haute concentration d'actifs cellulaires",
      icon: "Award"
    }
  ],
  ar: [
    {
      title: "تقوية اللثة وعلاج النزيف والتقرحات",
      desc: "المركبات العضوية النشطة (التريتربينات) بالفطر الريشي تقلل بشكل ملحوظ من حساسية وتورم اللثة، وتحفز التئام الأوعية الشعرية للفم والأسنان.",
      science: "مركبات الفطر الريشي العضوي الطبيعي المضاد للالتهاب",
      icon: "ShieldCheck"
    },
    {
      title: "تنظيف وتبييض آمن ومثالي",
      desc: "ينظف طبقة المينا بلطف ويصقل أسطح الأسنان دون كحت أو التسبب في تشققات مجهرية لكونه خالياً من السليكا الخشنة الحادة.",
      science: "عناية خالية من مادة السيليكا الكاشطة للمينا",
      icon: "Activity"
    },
    {
      title: "نفس نقي وانتعاش طبيعي عميق",
      desc: "زيت النعناع الطبيعي عالي الجودة يدوم لفترات تزيد عن 12 ساعة، طارداً للروائح الكريهة ويترك الفم برائحة عشبية مميزة ومحفزة.",
      science: "خلاصة زيت النعناع العشبي المنعش",
      icon: "Sparkles"
    },
    {
      title: "صيغة مركزة وقيمة اقتصادية مضاعفة",
      desc: "معجون جانوزي نقي وثقيل القوام، لا يحتوي على الماء كحشو أو النشا، لذا فقط كمية صغيرة جداً بحجم حبة البازلاء تكفي لتنظيف كامل ومثالي للفم.",
      science: "كثافة وقوة المكونات النشطة العالية",
      icon: "Award"
    }
  ]
};

export const toothpasteSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  en: [
    {
      title: "1. The Pea-Sized Discipline",
      desc: "Place only a small, pea-sized bead of Ganozhi toothpaste on your brush. Because it contains 100% active compounds, you do not need a full line."
    },
    {
      title: "2. The Delicate 2-Minute Sweep",
      desc: "Brush gently using sweeping circular motions from the gums towards the teeth tip. Allow the Ganoderma-rich lather to absorb for outstanding cell protection."
    },
    {
      title: "3. Direct Gum Massage Therapy",
      desc: "If suffering from delicate, bleeding gums, apply a tiny drop directly on your clean finger and massage the gum tissues before bedtime. Do not rinse immediately."
    }
  ],
  fr: [
    {
      title: "1. La Règle de la Noisette",
      desc: "Déposez une quantité infime (de la taille d'un petit pois) sur votre brosse. Sa forte densité d'ingrédients actifs garantit une efficacité optimale."
    },
    {
      title: "2. Le Processus Circulaire de 2 Minutes",
      desc: "Brossez doucement de la gencive vers la dent en décrivant des cercles. Laissez la mousse fine agir 30 secondes pour maximiser les bienfaits du Reishi."
    },
    {
      title: "3. Le Massage Gingival Direct (Traitement Doux)",
      desc: "En cas de gencives irritées, étalez une petite pointe de dentifrice avec un doigt propre sur la zone sensible avant de dormir. Laissez infuser sans rincer."
    }
  ],
  ar: [
    {
      title: "1. قاعدة حبة البازلاء (جرعة مركزة)",
      desc: "ضع كمية ضئيلة جداً بحجم حبة الحمص على الفرشاة. القوام المركز جداً للمعجون لا يتطلب المليء التقليدي، فبلورة صغيرة تمنح حماية وتعقيماً كاملاً."
    },
    {
      title: "2. تنظيف دائري وهادئ لمدة دقيقتين",
      desc: "قم بتفريش أسنانك برفق بحركات دائرية من لثة الفم باتجاه الأسنان. دع الرغوة الملطفة الغنية بالجانوديرما تلمس أغشيتك لثلاثين ثانية للاستفادة الكاملة."
    },
    {
      title: "3. مساج موضعي مباشر للثة الضعيفة",
      desc: "عند وجود التهابات أو تقرحات في اللثة، وزّع رشة المعجون مباشرة بإصبعك النظيف قبل النوم كمرهم ملطف مهدئ ودعه يعمل ليلاً دون غسله على الفور."
    }
  ]
};

export const toothpastePacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  en: [
    {
      id: "single",
      title: "Premium Dental Starter Pack",
      desc: "Try the outstanding power of botanical organic dental protection (1 large tube - 150g).",
      price: 85
    },
    {
      id: "double",
      title: "Duo Radiance Pack (Recommended)",
      desc: "Dual protection for your morning and evening oral care. Perfect 2-tube kit.",
      price: 170,
      badge: "⭐ MOST POPULAR",
      bonus: "Free Morocco Shipping"
    },
    {
      id: "family",
      title: "Family Smile Protection Pack",
      desc: "Complete 3-tube pack to secure biological safety and cavity protection for your children.",
      price: 255,
      badge: "👑 BEST VALUE",
      bonus: "Free Shipping + Eco Bamboo Toothbrush"
    }
  ],
  fr: [
    {
      id: "single",
      title: "Pack Découverte Sourire",
      desc: "Essayez l'efficacité inégalée du dentifrice botanique (1 tube grand format de 150g).",
      price: 85
    },
    {
      id: "double",
      title: "Pack Duo Éclat Gencives",
      desc: "Idéal pour une routine complète chez vous. Deux grands tubes concentrés.",
      price: 170,
      badge: "⭐ LE PLUS POPULAIRE",
      bonus: "Livraison Offerte"
    },
    {
      id: "family",
      title: "Pack Smile Protect Familial",
      desc: "Trois tubes haut de gamme pour garantir une hygiène irréprochable et saine à vos enfants.",
      price: 255,
      badge: "👑 MEILLEURE VALEUR",
      bonus: "Livraison Offerte + Brosse en Bambou Cadeau"
    }
  ],
  ar: [
    {
      id: "single",
      title: "باقة الابتسامة الفردية (عبوة واحدة)",
      desc: "عبوة واحدة كبيرة 150 جرام ممتازة لتلمس الفارق وصحة اللثة والتنظيف الفائق بنفسك.",
      price: 85
    },
    {
      id: "double",
      title: "باقة الثنائي اللامع (عبوتين مميزتين)",
      desc: "عبوتان كبيرتان تكفي لحماية يومية صباحية ومسائية من النزيف وحساسية الأسنان لشهور.",
      price: 170,
      badge: "⭐ الأكثر طلباً وشعبية للعملاء",
      bonus: "توصيل مجاني لبيتك"
    },
    {
      id: "family",
      title: "باقة الرعاية العائلية الذهبية (3 عبوات)",
      desc: "ثلاثة مدافئ فموية لعائلتك وأطفالك تضمن حماية متكاملة من التسوس وبديل فائق الفخامة عن المعاجين التجارية.",
      price: 255,
      badge: "👑 الباقة الذهبية وتوفير رائع",
      bonus: "توصيل مجاني + فرشاة أسنان خشبية هدية"
    }
  ]
};

export const toothpasteFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  en: [
    {
      q: "Why is DXN Ganozhi Toothpaste fluoride-free, and is it still effective against cavities?",
      a: "Yes! While commercial formulas use synthetic, toxic sodium fluoride to harden teeth synthetically, Ganozhi features premium Ganoderma (Reishi) extract and organic nutrients to optimize oral pH value biological balance. This naturally controls acid-producing dental plaque bacteria, effectively preventing dental cavities without introducing the toxic systemic build-ups associated with chemical fluoride."
    },
    {
      q: "Can children and toddlers safely use this toothpaste?",
      a: "Absolutely! Ganozhi contains zero chemical dyes, artificial sweeteners, toxic foaming agents (SLS), or high-abrasive industrial silicas. It uses food-grade mint herb extracts and 100% natural, certified biological Reishi. It is entirely safe and non-toxic even if accidentally swallowed by small children, making it an ideal choice for the entire family."
    },
    {
      q: "How does Ganoderma extract benefit my gums and oral cavity?",
      a: "Ganoderma lucidum contains rare adaptogenic polysaccharides and active triterpenoids. These molecules act as natural soothing elements, reducing redness and encouraging tissue regeneration. When brushed or massaged directly, the active agents comfort delicate gums, support immediate capillary healing, and restore dental health."
    },
    {
      q: "How fast will I see results for bleeding gums and breath freshness?",
      a: "Breath freshness is immediate from the highly concentrated premium spearmint extract. For bleeding gums, gum sensitivity, and tooth surface polish, customers report significant improvements and visible gum comfort within 3 to 10 days of twice-daily regular application."
    }
  ],
  fr: [
    {
      q: "Pourquoi le dentifrice Ganozhi est-il sans fluor, et protège-t-il quand même contre les caries ?",
      a: "Tout à fait ! Ganozhi s’appuie sur les propriétés assainissantes naturelles de l’extrait de Ganoderma (Reishi) et sur d’autres agents botaniques qui régulent le pH buccal. En bloquant la prolifération des bactéries pathogènes responsables du tartre et de l'acidité, il prévient efficacement les caries buccales sans exposer l'organisme à la toxicité potentielle du fluor synthétique."
    },
    {
      q: "Le dentifrice convient-il aux enfants et bébés ?",
      a: "Absolument. Il est exempt de saccharine de synthèse, de poudres abrasives de silice, de sulfates moussants agressifs (SLS) et de conservateurs irritants. Issu d'un processus biologique naturel et comestible, il peut être ingéré en petite quantité sans aucun danger pour la digestion des plus jeunes."
    },
    {
      q: "Quelles sont les vertus concrètes du Ganoderma pour les gencives ?",
      a: "Le Ganoderma lucidum est réputé en médecine traditionnelle pour ses propriétés calmantes et hydratantes souveraines. Il renferme des polysaccharides et triterpènes qui apaisent les rougeurs orales, calment les irritations mécaniques et soutiennent les gencives sensibles pour un brossage confortable et sans inconfort."
    },
    {
      q: "En combien de temps peut-on juger des bienfaits sur les gencives et l’haleine ?",
      a: "La purification bactérienne et la fraîcheur buccale sont instantanées grâce à l'huile végétale de menthe douce. Pour le renforcement des gencives réactives, la majorité des utilisateurs observent des résultats notables après seulement 5 à 10 jours de brossage continu matin et soir."
    }
  ],
  ar: [
    {
      q: "لماذا يخلو معجون جانوزي من الفلورايد، وكيف يحمي من التسوس بدونه؟",
      a: "نعم وبكل قوة! الطب التقليدي أثبت أن الفلورايد مادة صناعية تتراكم سامة داخل الجسم. معجون جانوزي دي إكس إن يعتمد على الفطر الريشي الغني بالمغذيات العضوية والكلوروفيل للقضاء على البكتيريا الحمضية التي تأكل عظم الأسنان. بنظافة اللثة وضبط حيوية الفم ودرجة الأس الهيدروجيني لبيئة الفم، يقضي المعجون على مصدر التسوس طبيعياً وبكفاءة."
    },
    {
      q: "هل المعجون آمن ومناسب للاستعمال من طرف الأطفال الرضع والأولاد الصغار؟",
      a: "نعم، آمن وموصى به تماماً! معجون جانوزي بلس طبيعي وعضوي 100%، خالٍ من مادة السكرين الكيميائية المحلاة، رغوة الصابون الحارقة للغشاء، أو المبيضات البصرية البلاستيكية. مكوناته غذائية وعلاجية وصديقة للنمو، لذا حتى في حالة بلع الطفل كميات طفيفة من رغوة بلس لمعجون لن تقلقي، لكونه خالياً من أي مركبات كيميائية سامة."
    },
    {
      q: "ما هي فوائد الفطر الريشي الموجود بالمعجون لصحة اللثة بالدقة؟",
      a: "يحتوي فطر الجانوديرما (ملك الأعشاب) على مضادات أكسدة وتريتربينات مبلسمة. عند استخدامه، تتغلغل هذه المغذيات بالخلايا فتعمل كمضاد حيوي مطهر للالتهاب وقابض للأوعية الدموية النازفة، فتلئم الشقوق والتقرحات والتهاب الجذور وتقوي نسيج اللثة لترجع وردية وشابة بنمو مثالي."
    },
    {
      q: "متى سأستشعر النتائج المفيدة لعلاج النزيف وتطهير رائحة الفم؟",
      a: "انتعاش الفم والتطهير للروائح يبدأ من الاستعمال الأول مباشرة بفضل تركيز زيت النعناع الفاخر. أما بالنسبة لتراجع نزيف اللثة الحساسة، آلام الأسنان، أو تبييض المينا، تظهر التحسينات جلية من 3 إلى 7 أيام من الاستخدام المنتظم مرتين يومياً."
    }
  ]
};
