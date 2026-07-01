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

export const cocozhiLandingCopy: Record<'en' | 'fr' | 'ar', LocalizedCopy> = {
  ar: {
    heroBadge: "🥥 انتعاش جوز الهند الطبيعي لشعر ناعم",
    heroTitle: "امنح شعرك نعومة وانتعاشاً طبيعياً مع شامبو كوكوزي DXN",
    heroSub: "تركيبة مستوحاة من العناية الطبيعية تمنح شعرك تجربة تنظيف منعشة مع إحساس بالنعومة والانتعاش في كل غسلة. يغذي خصلات الشعر ويمنحها لمعاناً طبيعياً.",
    heroCTAOrder: "اطلب شامبو كوكوزي DXN الآن",
    heroCTAConsult: "استشارة مجانية مع خبيرة سميرة",
    benefitsHeading: "فوائد كوكوزي لشعر صحي ومتألق",
    benefitsSub: "عناية يومية لطيفة مستوحاة من الطبيعة.",
    overviewTitle: "انتعاش الطبيعة في شعرك",
    overviewParagraph1: "شامبو DXN كوكوزي هو ثمرة بحث دقيق لتقديم حل يومي منعش ومنظف. تركيبة لطيفة تحافظ على توازن فروة الرأس وتمنح الشعر نعومة متميزة.",
    overviewParagraph2: "يساعد في الحفاظ على صحة الشعر بفضل مكوناته التي تمنح إحساساً بالانتعاش والنظافة طوال اليوم.",
    ingredientsHeading: "المكونات الأساسية الطبيعية",
    ingredientsSub: "مكونات مختارة بعناية لتقديم تجربة غسل منعشة وآمنة.",
    howToUseHeading: "طريقة الاستخدام الفعالة",
    whyChooseHeading: "لماذا كوكوزي DXN؟",
    packagesTitle: "اختر العرض المناسب",
    packagesSub: "حدد عرضك المفضل الآن.",
    checkoutHeading: "تأكيد الطلب",
    checkoutSub: "أدخل معلومات التوصيل.",
    checkoutNameLabel: "الاسم الكامل *",
    checkoutAddressLabel: "عنوان التوصيل *",
    checkoutPhoneLabel: "رقم الهاتف *",
    checkoutSubmitBtn: "تأكيد الطلب",
    secureCheckoutBadge: "توصيل آمن",
    faqHeading: "الأسئلة الشائعة",
    faqSub: "تعرف أكثر على المنتج."
  },
  en: {
    heroBadge: "🥥 Natural Coconut Freshness for Soft Hair",
    heroTitle: "Give Your Hair Natural Softness and Freshness with DXN Cocozhi Shampoo",
    heroSub: "A formula inspired by natural care that gives your hair a refreshing cleansing experience with a feeling of softness and freshness in every wash.",
    heroCTAOrder: "Order DXN Cocozhi Shampoo Now",
    heroCTAConsult: "Free Consultation with Samira",
    benefitsHeading: "Benefits of Cocozhi for Healthy, Radiant Hair",
    benefitsSub: "Gentle daily care inspired by nature.",
    overviewTitle: "Nature's Freshness in Your Hair",
    overviewParagraph1: "DXN Cocozhi Shampoo is the result of careful research to provide a refreshing and cleansing daily solution. A gentle formula that maintains scalp balance and gives hair outstanding softness.",
    overviewParagraph2: "Helps maintain hair health with ingredients that provide a feeling of freshness and cleanliness all day long.",
    ingredientsHeading: "Core Natural Ingredients",
    ingredientsSub: "Carefully selected ingredients to offer a refreshing and safe washing experience.",
    howToUseHeading: "Effective Usage Method",
    whyChooseHeading: "Why DXN Cocozhi?",
    packagesTitle: "Choose Your Offer",
    packagesSub: "Select your favorite offer now.",
    checkoutHeading: "Confirm Order",
    checkoutSub: "Enter delivery details.",
    checkoutNameLabel: "Full Name *",
    checkoutAddressLabel: "Delivery Address *",
    checkoutPhoneLabel: "Phone Number *",
    checkoutSubmitBtn: "Confirm Order",
    secureCheckoutBadge: "Secure Delivery",
    faqHeading: "FAQs",
    faqSub: "Learn more."
  },
  fr: {
    heroBadge: "🥥 Fraîcheur naturelle de coco pour des cheveux doux",
    heroTitle: "Offrez à vos cheveux une douceur et une fraîcheur naturelles avec le shampooing DXN Cocozhi",
    heroSub: "Une formule inspirée des soins naturels qui offre à vos cheveux une expérience de nettoyage rafraîchissante avec une sensation de douceur et de fraîcheur à chaque lavage.",
    heroCTAOrder: "Commandez le shampooing DXN Cocozhi maintenant",
    heroCTAConsult: "Consultation gratuite avec Samira",
    benefitsHeading: "Avantages de Cocozhi pour des cheveux sains et radieux",
    benefitsSub: "Soins quotidiens doux inspirés de la nature.",
    overviewTitle: "La fraîcheur de la nature dans vos cheveux",
    overviewParagraph1: "Le shampooing DXN Cocozhi est le résultat de recherches minutieuses pour offrir une solution quotidienne rafraîchissante et nettoyante. Une formule douce qui maintient l'équilibre du cuir chevelu et donne aux cheveux une douceur exceptionnelle.",
    overviewParagraph2: "Aide à maintenir la santé des cheveux grâce à des ingrédients qui procurent une sensation de fraîcheur et de propreté toute la journée.",
    ingredientsHeading: "Ingrédients naturels essentiels",
    ingredientsSub: "Ingrédients soigneusement sélectionnés pour offrir une expérience de lavage rafraîchissante et sûre.",
    howToUseHeading: "Méthode d'utilisation efficace",
    whyChooseHeading: "Pourquoi DXN Cocozhi ?",
    packagesTitle: "Choisissez votre offre",
    packagesSub: "Sélectionnez votre offre préférée maintenant.",
    checkoutHeading: "Confirmer la commande",
    checkoutSub: "Entrez les détails de livraison.",
    checkoutNameLabel: "Nom complet *",
    checkoutAddressLabel: "Adresse de livraison *",
    checkoutPhoneLabel: "Numéro de téléphone *",
    checkoutSubmitBtn: "Confirmer la commande",
    secureCheckoutBadge: "Livraison sécurisée",
    faqHeading: "FAQ",
    faqSub: "En savoir plus."
  }
};

export const cocozhiBenefits: Record<'en' | 'fr' | 'ar', BenefitItem[]> = {
  ar: [
    { title: "تنظيف يومي لطيف", desc: "ينظف الشعر بفعالية مع الحفاظ على نعومته." },
    { title: "تجربة غسل منعشة", desc: "يمنح شعرك إحساساً بالانتعاش والنظافة." },
    { title: "شعر صحي وناعم", desc: "يحسن من مظهر وملمس الشعر." },
    { title: "عناية مستوحاة من جوز الهند", desc: "تركيبة لطيفة تمنح شعرك الحيوية." },
    { title: "مناسب للاستعمال اليومي", desc: "تركيبة متوازنة للاستخدام الدائم." },
    { title: "جودة DXN الموثوقة", desc: "جودة عالية في كل قطرة." }
  ],
  en: [
    { title: "Gentle daily cleansing", desc: "Cleans effectively while maintaining softness." },
    { title: "Refreshing washing experience", desc: "Gives hair a sense of freshness and cleanliness." },
    { title: "Healthy, soft hair", desc: "Improves the appearance and texture of hair." },
    { title: "Coconut-inspired care", desc: "A gentle formula that revives hair." },
    { title: "Suitable for daily use", desc: "Balanced formula for regular use." },
    { title: "Trusted DXN Quality", desc: "High quality in every drop." }
  ],
  fr: [
    { title: "Nettoyage quotidien doux", desc: "Nettoie efficacement tout en maintenant la douceur." },
    { title: "Expérience de lavage rafraîchissante", desc: "Donne aux cheveux une sensation de fraîcheur et de propreté." },
    { title: "Cheveux sains et doux", desc: "Améliore l'apparence et la texture des cheveux." },
    { title: "Soins inspirés de la noix de coco", desc: "Une formule douce qui revitalise les cheveux." },
    { title: "Adapté à un usage quotidien", desc: "Formule équilibrée pour une utilisation régulière." },
    { title: "Qualité DXN fiable", desc: "Une grande qualité dans chaque goutte." }
  ]
};

export const cocozhiPacks: Record<'en' | 'fr' | 'ar', PackItem[]> = {
  ar: [
    { id: 'single', title: "عبوة واحدة", desc: "عبوة غنية بشامبو كوكوزي.", price: 100 },
    { id: 'double', title: "عبوتان", desc: "عرض توفيري خاص.", price: 180 },
    { id: 'family', title: "3 عبوات", desc: "الباقة العائلية.", price: 250 }
  ],
  en: [
    { id: 'single', title: "1 Bottle", desc: "Bottle rich in Cocozhi shampoo.", price: 100 },
    { id: 'double', title: "2 Bottles", desc: "Special savings offer.", price: 180 },
    { id: 'family', title: "3 Bottles", desc: "Family pack.", price: 250 }
  ],
  fr: [
    { id: 'single', title: "1 Bouteille", desc: "Bouteille riche en shampooing Cocozhi.", price: 100 },
    { id: 'double', title: "2 Bouteilles", desc: "Offre d'épargne spéciale.", price: 180 },
    { id: 'family', title: "3 Bouteilles", desc: "Pack familial.", price: 250 }
  ]
};

export const cocozhiSteps: Record<'en' | 'fr' | 'ar', StepItem[]> = {
  ar: [
    { title: "بلل شعرك", desc: "بلل شعرك بالماء جيداً." },
    { title: "ضع كمية مناسبة", desc: "ضع الكمية المطلوبة من الشامبو." },
    { title: "دلك بلطف", desc: "دلك فروة الرأس والشعر برفق." },
    { title: "اغسل جيداً", desc: "اغسل شعرك بالماء بشكل كامل." },
    { title: "كرر إذا لزم الأمر", desc: "كرر العملية حسب الحاجة." }
  ],
  en: [
    { title: "Wet your hair", desc: "Thoroughly wet your hair with water." },
    { title: "Apply shampoo", desc: "Apply the desired amount of shampoo." },
    { title: "Massage gently", desc: "Gently massage the scalp and hair." },
    { title: "Rinse thoroughly", desc: "Rinse hair completely with water." },
    { title: "Repeat as desired", desc: "Repeat the process as needed." }
  ],
  fr: [
    { title: "Mouillez vos cheveux", desc: "Mouillez soigneusement vos cheveux avec de l'eau." },
    { title: "Appliquez le shampooing", desc: "Appliquez la quantité désirée de shampooing." },
    { title: "Massez doucement", desc: "Massez délicatement le cuir chevelu et les cheveux." },
    { title: "Rincez abondamment", desc: "Rincez complètement les cheveux avec de l'eau." },
    { title: "Répétez si nécessaire", desc: "Répétez le processus si nécessaire." }
  ]
};
