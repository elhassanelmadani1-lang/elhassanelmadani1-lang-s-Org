export interface Product {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  category: "hygiene" | "beverages" | "supplements";
  categoryAr: string;
  categoryFr: string;
  price: number; // in MAD (Moroccan Dirham)
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  benefits: string[];
  benefitsAr: string[];
  benefitsFr: string[];
  usage: string;
  usageAr: string;
  usageFr: string;
  size: string;
  sizeAr: string;
  sizeFr: string;
  imageUrl: string;
  badge?: string;
  badgeAr?: string;
  badgeFr?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  subtotal: number;
  shipping: number;
  total: number;
  date: string;
  status: "pending" | "confirmed" | "shipped" | "delivered";
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  commentAr: string;
  commentFr: string;
  date: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ganozhi-toothpaste",
    name: "Ganozhi Toothpaste",
    nameAr: "معجون أسنان جانوزي",
    nameFr: "Dentifrice Ganozhi",
    category: "hygiene",
    categoryAr: "العناية الشخصية",
    categoryFr: "Hygiène",
    price: 156,
    size: "150 g",
    sizeAr: "150 غرام",
    sizeFr: "150 g",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    badgeFr: "Meilleur Vente",
    imageUrl: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600",
    description: "Premium natural toothpaste formulated with rich Ganoderma Lucidum extract. Clean, white teeth with no fluoride, no artificial colorings, and no saccharin.",
    descriptionAr: "معجون أسنان طبيعي فاخر غني بخلاصة فطر الجانوديرما (الريشي). ينظف ويحمي الأسنان واللثة بدون فلورايد، بدون ملونات صناعية، وبدون سكرين.",
    descriptionFr: "Dentifrice naturel de qualité supérieure formulé avec de l'extrait de Ganoderma Lucidum. Dents blanches et saines, sans fluor, sans colorants artificiels.",
    benefits: [
      "Protects gums from bleeding and inflammation",
      "Fresh mint breath all day long",
      "Safely removes stains for a brighter smile",
      "Multipurpose: can be used for minor skin issues",
    ],
    benefitsAr: [
      "يحمي اللثة من النزيف والالتهابات",
      "نَفَس منعش برائحة النعناع طوال اليوم",
      "يزيل البقع بلطف لابتسامة أكثر إشراقاً",
      "متعدد الاستخدامات: يمكن وضعه موضعياً على الجروح الخفيفة",
    ],
    benefitsFr: [
      "Protège les gencives du saignement et des inflammations",
      "Haleine fraîche mentholée toute la journée",
      "Élimine les taches en douceur pour un sourire éclatant",
      "Multi-usage: applicable sur les petites brûlures ou coupures",
    ],
    usage: "Brush teeth at least twice a day. Apply a pea-sized amount onto the brush.",
    usageAr: "نظف أسنانك مرتين يومياً على الأقل. ضع كمية بحجم حبة البازلاء على الفرشاة.",
    usageFr: "Brosser les dents au moins deux fois par jour. Appliquer une noisette sur la brosse."
  },
  {
    id: "lingzhi-black-coffee",
    name: "Lingzhi Black Coffee 2-in-1",
    nameAr: "قهوة لينجزي السوداء 2 في 1",
    nameFr: "Café Noir Lingzhi 2-en-1",
    category: "beverages",
    categoryAr: "المشروبات الصحية",
    categoryFr: "Boissons",
    price: 310,
    size: "20 sachets x 4.5g",
    sizeAr: "20 كيس × 4.5 غرام",
    sizeFr: "20 sachets x 4,5g",
    badge: "Slimming & Energy",
    badgeAr: "رشاقة وحيوية",
    badgeFr: "Minceur & Énergie",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
    description: "Exclusive sugar-free gourmet black coffee blended with high-grade Ganoderma. Offers organic energy with extremely low caffeine and rich taste.",
    descriptionAr: "قهوة سوداء فاخرة خالية من السكر ممزوجة بخلاصة فطر الجانوديرما الفاخر. تمنحك طاقة وحيوية طبيعية مع نسبة كافيين ضئيلة جداً ومذاق غني مميز.",
    descriptionFr: "Café noir gourmet exclusif sans sucre, enrichi d'extrait de Ganoderma de haute qualité. Énergie naturelle, très faible en caféine avec un goût riche.",
    benefits: [
      "Boosts mental alertness and metabolism",
      "Sugar-free, ideal for diabetic and health-conscious lifestyles",
      "Helps with natural weight management",
      "Alkaline coffee that doesn't cause acidity",
    ],
    benefitsAr: [
      "يزيد النشاط الذهني ويسرع عملية الأيض",
      "خالٍ من السكر تماماً، مثالي لمرضى السكري ومحبي الرشاقة",
      "يساعد في إدارة الوزن وحرق الدهون بشكل طبيعي",
      "قهوة قلوية ناعمة لا تسبب حموضة المعدة",
    ],
    benefitsFr: [
      "Améliore la concentration et stimule le métabolisme",
      "Sans sucre, parfait pour les diabétiques et régimes minceur",
      "Aide au contrôle naturel du poids",
      "Café alcalin qui ne provoque pas d'acidité gastrique",
    ],
    usage: "Pour one sachet into a cup, add hot water, stir well and enjoy active wellness.",
    usageAr: "أفرغ محتوى كيس واحد في كوب، أضف الماء الساخن، واخلطه جيداً واستمتع بالنشاط.",
    usageFr: "Verser un sachet dans une tasse, ajouter de l'eau chaude, bien mélanger et savourer."
  },
  {
    id: "reishilium-powder",
    name: "Reishilium Powder (RG & GL)",
    nameAr: "مسحوق ريشيليوم (الفطر الريشي)",
    nameFr: "Poudre de Reishi (Ganoderma)",
    category: "supplements",
    categoryAr: "المكملات الغذائية",
    categoryFr: "Compléments",
    price: 1226,
    size: "70 g",
    sizeAr: "70 غرام",
    sizeFr: "70 g",
    badge: "Premium Detox",
    badgeAr: "مخلص السموم الفاخر",
    badgeFr: "Détox Premium",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    description: "A highly concentrated premium blend of Reishi Gano (RG) and Ganocelium (GL). Acts as an exceptional adaptogen, supporting systemic detoxification and cellular regeneration.",
    descriptionAr: "خليط عالي التركيز والجودة يجمع بين فطر الريشي البالغ (RG) وجنين الفطر (GL). يعمل كمنظم حيوي استثنائي للجسم يدعم طرد السموم وتجديد الخلايا بشكل عميق.",
    descriptionFr: "Un mélange hautement concentré de Reishi Gano (RG) et de Ganocelium (GL). Agit comme un adaptogène d'exception, soutenant la détoxification et la régénération cellulaire.",
    benefits: [
      "Powerful antioxidant that strengthens the immune system",
      "Deeply cleanses cells from heavy metals and daily toxins",
      "Balances body functions and improves sleep quality",
      "Oxygenates tissues and enhances physical endurance",
    ],
    benefitsAr: [
      "مضاد أكسدة قوي يعزز ويقوي جهاز المناعة",
      "ينظف الخلايا بعمق من المعادن الثقيلة والسموم المتراكمة",
      "يوازن وظائف أعضاء الجسم ويحسن جودة النوم والاسترخاء",
      "يزود الخلايا بالأكسجين ويرفع القدرة على التحمل البدني",
    ],
    benefitsFr: [
      "Antioxydant puissant qui renforce le système immunitaire",
      "Nettoie en profondeur les cellules des toxines et métaux lourds",
      "Équilibre les fonctions du corps et améliore la qualité du sommeil",
      "Oxygène les tissus et augmente l'endurance physique",
    ],
    usage: "Take 1 to 2 scoops daily mixed with water, warm milk, or fresh fruit juices.",
    usageAr: "تناول ملعقة إلى ملعقتين يومياً ممزوجة بالماء الدافئ، الحليب، أو عصير الفواكه الطبيعي.",
    usageFr: "Prendre 1 à 2 dosettes par jour mélangées à de l'eau, du lait chaud ou du jus frais."
  },
  {
    id: "cocozhi-cocoa",
    name: "DXN Cocozhi Cocoa",
    nameAr: "كوكوزي مشروب الشوكولاتة",
    nameFr: "Cocozhi Cacao DXN",
    category: "beverages",
    categoryAr: "المشروبات الصحية",
    categoryFr: "Boissons",
    price: 387,
    size: "20 sachets x 32g",
    sizeAr: "20 كيس × 32 غرام",
    sizeFr: "20 sachets x 32g",
    badge: "Brain & Kids Focus",
    badgeAr: "تركيز ونمو الأطفال",
    badgeFr: "Mémoire & Croissance",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
    description: "Delicious rich Swiss cocoa powder formulated with high-quality Ganoderma extract. Packed with natural micronutrients, perfect for children's brain development and general vitality.",
    descriptionAr: "مسحوق شوكولاتة سويسرية فاخرة ولذيذة غنية بخلاصة فطر الجانوديرما. مليء بالمغذيات الدقيقة الطبيعية ومثالي جداً لنمو عقول الأطفال وزيادة نشاطهم وتركيزهم.",
    descriptionFr: "Délicieux chocolat suisse enrichi en extrait de Ganoderma de qualité supérieure. Riche en nutriments naturels, idéal pour la concentration des enfants et la vitalité générale.",
    benefits: [
      "Improves memory, focus, and brain clarity in students",
      "Provides organic energy without refined sugars",
      "Rich in calcium and natural proteins for healthy growth",
      "Immune-boosting delicious daily wellness drink",
    ],
    benefitsAr: [
      "يساعد في تنشيط الذاكرة، التركيز، والاستيعاب لدى الطلاب",
      "يمد الجسم بطاقة وحيوية طبيعية خالية من السكر المكرر",
      "غني بالكالسيوم والبروتينات الطبيعية لدعم النمو الصحي للأطفال",
      "مشروب لذيذ يقوي المناعة ويحميهم من نزلات البرد",
    ],
    benefitsFr: [
      "Améliore la mémoire, la concentration et la clarté mentale des étudiants",
      "Fournit une excellente source d'énergie naturelle sans sucres raffinés",
      "Riche en calcium et protéines naturelles pour soutenir une croissance saine",
      "Boisson gourmande qui renforce l'immunité au quotidien",
    ],
    usage: "Pour a sachet in hot water or warm milk, mix thoroughly and serve with joy.",
    usageAr: "أفرغ محتوى الكيس في كوب من الماء الساخن أو الحليب الدافئ، واخلطه واستمتع بنكهته الغنية.",
    usageFr: "Verser un sachet dans de l'eau chaude ou du lait chaud, bien remuer et déguster."
  },
  {
    id: "spirulina-tablets",
    name: "DXN Spirulina",
    nameAr: "سبيرولينا الغذاء القلوي السوبر",
    nameFr: "Spiruline DXN",
    category: "supplements",
    categoryAr: "المكملات الغذائية",
    categoryFr: "Compléments",
    price: 365,
    size: "120 tablets",
    sizeAr: "120 حبة",
    sizeFr: "120 comprimés",
    badge: "Superfood",
    badgeAr: "الغذاء الخارق المتكامل",
    badgeFr: "Super-aliment",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
    description: "The world's richest alkaline superfood cultivated naturally by DXN. Contains an abundance of complete proteins, essential vitamins, amino acids, and beta-carotene.",
    descriptionAr: "الغذاء القلوي الخارق الأغنى عالمياً بالقيم الغذائية، المزروع عضوياً وبجودة عالية من DXN. يحتوي على بروتينات كاملة، فيتامينات أساسية، أحماض أمينية، وبيتا كاروتين.",
    descriptionFr: "Le super-aliment alcalin le plus riche au monde, cultivé naturellement par DXN. Renferme une abondance de protéines complètes, vitamines essentielles et bêta-carotène.",
    benefits: [
      "Fights malnutrition and anemia with organic natural iron",
      "Regulates blood pressure and natural hormone balance",
      "Deeply nourishes cells, glowing skin, hair strength, and nail growth",
      "Excellent supplement for athletes and pregnant/lactating women",
    ],
    benefitsAr: [
      "يحارب سوء التغذية وفقر الدم (الأنيميا) بفضل الحديد الطبيعي العضوي",
      "يساعد في تنظيم ضغط الدم وتوازن هرمونات الجسم الطبيعية",
      "يغذي الخلايا بعمق، يمنح البشرة نضارة ويقوي الشعر والأظافر",
      "مكمل غذائي ممتاز للرياضيين، النساء الحوامل والمرضعات",
    ],
    benefitsFr: [
      "Lutte contre la malnutrition et l'anémie grâce au fer naturel organique",
      "Aide à réguler la tension artérielle et l'équilibre hormonal",
      "Nourrit profondément les cellules, fortifie les cheveux et les ongles",
      "Excellent supplément pour les athlètes, femmes enceintes et allaitantes",
    ],
    usage: "Take 4 to 6 tablets daily before or after meals with plenty of clean water.",
    usageAr: "تناول من 4 إلى 6 حبات يومياً قبل أو بعد الوجبات بمسافة ساعة مع شرب كميات كافية من الماء.",
    usageFr: "Prendre 4 à 6 comprimés par jour avant ou après les repas avec un grand verre d'eau."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "أمل الفاسي",
    city: "Casablanca",
    rating: 5,
    comment: "Excellent experience with the Ganozhi Toothpaste! My gums stopped bleeding within three days, and my teeth feel so clean. Highly recommend Samira for her professional guidance!",
    commentAr: "تجربة رائعة جداً مع معجون أسنان جانوزي! توقف نزيف لثتي خلال ثلاثة أيام فقط وأصبحت أسناني نظيفة ومشرقة. أنصح الجميع بالتعامل مع الأخت سميرة لنصحها وخبرتها الطويلة في منتجات DXN!",
    commentFr: "Excellente expérience avec le dentifrice Ganozhi ! Mes gencives ont cessé de saigner en trois jours seulement, et mes dents sont éclatantes. Je recommande vivement Samira pour ses conseils professionnels !",
    date: "2026-06-15"
  },
  {
    id: "r2",
    name: "Yassine Mansouri",
    city: "Rabat",
    rating: 5,
    comment: "Lingzhi black coffee is my absolute morning ritual now. It boosts my productivity, gives me calm focus with zero acidity. Delivery to Rabat was fast and beautifully packed.",
    commentAr: "قهوة لينجزي السوداء أصبحت رفيقتي الصباحية اليومية دون منازع. تمنحني طاقة وتركيزاً ذهنياً عالياً وهضم مريح دون أي حموضة في المعدة. التوصيل إلى الرباط كان سريعاً والمنتج مغلف بعناية فائقة.",
    commentFr: "Le café noir Lingzhi est devenu mon rituel matinal incontournable. Il booste ma concentration et ma productivité avec zéro acidité gastrique. Livraison à Rabat rapide et colis très soigné.",
    date: "2026-06-20"
  },
  {
    id: "r3",
    name: "خديجة السوسي",
    city: "Agadir",
    rating: 5,
    comment: "I have been using Reishilium powder and Spirulina together for a month. I feel much more energetic and sleep deeply. My digestion issues are completely gone. Thank you Samira Naturale!",
    commentAr: "أستخدم مسحوق ريشيليوم والسبيرولينا معاً منذ حوالي شهر. أشعر بنشاط كبير وحيوية طوال اليوم ونومي أصبح عميقاً وهادئاً ومشاكل الهضم تلاشت تماماً. شكراً جزيلاً لسميرة ناتورال على هذه المنتجات الرائعة!",
    commentFr: "J'utilise la poudre de Reishi et la Spiruline ensemble depuis un mois. Je me sens pleine d'énergie, je dors profondément et mes soucis de digestion ont disparu. Merci infiniment à Samira Naturale !",
    date: "2026-06-24"
  }
];

export const MOROCCAN_CITIES = [
  "Casablanca (الدار البيضاء)",
  "Rabat (الرباط)",
  "Marrakech (مراكش)",
  "Fes (فاس)",
  "Tangier (طنجة)",
  "Agadir (أكادير)",
  "Meknes (مكناس)",
  "Oujda (وجدة)",
  "Kenitra (القنيطرة)",
  "Tetouan (تطوان)",
  "Safi (آسفي)",
  "Mohammedia (المحمدية)",
  "El Jadida (الجديدة)",
  "Nador (الناظور)",
  "Beni Mellal (بني ملال)",
  "Taza (تازة)",
  "Khamisset (الخميسات)",
  "Laayoune (العيون)"
];

export const TRANSLATIONS = {
  en: {
    brandName: "Samira Naturale",
    brandTagline: "Premium Organic DXN Wellness Morocco",
    navHome: "Home",
    navProducts: "Our Products",
    navAbout: "Ganoderma Science",
    navReviews: "Customer Reviews",
    navContact: "Contact",
    heroTitle: "Nurture Your Body with Pure DXN Organics",
    heroSubtitle: "Curated premium Ganoderma-infused solutions for authentic wellness, natural hygiene, and daily vitality in Morocco.",
    heroShopBtn: "Explore DXN Catalog",
    heroChatBtn: "Consult DXN AI Advisor",
    categoryAll: "All Products",
    categoryHygiene: "Personal Hygiene",
    categoryBeverages: "Healthy Beverages",
    categorySupplements: "Organic Supplements",
    addToCart: "Add to Cart",
    buyNow: "Quick WhatsApp Buy",
    sizeLabel: "Size:",
    benefitsLabel: "Key Health Benefits:",
    usageLabel: "How to Use / Dosage:",
    freeShippingBadge: "Express Shipping in Morocco",
    cartTitle: "Your Shopping Basket",
    cartEmpty: "Your cart is currently empty.",
    cartItemTotal: "Total Items:",
    subtotal: "Subtotal",
    shipping: "Delivery (All Cities)",
    shippingPrice: "35 MAD",
    shippingFree: "FREE (Orders > 500 MAD)",
    shippingFeeLabel: "35 MAD (Free over 500 MAD)",
    total: "Total to Pay",
    checkoutBtn: "Proceed to Cash on Delivery",
    checkoutTitle: "Secure Order Form (Cash on Delivery)",
    fullNamePlaceholder: "Your Full Name (e.g. Amina Alami)",
    phonePlaceholder: "Your WhatsApp / Phone (e.g. 0612345678)",
    citySelectLabel: "Select Your City",
    addressPlaceholder: "Full Delivery Address (e.g. Boulevard Zerktouni, No. 45)",
    placeOrderWhatsApp: "Order via WhatsApp",
    placeOrderLocal: "Confirm Cash on Delivery",
    orderSuccessTitle: "Order Placed Successfully!",
    orderSuccessDesc: "Your order is registered! Our coordinator Samira will contact you via phone or WhatsApp shortly to confirm dispatch. Delivery takes 24h to 48h.",
    aiConsultantTitle: "Samira Naturale AI Wellness Advisor",
    aiConsultantSub: "Ask me anything about DXN products, Ganoderma benefits, usage, or proper wellness dosage.",
    aiChatPlaceholder: "Write your health question (English, French, or Arabic)...",
    aiChatSend: "Send Question",
    aiChatting: "Consulting DXN Wisdom...",
    reviewsTitle: "Glow & Wellness Stories",
    reviewsSubtitle: "Read honest feedback from across Morocco about our original DXN organic solutions.",
    addReviewBtn: "Write Your Review",
    aboutGanodermaTitle: "The Miracle of Ganoderma Lucidum (Reishi)",
    aboutGanodermaDesc1: "Known as the 'King of Herbs' or 'Lingzhi' in traditional health wisdom, Ganoderma Lucidum is a powerful ancient adaptogen that supports natural detoxification, builds immune barriers, and oxygenates bodily cells.",
    aboutGanodermaDesc2: "At Samira Naturale, we source only authentic DXN wellness products. DXN is the global gold standard in organic mushroom cultivation, ensuring maximum bioactive polysaccharides and organic germanium for your family's daily hygiene and dietary requirements.",
    contactTitle: "Get in Touch with Samira",
    contactSubtitle: "Need customized advice or have bulk DXN order queries? Message us directly.",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormMsg: "Your Message",
    contactFormSend: "Send Message",
    contactSuccess: "Thank you for reaching out! Samira will reply to your email shortly.",
    whatsappContactBtn: "Chat Live on WhatsApp",
    phoneContactBtn: "Call Us Direct",
    whatsappStatus: "Usually responds instantly",
    locationLabel: "Our Office:",
    locationText: "Casablanca, Morocco",
    reviewsFormRating: "Rating:",
    reviewsFormComment: "Share your experience...",
    reviewsFormSubmit: "Submit Review",
    reviewsFormName: "Your Name",
    reviewSuccess: "Review submitted successfully! Thank you for sharing your DXN wellness journey.",
  },
  fr: {
    brandName: "Samira Naturale",
    brandTagline: "Boutique DXN Bio Premium Maroc",
    navHome: "Accueil",
    navProducts: "Nos Produits",
    navAbout: "Science du Ganoderma",
    navReviews: "Avis Clients",
    navContact: "Contact",
    heroTitle: "Nourrissez Votre Corps avec la Pureté DXN",
    heroSubtitle: "Des solutions bio enrichies au Ganoderma pour une hygiène saine, une énergie naturelle et une vitalité quotidienne optimale au Maroc.",
    heroShopBtn: "Découvrir le Catalogue",
    heroChatBtn: "Consulter l'Assistant IA",
    categoryAll: "Tous les Produits",
    categoryHygiene: "Hygiène Corporelle",
    categoryBeverages: "Boissons Saines",
    categorySupplements: "Compléments Bio",
    addToCart: "Ajouter au Panier",
    buyNow: "Achat Rapide WhatsApp",
    sizeLabel: "Format :",
    benefitsLabel: "Bienfaits Majeurs pour la Santé :",
    usageLabel: "Conseils d'Utilisation / Dosage :",
    freeShippingBadge: "Livraison Express au Maroc",
    cartTitle: "Votre Panier d'Achats",
    cartEmpty: "Votre panier est vide pour le moment.",
    cartItemTotal: "Articles :",
    subtotal: "Sous-total",
    shipping: "Livraison (Toutes les Villes)",
    shippingPrice: "35 DH",
    shippingFree: "GRATUIT (Commandes > 500 DH)",
    shippingFeeLabel: "35 DH (Gratuit dès 500 DH)",
    total: "Total à Payer",
    checkoutBtn: "Passer à la Caisse (Paiement à la Livraison)",
    checkoutTitle: "Formulaire de Commande Sécurisé (COD Maroc)",
    fullNamePlaceholder: "Votre Nom Complet (ex: Amina Alami)",
    phonePlaceholder: "Votre Numéro WhatsApp / Téléphone (ex: 0612345678)",
    citySelectLabel: "Sélectionnez Votre Ville",
    addressPlaceholder: "Adresse complète de livraison (ex: Boulevard Zerktouni, N° 45)",
    placeOrderWhatsApp: "Commander via WhatsApp",
    placeOrderLocal: "Valider ma Commande Express",
    orderSuccessTitle: "Commande Enregistrée avec Succès !",
    orderSuccessDesc: "Votre commande a bien été reçue ! Notre coordinatrice Samira vous contactera par téléphone ou WhatsApp sous peu pour valider l'envoi. Livraison sous 24h à 48h.",
    aiConsultantTitle: "Conseillère IA Samira Naturale",
    aiConsultantSub: "Posez toutes vos questions sur les bienfaits des produits DXN, la posologie ou l'utilisation du Ganoderma.",
    aiChatPlaceholder: "Écrivez votre question de santé (Français, Arabe ou Anglais)...",
    aiChatSend: "Envoyer",
    aiChatting: "Consultation de la sagesse DXN...",
    reviewsTitle: "Histoires de Vitalité & Bien-être",
    reviewsSubtitle: "Découvrez les témoignages authentiques de nos clients à travers tout le Maroc sur nos solutions DXN d'origine contrôlée.",
    addReviewBtn: "Rédiger un Avis",
    aboutGanodermaTitle: "Le Miracle du Ganoderma Lucidum (Reishi)",
    aboutGanodermaDesc1: "Connu sous le nom de 'Roi des Herbes' ou 'Lingzhi' dans les traditions de santé millénaires, le Ganoderma Lucidum est un adaptogène d'exception qui purifie les cellules, stimule l'immunité et régule les fonctions vitales de l'organisme.",
    aboutGanodermaDesc2: "Chez Samira Naturale, nous garantissons l'authenticité absolue de nos produits DXN. Leader mondial de la mycothérapie, DXN utilise des procédés de culture organique brevetés, assurant une teneur inégalée en polysaccharides actifs et germanium organique.",
    contactTitle: "Prendre Contact avec Samira",
    contactSubtitle: "Besoin de conseils personnalisés ou de commander en gros ? Envoyez-nous un message.",
    contactFormName: "Votre Nom",
    contactFormEmail: "Votre Email",
    contactFormMsg: "Votre Message",
    contactFormSend: "Envoyer le Message",
    contactSuccess: "Merci pour votre message ! Samira vous répondra par e-mail dans les plus brefs délais.",
    whatsappContactBtn: "Discuter en Direct sur WhatsApp",
    phoneContactBtn: "Nous Appeler Directement",
    whatsappStatus: "Répond généralement instantanément",
    locationLabel: "Notre Siège :",
    locationText: "Casablanca, Maroc",
    reviewsFormRating: "Note :",
    reviewsFormComment: "Partagez votre avis détaillé...",
    reviewsFormSubmit: "Publier l'Avis",
    reviewsFormName: "Votre Nom",
    reviewSuccess: "Avis soumis avec succès ! Merci d'avoir partagé votre parcours bien-être avec Samira Naturale.",
  },
  ar: {
    brandName: "سميرة ناتورال",
    brandTagline: "منتجات DXN العضوية الفاخرة بالمغرب",
    navHome: "الرئيسية",
    navProducts: "منتجاتنا الصحية",
    navAbout: "علم الفطر الريشي",
    navReviews: "آراء عملائنا",
    navContact: "اتصل بنا",
    heroTitle: "ارتقِ بصحتك وحيويتك مع منتجات DXN العضوية",
    heroSubtitle: "بوابتك الموثوقة بالمغرب لمنتجات العناية الطبيعية والمشروبات الصحية المدعمة بالفطر الريشي الخارق لوقاية وعافية عائلتك.",
    heroShopBtn: "تصفح منتجاتنا الآن",
    heroChatBtn: "استشر مرشدنا الذكي",
    categoryAll: "كل المنتجات",
    categoryHygiene: "العناية الشخصية واليومية",
    categoryBeverages: "المشروبات الصحية المنعشة",
    categorySupplements: "المكملات الغذائية العضوية",
    addToCart: "إضافة إلى السلة",
    buyNow: "شراء سريع عبر واتساب",
    sizeLabel: "الحجم / العبوة:",
    benefitsLabel: "أهم الفوائد الصحية للجسم:",
    usageLabel: "طريقة الاستخدام والجرعة:",
    freeShippingBadge: "توصيل سريع لكافة مدن المغرب",
    cartTitle: "سلة التسوق الخاصة بك",
    cartEmpty: "سلة التسوق فارغة حالياً.",
    cartItemTotal: "عدد المنتجات:",
    subtotal: "المجموع الفرعي",
    shipping: "شحن وتوصيل (لكافة المدن)",
    shippingPrice: "35 درهم",
    shippingFree: "مجاني (للطلبات فوق 500 درهم)",
    shippingFeeLabel: "35 درهم (مجاني للطلبات فوق 500 درهم)",
    total: "الإجمالي للدفع عند الاستلام",
    checkoutBtn: "إتمام الطلب والدفع عند الاستلام",
    checkoutTitle: "نموذج تأكيد الطلب السريع (الدفع عند الاستلام)",
    fullNamePlaceholder: "الاسم الكامل (مثال: أمينة العلمي)",
    phonePlaceholder: "رقم الهاتف أو الواتساب (مثال: 0612345678)",
    citySelectLabel: "اختر مدينتك",
    addressPlaceholder: "العنوان الكامل للتسليم (مثال: شارع الزرقطوني، شقة 4، الدار البيضاء)",
    placeOrderWhatsApp: "اطلب الآن عبر واتساب",
    placeOrderLocal: "تأكيد الطلب والدفع عند الاستلام",
    orderSuccessTitle: "تم تسجيل طلبك بنجاح!",
    orderSuccessDesc: "يسعدنا التعامل معك! ستتواصل معك الأخت سميرة قريباً لتأكيد تفاصيل الشحن والتسليم. يستغرق التوصيل بين 24 إلى 48 ساعة فقط والدفع عند الاستلام.",
    aiConsultantTitle: "مستشارة الصحة الذكية لسميرة ناتورال",
    aiConsultantSub: "اسألني عن كيفية استخدام منتجات DXN، فوائد الريشي، الجرعة المناسبة، أو أي استفسار صحي.",
    aiChatPlaceholder: "اكتب سؤالك الصحي هنا (بالعربية، الدارجة المغربية، أو الفرنسية)...",
    aiChatSend: "إرسال السؤال",
    aiChatting: "جاري استشارة حكمة DXN الصحية...",
    reviewsTitle: "قصص نجاح وعافية عملائنا بالمغرب",
    reviewsSubtitle: "اكتشف شهادات حية وتجارب حقيقية لزبنائنا الكرام مع منتجات DXN العضوية الأصلية.",
    addReviewBtn: "اكتب تقييمك الخاص",
    aboutGanodermaTitle: "معجزة فطر الجانوديرما (الريشي الخارق)",
    aboutGanodermaDesc1: "يُلقب بـ 'ملك الأعشاب' و'فطر الخلود' في الثقافات الصحية القديمة. فطر الريشي هو منظم حيوي مذهل للجسم يساعد في طرد السموم المتراكمة، تعزيز كفاءة جهاز المناعة، وزيادة تدفق الأكسجين للخلايا بشكل طبيعي.",
    aboutGanodermaDesc2: "في 'سميرة ناتورال'، نضمن لكم توفير منتجات DXN الأصلية 100%. شركة DXN هي الرائدة عالمياً في زراعة الفطر الريشي العضوي بطرق طبيعية فائقة تحافظ على بولي ساكارايد والجر مانيوم العضوي لضمان صحة عائلتك.",
    contactTitle: "تواصل مباشر مع الأخت سميرة",
    contactSubtitle: "هل تحتاج استشارة مخصصة لحالتك الصحية أو طلب كمية تجارية؟ راسلنا مباشرة وسنكون سعداء بخدمتك.",
    contactFormName: "الاسم الكامل",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMsg: "رسالتك أو استفسارك",
    contactFormSend: "إرسال الرسالة",
    contactSuccess: "شكراً لتواصلك معنا! ستجيبك الأخت سميرة على بريدك الإلكتروني أو هاتفك قريباً جداً.",
    whatsappContactBtn: "تحدث معنا مباشرة عبر واتساب",
    phoneContactBtn: "اتصل بنا هاتفياً",
    whatsappStatus: "متواجدة للإجابة فوراً",
    locationLabel: "مقرنا الرئيسي:",
    locationText: "الدار البيضاء، المغرب",
    reviewsFormRating: "التقييم:",
    reviewsFormComment: "اكتب تجربتك بالتفصيل هنا...",
    reviewsFormSubmit: "نشر التقييم",
    reviewsFormName: "اسمك الكريم",
    reviewSuccess: "تم نشر تقييمك بنجاح! شكراً لمشاركتك رحلة العافية مع سميرة ناتورال.",
  }
};
