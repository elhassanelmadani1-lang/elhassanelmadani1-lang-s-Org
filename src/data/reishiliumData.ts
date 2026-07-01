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
  ctaHeading: string;
  contactUs: string;
}

export const reishiliumLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "✨ غذاء ملكي مميز وحيوية طبيعية فائقة",
    heroTitle: "اكتشف القوة الطبيعية مع DXN Reishilium Powder",
    heroSub: "تركيبة مميزة تجمع بين مكونات مختارة بعناية لتمنحك تجربة غذائية فاخرة تناسب نمط الحياة العصري والمهتم بالعافية.",
    heroCTAOrder: "اطلب الآن",
    heroCTALearn: "اكتشف المزيد",
    benefitsHeading: "فوائد ريشيليوم المذهلة لنمط حياة صحي ومتكامل",
    benefitsSub: "توليفة ممتازة من العناصر الحيوية الطبيعية التي تدعم توازنك ونشاطك اليومي بأعلى معايير النقاء.",
    overviewTitle: "سر الغذاء المتوازن",
    overviewHeading: "تركيبة علمية دقيقة تدعم الحيوية الطبيعية الشاملة",
    overviewParagraph1: "مسحوق ريشيليوم دي إكس إن (DXN Reishilium Powder) هو منتج غذائي متوازن ومصمم بعناية فائقة للأفراد الذين يبحثون عن حلول صحية فاخرة وطبيعية بالكامل. بفضل صيغته سهلة المزج والاستخدام اليومي، فإنه يوفر لك خياراً ممتازاً لتعزيز التغذية والوقاية والنشاط المستدام دون عناء.",
    overviewParagraph2: "يتم إنتاج هذا المكمل الفاخر وفقاً لأعلى بروتوكولات الرقابة والجودة في مزارع دي إكس إن العالمية لضمان النقاء، الخلو التام من المواد الحافظة، والامتثال لأرقى معايير الجودة والاستدامة الدولية.",
    featuresHeading: "المميزات الأساسية لـ DXN Reishilium Powder",
    featuresSub: "أسرار الجودة والنقاء التي تجعل Reishilium المكمل المفضل لرواد العافية.",
    howToUseHeading: "طريقة الاستخدام والتحضير البسيطة",
    howToUseSub: "خطوات سهلة ومريحة لدمج مسحوق ريشيليوم الفاخر في روتينك الصحي اليومي.",
    whyChooseHeading: "لماذا تختار علامة DXN العالمية؟",
    whyChooseSub: "الريادة والجودة العضوية منذ أكثر من 30 عاماً في خدمة ملايين العائلات.",
    reviewsHeading: "تجارب واقعية من عملاء سميرة ناتورال",
    reviewsSub: "آراء صادقة لعملاء يشاركون معنا رحلة عافيتهم ونشاطهم اليومي المتجدد مع مسحوق ريشيليوم.",
    packagesTitle: "باقات التوفير الحصرية - ريشيليوم الأصلي 100%",
    packagesSub: "حدد العرض المناسب لعائلتك الآن واستفد من الشحن السريع المجاني والدفع عند الاستلام بالمغرب.",
    checkoutHeading: "تأكيد الطلب السريع والدفع نقداً عند الاستلام",
    checkoutSub: "يرجى تعبئة الحقول لتوصيل طلبك مباشرة لباب منزلك بالمدينة.",
    checkoutNameLabel: "الاسم الكامل لسيادتكم *",
    checkoutAddressLabel: "عنوان السكن أو العمل لاستلام الطرد بالكامل *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط لمتابعة الشحن والتوصيل *",
    checkoutSubmitBtn: "تأكيد وإرسال الطلب عبر الواتساب",
    secureCheckoutBadge: "ضمان المنتج الأصلي 100٪ من DXN - الدفع بعد فحص ومعاينة الطرد",
    faqHeading: "الأسئلة الشائعة حول DXN Reishilium Powder",
    faqSub: "كل الاستفسارات والمعلومات الدقيقة التي تود معرفتها للاستفادة الكاملة من هذا الغذاء المتميز.",
    ctaHeading: "اجعل العافية جزءاً من روتينك اليومي مع DXN Reishilium Powder",
    contactUs: "تواصل معنا"
  },
  en: {
    heroBadge: "✨ Premium Royal Nutrition & Peak Vitality",
    heroTitle: "Discover the Natural Power of DXN Reishilium Powder",
    heroSub: "A carefully formulated nutritional product designed for individuals seeking premium-quality wellness. Its convenient powder format makes it easy to incorporate into a daily routine.",
    heroCTAOrder: "Buy Now",
    heroCTALearn: "Learn More",
    benefitsHeading: "Exceptional Reishilium Benefits for Active Wellness",
    benefitsSub: "A sovereign fusion of trace nutrients crafted to support natural bodily homeostasis and everyday energy.",
    overviewTitle: "Premium Botanical Science",
    overviewHeading: "Carefully Formulated for True Nutritional Superiority",
    overviewParagraph1: "DXN Reishilium Powder is a carefully formulated nutritional product designed for individuals seeking premium-quality wellness products. Its convenient powder format makes it easy to incorporate into a daily routine while enjoying the quality and expertise associated with DXN.",
    overviewParagraph2: "Free from synthetic binders, heavy preservatives, or artificial additives, this fine powder is packed with natural bio-active elements, ensuring that every serving delivers maximum potency and absolute botanical purity.",
    featuresHeading: "Key Features of DXN Reishilium Powder",
    featuresSub: "What makes this master formulation a cornerstone of premium wellness.",
    howToUseHeading: "Simple & Clear How To Use Steps",
    howToUseSub: "Easily integrate Reishilium Powder into your preferred daily beverage in under 30 seconds.",
    whyChooseHeading: "Why Choose DXN Global?",
    whyChooseSub: "Three decades of uncompromised botanical leadership, trusted by millions of families across 180 countries.",
    reviewsHeading: "Sincere Customer Testimonials",
    reviewsSub: "Read true experiences from customers who chose premium DXN Reishilium for their daily routine.",
    packagesTitle: "Exclusive Direct Savings Packages",
    packagesSub: "Select your preferred savings bundle. Includes fast free shipping and cash-on-delivery across Morocco.",
    checkoutHeading: "Confirm Your Order Instantly",
    checkoutSub: "Complete the simple form below to dispatch your authentic package today.",
    checkoutNameLabel: "Full Name *",
    checkoutAddressLabel: "Complete Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Phone Number *",
    checkoutSubmitBtn: "Complete Order on WhatsApp",
    secureCheckoutBadge: "100% Original DXN Seal Guaranteed — Cash on Delivery",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Find all authoritative explanations about Reishilium Powder formulation and daily use.",
    ctaHeading: "Make wellness a part of your daily routine with DXN Reishilium Powder",
    contactUs: "Contact Us"
  },
  fr: {
    heroBadge: "✨ Nutrition Royale Premium & Vitalité Absolue",
    heroTitle: "Découvrez la Puissance Naturelle de DXN Reishilium Powder",
    heroSub: "Une formule nutritionnelle d'exception associant des ingrédients rigoureusement sélectionnés pour vous offrir une vitalité naturelle supérieure adaptée à un style de vie moderne.",
    heroCTAOrder: "Acheter Maintenant",
    heroCTALearn: "Découvrir Plus",
    benefitsHeading: "Bienfaits Exceptionnels de Reishilium pour Votre Équilibre",
    benefitsSub: "Un complément alimentaire noble et bio conçu pour fortifier vos défenses naturelles et maintenir votre forme quotidienne.",
    overviewTitle: "Science Botanique de Prestige",
    overviewHeading: "Une formule équilibrée pour soutenir votre capital santé",
    overviewParagraph1: "Le Reishilium Powder de DXN est un produit de nutrition de haute qualité conçu méticuleusement pour ceux qui recherchent le meilleur du bien-être naturel. Sa forme en poudre ultra-fine le rend extrêmement simple à dissoudre au quotidien.",
    overviewParagraph2: "Cultivé selon les normes de contrôle les plus strictes au monde par DXN, ce produit haut de gamme préserve l'intégrité de ses agents bioactifs, offrant une pureté biologique sans aucun additif chimique.",
    featuresHeading: "Caractéristiques Clés de DXN Reishilium Powder",
    featuresSub: "Ce qui fait de ce complément d'exception un allié incontournable de votre routine de vie saine.",
    howToUseHeading: "Conseils d'Utilisation Simples",
    howToUseSub: "Découvrez comment préparer votre boisson vitalité Reishilium en quelques secondes seulement.",
    whyChooseHeading: "Pourquoi Faire Confiance à DXN ?",
    whyChooseSub: "Plus de 30 ans de recherche d'excellence dans le domaine de la mycothérapie et de la nutrition biologique.",
    reviewsHeading: "Témoignages de nos Clients",
    reviewsSub: "Retrouvez les retours authentiques de notre communauté après l'intégration du Reishilium.",
    packagesTitle: "Nos Packs Promotionnels Reishilium",
    packagesSub: "Choisissez la formule idéale avec livraison express gratuite et paiement à la livraison au Maroc.",
    checkoutHeading: "Validez Votre Commande Express",
    checkoutSub: "Entrez vos informations de livraison ci-dessous pour expédier votre colis dès aujourd'hui.",
    checkoutNameLabel: "Nom Complet *",
    checkoutAddressLabel: "Adresse de Livraison exacte *",
    checkoutPhoneLabel: "Numéro de Téléphone WhatsApp *",
    checkoutSubmitBtn: "Valider ma commande par WhatsApp",
    secureCheckoutBadge: "Garantie Produit 100% Original DXN — Règlement direct à la réception",
    faqHeading: "Foire Aux Questions (FAQ)",
    faqSub: "Toutes les réponses pour intégrer le Reishilium Powder au mieux dans votre quotidien.",
    ctaHeading: "Faites du bien-être une priorité avec DXN Reishilium Powder",
    contactUs: "Contactez-nous"
  }
};

export const reishiliumBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "دعم غذائي فاخر", desc: "يمد الجسم بمجموعة متوازنة من العناصر الغذائية النادرة التي تساهم في الحفاظ على الحيوية اليومية والنشاط." },
    { title: "سهل الاستخدام اليومي", desc: "يتناغم وينحل بسهولة بالغة في الماء أو العصائر المفضلة لتبدأ به يومك بلمسة صحية مريحة." },
    { title: "نمط حياة صحي وطبيعي", desc: "يساعدك على ترسيخ عادات غذائية راقية تدعم أسلوب العافية الوقائية المتوازن والواعي." },
    { title: "مكونات ممتازة ونقية", desc: "مستخلص من خامات عالية النقاء مصنعة ومزروعة بعناية فائقة تحت رقابة دي إكس إن الصارمة." },
    { title: "قوام بودرة عملي ومريح", desc: "معبأ بذكاء في عبوة تحافظ على خصائصه لسهولة التحكم بالجرعة اليومية المثالية لك." },
    { title: "جودة DXN العالمية المعتمدة", desc: "مدعوم بخبرة عقود من الأبحاث الطبية والبيولوجية الحاصلة على كبرى شهادات الأمان العالمية." }
  ],
  en: [
    { title: "Premium Nutritional Support", desc: "Provides an abundant spectrum of trace organic elements to maintain cellular stamina and overall balance." },
    { title: "Easy Daily Use", desc: "Dissolves smoothly in warm water, juices, or shakes, making it a perfect quick health addition." },
    { title: "Natural Wellness Lifestyle", desc: "Encourages a proactive, clean, and balanced daily routine centered on organic vitality." },
    { title: "High-Quality Ingredients", desc: "Sourced from pristine organic farms with zero chemical pesticide exposure for premium safety." },
    { title: "Convenient Powder Format", desc: "Fine, soluble formulation allowing personalized dosing and convenient everyday pantry storage." },
    { title: "Trusted DXN Quality", desc: "Backed by strict botanical processing methods and premium international safety certifications." }
  ],
  fr: [
    { title: "Soutien Nutritionnel Premium", desc: "Riche en oligo-éléments et nutriments rares essentiels pour maintenir votre énergie et tonus cellulaire." },
    { title: "Facile à Utiliser au Quotidien", desc: "Se mélange instantanément à vos boissons ou smoothies pour une routine matinale simple et rapide." },
    { title: "Mode de Vie Sain et Naturel", desc: "Vous accompagne vers des choix de vie plus conscients, orientés vers l'équilibre physique à long terme." },
    { title: "Ingrédients d'Excellence", desc: "Cultivés selon des procédés éco-responsables rigoureux garantissant une absence totale de polluants." },
    { title: "Format Poudre Ultra Pratique", desc: "Poudre fine préservée de l'oxydation pour une mesure précise de votre apport nutritionnel quotidien." },
    { title: "Qualité Certifiée DXN", desc: "Soutenu par la rigueur scientifique de l'un des plus grands producteurs mondiaux de superaliments bio." }
  ]
};

export const reishiliumFeatures: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "صيغة دي إكس إن الفاخرة", desc: "مستحضر حصري يجمع بين معايير النقاء وأبحاث الجانوديرما المتطورة." },
    { title: "بودرة مريحة وسريعة", desc: "قوام فائق النعومة سريع الانحلال والذوبان في السوائل الباردة أو الدافئة." },
    { title: "سهل الخلط والمزج", desc: "يمتزج بشكل رائع مع الماء، الحليب، العصائر الطبيعية أو روتين فطورك الصباحي." },
    { title: "مكونات أصلية منتقاة", desc: "مصنوع من عناصر حيوية مزروعة في بيئة نظيفة ومراقبة بدقة 100٪." },
    { title: "دعم العافية المستدامة", desc: "يمنحك إحساساً رائعاً بالاتساق والقوة والوقاية طوال ساعات يومك." },
    { title: "علامة تجارية دولية شهيرة", desc: "ثقة ملايين الزبناء في أكثر من 180 دولة بفضل الجودة والنزاهة المستمرة." }
  ],
  en: [
    { title: "Premium DXN Formula", desc: "Exclusive scientific balance developed under strict pharmaceutical-grade bio-laboratory standards." },
    { title: "Convenient Powder Format", desc: "Fine-milled cellular texture designed for optimal bio-availability and quick absorption." },
    { title: "Easy To Mix & Blend", desc: "Integrates perfectly with water, almond milk, natural green juices, or morning bowls." },
    { title: "Quality Ingredients", desc: "100% natural, active botanical structures cultivated under zero-chemical conditions." },
    { title: "Daily Wellness Support", desc: "Nourishes body pathways, encouraging sustained defense and mental-physical balance." },
    { title: "Trusted International Brand", desc: "Approved and appreciated globally by health enthusiasts across 180 countries." }
  ],
  fr: [
    { title: "Formule Exclusive DXN", desc: "Élaborée selon les plus hauts standards de l'industrie pour une intégrité moléculaire préservée." },
    { title: "Format Poudre Confortable", desc: "Poudre tamisée extra-fine permettant une assimilation ultra-rapide par le système digestif." },
    { title: "Mélange Simple & Facile", desc: "S'incorpore parfaitement à l'eau pure, au lait végétal, aux jus frais ou à votre muesli." },
    { title: "Ingrédients Purs et Biologiques", desc: "Composants rigoureusement sourcés au sein de forêts d'altitude préservées." },
    { title: "Soutien Quotidien Adaptogène", desc: "Aide l'organisme à s'adapter au stress moderne et à maintenir son homéostasie naturelle." },
    { title: "Marque Mondiale de Confiance", desc: "Reconnue mondialement pour son engagement éthique et ses contrôles cliniques rigoureux." }
  ]
};

export const reishiliumSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    { title: "تجهيز الكوب", desc: "قم بتحضير كوب من الماء الفاتر أو مشروبك المفضل كالحليب أو العصير الطبيعي (حوالي 150-200 مل)." },
    { title: "إضافة ملعقة ريشيليوم", desc: "أضف الحصة الموصى بها من مسحوق ريشيليوم الفاخر (ملعقة قياس صغيرة مناسبة لجرعتك اليومية)." },
    { title: "الخلط والمزج الجيد", desc: "حرك الخليط جيداً لثوانٍ معدودة باستخدام ملعقة حتى يذوب المسحوق تماماً ويتجانس بلطف." },
    { title: "الاستمتاع بالمشروب", desc: "ارتشف المشروب المغذي كجزء أساسي من روتينك الصباحي أو المسائي لدعم يومك بذكاء." },
    { title: "الحفظ السليم للعبوة", desc: "أغلق العبوة بإحكام بعد الاستخدام واحفظها في مكان بارد وجاف للحفاظ على النقاء والجودة الفائقة." }
  ],
  en: [
    { title: "Prepare Your Beverage", desc: "Fill a glass (about 150ml - 200ml) with warm water, plant milk, or your favorite freshly squeezed juice." },
    { title: "Add Reishilium Serving", desc: "Add the recommended daily serving of DXN Reishilium Powder using the measuring spoon." },
    { title: "Stir & Mix Thoroughly", desc: "Stir the mixture thoroughly for a few seconds with a spoon until the powder is fully dissolved and integrated." },
    { title: "Enjoy Your Health Ritual", desc: "Sip your premium nutrient-rich drink slowly to kickstart your daily wellness and cellular energy." },
    { title: "Store Securely After Use", desc: "Reseal the container tightly after each use and store it in a cool, dry place to protect its absolute botanical quality." }
  ],
  fr: [
    { title: "Préparez Votre Boisson", desc: "Remplissez un verre (environ 150ml à 200ml) d'eau tiède, de lait végétal ou de votre jus de fruit préféré." },
    { title: "Ajoutez la Dose de Reishilium", desc: "Ajoutez une cuillère du précieux Reishilium Powder selon la dose journalière recommandée." },
    { title: "Mélangez Énergiquement", desc: "Remuez doucement à l'aide d'une cuillère pendant quelques instants jusqu'à dissolution complète de la poudre." },
    { title: "Savourez Votre Rituel", desc: "Dégustez lentement cette boisson premium revitalisante pour commencer ou finir votre journée en beauté." },
    { title: "Conservez Correctement", desc: "Refermez soigneusement le flacon après chaque usage et stockez-le au sec pour préserver la fraîcheur de ses actifs." }
  ]
};

export const reishiliumReviews: Record<'en' | 'fr' | 'ar', { id: number; rating: number; name: string; avatar: string; text: string }[]> = {
  ar: [
    {
      id: 1,
      rating: 5,
      name: "خديجة الفاسي",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "مسحوق ريشيليوم غير حياتي للأفضل! كنت أعاني من تعب مستمر والآن بعد ملعقة يومية مع الماء الصبح أحس بنشاط غير عادي وتوازن بالمعدة. تعامل سميرة راقي والتوصيل سريع للمنزل بفاس."
    },
    {
      id: 2,
      rating: 5,
      name: "رشيد التازي",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "منتج مذهل ويستحق كل درهم! جودة البودرة ممتازة وتذوب بسرعة في الحليب الدافئ. من أروع المكملات التي جربتها للحفاظ على لياقتي وتركيزي في العمل اليومي. أنصح بشدة بباقة علبتين للتوفير."
    },
    {
      id: 3,
      rating: 5,
      name: "سناء المرابط",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "أنا ممتنة جداً لسميرة ناتورال على توفير هذا المنتج الرائع بمتابعة شخصية مستمرة. ريشيليوم دي إكس إن الأصلي ممتاز لتقوية المناعة، جربته على مدار شهرين والنتيجة ممتازة وواضحة جداً."
    },
    {
      id: 4,
      rating: 5,
      name: "كمال العلمي",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "كرياضي محترف، أهتم كثيراً بنوعية المكملات التي تدخل جسمي. ريشيليوم بودرة يوفر لي التغذية العضوية النقية التي تعزز مناعتي وتسرع استشفاء العضلات. شحن سريع ومغلف آمن لمدينة طنجة."
    },
    {
      id: 5,
      rating: 5,
      name: "ليلى السوسي",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "أفضل استثمار صحي لعائلتي! نخلطه يومياً مع عصير الفواكه الطبيعي للأطفال لتقوية مناعتهم، طعمه خفيف ومحبب. شكراً دي إكس إن وشكراً لالة سميرة على النصائح الذهبية والمتابعة."
    },
    {
      id: 6,
      rating: 5,
      name: "محمد الإدريسي",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "أطلب باقة العائلة المكونة من 3 علب دائماً. الجودة والفعالية في مسحوق ريشيليوم لا يعلى عليها. يحافظ على توازن الجسم ونشاطه بشكل مذهل، والتوصيل مجاني وسريع في الدار البيضاء."
    }
  ],
  en: [
    {
      id: 1,
      rating: 5,
      name: "Khadija El Fassi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "This powder has completely upgraded my daily routine! I used to struggle with constant afternoon slumps, but a morning serving keeps me active and light all day. Fast delivery in Fes."
    },
    {
      id: 2,
      rating: 5,
      name: "Rachid Tazi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "Stellar wellness product! The powder is premium and dissolves beautifully in warm oat milk. It has vastly improved my recovery, focus, and energy. Buying the double pack is definitely the best deal."
    },
    {
      id: 3,
      rating: 5,
      name: "Sanaa Mourabit",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "Deeply grateful to Samira Naturale for this superb authentic product and her wonderful personal guidance. Reishilium is an absolute must-have for any proactive wellness enthusiast."
    },
    {
      id: 4,
      rating: 5,
      name: "Kamal Alami",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "As an active athlete, purity is everything. Reishilium Powder provides organic support that enhances my immunity and cellular oxygenation naturally. Quick and secure shipping to Tangier."
    },
    {
      id: 5,
      rating: 5,
      name: "Layla Soussi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "Excellent premium supplement for the whole family. I stir it into my children's morning smoothies, and it has done wonders for their resistance and digestion. Thank you Samira for the great support!"
    },
    {
      id: 6,
      rating: 5,
      name: "Mohammed Idrissi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "I always order the Family pack of 3 bottles. The quality of this DXN product is uncompromised and highly potent. Fast, professional shipping and helpful follow-up in Casablanca."
    }
  ],
  fr: [
    {
      id: 1,
      rating: 5,
      name: "Khadija El Fassi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "Cette poudre a complètement transformé mes journées ! Je me sentais fatiguée sans arrêt, mais une cuillère de Reishilium le matin et je me sens pleine de vie. Livraison rapide à Fès."
    },
    {
      id: 2,
      rating: 5,
      name: "Rachid Tazi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "Un produit exceptionnel ! La poudre est d'une grande finesse et s'assimile parfaitement dans du lait d'amande chaud. Très efficace pour le bien-être général et la concentration mentale."
    },
    {
      id: 3,
      rating: 5,
      name: "Sanaa Mourabit",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "Un grand merci à Samira Naturale pour ce produit d'origine certifiée et pour son excellent suivi personnalisé. Intégrer le Reishilium est la meilleure décision santé que j'ai prise."
    },
    {
      id: 4,
      rating: 5,
      name: "Kamal Alami",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "Pour un entraînement intensif, la pureté nutritionnelle est primordiale. Reishilium m'apporte un boost métabolique adaptogène incroyable. Emballage soigné et expédition rapide à Tanger."
    },
    {
      id: 5,
      rating: 5,
      name: "Layla Soussi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "Un complément bien-être exceptionnel pour toute la famille. Mes enfants le boivent volontiers dans leurs jus de fruits. Merci infiniment à Samira pour ses précieux conseils."
    },
    {
      id: 6,
      rating: 5,
      name: "Mohammed Idrissi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "Je commande régulièrement le pack de 3 flacons pour le foyer. Le niveau de pureté et la concentration de DXN Reishilium sont insurpassables. Service de livraison express impeccable."
    }
  ]
};

export const reishiliumFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  ar: [
    {
      q: "ما هو مسحوق DXN Reishilium Powder؟",
      a: "هو مكمل غذائي فاخر ومصمم بعناية فائقة من شركة دي إكس إن الرائدة، يتكون من تركيبة فريدة ونقية تدعم الصحة العامة والحيوية الطبيعية وتأتي في شكل بودرة سهلة الاستخدام والانحلال لتناسب نمط الحياة اليومي النشط."
    },
    {
      q: "كيف يتم استخدام وتحضير مسحوق ريشيليوم؟",
      a: "كل ما عليك هو تحضير كوب من الماء الدافئ أو مشروبك المفضل (كالحليب أو العصائر الطبيعية)، ثم إضافة ملعقة صغيرة من المسحوق والتحريك جيداً حتى يذوب تماماً، ثم ارتشافه كجزء من روتينك التغذوي اليومي."
    },
    {
      q: "هل هو مناسب للاستخدام اليومي المستمر؟",
      a: "نعم بالتأكيد، منتج ريشيليوم مصنع من مكونات طبيعية عالية النقاء ومناسب تماماً للاستهلاك اليومي المنتظم كجزء مكمل ومغذي لأسلوب حياتك الصحي والمتوازن للوقاية وتعزيز النشاط."
    },
    {
      q: "ما الذي يجعله فريداً ومميزاً عن بقية المنتجات؟",
      a: "يتميز بجودته البيولوجية الفائقة، وصيغته الطبيعية الخالية تماماً من المواد الحافظة والملونات الاصطناعية، وسهولة امتصاصه العالية بفضل طحنه الخلوي المتقدم وخبرة دي إكس إن العميقة في علوم الفطريات الطبية."
    },
    {
      q: "هل يمكن إدراجه ضمن روتين العافية والجمال الخاص بي؟",
      a: "نعم، ريشيليوم مكمل صحي ممتاز واعد يساعد على دعم عمليات تنقية الجسم من السموم وتغذية خلايا الجلد ومحاربة آثار الإجهاد والتعب، مما يجعله إضافة مثالية لأي برنامج للعناية بالجمال الطبيعي والعافية الداخلية."
    },
    {
      q: "كيف يجب حفظ وتخزين مسحوق ريشيليوم؟",
      a: "يجب إغلاق العبوة بإحكام بعد كل استخدام، وحفظها في مكان بارد وجاف بعيداً عن درجات الحرارة المرتفعة، الرطوبة العالية، وأشعة الشمس المباشرة لضمان بقاء المسحوق طازجاً ومحافظاً على كامل خصائصه الغذائية النشطة."
    }
  ],
  en: [
    {
      q: "What is DXN Reishilium Powder?",
      a: "DXN Reishilium Powder is a carefully formulated nutritional product designed for individuals seeking premium-quality wellness products. Its convenient powder format makes it easy to incorporate into a daily routine while enjoying the quality and expertise associated with DXN."
    },
    {
      q: "How is it used and prepared?",
      a: "Simply prepare a glass of water, milk, or fresh juice (approx. 150ml - 200ml), add a recommended serving (one small spoon) of Reishilium Powder, stir thoroughly until fully mixed, and consume as part of your daily healthy routine."
    },
    {
      q: "Is it suitable for daily use?",
      a: "Yes, absolutely. Its high-purity natural ingredients and balanced adaptogenic formulation are developed specifically to be safely consumed as an everyday nutritional partner to protect and fuel your active lifestyle."
    },
    {
      q: "What makes Reishilium unique?",
      a: "Its uniqueness lies in its zero-chemical processing, strict compliance with international manufacturing certifications (ISO, GMP, Halal), its exceptional cellular bio-availability, and the renowned expert engineering associated with DXN."
    },
    {
      q: "Can it be included in a wellness and beauty routine?",
      a: "Yes, perfectly. Being an alkaline superfood, it assists in natural metabolic detoxing, fights cellular oxidative stress, and nourishes skin tissues, making it an elite addition to your premium inner wellness and radiant beauty regimens."
    },
    {
      q: "How should Reishilium Powder be stored?",
      a: "Ensure the container cap is tightly sealed after every single use, and store it in a cool, dry place away from humid environments or direct solar exposure to maintain full bio-active potency."
    }
  ],
  fr: [
    {
      q: "Qu'est-ce que le DXN Reishilium Powder ?",
      a: "Le DXN Reishilium Powder est un produit nutritionnel d'exception formulé scientifiquement par DXN pour soutenir votre capital santé. Sa forme en poudre pratique et hautement soluble permet de l'intégrer en douceur dans n'importe quel rituel de vie sain."
    },
    {
      q: "Comment l'utiliser et le préparer ?",
      a: "Versez simplement un verre d'eau tiède, de lait végétal ou de jus frais (150-200 ml), ajoutez une petite cuillère de poudre de Reishilium, remuez soigneusement jusqu'à dissolution complète, puis dégustez immédiatement."
    },
    {
      q: "Est-il adapté à un usage quotidien ?",
      a: "Oui, tout à fait. Ses ingrédients naturels d'une pureté absolue sont étudiés pour être pris quotidiennement de manière sûre, apportant un bouclier protecteur adaptogène constant à votre organisme face à la fatigue."
    },
    {
      q: "Qu'est-ce qui le rend unique ?",
      a: "Sa force réside dans la rigueur de sa culture biologique sans aucun pesticide chimique, ses procédés d'extraction moléculaire avancés pour une absorption maximale, et la confiance absolue accordée à la marque internationale DXN."
    },
    {
      q: "Peut-il intégrer un programme de bien-être et beauté ?",
      a: "Absolument. En tant que complément alcalin hautement purifiant, il soutient l'éclat de la peau, combat les radicaux libres responsables du vieillissement cellulaire et facilite l'élimination des toxines internes pour une beauté rayonnante."
    },
    {
      q: "Comment doit-il être conservé ?",
      a: "Refermez toujours soigneusement le couvercle après chaque utilisation et stockez le flacon dans un endroit frais et sec, à l'abri de l'humidité de la cuisine et du soleil direct, afin de préserver l'activité de ses principes nutritifs."
    }
  ]
};

export const reishiliumPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    {
      id: 'single',
      title: "باقة التجربة والنشاط (علبة واحدة)",
      desc: "مثالية لتجربة مسحوق ريشيليوم الفاخر وبدء روتينك التغذوي الجديد.",
      price: 290,
    },
    {
      id: 'double',
      title: "باقة الصحة والوقاية (علبتين) - الأكثر طلباً",
      desc: "تكفي لشهر كامل من التغذية العميقة مع شحن سريع مجاني وهدية مخصصة للجرعات.",
      price: 540,
      badge: "الأكثر مبيعاً 🔥"
    },
    {
      id: 'family',
      title: "باقة العائلة والعافية الشاملة (3 علب)",
      desc: "أفضل قيمة توفيرية لعائلتك مع شحن سريع مجاني ومتابعة هاتفية مخصصة مع أخصائي التغذية.",
      price: 780,
      badge: "عرض التوفير الأكبر 🎁"
    }
  ],
  en: [
    {
      id: 'single',
      title: "Discovery & Energy Pack (1 Bottle)",
      desc: "Perfect size for beginners to experience premium adaptogenic nutrition.",
      price: 290,
    },
    {
      id: 'double',
      title: "Double Defense Pack (2 Bottles) - Best Seller",
      desc: "Ideal 30-day course for optimal physiological balance + Free express shipping.",
      price: 540,
      badge: "Best Seller 🔥"
    },
    {
      id: 'family',
      title: "Family Vitality Pack (3 Bottles)",
      desc: "Maximum saving bundle for healthy households + Free shipping + Priority support.",
      price: 780,
      badge: "Maximum Discount 🎁"
    }
  ],
  fr: [
    {
      id: 'single',
      title: "Pack Découverte Vitalité (1 Flacon)",
      desc: "Le format idéal pour vous initier aux précieux bienfaits du Reishilium.",
      price: 290,
    },
    {
      id: 'double',
      title: "Pack Double Défense (2 Flacons) - Recommandé",
      desc: "Idéal pour une cure d'un mois de régulation métabolique + Livraison express offerte.",
      price: 540,
      badge: "Recommandé 🔥"
    },
    {
      id: 'family',
      title: "Pack Équilibre Familial (3 Flacons)",
      desc: "La meilleure offre économique pour le bien-être de votre foyer + Livraison gratuite.",
      price: 780,
      badge: "Économie Maximale 🎁"
    }
  ]
};

export const whyChooseReishiliumList: Record<'en' | 'fr' | 'ar', string[]> = {
  ar: [
    "علامة تجارية دولية موثوقة تخدم ملايين العملاء حول العالم منذ عام 1993.",
    "مكونات عالية النقاء مزروعة في مزارع دي إكس إن العضوية الخالية تماماً من الملوثات.",
    "معايير جودة صارمة وشهادات دولية مرموقة مثل ISO, GMP, Halal.",
    "ملايين العملاء الراضين عالمياً الذين يثقون في فعالية وجودة منتجاتنا.",
    "منتجات ترتكز على فلسفة العافية الوقائية والتوازن الطبيعي للجسم.",
    "سمعة عريقة تمتد لعقود في ريادة وتطوير أرقى الأغذية والمكملات الحيوية."
  ],
  en: [
    "Trusted international brand serving millions of consumers globally since 1993.",
    "Premium ingredient sourcing directly from pristine chemical-free organic farms.",
    "Strict international quality standards backed by ISO, GMP, and Halal certifications.",
    "Millions of satisfied customers worldwide who share incredible health transformations.",
    "Wellness-oriented products crafted with deep adaptogenic and mycological expertise.",
    "A long-standing reputation for quality, integrity, and sustainable cultivation."
  ],
  fr: [
    "Marque internationale de confiance servant des millions de foyers depuis 1993.",
    "Sélection d'ingrédients d'altitude purs provenant de cultures sans pesticides.",
    "Standards de contrôle rigoureux validés par les certifications ISO, GMP et Halal.",
    "Des millions de clients satisfaits à travers le monde partageant des retours inspirants.",
    "Produits orientés bien-être basés sur le rééquilibrage de l'organisme.",
    "Une réputation d'excellence historique bâtie sur la pureté et l'efficacité de nos formules."
  ]
};
