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
}

export interface LocalizedCopy {
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  heroCTAOrder: string;
  heroCTALearn: string;
  benefitsHeading: string;
  benefitsSub: string;
  overviewTitle: string;
  overviewHeading: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  featuresHeading: string;
  featuresSub: string;
  howToUseHeading: string;
  howToUseSub: string;
  whyChooseHeading: string;
  whyChooseSub: string;
  reviewsHeading: string;
  reviewsSub: string;
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

export const ganoMassageOilLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "✨ تجربة استرخاء فاخرة للجسم",
    heroTitle: "استمتع بلحظات من الراحة مع زيت جانو للمساج من DXN",
    heroSub: "تركيبة مميزة بمكونات مختارة بعناية تمنح تجربة مساج فاخرة وإحساساً بالراحة والاسترخاء للعناية اليومية بالجسم.",
    heroCTAOrder: "اطلب الآن",
    heroCTALearn: "اكتشف معلوات أكثر",
    benefitsHeading: "فوائد زيت جانو للمساج لراحة لا مثيل لها",
    benefitsSub: "عناية مهدئة للبشرة والجسم مستوحاة من الطبيعة والجمال.",
    overviewTitle: "حول المنتج والتميز",
    overviewHeading: "استرخاء الطبيعة والراحة في روتينك اليومي",
    overviewParagraph1: "زيت جانو للمساج من DXN مصمم خصيصاً لتوفير تجربة مساج ممتعة ومميزة، مما يساعد البشرة على الشعور بالنعومة والانتعاش والحيوية الفائقة طوال اليوم.",
    overviewParagraph2: "مكوناته الطبيعية الفاخرة والفريدة وتركيبته المميزة تجعله إضافة مثالية وممتازة لروتين العناية اليومية بالجسم والرفاهية والاسترخاء الشامل.",
    featuresHeading: "الميزات الأساسية لزيت جانو",
    featuresSub: "تفاصيل الجودة والتركيب السلس لراحة قصوى.",
    howToUseHeading: "طريقة الاستخدام الفعالة والسهلة",
    howToUseSub: "خطوات بسيطة ومهنية لضمان أقصى استفادة وتجربة سبا فاخرة في منزلك.",
    whyChooseHeading: "لماذا تختار DXN وجرّب الفارق؟",
    whyChooseSub: "نحن نلتزم بأعلى معايير النقاء لنمنحك العافية التي تستحقها.",
    reviewsHeading: "آراء وتجارب عملائنا المميزين",
    reviewsSub: "قصص حقيقية من أشخاص استعادوا طاقتهم وراحتهم بفضل زيت جانو الفاخر.",
    packagesTitle: "اختر العرض الخاص والمناسب لك",
    packagesSub: "حدد باقة زيت جانو المفضلة لديك واستفد من الشحن المجاني والتخفيضات الكبرى اليوم.",
    checkoutHeading: "قم بتأكيد طلبك الآن وسنتواصل معك فوراً",
    checkoutSub: "يرجى ملء معلومات الشحن لتوصيل سريع وآمن.",
    checkoutNameLabel: "الاسم الكامل *",
    checkoutAddressLabel: "عنوان التوصيل بالكامل والموقع *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط *",
    checkoutSubmitBtn: "تأكيد الطلب وإرساله عبر الواتساب",
    secureCheckoutBadge: "توصيل سريع وآمن 100٪ - الدفع عند الاستلام",
    faqHeading: "الأسئلة الشائعة حول زيت جانو للمساج",
    faqSub: "كل ما تود معرفته عن طريقة الاستخدام وفوائد المنتج المذهلة."
  },
  en: {
    heroBadge: "✨ Premium Body Relaxation Experience",
    heroTitle: "Enjoy Moments of Relaxation with DXN Gano Massage Oil",
    heroSub: "A special formula with carefully selected ingredients providing a luxury massage experience and a feeling of comfort and relaxation for daily body care.",
    heroCTAOrder: "Order Now",
    heroCTALearn: "Learn More",
    benefitsHeading: "Benefits of Gano Massage Oil for Ultimate Comfort",
    benefitsSub: "Soothing care for skin and body inspired by nature and wellness.",
    overviewTitle: "About the Product & Luxury",
    overviewHeading: "Nature’s Relaxation in Your Daily Routine",
    overviewParagraph1: "DXN Gano Massage Oil is specially crafted to provide a pleasant massage experience while helping the skin feel smooth and refreshed. Its carefully selected ingredients make it a perfect companion.",
    overviewParagraph2: "Its natural premium formulation acts as an excellent addition to your daily body care and wellness routine, restoring vitality to dry skin and sore muscles.",
    featuresHeading: "Key Features of Gano Oil",
    featuresSub: "Premium properties designed for maximum physical wellness.",
    howToUseHeading: "Effective Usage Method",
    howToUseSub: "Simple spa-style steps to maximize the soothing properties of the oil.",
    whyChooseHeading: "Why Choose DXN?",
    whyChooseSub: "A long-standing global pioneer in natural organic solutions.",
    reviewsHeading: "Our Customer Testimonials",
    reviewsSub: "Genuine feedback from clients who transformed their relaxation experience.",
    packagesTitle: "Select Your Preferred Package",
    packagesSub: "Get great bulk discounts and free delivery across Morocco today.",
    checkoutHeading: "Confirm Your Order Now",
    checkoutSub: "Fill out the fields to proceed with checkout and secure dispatch.",
    checkoutNameLabel: "Full Name *",
    checkoutAddressLabel: "Exact Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Phone Number *",
    checkoutSubmitBtn: "Confirm & Order via WhatsApp",
    secureCheckoutBadge: "100% Secure Shipping - Payment on Delivery",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Find fast answers about DXN Gano Massage Oil."
  },
  fr: {
    heroBadge: "✨ Expérience de relaxation corporelle premium",
    heroTitle: "Profitez de moments de détente avec l'huile de massage DXN Gano",
    heroSub: "Une formule spéciale avec des ingrédients soigneusement sélectionnés offrant une expérience de massage luxueuse et une sensation de confort et de relaxation pour les soins quotidiens du corps.",
    heroCTAOrder: "Commander maintenant",
    heroCTALearn: "En savoir plus",
    benefitsHeading: "Avantages de l'huile de massage Gano pour un confort ultime",
    benefitsSub: "Soin apaisant pour la peau et le corps inspiré par la nature.",
    overviewTitle: "À propos du produit & prestige",
    overviewHeading: "La relaxation de la nature dans votre quotidien",
    overviewParagraph1: "L'huile de massage DXN Gano est spécialement conçue pour offrir une expérience de massage agréable, aidant la peau à se sentir lisse, détendue et revitalisée.",
    overviewParagraph2: "Sa formulation biologique haut de gamme s'intègre parfaitement dans votre routine bien-être, restaurant le confort des muscles fatigués et la douceur de l'épiderme.",
    featuresHeading: "Caractéristiques Premium de l'huile Gano",
    featuresSub: "Propriétés exceptionnelles optimisées pour votre confort.",
    howToUseHeading: "Méthode d'utilisation simple & efficace",
    howToUseSub: "Des gestes de spa à reproduire chez soi pour un soulagement optimal.",
    whyChooseHeading: "Pourquoi choisir DXN ?",
    whyChooseSub: "Le leader mondial inégalé en matière d'herboristerie et de Ganoderma.",
    reviewsHeading: "Témoignages de nos clients",
    reviewsSub: "Découvrez l'avis des personnes qui apprécient le bien-être avec DXN.",
    packagesTitle: "Choisissez votre Pack Privilège",
    packagesSub: "Profitez de réductions spéciales et livraison rapide au Maroc aujourd'hui.",
    checkoutHeading: "Valider votre commande maintenant",
    checkoutSub: "Saisissez vos coordonnées de livraison pour une expédition sécurisée.",
    checkoutNameLabel: "Nom complet *",
    checkoutAddressLabel: "Adresse précise de livraison *",
    checkoutPhoneLabel: "Numéro de téléphone WhatsApp *",
    checkoutSubmitBtn: "Confirmer & Commander via WhatsApp",
    secureCheckoutBadge: "Livraison 100% sécurisée - Paiement à la livraison",
    faqHeading: "Questions fréquemment posées",
    faqSub: "Toutes les réponses pour une utilisation en toute confiance."
  }
};

export const ganoMassageOilBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "تجربة مساج مريحة والمهدئة", desc: "تمدد مريح يقلل الإجهاد الجسدي والنفسي ويعيد شحن طاقتك بلطف." },
    { title: "بشرة ناعمة ومرطبة", desc: "ملمس حريري يساعد على ترطيب البشرة الجافة ومكافحة التشققات الجلدية." },
    { title: "مكونات ممتازة ونقية", desc: "مستخلص من بذور النخيل النقية الغنية بمضادات الأكسدة ومادة الجانوديرما الفائقة." },
    { title: "عناية مريحة بالجسم", desc: "تخفف من تشنج العضلات المنهكة وتساعد على تنشيط الدورة الدموية." },
    { title: "سهل الامتصاص والتطبيق", desc: "ينزلق بنعومة لا تترك ملمساً دهنياً ثقيلاً على الجلد بعد الانتهاء." },
    { title: "جودة DXN الموثوقة عالمياً", desc: "حائز على أرقى الجوائز الطبية وشهادات الصحة والسلامة الدولية." }
  ],
  en: [
    { title: "Relaxing massage experience", desc: "Promotes deep physiological relaxation and targets areas of chronic tightness." },
    { title: "Smooth skin feel", desc: "Enriches the dermal layer with moisture, leaving your skin beautifully soft." },
    { title: "Premium quality ingredients", desc: "Crafted with palm kernel oil and precious biological Ganoderma extract." },
    { title: "Comforting body care", desc: "Revitalizes stressed, tired muscle tissues and supports local circulation." },
    { title: "Easy application", desc: "Glides seamlessly across the body without leaving sticky or heavy residues." },
    { title: "Trusted DXN quality", desc: "Certified with international food safety and therapeutic production standards." }
  ],
  fr: [
    { title: "Expérience de massage relaxante", desc: "Apaise en profondeur le corps pour dissiper les tensions et le stress." },
    { title: "Sensation de peau lisse", desc: "Hydrate l'épiderme, rendant votre peau douce, souple et rajeunie." },
    { title: "Ingrédients de qualité premium", desc: "Formulée à base d'huile de germe de palmier et d'extrait d'herbe de Ganoderma." },
    { title: "Soin corporel réconfortant", desc: "Soulage les muscles fatigués et soutient naturellement la circulation locale." },
    { title: "Application simple & fluide", desc: "Glisse facilement sans laisser de couche grasse ou inconfortable." },
    { title: "Qualité DXN certifiée", desc: "Bénéficie de la rigueur et de la pureté du leader mondial du Reishi." }
  ]
};

export const ganoMassageOilFeatures: Record<'en' | 'fr' | 'ar', { title: string; desc: string }[]> = {
  ar: [
    { title: "تركيبة DXN الفاخرة", desc: "تركيبة حصرية تحتوي على مستخلص فطر الريشي الاستثنائي المعزز لعافية الجسم." },
    { title: "سهل التطبيق", desc: "قوام زيتي متوازن تماماً، ينزلق على البشرة ليمنحك تجربة مساج مريحة وانسيابية." },
    { title: "رائحة زكية ومهدئة", desc: "رائحة لطيفة تعزز الهدوء النفسي وتضفي أجواء مهدئة كعيادات السبا الفاخرة." },
    { title: "مناسب جداً للمساج", desc: "مصمم خصيصاً للتدليك الرياضي، التدليك الاسترخائي، والعناية اليومية المهدئة." },
    { title: "مكونات طبيعية بالكامل", desc: "خالٍ من العطور الصناعية القاسية والمواد الحافظة والألوان الكيميائية المضرة." },
    { title: "علامة تجارية عالمية موثوقة", desc: "من إنتاج شركة DXN الحاصلة على ثقة ملايين العملاء في أكثر من 180 دولة." }
  ],
  en: [
    { title: "Premium DXN Formula", desc: "An exclusive blend featuring pure Ganoderma extract that restores bodily balance." },
    { title: "Easy To Apply", desc: "Perfect viscosity that spreads evenly and glides smoothly for comfortable massage cycles." },
    { title: "Pleasant Aroma", desc: "A delicate, stress-relieving botanical fragrance that wraps you in a clean, comforting scent." },
    { title: "Suitable For Massage", desc: "Created precisely for rehabilitation massage, sports therapy, or deep daily home styling." },
    { title: "Quality Ingredients", desc: "Zero harmful artificial chemicals, colorants, or petroleum derivatives." },
    { title: "Trusted International Brand", desc: "Manufactured by DXN, trusted by over 14 million people in 180+ countries." }
  ],
  fr: [
    { title: "Formule DXN Exclusive", desc: "Une alliance protectrice d'huile précieuse et d'extrait de champignon Reishi." },
    { title: "Facile à Appliquer", desc: "Viscosité idéale permettant une répartition homogène pour des massages prolongés." },
    { title: "Arôme Agréable & Zen", desc: "Un parfum naturel subtil qui invite au calme intérieur et à la déconnexion mentale." },
    { title: "Idéal pour tous Massages", desc: "Parfaite pour la kinésithérapie, les massages sportifs ou la détente du soir." },
    { title: "Ingrédients d'Origine Saine", desc: "Sans paraffines agressives ni conservateurs de synthèse nuisibles." },
    { title: "Marque Internationale de Confiance", desc: "Fabriquée avec le label de qualité légendaire DXN depuis plus de 30 ans." }
  ]
};

export const ganoMassageOilSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    { title: "أولاً: توزيع الزيت", desc: "ضع كمية مناسبة من زيت جانو على راحة يدك دلكها قليلاً لتدفئتها، ثم وزعها على المنطقة المستهدفة." },
    { title: "ثانياً: التدليك اللطيف", desc: "قم بتدليك المنطقة بحركات دائرية هادئة مع الضغط الخفيف لتنشيط الدورة الدموية وتغلغل المكونات." },
    { title: "ثالثاً: زيادة التدفق والاسترخاء", desc: "واصل التدليك بلطف حتى يتم توزيع الزيت وامتصاصه بالكامل، واكتشف كيف يزول تعب العضلات تماماً." },
    { title: "رابعاً: روتين الاسترخاء والاستشفاء", desc: "اجعل هذا التدليك جزءاً أساسياً منتظماً من روتين الاسترخاء اليومي للعناية بالجسم واستعادة حيويتك." },
    { title: "خامساً: الحفظ المناسب والتخزين", desc: "أغلق الزجاجة بإحكام بعد الاستخدام واحفظها في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة لدوام الفعالية." }
  ],
  en: [
    { title: "Step 1: Application", desc: "Apply a suitable portion of the oil to your palms to warm it, and spread over the desired areas." },
    { title: "Step 2: Smooth Massage", desc: "Gently run your fingers and massage in circular, upward motions using controlled, soothing pressure." },
    { title: "Step 3: Even Distribution", desc: "Continue massaging steadily until the palm-kernel and Reishi formula is fully and beautifully absorbed." },
    { title: "Step 4: relaxation Routine", desc: "Adopt this relaxing habit as part of your regular recovery ritual to ease muscle fatigue." },
    { title: "Step 5: Proper Preservation", desc: "Secure the cap tightly after every care session and store in a shaded, cool environment out of children's reach." }
  ],
  fr: [
    { title: "Étape 1: Application", desc: "Appliquez une quantité généreuse d'huile sur la paume de vos mains pour la réchauffer avant de l'étaler." },
    { title: "Étape 2: Massage Fluide", desc: "Massez délicatement la zone ciblée à l'aide de gestes circulaires pour stimuler et détendre les fibres." },
    { title: "Étape 3: Pénétration de l'Huile", desc: "Poursuivez le massage jusqu'à ce que la peau ait entièrement absorbé les actifs du Ganoderma." },
    { title: "Étape 4: Rituel de Détente", desc: "Intégrez ce soin relaxant dans votre routine hebdomadaire pour assouplir le corps." },
    { title: "Étape 5: Rangement & Conservation", desc: "Refermez le bouchon après utilisation et conservez le flacon dans un endroit frais, tempéré et à l'abri du soleil." }
  ]
};

export const whyChooseGanoList: Record<'en' | 'fr' | 'ar', string[]> = {
  ar: [
    "علامة تجارية عالمية موثوقة لأكثر من 30 عاماً",
    "مكونات عالية النقاء، مستخلصة من مزارع بيئية خاصة",
    "معايير جودة صارمة وشهادات GMP و ISO العالمية",
    "ملايين العملاء السعداء والمستفيدين حول العالم",
    "منتجات تعتمد على فلسفة الوقاية والعافية المتكاملة",
    "سمعة طويلة وممتازة في جودة منتجات فطر الجانوديرما"
  ],
  en: [
    "Trusted international brand for over 30 years",
    "Premium, clean ingredients sourced from proprietary organic farms",
    "Strict international quality guidelines under ISO & GMP certifications",
    "Millions of active, highly satisfied wellness consumers worldwide",
    "Products built around physical prevention and holistic bodily repair",
    "An unshakeable reputation for absolute quality, purity, and standard care"
  ],
  fr: [
    "Une marque internationale réputée depuis plus de 30 ans d'histoire",
    "Ingrédients premium cultivés dans des fermes organiques privées certifiées",
    "Contrôles sanitaires rigoureux (certifications internationales ISO & BPF/GMP)",
    "Des millions de clients fidèles et satisfaits dans plus de 180 pays",
    "Formulation axée sur le rétablissement holistique et la vitalité naturelle",
    "Une réputation irréprochable ancrée dans la recherche scientifique sur le Reishi"
  ]
};

export const ganoMassageOilReviews = [
  {
    id: 1,
    name: "فاطمة الزهراء (مراكش)",
    gender: "female",
    text: "زيت جانو أصبح رفيقي اليومي بعد العمل! يزيل تشنجات الظهر والأكتاف فوراً، ورائحته مهدئة جداً تشبه منتجعات السبا الفاخرة.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 2,
    name: "Karim Benjelloun (Casablanca)",
    gender: "male",
    text: "En tant que sportif amateur, j'utilise cette huile après mes entraînements intenses. L'effet décontractant musculaire est bluffant. Un produit de très haute qualité !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 3,
    name: "Sanaa El Idrissi (Rabat)",
    gender: "female",
    text: "Une huile exceptionnelle ! Elle hydrate ma peau très sèche sans laisser d'effet collant, et j'adore me masser le cou avec pour détendre le stress de mes journées.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 4,
    name: "يوسف الناصري (طنجة)",
    gender: "male",
    text: "جودة معترف بها من دي إكس إن. أستخدمه لعائلتي لتدليك المفاصل والراحة، زيت ناعم ويتغلغل بسرعة فائقة في البشرة.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: 5,
    name: "Amandine R. (Agadir)",
    gender: "female",
    text: "L'application est super douce. J'aime utiliser cette huile de massage comme soin corporel après mon bain chaud du soir. Le sommeil est tellement plus paisible !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150"
  },
  {
    id: 6,
    name: "أمين الهاشمي (فاس)",
    gender: "male",
    text: "كنت أعاني من تعب دائم في الرقبة بسبب العمل المكتبي الطويل. بعد أسبوع من استخدام هذا الزيت الرائع مع مساج خفيف شعرت بفارق كبير وراحة متكاملة.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150"
  }
];

export const ganoMassageOilFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  ar: [
    {
      q: "ما هو زيت جانو للمساج من DXN بالتفصيل؟",
      a: "زيت جانو للمساج هو مستحضر فاخر وطبيعي 100٪ يجمع بين زيت بذور النخيل الغني بالمواد الغذائية ومستخلص فطر الجانوديرما (الريشي) النادر. إنه منتج صحي وعضوي متكامل ومثالي للعناية بالبشرة وحماية اللياقة البدنية واسترخاء العضلات."
    },
    {
      q: "كيف يتم استخدامه بشكل مثالي؟",
      a: "يوصى بوضع كمية مناسبة على الجلد ثم تدليكها بحركات دائرية هادئة ببطء للمساعدة في الاسترخاء. يمكنك استخدامه للجسم بالكامل أو لتخفيف آلام مناطق معينة مثل الأكتاف أو عضلات الظهر المتشنجة."
    },
    {
      q: "هل هذا الزيت آمن ومناسب للاستخدام اليومي المستمر؟",
      a: "نعم، زيت جانو آمن تماماً وطبيعي 100٪ ومناسب للاستخدام اليومي المتكرر لجميع الأعمار وأنواع البشرة. تركيبته غير المسببة للحساسية تحمي رطوبة البشرة وتقيها من الجفاف."
    },
    {
      q: "ما الذي يميز زيت جانو للمساج عن الزيوت التقليدية المنتشرة؟",
      a: "زيت جانو يتميز بوجود فطر الجانوديرما (الريشي) الذي يعمل كمضاد طبيعي قوي للأكسدة، بالإضافة إلى احتنائه على نسبة ممتازة من فيتامينات A و E ومغذي النخيل العضوي مما يسرع ترميم البشرة وتغذيتها عكس الزيوت البترولية البسيطة."
    },
    {
      q: "هل يمكن استخدامه كجزء من الروتين الجمالي اليومي المعتاد؟",
      a: "بالتأكيد! يمكن استخدامه كمرطب فائق للجسم بعد الاستحمام، أو للتخلص من الجفاف الشديد في اليدين والأقدام وكزيت مهدئ خفيف قبل النوم لتعزيز الشعور بالهدوء والاسترخاء."
    },
    {
      q: "كيف يجب تخزين وحفظ الزيت لضمان بقائه فعالاً؟",
      a: "ينصح بإغلاق الزجاجة بإحكام بعد كل استخدام والاحتفاظ بها في درجة حرارة الغرفة العادية (مكان جاف ومظلم وبارد نسبياً) بعيداً عن الرطوبة الزائدة وأشعة الشمس والحرارة العالية لضمان الحفاظ على الخصائص الطبيعية للمكونات النشطة."
    }
  ],
  en: [
    {
      q: "What is DXN Gano Massage Oil in detail?",
      a: "DXN Gano Massage Oil is a premium, 100% natural formula combining the nutrient-dense profile of palm kernel oil with high-grade organic Ganoderma (Reishi) extract. It is designed to soothe muscles, protect skin health, and induce rich holistic physical relaxation."
    },
    {
      q: "How is it ideally used?",
      a: "Warm a few drops in your hands and massage gently onto clean skin using circular, rhythmic strokes. It is perfect both as a full body wellness builder or targeted relief for sore knees, lower back pressure, or tight neck areas."
    },
    {
      q: "Is it suitable for daily body care routines?",
      a: "Yes, Gano Massage Oil is highly non-comedogenic, biological, and completely safe for persistent daily use on all body skin types and by individuals of all ages. It maintains natural moisture-barrier values and counteracts heavy environmental dryness."
    },
    {
      q: "What makes it superior to ordinary mineral massage oils?",
      a: "Unlike mineral massage oils made with petroleum derivatives, Gano Massage Oil uses a pure palm kernel oil base that is naturally packed with Vitamin E (tocopherols) and powerful beta-carotenes, along with Reishi extract. This dual-action provides superior tissue oxygenation and antioxidant support."
    },
    {
      q: "Can I use it as a facial moisturizer or general body lotion?",
      a: "Absolutely! It works wonderfully as a deep hydrator after your evening bath. It can also be rubbed into rough heels, dry cuticles, or damaged patches to fast-track organic repair and soothe skin tension."
    },
    {
      q: "What is the recommended storage method?",
      a: "Simply seal the cap tightly after every session. Store the bottle upright in a cool, dark place away from active moisture and direct solar heat to preserve the bio-active molecules of our Reishi formula."
    }
  ],
  fr: [
    {
      q: "Qu'est-ce que l'huile de massage DXN Gano en détail ?",
      a: "L'huile de massage DXN Gano est une formule de bien-être totalement naturelle, combinant une huile pure de germe de palmier riche en nutriments à de l'extrait de Ganoderma (Reishi) adaptogène. Elle est conçue pour dissiper la fatigue physique, nourrir la peau et favoriser une profonde sensation de détente."
    },
    {
      q: "Quelle est la meilleure façon de l'utiliser ?",
      a: "Versez une petite quantité d'huile dans le creux de votre main, préchauffez-la, puis massez lentement et de manière rythmée le corps. Idéal pour un massage de l'ensemble du corps ou pour détendre des tensions localized (cou, épaules, articulations gênantes)."
    },
    {
      q: "Est-elle adaptée pour une application quotidienne ?",
      a: "Tout à fait. Sa composition pure et biologique est excellente pour un soin quotidien régulier du corps. Elle convient à tous les types de peau pour contrer le dessèchement cutané et restaurer la souplesse naturelle de l'épiderme."
    },
    {
      q: "Qu'est-ce qui la différencie des huiles de massage ordinaires ?",
      a: "La majorité des huiles de massage bon marché sont à base d'huiles minérales synthétiques (pétrochimie). L'huile de massage DXN utilise une base naturelle d'huile de palmier gorgée d'antioxydants (vitamine E) mariée au Ganoderma, ce qui nourrit réellement la peau en profondeur."
    },
    {
      q: "Puis-je l'utiliser comme hydratant corporel après la douche ?",
      a: "Oui, c'est même fortement recommandé ! Elle fait office de superbe barrière de protection contre la sécheresse de l'eau calcaire si vous l'appliquez après le bain chaud ou avant de vous coucher pour favoriser un sommeil serein."
    },
    {
      q: "Comment la conserver pour garder toute sa fraîcheur ?",
      a: "Conservez simplement le flacon dans un endroit tempéré, à l'abri de l'humidité excessive de la salle de bain et de la lumière directe du soleil. Veillez à bien revisser le bouchon pour protéger l'intégrité des ingrédients actifs."
    }
  ]
};

export const ganoMassageOilPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    { id: 'single', title: "عبوة واحدة (زيت جانو)", desc: "عبوة زيت المساج الفاخرة سعة 150 مل.", price: 120, badge: "باقة التجربة المريحة" },
    { id: 'double', title: "عبوتان (توفير خاص)", desc: "احصل على عبوتين واستفد من حسم ممتاز وشحن ميسر.", price: 220, badge: "الباقة الأكثر طلباً 🔥" },
    { id: 'family', title: "3 عبوات (باقة العائلة والسبا)", desc: "مثالية للاستخدام المنتظم أو لجميع أفراد الأسرة بتوفير استثنائي.", price: 300, badge: "أكبر توفير + شحن مجاني 🎁" }
  ],
  en: [
    { id: 'single', title: "1 Pouch / Bottle (150ml)", desc: "Premium single bottle of Gano Massage Oil.", price: 120, badge: "Trial Comfort Pack" },
    { id: 'double', title: "2 Bottles (Save Today)", desc: "Keep one at home and one on travel. Excellent value.", price: 220, badge: "Most Popular Option 🔥" },
    { id: 'family', title: "3 Bottles (Wellness Bundle)", desc: "Ideal for regular therapeutic massages and ultimate home spa comfort.", price: 300, badge: "Best Value + Free Delivery 🎁" }
  ],
  fr: [
    { id: 'single', title: "1 Flacon (150ml)", desc: "Flacon d'huile de massage Gano premium.", price: 120, badge: "Pack Découverte" },
    { id: 'double', title: "2 Flacons (Économies)", desc: "Idéal pour prolonger vos séances de bien-être à prix doux.", price: 220, badge: "Le Plus Demandé 🔥" },
    { id: 'family', title: "3 Flacons (Cure Bien-Être)", desc: "Le meilleur choix pour toute la famille avec livraison offerte.", price: 300, badge: "Meilleure Offre + Cadeau 🎁" }
  ]
};
