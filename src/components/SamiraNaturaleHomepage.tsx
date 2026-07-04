import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ShoppingBag,
  Phone,
  Check,
  Star,
  ShieldCheck,
  Truck,
  MessageCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  Heart,
  Activity,
  Smile,
  Instagram,
  Facebook,
  CreditCard,
  Leaf,
  Coffee,
  Eye,
  X
} from 'lucide-react';
import { productsData } from '../translations';
import PremiumWellnessPacksSection from './PremiumWellnessPacksSection';
import organicFarmImg from '../assets/images/samira_organic_farm_1782712300801.jpg';
const logoImg = 'https://i.ibb.co/BScXT93/16e2c2de-c552-451e-bde1-1d22720f0ba4-1.png';

interface SamiraNaturaleHomepageProps {
  lang: 'ar' | 'fr' | 'en' | 'es';
  isRtl: boolean;
  setActiveView: (view: any) => void;
  handleGeneralInquiry: () => void;
  addToCart: (productId: string) => void;
  setSelectedPackId: (id: string) => void;
  setShopCategory?: (category: string) => void;
}

// Local high-end translations specifically for the homepage
const homeT = {
  ar: {
    heroTitle: "جدد حيويتك وصحتك بأفضل ما في الطبيعة",
    heroSub: "منتجات DXN الأصلية المختارة بعناية لدعم الطاقة والصحة والعافية اليومية. اكتشف عافيتك اليوم.",
    ctaShop: "اكتشف المنتجات",
    ctaConsult: "استشارة مجانية عبر واتساب",
    stats: {
      happy: "5000+ عميل سعيد",
      products: "100+ منتج طبيعي",
      authentic: "100% منتجات أصلية",
      delivery: "توصيل لجميع مدن المغرب"
    },
    trust: {
      title: "ميثاق التميز الطبيعي لمتجرنا",
      sub: "نهتم بأدق تفاصيل عافيتكم من خلال منتجات آمنة، أصلية وخدمة تليق بكم",
      t1: "منتجات DXN أصلية",
      t1Desc: "مستوردة مباشرة ومضمونة الجودة",
      t2: "الدفع عند الاستلام",
      t2Desc: "ادفع فقط عندما تستلم طلبك بيدك",
      t3: "توصيل سريع",
      t3Desc: "شحن آمن ومجاني لجميع المدن المغربية",
      t4: "دعم واتساب 7/24",
      t4Desc: "استشارات ومتابعة شخصية مستمرة مع سميرة"
    },
    categories: {
      title: "مجموعاتنا العضوية الفاخرة",
      sub: "تصفح باقاتنا المصنفة بعناية لتلبية احتياجاتك واحتياجات عائلتك الصحية والجمالية اليومية",
      all: "كل المنتجات",
      coffee: "القهوة العضوية",
      drinks: "مشروبات حيوية",
      supplements: "أغذية ومكملات فائقة",
      personal: "العناية الشخصية",
      oils: "زيوت الاسترخاء"
    },
    bestsellers: {
      title: "باقة النخبة الأكثر طلباً ورواجاً",
      sub: "اكتشف إبداعات الطبيعة الأكثر مبيعاً وتقييماً من قبل آلاف العائلات المغربية السعيدة",
      badge: "الأكثر مبيعاً ✦",
      explore: "اكتشف العروض والخصومات"
    },
    testimonials: {
      title: "قصص ملهمة من مجتمعنا السعيد",
      sub: "أشخاص حقيقيون، تجارب صادقة، ونمط حياة مفعم بالصحة والعافية المتجددة"
    },
    about: {
      title: "رحلة سميرة ناتورال",
      sub: "جسركم الآمن نحو صحة متوازنة وعافية طبيعية مستدامة",
      p1: "أهلاً بكم في سميرة ناتورال، المساحة المخصصة لعشاق الصحة الحقيقية في المغرب. رسالتي هي تمكين العائلات المغربية من عيش حياة مفعمة بالنشاط والحيوية والجمال من خلال أرقى بدائل الغذاء والمنتجات العضوية المعتمدة عالمياً.",
      p2: "نحن فخورون بكوننا الموزع المعتمد الموثوق لمنتجات دي إكس إن (DXN) الماليزية العالمية، المشهورة بالفطر الريشي الخارق (الجانوديرما) والسبيرولينا الذهبية. نحرص على تقديم تجربة استشارية خاصة لكل عميل لضمان تحقيق أقصى استفادة وصحة مستدامة."
    },
    whatsapp: {
      title: "هل تحتاج استشارة صحية مجانية؟",
      sub: "لالة سميرة تجيبكم مباشرة وتساعدكم خطوة بخطوة في اختيار المنتجات والباقات الأنسب لصحتكم وأهدافكم اليومية.",
      btn: "تحدث مع سميرة الآن مباشرة عبر واتساب"
    }
  },
  fr: {
    heroTitle: "Revitalisez votre vitalité avec le meilleur de la nature",
    heroSub: "Les produits authentiques DXN sélectionnés avec soin pour soutenir votre énergie, votre santé et votre bien-être quotidien.",
    ctaShop: "Découvrir les Produits",
    ctaConsult: "Consultation WhatsApp Gratuite",
    stats: {
      happy: "5000+ Clients Heureux",
      products: "100+ Produits Naturels",
      authentic: "100% DXN Authentique",
      delivery: "Livraison Partout au Maroc"
    },
    trust: {
      title: "La Charte de notre Excellence Naturelle",
      sub: "Nous veillons sur votre bien-être quotidien avec rigueur, amour et d'incroyables garanties",
      t1: "Produits DXN Authentiques",
      t1Desc: "Garantis 100% originaux de la marque",
      t2: "Paiement à la Livraison",
      t2Desc: "Payez en toute sécurité à la réception",
      t3: "Livraison Express Rapide",
      t3Desc: "Expédition gratuite et sécurisée au Maroc",
      t4: "Support WhatsApp 7j/7",
      t4Desc: "Conseils et accompagnement sur-mesure de Samira"
    },
    categories: {
      title: "Nos Collections Biologiques Nobles",
      sub: "Parcourez nos différentes gammes d'excellence pour enrichir votre rituel de santé quotidien",
      all: "Tout",
      coffee: "Cafés Reishi",
      drinks: "Boissons Vitalité",
      supplements: "Superaliments",
      personal: "Soins Botaniques",
      oils: "Massages & Détente"
    },
    bestsellers: {
      title: "La Sélection d'Or de nos Meilleurs Vendeurs",
      sub: "Découvrez les solutions naturelles les plus demandées et évaluées 5 étoiles par nos clients",
      badge: "Meilleure Vente ✦",
      explore: "Découvrir l'offre exclusive"
    },
    testimonials: {
      title: "Votre Santé, Notre Plus Grande Fierté",
      sub: "Des retours d'expérience honnêtes et inspirants de notre communauté à travers le Maroc"
    },
    about: {
      title: "L'Histoire de Samira Naturale",
      sub: "Votre allié de confiance vers une vie plus saine et harmonieuse",
      p1: "Bienvenue chez Samira Naturale, votre espace premium dédié aux compléments et rituels d'hygiène naturelle au Maroc. Ma mission est de partager avec vous des solutions pures, saines et scientifiquement reconnues pour revitaliser votre corps.",
      p2: "En tant que partenaire officiel certifié DXN, nous vous proposons le meilleur du Ganoderma (Reishi) et de la Spiruline. Chaque produit fait l'objet d'un contrôle rigoureux et d'une expédition soignée, complétée par un suivi personnalisé gratuit."
    },
    whatsapp: {
      title: "Besoin de conseils personnalisés gratuits ?",
      sub: "Samira est à votre écoute pour répondre à toutes vos questions et vous guider vers la cure de santé idéale.",
      btn: "Parler avec Samira sur WhatsApp"
    }
  },
  en: {
    heroTitle: "Revitalize Your Health with Nature's Purity",
    heroSub: "Authentic premium DXN natural products selected with care to support your energy, daily health, and biological wellness.",
    ctaShop: "Discover Products",
    ctaConsult: "Free WhatsApp Consultation",
    stats: {
      happy: "5000+ Happy Customers",
      products: "100+ Natural Products",
      authentic: "100% DXN Certified",
      delivery: "Morocco-Wide Shipping"
    },
    trust: {
      title: "Our Absolute Trust Charter",
      sub: "Caring deeply for your wellness with authentic ingredients and elite local services",
      t1: "Genuine DXN Products",
      t1Desc: "100% official brand seals guaranteed",
      t2: "Cash on Delivery",
      t2Desc: "Pay only when you hold the product in hand",
      t3: "Express Morocco Shipping",
      t3Desc: "Fast, safe, and completely free delivery",
      t4: "7/24 WhatsApp Support",
      t4Desc: "Direct ongoing guidance and counseling with Samira"
    },
    categories: {
      title: "Our Noble Biological Collections",
      sub: "Browse our premium selected ranges to craft your ultimate organic daily health rituals",
      all: "All",
      coffee: "Organic Coffee",
      drinks: "Wellness Drinks",
      supplements: "Superfoods",
      personal: "Body & Skin Care",
      oils: "Relaxing Oils"
    },
    bestsellers: {
      title: "Our Highly-Acclaimed Best Sellers",
      sub: "Explore the most loved, top-voted biological essentials requested across Moroccan homes",
      badge: "Bestseller ✦",
      explore: "Explore details & special offer"
    },
    testimonials: {
      title: "Heartfelt Success Stories From Our Community",
      sub: "Real reviews and honest feedback from verified customers enjoying daily radiant energy"
    },
    about: {
      title: "The Samira Naturale Story",
      sub: "Your premier gateway to organic wellness and cellular balance",
      p1: "Welcome to Samira Naturale, Morocco's leading trusted shop for DXN organic nutrition and botanical skincare. My passion is to empower families to thrive with sustained stamina and healthy natural immunity.",
      p2: "We are an authorized DXN distributor specializing in premium Reishi mushrooms and alkaline Spirulina. We provide direct product support and customized consultations to ensure premium health results for you."
    },
    whatsapp: {
      title: "Need a free health consultation?",
      sub: "Samira is online on WhatsApp to guide you and provide tailored recommendations for your body's needs.",
      btn: "Chat with Samira directly on WhatsApp"
    }
  },
  es: {
    heroTitle: "Revitalice su salud con lo mejor de la naturaleza",
    heroSub: "Productos DXN originales cuidadosamente seleccionados para apoyar su energía, salud y bienestar diario. Descubra su bienestar hoy.",
    ctaShop: "Descubrir Productos",
    ctaConsult: "Consulta gratuita por WhatsApp",
    stats: {
      happy: "5000+ Clientes Felices",
      products: "100+ Productos Naturales",
      authentic: "100% Productos Originales",
      delivery: "Envío a todo Marruecos"
    },
    trust: {
      title: "Nuestra Carta de Excelencia Natural",
      sub: "Cuidamos cada detalle de su bienestar a través de productos seguros, originales y un servicio a su altura",
      t1: "Productos DXN Originales",
      t1Desc: "Garantía de calidad 100% original",
      t2: "Pago Contra Reembolso",
      t2Desc: "Pague solo cuando reciba su pedido en mano",
      t3: "Envío Rápido",
      t3Desc: "Envío seguro y gratuito a todas las ciudades de Marruecos",
      t4: "Soporte WhatsApp 24/7",
      t4Desc: "Asesoramiento continuo y seguimiento personalizado con Samira"
    },
    categories: {
      title: "Nuestras Colecciones Orgánicas Premium",
      sub: "Explore nuestras gamas seleccionadas para satisfacer sus necesidades diarias de salud y belleza familiar",
      all: "Todos los productos",
      coffee: "Café Orgánico",
      drinks: "Bebidas Vitales",
      supplements: "Superalimentos",
      personal: "Cuidado Personal",
      oils: "Aceites Relajantes"
    },
    bestsellers: {
      title: "La Selección de Élite Más Vendida",
      sub: "Descubra las creaciones de la naturaleza más vendidas y mejor valoradas por miles de familias felices",
      badge: "Más Vendido ✦",
      explore: "Explorar ofertas y descuentos"
    },
    testimonials: {
      title: "Historias Inspiradoras de Nuestra Comunidad",
      sub: "Personas reales, experiencias sinceras y un estilo de vida lleno de salud y vitalidad renovada"
    },
    about: {
      title: "El Viaje de Samira Naturale",
      sub: "Su puente seguro hacia una salud equilibrada y bienestar natural sostenible",
      p1: "Bienvenidos a Samira Naturale, el espacio dedicado a los entusiastas de la salud real en Marruecos. Mi misión es capacitar a las familias para que vivan una vida llena de actividad, vitalidad y belleza a través de las mejores alternativas alimentarias y productos orgánicos certificados internacionalmente.",
      p2: "Nos enorgullece ser el distribuidor certificado de confianza de los productos de DXN, famosos por el hongo Reishi (Ganoderma) y la Espirulina de alta calidad. Nos aseguramos de brindar una consulta personalizada para cada cliente para garantizar el máximo beneficio y salud a largo plazo."
    },
    whatsapp: {
      title: "¿Necesita una consulta de salud gratuita?",
      sub: "Samira le responde directamente por WhatsApp y le ayuda paso a paso a elegir los productos y packs que mejor se adapten a su salud y objetivos diarios.",
      btn: "Hable con Samira ahora directamente por WhatsApp"
    }
  }
};

const ganoSectionT = {
  ar: {
    badge: "✦ العشبة المعجزة الرائدة للتوازن والتكيف",
    title: "جانوديرما (الفطر الريشي)",
    sub: "سر التوازن والنشاط الطبيعي المتكامل",
    desc: "يتم زراعة وإنتاج فطر جانوديرما دي إكس إن (DXN) تحت ظروف صحية خاضعة لرقابة صارمة وبما يتوافق مع معايير الجودة العالمية ISO 9002 و ISO 14001 و GMP و TGA و معايير الحلال المعتمدة. في أي مرحلة من مراحل الزراعة أو خلال عملية معالجة فطر الريشي، لا يتم استخدام أي مواد كيميائية أو مبيدات حشرية أو ملونات اصطناعية أو نكهات أو أي مواد غريبة مضافة. تعتمد مزارع دي إكس إن (DXN) حصرياً على مواد عضوية طبيعية مثل قش الأرز ونشارة الخشب بدلاً من الأسمدة الكيماوية التقليدية أو مبيدات الأعشاب أو الهرمونات الاصطناعية.",
    imgCaptions: [
      "مسحوق فطر الريشي (البودرة النقية المعززة)",
      "فطر الجانوديرما الطازج والحيوي الفاخر",
      "مكمل غانوسيليوم (GL) العضوي لدعم الخلايا",
      "زراعة الجانوديرما العضوية على الجذوع الطبيعية",
      "كبسولات فطر الريشي المركزة الفائقة",
      "زجاجة ريشي جانو (RG) لتطهير الجسم من السموم"
    ]
  },
  fr: {
    badge: "✦ L'HERBE SUPRÊME DE L'ÉQUILIBRE ET DE L'ADAPTATION",
    title: "GANODERMA",
    sub: "Le secret de l'équilibre et de la vitalité naturelle intégrale",
    desc: "Le Ganoderma de DXN est cultivé et produit dans des conditions d'hygiène strictement contrôlées et conformément aux normes de qualité internationales ISO 9002, ISO 14001, GMP, TGA et Halal. À aucun stade de la culture ou du traitement du Reishi, aucun produit chimique, pesticide, colorant artificiel, arôme ou autre additif n'est utilisé. Les fermes de DXN s'appuient exclusivement sur des matières organiques naturelles telles que la paille de riz et la sciure de bois au lieu d'engrais chimiques, d'herbicides ou d'hormones synthétiques.",
    imgCaptions: [
      "Poudre de Champi-Reishi Pure & Authentique",
      "Ganoderma Frais, Pur et Vibrant",
      "Ganocelium (GL) Organique pour le Soutien Cellulaire",
      "Culture Biologique sur Bûches de Bois Naturelles",
      "Gélules de Reishi Concentrées et Puissantes",
      "Reishi Gano (RG) Premium pour la Détoxification"
    ]
  },
  en: {
    badge: "✦ THE SUPREME HERB OF BALANCE AND ADAPTATION",
    title: "GANODERMA (REISHI MUSHROOM)",
    sub: "The secret of balance and comprehensive natural vitality",
    desc: "DXN Ganoderma is cultivated and produced under strictly controlled hygienic conditions in compliance with international quality standards ISO 9002, ISO 14001, GMP, TGA, and Halal certification. At no stage of cultivation or processing of Reishi are any chemicals, pesticides, artificial colorings, flavors, or any foreign additives used. DXN farms rely exclusively on natural organic materials such as rice straw and sawdust instead of chemical fertilizers, herbicides, or synthetic hormones.",
    imgCaptions: [
      "Pure & Authentic Reishi Mushroom Powder",
      "Fresh, Pure and Vibrant Ganoderma Mushroom",
      "Organic Ganocelium (GL) for Cellular Support",
      "Organic Ganoderma Log Cultivation in DXN Farms",
      "Concentrated & Potent Reishi Mushroom Capsules",
      "Premium Reishi Gano (RG) for Deep Detoxification"
    ]
  },
  es: {
    badge: "✦ LA HIERBA MILAGROSA LÍDER EN EQUILIBRIO Y ADAPTACIÓN",
    title: "GANODERMA (HONGO REISHI)",
    sub: "El secreto del equilibrio y la vitalidad natural integral",
    desc: "El hongo Ganoderma de DXN se cultiva y produce bajo condiciones higiénicas estrictamente controladas, de acuerdo con los estándares internacionales de calidad ISO 9002, ISO 14001, GMP, TGA y la certificación Halal. En ninguna etapa del cultivo o procesamiento del hongo Reishi se utilizan productos químicos, pesticidas, colorantes artificiales, saborizantes ni aditivos extraños. Las granjas de DXN dependen exclusivamente de materiales orgánicos naturales como paja de arroz y serrín de madera, en lugar de fertilizantes químicos, herbicidas u hormonas sintéticas.",
    imgCaptions: [
      "Polvo de hongo Reishi (polvo puro potenciado)",
      "Hongo Ganoderma fresco, vivo y de primera calidad",
      "Ganocelium (GL) orgánico para soporte celular",
      "Cultivo orgánico de Ganoderma en troncos naturales",
      "Cápsulas de hongo Reishi superconcentradas",
      "Reishi Gano (RG) premium para desintoxicación profunda"
    ]
  }
};

const ganoImages = [
  "https://i.ibb.co/9kqPzvX0/image.png",
  "https://i.ibb.co/nM2r8GX7/image.png",
  "https://i.ibb.co/TxVq1m9g/image.png",
  "https://i.ibb.co/Kz5w9BXP/image.png",
  "https://i.ibb.co/5xh5M5JF/image.png",
  "https://i.ibb.co/pjXGVxWp/image.png"
];

const heroSlides = [
  {
    id: "organic_farm",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",
    ar: {
      title: "مزارعنا العضوية الطبيعية",
      desc: "نحن في سميرة ناتشورال نؤمن بقوة الطبيعة النقية والحلول الغذائية المتوازنة. منتجاتنا تأتي مباشرة من مزارع عضوية خاضعة لأعلى معايير الجودة العالمية لضمان عافيتك وصحتك اليومية بأمان تام وبدون أي إضافات كيميائية."
    },
    fr: {
      title: "Nos Fermes Biologiques Naturelles",
      desc: "Chez Samira Naturale, nous croyons au pouvoir de la nature pure et équilibrée. Nos produits proviennent de fermes biologiques soumises aux normes de qualité internationales les plus strictes pour votre bien-être au quotidien."
    },
    en: {
      title: "Our Natural Organic Farms",
      desc: "At Samira Naturale, we believe in the power of pure, balanced nature. Our products are sourced directly from organic farms subject to the highest international quality standards to guarantee your wellness."
    },
    es: {
      title: "Nuestras Granjas Orgánicas Naturales",
      desc: "En Samira Naturale, creemos en el poder de la naturaleza pura y los alimentos equilibrados. Nuestros productos provienen directamente de granjas orgánicas que cumplen con los más altos estándares internacionales de calidad para garantizar su bienestar diario con total seguridad y sin aditivos químicos."
    }
  },
  {
    id: "coffee",
    image: "https://i.ibb.co/PSQ7Q7m/image.png",
    ar: {
      title: "قهوة صحية مع الجانوديرما",
      desc: "تقدّر DXN تقليد القهوة وتعمل بمنهجية لضمان أن يحتوي كوبك على أجود أنواع القهوة—مزيج مبتكر يجمع بين المذاق والقيمة الغذائية. نبدأ بأفضل وأجود حبوب القهوة الطازجة. استمتع واستكشف عالم القهوة الرائع مع الجانوديرما العضوية، من خلال مجموعة DXN الواسعة من القهوة والمشروبات اليوم. في عام 2005، قامت DXN ببناء مصنع قهوة جديد، وحصلت لاحقاً على شهادة HACCP من وزارة الصحة."
    },
    fr: {
      title: "Café Santé au Ganoderma",
      desc: "DXN apprécie la tradition du café et travaille avec méthode pour s'assurer que votre tasse contient le meilleur café — un mélange innovant qui allie goût et valeur nutritionnelle. Nous commençons avec les grains de café les plus fins."
    },
    en: {
      title: "Healthy Coffee with Ganoderma",
      desc: "DXN appreciates the coffee tradition and works methodically to ensure your cup contains the finest coffee — an innovative blend combining taste and nutritional value. We start with the finest and freshest coffee beans."
    },
    es: {
      title: "Café Saludable con Ganoderma",
      desc: "DXN valora la tradición del café y trabaja con una metodología estricta para garantizar que su taza contenga el mejor café: una mezcla innovadora que combina sabor y valor nutricional. Comenzamos con los granos de café más finos y frescos. Disfrute y descubra el maravilloso mundo del café con Ganoderma orgánico."
    }
  },
  {
    id: "ganoderma",
    image: "https://www.dxnwellness.eu/uk/wp-content/uploads/2025/03/Sample_1920x1020_1.jpg",
    ar: {
      title: "جانوديرما (الفطر الريشي)",
      desc: "العشبة المتكيفة والمتوازنة المثالية في الطبيعة، حيث تحتوي على أكثر من 400 مركب نشط بيولوجياً، منها 150 من مضادات الأكسدة المعروفة بفوائدها للجسم. تشمل هذه المركبات البروتينات، الألياف، الفيتامينات، المعادن، والأحماض الأمينية."
    },
    fr: {
      title: "Ganoderma (Le Reishi)",
      desc: "L'herbe adaptogène et équilibrante idéale par excellence dans la nature, contenant plus de 400 composés biologiquement actifs, dont 150 antioxydants connus pour leurs bienfaits sur le corps (protéines, vitamines, minéraux)."
    },
    en: {
      title: "Ganoderma (Reishi Mushroom)",
      desc: "The ideal adaptive and balancing herb in nature, containing over 400 biologically active compounds, including 150 antioxidants known for their body benefits. These include proteins, vitamins, minerals, and amino acids."
    },
    es: {
      title: "Ganoderma (Hongo Reishi)",
      desc: "La hierba adaptógena y equilibrante ideal de la naturaleza, que contiene más de 400 compuestos biológicamente activos, incluidos 150 antioxidantes conocidos por sus beneficios para el organismo. Estos compuestos incluyen proteínas, fibra, vitaminas, minerales y aminoácidos."
    }
  },
  {
    id: "personal_care",
    image: "https://www.dxnwellness.eu/uk/wp-content/uploads/2025/03/Banner_PC2.jpg",
    ar: {
      title: "العناية الشخصية",
      desc: "اكتشف منتجات العناية الشخصية عالية الجودة من DXN، المصممة لمن يسعون للتميز بمظهرهم وصحتهم اليومية! تركيبات غنية وعضوية تغذي البشرة، الأسنان، والشعر بلطف وأمان تام."
    },
    fr: {
      title: "Soins Personnels",
      desc: "Découvrez les produits de soins personnels de haute qualité de DXN, conçus pour ceux qui recherchent l'excellence ! Des formules riches et biologiques qui nourrissent en douceur votre peau, vos dents et vos cheveux."
    },
    en: {
      title: "Personal Care",
      desc: "Discover DXN's high-quality personal care products, designed for those who seek excellence in their daily health and appearance! Rich organic formulas that gently and safely nourish your skin, teeth, and hair."
    },
    es: {
      title: "Cuidado Personal",
      desc: "¡Descubra los productos de cuidado personal de alta calidad de DXN, diseñados para quienes buscan la excelencia en su apariencia y salud diaria! Fórmulas ricas y orgánicas que nutren suave y seguramente la piel, los dientes y el cabello."
    }
  },
  {
    id: "greek_cosmetics",
    image: "https://www.dxnwellness.eu/uk/wp-content/uploads/2025/03/Sample_1920x1020_3.jpg",
    ar: {
      title: "مستحضرات تجميل نباتية يونانية",
      desc: "مجموعة مستحضرات التجميل DXN Kallow تحتوي على مكونات طبيعية متعددة الفعالية وعالية الأداء لتغذية البشرة وحمايتها واستعادتها وإزالة السموم منها بشكل طبيعي مستدام."
    },
    fr: {
      title: "Cosmétiques Botaniques Grecs",
      desc: "La gamme cosmétique DXN Kallow contient des ingrédients naturels multi-actifs et performants pour nourrir, protéger, restaurer et détoxifier la peau. Une sélection pure et efficace formulée pour sublimer votre teint."
    },
    en: {
      title: "Greek Botanical Cosmetics",
      desc: "The DXN Kallow cosmetic range contains high-performance, multi-active natural ingredients to nourish, protect, restore, and detoxify the skin. A pure and effective selection developed to optimize skin health."
    },
    es: {
      title: "Cosméticos Botánicos Griegos",
      desc: "La gama de cosméticos DXN Kallow contiene ingredientes naturales de alto rendimiento y multiactividad para nutrir, proteger, restaurar y desintoxicar la piel de forma natural y sostenible."
    }
  }
];
interface CategoryItem {
  id: string;
  icon: any;
  image: string;
  view: string;
  title: {
    ar: string;
    fr: string;
    en: string;
  };
  desc: {
    ar: string;
    fr: string;
    en: string;
  };
}

const categoriesList: CategoryItem[] = [
  {
    id: 'coffee',
    icon: Coffee,
    image: 'https://i.ibb.co/s9qYfmDg/image.png',
    view: 'coffee',
    title: {
      ar: 'القهوة',
      fr: 'Le Café',
      en: 'Coffee'
    },
    desc: {
      ar: 'قهوة مغذية معززة بالفطر الريشي للعناية اليومية ونشاط متجدد.',
      fr: 'Café nutritif enrichi en Ganoderma pour un bien-être quotidien.',
      en: 'Nutritious coffee enriched with Ganoderma for everyday wellness.'
    }
  },
  {
    id: 'supplements',
    icon: Sparkles,
    image: 'https://i.ibb.co/spST9XJM/image.png',
    view: 'spirulina',
    title: {
      ar: 'مكملات غذائية',
      fr: 'Compléments',
      en: 'Supplements'
    },
    desc: {
      ar: 'السبيرولينا، الكورديسبس، البوتنزي وغيرها من المكملات العضوية الفائقة.',
      fr: 'Spiruline, Cordyceps, Potenzhi et autres superaliments nutritifs.',
      en: 'Spirulina, Cordyceps, Potenzhi and other nutritional supplements.'
    }
  },
  {
    id: 'foods',
    icon: Leaf,
    image: 'https://i.ibb.co/XrgDjvXD/image.png',
    view: 'spirulina-cereal',
    title: {
      ar: 'الأطعمة',
      fr: 'Les Aliments',
      en: 'Foods'
    },
    desc: {
      ar: 'حبوب السيريال والمواد الغذائية العضوية المفيدة لصحة العائلة.',
      fr: 'Céréales et aliments sains et nutritifs pour toute la famille.',
      en: 'Healthy cereals and nutritious food products for the whole family.'
    }
  },
  {
    id: 'drinks',
    icon: Smile,
    image: 'https://i.ibb.co/Jj1wrV2b/image.png',
    view: 'moricinia',
    title: {
      ar: 'الشاي والمشروبات',
      fr: 'Le Thé & Boissons',
      en: 'Tea & Drinks'
    },
    desc: {
      ar: 'عصائر الكورديسبس، الموريسينيا، والكركديه لتعزيز الحيوية والنشاط.',
      fr: 'Jus de Cordypine, Moricinia et Roselle pour la vitalité.',
      en: 'Healthy fruit drinks and premium elixirs for natural vitality.'
    }
  },
  {
    id: 'care',
    icon: Smile,
    image: 'https://i.ibb.co/fYjxy5MD/image.png',
    view: 'toothpaste',
    title: {
      ar: 'العناية الشخصية',
      fr: 'Soins Personnels',
      en: 'Personal Care'
    },
    desc: {
      ar: 'منتجات عناية يومية طبيعية للبشرة، الجسم، وصحة الفم والأسنان.',
      fr: 'Soins quotidiens naturels pour la peau, le corps et l\'hygiène buccale.',
      en: 'Natural daily care products for skin, body and oral hygiene.'
    }
  },
  {
    id: 'cosmetics',
    icon: Smile,
    image: 'https://i.ibb.co/GfPQNL6M/image.png',
    view: 'soap',
    title: {
      ar: 'مستحضرات التجميل',
      fr: 'Cosmétiques',
      en: 'Cosmetics'
    },
    desc: {
      ar: 'منتجات تجميل وعناية فائقة مستوحاة من روعة الطبيعة.',
      fr: 'Produits de soin de la peau de luxe et de beauté.',
      en: 'Premium luxury cosmetics and skin treatments.'
    }
  }
];

export default function SamiraNaturaleHomepage({
  lang,
  isRtl,
  setActiveView,
  handleGeneralInquiry,
  addToCart,
  setSelectedPackId,
  setShopCategory
}: SamiraNaturaleHomepageProps) {
  const currentT = homeT[lang];

  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  // Testimonial carousel and mouse motion states
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Autoplay hero slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Auto slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonialList = [
    {
      name: isRtl ? "فاطمة الزهراء ع." : "Fatima-Zahra A.",
      city: isRtl ? "الرباط" : "Rabat",
      text: isRtl
        ? "السبيرولينا غزال بزاف تبارك الله، عاوناتني نرجع النشاط ديالي ونقضي على السخفة وفقر الدم لي كان مأثر عليا بزاف. شكرا لالة سميرة على النصائح والمتابعة الراقية والتوصيل لي وصلني فنهارو!"
        : "La spiruline est incroyable ! Elle m'a aidé à retrouver toute mon énergie et à soigner mon anémie persistante. Un grand merci à Samira pour son écoute !",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: isRtl ? "كريم م." : "Karim M.",
      city: isRtl ? "الدار البيضاء" : "Casablanca",
      text: isRtl
        ? "أنا مكنتش كنشرب القهوة العادية حيت كتسبب ليا الحموضة وقلق فالمعدة. ولكن هاد قهوة لينجزي السوداء بالفطر الريشي من أروع ما جربت! طاقة ونشاط نهار كامل ومريحة بزاف للمعدة."
        : "Le café noir Lingzhi est magique. Énergie immédiate sans acidité gastrique ni palpitations. Très agréable pour la digestion !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: isRtl ? "سهام ت." : "Siham T.",
      city: isRtl ? "مراكش" : "Marrakech",
      text: isRtl
        ? "مسحوق السبيرولينا العضوي دي إكس إن كنز حقيقي! عطيته للوالد ديالي كبير فالسن ومن بعد أسبوعين حس بالفرق فالحركة والنشاط، والحمد لله تحسنت صحتو بزاف."
        : "La Spiruline en poudre de DXN est un superaliment incontournable. Très efficace contre le manque de fer et parfait pour la récupération musculaire.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: isRtl ? "سامية خ." : "Samia K.",
      city: isRtl ? "طنجة" : "Tangier",
      text: isRtl
        ? "هذا الشامبو غير لي حياتي صراحة! كنت كنعاني بزاف من تساقط الشعر والحكة، ومن أول سيمانة حسيت بجلدة راسي ارتاحت بزاف وشعري رجع فيه اللمعان والحيوية الطبيعية."
        : "Ce shampoing a métamorphosé ma chevelure ! Je perdais mes cheveux et souffrais de démangeaisons constantes ; dès les premiers lavages, mon cuir chevelu s'est apaisé.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    }
  ];

  // Language-specific localized badge, headings, and descriptions for luxury Hero Redesign
  const heroBadge = lang === 'ar' ? "🌿 منتجات DXN الأصلية" : lang === 'fr' ? "🌿 Produits DXN Authentiques" : "🌿 Authentic DXN Products";
  const heroDescription = lang === 'ar' 
    ? "اكتشف مجموعة مختارة من منتجات DXN الأصلية، بما في ذلك المكملات الغذائية، القهوة الصحية، والباقات المصممة لدعم المناعة والطاقة والتركيز."
    : lang === 'fr' 
      ? "Découvrez une sélection de produits authentiques DXN, incluant des compléments alimentaires, du café sain et des packs conçus pour soutenir l'immunité, l'énergie et la concentration."
      : "Discover a curated selection of authentic DXN products, including food supplements, healthy coffee, and premium packs designed to support immunity, energy, and mental focus.";

  const ctaShopText = lang === 'ar' ? "🛒 تسوق الآن" : lang === 'fr' ? "🛒 Acheter maintenant" : "🛒 Shop Now";
  const ctaConsultText = currentT.ctaConsult;

  const trustCardsList = [
    {
      icon: ShieldCheck,
      color: "#0E7A43",
      text: lang === 'ar' ? "منتجات أصلية 100%" : lang === 'fr' ? "Produits 100% Authentiques" : "100% Authentic Products"
    },
    {
      icon: Truck,
      color: "#D4AF37",
      text: lang === 'ar' ? "توصيل سريع ومجاني بالمغرب" : lang === 'fr' ? "Livraison rapide au Maroc" : "Fast Delivery in Morocco"
    },
    {
      icon: CreditCard,
      color: "#0E7A43",
      text: lang === 'ar' ? "الدفع عند الاستلام" : lang === 'fr' ? "Paiement à la livraison" : "Cash on Delivery"
    },
    {
      icon: Leaf,
      color: "#0E7A43",
      text: lang === 'ar' ? "مكونات طبيعية 100%" : lang === 'fr' ? "Ingrédients 100% Naturels" : "100% Natural Ingredients"
    }
  ];

  const renderHeading = () => {
    if (lang === 'ar') {
      return (
        <>
          صحتك تبدأ من <span className="text-[#0E7A43] font-black relative inline-block">
            الطبيعة
            <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#DFF5E8]/60 -z-10 rounded-full"></span>
          </span>{' '}
          مع منتجات <span className="text-[#D4AF37] font-black relative inline-block">
            DXN
          </span>{' '}
          الأصلية
        </>
      );
    } else if (lang === 'fr') {
      return (
        <>
          Votre santé commence par la <span className="text-[#0E7A43] font-black relative inline-block">
            Nature
            <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#DFF5E8]/60 -z-10 rounded-full"></span>
          </span>{' '}
          avec les produits originaux <span className="text-[#D4AF37] font-black relative inline-block">
            DXN
          </span>
        </>
      );
    } else {
      return (
        <>
          Your Health Starts from <span className="text-[#0E7A43] font-black relative inline-block">
            Nature
            <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#DFF5E8]/60 -z-10 rounded-full"></span>
          </span>{' '}
          with Original <span className="text-[#D4AF37] font-black relative inline-block">
            DXN
          </span>{' '}
          Products
        </>
      );
    }
  };

  return (
    <div className="w-full text-[#111827]" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      {/* ================= REDESIGNED LUXURY HERO SECTION ================= */}
      <section className="relative bg-[#FAFCFA] py-4 md:py-16 overflow-hidden border-b border-[#0E7A43]/10">
        
        {/* Luxury Background Visual Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-[#0E7A43]/3 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#D4AF37]/3 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10 flex flex-col gap-10">
          
          {/* Brand Introduction Row */}
          <div className="text-center max-w-3xl mx-auto select-none space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DFF5E8]/60 border border-[#0E7A43]/20 text-[#0E7A43] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>{heroBadge}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight tracking-tight">
              {renderHeading()}
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              {heroDescription}
            </p>
          </div>

          {/* Majestic Large Slideshow Frame - Redesigned as a Premium Split Card to prevent text from covering the image */}
          <div className={`relative w-full h-auto md:h-[480px] lg:h-[540px] rounded-[2.5rem] border-[6px] border-white shadow-[0_25px_50px_-12px_rgba(14,122,67,0.15)] overflow-hidden bg-[#FCFAF6] dark:bg-slate-950 flex flex-col ${isRtl ? 'md:flex-row-reverse' : 'md:flex-row'} group`}>
            
            {/* 1. Left/Right Half: Beautiful Image Stage (100% visible, clean and uncovered) */}
            <div className="w-full h-[260px] sm:h-[340px] md:h-full md:w-1/2 relative overflow-hidden bg-neutral-100 shrink-0">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide][lang].title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.02]" />
              </motion.div>

              {/* Navigation Arrows inside the image stage on desktop (visible on hover) */}
              <button
                onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/85 dark:bg-slate-900/85 hover:bg-white dark:hover:bg-slate-800 text-[#1C352D] dark:text-stone-100 flex items-center justify-center transition-all duration-300 backdrop-blur-xs cursor-pointer shadow-md hover:scale-105 active:scale-95 hidden sm:flex`}
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
                className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/85 dark:bg-slate-900/85 hover:bg-white dark:hover:bg-slate-800 text-[#1C352D] dark:text-stone-100 flex items-center justify-center transition-all duration-300 backdrop-blur-xs cursor-pointer shadow-md hover:scale-105 active:scale-95 hidden sm:flex`}
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* 2. Right/Left Half: Elegant Copy & Action Panel */}
            <div className={`w-full flex-1 p-6 sm:p-10 lg:p-14 flex flex-col justify-between items-center text-center ${isRtl ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} bg-[#FAF8F4] dark:bg-slate-900/30`}>
              
              {/* Header Badge Row */}
              <div className="flex items-center gap-3 select-none">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0E7A43] bg-[#EAF0EC] dark:bg-[#0E7A43]/15 dark:text-[#59B17D] px-3.5 py-1 rounded-full">
                  {lang === 'ar' ? 'عضوية معتمدة' : lang === 'fr' ? 'Certifié Bio' : 'Certified Organic'}
                </span>
                <span className="text-xs font-extrabold text-[#C8A34D] font-mono">
                  {currentSlide + 1} / {heroSlides.length}
                </span>
              </div>

              {/* Text Area with Staggered Spring Animations */}
              <div className="flex-1 flex flex-col justify-center my-6 md:my-0 w-full">
                <motion.h3
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="text-xl sm:text-2xl lg:text-3.5xl font-black text-[#1C352D] dark:text-stone-100 leading-tight tracking-wide"
                >
                  {heroSlides[currentSlide][lang].title}
                </motion.h3>

                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.1 }}
                  className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed font-bold mt-4 max-w-lg"
                >
                  {heroSlides[currentSlide][lang].desc}
                </motion.p>
              </div>

              {/* Action Button & Dots Footer Row */}
              <div className={`w-full flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-0 border-t border-black/[0.04] dark:border-white/[0.05] pt-5 mt-auto`}>
                
                {/* Custom Styled Call To Action */}
                <motion.div
                  key={`btn-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.15 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      const slide = heroSlides[currentSlide];
                      if (slide.id === 'ganoderma') {
                        const el = document.getElementById('ganoderma_section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else if (slide.id === 'coffee') {
                        setShopCategory('coffee');
                        setActiveView('shop');
                      } else if (slide.id === 'personal_care') {
                        setShopCategory('care');
                        setActiveView('shop');
                      } else if (slide.id === 'greek_cosmetics') {
                        setShopCategory('cosmetics');
                        setActiveView('shop');
                      }
                    }}
                    className="inline-flex items-center justify-center py-2.5 px-8 bg-[#1C352D] hover:bg-[#0E7A43] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-neutral-950 font-black text-xs sm:text-sm rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(28,53,45,0.18)] hover:shadow-[0_12px_25px_rgba(28,53,45,0.3)] cursor-pointer uppercase tracking-wider"
                  >
                    <span>{lang === 'ar' ? 'اقرأ المزيد' : lang === 'fr' ? 'En savoir plus' : 'Read More'}</span>
                  </motion.button>
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2 select-none">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentSlide 
                          ? 'w-6 bg-[#0E7A43]' 
                          : 'w-2.5 bg-[#0E7A43]/20 hover:bg-[#0E7A43]/45'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PREMIUM PRODUCT CATEGORIES SECTION ================= */}
      <section id="featured_collections" className="py-12 md:py-24 bg-[#FAFAF8] relative overflow-hidden">
        {/* Background Decorative Accents */}
        <div className="absolute top-1/4 right-[-10%] w-96 h-96 bg-[#C8A34D]/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-[#0E7A43]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Title Area - Re-designed to match dxnwellness.eu screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 select-none">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-wider text-[#C8A34D] uppercase block mb-2"
            >
              {lang === 'ar' ? 'اكتشف الفئات الشائعة' : lang === 'fr' ? 'Découvrez les catégories populaires' : 'Discover Popular Categories'}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl font-black text-[#1F2937] dark:text-white tracking-wide uppercase leading-tight"
            >
              {lang === 'ar' ? 'أقسام المنتجات' : lang === 'fr' ? 'Catégories de Produits' : 'Product Categories'}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 w-16 bg-[#C8A34D] mx-auto mt-4 rounded-full origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-4 leading-relaxed font-semibold max-w-2xl mx-auto"
            >
              {lang === 'ar' 
                ? 'تشمل مجموعات منتجات دكسن: المكملات الغذائية، الأغذية والمشروبات، منتجات العناية الشخصية، العناية بالبشرة، ومستحضرات التجميل.'
                : lang === 'fr'
                ? 'Les collections DXN incluent des compléments de santé, des aliments et boissons, des soins personnels, des soins de la peau et des cosmétiques.'
                : 'DXN product collections include: Dietary supplements, food & beverages, personal care, skincare, and premium cosmetics.'}
            </motion.p>
          </div>

          {/* Redesigned Premium Cards Grid - 2 columns on mobile, square cards with pro animations */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-6 lg:gap-8 mt-6 md:mt-16"
          >
            {categoriesList.map((item) => {
              const titleText = item.title[lang] || item.title.en;
              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 110,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  onClick={() => {
                    if (setShopCategory) {
                      setShopCategory(item.id);
                    }
                    setActiveView('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex flex-col items-stretch cursor-pointer select-none"
                >
                  {/* Square aspect ratio with deeply rounded corners matching the screenshot */}
                  <div className="aspect-square w-full rounded-[2rem] sm:rounded-[2.5rem] bg-stone-150 dark:bg-slate-900 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-black/[0.03] dark:border-white/[0.04] group-hover:border-[#C8A34D]/40 transition-all duration-500 relative">
                    <img
                      src={item.image}
                      alt={titleText}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark overlay that softens on hover */}
                    <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Elegant, clean category title centered underneath the rounded card */}
                  <div className="mt-3 md:mt-4 text-center px-1">
                    <h3 className="text-sm sm:text-base font-extrabold tracking-wide text-[#1C352D] dark:text-stone-100 transition-colors duration-300 group-hover:text-[#C8A34D]">
                      {titleText}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST CARDS SECTION ================= */}
      <section className="py-8 md:py-16 bg-white relative overflow-hidden border-b border-[#0E7A43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
            {trustCardsList.map((card, index) => {
              const IconComp = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-[#0E7A43]/10 rounded-[1.5rem] p-5 flex flex-col sm:flex-row items-center gap-3.5 hover:-translate-y-1 hover:bg-white hover:shadow-md transition-all duration-300 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#DFF5E8] text-[#0E7A43] flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <div className="text-center sm:text-start">
                    <span className="text-xs sm:text-sm font-bold text-[#111827] leading-tight block">
                      {card.text}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-medium mt-0.5 block">
                      {lang === 'ar' ? 'معتمد ومضمون' : lang === 'fr' ? 'Certifié et Garanti' : 'Certified & Guaranteed'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GANODERMA EDUCATION SECTION ================= */}
      <section id="ganoderma_section" className="py-4 md:py-24 bg-white relative overflow-hidden border-b border-[#0E7A43]/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[10%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#0E7A43]/3 blur-[130px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[45%] aspect-square rounded-full bg-[#D4AF37]/3 blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] sm:text-xs font-black tracking-widest text-[#D4AF37] bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase inline-block"
            >
              {ganoSectionT[lang].badge}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2937] dark:text-white mt-4 tracking-tight"
            >
              {ganoSectionT[lang].title}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base font-bold text-[#0E7A43] mt-3"
            >
              {ganoSectionT[lang].sub}
            </motion.p>
          </div>

          {/* Intro Text Block with Elegant Border Accent & Centered Layout */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#FAFCFA] to-[#FAFAF8] p-8 md:p-10 rounded-[2.5rem] border border-[#0E7A43]/10 shadow-[0_20px_50px_rgba(14,122,67,0.03)] relative text-center"
            >
              <div className="absolute top-6 right-6 opacity-[0.04] text-[#0E7A43]">
                <Leaf className="w-16 h-16" />
              </div>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-300 leading-relaxed font-semibold">
                {ganoSectionT[lang].desc}
              </p>
            </motion.div>
          </div>

          {/* Interactive Image Grid Gallery (6 Images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ganoImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer overflow-hidden rounded-[2.2rem] bg-neutral-100 border border-[#D4AF37]/15 aspect-[4/3] shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxImg({ url: img, caption: ganoSectionT[lang].imgCaptions[idx] })}
              >
                <img
                  src={img}
                  alt={ganoSectionT[lang].imgCaptions[idx]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with subtle zoom/eye icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white text-center">
                  <p className="text-xs sm:text-sm font-bold tracking-wide leading-tight">
                    {ganoSectionT[lang].imgCaptions[idx]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-4 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#D4AF37] bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase">
              {isRtl ? 'ميثاق الجودة والأمان' : 'CHARTE DE TRANSPARENCE'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A34] mt-4 tracking-tight leading-tight">
              {currentT.trust.title}
            </h2>
            <div className="h-1 w-16 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {currentT.trust.sub}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Trust Item 1 */}
            <div className="bg-[#FAF7F2] border border-[#D4AF37]/15 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-5 text-[#1E3A34] shadow-xs">
                <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-black text-[#1E3A34]">{currentT.trust.t1}</h4>
              <div className="w-6 h-0.5 bg-[#D4AF37]/30 my-2.5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{currentT.trust.t1Desc}</p>
            </div>

            {/* Trust Item 2 */}
            <div className="bg-[#FAF7F2] border border-[#D4AF37]/15 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-5 text-[#1E3A34] shadow-xs">
                <ShoppingBag className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-black text-[#1E3A34]">{currentT.trust.t2}</h4>
              <div className="w-6 h-0.5 bg-[#D4AF37]/30 my-2.5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{currentT.trust.t2Desc}</p>
            </div>

            {/* Trust Item 3 */}
            <div className="bg-[#FAF7F2] border border-[#D4AF37]/15 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-5 text-[#1E3A34] shadow-xs">
                <Truck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-black text-[#1E3A34]">{currentT.trust.t3}</h4>
              <div className="w-6 h-0.5 bg-[#D4AF37]/30 my-2.5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{currentT.trust.t3Desc}</p>
            </div>

            {/* Trust Item 4 */}
            <div className="bg-[#FAF7F2] border border-[#D4AF37]/15 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-5 text-[#1E3A34] shadow-xs">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-black text-[#1E3A34]">{currentT.trust.t4}</h4>
              <div className="w-6 h-0.5 bg-[#D4AF37]/30 my-2.5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{currentT.trust.t4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORYTELLING ABOUT SECTION ================= */}
      <section id="about_section" className="py-4 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/10 blur-3xl rounded-full -ml-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-black tracking-widest text-[#D4AF37] bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase">
                {isRtl ? 'الريادة والأصالة العضوية' : 'NOTRE HISTOIRE VRAIE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A34] tracking-tight">
                {currentT.about.title}
              </h2>
              <h4 className="text-xs sm:text-sm font-bold text-[#D4AF37] leading-relaxed">
                {currentT.about.sub}
              </h4>
              <div className="h-0.5 w-12 bg-[#D4AF37] rounded-full"></div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                {currentT.about.p1}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {currentT.about.p2}
              </p>

              {/* Certified icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#FAF6F0] w-full">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#EAF0EC] text-[#1E3A34] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#1E3A34] leading-tight">
                    {isRtl ? 'عضوي ونقي 100%' : '100% Organique'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#EAF0EC] text-[#1E3A34] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#1E3A34] leading-tight">
                    {isRtl ? 'مستخلصات الريشي الثمينة' : 'Extrait de Reishi'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#EAF0EC] text-[#1E3A34] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#1E3A34] leading-tight">
                    {isRtl ? 'مرخص وحلال عالمياً' : 'Certifié Halal & GMP'}
                  </span>
                </div>
              </div>
            </div>

            {/* Story Visual pedestal column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-4 rounded-[2rem] bg-[#FAF7F2] rotate-6 border border-[#D4AF37]/15"></div>
                <div className="absolute inset-4 rounded-[2rem] bg-white border border-[#EADFC9]/50 shadow-xl flex flex-col justify-center items-center p-8 text-center">
                  <span className="text-4xl">👑</span>
                  <h4 className="text-[#1E3A34] font-black text-lg mt-4">{isRtl ? 'لالة سميرة' : 'Lalla Samira'}</h4>
                  <p className="text-[10px] text-[#D4AF37] font-black uppercase tracking-widest mt-1">Founding Director</p>
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
                    {isRtl
                      ? '"صحتي وصحة عائلتي هي أثمن ما أملك، ولذلك أشارككم شغفي الحقيقي وبدائل التغذية الطبيعية التي غيرت نمط حياتنا نحو النشاط والراحة التامة."'
                      : '"Your health is your absolute biggest asset. Crafting certified daily routines for a balanced, energetic life is my deepest calling."'}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FAF7F2] rounded-full border border-emerald-100">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[9px] font-black text-[#1E3A34]">Verified Partner DXN Morocco</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SLIDER SECTION ================= */}
      <section className="py-4 md:py-20 bg-[#FAF7F2] relative overflow-hidden border-t border-b border-[#EADFC9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#D4AF37] bg-white px-4.5 py-1.5 rounded-full uppercase border border-[#EADFC9]/20">
              {isRtl ? 'تقييمات وآراء مؤكدة' : 'TÉMOIGNAGES DE NOTRE COMMUNAUTÉ'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A34] mt-5 tracking-tight leading-tight">
              {currentT.testimonials.title}
            </h2>
            <div className="h-1 w-16 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {currentT.testimonials.sub}
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-8">
            <div className="overflow-hidden bg-white border border-[#EADFC9]/30 rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative">
              <div className="absolute top-6 right-6 text-6xl text-[#D4AF37]/15 font-serif pointer-events-none">“</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <img
                    src={testimonialList[testimonialIndex].avatar}
                    alt={testimonialList[testimonialIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#FAF7F2] shadow-md shrink-0"
                  />
                  
                  {/* Rating Stars */}
                  <div className="flex text-[#D4AF37] justify-center">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed italic max-w-2xl font-medium">
                    "{testimonialList[testimonialIndex].text}"
                  </p>

                  <div className="text-center">
                    <h5 className="font-extrabold text-[#1E3A34] text-base">
                      {testimonialList[testimonialIndex].name}
                    </h5>
                    <p className="text-xs text-slate-400 font-bold mt-1">
                      📍 {testimonialList[testimonialIndex].city}, Morocco
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <button
              onClick={() => setTestimonialIndex(prev => (prev - 1 + 4) % 4)}
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 bg-white hover:bg-[#1E3A34] hover:text-white text-[#1E3A34] border border-slate-200 p-2.5 sm:p-3 rounded-full shadow-lg transition-all cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTestimonialIndex(prev => (prev + 1) % 4)}
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 bg-white hover:bg-[#1E3A34] hover:text-white text-[#1E3A34] border border-slate-200 p-2.5 sm:p-3 rounded-full shadow-lg transition-all cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(4)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  testimonialIndex === idx ? 'w-8 bg-[#1E3A34]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHATSAPP SECTION ================= */}
      <section id="whatsapp_section" className="py-4 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#1E3A34] to-[#142823] border-2 border-[#D4AF37]/35 rounded-[3rem] p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden text-white">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-3xl rounded-full -mr-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700/15 blur-3xl rounded-full -ml-32 pointer-events-none"></div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-emerald-950/45 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/20">
                💬 {isRtl ? 'مستشارك الشخصي المتاح دائماً' : 'ASSISTANCE DIRECTE GRATUITE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {currentT.whatsapp.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-lg mx-auto font-medium">
                {currentT.whatsapp.sub}
              </p>
              
              <div className="pt-4">
                <button
                  onClick={handleGeneralInquiry}
                  className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-sm sm:text-base px-8 py-5 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 animate-pulse pointer-events-auto cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  <span>{currentT.whatsapp.btn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY FOOTER ================= */}
      <footer className="bg-[#142823] text-emerald-100/70 border-t border-[#D4AF37]/20 pt-6 pb-6 md:pt-16 md:pb-12 select-none relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-start" style={{ textAlign: isRtl ? 'right' : 'left' }}>
          
          {/* Brand Presentation column */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={logoImg}
                alt="Samira Naturale Store Logo"
                className="w-12 h-12 object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)] bg-white/10 rounded-xl p-1"
              />
              <div>
                <h4 className="font-extrabold text-white text-base tracking-tight">{isRtl ? 'سميرة ناتورال' : 'Samira Naturale'}</h4>
                <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">{isRtl ? 'منتجات عافية معتمدة' : 'Premium Certified Wellness'}</p>
              </div>
            </div>
            <p className="text-xs text-emerald-100/60 leading-relaxed font-medium">
              {isRtl
                ? "متجر سميرة ناتورال هو بوابتكم المعتمدة في المغرب للحصول على أنقى أغذية دي إكس إن (DXN) ومنتجات العناية الشخصية العضوية مباشرة لباب بيتكم."
                : "Samira Naturale is your verified distributor of official DXN supplements, organic beverages, and botanical hygiene products across Moroccan cities."}
            </p>
            {/* Social media icons */}
            <div className="flex justify-center md:justify-start gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">{isRtl ? 'روابط سريعة' : 'Quick Navigation'}</h4>
            <div className="h-0.5 w-8 bg-[#D4AF37]/50 rounded-full mx-auto md:mx-0"></div>
            <ul className="space-y-2 text-xs font-bold">
              {[
                { id: 'spirulina', label: isRtl ? 'عروض السبيرولينا العضوية' : 'Spirulina Special Offers' },
                { id: 'toothpaste', label: isRtl ? 'معجون الأسنان جانوزي بلس' : 'Ganozhi Toothpaste Offers' },
                { id: 'coffee', label: isRtl ? 'قهوة لينجزي السوداء' : 'Lingzhi Black Coffee' },
                { id: 'shampoo', label: isRtl ? 'شامبو جانوزي الفاخر' : 'Premium Ganozhi Shampoo' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveView(link.id as any);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-white transition-all cursor-pointer bg-transparent border-none p-0 inline-flex"
                  >
                    ✦ {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Collections Column */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">{isRtl ? 'مجموعات التغذية' : 'Wellness Lines'}</h4>
            <div className="h-0.5 w-8 bg-[#D4AF37]/50 rounded-full mx-auto md:mx-0"></div>
            <ul className="space-y-2 text-xs">
              <li>☕ {isRtl ? 'القهوة الصحية والكاكاو العضوي' : 'Alkaline Reishi Coffee Series'}</li>
              <li>🌿 {isRtl ? 'الأغذية الفائقة والمكملات الغذائية' : 'Premium Superfoods Series'}</li>
              <li>🧼 {isRtl ? 'منتجات العناية بالبشرة والشعر والجسم' : 'Botanical Personal Care Series'}</li>
              <li>💆 {isRtl ? 'الزيوت الطبيعية والمساج الطبي المريح' : 'Natural Organic Healing Oils'}</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">{isRtl ? 'اتصل بنا' : 'Support & Address'}</h4>
            <div className="h-0.5 w-8 bg-[#D4AF37]/50 rounded-full mx-auto md:mx-0"></div>
            <ul className="space-y-2.5 text-xs text-emerald-100/65 font-semibold">
              <li>📞 {isRtl ? 'واتساب الموزع المعتمد: ' : 'Official WhatsApp: '} +212 640-386478</li>
              <li>📍 {isRtl ? 'الرباط / الدار البيضاء، المغرب' : 'Rabat / Casablanca, Morocco'}</li>
              <li>🛡️ {isRtl ? 'الدفع نقدًا بالكامل عند الاستلام بالمغرب' : '100% Cash on Delivery across Morocco'}</li>
              <li>📦 {isRtl ? 'شحن سريع مجاني لجميع مناطق المغرب' : 'Complimentary Express Shipping Included'}</li>
            </ul>
          </div>

        </div>

        {/* Legal and Copyright bottom segment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center text-xs text-emerald-100/40 font-medium">
          <p className="leading-relaxed">
            {isRtl
              ? "© 2026 سميرة ناتورال. جميع الحقوق محفوظة لمتجر العافية العضوية دي إكس إن بالمغرب. الموزع المستقل المعتمد رقم: DXN-212640386478."
              : "© 2026 Samira Naturale. All rights reserved. Authorized Independent DXN Global Partner Morocco. Member ID Ref: DXN-212640386478."}
          </p>
          <p className="mt-1 text-[10px] opacity-75">
            Designed to support a active healthy life. Disclaimer: These organic products are premium certified nutrition supplements, not synthetic medicine.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImg(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] hover:scale-110 transition-all p-3 rounded-full bg-white/10 backdrop-blur-md z-50 cursor-pointer border-none outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-4xl w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/25 shadow-2xl max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={lightboxImg.url}
                  alt={lightboxImg.caption}
                  className="max-w-full max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="text-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-xl">
                <p className="text-white text-sm sm:text-base font-black tracking-wide">
                  {lightboxImg.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
