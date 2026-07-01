import { allProducts } from './data/allProducts';

export interface ProductTranslation {
  name: string;
  desc: string;
  benefits: string[];
}

export interface LanguagePack {
  brandName: string;
  brandSubtitle: string;
  heroTitle: string;
  heroSub: string;
  shopNow: string;
  whyChooseUs: string;
  whyChooseUsSub: string;
  pureTitle: string;
  pureDesc: string;
  dxnTitle: string;
  dxnDesc: string;
  deliveryTitle: string;
  deliveryDesc: string;
  ourProducts: string;
  ourProductsSub: string;
  addToCart: string;
  addedToCart: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  cartTitle: string;
  cartClose: string;
  cartEmpty: string;
  cartTotal: string;
  checkoutName: string;
  checkoutNamePlaceholder: string;
  checkoutAddress: string;
  checkoutAddressPlaceholder: string;
  checkoutPhone: string;
  checkoutPhonePlaceholder: string;
  checkoutButton: string;
  formError: string;
  orderCompletedText: string;
  itemText: string;
  whatsappAssistanceText: string;
  currency: string;
  quantity: string;
  whatsappMessageHeader: string;
  addressLabel: string;
  phoneLabel: string;
  totalLabel: string;
  itemsLabel: string;
}

export type LanguageCode = 'en' | 'fr' | 'ar';

export const translations: Record<LanguageCode, LanguagePack> = {
  en: {
    brandName: "Samira Naturale",
    brandSubtitle: "DXN Natural Wellness Products",
    heroTitle: "Revitalize Your Health with Nature's Best",
    heroSub: "Hand-picked, high-quality DXN organic products for your hygiene, energy, and long-term vitality. Experience nature's touch directly to your door.",
    shopNow: "Discover Products",
    whyChooseUs: "Why Choose Samira Naturale?",
    whyChooseUsSub: "We bring you the purest health, food, and personal hygiene creations from DXN, a worldwide pioneer in Ganoderma research.",
    pureTitle: "100% Organic & Safe",
    pureDesc: "Free from synthetic additives, artificial colorings, and harmful preservatives. Pure organic ingredients only.",
    dxnTitle: "Certified DXN Quality",
    dxnDesc: "Sourced directly, ensuring genuine packaging, strict sanitation, and standard quality certifications.",
    deliveryTitle: "Fast Local Delivery",
    deliveryDesc: "Speedy and secure shipping across Morocco, handled with love and care for your wellness.",
    ourProducts: "Our Featured Products",
    ourProductsSub: "Start your healthy lifestyle today with our 3 core premium DXN essentials.",
    addToCart: "Add to Cart",
    addedToCart: "Added!",
    aboutTitle: "About Samira Naturale",
    aboutText1: "Welcome to Samira Naturale, your trusted partner for premium DXN health and wellness solutions. My name is Samira, and my mission is to share the incredible healing and restorative power of natural supplements and certified organic hygiene products with my community.",
    aboutText2: "We specialize in world-renowned DXN essentials infused with Ganoderma (Reishi mushroom) and Spirulina. By adopting these nutrient-rich treasures, you can strengthen your immune system, elevate your energy levels, and achieve a balanced, radiant lifestyle. Every order is verified and fast-shipped to your home in Morocco with personalized guidance.",
    cartTitle: "Your Shopping Basket",
    cartClose: "Close",
    cartEmpty: "Your basket is currently empty. Start adding natural products!",
    cartTotal: "Grand Total",
    checkoutName: "Your Full Name *",
    checkoutNamePlaceholder: "John Doe",
    checkoutAddress: "Delivery Address *",
    checkoutAddressPlaceholder: "Street, Apartment, City, Morocco",
    checkoutPhone: "WhatsApp Phone Number *",
    checkoutPhonePlaceholder: "e.g., 0612345678",
    checkoutButton: "Complete Order on WhatsApp",
    formError: "Please fill in all required fields marked with an asterisk (*).",
    orderCompletedText: "Thank you! Redirecting you to WhatsApp to complete your order...",
    itemText: "item",
    whatsappAssistanceText: "Hello Samira! I have an inquiry about DXN products.",
    currency: "DH",
    quantity: "Qty",
    whatsappMessageHeader: "🟢 BRAND NEW ORDER - SAMIRA NATURALE 🟢",
    addressLabel: "📍 Delivery Address",
    phoneLabel: "📞 Customer Phone",
    totalLabel: "💵 Grand Total",
    itemsLabel: "🛍️ Ordered items"
  },
  fr: {
    brandName: "Samira Naturale",
    brandSubtitle: "Produits de Bien-être Naturels DXN",
    heroTitle: "Revitalisez Votre Santé avec le Meilleur de la Nature",
    heroSub: "Sélection rigoureuse de produits biologiques DXN haut de gamme pour votre hygiène, votre énergie et votre bien-être. Ressentez l'authentique fraîcheur naturelle.",
    shopNow: "Découvrir les Produits",
    whyChooseUs: "Pourquoi Choisir Samira Naturale ?",
    whyChooseUsSub: "Nous vous proposons les créations les plus pures de DXN, pionnier mondial de la recherche sur le Ganoderma, pour votre santé et votre hygiène.",
    pureTitle: "100% Organique et Sûr",
    pureDesc: "Exempt de tout additif synthétique, colorant artificiel ou conservateur chimique. Composants d'origine biologique pure.",
    dxnTitle: "Qualité DXN Certifiée",
    dxnDesc: "Produits authentiques provenant directement des sources officielles avec toutes les garanties sanitaires réglementaires.",
    deliveryTitle: "Livraison Rapide",
    deliveryDesc: "Expédition sécurisée et express partout au Maroc, préparée avec le plus grand soin pour vous.",
    ourProducts: "Nos Éléments Vedettes",
    ourProductsSub: "Démarrez une nouvelle routine de santé aujourd'hui avec nos 3 essentiels de bien-être.",
    addToCart: "Ajouter au Panier",
    addedToCart: "Ajouté !",
    aboutTitle: "À Propos de Samira Naturale",
    aboutText1: "Bienvenue chez Samira Naturale, votre partenaire de confiance pour les produits de bien-être de qualité supérieure DXN. Je m'appelle Samira, et ma mission est de diffuser dans notre communauté les incroyables bienfaits des compléments alimentaires naturels et des soins d'hygiène bio.",
    aboutText2: "Nous proposons des produits phares DXN à base de Ganoderma (Reishi) et de Spiruline. En intégrant ces nutriments essentiels dans votre quotidien, vous renforcez vos défenses naturelles, boostez votre vitalité et équilibrez votre hygiène de façon saine. Chaque commande est traitée rapidement et expédiée au Maroc.",
    cartTitle: "Votre Panier d'Achat",
    cartClose: "Fermer",
    cartEmpty: "Votre panier est vide pour le moment. Ajoutez des produits naturels !",
    cartTotal: "Total Général",
    checkoutName: "Votre Nom Complet *",
    checkoutNamePlaceholder: "Siham Alaoui",
    checkoutAddress: "Adresse de Livraison *",
    checkoutAddressPlaceholder: "Rue, Appartement, Ville, Maroc",
    checkoutPhone: "Numéro de Téléphone WhatsApp *",
    checkoutPhonePlaceholder: "Ex: 0612345678",
    checkoutButton: "Valider la Commande via WhatsApp",
    formError: "Veuillez remplir tous les champs obligatoires marqués d'un astérisque (*).",
    orderCompletedText: "Merci ! Redirection vers WhatsApp pour finaliser votre commande...",
    itemText: "produit",
    whatsappAssistanceText: "Bonjour Samira ! J'aimerais me renseigner sur les produits DXN.",
    currency: "DH",
    quantity: "Qté",
    whatsappMessageHeader: "🟢 NOUVELLE COMMANDE - SAMIRA NATURALE 🟢",
    addressLabel: "📍 Adresse de Livraison",
    phoneLabel: "📞 Téléphone Client",
    totalLabel: "💵 Montant Total",
    itemsLabel: "🛍️ Articles commandés"
  },
  ar: {
    brandName: "سميرة ناتورال",
    brandSubtitle: "منتجات DXN الطبيعية للصحة والجمال",
    heroTitle: "جدد حيويتك وصحتك بأفضل ما في الطبيعة",
    heroSub: "منتجات عضوية فاخرة ومختارة بعناية من DXN للعناية اليومية، الطاقة، والصحة المستدامة. استمتع بلمسة الطبيعة الحقيقية مباشرة حتى باب بيتك.",
    shopNow: "اكتشف المنتجات",
    whyChooseUs: "لماذا تختار سميرة ناتورال؟",
    whyChooseUsSub: "نحن نقدم لك أنقى تركيبات العناية الشخصية والمكملات من شركة DXN العالمية، الرائدة في أبحاث فطر الجانوديرما (الريشي).",
    pureTitle: "عضوي وآمن 100%",
    pureDesc: "خالٍ تماماً من الملونات الاصطناعية والمواد الحافظة الكيميائية الضارة. مكونات طبيعية نقية وموثوقة.",
    dxnTitle: "جودة DXN المعتمدة",
    dxnDesc: "منتجات أصلية مستوردة مباشرة، تضمن لك التغليف السليم وأعلى معايير النظافة والجودة العالمية.",
    deliveryTitle: "توصيل سريع",
    deliveryDesc: "شحن سريع وموثوق إلى جميع مدن المغرب، نُعدّه بكل حب واهتمام لضمان وصوله إليك في أفضل حال.",
    ourProducts: "منتجاتنا المميزة",
    ourProductsSub: "ابدأ أسلوب حياة صحي اليوم مع أهم 3 منتجات أساسية وتكاملية من DXN.",
    addToCart: "إضافة إلى السلة",
    addedToCart: "تمت الإضافة!",
    aboutTitle: "حول سميرة ناتورال",
    aboutText1: "مرحباً بكم في سميرة ناتورال، شريككم الموثوق للحصول على أفضل منتجات الصحة والعناية الفائقة من شركة DXN العالمية. اسمي سميرة، ورسالتي هي مشاركة القوة العلاجية المذهلة للأغذية الطبيعية ومنتجات العناية الشخصية العضوية المعتمدة مع مجتمعنا.",
    aboutText2: "نحن متخصصون في توفير أغذية وبدائل صحية غنية بفطر الجانوديرما والسبيرولينا وعش الغراب. باعتماد هذه الكنوز الغذائية، يمكنك تقوية مناعتك، شحن طاقتك اليومية وتذوق طعم العافية الحقيقية بأسلوب نقي. نقوم بتوفير متابعة شخصية وتوصيل سريع وعناية فائقة لكل مغاربة.",
    cartTitle: "سلة المشتريات الخاصة بك",
    cartClose: "إغلاق",
    cartEmpty: "سلتك فارغة حالياً. ابدأ بإضافة المنتجات الطبيعية الرائعة!",
    cartTotal: "المجموع الكلي",
    checkoutName: "الاسم الكامل للمستلم *",
    checkoutNamePlaceholder: "سهام العلوي",
    checkoutAddress: "عنوان التوصيل بالكامل *",
    checkoutAddressPlaceholder: "الشارع، رقم الشقة، المدينة، المغرب",
    checkoutPhone: "رقم هاتف الواتساب *",
    checkoutPhonePlaceholder: "مثال: 0612345678",
    checkoutButton: "تأكيد الطلب وإرساله عبر الواتساب",
    formError: "يرجى ملء جميع الحقول المطلوبة التي تحتوي على علامة النجمة (*).",
    orderCompletedText: "شكراً لك! جاري توجيهك إلى واتساب لإكمال طلبك مـع سميرة...",
    itemText: "منتج",
    whatsappAssistanceText: "مرحباً سميرة! أريد الاستفسار عن منتجات DXN الطبيعية.",
    currency: "درهم",
    quantity: "الكمية",
    whatsappMessageHeader: "🟢 طلب شراء جديد - سميرة ناتورال 🟢",
    addressLabel: "📍 عنوان التوصيل",
    phoneLabel: "📞 رقم هاتف الزبون",
    totalLabel: "💵 المجموع الإجمالي",
    itemsLabel: "🛍️ المنتجات المطلوبة"
  }
};

export const productsData: Record<string, any> = {
  toothpaste: {
    id: "toothpaste",
    image: "https://i.ibb.co/zHxTHyjQ/image.png",
    price: 156,
    en: {
      name: "DXN Ganozhi Plus Toothpaste",
      desc: "Premium natural toothpaste enriched with Ganoderma (Reishi) extract and food-grade spearmint oil. Free of fluoride, artificial colorings, and silica, offering delicate gum protection, superb cavity defense, and deep fresh breath.",
      benefits: ["Enriched with premium Ganoderma", "No high abrasive silica, non-toxic", "Refreshes breath & strengthens gums", "Free from artificial coloring and fluoride"]
    },
    fr: {
      name: "Dentifrice DXN Ganozhi Plus",
      desc: "Dentifrice naturel de qualité supérieure enrichi en extrait de Ganoderma (Reishi) et menthe douce de qualité alimentaire. Sans fluor, sans colorants ni silice abrasive, protégeant vos gencives sensibles et rafraîchissant l'haleine.",
      benefits: ["Enrichi en extrait pur de Ganoderma", "Prend soin de l'hygiène de vos gencives", "Sans fluor, sans colorants artificiels", "Haleine durablement fraîche et saine"]
    },
    ar: {
      name: "معجون أسنان جانوزي بلس",
      desc: "معجون أسنان طبيعي فاخر وغني بخلاصة فطر الجانوديرما (الريشي) وزيت النعناع الطبيعي. خالٍ تماماً من الفلورايد، الألوان الاصطناعية، والسيليكا الضارة. ينظف الأسنان واللثة بلطف، ويكافح التسوس والروائح الكريهة.",
      benefits: ["غني بخلاصة فطر الريشي المغذي والملطف", "خالٍ من الملونات والفلورايد الصناعي", "يطهر الفم واللثة ويمنحك نفساً منعشاً", "آمن ومناسب لجميع أفراد الأسرة ولطيف على الأسنان"]
    }
  },
  coffee: {
    id: "coffee",
    image: "https://i.ibb.co/TqhqBdJ0/image.png",
    price: 310,
    en: {
      name: "DXN Lingzhi Black Coffee",
      desc: "Premium gourmet dark coffee with trace caffeine, fortified with pure Ganoderma extract. Rich, smooth taste with an uplifting aroma, balancing acidity while promoting sustained daily stamina, good digestion, and mental focus.",
      benefits: ["Premium espresso coffee beans", "Boosted with adaptogenic Reishi", "Extremely low acidity and low caffeine", "Supports high vitality and immune system"]
    },
    fr: {
      name: "Café Noir DXN Lingzhi",
      desc: "Café noir gourmet de qualité supérieure infusé à l'extrait pur de Ganoderma (Reishi). Un arôme riche, corsé et naturellement faible en caféine, qui équilibre l'acidité et favorise une vitalité soutenue et une bonne digestion.",
      benefits: ["Grains de café torréfiés d'excellence", "Infusé au Ganoderma adaptogène", "Faible teneur en caféine et acidité réduite", "Soutient la concentration et le tonus naturel"]
    },
    ar: {
      name: "قهوة لينجزي السوداء 2 في 1",
      desc: "قهوة سوداء فاخرة سريعة التحضير ممزوجة بخلاصة فطر الجانوديرما (الريشي) النقي. تتميز بمذاقها الغني الخالي من السكر والمواد الحافظة ونسبة الكافيين الضئيلة جداً (أقل من 0.06%) لتعطيك طاقة عالية وتعدل المزاج من دون حموضة.",
      benefits: ["حبوب بن عالية الجودة بنكهة عميقة وسلسة", "معززة بالفطر الريشي الداعم لمناعة الجسم", "منخفضة الكافيين وخالية من السكر والمحليات", "تزيل التعب والكسل وتدعم الهضم السليم"]
    }
  },
  spirulina: {
    id: "spirulina",
    image: "https://i.ibb.co/1tMCDQsD/image.png",
    price: 365,
    en: {
      name: "DXN Spirulina Tablets",
      desc: "Pure nutrient-dense tablets rich in alkaline plant proteins, essential iron, beta-carotenes, B-complex vitamins, and active chlorophyll. Directly supports immune defense, deep detoxification, high cellular energy, and robust blood health.",
      benefits: ["100% natural, premium alkaline superfood", "Rich in organic proteins, vitamins, and minerals", "Enhances cell oxygenation, energy and hemoglobin", "Strong antioxidant & daily immune defense"]
    },
    fr: {
      name: "Spiruline DXN en Comprimés",
      desc: "Comprimés de spiruline pure d'une extraordinaire densité nutritionnelle, riches en fer biodisponible, protéines végétales, chlorophylle et vitamines. Favorise l'immunité, combat les carences et purifie l'organisme au quotidien.",
      benefits: ["Superaliment alcalin royal 100% naturel", "Riche en antioxydants et chlorophylle active", "Source exceptionnelle de fer et acides aminés", "Soutient l'immunité et lutte contre la fatigue générale"]
    },
    ar: {
      name: "أقراص السبيرولينا العضوية DXN",
      desc: "أقراص السوبر فود الطبيعية الغنية بالبروتينات النباتية والحديد والفيتامينات والمعادن النادرة والكلوروفيل النشط. يدعم تكوين خلايا الدم، ويرفع دفاع المناعة بشكل فائق لتنشيط كامل خلايا الجسم وعلاج فقر الدم والتعب المزمن.",
      benefits: ["غذاء طبيعي عضوي سوبر 100% ومنقى تماماً", "غني بالبروتينات والفيتامينات والمعادن النادرة", "يغذي الخلايا، يحارب فقر الدم والإرهاق", "يدعم نشاط الجسم ويرفع كفاءة الجهاز المناعي"]
    }
  },
  coffee3in1: {
    id: "coffee3in1",
    image: "https://i.ibb.co/6cYqDvwB/image.png",
    price: 310,
    en: {
      name: "DXN Lingzhi Coffee 3 in 1",
      desc: "Premium creamy wellness espresso blended with high-grade Brazilian coffee beans, organic Ganoderma (Reishi) extract, non-dairy creamer, and a balanced touch of fine cane sugar. Offers divine creamy taste, robust daily energy, and zero stomach discomfort.",
      benefits: [
        "Premium Brazilian coffee beans infused with organic Reishi",
        "Creamy, velvety, delicious, and mildly sweet",
        "Sustained calm cellular energy with traces of caffeine",
        "Buffered low acidity keeping stomach and colon comfortable"
      ]
    },
    fr: {
      name: "Café Lingzhi 3 en 1 DXN",
      desc: "Espresso de bien-être crémeux d'excellence, fusionnant des grains de café brésiliens de haute qualité, de l'extrait de Reishi biologique actif, un moussant crémeux végétal digeste et un soupçon de sucre fin. Un plaisir velouté préservant la digestion.",
      benefits: [
        "Grains précieux du Brésil mariés au Ganoderma bio",
        "Boisson onctueuse, crémeuse et délicieusement réconfortante",
        "Focus prolongé et forme constante sans palpitation ni stress",
        "Protège l'estomac contre l'acidité et facilite le transit"
      ]
    },
    ar: {
      name: "قهوة لينجزي 3 في 1",
      desc: "قهوة كريمية صحية فاخرة تجمع بين أفخر حبوب البن البرازيلية وخلاصة الفطر الريشي العضوي المعتمد، بتركيبة غنية تمنحك طعماً كريمياً مذهلاً وتمد الجسم بالحيوية المستدامة والطاقة النظيفة دون ألم أو غازات بالمعدة.",
      benefits: [
        "بن برازيلي راقي ومستورد وممزوج بالفطر الريشي الصحي",
        "ذات قوام مخملي كريمي، ولذيذة وسهل التحضير بثوانٍ",
        "تمد خلايا الجسم بالطاقة الفائقة بنسبة كافيين منخفضة جداً",
        "خفيفة تماماً على المعدة والجهاز الهضمي وتزيل سموم الأمعاء"
      ]
    }
  },
  shampoo: {
    id: "shampoo",
    image: "https://i.ibb.co/q3q1fsms/image.png",
    price: 221,
    en: {
      name: "DXN Ganozhi Shampoo",
      desc: "Premium wellness shampoo enriched with Ganoderma (Reishi) extract and Pro-Vitamin B5. It gently cleanses while preserving natural oils, bringing strength, shine, and complete botanical rejuvenation to your hair and scalp.",
      benefits: [
        "Enriched with 100% organic Ganoderma lucidum",
        "Pro-Vitamin B5 hair moisture and elasticity locks",
        "Maintains healthy dermo-protective pH balance",
        "Deeply cleanses scalp, removing excessive sebum and dandruff"
      ]
    },
    fr: {
      name: "Shampoing DXN Ganozhi",
      desc: "Shampoing de bien-être d'exception enrichi à l'extrait pur de Ganoderma (Reishi) et Pro-Vitamine B5. Il lave en douceur tout en respectant l'hydratation naturelle, conférant éclat, force et douceur suprême.",
      benefits: [
        "Enrichi en Ganoderma lucidum biologique actif",
        "Complexe Pro-Vitamine B5 gainant et hydratant",
        "Formule neutre équilibrante pour le pH cutané",
        "Purifie le cuir chevelu des résidus et pellicules"
      ]
    },
    ar: {
      name: "شامبو جانوزي DXN",
      desc: "شامبو العناية الفاخرة المعتدل بالحموضة لجميع أنواع الشعر. غني بخلاصة فطر الجانوديرما (الريشي) المغذي وبرو-فيتامين B5 لتقوية بصيلات الشعر، إنقاص التساقط والتخلص من القشرة والحكة تماماً.",
      benefits: [
        "معزز بخلاصة الفطر الريشي العضوي المغذي",
        "برو فيتامين B5 لترطيب خصلات الشعر وحمايتها من التقصف",
        "معتدل الحموضة وغسول صحي لطيف للغاية يومياً",
        "يطهر فروة الرأس ويحارب القشرة والحساسية فوراً"
      ]
    }
  },
  ganoOil: {
    id: "ganoOil",
    image: "https://i.ibb.co/RTS5Pkc3/image.png",
    price: 210,
    en: {
      name: "DXN Gano Massage Oil",
      desc: "Premium wellness and body care massage oil enriched with premium quality Ganoderma extract and palm kernel oil. Specially crafted to provide a pleasant and completely relaxing body experience while helping the skin feel smooth, hydrated, and fully refreshed.",
      benefits: ["Enriched with pure bioactive Ganoderma", "Intense deep muscle relaxation", "Rich in natural vitamins and moisture", "Glides smoothly with premium absorption"]
    },
    fr: {
      name: "Huile de Massage DXN Gano",
      desc: "Huile de massage haut de gamme et de bien-être corporel enrichie en extrait de Ganoderma d'origine biologique et huile de germe de palmier. Conçue pour offrir une expérience de massage agréable et relaxante, tout en hydratant intensément la peau.",
      benefits: ["Enrichie au Reishi biologique actif", "Détente musculaire immédiate et profonde", "Hydrate en profondeur sans pistolet collant", "Texture soyeuse idéale pour les spas"]
    },
    ar: {
      name: "زيت جانو للمساج من DXN",
      desc: "زيت مساج فاخر ولطيف ومغذي مخصص للعناية الشاملة بالجسم، غني بخلاصة فطر الجانوديرما (الريشي) وزيت بذور النخيل النقي الطبيعي. يساعد على الاسترخاء، تليين وتخفيف تشنجات العضلات المتعبة وتنعيم البشرة الجافة.",
      benefits: ["تركيبة حصرية غنية بخلاصة فطر الريشي", "يمنح راحة فورية وإزالة الإرهاق وتعب اليوم", "يعيد الحيوية والنعومة والترطيب الطبيعي للبشرة", "قوام مثالي للتطبيق التدليكي المنسجم والمحترف"]
    }
  },
  limonzhi: {
    id: "limonzhi",
    image: "https://i.ibb.co/pj1nyzM6/image.png",
    price: 219,
    en: {
      name: "DXN Limonzhi",
      desc: "A luxury refreshing lemon-flavored beverage crafted with organic whole lemon extract, high-grade tea, and fortified with organic Ganoderma (Reishi) extract. Provides clean delicious hydration, persistent focus, and physical refreshment.",
      benefits: ["Enriched with pure bioactive Ganoderma", "Rich in Vitamin C & antioxidants", "Excellent replacement for sugary sodas", "Delicious and fast preparation in seconds"]
    },
    fr: {
      name: "DXN Limonzhi",
      desc: "Une boisson rafraîchissante haut de gamme élaborée avec de véritables extraits de citrons mûrs, de thé noir de première sélection et enrichie au Ganoderma (Reishi) biologique. Offre une réhydratation naturelle exquise et revitalisante.",
      benefits: ["Enrichie au Reishi bio réparateur", "Source naturelle de Vitamine C et antioxydants", "Excellente alternative saine aux sodas sucrés", "Se dissout instantanément pour un plaisir immédiat"]
    },
    ar: {
      name: "مشروب ليمونزي من DXN",
      desc: "مشروب طبيعي منعش وفاخر يمزج بلطف بين حامض الليمون الطبيعي الغني بالترطيب والشاي اللذيذ ومستخلص فطر الجانوديرما (الريشي) العضوي. بديل صحي وممتاز للعصائر الكيماوية والغازية الضارة.",
      benefits: ["مدعم ومعزز بفوائد الفطر الريشي الفائقة", "غني بالحمضيات الطبيعية ومضادات الأكسدة الهامة", "حيوية كاملة ونشاط مستمر دون الشعور بالكسل", "بديل معتمد وخالٍ من السكريات الكيماوية والمواد الحافظة"]
    }
  },
  soap: {
    id: "soap",
    image: "https://i.ibb.co/TCQmWf0/image.png",
    price: 73,
    en: {
      name: "DXN Ganozhi Soap",
      desc: "A premium luxury skincare and body purification bar carefully crafted with high-grade organic Ganoderma (Reishi) extract and vitamins. Provides rich, comforting hydration, deep cleansing without drying, and absolute daily freshness.",
      benefits: ["Enriched with pure bio-active Ganoderma", "Maintains natural pH & skin barrier support", "Silky velvety lather for spa-grade showers", "Zero harsh chemicals or animal fat fillers"]
    },
    fr: {
      name: "Savon DXN Ganozhi",
      desc: "Un savon de prestige formulé à base d'extrait de Ganoderma (Reishi) adaptogène d'une pureté absolue. Il nettoie en profondeur le visage et le corps, hydrate délicatement sans dessécher et donne une fraîcheur durable.",
      benefits: ["Enrichie au Reishi biologique actif", "Maintient l'hydratation et le pH naturel", "Mousse veloutée ultra-onctueuse et zen", "Sans sulfates agressifs ni graisses animales"]
    },
    ar: {
      name: "صابون Ganozhi من DXN",
      desc: "صابون فاخر وعالي الجودة طبيعي وصحي بالكامل، تم تصنيعه بتركيبة غنية تحتوي على مستخلص فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي. صُمم خصيصاً لتنظيف وتطهير الوجه والجسم برفق.",
      benefits: ["مدعم ومعزز بفوائد فطر ريشي الفائقة", "ينظف بلطف ويحمي توازن حموضة البشرة", "رغوة كريمية فاخرة دون التسبب بجفاف الجلد", "خالٍ تماماً من الدهون الحيوانية والمواد المهرية"]
    }
  },
  reishilium: {
    id: "reishilium",
    image: "https://i.ibb.co/LhsPdhTv/image.png",
    price: 401,
    en: {
      name: "DXN Reishilium Powder",
      desc: "A premium carefully formulated nutritional product designed for individuals seeking premium-quality wellness products. Its convenient powder format makes it easy to incorporate into a daily routine while enjoying the quality and expertise associated with DXN.",
      benefits: ["Enriched with premium Reishi", "Convenient soluble powder format", "Supports daily immunity & cellular energy", "Trusted international DXN quality"]
    },
    fr: {
      name: "DXN Reishilium Powder",
      desc: "Une formule nutritionnelle d'exception associant des ingrédients rigoureusement sélectionnés pour vous offrir une vitalité naturelle supérieure adaptée à un style de vie moderne et actif.",
      benefits: ["Enrichi en Reishi d'excellence", "Format poudre soluble ultra pratique", "Soutient l'immunité & l'énergie cellulaire", "Qualité certifiée par DXN Global"]
    },
    ar: {
      name: "مسحوق ريشيليوم الفاخر من DXN",
      desc: "تركيبة مميزة تجمع بين مكونات مختارة بعناية لتمنحك تجربة غذائية فاخرة تناسب نمط الحياة العصري والمهتم بالعافية. قوام بودرة سهل الاستخدام والذوبان يسهل دمجه في روتينك الصحي.",
      benefits: ["تركيبة معتمدة غنية بالفطر الريشي", "قوام بودرة عملي وسهل الذوبان والامتصاص", "يدعم المناعة الطبيعية والنشاط الخلوي المستدام", "جودة دي إكس إن الحاصلة على شهادات عالمية"]
    }
  },
  reishi_gano: {
    id: "reishi_gano",
    image: "https://i.ibb.co/j9vb2YGq/image.png",
    price: 706,
    en: {
      name: "DXN Reishi Gano (RG)",
      desc: "Premium organic Ganoderma Lucidum (RG) capsules containing 90-day adult Red Reishi. Promotes full body detoxification, balances metabolic systems, enhances cellular resilience, and builds solid immune defenses.",
      benefits: ["Enriched with 90-day mature Reishi", "Powerful full body detoxification", "Balances metabolic functions & pH", "Trusted international DXN quality"]
    },
    fr: {
      name: "DXN Reishi Gano (RG)",
      desc: "Gélules de Ganoderma Lucidum mûr à 90 jours (RG) de première qualité. Purifie en profondeur l'organisme de ses impuretés, équilibre le métabolisme, fluidifie la circulation et renforce la résilience immunitaire globale.",
      benefits: ["Enrichi en Reishi mûr de prestige", "Détoxification globale & profonde", "Soutient la vitalité et la circulation", "Qualité d'excellence certifiée DXN"]
    },
    ar: {
      name: "فطر ريشي جانو (RG)",
      desc: "كبسولات فطر ريشي جانو (RG) العضوية الفاخرة المستخلصة من الفطر الأحمر البالغ بعمر 90 يوماً. يتميز بقدرته الفائقة على تنقية خلايا الجسم من السموم المتراكمة، تحسين تدفق الأكسجين، ودعم التوازن الحمضي القلوي بكفاءة.",
      benefits: ["مستخلص من فطر ريشي أحمر بالغ نقي 100%", "طرد وتطهير السموم العميقة من خلايا الجسم", "تنشيط الدورة الدموية وموازنة حموضة الدم", "جودة دي إكس إن الحاصلة على شهادات عالمية"]
    }
  },
  cordyceps: {
    id: "cordyceps",
    image: "https://i.ibb.co/WvmsYWBV/image.png",
    price: 869,
    en: {
      name: "DXN Cordyceps",
      desc: "Premium organic Chinese caterpillar mushroom (Cordyceps sinensis), globally renowned for expanding respiratory performance, boosting physical endurance, and enhancing blood oxygenation and cellular energy.",
      benefits: [
        "100% organic, premium Cordyceps sinensis",
        "Boosts physical endurance and cellular energy",
        "Supports respiratory health and oxygen capacity",
        "Promotes kidney and liver vitality"
      ]
    },
    fr: {
      name: "DXN Cordyceps",
      desc: "Champignon de chenille chinois biologique de qualité supérieure (Cordyceps sinensis), mondialement réputé pour augmenter les performances respiratoires, stimuler l'endurance physique et renforcer l'oxygénation cellulaire.",
      benefits: [
        "Cordyceps sinensis 100% biologique de prestige",
        "Augmente l'endurance physique et l'énergie cellulaire",
        "Soutient la santé respiratoire et la capacité d'oxygène",
        "Favorise la vitalité rénale et hépatique"
      ]
    },
    ar: {
      name: "فطر الكورديسبس من DXN",
      desc: "فطر الكورديسبس العضوي الفاخر، المعروف عالمياً بقدرته الفائقة على تحسين وظائف الجهاز التنفسي، زيادة طاقة الجسم والتحمل البدني، وتنشيط الدورة الدموية ومستويات الأكسجين في الخلايا.",
      benefits: [
        "فطر كورديسبس طبيعي وعضوي 100% ذو جودة عالية",
        "يزيد من القدرة البدنية ومستويات الطاقة والتحمل",
        "يدعم صحة الرئتين والجهاز التنفسي وتدفق الأكسجين",
        "يعزز وظائف الكلى والكبد والنشاط العام للجسم"
      ]
    }
  },
  spirulinaCereal: {
    id: "spirulinaCereal",
    image: "https://i.ibb.co/sJ3zZdX0/image.png",
    price: 664,
    en: {
      name: "DXN Spirulina Cereal",
      desc: "A delicious, highly nutritious blend of premium fiber cereal and certified organic Spirulina. Offers an instant, alkaline, high-protein breakfast that nourishes cells and stabilizes energy.",
      benefits: [
        "Delicious blend of premium cereal and pure Spirulina",
        "High-protein, fiber-rich alkaline superfood",
        "Nourishes cells and supports optimal digestion",
        "Perfect healthy breakfast for the whole family"
      ]
    },
    fr: {
      name: "Céréales de Spiruline DXN",
      desc: "Un mélange croustillant et digeste de céréales complètes infusées à la pure Spiruline biologique. Idéal pour un apport instantané en acides aminés, vitamines essentielles et fibres bienfaisantes.",
      benefits: [
        "Mélange délicieux de céréales de première qualité et de Spiruline pure",
        "Superaliment alcalin riche en protéines et en fibres",
        "Nourrit les cellules et favorise une digestion optimale",
        "Petit-déjeuner sain et parfait pour toute la famille"
      ]
    },
    ar: {
      name: "سيريال السبيرولينا الصحي",
      desc: "مزيج لذيذ ومقوٍ من السيريال وأفخر أنواع السبيرولينا العضوية ليعطيك فطوراً صحياً سريعاً يمدك بالفيتامينات والمعادن والبروتينات الكاملة لجميع أفراد العائلة.",
      benefits: [
        "مزيج لذيذ من الحبوب الفاخرة والسبيرولينا العضوية النقية",
        "غذاء صحي خارق غني بالبروتين والألياف الطبيعية",
        "يغذي الخلايا ويدعم عملية الهضم المثلى",
        "فطور صحي متكامل مثالي لجميع أفراد العائلة"
      ]
    }
  },
  morinzhiJuice: {
    id: "morinzhiJuice",
    image: "https://i.ibb.co/CsmXJ1rJ/image.png",
    price: 589,
    en: {
      name: "DXN Royal Morinzhi Juice",
      desc: "Premium natural botanical juice formulated from fresh Morinda citrifolia (Noni fruit) and enriched with hibiscus. Renowned for balancing digestive microflora, boosting cell immunity, and relieving digestive tension.",
      benefits: [
        "Fresh, nutrient-rich Noni fruit juice with hibiscus",
        "Regulates digestion and balances stomach microflora",
        "Rich in active enzymes and vitamin C",
        "Supports cellular immunity and relieves inner tension"
      ]
    },
    fr: {
      name: "Jus Royal Morinzhi DXN",
      desc: "Jus botanique naturel de première qualité formulé à partir de Morinda citrifolia frais (fruit du Noni) et enrichi en hibiscus. Réputé pour équilibrer la microflore digestive et stimuler l'immunité cellulaire.",
      benefits: [
        "Jus frais de fruit de Noni riche en nutriments avec hibiscus",
        "Régule la digestion et équilibre la microflore intestinale",
        "Riche en enzymes actives et en vitamine C",
        "Soutient l'immunité cellulaire et apaise les tensions digestives"
      ]
    },
    ar: {
      name: "عصير المورينزي الملكي",
      desc: "عصير المورينزي الطبيعي الملكي المصنوع من فاكهة النوني الاستوائية الطازجة والمدعمة بالكركديه الطبيعي. يعيد التوازن البكتيري المعوي، يرفع مناعة الخلايا، وينشط الجهاز الهضمي والقولون.",
      benefits: [
        "عصير طبيعي طازج لفاكهة النوني الاستوائية مع الكركديه",
        "ينظم الهضم ويوازن حموضة وبيئة المعدة والأمعاء",
        "غني بالإنزيمات الحية ومضادات الأكسدة وفيتامين ج",
        "يعزز مناعة الخلايا ويخفف التشنجات المعوية والقولون العصبي"
      ]
    }
  },
  cocozhi: {
    id: "cocozhi",
    image: "https://i.ibb.co/0pJcbcjS/image.png",
    price: 387,
    en: {
      name: "DXN Cocozhi Cocoa",
      desc: "A premium luxury organic cocoa beverage fortified with active Ganoderma mycelium extract. Delightful, creamy chocolate taste packed with micro-nutrients.",
      benefits: ["Aids memory & cognitive development", "High energy without caffeine", "Alkaline digestion friendly", "Rich in minerals & antioxidants"]
    },
    fr: {
      name: "DXN Cocozhi Chocolat",
      desc: "Une boisson chocolatée haut de gamme formulée avec le meilleur cacao hollandais et enrichie en extrait de mycélium de Ganoderma. Onctueuse et nutritive.",
      benefits: ["Soutient la mémoire & le cerveau", "Grande énergie sans caféine", "Parfait pour la digestion alcaline", "Riche en minéraux & antioxydants"]
    },
    ar: {
      name: "كاكاو كوكوزي الصحي",
      desc: "مشروب شوكولاتة صحي ولذيذ للغاية، مُعد من أفخر أنواع الكاكاو الطبيعي المدعم بخلاصة فطر الجانوديرما (جنين الريشي) الغني بالمعادن.",
      benefits: ["يغذي خلايا الدماغ ويزيد التركيز للأطفال", "يمد الجسم بطاقة عالية دون كافيين", "سهل الهضم ولطيف على الأمعاء", "غني بالمعادن النادرة ومضادات الأكسدة"]
    }
  },
  ganocelium: {
    id: "ganocelium",
    image: "https://i.ibb.co/mFY2Rf8J/image.png",
    price: 706,
    en: {
      name: "DXN Ganocelium (GL)",
      desc: "Premium organic Ganoderma Lucidum mycelium (GL) extract. Specifically designed to support brain wellness, deep cellular repair, and enhance systemic oxygen capacity.",
      benefits: ["100% certified organic Ganoderma mycelium", "Enhances brain function & focus", "Deep cellular restoration & repair", "Optimizes systemic oxygenation"]
    },
    fr: {
      name: "DXN Ganocelium (GL)",
      desc: "Extrait pur de mycélium de Ganoderma Lucidum (GL) d'origine biologique. Conçu pour soutenir le système nerveux, régénérer les tissus cellulaires et fortifier l'immunité globale.",
      benefits: ["Mycélium de Ganoderma 100% bio", "Soutient les fonctions nerveuses & le focus", "Régénération et réparation cellulaire", "Optimise l'oxygénation de l'organisme"]
    },
    ar: {
      name: "فطر الجانوسيليوم (ميسيليوم)",
      desc: "مستخلص فطر الجانوسيليوم العضوي النقي (جنين الفطر الريشي). صُمم خصيصاً لدعم صحة الأعصاب والدماغ، تعزيز تجديد الخلايا، ومضاعفة الأكسجين الخلوي في الجسم.",
      benefits: ["ميسيليوم الجانوديرما العضوي المعتمد 100%", "يدعم وظائف المخ والتركيز الذهني", "تجديد عميق وترميم للأنسجة التالفة", "يرفع نسبة الأكسجين في الدم والخلايا"]
    }
  },
  cordypine: {
    id: "cordypine",
    image: "https://i.ibb.co/9m0gRd5Y/image.png",
    price: 630,
    en: {
      name: "DXN Cordypine Enzyme",
      desc: "A master luxury blend of high-grade fermented pineapple enzymes and premium Cordyceps. Promotes supreme gut digestion, high stamina, and potent joint soothing.",
      benefits: ["Fermented natural pineapple enzymes & Cordyceps", "Unparalleled digestive & intestinal comfort", "Fights chronic joint & body inflammation", "Sustains physical endurance & vitality"]
    },
    fr: {
      name: "DXN Cordypine Élixir",
      desc: "Une fusion royale d'enzymes d'ananas fermentées de première qualité et de Cordyceps. Favorise un confort digestif suprême, une grande vitalité et apaise les articulations.",
      benefits: ["Enzymes d'ananas fermentées & Cordyceps", "Confort digestif et intestinal inégalé", "Lutte contre l'inflammation articulaire", "Soutient la vitalité et l'endurance globale"]
    },
    ar: {
      name: "مشروب الكورديبين الإنزيمي",
      desc: "مزيج ملكي فريد يجمع بين إنزيمات الأناناس المخمرة الطبيعية وفطر الكورديسبس الفاخر. يدعم صحة الجهاز الهضمي والمعدة، يسكن آلام المفاصل، ويرفع حيوية ونشاط الجسم بشكل مذهل.",
      benefits: ["إنزيمات أناناس مخمرة طبيعياً مع الكورديسبس", "راحة غير مسبوقة للجهاز الهضمي والقولون", "محاربة قوية لالتهابات المفاصل وآلام الجسم", "يعزز القدرة البدنية والنشاط المستدام"]
    }
  },
  lions_mane: {
    id: "lions_mane",
    image: "https://i.ibb.co/RkVr3NMs/image.png",
    price: 518,
    en: {
      name: "DXN Lion's Mane",
      desc: "High-grade organic Hericium erinaceus tablets. Famously recognized for restoring brain neuro-connections, enhancing mental focus, and healing gastric linings.",
      benefits: ["Supports brain & nerve health", "Enhances memory & focus", "Heals digestive & gastric tract", "Stimulates Nerve Growth Factor (NGF)"]
    },
    fr: {
      name: "Crinière de Lion DXN",
      desc: "Comprimés d'Hericium Erinaceus d'une pureté exceptionnelle. Réputé pour régénérer le système nerveux, accroître le focus mental et soulager l'estomac.",
      benefits: ["Soutient les nerfs & le cerveau", "Améliore la mémoire & la concentration", "Régénère la muqueuse de l'estomac", "Stimule le facteur de croissance nerveuse (NGF)"]
    },
    ar: {
      name: "فطر عرف الأسد العضوي",
      desc: "أقراص فطر عرف الأسد (Hericium) العضوي النقي الموصى به عالمياً لدعم وتغذية الخلايا العصبية والذاكرة، وتقوية جدار المعدة وترميم قرح الجهاز الهضمي.",
      benefits: ["يدعم صحة الأعصاب والدماغ", "يقوي الذاكرة والتركيز الذهني بشكل ملحوظ", "يساعد على ترميم جدار المعدة والأمعاء", "يحفز عامل نمو الخلايا العصبية (NGF)"]
    }
  },
  roselle: {
    id: "roselle",
    image: "https://i.ibb.co/VWFK3XWt/image.png",
    price: 199,
    en: {
      name: "DXN Roselle Juice",
      desc: "A premium botanical drink made from the pure calyces of Hibiscus Sabdariffa. Exceptionally rich in Vitamin C, natural antioxidants, and bioflavonoids to hydrate the body and protect the skin.",
      benefits: ["100% pure organic Roselle calyces", "Massive natural dose of Vitamin C", "Supports blood pressure & liver health", "Fights oxidative stress & beautifies skin"]
    },
    fr: {
      name: "Jus de Roselle DXN",
      desc: "Une boisson botanique précieuse élaborée à partir des calices d'Hibiscus Sabdariffa. Riche en vitamine C, en flavonoïdes et en antioxydants naturels pour purifier le corps.",
      benefits: ["Calices d'Hibiscus Sabdariffa 100% bio", "Apport exceptionnel en Vitamine C naturelle", "Aide à réguler la tension & purifier le foie", "Beauté de la peau & lutte contre l'oxydation"]
    },
    ar: {
      name: "عصير الروزيل (الكركديه)",
      desc: "مشروب نباتي فاخر محضر من كؤوس زهور الكركديه (الروزيل) العضوية. غني جداً بفيتامين ج الطبيعي، ومضادات الأكسدة التي تنعش الجسم، توازن ضغط الدم وتطهر الكبد والكلى.",
      benefits: ["كؤوس زهور كركديه عضوية ونقية 100%", "جرعة هائلة من فيتامين ج الطبيعي", "يدعم توازن ضغط الدم وصحة الكبد والكلى", "يحارب الأكسدة ويمنح نضارة مذهلة للبشرة"]
    }
  },
  family_pack: {
    id: "family_pack",
    image: "https://i.ibb.co/Q3RqQKfn/image.png",
    price: 1261,
    en: {
      name: "DXN Family Wellness Pack",
      desc: "The ultimate synergistic baseline nutrition bundle for families. Includes premium organic Cocozhi Cocoa, Cocozhi-infused Spirulina Cereal, and premium creamy Lingzhi Coffee 3 in 1.",
      benefits: ["Boosts children's memory & concentration", "Sustained high vitality without caffeine crash", "Supports alkaline body pH & comfortable digestion"]
    },
    fr: {
      name: "Pack Bien-être Famille DXN",
      desc: "La cure synergique idéale pour toute la famille. Contient le Cocozhi (cacao de prestige), les Céréales de Spiruline alcalines et le Café crémeux Lingzhi 3 en 1 DXN.",
      benefits: ["Favorise la croissance & la mémoire des enfants", "Énergie naturelle durable sans fatigue excessive", "Soutient un transit intestinal sain & alcalin"]
    },
    ar: {
      name: "باقة العائلة السعيدة المتكاملة",
      desc: "باقة النخبة والعافية الشاملة المنسقة بعناية فائقة لتغذية وحماية عائلتك وأطفالك. تجمع بين سيريال السبيرولينا العضوي، شوكولاتة كوكوزي لنشاط وتركيز الدماغ، وقهوة لينجزي 3 في 1 الكريمية اللذيذة للنشاط والحيوية.",
      benefits: ["تنشيط خلايا الدماغ وزيادة التركيز والتحصيل الدراسي للأطفال", "إمداد الجسم بنشاط ممتد وطاقة طبيعية بدون كافيين ضار", "تعديل حموضة الجسم ودعم الهضم الخفيف المريح للأمعاء"]
    }
  },
  aloeScrub: {
    id: "aloeScrub",
    image: "https://i.ibb.co/CsK9nGsM/image.png",
    price: 169,
    en: {
      name: "DXN Aloe V. Facial Scrub",
      desc: "A gentle facial scrub enriched with natural Aloe Vera extract and fine exfoliating beads. Deeply cleanses pores, removes dead skin cells, and restores vibrant softness and natural radiance to your skin.",
      benefits: ["Deep pore cleansing and removal of excess sebum", "Gentle exfoliation that lifts dead cells without irritation", "Rich in Aloe Vera to deeply soothe and hydrate", "Promotes velvety smooth texture and natural radiance"]
    },
    fr: {
      name: "Gommage Visage Aloe V. DXN",
      desc: "Un gommage doux pour le visage enrichi en extrait d'Aloe Vera et en micro-billes exfoliantes. Nettoie les pores en profondeur, élimine les cellules mortes et redonne douceur et éclat naturel à la peau.",
      benefits: ["Désincruste les pores et élimine l'excès de sébum", "Exfoliation douce sans agresser ni irriter l'épiderme", "Enrichi en Aloe Vera pour apaiser et hydrater intensément", "Apporte une texture douce et un teint éclatant de santé"]
    },
    ar: {
      name: "مقشر الوجه ألو فيرا DXN",
      desc: "مقشر لطيف للوجه غني بخلاصة الصبار الطبيعية وحبيبات التقشير الدقيقة لتنظيف المسام بعمق، إزالة الخلايا الميتة، وإعادة النضارة والنعومة الفائقة لبشرتك.",
      benefits: ["تنظيف عميق للمسام وإزالة الأوساخ والدهون", "تقشير لطيف يزيل الخلايا الميتة دون تهيج", "غني بالصبار لترطيب وتلطيف البشرة", "يمنح البشرة ملمساً حريرياً ونضارة طبيعية"]
    }
  },
  aloeLotion: {
    id: "aloeLotion",
    image: "https://i.ibb.co/ymy5wXTh/image.png",
    price: 156,
    en: {
      name: "DXN Aloe V. Hand & Body Lotion",
      desc: "A non-greasy, fast-absorbing lotion enriched with pure Aloe Vera extract and natural moisturizing oils to nourish dry skin, maintain elasticity, and protect against environmental damage.",
      benefits: ["Provides long-lasting intense moisture for dry skin", "Lightweight, fast-absorbing formula with zero sticky residue", "Soothes irritated or sun-exposed skin, boosting elasticity", "Perfect shield against environmental dryness and cracks"]
    },
    fr: {
      name: "Lotion Mains & Corps Aloe V. DXN",
      desc: "Une lotion non grasse et rapidement absorbée, enrichie en extrait d'Aloe Vera pur et huiles naturelles pour hydrater les peaux sèches, préserver l'élasticité et protéger des agressions extérieures.",
      benefits: ["Hydratation longue durée des peaux sèches et déshydratées", "Formule ultra-fluide qui pénètre vite sans effet collant", "Calme les tiraillements et redonne de la souplesse", "Protège efficacement contre le vent, le froid et le soleil"]
    },
    ar: {
      name: "لوشن اليدين والجسم ألو فيرا DXN",
      desc: "لوشن غير دهني سريع الامتصاص غني بخلاصة الصبار النقية وزيوت الترطيب الطبيعية لتغذية البشرة الجافة، الحفاظ على مرونتها، وحمايتها من العوامل البيئية الضارة.",
      benefits: ["ترطيب مكثف يدوم طويلاً للبشرة الجافة والتالفة", "تركيبة خفيفة سريعة الامتصاص دون ملمس دهني", "يلطف البشرة المتهيجة ويعيد لها مرونتها الطبيعية", "مثالي لحماية اليدين والجسم من جفاف المناخ"]
    }
  },
  aloeGel: {
    id: "aloeGel",
    image: "https://i.ibb.co/NdsFzy0p/image.png",
    price: 156,
    en: {
      name: "DXN Aloe V. Cleansing Gel",
      desc: "A soap-free, gentle foaming cleansing gel that deeply cleanses the skin, removing impurities and makeup while maintaining your skin's natural moisture balance without drying.",
      benefits: ["Gentle soap-free cleansing that respects skin structure", "Effectively removes daily impurities, makeup, and oil", "Preserves natural skin hydration and protects pH balance", "Leaves face incredibly refreshed, supple, and purified"]
    },
    fr: {
      name: "Gel Nettoyant Aloe V. DXN",
      desc: "Un gel nettoyant moussant sans savon qui élimine en douceur les impuretés et les traces de maquillage tout en respectant l'hydratation naturelle de l'épiderme.",
      benefits: ["Formule moussante sans savon, douce pour l'épiderme", "Élimine efficacement maquillage, impuretés et sébum", "Préserve le film hydrolipidique et évite les tiraillements", "Laisse la peau nette, souple et intensément rafraîchie"]
    },
    ar: {
      name: "جل منظف ألو فيرا DXN",
      desc: "جل منظف رغوي لطيف وخالٍ من الصابون، ينظف البشرة بعمق ويزيل الأوساخ والماكياج مع الحفاظ على مستويات الترطيب الطبيعية للبشرة دون تعريضها للجفاف.",
      benefits: ["تنظيف عميق ولطيف خالٍ من الصابون والمواد القاسية", "يزيل الأوساخ والماكياج والدهون الزائدة بفعالية", "يحافظ على توازن رطوبة البشرة ويمنع جفافها", "يترك البشرة منتعشة وناعمة ونقية تماماً"]
    }
  },
  aromaticShowerGel: {
    id: "aromaticShowerGel",
    image: "https://i.ibb.co/C30txFNP/image.png",
    price: 175,
    en: {
      name: "DXN Luxury Aromatic Shower Gel",
      desc: "A premium foaming shower gel that cleanses and revitalizes the skin, leaving an exquisite soothing aromatic fragrance that elevates your daily routine.",
      benefits: ["Gentle cleansing with luxurious foaming bubbles", "Infused with standard aromatic oils to soothe body and mind", "Moisturizes and leaves skin feeling clean, fresh, and supple", "Leaves a rich, long-lasting premium scent on the skin"]
    },
    fr: {
      name: "Gel Douche Aromatique de Luxe DXN",
      desc: "Un gel douche moussant haut de gamme qui nettoie et revitalise la peau, en laissant un parfum aromatique exquis et apaisant qui sublime votre routine quotidienne.",
      benefits: ["Nettoyage doux avec une mousse luxueuse et onctueuse", "Inspiré par des huiles aromatiques pour apaiser le corps et l'esprit", "Hydrate et laisse la peau propre, fraîche et souple", "Laisse un parfum riche et durable de qualité supérieure"]
    },
    ar: {
      name: "جل الاستحمام العطري الفاخر DXN",
      desc: "جل استحمام رغوي فاخر ينظف البشرة ويعيد إليها الحيوية، تاركاً رائحة عطرية مهدئة وساحرة ترتقي بروتينك اليومي.",
      benefits: ["تنظيف لطيف برغوة مخملية غنية ومترفة", "غني بالزيوت العطرية لتهدئة الجسم وتصفية الذهن", "يرطب البشرة ويمنحها حيوية ونعومة فائقة", "يترك رائحة عطرية مميزة تدوم طويلاً"]
    }
  },
  aromaticBodyLotion: {
    id: "aromaticBodyLotion",
    image: "https://i.ibb.co/mrfDfSQ8/image.png",
    price: 213,
    en: {
      name: "DXN Luxury Aromatic Body Lotion",
      desc: "A velvety, moisturizing body lotion that hydrates deep layers of dry skin while surrounding you with a sophisticated, lingering aromatic aroma.",
      benefits: ["Deep skin conditioning that relieves dry patches and tightness", "Absorbs super-fast with a non-sticky, velvet-soft finish", "Aromatic scent stays on your skin for hours of freshness", "Improves overall skin texture, tone, and elasticity"]
    },
    fr: {
      name: "Lotion Corporelle Aromatique de Luxe DXN",
      desc: "Une lotion corporelle veloutée et hydratante qui désaltère en profondeur les peaux sèches tout en vous enveloppant d'un parfum aromatique sophistiqué et persistant.",
      benefits: ["Soin corporel profond qui soulage la sécheresse et les tiraillements", "Pénétration ultra-rapide sans effet gras, fini velouté", "Le sillage aromatique reste sur la peau pour des heures de fraîcheur", "Améliore visiblement la texture, le tonus et la souplesse de la peau"]
    },
    ar: {
      name: "لوشن الجسم العطري الفاخر DXN",
      desc: "لوشن مخملي مرطب للجسم يغذي أعماق البشرة الجافة ويمنحها ترطيباً فائقاً بينما يغمر حواسك بعبير عطري متطور وآسر يدوم طويلاً.",
      benefits: ["ترطيب عميق يحمي البشرة من الجفاف والخشونة", "تركيبة خفيفة تمتص فوراً دون ترك ملمس دهني أو لزج", "ثبات عطري متميز يرافقك طوال اليوم بنسمات منعشة", "يحسن مرونة البشرة ويمنحها بريقاً ونعومة فائقة"]
    }
  },
  handCream: {
    id: "handCream",
    image: "https://i.ibb.co/zTy4QCzD/image.png",
    price: 183,
    en: {
      name: "DXN Nourishing Hand Cream",
      desc: "An intensive nourishing cream for hands, providing a rich moisture shield against dry climate and frequent washing, restoring touchable silkiness.",
      benefits: ["Soothes dry, cracked hands instantly with non-greasy lipids", "Protects hands from harsh weather, soap, and hot water", "Deeply conditions cuticles and nails for complete grooming", "Travel-friendly premium cream for immediate nutrition anytime"]
    },
    fr: {
      name: "Crème Mains Nourrissante DXN",
      desc: "Une crème nourrissante intensive pour les mains, offrant un écran protecteur riche contre le dessèchement et les lavages fréquents, redonnant une douceur soyeuse.",
      benefits: ["Apaise instantanément les mains sèches et gercées sans effet gras", "Protège contre le vent, le froid et les détergents agressifs", "Nourrit les cuticules et fortifie les ongles au quotidien", "Format nomade pratique pour une nutrition instantanée"]
    },
    ar: {
      name: "كريم اليدين المغذي DXN",
      desc: "كريم مغذٍ مكثف لليدين، يوفر درع رطوبة غني لحماية البشرة من الجفاف والتشققات وغسيل اليدين المتكرر، ليعيد ليديك النعومة الحريرية الساحرة.",
      benefits: ["تلطيف فوري ومكثف لليدين الجافة والخشنة دون ملمس دهني", "يشكل طبقة واقية تحمي اليدين من تقلبات الجو ومواد التنظيف", "مغذي ممتاز للجلد المحيط بالأظافر ليدين بمظهر رائع", "عبوة مثالية للحمل لترطيب فوري وتغذية أينما كنت"]
    }
  },
  lipBalm: {
    id: "lipBalm",
    image: "https://i.ibb.co/fYYLgNLj/image.png",
    price: 91,
    en: {
      name: "DXN Moisturizing Lip Balm",
      desc: "A rich, hydrating lip balm that locks in moisture and repairs chapped lips, giving them a natural, glossy health-filled shine.",
      benefits: ["Deeply moisturizes lips, instantly smoothing away rough chapped skin", "Rich in botanical waxes and nutrients for long-lasting comfort", "Fights antioxidant stressors and environmental elements", "Enhances your lips with a subtle, healthy and beautiful natural sheen"]
    },
    fr: {
      name: "Baume à Lèvres Hydratant DXN",
      desc: "Un baume à lèvres riche et hydratant qui retient l'humidité et répare les lèvres gercées, leur donnant un éclat naturel et sain.",
      benefits: ["Hydrate intensément les lèvres et lisse instantanément la peau gercée", "Riche en cires botaniques et nutriments pour un confort durable", "Protège contre le vent, le froid et le dessèchement", "Sublime les lèvres avec un éclat naturel délicat et sain"]
    },
    ar: {
      name: "مرطب الشفاه المرطب DXN",
      desc: "مرطب شفاه غني ومرطب يحافظ على رطوبة الشفتين ويصلح الشفاه المتشققة بفعالية، ليمنحها لمعاناً طبيعياً وصحياً رائعاً.",
      benefits: ["ترطيب عميق يعالج جفاف وتشقق الشفاه على الفور وملمس فائق النعومة", "غني بالشموع النباتية والمغذيات الطبيعية لراحة تدوم طويلاً", "يحمي الشفتين من الجفاف وتأثيرات الطقس البارد والجاف", "يمنح الشفاه بريقاً طبيعياً جذاباً ومظهراً ممتلئاً بالصحة"]
    }
  },
  faceMask: {
    id: "faceMask",
    image: "https://i.ibb.co/0RptcBsp/image.png",
    price: 205,
    en: {
      name: "DXN Hydrating Face Mask",
      desc: "An ultimate moisturizing face mask that infuses your skin with botanical hydration, boosting elasticity and restoring a vibrant, youthful radiance.",
      benefits: ["Delivers intense and lasting hydration to restore dry skin layers", "Soothes, plumps, and refines texture for a radiant, smooth look", "Provides a refreshing spa-like treatment that calms minor redness", "Combats signs of stress, fatigue, and dullness instantly"]
    },
    fr: {
      name: "Masque Visage Hydratant DXN",
      desc: "Le masque hydratant ultime qui gorge votre peau d'une hydratation botanique, renforçant l'élasticité et restaurant un éclat vibrant et de jeunesse.",
      benefits: ["Apporte une hydratation intense pour repulper et revitaliser les tissus", "Lisse le grain de peau et redonne un éclat lumineux immédiat", "Offre un soin digne d'un spa qui apaise et détend les traits", "Lutte instantanément contre le teint terne et les marques de fatigue"]
    },
    ar: {
      name: "قناع الوجه المرطب DXN",
      desc: "قناع الترطيب الفائق للوجه الذي يغمر بشرتك بالترطيب النباتي المكثف، ويعزز مرونتها ويعيد لها النضارة والحيوية والشباب.",
      benefits: ["يمنح البشرة دفعة ترطيب هائلة وفورية تدوم طويلاً لطبقات الجلد", "يغذي البشرة ويشدها ليمنحها مظهراً مشرقاً وناعماً ومفعماً بالصحة", "جلسة عناية فاخرة بالمنزل تلطف البشرة وتزيل علامات التعب", "يحارب شحوب البشرة وعلامات الإجهاد والخطوط الدقيقة فوراً"]
    }
  },
  eyeCream: {
    id: "eyeCream",
    image: "https://i.ibb.co/xKHWHhCf/image.png",
    price: 504,
    en: {
      name: "DXN Lifting Impact Eye Cream",
      desc: "A luxurious active formulation specifically designed to smooth fine lines, fade dark circles, and lift tired eyelids for an instantly younger and brighter gaze.",
      benefits: ["Visibly reduces dark circles and under-eye puffiness", "Lifts and firms delicate skin around the eye contour", "Deeply hydrates to smooth out fine expression lines", "Restores youthful elasticity and a brighter, energized look"]
    },
    fr: {
      name: "Crème Contour des Yeux Liftante DXN",
      desc: "Une formule active et luxueuse conçue pour lisser les ridules, estomper les cernes et retendre les paupières pour un regard visiblement plus jeune et éclatant.",
      benefits: ["Réduit visiblement les cernes et les poches sous les yeux", "Lifte et raffermit la peau délicate du contour de l'œil", "Hydrate intensément et estompe les ridules d'expression", "Restaure l'élasticité pour un regard frais et reposé"]
    },
    ar: {
      name: "كريم العين لشد الجفون وبشرة محيط العينين DXN",
      desc: "تركيبة حيوية فاخرة مصممة خصيصاً لتنعيم الخطوط الدقيقة وتخفيف الهالات السوداء والانتفاخات مع منح جفون العين مظهراً مشدوداً وأكثر شباباً.",
      benefits: ["يقلل بشكل فعال من الهالات السوداء والانتفاخات حول العين", "يشد البشرة الرقيقة للمحيط العيني ويمنع الترهل", "يرطب بعمق وينعم الخطوط التعبيرية والتجاعيد", "يمنح نظرتك بريقاً ونضارة فورية تدوم طويلاً"]
    }
  },
  faceSerum: {
    id: "faceSerum",
    image: "https://i.ibb.co/v6QMdZNG/image.png",
    price: 513,
    en: {
      name: "DXN Lifting Impact Face Serum",
      desc: "An intensive silky-smooth serum that instantly tightens facial contours, boosts overall skin elasticity, and reveals a velvety, radiant complexion.",
      benefits: ["Provides an immediate visible skin tightening and lifting effect", "Improves elasticity and redefines facial contours", "Lightweight, ultra-fast absorbing formula that penetrates deeply", "Restores youthful vibrance and delivers a luminous, smooth finish"]
    },
    fr: {
      name: "Sérum Visage Liftant Ultra DXN",
      desc: "Un sérum intensif au toucher soyeux qui retend instantanément les traits, booste l'élasticité de la peau et révèle un teint lisse, ferme et radieux.",
      benefits: ["Procure un effet liftant et tenseur immédiat et visible", "Améliore l'élasticité et redessine l'ovale du visage", "Pénétration ultra-profonde grâce à sa texture fluide et légère", "Restaure l'éclat de jeunesse et donne un fini velouté sublime"]
    },
    ar: {
      name: "سيروم شد الوجه الفائق DXN",
      desc: "مصل مكثف بتركيبة حريرية سريعة الامتصاص تحفز مرونة البشرة وتشد ملامح الوجه، لتعيد إليها الحيوية وتمنحك توهجاً ونعومة مثالية.",
      benefits: ["يمنح البشرة تأثيراً مشدوداً فورياً ومرونة فائقة", "يقلل من التجاعيد العميقة ويعيد تحديد ملامح الوجه", "تركيبة مائية خفيفة سريعة الامتصاص تنفذ لأعمق الطبقات", "يعزز نضارة البشرة ويمنحها إشراقة مخملية ساحرة"]
    }
  },
  faceCream: {
    id: "faceCream",
    image: "https://i.ibb.co/gbYN44Fv/image.png",
    price: 560,
    en: {
      name: "DXN Lifting Impact Face Cream",
      desc: "A velvety, high-performance cream that reconstructs the skin's moisture barrier, firms sagging contours, and counteracts signs of aging for a plumped look.",
      benefits: ["Rebuilds the skin's natural moisture barrier with rich hydration", "Firms and lifts sagging facial and neck contours", "Diminishes the appearance of fine lines and deep wrinkles", "Leaves skin feeling ultra-soft, plumped, and youthful"]
    },
    fr: {
      name: "Crème Visage Liftante de Luxe DXN",
      desc: "Une crème veloutée haute performance qui reconstruit la barrière d'hydratation, raffermit les contours et combat les signes de l'âge pour une peau repulpée.",
      benefits: ["Nourrit intensément et reconstruit le film protecteur de la peau", "Raffermit et lifte les contours du visage et du cou", "Estompe visiblement les rides et ridules d'expression", "Laisse la peau infiniment douce, repulpée et visiblement rajeunie"]
    },
    ar: {
      name: "كريم شد وبناء خلايا الوجه الفاخر DXN",
      desc: "كريم مخملي فاخر لتغذية البشرة وشد الترهلات، يعمل على تجديد بنية الجلد واستعادة النعومة والامتلاء ومقاومة علامات التقدم في السن.",
      benefits: ["ترطيب وتغذية مكثفة تعيد بناء الطبقة الواقية للبشرة", "يشد ترهلات الوجه والرقبة ويحسن تماسك أنسجة الجلد", "يقلل بوضوح من عمق التجاعيد وعلامات الشيخوخة", "يمنح البشرة ملمساً ناعماً حريرياً ومظهراً ممتلئاً وحيوياً"]
    }
  },
  nightOil: {
    id: "nightOil",
    image: "https://i.ibb.co/v4DTCpc1/image.png",
    price: 327,
    en: {
      name: "DXN Nourishing Night Oil",
      desc: "A precious nocturnal elixir packed with botanical lipids and vitamins, working overnight to repair skin cells and restore a rested, luminous complexion.",
      benefits: ["Deeply repairs and regenerates skin cells during nocturnal cycle", "Provides intense lipid replenishment to combat dry, tired skin", "Strengthens natural skin defense against daily pollution stress", "Wake up to remarkably supple, soft, and glowing skin"]
    },
    fr: {
      name: "Huile de Nuit Nourrissante DXN",
      desc: "Un élixir nocturne précieux riche en lipides végétaux et vitamines, agissant pendant le sommeil pour régénérer la peau et révéler un teint reposé et lumineux.",
      benefits: ["Régénère et répare intensément les cellules pendant la nuit", "Nourrit en profondeur pour restaurer la souplesse des peaux fatiguées", "Renforce le bouclier cutané contre le stress oxydatif quotidien", "Réveil avec une peau lissée, lumineuse et visiblement repulpée"]
    },
    ar: {
      name: "زيت الليل المغذي والمجدد للبشرة DXN",
      desc: "إكسير ليلي فاخر غني بالدهون النباتية الأساسية ومضادات الأكسدة، يعمل أثناء النوم على إصلاح خلايا البشرة التالفة وتغذيتها بعمق لتستيقظي بوجه مشرق.",
      benefits: ["إصلاح عميق لخلايا البشرة وتجديدها طوال الليل أثناء النوم", "تغذية مكثفة تعوض البشرة عما تفقده خلال النهار من رطوبة", "يقوي جدار الحماية الطبيعي للجلد ويمنع ظهور علامات الإرهاق", "يمنحك في الصباح بشرة لينة، نضرة ومفعمة بالنعومة والحيوية"]
    }
  },
  dryOil: {
    id: "dryOil",
    image: "https://i.ibb.co/pj1Bww3w/image.png",
    price: 375,
    en: {
      name: "DXN Multi-Purpose Dry Oil",
      desc: "An iconic, fast-absorbing dry oil that nourishes, repairs, and beautifies your face, body, and hair in a single step, without leaving a greasy residue.",
      benefits: ["Nourishes, repairs, and softens face, body, and hair in one step", "Unique dry-oil texture that absorbs instantly without any greasy feel", "Adds healthy satin-like shine to hair, preventing frizz and dryness", "Wraps your body in a subtle, sophisticated botanical fragrance"]
    },
    fr: {
      name: "Huile Sèche Multi-Fonctions DXN",
      desc: "Une huile sèche iconique à absorption rapide qui nourrit, répare et sublime le visage, le corps et les cheveux en un seul geste, sans laisser de film gras.",
      benefits: ["Nourrit, répare et adoucit le visage, le corps et les cheveux", "Texture huile sèche unique qui pénètre instantanément sans effet gras", "Apporte brillance et souplesse aux cheveux sans les alourdir", "Enveloppe le corps d'une fragrance subtile, sensuelle et raffinée"]
    },
    ar: {
      name: "الزيت الجاف متعدد الاستخدامات للوجه والشعر والجسم DXN",
      desc: "زيت جاف بتركيبة غير دهنية سريعة الامتصاص يمنح الوجه والشعر والجسم لمعاناً ساحراً ونعومة حريرية لا تضاهى برائحة عطرية فريدة.",
      benefits: ["تغذية وترطيب فائق للوجه، الجسم، والشعر في خطوة واحدة", "ملمس جاف فريد يمتص بالكامل دون ترك أي أثر دهني لزج", "يمنح الشعر حيوية ولمعاناً مذهلاً ويحميه من التقصف والجفاف", "يعطر الجسم بنسمات راقية ويترك البشرة بملمس مخملي جذاب"]
    }
  },
  foamingCleanser: {
    id: "foamingCleanser",
    image: "https://i.ibb.co/Lhpdk0QK/image.png",
    price: 233,
    en: {
      name: "DXN Instant Foaming Cleanser",
      desc: "A light-as-air foaming cleanser that deeply purifies skin pores, removes impurities and makeup residue, leaving skin incredibly fresh and clean.",
      benefits: ["Deeply purifies pores without drying the skin", "Removes stubborn dirt, excess sebum, and makeup", "Instantly refreshes and softens skin texture", "Rich in soothing botanical extracts"]
    },
    fr: {
      name: "Nettoyant Mousse Instantané DXN",
      desc: "Un nettoyant mousse ultra-léger qui purifie en profondeur les pores, élimine les impuretés et résidus de maquillage, laissant la peau fraîche et nette.",
      benefits: ["Purifie en profondeur sans dessécher la peau", "Élimine les impuretés, l'excès de sébum et le maquillage", "Rafraîchit et adoucit instantanément le grain de peau", "Riche en extraits botaniques apaisants"]
    },
    ar: {
      name: "رغوة منظفة فورية للوجه DXN",
      desc: "رغوة منظفة خفيفة كالريشة تنظف مسام البشرة بعمق وتزيل الشوائب وبقايا المكياج لتترك بشرتك ناعمة ومنتعشة بشكل مذهل.",
      benefits: ["يطهر المسام بعمق دون التسبب في جفاف البشرة", "يزيل الأوساخ العنيدة والدهون الزائدة وبقايا المكياج", "ينعش البشرة فوراً ويحسن ملمسها العام", "غني بالمستخلصات النباتية المهدئة للجلد"]
    }
  },
  tonicWater: {
    id: "tonicWater",
    image: "https://i.ibb.co/W46dXKsq/image.png",
    price: 205,
    en: {
      name: "DXN Cleansing Tonic Water",
      desc: "A refreshing tonic water designed to balance the skin's pH, tighten appearance of pores, and prepare your face for ultimate hydration.",
      benefits: ["Balances skin pH and tightens enlarged pores", "Provides a refreshing burst of hydration", "Gently removes final traces of impurities", "Boosts absorption of subsequent skin treatments"]
    },
    fr: {
      name: "Eau Tonique Nettoyante DXN",
      desc: "Une eau tonique rafraîchissante conçue pour équilibrer le pH de la peau, resserrer les pores et préparer le visage à une hydratation optimale.",
      benefits: ["Équilibre le pH et resserre les pores dilatés", "Apporte une vague de fraîcheur et d'hydratation", "Élimine en douceur les dernières traces d'impuretés", "Optimise l'absorption des soins hydratants suivants"]
    },
    ar: {
      name: "تونر منشط ومنظف للبشرة DXN",
      desc: "ماء تونيك منعش يعمل على توازن حموضة البشرة وشد مسام الجلد المفتوحة وتحضير الوجه لامتصاص مثالي لمرطبات العناية اليومية.",
      benefits: ["يوازن درجة حموضة الجلد ويشد المسام الواسعة بفعالية", "يمنح البشرة انتعاشاً فورياً وترطيباً لطيفاً", "يزيل بلطف آخر بقايا الشوائب والأتربة", "يعزز من قدرة البشرة على امتصاص مستحضرات العناية التالية"]
    }
  },
  tighteningSerum: {
    id: "tighteningSerum",
    image: "https://i.ibb.co/wrZYpyHg/image.png",
    price: 327,
    en: {
      name: "DXN Instant Tightening Serum",
      desc: "A powerful, concentrated fast-acting serum that instantly smooths skin texture, tightens facial contours, and targets wrinkles.",
      benefits: ["Instantly tightens and firms saggy skin", "Smooths out fine expression lines and creases", "Improves overall skin elasticity and firmness", "Provides a velvety, glowing youth finish"]
    },
    fr: {
      name: "Sérum Tenseur Instantané DXN",
      desc: "Un sérum puissant et concentré à action rapide qui lisse instantanément le grain de peau, retend les contours et cible les rides.",
      benefits: ["Retend et raffermit instantanément le relâchement", "Lisse les ridules et plis d'expression", "Améliore la fermeté et l'élasticité cutanée", "Offre un fini velouté et un éclat de jeunesse"]
    },
    ar: {
      name: "سيروم شد البشرة الفوري ومقاومة التجاعيد DXN",
      desc: "سيروم مركز فائق الفعالية يعمل على شد البشرة وتنعيم الخطوط التعبيرية بشكل فوري ليعيد لوجهك الشباب والمظهر المصقول.",
      benefits: ["يشد البشرة المترهلة فوراً ويعيد تحديد ملامح الوجه", "ينعم الخطوط التعبيرية الدقيقة والتجاعيد بشكل ملحوظ", "يحسن مرونة وتماسك أنسجة الجلد العميقة", "يمنح الوجه ملمساً مخملياً ناعماً وتوهجاً جذاباً"]
    }
  },
  hydratingFaceCream: {
    id: "hydratingFaceCream",
    image: "https://i.ibb.co/v6Ld64Fq/image.png",
    price: 289,
    en: {
      name: "DXN Hydrating Face Cream",
      desc: "An ultra-nourishing facial cream that locks in long-lasting moisture, strengthens skin defenses, and leaves skin plump and silky.",
      benefits: ["Locks in deep moisture for over 24 hours", "Nourishes with essential fatty acids and lipids", "Strengthens and repairs the skin's protective barrier", "Restores bounce, plumpness, and smooth touch"]
    },
    fr: {
      name: "Crème Visage Hydratante DXN",
      desc: "Une crème visage ultra-nourrissante qui retient l'hydratation durablement, renforce les défenses et rend la peau repulpée et soyeuse.",
      benefits: ["Retient l'hydratation profonde pendant plus de 24h", "Nourrit avec des acides gras et lipides essentiels", "Renforce et répare la barrière protectrice de la peau", "Restaure le rebondi, la souplesse et la douceur du visage"]
    },
    ar: {
      name: "كريم مرطب ومغذي فائق الفعالية للوجه DXN",
      desc: "كريم مرطب غني يغمر البشرة برطوبة عميقة تدوم طوال اليوم، يقوي حاجز الحماية الطبيعي ويجعل الجلد ليداً كالحرير.",
      benefits: ["يحبس الرطوبة في أعماق البشرة لأكثر من 24 ساعة متواصلة", "يغذي الخلايا بالأحماض الدهنية والدهون النباتية الأساسية", "يقوي ويرمم جدار الحماية الطبيعي للبشرة", "يعيد للبشرة المرونة والامتلاء والملمس الناعم"]
    }
  },
  sunscreenSpf50: {
    id: "sunscreenSpf50",
    image: "https://i.ibb.co/Y77zrCpY/image.png",
    price: 381,
    en: {
      name: "DXN Face Sunscreen SPF 50",
      desc: "A high-performance SPF 50 sunscreen offering supreme broad-spectrum UV protection with a lightweight, invisible, non-greasy finish.",
      benefits: ["Supreme SPF 50 broad-spectrum UVA & UVB protection", "Ultralight, non-sticky formula that absorbs instantly", "No white cast, leaves a natural invisible finish", "Enriched with antioxidant botanical extracts to prevent aging"]
    },
    fr: {
      name: "Écran Solaire Visage SPF 50 DXN",
      desc: "Un écran solaire SPF 50 haute performance offrant une protection UV maximale avec un fini léger, invisible et non gras.",
      benefits: ["Protection maximale SPF 50 contre les UVA & UVB", "Formule ultra-légère, non collante qui pénètre instantanément", "Sans traces blanches, fini totalement invisible et naturel", "Enrichi en antioxydants pour prévenir le vieillissement solaire"]
    },
    ar: {
      name: "واقي الشمس الفاخر للوجه SPF 50 DXN",
      desc: "واقي شمس متطور بمعامل حماية SPF 50 يوفر وقاية كاملة من الأشعة فوق البنفسجية الضارة بتركيبة خفيفة غير مرئية وخالية من الدهون.",
      benefits: ["حماية فائقة بمعامل SPF 50 من الأشعة فوق البنفسجية أ و ب", "تركيبة خفيفة للغاية وغير لاصقة تمتصها البشرة بسرعة", "لا يترك أي آثار أو بقع بيضاء ويمنح ملمساً طبيعياً", "غني بمضادات الأكسدة النباتية لمقاومة التجاعيد والشيخوخة"]
    }
  },
  coolingAfterSun: {
    id: "coolingAfterSun",
    image: "https://i.ibb.co/xqQCwxJw/image.png",
    price: 183,
    en: {
      name: "DXN Cooling After Sun",
      desc: "A soothing and refreshing after-sun cream designed to instantly calm, hydrate, and repair sun-exposed skin.",
      benefits: ["Instantly cools and relieves hot skin sensations", "Provides deep, lasting hydration to prevent peeling", "Enriched with repairing botanical extracts", "Absorbs quickly with a non-sticky, fresh finish"]
    },
    fr: {
      name: "Soin Après-Soleil Rafraîchissant DXN",
      desc: "Une crème après-soleil apaisante et hydratante conçue pour calmer instantanément, hydrater et réparer la peau après l'exposition.",
      benefits: ["Rafraîchit et soulage instantanément la peau échauffée", "Apporte une réhydratation intense pour éviter la desquamation", "Enrichi en actifs botaniques réparateurs", "Pénètre rapidement avec un fini frais et non collant"]
    },
    ar: {
      name: "كريم مهدئ بعد التعرض للشمس DXN",
      desc: "كريم ملطف ومنعش بعد الشمس صُمم لتهدئة وترطيب وإصلاح البشرة المجهدة والمعرضة لأشعة الشمس بشكل فوري.",
      benefits: ["يبرد البشرة فوراً ويخفف من الإحساس بالحرارة والاحمرار", "يمنح ترطيباً عميقاً ومستداماً لمنع تقشر الجلد", "غني بالمستخلصات النباتية المجددة والمصلحة لخلايا البشرة", "يمتص بسرعة بتركيبة خفيفة غير لاصقة وإحساس منعش جداً"]
    }
  },
  tanningOil: {
    id: "tanningOil",
    image: "https://i.ibb.co/G3kgyBjj/image.png",
    price: 261,
    en: {
      name: "DXN Natural Tanning Oil",
      desc: "A luxurious natural tanning oil enriched with nourishing plant oils to deliver a deep, glowing, and long-lasting golden tan.",
      benefits: ["Promotes a rapid, deep, and gorgeous golden tan", "Nourishes the skin with precious botanical oils", "Prevents skin dryness caused by sun and wind", "Leaves a silky, radiant, and beautifully scented finish"]
    },
    fr: {
      name: "Huile de Bronzage Naturelle DXN",
      desc: "Une huile de bronzage naturelle et luxueuse, enrichie en huiles végétales nourrissantes pour un bronzage doré intense et durable.",
      benefits: ["Favorise un bronzage doré, rapide et éclatant", "Nourrit intensément la peau grâce aux huiles botaniques précieuses", "Prévient la sécheresse cutanée due au soleil et au vent", "Laisse un fini satiné, lumineux et délicieusement parfumé"]
    },
    ar: {
      name: "زيت التسمير الطبيعي الفاخر DXN",
      desc: "زيت طبيعي فاخر لتسمير البشرة (برونزاج) غني بالزيوت النباتية المغذية لمنح جسمك لوناً ذهبياً عميقاً وجذاباً يدوم طويلاً.",
      benefits: ["يساعد في الحصول على لون برونزي ذهبي سريع وعميق ورائع", "يغذي البشرة بعمق بفضل الزيوت النباتية الثمينة", "يحمي البشرة من الجفاف والتقشر الناتج عن الشمس والرياح", "يمنح الجسم ملمساً حريرياً ناعماً ولمعاناً ساحراً برائحة عطرة"]
    }
  },
  sunscreenSpf30: {
    id: "sunscreenSpf30",
    image: "https://i.ibb.co/9HFcqyq0/image.png",
    price: 318,
    en: {
      name: "DXN Sunscreen Emulsion SPF 30",
      desc: "A hydrating protective sun emulsion SPF 30 that guards your face against UV rays while maintaining soft, comfortable skin.",
      benefits: ["Reliable broad-spectrum SPF 30 protection", "Lightweight, emulsified texture that hydrates without grease", "Helps prevent sun spots and premature aging", "Suitable for daily use under makeup or on its own"]
    },
    fr: {
      name: "Émulsion Solaire Protectrice SPF 30 DXN",
      desc: "Une émulsion solaire protectrice et hydratante SPF 30 qui protège efficacement le visage tout en maintenant la souplesse de la peau.",
      benefits: ["Protection SPF 30 fiable contre les UVA et UVB", "Texture émulsion légère qui hydrate sans graisser", "Aide à prévenir les taches solaires et le vieillissement prématuré", "Idéal au quotidien, seul ou sous le maquillage"]
    },
    ar: {
      name: "مستحلب واقي الشمس SPF 30 DXN",
      desc: "مستحلب مرطب وواقي من الشمس بمعامل SPF 30 يحمي البشرة من الأشعة فوق البنفسجية ويحافظ على نعومتها وراحتها الطبيعية.",
      benefits: ["حماية موثوقة واسعة الطيف بمعامل حماية SPF 30", "قوام مستحلب خفيف للغاية يرطب البشرة دون ترك أثر دهني", "يساعد في منع ظهور بقع الشمس وعلامات الشيخوخة المبكرة", "مناسب للاستخدام اليومي بمفرده أو كقاعدة ممتازة قبل المكياج"]
    }
  }
};

allProducts.forEach(p => {
  const key = p.id;
  const normKey = key.replace(/-/g, '_');
  
  const mappedObj = {
    id: p.id,
    image: p.image,
    price: p.price,
    en: {
      name: p.translations.en.name,
      desc: p.translations.en.desc,
      benefits: p.benefitsList?.en || []
    },
    fr: {
      name: p.translations.fr.name,
      desc: p.translations.fr.desc,
      benefits: p.benefitsList?.fr || []
    },
    ar: {
      name: p.translations.ar.name,
      desc: p.translations.ar.desc,
      benefits: p.benefitsList?.ar || []
    }
  };

  if (!productsData[key]) {
    productsData[key] = mappedObj;
  }
  if (!productsData[normKey]) {
    productsData[normKey] = mappedObj;
  }
});

productsData['potenzhi'] = {
  id: "potenzhi",
  image: "https://i.ibb.co/6cYHCwqQ/image.png",
  price: 434,
  en: {
    name: "DXN Potenzhi Capsules",
    desc: "DXN Potenzhi delivers an elite organic synergy of premium Tongkat Ali roots, Butea Superba, and active Cordyceps mushroom.",
    benefits: ["Boosts natural stamina & energy", "Supports blood circulation", "Relieves chronic fatigue", "100% organic formulation"]
  },
  fr: {
    name: "DXN Potenzhi Gélules",
    desc: "DXN Potenzhi associe en parfaite synergie biologique du Tongkat Ali d'exception, du Butea Superba et du Cordyceps actif.",
    benefits: ["Revitalise le métabolisme", "Soutient un flux sanguin optimal", "Combat la fatigue chronique", "Formulation 100% biologique"]
  },
  ar: {
    name: "كبسولات البوتنزي الفاخرة",
    desc: "مزيج عضوي فاخر يجمع بين عشبة تونغكات علي وبوتيا سوبربا وفطر الكورديسبس لتعزيز الحيوية والنشاط.",
    benefits: ["يزيد القوة والنشاط البدني", "يدعم الدورة الدموية والجسم", "يحارب الإرهاق والتعب المزمن", "تركيبة طبيعية آمنة 100%"]
  }
};

productsData['moricinia'] = {
  id: "moricinia",
  image: "https://i.ibb.co/Hfqs2qS4/image.png",
  price: 300,
  en: {
    name: "DXN Moricinia Juice",
    desc: "An elite, concentrated botanical beverage made from 100% organic fermented Morinda Citrifolia (Noni) juice.",
    benefits: ["Unmatched digestive & intestinal comfort", "Rich in active enzymes & vitamins", "Relieves chronic joint stiffness", "Promotes normal bowel regularity"]
  },
  fr: {
    name: "Jus DXN Moricinia",
    desc: "Une boisson d'exception élaborée à partir de pur jus fermenté de Morinda Citrifolia (Noni) biologique.",
    benefits: ["Régénère la flore et calme le côlon", "Riche en enzymes digestives actives", "Soulage les douleurs articulaires chroniques", "Aide à éliminer les toxines hépatiques"]
  },
  ar: {
    name: "عصير موريسينيا المخمر الفاخر",
    desc: "عصير فاخر مخمر بالكامل ومستخلص من ثمرة النوني (الموريندا) العضوية لإصلاح الجهاز الهضمي والقولون.",
    benefits: ["مستوى فائق من إنزيمات الهضم الحية", "ترميم جدار القولون العصبي والمعدة", "مضاد طبيعي قوي للالتهابات والآلام", "تنقية طبيعية للجهاز اللمفاوي والسموم"]
  }
};

