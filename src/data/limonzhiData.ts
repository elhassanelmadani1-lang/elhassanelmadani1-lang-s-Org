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

export const limonzhiLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "✨ انتعاش حيوي ونشاط طبيعي يومي",
    heroTitle: "انتعاش طبيعي مع DXN Limonzhi",
    heroSub: "مشروب منعش يجمع بين نكهة الليمون المميزة ومكونات مختارة بعناية ليمنحك تجربة يومية ممتعة ضمن نمط حياة متوازن.",
    heroCTAOrder: "اطلب الآن",
    heroCTALearn: "اكتشف المزيد",
    benefitsHeading: "فوائد ليمونزي الاستثنائية لنمط حياة صحي",
    benefitsSub: "تجربة تروي عطشك وتزيد من حيويتك ونشاطك اليومي بلمسة صحية.",
    overviewTitle: "انتعاش راقٍ فريد",
    overviewHeading: "مذاق رائع يروي عطشك ويغذي خلاياك",
    overviewParagraph1: "مشروب DXN ليمونزي ليمون شاي (أو عصير الليمون المنعش المعزز بفطر الريشي الفاخر) مُعد بعناية فائقة ليكون رفيقك المفضل في الصباح أو بعد يوم عمل حافل. يمزج بذكاء بين نكهة الحمضيات الطبيعية الغنية والفوائد العميقة للمكونات العضوية المختارة لتجديد الطاقات العضوية ودعم الحيوية اليومية.",
    overviewParagraph2: "انضم إلى الملايين حول العالم الذين يستمتعون بهذه التوليفة المتوازنة الخالية من المضافات الضارة لأسلوب حياة أكثر رقياً ونشاطاً ونقاءً مستمر.",
    featuresHeading: "المميزات الأساسية لـ DXN Limonzhi",
    featuresSub: "أسرار التركيبة الفاخرة التي تجعله المشروب اليومي الأفضل.",
    howToUseHeading: "خطوات التحضير والاستمتاع",
    howToUseSub: "بضع ثوانٍ تفصلك عن عيش تجربة انتعاش غنية بالفوائد الفاخرة.",
    whyChooseHeading: "لماذا تختار علامة DXN العالمية؟",
    whyChooseSub: "الريادة والجودة العضوية منذ أكثر من 30 عاماً في خدمة العافية.",
    reviewsHeading: "تجارب حية من عشاق ليمونزي",
    reviewsSub: "آراء واقعية لعملاء يشاركون معنا قصص انتعاشهم وطاقتهم اليومية المتجددة.",
    packagesTitle: "باقات التوفير الحصرية - ليمونزي الأصلي",
    packagesSub: "حدد العرض المناسب لعائلتك الآن واستفد من الشحن المجاني المغلف الآمن بالمغرب.",
    checkoutHeading: "تأكيد الطلب السريع والدفع عند الاستلام",
    checkoutSub: "يرجى تعبئة الحقول للتوصيل المباشر لمنزلك بالمدينة.",
    checkoutNameLabel: "الاسم الكامل لسيادتكم *",
    checkoutAddressLabel: "عنوان السفر أو السكن لاستلام الطرد *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط لمتابعة الشحن *",
    checkoutSubmitBtn: "تأكيد وإرسال الطلب عبر الواتساب",
    secureCheckoutBadge: "ضمان الجودة الأصلية 100٪ - الدفع نقداً عند معاينة الطلب",
    faqHeading: "الأسئلة الشائعة حول مشروب ليمونزي",
    faqSub: "كل الاستفسارات والمعلومات الدقيقة التي تود معرفتها للاستفادة الكاملة من المشروب.",
    ctaHeading: "أضف لمسة من الانتعاش إلى يومك مع DXN Limonzhi",
    contactUs: "تواصل معنا"
  },
  en: {
    heroBadge: "✨ Natural Refreshment & Everyday Vitality",
    heroTitle: "Natural Refreshment with DXN Limonzhi",
    heroSub: "A refreshing lemon-flavored beverage crafted with carefully selected ingredients. Its pleasant taste and premium formulation make it an enjoyable addition to a balanced daily lifestyle and wellness-focused routine.",
    heroCTAOrder: "Order Now",
    heroCTALearn: "Discover More",
    benefitsHeading: "Exceptional Limonzhi Benefits for Active Lifestyle",
    benefitsSub: "Sip your way to pure restoration, sensory pleasure, and daily metabolic balance.",
    overviewTitle: "Premium Blend & Vitality",
    overviewHeading: "Unrivaled Taste that Rehydrates and Restores",
    overviewParagraph1: "DXN Limonzhi is a refreshing premium dry sachet blend constructed with trace-selected natural lemon elements and reinforced with organic Ganoderma extract. It provides a sharp, clean taste profiles that fits perfectly into any contemporary wellness journey.",
    overviewParagraph2: "Free from harsh preservatives and loaded with pure citrus notes, this beverage acts as an elite beverage that elevates focus, hydrates efficiently, and pleases your sensory paths with gold quality.",
    featuresHeading: "Key Features of DXN Limonzhi",
    featuresSub: "What makes this golden formulation a global favorite.",
    howToUseHeading: "How to Prepare & Enjoy",
    howToUseSub: "Simple and quick preparation steps to unlock full citrus flavor.",
    whyChooseHeading: "Why Choose DXN Global?",
    whyChooseSub: "Over three decades of uncompromised botanical science and millions of smiling families.",
    reviewsHeading: "Sincere Customer Testimonials",
    reviewsSub: "Listen to the voices of our active consumers who cherish daily premium refreshment.",
    packagesTitle: "Exclusive Direct Savings Packages",
    packagesSub: "Choose your preferred pack with direct local Moroccan shipping bonuses.",
    checkoutHeading: "Confirm Your Order Instantly",
    checkoutSub: "Provide your delivery parameters below for rapid local courier routing.",
    checkoutNameLabel: "Full Name *",
    checkoutAddressLabel: "Complete Physical Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Contact Number *",
    checkoutSubmitBtn: "Process & Dispatch via WhatsApp",
    secureCheckoutBadge: "100% Original DXN Seal Guaranteed — Cash on Delivery",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Find all authoritative explanations about Limonzhi formulations and values.",
    ctaHeading: "Add a splash of refreshment to your day with DXN Limonzhi",
    contactUs: "Contact Us"
  },
  fr: {
    heroBadge: "✨ Fraîcheur naturelle & vitalité quotidienne",
    heroTitle: "Rafraîchissement naturel avec DXN Limonzhi",
    heroSub: "Une boisson rafraîchissante qui combine la saveur unique du citron avec des ingrédients soigneusement sélectionnés pour vous offrir une superbe expérience quotidienne au sein d'un mode de vie équilibré.",
    heroCTAOrder: "Commander maintenant",
    heroCTALearn: "Découvrir plus",
    benefitsHeading: "Avantages exceptionnels du Limonzhi DXN",
    benefitsSub: "Étanchez votre soif tout en apportant tonus, fraîcheur et bien-être à votre corps.",
    overviewTitle: "Alliage de Prestige & Vitalité",
    overviewHeading: "Un goût exquis qui réhydrate et revitalise",
    overviewParagraph1: "DXN Limonzhi est une boisson premium instantanée qui intègre de précieux extraits de citron et du Ganoderma lucidum pour une synergie inégalée. C'est l'alternative parfaite aux sodas industriels, offrant un goût désaltérant.",
    overviewParagraph2: "Parfaitement adapté pour toute la famille, chaud ou glacé, il sublime votre hydratation quotidienne en soutenant le bien-être naturel et l'équilibre physique à chaque gorgée.",
    featuresHeading: "Caractéristiques clés de DXN Limonzhi",
    featuresSub: "Une formulation d'exception conçue pour les standards de qualité les plus exigeants.",
    howToUseHeading: "Conseils de préparation & dégustation",
    howToUseSub: "Seulement quelques secondes pour libérer des arômes florissants et énergisants.",
    whyChooseHeading: "Pourquoi faire confiance à DXN ?",
    whyChooseSub: "La force d'un leader phytothérapeutique reconnu mondialement pour ses cultures biologiques.",
    reviewsHeading: "Témoignages de nos clients",
    reviewsSub: "Découvrez l'authenticité de leur satisfaction après avoir intégré le Limonzhi chez eux.",
    packagesTitle: "Nos Packs Promotionnels Limonzhi",
    packagesSub: "Sélectionnez votre lot d'origine avec expédition express gratuite et sécurisée au Maroc.",
    checkoutHeading: "Valider votre commande express",
    checkoutSub: "Entrez vos informations de contact pour expédier votre colis dès aujourd'hui.",
    checkoutNameLabel: "Nom et Prénom *",
    checkoutAddressLabel: "Adresse de livraison exacte (Ville) *",
    checkoutPhoneLabel: "Numéro de téléphone WhatsApp *",
    checkoutSubmitBtn: "Valider ma commande par WhatsApp",
    secureCheckoutBadge: "Garantie Limonzhi 100% d'Origine — Règlement direct à la livraison",
    faqHeading: "Foire Aux Questions (FAQ)",
    faqSub: "Retrouvez les réponses à toutes vos interrogations sur la boisson Limonzhi.",
    ctaHeading: "Ajoutez une touche de fraîcheur à votre journée avec DXN Limonzhi",
    contactUs: "Contactez-nous"
  }
};

export const limonzhiBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "طعم منعش وساحر", desc: "نكهة ليمون حمضية طبيعية متوازنة تروي عطشك وتنعش حواسك من الرشفة الأولى." },
    { title: "مكونات طبيعية نقية", desc: "خالٍ من الملونات والمنكهات الكيميائية الضارة، ممزوج بمستخلصات طبيعية فائقة الموثوقية." },
    { title: "دعم مالي لحيويتك العضوية", desc: "يمنح الجسم طاقة طبيعية ونشاطاً مميزاً للمساعدة على التركيز والإنتاجية طوال اليوم." },
    { title: "تحضير فوري مريح", desc: "سريع الذوبان بمجرد إضافته للماء البارد أو الفاتر وتناوله في أي وقت وأي مكان." },
    { title: "تجربة شرب ممتعة ومريحة", desc: "بديل مستدام وصحي للغاية للمشروبات الغازية والعصائر الصناعية المليئة بالسكريات." },
    { title: "جودة DXN الاحترافية الموثوقة", desc: "منتج معزز بفطر الريشي النقي المصنع وفقاً لأعلى بروتوكولات المختبرات الدولية." }
  ],
  en: [
    { title: "Refreshing Taste", desc: "Finely balanced sweet-tart lemon notes that quench thirst and stimulate raw senses instantaneously." },
    { title: "Natural Ingredients", desc: "Premium quality formulation strictly free of artificial harmful chemical dyes or thickeners." },
    { title: "Daily Wellness Support", desc: "Provides high-grade natural nourishment and premium hydration support for persistent mental stamina." },
    { title: "Convenient Preparation", desc: "Easily dissolves in cold water or ambient temperature, perfect for busy schedules." },
    { title: "Enjoyable Drinking Experience", desc: "An outstanding healthy, low-calorie replacement for standard carbonated soft drinks or heavy sugary juices." },
    { title: "Trusted DXN Quality", desc: "Scientifically checked and backed by our proprietary ISO and organic farming standard certs." }
  ],
  fr: [
    { title: "Goût intensément rafraîchissant", desc: "Une saveur acidulée de citron pur, parfaitement équilibrée pour étancher la soif instantanément." },
    { title: "Ingrédients naturels sélectionnés", desc: "Sans arômes artificiels ni colorants chimiques. Toute la noblesse de la nature dans un sachet." },
    { title: "Soutien vital quotidien", desc: "Participe activement au tonus corporel général et à la réduction de la fatigue intellectuelle." },
    { title: "Préparation simple & instantanée", desc: "Se dilue instantanément dans l'eau fraîche pour vous accompagner au bureau, au sport ou en voyage." },
    { title: "Alternative saine par excellence", desc: "Une boisson saine, légère et nutritive pour remplacer définitivement les boissons sucrées industrielles." },
    { title: "Qualité certifiée DXN", desc: "Sublimé par le meilleur Ganoderma du monde, produit selon des standards biotechnologiques stricts." }
  ]
};

export const limonzhiFeatures: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "تركيبة DXN الفاخرة المعتمدة", desc: "ابتكار مميز مطور بعناية بواسطة خبراء التغذية العالميين لضمان التوافق التام." },
    { title: "نكهة ليمون منعشة طبيعية", desc: "حموضة عطرية غنية بمستخلص قشور وثمار الليمون عالية الرشاقة الاستوائية." },
    { title: "سهل وسريع التحضير", desc: "جاهز خلال 30 ثانية؛ ضع محتوى الكيس، أضف الماء، وحركه لتخلق مشروبك الفاخر." },
    { title: "مكونات نقية وعالية الجودة", desc: "مستخلصات نباتية منتقاة بدقة من مزارع DXN العضوية الصديقة للبيئة." },
    { title: "مناسب للاستخدام اليومي المستمر", desc: "يمكن تناوله صباحاً، ظهراً، أو مساءً كجزء مكمل لنظامك الغذائي المتوازن." },
    { title: "علامة تجارية عالمية موثوقة", desc: "مستورد ومصنع من قبل شركة دي إكس إن الشهيرة الحاصلة على كبرى شهادات الأيزو العالمية." }
  ],
  en: [
    { title: "Premium DXN Formula", desc: "Expertly balance of trace reishi mycelium and natural acidic components for premium cellular utility." },
    { title: "Refreshing Lemon Flavor", desc: "Zesty, citrusy high-notes that provide a marvelous kick of real, sun-ripened organic lemons." },
    { title: "Easy To Prepare", desc: "Takes less than 30 seconds to reconstitute. Completely simple for modern active professionals." },
    { title: "Quality Ingredients", desc: "Pristine components cultivated under zero-chemical pesticide environmental policies." },
    { title: "Convenient Daily Use", desc: "Packaged in individually sealed sachets preventing oxidation and keeping freshness locked." },
    { title: "Trusted International Brand", desc: "DXN serves millions of modern wellness consumers across 180 countries under tight ISO guidelines." }
  ],
  fr: [
    { title: "Formule Premium DXN", desc: "Mariage d'ingrédients nobles et de Ganoderma de haute qualité pour une assimilation corporelle optimale." },
    { title: "Véritable arôme de citron", desc: "Des notes fraîches et fruitées imitant à la perfection la pulpe d'un citron mûri au soleil." },
    { title: "Préparation express", desc: "Il suffit de verser le sachet dans un verre d'eau, de mélanger et de savourer en moins de 30 secondes." },
    { title: "Ingrédients de haute pureté", desc: "Cultures contrôlées sans engrais chimiques, garantissant un produit sain et hautement nutritif." },
    { title: "Sachets individuels pratiques", desc: "Emportez votre dose de fraîcheur partout pour une conservation hermétique de la saveur." },
    { title: "Marque internationale de renom", desc: "Une traçabilité totale assurée par les certifications les plus rigoureuses au monde." }
  ]
};

export const limonzhiSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    { title: "افتح كيس ليمونزي الفاخر", desc: "افتح الكيس الفردي المحكم الإغلاق والذي يحافظ على كامل روائح الليمون الطبيعية غضة وطازجة." },
    { title: "أضف المحتوى إلى كوب ماء", desc: "أفرغ محتويات الكيس في كوب من الماء البارد أو الفاتر (حوالي 150 مل إلى 200 مل حسب مستوى المذاق المفضل)." },
    { title: "حرّك المشروب جيداً", desc: "باستخدام ملعقة، حرك الخليط بلطف لثوانٍ معدودة حتى يذوب تماماً وتتجانس التوليفة المشرقة الفاخرة." },
    { title: "استمتع بالطعم المنعش الرائع", desc: "ارتشف المشروب وتذوق سيمفونية الحمضيات الباردة تروي عطشك بلطف وتجدد حيويتك وطاقتك بالكامل." },
    { title: "اجعله رفيقاً في روتينك اليومي", desc: "تناول كوباً يومياً كبديل ذكي يمنحك التوازن والنشاط الدائم لدعم نمط حياتك المتوازن." }
  ],
  en: [
    { title: "Open the Sachet", desc: "Tear open one individually sealed foil envelope designed specifically to maintain volatile citrus oils." },
    { title: "Add to a Glass of Water", desc: "Pour the fine golden powder into 150ml to 200ml of cold, chilled, or room temperature water based on your taste preference." },
    { title: "Stir Wel and Blend", desc: "Gently stir with a spoon for several seconds until the organic components are completely dissolved into a brilliant yellow elixir." },
    { title: "Enjoy the Refreshing Taste", desc: "Take your first slow sip, absorbing the cooling citrus flavor that immediately hydrates and inspires your bodily senses." },
    { title: "Include in Your Daily Routine", desc: "Incorporate as an intelligent daily companion to keep your lifestyle in pristine, energetic, and clean homeostasis." }
  ],
  fr: [
    { title: "Ouvrir le sachet hermétique", desc: "Déchirez délicatement le sachet individuel qui préserve l'odeur florissante et fraîche du citron." },
    { title: "Verser dans un verre d'eau", desc: "Ajoutez le contenu dans 150 à 200 ml d'eau bien fraîche, tempérée ou même tiède, selon vos envies." },
    { title: "Mélanger énergiquement", desc: "Remuez doucement pendant quelques secondes avec une cuillère pour dissoudre harmonieusement la poudre dorée." },
    { title: "Savourer la richesse gustative", desc: "Buvez à petites gorgées et laissez l'acidité noble du citron réveiller instantanément vos cellules." },
    { title: "Adopter dans votre style de vie", desc: "Faites de Limonzhi votre rituel quotidien pour un maintien optimal de l'hydratation et du tonus." }
  ]
};

export const limonzhiReviews: Record<'en' | 'fr' | 'ar', { id: number; rating: number; name: string; avatar: string; text: string }[]> = {
  ar: [
    {
      id: 1,
      rating: 5,
      name: "ليلى التازي",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "عصير ليمونزي صار رفيقي اليومي بعد الظهر! طعمه منعش وبديل رائع لليموناد الجاهزة المليانة سكر. صراحة أحس بنشاط غير عادي وخفة بالبطن والنشاط."
    },
    {
      id: 2,
      rating: 5,
      name: "يوسف العمراني",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "كممارس للرياضة، كنت أبحث عن مشروب يرطبني خلال التمرين بدون مواد حافظة. ليمونزي دي إكس إن أفضل خيار طبيعي جربته لحد الآن. تحضيره سريع والتوصيل لمدينة الدار البيضاء كان سريعاً جداً."
    },
    {
      id: 3,
      rating: 5,
      name: "فاطمة الزهراء بنجلون",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "بصراحة أحببت جودة المنتج وتغليفه المحكم. كل كيس كافي لكوب كبير منعش بالثلج. لالة سميرة تعاملها راقي جداً وتابعتني وشرحت لي طريقة الاستخدام الأمثل. شكراً جزيلاً!"
    },
    {
      id: 4,
      rating: 5,
      name: "عبد المجيد الداودي",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "كنت أعاني من الكسل والخمول بعد وجبة الغداء، لكن بعد شرب ليمونزي كشاي بارد رجع لي كامل النشاط والتركيز للعمل. باقة علبتين كافية وتوفر الكثير من الشحن المجاني."
    },
    {
      id: 5,
      rating: 5,
      name: "أمينة الصقلي",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "أفضل مشروب منعش وصحي أقدمه لأولادي وبديل تماماً للمشروبات العازية. طعم الليمون واضح وحلو باعتدال طبيعي، المذاق بجد مميز جداً ويستحق كل درهم."
    },
    {
      id: 6,
      rating: 5,
      name: "حكيم الإدريسي",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "أطلب باقة العائلة دائماً تكفينا طوال الشهر. تركيبة نظيفة وصحية لليمون المعزز بالجانوديرما. شركة دي إكس إن دائماً تبهرنا بمنتجاتها الراقية والتوصيل سريع."
    }
  ],
  en: [
    {
      id: 1,
      name: "Laila El Tazi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "Limonzhi became my absolute afternoon savior! Pure lemon taste with zero artificial spikes. I feel completely energetic, light, and refreshed right away."
    },
    {
      id: 2,
      name: "Youssef El Amrani",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "As an active gym-goer, I required clean premium rehydration without heavy sucrose. DXN Limonzhi is flawless. Dissolves instantly and the shipping to Rabat was very rapid."
    },
    {
      id: 3,
      name: "Fatima-Zahra Benjelloun",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "Stellar customer presentation. The custom tracking advice by Samira Naturale was exceptionally welcoming. One sachet is perfect for a giant ice cup!"
    },
    {
      id: 4,
      name: "Abdelmajid Daoudi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "I used to suffer from deep post-lunch drowsiness. Taking chilled Limonzhi completely restored my mental clarity and focus. The 2-box deal is unbeatable value."
    },
    {
      id: 5,
      name: "Amina El Sakli",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "The absolute best healthy beverage choice I can offer my children to keep them hydrated during hot summer days. The organic citrus profile is deeply premium."
    },
    {
      id: 6,
      name: "Hakim El Idrissi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "I carry the master family bundle to my workplace. Excellent botanical standards that prevent caffeine jitters while giving sustained energetic freshness."
    }
  ],
  fr: [
    {
      id: 1,
      name: "Laila El Tazi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      text: "Le Limonzhi est devenu mon rituel incontournable de l'après-midi ! Un délice rafraîchissant sans sucre industriel. Je me sens beaucoup plus énergique."
    },
    {
      id: 2,
      name: "Youssef El Amrani",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      text: "Je pratique beaucoup de course à pied et le Limonzhi m'offre une réhydratation naturelle magique sans acidité stomacale. Livraison super rapide à Casablanca."
    },
    {
      id: 3,
      name: "Fatima-Zahra Benjelloun",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "La qualité du sachet protecteur est top. L'accompagnement personnalisé de Samira m'a beaucoup aidée à comprendre comment en tirer le meilleur profit. Je recommande !"
    },
    {
      id: 4,
      name: "Abdelmajid Daoudi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      text: "Adieu le coup de fatigue après le déjeuner. Un verre de Limonzhi glacé et je retrouve toute ma concentration pour finir mes projets professionnels."
    },
    {
      id: 5,
      name: "Amina El Sakli",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      text: "La seule boisson saine et parfumée que mes enfants me réclament volontiers à la place des sodas nocifs. Goût de citron frais très agréable."
    },
    {
      id: 6,
      name: "Hakim El Idrissi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "J'achète le grand pack familial pour toute la maison. Un produit d'une qualité naturelle remarquable soutenu par les certifications biologiques sérieuses de DXN."
    }
  ]
};

export const limonzhiFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  ar: [
    {
      q: "ما هو مشروب DXN ليمونزي (Limonzhi)؟",
      a: "DXN ليمونزي هو مشروب طبيعي فاخر يمزج بأناقة بين نكهة الليمون الطبيعية المنعشة وأوراق الشاي الفاخرة، المعززة بمستخلص فطر الجانوديرما (الريشي) لخدمة توازن الجسم وحيويته، وهو خيار رائع لإطفاء العطش ودعم الرفاهية اليومية."
    },
    {
      q: "كيف يتم تحضير مشروب ليمونزي؟",
      a: "التحضير في غاية السهولة: كل ما عليك هو إفراغ محتويات الكيس الفردي في كوب، وإضافة الماء البارد أو الفاتر وحرك المزيج جيداً لثوانٍ حتى يذوب بالكامل. يمكنك أيضاً إضافة مكعبات الثلج أو بعض أوراق النعناع الطازجة لمزيد من الانتعاش."
    },
    {
      q: "هل يمكنني ومن عائلتي الاستمتاع بليمونزي يومياً؟",
      a: "نعم تماماً، تركيبته الطبيعية الخفيفة والمتوازنة معدة بدقة لتكون جزءاً طبيعياً وممتعاً من روتينك الغذائي وبديلك الأمثل للمشروبات المُحلاة بالمواد الاصطناعية للاستهلاك اليومي الداعم للعافية."
    },
    {
      q: "ما الذي يجعل DXN Limonzhi فريداً واستثنائياً؟",
      a: "تفرده يكمن في احتوائه على مزيج طبيعي متناغم يضم فطر الجانوديرما (فطر الريشي) المعروف بفوائده في دعم طاقة خلايا الجسم والحفاظ على التوازن، مما يجعله أكثر من مجرد عصير ليمون قياسي بل مشروباً مغذياً ومجدداً للنشاط."
    },
    {
      q: "هل يناسب ليمونزي الأنماط الحياتية النشطة والرياضيين؟",
      a: "بالتأكيد، يعتبر ليمونزي خياراً مثالياً بعد جلسات الرياضة أو الأنشطة البدنية المرهقة لإعادة ترطيب الجسم بكفاءة وسرعة، فضلاً عن احتوائه على مغذيات طبيعية تدعم المستويات الحيوية واليقظة المعتدلة دون حدوث خمول."
    },
    {
      q: "ما هي طريقة التخزين المناسبة لأكياس ليمونزي؟",
      a: "يوصى بتخزين أكياس ليمونزي في مكان بارد وجاف بعيداً عن الرطوبة المرتفعة وأشعة الشمس المباشرة لضمان بقاء المكونات الطبيعية والمستخلصات غضة وبأعلى مستويات الجودة لفترة طويلة."
    }
  ],
  en: [
    {
      q: "What is DXN Limonzhi?",
      a: "DXN Limonzhi is a refreshing premium dry tea-lemon blend composed of biological sun-ripened lemons infused with organic high-grade Ganoderma (Reishi) extract. It is formulated to deeply hydrate, quench your physical thirst, and satisfy daily cellular homeostatic paths."
    },
    {
      q: "How option is DXN Limonzhi prepared?",
      a: "It is extremely straightforward: tear open one packet, blend its fine golden contents into a glass of cool, chilled or dynamic ambient water (approx 150ml to 200ml), and stir well for 30 seconds. Feel free to upgrade it with floating ice or fresh mint leaves."
    },
    {
      q: "Can Limonzhi be enjoyed daily by everyone?",
      a: "Absolutely. Its gentle organic properties, controlled citrus levels, and balanced profile make it an exceptional replacement for chemical-heavy soft drinks, safe and delicious for daily nutritional enjoyment."
    },
    {
      q: "What makes DXN Limonzhi completely unique over standard lemonade?",
      a: "Unlike typical processed lemon powders or high-fructose syrups, Limonzhi contains genuine high-elevation lemon notes and is fortified with patented DXN Ganoderma Lucidum extract, reinforcing natural physical defenses and wellness values."
    },
    {
      q: "Is it suitable for an active physical lifestyle and athletes?",
      a: "Yes, definitely. Post-workout dehydration is masterfully mitigated by rehydrating the physical body with organic acidic antioxidants. It assists in continuous clean focus and cell recovery without artificial spikes."
    },
    {
      q: "How should DXN Limonzhi sachets be stored?",
      a: "Simply store the individual hermetic box packets in a cool, dark, and dry kitchen pantry away from direct solar exposure or humid environments to preserve the maximum efficacy of the organic botanicals."
    }
  ],
  fr: [
    {
      q: "Qu'est-ce que le DXN Limonzhi ?",
      a: "Le DXN Limonzhi est une boisson saine et rafraîchissante combinant harmonieusement la saveur acidulée du citron naturel et les extraits d'un thé de première qualité, enrichis en Ganoderma Lucidum (Reishi) pour soutenir l'énergie corporelle générale."
    },
    {
      q: "Comment préparer le Limonzhi ?",
      a: "C'est instantané : versez le contenu d'un sachet dans un grand verre d'eau (fraîche ou tempérée), puis touillez avec une cuillère pendant quelques instants. Vous pouvez ajouter des glaçons et du citron frais pour un maximum de plaisir."
    },
    {
      q: "Peut-on en consommer tous les jours ?",
      a: "Oui, tout à fait. C'est même une excellente habitude de vie ! Il constitue une boisson saine, sans édulcorants agressifs, parfaite pour s'hydrater intelligemment à tout moment de la journée."
    },
    {
      q: "Qu'est-ce qui rend le Limonzhi DXN unique sur le marché ?",
      a: "La différence réside dans l'intégration exclusive du Ganoderma (Reishi) de DXN. Cette herbe sacrée permet d'agir en profondeur sur la fatigue et la détoxification de l'organisme, transformant un simple geste de boisson en véritable thérapie naturelle."
    },
    {
      q: "Est-il adapté aux sportifs et aux personnes actives ?",
      a: "Absolument. Il étanche la soif à la perfection après l'effort, rééquilibre les minéraux essentiels perdus dans la transpiration, et s'impose comme un excellent booster d'énergie bienveillant sans excitation cardiaque."
    },
    {
      q: "Comment stocker au mieux les sachets ?",
      a: "Conservez simplement les sachets scellés dans leur boîte d'origine à l'abri de l'humidité et de la chaleur directe de la cuisine pour conserver intactes toutes les propriétés des nutriments."
    }
  ]
};

export const limonzhiPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    {
      id: 'single',
      title: "باقة الانتعاش (علبة واحدة)",
      desc: "مثالية للمبتدئين لتجربة الطعم المنعش والفاخر.",
      price: 140,
    },
    {
      id: 'double',
      title: "الباقة الثنائية (علبتين) - الأكثر طلباً",
      desc: "تكفي لشهر كامل من الدلال مع شحن سريع مجاني وهدية مخصصة.",
      price: 260,
      badge: "الأكثر مبيعاً 🔥"
    },
    {
      id: 'family',
      title: "باقة العائلة والنشاط (3 علب)",
      desc: "أفضل قيمة توفيرية لعائلتك مع شحن سريع مجاني ومطحنة خشبية مخصصة هدية.",
      price: 370,
      badge: "عرض التوفير الأكبر 🎁"
    }
  ],
  en: [
    {
      id: 'single',
      title: "Starter Freshness Pack (1 Box)",
      desc: "Perfect size for beginners to taste pure zesty premium hydration.",
      price: 140,
    },
    {
      id: 'double',
      title: "Double Vitality Pack (2 Boxes) - Best Seller",
      desc: "Ideal 30-day course for personal daily wellness + Free courier delivery.",
      price: 260,
      badge: "Best Value 🔥"
    },
    {
      id: 'family',
      title: "Family Abundance Pack (3 Boxes)",
      desc: "The ultimate savings choice for healthy homes + Free fast delivery.",
      price: 370,
      badge: "Maximum Discount 🎁"
    }
  ],
  fr: [
    {
      id: 'single',
      title: "Pack Découverte Fraîcheur (1 Boîte)",
      desc: "Format idéal pour savourer et s'initier aux douceurs du Limonzhi.",
      price: 140,
    },
    {
      id: 'double',
      title: "Pack Double Vitalité (2 Boîtes) - Recommandé",
      desc: "Idéal pour une routine d'un mois + Livraison express offerte chez vous.",
      price: 260,
      badge: "Populaire 🔥"
    },
    {
      id: 'family',
      title: "Pack Familial Sérénité (3 Boîtes)",
      desc: "Le meilleur rapport qualité-prix pour toute la maisonnée + Cadeau surprise.",
      price: 370,
      badge: "Super Économique 🎁"
    }
  ]
};

export const whyChooseLimonzhiList: Record<'en' | 'fr' | 'ar', string[]> = {
  ar: [
    "مستخلصات ليمون طبيعية ممتازة ومثبت استهلاكها بأمان منذ قرون.",
    "معزز بفطر الجانوديرما (فطر الريشي) الأثيري الذي يدعم توازن خلايا المناعة.",
    "نظام إنتاج عضوي خاضع لأشد فحوصات الجودة الألمانية والدولية.",
    "مناسبة تامة للأشخاص الذين يتبعون نظام حياة صحي ومتوازن بدون سكر زائد.",
    "بديل طبيعي ممتاز وخالي تماماً من المواد الكيمياوية الضارة والملونات الصناعية.",
    "شهادات جودة عالمية موثقة (ISO, GMP, Halal) لراحة واستقرار فكري كامل."
  ],
  en: [
    "Contains trace-checked active sun-grown whole lemon pulps.",
    "Infused with pristine sovereign DXN Ganoderma Lucidum extract.",
    "Manufactured under sterile certified state-of-the-art laboratory standards.",
    "Zero harsh chemicals, artificial sweeteners, or high-sugar elements.",
    "A perfect fit for professional, active, and balanced calorie-restricted lifestyles.",
    "Globally certified under Halal, ISO, and GMP international frameworks."
  ],
  fr: [
    "Élaboré à partir de véritables citrons mûrs rigoureusement sélectionnés.",
    "Enrichi en extrait pur de Reishi (Ganoderma Lucidum) biologique.",
    "Formulé sous des conditions biotechnologiques brevetées de pointe.",
    "Zéro colorant artificiel pour une véritable hygiène alimentaire au quotidien.",
    "S'intègre parfaitement dans les régimes d'amincissement et d'équilibre glycémique.",
    "Bénéficie de la confiance absolue de millions de consommateurs dans 180 pays."
  ]
};
