export interface PackProduct {
  id: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  image: string;
}

export interface PackFAQ {
  question: {
    en: string;
    fr: string;
    ar: string;
  };
  answer: {
    en: string;
    fr: string;
    ar: string;
  };
}

export interface WellnessPack {
  id: string;
  badge: {
    en: string;
    fr: string;
    ar: string;
  };
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  desc: {
    en: string;
    fr: string;
    ar: string;
  };
  image: string;
  originalPrice: number;
  price: number;
  products: PackProduct[];
  benefits: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  whoIsItFor: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  usage: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  faq: PackFAQ[];
}

export const wellnessPacks: WellnessPack[] = [
  {
    id: "sun-protection-tanning-pack",
    badge: {
      en: "Sun & Tan Glow",
      fr: "Solaire & Bronzage",
      ar: "الحماية والتسمير"
    },
    name: {
      en: "DXN Ultimate Sun Care & Natural Tanning Pack",
      fr: "Pack Solaire & Bronzage Éclat Naturel DXN",
      ar: "باقة الحماية من الشمس والتسمير الطبيعي"
    },
    desc: {
      en: "The complete summer skin ritual. Shield your skin with SPF 30, get a gorgeous organic golden tan, and immediately cool and soothe afterwards.",
      fr: "Le rituel d'été complet. Protégez votre peau avec le SPF 30, obtenez un bronzage doré somptueux et apaisez immédiatement avec le soin après-soleil.",
      ar: "روتين الصيف المتكامل للبشرة: حماية موثوقة بمعامل حماية SPF 30، الحصول على تسمير برونزي (تان) ذهبي وصحي، ثم تبريد وترطيب البشرة فوراً بعد التعرض للشمس."
    },
    image: "https://i.ibb.co/jvxS81D0/image.png",
    originalPrice: 762,
    price: 749,
    products: [
      {
        id: "sunscreenSpf30",
        name: {
          en: "DXN Sunscreen Emulsion SPF 30 (50ml)",
          fr: "Émulsion Solaire Protectrice SPF 30 DXN (50ml)",
          ar: "مستحلب واقي الشمس 30 SPF دي إكس إن (50 مل)"
        },
        image: "https://i.ibb.co/9HFcqyq0/image.png"
      },
      {
        id: "tanningOil",
        name: {
          en: "DXN Natural Tanning Oil (150ml)",
          fr: "Huile de Bronzage Naturelle DXN (150ml)",
          ar: "زيت التسمير البرونزي الطبيعي دي إكس إن (150 مل)"
        },
        image: "https://i.ibb.co/G3kgyBjj/image.png"
      },
      {
        id: "coolingAfterSun",
        name: {
          en: "DXN Cooling After Sun (150ml)",
          fr: "Gel Fraîcheur Après-Soleil DXN (150ml)",
          ar: "جل التبريد والترطيب بعد الشمس دي إكس إن (150 مل)"
        },
        image: "https://i.ibb.co/xqQCwxJw/image.png"
      }
    ],
    benefits: {
      en: [
        "Guards your skin against harmful UV rays with lightweight SPF 30 emulsion",
        "Promotes a safe, even, and long-lasting golden tan using botanical oils",
        "Instantly cools, hydrates, and repairs sun-exposed skin to prevent peeling"
      ],
      fr: [
        "Protège efficacement la peau des rayons UV grâce à l'émulsion légère SPF 30",
        "Favorise un bronzage doré, uniforme et durable grâce aux huiles végétales",
        "Rafraîchit instantanément, hydrate et répare pour éviter la desquamation"
      ],
      ar: [
        "وقاية موثوقة من أشعة الشمس الضارة بمستحلب خفيف غير دهني SPF 30",
        "تنشيط وتحفيز لون برونزي ذهبي متجانس وصحي يدوم طويلاً بفضل الزيوت العضوية",
        "تبريد فوري، ترطيب مكثف وعلاج للبشرة بعد التعرض للشمس لمنع التقشر والتصبغات"
      ]
    },
    whoIsItFor: {
      en: [
        "Beach and sun lovers looking to get a beautiful golden tan safely",
        "Those wishing to prevent sunburns, sunspots, and skin dehydration",
        "Anyone needing an organic cooling relief after warm summer days"
      ],
      fr: [
        "Amateurs de plage et de soleil souhaitant un teint doré en toute sécurité",
        "Personnes voulant éviter les coups de soleil, taches et la déshydratation",
        "Toute personne recherchant un effet apaisant et frais après l'exposition"
      ],
      ar: [
        "عشاق البحر والشمس الراغبين في الحصول على لون تان ذهبي ساحر بشكل صحي وآمن",
        "كل من يريد تجنب حروق الشمس، ظهور التصبغات، وجفاف الجلد الشديد",
        "الباحثين عن راحة وتبريد فوري للبشرة المجهدة بعد يوم صيفي حار"
      ]
    },
    usage: {
      en: [
        "Step 1: Apply Sunscreen Emulsion SPF 30 evenly on face and body 20 minutes before sun exposure.",
        "Step 2: Apply Natural Tanning Oil generously while sunbathing to accelerate a gorgeous golden glow.",
        "Step 3: Massage Cooling After Sun onto clean skin post-exposure to soothe, hydrate, and maintain your tan."
      ],
      fr: [
        "Étape 1 : Appliquer l'Émulsion Solaire SPF 30 uniformément 20 minutes avant de s'exposer.",
        "Étape 2 : Appliquer l'Huile de Bronzage généreusement durant l'exposition pour dorer la peau.",
        "Étape 3 : Appliquer le Gel Après-Soleil sur peau propre pour rafraîchir et prolonger le bronzage."
      ],
      ar: [
        "الخطوة 1: يوضع مستحلب واقي الشمس SPF 30 بالتساوي على البشرة قبل التعرض لأشعة الشمس بـ 20 دقيقة.",
        "الخطوة 2: يوضع زيت التسمير الطبيعي بسخاء أثناء الاستحمام الشمسي لتسريع الحصول على لون ذهبي رائع.",
        "الخطوة 3: يُدلك جل التبريد بعد الشمس على بشرة نظيفة بعد التعرض للشمس لتهدئة الاحمرار وتثبيت التان."
      ]
    },
    faq: [
      {
        question: {
          en: "Should I apply the Sunscreen before or after the Tanning Oil?",
          fr: "Dois-je appliquer l'écran solaire avant ou après l'huile de bronzage ?",
          ar: "هل يجب وضع واقي الشمس قبل أم بعد زيت التسمير (التان)؟"
        },
        answer: {
          en: "Always apply the Sunscreen Emulsion SPF 30 first and let it absorb for 5-10 minutes. Then, apply the Natural Tanning Oil. This ensures your skin remains safely guarded against cellular UV damage while still allowing you to build a gorgeous, healthy tan.",
          fr: "Appliquez toujours l'Émulsion Solaire SPF 30 en premier et laissez-la pénétrer pendant 5 à 10 minutes. Appliquez ensuite l'Huile de Bronzage. Cela garantit une protection contre les dommages profonds tout en permettant un teint hâlé superbe.",
          ar: "يُنصح دائماً بوضع مستحلب واقي الشمس SPF 30 أولاً وتأكيد امتصاصه لمدة 5 إلى 10 دقائق، ثم وضع زيت التسمير الطبيعي فوقه. يضمن لك ذلك حماية خلايا الجلد من التلف بسب الأشعة الضارة مع إمكانية اكتساب لون برونزي ذهبي ساحر وصحي."
        }
      }
    ]
  },
  {
    id: "supreme-lifting-elixir-pack",
    badge: {
      en: "Ultimate Lifting & Oils",
      fr: "Lifting & Huiles d'Or",
      ar: "شد فوري وزيوت النخبة"
    },
    name: {
      en: "DXN Supreme Lifting & Elixir Oil Pack",
      fr: "Pack Lifting Suprême & Éclat d'Or DXN",
      ar: "الباقة الذهبية لشد البشرة والزيوت المغذية"
    },
    desc: {
      en: "The peak of DXN natural skincare luxury. Formulated to lift, erase fine lines, and deeply nourish with premium active botanicals and multi-purpose dry & night oils.",
      fr: "L'apogée du soin anti-âge DXN. Conçu pour lifter, estomper les rides et nourrir intensément grâce aux sérums, crèmes et huiles précieuses de nuit et de corps.",
      ar: "أرقى روتين تجميلي وعلاجي متكامل لمحاربة التجاعيد العميقة وتغذية خلايا البشرة بالكامل بتركيبة الزيوت الطبيعية والمكونات النشطة فائقة الجودة."
    },
    image: "https://i.ibb.co/7ttPhgJ1/image.png",
    originalPrice: 2279,
    price: 2000,
    products: [
      {
        id: "eyeCream",
        name: {
          en: "DXN Lifting Impact Eye Cream (15g)",
          fr: "Crème Contour des Yeux Lifting DXN (15g)",
          ar: "كريم شد محيط العينين دي إكس إن (15 غرام)"
        },
        image: "https://i.ibb.co/xKHWHhCf/image.png"
      },
      {
        id: "faceSerum",
        name: {
          en: "DXN Lifting Impact Face Serum (30ml)",
          fr: "Sérum Lifting Anti-Rides DXN (30ml)",
          ar: "سيروم شد الوجه الفوري دي إكس إن (30 مل)"
        },
        image: "https://i.ibb.co/v6QMdZNG/image.png"
      },
      {
        id: "faceCream",
        name: {
          en: "DXN Lifting Impact Face Cream (50g)",
          fr: "Crème Visage Lifting Suprême DXN (50g)",
          ar: "كريم شد وتغذية الوجه دي إكس إن (50 غرام)"
        },
        image: "https://i.ibb.co/gbYN44Fv/image.png"
      },
      {
        id: "nightOil",
        name: {
          en: "DXN Nourishing Night Oil (30ml)",
          fr: "Huile de Nuit Nourrissante DXN (30ml)",
          ar: "زيت الليل المغذي والمجدد للبشرة دي إكس إن (30 مل)"
        },
        image: "https://i.ibb.co/v4DTCpc1/image.png"
      },
      {
        id: "dryOil",
        name: {
          en: "DXN Multi-Purpose Dry Oil (50ml)",
          fr: "Huile Sèche Multi-Fonctions DXN (50ml)",
          ar: "الزيت الجاف متعدد الاستخدامات دي إكس إن (50 مل)"
        },
        image: "https://i.ibb.co/pj1Bww3w/image.png"
      }
    ],
    benefits: {
      en: [
        "Delivers advanced face lifting, targeting deep eye wrinkles & fine lines",
        "Deeply repairs the cellular lipid barrier overnight with premium seed oils",
        "Multi-purpose dry oil adds a satin glow to hair, body, and face without any greasy residue"
      ],
      fr: [
        "Procure un effet lifting avancé, lissant les rides d'expression et le contour de l'œil",
        "Régénère la barrière lipidique cutanée durant la nuit avec des huiles végétales pures",
        "L'huile sèche multi-usage satine, nourrit et fait briller le visage, le corps et les cheveux sans fini gras"
      ],
      ar: [
        "شد وتجديد احترافي للبشرة يستهدف تجاعيد محيط العينين العميقة وتعبيرات الوجه",
        "ترميم وإصلاح حاجز الخلايا الدهنية ليلاً بفضل الأحماض الدهنية الأساسية لزيت الليل المغذي",
        "يمنح الزيت الجاف متعدد الاستخدامات لمعاناً حريرياً رائعاً للشعر والجسم والوجه دون ملمس دهني"
      ]
    },
    whoIsItFor: {
      en: [
        "Those demanding the ultimate, premium anti-aging lifting and hydration experience",
        "People seeking intense lipid replenishment, cellular nutrition, and beautiful hair/body sheen",
        "Anyone who values organic premium oils paired with cutting-edge non-invasive lifting science"
      ],
      fr: [
        "Ceux qui veulent l'excellence absolue contre le vieillissement cutané",
        "Peaux sèches, dévitalisées, recherchant nutrition et éclat satiné pour tout le corps",
        "Idéal pour combiner l'efficacité du lifting organique et le plaisir sensoriel des huiles sèches"
      ],
      ar: [
        "لكل من يبحث عن قمة الفخامة والفعالية في شد البشرة وتعبئة التجاعيد وعلاج جفاف الوجه والجسم",
        "الباحثين عن تجديد خلايا الجلد، تغذية فائقة، ومظهر حريري جذاب للشعر والوجه واليدين",
        "مثالي لدمج علم شد البشرة العضوي مع متعة الزيوت الطبيعية المعالجة والفاخرة"
      ]
    },
    usage: {
      en: [
        "Step 1: Apply Lifting Impact Face Serum on clean face and tap gently to absorb.",
        "Step 2: Pat a tiny drop of Lifting Impact Eye Cream around the eye contour area.",
        "Step 3: Apply Lifting Impact Face Cream to seal in hydration and lift facial contours.",
        "Step 4: Smooth Nourishing Night Oil over face before sleep for intense midnight repair.",
        "Step 5: Apply Multi-Purpose Dry Oil anytime on your face, body, or hair tips for a beautiful satin finish."
      ],
      fr: [
        "Étape 1 : Appliquer le Sérum Lifting Impact sur visage propre en tapotant doucement.",
        "Étape 2 : Tapoter une petite dose de Crème Yeux sur l'os orbital.",
        "Étape 3 : Appliquer la Crème Lifting Impact pour sceller l'hydratation et raffermir.",
        "Étape 4 : Appliquer l'Huile de Nuit Nourrissante le soir avant de dormir pour une réparation nocturne.",
        "Étape 5 : Vaporiser l'Huile Sèche à tout moment sur le visage, le corps ou les cheveux pour un fini satiné précieux."
      ],
      ar: [
        "الخطوة 1: يوضع سيروم الشد الفوري على وجه نظيف ويُربت بلطف حتى يمتصه الجلد تماماً.",
        "الخطوة 2: توضع كمية صغيرة جداً من كريم العينين حول محيط العين (العظم المداري) ويُمسد بلطف.",
        "الخطوة 3: يوضع كريم شد الوجه لتثبيت الترطيب وحماية وتحديد ملامح الوجه طوال اليوم.",
        "الخطوة 4: تُدلك قطرات من زيت الليل المغذي على البشرة قبل النوم لترميم الخلايا وتجديد نضارتها.",
        "الخطوة 5: يوضع الزيت الجاف متعدد الاستخدامات في أي وقت على الوجه، الجسم، أو أطراف الشعر لترطيب حريري مذهل."
      ]
    },
    faq: [
      {
        question: {
          en: "Can the Multi-Purpose Dry Oil be used on hair as well?",
          fr: "L'Huile Sèche Multi-Fonctions peut-elle s'appliquer sur les cheveux ?",
          ar: "هل يمكن استخدام الزيت الجاف متعدد الاستخدامات على الشعر أيضاً؟"
        },
        answer: {
          en: "Yes, absolutely! Our Multi-Purpose Dry Oil is exceptionally lightweight and non-greasy. You can apply a few drops to dry or damp hair tips to add a luxurious satin shine, control frizz, and nourish damaged split ends.",
          fr: "Oui, tout à fait ! Notre huile sèche est ultra-légère et non grasse. Appliquez quelques gouttes sur les pointes sèches ou humides pour une brillance soyeuse, une nutrition profonde et un effet anti-frisottis.",
          ar: "نعم، وبكل تأكيد! يتميز الزيت الجاف بتركيبة خفيفة للغاية وسريعة الامتصاص وغير دهنية. يمكنك وضع بضع قطرات على أطراف الشعر الجافة أو الرطبة للحصول على لمعان حريري فخم، والتحكم في الهيشان وتغذية الأطراف المتقصفة."
        }
      }
    ]
  },
  {
    id: "luxury-cosmetics-pack",
    badge: {
      en: "Luxury Skincare",
      fr: "Soins de Luxe",
      ar: "عناية فاخرة بالبشرة"
    },
    name: {
      en: "DXN Luxury Aromatic Cosmetics Pack",
      fr: "Pack Cosmétiques Aromatiques de Luxe DXN",
      ar: "باقة النخبة للتجميل والعناية الفاخرة"
    },
    desc: {
      en: "The ultimate aromatic personal care and luxury skincare collection. Features our shower gel, lotion, hand cream, lip balm, and hydrating mask.",
      fr: "L'ultime collection de soins corporels et cosmétiques de luxe. Réunit gel douche, lotion, crème mains, baume à lèvres et masque hydratant.",
      ar: "المجموعة التجميلية والعلاجية الفاخرة والأكثر طلباً. تجمع بين الشاور جل المعطر، اللوشن الفاخر، كريم اليدين، مرطب الشفاه وماسك الترطيب."
    },
    image: "https://i.ibb.co/PvK5dyrD/image.png",
    originalPrice: 867,
    price: 769,
    products: [
      {
        id: "aromaticShowerGel",
        name: {
          en: "DXN Luxury Aromatic Shower Gel (250ml)",
          fr: "Gel Douche Aromatique de Luxe DXN (250ml)",
          ar: "شاور جل معطر فاخر دي إكس إن (250 مل)"
        },
        image: "https://i.ibb.co/C30txFNP/image.png"
      },
      {
        id: "aromaticBodyLotion",
        name: {
          en: "DXN Luxury Aromatic Body Lotion (250ml)",
          fr: "Lotion Corporelle Aromatique de Luxe DXN (250ml)",
          ar: "لوشن معطر فاخر للجسم دي إكس إن (250 مل)"
        },
        image: "https://i.ibb.co/mrfDfSQ8/image.png"
      },
      {
        id: "handCream",
        name: {
          en: "DXN Nourishing Hand Cream (75g)",
          fr: "Crème de Mains Nourrissante DXN (75g)",
          ar: "كريم اليدين المغذي الفاخر دي إكس إن (75 غرام)"
        },
        image: "https://i.ibb.co/zTy4QCzD/image.png"
      },
      {
        id: "lipBalm",
        name: {
          en: "DXN Moisturizing Lip Balm (15g)",
          fr: "Baume à Lèvres Hydratant DXN (15g)",
          ar: "مرطب الشفاه العضوي دي إكس إن (15 غرام)"
        },
        image: "https://i.ibb.co/fYYLgNLj/image.png"
      },
      {
        id: "faceMask",
        name: {
          en: "DXN Hydrating Face Mask",
          fr: "Masque Hydratant Visage DXN",
          ar: "قناع الوجه المرطب والمغذي دي إكس إن"
        },
        image: "https://i.ibb.co/0RptcBsp/image.png"
      }
    ],
    benefits: {
      en: [
        "Complete 5-step organic skin and aromatic body rejuvenation routine",
        "Deeply moisturizes and shields skin against pollutants and dry weather",
        "Infused with highly soothing premium aroma essential oils that lift your mood"
      ],
      fr: [
        "Routine complète en 5 étapes pour sublimer, hydrater et rajeunir votre corps",
        "Hydrate en profondeur et protège l'épiderme contre le dessèchement et la pollution",
        "Parfum précieux et apaisant issu d'huiles aromatiques de qualité supérieure"
      ],
      ar: [
        "برنامج تجميلي وعلاجي متكامل من 5 خطوات لترطيب وإحياء شباب البشرة بالكامل",
        "تغذية عميقة وحماية فائقة لخلايا الجلد من الجفاف المستمر والعوامل الخارجية",
        "تركيبة عطرية مهدئة ومريحة من الزيوت الأساسية الطبيعية التي تدوم طويلاً"
      ]
    },
    whoIsItFor: {
      en: [
        "Individuals seeking a premium, chemical-free personal care and skincare routine",
        "Anyone suffering from dry skin, cracked hands, chapped lips, or dehydrated face",
        "Gift seekers wanting to offer a luxurious, aromatic box of pure organic beauty"
      ],
      fr: [
        "Toute personne cherchant une routine d'hygiène et de beauté bio haut de gamme",
        "Peaux sèches, mains abîmées, lèvres gercées ou visages en manque d'éclat",
        "Idéal pour faire un cadeau d'exception, luxueux et sain à un être cher"
      ],
      ar: [
        "النساء والرجال الباحثين عن روتين عناية متكامل وراقٍ وخالٍ من الكيماويات الضارة",
        "من يعانون من جفاف البشرة الشديد، تشقق اليدين والشفتين، أو شحوب ونقص نضارة الوجه",
        "كل من يريد تقديم هدية فاخرة، صحية وذات رائحة فواحة تأسر الحواس"
      ]
    },
    usage: {
      en: [
        "Aromatic Shower Gel: Lather gently during your daily bath for aromatic cleansing.",
        "Aromatic Body Lotion: Apply immediately after bathing to lock in deep satin hydration.",
        "Nourishing Hand Cream: Massage onto hands frequently throughout the day.",
        "Moisturizing Lip Balm: Apply to lips anytime for smooth, glossy protection.",
        "Hydrating Face Mask: Apply evenly to clean face, leave for 15 minutes, then rinse gently."
      ],
      fr: [
        "Gel Douche Aromatique : Faire mousse délicatement sous l'eau pour un lavage relaxant.",
        "Lotion Aromatique Corps : Appliquer généreusement après la douche pour satiner la peau.",
        "Crème Mains : Masser les mains délicatement plusieurs fois par jour pour une douceur infinie.",
        "Baume Lèvres : Appliquer à tout moment pour des lèvres pulpeuses et protégées.",
        "Masque Hydratant : Laisser poser 15 minutes sur visage propre, puis rincer à l'eau tiède.",
        "Conseil de pro : Appliquer le masque après un léger gommage."
      ],
      ar: [
        "شاور جل معطر: يُدلك بلطف على الجسم أثناء الاستحمام اليومي لتنظيف فائق بالرغوة الغنية.",
        "لوشن معطر للجسم: يوضع مباشرة بعد الاستحمام لحبس الرطوبة والحصول على ملمس حريري فواح.",
        "كريم اليدين المغذي: يُدلك على الكفين عدة مرات يومياً لترطيب يدوم وحماية كاملة.",
        "مرطب الشفاه: يوضع على الشفاه في أي وقت لمنع التشقق والحصول على لمعان جذاب طبيعي.",
        "ماسك ترطيب الوجه: يوضع بالتساوي على بشرة نظيفة، يُترك لمدة 15 دقيقة ثم يُغسل بلطف بماء فاتر."
      ]
    },
    faq: [
      {
        question: {
          en: "Are these cosmetics suitable for sensitive or allergic skin types?",
          fr: "Ces cosmétiques conviennent-ils aux peaux sensibles ou allergiques ?",
          ar: "هل هذه المنتجات التجميلية ملائمة للبشرة الحساسة أو سريعة التهيج؟"
        },
        answer: {
          en: "Absolutely. DXN luxury cosmetics are formulated using premium organic ingredients and natural botanicals. They are free from harsh parabens, toxic artificial colors, or irritating synthetic preservatives, making them perfectly safe and soothing for all skin types.",
          fr: "Absolument. Les cosmétiques de luxe DXN sont formulés avec des extraits botaniques biologiques précieux. Ils sont sans parabènes, sans colorants artificiels ni conservateurs agressifs.",
          ar: "بالتأكيد. مستحضرات التجميل الفاخرة من دي إكس إن مصنوعة من مكونات عضوية نباتية نقية وخالية تماماً من البارابين والألوان الصناعية والمواد الكيميائية الحادة التي تسبب تهيج البشرة."
        }
      }
    ]
  },
  {
    id: "lifting-antiaging-pack",
    badge: {
      en: "Ultimate Anti-Aging",
      fr: "Lifting Suprême",
      ar: "باقة شد البشرة ومقاومة التجاعيد"
    },
    name: {
      en: "DXN Ultimate Lifting & Anti-Aging Pack",
      fr: "Pack Anti-Âge & Lifting Suprême DXN",
      ar: "الباقة الاحترافية لشد البشرة ومقاومة التجاعيد"
    },
    desc: {
      en: "The ultimate 5-step face rejuvenation ritual. Cleanse, tone, lift, hydrate, and shield with our complete premium anti-aging set.",
      fr: "Le rituel ultime de rajeunissement du visage en 5 étapes. Nettoyez, tonifiez, liftez, hydratez et protégez avec notre set de soin anti-âge haut de gamme.",
      ar: "البرنامج الاحترافي المتكامل لشد وتجديد حيوية البشرة ومحاربة التجاعيد في 5 خطوات ذكية: تنظيف، تنشيط، شد فوري، ترطيب مكثف وحماية شمسية فائقة."
    },
    image: "https://i.ibb.co/YTVhG0PT/image.png",
    originalPrice: 1435,
    price: 1299,
    products: [
      {
        id: "foamingCleanser",
        name: {
          en: "DXN Instant Foaming Cleanser (150ml)",
          fr: "Mousse Nettoyante Instantanée DXN (150ml)",
          ar: "الرغوة المنظفة الفورية دي إكس إن (150 مل)"
        },
        image: "https://i.ibb.co/Lhpdk0QK/image.png"
      },
      {
        id: "tonicWater",
        name: {
          en: "DXN Cleansing Tonic Water (150ml)",
          fr: "Eau Tonique Pureté DXN (150ml)",
          ar: "تونر التنشيط والتنقية العميقة دي إكس إن (150 مل)"
        },
        image: "https://i.ibb.co/W46dXKsq/image.png"
      },
      {
        id: "tighteningSerum",
        name: {
          en: "DXN Instant Tightening Serum (30ml)",
          fr: "Sérum Tenseur Minute DXN (30ml)",
          ar: "سيروم الشد الفوري والتجاعيد دي إكس إن (30 مل)"
        },
        image: "https://i.ibb.co/wrZYpyHg/image.png"
      },
      {
        id: "hydratingFaceCream",
        name: {
          en: "DXN Hydrating Face Cream (50g)",
          fr: "Crème Hydratation 24h Visage DXN (50g)",
          ar: "كريم الترطيب ومقاومة الجفاف دي إكس إن (50 غرام)"
        },
        image: "https://i.ibb.co/v6Ld64Fq/image.png"
      },
      {
        id: "sunscreenSpf50",
        name: {
          en: "DXN Face Sunscreen SPF 50 (50ml)",
          fr: "Écran Invisible Anti-Âge SPF 50 DXN (50ml)",
          ar: "واقي الشمس الطبي الفائق 50 SPF دي إكس إن (50 مل)"
        },
        image: "https://i.ibb.co/Y77zrCpY/image.png"
      }
    ],
    benefits: {
      en: [
        "Provides immediate visible lift and wrinkle smoothing effects",
        "Deeply purifies pores while restoring skin's natural elastic barrier",
        "Offers advanced 24h hydration and premium SPF 50 UV photo-aging defense"
      ],
      fr: [
        "Effet liftant et lissage des rides immédiatement visible",
        "Purifie les pores en profondeur et renforce la barrière élastique naturelle de la peau",
        "Hydratation intense 24h et très haute protection SPF 50 contre le vieillissement solaire"
      ],
      ar: [
        "شد فوري ملحوظ للبشرة وتخفيف عمق التجاعيد وعلامات التقدم في السن",
        "تنقية خلايا البشرة والمسام بعمق مع استعادة مرونة الجلد المفقودة",
        "ترطيب هيدروليكي ذكي يدوم 24 ساعة وحماية فائقة 50 SPF ضد الشيخوخة الضوئية"
      ]
    },
    whoIsItFor: {
      en: [
        "Anyone noticing fine lines, wrinkles, loss of elasticity, or dull tired skin",
        "Those wanting a complete medical-grade daily beauty routing with full solar protection",
        "Perfect for ladies and gentlemen seeking real, non-invasive lifting results from organic science"
      ],
      fr: [
        "Personnes sujettes aux rides, ridules, relâchement cutané ou teint terne et fatigué",
        "Ceux qui exigent un rituel de beauté complet et sain avec un bouclier anti-UV maximal",
        "Idéal pour obtenir un effet liftant naturel et durable sans chirurgie"
      ],
      ar: [
        "كل من يعاني من الخطوط التعبيرية، التجاعيد، ترهل البشرة أو فقدان النضارة والحيوية",
        "من يبحثون عن روتين يومي طبي وعضوي متكامل يوفر ترطيباً عميقاً وحماية شمسية قصوى",
        "مثالي للحصول على شد طبيعي آمن وبشرة ممتلئة وشابة باستخدام قوة المكونات الحيوية"
      ]
    },
    usage: {
      en: [
        "Step 1: Wet face, apply Foam Cleanser to cleanse and rinse with water.",
        "Step 2: Apply Tonic Water using a cotton pad to prep and close pores.",
        "Step 3: Spread a few drops of Tightening Serum focusing on fine lines.",
        "Step 4: Massage Hydrating Face Cream to lock in deep rich moisture.",
        "Step 5: Apply Sunscreen SPF 50 before sun exposure to shield your skin."
      ],
      fr: [
        "Étape 1 : Humidifier le visage, appliquer la Mousse Nettoyante, masser puis rincer.",
        "Étape 2 : Appliquer l'Eau Tonique avec un coton pour resserrer les pores.",
        "Étape 3 : Tapoter quelques gouttes de Sérum Tenseur sur les zones ciblées.",
        "Étape 4 : Appliquer la Crème Hydratante pour nourrir la barrière cutanée.",
        "Étape 5 : Terminer par l'Écran SPF 50 avant toute exposition solaire."
      ],
      ar: [
        "الخطوة 1: يُبلل الوجه، وتُدلك رغوة المنظف بلطف لإزالة الشوائب ثم تُغسل بالماء.",
        "الخطوة 2: يوضع تونر التنشيط باستخدام قطعة قطن لتنظيف عميق وغلق المسام.",
        "الخطوة 3: توضع قطرات من سيروم الشد الفوري على مناطق الخطوط والتجاعيد وتُربت بلطف.",
        "الخطوة 4: يوضع كريم الترطيب لترطيب حاجز البشرة وحمايتها من الجفاف طوال اليوم.",
        "الخطوة 5: يوضع واقي الشمس SPF 50 قبل الخروج لحماية البشرة من التصبغات وأشعة الشمس الضارة."
      ]
    },
    faq: [
      {
        question: {
          en: "How fast will I see the lifting and smoothing results?",
          fr: "En combien de temps verrai-je l'effet liftant et lissant ?",
          ar: "ما هي السرعة المتوقعة لملاحظة شد البشرة واختفاء التجاعيد؟"
        },
        answer: {
          en: "The Tightening Serum provides a visible micro-lifting effect within 5-10 minutes of application. For long-term anti-aging results, including reduced wrinkle depth and firmer skin, consistent daily application for 4-6 weeks is highly recommended.",
          fr: "Le Sérum Tenseur offre un effet micro-liftant visible en seulement 5 à 10 minutes. Pour des résultats anti-âge profonds et durables sur les rides, nous recommandons une utilisation quotidienne continue sur 4 à 6 semaines.",
          ar: "سيروم الشد الفوري يعطي تأثيراً مشدوداً وملحوظاً لملامح الوجه في غضون 5 إلى 10 دقائق فقط من وضعه. وللحصول على نتائج علاجية دائمة ومستمرة، يُنصح بالالتزام بالروتين يومياً لمدة تتراوح بين 4 إلى 6 أسابيع."
        }
      }
    ]
  },
  {
    id: "family-pack",
    badge: {
      en: "Best Seller",
      fr: "Meilleure Vente",
      ar: "الأكثر مبيعاً"
    },
    name: {
      en: "DXN Family Wellness Pack",
      fr: "Pack Bien-être Famille DXN",
      ar: "باقة العائلة السعيدة المتكاملة"
    },
    desc: {
      en: "Daily nutrition for the entire family. Features alkaline fibers and brain memory support.",
      fr: "La nutrition quotidienne idéale pour toute la famille. Favorise la mémoire et le tonus.",
      ar: "تغذية يومية متكاملة لجميع أفراد الأسرة. تدعم طاقة ونشاط الجسم وتركيز الأطفال."
    },
    image: "https://i.ibb.co/Q3RqQKfn/image.png",
    originalPrice: 1420,
    price: 1261,
    products: [
      {
        id: "spirulina-cereal",
        name: {
          en: "DXN Spirulina Cereal (30 Sachets)",
          fr: "Céréales de Spiruline DXN (30 Sachets)",
          ar: "سيريال السبيرولينا الصحي (30 كيس)"
        },
        image: "https://i.ibb.co/sJ3zZdX0/image.png"
      },
      {
        id: "cocozhi",
        name: {
          en: "DXN Cocozhi Cocoa (20 Sachets)",
          fr: "Chocolat Chaud Cocozhi (20 Sachets)",
          ar: "كاكاو كوكوزي الصحي (20 كيس)"
        },
        image: "https://i.ibb.co/0pJcbcjS/image.png"
      },
      {
        id: "coffee3in1",
        name: {
          en: "DXN Lingzhi Coffee 3 in 1 (20 Sachets)",
          fr: "Café Lingzhi 3 en 1 DXN (20 Sachets)",
          ar: "قهوة لينجزي 3 في 1 (20 كيس)"
        },
        image: "https://i.ibb.co/6cYqDvwB/image.png"
      }
    ],
    benefits: {
      en: [
        "Boosts children's concentration and academic performance",
        "Provides sustained daily cellular energy with very low caffeine",
        "Supports intestinal transit and balances body acidity"
      ],
      fr: [
        "Favorise la croissance, la mémoire et le focus des enfants",
        "Énergie saine et durable sans palpitation",
        "Soutient un transit intestinal sain et alcalinise l'organisme"
      ],
      ar: [
        "تنشيط خلايا الدماغ وزيادة التركيز والتحصيل الدراسي للأطفال",
        "إمداد الجسم بنشاط ممتد وطاقة طبيعية بدون كافيين ضار",
        "تعديل حموضة الجسم ودعم الهضم الخفيف المريح للأمعاء"
      ]
    },
    whoIsItFor: {
      en: [
        "Growing children and students needing memory support",
        "Parents seeking a healthy coffee and breakfast alternative",
        "Families looking to build strong baseline immunity together"
      ],
      fr: [
        "Enfants en croissance et étudiants durant les examens",
        "Parents cherchant une alternative saine au café industriel",
        "Familles souhaitant renforcer leur système immunitaire global"
      ],
      ar: [
        "الأطفال في سن النمو والطلاب لتعزيز الذاكرة والذكاء",
        "الآباء والأمهات الباحثين عن فطور صحي وبدائل قهوة فاخرة",
        "العائلات الراغبة في تأسيس مناعة حديدية طبيعية جماعية"
      ]
    },
    usage: {
      en: [
        "Spirulina Cereal: Perfect as an energetic morning breakfast bowl.",
        "Cocozhi Cocoa: One sachet in warm water or milk for children in the afternoon.",
        "Lingzhi Coffee: Enjoy one sachet in the morning for sustained biological focus."
      ],
      fr: [
        "Céréales de Spiruline : Idéal en bol le matin pour un réveil nutritif.",
        "Cocozhi : Un sachet dans de l'eau ou du lait chaud l'après-midi pour le goûter.",
        "Café Noir Lingzhi : Un sachet le matin pour un éveil cérébral tonique."
      ],
      ar: [
        "سيريال السبيرولينا: ممتاز كوجبة فطور متكاملة ومغذية في الصباح.",
        "كوكوزي الشوكولاتة: يذوب كيس واحد في كوب ماء دافئ أو حليب دافئ للأطفال عصراً.",
        "القهوة السوداء: يذوب نصف أو كيس كامل صباحاً للحصول على طاقة وتركيز متجدد."
      ]
    },
    faq: [
      {
        question: {
          en: "Is Cocozhi safe for toddlers and young infants?",
          fr: "Le Cocozhi est-il sans danger pour les jeunes enfants ?",
          ar: "هل شوكولاتة كوكوزي آمنة للأطفال الرضع وصغار السن؟"
        },
        answer: {
          en: "Yes, DXN Cocozhi is 100% natural and made of premium cocoa blended with Reishi mycelium. It contains no artificial additives or preservatives and is highly recommended to support children's cognitive growth.",
          fr: "Oui, le Cocozhi DXN est 100% naturel, composé de cacao de qualité supérieure et de mycélium de Reishi. Il est sans colorants ni conservateurs artificiels.",
          ar: "نعم، كوكوزي دي إكس إن طبيعي وآمن تماماً، ومصنوع من أفضل أنواع الكاكاو الفاخر المدعم بفطر الجانوديرما المغذي للأعصاب وخلايا الدماغ."
        }
      }
    ]
  },
  {
    id: "energy-pack",
    badge: {
      en: "Energy",
      fr: "Énergie & Force",
      ar: "طاقة ونشاط"
    },
    name: {
      en: "DXN Cell Vitality & Energy Pack",
      fr: "Pack Énergie & Vitalité Cellulaire DXN",
      ar: "باقة النشاط والحيوية الخارقة"
    },
    desc: {
      en: "Boost your energy and physical endurance naturally. Perfect for athletes, active professionals, and recovery.",
      fr: "Boostez votre énergie et votre endurance physique naturellement. Parfait pour les actifs et sportifs.",
      ar: "زيادة طاقة خلايا الجسم والتحمل البدني والذهني بشكل طبيعي. مثالية للرياضيين وأصحاب المجهود العالي."
    },
    image: "https://i.ibb.co/JFcTZVt4/image.png",
    originalPrice: 1720,
    price: 1500,
    products: [
      {
        id: "cordyceps",
        name: {
          en: "DXN Cordyceps (60 Tablets)",
          fr: "DXN Cordyceps (60 Comprimés)",
          ar: "فطر الكورديسبس الفاخر (60 حبة)"
        },
        image: "https://i.ibb.co/WvmsYWBV/image.png"
      },
      {
        id: "lions_mane",
        name: {
          en: "DXN Lion's Mane (120 Tablets)",
          fr: "Crinière de Lion DXN (120 Comprimés)",
          ar: "فطر عرف الأسد العضوي (120 حبة)"
        },
        image: "https://i.ibb.co/RkVr3NMs/image.png"
      },
      {
        id: "cocozhi",
        name: {
          en: "DXN Cocozhi Cocoa (20 Sachets)",
          fr: "DXN Cocozhi Chocolat (20 Sachets)",
          ar: "كاكاو كوكوزي الصحي (20 كيس)"
        },
        image: "https://i.ibb.co/0pJcbcjS/image.png"
      }
    ],
    benefits: {
      en: [
        "Expands lung capacity and blood oxygenation, maximizing workout stamina",
        "Rebuilds damaged nerve paths, promoting exceptional mental focus and alertness",
        "Supplies direct non-dairy organic cocoa energy without jittery crashes"
      ],
      fr: [
        "Augmente la capacité pulmonaire et l'oxygénation lors de l'effort physique",
        "Soutient le système nerveux central et accroît le focus mental",
        "Fournit une énergie chocolatée pure sans effet excitant ni insomnie"
      ],
      ar: [
        "توسيع الشعب الهوائية ورفع مستويات الأكسجين في الدم لتأخير التعب العضلي",
        "تغذية شبكة الأعصاب والترميم الخلوي لتنشيط الذاكرة والصفاء الذهني",
        "إمداد العضلات بطاقة نظيفة فورية ومغذيات استثنائية من أفخر أنواع الكاكاو"
      ]
    },
    whoIsItFor: {
      en: [
        "Athletes and bodybuilders looking to smash natural plateaus",
        "Busy entrepreneurs and students requiring high cognitive stamina",
        "Elderly people struggling with muscle fatigue, memory loss, or shallow breathing"
      ],
      fr: [
        "Sportifs cherchant à améliorer naturellement leurs performances",
        "Cadres et étudiants nécessitant une haute résistance cognitive",
        "Personnes âgées souffrant de faiblesse musculaire ou d'essoufflement"
      ],
      ar: [
        "الرياضيون والراغبون في تحسين أدائهم البدني وتكبير الرئة طبيعياً",
        "أصحاب المهن الشاقة، والطلاب الذين يتطلب عملهم تركيزاً ذهنياً عالياً",
        "كبار السن الذين يعانون من وهن العضلات، النسيان وضيق التنفس"
      ]
    },
    usage: {
      en: [
        "Cordyceps: Consuming 2 tablets in the morning provides instant breathing space.",
        "Lion's Mane: Take 2 tablets alongside meals for digestive and nerve stability.",
        "Cocozhi Cocoa: Enjoy 1 hot chocolate cup before physical or mental effort."
      ],
      fr: [
        "Cordyceps : Prendre 2 comprimés le matin pour optimiser le souffle et l'endurance.",
        "Crinière de Lion : 2 comprimés au repas pour l'estomac et le système nerveux.",
        "Cocozhi : Une tasse chaude de chocolat avant vos entraînements ou séances de focus."
      ],
      ar: [
        "الكورديسبس: تناول حبتين في الصباح الباكر مع كوب كبير من الماء لزيادة النشاط البدني.",
        "عرف الأسد: تناول حبتين مع الوجبات لدعم المعدة، القولون وتغذية الأعصاب.",
        "كوكوزي: تناول كوباً دافئاً قبل المجهود البدني أو المذاكرة لتنشيط الدورة الدموية."
      ]
    },
    faq: [
      {
        question: {
          en: "Does Cordyceps speed up heart rate like chemical stimulants?",
          fr: "Le Cordyceps accélère-t-il le cœur comme les stimulants ?",
          ar: "هل يسبب فطر الكورديسبس تسارع ضربات القلب مثل المنشطات الكيميائية؟"
        },
        answer: {
          en: "No, Cordyceps is a natural adaptogen. It optimizes oxygen utilization in red blood cells and supports ATP cellular energy synthesis without placing excessive strain on your cardiovascular system or raising blood pressure.",
          fr: "Non, le Cordyceps est un adaptogène naturel. Il optimise l'utilisation de l'oxygène au niveau cellulaire et soutient l'ATP sans surcharger le cœur ni augmenter la tension.",
          ar: "كلا، الكورديسبس فطر تكيفي طبيعي؛ فهو يزيد من كفاءة الخلايا في استهلاك الأكسجين وصناعة جزيئات الطاقة الخلوية (ATP) دون إجهاد القلب."
        }
      }
    ]
  }
];
