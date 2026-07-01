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

export const ganoSoapLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "✨ روتين العناية والجمال اليومي الفاخر",
    heroTitle: "نظافة يومية فاخرة مع صابون Ganozhi من DXN",
    heroSub: "صابون عالي الجودة بمكونات مختارة بعناية يمنح تجربة تنظيف منعشة وإحساساً بالنظافة والعناية اليومية بالبشرة والوجه.",
    heroCTAOrder: "اطلب الآن",
    heroCTALearn: "اكتشف المزيد",
    benefitsHeading: "فوائد صابون Ganozhi للعـناية المتكاملة",
    benefitsSub: "تطهير لطيف ونقاء مستخلص من جودة الطبيعة لروتينك اليومي العذب.",
    overviewTitle: "فخامة صابون جانيوزي الطبيعي",
    overviewHeading: "عناية يومية نقية وتغذية لطيفة تليق ببشرتك",
    overviewParagraph1: "تم صياغة صابون جانوزي الفاخر من DXN بعناية فائقة باستخدام مستخلص فطر الجانوديرما (الريشي) الاستثنائي ومكونات لطيفة لتوفير تجربة غسيل ممتازة وممتعة للبشرة.",
    overviewParagraph2: "تساعد تركيبته الفريدة في الحفاظ على رطوبة الجلد الطبيعية وتركه منتعشاً وناعماً ونظيفاً وخالياً من الرواسب والشوائب الخارجية كجزء لا غنى عنه من روتينك الصحي اليومي.",
    featuresHeading: "الميزات والمواصفات الأساسية",
    featuresSub: "تفاصيل الدقة والجودة التي تجعل صابون جانوزي خياراً فريداً ومميزاً.",
    howToUseHeading: "طريقة الاستخدام المثالية والسهلة",
    howToUseSub: "اتباع هذه الخطوات البسيطة يمنح بشرتك شعوراً بملمس السبا والعناية الفاخرة.",
    whyChooseHeading: "لماذا تختار علامة DXN العالمية؟",
    whyChooseSub: "نلتزم بأعلى معايير التصنيع والنقاء لنمنح عائلتك منتجات صحية تدوم طويلاً.",
    reviewsHeading: "تجارب وآراء عملائنا المميزين",
    reviewsSub: "آراء حقيقية وصادقة ممن جعلوا صابون جانوزي ركيزة أساسية للعناية اليومية ونظافة البشرة.",
    packagesTitle: "اختر الباقة الحصرية المناسبة لك",
    packagesSub: "وفر أكثر مع مجموعات التوفير واستمتع بشحن محلي سريع وعروض مغرية اليوم.",
    checkoutHeading: "قم بتأكيد طلبك الآن وسنتواصل معك فوراً للتأكيد",
    checkoutSub: "يرجى ملء الاستمارة أدناه للحصول على شحن سريع وتسليم مريح ليدك.",
    checkoutNameLabel: "الاسم الكامل الكريم *",
    checkoutAddressLabel: "عنوان التوصيل السكني بالتفصيل والمدينة *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط *",
    checkoutSubmitBtn: "تأكيد الطلب السريع وإرساله عبر الواتساب",
    secureCheckoutBadge: "ضمان الجودة الفائقة - دفع عند الاستلام آمن وسريع 100٪",
    faqHeading: "الأسئلة الشائعة حول صابون جانوزي",
    faqSub: "إجابات شافية ومبسطة وتفاصيل هامة لضمان أفضل استخدام لمنتجك."
  },
  en: {
    heroBadge: "✨ Ultra-Premium Daily Skincare Routine",
    heroTitle: "Luxury Daily Cleansing with DXN Ganozhi Soap",
    heroSub: "A high-quality soap with carefully selected ingredients, providing a refreshing cleansing experience and a distinct feeling of comfort and beauty as part of your daily personal care routine.",
    heroCTAOrder: "Order Now",
    heroCTALearn: "Discover More",
    benefitsHeading: "Premium Benefits of DXN Ganozhi Soap",
    benefitsSub: "Gentle cleansing and clean freshness derived directly from natural botanical ingredients.",
    overviewTitle: "Luxury Botanical Ganozhi Soap",
    overviewHeading: "Gentle Daily Nourishment and Purity for Your Skin",
    overviewParagraph1: "DXN Ganozhi Soap is meticulously crafted with high-grade organic Ganoderma (Reishi) extract and vitamins. Its premium formulation respects your skin's delicate moisture barrier while wiping away impurities.",
    overviewParagraph2: "Choosing this luxury skin cleanser ensures your face and body enjoy a rich, comforting lather free of harsh mineral synthetics, promoting clean skin vitality every single day.",
    featuresHeading: "Key Product Features",
    featuresSub: "What makes DXN Ganozhi Soap stand out as a top-tier daily care essential.",
    howToUseHeading: "How to Use for Optimal Results",
    howToUseSub: "Easy steps to turn your everyday shower into a therapeutic spa ritual.",
    whyChooseHeading: "Why Choose the Trusted DXN Brand?",
    whyChooseSub: "Pioneering organic wellness with global quality certifications and millions of loyal consumers.",
    reviewsHeading: "Trusted Customer Experiences",
    reviewsSub: "Real stories from people who elevated their daily hygiene and self-care routine.",
    packagesTitle: "Select Your Preferred Glow Pack",
    packagesSub: "Save more with our bulk family bundles and enjoy fast home shipping today.",
    checkoutHeading: "Confirm Your Order Now & Elevate Your Care",
    checkoutSub: "Fill out the simple billing details below for instant, safe door-to-door delivery.",
    checkoutNameLabel: "Full Name *",
    checkoutAddressLabel: "Full Shipping Address & City *",
    checkoutPhoneLabel: "Active WhatsApp Phone Number *",
    checkoutSubmitBtn: "Confirm Order via WhatsApp",
    secureCheckoutBadge: "Premium Satisfaction - Safe Cash On Delivery (COD)",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Find fast, helpful answers regarding DXN Ganozhi Soap ingredients, daily application, and storage."
  },
  fr: {
    heroBadge: "✨ Rituel de Beauté Quotidien Ultra-Premium",
    heroTitle: "Toilette Quotidienne de Luxe avec le Savon Ganozhi DXN",
    heroSub: "Un savon de qualité supérieure composé d'ingrédients rigoureusement sélectionnés, apportant une expérience nettoyante rafraîchissante et une sensation de propreté et douceur continue.",
    heroCTAOrder: "Commander Maintenant",
    heroCTALearn: "En Savoir Plus",
    benefitsHeading: "Les Bienfaits Précieux du Savon Ganozhi",
    benefitsSub: "Un lavage d'une douceur absolue et une pureté naturelle pour illuminer votre peau jour après jour.",
    overviewTitle: "L'Excellence du Savon Ganoderma",
    overviewHeading: "Une Douce Caresse Protectrice et Revitabilisante",
    overviewParagraph1: "Le Savon DXN Ganozhi est soigneusement élaboré en combinant les bienfaits incomparables de l'extrait de Reishi biologique et d'ingrédients doux pour préserver l'équilibre naturel de votre peau.",
    overviewParagraph2: "Avec sa texture veloutée et sa mousse enveloppante de luxe, il élimine efficacement l'excès de sébum et la poussière urbaine, rendant votre peau parfaitement saine et hydratée.",
    featuresHeading: "Caractéristiques Majeures du Savon",
    featuresSub: "La signature de qualité internationale de DXN au service de votre bien-être corporel.",
    howToUseHeading: "Conseils et Mode d'Emploi",
    howToUseSub: "Des gestes très simples pour optimiser l'action des antioxydants sur votre épiderme.",
    whyChooseHeading: "Pourquoi Faire Confiance à DXN ?",
    whyChooseSub: "Un leader mondial de l'agriculture biologique proposant des suppléments et soins certifiés.",
    reviewsHeading: "Avis & Témoignages de nos Clients",
    reviewsSub: "Découvrez l'expérience de ceux qui ont adopté le savon Ganozhi dans leur routine d'hygiène.",
    packagesTitle: "Choisissez Votre Offre Spéciale",
    packagesSub: "Bénéficiez de remises exclusives et de la livraison à domicile rapide et sécurisée.",
    checkoutHeading: "Finalisez Votre Commande en 1 Clic",
    checkoutSub: "Saisissez vos coordonnées de livraison ci-dessous pour une livraison chez vous avec paiement à la réception.",
    checkoutNameLabel: "Nom Complet *",
    checkoutAddressLabel: "Adresse de Livraison Détaillée & Ville *",
    checkoutPhoneLabel: "Numéro WhatsApp Actif *",
    checkoutSubmitBtn: "Confirmer la Commande via WhatsApp",
    secureCheckoutBadge: "Haute Qualité Garantie - Livraison à Domicile Rapide avec Paiement Cash",
    faqHeading: "Foire Aux Questions",
    faqSub: "Retrouvez les réponses indispensables pour tirer pleinement profit de votre savon."
  }
};

export const ganoSoapBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "تطهير وتنظيف يومي لطيف", desc: "ينظف خلايا البشرة برفق ويزيل الشوائب العميقة دون التسبب بجفاف الجلد أو تهيجه." },
    { title: "إحساس غامر بالانتعاش والنظافة", desc: "يمنحك انتعاشاً يدوم بفضل خصائصه اللطيفة التي تعيد الحيوية الطبيعية لبشرتك." },
    { title: "مكونات منتقاة فائقة الجودة", desc: "غني بخلاصة مسحوق فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي لتعزيز صحة غلاف البشرة." },
    { title: "تجربة استحمام ورعاية ممتعة", desc: "تمنحك تركيبته الممتازة تجربة استحمام لطيفة ومليئة بالهدوء تشبه خدمات المنتجعات الصحية." },
    { title: "رغوة غنية مخملية وكثيفة", desc: "يوفر رغوة كريمية فاخرة وسلسة تنساب بسهولة فائقة على كافة أنحاء الجسم والوجه للترطيب." },
    { title: "جودة وتصنيع DXN الموثوق", desc: "منتج أصلي معتمد حاصل على شهادات الجودة العالمية وحظي بثقة ملايين العائلات الصحية." }
  ],
  en: [
    { title: "Gentle daily cleansing", desc: "Removes skin oiliness and trapped impurities delicately without peeling away critical surface moisture." },
    { title: "Fresh and clean feeling", desc: "Leaves an uplifting and lasting cooling sensation that promotes comfortable respiration of skin pores." },
    { title: "Premium quality ingredients", desc: "Enriched with high-end Ganoderma (Reishi) extract and pure components designed for dermal integrity." },
    { title: "Pleasant daily skincare experience", desc: "Transforms standard hygiene into a soothing, wellness-centered spa ritual right in your bathroom." },
    { title: "Rich luxurious lather", desc: "Creates a dense, velvety, and soft microscopic foam that envelopes the body for unmatched washing delight." },
    { title: "Trusted DXN quality", desc: "Formulated and manufactured in state-of-the-art facilities following strict international GMP safety policies." }
  ],
  fr: [
    { title: "Nettoyage quotidien extra-doux", desc: "Lave en douceur en retirant l'excès de sébum et la pollution sans jamais tirailler la peau." },
    { title: "Sensation de fraîcheur durable", desc: "Procure un élan de pureté et d'énergie saine qui persiste de longues heures après la douche." },
    { title: "Ingrédients de haute qualité", desc: "Enrichi en extrait de champignon Reishi adaptogène et agents lavants hautement respectueux de la peau." },
    { title: "Expérience sensorielle relaxante", desc: "Fait de votre douche un instant privilégié de détente physique et mentale digne d'un spa." },
    { title: "Mousse riche et onctueuse", desc: "Développe une mousse veloutée généreuse qui glisse smoothly sur le corps pour un confort absolu." },
    { title: "Qualité universelle DXN", desc: "Bénéficie de l'expertise rigoureuse d'une marque de renommée mondiale leader du bien-être organique." }
  ]
};

export const ganoSoapFeatures: Record<'en' | 'fr' | 'ar', { title: string; desc: string }[]> = {
  ar: [
    { title: "مستخلص الجانوديرما الفاخر", desc: "تركيبة حصرية غنية بالريشي الفاخر الذي يساعد في بث الحيوية والجمال لبشرتك." },
    { title: "تطهير لطيف وعميق", desc: "ينظف الوجه وباقي أجزاء الجسم دون الإضرار بزيوت البشرة المرطبة والحموضة الطبيعية للجلد." },
    { title: "رغوة غنية وكثيفة", desc: "تتحول قطعة الصابون بلمسات بسيطة من الماء إلى رغوة لينة تعزز النعومة وتحارب التراكمات." },
    { title: "مكونات طبيعية منتقاة", desc: "مصاغ بمواد راقية وعالية النقاء للحفاظ على نظافة صحية وخلو تام من مسببات الحساسية الجلدية." },
    { title: "استخدام يومي سهل ومريح", desc: "حجم مثالي يسهل التعامل معه يومياً لليدين، والوجه، والجسم أثناء الاستحمام والوضوء." },
    { title: "علامة تجارية دولية آمنة", desc: "من إنتاج شركة دي إكس إن العريقة التي تزود ملايين العملاء بالصحة الراقية في أكثر من 180 دولة." }
  ],
  en: [
    { title: "Premium DXN Formula", desc: "Infused with pure organic Ganoderma extract (Reishi) known for its superb antioxidant support." },
    { title: "Gentle Cleansing Experience", desc: "Washes away dirt, dead cells, and sweat without causing irritation, redness, or typical soap dryness." },
    { title: "Rich Luxurious Foam", desc: "Generates an abundant, creamy, and silky microscopic bubbly texture with minimal water usage." },
    { title: "Quality Sourced Ingredients", desc: "Strictly selected compounds, preserving the natural pH balance and cellular defense of all skin types." },
    { title: "Easy Daily Use", desc: "An ergonomically shaped soap bar that fits perfectly in hands, ideal for daily face washing and body showers." },
    { title: "Trusted International Brand", desc: "Brought to you by DXN, the world leader in Reishi products, ensuring maximum safety and satisfaction." }
  ],
  fr: [
    { title: "Formule Premium DXN", desc: "Contient une concentration optimale de Ganoderma (Reishi) bio riche en principes actifs réparateurs." },
    { title: "Expérience Lavante Douce", desc: "Élimine instantanément les résidus de pollution sans assécher la barrière lipidique cutanée." },
    { title: "Mousse Somptueuse & Onctueuse", desc: "Une texture de bulles hyper denses et soyeuses qui fondent sur la peau pour un toucher soyeux." },
    { title: "Ingrédients de Premier Choix", desc: "Sélection rigoureuse d'huiles et nutriments préservant le pH naturel de l'épiderme." },
    { title: "Usage Quotidien Ultra-Pratique", desc: "Un galet ergonomique idéal pour la toilette quotidienne du visage, des mains et du corps entier." },
    { title: "Marque Mondiale de Référence", desc: "La garantie DXN reconnue internationalement pour son éthique de pureté et d'excellence." }
  ]
};

export const ganoSoapSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    { title: "1. تبليل البشرة", desc: "بلل بشرتك، وجهك أو جسمك بالماء الفاتر لفتح المسام برفق وإعدادها للتنظيف." },
    { title: "2. صناعة الرغوة الفاخرة", desc: "افرغ الصابون بين يديك المبللتين وافركهما معاً لتكوين رغوة غنية، مخملية ومكثفة." },
    { title: "3. التدليك والتنظيف اللطيف", desc: "وزع الرغوة الفاخرة على المنطقة المستهدفة ودلك بشرتك بحركات دائرية هادئة لتنظيفها." },
    { title: "4. الشطف الكامل بالماء", desc: "اشطف بشرتك جيداً بالماء الفاتر للتخلص من كل الرغوة، واستمتع بنقاء بشرتك ونعومتها الفورية." },
    { title: "5. روتين العناية اليومي", desc: "استخدم صابون جانوزي يومياً بانتظام كجزء أساسي وراقي من روتين العناية والجمال المتكامل لجسمك وعائلتك." }
  ],
  en: [
    { title: "1. Wet Skin", desc: "Splash your face, hands, or body with lukewarm water to open skin pores gently and prime them." },
    { title: "2. Create Rich Lather", desc: "Rub the DXN Ganozhi soap bar between your wet palms to create a thick, dense, and luxurious mousse." },
    { title: "3. Gentle Massage", desc: "Apply the velvety foam onto your desired skin areas and massage gently in slow circular upward motions." },
    { title: "4. Rinse Thoroughly", desc: "Wash off the foam completely with clean water, feeling the instant smoothness and clean skin tone." },
    { title: "5. Daily Personal Care Routine", desc: "Incorporate Ganozhi Soap into your morning and evening hygiene routines for optimal skin comfort and natural freshness." }
  ],
  fr: [
    { title: "1. Humidifier la Peau", desc: "Mouillez votre visage ou votre corps avec de l'eau tiède pour préparer la peau à recevoir les actifs." },
    { title: "2. Faire Mousser", desc: "Frictionnez délicatement le savon entre vos mains humides pour libérer sa mousse blanche et généreuse." },
    { title: "3. Masser en Douceur", desc: "Appliquez la mousse onctueuse sur la peau et effectuez de légers mouvements circulaires relaxants." },
    { title: "4. Rincer Abondamment", desc: "Rincez soigneusement à l'eau claire pour éliminer toute trace de mousse, découvrant une peau nette." },
    { title: "5. Adopter au Quotidien", desc: "Utilisez le savon Ganozhi chaque jour pour maintenir une barrière cutanée saine, douce et fraîche." }
  ]
};

export const whyChooseSoapList: Record<'en' | 'fr' | 'ar', string[]> = {
  ar: [
    "علامة تجارية عالمية عريقة تأسست منذ أكثر من 30 عاماً",
    "مكونات عالية النقاء، مستخرجة وعضوية بالكامل من مزارع DXN الخاصة",
    "تخضع لرقابة صارمة وتحمل أرقى الشهادات الدولية GMP و ISO9001",
    "حاز على ثقة ورضا ملايين المستهلكين الواعين صحياً في 180 دولة",
    "فلسفة إنتاج تعتمد على حماية الصحة الجسدية الطبيعية والوقاية الشاملة",
    "خبرة ممتدة لعقود في تسخير فوائد فطر الجانوديرما الفريد للعناية الفاخرة"
  ],
  en: [
    "Trusted international health brand for over 30 years of history",
    "Premium quality, organic ingredients sourced from clean, eco-friendly farms",
    "Strict international hygiene and pharmaceutical safety rules (GMP, ISO certifications)",
    "Beloved by millions of satisfied, wellness-oriented customers in 180+ countries",
    "Holistic personal care approach focused on daily balance and body prevention",
    "Long-standing, flawless global reputation for cultivating premium Reishi products"
  ],
  fr: [
    "Une marque internationale emblématique forte de plus de 30 ans d'histoire",
    "Composants organiques de qualité supérieure cultivés dans des fermes privées éco-responsables",
    "Normes de fabrication ultra-rigoureuses avec certifications mondiales GMP et ISO",
    "Recommandé et loué par des millions de consommateurs exigeants dans 180 pays",
    "Une approche holistique du soin quotidien visant la préservation de la vitalité corporelle",
    "Une expertise historique inégalée dans l'extraction des bienfaits protecteurs du Reishi"
  ]
};

export const ganoSoapReviews = [
  {
    id: 1,
    name: "مريم العلمي (الدار البيضاء)",
    gender: "female",
    text: "صابون جانوزي غيّر مفهومي عن غسول الوجه! رغوته كثيفة وناعمة جداً، ينظف البشرة بلطف ويتركها منتعشة ونظيفة بالكامل وخالية من أي لمعان دهني مزعج.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 2,
    name: "Yassine El Mansouri (Rabat)",
    gender: "male",
    text: "Savon exceptionnel pour la toilette quotidienne. La qualité du Reishi de DXN se fait ressentir dès la première utilisation. Ma peau est incroyablement fraîche et propre !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 3,
    name: "زينب بنكيران (فاس)",
    gender: "female",
    text: "أستخدمه يومياً كجزء من روتيني الصباحي والمسائي لنظافة وجهي. ممتاز جداً وبديل طبيعي وصحي رائع للصابون العادي الممتلئ بالمعطرات الكيميائية الضارة.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 4,
    name: "Rachid Hariri (Tangier)",
    gender: "male",
    text: "Je l'utilise pour tout le corps lors de ma douche. La quantité de mousse est généreuse et il se rince facilement. Un vrai moment de spa à la maison avec l'assurance DXN.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: 5,
    name: "أمينة بوزيد (مراكش)",
    gender: "female",
    text: "اشتريت باقة الثلاث حبات، التوفير مذهل! صابون راقي ورائحته نظافة منعشة ولطيفة. جميع أفراد عائلتي صغاراً وكباراً أصبحوا يستخدمونه في حمامهم اليومي.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    id: 6,
    name: "Karim F. (Marrakech)",
    gender: "male",
    text: "Une douceur incomparable. Ma peau tolère très mal les savons classiques, mais celui-ci est ultra-confortable et purifiant. Je le recommande sans hésiter pour l'hygiène quotidienne.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150"
  }
];

export const ganoSoapFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  ar: [
    {
      q: "ما هو صابون Ganozhi من DXN بالتفصيل؟",
      a: "صابون جانوزي هو صابون فاخر وعالي الجودة طبيعي وصحي بالكامل، تم تصنيعه بتركيبة غنية تحتوي على مستخلص فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي. صُمم خصيصاً لتنظيف وتطهير الوجه والجسم واليدين بلطف دون تجريد البشرة من رطوبتها الطبيعية."
    },
    {
      q: "كيف يتم استخدامه بطريقة صحيحة؟",
      a: "بلل الجلد بالماء الفاتر، ثم افرك الصابون بين يديك لتكوين رغوة غنية وكثيفة ومخملية. ضع الرغوة على بشرتك ودلكها بلطف بحركات دائرية هادئة لبضع ثوانٍ لتنظيفها، ثم اشطفها جيداً بالماء النظيف وعقمها بالمنشفة بلين."
    },
    {
      q: "هل هذا الصابون مناسب للاستخدام اليومي المستمر؟",
      a: "نعم، صابون جانوزي آمن ولطيف للغاية، وهو خيار مثالي للاستخدام اليومي المتكرر للتنظيف والنظافة الشخصية الصباحية والمسائية لكافة أفراد العائلة ولجميع أنواع البشرة."
    },
    {
      q: "ما الذي يميز صابون جانوزي عن أنواع الصابون العادية المتوفرة بالأسواق؟",
      a: "على عكس الصابون العادي التجاري المليء بالمواد البترولية المعطرة والعطور الصناعية والمواد الكيميائية القاسية التي تسبب جفاف وتهيج البشرة وسحب زيوتها المفيدة، يحتوي صابون جانوزي على مغذيات طبيعية وبحضور رائد لفطر الجانوديرما الذي يغذي البشرة ويحافظ على توازن الرقم الهيدروجيني (pH) الطبيعي والآمن للجلد."
    },
    {
      q: "هل هو مناسب للعناية اليومية بالوجه والنظافة الشخصية الحساسة؟",
      a: "بالتأكيد، وبفضل تركيبته فائقة التوازن والخالية من المواد الضارة والمطورة خصيصاً للعناية اليومية الفاخرة، يمنح غسول الفم رغوة لطيفة جداً للوجه واليدين تترك ملمساً مخملياً وتساعد في الحفاظ على المظهر المتألق والنظيف."
    },
    {
      q: "كيف يجب حفظ وتخزين الصابون لدوام فاعليته وتوفيره؟",
      a: "للاستمتاع بالصابون لأطول فترة ممكنة، يوصى بوضعه بعد كل استخدام في حاملة صابون تسمح بتصريف المياه جيداً ليبقى جافاً وبحالة ممتازة، بعيداً عن الغمر المستمر بالماء والحرارة العالية المباشرة لضمان دوام صلابته وقوته الاقتصادية."
    }
  ],
  en: [
    {
      q: "What is DXN Ganozhi Soap in detail?",
      a: "DXN Ganozhi Soap is a luxury, top-shelf daily skincare soap formulated with premium organic Ganoderma (Reishi) extract and enriched with natural skin protection builders. It is specifically designed to cleanse your skin delicately while maintaining its organic, healthy hydration standards."
    },
    {
      q: "How should it be ideally used?",
      a: "Wet your skin with warm water. Rub the soap bar between your wet hands until a dense, velvety lather forms. Apply this silky foam onto your face or body, massaging softly in circular motions. Rinse thoroughly with clean water."
    },
    {
      q: "Can DXN Ganozhi Soap be used daily?",
      a: "Absolutely. Due to its ultra-gentle, non-irritating, and pH-balanced natural formula, Ganozhi Soap is perfect for continuous twice-daily (morning and night) use as a staple of your hygiene and skincare routine."
    },
    {
      q: "What makes it different from ordinary drugstore soaps?",
      a: "Ordinary commercial soaps often use harsh detergents, petroleum fillers, and synthetic scents that destroy the skin's protective acid mantle, causing severe dryness or oil-rebound. In contrast, DXN Ganozhi Soap is formulated with organic Reishi extract which nourishes skin cells, respects structural lipids, and preserves skin comfort."
    },
    {
      q: "Is it suitable for delicate facial skin and sensitive types?",
      a: "Yes, it is suitable for face, hands, and full body cleansing. The formula avoids harsh synthetic compounds, ensuring that even sensitive skin types can enjoy a luxurious, non-drying, and refreshing wash every day."
    },
    {
      q: "How should Ganozhi Soap be stored to maximize its lifespan?",
      a: "To ensure economic usage, always place the soap bar on a well-draining soap dish or well-ventilated stand after use. Keeping it dry between washes prevents it from turning soft and ensures the bar lasts much longer."
    }
  ],
  fr: [
    {
      q: "Qu'est-ce que le Savon DXN Ganozhi en détail ?",
      a: "Le Savon Ganozhi DXN est un soin lavant haut de gamme, formulé à base d'extrait de Ganoderma lucidum (Reishi) et d'huiles nutritives naturelles. Il élimine délicatement les impuretés du visage et du corps tout en préservant le film protecteur de la peau."
    },
    {
      q: "Comment utiliser ce savon de façon optimale ?",
      a: "Faites mousser le savon entre vos mains mouillées à l'eau tiede jusqu'à l'obtention d'une mousse généreuse. Appliquez cette mousse veloutée sur le visage ou le corps en massant légèrement par mouvements circulaires, puis rincez soigneusement à l'eau claire."
    },
    {
      q: "Est-il adapté pour un usage quotidien ?",
      a: "Oui, tout à fait. Sa formule douce et équilibrée respecte le pH naturel de votre épiderme, ce qui le rend idéal pour une utilisation quotidienne répétée, matin et soir, pour toute la famille."
    },
    {
      q: "Qu'est-ce qui le différencie des savons ordinaires ?",
      a: "Les savons du commerce contiennent souvent des sulfates agressifs et des parfums chimiques qui irritent et dessèchent la barrière hydrolipidique. Le Savon Ganozhi de DXN utilise l'extrait de Reishi, un puissant antioxydant naturel qui nourrit et purifie la peau sans jamais l'assécher."
    },
    {
      q: "Convient-il pour laver le visage et les peaux sensibles ?",
      a: "Oui. Grâce à sa richesse en éléments apaisants et hydratants, il convient parfaitement à la peau fine et délicate du visage, régulant le sébum sans agresser l'épiderme."
    },
    {
      q: "Comment conserver le savon pour prolonger sa durée de vie ?",
      a: "Pour maximiser son utilisation, déposez toujours le savon Ganozhi sur un porte-savon ajouré après usage. Cela permet à l'eau de s'égoutter et évite que le galet ne ramollisse prématurément, préservant ainsi sa fermeté."
    }
  ]
};

export const ganoSoapPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    { id: 'single', title: "صابونة واحدة (تجربة لطيفة)", desc: "قطعة واحدة للتمتع برغوة ونظافة مميزة يومياً.", price: 75, badge: "باقة التجربة الشخصية" },
    { id: 'double', title: "صابونتان (التوفير المتوهج)", desc: "مجموعتان من الصابون الفاخر لتوفير مستمر وحماية للعائلة.", price: 130, badge: "الخيار الأكثر شعبية 🔥" },
    { id: 'family', title: "3 قطع صابون (العناية الكاملة الفاخرة)", desc: "صفقة العائلة الاستثنائية بخصم مذهل وشحن سريع للغاية.", price: 180, badge: "أفضل قيمة توفير + شحن مجاني 🎁" }
  ],
  en: [
    { id: 'single', title: "1 Soap Bar (Trial Freshness)", desc: "Single premium bar of DXN Ganozhi Soap for daily use.", price: 75, badge: "Trial Care Pack" },
    { id: 'double', title: "2 Soap Bars (Double Glow)", desc: "Maintain your skincare in different bathrooms. Excellent value.", price: 130, badge: "Most Popular Option 🔥" },
    { id: 'family', title: "3 Soap Bars (Complete Family Care)", desc: "Maximum savings bundle with absolute priority free shipping.", price: 180, badge: "Best Value + Free Delivery 🎁" }
  ],
  fr: [
    { id: 'single', title: "1 Pain de Savon (Essai Douceur)", desc: "Un savon individuel de prestige pour découvrir l'éclat Ganozhi.", price: 75, badge: "Pack Découverte" },
    { id: 'double', title: "2 Pains de Savon (Économie & Éclat)", desc: "Idéal pour équiper vos pièces d'eau ou prolonger votre soin.", price: 130, badge: "Le Choix Préféré 🔥" },
    { id: 'family', title: "3 Pains (Pureté & Force Familiale)", desc: "Le meilleur rapport qualité/prix pour toute la maisonnée et livraison offerte.", price: 180, badge: "Meilleure Offre + Cadeau 🎁" }
  ]
};
