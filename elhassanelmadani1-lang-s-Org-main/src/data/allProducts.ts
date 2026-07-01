export interface ProductDetails {
  id: string;
  category: 'coffee' | 'energy' | 'immunity' | 'skincare' | 'personal' | 'oils' | 'packs';
  price: number;
  originalPrice?: number; // For discount badges on packs
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[]; // For gallery
  isBestSeller: boolean;
  isMostPopular: boolean;
  stock: 'high' | 'limited' | 'very-limited';
  benefitsList: { en: string[]; fr: string[]; ar: string[] };
  ingredientsList: { en: string[]; fr: string[]; ar: string[] };
  translations: {
    en: {
      name: string;
      subtitle: string;
      desc: string;
      details: string;
    };
    fr: {
      name: string;
      subtitle: string;
      desc: string;
      details: string;
    };
    ar: {
      name: string;
      subtitle: string;
      desc: string;
      details: string;
    };
  };
}

export const allProducts: ProductDetails[] = [
  {
    id: "coffee",
    category: "coffee",
    price: 310,
    rating: 4.9,
    reviewsCount: 124,
    image: "https://i.ibb.co/TqhqBdJ0/image.png",
    images: [
      "https://i.ibb.co/TqhqBdJ0/image.png",
      "https://i.ibb.co/fYPcsWsn/image.png",
      "https://i.ibb.co/tT4TcZv8/image.png"
    ],
    isBestSeller: true,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Ultra-low caffeine (<0.06%)", "Sustained daily energy & focus", "Supports deep detox", "Enriched with 100% Organic Reishi"],
      fr: ["Teneur infime en caféine (<0,06%)", "Énergie & concentration durable", "Favorise une détox profonde", "Enrichi en Reishi 100% biologique"],
      ar: ["نسبة كافيين ضئيلة جداً (<0.06%)", "قهوة صحية تريح المعدة والقولون", "تدعم طرد السموم من الجسم", "مدعمة بفطر الريشي العضوي 100%"]
    },
    ingredientsList: {
      en: ["Premium Roasted Coffee Beans", "100% Certified Organic Ganoderma Lucidum extract"],
      fr: ["Grains de café torréfiés de qualité supérieure", "Extrait pur de Ganoderma Lucidum biologique certifié"],
      ar: ["حبوب بن محمصة فاخرة", "خلاصة فطر الجانوديرما (الريشي) العضوي المعتمد 100%"]
    },
    translations: {
      en: {
        name: "DXN Lingzhi Black Coffee",
        subtitle: "The King of Healthy Gourmet Beverages",
        desc: "Premium gourmet dark coffee with trace caffeine, fortified with pure Ganoderma extract. Rich, smooth taste with an uplifting aroma, balancing digestion while promoting sustained daily stamina.",
        details: "Experience the supreme luxury of a dark-roast gourmet coffee infused with 100% organic Ganoderma (Reishi) extract. Features low-acid composition to deliver sustained focus, healthy gut digestion, and clean wellness without jitters."
      },
      fr: {
        name: "Café Noir DXN Lingzhi",
        subtitle: "L'excellence du café sain",
        desc: "Café noir gourmet de qualité supérieure infusé à l'extrait pur de Ganoderma (Reishi). Un arôme riche, corsé et naturellement faible en caféine, qui équilibre la digestion et favorise une vitalité soutenue.",
        details: "Découvrez le raffinement suprême d'une torréfaction fine de grains précieux, fusionnée avec l'extrait de Reishi 100% biologique. Idéal pour un focus net, une digestion légère et une tonification durable sans palpitations."
      },
      ar: {
        name: "قهوة لينجزي السوداء 2 في 1",
        subtitle: "ملك المشروبات الصحية المنشطة",
        desc: "قهوة سوداء فاخرة سريعة التحضير ممزوجة بخلاصة فطر الجانوديرما (الريشي) النقي. تتميز بمذاقها الغني الخالي من السكر ونسبة الكافيين الضئيلة جداً لتعطيك طاقة عالية وتعدل المزاج من دون حموضة.",
        details: "تذوق الفخامة الحقيقية في كل فنجان من قهوة لينجزي السوداء الممزوجة بنسبة 100% مع خلاصة فطر الريشي العضوي المعتمد. تمنحك نشاطاً مستداماً وتركيزاً ذهنياً فائقاً دون حموضة أو غازات."
      }
    }
  },
  {
    id: "coffee3in1",
    category: "coffee",
    price: 310,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://i.ibb.co/6cYqDvwB/image.png",
    images: [
      "https://i.ibb.co/6cYqDvwB/image.png",
      "https://i.ibb.co/dsZZQkfb/image.png",
      "https://i.ibb.co/PscQpRsH/image.png"
    ],
    isBestSeller: true,
    isMostPopular: true,
    stock: "high",
    benefitsList: {
      en: ["Rich creamy taste", "Stomach friendly", "Trace caffeine stable energy", "Immune support"],
      fr: ["Gout crémeux & velouté", "Léger pour l'estomac", "Énergie stable & durable", "Soutien immunitaire"],
      ar: ["طعم كريمي غني ولذيذ", "خفيفة على المعدة والقولون", "طاقة مستقرة بكافيين ضئيل", "تدعم الجهاز المناعي"]
    },
    ingredientsList: {
      en: ["Gourmet Brazilian Coffee Beans", "Organic Ganoderma extract", "Non-dairy vegetable creamer", "Natural cane sugar"],
      fr: ["Grains de café brésiliens fins", "Extrait de Ganoderma biologique", "Crème végétale non laitière digeste", "Sucre de canne fin"],
      ar: ["حبوب بن برازيلية فاخرة", "خلاصة فطر الجانوديرما العضوي", "كريمة نباتية سريعة الهضم", "سكر قصب طبيعي ناعم"]
    },
    translations: {
      en: {
        name: "DXN Lingzhi Coffee 3 in 1",
        subtitle: "Creamy Velvety Adaptogenic Espresso",
        desc: "Premium creamy wellness espresso blended with high-grade coffee beans, organic Ganoderma (Reishi) extract, non-dairy vegetable creamer, and a balanced touch of fine cane sugar.",
        details: "Provides divine creamy taste, robust daily energy, and zero stomach discomfort. Perfect for those who prefer their coffee smooth, velvety, and lightly sweet."
      },
      fr: {
        name: "Café Lingzhi 3 en 1 DXN",
        subtitle: "Espresso velouté réconfortant",
        desc: "Espresso de bien-être crémeux d'excellence, fusionnant des grains de café de haute qualité, de l'extrait de Reishi biologique actif, un moussant crémeux végétal et un soupçon de sucre fin.",
        details: "Un plaisir velouté préservant la digestion. Procure un focus prolongé et une forme constante sans palpitation ni stress, tout en facilitant le transit."
      },
      ar: {
        name: "قهوة لينجزي 3 في 1",
        subtitle: "القهوة الكريمية المخملية بالريشي",
        desc: "قهوة كريمية صحية فاخرة تجمع بين أفخر حبوب البن وخلاصة الفطر الريشي العضوي المعتمد، بتركيبة غنية تمنحك طعماً كريمياً مذهلاً وتمد الجسم بالحيوية المستدامة.",
        details: "تمنحك قواماً مخملياً كريمياً ممتعاً وسهل التحضير في ثوانٍ. خفيفة تماماً على المعدة والجهاز الهضمي وتزيل سموم الأمعاء بفضل الفطر الريشي."
      }
    }
  },
  {
    id: "spirulina",
    category: "energy",
    price: 365,
    rating: 4.9,
    reviewsCount: 156,
    image: "https://i.ibb.co/1tMCDQsD/image.png",
    images: [
      "https://i.ibb.co/1tMCDQsD/image.png",
      "https://i.ibb.co/6RYpGL0r/image.png",
      "https://i.ibb.co/xST3WmwW/image.png",
      "https://i.ibb.co/5W2nnSzN/image.png"
    ],
    isBestSeller: true,
    isMostPopular: true,
    stock: "limited",
    benefitsList: {
      en: ["Rebuilds iron & hemoglobin", "Fights chronic fatigue", "Highly alkaline superfood", "Rich in vegan protein"],
      fr: ["Reconstruit le fer & l'hémoglobine", "Lutte contre la fatigue chronique", "Superaliment hautement alcalin", "Riche en protéines végétales"],
      ar: ["يعالج فقر الدم ونقص الحديد", "يحارب التعب والإرهاق المزمن", "غذاء صحي سوبر ممتاز", "غني بالبروتينات النباتية والمعادن"]
    },
    ingredientsList: {
      en: ["100% Pure Organic Spirulina Platensis"],
      fr: ["100% Pure Spiruline Platensis d'origine biologique"],
      ar: ["مسحوق سبيرولينا بلاتينسيس عضوي نقي 100%"]
    },
    translations: {
      en: {
        name: "DXN Organic Spirulina",
        subtitle: "The Alkaline Queen of Superfoods",
        desc: "Pure nutrient-dense tablets rich in alkaline plant proteins, essential iron, beta-carotenes, B-complex vitamins, and active chlorophyll. Directly supports immune defense and deep detoxification.",
        details: "Directly harvested from pristine cultivation ponds, this pure organic spirulina delivers high cellular energy and robust blood health, perfect for combatting iron deficiencies and strengthening immunity."
      },
      fr: {
        name: "Spiruline DXN Biologique",
        subtitle: "La Reine des Superaliments",
        desc: "Comprimés de spiruline pure d'une extraordinaire densité nutritionnelle, riches en fer biodisponible, protéines végétales, chlorophylle et vitamines. Favorise l'immunité.",
        details: "Source exceptionnelle de nutriments et d'oligo-éléments. Idéale pour purifier l'organisme, lutter contre l'anémie et soutenir la récupération musculaire après l'effort."
      },
      ar: {
        name: "أقراص السبيرولينا العضوية",
        subtitle: "الملكة المغذية للأغذية الفائقة",
        desc: "أقراص السوبر فود الطبيعية الغنية بالبروتينات النباتية والحديد والفيتامينات والمعادن النادرة والكلوروفيل النشط. يغذي الخلايا، يحارب فقر الدم والإرهاق.",
        details: "أقراص السبيرولينا النقية من مزارع دي إكس إن المعزولة. غذاء صحي متكامل يرفع كفاءة الجهاز المناعي، ينشط دورتك الدموية ويعوض النقص الغذائي الحاد."
      }
    }
  },
  {
    id: "morinzhi",
    category: "immunity",
    price: 589,
    rating: 4.8,
    reviewsCount: 82,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600",
    images: ["https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600"],
    isBestSeller: true,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Regulates sleep & mood", "Powerful anti-inflammatory", "Boosts digestive health", "Rich in active enzymes"],
      fr: ["Régule le sommeil & l'humeur", "Puissant anti-inflammatoire", "Améliore la santé digestive", "Riche en enzymes actives"],
      ar: ["يساعد على تنظيم النوم والمزاج", "مضاد قوي للالتهابات والميكروبات", "يدعم صحة الجهاز الهضمي والقولون", "غني بالأنزيمات الهاضمة ومضادات الأكسدة"]
    },
    ingredientsList: {
      en: ["Fresh Morinda Citrifolia (Noni Fruit) juice", "Natural Hibiscus Sabdariffa (Roselle) extract"],
      fr: ["Pur jus de Morinda Citrifolia (fruit de Noni)", "Extrait naturel d'Hibiscus Sabdariffa (Roseille)"],
      ar: ["عصير ثمار الموريندا سيتريفوليا (النوني) الطازج", "خلاصة ثمار الكركديه (الروزيل) الطبيعية"]
    },
    translations: {
      en: {
        name: "DXN Morinzhi Juice",
        subtitle: "Nutrient-Rich Fermented Noni Elixir",
        desc: "An exceptional botanical beverage compiled from fresh Morinda citrifolia (Noni) juice and Roselle extract. Fully loaded with natural enzymes and vitamin C.",
        details: "DXN Morinzhi is a premium nutritional elixir that helps balance digestion, reduces chronic body pain and inflammation, relieves stress, and naturally regulates sleep cycles."
      },
      fr: {
        name: "Jus DXN Morinzhi",
        subtitle: "Élixir Botanique de Noni & Roselle",
        desc: "Une boisson botanique d'exception formulée à partir de jus de Noni (Morinda citrifolia) frais et enrichie en extrait de Roselle. Riche en enzymes digestives actives.",
        details: "Ce jus fermenté rééquilibre le système nerveux, apaise les douleurs articulaires, régule l'humeur et favorise une digestion saine et calme."
      },
      ar: {
        name: "عصير المورينزي الطبيعي",
        subtitle: "إكسير ثمرة النوني والكركديه الساحر",
        desc: "مشروب نباتي استثنائي مُعد من عصير ثمرة النوني (موريندا سيتريفوليا) الطازجة والمعززة بخلاصة الكركديه. كنز حقيقي للأنزيمات ومضادات الأكسدة.",
        details: "يساعد عصير المورينزي على موازنة وظائف وحيوية الجسم، يدعم راحة القولون العصبي، يحسن جودة النوم والراحة النفسية، ويعزز طرد الخلايا الهرمة والسموم."
      }
    }
  },
  {
    id: "gano-oil",
    category: "oils",
    price: 210,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://i.ibb.co/RTS5Pkc3/image.png",
    images: [
      "https://i.ibb.co/RTS5Pkc3/image.png",
      "https://i.ibb.co/DH0XFf7g/image.png",
      "https://i.ibb.co/MkRKM7n3/image.png",
      "https://i.ibb.co/whXBr2Md/image.png"
    ],
    isBestSeller: true,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Relieves muscle soreness", "Deep skin moisturization", "Rich in natural antioxidants", "Ideal for medical massage"],
      fr: ["Soulage les douleurs musculaires", "Hydratation profonde cutanée", "Riche en antioxydants naturels", "Idéal pour le massage médical"],
      ar: ["يخفف آلام المفاصل وتشنج العضلات", "يرطب البشرة ترطيباً عميقاً", "غني بمضادات الأكسدة والفيتامينات", "ممتاز للمساج الطبي والتدليك المريح"]
    },
    ingredientsList: {
      en: ["Premium Palm Kernel Oil", "Bio-active Ganoderma extract"],
      fr: ["Huile de germe de palmier de qualité supérieure", "Extrait de Ganoderma biologique actif"],
      ar: ["زيت بذور النخيل النقي الفاخر", "خلاصة فطر الجانوديرما (الريشي) النشط"]
    },
    translations: {
      en: {
        name: "DXN Gano Massage Oil",
        subtitle: "Reishi Infused Muscle Healing Elixir",
        desc: "Premium wellness and body care massage oil enriched with premium quality Ganoderma extract and palm kernel oil. Specially crafted to provide a pleasant and completely relaxing body experience.",
        details: "This botanical massage oil deeply penetrates the skin tissue to relieve pain, repair dry skin, relax stiff muscles after workout, and offer spa-grade body recovery."
      },
      fr: {
        name: "Huile de Massage Gano DXN",
        subtitle: "Huile Divine au Ganoderma",
        desc: "Huile de massage haut de gamme et de bien-être corporel enrichie en extrait de Ganoderma d'origine biologique et huile de germe de palmier.",
        details: "Idéale pour apaiser les muscles fatigués, calmer les tensions articulaires et hydrater en profondeur sans laisser de film collant désagréable."
      },
      ar: {
        name: "زيت جانو للمساج",
        subtitle: "زيت المساج الطبي المعالج بالريشي",
        desc: "زيت مساج فاخر ولطيف ومغذي مخصص للعناية الشاملة بالجسم، غني بخلاصة فطر الجانوديرما (الريشي) وزيت بذور النخيل الطبيعي لتليين وتخفيف تشنجات العضلات.",
        details: "يجمع بين قوة الفطر الريشي ومميزات زيت بذور النخيل. يمتصه الجلد بسرعة ويوفر راحة فورية من آلام المفاصل، الظهر، وتعب اليوم المتراكم."
      }
    }
  },
  {
    id: "cocozhi",
    category: "coffee",
    price: 387,
    rating: 4.9,
    reviewsCount: 112,
    image: "https://i.ibb.co/0pJcbcjS/image.png",
    images: [
      "https://i.ibb.co/0pJcbcjS/image.png",
      "https://i.ibb.co/qMkCJZn9/image.png",
      "https://i.ibb.co/JWfzWpF8/image.png",
      "https://i.ibb.co/Kcsqvv7D/image.png"
    ],
    isBestSeller: true,
    isMostPopular: true,
    stock: "limited",
    benefitsList: {
      en: ["Aids memory & cognitive development", "High energy without caffeine", "Alkaline digestion friendly", "Rich in minerals & antioxidants"],
      fr: ["Soutient la mémoire & le cerveau", "Grande énergie sans caféine", "Parfait pour la digestion alcaline", "Riche en minéraux & antioxydants"],
      ar: ["يغذي خلايا الدماغ ويزيد التركيز للأطفال", "يمد الجسم بطاقة عالية دون كافيين", "سهل الهضم ولطيف على الأمعاء", "غني بالمعادن النادرة ومضادات الأكسدة"]
    },
    ingredientsList: {
      en: ["Premium Dutch Cocoa Powder", "Organic Ganoderma Mycelium extract", "Skimmed milk powder", "Natural cane sugar"],
      fr: ["Poudre de cacao hollandais fin", "Extrait de mycélium de Ganoderma biologique", "Poudre de lait écrémé", "Sucre de canne naturel"],
      ar: ["مسحوق كاكاو هولندي فاخر", "خلاصة فطر الجانوديرما (جنين الريشي)", "حليب مجفف خالي من الدسم", "سكر قصب طبيعي"]
    },
    translations: {
      en: {
        name: "DXN Cocozhi Cocoa",
        subtitle: "Premium Reishi-Fortified Hot Chocolate",
        desc: "A premium luxury organic cocoa beverage fortified with active Ganoderma mycelium extract. Delightful, creamy chocolate taste packed with micro-nutrients.",
        details: "Cocozhi offers both excellent taste and biological nutrition. Since it is enriched with Ganoderma mycelium, it supports children's memory, bone growth, digestion, and fills them with vibrant active focus."
      },
      fr: {
        name: "DXN Cocozhi Chocolat",
        subtitle: "Cacao Royal au Mycélium de Reishi",
        desc: "Une boisson chocolatée haut de gamme formulée avec le meilleur cacao hollandais et enrichie en extrait de mycélium de Ganoderma. Onctueuse et ultra-nutritive.",
        details: "Parfait pour les enfants et toute la famille. Il stimule la concentration intellectuelle, fortifie les os et soutient un métabolisme énergétique sain au quotidien."
      },
      ar: {
        name: "كاكاو كوكوزي الصحي",
        subtitle: "مشروب الشوكولاتة الساخنة الفاخرة بالريشي",
        desc: "مشروب شوكولاتة صحي ولذيذ للغاية، مُعد من أفخر أنواع الكاكاو الطبيعي المدعم بخلاصة فطر الجانوديرما (جنين الريشي) الغني بالمعادن.",
        details: "يعد كوكوزي المشروب المفضل للأطفال والطلاب. يغذي خلايا الدماغ والذاكرة، يفتح الشهية بشكل صحي، ويقوي العظام والأسنان وخلايا المناعة بلطف."
      }
    }
  },
  {
    id: "toothpaste",
    category: "personal",
    price: 156,
    rating: 4.8,
    reviewsCount: 142,
    image: "https://i.ibb.co/zHxTHyjQ/image.png",
    images: [
      "https://i.ibb.co/zHxTHyjQ/image.png",
      "https://i.ibb.co/2YY8kMnq/image.png",
      "https://i.ibb.co/pBTWdD0c/image.png",
      "https://i.ibb.co/999Whvws/image.png",
      "https://i.ibb.co/7JRJmrp2/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Fluoride-free botanical defense", "Soothes bleeding gums", "Fights bad breath completely", "Zero artificial colorings or silica"],
      fr: ["Formule botanique sans fluor", "Apaise le saignement des gencives", "Combat l'haleine lourde", "Sans silice abrasive ni colorants"],
      ar: ["تركيبة عشبية خالية من الفلورايد", "يهدئ ويقوي اللثة النازفة والمتهيجة", "يحارب رائحة الفم الكريهة بفعالية", "خالٍ تماماً من السيليكا المخرشة والألوان"]
    },
    ingredientsList: {
      en: ["Premium Ganoderma extract", "Food-grade Spearmint Oil", "Dicalcium Phosphate"],
      fr: ["Extrait de Ganoderma de haute pureté", "Huile essentielle de menthe douce alimentaire", "Phosphate bicalcique doux"],
      ar: ["خلاصة فطر الجانوديرما الفاخر", "زيت النعناع الطبيعي النقي", "فوسفات ثنائي الكالسيوم اللطيف"]
    },
    translations: {
      en: {
        name: "DXN Ganozhi Plus Toothpaste",
        subtitle: "Fluoride-Free Organic Oral Care",
        desc: "Premium natural toothpaste enriched with Ganoderma (Reishi) extract and food-grade spearmint oil. Offers delicate gum protection and superb cavity defense.",
        details: "Cleanses teeth safely without scraping enamel. Infused with Reishi, it helps heal ulcers, stops gums from bleeding, and delivers exceptionally fresh breath."
      },
      fr: {
        name: "Dentifrice DXN Ganozhi Plus",
        subtitle: "Soin Bucco-Dentaire Botanique de Luxe",
        desc: "Dentifrice naturel de qualité supérieure enrichi en extrait de Ganoderma (Reishi) et menthe douce de qualité alimentaire. Sans fluor ni silice abrasive.",
        details: "Nettoie en douceur tout en renforçant l'émail et en apaisant les irritations des gencives. Laisse une fraîcheur mentholée très agréable et saine."
      },
      ar: {
        name: "معجون أسنان جانوزي بلس",
        subtitle: "المعجون العشبي الصحي الخالي من الفلورايد",
        desc: "معجون أسنان طبيعي فاخر وغني بخلاصة فطر الجانوديرما (الريشي) وزيت النعناع الطبيعي. ينظف الأسنان واللثة بلطف، ويكافح التسوس والروائح.",
        details: "ينظف الأسنان واللثة بأمان ودون خدش المينا. يحتوي على الريشي لتطهير الفم، تقوية اللثة الضعيفة وعلاج قرح الفم المزعجة."
      }
    }
  },
  {
    id: "shampoo",
    category: "personal",
    price: 221,
    rating: 4.7,
    reviewsCount: 64,
    image: "https://i.ibb.co/q3q1fsms/image.png",
    images: [
      "https://i.ibb.co/q3q1fsms/image.png",
      "https://i.ibb.co/8gMwRhcd/image.png",
      "https://i.ibb.co/9HV6xxVR/image.png",
      "https://i.ibb.co/60PFgQDh/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Reduces severe hair fall", "Eliminates scalp itching & dandruff", "Balances natural sebum oils", "Deeply nourishes hair roots"],
      fr: ["Réduit la chute sévère des cheveux", "Élimine les pellicules & démangeaisons", "Équilibre le sébum naturel", "Nourrit intensément les racines"],
      ar: ["يقلل تساقط الشعر بشكل ملحوظ", "يقضي على القشرة والحكة تماماً", "يوازن إفراز الدهون الطبيعية بالرأس", "يغذي بصيلات الشعر من الأعماق"]
    },
    ingredientsList: {
      en: ["Organic Ganoderma Lucidum extract", "Pro-Vitamin B5 (Panthenol)", "Mild pH-balanced cleansing bases"],
      fr: ["Extrait de Ganoderma Lucidum bio", "Pro-Vitamine B5 (Panthénol)", "Bases lavantes douces à pH neutre"],
      ar: ["خلاصة فطر الجانوديرما العضوي", "برو-فيتامين B5 المغذي", "مواد غسيل لطيفة متوازنة الحموضة"]
    },
    translations: {
      en: {
        name: "DXN Ganozhi Shampoo",
        subtitle: "Botanical Hair & Scalp Rejuvenator",
        desc: "Premium wellness shampoo enriched with Ganoderma (Reishi) extract and Pro-Vitamin B5. It gently cleanses while preserving natural oils.",
        details: "Ganozhi Shampoo improves hair texture and elasticity. Designed with a scalp-friendly neutral pH, it gets rid of persistent dandruff, locks in moisture, and stimulates healthy hair growth."
      },
      fr: {
        name: "Shampoing DXN Ganozhi",
        subtitle: "Soin Capillaire Régénérant au Reishi",
        desc: "Shampoing de bien-être d'exception enrichi à l'extrait pur de Ganoderma (Reishi) et Pro-Vitamine B5. Lave en douceur tout en respectant l'hydratation.",
        details: "Restaure la vitalité des cheveux fatigués, secs ou abîmés. Calme les irritations du cuir chevelu et prévient efficacement l'apparition des pellicules."
      },
      ar: {
        name: "شامبو جانوزي الفاخر",
        subtitle: "الشامبو الطبيعي المغذي للشعر وفروة الرأس",
        desc: "شامبو العناية الفاخرة المعتدل بالحموضة لجميع أنواع الشعر. غني بخلاصة فطر الجانوديرما (الريشي) وبرو-فيتامين B5 لتقوية البصيلات.",
        details: "ينظف بلطف ويحمي الشعر من التقصف والتساقط. تركيبته متوازنة تحافظ على رطوبة الشعر وتطهر فروة الرأس من الخلايا الميتة والقشرة."
      }
    }
  },
  {
    id: "soap",
    category: "personal",
    price: 73,
    rating: 4.8,
    reviewsCount: 118,
    image: "https://i.ibb.co/TCQmWf0/image.png",
    images: [
      "https://i.ibb.co/TCQmWf0/image.png",
      "https://i.ibb.co/9kZBjDKn/image.png",
      "https://i.ibb.co/wFcy8xDk/image.png",
      "https://i.ibb.co/QvwnJrK9/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Cleanses without stripping moisture", "Reduces acne & skin irritation", "Gentle for sensitive baby skin", "Velvety botanical lather"],
      fr: ["Nettoie sans dessécher la peau", "Réduit l'acné & les irritations", "Idéal pour la peau sensible des bébés", "Mousse veloutée et botanique"],
      ar: ["ينظف البشرة بلطف دون تجفيفها", "يخفف حب الشباب والحساسية الجلدية", "آمن ولطيف جداً لبشرة الأطفال والرضع", "رغوة مخملية عشبية مغذية"]
    },
    ingredientsList: {
      en: ["Organic Ganoderma extract", "Natural Palm oil derivatives", "Vitamin E (Tocopherol)"],
      fr: ["Extrait pur de Ganoderma biologique", "Dérivés d'huile de palme naturelle", "Vitamine E (Tocophérol)"],
      ar: ["خلاصة فطر الجانوديرما العضوي", "مشتقات زيت النخيل الطبيعي المغذي", "فيتامين هـ (مضاد أكسدة طبيعي)"]
    },
    translations: {
      en: {
        name: "DXN Ganozhi Soap",
        subtitle: "Pure Reishi Skin Nourishing Soap",
        desc: "A premium luxury skincare and body purification bar carefully crafted with high-grade organic Ganoderma (Reishi) extract, palm oil, and vitamin E.",
        details: "Specially formulated to clean, moisturize, and protect your skin. Helps prevent skin allergies, lightens dark blemishes, and restores skin suppleness with daily use."
      },
      fr: {
        name: "Savon DXN Ganozhi",
        subtitle: "Pain de Beauté Purifiant",
        desc: "Un savon de prestige formulé à base d'extrait de Ganoderma (Reishi) et enrichi en vitamine E naturelle. Lave en douceur le visage et le corps.",
        details: "Maintient l'élasticité naturelle de la peau et régule l'excès de sébum. Recommandé pour apaiser l'eczéma, l'acné et purifier les peaux sensibles."
      },
      ar: {
        name: "صابون جانوزي الفاخر",
        subtitle: "صابون العناية بالبشرة وحمايتها بالريشي",
        desc: "صابون طبيعي صحي بالكامل، يحتوي على خلاصة فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي لتنظيف وتطهير الوجه برفق.",
        details: "ينظف خلايا الجلد بفعالية ويحارب البكتيريا المسببة لحب الشباب والتهيج. يترك بشرتك ناعمة ورطبة برغوة غنية تغنيك عن الكيماويات."
      }
    }
  },
  {
    id: "cordyceps",
    category: "energy",
    price: 869,
    rating: 4.9,
    reviewsCount: 54,
    image: "https://i.ibb.co/WvmsYWBV/image.png",
    images: [
      "https://i.ibb.co/WvmsYWBV/image.png",
      "https://i.ibb.co/tMGLmL7w/image.png",
      "https://i.ibb.co/PshnjLNw/image.png",
      "https://i.ibb.co/zhHtpfhm/image.png",
      "https://i.ibb.co/PsXZKXTv/image.png",
      "https://i.ibb.co/9mr18vVk/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "very-limited",
    benefitsList: {
      en: ["Skyrockets stamina & oxygenation", "Enhances lung & kidney functions", "Boosts libido & cellular ATP", "Anti-aging cellular protection"],
      fr: ["Booste l'endurance & l'oxygène", "Soutient les poumons & les reins", "Améliore la libido & l'ATP", "Protection cellulaire anti-âge"],
      ar: ["يرفع مستويات التحمل والأكسجين الخلوي", "يدعم وظائف الرئة والكلى والصدر", "يعزز القدرة الحيوية والنشاط البدني", "يحمي خلايا الجسم من الشيخوخة والتلف"]
    },
    ingredientsList: {
      en: ["100% Pure Organic Cordyceps Sinensis extract"],
      fr: ["100% Extrait de Cordyceps Sinensis d'origine biologique"],
      ar: ["مسحوق فطر الكورديسبس سينينسيس العضوي النقي 100%"]
    },
    translations: {
      en: {
        name: "DXN Cordyceps",
        subtitle: "The Ultimate Emperor of Vitality",
        desc: "Premium organic Cordyceps sinensis capsules. A highly prized adaptogenic mushroom that drastically elevates lung capacity, physical performance, and organic stamina.",
        details: "Particularly beneficial for athletes and people experiencing chronic fatigue. Cordyceps optimizes oxygen utilization in cells, helps clear breathing pathways, and naturally boosts metabolic ATP energy."
      },
      fr: {
        name: "Cordyceps DXN",
        subtitle: "L'Empereur de l'Énergie",
        desc: "Complément de Cordyceps Sinensis de première qualité. Champignon adaptogène légendaire qui augmente la capacité respiratoire, l'endurance et l'énergie physique.",
        details: "Idéal pour les sportifs et les personnes souffrant d'épuisement. Il améliore l'oxygénation des cellules, soutient le système rénal et renforce la libido naturellement."
      },
      ar: {
        name: "فطر الكورديسبس الفاخر",
        subtitle: "إمبراطور الطاقة والتحمل والنشاط",
        desc: "مكمل غذائي ممتاز مستخلص بنسبة 100% من فطر الكورديسبس النادر والشهير علمياً بقدرته الفائقة على تزويد الخلايا بالأكسجين وزيادة الطاقة.",
        details: "الغذاء المثالي للرياضيين والذين يبحثون عن قوة بدنية عالية. ينشط الدورة الدموية، يوسع مجاري التنفس والرئتين، ويزيد من إنتاج طاقة الـ ATP العضوية."
      }
    }
  },
  {
    id: "lions-mane",
    category: "energy",
    price: 518,
    rating: 4.8,
    reviewsCount: 46,
    image: "https://i.ibb.co/RkVr3NMs/image.png",
    images: [
      "https://i.ibb.co/RkVr3NMs/image.png",
      "https://i.ibb.co/MxH10dqh/image.png",
      "https://i.ibb.co/4R3DBgRg/image.png",
      "https://i.ibb.co/6CW7jXg/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Supports brain & nerve health", "Enhances memory & focus", "Heals digestive & gastric tract", "Stimulates Nerve Growth Factor (NGF)"],
      fr: ["Soutient les nerfs & le cerveau", "Améliore la mémoire & la concentration", "Régénère la muqueuse de l'estomac", "Stimule le facteur de croissance nerveuse (NGF)"],
      ar: ["يدعم صحة الأعصاب والدماغ", "يقوي الذاكرة والتركيز الذهني بشكل ملحوظ", "يساعد على ترميم جدار المعدة والأمعاء", "يحفز عامل نمو الخلايا العصبية (NGF)"]
    },
    ingredientsList: {
      en: ["Premium Lion's Mane (Hericium Erinaceus) mycelium extract"],
      fr: ["Extrait pur de mycélium d'Hericium Erinaceus (Crinière de Lion)"],
      ar: ["خلاصة فطر عرف الأسد (هيريسيوم إريناسيوس) النقي 100%"]
    },
    translations: {
      en: {
        name: "DXN Lion's Mane",
        subtitle: "The Mastermind Nootropic",
        desc: "High-grade organic Hericium erinaceus tablets. Famous for restoring brain neuro-connections, enhancing mental focus, and healing gastric linings.",
        details: "Commonly used as a natural cognitive enhancer. It supports digestive stomach health, provides clear memory retention, and regenerates neurological paths by stimulating NGF production."
      },
      fr: {
        name: "Crinière de Lion DXN",
        subtitle: "Le Nootropique Cérébral Naturel",
        desc: "Comprimés d'Hericium Erinaceus d'une pureté exceptionnelle. Réputé pour régénérer le système nerveux, accroître le focus mental et soulager l'estomac.",
        details: "Le partenaire idéal des étudiants et professionnels exigeants. Il favorise la concentration, protège la mémoire et aide à réparer la barrière intestinale fatiguée."
      },
      ar: {
        name: "فطر عرف الأسد العضوي",
        subtitle: "الغذاء الذهبي للأعصاب والذاكرة الهادئة",
        desc: "أقراص فطر عرف الأسد (Hericium) العضوي النقي الموصى به عالمياً لدعم وتغذية الخلايا العصبية والجهاز الهضمي والمعدة.",
        details: "يعد نوتروبيك طبيعي ممتاز للطلاب وكبار السن. يرمم جدران المعدة الملتهبة، يقوي التركيز الذهني وسرعة الحفظ، ويحمي الأعصاب من التلف والتوتر."
      }
    }
  },
  {
    id: "limonzhi",
    category: "coffee",
    price: 219,
    rating: 4.8,
    reviewsCount: 52,
    image: "https://i.ibb.co/pj1nyzM6/image.png",
    images: [
      "https://i.ibb.co/pj1nyzM6/image.png",
      "https://i.ibb.co/3y3fr6n7/image.png",
      "https://i.ibb.co/bZpcFkx/lemonzhi-sachet.jpg"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Immune system optimization", "Rich in Vitamin C & bioflavonoids", "Promotes gut health & digestion", "Extremely refreshing cold or hot"],
      fr: ["Optimisation de l'immunité", "Riche en Vitamine C & bioflavonoïdes", "Soutient la santé digestive", "Rafraîchissant chaud ou froid"],
      ar: ["تقوية الجهاز المناعي والدفاعات", "غني بفيتامين ج ومضادات الأكسدة", "يدعم الهضم السليم والراحة المعوية", "منعش ومنشط للغاية بارداً أو ساخناً"]
    },
    ingredientsList: {
      en: ["Natural Lemon Fruit Powder", "Premium Black Tea Extract", "Pure Ganoderma Lucidum extract", "Natural sugar cane"],
      fr: ["Poudre de citron naturel", "Extrait de thé noir fin", "Extrait de Ganoderma Lucidum biologique", "Sucre de canne naturel"],
      ar: ["مسحوق ليمون طبيعي طازج", "مستخلص الشاي الأسود الفاخر", "مستخلص فطر الريشي العضوي المعتمد", "سكر قصب طبيعي"]
    },
    translations: {
      en: {
        name: "DXN Limonzhi",
        subtitle: "Gourmet Reishi Lemon Tea Elixir",
        desc: "A luxury refreshing lemon-flavored beverage crafted with organic whole lemon extract, high-grade tea, and fortified with organic Ganoderma (Reishi) extract.",
        details: "Limonzhi combines natural vitamin C with adaptogenic Reishi. A magnificent alkaline replacement for chemical sodas, offering clear hydration, mental brightness, and liver-friendly detox."
      },
      fr: {
        name: "DXN Limonzhi",
        subtitle: "Thé Glacé Royal au Citron & Reishi",
        desc: "Une boisson rafraîchissante haut de gamme élaborée avec de véritables citrons, du thé noir d'excellence et enrichie au Ganoderma (Reishi) biologique.",
        details: "Une alternative saine aux sodas chimiques. Apporte une vague de fraîcheur, purifie le foie, stimule l'immunité et facilite la digestion après les repas."
      },
      ar: {
        name: "مشروب ليمونزي الصحي",
        subtitle: "الشاي الملكي بالليمون والفطر الريشي",
        desc: "مشروب طبيعي منعش وفاخر يمزج بلطف بين حامض الليمون الطبيعي والشاي اللذيذ ومستخلص فطر الجانوديرما (الريشي) العضوي لدعم مناعتك.",
        details: "بديل صحي معتمد ومحبوب جداً للأطفال والعائلة في الصيف والشتاء. يزود جسمك بفيتامين ج والريشي الممتص للمحافظة على النشاط الدائم."
      }
    }
  },
  {
    id: "reishilium",
    category: "immunity",
    price: 401,
    rating: 4.8,
    reviewsCount: 38,
    image: "https://i.ibb.co/LhsPdhTv/image.png",
    images: [
      "https://i.ibb.co/LhsPdhTv/image.png",
      "https://i.ibb.co/8Ldhf3Yy/image.png",
      "https://i.ibb.co/F4ZCjQNR/image.png",
      "https://i.ibb.co/PZMWLpRv/image.png"
    ],
    isBestSeller: false,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Highest immune shield protection", "Cellular oxygenation optimization", "Combats body acidity & toxin overload", "Deep nerve and sleep stabilizer"],
      fr: ["Bouclier immunitaire maximal", "Oxygénation cellulaire parfaite", "Lutte contre l'acidité & les toxines", "Stabilisateur de sommeil & des nerfs"],
      ar: ["أقوى درع طبيعي لتقوية المناعة", "تحسين مستوى الأكسجين في خلايا الجسم", "محاربة حموضة الدم والسموم المتراكمة", "مهدئ عميق للأعصاب ومنظم طبيعي للنوم"]
    },
    ingredientsList: {
      en: ["100% Pure Ganoderma Lucidum spore powder"],
      fr: ["100% Pure poudre de spores de Ganoderma Lucidum"],
      ar: ["مسحوق جراثيم فطر الجانوديرما العضوي النقي 100%"]
    },
    translations: {
      en: {
        name: "DXN Reishilium Powder",
        subtitle: "The Pure Essence of Organic Reishi",
        desc: "A premium carefully formulated pure Reishi spore powder designed for individuals seeking ultimate wellness and immune reinforcement.",
        details: "Reishilium powder contains the most active components of Ganoderma, including high densities of polysaccharides and organic germanium, providing powerful cell defense, deep detoxification, and cardiovascular support."
      },
      fr: {
        name: "DXN Reishilium Poudre",
        subtitle: "L'Essence Pure de Spores de Reishi",
        desc: "Une formule nutritionnelle d'exception composée à 100% de spores de Ganoderma de première pureté, pour une vitalité naturelle supérieure.",
        details: "Le summum de la supplémentation DXN. Il combat efficacement le vieillissement prématuré, draine les toxines lourdes du foie, soutient le système circulatoire et stabilise l'organisme."
      },
      ar: {
        name: "مسحوق ريشيليوم الفاخر",
        subtitle: "خلاصة جراثيم الفطر الريشي النقي العضوي",
        desc: "تركيبة نباتية ممتازة تجمع أنقى جراثيم خلاصة فطر الريشي لتقدم لك تجربة علاجية قوية تدعم صحة الجسم وأعضائه الحيوية.",
        details: "يحتوي ريشيليوم على أعلى تركيز لمركبات الجانوديرما الطبية النشطة. يطرد السموم المعاد تدويرها، يقوي الكبد والكلى والقلب، ويهدئ الأعصاب المتعبة."
      }
    }
  },
  {
    id: "reishi_gano",
    category: "immunity",
    price: 706,
    rating: 4.9,
    reviewsCount: 112,
    image: "https://i.ibb.co/j9vb2YGq/image.png",
    images: [
      "https://i.ibb.co/j9vb2YGq/image.png",
      "https://i.ibb.co/ycFbP2pz/image.png",
      "https://i.ibb.co/jdx5mcV/image.png"
    ],
    isBestSeller: true,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Deep cellular detoxification", "Regulates metabolic systems and blood pressure", "Boosts cardiovascular health & liver cells", "Anti-inflammatory and premium cell protection"],
      fr: ["Détoxification cellulaire profonde", "Régule le métabolisme et la tension", "Soutient la santé cardiovasculaire et hépatique", "Action anti-inflammatoire et bouclier anti-âge"],
      ar: ["تطهير وطرد السموم العميقة من الخلايا", "موازنة وتنشيط نظام التمثيل الغذائي والضغط", "دعم صحة الكبد والقلب والأوعية الدموية", "مضاد قوي للالتهابات ومحاربة شيخوخة الخلايا"]
    },
    ingredientsList: {
      en: ["100% Pure Ganoderma Lucidum (RG) extract"],
      fr: ["100% Extrait de Ganoderma Lucidum mûr (RG)"],
      ar: ["مستخلص فطر الجانوديرما الأحمر البالغ النقي (RG) بنسبة 100%"]
    },
    translations: {
      en: {
        name: "DXN Reishi Gano (RG) Capsules",
        subtitle: "The Ultimate Detoxifier & System Balancer",
        desc: "Premium organic Ganoderma Lucidum (RG) capsules containing 90-day adult Red Reishi. Formulated to deeply cleanse cells and harmonize bodily functions.",
        details: "Reishi Gano (RG) is harvested from premium 90-day mature red mushrooms. Rich in triterpenes, adenosine, and polysaccharides, it is designed for deep organic cleansing, restoring equilibrium, and improving blood circulation."
      },
      fr: {
        name: "DXN Reishi Gano (RG) Gélules",
        subtitle: "L'Élixir Détoxifiant et Rééquilibrant Absolu",
        desc: "Gélules d'exception issues de Ganoderma Lucidum mature à 90 jours (RG). Élimine les impuretés accumulées et harmonise les fonctions du corps.",
        details: "Le Reishi Gano (RG) est formulé à partir du corps fructifère mature du champignon rouge. Riche en triterpènes et polysaccharides, il purifie l'organisme, améliore la circulation sanguine et renforce la résilience face au stress."
      },
      ar: {
        name: "كبسولات فطر ريشي جانو (RG)",
        subtitle: "المطهر الأقوى والموازن الشامل لوظائف الجسم",
        desc: "كبسولات فطر الريشي جانو (RG) العضوية الفاخرة المستخلصة من الفطر الأحمر البالغ بعمر 90 يوماً لتطهير الخلايا ودعم حيوية الأعضاء.",
        details: "يتم إنتاج فطر ريشي جانو (RG) من ثمرة فطر ريشي حمراء بالغة نضجت طوال 90 يوماً. يحتوي على تركيز عالٍ من التريتربينات والبوليسيكاريدات والعديد من العناصر النشطة التي تقوم بالتنظيف العميق للجسم، تنشيط الدورة الدموية، وموازنة جميع الوظائف الحيوية."
      }
    }
  },
  {
    id: "tea-tree",
    category: "skincare",
    price: 144,
    rating: 4.8,
    reviewsCount: 71,
    image: "https://i.ibb.co/Ps3Z8s2H/image.png",
    images: ["https://i.ibb.co/Ps3Z8s2H/image.png", "https://i.ibb.co/cc1NTVpM/image.png", "https://i.ibb.co/rgv8Rsw/image.png", "https://i.ibb.co/bxZ7QGY/image.png"],
    isBestSeller: false,
    isMostPopular: false,
    stock: "high",
    benefitsList: {
      en: ["Clears acne & blackheads", "Soothes skin itching & eczema", "Safe natural antiseptic", "Accelerates skin healing"],
      fr: ["Élimine l'acné & les points noirs", "Calme l'eczéma & démangeaisons", "Antiseptique naturel doux", "Accélère la cicatrisation"],
      ar: ["يقضي على حب الشباب والرؤوس السوداء", "يهدئ الحكة والصدفية والإكزيما", "مضاد حيوي ومطهر طبيعي آمن", "يسرع التئام الجروح والندبات"]
    },
    ingredientsList: {
      en: ["Pure Australian Tea Tree Oil extract", "Natural moisturizing cream bases"],
      fr: ["Extrait pur d'huile d'arbre à thé australien", "Base hydratante naturelle hypoallergénique"],
      ar: ["زيت شجرة الشاي الأسترالي النقي الطبيعي", "قاعدة كريم مرطبة وملطفة للبشرة"]
    },
    translations: {
      en: {
        name: "DXN Tea Tree Cream",
        subtitle: "Luxury Antiseptic Healing Balm",
        desc: "Premium organic skin soothing cream containing high-purity Australian Tea tree oil. Strongly recommended for acne-prone, oily, or irritated skin.",
        details: "This botanical cream quickly absorbs to reduce redness, heal skin cuts or insect bites, treat fungal infections, and regulate facial oils for a clean skin texture."
      },
      fr: {
        name: "Crème Arbre à Thé DXN",
        subtitle: "Baume Cicatrisant & Protecteur",
        desc: "Crème d'arbre à thé de qualité pharmaceutique. Un soin apaisant de choix pour réguler l'acné, calmer les piqûres et traiter les irritations cutanées.",
        details: "Grâce aux propriétés antiseptiques naturelles de l'arbre à thé, elle assainit la peau grasse, combat les rougeurs et accélère la réparation cutanée en douceur."
      },
      ar: {
        name: "كريم شجرة الشاي الطبيعي",
        subtitle: "كريم المطهر الطبيعي ومعالج عيوب البشرة",
        desc: "كريم صحي ومرطب نباتي يحتوي على زيت شجرة الشاي الأسترالي النقي والمطهر الفعال للبشرة لمكافحة البثور والالتهابات.",
        details: "يعد كريم شجرة الشاي الإسعاف الأول في منزلك. يمتص الحروق الطفيفة، يهدئ لدغات الحشرات، ينشف البثور الجلدية، ويهدئ الصدفية والحساسية."
      }
    }
  },
  {
    id: "pack-energy",
    category: "packs",
    price: 310,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600",
    images: ["https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600"],
    isBestSeller: true,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Coffee + Spirulina bundle", "Supercharged physical stamina", "Instant brain focus & stamina", "Save 10 MAD on order"],
      fr: ["Pack Café + Spiruline", "Endurance physique multipliée", "Focus mental instantané et stable", "Économisez 10 MAD sur ce pack"],
      ar: ["عرض القهوة السوداء + السبيرولينا", "نشاط بدني خارق طوال اليوم", "تركيز وذاكرة قوية دون تعب", "توفير مالي وتوصيل مجاني"]
    },
    ingredientsList: {
      en: ["DXN Lingzhi Black Coffee (20 Sachets)", "DXN Pure Spirulina (120 Tablets)"],
      fr: ["Café Noir DXN Lingzhi (20 Sachets)", "Spiruline DXN Pure (120 Comprimés)"],
      ar: ["قهوة لينجزي السوداء (عبوة 20 كيس)", "أقراص السبيرولينا العضوية (120 حبة)"]
    },
    translations: {
      en: {
        name: "Pack Energy Vitality",
        subtitle: "The Ultimate Athlete & Focus Bundle",
        desc: "Combine the alkalizing energy of Lingzhi Gourmet Coffee with the high-protein nutritional density of Organic Spirulina. The gold standard for ultimate stamina.",
        details: "Specifically designed for active people, workers, and students who need stable, jitter-free energy and brain clarity from dawn to dusk."
      },
      fr: {
        name: "Pack Énergie & Vitalité",
        subtitle: "Le Combo Gagnant Tonus & Focus",
        desc: "Fusionnez l'énergie alcaline du Café Lingzhi avec la puissance protéinée de la Spiruline Bio. Votre bouclier quotidien contre les baisses de régime.",
        details: "Recommandé pour les personnes actives et les sportifs. Ce pack nourrit les cellules, élimine la sensation de fatigue et renforce les réserves de fer."
      },
      ar: {
        name: "باقة النشاط والطاقة",
        subtitle: "مزيج القهوة السوداء مع السبيرولينا لعلاج الإرهاق",
        desc: "اجمع بين طاقة قهوة لينجزي السوداء العالية والتركيبة المغذية لأقراص السبيرولينا. الباقة الذهبية لتعزيز الحديد والنشاط البدني.",
        details: "صُممت هذه الباقة خصيصاً للذين يعانون من الخمول، السخفة أو نقص الحديد. يعطيك قهوة صباحية منعشة وتغذية خلوية متكاملة تضمن يوم حاد وناشط."
      }
    }
  },
  {
    id: "pack-immunity",
    category: "packs",
    price: 365,
    originalPrice: 385,
    rating: 5.0,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1616671285424-918f02018947?q=80&w=600",
    images: ["https://images.unsplash.com/photo-1616671285424-918f02018947?q=80&w=600"],
    isBestSeller: true,
    isMostPopular: true,
    stock: "limited",
    benefitsList: {
      en: ["Morinzhi Juice + Spirulina", "Deep blood purification", "Immune defense booster", "Save 20 MAD + Free Shipping"],
      fr: ["Pack Jus Morinzhi + Spiruline", "Purification profonde du sang", "Renforcement maximal des défenses", "Économisez 20 MAD + Livraison"],
      ar: ["عرض عصير المورينزي + أقراص السبيرولينا", "تنقية عميقة جداً للدم والأمعاء", "تقوية جدار المناعة لمقاومة الأمراض", "توفير 20 درهم + شحن مجاني للمنزل"]
    },
    ingredientsList: {
      en: ["DXN Morinzhi Noni Juice (285ml)", "DXN Pure Spirulina (120 Tablets)"],
      fr: ["Jus de Noni DXN Morinzhi (285ml)", "Spiruline DXN Pure (120 Comprimés)"],
      ar: ["عصير المورينزي ثمرة النوني (285 مل)", "أقراص السبيرولينا العضوية (120 حبة)"]
    },
    translations: {
      en: {
        name: "Pack Immunity Shield",
        subtitle: "The Ultimate Alkaline Cellular Armor",
        desc: "The synergy of active enzymes in fermented Noni (Morinzhi) paired with organic vitamins and chlorophyll of Spirulina. Rebuilds immune response completely.",
        details: "Perfect for cellular detoxification, correcting vitamins deficiencies, improving digestion, soothing nerve inflammation, and revitalizing skin glowing health."
      },
      fr: {
        name: "Pack Bouclier Immunitaire",
        subtitle: "Synergie Cellulaire Reine",
        desc: "La synergie des enzymes actives du Noni fermenté (Morinzhi) associée à la chlorophylle et au fer de la Spiruline. Reconstruit les défenses de l'organisme.",
        details: "Idéal pour une détoxification en profondeur, combler les carences nutritionnelles récurrentes, faciliter la digestion et apaiser le stress nerveux."
      },
      ar: {
        name: "باقة درع المناعة الفائق",
        subtitle: "أقوى حماية وتطهير للدم والأمعاء",
        desc: "مزيج غني بالأنزيمات النشطة لثمرة النوني المخمرة (المورينزي) والحديد العضوي والبروتينات للسبيرولينا. يبني حصانة الجسم الطبيعية.",
        details: "الخيار الأمثل لتنقية الكبد والدم، موازنة بكتيريا الأمعاء النافعة، علاج فقر الدم الحاد، وتحسين مستويات التنفس والراحة البدنية اليومية."
      }
    }
  },
  {
    id: "pack-wellness",
    category: "packs",
    price: 410,
    originalPrice: 445,
    rating: 4.9,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1616671278518-e32514101cc2?q=80&w=600",
    images: ["https://images.unsplash.com/photo-1616671278518-e32514101cc2?q=80&w=600"],
    isBestSeller: true,
    isMostPopular: false,
    stock: "limited",
    benefitsList: {
      en: ["Coffee + Morinzhi Juice + Gano Massage Oil", "Complete metabolic reset", "Inside-out muscle and organ rejuvenation", "Save 35 MAD on luxury combo"],
      fr: ["Pack Café + Jus Morinzhi + Huile Gano", "Régulation métabolique globale", "Régénération musculaire & organique", "Économisez 35 MAD sur ce combo de luxe"],
      ar: ["القهوة السوداء + عصير المورينزي + زيت المساج جانو", "تنظيم شامل للميتابوليزم وهرمونات الجسم", "تغذية داخلية وخارجية وتليين العضلات", "توفير مالي 35 درهم وتوصيل سريع مجاني"]
    },
    ingredientsList: {
      en: ["DXN Lingzhi Black Coffee (20 Sachets)", "DXN Morinzhi Noni Juice (285ml)", "DXN Gano Massage Oil (75ml)"],
      fr: ["Café Noir DXN Lingzhi (20 Sachets)", "Jus de Noni DXN Morinzhi (285ml)", "Huile de Massage Gano DXN (75ml)"],
      ar: ["قهوة لينجزي السوداء (عبوة 20 كيس)", "عصير المورينزي ثمرة النوني (285 مل)", "زيت جانو للمساج الطبي (75 مل)"]
    },
    translations: {
      en: {
        name: "Pack Wellness Balance",
        subtitle: "Lalla Samira's Signature Longevity Kit",
        desc: "A luxury combination curated specifically to support complete metabolic detox, cellular nourishment, and physical recovery. Enjoy inside out premium wellness.",
        details: "Contains Black Coffee for morning energy, Morinzhi Juice for digestive and hormonal health, and Gano Massage Oil to treat body aches and sore joints."
      },
      fr: {
        name: "Pack Harmonie & Bien-être",
        subtitle: "Le Rituel de Longévité de Lalla Samira",
        desc: "Un ensemble de prestige sélectionné par Lalla Samira pour favoriser la détox métabolique complète, la vitalité de l'esprit et la détente du corps.",
        details: "Comprend le Café Noir pour éveiller l'énergie, le Jus Morinzhi pour calmer la digestion et l'Huile Gano pour éliminer les tensions musculaires du corps."
      },
      ar: {
        name: "الباقة الصحية الشاملة",
        subtitle: "باقة عافية المتكاملة الموصى بها لعائلتك",
        desc: "مجموعة العافية الفاخرة التي جمعتها لالة سميرة لدعم برنامج ديتوكس الكبد والقولون، وتليين آلام الظهر والمفاصل بالتدليك المغذي للريشي.",
        details: "تشمل القهوة السوداء لطاقة الصباح، عصير المورينزي لتنظيف الأمعاء والقولون، وزيت جانو التدليكي لعلاج تشنجات الرقبة، الظهر والمفاصل."
      }
    }
  }
,
{
  "id": "multipurpose-seasoning",
  "category": "immunity",
  "price": 386,
  "rating": 4.8,
  "reviewsCount": 42,
  "image": "https://i.ibb.co/hJhbbR9b/image.png",
  "images": [
    "https://i.ibb.co/hJhbbR9b/image.png",
    "https://i.ibb.co/ynw2JjT2/image.png",
    "https://i.ibb.co/B5w4RGv6/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "All-natural healthy flavor booster",
      "Supports healthy digestion",
      "Free of artificial MSG & chemicals"
    ],
    "fr": [
      "Rehausseur de goût naturel et sain",
      "Soutient une digestion saine",
      "Sans glutamate de synthèse ni additifs"
    ],
    "ar": [
      "معزز نكهة طبيعي وصحي بالكامل",
      "يدعم عملية الهضم الصحي",
      "خالٍ تماماً من المواد الكيميائية وأحادي الصوديوم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium organic herbs",
      "Natural wellness flavor enhancers"
    ],
    "fr": [
      "Herbes biologiques de première qualité",
      "Exhausteurs de goût naturels sains"
    ],
    "ar": [
      "أعشاب ونباتات عضوية فاخرة",
      "مطيبات نكهة طبيعية مفيدة للصحة"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Multipurpose Seasoning",
      "subtitle": "All-Natural Healthy Flavor Booster",
      "desc": "A premium, all-natural healthy seasoning blend crafted to elevate your daily meals while supporting immune health and proper digestion.",
      "details": "Infused with organic herbs and nutrients to provide exquisite flavor without MSG, synthetic preservatives, or artificial additives."
    },
    "fr": {
      "name": "Assaisonnement Multi-usage DXN",
      "subtitle": "Rehausseur de goût naturel et sain",
      "desc": "Un mélange d'assaisonnements sain et naturel de première qualité pour sublimer vos plats quotidiens tout en soutenant la digestion.",
      "details": "Enrichi en herbes biologiques et nutriments précieux, il offre une saveur exquise sans glutamate (MSG), conservateurs ni additifs artificiels."
    },
    "ar": {
      "name": "توابل دي إكس إن متعددة الاستخدامات",
      "subtitle": "معزز النكهة الطبيعي والصحي",
      "desc": "خليط توابل طبيعي وصحي بالكامل، مُعد خصيصاً لإضافة نكهة استثنائية لوجباتك اليومية مع دعم الهضم والمناعة.",
      "details": "خالٍ تماماً من أحادي الصوديوم (المانو غلوتامات) والمواد الحافظة والألوان الاصطناعية. يمنح أطباقك نكهة غنية وصحية بلمسة طبيعية."
    }
  }
},
{
  "id": "zhitea",
  "category": "coffee",
  "price": 350,
  "rating": 4.9,
  "reviewsCount": 56,
  "image": "https://i.ibb.co/C52hdQHB/image.png",
  "images": [
    "https://i.ibb.co/C52hdQHB/image.png",
    "https://i.ibb.co/JRSWwJkv/image.png",
    "https://i.ibb.co/pvn8DGrZ/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Rich in active antioxidants",
      "Boosts metabolic wellness",
      "Calms mind & detoxifies body"
    ],
    "fr": [
      "Riche en antioxydants actifs",
      "Soutient le bien-être métabolique",
      "Calme l'esprit et détoxifie le corps"
    ],
    "ar": [
      "غني بمضادات الأكسدة الحيوية النشطة",
      "يعزز عملية التمثيل الغذائي",
      "يهدئ الأعصاب ويطهر السموم من الجسم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pristine tea leaves",
      "Pure Ganoderma lucidum extract"
    ],
    "fr": [
      "Feuilles de thé rigoureusement sélectionnées",
      "Extrait pur de Ganoderma biologique"
    ],
    "ar": [
      "أوراق شاي طبيعية نقية",
      "خلاصة فطر الجانوديرما (الريشي) العضوي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Zhi Tea",
      "subtitle": "Premium Herbal Infusion with Reishi",
      "desc": "A premium luxury herbal tea blend enriched with pure organic Ganoderma extract. Rich in natural antioxidants to boost metabolism and energy.",
      "details": "Formulated with selected tea leaves and biological Reishi mushroom to offer a smooth, revitalizing sip that detoxifies the liver and optimizes digestion."
    },
    "fr": {
      "name": "Thé Zhi DXN",
      "subtitle": "Infusion d'herbes de prestige au Reishi",
      "desc": "Un thé d'herbes de première qualité enrichi en extrait pur de Ganoderma biologique. Riche en antioxydants pour stimuler le métabolisme et l'énergie.",
      "details": "Formulé avec des feuilles de thé rigoureusement sélectionnées et du Reishi bio pour offrir une tasse revitalisante qui favorise la détoxification et régule la digestion."
    },
    "ar": {
      "name": "شاي زي تي الفاخر",
      "subtitle": "شاي الأعشاب الفاخر بالفطر الريشي",
      "desc": "شاي أعشاب طبيعي فاخر مدعم بخلاصة فطر الجانوديرما (الريشي) العضوي. غني بمضادات الأكسدة الطبيعية التي تزيد من حيوية الجسم ونشاطه.",
      "details": "مُعد من أوراق الشاي المنتقاة بعناية والريشي العضوي ليوفر لك كوباً دافئاً ومطهراً يريح الجهاز الهضمي ويطرد السموم برفق."
    }
  }
},
{
  "id": "oozhi-tea",
  "category": "coffee",
  "price": 341,
  "rating": 4.7,
  "reviewsCount": 38,
  "image": "https://i.ibb.co/0pxMw7b2/image.png",
  "images": [
    "https://i.ibb.co/0pxMw7b2/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Deeply purifies digestive system",
      "Maintains healthy alkaline balance",
      "Relaxes nervous tension"
    ],
    "fr": [
      "Purifie le système digestif en profondeur",
      "Maintient un bon équilibre alcalin",
      "Relâche les tensions nerveuses"
    ],
    "ar": [
      "يطهر الجهاز الهضمي بعمق",
      "يحافظ على توازن قلوية الجسم",
      "يهدئ التشنجات والتوتر العصبي"
    ]
  },
  "ingredientsList": {
    "en": [
      "Selected organic tea leaves",
      "Active Ganoderma adaptogens"
    ],
    "fr": [
      "Feuilles de thé biologiques sélectionnées",
      "Adaptogènes actifs de Ganoderma"
    ],
    "ar": [
      "أوراق شاي عضوية ممتازة",
      "مستخلص فطر ريشي عضوي نشط"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Oozhi Tea",
      "subtitle": "Refreshing Herbal Tea with Ganoderma",
      "desc": "A delightful, smooth herbal tea formulation designed to cleanse the digestive system and promote daily relaxation and vitality.",
      "details": "Contains premium natural tea leaves combined with active Ganoderma adaptogens to keep your body alkaline and deeply hydrated."
    },
    "fr": {
      "name": "Thé Oozhi DXN",
      "subtitle": "Thé aux herbes purifiant au Ganoderma",
      "desc": "Une formulation de thé aux herbes douce et rafraîchissante conçue pour purifier le système digestif et favoriser la vitalité quotidienne.",
      "details": "Contient des feuilles de thé naturelles de qualité supérieure associées aux adaptogènes du Ganoderma pour alcaliniser l'organisme et l'hydrater."
    },
    "ar": {
      "name": "شاي أوزي الفاخر",
      "subtitle": "شاي الأعشاب المنشط بالجانوديرما",
      "desc": "مزيج عشبي فريد ومنعش مصمم لتنظيف الجهاز الهضمي وتعزيز الاسترخاء اليومي وطاقة خلايا الجسم.",
      "details": "يحتوي على أوراق شاي طبيعية ممتازة ومستخلص الفطر الريشي العضوي ليحافظ على قلوية الجسم ومستويات رطوبة الخلايا."
    }
  }
},
{
  "id": "vinaigrette-honey",
  "category": "immunity",
  "price": 341,
  "rating": 4.8,
  "reviewsCount": 31,
  "image": "https://i.ibb.co/Q3kyjkQC/image.png",
  "images": [
    "https://i.ibb.co/Q3kyjkQC/image.png",
    "https://i.ibb.co/nMrdKGnm/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "limited",
  "benefitsList": {
    "en": [
      "Supports stomach acid comfort",
      "Provides active prebiotic enzymes",
      "Alkalizes blood and tissues"
    ],
    "fr": [
      "Favorise le confort gastrique",
      "Apporte des enzymes prébiotiques actives",
      "Alcalinise le sang et les tissus"
    ],
    "ar": [
      "يساعد على راحة وحموضة المعدة",
      "يوفر أنزيمات بروبيوتيك حية نشطة",
      "يوازن قلوية الدم وأنسجة الجسم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pure organic raw honey",
      "Premium fermented fine vinegar"
    ],
    "fr": [
      "Miel brut biologique pur",
      "Vinaigre fin fermenté de prestige"
    ],
    "ar": [
      "عسل نحل طبيعي نقي وعضوي",
      "خل تفاح طبيعي مخمر فاخر"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Honey Vinaigrette",
      "subtitle": "Premium Organic Dressing with Active Honey",
      "desc": "A luxury gourmet vinaigrette blending pure raw organic honey with fine vinegar. Perfect for digestion, alkalizing the body, and gourmet salads.",
      "details": "Supports your digestive tract with active enzymes while providing an exquisite, sophisticated sweet-and-sour flavor to your daily dishes."
    },
    "fr": {
      "name": "Vinaigrette au Miel DXN",
      "subtitle": "Sauce de prestige au miel biologique actif",
      "desc": "Une vinaigrette gourmet de luxe combinant du miel biologique pur et du vinaigre fin. Idéale pour la digestion et l'alcalinisation.",
      "details": "Soutient le tractus digestif avec des enzymes actives tout en apportant une saveur aigre-douce exquise et sophistiquée à vos salades et plats."
    },
    "ar": {
      "name": "خل تتبيلة العسل الفاخر",
      "subtitle": "تتبيلة العسل العضوي والخل لدعم الهضم",
      "desc": "صلصة وتتبيلة راقية تجمع بين خل التفاح الطبيعي الفاخر وعسل النحل النقي. مثالية لراحة المعدة وضبط قلوية الدم وتتبيل السلطات.",
      "details": "تدعم الجهاز الهضمي بالأنزيمات الحية النشطة، وتعطي وجباتك اليومية مذاقاً رائعاً ومتوازناً يجمع بين الحلاوة والحموضة الصحية."
    }
  }
},
{
  "id": "vco-l",
  "category": "oils",
  "price": 377,
  "rating": 4.9,
  "reviewsCount": 84,
  "image": "https://i.ibb.co/vRQ4WY9/image.png",
  "images": [
    "https://i.ibb.co/vRQ4WY9/image.png",
    "https://i.ibb.co/kVzgbWT9/image.png",
    "https://i.ibb.co/39V6VYh6/image.png",
    "https://i.ibb.co/zV7S42c1/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": true,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Superb cognitive brain fuel",
      "Deep skin & hair restoration",
      "Promotes cellular thermogenesis"
    ],
    "fr": [
      "Excellent carburant cognitif cérébral",
      "Restauration profonde de la peau & cheveux",
      "Stimule la thermogenèse cellulaire"
    ],
    "ar": [
      "غذاء ممتاز لتنشيط الدورة الدموية للدماغ",
      "ترميم عميق للبشرة التالفة وجذور الشعر",
      "يحفز إنتاج الطاقة الخلوية في الجسم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Organic cold-pressed virgin coconut oil",
      "Active high-purity Ganoderma extract"
    ],
    "fr": [
      "Huile de coco vierge pressée à froid bio",
      "Extrait de Ganoderma actif de haute pureté"
    ],
    "ar": [
      "زيت جوز هند بكر معصور على البارد",
      "خلاصة فطر ريشي نقي عالي التركيز"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN VCO-L Coconut Oil",
      "subtitle": "Premium Virgin Coconut Oil with Ganoderma",
      "desc": "A premium liquid formulation of pure organic cold-pressed virgin coconut oil enriched with active Ganoderma extract. Incredible for skin, hair, and metabolic energy.",
      "details": "Perfect as a dietary supplement or a luxurious beauty treatment. Nourishes brain cells, moisturizes skin tissues, repairs hair damage, and promotes cellular health."
    },
    "fr": {
      "name": "Huile de Coco VCO-L DXN",
      "subtitle": "Huile de coco vierge de prestige infusée au Reishi",
      "desc": "Une huile de coco vierge biologique de première qualité, pressée à froid et enrichie en extrait actif de Ganoderma. Exceptionnelle pour la peau et l'énergie.",
      "details": "Idéale en complément alimentaire ou en soin de beauté de luxe. Nourrit les cellules, hydrate la peau en profondeur, répare les cheveux et booste l'énergie."
    },
    "ar": {
      "name": "زيت جوز الهند البكر VCO-L",
      "subtitle": "زيت جوز الهند العضوي الفاخر المطور بالريشي",
      "desc": "تركيبة سائلة فاخرة من زيت جوز الهند البكر العضوي المعصور على البارد والمدعم بالفطر الريشي. مذهل لتغذية خلايا الجسم، البشرة، والشعر.",
      "details": "يستخدم كعناية تجميلية راقية أو كمكمل غذائي لتنشيط الذاكرة. يغذي بصيلات الشعر، يرطب الجلد الجاف، ويمد الجسم بأحماض دهنية صحية سريعة الحرق."
    }
  }
},
{
  "id": "zhimeko",
  "category": "immunity",
  "price": 155,
  "rating": 4.8,
  "reviewsCount": 29,
  "image": "https://i.ibb.co/cKxjxjPR/image.png",
  "images": [
    "https://i.ibb.co/cKxjxjPR/image.png",
    "https://i.ibb.co/fzZGFRKr/image.png",
    "https://i.ibb.co/1f8KbscT/image.png",
    "https://i.ibb.co/gZhVs17Z/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Clears throat & lungs",
      "Strengthens seasonal resistance",
      "Balances body temperature"
    ],
    "fr": [
      "Dégage la gorge et les poumons",
      "Renforce la résistance saisonnière",
      "Équilibre la température corporelle"
    ],
    "ar": [
      "يساعد على تنظيف الصدر والرئتين",
      "يقوي مناعة الجسم ضد الحساسية الموسمية",
      "يوازن ويعدل حرارة الجسم الداخلية"
    ]
  },
  "ingredientsList": {
    "en": [
      "High-grade antioxidants",
      "Essential trace micronutrients"
    ],
    "fr": [
      "Antioxydants puissants",
      "Micronutriments essentiels"
    ],
    "ar": [
      "مضادات أكسدة طبيعية عالية الجودة",
      "أعشاب برية ومعادن دقيقة أساسية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Zhimeko",
      "subtitle": "Ancient Organic Herbal Wellness Blend",
      "desc": "An authentic, premium herbal formulation carefully prepared to assist metabolic balance, respiratory clearance, and general organic resistance.",
      "details": "Enriched with high-grade antioxidants and essential micronutrients. Supports lung vitality and alleviates chronic throat or seasonal sensitivities."
    },
    "fr": {
      "name": "Zhimeko DXN",
      "subtitle": "Mélange de bien-être ancestral aux herbes bio",
      "desc": "Une formulation d'herbes authentique et haut de gamme, préparée pour soutenir l'équilibre métabolique, le confort respiratoire et l'immunité générale.",
      "details": "Riche en antioxydants puissants et micronutriments essentiels. Favorise la santé des poumons et soulage les sensibilités saisonnières de la gorge."
    },
    "ar": {
      "name": "زيميكو العشبي الطبيعي",
      "subtitle": "مزيج الأعشاب الطبيعية لدعم الصدر والتنفس",
      "desc": "تركيبة عشبية طبيعية تقليدية فاخرة صُممت لدعم توازن التمثيل الغذائي، راحة الجهاز التنفسي، ومقاومة الحساسية الموسمية.",
      "details": "غني بالمغذيات الدقيقة ومضادات الأكسدة الفعالة. يساعد على تنقية مجاري الهواء والرئتين وتخفيف تهيج الحلق والسعال الجاف."
    }
  }
},
{
  "id": "ganozhi-body-foam",
  "category": "personal",
  "price": 221,
  "rating": 4.8,
  "reviewsCount": 92,
  "image": "https://i.ibb.co/BKHgy5m9/image.png",
  "images": [
    "https://i.ibb.co/BKHgy5m9/image.png",
    "https://i.ibb.co/FbfHrgS2/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Moisturizes dry & sensitive skin",
      "Rich in natural Vitamin E",
      "Soothing anti-irritant action"
    ],
    "fr": [
      "Hydrate les peaux sèches et sensibles",
      "Riche en vitamine E naturelle",
      "Action apaisante anti-irritation"
    ],
    "ar": [
      "يرطب البشرة الجافة والحساسة بعمق",
      "غني بفيتامين هـ المغذي الطبيعي",
      "يهدئ تهيجات وحساسية الجلد"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pristine Reishi mushroom extract",
      "Natural moisturizing bases",
      "Vitamin E"
    ],
    "fr": [
      "Extrait pur de fœtus de Reishi",
      "Bases lavantes et hydratantes douces",
      "Vitamine E naturelle"
    ],
    "ar": [
      "خلاصة فطر الجانوديرما (الريشي) العضوي",
      "قاعدة رغوية مرطبة لطيفة",
      "فيتامين هـ الطبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Ganozhi Body Foam",
      "subtitle": "Luxury Skin-Nourishing Reishi Body Wash",
      "desc": "A premium luxury body wash enriched with pure Ganoderma (Reishi) extract and natural Vitamin E. Gently cleanses while preserving your skin's natural moisture barrier.",
      "details": "Keeps your skin incredibly smooth, supple, and refreshed. Free from harsh chemicals, sulfates, and parabens, making it perfect for sensitive or irritated skin."
    },
    "fr": {
      "name": "Gel Douche Ganozhi DXN",
      "subtitle": "Gel moussant de prestige au Reishi",
      "desc": "Un gel douche de luxe enrichi en extrait pur de Ganoderma (Reishi) et vitamine E naturelle. Nettoie en douceur tout en protégeant la barrière d'hydratation.",
      "details": "Laisse la peau incroyablement douce, souple et rafraîchie. Sans sulfates ni parabènes, il est idéal pour les peaux sèches, sensibles ou réactives."
    },
    "ar": {
      "name": "رغوة الجسم جانوزي الفاخرة",
      "subtitle": "سائل استحمام الجسم المغذي بالريشي",
      "desc": "سائل استحمام طبيعي فاخر للجسم، غني بخلاصة فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي. ينظف البشرة بلطف دون تجفيفها.",
      "details": "يمنح بشرتك نعومة فائقة ونشاطاً متجدداً. خالٍ من المواد الكيميائية القاسية والمخرشة ليكون لطيفاً وآمناً للبشرة الحساسة أو الملتهبة."
    }
  }
},
{
  "id": "chubby-baby-oil",
  "category": "oils",
  "price": 138,
  "rating": 4.9,
  "reviewsCount": 45,
  "image": "https://i.ibb.co/NdC1p4KR/image.png",
  "images": [
    "https://i.ibb.co/NdC1p4KR/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Soothes delicate infant skin",
      "Hypoallergenic and safe",
      "Promotes calming sleep massage"
    ],
    "fr": [
      "Apaise la peau délicate des nourrissons",
      "Hypoallergénique et ultra-sûr",
      "Idéal pour un massage de nuit calme"
    ],
    "ar": [
      "يهدئ بشرة الرضع والأطفال الرقيقة",
      "تركيبة مضادة للحساسية وآمنة كلياً",
      "يسرع استرخاء ونوم الطفل بالتدليك المريح"
    ]
  },
  "ingredientsList": {
    "en": [
      "Organic plant oils",
      "Mild botanical skin conditioners"
    ],
    "fr": [
      "Huiles végétales biologiques douces",
      "Agents hydratants d'origine naturelle"
    ],
    "ar": [
      "زيوت نباتية عضوية نقية ولطيفة",
      "مرطبات ومغذيات عشبية خفيفة للبشرة"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Chubby Baby Oil",
      "subtitle": "Gentle Botanical Baby Massage Oil",
      "desc": "A ultra-gentle, premium organic massage oil specially formulated for babies' delicate skin. Enriched with natural plant oils to soothe, protect, and moisturize.",
      "details": "Perfect for baby massage, dry skin patches, and cradle cap. Hypoallergenic, lightly fragrant, and completely safe, ensuring a calming sleep ritual."
    },
    "fr": {
      "name": "Huile pour Bébé Chubby DXN",
      "subtitle": "Huile de massage botanique ultra-douce pour bébés",
      "desc": "Une huile de massage biologique de première qualité, formulée pour la peau délicate des bébés. Enrichie en huiles végétales apaisantes.",
      "details": "Idéale pour le massage de bébé, l'hydratation et le soin des croûtes de lait. Hypoallergénique et douce, elle favorise un sommeil paisible."
    },
    "ar": {
      "name": "زيت تشوبي للأطفال الرضع",
      "subtitle": "زيت المساج والترطيب اللطيف لبشرة الأطفال",
      "desc": "زيت ترطيب ومساج طبيعي ناعم للغاية، مصمم خصيصاً لحماية بشرة الرضع والأطفال الحساسة من الجفاف والتهيج والالتهابات.",
      "details": "مثالي لتدليك بشرة طفلك بعد الاستحمام وعلاج الجفاف وتقشر فروة الرأس. تركيبة مضادة للحساسية ومريحة تساعد طفلك على النوم العميق."
    }
  }
},
{
  "id": "ganozhi-trans-soap",
  "category": "personal",
  "price": 201,
  "rating": 4.8,
  "reviewsCount": 64,
  "image": "https://i.ibb.co/BYDbyfs/image.png",
  "images": [
    "https://i.ibb.co/BYDbyfs/image.png",
    "https://i.ibb.co/Z1kmJ366/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Reduces dark spots & blemishes",
      "Deeply clarifies facial pores",
      "Preserves cell moisture"
    ],
    "fr": [
      "Atténue les taches sombres et défauts",
      "Clarifie les pores du visage en profondeur",
      "Préserve l'hydratation cellulaire"
    ],
    "ar": [
      "يساعد على تفتيح البقع الداكنة والتصبغات",
      "ينظف وينقي مسامات بشرة الوجه بعمق",
      "يحافظ على رطوبة وحيوية الخلايا"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pure Reishi extract",
      "Natural glycerin bases"
    ],
    "fr": [
      "Extrait pur de Reishi biologique",
      "Glycérine naturelle de haute pureté"
    ],
    "ar": [
      "خلاصة فطر ريشي عضوي نقي",
      "غليسرين طبيعي مرطب ولطيف"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Ganozhi Transparent Soap",
      "subtitle": "Premium Clarifying Transparent Reishi Bar",
      "desc": "A premium luxury transparent soap bar containing pure organic Ganoderma extract and natural glycerin. Purifies skin while locking in deep cellular moisture.",
      "details": "Creates a velvety lather that deeply cleanses pores, balances facial sebum, reduces dark spots, and rejuvenates dull, tired skin textures."
    },
    "fr": {
      "name": "Savon Transparent Ganozhi DXN",
      "subtitle": "Pain de beauté clarifiant transparent au Reishi",
      "desc": "Un savon transparent de prestige contenant de l'extrait pur de Ganoderma et de la glycérine naturelle. Purifie en maintenant une hydratation cellulaire.",
      "details": "Génère une mousse veloutée qui nettoie les pores en profondeur, régule le sébum, atténue les taches sombres et redonne de l'éclat aux teints ternes."
    },
    "ar": {
      "name": "صابون جانوزي الشفاف الفاخر",
      "subtitle": "صابونة التطهير الشفافة بالغليسرين والريشي",
      "desc": "صابونة شفافة طبيعية فاخرة تجمع بين خلاصة فطر الجانوديرما (الريشي) والغليسرين الطبيعي لترطيب وتفتيح البشرة بلطف.",
      "details": "تزيل الرواسب والدهون الزائدة من المسام دون تجفيف الوجه. تساعد على تفتيح البقع الداكنة وتوحيد لون البشرة لتبدو أكثر شباباً وإشراقاً."
    }
  }
},
{
  "id": "oocha-trans-soap",
  "category": "personal",
  "price": 201,
  "rating": 4.8,
  "reviewsCount": 47,
  "image": "https://i.ibb.co/qY6bpv2K/image.png",
  "images": [
    "https://i.ibb.co/qY6bpv2K/image.png",
    "https://i.ibb.co/j0BthdV/image.png",
    "https://i.ibb.co/HktDkmT/image.png",
    "https://i.ibb.co/mVL3Xb0W/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Tightens enlarged pores",
      "Combats skin oxidation & aging",
      "Fights acne & blemishes"
    ],
    "fr": [
      "Resserre les pores dilatés",
      "Lutte contre l'oxydation de la peau",
      "Combat l'acné et les imperfections"
    ],
    "ar": [
      "يقبض ويقلل حجم المسامات الواسعة",
      "يحارب تلف وأكسدة الجلد للتجاعيد",
      "يكافح البثور وحب الشباب وعيوب البشرة"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium Japanese Green Tea extract",
      "Certified Organic Reishi extract"
    ],
    "fr": [
      "Extrait pur de Thé Vert japonais",
      "Extrait de Reishi biologique certifié"
    ],
    "ar": [
      "مستخلص الشاي الأخضر الياباني الفاخر",
      "مستخلص الفطر الريشي العضوي المعتمد"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Oocha Transparent Soap",
      "subtitle": "Premium Green Tea & Reishi Purifying Soap",
      "desc": "A boutique luxury transparent bar combining pure Japanese Green Tea extract with organic Reishi. Rich in catechins to deeply clarify and protect skin cells.",
      "details": "Fights skin aging, tightens enlarged pores, removes pollutants, and keeps your face exceptionally clean, soft, and radiant."
    },
    "fr": {
      "name": "Savon Transparent Oocha DXN",
      "subtitle": "Pain de savon purifiant au Thé Vert & Reishi",
      "desc": "Un savon transparent de prestige combinant du thé vert japonais pur et du Reishi bio. Riche en catéchines pour clarifier et protéger la peau.",
      "details": "Lutte contre le vieillissement cutané, resserre les pores dilatés, élimine les polluants et laisse le visage doux, purifié et lumineux."
    },
    "ar": {
      "name": "صابون أوتشا الشفاف الفاخر",
      "subtitle": "صابونة التطهير الشفافة بالشاي الأخضر والريشي",
      "desc": "صابونة شفافة فاخرة تجمع بين مضادات الأكسدة القوية للشاي الأخضر والريشي العضوي لتنظيف البشرة بعمق وتنقيتها.",
      "details": "تحارب الشيخوخة المبكرة للجلد، تقبض المسامات الواسعة، تزيل ملوثات الجو، وتترك بشرة الوجه ناعمة ومشرقة ونظيفة تماماً."
    }
  }
},
{
  "id": "potenzhi-30",
  "category": "energy",
  "price": 434,
  "rating": 4.9,
  "reviewsCount": 110,
  "image": "https://i.ibb.co/6cYHCwqQ/image.png",
  "images": [
    "https://i.ibb.co/6cYHCwqQ/image.png",
    "https://i.ibb.co/FLz3yhff/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "limited",
  "benefitsList": {
    "en": [
      "Supercharges male physical stamina",
      "Supports cardiovascular blood flow",
      "Enhances clean natural energy"
    ],
    "fr": [
      "Booste l'endurance physique masculine",
      "Soutient la circulation sanguine",
      "Améliore l'énergie naturelle stable"
    ],
    "ar": [
      "يرفع القدرة والتحمل البدني للرجال",
      "يدعم الدورة الدموية وتدفق الدم",
      "يزيد من مستويات الطاقة والنشاط الطبيعي"
    ]
  },
  "ingredientsList": {
    "en": [
      "Tongkat Ali extract",
      "Butea Superba extract",
      "Cordyceps extract"
    ],
    "fr": [
      "Extrait de Tongkat Ali",
      "Extrait de Butea Superba",
      "Extrait de Cordyceps actif"
    ],
    "ar": [
      "مستخلص جذور تونغكات علي",
      "مستخلص عشبة بوتيا سوبربا",
      "مستخلص فطر الكورديسبس الطبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Potenzhi (30 Capsules)",
      "subtitle": "Premium Organic Stamina & Male Vitality Booster",
      "desc": "A premium, certified organic health booster made from an exquisite blend of high-potency tonic herbs to enhance overall physical endurance, circulation, and libido.",
      "details": "Contains active natural extracts of Tongkat Ali, Butea Superba, and cordyceps to completely revitalize male stamina, blood flow, and biological strength."
    },
    "fr": {
      "name": "DXN Potenzhi (30 Gélules)",
      "subtitle": "Booster d'endurance et de vitalité masculine",
      "desc": "Un complément biologique de prestige élaboré à partir d'un mélange d'herbes toniques puissantes pour maximiser l'endurance physique et la circulation.",
      "details": "Formulé avec des extraits actifs de Tongkat Ali, Butea Superba et Cordyceps pour revitaliser la force, améliorer le flux sanguin et booster la libido."
    },
    "ar": {
      "name": "بوتنزي دي إكس إن (30 كبسولة)",
      "subtitle": "كبسولات الحيوية والتحمل العضوي الفاخرة",
      "desc": "مكمل عشبي عضوي فاخر يجمع بين أقوى الأعشاب المنشطة والمغذية لرفع مستويات الطاقة البدنية، تنشيط الدورة الدموية، والتحمل الفائق.",
      "details": "يحتوي على مستخلصات طبيعية فعالة من تونغكات علي وبوتيا سوبربا والفريد من نوعه الكورديسبس لتعزيز النشاط العضلي والتدفق الدموي القوي."
    }
  }
},
{
  "id": "potenzhi-90",
  "category": "energy",
  "price": 1066,
  "rating": 5,
  "reviewsCount": 154,
  "image": "https://i.ibb.co/XryWc6r4/image.png",
  "images": [
    "https://i.ibb.co/XryWc6r4/image.png",
    "https://i.ibb.co/Q78cMC16/image.png",
    "https://i.ibb.co/k283GT3D/image.png",
    "https://i.ibb.co/sdn0tDxF/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": true,
  "stock": "limited",
  "benefitsList": {
    "en": [
      "Elite long-term vitality therapy",
      "Permanent physical strength rebuild",
      "Aids peak stamina & heart health"
    ],
    "fr": [
      "Thérapie d'élite vitalité long-terme",
      "Reconstruction durable de la force",
      "Soutient l'endurance et le cœur"
    ],
    "ar": [
      "برنامج النخبة المتكامل للتخلص من الضعف",
      "بناء وترميم طويل المدى لطاقة الجسم",
      "يحسن مستويات اللياقة العضلية وصحة القلب"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium Tongkat Ali extract",
      "Pure Butea Superba",
      "Active Cordyceps"
    ],
    "fr": [
      "Extrait de Tongkat Ali haut de gamme",
      "Butea Superba d'une pureté absolue",
      "Cordyceps bio actif"
    ],
    "ar": [
      "مستخلص تونغكات علي الفاخر النقي",
      "مسحوق عشبة بوتيا سوبربا العلاجية",
      "أبواغ فطر الكورديسبس الطبيعي النشط"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Potenzhi (90 Capsules)",
      "subtitle": "Maximum Strength Stamina & Vitality Elite Pack",
      "desc": "The comprehensive 90-capsule premium therapy designed to permanently rebuild physical strength, support cardiovascular blood flow, and restore peak natural vitality.",
      "details": "Our elite energy formula. Highly recommended for busy individuals, athletes, and older adults seeking sustained youthfulness, cardiac muscle support, and intense natural vigor."
    },
    "fr": {
      "name": "DXN Potenzhi (90 Gélules)",
      "subtitle": "Pack d'élite pour endurance et force maximale",
      "desc": "La thérapie complète de 90 gélules conçue pour restaurer durablement la force physique, soutenir le système cardiovasculaire et revitaliser le corps.",
      "details": "Notre formule d'énergie la plus concentrée. Idéale pour les sportifs, cadres actifs et aînés souhaitant retrouver une vigueur exceptionnelle et une circulation fluide."
    },
    "ar": {
      "name": "بوتنزي دي إكس إن (90 كبسولة)",
      "subtitle": "الباقة الكبرى لعلاج الضعف والوهن العضلي",
      "desc": "العبوة الكبرى الاقتصادية المكونة من 90 كبسولة لترميم طاقة الجسم الحيوية، تحفيز تدفق الدم في الشرايين، والمحافظة على شباب الخلايا والقلب.",
      "details": "تركيبة النشاط الفائقة والمركزة. مثالية للرياضيين والراغبين في علاج الإجهاد المزمن والضعف البدني العام بشكل طبيعي بالكامل."
    }
  }
},
{
  "id": "black-cumin-plus",
  "category": "immunity",
  "price": 327,
  "rating": 4.9,
  "reviewsCount": 78,
  "image": "https://i.ibb.co/QvkcvZBy/image.png",
  "images": [
    "https://i.ibb.co/QvkcvZBy/image.png",
    "https://i.ibb.co/GQzw6RS5/image.png",
    "https://i.ibb.co/bMdhg4Hq/image.png",
    "https://i.ibb.co/xt37TsMm/image.png",
    "https://i.ibb.co/5XFGn08H/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Unbeatable immune defense boost",
      "Optimizes clear respiratory health",
      "Clears stomach gases & flatulence"
    ],
    "fr": [
      "Boost immunitaire inégalé",
      "Optimise le confort respiratoire",
      "Élimine les gaz et ballonnements"
    ],
    "ar": [
      "تقوية فائقة ومثبتة لجهاز المناعة",
      "يحسن وينظف الجهاز التنفسي والصدر",
      "يطهر الأمعاء ويطرد الغازات والانتفاخات"
    ]
  },
  "ingredientsList": {
    "en": [
      "Cold-pressed Nigella Sativa (Black Cumin)",
      "Premium Black Pepper",
      "Therapeutic Clove extract"
    ],
    "fr": [
      "Graine de Cumin Noir pressée à froid",
      "Poivre noir de première qualité",
      "Extrait thérapeutique de Clou de girofle"
    ],
    "ar": [
      "مسحوق بذور حبة البركة العضوية",
      "الفلفل الأسود الفاخر",
      "مستخلص كبسولات القرنفل الطبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Black Cumin Plus",
      "subtitle": "Organic Nigella Sativa Immune Powerhouse",
      "desc": "Premium cold-pressed organic Black Cumin (Nigella Sativa) seeds enriched with premium Black Pepper and Clove extract to build an outstanding, natural immune defense.",
      "details": "Known for centuries as the 'seed of blessing', this powerful botanical blend optimizes respiratory health, controls digestive flatulence, and relieves inflammatory aches."
    },
    "fr": {
      "name": "Cumin Noir DXN Plus",
      "subtitle": "Complément de Nigelle active pour l'immunité",
      "desc": "Gélules de cumin noir bio (Nigella Sativa) enrichies en poivre noir et clou de girofle pour former un bouclier immunitaire naturel extrêmement puissant.",
      "details": "Surnommée 'graine de bénédiction', cette synergie végétale optimise le confort respiratoire, facilite la digestion et réduit les états inflammatoires."
    },
    "ar": {
      "name": "الحبة السوداء بلس العضوية",
      "subtitle": "كبسولات حبة البركة والقرنفل للمناعة",
      "desc": "كبسولات الحبة السوداء (حبة البركة) العضوية الفاخرة الممزوجة بالقرنفل والفلفل الأسود لبناء أقوى خط دفاع مناعي طبيعي ومحاربة الميكروبات.",
      "details": "معروفة في الطب النبوي بحبة البركة المعالجة للعديد من العلل. تطهر الصدر والجهاز التنفسي، تريح الأمعاء من الغازات، وتحارب التهابات المفاصل."
    }
  }
},
{
  "id": "poria-s",
  "category": "immunity",
  "price": 336,
  "rating": 4.8,
  "reviewsCount": 34,
  "image": "https://i.ibb.co/yFR35ppn/image.png",
  "images": [
    "https://i.ibb.co/yFR35ppn/image.png",
    "https://i.ibb.co/Dg7BvHQK/image.png",
    "https://i.ibb.co/hFgc2QcV/image.png",
    "https://i.ibb.co/zhHwHN0t/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Drains harmful water retention",
      "Soothes anxiety & promotes deep sleep",
      "Deeply purifies kidneys & lymph"
    ],
    "fr": [
      "Draine la rétention d'eau nocive",
      "Calme l'anxiété et favorise le sommeil",
      "Purifie les reins et la lymphe"
    ],
    "ar": [
      "يساعد على تصريف احتباس السوائل",
      "يهدئ القلق والتوتر وينشط النوم",
      "ينظف وينقي الكلى والجهاز الليمفاوي"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pristine Wolfiporia cocos mushroom powder"
    ],
    "fr": [
      "Pure poudre de champignon Wolfiporia cocos"
    ],
    "ar": [
      "مسحوق فطر بوريا إس البري النقي بالكامل"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Poria S Powder",
      "subtitle": "Premium Organic Wolfiporia Cocos Dust",
      "desc": "Pristine therapeutic Poria (Wolfiporia cocos) mushroom powder. Famous in traditional eastern medicine to regulate body fluids, calm nerves, and clear kidneys.",
      "details": "Directly drains excess water bloating, reduces anxiety and insomnia, supports lymphatic drainage, and rejuvenates skin tissue."
    },
    "fr": {
      "name": "Poudre Poria S DXN",
      "subtitle": "Poudre thérapeutique de Wolfiporia Cocos",
      "desc": "Pure poudre de champignon Poria (Wolfiporia cocos) d'une qualité médicale exceptionnelle. Réputé pour drainer les fluides et apaiser l'esprit.",
      "details": "Aide à éliminer la rétention d'eau de l'organisme, apaise le stress mental et l'insomnie, soutient le drainage lymphatique et régénère les tissus cutanés."
    },
    "ar": {
      "name": "بودرة فطر بوريا إس الفاخرة",
      "subtitle": "مسحوق فطر البوريا الطبيعي لتطهير السوائل",
      "desc": "مسحوق فطر بوريا (Wolfiporia cocos) النقي ذو القيمة الطبية الاستثنائية. يستعمل في الطب الشرقي لتنقية الكلى وتنظيم سوائل الجسم وتهدئة الأعصاب.",
      "details": "يساعد بفعالية على تصريف احتباس السوائل الزائدة في الأطراف، يزيل التوتر والأرق، ينظف اللمف، ويرطب خلايا البشرة من الداخل."
    }
  }
},
{
  "id": "zhi-mint-plus",
  "category": "personal",
  "price": 532,
  "rating": 4.9,
  "reviewsCount": 112,
  "image": "https://i.ibb.co/pBK7JFhC/image.png",
  "images": [
    "https://i.ibb.co/pBK7JFhC/image.png",
    "https://i.ibb.co/tPmN1Dmm/image.png",
    "https://i.ibb.co/pvnMDR2G/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Instantly relieves throat irritation",
      "Halts dry cough and voice hoarseness",
      "Locks in crisp premium mint breath"
    ],
    "fr": [
      "Soulage instantanément la gorge irritée",
      "Calme la toux sèche et la voix enrouée",
      "Procure une haleine de menthe fraîche"
    ],
    "ar": [
      "يهدئ ويسكن آلام الحلق وصعوبة التنفس",
      "يخفف السعال الجاف وبحة الصوت بفعالية",
      "يمنح الفم نكهة وانتعاشاً عشبياً نقياً"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium mint herb oils",
      "Pure organic Ganoderma extract"
    ],
    "fr": [
      "Huiles essentielles de menthe de prestige",
      "Extrait pur de Ganoderma biologique"
    ],
    "ar": [
      "زيوت عشبية طبيعية من النعناع النقي",
      "مستخلص فطر ريشي عضوي معتمد"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Zhi Mint Plus Lozenges",
      "subtitle": "Reishi-Fortified Luxury Breath Mints",
      "desc": "Premium refreshing mint lozenges infused with high-purity Ganoderma extract. Instantly soothes irritated throat and provides absolute mouth freshness.",
      "details": "An exceptional healthy replacement for sugar candies. Perfect for speakers, smokers, or anybody experiencing dry cough or persistent bad breath."
    },
    "fr": {
      "name": "Pastilles Zhi Mint Plus DXN",
      "subtitle": "Pastilles rafraîchissantes de luxe au Reishi",
      "desc": "Pastilles de menthe fraîches de première qualité infusées à l'extrait de Ganoderma. Soulage instantanément la gorge irritée et raféchit l'haleine.",
      "details": "Une alternative saine et sans sucres nocifs aux bonbons industriels. Parfait pour calmer la toux sèche, éclaircir la voix et chasser la mauvaise haleine."
    },
    "ar": {
      "name": "حلوى زهي مينت بلس بالريشي",
      "subtitle": "حبوب النعناع الطبية والريشي لتطهير الحلق",
      "desc": "أقراص حلوى النعناع الطبيعية والمنعشة للغاية، المدعمة بخلاصة فطر الجانوديرما (الريشي) النقي لتطهير الفم وتهدئة آلام الحلق وصعوبة التنفس.",
      "details": "البديل الصحي المثالي والأفخر للسكاكر التجارية. ترطب مجاري التنفس والبلعوم، وتزيل بحة الصوت وروائح الفم بفعالية تدوم لساعات."
    }
  }
},
{
  "id": "aloe-vita",
  "category": "immunity",
  "price": 88,
  "rating": 4.7,
  "reviewsCount": 41,
  "image": "https://i.ibb.co/9mPkGRBB/image.png",
  "images": [
    "https://i.ibb.co/9mPkGRBB/image.png",
    "https://i.ibb.co/tp8kbGwP/image.png",
    "https://i.ibb.co/LzFw8T2g/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Soothes colon & digestive tract",
      "Relieves painful stomach acidity",
      "Triggers deep cellular hydration"
    ],
    "fr": [
      "Calme le côlon et le tube digestif",
      "Soulage l'acidité d'estomac douloureuse",
      "Active l'hydratation cellulaire fraîche"
    ],
    "ar": [
      "يهدئ القولون ويسكن جدار المعدة",
      "يقضي على الحموضة الزائدة المزعجة",
      "يمنح ترطيباً داخلياً عميقاً للخلايا"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pure organic Aloe Vera gel pulp",
      "Essential digestive enzymes"
    ],
    "fr": [
      "Pulpe pure d'Aloe Vera biologique",
      "Enzymes digestives végétales actives"
    ],
    "ar": [
      "لب وهلام نبتة الصبار الطبيعية",
      "فيتامينات وأنزيمات هاضمة حيوية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Aloe Vita Drink",
      "subtitle": "Premium Refreshing Aloe Vera Juice",
      "desc": "A delicious, luxury wellness drink compiled with pure organic Aloe Vera pulp and juices. Incredible for digestive comfort, colon soothing, and skin hydration.",
      "details": "Packed with active vitamins and enzymes to repair gastric mucosa, relieve stomach acidity, and give you glowing healthy hydration."
    },
    "fr": {
      "name": "Boisson Aloe Vita DXN",
      "subtitle": "Jus de bien-être rafraîchissant à l'Aloe Vera",
      "desc": "Une boisson saine délicieuse à base de pulpe pure d'Aloe Vera biologique. Exceptionnelle pour apaiser le côlon et hydrater l'organisme.",
      "details": "Riche en enzymes actives et vitamines digestives pour réparer la muqueuse gastrique, calmer l'acidité d'estomac et offrir une hydratation fraîche."
    },
    "ar": {
      "name": "مشروب ألو فيتا بالصبار",
      "subtitle": "عصير الألوفيرا الطبيعي والمنعش للمعدة",
      "desc": "مشروب صحي ومنعش للغاية، مُعد من لب وعصير نبتة الصبار (الألوفيرا) الطبيعية الممتازة لراحة القولون والمعدة وترطيب خلايا الجسم.",
      "details": "غني بالفيتامينات والأنزيمات الحيوية التي ترمم جدار المعدة المتهيج، تقضي على الحموضة المزعجة، وتمنحك رطوبة ونضارة ممتازة."
    }
  }
},
{
  "id": "lions-mane-oocha",
  "category": "coffee",
  "price": 264,
  "rating": 4.8,
  "reviewsCount": 39,
  "image": "https://i.ibb.co/YBK0FXD7/image.png",
  "images": [
    "https://i.ibb.co/YBK0FXD7/image.png",
    "https://i.ibb.co/q3Mkcyh7/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Recharges brain focus & memory",
      "High-level neural network protection",
      "Accolades thermogenic fat burn"
    ],
    "fr": [
      "Active la mémoire et la concentration",
      "Protection des connexions neuronales",
      "Accélère le brûlage sain des graisses"
    ],
    "ar": [
      "ينشط الذاكرة وسرعة الحفظ والتركيز",
      "يحمي الخلايا والروابط العصبية للدماغ",
      "يساعد على تسريع عملية حرق الدهون"
    ]
  },
  "ingredientsList": {
    "en": [
      "Japanese Matcha Green Tea",
      "Pure organic Lion's Mane mushroom extract"
    ],
    "fr": [
      "Thé Vert Matcha japonais d'origine",
      "Extrait de champignon Crinière de Lion bio"
    ],
    "ar": [
      "شاي الماتشا الأخضر الياباني الفاخر",
      "مستخلص فطر عرف الأسد العضوي النقي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Lion's Mane Oocha",
      "subtitle": "Gourmet Brain-Boosting Green Tea Espresso",
      "desc": "An exquisite luxury tea blend fusing Japanese Matcha Green Tea with pure Lion's Mane mushroom extract. Recharges brain memory, alertness, and focus.",
      "details": "Designed for intensive mental work or meditation. Combines green tea catechins with nootropic Hericium to protect neural connections and burn excess fat."
    },
    "fr": {
      "name": "Oocha Crinière de Lion DXN",
      "subtitle": "Thé Vert gourmet au Matcha & Crinière de Lion",
      "desc": "Un thé de prestige associant le Thé Vert Matcha japonais à l'extrait de champignon Crinière de Lion. Stimule la mémoire et la vivacité cérébrale.",
      "details": "Idéal pour le travail intellectuel intense ou la méditation. Allie les vertus antioxydantes du thé vert au pouvoir nootropique de l'Hericium."
    },
    "ar": {
      "name": "أوتشا عرف الأسد الفاخر",
      "subtitle": "الشاي الأخضر ماتشا المدعم بعرف الأسد",
      "desc": "مشروب الشاي الأخضر الفاخر والمنشط الذي يجمع بين قوة شاي الماتشا ومستخلص فطر عرف الأسد العضوي لزيادة الذكاء والحفظ والتركيز.",
      "details": "مخصص للنشاط الذهني المكثف والصفاء العقلي. يحسن الذاكرة والروابط العصبية، يسرع حرق الدهون، ويوفر طاقة ذهنية نقية طوال اليوم."
    }
  }
},
{
  "id": "lions-mane-coffee",
  "category": "coffee",
  "price": 342,
  "rating": 4.9,
  "reviewsCount": 89,
  "image": "https://i.ibb.co/JRrj9n7r/image.png",
  "images": [
    "https://i.ibb.co/JRrj9n7r/image.png",
    "https://i.ibb.co/zWxxVpxT/image.png",
    "https://i.ibb.co/TDjBm2JY/image.png",
    "https://i.ibb.co/DHWqdYjG/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Boosts brain memory & NGF growth",
      "Highly protective for stomach walls",
      "Delivers jitter-free mental focus"
    ],
    "fr": [
      "Stimule la mémoire et le facteur NGF",
      "Protège la barrière gastro-intestinale",
      "Procure une énergie mentale sans stress"
    ],
    "ar": [
      "يقوي الحفظ والذاكرة ويحفز نمو الأعصاب",
      "يحمي ويبني جدار المعدة الحساسة",
      "يعطي تركيزاً عقلياً فائقاً دون قلق"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium low-acid coffee beans",
      "Organic Hericium (Lion's Mane) extract"
    ],
    "fr": [
      "Grains de café torréfiés peu acides",
      "Extrait de champignon Crinière de Lion bio"
    ],
    "ar": [
      "حبوب قهوة محمصة خفيفة الحموضة والكافيين",
      "خلاصة فطر عرف الأسد العضوي المعتمد"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Lion's Mane Coffee",
      "subtitle": "Premium Nootropic Memory Coffee",
      "desc": "Premium roasted coffee beans infused with organic Lion's Mane mushroom. Your ultimate bio-hack to boost work productivity, neural growth, and stomach comfort.",
      "details": "An exceptional, low-acid gourmet coffee that strengthens memory, accelerates cognitive response, protects gastric tissues, and gives clean energy."
    },
    "fr": {
      "name": "Café Crinière de Lion DXN",
      "subtitle": "Café nootropique d'élite pour la mémoire",
      "desc": "Café torréfié de première qualité infusé au champignon Crinière de Lion. Votre atout naturel pour stimuler la productivité, le focus et le confort gastrique.",
      "details": "Un café gourmand très digeste à faible acidité qui renforce la mémoire, protège l'estomac et procure une énergie mentale d'une clarté absolue."
    },
    "ar": {
      "name": "قهوة عرف الأسد الصحية",
      "subtitle": "قهوة النوتيروبك الفاخرة للذكاء والتركيز",
      "desc": "حبوب قهوة محمصة فاخرة ممزوجة بخلاصة فطر عرف الأسد العضوي لدعم الذاكرة، تنشيط الأعصاب، والمحافظة على راحة المعدة والجهاز الهضمي.",
      "details": "قهوة صحية قليلة الحموضة والكافيين تزيد من سرعة الحفظ، تحفز عامل نمو الأعصاب (NGF)، وتمنحك تركيزاً خارقاً لمواجهة أعباء العمل والدراسة."
    }
  }
},
{
  "id": "apple-enzyme",
  "category": "immunity",
  "price": 536,
  "rating": 4.9,
  "reviewsCount": 44,
  "image": "https://i.ibb.co/hJx0y7jv/image.png",
  "images": [
    "https://i.ibb.co/hJx0y7jv/image.png",
    "https://i.ibb.co/MkRpVCf7/image.png",
    "https://i.ibb.co/DgQSp0Cc/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Reboots gut flora & prebiotics",
      "Optimizes metabolic speed",
      "Balances daily blood sugar"
    ],
    "fr": [
      "Régénère la flore intestinale",
      "Optimise le métabolisme et transit",
      "Équilibre la glycémie quotidienne"
    ],
    "ar": [
      "يجدد ويبني بكتيريا الأمعاء النافعة",
      "يسرع عملية الهضم والتمثيل الغذائي",
      "يساعد على تنظيم سكر الدم اليومي"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium fermented organic apples",
      "Active digestive organic acids"
    ],
    "fr": [
      "Pommes biologiques fermentées de choix",
      "Acides organiques sains d'origine vivante"
    ],
    "ar": [
      "عصير تفاح عضوي مخمر بعناية فائقة",
      "خمائر وأنزيمات هاضمة نشطة طبيعية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Apple Enzyme Drink",
      "subtitle": "Luxury Fermented Active Apple Elixir",
      "desc": "An exceptional active botanical drink made of premium fermented organic apples. Packed with active digestive enzymes, prebiotics, and organic acids.",
      "details": "Reboots gut flora, speeds up digestion and nutrient absorption, detoxifies kidneys, balances blood sugar, and supports healthy natural weight loss."
    },
    "fr": {
      "name": "Boisson d'Enzymes de Pomme DXN",
      "subtitle": "Élixir fermenté de prestige aux pommes biologiques",
      "desc": "Une boisson botanique vivante d'exception formulée à partir de pommes bio fermentées. Riche en enzymes actives, prébiotiques et acides sains.",
      "details": "Régénère la flore intestinale, accélère la digestion, draine l'organisme, équilibre le taux de sucre et favorise la perte de poids naturelle."
    },
    "ar": {
      "name": "مشروب أنزيمات التفاح المخمر",
      "subtitle": "إكسير أنزيمات التفاح الحية والبروبيوتيك",
      "desc": "مشروب حيوي فاخر مُعد من تفاح عضوي مخمر بعناية فائقة. كنز حقيقي للأنزيمات الهاضمة النشطة، حمض الخليك الطبيعي، والبكتيريا النافعة.",
      "details": "يعيد بناء بيئة الأمعاء الميكروبية، يسرع الهضم وامتصاص الفيتامينات، يطهر مجاري الدم والكلى، ويساعد على خسارة الوزن الزائد بأمان."
    }
  }
},
{
  "id": "spirudle",
  "category": "immunity",
  "price": 104,
  "rating": 4.8,
  "reviewsCount": 33,
  "image": "https://i.ibb.co/4nXVsk8v/image.png",
  "images": [
    "https://i.ibb.co/4nXVsk8v/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Nutritious plant-based protein source",
      "Excellent natural source of iron",
      "Free of chemicals & coloring"
    ],
    "fr": [
      "Source de protéines végétales saine",
      "Excellente source naturelle de fer",
      "Sans aucun colorant chimique"
    ],
    "ar": [
      "مصدر ممتاز وغني للبروتين النباتي",
      "مصدر طبيعي وصحي لعنصر الحديد",
      "خالٍ تماماً من الملونات والمواد الصناعية"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium organic wheat flour",
      "High-purity Organic Spirulina"
    ],
    "fr": [
      "Farine de blé biologique de qualité",
      "Spiruline pure de culture certifiée bio"
    ],
    "ar": [
      "دقيق القمح الفاخر العضوي",
      "مسحوق فطر السبيرولينا العضوي النقي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Spirudle",
      "subtitle": "Premium Organic Spirulina Noodles",
      "desc": "A premium healthy instant noodle made from organic wheat flour enriched with high-density nutrients of Organic Spirulina. Completely free of synthetic colors.",
      "details": "Provides excellent protein, iron, and green superfood nutrition in a delicious, quick, and digestive meal perfect for both children and adults."
    },
    "fr": {
      "name": "DXN Spirudle",
      "subtitle": "Nouilles de prestige enrichies à la Spiruline bio",
      "desc": "Nouilles instantanées saines et nutritives, fabriquées à base de blé de qualité et enrichies en Spiruline biologique. Sans colorants synthétiques.",
      "details": "Une excellente source de protéines végétales, de fer et de nutriments verts dans un repas rapide et digeste, idéal pour enfants et adultes."
    },
    "ar": {
      "name": "نودلز سبيرودل الصحية",
      "subtitle": "شعيرية نودلز القمح المغذية بالسبيرولينا",
      "desc": "نودلز صحية فاخرة وسريعة التحضير مصنوعة من دقيق القمح العالي ومستخلص السبيرولينا العضوية الغنية بالحديد والبروتين. خالية من الملونات.",
      "details": "تقدم وجبة غذائية متكاملة وخفيفة للأطفال والشباب بديلة عن الأندومي التجارية الضارة، لتمد الجسم بالحديد ومضادات الأكسدة بلذة فائقة."
    }
  }
},
{
  "id": "spirudle-tom-yam",
  "category": "immunity",
  "price": 144,
  "rating": 4.8,
  "reviewsCount": 27,
  "image": "https://i.ibb.co/d0twxpvP/image.png",
  "images": [
    "https://i.ibb.co/d0twxpvP/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Exquisite, spicy, lemony soup",
      "Provides rich organic iron & fiber",
      "Gut-friendly and low in fat"
    ],
    "fr": [
      "Soupe piquante au goût de citron",
      "Source de fer organique et fibres",
      "Facile à digérer et faible en graisses"
    ],
    "ar": [
      "شوربة توم يام حارة وحامضة لذيذة",
      "توفر الحديد العضوي والألياف الهامة",
      "خفيفة على الأمعاء ومنخفضة الدهون"
    ]
  },
  "ingredientsList": {
    "en": [
      "Organic wheat flour with Spirulina",
      "Authentic Thai Tom Yam spices"
    ],
    "fr": [
      "Farine de blé à la Spiruline bio",
      "Épices et herbes thaïes authentiques"
    ],
    "ar": [
      "دقيق القمح المدعم بالسبيرولينا العضوية",
      "تتبيلة بهارات التوم يام التايلاندية الأصلية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Spirudle (Tom Yam)",
      "subtitle": "Premium Spirulina Noodles with Spicy Thai Tom Yam",
      "desc": "A premium healthy instant noodle crafted with organic Spirulina and blended with authentic, spicy, aromatic Thai Tom Yam seasoning. Absolutely delicious.",
      "details": "Enjoy gourmet, protein-packed alkaline noodles with a rich, fiery lemon-and-spice herb broth. High in natural iron and clean organic fibers."
    },
    "fr": {
      "name": "DXN Spirudle (Tom Yam)",
      "subtitle": "Nouilles à la Spiruline au bouillon thaï Tom Yam",
      "desc": "Nouilles instantanées saines à la Spiruline associées à un bouillon aromatique, épicé et authentique thaïlandais Tom Yam. Un délice gourmand.",
      "details": "Dégustez des nouilles alcalines riches en protéines végétales dans un bouillon épicé et citronné aux herbes thaïes. Source de fer et de fibres."
    },
    "ar": {
      "name": "سبيرودل بنكهة توم يام",
      "subtitle": "نودلز السبيرولينا بنكهة التوم يام التايلندية",
      "desc": "نودلز القمح والسبيرولينا الصحية الممزوجة ببهارات التوم يام التايلاندية الحارة والمنعشة بنكهة الحامض والليمون والأعشاب العطرية.",
      "details": "تجمع بين القيمة الغذائية العالية للسبيرولينا والمذاق الحار والممتع للشوربة التايلاندية الحقيقية لتعطيك وجبة دافئة ومنشطة غنية بالحديد."
    }
  }
},
{
  "id": "ganoodle-tom-yam",
  "category": "immunity",
  "price": 147,
  "rating": 4.8,
  "reviewsCount": 30,
  "image": "https://i.ibb.co/HTftqfM7/image.png",
  "images": [
    "https://i.ibb.co/HTftqfM7/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Clears digestive & intestinal tract",
      "Zero synthetic MSG or chemicals",
      "Supports body immunity defense"
    ],
    "fr": [
      "Purifie le système digestif et côlon",
      "Sans aucun glutamate synthétique",
      "Soutient les défenses immunitaires"
    ],
    "ar": [
      "يطهر ويغذي الأمعاء والقولون",
      "خالٍ تماماً من أحادي الصوديوم الاصطناعي",
      "يدعم جدار المناعة الطبيعية للجسم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Organic wheat flour with Reishi",
      "Thai Tom Yam herb seasoning"
    ],
    "fr": [
      "Farine de blé à l'extrait de Reishi bio",
      "Assaisonnement d'herbes Tom Yam thaïes"
    ],
    "ar": [
      "دقيق القمح وخلاصة الفطر الريشي العضوي",
      "بهارات وأعشاب التوم يام الآسيوية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Ganoodle (Tom Yam)",
      "subtitle": "Premium Reishi Noodles with Spicy Tom Yam",
      "desc": "A premium healthy instant noodle formulated with certified organic Ganoderma (Reishi) extract and paired with hot, spicy Thai Tom Yam seasoning.",
      "details": "Combines the powerful detox and cellular immunity of Reishi with an exotic, aromatic hot soup. Low-fat, MSG-free, and gut-friendly."
    },
    "fr": {
      "name": "DXN Ganoodle (Tom Yam)",
      "subtitle": "Nouilles au Ganoderma au bouillon épicé Tom Yam",
      "desc": "Nouilles instantanées saines formulées à l'extrait pur de Ganoderma (Reishi) et accompagnées de leur savoureux bouillon épicé Tom Yam.",
      "details": "Allie la détox et le soutien immunitaire du Reishi à une soupe parfumée et piquante. Sans glutamate de synthèse et très légère pour les intestins."
    },
    "ar": {
      "name": "جانودل بنكهة توم يام",
      "subtitle": "نودلز دقيق القمح بالفطر الريشي والبهارات الحارة",
      "desc": "نودلز صحية ممتازة معززة بخلاصة فطر الجانوديرما (الريشي) الطبيعي المطهر للأمعاء، مضافاً إليها نكهة التوم يام التايلاندية اللذيذة.",
      "details": "تنظف الأمعاء والقولون بفضل ألياف فطر الريشي، وتوفر مذاقاً آسيوياً حاراً وحامضاً فريداً من نوعه دون غلوتامات أو مواد ضارة."
    }
  }
},
{
  "id": "oocha-ganoderma",
  "category": "coffee",
  "price": 327,
  "rating": 4.9,
  "reviewsCount": 54,
  "image": "https://i.ibb.co/zHHr4Ff0/image.png",
  "images": [
    "https://i.ibb.co/zHHr4Ff0/image.png",
    "https://i.ibb.co/4wR6G14X/image.png",
    "https://i.ibb.co/Kj8K2ypM/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Deeply relaxing & mind centering",
      "Enhances healthy metabolism speed",
      "Creamy, rich Japanese Matcha latte"
    ],
    "fr": [
      "Très relaxant et recentre l'esprit",
      "Stimule la vitesse du métabolisme",
      "Matcha latte crémeux et savoureux"
    ],
    "ar": [
      "يساعد على الاسترخاء والهدوء العقلي",
      "يزيد من سرعة التمثيل الغذائي وحرق الدهون",
      "قوام كريمي غني بشاي الماتشا الياباني"
    ]
  },
  "ingredientsList": {
    "en": [
      "Japanese Matcha green tea",
      "Organic Reishi mushroom extract",
      "Healthy non-dairy creamer"
    ],
    "fr": [
      "Thé Vert Matcha japonais fin",
      "Extrait de Reishi biologique actif",
      "Crème végétale douce et digeste"
    ],
    "ar": [
      "شاي الماتشا الأخضر الياباني الفاخر",
      "مستخلص فطر ريشي عضوي معتمد",
      "مبيض ومكثف نباتي صحي خفيف"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Oocha Green Tea",
      "subtitle": "Luxury Reishi-Infused Matcha Latte",
      "desc": "An exceptional, velvety green tea blend combining premium Japanese Matcha, non-dairy creamer, and organic Reishi extract. Relaxing, balancing, and delicious.",
      "details": "Rich in polyphenols and catechins to promote calorie burn, boost concentration, stabilize mood, and reinforce cell immunity with a premium creamy texture."
    },
    "fr": {
      "name": "Thé Oocha au Ganoderma DXN",
      "subtitle": "Matcha Latte crémeux de prestige infusé au Reishi",
      "desc": "Un thé vert d'une onctuosité exceptionnelle associant Matcha japonais de qualité, crème végétale douce et extrait pur de Reishi biologique.",
      "details": "Riche en antioxydants et polyphénols pour stimuler le brûlage des graisses, stabiliser l'esprit, calmer le stress et renforcer l'immunité."
    },
    "ar": {
      "name": "شاي أوتشا المطور بالريشي",
      "subtitle": "لاتيه الشاي الأخضر ماتشا الفاخر بالريشي",
      "desc": "مزيج كريمي مخملي استثنائي يجمع بين شاي الماتشا الأخضر الياباني الفاخر والكريمة النباتية الخفيفة وخلاصة الفطر الريشي العضوي المهدئ.",
      "details": "غني جداً بالكاتيشينات ومضادات الأكسدة التي تنشط حرق السعرات، ترتب هرمونات الجسم، وتكافح التعب مع قوام كريمي غاية في اللذة."
    }
  }
},
{
  "id": "spirudle-curry",
  "category": "immunity",
  "price": 210,
  "rating": 4.8,
  "reviewsCount": 31,
  "image": "https://i.ibb.co/whN1Lc1J/image.png",
  "images": [
    "https://i.ibb.co/whN1Lc1J/image.png",
    "https://i.ibb.co/rfM606C8/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Comforting aromatic curry herbs",
      "Provides pristine iron and proteins",
      "Supports healthy digestion & liver"
    ],
    "fr": [
      "Mélange d'herbes de curry réconfortant",
      "Apporte du fer et des protéines",
      "Soutient la digestion et le foie"
    ],
    "ar": [
      "خلطة بهارات كاري دافئة وممتازة",
      "توفر الحديد العضوي والبروتين الطبيعي",
      "تدعم الهضم الصحي وتنشط الكبد"
    ]
  },
  "ingredientsList": {
    "en": [
      "Wheat noodles with organic Spirulina",
      "Aromatic turmeric curry spice blend"
    ],
    "fr": [
      "Nouilles de blé à la Spiruline bio",
      "Mélange d'épices de curry au curcuma"
    ],
    "ar": [
      "نودلز القمح بالسبيرولينا العضوية",
      "توليفة بهارات الكاري والكركم العطرية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Spirudle (Curry)",
      "subtitle": "Premium Spirulina Noodles with Aromatic Curry",
      "desc": "Delightful healthy alkaline noodles made with organic Spirulina, served with a rich, aromatic, and comforting curry spices blend.",
      "details": "Provides clean plant proteins and bioavailable iron, combined with turmeric-rich curry to support digestion, liver function, and systemic vitality."
    },
    "fr": {
      "name": "DXN Spirudle (Curry)",
      "subtitle": "Nouilles à la Spiruline au bouillon parfumé de Curry",
      "desc": "Nouilles de Spiruline saines et alcalines accompagnées d'un mélange d'épices de curry réconfortant et intensément parfumé.",
      "details": "Riche en fer et protéines de spiruline, associées au curcuma du curry pour optimiser la digestion, soutenir le foie et la vitalité interne."
    },
    "ar": {
      "name": "سبيرودل بنكهة الكاري",
      "subtitle": "نودلز السبيرولينا العضوية بخلطة بهارات الكاري",
      "desc": "شعيرية نودلز القمح والسبيرولينا الصحية معززة بتتبيلة الكاري الهندي العطري والدافئ، غني بالكركم المضاد للأكسدة.",
      "details": "تقدم تغذية ممتازة وبناءً قوياً للدم للأطفال بفضل السبيرولينا، وتنشط الكبد وتطرد الغازات والسموم بفضل بهارات الكاري والكركم الفعال."
    }
  }
},
{
  "id": "moricinia-700",
  "category": "immunity",
  "price": 586,
  "rating": 4.9,
  "reviewsCount": 115,
  "image": "https://i.ibb.co/Hfqs2qS4/image.png",
  "images": [
    "https://i.ibb.co/Hfqs2qS4/image.png",
    "https://i.ibb.co/PZQG2d7g/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": true,
  "stock": "limited",
  "benefitsList": {
    "en": [
      "Unrivaled active digestive enzyme density",
      "Repairs colon walls & regulates digestion",
      "Protects joints & soothes nerve pains"
    ],
    "fr": [
      "Densité d'enzymes digestives inégalée",
      "Répare le côlon et régule le transit",
      "Protège les articulations et nerfs"
    ],
    "ar": [
      "أعلى كثافة وتركيز للأنزيمات الهاضمة الحية",
      "يرمم جدار القولون وينظم عملية الهضم",
      "يحمي المفاصل ويهدئ آلام الأعصاب والتهيج"
    ]
  },
  "ingredientsList": {
    "en": [
      "100% organic fermented Morinda Citrifolia (Noni) juice"
    ],
    "fr": [
      "100% pur jus fermenté de Noni biologique"
    ],
    "ar": [
      "عصير ثمرة النوني (الموريندا) العضوية المخمرة 100%"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Moricinia (700ml)",
      "subtitle": "Elite Concentrated Fermented Noni Juice",
      "desc": "The ultimate 700ml elite bottle of fermented Morinda Citrifolia (Noni) juice. Unmatched enzyme density to repair intestines, calm nerves, and balance systems.",
      "details": "Directly sourced from organic noni plantations. Highly recommended for complete digestive rebuild, joint recovery, stress control, and long-term vitality."
    },
    "fr": {
      "name": "DXN Moricinia (700ml)",
      "subtitle": "Jus d'élite concentré fermenté de Noni",
      "desc": "La bouteille d'élite de 700ml de pur jus fermenté de Morinda Citrifolia (Noni). Une densité d'enzymes inégalée pour restaurer les intestins.",
      "details": "Source directe de plantations biologiques. Fortement recommandé pour régénérer la digestion, soulager les articulations et apaiser le stress chronique."
    },
    "ar": {
      "name": "عصير موريسينيا الكبير (700 مل)",
      "subtitle": "إكسير ثمرة النوني المخمر المركز للمناعة",
      "desc": "الزجاجة الكبرى الفاخرة بحجم 700 مل من عصير ثمرة النوني (الموريندا) المخمرة بالكامل. أعلى تركيز للأنزيمات الحية لإصلاح القولون والمعدة.",
      "details": "يعالج التهابات القولون العصبي المستعصية، يجدد خلايا الكبد التالفة، يدعم صحة الشرايين والمفاصل، وينظم ضغط الدم والنوم بفعالية قوية."
    }
  }
},
{
  "id": "moricinia-285",
  "category": "immunity",
  "price": 300,
  "rating": 4.8,
  "reviewsCount": 65,
  "image": "https://i.ibb.co/6cqgWG2d/image.png",
  "images": [
    "https://i.ibb.co/6cqgWG2d/image.png",
    "https://i.ibb.co/sd2yxCVs/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Calms bloating and acid reflux",
      "Cleans gut microflora & toxins",
      "Restores regular daily digest transit"
    ],
    "fr": [
      "Calme les ballonnements et reflux",
      "Purifie la flore des toxines",
      "Rétablit un transit régulier"
    ],
    "ar": [
      "يهدئ النفخة والغازات وارتجاع المريء",
      "يطهر الأمعاء من السموم والفضلات",
      "يعيد التوازن والراحة المنتظمة لعملية الهضم"
    ]
  },
  "ingredientsList": {
    "en": [
      "Pure fermented organic Noni (Morinda Citrifolia) juice"
    ],
    "fr": [
      "Pur jus fermenté de Noni biologique de culture"
    ],
    "ar": [
      "عصير ثمرة النوني (الموريندا) العضوية المخمرة طبيعياً"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Moricinia (285ml)",
      "subtitle": "Concentrated Fermented Noni Therapy Bottle",
      "desc": "The convenient 285ml therapy bottle of fermented Noni juice. Ideal to test the remarkable gut healing and anti-inflammatory power of active enzymes.",
      "details": "Helps calm colon irritation, improves digestive transit, stimulates cellular recovery, and boosts immune system responses quickly."
    },
    "fr": {
      "name": "DXN Moricinia (285ml)",
      "subtitle": "Bouteille de thérapie de jus de Noni fermenté",
      "desc": "Le format de 285ml idéal pour tester la puissance enzymatique et anti-inflammatoire du jus de Noni fermenté. Apaise les intestins irrités.",
      "details": "Calme l'irritation du côlon, favorise un transit intestinal régulier, accélère la régénération des cellules et renforce les défenses."
    },
    "ar": {
      "name": "عصير موريسينيا الصغير (285 مل)",
      "subtitle": "عبوة عصير النوني المخمر لدعم القولون والمعدة",
      "desc": "عبوة العناية الصحية والوقائية بحجم 285 مل من عصير النوني العضوي المخمر. الخيار السريع والأمثل لراحة القولون والأمعاء.",
      "details": "تساعد بفاعلية على موازنة بكتيريا الأمعاء النافعة، تسهيل الهضم الثقيل، تخفيف حموضة المعدة، وتطهير الجسم من الفضلات الراكدة."
    }
  }
},
{
  "id": "non-dairy-creamer",
  "category": "coffee",
  "price": 65,
  "rating": 4.6,
  "reviewsCount": 32,
  "image": "https://i.ibb.co/GQfnSpN4/image.png",
  "images": [
    "https://i.ibb.co/GQfnSpN4/image.png",
    "https://i.ibb.co/1H8Xg7F/image.png",
    "https://i.ibb.co/99JRwmJ6/image.png",
    "https://i.ibb.co/nqFWJ3mR/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "100% Lactose-free and gut-friendly",
      "Smooth, exquisite creamy taste",
      "Zero cholesterol vegetable-based"
    ],
    "fr": [
      "100% Sans lactose et très digeste",
      "Goût crémeux délicieusement onctueux",
      "Sans cholestérol d'origine végétale"
    ],
    "ar": [
      "خالٍ تماماً 100% من السكر واللاكتوز",
      "يعطي قواماً ومذاقاً كريمياً رائعاً",
      "خالٍ من الكوليسترول ومصنع من دهون نباتية"
    ]
  },
  "ingredientsList": {
    "en": [
      "Digestive healthy vegetable fats",
      "Clean creaming compounds"
    ],
    "fr": [
      "Matières grasses végétales saines",
      "Agents de crémage d'origine végétale"
    ],
    "ar": [
      "دهون نباتية صحية سريعة الهضم",
      "مكونات تكثيف ومذيبات طبيعية خفيفة"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Non-Dairy Creamer",
      "subtitle": "Healthy Vegetable-Based Beverage Creamer",
      "desc": "Premium quality non-dairy creamer crafted from digestive vegetable sources. Offers a luxurious, rich creamy texture to your favorite healthy drinks.",
      "details": "Absolutely lactose-free, light on the stomach, and free of cholesterol. The perfect clean companion for your hot coffee or tea."
    },
    "fr": {
      "name": "Crème Non Laitière DXN",
      "subtitle": "Crémeux végétal sain et digeste pour boissons",
      "desc": "Une crème non laitière de qualité supérieure fabriquée à base de graisses végétales digestes. Apporte une texture crémeuse et onctueuse à vos boissons.",
      "details": "Totalement sans lactose, légère pour l'estomac et sans cholestérol. Le compagnon idéal pour adoucir sainement vos cafés et thés chauds."
    },
    "ar": {
      "name": "مبيض القهوة النباتي دي إكس إن",
      "subtitle": "كريمة نباتية صحية سريعة الهضم خالية من اللاكتوز",
      "desc": "مبيض كريمة نباتي فاخر وعالي الجودة، مصمم خصيصاً لإضافة قوام كريمي ومذاق غني لقهوتك وشايك المفضل دون التسبب في ثقل للمعدة.",
      "details": "خالٍ تماماً من اللاكتوز والكوليسترول وسهل الهضم للغاية. الرفيق الصحي واللذيذ لتحضير قهوة صباحية ناعمة وخفيفة على الأمعاء والقولون."
    }
  }
},
{
  "id": "neph-v",
  "category": "immunity",
  "price": 620,
  "rating": 4.9,
  "reviewsCount": 41,
  "image": "https://i.ibb.co/QqnnPx5/image.png",
  "images": [
    "https://i.ibb.co/QqnnPx5/image.png",
    "https://i.ibb.co/FLzrkkzZ/image.png",
    "https://i.ibb.co/WvH8ybRF/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "limited",
  "benefitsList": {
    "en": [
      "Optimizes renal blood filtration",
      "Clears bladder & urinary tracts",
      "Prevents mineral crystallization"
    ],
    "fr": [
      "Optimise la filtration rénale du sang",
      "Nettoie la vessie et voies urinaires",
      "Prévient la cristallisation d'acides"
    ],
    "ar": [
      "يساعد على تصفية وتنظيف الدم في الكلى",
      "يطهر المسالك البولية والمثانة بفعالية",
      "يمنع ترسب وتراكم الأملاح والبلورات"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium targeted renal tonic herbs",
      "Organic cell drainage nutrients"
    ],
    "fr": [
      "Herbes toniques rénales ciblées de choix",
      "Nutriments drainants cellulaires biologiques"
    ],
    "ar": [
      "أعشاب ونباتات علاجية لتنشيط الكلى",
      "مستخلصات بيولوجية لتطهير الخلايا وسوائلها"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Neph-V",
      "subtitle": "Premium Organic Kidney & Urinary Support",
      "desc": "An advanced luxury organic formulation crafted with targeted tonic herbs to optimize renal filtration, support bladder health, and clean urinary tracts.",
      "details": "Supports your body's natural drainage mechanism, prevents crystallization, combats fluid retention, and strengthens kidney cell functions."
    },
    "fr": {
      "name": "DXN Neph-V",
      "subtitle": "Complément de prestige pour reins et voies urinaires",
      "desc": "Une formulation biologique avancée de haute pureté, élaborée à base d'herbes ciblées pour optimiser la filtration rénale et nettoyer les voies urinaires.",
      "details": "Soutient les mécanismes naturels d'élimination de l'organisme, prévient la cristallisation, combat la rétention d'eau et fortifie les fonctions rénales."
    },
    "ar": {
      "name": "نيف-في دي إكس إن الفاخر",
      "subtitle": "كبسولات الدعم الطبيعي للكلى والمجاري البولية",
      "desc": "تركيبة عشبية بيولوجية متطورة للغاية صُممت خصيصاً لتنشيط وظائف تصفية الكلى، تطهير المسالك البولية، ومنع ترسب الأملاح.",
      "details": "تدعم بفعالية تخلص الجسم من السموم والسوائل المحتبسة، تمنع تكون الحصوات والبلورات المزعجة، وتقوي حيوية أنسجة الكبد والكلى."
    }
  }
},
{
  "id": "oolong-tea",
  "category": "coffee",
  "price": 198,
  "rating": 4.8,
  "reviewsCount": 35,
  "image": "https://i.ibb.co/gMVLhjdn/image.png",
  "images": [
    "https://i.ibb.co/gMVLhjdn/image.png",
    "https://i.ibb.co/TxJYxhth/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Accelerates metabolic thermogenic burn",
      "Super-rich in clarifying polyphenols",
      "Exquisite, smooth roasted tea taste"
    ],
    "fr": [
      "Accélère la thermogenèse des graisses",
      "Très riche en polyphénols clarifiants",
      "Goût exquis de thé boisé torréfié"
    ],
    "ar": [
      "يسرع حرق الدهون والتمثيل الغذائي",
      "غني جداً بالبولي فينولات المطهرة للدم",
      "مذاق شاي صيني محمص غاية في اللذة"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium ground Chinese Oolong Tea leaves"
    ],
    "fr": [
      "Feuilles de Thé Oolong chinois de choix finement moulu"
    ],
    "ar": [
      "مسحوق أوراق شاي الأولونج الصيني الفاخر 100%"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Oolong Tea Powder",
      "subtitle": "Luxury Clarifying Chinese Oolong Dust",
      "desc": "Premium finely ground traditional Chinese Oolong Tea. Celebrated for high polyphenol concentrations that strongly promote metabolic fat burn and clarity.",
      "details": "Enhances digestion, stimulates thermogenesis to control natural weight, fights cell oxidation, and offers an elegant woodsy roasted flavor profile."
    },
    "fr": {
      "name": "Thé Oolong en Poudre DXN",
      "subtitle": "Poudre de thé Oolong chinois de prestige",
      "desc": "Thé traditionnel Oolong chinois finement moulu de première qualité. Célèbre pour sa richesse en polyphénols qui stimulent le métabolisme des graisses.",
      "details": "Facilite la digestion après les repas lourds, stimule la thermogenèse pour la perte de poids, combat l'oxydation cellulaire et offre un arôme boisé unique."
    },
    "ar": {
      "name": "بودرة شاي أولونغ الفاخرة",
      "subtitle": "مسحوق شاي الأولونج الصيني لتنشيط الميتابوليزم",
      "desc": "مسحوق شاي الأولونج الصيني التقليدي الفاخر المطحون بعناية فائقة. معروف بقدرته العالية على تحفيز حرق الدهون وزيادة التركيز الذهني.",
      "details": "يدعم الهضم بعد الوجبات الدسمة، يسرع حرق السعرات الحرارية الزائدة طبيعياً، يحارب تلف خلايا الجسم بفضل مضادات الأكسدة، ويتميز بمذاقه الغني."
    }
  }
},
{
  "id": "cordyceps-coffee-3in1",
  "category": "coffee",
  "price": 299,
  "rating": 4.9,
  "reviewsCount": 85,
  "image": "https://i.ibb.co/Y76jhsH5/image.png",
  "images": [
    "https://i.ibb.co/Y76jhsH5/image.png",
    "https://i.ibb.co/jv3fqvhT/image.png",
    "https://i.ibb.co/7dk8ZBh5/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Boosts lung oxygenation and respiratory endurance",
      "Enhances natural stamina and energy levels",
      "Soothes physical stress and supports cellular vitality"
    ],
    "fr": [
      "Améliore l'oxygénation des poumons et l'endurance respiratoire",
      "Augmente la force naturelle et le niveau d'énergie",
      "Apaise le stress physique et soutient la vitalité cellulaire"
    ],
    "ar": [
      "يحسن أكسجين الرئتين والقدرة على التحمل التنفسي",
      "يعزز مستويات القوة البدنية والنشاط الطبيعي",
      "يهدئ الإجهاد البدني ويدعم الحيوية الخلوية"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium instant Arabica coffee",
      "Organic Cordyceps sinensis extract",
      "Healthy non-dairy creamer & cane sugar"
    ],
    "fr": [
      "Café Arabica soluble de première qualité",
      "Extrait de champignon Cordyceps sinensis actif",
      "Crème végétale saine et sucre de canne"
    ],
    "ar": [
      "مسحوق قهوة أرابيكا سريعة التحضير الفاخرة",
      "مستخلص فطر الكورديسيبس العضوي",
      "مبيض كريمة نباتي صحي وسكر قصب طبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Cordyceps Coffee 3 in 1",
      "subtitle": "Premium Cellular Energy Cocoa-Coffee Mix",
      "desc": "An exceptional blend of premium quality instant coffee, active Cordyceps mushroom extract, and organic cane sugar.",
      "details": "Specially formulated with Cordyceps to improve oxygen utilization, increase respiratory endurance, and boost physical stamina naturally."
    },
    "fr": {
      "name": "Café Cordyceps 3 en 1 DXN",
      "subtitle": "Énergie cellulaire & endurance physique",
      "desc": "Un mélange exceptionnel de café instantané, d'extrait de champignon Cordyceps actif, de crème non laitière et de sucre de canne.",
      "details": "Spécialement formulé pour améliorer l'oxygénation cellulaire, augmenter la capacité respiratoire et surmonter la fatigue physique."
    },
    "ar": {
      "name": "قهوة كورديسيبس 3 في 1",
      "subtitle": "طاقة الخلايا والتحمل البدني الفائق",
      "desc": "مزيج استثنائي يجمع بين القهوة الفاخرة وخلاصة فطر الكورديسيبس المغذي ومبيض كريمة نباتي صحي.",
      "details": "مُعد خصيصاً لزيادة مستويات الطاقة وتحسين وظائف الجهاز التنفسي والقدرة على التحمل البدني ومقاومة الإرهاق اليومي."
    }
  }
},
{
  "id": "himalayan-salt",
  "category": "immunity",
  "price": 149,
  "rating": 5.0,
  "reviewsCount": 46,
  "image": "https://i.ibb.co/dJx9Zcqr/image.png",
  "images": [
    "https://i.ibb.co/dJx9Zcqr/image.png",
    "https://i.ibb.co/RT7cv3cG/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": true,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Packed with 84 essential health-promoting trace minerals",
      "Supports cellular hydration and electrolyte balance",
      "Promotes optimal digestion and nutrient absorption"
    ],
    "fr": [
      "Riche en 84 oligo-éléments essentiels à la santé",
      "Soutient l'hydratation et l'équilibre des électrolytes",
      "Favorise une digestion optimale et l'assimilation"
    ],
    "ar": [
      "غني بـ 84 من المعادن النادرة الأساسية لتعزيز الصحة",
      "يدعم ترطيب الخلايا وتوازن الكهارل والكهرباء في الجسم",
      "يعزز الهضم المثالي وامتصاص العناصر الغذائية بفعالية"
    ]
  },
  "ingredientsList": {
    "en": [
      "100% natural, unrefined pink Himalayan mineral salt crystals"
    ],
    "fr": [
      "Cristaux de sel minéral rose de l'Himalaya 100% naturel"
    ],
    "ar": [
      "بلورات ملح الهيمالايا المعدني الوردي الطبيعي غير المكرر 100%"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Himalayan Salt",
      "subtitle": "Pure Mineral-Rich Pink Crystal Salt",
      "desc": "An ancient, unrefined pink salt mined from the pristine Himalayan mountains, retaining 84 essential trace minerals.",
      "details": "Supports cellular hydration, balances internal pH levels, aids optimal digestion, and is free of bleaching agents, microplastics, or anti-caking chemicals."
    },
    "fr": {
      "name": "Sel de l'Himalaya DXN",
      "subtitle": "Cristaux de sel rose ultra-purs",
      "desc": "Un sel rose ancien et non raffiné extrait des montagnes vierges de l'Himalaya, conservant 84 minéraux essentiels.",
      "details": "Soutient l'hydratation cellulaire, régule le pH de l'organisme, améliore la digestion et est garanti sans agents de blanchiment ni additifs chimiques."
    },
    "ar": {
      "name": "ملح الهيمالايا الوردي دي إكس إن",
      "subtitle": "كريستالات الملح الصافي الغني بالمعادن",
      "desc": "ملح وردي طبيعي غير مكرر مستخرج من جبال الهيمالايا العريقة، يحتوي على 84 معدناً نادراً أساسياً لصحة الجسم.",
      "details": "يدعم توازن السوائل في الخلايا، يعزز الهضم الصحي، يعدل درجة حموضة الجسم (pH)، وخالٍ تماماً من المبيضات الاصطناعية والمواد الكيميائية."
    }
  }
},
{
  "id": "black-coffee-mix",
  "category": "coffee",
  "price": 299,
  "rating": 4.9,
  "reviewsCount": 112,
  "image": "https://i.ibb.co/cXb3cbS8/image.png",
  "images": [
    "https://i.ibb.co/cXb3cbS8/image.png",
    "https://i.ibb.co/hFZRfhh1/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Sugar-free formula suitable for diabetic wellness",
      "Supports active fat burn and metabolic health",
      "Provides rapid mental clarity without digestive acidity"
    ],
    "fr": [
      "Formule sans sucre adaptée au bien-être diabétique",
      "Soutient le métabolisme et brûle les graisses actives",
      "Offre une clarté mentale rapide sans acidité gastrique"
    ],
    "ar": [
      "تركيبة خالية من السكر مناسبة لمرضى السكري والرجيم",
      "يدعم حرق الدهون النشط والصحة الأيضية",
      "يمنح وضوحاً وتركيزاً ذهنياً سريعاً دون حموضة في المعدة"
    ]
  },
  "ingredientsList": {
    "en": [
      "Brazilian gourmet dark-roasted coffee beans",
      "Organic Ganoderma lucidum (GL/RG) extracts"
    ],
    "fr": [
      "Grains de café brésilien à torréfaction foncée",
      "Extraits de Ganoderma lucidum biologique actif"
    ],
    "ar": [
      "حبوب بن برازيلية فاخرة محمصة بعناية",
      "مستخلص الفطر الريشي الجانوديرما العضوي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Black Coffee Mix",
      "subtitle": "Sugar-Free Premium Roasted Ganoderma Roast",
      "desc": "A premium sugar-free black coffee enriched with cell-protecting organic Ganoderma lucidum extracts.",
      "details": "Delivers a robust, bold traditional roasted aroma that actively boosts focus and stamina without causing digestive acidity."
    },
    "fr": {
      "name": "Mélange Café Noir DXN",
      "subtitle": "Café torréfié sans sucre au Ganoderma",
      "desc": "Un café noir de qualité supérieure, sans sucre, enrichi d'extraits actifs de champignon Ganoderma (Reishi).",
      "details": "Offre un arôme corsé et riche qui stimule la concentration et l'énergie mentale sans causer d'acidité gastrique."
    },
    "ar": {
      "name": "خلطة القهوة السوداء الفاخرة",
      "subtitle": "قهوة سوداء فاخرة خالية من السكر بالريشي",
      "desc": "قهوة سوداء غنية ومركزة خالية تماماً من السكر، معززة بفوائد الفطر الريشي العضوي لطرد السموم وتنشيط الدورة الدموية.",
      "details": "تمنحك تركيزاً ذهنياً عالياً ونشاطاً مستداماً طوال اليوم بفضل خلوها من المواد الحافظة والسكريات المضافة."
    }
  }
},
{
  "id": "coffee-mix-3in1",
  "category": "coffee",
  "price": 299,
  "rating": 4.9,
  "reviewsCount": 165,
  "image": "https://i.ibb.co/Q3TBFpk4/image.png",
  "images": [
    "https://i.ibb.co/Q3TBFpk4/image.png",
    "https://i.ibb.co/JFjsN3FD/image.png",
    "https://i.ibb.co/5X2hVdHp/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": true,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Smooth, creamy gourmet blend for steady concentration",
      "Infused with organic Reishi to assist metabolic cellular detox",
      "Extremely gentle on the stomach with zero digestive distress"
    ],
    "fr": [
      "Mélange gourmand onctueux pour une concentration constante",
      "Infusé de Reishi bio pour aider la détox cellulaire active",
      "Très doux pour l'estomac avec zéro inconfort digestif"
    ],
    "ar": [
      "مزيج كريمي ناعم يمنحك تركيزاً مستداماً دون اضطراب",
      "معزز بالفطر الريشي لدعم تنقية الخلايا وطرد الفضلات",
      "لطيف جداً على المعدة ويمنع حدوث الغازات والحموضة"
    ]
  },
  "ingredientsList": {
    "en": [
      "Selected Arabica coffee beans, organic Ganoderma extract, non-dairy creamer, cane sugar"
    ],
    "fr": [
      "Grains de café Arabica sélectionnés, extrait de Reishi, crème végétale, sucre de canne"
    ],
    "ar": [
      "حبوب بن أرابيكا الفاخرة، مستخلص الجانوديرما العضوي، مبيض نباتي، سكر قصب طبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Coffee Mix 3 in 1",
      "subtitle": "Creamy Ganoderma Arabica Harmony",
      "desc": "A rich and smooth blend of fine quality gourmet coffee beans, organic Ganoderma lucidum extract, and delicious non-dairy creamer.",
      "details": "Perfectly balanced flavor profile that supports natural cell renewal, provides steady focus, and neutralizes acidic digestive discomfort."
    },
    "fr": {
      "name": "Mélange Café 3 en 1 DXN",
      "subtitle": "Café arabica onctueux au Ganoderma",
      "desc": "Une alliance crémeuse de grains de café arabica sélectionnés, d'extraits de Reishi bio et d'un délicieux lait végétal.",
      "details": "Arôme onctueux et riche qui favorise le renouvellement cellulaire, maintient une vigilance constante et apaise l'estomac."
    },
    "ar": {
      "name": "خلطة القهوة 3 في 1 الفاخرة",
      "subtitle": "قهوة أرابيكا كريمية ناعمة بالفطر الريشي",
      "desc": "مزيج رائع يجمع بين حبوب قهوة أرابيكا الفاخرة، ومستخلص الفطر الريشي العضوي، ومبيض كريمة نباتي خفيف.",
      "details": "تتميز بطعم غني ومتوازن يعزز طرد السموم من الخلايا، يدعم الهضم المريح، ويمنح الجسم حيوية متجددة يومياً."
    }
  }
},
{
  "id": "coffee-3in1-mix-lite",
  "category": "coffee",
  "price": 299,
  "rating": 4.8,
  "reviewsCount": 94,
  "image": "https://i.ibb.co/8gZWxHPD/image.png",
  "images": [
    "https://i.ibb.co/8gZWxHPD/image.png",
    "https://i.ibb.co/wFp1YKYL/image.png",
    "https://i.ibb.co/PZ6xR59M/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Lighter caffeine content, ideal for late-day enjoyment",
      "Smooth, velvety lather that feels wonderful on the palate",
      "Contains organic Reishi extract to maintain general wellness"
    ],
    "fr": [
      "Faible teneur en caféine, idéal en fin de journée",
      "Mousse onctueuse et veloutée délicieuse au palais",
      "Contient de l'extrait de Reishi bio pour le tonus général"
    ],
    "ar": [
      "محتوى كافيين خفيف، مثالي للاسترخاء والمساء",
      "رغوة مخملية غنية تمنحك شعوراً بالمتعة والدفء",
      "تحتوي على خلاصة الفطر الريشي العضوي للمحافظة على الصحة العامة"
    ]
  },
  "ingredientsList": {
    "en": [
      "Mildly roasted premium coffee beans, organic Red Reishi, natural milk alternative, cane sugar"
    ],
    "fr": [
      "Grains de café torréfaction légère, Reishi rouge bio, lait végétal doux, sucre"
    ],
    "ar": [
      "حبوب بن فاخرة محمصة بدرجة خفيفة، ريشي أحمر عضوي، مبيض كريمة خفيف، سكر"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Coffee 3 in 1 Mix Lite",
      "subtitle": "Light & Smooth Ganoderma Brew",
      "desc": "A lighter, milder formula of our signature 3-in-1 coffee blend, perfect for a gentle caffeine pickup.",
      "details": "Formulated with premium Reishi extract to bolster immune health while delivering a delicate, velvety smooth taste."
    },
    "fr": {
      "name": "Café 3 en 1 Mix Lite DXN",
      "subtitle": "Café léger et velouté au Ganoderma",
      "desc": "Une formule plus légère et douce de notre café 3-en-1 signature, idéale pour une pause douceur revigorante.",
      "details": "Enrichi en extrait de Reishi pour fortifier les défenses naturelles tout en offrant une texture fine et veloutée."
    },
    "ar": {
      "name": "قهوة لايت 3 في 1 دي إكس إن",
      "subtitle": "قهوة خفيفة وناعمة المذاق بالريشي",
      "desc": "نسخة خفيفة وناعمة من قهوة 3 في 1 الشهيرة، مثالية لعشاق النكهة الهادئة والخفيفة على المعدة.",
      "details": "معززة بالفطر الريشي العضوي لدعم الجهاز المناعي مع الحفاظ على تجربة مذاق مخملية خفيفة ولطيفة."
    }
  }
},
{
  "id": "eu-coffee-mix",
  "category": "coffee",
  "price": 326,
  "rating": 4.9,
  "reviewsCount": 73,
  "image": "https://i.ibb.co/ccMh9B2k/image.png",
  "images": [
    "https://i.ibb.co/ccMh9B2k/image.png",
    "https://i.ibb.co/XZ76pcpb/image.png",
    "https://i.ibb.co/fGPwD8g2/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Complies with European food safety and quality standards",
      "Gently cleanses body toxins and promotes regular metabolic rhythm",
      "Provides an exquisite continental roasted flavor profile"
    ],
    "fr": [
      "Conforme aux normes européennes de sécurité alimentaire",
      "Élimine les toxines en douceur et régule le transit",
      "Offre un profil aromatique continental raffiné"
    ],
    "ar": [
      "مطابق لمعايير الجودة وسلامة الأغذية الأوروبية الصارمة",
      "يطهر الجسم بلطف من الفضلات ويدعم عملية حرق الدهون",
      "يتميز بمذاق غني ومحمص يحاكي أرقى المقاهي الأوروبية"
    ]
  },
  "ingredientsList": {
    "en": [
      "Fine European-grade Arabica coffee, premium organic Ganoderma powder"
    ],
    "fr": [
      "Café Arabica de qualité européenne, poudre de Ganoderma bio supérieure"
    ],
    "ar": [
      "حبوب قهوة أرابيكا بجودة أوروبية فائقة، بودرة فطر الريشي العضوية"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN EU Coffee Mix",
      "subtitle": "Premium European Blend with Ganoderma",
      "desc": "An elegant gourmet coffee mix certified to European quality standards, infused with organic Ganoderma.",
      "details": "Smooth taste profile crafted to optimize natural digestion, promote gentle detox, and support daily stamina."
    },
    "fr": {
      "name": "Mélange Café EU DXN",
      "subtitle": "Sélection européenne de prestige au Ganoderma",
      "desc": "Un mélange de café de qualité gourmet certifié conforme aux normes européennes strictes, infusé au Reishi.",
      "details": "Un café d'une grande finesse qui optimise la digestion, favorise la détoxification douce et soutient l'endurance."
    },
    "ar": {
      "name": "قهوة دي إكس إن الأوروبية",
      "subtitle": "المزيج الأوروبي الفاخر المدعم بالريشي",
      "desc": "قهوة فاخرة بمواصفات جودة أوروبية صارمة، مدعمة بالفطر الريشي العضوي للاستفادة القصوى من المغذيات.",
      "details": "مذاق كلاسيكي رائع يدعم تنشيط الميتابوليزم، يساعد على تنقية الجسم من الفضلات، ويحافظ على مستويات طاقة متزنة."
    }
  }
},
{
  "id": "lingzhi-coffee-mix-2in1",
  "category": "coffee",
  "price": 280,
  "rating": 4.9,
  "reviewsCount": 142,
  "image": "https://i.ibb.co/rRMw68wf/image.png",
  "images": [
    "https://i.ibb.co/rRMw68wf/image.png",
    "https://i.ibb.co/spFtLN13/image.png",
    "https://i.ibb.co/3YmKDTFt/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "100% sugar-free, carbohydrate-conscious coffee",
      "Strong diuretic properties that flush body water retention",
      "Accelerates metabolic burn, excellent for daily fitness"
    ],
    "fr": [
      "100% sans sucre, idéal pour le contrôle des glucides",
      "Propriétés diurétiques favorisant l'élimination de l'eau",
      "Accélère le métabolisme, excellent pour le fitness quotidien"
    ],
    "ar": [
      "خالية تماماً من السكر ومناسبة لنمط الحياة قليل الكربوهيدرات",
      "مدرة طبيعية وممتازة للتخلص من احتباس السوائل في الجسم",
      "تسرع معدل حرق الدهون، وهي رائعة لممارسي الرياضة والدايت"
    ]
  },
  "ingredientsList": {
    "en": [
      "Brazilian high-altitude roasted coffee beans, pure Red Reishi (RG) extract"
    ],
    "fr": [
      "Fèves de café du Brésil torréfiées, extrait pur de Reishi rouge (RG)"
    ],
    "ar": [
      "حبوب بن برازيلية من المرتفعات محمصة، مستخلص ريشي أحمر نقي (RG)"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Lingzhi Coffee Mix 2 in 1",
      "subtitle": "Premium Sugar-Free Instant Arabica Brew",
      "desc": "The ultimate pure black instant coffee made from selected Brazilian coffee beans, blended with active Red Reishi.",
      "details": "Zero added sugar or milk. Heavily supports detoxification, boosts fat metabolism, and helps regulate blood circulation."
    },
    "fr": {
      "name": "Café Lingzhi 2 en 1 DXN",
      "subtitle": "Café instantané sans sucre de première qualité",
      "desc": "Le nec plus ultra du café noir instantané pur, élaboré à partir de fèves du Brésil sélectionnées et de Reishi rouge.",
      "details": "Sans sucre ajouté ni lait. Soutient efficacement l'élimination des toxines, stimule le métabolisme et régule la circulation."
    },
    "ar": {
      "name": "قهوة لينجزي 2 في 1 الفاخرة",
      "subtitle": "قهوة سوداء نقية خالية من السكر بالريشي",
      "desc": "القهوة السوداء النقية سريعة التحضير المصنوعة من حبوب البن البرازيلية الفاخرة والمعززة بخلاصة فطر الجانوديرما.",
      "details": "خالية تماماً من السكر والألوان الاصطناعية. تساعد بقوة في طرد السموم، حرق السعرات، وتنشيط الدورة الدموية بشكل طبيعي."
    }
  }
},
{
  "id": "dxn-cordyceps-coffee-mix",
  "category": "coffee",
  "price": 299,
  "rating": 4.9,
  "reviewsCount": 89,
  "image": "https://i.ibb.co/jkvFMVcJ/image.png",
  "images": [
    "https://i.ibb.co/jkvFMVcJ/image.png",
    "https://i.ibb.co/D0Rg4gJ/image.png",
    "https://i.ibb.co/nM1wC4GV/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": true,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Enhances cellular oxygen uptake and lung function",
      "Boosts renal vitality and kidney health",
      "Fights fatigue and maintains sharp cognitive focus"
    ],
    "fr": [
      "Améliore l'assimilation d'oxygène cellulaire et la fonction pulmonaire",
      "Renforce la vitalité rénale et la santé des reins",
      "Combat la fatigue et maintient une concentration cognitive aiguisée"
    ],
    "ar": [
      "يعزز امتصاص خلايا الجسم للأكسجين ويقوي وظيفة الرئتين",
      "ينشط خلايا الكلى ويدعم صحة الجهاز البولي بفعالية",
      "يحارب التعب اليومي ويحافظ على مستويات تركيز ذهني عالية"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium instant coffee powder, authentic Cordyceps sinensis extract"
    ],
    "fr": [
      "Café soluble de première qualité, extrait authentique de Cordyceps sinensis"
    ],
    "ar": [
      "بودرة قهوة سريعة التحضير الفاخرة، مستخلص فطر الكورديسيبس النقي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Cordyceps Coffee Mix",
      "subtitle": "Premium Vitality & Stamina Brew",
      "desc": "A healthy coffee formulation crafted with premium coffee powder and therapeutic Cordyceps sinensis extract.",
      "details": "Specifically boosts mental alertness, enhances physical stamina, and supports optimal lung and kidney health."
    },
    "fr": {
      "name": "Mélange Café Cordyceps DXN",
      "subtitle": "Café vitalité & endurance suprême",
      "desc": "Une formule saine combinant un café de haute qualité et de l'extrait thérapeutique de Cordyceps actif.",
      "details": "Améliore la clarté mentale, augmente les performances sportives et soutient le bon fonctionnement pulmonaire et rénal."
    },
    "ar": {
      "name": "مزيج قهوة كورديسيبس",
      "subtitle": "مشروب النشاط الذهني والقدرة البدنية",
      "desc": "تركيبة فريدة وصحية تجمع بين حبوب البن الفاخرة المطحونة مع فطر الكورديسيبس سينينسيس الطبيعي.",
      "details": "تزيد التركيز والصفاء الذهني، ترفع من كفاءة الأداء البدني، وتدعم صحة الرئتين ووظائف الكلى بشكل فعال."
    }
  }
},
{
  "id": "vita-coffee-mix",
  "category": "coffee",
  "price": 368,
  "rating": 4.9,
  "reviewsCount": 128,
  "image": "https://i.ibb.co/60RZXTn4/image.png",
  "images": [
    "https://i.ibb.co/60RZXTn4/image.png",
    "https://i.ibb.co/4wJnRP74/image.png",
    "https://i.ibb.co/pvP3nNWx/image.png"
  ],
  "isBestSeller": true,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Synergistically regulates hormones and nervous system health",
      "Increases continuous microcirculation and muscle blood flow",
      "Deeply adaptive against severe physical stress and burnout"
    ],
    "fr": [
      "Régule en synergie les hormones et le système nerveux",
      "Améliore la microcirculation sanguine et le flux musculaire",
      "Soutien adaptogène puissant contre le stress physique et le surmenage"
    ],
    "ar": [
      "ينظم بشكل تآزري توازن الهرمونات وصحة الجهاز العصبي",
      "يزيد التدفق الدموي الدقيق والأكسجين في العضلات والأنسجة",
      "عشبي متكيف يعالج حالات التعب الشديد والاحتراق البدني"
    ]
  },
  "ingredientsList": {
    "en": [
      "Brazilian instant coffee, Panax Ginseng extract, Tongkat Ali extract, organic Reishi mushroom"
    ],
    "fr": [
      "Café soluble brésilien, extrait de Panax Ginseng, extrait de Tongkat Ali, Reishi bio"
    ],
    "ar": [
      "قهوة برازيلية سريعة التحضير، خلاصة جينسينج باناكس، خلاصة عكازة علي، فطر ريشي عضوي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Vita Coffee Mix",
      "subtitle": "Elite Traditional Herbal Adaptogen Coffee",
      "desc": "A premium herbal coffee formulated with high quality instant coffee, Ginseng, Tongkat Ali, and Reishi mushroom.",
      "details": "A powerful natural adaptogen blend that restores hormonal balance, relieves daily stress, and improves endurance."
    },
    "fr": {
      "name": "Mélange Café Vita DXN",
      "subtitle": "Café d'exception aux plantes adaptogènes",
      "desc": "Un café haut de gamme enrichi de Ginseng, de Tongkat Ali et de champignon Reishi pour une action fortifiante.",
      "details": "Un puissant tonique adaptogène qui équilibre le métabolisme, réduit le stress et améliore l'endurance globale."
    },
    "ar": {
      "name": "قهوة فيتا دي إكس إن الفاخرة",
      "subtitle": "قهوة الأعشاب الحيوية وتنشيط الهرمونات",
      "desc": "قهوة فريدة غنية بأقوى الأعشاب الطبيعية المنشطة: الجينسنغ، عكازة علي (تونغكات علي)، والفطر الريشي المعالج.",
      "details": "تساعد في موازنة هرمونات الجسم، التخلص من الإجهاد البدني والذهني، وزيادة تدفق الدم والأكسجين للعضلات."
    }
  }
},
{
  "id": "zhi-mocha-mix",
  "category": "coffee",
  "price": 318,
  "rating": 4.9,
  "reviewsCount": 105,
  "image": "https://i.ibb.co/B5xpDXC3/image.png",
  "images": [
    "https://i.ibb.co/B5xpDXC3/image.png",
    "https://i.ibb.co/bgcYKs2Z/image.png",
    "https://i.ibb.co/pvvcNtvr/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": true,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Rich chocolatey taste with full-bodied roasted coffee notes",
      "High in protective antioxidant flavonoids from pure cocoa",
      "Aids digestion and delivers non-jittery calm focus"
    ],
    "fr": [
      "Goût chocolaté riche avec des notes de café torréfié corsé",
      "Riche en flavonoïdes antioxydants protecteurs du cacao pur",
      "Aide la digestion et apporte un calme mental sans nervosité"
    ],
    "ar": [
      "طعم شوكولاتة غني ممتزج بنكهة القهوة المحمصة والمركزة",
      "غني جداً بمضادات الأكسدة القوية (الفلافونويد) من الكاكاو الصافي",
      "يدعم الهضم المريح ويمنح تركيزاً ذهنياً هادئاً وخالٍ من التوتر"
    ]
  },
  "ingredientsList": {
    "en": [
      "Premium quality cocoa powder, roasted Arabica beans, Ganoderma lucidum extract, natural sweetener"
    ],
    "fr": [
      "Poudre de cacao supérieure, fèves d'Arabica torréfiées, extrait de Ganoderma, édulcorant naturel"
    ],
    "ar": [
      "بودرة كاكاو فاخرة، حبوب بن أرابيكا محمصة، مستخلص الجانوديرما الريشي، محلي طبيعي"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN Zhi Mocha Mix",
      "subtitle": "Luxury Ganoderma Chocolate Coffee",
      "desc": "A delicious, decadent combination of premium cocoa beans, roasted Arabica coffee, and organic Ganoderma lucidum.",
      "details": "Satisfies chocolate cravings healthily. Supports digestion, provides rich antioxidants, and gives steady, calm mental energy."
    },
    "fr": {
      "name": "Mélange Zhi Mocha DXN",
      "subtitle": "Moka crémeux au chocolat & Ganoderma",
      "desc": "Une alliance somptueuse de cacao de première qualité, de café Arabica torréfié et de Ganoderma.",
      "details": "Comble les envies de chocolat de manière saine, facilite la digestion et apporte de précieux antioxydants."
    },
    "ar": {
      "name": "زي موكا دي إكس إن الفاخر",
      "subtitle": "مزيج الشوكولاتة والقهوة بالريشي",
      "desc": "توليفة رائعة وغنية تجمع بين أفخر أنواع الكاكاو، وحبوب بن أرابيكا، والفطر الريشي المغذي.",
      "details": "تلبي رغبتك في تناول الشوكولاتة بشكل صحي وآمن، تدعم عملية الهضم، وتمدك بمضادات الأكسدة والنشاط المتزن."
    }
  }
},
{
  "id": "white-coffee-zhino-mix",
  "category": "coffee",
  "price": 280,
  "rating": 4.8,
  "reviewsCount": 116,
  "image": "https://i.ibb.co/Jwrf4dv6/image.png",
  "images": [
    "https://i.ibb.co/Jwrf4dv6/image.png",
    "https://i.ibb.co/XxRpbF3F/image.png",
    "https://i.ibb.co/FLDGQvbH/image.png"
  ],
  "isBestSeller": false,
  "isMostPopular": false,
  "stock": "high",
  "benefitsList": {
    "en": [
      "Italian-style frothy cappuccino for a luxurious coffee experience",
      "Alkaline Reishi prevents any acid reflux or heavy stomach",
      "Boosts microcirculation and promotes positive mood"
    ],
    "fr": [
      "Cappuccino mousseux style italien pour une expérience café luxe",
      "Le Reishi alcalin prévient tout reflux acide ou lourdeur d'estomac",
      "Active la microcirculation et favorise la bonne humeur"
    ],
    "ar": [
      "كابوتشينو برغوة كثيفة غنية على الطريقة الإيطالية لتجربة فاخرة",
      "الفطر الريشي القلوي يمنع تماماً ارتداد المريء أو ثقل المعدة",
      "ينشط الدورة الدموية الصغرى ويدعم المزاج والنشاط الإيجابي"
    ]
  },
  "ingredientsList": {
    "en": [
      "Gourmet roasted coffee beans, premium foamy dairy alternative, organic Ganoderma extract, natural cane sugar"
    ],
    "fr": [
      "Grains de café torréfiés gourmet, émulsifiant crémeux, extrait de Ganoderma, sucre de canne"
    ],
    "ar": [
      "حبوب بن محمصة فاخرة، بديل حليب رغوي كريمي ممتاز، مستخلص الفطر الريشي، سكر"
    ]
  },
  "translations": {
    "en": {
      "name": "DXN White Coffee Zhino Mix",
      "subtitle": "Authentic Italian Style Cappuccino Brew",
      "desc": "A rich, authentic Italian-style cappuccino blend topped with a thick layer of creamy foam, infused with Reishi.",
      "details": "Provides a luxurious, velvety coffee experience that is low in acidity, gentle on the digestive tract, and highly restorative."
    },
    "fr": {
      "name": "Mélange Cappuccino Zhino DXN",
      "subtitle": "Cappuccino de style italien au Ganoderma",
      "desc": "Un cappuccino riche et authentique de style italien avec une mousse onctueuse et dense, infusé de Reishi.",
      "details": "Offre une expérience café luxueuse et douce, avec une faible acidité, respectueuse du système digestif."
    },
    "ar": {
      "name": "قهوة كابوتشينو زينو الفاخرة",
      "subtitle": "كابوتشينو على الطريقة الإيطالية بالريشي",
      "desc": "مزيج الكابوتشينو الإيطالي الأصيل واللذيذ برغوة كريمية غنية وكثيفة، معزز بفوائد الجانوديرما المهدئة.",
      "details": "يقدم تجربة قهوة فاخرة بلمسة مخملية، خفيف للغاية على المعدة، ويدعم تجديد خلايا الجسم بكفاءة."
    }
  }
}
];

