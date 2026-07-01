export interface FAQItem {
  q: string;
  a: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
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
  benefitsHeading: string;
  benefitsSub: string;
  overviewTitle: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  ingredientsHeading: string;
  ingredientsSub: string;
  howToUseHeading: string;
  whyChooseHeading: string;
  packagesTitle: string;
  packagesSub: string;
  checkoutHeading: string;
  checkoutSub: string;
  checkoutNameLabel: string;
  checkoutAddressLabel: string;
  checkoutPhoneLabel: string;
  checkoutSubmitBtn: string;
  secureCheckoutBadge: string;
  faqHeading: string;
  faqSub: string;
}

export const shampooLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "👑 خلاصة المغذيات العضوية للشعر والجلدة",
    heroTitle: "امنح شعرك العناية الفاخرة مع شامبو جانوزي DXN",
    heroSub: "تركيبة مميزة فريدة تجمع بين العناية اليومية والمكونات الطبيعية المختارة بعناية الفائقة. يغذي بصلات الشعر بخلاصة الفطر الريشي الغني ومستحضر برو فيتامين B5 لتجربة تنظيف منعشة وشعر يبدو أكثر قوة وكثافة وحيوية وتألقاً.",
    heroCTAOrder: "اطلب باقة شامبو جانوزي الفاخرة الآن",
    heroCTAConsult: "استشارة مجانية مع خبيرة التغذية سميرة",
    benefitsHeading: "لماذا يعتبر شامبو جانوزي المعيار الطبيعي لصحة شعرك؟",
    benefitsSub: "تركيبة حيوية بيولوجية متوازنة توفر حماية مركزة ولمعاناً فائقاً من الاستعمال الأول.",
    overviewTitle: "سر التركيبة الفاخرة بالجانوديرما وفيتامين B5",
    overviewParagraph1: "شامبو جانوزي دي إكس إن يمتاز بتركيبة معتدلة في درجة الحموضة (pH متوازن)، مما يجعله ملائماً تماماً لجميع أنواع الشعر والجلدة الحساسة دون التسبب في جفاف أو قشرة.",
    overviewParagraph2: "يحتوي الشامبو على خلاصة الفطر الريشي العضوي و برو-فيتامين B5 لتغذية جذور الشعر وترطيبها بعمق، مما يمنع تقصف الأطراف ويمنح شعرك نعومة طبيعية وانسيابية دائمة.",
    ingredientsHeading: "المكونات الأساسية الفاخرة",
    ingredientsSub: "مستخلصات طبيعية خالية من المكونات الكيميائية القاسية لرعاية مثالية.",
    howToUseHeading: "خطوات الاستخدام اليومي الأفضل",
    whyChooseHeading: "لماذا يثق الملايين بشامبو جانوزي DXN؟",
    packagesTitle: "اختر باقة العناية الموفرة الملائمة لك",
    packagesSub: "حدد العرض المفضل لديك لتوجيه طلبك فوراً بالمجان وتأكيد الدفع اليدوي عند الاستلام في أي مدينة بالمغرب.",
    checkoutHeading: "تأكيد طلبك الأمن بباب بيتك",
    checkoutSub: "قم بملء استمارة بلد الاستلام أدناه لتمرير وتأكيد طلبك وحجزه من المخزون التميزي الفوري.",
    checkoutNameLabel: "الاسم الكامل الكريم *",
    checkoutAddressLabel: "عنوان السكن الحالي بالمغرب (المدينة والحي) *",
    checkoutPhoneLabel: "رقم هاتف الواتساب الحالي *",
    checkoutSubmitBtn: "تأكيد الطلب السريع والدفع عند الاستلام",
    secureCheckoutBadge: "🔒 طلب حقيقي مشفر بالكامل. التوصيل مجاني بباب المنزل والدفع نقداً عند المعاينة.",
    faqHeading: "الأسئلة الشائعة حول رعاية شعرك بالجانوزي",
    faqSub: "إجابات الخبراء عن كل ما يخص روتين شامبو جانوزي الطبيعي الفاخر."
  },
  en: {
    heroBadge: "👑 THE CROWN JEWEL OF ORGANIC HAIR VITALS",
    heroTitle: "Give Your Hair Luxurious Care with DXN Ganozhi Shampoo",
    heroSub: "A distinguished formula combining exquisite daily care with meticulously selected botanical ingredients. Enriched with organic Ganoderma (Reishi) extract and Pro-Vitamin B5 to deeply nourish, revitalize follicles, and deliver a clean, vibrant, and stunningly lustrous hair structure.",
    heroCTAOrder: "Get Your Premium Ganozhi Shampoo Pack",
    heroCTAConsult: "Free Hair Wellness Call with Samira",
    benefitsHeading: "Why Ganozhi Shampoo is the New Standard of Healthy Hair",
    benefitsSub: "A biochemically balanced, nutrient-dense natural formula designed to protect and beautify your hair from root to tip.",
    overviewTitle: "The Secret of Ganoderma and Pro-Vitamin B5 Active Blend",
    overviewParagraph1: "DXN Ganozhi Shampoo features a perfectly balanced pH level, making it exceptionally gentle and suitable for all hair types, including sensitive scalps and color-treated hair.",
    overviewParagraph2: "By blending the antioxidant power of premium Reishi Mushroom with hydrating Pro-Vitamin B5, Ganozhi strengthens hair elasticity, seals in moisture, prevents split ends, and leaves hair naturally soft and easy to manage.",
    ingredientsHeading: "Core Exquisite Active Ingredients",
    ingredientsSub: "Pure natural extracts free from harsh stripping chemicals to preserve biological moisture.",
    howToUseHeading: "Daily Rejuvenation Ritual Steps",
    whyChooseHeading: "Why Do Millions Choose DXN Ganozhi Globally?",
    packagesTitle: "Select Your Premium Hair Wellness Kit",
    packagesSub: "Choose a discount package below to start your premium hair restoration. Fresh stock, free express delivery across Morocco.",
    checkoutHeading: "Secure Direct Ordering Form",
    checkoutSub: "Enter your Moroccan delivery details below to lock in the special pricing and activate free shipping.",
    checkoutNameLabel: "Your Magnificent Full Name *",
    checkoutAddressLabel: "Morocco Delivery Address (City & Neighborhood) *",
    checkoutPhoneLabel: "Active WhatsApp Phone Number *",
    checkoutSubmitBtn: "CONFIRM SPECIAL ORDER & EXPRESS DELIVERY",
    secureCheckoutBadge: "🔒 No credit card required. Express dispatch with cash-on-delivery in Maroc.",
    faqHeading: "Hair Science & Shampoo Secrets Explained",
    faqSub: "The professional answers to your doubts about our premium DXN Reishi Hair Wash."
  },
  fr: {
    heroBadge: "👑 L'EXCELLENCE CAPILLAIRE AU GANODERMA",
    heroTitle: "Offrez à Vos Cheveux le Soin de Prestige Ganozhi DXN",
    heroSub: "Une formulation d'exception mariant un nettoyage délicat quotidien à la puissance des actifs botaniques certifiés. Infusé d'extrait pur de Ganoderma (Reishi) et de Pro-Vitamine B5 pour nourrir intensément le cuir chevelu, régénérer les follicules et parer vos cheveux d'un éclat d'une souveraine beauté.",
    heroCTAOrder: "Bénéficier de Mon Pack Ganozhi Shampooing",
    heroCTAConsult: "Entretien d'Hygiène Capillaire Offert avec Samira",
    benefitsHeading: "Pourquoi le Shampoing Ganozhi est la Référence Absolue",
    benefitsSub: "Une formule neutre et biologiquement équilibrée pour nettoyer, apaiser et tonifier sans jamais dessécher.",
    overviewTitle: "Le Secret d'une Formulaton Nourrissante Reishi & B5",
    overviewParagraph1: "Le Shampoing DXN Ganozhi possède un pH parfaitement doux, idéal pour respecter l'écosystème cutané de la tête et convenir aux cuirs chevelus les plus sensibles ou sujets aux pellicules.",
    overviewParagraph2: "L'extrait de Ganoderma lucidum, riche en nutriments cellulaires essentiels, agit de concert avec la Pro-Vitamine B5 pour fortifier la tige capillaire, sceller l'hydratation et limiter visiblement la chute et les fourches.",
    ingredientsHeading: "Les Actifs d'une Formule Précieuse",
    ingredientsSub: "Exempt d'agents corrosifs agressifs afin de préserver les huiles protectrices naturelles de la fibre.",
    howToUseHeading: "Rituel Sublime en Quatre Gestes",
    whyChooseHeading: "Pourquoi Faire Confiance au Shampoing Ganozhi DXN ?",
    packagesTitle: "Choisissez Vos Soins Capillaires de Prestige",
    packagesSub: "Sélectionnez votre formule promotionnelle ci-dessous. Livraison express sécurisée et gratuite à domicile au Maroc.",
    checkoutHeading: "Formulaire de Commande Immédiate",
    checkoutSub: "Saisissez vos coordonnées de livraison au Maroc pour expédier immédiatement votre colis.",
    checkoutNameLabel: "Votre Nom Complet Noble *",
    checkoutAddressLabel: "Adresse de Livraison au Maroc (Ville et Quartier) *",
    checkoutPhoneLabel: "Numéro de Téléphone WhatsApp *",
    checkoutSubmitBtn: "TRANSMETTRE LA COMMANDE & PAYER À LA LIVRAISON",
    secureCheckoutBadge: "🔒 Commande sécurisée en direct. Paiement en espèces après inspection lors de la livraison.",
    faqHeading: "Sagesse Botanique, Vos Questions Répondues",
    faqSub: "Retrouvez les conseils professionnels d'application du Shampoing Ganozhi DXN."
  }
};

export const shampooBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    {
      title: "تنظيف يومي لطيف ومعتدل",
      desc: "يزيل الدهون الزائدة والأوساخ والترسبات البيئية دون تجريد خصلات الشعر من رطوبتها الطبيعية."
    },
    {
      title: "انتعاش وتغذية جذرية بالفطر الريشي",
      desc: "أغنى فطر نباتي بمضادات الأكسدة يقوي جلدة الرأس ويحارب الفطريات والقشرة بشكل طبيعي."
    },
    {
      title: "ترطيب ومقاومة التقصف (Pro-Vitamin B5)",
      desc: "يعيد حيوية ألياف الشعر مرونة ولمعاناً، ويمنحه غلافاً واقياً يمنع تكسر الأطراف."
    },
    {
      title: "الحل الأمثل لمشاكل الحكة والحساسية",
      desc: "يوازن درجة حموضة الجلد ويهدئ الاحمرار والتهيج الناتج عن الصبغات والملوثات المستمرة."
    }
  ],
  en: [
    {
      title: "Gentle Everyday Cleansing",
      desc: "Removes excess sebum and external impurities without stripping away the scalp's natural vital protective oils."
    },
    {
      title: "Infused with Cellular Ganoderma Extract",
      desc: "Rich in botanical bio-nutrients that actively strengthen scalp tissues, stimulate follicles and soothe skin."
    },
    {
      title: "Pro-Vitamin B5 Moisty Defense",
      desc: "Drenches follicles in deep hydration, improves overall hair elasticity, and seals outstanding shine."
    },
    {
      title: "pH Balanced and anti-dandruff relief",
      desc: "Formulated specifically to align with skin's optimal pH level, minimizing itchiness, irritation or dryness."
    }
  ],
  fr: [
    {
      title: "Nettoyage quotidien d'une extrême douceur",
      desc: "Élimine les résidus extérieurs et l'excès de sébum tout en respectant l'hydratation naturelle de la fibre."
    },
    {
      title: "Enrichi en Ganoderma protecteur",
      desc: "Nourrit et stimule la microcirculation du cuir chevelu grâce aux bio-antioxydants régénérants du Reishi."
    },
    {
      title: "Pro-Vitamine B5 ultra-gainante",
      desc: "Répare et hydrate en profondeur les pointes abîmées, prévient la casse et confère un toucher soyeux."
    },
    {
      title: "Respect absolu du pH cutané",
      desc: "Restaure la barrière microbiologique saine, soulage instantanément les démangeaisons et prévient les pellicules."
    }
  ]
};

export const shampooPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    {
      id: 'single',
      title: "العرض الكلاسيكي (عبوة واحدة)",
      desc: "عبوة غنية بشامبو جانوزي DXN سعة 250 مل لتجربة رعاية أولية فاخرة.",
      price: 120,
    },
    {
      id: 'double',
      title: "باقة النعومة المضاعفة (عبوتان) ✨",
      desc: "عبوتان للتوفير وعلاج أعمق للقشرة وتقصف الشعر وجفافه. العرض الأكثر طلباً بمجموع 500 مل.",
      price: 220,
      badge: "الأكثر طلباً",
      bonus: "كتيب إلكتروني حصري لوصفات رعاية الشعر الطبيعية مجاناً"
    },
    {
      id: 'family',
      title: "باقة رعاية العائلة الفاخرة (3 عبوات) 🏆",
      desc: "عرض التوفير الأكبر لثلاث عبوات كاملة ومناسبة للاستعمال العائلي اليومي المستمر.",
      price: 310,
      badge: "أفضل قيمة",
      bonus: "مشط تدليك خشبي فاخر مضاد للشحنات لترفي الروتين مجاناً"
    }
  ],
  en: [
    {
      id: 'single',
      title: "Elite Classic (1 Bottle)",
      desc: "One 250ml bottle of DXN Ganozhi Shampoo to kickstart your biological hair renewal with style.",
      price: 120,
    },
    {
      id: 'double',
      title: "Premium Hydration Duo (2 Bottles) ✨",
      desc: "A powerful combination pack of 2 bottles (500ml total) to treat deeply and establish daily vitality.",
      price: 220,
      badge: "MOST POPULAR",
      bonus: "Free Deluxe Hair-Care Digital Routine Guide"
    },
    {
      id: 'family',
      title: "Ultimate Royal Set (3 Bottles) 🏆",
      desc: "The supreme family set of 3 full bottles to cover daily hygienic wash with excellent economic savings.",
      price: 310,
      badge: "BEST VALUE",
      bonus: "Free Anti-Static Organic Wooden Comb + Ritual Guide"
    }
  ],
  fr: [
    {
      id: 'single',
      title: "Flacon Prestige (1 Bouteille)",
      desc: "Un flacon concentré de Shampoing Ganozhi DXN 250ml pour initier le renouveau de votre cuir chevelu.",
      price: 120,
    },
    {
      id: 'double',
      title: "Cure Régénération Duo (2 Bouteilles) ✨",
      desc: "Notre formule la plus recommandée contenant 2 flacons (500ml au total) pour éliminer durablement les imperfections.",
      price: 220,
      badge: "RECOMMANDÉ",
      bonus: "Guide routine capillaire bio Samira offert"
    },
    {
      id: 'family',
      title: "Coffret Prestige Royal (3 Bouteilles) 🏆",
      desc: "L'option d'excellence pour toute la famille, offrant 3 flacons complets de soin pour une vitalité quotidienne maximale.",
      price: 310,
      badge: "EXCELLENCE",
      bonus: "Peigne luxueux sculpté en bois de santal offert"
    }
  ]
};

export const shampooSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    {
      title: "تبليل الشعر جيداً بالماء",
      desc: "بلل كامل شعرك واحرص على غمره بالماء الفاتر لتسهيل تغلغل رغوة الشامبو اللطيفة."
    },
    {
      title: "وضع كمية مناسبة",
      desc: "اسكب كمية ملائمة من شامبو جانوزي على باطن يديك وقم بتوزيعها بالتساوي على شعرك."
    },
    {
      title: "تدليك فروة الرأس",
      desc: "دلك جلدة الرأس بلطف بأطراف أصابعك لبضع دقائق لتحفيز الدورة الدموية وامتصاص الجانوديرما."
    },
    {
      title: "الغسل السهل والشامل",
      desc: "اغسل شعرك بالماء جيداً لتترك فروة رأسك تتنفس بنظافة تامة وانتعاش فائحة ومخملي."
    }
  ],
  en: [
    {
      title: "Inundate with Lukewarm Water",
      desc: "Thoroughly wet your hair and scalp to open up pores and prepare fibers for gentle organic absorption."
    },
    {
      title: "Apportion Shampoo evenly",
      desc: "Pour an appropriate dose of concentrated shampoo on your palm and disperse it uniformly."
    },
    {
      title: "Massage your Scalp",
      desc: "Use your fingertips to gently rub the scalp in circular motions to trigger active blood circulation and Reishi absorption."
    },
    {
      title: "Rinse profoundly with Water",
      desc: "Rinse completely with fresh water. Repeat the luxurious wash if a secondary deep cleanse is desired."
    }
  ],
  fr: [
    {
      title: "Mouiller abondamment",
      desc: "Imbibez l'intégralité de la chevelure à l'eau tiede pour ouvrir les écailles de la fibre capillaire."
    },
    {
      title: "Appliquer la juste dose",
      desc: "Déposez une noix de shampoing au creux des mains humides et répartissez d'arrière en avant de la tête."
    },
    {
      title: "Masser le cuir chevelu",
      desc: "Effectuez des mouvements circulaires précis du bout des doigts pour activer la microcirculation lymphatique."
    },
    {
      title: "Rincer et sublimer",
      desc: "Éliminez soigneusement toute trace de mousse à l'eau claire pour révéler une douceur et une légèreté royales."
    }
  ]
};

export const shampooFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  ar: [
    {
      q: "ما الذي يميز شامبو جانوزي دي إكس إن عن الشامبوهات التجارية؟",
      a: "شامبو جانوزي ليس مجرد منظف سطحي، بل هو غني بخلاصة الفطر الريشي (الجانوديرما) وبرو-فيتامين B5. تركيبته تحتوي على أس هيدروجيني (pH) متوازن تماماً وناعم على خلايا جلدة الرأس، مما يعيد تأهيل بصيلات الشعر وحمايتها من التلف والتقشر دون استخدام ملينات وصناعات بترولية ضارة."
    },
    {
      q: "هل شامبو جانوزي مناسب لجميع أنواع الشعر؟",
      a: "نعم، بسبب حموضته المتوازنة ومكوناته الطبيعية الفاخرة، فهو مناسب للشعر الدهني، الجاف، المصبوغ، والتالف. يعمل الشامبو على ضبط توازن إفراز دهون الجلد الطبيعية."
    },
    {
      q: "كيف يساعد فطر الريشي في فوائد الشعر؟",
      a: "فطر الريشي العضوي يحمل أكثر من 400 مركب حيوي بيولوجي نشط، بما في ذلك مضادات الأكسدة القوية والبوليساكاريدات. يغذي الجذور بعمق، يهدئ الالتهاب والحكة بالفروة، ويدعم نمو الشعر بمظهر قوي وصحي."
    },
    {
      q: "هل يمكن استخدامه بشكل يومي بأمان؟",
      a: "نعم، تركيبته آمنة وخالية من المكونات القاسية والبارابين، مما يجعله مثالياً للاستعمال اليومي لجميع أفراد الأسرة ولطيفاً للغاية دون أي ضرر أو جفاف."
    },
    {
      q: "كيف يمكنني الحصول عليه وطلب الباقات في المغرب؟",
      a: "يمكنك بسهولة تحديد باقتك المفضلة (عبوة، عبوتين، أو 3 عبوات توفيرية) وتعبئة معلومات الاستلام الفوري أسفل الصفحة. سنقوم بتأكيد الشحن الفوري المجاني معك بالواتساب وتستلّم طلبك وتدفع نقداً لشركة التوصيل عند باب دارك."
    }
  ],
  en: [
    {
      q: "What makes DXN Ganozhi Shampoo superior to commercial chemical shampoos?",
      a: "Unlike standard chemical cleansers that rely on harsh detergents to strip oil, Ganozhi Shampoo is a biological treatment. It is enriched with Ganoderma lucidum extract and Pro-Vitamin B5, carrying a perfectly balanced pH scale that aligns with your skin, reinforcing hair follicles naturally without synthetic silicones."
    },
    {
      q: "Is Ganozhi Shampoo suitable for color-treated or dry hair?",
      a: "Yes, absolutely! Since Ganozhi is highly protective, pH-neutral, and formulated with active hydrating Pro-Vitamin B5, it protects hair color from fading, deeply moisturizes dehydrated follicles, and balances sebaceous glands to prevent dry dandruff."
    },
    {
      q: "How does Ganoderma extract benefit my scalp health?",
      a: "Reishi mushroom contains over 400 active bio-elements (polysaccharides, triterpenes, organic germaniun). These acts as highly powerful antioxidants that regenerate weak scalp cells, combat mild fungal infections, and soothe standard dry itchiness."
    },
    {
      q: "Can Ganozhi Shampoo be used safely every single day?",
      a: "Yes, it is specifically balanced for frequent or daily wash. Since it doesn't contain toxic industrial chemicals, sulfates, or parabens, it cleanses delicately for ongoing hygiene."
    },
    {
      q: "How does the shipping and cash-on-delivery work in Morocco?",
      a: "We offer secure premium Moroccan express delivery. Simply fill the form below choosing your kit. We will text you on WhatsApp to confirm, ship your fresh pack immediately, and you pay cash only after receiving and verifying the package at your doorstep."
    }
  ],
  fr: [
    {
      q: "En quoi le Shampoing Ganozhi DXN diffère-t-il des shampoings commerciaux ?",
      a: "Contrairement aux détergents capillaires classiques qui érodent la cuticule, le Shampoing Ganozhi est un soin dermo-protecteur. Infusé de Reishi biologique et de Pro-Vitamine B5, sa formule possède un pH neutre qui respecte le cuir chevelu en éliminant les impuretés sans dessécher les follicules."
    },
    {
      q: "Ce shampoing convient-il aux cheveux colorés ou très secs ?",
      a: "Tout à fait. La présence de Pro-Vitamine B5 assure un lissage des écailles et retient l'eau au cœur de la tige capillaire, ce qui redonne de la souplesse au cheveu sec et protège l'éclat des chevelures colorées contre le ternissement."
    },
    {
      q: "Comment le Ganoderma agit-il sur les problèmes de pellicules et de démangeaisons ?",
      a: "Le Ganoderma lucidum est réputé pour ses vertus anti-inflammatoires, régulatrices et purifiantes naturelles. Il combat l'excès de levures responsables des pellicules, élimine les sensations de tiraillement et apporte un apaisement durable dès la première application."
    },
    {
      q: "Puis-je l'associer en toute sécurité pour une utilisation quotidienne ?",
      a: "Oui, sa formulation dermo-cosmétique douce, dénuée d'agents agressifs tels que les parabènes lourds, permet un lavage quotidien régulier sans agresser la barrière hydrolipidique cutanée."
    },
    {
      q: "Quelles sont les modalités de livraison et de paiement au Maroc ?",
      a: "Nous assurons une livraison premium et discrète à votre adresse. Après sélection de votre pack et validation du formulaire, nous confirmons votre commande par WhatsApp et notre transporteur livre à domicile partout au Maroc sous 24 à 48 heures. Le paiement s'effectue en espèces à la livraison."
    }
  ]
};

export const shampooReviews: Record<'en' | 'fr' | 'ar', Array<{
  name: string;
  city: string;
  rating: number;
  text: string;
  photo: string;
}>> = {
  ar: [
    {
      name: "سامية خ.",
      city: "الدار البيضاء",
      rating: 5,
      text: "هذا الشامبو غير لي حياتي صراحة! كنت كنعاني بزاف من تساقط الشعر والحكة، ومن أول سيمانة حسيت بجلدة راسي ارتاحت بزاف وشعري رجع فيه اللمعان والحيوية الطبيعية.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "أمين ط.",
      city: "الرباط",
      rating: 5,
      text: "منتج رائع جداً، النظافة ديالو عميقة وفيه ريحة طبيعية فخمة بزاف. خفيف بزاف على الرأس وما كينشفش الشعر فحال الشامبوهات العادية اللي عامرين كيماويات.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "خديجة ب.",
      city: "مراكش",
      rating: 5,
      text: "تبارك الله على جودة الشامبو جانوزي، شعري كان ناشف ومقصف والآن رجع رطب وكيطيح بواحد الانسيابية غزالة. خديت باقة عبوتين وتوصيل تال الباب، جودة 5 نجوم!",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    },
    {
      name: "ندى م.",
      city: "طنجة",
      rating: 5,
      text: "بصراحة أحسن شامبو جربتو للجلدة الحساسة. كنت ديما كنعاني من القشرة وحموضة الجو، ولكن مع شامبو جانوزي بالفطر الريشي الجلدة كتتنفس والنعومة غزالة وجد مرتاحة.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "عمر ف.",
      city: "فاس",
      rating: 5,
      text: "أصلي وممتاز ومناسب للاستعمال اليومي لوليداتي وليا. الشامبو اقتصادي حيت مركز بزاف كنحتاج غير قطرة قليلة وكتعطي رغوة وفيرة ومنعشة.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "ليلى ح.",
      city: "أكادير",
      rating: 5,
      text: "شكراً بزاف سميرة على هاد الشامبو، طلبتو ووصلني ف 24 ساعة، التغليف راقي والمعاملة طيبة. شعري رجعت ليه الحيوية والقوة ومبقاش كيتساقط فحال الأول.",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    }
  ],
  en: [
    {
      name: "Samia K.",
      city: "Casablanca",
      rating: 5,
      text: "This shampoo genuinely transformed my hair routine! No more dry scalp irritation or ongoing hair fall. My hair is softer and looks incredibly healthy.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "Amine T.",
      city: "Rabat",
      rating: 5,
      text: "Excellent organic formula. It provides a super refreshing herbal aroma and clean feel without aggressive stripping. Pure quality.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "Khadija B.",
      city: "Marrakech",
      rating: 5,
      text: "Outstanding result on my frizzy, dry hair. Ganozhi and Pro-Vitamin B5 locked in absolute moisture. Highly recommend the double pack!",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    },
    {
      name: "Nada M.",
      city: "Tangier",
      rating: 5,
      text: "My scalp feels so clean and calm. I used to struggle with severe dandruff, but after utilizing Ganozhi, my scalp breathes properly.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "Omar F.",
      city: "Fez",
      rating: 5,
      text: "Genuine product. Since it is highly concentrated, only a tiny squeeze creates a wonderful luxurious bubble lather. Great for the entire family.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "Layla H.",
      city: "Agadir",
      rating: 5,
      text: "Excellent service from Samira! Fast shipping in Morocco, elegant packaging, and spectacular shampoo quality. Hair is shiny and robust.",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    }
  ],
  fr: [
    {
      name: "Samia K.",
      city: "Casablanca",
      rating: 5,
      text: "Ce shampoing a métamorphosé ma chevelure ! Je perdais mes cheveux et souffrais de démangeaisons constantes ; dès les premiers lavages, mon cuir chevelu s'est apaisé.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "Amine T.",
      city: "Rabat",
      rating: 5,
      text: "Une pure merveille végétale. Le lavage est profond, l'odeur naturelle de plantes est exquise et il ne dessèche absolument pas les pointes.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "Khadija B.",
      city: "Marrakech",
      rating: 5,
      text: "Mes cheveux étaient très secs et cassants. Ce soin enrichi en Reishi et B5 leur a redonné de la souplesse et une brillance soyeuse incroyable. Pack duo parfait !",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    },
    {
      name: "Nada M.",
      city: "Tanger",
      rating: 5,
      text: "Idéal pour les cuirs chevelus irritables. J'avais des pellicules chroniques et ce Shampoing Ganozhi a rééquilibré mon écosystème cutané en douceur.",
      photo: "https://i.ibb.co/8gMwRhcd/image.png"
    },
    {
      name: "Omar F.",
      city: "Fès",
      rating: 5,
      text: "Formule très concentrée, très économique à l'usage. Une noisette suffit pour obtenir un moussage de luxe onctueux et très plaisant.",
      photo: "https://i.ibb.co/9HV6xxVR/image.png"
    },
    {
      name: "Layla H.",
      city: "Agadir",
      rating: 5,
      text: "Un grand merci à Samira ! Livraison éclair, marchandise impeccable et authentique. Mes cheveux respirent à nouveau la santé.",
      photo: "https://i.ibb.co/q3q1fsms/image.png"
    }
  ]
};
