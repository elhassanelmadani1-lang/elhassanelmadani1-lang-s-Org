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
  addonToothpasteName: string;
  addonToothpasteDesc: string;
  faqHeading: string;
  faqSub: string;
  complHeading: string;
  complSub: string;
  backToCatalog: string;
}

export const coffeeLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  en: {
    heroBadge: "👑 THE GOLDEN STANDARD OF REPRODUCIVE WELLNESS & COGNITIVE FOCUS",
    heroTitle: "Premium DXN Lingzhi Gourmet Black Coffee 2 in 1",
    heroSub: "Experience the supreme luxury of an premium-crafted, dark-roast gourmet coffee infused with 100% certified organic Ganoderma lucidum (Reishi) extract. Featuring micro-caffeine density (less than 0.06%), a naturally balanced low-acid composition, and zero synthetic additives to deliver sustained focus, healthy gut digestion, and clean wellness without jitters or palpitations.",
    heroCTAOrder: "Acquire Your Premium Gourmet Coffee Kit",
    heroCTAConsult: "Complimentary Wellness Call with Samira",
    trustBadgeSub: "Enriched with pristine, certified organic Ganoderma. Free from added sugars, toxic fillers, and chemical flavorings.",
    benefitsHeading: "Why Lingzhi Black Coffee is the Ultimate Daily Tonic",
    benefitsSub: "A clean, rich, and deeply refreshing adaptogenic brew engineered for cognitive clarity, immunity support, and stomach-friendly alkaline balance.",
    ingredientsHeading: "Pristine Adaptogenic Formula Secrets",
    ingredientsSub: "Crafted with the finest, hand-selected gourmet coffee beans and premium Reishi extracts.",
    ingredientsText: "DXN Lingzhi Black Coffee is a masterpiece formulation that blends high-grade roasted coffee beans with standard active triterpenoids and polysaccharides found in organic Reishi mushrooms. It works synergistically to elevate ATP cellular energy production without causing the nervous arousal commonly associated with typical high-caffeine beverages.",
    reishiTitle: "100% Certified Organic Reishi mushroom",
    reishiDesc: "Soothes systemic oxidative stress, supports defensive immunity cells, and stabilizes biological cycles.",
    mintTitle: "Ultra-low Caffeine Density (<0.06%)",
    mintDesc: "Delivers deep cognitive focusing power and mental stamina without triggering palpitations, jitters, or insomnia.",
    pureTitle: "Stomach-Safe Low Acid Profile",
    pureDesc: "Perfect for sensitive digestive tracts. Naturally balances pH to eliminate coffee-induced stomach burn or reflux.",
    howToUseTitle: "Simple Ritual for Elevating Daily Focus",
    howToUseSub: "How to prepare your premium cup of Lingzhi coffee to achieve optimal metabolic results.",
    packagesTitle: "Choose Your Premium Coffee Wellness Package",
    packagesSub: "Select a package below to start your gourmet wellness journey. Freshly imported stock, fast and 100% free delivery across Morocco.",
    moroccoDelivery: "Free Express Shipping in Morocco Included",
    extraGift: "Premium Eco-friendly travel cup or stir-stick included",
    consultationIncluded: "Exclusive Wellness Call with Samira Included",
    orderBtn: "Order Pack & Confirm on WhatsApp",
    checkoutHeading: "Frictionless Direct Checkout",
    checkoutSub: "Confirm your delivery details below to transmit your custom WhatsApp coffee order.",
    checkoutNameLabel: "Your Noble Full Name *",
    checkoutAddressLabel: "Morocco Delivery Address *",
    checkoutPhoneLabel: "WhatsApp Phone Number *",
    checkoutBtnSubmit: "CONFIRM MY LUXURY COFFEE ORDER ON WHATSAPP",
    secureCheckoutBadge: "🔒 Secure direct-to-WhatsApp delivery. Pay cash-on-delivery upon arrival.",
    addonsHeading: "Enrich Your Coffee Collection (Optional Add-ons)",
    addonsSub: "Check these premium essentials to combine inside your package with no extra shipping fees:",
    addonSpirulinaName: "DXN Organic Spirulina Powder (+260 DH)",
    addonSpirulinaDesc: "Superfood packed with plant proteins and iron for systemic vitality and deep purification.",
    addonToothpasteName: "DXN Ganozhi Plus Toothpaste (+85 DH)",
    addonToothpasteDesc: "Premium botanical fluoride-free Ganoderma toothpaste for ultimate gum and enamel defense.",
    faqHeading: "Adaptogenic Wisdom, Answered Secrets",
    faqSub: "Important questions answered regarding our premium DXN Lingzhi Black Coffee.",
    complHeading: "Complete Your Wellness Ritual",
    complSub: "Other premium DXN natural essentials hand-selected by Samira for your longevity.",
    backToCatalog: "Back to complete catalog"
  },
  fr: {
    heroBadge: "👑 LE STANDARD D'EXCELLENCE POUR L'ÉNERGIE PROPRE ET LA CONCENTRATION",
    heroTitle: "Café Noir Gourmet DXN Lingzhi 2 en 1 de Prestige",
    heroSub: "Découvrez le raffinement suprême d'une torréfaction fine de grains précieux, fusionnée avec l'extrait de Ganoderma (Reishi) 100% biologique. Avec une teneur infime en caféine (moins de 0,06%), une acidité naturellement neutralisée et zéro sucre ou arôme chimique, ce café offre un focus net, une digestion légère et une tonification durable sans palpitations.",
    heroCTAOrder: "Bénéficier de Mon Pack Café Gourmet",
    heroCTAConsult: "Entretien d'Énergie Offert avec Samira",
    trustBadgeSub: "Enrichi en Ganoderma 100% biologique certifié. Sans sucres, sans solvants chimiques ni épaississants.",
    benefitsHeading: "Pourquoi le Café Noir Lingzhi est un Élixir Incontournable",
    benefitsSub: "Un breuvage propre, digeste, alcalin et régénérant conçu pour éveiller l'esprit tout en protégeant votre estomac.",
    ingredientsHeading: "Les Secrets de Notre Formule Active",
    ingredientsSub: "L'union parfaite entre l'arôme robuste du café noir de sélection et la puissance adaptogène du Reishi.",
    ingredientsText: "Le Café Noir DXN Lingzhi 2 en 1 est une formulation innovante qui préserve le corps et l'intensité d'un expresso de haute volée tout en y instillant les polysaccharides régulateurs du champignon Reishi. Cette synergie unique nourrit la vitalité cellulaire (ATP) tout en maintenant un rythme cardiaque calme.",
    reishiTitle: "Extrait Pur de Ganoderma (Reishi)",
    reishiDesc: "Renforce les défenses naturelles, combat la fatigue chronique et soutient le système cardio-circulatoire.",
    mintTitle: "Caféine Naturelle Infime (<0,06%)",
    mintDesc: "Procure un éveil intellectuel immédiat et un tonus physique constant sans pic de stress ni insomnie.",
    pureTitle: "Confort Intestinal et Faible Acidité",
    pureDesc: "Idéal pour les estomacs délicats ou sujets aux brûlures provoquées par les cafés industriels classiques.",
    howToUseTitle: "Le Rituel de Vitalité Simple et Rapide",
    howToUseSub: "Comment préparer votre tasse de prestige pour savourer tous les bienfaits de notre formule.",
    packagesTitle: "Choisissez Votre Coffret Énergie Verte",
    packagesSub: "Sélectionnez votre formule ci-dessous. Stock fraîchement importé, livraison express gratuite partout au Maroc.",
    moroccoDelivery: "Livraison Express Offerte partout au Maroc",
    extraGift: "Tasse de voyage écologique ou spatule de bois fine offerte",
    consultationIncluded: "Bilan vitalité de 15 min offert avec Samira pour optimiser vos rituels",
    orderBtn: "Commander & Valider via WhatsApp",
    checkoutHeading: "Formulaire de Commande Express",
    checkoutSub: "Remplissez vos coordonnées ci-dessous pour lancer l'ordre WhatsApp sécurisé.",
    checkoutNameLabel: "Votre Nom Complet Noble *",
    checkoutAddressLabel: "Adresse de Livraison au Maroc *",
    checkoutPhoneLabel: "Numéro de Téléphone WhatsApp *",
    checkoutBtnSubmit: "TRANSMETTRE MA COMMANDE DE CAFÉ DE PRESTIGE VIA WHATSAPP",
    secureCheckoutBadge: "🔒 Commande directe 100% sécurisée. Paiement cash à la livraison.",
    addonsHeading: "Complétez Votre Commande (Options sans frais de port)",
    addonsSub: "Ajoutez ces indispensables de bien-être DXN directement dans votre colis sans payer de livraison supplémentaire :",
    addonSpirulinaName: "Poudre de Spiruline Biologique DXN (+260 DH)",
    addonSpirulinaDesc: "Super-aliment vert alcalinisant, riche en fer et protéines végétales pour la force.",
    addonToothpasteName: "Dentifrice DXN Ganozhi Plus (+85 DH)",
    addonToothpasteDesc: "Dentifrice botanique de luxe sans fluor, au Reishi, pour des gencives saines et des dents polies.",
    faqHeading: "Savoir Adaptogène & Réponses Claires",
    faqSub: "Vos questions de bien-être concernant notre célèbre Café Noir DXN Lingzhi.",
    complHeading: "Complétez Votre Routine de Vie",
    complSub: "Les secrets complémentaires d'hygiène et énergie DXN sélectionnés pour vous.",
    backToCatalog: "Retourner au catalogue complet"
  },
  ar: {
    heroBadge: "👑 القهوة الصحية الفاخرة رقم 1 عالمياً لضبط المزاج والمناعة",
    heroTitle: "قهوة لينجزي السوداء الفاخرة 2 في 1 بالفطر الريشي",
    heroSub: "تذوق الفخامة الحقيقية في كل فنجان من قهوة لينجزي السوداء الفيتنامية الفاخرة الممزوجة بنسبة 100% مع خلاصة فطر الجانوديرما (الريشي) العضوي المعتمد. تتميز بنسبة كافيين ضئيلة جداً (أقل من 0.06%) وخلوها التام من السكر، المحليات، والمواد الحافظة الكيميائية. تمنحك نشاطاً مستداماً وتركيزاً ذهنياً فائقاً دون حموضة، قلق، أو زيادة في ضربات القلب.",
    heroCTAOrder: "احصل على باقة قهوة لينجزي الفاخرة",
    heroCTAConsult: "استشارة ومتابعة مباشرة مجانية مع لالة سميرة",
    trustBadgeSub: "معززة بنسبة 100% بخلاصة الفطر الريشي العضوي المعتمد. خالية من السكر ومن مسببات الحموضة.",
    benefitsHeading: "لماذا تعد قهوة لينجزي السوداء المشروب الحيوي الأمثل؟",
    benefitsSub: "بديل صحي متوازن متكامل يطرد السموم، يرفع مستويات الحيوية والطاقة الذهنية، ولطيف كلياً على المعدة والجهاز الهضمي.",
    ingredientsHeading: "أسرار التركيبة وصناعة الفخامة العالمية",
    ingredientsSub: "مزيج متناغم يدمج حبوب البن الفاخرة المنتقاة بعناية بأعلى درجات النقاء للمركبات البيولوجية بالريشي.",
    ingredientsText: "تعبّر قهوة لينجزي السوداء 2 في 1 عن الابتكار الحقيقي لـ DXN حيث تلتقي متعة القهوة الغنية بالمركبات النشطة للفطر الريشي (البوليسكريدات والتريتربينات). هذا التوازن النادر يعمل على تعزيز التنفس الخلوي وطرد الفضلات مع حماية المعدة والقولون بشكل مثالي.",
    reishiTitle: "خلاصة الفطر الريشي العضوي النقي 100%",
    reishiDesc: "ينظف أعضاء الجسم من السموم المتراكمة، يقوي خلايا المناعة، ويحمي الأوعية الدموية والشرايين.",
    mintTitle: "نسبة كافيين متناهية الصغر (أقل من 0.06%)",
    mintDesc: "تمنح خلايا الدماغ نشاطاً وانتباهاً يقظاً دون التسبب في أرق، خفقان، أو توتر للأعصاب.",
    pureTitle: "تركيبة صحية متوازنة خالية من حموضة البن التقليدي",
    pureDesc: "آمنة ومريحة جداً لمرضى قرحة المعدة والقولون. لا تسبب أي ارتجاع مريئي أو حرقة معدية.",
    howToUseTitle: "طقوس غاية في البساطة لفنجان مفعم بالطاقة",
    howToUseSub: "كيفية تحضير قهوة لينجزي المريحة بأفضل طريقة لتحقيق الاستفادة القصوى لجسمك.",
    packagesTitle: "اختر باقة المزاج والصحة الفائقة المناسبة لعائلتك",
    packagesSub: "حدد العرض المناسب لتنشيط دورتك الدموية والحصول على قهوتك الأصلية تشمل التوصيل المجاني للمنزل بالمغرب.",
    moroccoDelivery: "توصيل سريع مجاني مدمج لكافة المدن المغربية",
    extraGift: "كوب سفر فاخر ومقاوم للحرارة أو ملعقة خشبية هدية مجانية مدمجة",
    consultationIncluded: "استشارة ومتابعة هاتفية مخصصة ومجانية معك مباشرة من لالة سميرة لمعرفة المكملات وتأثيرها",
    orderBtn: "طلب الباقة وتأكيد الشراء عبر واتساب",
    checkoutHeading: "الطلب الفوري ومباشر في صفحة واحدة",
    checkoutSub: "يرجى تعبئة معلوماتك الحقيقية هنا لنقوم بتوصيل طلبيتك من القهوة الفاخرة بكل أمان وسرعة وال دفع عند الاستلام.",
    checkoutNameLabel: "الاسم الكامل الكريم للمستلم *",
    checkoutAddressLabel: "عنوان التوصيل أو المدينة بالدقة لضمان سرعة التوصيل *",
    checkoutPhoneLabel: "رقم هاتف الواتساب النشط لتأكيد الاتصال والمتابعة *",
    checkoutBtnSubmit: "إرسال وتأكيد الطلب الفوري عبر واتساب",
    secureCheckoutBadge: "🔒 طلب مشفر وآمن 100%. الدفع نقداً عند التوصيل والاستلام عند باب منزلك بالمغرب.",
    addonsHeading: "عزز طلبك بأفضل المنتجات العائلية (اختياري)",
    addonsSub: "يمكنك إضافة هذه العلاجات الطبيعية والمنتجات الراقية في نفس الطرد مع شحن مجاني وبدون رسوم إضافية:",
    addonSpirulinaName: "مسحوق السبيرولينا العضوي دي إكس إن (+260 درهم)",
    addonSpirulinaDesc: "سوبر فود صحي ممتاز غني بالحديد العضوي والبروتينات لبناء مناعة ونشاط دائم.",
    addonToothpasteName: "معجون الأسنان الفاخر جانوزي بلس (+85 درهم)",
    addonToothpasteDesc: "معجون أسنان ذو جودة بيولوجية بدون فلورايد للحفاظ على تماسك اللثة وبياض الأسنان طبيعياً.",
    faqHeading: "إجابات وحقائق العناية والصحة والأداء",
    faqSub: "الأسئلة الشائعة التي تهمك حول خصائص ومميزات وتأثير قهوتنا العشبية الأصلية من دي إكس إن.",
    complHeading: "اكتمل رحلتك الصحية بمنتجاتنا المتكاملة",
    complSub: "كتالوج المنتجات الطبيعية المتكاملة والراقية الموصى بها من لالة سميرة للعائلة المغربية.",
    backToCatalog: "الرجوع لتصفح الكاتالوج العام مجدداً"
  }
};

export const coffeeBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  en: [
    {
      title: "Mental Clarity & Jitter-Free Energy",
      desc: "Delivers smooth cognitive focus and reliable neurological energy. The adaptogens in Reishi temper adrenaline responses, preventing adrenal fatigue.",
      science: "Naturally lower cortisol & sustained neurotransmission",
      icon: "Sparkles"
    },
    {
      title: "Alkaline Systemic Balancing",
      desc: "Unlike standard highly acidic coffees, Lingzhi Black Coffee displays an alkaline pH configuration, which is highly dynamic for gastrointestinal health.",
      science: "Metabolic alkalizing biological agents",
      icon: "ShieldCheck"
    },
    {
      title: "Deep Immunity Strengthening",
      desc: "Rich in active Reishi Polysaccharides and Germanium, which cellularly stimulate white blood cells and systemic defensive barrier mechanisms.",
      science: "Active Beta-Glucans and Organic Germanium",
      icon: "Activity"
    },
    {
      title: "Healthy Weight & Metabolism Support",
      desc: "Promotes fat burning and cellular glycogen oxygenation while safely accelerating digestion with absolutely no sugar or toxic colorants.",
      science: "Active Lipolytic organic co-enzymes",
      icon: "Award"
    }
  ],
  fr: [
    {
      title: "Clarté Mentale et Concentration Sereine",
      desc: "Améliore le focus intellectuel de manière fluide. Les adaptogènes du Reishi calment la réponse à l'adrénaline, évitant le fameux coup de fatigue.",
      science: "Cortisol régulé et influx nerveux optimisé",
      icon: "Sparkles"
    },
    {
      title: "Équilibre et Confort Alcalin",
      desc: "Contrairement aux cafés industriels très acides, le Café Lingzhi possède un pH alcalinisant très favorable pour restaurer la muqueuse stomacale.",
      science: "Neutralisateurs naturels d'acidité gastrique",
      icon: "ShieldCheck"
    },
    {
      title: "Défense Immunitaire Profonde",
      desc: "Gorgé de polysaccharides et de Germanium Organique, qui renforcent l'action protectrice des globules blancs et l'oxygénation des tissus.",
      science: "Bêta-glucanes stimulants et anti-oxydants",
      icon: "Activity"
    },
    {
      title: "Accompagnement Métabolique Sain",
      desc: "Favorise l'élimination des toxines et stimule la microcirculation. Idéal pour un métabolisme équilibré, sans sucres cachés ni calories.",
      science: "Composants lipolytiques naturels",
      icon: "Award"
    }
  ],
  ar: [
    {
      title: "تركيز ذهني ونشاط بدون توتر",
      desc: "يمنحك نشاطاً ذهنياً فائقاً وهدوءاً عصبياً متوازناً. مركبات الريشي تؤخر الانهيار العصبي، وتمنع الإحساس بالخمول والتعب المفاجئ.",
      science: "تقليل معدلات الكورتيزول وتثبيت الناقلات العصبية",
      icon: "Sparkles"
    },
    {
      title: "قهوة صحية توازن وظائف الجسم",
      desc: "بالمقارنة مع القهوة الصناعية الحامضية، تمتاز قهوة لينجزي بتركيبة طبيعية تحمي الغشاء الداخلي للمعدة وتدعم التوازن العام للجسم.",
      science: "خصائص طبيعية تمنع تفاقم حمض المعدة",
      icon: "ShieldCheck"
    },
    {
      title: "تعزيز وتقوية الجهاز المناعي",
      desc: "غنية جداً بالبوليسيكاريدات والجرمنيوم العضوي النشط من الفطر الريشي، وهي مواد تنشط خلايا الدم البيضاء وتزيد من كفاءة خطوط الدفاع.",
      science: "البيتا جلوكان ومضادات الأكسدة الحيوية الفعالة",
      icon: "Activity"
    },
    {
      title: "دعم الهضم السليم وإزالة الكسل",
      desc: "تساعد على تفتيت الدهون وتحويل السكريات إلى طاقة خلوية، وتسرع حركات الهضم بأمان لكونها خالية من أي محليات أو دهون مضافة.",
      science: "أنزيمات مسحوق البن العضوي المحفزة للهدم والتمثيل الغذائي",
      icon: "Award"
    }
  ]
};

export const coffeeSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  en: [
    {
      title: "Dispense Concentrated Blend",
      desc: "Dissolve 1/3 or 1/2 of a sachet (very rich and highly concentrated) of Lingzhi Black Coffee into your favorite cup."
    },
    {
      title: "Infuse with Water",
      desc: "Pour around 150ml of hot pure water (approx. 80-90°C) to fully release the aromatic compounds and organic Reishi extract."
    },
    {
      title: "Stir & Ignite Energy",
      desc: "Stir elegantly with a wooden stick or ceramic spoon. Sip slowly to experience the smooth, deep, sugar-free espresso energy."
    }
  ],
  fr: [
    {
      title: "Doser Selon Vos Envie",
      desc: "Versez 1/3 ou la moitié d'un sachets (formule très concentrée) de Café Noir Lingzhi dans votre tasse favorite."
    },
    {
      title: "Infuser à l'Eau Chaude",
      desc: "Ajoutez environ 150ml d'eau chaude non bouillante (80-90°C) pour libérer les huiles aromatiques du café et les molécules du Reishi."
    },
    {
      title: "Remuer et Savourer",
      desc: "Mélangez doucement et dégustez à petites gorgées. Ressentez l'harmonie et l'énergie pure d'un expresso sans amertume ni sucres."
    }
  ],
  ar: [
    {
      title: "تفصيل الجرعة حسب رغبتك",
      desc: "أفرغ ثلث أو نصف كيس من مسحوق قهوة لينجزي المركزة للغاية في فنجانك المفضل (الكيس الواحد يصنع حتى 3 فناجين)."
    },
    {
      title: "إضافة الماء الساخن",
      desc: "صب ما يقارب 150 مل من الماء الساخن النقي (بدرجة حرارة 80-90 مئوية) لتوزيع أريج القهوة وجزيئات الفطر الريشي."
    },
    {
      title: "التحريك والاستمتاع بالمزاج",
      desc: "حرك القهوة بخفة، وتناول رشفاتك الأولى ببطء لتبدأ يومك بذهن حاد، ومعدة مرتاحة، ونشاط غير منقطع طوال النهار."
    }
  ]
};

export const coffeePacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  en: [
    {
      id: "single",
      title: "Individual Discovery Bag",
      desc: "1 Pack containing 20 standard concentrated sachets. Designed for personal focus. Best for testing.",
      price: 130
    },
    {
      id: "double",
      title: "Premium Stamina Kit (Recommended)",
      desc: "2 Complete Packs (40 Sachets). Ideal to consolidate energy and complete a metabolic detox cycle.",
      price: 250,
      badge: "BEST SELLER",
      bonus: "Free premium heat-insulated cup"
    },
    {
      id: "family",
      title: "Ultimate Family Wellness Bundle",
      desc: "3 Full Packs + 1 Organic Eco-Stirrer. Full immunity cover for the entire household. Total savings.",
      price: 360,
      badge: "MOST POPULAR",
      bonus: "Free travel cup + Express Delivery"
    }
  ],
  fr: [
    {
      id: "single",
      title: "Sacoche Découverte Individuelle",
      desc: "1 Paquet contenant 20 sachets de café concentré de haute qualité. Conçu pour tester sa vitalité quotidienne.",
      price: 130
    },
    {
      id: "double",
      title: "Cure d'Harmonie et Focus (Recommandé)",
      desc: "2 Paquets Complets (40 Sachets). Idéal pour un rééquilibrage de 40 jours et consolider l'immunité.",
      price: 250,
      badge: "BEST SELLER",
      bonus: "Gobelet isotherme offert"
    },
    {
      id: "family",
      title: "Offre Intégrale Énergie Famille",
      desc: "3 Paquets Complets + 1 mélangeur en bois élégant. Une protection complète contre la fatigue de toute la maison.",
      price: 360,
      badge: "POPULAIRE",
      bonus: "Tasse de voyage luxe offerte + Livraison Express"
    }
  ],
  ar: [
    {
      id: "single",
      title: "حقيبة التجربة والاكتشاف الفردية",
      desc: "عبوة واحدة تحتوي على 20 كيس مغلق من القهوة المركزة الفاخرة. مناسبة للبدء والتحقق من جودة ومفعول الطاقة.",
      price: 130
    },
    {
      id: "double",
      title: "باقة عافية العائلة وضبط المزاج البطلة (موصى بها)",
      desc: "عبوتان كاملتان (40 كيس قهوة). مثالية لبرنامج ديتوكس الجسم والاستمتاع بطاقة صباحية فائقة ونقاء ذهني تام.",
      price: 250,
      badge: "الأكثر مبيعاً 🏆",
      bonus: "كوب حراري فاخر لحفظ السخونة هدية مجانية"
    },
    {
      id: "family",
      title: "باقة الصحة والنشاط الخارق العائلية الكبرى",
      desc: "3 عبوات كاملة. أفضل سعر توفيري يضمن تغطية مناعية متكاملة وممتدة لجميع أفراد الأسرة وضيوفك الأحباء.",
      price: 360,
      badge: "توفير ممتاز ومحبوب ⭐",
      bonus: "كوب سفر فاخر ممتاز + توصيل مجاني وباب الدار"
    }
  ]
};

export const coffeeFAQs: Record<'en' | 'fr' | 'ar', FAQItem[]> = {
  en: [
    {
      q: "Does Lingzhi Black Coffee cause stomach acidity?",
      a: "Absolutely not. Unlike standard acidic coffee, high-quality DXN coffee features an alkaline composition. The organic Reishi extract actively neutralizes the coffee's typical acidity, protecting the mucosal lining of the stomach and preventing reflux or burning discomfort."
    },
    {
      q: "How can it have such low caffeine and still give me high energy?",
      a: "Regular coffee relies on raw caffeine spikes, which trigger nervous adrenaline rushes and lead to later crashes. Lingzhi coffee is low in caffeine (<0.06%) but contains concentrated organic Polysaccharides and Germanium from Reishi that stimulate cellular oxygenation and ATP synthesis, providing long-lasting, stable biological energy free from palpitations."
    },
    {
      q: "How many cups can one sachet produce?",
      a: "Due to its high concentration, each single sachet contains 4.5g of pure gourmet powder. It holds enough density to produce 2 to 3 standard delicious cups depending on your preferred taste profile."
    },
    {
      q: "Is it suitable for people with high blood pressure?",
      a: "Yes! Because the caffeine is trace-level and it contains organic Germanium and triterpenes known to naturally support healthy circulation and calm the nervous system, it can be consumed safely without causing blood pressure spikes. (Always consult your primary care physician for specific medical conditions)."
    },
    {
      q: "How long does shipping take and how do I pay?",
      a: "We provide lightning-fast, secure shipping across Morocco (usually within 24 to 48 hours). You do not pay anything online: we use the trust-based Cash on Delivery (COD) standard, where you pay the courier directly when he hands over your package at your doorstep."
    }
  ],
  fr: [
    {
      q: "Est-ce que ce café provoque de l'acidité ou des brûlures d'estomac ?",
      a: "Absolument pas. C'est l'un des avantages les plus réputés du Café Noir Lingzhi. L'extrait de Ganoderma possède des vertus hautement alcalines qui neutralisent l'acidité naturelle des grains de café de manière biologique. C'est un café doux, extrêmement bien toléré par les estomacs sensibles ou les personnes sujettes au reflux gastrique."
    },
    {
      q: "Comment un café si faible en caféine peut-il fournir tant d'énergie ?",
      a: "Les cafés conventionnels créent un pic d'adrénaline éphémère suivi d'un effondrement. Notre café utilise la synergie adaptogène du Reishi. Ce champignon augmente l'assimilation d'oxygène par les cellules et amplifie la production d'énergie ATP naturelle du corps. Vous bénéficiez ainsi d'une clarté mentale et d'une endurance stables, sans énervement ni palpitations."
    },
    {
      q: "Combien de tasses de café puis-je préparer avec un sachet ?",
      a: "Chaque sachet individuel pèse 4,5 g et contient une formule exceptionnellement concentrée. Selon l'intensité que vous recherchez, un seul sachet est suffisant pour confectionner entre 2 et 3 tasses de café riches et parfumées."
    },
    {
      q: "Est-il compatible avec l'hypertension ou les troubles cardiaques ?",
      a: "Oui, tout à fait. La teneur en caféine est extrêmement basse, inférieure à 0,06%, et le Ganoderma régule naturellement la tension artérielle en améliorant l'oxygénation sanguine et le relâchement des capillaires. C'est une boisson apaisante et revitalisante (demandez l'avis de votre médecin traitant si vous avez un traitement médical lourd)."
    },
    {
      q: "Comment se déroulent la livraison et le paiement au Maroc ?",
      a: "Nous assurons une livraison ultra-rapide partout au Maroc en 24h à 48h. Nous fonctionnons selon la méthode sécurisée du Paiement à la Livraison. Vous réglez directement le livreur en espèces lorsqu'il vous remet en main propre votre coffret frais et d'origine."
    }
  ],
  ar: [
    {
      q: "هل تسبب هذه القهوة حموضة في المعدة أو حرقان؟",
      a: "أبداً وبالمطلق. هذا أهم ما يميز قهوة لينجزي السوداء. بفضل جودتها وخصائص الفطر الريشي الطبيعية العالية المضافة إليها، يتم تحييد وتقليل حموضة البن تماماً. لهذا فإنها خفيفة جداً، بل وتساعد ممارسي القهوة الذين يعانون من ارتجاع المريء وقرحة المعدة والقولون على الشرب براحة واطمئنان."
    },
    {
      q: "كيف تمنحني القهوة نشاطاً كبيراً وهي منخفضة الكافيين جداً؟",
      a: "القهوة العادية تعتمد على الكافيين الذي يحفز هرمون الأدرينالين مسبباً طاقة مؤقتة تنتهي بالتعب المفاجئ وتوتر الأعصاب. أما قهوتنا فمنخفضة الكافيين (<0.06%) وتستمد طاقتها من الأكسجين الخلوي وبناء جزيئات الـ ATP بفضل الفطر الريشي الذي يمد خلاياك بحيوية ونشاط طبيعي هادئ ومستمر من دون خفقان أو أرق."
    },
    {
      q: "كم فنجاناً يمكنني تحضيره من الكيس الواحد؟",
      a: "نظراً للتركيز والنعومة الكبيرة للبن والريشي، يحتوي الكيس الواحد (المغلق بإحكام وزن 4.5 جرام) على كمية كافية لصناعة من فنجانين إلى 3 فناجين قهوة غنية بالنكهة والمذاق الرائع، اعتماداً على درجة التركيز التي تفضلها."
    },
    {
      q: "هل هي آمنة لمرضى الضغط المرتفع والسكري؟",
      a: "نعم، آمنة ومفيدة جداً. نسبة الكافيين شبه معدومة، والجانوديرما يعمل بمركباته على تنشيط الدورة الدموية وتنظيم مستويات السكر والدهون في الدم وتخفيف ضغوط الأوردة والشرايين، مما يدعم استقرار المؤشرات الحيوية بشكل طبيعي (يُنصح باستشارة طبيبك المتابع في الحالات المتقدمة)."
    },
    {
      q: "كيف تتم طريقة التوصيل والدفع في المغرب؟",
      a: "نوفر شحناً سريعاً وموثوقاً لكافة المدن المغربية، لتصلك طلبيتك في غضون 24 إلى 48 ساعة كحد أقصى. الدفع آمن وبسيط بنظام الدفع عند الاستلام (COD)، أي أنك لن تدفع درهماً واحداً عبر الإنترنت، بل تسلم المبلغ يداً بيد للموزع بعد معاينتك واستلامك لعلبتك أمام باب بيتك."
    }
  ]
};
