import { useState, useRef, useEffect, MouseEvent, TouchEvent, FormEvent } from 'react';
import { trackViewContent, trackInitiateCheckout, trackPurchase } from '../utils/metaPixel';
import { motion, AnimatePresence } from 'motion/react';
import { allProducts } from '../data/allProducts';
import {
  Star,
  Check,
  ShieldCheck,
  Truck,
  Phone,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Award,
  Activity,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle,
  HelpCircle,
  Clock,
  Heart,
  Leaf,
  Sparkle,
  Zap
} from 'lucide-react';

interface DXNPremiumProductsPageProps {
  lang: 'ar' | 'fr' | 'en' | 'es';
  isRtl: boolean;
  handleGeneralInquiry: () => void;
  productId?: string | null;
  setActiveView: (view: any) => void;
}

interface ProductDetails {
  id: string;
  name: { ar: string; en: string; fr: string };
  subtitle: { ar: string; en: string; fr: string };
  desc: { ar: string; en: string; fr: string };
  longDesc: { ar: string; en: string; fr: string };
  usage: { ar: string; en: string; fr: string };
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  hasVariants: boolean;
  variants?: {
    id: string;
    name: { ar: string; en: string; fr: string };
    price: number;
    originalPrice: number;
    primaryImage: string;
    gallery: string[];
  }[];
  primaryImage: string;
  gallery: string[];
}

export default function DXNPremiumProductsPage({
  lang: inputLang,
  isRtl,
  handleGeneralInquiry,
  productId,
  setActiveView
}: DXNPremiumProductsPageProps) {
  const lang = (inputLang === 'es' ? 'en' : inputLang) as 'en' | 'fr' | 'ar';
  // 1. Data definition for the 8 premium products (6 requested + 2 backward-compatible)
  const products: ProductDetails[] = [
    {
      id: 'family_pack',
      name: {
        ar: "باقة العائلة السعيدة المتكاملة",
        en: "DXN Family Wellness Pack",
        fr: "Pack Bien-être Famille DXN"
      },
      subtitle: {
        ar: "الغذاء الخلوي المتكامل ونشاط العائلة والتركيز",
        en: "Complete Synergy for Daily Energy & Vitality",
        fr: "La Cure Synergique Fondamentale pour Toute la Famille"
      },
      desc: {
        ar: "باقة النخبة المتكاملة التي تم تنسيقها بعناية فائقة لتغذية وحماية أطفالك وعائلتك. تجمع بين الفطور الخارق، وغذاء العقل والتركيز، والنشاط اليومي الصافي.",
        en: "Expertly curated synergistic bundle designed to elevate family health. Combines the superb memory support of Cocozhi, the rich alkaline nutrition of Spirulina Cereal, and the active cellular energy of Reishi-infused premium creamy Lingzhi Coffee 3 in 1.",
        fr: "Une synergie unique de 3 superaliments DXN pour toute la famille. Associe la nutrition cognitive du Cocozhi, le petit-déjeuner alcalin des céréales de Spiruline et le Café crémeux Lingzhi 3 en 1 DXN."
      },
      longDesc: {
        ar: "تعتبر باقة العائلة الحل المثالي والذكي لكل أم تبحث عن غذاء طبيعي 100% يضمن نمواً سليماً وتركيزاً دراسياً مرتفعاً لأطفالها مع حماية ومناعة فائقة لجميع أفراد الأسرة. بفضل تركيبتها الغنية بالفطر الريشي، ميسليوم الجانوديرما، والسبيرولينا المغذية، فإنها تعيد توازن المعادن، ترفع مستويات الهيموجلوبين في الدم، تمنح النشاط الصافي والرشاقة للوالدين، وتوفر بديلاً صحياً آمناً وخالياً من الكيميائيات والسكريات الضارة.",
        en: "The DXN Family Wellness Pack is the ultimate dual solution for busy parents and growing children. Cocozhi provides rich cocoa nutrients infused with active Reishi mycelium (GL) to support optimal neural development and high mental alertness. Spirulina Cereal acts as a delicious, highly alkaline breakfast superfood to optimize digestion, and Lingzhi Coffee 3 in 1 supplies parents with premium creamy clean stamina and antioxidant protection.",
        fr: "Ce pack impérial est l'alliance parfaite pour nourrir, protéger et dynamiser l'organisme de chacun. Les céréales de Spiruline offrent un apport d'une richesse exceptionnelle dès le matin. Le Cocozhi chocolaté est adoré par les enfants et soutient leur concentration intellectuelle. Le Café crémeux Lingzhi 3 en 1 DXN apporte aux parents une vitalité constante et aide le corps à éliminer les toxines naturellement, sans aucune acidité digestive."
      },
      usage: {
        ar: "سيريال السبيرولينا كفطور صحي مغذٍ في الصباح. الكوكوزي للأطفال والطلاب ككوب دافئ ينشط الذاكرة ويرفع التركيز. وقهوة لينجزي 3 في 1 كشريك يومي يمنحك الطاقة والتركيز ويخلص الجسم من السموم.",
        en: "Enjoy Spirulina Cereal as a healthy alkaline breakfast. Savor Cocozhi warm or cold during study hours for high concentration. Drink Lingzhi Coffee 3 in 1 daily for clean, creamy cellular energy and fat oxidation.",
        fr: "Savourer les céréales de Spiruline au petit-déjeuner. Préparer un délicieux Cocozhi pour le goûter des enfants. Déguster le Café crémeux Lingzhi 3 en 1 DXN tout au long de la journée pour une énergie pure et une détox active."
      },
      price: 1261,
      originalPrice: 1420,
      rating: 5.0,
      reviewsCount: 184,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/ns51ng3f/image.png",
      gallery: [
        "https://i.ibb.co/ns51ng3f/image.png",
        "https://i.ibb.co/0pJcbcjS/image.png",
        "https://i.ibb.co/sJ3zZdX0/image.png",
        "https://i.ibb.co/6cYqDvwB/image.png"
      ]
    },
    {
      id: 'cocozhi',
      name: {
        ar: "كاكاو كوكوزي الصحي",
        en: "DXN Cocozhi Cocoa",
        fr: "DXN Cocozhi Chocolat"
      },
      subtitle: {
        ar: "مشروب الشوكولاتة الساخنة الفاخرة بالريشي",
        en: "Premium Reishi-Fortified Hot Chocolate",
        fr: "Cacao Royal au Mycélium de Reishi"
      },
      desc: {
        ar: "مشروب شوكولاتة صحي ولذيذ للغاية، مُعد من أفخر أنواع الكاكاو الطبيعي المدعم بخلاصة فطر الجانوديرما (جنين الريشي) الغني بالمعادن والمغذيات للأطفال والبالغين.",
        en: "A premium luxury organic cocoa beverage fortified with active Ganoderma mycelium extract. Delightful, creamy chocolate taste packed with essential micro-nutrients.",
        fr: "Une boisson chocolatée haut de gamme formulée avec le meilleur cacao hollandais et enrichie en extrait de mycélium de Ganoderma. Onctueuse, riche et nutritive."
      },
      longDesc: {
        ar: "يعد كوكوزي المشروب المفضل للأطفال والطلاب والرياضيين. يغذي خلايا الدماغ والذاكرة بفضل ميسيليوم الريشي النشط، يفتح الشهية بشكل صحي، ويقوي العظام والأسنان وخلايا المناعة بلطف، ويوفر طاقة نظيفة خالية من الكافيين تماماً لتركيز يدوم طوال اليوم.",
        en: "DXN Cocozhi offers the perfect dual synergy of pure cocoa deliciousness and high-grade Ganoderma mycelium (GL) nutrition. Unlike standard sugary cocoas, Cocozhi helps fuel children's brain synapses, supports physical growth, and provides sustained calm mental alertness without any caffeine jitters.",
        fr: "Parfait pour les enfants et toute la famille. DXN Cocozhi stimule la concentration intellectuelle, fortifie la structure osseuse, facilite un transit intestinal sain et soutient un métabolisme énergétique sain au quotidien, tout en offrant la douceur réconfortante d'un chocolat chaud de grand cru."
      },
      usage: {
        ar: "أفرغ محتوى الكيس في كوب من الماء الدافئ أو الحليب الساخن، وحركه جيداً واستمتع بمذاقه الرائع صباحاً أو مساءً.",
        en: "Pour one sachet into a cup of warm water or hot milk, stir well, and enjoy. Perfect as a healthy morning beverage or comforting evening treat.",
        fr: "Verser un sachet dans une tasse d'eau chaude ou de lait chaud, bien mélanger et déguster au petit-déjeuner ou au goûter."
      },
      price: 387,
      originalPrice: 480,
      rating: 4.9,
      reviewsCount: 112,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/0pJcbcjS/image.png",
      gallery: [
        "https://i.ibb.co/0pJcbcjS/image.png",
        "https://i.ibb.co/qMkCJZn9/image.png",
        "https://i.ibb.co/JWfzWpF8/image.png",
        "https://i.ibb.co/Kcsqvv7D/image.png"
      ]
    },
    {
      id: 'ganocelium',
      name: {
        ar: "فطر الجانوسيليوم (GL)",
        en: "DXN Ganocelium (GL)",
        fr: "Ganocelium DXN (GL)"
      },
      subtitle: {
        ar: "مستخلص ميسيليوم الريشي لتجديد الخلايا ودعم الدماغ",
        en: "Premium Ganoderma Mycelium for Brain & Cellular Purity",
        fr: "Mycélium de Reishi Actif pour le Système Nerveux"
      },
      desc: {
        ar: "مستخلص فطر الجانوسيليوم العضوي النقي (جنين الريشي). يركز على تزويد الخلايا بالأكسجين الفائق، تقوية الذاكرة والروابط العصبية، ومساعدة الجسم على التجدد والترميم الذاتي.",
        en: "Premium organic Ganoderma Lucidum mycelium (GL) extract, harvested from 18-day old Reishi. Drastically improves systemic oxygenation, nourishes brain neurons, and accelerates physical tissue repair.",
        fr: "Extrait de mycélium de Ganoderma Lucidum biologique cultivé à 18 jours. Conçu spécifiquement pour maximiser l'oxygénation des cellules, optimiser la clarté mentale et réparer les tissus en profondeur."
      },
      longDesc: {
        ar: "فطر الجانوسيليوم (GL) يتميز باحتوائه على تركيز عالٍ جداً من الجرمانيوم العضوي والبوليسيكاريدات مقارنة بالفطر الناضج (RG). يعد الغذاء المثالي لتقوية وتطهير الجهاز العصبي، مكافحة التعب الفكري، موازنة النوم، وترميم الخلايا التالفة لرفع كفاءة الأعضاء الحيوية.",
        en: "Ganocelium is world-renowned for its exceptionally high concentration of Organic Germanium (four times higher than adult Reishi) and soluble polysaccharides. This makes GL the ultimate brain food and cellular repair specialist, helping to naturally oxygenate blood vessels, stabilize sleep patterns, and soothe overall nervous exhaustion.",
        fr: "Le Ganocelium est exceptionnellement riche en Germanium Organique et en polysaccharides hydrosolubles. Cet élixir agit comme un puissant revitalisant cérébral et un restaurateur tissulaire. Il favorise la circulation de l'oxygène, régule le cycle du sommeil, renforce la régénération nerveuse et apporte un bouclier anti-âge cellulaire."
      },
      usage: {
        ar: "تناول كبسولتين يومياً مع كوب من الماء الدافئ قبل وجبة الفطور بنصف ساعة.",
        en: "Take 2 capsules daily with a glass of warm water 30 minutes before breakfast.",
        fr: "Prendre 2 capsules par jour avec un grand verre d'eau tiède le matin, de préférence à jeun."
      },
      price: 706,
      originalPrice: 850,
      rating: 4.8,
      reviewsCount: 95,
      hasVariants: true,
      variants: [
        {
          id: 'gl_90',
          name: {
            ar: "جانوسيليوم GL 90 كبسولة",
            en: "Ganocelium GL 90 Capsules",
            fr: "Ganocelium GL 90 Capsules"
          },
          price: 706,
          originalPrice: 850,
          primaryImage: "https://i.ibb.co/mFY2Rf8J/image.png",
          gallery: [
            "https://i.ibb.co/mFY2Rf8J/image.png",
            "https://i.ibb.co/4RPNqxnq/image.png",
            "https://i.ibb.co/R4hD5P6T/image.png",
            "https://i.ibb.co/CK4yVb6q/image.png",
            "https://i.ibb.co/ZbvKwy6/image.png"
          ]
        },
        {
          id: 'gl_360',
          name: {
            ar: "جانوسيليوم GL 360 كبسولة",
            en: "Ganocelium GL 360 Capsules",
            fr: "Ganocelium GL 360 Capsules"
          },
          price: 2346,
          originalPrice: 2800,
          primaryImage: "https://i.ibb.co/mFY2Rf8J/image.png",
          gallery: [
            "https://i.ibb.co/mFY2Rf8J/image.png",
            "https://i.ibb.co/4RPNqxnq/image.png",
            "https://i.ibb.co/R4hD5P6T/image.png",
            "https://i.ibb.co/CK4yVb6q/image.png",
            "https://i.ibb.co/ZbvKwy6/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/mFY2Rf8J/image.png",
      gallery: [
        "https://i.ibb.co/mFY2Rf8J/image.png",
        "https://i.ibb.co/4RPNqxnq/image.png",
        "https://i.ibb.co/R4hD5P6T/image.png",
        "https://i.ibb.co/CK4yVb6q/image.png",
        "https://i.ibb.co/ZbvKwy6/image.png"
      ]
    },
    {
      id: 'cordyceps',
      name: {
        ar: "فطر الكورديسبس العضوي",
        en: "DXN Cordyceps",
        fr: "Cordyceps DXN de Prestige"
      },
      subtitle: {
        ar: "إكسير الطاقة والتحمل الخارق للأباطرة",
        en: "The Emperor's Elixir of Vitality & Physical Stamina",
        fr: "L'Empereur de l'Énergie et de l'Oxygénation Cellulaire"
      },
      desc: {
        ar: "كبسولات فطر الكورديسبس النقي 100% لتعزيز وظائف الرئتين، رفع مستويات الأكسجين في الدم، ومضاعفة النشاط البدني والقدرة على التحمل اليومي دون تعب.",
        en: "100% Pure Organic Cordyceps Sinensis capsules. Prized adaptogenic mushroom designed to optimize oxygen utilization, expand lung capacity, and drastically elevate athletic stamina.",
        fr: "Capsules hautement concentrées en Cordyceps Sinensis biologique. Un trésor adaptogène rare qui booste l'ATP cellulaire, l'endurance et soutient les fonctions rénales et respiratoires."
      },
      longDesc: {
        ar: "فطر الكورديسبس سينينسيس هو أحد أندر الفطور الطبية وأكثرها قيمة في الطب الآسيوي التقليدي. صُمم هذا المكمل الفاخر خصيصاً للرياضيين والذين يبحثون عن مستويات طاقة مستدامة، حيث يعمل على تنشيط الدورة الدموية وتوفير طاقة ATP عضوية مباشرة للخلايا.",
        en: "Cordyceps Sinensis is famously recognized as a premier natural booster of vitality. Used for centuries by Eastern royalty, it optimizes cellular energy production, increases pure VO2 max, relieves respiratory congestion, and rejuvenates overall body performance under heavy fatigue.",
        fr: "Le Cordyceps Sinensis est l'un des joyaux les plus précieux de la phytothérapie mondiale. Il stimule l'immunité, purifie les voies respiratoires, améliore la circulation sanguine périphérique et permet une récupération physique fulgurante après un effort intense."
      },
      usage: {
        ar: "تناول كبسولتين يومياً مع كوب من الماء الدافئ قبل الوجبات بـ 30 دقيقة.",
        en: "Take 2 capsules daily with warm water 30 minutes before meals.",
        fr: "Prendre 2 capsules par jour avec un verre d'eau tiède 30 minutes avant le repas."
      },
      price: 869,
      originalPrice: 1050,
      rating: 4.9,
      reviewsCount: 164,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/WvmsYWBV/image.png",
      gallery: [
        "https://i.ibb.co/WvmsYWBV/image.png",
        "https://i.ibb.co/tMGLmL7w/image.png",
        "https://i.ibb.co/PshnjLNw/image.png",
        "https://i.ibb.co/zhHtpfhm/image.png",
        "https://i.ibb.co/PsXZKXTv/image.png",
        "https://i.ibb.co/9mr18vVk/image.png"
      ]
    },
    {
      id: 'cordypine',
      name: {
        ar: "مشروب الكورديبين الإنزيمي",
        en: "DXN Cordypine",
        fr: "Cordypine DXN Élixir"
      },
      subtitle: {
        ar: "مزيج الأناناس المخمر مع فطر الكورديسبس للمفاصل والهضم",
        en: "Fermented Pineapple Enzymes Infused with Cordyceps",
        fr: "Élixir d'Ananas Fermenté et Cordyceps Royal"
      },
      desc: {
        ar: "مشروب صحي إنزيمي مذهل يجمع بين فوائد إنزيمات الأناناس الحية فائقة القوة وفطر الكورديسبس المجدد للطاقة. ينشط الهضم، يسكن التهابات المفاصل، ويزيد حيوية الجسم.",
        en: "A master luxury blend of high-grade fermented pineapple enzymes and premium Cordyceps mushroom. Promotes supreme digestion, neutralizes chronic body inflammation, and provides clean energy.",
        fr: "Un élixir prestigieux associant les enzymes actives de l'ananas fermenté au Cordyceps. Facilite une digestion royale, décongestionne les intestins et soulage l'inflammation articulaire."
      },
      longDesc: {
        ar: "الكورديبين دي إكس إن هو ثورة في عالم الصحة الطبيعية، حيث تعمل إنزيمات البروميلين المستخلصة من الأناناس المخمر على موازنة الأمعاء ودعم امتصاص الكورديسبس بشكل مضاعف. يوفر هذا المزيج حماية خارقة للمفاصل، يسكن الآلام العضلية، وينشط عمليات الأيض وإزالة السموم من الجسم.",
        en: "DXN Cordypine represents an elite fusion of biological fermentation. The naturally occurring bromelain enzymes in pineapple act as organic catalyzers that boost the bio-availability of Cordyceps active ingredients. This formulation excels at healing gastrointestinal disorders, repairing stiff joints, and restoring overall tissue flexibility.",
        fr: "La Cordypine DXN est une formule liquide d'élite. Les enzymes naturelles de bromélaïne facilitent l'absorption des polysaccharides du Cordyceps par la barrière intestinale. Recommandé pour réguler l'équilibre acide-base, accélérer le métabolisme digestif, détoxifier le foie et calmer les raideurs articulaires et tendineuses."
      },
      usage: {
        ar: "امزج 20 مل إلى 30 مل من الكورديبين في كوب من الماء الدافئ واشربه قبل الوجبات بـ 20 دقيقة، أو بعد وجبة دسمة لتسريع الهضم.",
        en: "Mix 20ml to 30ml of Cordypine in a glass of warm water and drink 20 minutes before meals or after heavy meals to accelerate digestion.",
        fr: "Mélanger 20ml à 30ml de Cordypine dans un verre d'eau tiède. À consommer 20 minutes avant le repas ou après un repas copieux."
      },
      price: 340,
      originalPrice: 410,
      rating: 4.9,
      reviewsCount: 78,
      hasVariants: true,
      variants: [
        {
          id: '285ml',
          name: {
            ar: "مشروب الكورديبين 285 مل",
            en: "Cordypine 285ml",
            fr: "Cordypine 285ml"
          },
          price: 340,
          originalPrice: 410,
          primaryImage: "https://i.ibb.co/9m0gRd5Y/image.png",
          gallery: [
            "https://i.ibb.co/9m0gRd5Y/image.png",
            "https://i.ibb.co/7dWtQ17r/cordypine.jpg",
            "https://i.ibb.co/6GzvNLJ/image.png",
            "https://i.ibb.co/F4fQg50p/image.png",
            "https://i.ibb.co/jvBc6HvT/image.png",
            "https://i.ibb.co/Xr2SsVtX/image.png",
            "https://i.ibb.co/qFdTvZJx/image.png",
            "https://i.ibb.co/q3SWQgns/image.png"
          ]
        },
        {
          id: '700ml',
          name: {
            ar: "مشروب الكورديبين 700 مل",
            en: "Cordypine 700ml",
            fr: "Cordypine 700ml"
          },
          price: 630,
          originalPrice: 750,
          primaryImage: "https://i.ibb.co/7dWtQ17r/cordypine.jpg",
          gallery: [
            "https://i.ibb.co/9m0gRd5Y/image.png",
            "https://i.ibb.co/7dWtQ17r/cordypine.jpg",
            "https://i.ibb.co/6GzvNLJ/image.png",
            "https://i.ibb.co/F4fQg50p/image.png",
            "https://i.ibb.co/jvBc6HvT/image.png",
            "https://i.ibb.co/Xr2SsVtX/image.png",
            "https://i.ibb.co/qFdTvZJx/image.png",
            "https://i.ibb.co/q3SWQgns/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/9m0gRd5Y/image.png",
      gallery: [
        "https://i.ibb.co/9m0gRd5Y/image.png",
        "https://i.ibb.co/7dWtQ17r/cordypine.jpg",
        "https://i.ibb.co/6GzvNLJ/image.png",
        "https://i.ibb.co/F4fQg50p/image.png",
        "https://i.ibb.co/jvBc6HvT/image.png",
        "https://i.ibb.co/Xr2SsVtX/image.png",
        "https://i.ibb.co/qFdTvZJx/image.png",
        "https://i.ibb.co/q3SWQgns/image.png"
      ]
    },
    {
      id: 'roselle',
      name: {
        ar: "عصير الروزيل (الكركديه)",
        en: "DXN Roselle Juice",
        fr: "Jus de Roselle DXN"
      },
      subtitle: {
        ar: "إكسير الفيتامينات ومضادات الأكسدة لنضارة وتوازن الجسم",
        en: "The Vibrant Organic Hibiscus Elixir",
        fr: "L'Élixir Naturel d'Hibiscus et de Vitamine C"
      },
      desc: {
        ar: "عصير روزيل طبيعي محضّر من كؤوس زهور الكركديه العضوية الغنية بالمعادن وفيتامين ج ومضادات الأكسدة لترطيب مثالي، موازنة ضغط الدم، وتغذية البشرة.",
        en: "A premium organic drink prepared from pure calyces of Hibiscus Sabdariffa. Rich in natural Vitamin C, bioflavonoids, and organic acids to cleanse and rejuvenate the body.",
        fr: "Boisson précieuse de bien-être préparée à partir des calices d'Hibiscus Sabdariffa. Riche en vitamine C naturelle et en flavonoïdes pour purifier l'organisme et embellir le teint."
      },
      longDesc: {
        ar: "عصير الروزيل دي إكس إن هو سر من أسرار الحيوية والجمال الطبيعي. كؤوس زهور الكركديه يتم قطفها بعناية لتقدم شراباً صحياً غنياً بالفلافونويدات والكلوروفيل الذي يدعم توسع الشرايين، يضبط ضغط الدم الطبيعي، يعزز طرد السوائل والسموم من الكبد، ويمنح نضارة فائقة للبشرة بفضل تحفيزه الطبيعي للكولاجين.",
        en: "DXN Roselle is compiled from the finest calyces of Hibiscus Sabdariffa to yield a highly alkalizing and detoxifying wellness drink. Rich in natural anthocyanins (powerful anti-aging pigments), it actively strengthens blood vessels, balances blood pressure, supports healthy kidney function, and boosts natural skin glow.",
        fr: "La Roselle de DXN est obtenue à partir de calices d'Hibiscus d'une qualité exceptionnelle. Source fantastique de vitamine C et d'anthocyanes aux vertus antioxydantes majeures. Ce jus régénère le foie, calme les reins, régule la tension artérielle, favorise l'élimination des toxines et apporte une luminosité inégalée à la peau."
      },
      usage: {
        ar: "خفف ملعقتين كبيرتين (30 مل) من عصير الروزيل في كوب من الماء البارد أو الدافئ، واشربه واستمتع بانتعاشه المذهل.",
        en: "Dilute 2 tablespoons (30ml) of Roselle juice in a glass of cold or warm water. Stir and enjoy its deep, refreshing tart taste.",
        fr: "Mélanger 2 cuillères à soupe (30ml) dans un verre d'eau fraîche ou tiède. À consommer pour une hydratation revitalisante."
      },
      price: 199,
      originalPrice: 250,
      rating: 4.8,
      reviewsCount: 52,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/VWFK3XWt/image.png",
      gallery: [
        "https://i.ibb.co/VWFK3XWt/image.png",
        "https://i.ibb.co/XZ34cRs3/image.png",
        "https://i.ibb.co/VpPVXy0n/image.png",
        "https://i.ibb.co/mVQLw7S2/image.png"
      ]
    },
    {
      id: 'spirulina_cereal',
      name: {
        ar: "سيريال السبيرولينا الصحي",
        en: "DXN Spirulina Cereal",
        fr: "Céréales de Spiruline DXN"
      },
      subtitle: {
        ar: "الفطور الصحي المتكامل الغني بالبروتين والمعادن",
        en: "The Perfect Alkaline Superfood Breakfast",
        fr: "Le Petit-Déjeuner Alcalin Riche en Nutriments"
      },
      desc: {
        ar: "مزيج لذيذ ومقوٍ من السيريال وأفخر أنواع السبيرولينا العضوية ليعطيك فطوراً صحياً سريعاً يمدك بالفيتامينات والمعادن والبروتينات الكاملة لجميع أفراد العائلة.",
        en: "A delicious, highly nutritious blend of premium fiber cereal and certified organic Spirulina. Offers an instant, alkaline, high-protein breakfast that nourishes cells and stabilizes energy.",
        fr: "Un mélange croustillant et digeste de céréales complètes infusées à la pure Spiruline biologique. Idéal pour un apport instantané en acides aminés, vitamines essentielles et fibres bienfaisantes."
      },
      longDesc: {
        ar: "سيريال السبيرولينا من دي إكس إن هو البديل الصحي الأمثل للفطور التقليدي المليء بالسكريات. يوفر توليفة مغذية وسهلة الهضم تمتصها الأمعاء بسرعة، لتمنح الأطفال والكبار طاقة فكرية وبدنية عالية طوال اليوم مع محاربة نقص الحديد وفقر الدم.",
        en: "Say goodbye to sugary, acidic morning cereals. This premium DXN health cereal provides a massive dose of chlorophyll, active plant-based iron, essential amino acids, and vitamin B-complex. Extremely supportive for busy professionals, children's memory, and comprehensive digestion wellness.",
        fr: "Offrez à votre corps un réveil sain et détoxifiant. Ce complexe de céréales à la Spiruline régule le pH de l'estomac, comble instantanément les carences en fer, favorise le développement musculaire et apporte une satiété naturelle et durable sans lourdeur."
      },
      usage: {
        ar: "أفرغ محتوى الكيس في كوب من الماء الدافئ أو الحليب، وحركه جيداً قبل تناوله كوجبة فطور أو عشاء صحية.",
        en: "Pour one sachet into a cup of warm water or milk, stir well, and enjoy as a balanced nourishing meal.",
        fr: "Verser un sachet dans un bol de lait chaud ou d'eau tiède, remuer et déguster pour un boost d'énergie immédiat."
      },
      price: 664,
      originalPrice: 800,
      rating: 4.8,
      reviewsCount: 138,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/sJ3zZdX0/image.png",
      gallery: [
        "https://i.ibb.co/sJ3zZdX0/image.png",
        "https://i.ibb.co/gFMwgCPY/image.png",
        "https://i.ibb.co/gLk7wzKh/image.png",
        "https://i.ibb.co/rRF1zbsr/image.png",
        "https://i.ibb.co/gbYz9LPr/image.png"
      ]
    },
    {
      id: 'morinzhi-juice',
      name: {
        ar: "عصير المورينزي الطبيعي",
        en: "DXN Morinzhi Juice",
        fr: "Jus DXN Morinzhi"
      },
      subtitle: {
        ar: "إكسير ثمرة النوني والكركديه الساحر",
        en: "Nutrient-Rich Fermented Noni Elixir",
        fr: "Élixir Botanique de Noni & Roselle"
      },
      desc: {
        ar: "عصير مورينزي طبيعي ممتاز محضّر من ثمرة النوني الطازجة والمعززة بخلاصة الكركديه الطبيعية الغنية بالأنزيمات ومضادات الأكسدة.",
        en: "An exceptional organic botanical beverage compiled from fresh Morinda citrifolia (Noni) juice and Roselle extract. Fully loaded with natural enzymes and Vitamin C.",
        fr: "Une boisson botanique d'exception formulée à partir de jus de Noni (Morinda citrifolia) frais et enrichie en extrait de Roselle. Riche en enzymes digestives actives."
      },
      longDesc: {
        ar: "يساعد عصير المورينزي على موازنة وظائف وحيوية الجسم، يدعم راحة القولون العصبي، يحسن جودة النوم والراحة النفسية، ويعزز طرد الخلايا الهرمة والسموم.",
        en: "DXN Morinzhi is a premium nutritional elixir that helps balance digestion, reduces chronic body pain and inflammation, relieves stress, and naturally regulates sleep cycles.",
        fr: "Ce jus fermenté rééquilibre le système nerveux, apaise les douleurs d'estomac et articulaires, régule l'humeur et favorise une digestion saine et calme."
      },
      usage: {
        ar: "خفف ملعقتين كبيرتين (30 مل) من عصير المورينزي في كوب من الماء الدافئ، واشربه على معدة فارغة في الصباح.",
        en: "Mix 2 tablespoons (30ml) of Morinzhi juice in a glass of warm water and drink in the morning on an empty stomach.",
        fr: "Diluer 2 cuillères à soupe (30ml) dans de l'eau tiède, à consommer le matin à jeun."
      },
      price: 300,
      originalPrice: 380,
      rating: 4.8,
      reviewsCount: 82,
      hasVariants: true,
      variants: [
        {
          id: 'morinzhi_285',
          name: {
            ar: "عصير المورينزي (285 مل)",
            en: "DXN Morinzhi Juice (285ml)",
            fr: "Jus DXN Morinzhi (285ml)"
          },
          price: 300,
          originalPrice: 380,
          primaryImage: "https://i.ibb.co/rKvjtzNw/image.png",
          gallery: [
            "https://i.ibb.co/rKvjtzNw/image.png",
            "https://i.ibb.co/d4mLn1gy/image.png"
          ]
        },
        {
          id: 'morinzhi_700',
          name: {
            ar: "عصير المورينزي الكبير (700 مل)",
            en: "DXN Morinzhi Juice Large (700ml)",
            fr: "Jus DXN Morinzhi Grand (700ml)"
          },
          price: 589,
          originalPrice: 720,
          primaryImage: "https://i.ibb.co/4Zg6PmHp/image.png",
          gallery: [
            "https://i.ibb.co/4Zg6PmHp/image.png",
            "https://i.ibb.co/qLcbCRkX/image.png",
            "https://i.ibb.co/QFj2rb4M/image.png",
            "https://i.ibb.co/FkyGXBgN/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/rKvjtzNw/image.png",
      gallery: [
        "https://i.ibb.co/rKvjtzNw/image.png",
        "https://i.ibb.co/d4mLn1gy/image.png"
      ]
    },
    {
      id: "spirulina",
      name: {
        ar: "السبيرولينا العضوية الطازجة",
        en: "DXN Premium Spirulina",
        fr: "Spiruline DXN Organique"
      },
      subtitle: {
        ar: "غذاء السوبر فود الأقوى لتعويض الفيتامينات والأنيميا",
        en: "The Ultimate Alkaline Superfood for Cellular Immunity",
        fr: "Le SuperAliment Ultime Équilibrant & Revitalisant"
      },
      desc: {
        ar: "السبيرولينا هي الطحالب الخضراء المزرقة الفائقة، معترف بها عالمياً كأغنى مصدر طبيعي للبروتينات العضوية، الحديد، المعادن النادرة، الكلوروفيل، والفيتامينات لرفع المناعة ومحاربة فقر الدم.",
        en: "Pure certified organic green-blue microalgae. Widely acclaimed as nature's richest whole-food source of organic iron, beta-carotene, complete proteins, B-complex vitamins, and essential minerals.",
        fr: "Microalgue bleue-verte 100% biologique et alcaline. Reconnue comme le superaliment le plus complet de la planète, riche en protéines végétales, fer biodisponible, vitamines B12, et chlorophylle."
      },
      longDesc: {
        ar: "تعد سبيرولينا دي إكس إن الخيار الصحي الأمثل للأمهات الحوامل والمرضعات، والرياضيين، وكبار السن. بفضل بيئة زراعتها المعقمة والنقية تماماً الخالية من أي مبيدات أو ملوثات كيميائية، فإنها تزود خلايا الجسم بالمعادن النادرة والفيتامينات العضوية الأساسية، مما يساعد على محاربة فقر الدم (الأنيميا) بسرعة فائقة، ويقوي العضلات والنشاط البدني، ويرفع مستوى طاقة الجسم اليومي بشكل طبيعي ومستدام دون أي تعب.",
        en: "DXN Spirulina is cultivated in strictly monitored pristine, pesticide-free clean water environments to guarantee 100% biological purity and safety. It acts as a comprehensive mineral and vitamin fuel, promoting robust cellular oxygenation, rapid anemia recovery, enhanced red blood cell production, and sustained physical stamina. Perfect for expectant mothers, elite athletes, and children seeking a certified organic nutrient powerhouse.",
        fr: "Cultivée dans des bassins d'eau pure d'une propreté absolue et sans aucun pesticide, la Spiruline DXN garantit une biodisponibilité maximale de ses nutriments. Elle comble rapidement les carences en fer, régule l'acidité gastrique, renforce le système immunitaire, favorise la production de globules rouges et soutient la récupération musculaire active, la rendant indispensable pour les sportifs, les femmes enceintes, et les personnes en convalescence."
      },
      usage: {
        ar: "تناول 4 إلى 6 حبات يومياً مع كوب من الماء الدافئ قبل الوجبات بـ 30 دقيقة للرشاقة ونشاط الجسم.",
        en: "Take 4 to 6 tablets daily with a glass of warm water 30 minutes before meals for optimal absorption and cellular energy.",
        fr: "Prendre 4 à 6 comprimés par jour avec un grand verre d'eau tiède 30 minutes avant les repas pour une assimilation idéale."
      },
      price: 365,
      originalPrice: 450,
      rating: 5.0,
      reviewsCount: 142,
      hasVariants: true,
      variants: [
        {
          id: "spirulina_120",
          name: {
            ar: "سبيرولينا 120 حبة",
            en: "Spirulina 120 Tablets",
            fr: "Spiruline 120 Comprimés"
          },
          price: 365,
          originalPrice: 450,
          primaryImage: "https://i.ibb.co/1tMCDQsD/image.png",
          gallery: [
            "https://i.ibb.co/1tMCDQsD/image.png",
            "https://i.ibb.co/6RYpGL0r/image.png"
          ]
        },
        {
          id: "spirulina_500",
          name: {
            ar: "سبيرولينا 500 حبة (توفير عائلي)",
            en: "Spirulina 500 Tablets (Family Size)",
            fr: "Spiruline 500 Comprimés (Format Éco)"
          },
          price: 1299,
          originalPrice: 1550,
          primaryImage: "https://i.ibb.co/xST3WmwW/image.png",
          gallery: [
            "https://i.ibb.co/xST3WmwW/image.png",
            "https://i.ibb.co/5W2nnSzN/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/1tMCDQsD/image.png",
      gallery: [
        "https://i.ibb.co/1tMCDQsD/image.png",
        "https://i.ibb.co/6RYpGL0r/image.png",
        "https://i.ibb.co/xST3WmwW/image.png",
        "https://i.ibb.co/5W2nnSzN/image.png"
      ]
    },
    {
      id: "toothpaste",
      name: {
        ar: "معجون أسنان جانوزي العضوي",
        en: "DXN Ganozhi Toothpaste",
        fr: "Dentifrice DXN Ganozhi"
      },
      subtitle: {
        ar: "الابتسامة المشرقة واللثة القوية بالفطر الريشي الخالي من الفلورايد",
        en: "Fluoride-Free Complete Oral Rejuvenation with Active Reishi",
        fr: "Soin Bucco-Dentaire Suprême au Ganoderma Organique"
      },
      desc: {
        ar: "معجون أسنان مبتكر وصحي بالكامل، غني بخلاصة فطر الجانوديرما (الريشي) الطبيعي وهلام عالي الجودة. لا يحتوي على الفلورايد، السكر، أو الألوان الاصطناعية، مما يجعله آمناً وفعالاً لجميع أفراد العائلة.",
        en: "A premium carefully formulated toothpaste enriched with active Ganoderma lucidum extract. Completely free from fluoride, artificial colorings, saccharin, and silica.",
        fr: "Dentifrice de prestige à base de gelée d'algues naturelles et enrichi en extrait de Ganoderma. Sans fluor, sans colorants artificiels, sans saccharine et sans silice."
      },
      longDesc: {
        ar: "يقدم معجون أسنان جانوزي الحماية اليومية المتكاملة للفم والأسنان. يعالج نزيف وتقرحات اللثة بفعالية فائقة، يحارب البلاك والجير، يقضي على البكتيريا المسببة لرائحة الفم الكريهة، ويمنحك نفساً منعشاً ونظيفاً طوال اليوم بفضل نكهة النعناع الطبيعي الممزوجة بالريشي العلاجي والوقائي.",
        en: "DXN Ganozhi Toothpaste provides complete oral biological protection. The active Reishi extract helps repair and soothe bleeding or sensitive gums, prevents cavities, gently lifts dental plaque and tartar, and eliminates harmful bacteria. Infused with natural cooling menthol for long-lasting fresh breath and comprehensive oral hygiene suitable even for toddlers.",
        fr: "Le dentifrice Ganozhi est un véritable soin thérapeutique pour la bouche. Son extrait de Ganoderma actif favorise la cicatrisation des gencives sensibles ou saignantes, combat la plaque dentaire et le tartre de manière douce, prévient les caries et élimine durablement la mauvaise haleine. Sa formule naturelle au menthol frais purifie intensément la cavité buccale."
      },
      usage: {
        ar: "ضع كمية صغيرة من معجون أسنان جانوزي على الفرشاة، ونظف أسنانك بلطف مرتين يومياً على الأقل لمدة 3 دقائق.",
        en: "Apply a small pea-sized amount to your toothbrush and brush your teeth thoroughly at least twice daily for 3 minutes.",
        fr: "Appliquer une noisette sur la brosse à dents et brosser doucement au moins deux fois par jour pendant 3 minutes."
      },
      price: 156,
      originalPrice: 190,
      rating: 4.8,
      reviewsCount: 115,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/zHxTHyjQ/image.png",
      gallery: [
        "https://i.ibb.co/zHxTHyjQ/image.png",
        "https://i.ibb.co/2YY8kMnq/image.png",
        "https://i.ibb.co/pBTWdD0c/image.png"
      ]
    },
    {
      id: "coffee",
      name: {
        ar: "قهوة لينجزي السوداء بالفطر الريشي",
        en: "DXN Lingzhi Black Coffee",
        fr: "Café Lingzhi Noir DXN"
      },
      subtitle: {
        ar: "النشاط الصافي الخالي من الحموضة والحاصل على جوائز عالمية",
        en: "Clean Premium Energy, Zero Acidic Heartburn",
        fr: "Café Gourmet Détoxifiant au Ganoderma Bio"
      },
      desc: {
        ar: "قهوة سوداء فاخرة مخمرة بنسبة كافيين منخفضة جداً (0.06%) ومدعمة بخلاصة فطر الجانوديرما (الريشي) العضوي، خفيفة على المعدة وتمنح نشاطاً فورياً مركزاً.",
        en: "A premium gourmet black coffee formulated from elite Brazilian coffee beans, fortified with 100% organic Ganoderma lucidum. Incredibly smooth and low in caffeine.",
        fr: "Un café noir gourmet d'exception élaboré avec des grains de café arabica brésiliens de premier choix et fortifié au Ganoderma. Contient un taux de caféine extrêmement bas."
      },
      longDesc: {
        ar: "قهوة لينجزي السوداء هي الشريك المثالي للرشاقة والنشاط اليومي المستدام. بفضل تركيبتها الفريدة، فإنها لا تسبب أي حموضة أو حرقان في المعدة، وتساعد بفعالية على حرق الدهون المتراكمة والرشاقة، وتنشط الدورة الدموية وخلايا الدماغ والذاكرة لمنحك طاقة إيجابية صافية دون أي قلق أو تسارع في نبضات القلب.",
        en: "DXN Lingzhi Black Coffee is the ultimate wellness beverage for active professionals and health-conscious individuals. The unique synergy of high-grade Brazilian coffee with Reishi extract creates a delicious, sugar-free, non-acidic brew that improves digestion, accelerates fat oxidation, aids in weight management, and delivers pure cognitive focus without any caffeine jitters.",
        fr: "Le Café Noir Lingzhi est le partenaire idéal pour un métabolisme actif et une digestion légère. Ce mélange unique sans sucre allie la richesse aromatique du café arabica aux vertus adaptogènes du Ganoderma. Il stimule naturellement la vigilance mentale, accélère la combustion des graisses, soutient le foie dans sa détoxification et ne provoque aucune brûlure d'estomac."
      },
      usage: {
        ar: "أفرغ نصف كيس من القهوة السوداء في كوب من الماء الساخن، حركه جيداً واستمتع بنشاط لا مثيل له في الصباح أو بعد الوجبات.",
        en: "Pour half a sachet of Lingzhi Black Coffee into a cup of hot water, stir well, and enjoy. Perfect after meals to aid digestion and fat burning.",
        fr: "Verser un demi-sachet de Café Noir Lingzhi dans une tasse d'eau chaude, mélanger et savourer. Idéal après le repas pour stimuler la digestion."
      },
      price: 310,
      originalPrice: 380,
      rating: 4.9,
      reviewsCount: 194,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/TqhqBdJ0/image.png",
      gallery: [
        "https://i.ibb.co/TqhqBdJ0/image.png",
        "https://i.ibb.co/fYPcsWsn/image.png"
      ]
    },
    {
      id: "coffee3in1",
      name: {
        ar: "قهوة لينجزي 3 في 1 لايت",
        en: "DXN Lingzhi Coffee 3-in-1 Lite",
        fr: "Café Lingzhi 3-en-1 Lite"
      },
      subtitle: {
        ar: "القهوة الكريمية الفاخرة بالريشي خفيفة الحموضة والهضم",
        en: "Creamy Gourmet Harmony with Reishi & Light Non-Dairy Creamer",
        fr: "Café Onctueux Gourmet Équilibrant au Ganoderma"
      },
      desc: {
        ar: "مزيج كريمي ناعم ورائع يجمع بين حبوب القهوة الفاخرة وخلاصة الفطر الريشي ومبيض نباتي لطيف، مصمم خصيصاً لمن يعشق القهوة بالحليب دون أي مشاكل معوية.",
        en: "A smooth, creamy, and premium blend of gourmet coffee beans, non-dairy creamer, and bioactive Reishi extract. Delivers a luxurious coffee-latte flavor.",
        fr: "Une boisson lactée exquise alliant la rondeur d'un café arabica de premier choix, un crémier végétal léger et le Ganoderma biologique protecteur."
      },
      longDesc: {
        ar: "تعتبر قهوة لينجزي 3 في 1 لايت البديل الصحي الفاخر لعشاق القهوة بالحليب أو الكابتشينو. غنية بمضادات الأكسدة والعناصر الحيوية بفضل الفطر الريشي، وهي خفيفة جداً على الأمعاء والمعدة الحساسة، تمنح نشاطاً ونعومة فائقة في المذاق، وتوفر كوباً غنياً بالرغوة الرائعة لبداية يوم مليئة بالطاقة والإيجابية.",
        en: "DXN Lingzhi 3-in-1 Lite is specially formulated to deliver a smooth, velvety coffee-latte experience without the digestive discomfort of heavy dairy or artificial creamers. Packed with organic Reishi antioxidants, it nurtures your digestive tract, boosts brain alertness, and serves as an instant mood lifter. Perfect for anyone seeking a guilt-free, creamy, and nourishing cup of premium gourmet coffee.",
        fr: "Idéal pour les amateurs de cappuccinos et de cafés au lait. Le Café Lingzhi 3-en-1 Lite offre une texture crémeuse et onctueuse incomparable tout en restant très digeste. Enrichi en nutriments et antioxydants du Ganoderma, il aide à alcaliniser l'organisme, améliore le tonus mental et protège l'estomac de toute irritation."
      },
      usage: {
        ar: "أفرغ محتوى كيس واحد من القهوة 3 في 1 في كوب من الماء الساخن، وحركه جيداً لتدليل حواسك.",
        en: "Empty one sachet into a cup of hot water, stir well until a rich foam forms, and enjoy. Perfect as a satisfying afternoon energy boost.",
        fr: "Verser un sachet dans une tasse d'eau chaude, mélanger jusqu'à obtenir une belle mousse crémeuse et savourer."
      },
      price: 310,
      originalPrice: 380,
      rating: 4.9,
      reviewsCount: 106,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/6cYqDvwB/image.png",
      gallery: [
        "https://i.ibb.co/6cYqDvwB/image.png",
        "https://i.ibb.co/dsZZQkfb/image.png"
      ]
    },
    {
      id: "shampoo",
      name: {
        ar: "شامبو جانوزي DXN",
        en: "DXN Ganozhi Shampoo",
        fr: "Shampoing DXN Ganozhi"
      },
      subtitle: {
        ar: "عناية فائقة بالشعر وبصيلات قوية وصحية بالفطر الريشي",
        en: "Premium hair care & follicle strengthening with Reishi",
        fr: "Vitalité capillaire et douceur suprême au Ganoderma"
      },
      desc: {
        ar: "شامبو العناية الفاخرة المعتدل بالحموضة لجميع أنواع الشعر. غني بخلاصة فطر الجانوديرما (الريشي) المغذي وبرو-فيتامين B5 لتقوية بصيلات الشعر، إنقاص التساقط والتخلص من القشرة والحكة تماماً.",
        en: "Premium wellness shampoo enriched with Ganoderma (Reishi) extract and Pro-Vitamin B5. It gently cleanses while preserving natural oils, bringing strength, shine, and complete botanical rejuvenation to your hair and scalp.",
        fr: "Shampoing de bien-être d'exception enrichi à l'extrait pur de Ganoderma (Reishi) et Pro-Vitamine B5. Il lave en douceur tout en respectant l'hydratation naturelle, conférant éclat, force et douceur suprême."
      },
      longDesc: {
        ar: "يقدم شامبو جانوزي حماية طبيعية متكاملة ومستدامة لخصلات وفروة رأسك. ينظف بلطف شديد دون أن يحرم شعرك من الزيوت الطبيعية الأساسية، يعيد الحيوية واللمعان للشعر الباهت والتالف، ويمنع تساقط الشعر بشكل ملحوظ عبر تغذية البصيلات العميقة بخلاصة الريشي، ويمنع نشوء القشرة أو الإحساس بالحكة والالتهابات.",
        en: "DXN Ganozhi Shampoo offers complete biological hair and scalp rejuvenation. Formulated with a neutral pH, it cleanses deeply without stripping protective lipids, infuses the hair cortex with essential moisture from Pro-Vitamin B5, prevents split ends, reduces hair fall significantly, and actively controls dandruff and scalp irritation.",
        fr: "Le shampoing Ganozhi de DXN apporte un soin complet au cuir chevelu. Sa formule au pH neutre et doux élimine l'excès de sébum et les impuretés sans dessécher la fibre capillaire. Fortifié au Ganoderma et à la Pro-Vitamine B5, il revitalise les follicules pileux fatigués, réduit visiblement la chute des cheveux et apaise les démangeaisons ou pellicules."
      },
      usage: {
        ar: "بلل شعرك بالماء، ضع كمية مناسبة من شامبو جانوزي ودلك فروة الرأس بلطف لعدة دقائق ثم اغسله بالماء جيداً.",
        en: "Apply to wet hair, massage gently into scalp for 2-3 minutes to allow Reishi absorption, then rinse thoroughly with water.",
        fr: "Appliquer sur cheveux mouillés, masser doucement le cuir chevelu pendant 2-3 minutes pour faire pénétrer le Reishi, puis rincer abondamment."
      },
      price: 221,
      originalPrice: 270,
      rating: 4.7,
      reviewsCount: 92,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/q3q1fsms/image.png",
      gallery: [
        "https://i.ibb.co/q3q1fsms/image.png",
        "https://i.ibb.co/8gMwRhcd/image.png",
        "https://i.ibb.co/9HV6xxVR/image.png"
      ]
    },
    {
      id: "gano_oil",
      name: {
        ar: "زيت جانو للمساج من DXN",
        en: "DXN Gano Massage Oil",
        fr: "Huile de Massage DXN Gano"
      },
      subtitle: {
        ar: "راحة فورية واسترخاء عميق للعضلات المتعبة بالفطر الريشي",
        en: "Deep muscle relaxation & soothing tension relief with Reishi",
        fr: "Détente musculaire immédiate et massage thérapeutique au Reishi"
      },
      desc: {
        ar: "زيت مساج فاخر ولطيف ومغذي مخصص للعناية الشاملة بالجسم، غني بخلاصة فطر الجانوديرما (الريشي) وزيت بذور النخيل النقي الطبيعي. يساعد على الاسترخاء، تليين وتخفيف تشنجات العضلات المتعبة وتنعيم البشرة الجافة.",
        en: "Premium wellness and body care massage oil enriched with premium quality Ganoderma extract and palm kernel oil. Specially crafted to provide a pleasant and completely relaxing body experience while helping the skin feel smooth, hydrated, and fully refreshed.",
        fr: "Huile de massage haut de gamme et de bien-être corporel enrichie en extrait de Ganoderma d'origine biologique et huile de germe de palmier. Conçue pour offrir une expérience de massage agréable et relaxante, tout en hydratant intensément la peau."
      },
      longDesc: {
        ar: "يعد زيت جانو كنزاً حقيقياً للراحة والاسترخاء العضلي. تركيبته العضوية الطبيعية تنساب بنعومة فائقة لتمتصها الخلايا والأنسجة بسرعة تامة، مما يسهم في تنشيط الدورة الدموية الموضعية، التخلص من تعب وإرهاق اليوم، تليين المفاصل المتصلبة، ومنح البشرة ترطيباً مخملياً عميقاً وحماية استثنائية من الجفاف والتقشر.",
        en: "DXN Gano Massage Oil is a therapeutic wellness essential. The bioactive compounds of Reishi combined with premium palm kernel oil penetrate deeply into muscle tissue to melt away chronic stress, improve localized blood circulation, alleviate joint stiffening, and shield your skin with powerful organic antioxidants and protective fatty acids.",
        fr: "L'Huile de Massage Gano de DXN est réputée pour sa pureté et son efficacité relaxante. Grâce à la synergie du Reishi et de l'huile de palmiste, elle pénètre rapidement pour détendre les tensions musculaires accumulées, soulager les articulations endolories, nourrir intensément la peau et laisser un fini soyeux protecteur."
      },
      usage: {
        ar: "ضع كمية مناسبة من زيت جانو على راحة يدك، ثم دلك المنطقة المستهدفة بلطف بحركات دائرية حتى يمتصه الجلد بالكامل.",
        en: "Apply a generous amount to your palms, massage gently onto the desired body areas in slow circular motions until fully absorbed.",
        fr: "Appliquer sur les zones ciblées et masser doucement avec des mouvements circulaires lents jusqu'à absorption complète."
      },
      price: 210,
      originalPrice: 260,
      rating: 4.9,
      reviewsCount: 88,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/RTS5Pkc3/image.png",
      gallery: [
        "https://i.ibb.co/RTS5Pkc3/image.png",
        "https://i.ibb.co/DH0XFf7g/image.png",
        "https://i.ibb.co/whXBr2Md/image.png"
      ]
    },
    {
      id: "limonzhi",
      name: {
        ar: "مشروب ليمونزي من DXN",
        en: "DXN Limonzhi",
        fr: "DXN Limonzhi"
      },
      subtitle: {
        ar: "انتعاش الليمون الطبيعي وحيوية فطر الريشي ومضادات الأكسدة",
        en: "Zesty Lemon Refreshment & Immunizing Reishi Elixir",
        fr: "Élixir Naturel Citron, Thé Noir & Ganoderma Réparateur"
      },
      desc: {
        ar: "مشروب طبيعي منعش وفاخر يمزج بلطف بين حامض الليمون الطبيعي الغني بالترطيب والشاي اللذيذ ومستخلص فطر الجانوديرما (الريشي) العضوي. بديل صحي وممتاز للعصائر الكيماوية والغازية الضارة.",
        en: "A luxury refreshing lemon-flavored beverage crafted with organic whole lemon extract, high-grade tea, and fortified with organic Ganoderma (Reishi) extract. Provides clean delicious hydration, persistent focus, and physical refreshment.",
        fr: "Une boisson rafraîchissante haut de gamme élaborée avec de véritables extraits de citrons mûrs, de thé noir de première sélection et enrichie au Ganoderma (Reishi) biologique. Offre une réhydratation naturelle exquise et revitalisante."
      },
      longDesc: {
        ar: "يعتبر ليمونزي المشروب الصيفي المنعش والصحي الأول للنشاط والحيوية. بفضل مزجه الرائع بين فيتامين سي الطبيعي ومضادات الأكسدة القوية للفطر الريشي، فإنه يرفع قلوية ومناعة الجسم، ينشط الكبد، يحسن الهضم، ويمنحك انتعاشاً ذهنياً وبدنياً يدوم لساعات طويلة، ليكون خيارك المعتمد بدلاً من السكريات والمنكهات الصناعية الضارة.",
        en: "DXN Limonzhi is a masterfully formulated functional beverage designed to satisfy your thirst while fortifying your health. It combines the cleansing alkaline action of real lemon juice, rich in Vitamin C, with the immunizing, adaptive strength of organic Reishi extract and handpicked black tea leaves. Perfect as a restorative daily drink for children, sports players, and busy professionals.",
        fr: "Le Limonzhi de DXN est la boisson saine et rafraîchissante idéale pour se ressourcer. Alliant l'action alcalinisante du citron naturel, source de Vitamine C, aux vertus réparatrices et antioxydantes du Ganoderma, il stimule l'élimination des toxines, régule la digestion, rafraîchit le système immunitaire et apporte une clarté mentale durable."
      },
      usage: {
        ar: "قم بإفراغ محتوى كيس واحد من الليمونزي في كوب من الماء البارد أو الدافئ، حركه جيداً واستمتع بالانتعاش الفوري في أي وقت من اليوم.",
        en: "Empty one sachet of Limonzhi into a cup of cold or warm water, stir well and experience instant premium hydration anytime.",
        fr: "Verser un sachet de Limonzhi dans une tasse d'eau fraîche ou tiède, mélanger bien et savourer un plaisir fruité immédiat."
      },
      price: 219,
      originalPrice: 270,
      rating: 4.8,
      reviewsCount: 74,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/pj1nyzM6/image.png",
      gallery: [
        "https://i.ibb.co/pj1nyzM6/image.png",
        "https://i.ibb.co/3y3fr6n7/image.png",
        "https://i.ibb.co/bZpcFkx/lemonzhi-sachet.jpg"
      ]
    },
    {
      id: "soap",
      name: {
        ar: "صابون Ganozhi من DXN",
        en: "DXN Ganozhi Soap",
        fr: "Savon DXN Ganozhi"
      },
      subtitle: {
        ar: "بشرة نضرة وخالية من العيوب برغوة الجانوديرما وفيتامين هـ",
        en: "Flawless & purified skin with Reishi & Vitamin E",
        fr: "Purification cutanée suprême et douceur éclatante au Reishi"
      },
      desc: {
        ar: "صابون فاخر وعالي الجودة طبيعي وصحي بالكامل، تم تصنيعه بتركيبة غنية تحتوي على مستخلص فطر الجانوديرما (الريشي) وفيتامين هـ الطبيعي. صُمم خصيصاً لتنظيف وتطهير الوجه والجسم برفق.",
        en: "A premium luxury skincare and body purification bar carefully crafted with high-grade organic Ganoderma (Reishi) extract and vitamins. Provides rich, comforting hydration, deep cleansing without drying, and absolute daily freshness.",
        fr: "Un savon de prestige formulé à base d'extrait de Ganoderma (Reishi) adaptogène d'une pureté absolue. Il nettoie en profondeur le visage et le corps, hydrate délicatement sans dessécher et donne une fraîcheur durable."
      },
      longDesc: {
        ar: "يقدم صابون جانوزي تجربة سبا فاخرة في روتينك اليومي. بفضل خلاصة فطر الجانوديرما وفيتامين هـ الطبيعي المضاد للأكسدة، فإنه ينظف المسامات بعمق شديد، ينظم الإفرازات الدهنية، يحارب حب الشباب والبثور وتصبغات الجلد، ويترك بشرتك مشدودة، غاية في النعومة والنضارة دون أي جفاف أو تهيج.",
        en: "DXN Ganozhi Soap is a premium botanical cleansing bar. Rich in adaptive Reishi active components and Vitamin E, it gently penetrates skin pores to sweep away dead cells, balance oil secretions, clear blackheads and acne, and accelerate natural cellular renewal, leaving your complexion soft, firm, glowing, and completely hydrated.",
        fr: "Le Savon Ganozhi de DXN purifie et adoucit la peau de manière spectaculaire. Enrichi en agents réparateurs de Ganoderma et en Vitamine E antioxydante, il resserre les pores, régule le sébum, élimine en douceur les impuretés et imperfections cutanées, et préserve l'élasticité naturelle de l'épiderme pour un visage et un corps éclatants."
      },
      usage: {
        ar: "بلل الوجه أو الجسم بالماء، افرغ الصابون بلطف بين يديك للحصول على رغوة غنية، ثم وزعها على الجلد ودلك برفق قبل شطفه بالماء.",
        en: "Lather the soap with water, apply the rich creamy foam to your face or body, massage gently, then rinse thoroughly.",
        fr: "Faire mousser le savon avec de l'eau, appliquer la mousse onctueuse sur le visage ou le corps, masser délicatement puis rincer."
      },
      price: 73,
      originalPrice: 90,
      rating: 4.8,
      reviewsCount: 121,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/TCQmWf0/image.png",
      gallery: [
        "https://i.ibb.co/TCQmWf0/image.png",
        "https://i.ibb.co/QvwnJrK9/image.png",
        "https://i.ibb.co/wFcy8xDk/image.png"
      ]
    },
    {
      id: "reishilium",
      name: {
        ar: "مسحوق ريشيليوم الفاخر من DXN",
        en: "DXN Reishilium Powder",
        fr: "DXN Reishilium Powder"
      },
      subtitle: {
        ar: "مزيج خلايا فطر الريشي والجينسنغ للطاقة العالية والمناعة العميقة",
        en: "Pure Reishi Mycelium Synergy for Energy & Immunity",
        fr: "Poudre de Mycélium de Reishi Actif pour Défenses Fortes"
      },
      desc: {
        ar: "تركيبة مميزة تجمع بين مكونات مختارة بعناية لتمنحك تجربة غذائية فاخرة تناسب نمط الحياة العصري والمهتم بالعافية. قوام بودرة سهل الاستخدام والذوبان يسهل دمجه في روتينك الصحي.",
        en: "A premium carefully formulated nutritional product designed for individuals seeking premium-quality wellness products. Its convenient powder format makes it easy to incorporate into a daily routine while enjoying the quality and expertise associated with DXN.",
        fr: "Une formule nutritionnelle d'exception associant des ingrédients rigoureusement sélectionnés pour vous offrir une vitalité naturelle supérieure adaptée à un style de vie moderne et actif."
      },
      longDesc: {
        ar: "يجمع مسحوق ريشيليوم الفاخر بين أنقى خلايا ميسيليوم الفطر الريشي الغنية بالأكسجين والبوليسيكاريدات الحيوية ومضادات الأكسدة الهامة. يعمل على توازن الأجهزة الهضمية والمناعية، حماية جدران المعدة، وتوفير تجديد خلوي عميق للأعضاء الداخلية وطاقة ذهنية مركزة.",
        en: "DXN Reishilium Powder is an outstanding cellular food supplement. By fusing the pristine, fast-absorbing properties of Reishi mycelium, it comports a rich bio-load of polysaccharide defenses and oxygen-rich germanium to support rapid organ cell restoration, regulate digestive function, and foster resilient mental focus.",
        fr: "La poudre Reishilium est un condensé d'énergie biologique d'une valeur inestimable. Sa composition exclusive en mycélium de Reishi libère des polysaccharides actifs et du germanium organique pour restaurer la vitalité des cellules affaiblies, stimuler les défenses immunitaires et harmoniser les fonctions digestives."
      },
      usage: {
        ar: "اخلط ملعقة صغيرة من مسحوق الريشيليوم في كوب من الماء الدافئ أو أضفه إلى العصير أو الحليب الدافئ واشربه يومياً لتعزيز حيويتك.",
        en: "Mix one teaspoon of Reishilium powder into warm water, or add to your favorite juice or shake, and drink daily for premium vitality.",
        fr: "Mélanger une cuillère à café dans une tasse d'eau chaude, ou l'ajouter à un jus ou shake, et consommer quotidiennement."
      },
      price: 401,
      originalPrice: 850,
      rating: 5.0,
      reviewsCount: 63,
      hasVariants: true,
      variants: [
        {
          id: "reishilium_small",
          name: {
            ar: "مسحوق ريشيليوم - 22 غرام",
            en: "Reishilium Powder - 22g",
            fr: "Poudre Reishilium - 22g"
          },
          price: 401,
          originalPrice: 850,
          primaryImage: "https://i.ibb.co/LhsPdhTv/image.png",
          gallery: [
            "https://i.ibb.co/LhsPdhTv/image.png",
            "https://i.ibb.co/8Ldhf3Yy/image.png",
            "https://i.ibb.co/F4ZCjQNR/image.png"
          ]
        },
        {
          id: "reishilium_large",
          name: {
            ar: "مسحوق ريشيليوم - 70 غرام",
            en: "Reishilium Powder - 70g",
            fr: "Poudre Reishilium - 70g"
          },
          price: 1226,
          originalPrice: 2800,
          primaryImage: "https://i.ibb.co/PZMWLpRv/image.png",
          gallery: [
            "https://i.ibb.co/PZMWLpRv/image.png",
            "https://i.ibb.co/8Ldhf3Yy/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/LhsPdhTv/image.png",
      gallery: [
        "https://i.ibb.co/LhsPdhTv/image.png",
        "https://i.ibb.co/8Ldhf3Yy/image.png",
        "https://i.ibb.co/F4ZCjQNR/image.png",
        "https://i.ibb.co/PZMWLpRv/image.png"
      ]
    },
    {
      id: "reishi_gano",
      name: {
        ar: "فطر ريشي جانو (RG)",
        en: "DXN Reishi Gano (RG)",
        fr: "DXN Reishi Gano (RG)"
      },
      subtitle: {
        ar: "كبسولات الفطر الأحمر البالغ للتنظيف العميق وطرد السموم من الخلايا",
        en: "Premium Mature Ganoderma (RG) for Deep Detoxification",
        fr: "Gélules de Reishi Rouge Mature pour la Détoxification Globale"
      },
      desc: {
        ar: "كبسولات فطر ريشي جانو (RG) العضوية الفاخرة المستخلصة من الفطر الأحمر البالغ بعمر 90 يوماً. يتميز بقدرته الفائقة على تنقية خلايا الجسم من السموم المتراكمة، تحسين تدفق الأكسجين، ودعم التوازن الحمضي القلوي بكفاءة.",
        en: "Premium organic Ganoderma Lucidum (RG) capsules containing 90-day adult Red Reishi. Formulated to deeply cleanse cells, eliminate accumulated metabolic wastes, and harmonize overall body systems.",
        fr: "Gélules de Ganoderma Lucidum mûr à 90 jours (RG) de première qualité. Purifie en profondeur l'organisme de ses impuretés, équilibre le métabolisme, fluidifie la circulation et renforce la résilience immunitaire globale."
      },
      longDesc: {
        ar: "فطر ريشي جانو (RG) هو ثمرة الفطر الأحمر البالغ الذي يُزرع في بيئة عضوية معزولة ومثالية لمدة 90 يوماً. يحتوي على أكثر من 400 عنصر مغذٍ طبيعي نشط علاجياً، منها التريتربينات والأدينوسين والبوليسيكاريدات والعديد من الألياف الحيوية. يُعرف بكونه 'المطهر الرئيسي' للجسم، حيث يذهب مباشرة إلى الخلايا المصابة أو المحملة بالسموم ليقوم بتحفيز طرحها وتنقية الدم منها، مسانداً بذلك وظائف الكبد والكلى والبنكرياس والقلب.",
        en: "Reishi Gano (RG) is 100% pure fruit body of the Ganoderma Lucidum mushroom, harvested after 90 days of carefully supervised growth. Backed by ancient wisdom and three decades of modern scientific refining, RG capsules deliver over 400 active biochemical complexes, including essential triterpenoids, polysaccharides, and adenosine. RG acts as a master internal sweeper—identifying deep-seated cellular toxins, boosting hepatic (liver) and renal (kidney) filtration, improving blood circulation, and correcting general physiological imbalances to secure long-term physical youth and resilience.",
        fr: "Le Reishi Gano (RG) est issu à 100% du corps fructifère mature du champignon Ganoderma Lucidum, cueilli après 90 jours de croissance optimale. Cette formule d'excellence livre une densité inégalée de plus de 400 composés bioactifs, dont des triterpènes, polysaccharides solubles et adénosine. Il agit comme un nettoyeur interne suprême en repérant et évacuant les toxines intracellulaires accumulées, en soutenant la fonction de filtration du foie et des reins, en fluidifiant la circulation sanguine et en rétablissant l'homéostasie pour préserver la jeunesse cellulaire."
      },
      usage: {
        ar: "ابدأ بتناول كبسولة واحدة يومياً في الأسبوع الأول، ثم ارفع الجرعة إلى كبسولتين إلى 3 كبسولات يومياً مع كوب كبير من الماء الدافئ قبل وجبة الفطور بنصف ساعة.",
        en: "Start with 1 capsule daily for the first week, then increase to 2-3 capsules daily with a large glass of warm water 30 minutes before breakfast.",
        fr: "Commencer par 1 capsule par jour la première semaine, puis augmenter à 2-3 capsules par jour avec un grand verre d'eau tiède le matin à jeun."
      },
      price: 706,
      originalPrice: 850,
      rating: 4.9,
      reviewsCount: 112,
      hasVariants: true,
      variants: [
        {
          id: "rg_90",
          name: {
            ar: "ريشي جانو RG 90 كبسولة",
            en: "Reishi Gano RG 90 Caps",
            fr: "Reishi Gano RG 90 Caps"
          },
          price: 706,
          originalPrice: 850,
          primaryImage: "https://i.ibb.co/j9vb2YGq/image.png",
          gallery: [
            "https://i.ibb.co/j9vb2YGq/image.png",
            "https://i.ibb.co/ycFbP2pz/image.png"
          ]
        },
        {
          id: "rg_360",
          name: {
            ar: "ريشي جانو RG 360 كبسولة",
            en: "Reishi Gano RG 360 Caps",
            fr: "Reishi Gano RG 360 Caps"
          },
          price: 2346,
          originalPrice: 2800,
          primaryImage: "https://i.ibb.co/jdx5mcV/image.png",
          gallery: [
            "https://i.ibb.co/jdx5mcV/image.png",
            "https://i.ibb.co/ycFbP2pz/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/j9vb2YGq/image.png",
      gallery: [
        "https://i.ibb.co/j9vb2YGq/image.png",
        "https://i.ibb.co/ycFbP2pz/image.png",
        "https://i.ibb.co/jdx5mcV/image.png"
      ]
    },
    {
      id: 'aloe_scrub',
      name: {
        ar: "مقشر الوجه ألو فيرا",
        en: "DXN Aloe V. Facial Scrub",
        fr: "Gommage Visage Aloe V. DXN"
      },
      subtitle: {
        ar: "تنظيف عميق ولطيف وتقشير طبيعي للبشرة بالصبار",
        en: "Gentle Cleansing & Natural Exfoliation with Aloe Vera",
        fr: "Nettoyage Doux & Gommage Naturel à l'Aloe Vera"
      },
      desc: {
        ar: "مقشر لطيف للوجه غني بخلاصة الصبار الطبيعية وحبيبات التقشير الدقيقة لتنظيف المسام بعمق، إزالة الخلايا الميتة، وإعادة النضارة والنعومة الفائقة لبشرتك.",
        en: "A gentle facial scrub enriched with natural Aloe Vera extract and fine exfoliating beads. Deeply cleanses pores, removes dead skin cells, and restores vibrant softness and natural radiance to your skin.",
        fr: "Un gommage doux pour le visage enrichi en extrait d'Aloe Vera et en micro-billes exfoliantes. Nettoie les pores en profondeur, élimine les cellules mortes et redonne douceur et éclat naturel à la peau."
      },
      longDesc: {
        ar: "مقشر الوجه ألو فيرا من دي إكس إن هو المستحضر المثالي لتجديد خلايا البشرة واستعادة إشراقتها الطبيعية. يجمع بين الخصائص المرطبة والمهدئة لجل الصبار النقي وحبيبات التقشير اللطيفة التي تزيل الأوساخ والدهون الزائدة دون التسبب في جفاف أو تهيج البشرة الحساسة. يساعد على تفتيح لون البشرة، تنعيم ملمسها، وتحفيز الدورة الدموية الدقيقة بالوجه لتبدو بشرتك أكثر صحة وشباباً وحيوية.",
        en: "DXN Aloe V. Facial Scrub provides a rejuvenating exfoliating experience that reveals your skin's natural glow. Utilizing the legendary moisturizing power of pure Aloe Vera extract, it works in harmony with soft micro-exfoliators to sweep away impurities, unclog pores, and lift dead surface cells without stripping away essential moisture. Ideal for all skin types, it refines skin texture, promotes cellular renewal, and prepares your face for deep hydration.",
        fr: "Le Gommage Visage Aloe V. de DXN offre une exfoliation douce et régénérante qui réveille l'éclat naturel de votre teint. Grâce aux vertus hydratantes de l'Aloe Vera pur alliées à des micro-particules gommantes délicates, il désincruste les pores, élimine l'excess de sébum et les impuretés accumulées sans irriter ni assécher la peau. Idéal pour affiner le grain de peau, stimuler le renouvellement cellulaire et retrouver une peau lisse, saine et rayonnante."
      },
      usage: {
        ar: "ضعي كمية مناسبة على وجه مبلل، دلكي بلطف بحركات دائرية مع تجنب منطقة العينين، ثم اشطفي جيداً بالماء الدافئ. يُنصح باستخدامه مرتين إلى ثلاث مرات أسبوعياً.",
        en: "Apply a small amount to wet face and neck. Gently massage in circular motions, avoiding the eye area. Rinse thoroughly with lukewarm water. Use 2-3 times a week for optimal results.",
        fr: "Appliquer une noisette sur le visage et le cou humides. Masser délicatement par mouvements circulaires en évitant le contour des yeux. Rincer abondamment à l'eau tiède. Utiliser 2 à 3 fois par semaine."
      },
      price: 169,
      originalPrice: 220,
      rating: 4.9,
      reviewsCount: 95,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/CsK9nGsM/image.png",
      gallery: [
        "https://i.ibb.co/CsK9nGsM/image.png",
        "https://i.ibb.co/rj6rvtX/image.png"
      ]
    },
    {
      id: 'aloe_lotion',
      name: {
        ar: "لوشن اليدين والجسم ألو فيرا",
        en: "DXN Aloe V. Hand & Body Lotion",
        fr: "Lotion Mains & Corps Aloe V. DXN"
      },
      subtitle: {
        ar: "ترطيب عميق وحماية مغذية لليدين والجسم بالصبار",
        en: "Deep Hydration & Nourishing Shield for Hands & Body",
        fr: "Hydratation Intense & Protection Active à l'Aloe Vera"
      },
      desc: {
        ar: "لوشن غير دهني سريع الامتصاص غني بخلاصة الصبار النقية وزيوت الترطيب الطبيعية لتغذية البشرة الجافة، الحفاظ على مرونتها، وحمايتها من العوامل البيئية الضارة.",
        en: "A non-greasy, fast-absorbing lotion enriched with pure Aloe Vera extract and natural moisturizing oils to nourish dry skin, maintain elasticity, and protect against environmental damage.",
        fr: "Une lotion non grasse et rapidement absorbée, enrichie en extrait d'Aloe Vera pur et huiles naturelles pour hydrater les peaux sèches, préserver l'élasticité et protéger des agressions extérieures."
      },
      longDesc: {
        ar: "لوشن اليدين والجسم ألو فيرا من دي إكس إن هو الحل المتكامل لبشرة ناعمة وصحية طوال اليوم. يتميز بتركيبة خفيفة وسريعة التغلغل تمنح بشرتك رطوبة مكثفة تدوم طويلاً، مما يجعله مثاليًا للاستخدام اليومي بعد الاستحمام. يعمل جل الصبار الطبيعي على تهدئة البشرة المتهيجة أو المعرضة للشمس، ويعزز مرونة الجلد ويمنع علامات الجفاف والتشقق، ليترك يديك وجسمك برائحة منعشة وملمس مخملي رائع.",
        en: "DXN Aloe V. Hand & Body Lotion is your daily source of complete hydration and skin nutrition. Formulated to melt effortlessly into the skin without leaving a sticky residue, this premium lotion provides long-lasting moisture protection. The natural Aloe Vera active nutrients soothe sun-exposed or sensitive skin, locking in hydration and strengthening the skin barrier against dry conditions. Enjoy deeply soft, smooth hands and a beautifully conditioned body.",
        fr: "La Lotion Mains & Corps Aloe V. de DXN est le soin quotidien par excellence pour retrouver une peau infiniment douce et souple. Sa formule ultra-légère et non grasse pénètre instantanément pour désaltérer les épidermes les plus secs. Grâce aux nutriments actifs de l'Aloe Vera, elle apaise les irritations, régénère la barrière cutanée et protège contre le dessèchement causé par le vent ou le soleil. Votre corps est enveloppé d'une fraîcheur délicate et d'une douceur satinée."
      },
      usage: {
        ar: "ضع كمية مناسبة على اليدين والجسم مع التدليك اللطيف حتى يمتصه الجلد تماماً. يُفضل استخدامه يومياً وخاصة بعد الاستحمام.",
        en: "Apply generously over hands and body. Massage gently until fully absorbed. Best used daily, especially after bathing or showering.",
        fr: "Appliquer généreusement sur les mains et l'ensemble du corps. Masser doucement jusqu'à absorption complète. Idéal après le bain ou la douche."
      },
      price: 156,
      originalPrice: 200,
      rating: 4.8,
      reviewsCount: 110,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/ymy5wXTh/image.png",
      gallery: [
        "https://i.ibb.co/ymy5wXTh/image.png",
        "https://i.ibb.co/fYp5YH3f/image.png"
      ]
    },
    {
      id: 'aloe_gel',
      name: {
        ar: "جل منظف ألو فيرا",
        en: "DXN Aloe V. Cleansing Gel",
        fr: "Gel Nettoyant Aloe V. DXN"
      },
      subtitle: {
        ar: "تنظيف لطيف وموازن للرطوبة وجل رغوي منعش بالصبار",
        en: "Gentle Cleansing & Moisture Balancing Foaming Gel with Aloe",
        fr: "Nettoyage Doux & Gel Moussant Frais à l'Aloe Vera"
      },
      desc: {
        ar: "جل منظف رغوي لطيف وخالٍ من الصابون، ينظف البشرة بعمق ويزيل الأوساخ والماكياج مع الحفاظ على مستويات الترطيب الطبيعية للبشرة دون تعريضها للجفاف.",
        en: "A soap-free, gentle foaming cleansing gel that deeply cleanses the skin, removing impurities and makeup while maintaining your skin's natural moisture balance without drying.",
        fr: "Un gel nettoyant moussant sans savon qui élimine en douceur les impuretés et les traces de maquillage tout en respectant l'hydratation naturelle de l'épiderme."
      },
      longDesc: {
        ar: "جل منظف ألو فيرا دي إكس إن هو الخطوة الأولى الأساسية في روتين العناية اليومي ببشرتك. صُمم بتركيبة خالية من الصابون والبارابين لتنظيف لطيف وعميق يناسب جميع أنواع البشرة حتى الأكثر حساسية. يحتوي على خلاصة الصبار الطبيعية النشطة التي تعمل على تنقية البشرة وتنعيمها، مع الحفاظ على الزيوت الطبيعية الواقية للجلد. يمنح وجهك انتعاشاً فورياً ونقاءً فائقاً ويترك البشرة مستعدة لامتصاص مغذيات العناية اللاحقة.",
        en: "DXN Aloe V. Cleansing Gel is the perfect clarifying first step for your daily skincare ritual. This gentle soap-free formula creates a luxurious light foam that sweeps away dirt, excess oils, and cosmetic impurities from your pores without stripping skin of its precious lipids. Infused with highly purified Aloe Vera, it actively hydrates, calms minor redness, and supports pH balance. Wake up your skin with crisp freshness and complete botanical purity.",
        fr: "Le Gel Nettoyant Aloe V. de DXN est l'étape essentielle pour purifier votre peau au quotidien. Formulé sans savon, ce gel moussant ultra-doux élimine les impuretés de la journée et l'excès de sébum tout en respectant l'équilibre hydrolipidique de l'épiderme. Enrichi en extrait d'Aloe Vera purifié, il hydrate, calme les rougeurs et tonifie la peau pour un fini frais et net. Votre peau respire librement et retrouve sa pureté botanique originelle."
      },
      usage: {
        ar: "ضعي كمية مناسبة على راحة يد مبللة، ارغيها ثم دلكي بها الوجه والرقبة بلطف بحركات دائرية، ثم اشطفي جيداً بالماء.",
        en: "Squeeze an appropriate amount onto wet palms and lather. Gently massage onto face and neck, then rinse thoroughly with water.",
        fr: "Faire mousser une petite quantité dans les mains humides. Masser délicatement le visage et le cou par mouvements circulaires, puis rincer abondamment."
      },
      price: 156,
      originalPrice: 200,
      rating: 4.8,
      reviewsCount: 85,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/NdsFzy0p/image.png",
      gallery: [
        "https://i.ibb.co/NdsFzy0p/image.png",
        "https://i.ibb.co/rj6rvtX/image.png"
      ]
    },
    {
      id: 'aromatic_shower_gel',
      name: {
        ar: "جل الاستحمام العطري الفاخر",
        en: "DXN Luxury Aromatic Shower Gel",
        fr: "Gel Douche Aromatique de Luxe DXN"
      },
      subtitle: {
        ar: "رغوة غنية وتنظيف منعش مع عبير عطري مهدئ للأعصاب",
        en: "Luxurious Foaming Lather & Relaxing Botanical Aroma",
        fr: "Mousse Onctueuse & Parfum Aromatique Apaisant"
      },
      desc: {
        ar: "جل استحمام رغوي فاخر ينظف البشرة بلطف ويعيد إليها النضارة والحيوية، تاركاً رائحة عطرية مهدئة وساحرة ترتقي بروتينك اليومي بعد يوم طويل.",
        en: "A premium foaming shower gel that cleanses and revitalizes your skin, leaving an exquisite soothing aromatic fragrance that elevates your daily bath routine.",
        fr: "Un gel douche moussant haut de gamme qui nettoie et revitalise votre peau, en laissant un parfum aromatique exquis et apaisant pour sublimer votre bain quotidien."
      },
      longDesc: {
        ar: "جل الاستحمام العطري الفاخر من دي إكس إن هو بوابتك لتجربة استرخاء فريدة تماثل غرف السبا الراقية. يتميز بتركيبة متوازنة تصنع رغوة غنية تنظف المسام بعمق دون تجفيف البشرة أو التسبب في تهيجها. تساهم الزيوت العطرية العضوية المدمجة في تهدئة التوتر وتصفية الذهن، بينما تعمل العناصر المغذية على منح بشرتك رطوبة ونعومة مخملية تدوم طويلاً، مما يجعله الخيار المثالي لبداية يوم نشيط أو نهاية ليلة هادئة ومريحة.",
        en: "DXN Luxury Aromatic Shower Gel transforms your daily bath into a luxurious home-spa ritual. Formulated to create a dense, velvety lather, it sweeps away dirt and daily impurities while respecting your skin's natural moisture barrier. Infused with highly selected aromatic botanical oils, it works to release daily physical tension, soothe the nervous system, and clear your mind. Nourishing plant extracts hydrate and soften, leaving you with skin that is touchably silky and wrapped in an ultra-premium scent.",
        fr: "Le Gel Douche Aromatique de Luxe DXN transforme votre douche quotidienne en une véritable expérience de spa à domicile. Conçu pour créer une mousse riche et veloutée, il élimine les impuretés tout en préservant le film hydrolipidique de votre épiderme. Enrichi en huiles aromatiques nobles sélectionnées avec soin, il aide à dissiper les tensions physiques, à apaiser l'esprit et à recharger vos batteries. Votre peau reste infiniment souple, soyeuse et délicatement parfumée d'un sillage envoûtant."
      },
      usage: {
        ar: "ضع كمية مناسبة على ليفة الاستحمام المبللة، دلك الجسم بالكامل بالرغوة الغنية اللطيفة، ثم اشطف جيداً بالماء الدافئ.",
        en: "Squeeze an appropriate amount onto a wet sponge or palm, massage gently over the entire body to create a rich lather, then rinse thoroughly with warm water.",
        fr: "Appliquer une quantité généreuse sur une éponge humide ou dans la paume de la main. Masser délicatement sur l'ensemble du corps pour faire mousser, puis rincer abondamment."
      },
      price: 175,
      originalPrice: 230,
      rating: 4.9,
      reviewsCount: 75,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/C30txFNP/image.png",
      gallery: [
        "https://i.ibb.co/C30txFNP/image.png",
        "https://i.ibb.co/wZtjJX4w/image.png",
        "https://i.ibb.co/8Dcj9m4q/image.png",
        "https://i.ibb.co/gMW4bhpr/image.png"
      ]
    },
    {
      id: 'aromatic_body_lotion',
      name: {
        ar: "لوشن الجسم العطري الفاخر",
        en: "DXN Luxury Aromatic Body Lotion",
        fr: "Lotion Corporelle Aromatique de Luxe DXN"
      },
      subtitle: {
        ar: "ترطيب مخملي مكثف وتغذية عميقة مع ثبات عطري مميز",
        en: "Intense Moisture, Velvet Smoothness & Long-lasting Scent",
        fr: "Hydratation Intense, Fini Velouté & Sillage Captivant"
      },
      desc: {
        ar: "لوشن مخملي مرطب للجسم يغذي البشرة الجافة والتالفة ويمنحها نعومة فائقة مع عبير عطري متطور وآسر يدوم معك لساعات طويلة.",
        en: "A velvety, fast-absorbing moisturizing body lotion that hydrates deep skin layers while surrounding you with a sophisticated, lingering aromatic scent.",
        fr: "Une lotion corporelle veloutée et hydratante qui désaltère en profondeur les peaux sèches tout en vous enveloppant d'un parfum aromatique sophistiqué et persistant."
      },
      longDesc: {
        ar: "لوشن الجسم العطري الفاخر من دي إكس إن صُمم خصيصاً ليمنح بشرتك العناية الفائقة والدلال اليومي الذي تستحقه. يحتوي على خلاصة مغذية قوية وسريعة الامتصاص دون أي بقايا لزجة، مما يعزز مرونة الجلد ويصلح المناطق الجافة مثل الكوعين والركبتين. تركيبته الفريدة تمنع فقدان الماء من خلايا البشرة وتحميها من الجفاف اليومي، بينما يمنحك ثباته العطري العالي هالة من الرائحة الطيبة والجاذبية طوال اليوم بملمس حريري فائق النعومة.",
        en: "DXN Luxury Aromatic Body Lotion is the ultimate daily indulgence for dry and dehydrated skin. Formulated to melt effortlessly upon skin contact, this premium lotion penetrates deeply without leaving any greasy or sticky residue. It is packed with rich natural lipids, vitamins, and antioxidants that lock in hydration, strengthen the protective skin barrier, and restore healthy elasticity. A high-fidelity aromatic scent wraps your body, keeping you feeling incredibly fresh, confident, and touchably soft all day.",
        fr: "La Lotion Corporelle Aromatique de Luxe DXN est le soin par excellence pour dorloter votre peau au quotidien. Sa texture fluide pénètre instantanément pour désaltérer et réparer les épidermes les plus secs, sans aucun fini collant. Riche en agents hydratants précieux, en vitamines et antioxydants naturels, elle renforce la barrière cutanée et préserve la souplesse naturelle de votre corps. Son parfum d'exception crée un sillage élégant et sensuel qui dure des heures."
      },
      usage: {
        ar: "ضع كمية مناسبة على بشرة جافة ونظيفة، دلك بلطف بحركات دائرية حتى يمتصه الجلد تماماً. مثالي للاستخدام اليومي بعد الاستحمام مباشرة.",
        en: "Apply generously on clean, dry skin. Massage gently in circular motions until fully absorbed. Best applied immediately after showering to lock in moisture.",
        fr: "Appliquer généreusement sur une peau propre et sèche. Masser délicatement par mouvements circulaires jusqu'à pénétration complète. Idéal après le bain ou la douche."
      },
      price: 213,
      originalPrice: 280,
      rating: 4.8,
      reviewsCount: 64,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/mrfDfSQ8/image.png",
      gallery: [
        "https://i.ibb.co/mrfDfSQ8/image.png",
        "https://i.ibb.co/ksrvS43q/image.png",
        "https://i.ibb.co/mCRVCrj2/image.png"
      ]
    },
    {
      id: 'hand_cream',
      name: {
        ar: "كريم اليدين المغذي",
        en: "DXN Nourishing Hand Cream",
        fr: "Crème Mains Nourrissante DXN"
      },
      subtitle: {
        ar: "ترميم وحماية فائقة لليدين من الجفاف وعوامل الطقس",
        en: "Intensive Skin Repair & Moisture Barrier Shield for Hands",
        fr: "Réparation Intense & Écran Protecteur pour des Mains Soyeuses"
      },
      desc: {
        ar: "كريم مغذٍ مكثف لليدين، يوفر درع رطوبة غني لحماية البشرة من الجفاف، التشققات، والغسيل المتكرر، ليعيد ليديك الملمس الناعم والحريري.",
        en: "An intensive nourishing cream for hands, providing a rich moisture shield against dry climate and frequent washing, restoring touchable, elegant silkiness.",
        fr: "Une crème nourrissante intensive pour les mains, offrant un écran protecteur riche contre le dessèchement et les lavages fréquents, redonnant une douceur soyeuse."
      },
      longDesc: {
        ar: "تتعرض الأيدي باستمرار للعديد من العوامل اليومية القاسية مثل الصابون والمعقمات والطقس المتقلب. كريم اليدين المغذي من دي إكس إن هو الحل الطبيعي لحمايتها وترميمها. يضم تركيبة مغذية مركزة تتغلغل فوراً في البشرة الخشنة والمتشققة لتهدئتها وتوفير راحة فورية. يعمل هذا الكريم الفاخر على العناية المكثفة بالجلد المحيط بالأظافر وتقويتها، ويمنح يديك مرونة فائقة وحماية متكاملة تدوم طويلاً دون ترك أي طبقة دهنية مزعجة تمنعك من مواصلة أعمالك.",
        en: "Our hands are our main contact with the world and face constant stress from soaps, hand sanitizers, and seasonal weather. DXN Nourishing Hand Cream is specially crafted to repair, defend, and rejuvenate tired, dry skin. Infused with essential botanical nutrients and skin-loving lipids, it sinks instantly into rough cracks to offer soothing relief. This protective formula also nourishes cuticles and strengthens nails, keeping your hands looking beautifully groomed, younger, and touchably velvety without leaving any sticky residue.",
        fr: "Nos mains sont exposées en permanence aux agressions extérieures : lavages fréquents, gels hydroalcooliques et variations climatiques. La Crème Mains Nourrissante DXN est formulée pour réparer, protéger et embellir votre peau. Riche en lipides végétaux et nutriments essentiels, elle pénètre instantanément sans laisser de film collant pour apaiser les tiraillements. Elle prend également soin de vos cuticules et renforce vos ongles pour des mains parfaitement soignées et rajeunies."
      },
      usage: {
        ar: "دلك كمية صغيرة من الكريم على يديك وأظافرك يومياً وكلما شعرت بالجفاف والخشونة.",
        en: "Massage a small amount of cream onto your hands and nails daily, or whenever you feel dryness and lack of moisture.",
        fr: "Masser une petite quantité de crème sur les mains et les ongles au quotidien, ou dès que vous ressentez une sensation de sécheresse."
      },
      price: 183,
      originalPrice: 240,
      rating: 4.9,
      reviewsCount: 80,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/zTy4QCzD/image.png",
      gallery: [
        "https://i.ibb.co/zTy4QCzD/image.png",
        "https://i.ibb.co/0jXKnNb2/image.png"
      ]
    },
    {
      id: 'lip_balm',
      name: {
        ar: "مرطب الشفاه المرطب",
        en: "DXN Moisturizing Lip Balm",
        fr: "Baume à Lèvres Hydratant DXN"
      },
      subtitle: {
        ar: "علاج جفاف الشفاه وحمايتها مع لمعان طبيعي وصحي",
        en: "Locks in Moisture, Repairs Chapped Lips & Adds Subtle Glow",
        fr: "Répare les Lèvres Gercées, Hydrate & Sublime l'Éclat Naturel"
      },
      desc: {
        ar: "مرطب شفاه غني بالشموع الطبيعية يعالج الشفاه الجافة والمتشققة ويمنحها لمعاناً طبيعياً ومظهراً ممتلئاً بالصحة والحيوية.",
        en: "A rich, hydrating lip balm that locks in moisture and repairs chapped lips, giving them a natural, healthy and glossy shine.",
        fr: "Un baume à lèvres riche et hydratant qui retient l'humidité et répare les lèvres gercées, leur donnant un éclat naturel et sain."
      },
      longDesc: {
        ar: "مرطب الشفاه من دي إكس إن صمم خصيصاً ليكون رفيقك اليومي لحماية شفتيك الحساستين. يحتوي على مزيج فاخر من الشموع الطبيعية ومضادات الأكسدة التي تصنع طبقة حماية عازلة ضد العوامل البيئية الجافة والهواء البارد. يساهم في علاج التشققات والخطوط الدقيقة بالشفاه بسرعة فائقة، ويمنحها لوناً طبيعياً وصحياً بالإضافة لبريق جذاب وخفيف وملمس غاية في النعومة والمرونة يدوم طوال اليوم.",
        en: "Keep your lips beautifully protected and conditioned with DXN Moisturizing Lip Balm. Formulated to combat extreme dryness, this soothing balm contains botanical waxes and active natural antioxidants that construct a protective barrier, locking in vital moisture. It instantly smooths away rough patches and repairs chapped skin. Regular use helps to reduce fine lip lines and enhances your lips with a soft, natural, healthy-looking luster and irresistible suppleness.",
        fr: "Protégez et hydratez vos lèvres au quotidien grâce au Baume à Lèvres Hydratant DXN. Conçu pour lutter contre le dessèchement extrême, ce baume contient des cires botaniques et des antioxydants naturels qui scellent l'hydratation. Il élimine instantanément les petites peaux sèches et répare les lèvres abîmées. Vos lèvres retrouvent leur souplesse originelle, embellies d'un éclat naturel, sain et délicat."
      },
      usage: {
        ar: "ضع كمية مناسبة على الشفاه يومياً وعند الحاجة. مثالي كقاعدة ترطيب قبل وضع أحمر الشفاه.",
        en: "Apply generously to lips as often as needed. Perfect to use as a moisturizing base coat before applying lipstick.",
        fr: "Appliquer généreusement sur les lèvres aussi souvent que nécessaire. Idéal comme base hydratante avant l'application du rouge à lèvres."
      },
      price: 91,
      originalPrice: 120,
      rating: 4.8,
      reviewsCount: 110,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/fYYLgNLj/image.png",
      gallery: [
        "https://i.ibb.co/fYYLgNLj/image.png"
      ]
    },
    {
      id: 'face_mask',
      name: {
        ar: "قناع الوجه المرطب",
        en: "DXN Hydrating Face Mask",
        fr: "Masque Visage Hydratant DXN"
      },
      subtitle: {
        ar: "ترطيب مائي فائق وتغذية نباتية مكثفة لنضارة فورية",
        en: "Ultimate Moisture Infusion, Radiant Glow & Tired Skin Relief",
        fr: "Infusion d'Hydratation Intense, Éclat Immédiat & Teint Repulpé"
      },
      desc: {
        ar: "قناع ترطيب فائق يغمر خلايا بشرتك بالترطيب النباتي المكثف، يعزز مرونتها ويعيد التوهج والنضارة للوجه المتعب والبهتان بفعالية فورية.",
        en: "An ultimate moisturizing face mask that infuses your skin with botanical hydration, boosting elasticity and restoring a vibrant, youthful radiance.",
        fr: "Le masque hydratant ultime qui gorge votre peau d'une hydratation botanique, renforçant l'élasticité et restaurant un éclat de jeunesse et de vitalité."
      },
      longDesc: {
        ar: "قناع الوجه المرطب من دي إكس إن هو المستحضر السري لاستعادة حيوية ونضارة بشرتك في دقائق قليلة. تركيبته الغنية تندمج بعمق لترطيب أعمق طبقات الجلد التالف أو المجهد جراء التلوث والإرهاق اليومي. يعمل على تلطيف الاحمرار والتهيج ويشد المسام بلطف ليترك الوجه ممتلئاً ورطباً ومشدوداً. مع استخدامه بانتظام، ستلاحظين اختفاء علامات التعب والبهتان وتحول بشرتك إلى مظهر متوهج ونقي ومفعم بالشباب والجمال الطبيعي.",
        en: "Unveil an incredibly fresh and luminous complexion with DXN Hydrating Face Mask. Specially formulated as an ultimate moisturizing rescue treatment, this facial mask deeply floods your skin's epidermal layers with intensive botanical hydration. It works instantly to calm redness, repair signs of skin fatigue, and refine pore texture. Dry, dull skin is immediately restored, becoming beautifully plumped, firm, and radiating a natural youthful luminosity that feels as good as it looks.",
        fr: "Découvrez un teint éclatant et frais avec le Masque Visage Hydratant DXN. Formulé comme un soin de secours ultra-désaltérant, ce masque gorge la peau d'une hydratation botanique concentrée en profondeur. Il apaise instantanément les rougeurs, atténue les marques de fatigue et lisse le grain de peau. Votre peau fatiguée ou déshydratée est transformée, retrouvant un aspect repulpé, ferme et un éclat de jeunesse incomparable."
      },
      usage: {
        ar: "ضعي طبقة متساوية على وجه نظيف مع تجنب العينين والشفاه، اتركيه لمدة 15-20 دقيقة، ثم اغسليه جيداً بالماء أو دلكي الفائض لتمتصه البشرة.",
        en: "Apply an even layer to clean face, avoiding the eyes and lips. Leave on for 15-20 minutes, then rinse thoroughly with water or massage excess into skin.",
        fr: "Appliquer en couche régulière sur le visage propre, en évitant les yeux et les lèvres. Laisser poser 15-20 minutes, puis rincer à l'eau ou masser l'excédent."
      },
      price: 205,
      originalPrice: 270,
      rating: 4.9,
      reviewsCount: 92,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/0RptcBsp/image.png",
      gallery: [
        "https://i.ibb.co/0RptcBsp/image.png"
      ]
    },
    {
      id: 'eye_cream',
      name: {
        ar: "كريم العين لشد الجفون ومحيط العينين DXN",
        en: "DXN Lifting Impact Eye Cream",
        fr: "Crème Contour des Yeux Liftante DXN"
      },
      subtitle: {
        ar: "علاج طبيعي فاخر لإزالة الهالات السوداء وشد ترهلات الجفون ومقاومة التجاعيد",
        en: "Luxurious Targeted Gaze Restoration, Wrinkle Reduction & Dark Circle Defense",
        fr: "Soin Regard d'Exception, Estompe Cernes et Poches & Effet Tenseur Immédiat"
      },
      desc: {
        ar: "كريم فائق التركيز مصمم خصيصاً لتنعيم الخطوط التعبيرية الرقيقة حول العينين، وتفتيح الهالات السوداء، ورفع وشد الجفون المترهلة لنظرة شبابية متوهجة.",
        en: "A luxurious active formulation specifically designed to smooth fine lines, fade dark circles, and lift tired eyelids for an instantly younger and brighter gaze.",
        fr: "Une formule active et luxueuse conçue pour lisser les ridules, estomper les cernes et retendre les paupières pour un regard visiblement plus jeune et éclatant."
      },
      longDesc: {
        ar: "استعيدي بريق وسحر نظرتك مع كريم العين لشد الجفون المتطور من دي إكس إن. تركيبته المخملية الغنية بالمكونات الحيوية النشطة تستهدف المشاكل الأكثر شيوعاً في منطقة محيط العين الرقيقة. يغذي الكريم البشرة بعمق لتحفيز إنتاج الكولاجين الطبيعي، مما يعمل على شد الجفون العلوية ومنع ترهلها، وتخفيف مظهر الانتفاخات الصباحية والهالات السوداء الناتجة عن الإرهاق. يملأ الكريم الخطوط الدقيقة والتجاعيد التعبيرية ويعيد المرونة والحيوية للمظهر العام للعينين.",
        en: "Reawaken your eyes with the DXN Lifting Impact Eye Cream, a botanical formula engineered for the delicate skin of the eye contour. Powered by premium cellular repair activators, this rich yet fast-absorbing cream targets sagging eyelids, deep-set crows feet, and stubborn dark circles. It hydrates instantly, stimulates circulation to eliminate puffiness, and tightens sagging skin. Watch fine lines disappear as the eye area is restored to a brighter, smoother, and completely refreshed state.",
        fr: "Redonnez vie et jeunesse à votre regard avec la Crème Contour des Yeux Liftante DXN. Sa formule fine, ultra-pénétrante et riche en agents tenseurs biologiques cible les zones de fatigue du contour de l'œil. Elle agit puissamment pour drainer les poches sous les yeux, éclaircir les cernes sombres et raffermir la paupière supérieure. Les rides et ridules de déshydratation sont immédiatement lissées, redonnant au regard toute sa clarté, sa jeunesse et son dynamisme naturel."
      },
      usage: {
        ar: "ضعي كمية صغيرة جداً بحجم حبة البازلاء على جفون وعظام العين، ربتي بلطف شديد باستخدام إصبع البنصر (الرابع) من الداخل إلى الخارج مرتين يومياً صباحاً ومساءً.",
        en: "Apply a tiny amount (pea-sized) around the eye contour. Gently pat with your ring finger from the inner corner outwards. Use twice daily, morning and night.",
        fr: "Appliquer une infime quantité (de la taille d'un grain de riz) sur le contour de l'œil propre. Tapoter délicatement du coin interne vers l'externe. Utiliser matin et soir."
      },
      price: 504,
      originalPrice: 620,
      rating: 5.0,
      reviewsCount: 48,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/xKHWHhCf/image.png",
      gallery: [
        "https://i.ibb.co/xKHWHhCf/image.png",
        "https://i.ibb.co/YFwf6y1p/image.png",
        "https://i.ibb.co/VWrrjByx/image.png",
        "https://i.ibb.co/TBX2j0CQ/image.png"
      ]
    },
    {
      id: 'face_serum',
      name: {
        ar: "سيروم شد ونحت ملامح الوجه DXN",
        en: "DXN Lifting Impact Face Serum",
        fr: "Sérum Visage Liftant Ultra DXN"
      },
      subtitle: {
        ar: "مصل مركّز فائق الفعالية لرفع الخدود، نحت ملامح الوجه وإعادة المرونة الفورية",
        en: "Intensive Silky Serum, Instant Tightening, Skin Plumping & Contour Sculpting",
        fr: "Élixir Tenseur Intense, Contour Redessiné, Élasticité & Éclat Velouté"
      },
      desc: {
        ar: "مصل مكثف بتركيبة حريرية سريعة الامتصاص تنفذ لأعمق طبقات الخلايا لتشد البشرة المترهلة على الفور، وتعيد نحت خطوط الوجه، وتمنحه ملمساً مخملياً ناعماً.",
        en: "An intensive silky-smooth serum that instantly tightens facial contours, boosts overall skin elasticity, and reveals a velvety, radiant complexion.",
        fr: "Un sérum intensif au toucher soyeux qui retend instantanément les traits, booste l'élasticité de la peau et révèle un teint lisse, ferme et radieux."
      },
      longDesc: {
        ar: "سيروم شد ونحت ملامح الوجه من دي إكس إن هو السحر اليومي لبشرة مشدودة ومحددة بشكل مثالي. يحتوي هذا السيروم عالي التركيز على مغذيات نباتية دقيقة وعناصر نشطة ومحفزة للبشرة تخترق المسام بسرعة فائقة لتمنحك تأثيراً مشدوداً فورياً. يرمم الخلايا التالفة، يمنع ارتخاء عضلات الخد والذقن، ويعزز تماسك الجلد ومرونته لمكافحة علامات التقدم في السن. مناسب جداً لجميع أنواع البشرة، ويعمل كأساس مثالي ومثبت للمكياج.",
        en: "Discover the powerful youth-restoring benefits of the DXN Lifting Impact Face Serum. Formulated with state-of-the-art botanical extracts, this lightweight concentrated serum targets loss of firmness and facial sagging. It works at a cellular level to optimize skin density, instantly smoothing fine lines while visibly lifting the cheeks and jawline. It absorbs quickly, leaving behind an incredibly soft, velvet-like finish that acts as an excellent base for moisturizer and makeup.",
        fr: "Faites l'expérience d'un effet tenseur d'exception avec le Sérum Visage Liftant Ultra DXN. Enrichi en actifs végétaux hautement concentrés, ce sérum agit immédiatement pour repulper la peau et remodeler l'ovale du visage. Il favorise la production naturelle de soutien cutané pour corriger le relâchement au niveau des joues et du menton. Sa texture fluide et ultra-pénétrante laisse un fini doux et soyeux, idéal pour maximiser l'efficacité de vos soins complémentaires."
      },
      usage: {
        ar: "ضعي بضع قطرات على وجه ورقبة نظيفين، دلكي بلطف بحركات دائرية متجهة للأعلى وللخارج حتى يمتص تماماً قبل وضع كريم الوجه اليومي.",
        en: "Apply a few drops to thoroughly cleansed face and neck. Massage gently in upward circular motions until fully absorbed. Follow with moisturizer.",
        fr: "Appliquer quelques gouttes sur le visage et le cou parfaitement nettoyés. Masser par mouvements circulaires ascendants. Suivre avec la crème de jour."
      },
      price: 513,
      originalPrice: 650,
      rating: 4.9,
      reviewsCount: 54,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/v6QMdZNG/image.png",
      gallery: [
        "https://i.ibb.co/v6QMdZNG/image.png",
        "https://i.ibb.co/N6YnG8r2/image.png",
        "https://i.ibb.co/VYYnjrSx/image.png"
      ]
    },
    {
      id: 'face_cream',
      name: {
        ar: "كريم شد وبناء خلايا الوجه الفاخر DXN",
        en: "DXN Lifting Impact Face Cream",
        fr: "Crème Visage Liftante de Luxe DXN"
      },
      subtitle: {
        ar: "ترطيب وبناء خلايا الجلد المتعبة، شد عميق ومقاومة فورية للتجاعيد",
        en: "Deep Dermal Reconstruction, Moisture-Barrier Lock & Plumping Hydration",
        fr: "Reconstruction Cutanée Profonde, Barrière Hydratante Fortifiée & Rides Estompées"
      },
      desc: {
        ar: "كريم غني ومغذي للغاية يعيد بناء حاجز الرطوبة الطبيعي للبشرة، يشد الخطوط والترهلات العميقة، ويمنح الوجه مظهراً ممتلئاً وحيوياً.",
        en: "A velvety, high-performance cream that reconstructs the skin's moisture barrier, firms sagging contours, and counteracts signs of aging for a plumped look.",
        fr: "Une crème veloutée haute performance qui reconstruit la barrière d'hydratation, raffermit les contours et combat les signes de l'âge pour une peau repulpée."
      },
      longDesc: {
        ar: "دللي بشرتك مع كريم شد الوجه الفاخر من دي إكس إن، الحليف الأقوى لمحاربة علامات الشيخوخة والترهل. يتميز بقوام غني مخملي يغمر البشرة بالترطيب العميق، ويعزز تماسكها من خلال تغذية الخلايا بالدهون النباتية الحيوية. يساعد في إعادة الحجم الطبيعي للوجه (الامتلاء) عبر تعزيز مرونة البشرة، مما يجعل الخطوط العميقة والتجاعيد أقل وضوحاً بشكل كبير. يحمي وجهك من العوامل البيئية الجافة والباردة، مما يحافظ على مظهر ناعم ومتوهج على مدار الساعة.",
        en: "Wrap your skin in the restorative embrace of DXN Lifting Impact Face Cream. This ultimate anti-aging moisturizer features a deeply nourishing lipid formula designed to heal dry, saggy, and fatigued skin. By reinforcing the skin's natural lipid barrier, it locks in vital moisture for over 24 hours while firming and contouring the face. It noticeably smooths out persistent lines, revealing a healthy, youthful volume and a wonderfully soft texture.",
        fr: "Offrez à votre peau l'enveloppement suprême de la Crème Visage Liftante de Luxe DXN. Ce soin anti-âge enveloppe l'épiderme d'une barrière nourrissante ultra-riche pour corriger le dessèchement cutané et la perte de fermeté. Il redonne de la densité aux tissus, comble les rides profondes et redéfinit l'architecture naturelle du visage. Votre peau retrouve une douceur infinie, un confort durable et un volume harmonieux et rajeuni."
      },
      usage: {
        ar: "وزعي كمية مناسبة على الوجه والرقبة، دلكي بلطف بحركات متجهة للأعلى وللخارج مرتين يومياً صباحاً ومساءً.",
        en: "Apply evenly to face and neck, massaging gently in upward and outward strokes. Perfect for daily morning and night use after your serum.",
        fr: "Appliquer sur le visage et le cou propres, en massant délicatement du bas vers le haut. Utiliser matin et soir après le sérum."
      },
      price: 560,
      originalPrice: 690,
      rating: 5.0,
      reviewsCount: 62,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/gbYN44Fv/image.png",
      gallery: [
        "https://i.ibb.co/gbYN44Fv/image.png",
        "https://i.ibb.co/MydYKQbj/image.png",
        "https://i.ibb.co/4RGngJN0/image.png"
      ]
    },
    {
      id: 'night_oil',
      name: {
        ar: "زيت الليل المغذي والمجدد للبشرة DXN",
        en: "DXN Nourishing Night Oil",
        fr: "Huile de Nuit Nourrissante DXN"
      },
      subtitle: {
        ar: "إكسير ليلي فاخر لإصلاح الخلايا التالفة، وإعادة الإشراق والنعومة أثناء النوم",
        en: "Overnight Cellular Renewal, Rich Lipid Infusion & Morning Glow Elixir",
        fr: "Soin Régénérant Nocturne, Nutrition Intense & Teint Lumineux au Réveil"
      },
      desc: {
        ar: "زيت ليلي فاخر سريع الامتصاص غني بالدهون النباتية الأساسية ومضادات الأكسدة التي تصلح حاجز الجلد وتغذي الوجه بعمق طوال الليل لتستيقظي ببشرة لينة ومتوهجة.",
        en: "A precious nocturnal elixir packed with botanical lipids and vitamins, working overnight to repair skin cells and restore a rested, luminous complexion.",
        fr: "Un élixir nocturne précieux riche en lipides végétaux et vitamines, agissant pendant le sommeil pour régénérer la peau et révéler un teint reposé et lumineux."
      },
      longDesc: {
        ar: "زيت الليل المغذي من دي إكس إن هو العلاج السحري الذي يحتاجه وجهك أثناء فترة استرخائك ليلاً. تعمل تركيبته المبتكرة على دعم الوتيرة الطبيعية للبشرة في تجديد الخلايا وإصلاح التلف الناجم عن العوامل الخارجية والتلوث اليومي. يتغلغل هذا الزيت الغني في طبقات الجلد دون التسبب في مظهر دهني مزعج، ليملأ خطوط الجفاف ويغذي البشرة بجرعة مكثفة من الفيتامينات والمعادن النادرة لتستيقظي في الصباح بوجه مشرق ومشدود وخالٍ من علامات الإجهاد.",
        en: "Accelerate your skin's nighttime recovery with DXN Nourishing Night Oil. This luxurious blend of rare plant oils and antioxidants coordinates with your skin's natural circadian rhythm to repair damage and generate new cells. Unlike greasy oils, it penetrates instantly, locking in nutrients to smooth dry patches and calm irritation. Awaken every morning to extremely supple, plumped, and radiant skin that feels completely refreshed and hydrated.",
        fr: "Sublimez la régénération nocturne de votre peau avec l'Huile de Nuit Nourrissante DXN. Cet élixir de beauté fusionne des huiles végétales de prestige et des antioxydants puissants pour réparer les méfaits de la journée pendant le sommeil. Sa texture fine pénètre sans fini gras, réparant la barrière cutanée et reconstituant les réserves de nutriments. Au matin, les traits sont détendus, la peau est merveilleusement souple, douce et lumineuse."
      },
      usage: {
        ar: "ضعي 3-4 قطرات على راحة يدك، دلكي لتدفئة الزيت، ثم اضغطي بلطف على وجهك ورقبتك قبل النوم بحركات دائرية ناعمة.",
        en: "Warm 3-4 drops in the palms of your hands and gently press onto clean face and neck before sleeping. Massage in soft, relaxing circular movements.",
        fr: "Faire chauffer 3 à 4 gouttes dans le creux des mains, puis appliquer par pressions douces sur le visage et le cou propres avant de dormir."
      },
      price: 327,
      originalPrice: 420,
      rating: 4.9,
      reviewsCount: 41,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/v4DTCpc1/image.png",
      gallery: [
        "https://i.ibb.co/v4DTCpc1/image.png",
        "https://i.ibb.co/2YSK96jD/image.png",
        "https://i.ibb.co/DHrbfNmz/image.png"
      ]
    },
    {
      id: 'dry_oil',
      name: {
        ar: "الزيت الجاف متعدد الاستخدامات للوجه والشعر والجسم DXN",
        en: "DXN Multi-Purpose Dry Oil",
        fr: "Huile Sèche Multi-Fonctions DXN"
      },
      subtitle: {
        ar: "عناية متكاملة بلمسة حريرية جافة واحدة للوجه والشعر والجسم برائحة فريدة",
        en: "Satin-Glow Finish, Multi-Zone Nourishment, Zero Greasy Touch & Hair Repair",
        fr: "Toucher Sec Incomparable, Nutrition Tête aux Pieds, Cheveux Soyeux & Corps Satiné"
      },
      desc: {
        ar: "زيت جاف طبيعي بتركيبة خفيفة غير دهنية تمتص فوراً لتمنح الوجه والشعر والجسم لمعاناً حريرياً ونعومة فائقة وترطيباً مكثفاً مع عطر راقٍ ومميز.",
        en: "An iconic, fast-absorbing dry oil that nourishes, repairs, and beautifies your face, body, and hair in a single step, without leaving a greasy residue.",
        fr: "Une huile sèche iconique à absorption rapide qui nourrit, répare et sublime le visage, le corps et les cheveux en un seul geste, sans laisser de film gras."
      },
      longDesc: {
        ar: "اختبري العناية الفرنسية الفاخرة مع الزيت الجاف متعدد الاستخدامات من دي إكس إن. هذا المستحضر الاستثنائي يغنيك عن عشرات المنتجات، بفضل قدرته الفائقة على تلبية احتياجات وجهك وجسمك وشعرك في آن واحد بلمسة واحدة. تركيبته الجافة تمتصها الخلايا والألياف في ثوانٍ معدودة، مما يمنع التصاق الملابس أو الملمس اللزج. يرطب البشرة الجافة ويمنحها لمعاناً ساتانياً ناعماً، ويغذي خصلات الشعر المتعبة والمتقصفة ليعيد إليها الحيوية والنعومة الفائقة، مع غمر حواسك برائحة عطرية فريدة وجذابة تدوم طوال اليوم.",
        en: "Indulge in a luxurious, multi-sensory experience with DXN Multi-Purpose Dry Oil. This highly versatile oil offers comprehensive hydration and defense for your face, body, and hair without any sticky residue. Formulated with premium lightweight botanical lipids, it locks in moisture, softens rough skin, and coats hair strands with a protective satin shield to block frizz and split ends. Wrap your body in its intoxicating premium scent and enjoy a luminous, silky glow.",
        fr: "Succombez au luxe sensoriel de l'Huile Sèche Multi-Fonctions DXN. Ce soin multifonction nourrit, répare et magnifie le visage, le corps et les cheveux en un seul geste divin. Sa texture sèche pénètre instantanément sans laisser de film collant, permettant de s'habiller immédiatement. Elle adoucit la peau, illumine le corps d'un fini satiné précieux et redonne vie aux cheveux secs ou abîmés en domptant les frisottis. Son parfum raffiné et envoûtant vous enveloppe pour la journée."
      },
      usage: {
        ar: "للوجه: ضعيه بحركات ناعمة من الوسط للخارج. للجسم: دلكيه بحركات دائرية على المناطق الجافة. للشعر: وزعيه على الأطراف المتقصفة والجافة مرتين أسبوعياً.",
        en: "For face: Apply in soft outward strokes. For body: Massage in circular motions over dry areas. For hair: Apply to dry or damaged split ends as needed.",
        fr: "Sur le visage : Appliquer par lissages légers. Sur le corps : Masser sur les zones sèches. Sur les cheveux : Appliquer sur les pointes abîmées aussi souvent que nécessaire."
      },
      price: 375,
      originalPrice: 460,
      rating: 5.0,
      reviewsCount: 76,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/pj1Bww3w/image.png",
      gallery: [
        "https://i.ibb.co/pj1Bww3w/image.png",
        "https://i.ibb.co/Fkp1XCzh/image.png",
        "https://i.ibb.co/G4GfFkz7/image.png",
        "https://i.ibb.co/j94KdYCV/image.png"
      ]
    },
    {
      id: 'foaming_cleanser',
      name: {
        ar: "رغوة منظفة فورية للوجه DXN",
        en: "DXN Instant Foaming Cleanser",
        fr: "Nettoyant Mousse Instantané DXN"
      },
      subtitle: {
        ar: "رغوة تنظيف عميقة ومنعشة تنقي المسام وتزيل الشوائب والمكياج بلطف",
        en: "Air-Light Cleansing Foam, Deep Pore Purification & Instant Fresh Softness",
        fr: "Mousse Nettoyante Aérienne, Purification des Pores & Douceur Fraîcheur"
      },
      desc: {
        ar: "رغوة منظفة خفيفة كالريشة تنظف مسام البشرة بعمق وتزيل الشوائب وبقايا المكياج لتترك بشرتك ناعمة ومنتعشة بشكل مذهل.",
        en: "A light-as-air foaming cleanser that deeply purifies skin pores, removes impurities and makeup residue, leaving skin incredibly fresh and clean.",
        fr: "Un nettoyant mousse ultra-léger qui purifie en profondeur les pores, élimine les impuretés et résidus de maquillage, laissant la peau fraîche et nette."
      },
      longDesc: {
        ar: "حافظي على نضارة ونقاء بشرتك يومياً مع الرغوة المنظفة الفورية من دي إكس إن. تركيبتها الهوائية الخفيفة والمريحة للبشرة تضمن تنظيفاً شاملاً يزيل الأوساخ والملوثات اليومية والدهون الزائدة دون المساس بالرطوبة الطبيعية للبشرة. بفضل العناصر النباتية النشطة والمهدئة، يساعد هذا المنظف على تهدئة البشرة المتهيجة والحساسة، ويترك وجهك بملمس مخملي ناعم وإحساس لا مثيل له بالانتعاش والحيوية.",
        en: "Experience the ultimate refreshing clean with the DXN Instant Foaming Cleanser. This soap-free, self-foaming formula dispenses a rich, cloud-like lather that lifts away daily pollutants, excess oil, and trace makeup in seconds. Formulated with gentle hydrating botanical extracts, it cleanses deeply without stripping away essential moisture or disrupting your skin's natural balance. Perfect for all skin types, it leaves your face feeling remarkably soft, clear, and energized.",
        fr: "Révélez une peau parfaitement saine et purifiée avec le Nettoyant Mousse Instantané DXN. Sa formule auto-moussante libère une mousse onctueuse et ultra-légère qui élimine les toxines, l'excès de sébum et le maquillage sans dessécher l'épiderme. Gorgé d'actifs botaniques protecteurs et apaisants, il respecte l'équilibre naturel de la peau tout en calmant les tiraillements. Un geste de pureté quotidien pour un teint frais, doux et rayonnant de santé."
      },
      usage: {
        ar: "ضعي مضخة أو مضختين من الرغوة على يدين مبللتين، دلكي وجهك بلطف بحركات دائرية ناعمة، ثم اشطفيه جيداً بماء دافئ.",
        en: "Pump 1-2 times into wet palms. Gently massage the soft foam onto your face using circular motions, avoiding the eye area. Rinse thoroughly with lukewarm water.",
        fr: "Appliquer 1 à 2 pressions de mousse sur le visage humide. Masser délicatement en mouvements circulaires. Rincer abondamment à l'eau tiède."
      },
      price: 233,
      originalPrice: 290,
      rating: 4.8,
      reviewsCount: 39,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/Lhpdk0QK/image.png",
      gallery: [
        "https://i.ibb.co/Lhpdk0QK/image.png"
      ]
    },
    {
      id: 'tonic_water',
      name: {
        ar: "تونر منشط ومنظف للبشرة DXN",
        en: "DXN Cleansing Tonic Water",
        fr: "Eau Tonique Nettoyante DXN"
      },
      subtitle: {
        ar: "تونيك منعش متوازن لشد المسام وتوازن حموضة البشرة وتحضيرها للترطيب",
        en: "Pore-Refining Balancing Tonic, Fast Skin Refreshment & Pre-Hydration Prep",
        fr: "Lotion Tonique Purifiante, Équilibre du pH & Hydratation Préparatrice"
      },
      desc: {
        ar: "ماء تونيك منعش يعمل على توازن حموضة البشرة وشد مسام الجلد المفتوحة وتحضير الوجه لامتصاص مثالي لمرطبات العناية اليومية.",
        en: "A refreshing tonic water designed to balance the skin's pH, tighten appearance of pores, and prepare your face for ultimate hydration.",
        fr: "Une eau tonique rafraîchissante conçue pour équilibrer le pH de la peau, resserrer les pores et préparer le visage à une hydratation optimale."
      },
      longDesc: {
        ar: "أعيدي التوازن والنقاء الطبيعي لوجهك مع التونر المنظف من دي إكس إن. تعمل هذه التركيبة الخالية من الكحول على إزالة آخر بقايا المنظفات والشوائب بلطف مع تلطيف وتهدئة الجلد المجهد. يساعد التونر في تضييق وشد المسام الواسعة بشكل ملحوظ وتعديل توازن الـ pH الطبيعي للبشرة لتعزيز كفاءة المرطبات والسيرومات التي تضعينها لاحقاً، مما يمنحك بشرة نضرة ومشدودة ومستعدة للخطوة التالية.",
        en: "Perfect your cleansing ritual with the DXN Cleansing Tonic Water. This alcohol-free refreshing toner acts as an essential bridge between cleansing and hydrating. It whisks away microscopic traces of impurities while balancing skin pH and smoothing skin texture. Infused with natural pore-refining agents, it visibly minimizes the appearance of pores, tightens saggy areas, and locks in baseline moisture. Leaves your complexion feeling wonderfully fresh, awake, and prepared.",
        fr: "Complétez votre nettoyage quotidien avec l'Eau Tonique Nettoyante DXN. Cette formule sans alcool tonifie instantanément et parfait le démaquillage en douceur. Conçue pour rétablir le pH idéal de l'épiderme, elle resserre les pores et affine le grain de peau pour un fini lisse et mat. Ses extraits botaniques apportent une première vague d'hydratation et d'énergie, maximisant ainsi l'efficacité de vos soins de jour ou de nuit."
      },
      usage: {
        ar: "بعد تنظيف الوجه، بللي قطنة نظيفة بالكامل بالتونر وامسحي بها وجهك ورقبتك بلطف من الداخل للخارج مرتين يومياً صباحاً ومساءً.",
        en: "After cleansing, soak a cotton pad with tonic water and gently sweep across your face and neck, avoiding the eyes. Use morning and night.",
        fr: "Après le nettoyage, imbiber un coton et passer délicatement sur l'ensemble du visage et du cou. Ne pas rincer. Utiliser matin et soir."
      },
      price: 205,
      originalPrice: 260,
      rating: 4.9,
      reviewsCount: 43,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/W46dXKsq/image.png",
      gallery: [
        "https://i.ibb.co/W46dXKsq/image.png"
      ]
    },
    {
      id: 'tightening_serum',
      name: {
        ar: "سيروم شد البشرة الفوري ومقاومة التجاعيد DXN",
        en: "DXN Instant Tightening Serum",
        fr: "Sérum Tenseur Instantané DXN"
      },
      subtitle: {
        ar: "سيروم مركّز فائق الفعالية لشد التجاعيد والخطوط التعبيرية ونحت الخدود",
        en: "Advanced Wrinkle Correction, Firming Dermal Matrix & Lifted Contours",
        fr: "Correction Anti-Rides Globale, Matrice Cutanée Fortifiée & Effet Tenseur"
      },
      desc: {
        ar: "سيروم مركز فائق الفعالية يعمل على شد البشرة وتنعيم الخطوط التعبيرية بشكل فوري ليعيد لوجهك الشباب والمظهر المصقول.",
        en: "A powerful, concentrated fast-acting serum that instantly smooths skin texture, tightens facial contours, and targets wrinkles.",
        fr: "Un sérum puissant et concentré à action rapide qui lisse instantanément le grain de peau, retend les contours et cible les rides."
      },
      longDesc: {
        ar: "استمتعي ببشرة شابة مشدودة على الفور بفضل سيروم الشد الفوري المتقدم من دي إكس إن. تركيبته الثورية الغنية بمركبات ببتيدية وعناصر طبيعية مركزة تخترق طبقات الجلد بسرعة لتعمل على ملأ الخطوط التعبيرية وحول الفم، وشد ترهلات الخدود والرقبة. يغذي هذا السيروم مصفوفة الكولاجين الطبيعية بالجلد، مما يمنحه تماسكاً ملحوظاً ونعومة فائقة تبدو طبيعية وخالية تماماً من العيوب من اليوم الأول للاستخدام.",
        en: "Restore your skin's youthful tightness and bounce with the DXN Instant Tightening Serum. Formulated with state-of-the-art bioactive firming peptides and antioxidants, this powerful serum target sagging areas, dynamic expression lines, and loss of facial definition. It provides an immediate noticeable lifting and smoothing effect, plumping the skin from within. Use it consistently to reinforce skin structure, fight oxidative aging, and unlock a beautifully sculpted and radiant appearance.",
        fr: "Redéfinissez la jeunesse de vos traits avec le Sérum Tenseur Instantané DXN. Véritable concentré de technologie anti-âge, ce sérum cible le relâchement cutané, les rides installées et la perte de fermeté. Ses peptides actifs stimulent intensément la production d'éléments de soutien de l'épiderme pour reconstruire le maillage de la peau. Sa texture fluide et soyeuse pénètre immédiatement pour lifter les contours du visage et lisser les rides, offrant un teint visiblement rajeuni et reposé."
      },
      usage: {
        ar: "ضعي 3-4 قطرات على أطراف أصابعك، وزعيها على الوجه والرقبة مع التركيز على مناطق التجاعيد، دلكي بلطف للأعلى مرتين يومياً.",
        en: "Apply 3-4 drops to clean face and neck, focusing on areas prone to sagging or fine lines (forehead, around eyes and mouth). Massage upwards until absorbed.",
        fr: "Appliquer 3 à 4 gouttes sur le visage et le cou propres, en insistant sur les zones sujettes au relâchement. Masser de bas en haut. Matin et soir."
      },
      price: 327,
      originalPrice: 410,
      rating: 5.0,
      reviewsCount: 51,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/wrZYpyHg/image.png",
      gallery: [
        "https://i.ibb.co/wrZYpyHg/image.png",
        "https://i.ibb.co/LdjYCh5g/image.png",
        "https://i.ibb.co/yFNQZNdW/image.png"
      ]
    },
    {
      id: 'hydrating_face_cream',
      name: {
        ar: "كريم مرطب ومغذي فائق الفعالية للوجه DXN",
        en: "DXN Hydrating Face Cream",
        fr: "Crème Visage Hydratante DXN"
      },
      subtitle: {
        ar: "تغذية وحماية عميقة لحاجز الجلد، مرونة ونعومة تدوم طويلاً",
        en: "Deep Barrier Hydration, Skin Elasticity Boost & Long-Lasting Silky Comfort",
        fr: "Hydratation Protectrice Profonde, Confort Durable & Souplesse Absolue"
      },
      desc: {
        ar: "كريم مرطب غني يغمر البشرة برطوبة عميقة تدوم طوال اليوم، يقوي حاجز الحماية الطبيعي ويجعل الجلد ليداً كالحرير.",
        en: "An ultra-nourishing facial cream that locks in long-lasting moisture, strengthens skin defenses, and leaves skin plump and silky.",
        fr: "Une crème visage ultra-nourrissante qui retient l'hydratation durablement, renforce les défenses et rend la peau repulpée et soyeuse."
      },
      longDesc: {
        ar: "امنحي بشرتك الجافة أو المتعبة التغذية الفائقة التي تستحقها مع كريم الترطيب المتقدم من دي إكس إن. يتميز هذا الكريم بقوام غني مخملي يوفر رطوبة فائقة وعميقة تصل إلى أعمق طبقات الجلد ويحبسها لأكثر من 24 ساعة. غني بالأحماض الدهنية الحيوية والدهون النباتية المجددة، يعيد الكريم بناء وترميم جدار الحماية التالف للبشرة لمنع فقدان الرطوبة وحمايتها من التقلبات البيئية، لتبدو بشرتك ممتلئة، لينة، ونضرة بلا جفاف.",
        en: "Indulge in deep, restorative moisture with the DXN Hydrating Face Cream. Engineered with a powerful blend of plant oils and protective lipids, this high-performance moisturizer repairs dry, tired skin by reinforcing the lipid barrier. It delivers intensive moisture that penetrates deeply, preventing water loss for over 24 hours. The rich, non-greasy texture melts comfortably into your skin, eliminating dry patches, restoring elasticity, and leaving behind a wonderfully plumped, velvety soft feel.",
        fr: "Inondez votre peau d'un confort absolu avec la Crème Visage Hydratante DXN. Sa formule généreuse associe des lipides précieux et des agents protecteurs pour réparer intensément la barrière d'hydratation des peaux sèches et déshydratées. Elle diffuse une hydratation continue pendant 24 heures, luttant ainsi contre le dessèchement et la perte d'éclat. Sa texture veloutée fond sur la peau sans laisser de film collant, pour révéler un visage incroyablement souple, soyeux et visiblement pulpeux."
      },
      usage: {
        ar: "وزعي كمية مناسبة من الكريم على وجهك ورقبتك بعد السيروم، دلكي بحركات خفيفة متجهة للأعلى حتى يمتص بالكامل صباحاً ومساءً.",
        en: "Apply a small amount to clean face and neck daily (morning and evening) after your serum. Smooth gently in upward and outward motions.",
        fr: "Appliquer matin et soir sur le visage et le cou après le sérum. Faire pénétrer par légers massages du centre du visage vers l'extérieur."
      },
      price: 289,
      originalPrice: 360,
      rating: 4.9,
      reviewsCount: 57,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/v6Ld64Fq/image.png",
      gallery: [
        "https://i.ibb.co/v6Ld64Fq/image.png",
        "https://i.ibb.co/35gVbzTR/image.png",
        "https://i.ibb.co/ZRQ3Mh60/image.png"
      ]
    },
    {
      id: 'sunscreen_spf50',
      name: {
        ar: "واقي الشمس الفاخر للوجه SPF 50 DXN",
        en: "DXN Face Sunscreen SPF 50",
        fr: "Écran Solaire Visage SPF 50 DXN"
      },
      subtitle: {
        ar: "وقاية شاملة وخفيفة للغاية من أشعة الشمس، مكافحة الشيخوخة وملمس غير مرئي",
        en: "Maximum Broad-Spectrum UV Defense, Anti-Aging Support & Matte Invisible Finish",
        fr: "Haute Protection Solaire UVA/UVB, Éclat Préservé & Fini Mat Invisible"
      },
      desc: {
        ar: "واقي شمس متطور بمعامل حماية SPF 50 يوفر وقاية كاملة من الأشعة فوق البنفسجية الضارة بتركيبة خفيفة غير مرئية وخالية من الدهون.",
        en: "A high-performance SPF 50 sunscreen offering supreme broad-spectrum UV protection with a lightweight, invisible, non-greasy finish.",
        fr: "Un écran solaire SPF 50 haute performance offrant une protection UV maximale avec un fini léger, invisible et non gras."
      },
      longDesc: {
        ar: "احمي بشرتك بذكاء وأمان يومياً مع واقي الشمس الفاخر من دي إكس إن. تركيبته المتطورة توفر حاجزاً واقياً فعالاً بمعامل حماية SPF 50 يحمي البشرة من أشعة الشمس العميقة (UVA) المسببة للتجاعيد والبقع الداكنة وأشعة (UVB) المسببة للحروق. يتميز بقوامه فائق الخفة وسريع الامتصاص الذي لا يترك أي طبقة بيضاء أو دهنية مزعجة على البشرة، مما يجعله مثالياً تحت المكياج لجميع أنواع البشرة وحامياً ممتازاً من علامات الشيخوخة الناتجة عن الشمس.",
        en: "Shield your skin against sun damage and premature aging with the DXN Face Sunscreen SPF 50. Offering maximum broad-spectrum UVA and UVB defense, this advanced lightweight sunscreen blocks harmful solar rays while infusing the skin with protective antioxidants. The ultra-fluid, non-comedogenic formula absorbs instantly with zero white cast or greasy finish, leaving a naturally beautiful matte effect. It is a vital daily shield that keeps your skin perfectly hydrated, bright, and safe.",
        fr: "Préservez le capital jeunesse de votre visage avec l'Écran Solaire Visage SPF 50 DXN. Offrant une très haute protection à large spectre contre les UVA et UVB, ce soin solaire d'exception prévient efficacement l'apparition des taches pigmentaires et des rides dues au soleil. Sa formule fluide révolutionnaire pénètre instantanément sans laisser de traces blanches ni de film gras, assurant un fini mat et totalement invisible. Une protection quotidienne indispensable et agréable pour une peau éclatante et protégée."
      },
      usage: {
        ar: "ضعي كمية سخية بالتساوي على وجهك ورقبتك قبل التعرض للشمس بـ 15-20 دقيقة. أعيدي وضعه بانتظام خاصة بعد السباحة أو التعرق.",
        en: "Apply generously and evenly to face and neck 15-20 minutes before sun exposure. Reapply every 2 hours, or after swimming, sweating, or toweling.",
        fr: "Appliquer généreusement sur le visage et le cou 15 minutes avant l'exposition. Renouveler l'application fréquemment, surtout après avoir nagé ou transpiré."
      },
      price: 381,
      originalPrice: 480,
      rating: 5.0,
      reviewsCount: 65,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/Y77zrCpY/image.png",
      gallery: [
        "https://i.ibb.co/Y77zrCpY/image.png",
        "https://i.ibb.co/DP5kk5dv/image.png",
        "https://i.ibb.co/RTdTyScb/image.png"
      ]
    },
    {
      id: 'cooling_after_sun',
      name: {
        ar: "كريم مهدئ بعد التعرض للشمس DXN",
        en: "DXN Cooling After Sun",
        fr: "Soin Après-Soleil Rafraîchissant DXN"
      },
      subtitle: {
        ar: "تهدئة فورية، ترطيب عميق وإصلاح فائق للبشرة بعد أشعة الشمس",
        en: "Instant Calming, Intensive Hydration & Deep Restorative Sun Relief",
        fr: "Apaisement Immédiat, Réhydratation Intense & Réparation Cutanée"
      },
      desc: {
        ar: "كريم ملطف ومنعش بعد الشمس صُمم لتهدئة وترطيب وإصلاح البشرة المجهدة والمعرضة لأشعة الشمس بشكل فوري.",
        en: "A soothing and refreshing after-sun cream designed to instantly calm, hydrate, and repair sun-exposed skin.",
        fr: "Une crème après-soleil apaisante et hydratante conçue pour calmer instantanément, hydrater et réparer la peau après l'exposition."
      },
      longDesc: {
        ar: "امنحي بشرتك العناية المهدئة التي تستحقها بعد يوم مشمس مع كريم بعد الشمس من دي إكس إن. تركيبته الفريدة غنية بالمواد الطبيعية النشطة التي تخفض درجة حرارة الجلد فوراً وتزيل الإحساس بالوهج والاحمرار. يعمل على توفير ترطيب مكثف وعميق يحمي الخلايا من التقشر والجفاف، مما يساعد في الاحتفاظ بلون أسمر متناسق وجذاب لفترة أطول مع ترميم حاجز البشرة المتعب.",
        en: "Pamper your skin after a day in the sun with the DXN Cooling After Sun cream. This premium soothing lotion delivers an immediate cooling sensation to calm sunburn, reduce redness, and ease hot skin feelings. Packed with restorative botanical extracts, it replenishes lost moisture at a cellular level, preventing dry peeling and helping to prolong your beautiful tan. Its ultralight texture absorbs instantly without stickiness, leaving your skin soft, refreshed, and completely relieved.",
        fr: "Offrez à votre peau un véritable bain de fraîcheur après l'exposition solaire avec le Soin Après-Soleil Rafraîchissant DXN. Sa formule experte calme instantanément les sensations d'échauffement, apaise les rougeurs et désaltère intensément l'épiderme fatigué. Enrichi en actifs réparateurs d'origine naturelle, ce soin restaure la barrière cutanée, empêche la desquamation et aide à prolonger un bronzage lumineux et uniforme. Sa texture gel-crème légère pénètre en un clin d'œil, laissant la peau souple, douce et délicieusement parfumée."
      },
      usage: {
        ar: "ضعي كمية سخية على بشرة نظيفة وجافة بعد التعرض للشمس. دلكي بلطف على الوجه والجسم حتى يمتص بالكامل. أعيدي التطبيق عند الحاجة.",
        en: "Apply generously to clean, dry skin after sun exposure. Gently massage over face and body until fully absorbed. Reapply whenever skin feels dry or hot.",
        fr: "Appliquer généreusement sur une peau propre et sèche après chaque exposition au soleil. Masser doucement sur le visage et le corps jusqu'à pénétration complète. Renouveler l'application si nécessaire."
      },
      price: 183,
      originalPrice: 250,
      rating: 4.9,
      reviewsCount: 38,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/xqQCwxJw/image.png",
      gallery: [
        "https://i.ibb.co/xqQCwxJw/image.png",
        "https://i.ibb.co/qYCYvd4Y/image.png",
        "https://i.ibb.co/Df6CXRzh/image.png",
        "https://i.ibb.co/CKYgXqHG/image.png"
      ]
    },
    {
      id: 'tanning_oil',
      name: {
        ar: "زيت التسمير الطبيعي الفاخر DXN",
        en: "DXN Natural Tanning Oil",
        fr: "Huile de Bronzage Naturelle DXN"
      },
      subtitle: {
        ar: "لون برونزي ذهبي ساحر، تغذية مكثفة ولمعان حريري رائع للجلد",
        en: "Rich Golden Glow, Deep Moisture & Luminous Satin Skin Finish",
        fr: "Hâle Doré Intense, Haute Nutrition & Fini Satiné Éclatant"
      },
      desc: {
        ar: "زيت طبيعي فاخر لتسمير البشرة (برونزاج) غني بالزيوت النباتية المغذية لمنح جسمك لوناً ذهبياً عميقاً وجذاباً يدوم طويلاً.",
        en: "A luxurious natural tanning oil enriched with nourishing plant oils to deliver a deep, glowing, and long-lasting golden tan.",
        fr: "Une huile de bronzage naturelle et luxueuse, enrichie en huiles végétales nourrissantes pour un bronzage doré intense et durable."
      },
      longDesc: {
        ar: "احصلي على لون برونزي ذهبي مذهل وطبيعي بالكامل مع زيت التسمير الفاخر من دي إكس إن. تركيبته الرائعة تم تطويرها بمزيج فريد من أجود الزيوت النباتية المغذية التي تسرع عملية التسمير الآمن تحت أشعة الشمس مع حماية الجلد من الجفاف والتقشر. يغمر البشرة بلمعان مخملي حريري جذاب ويعزز من مرونة خلايا الجلد ليترك ملمسه فائق النعومة برائحة استوائية ساحرة تأخذك إلى عالم آخر.",
        en: "Achieve a flawless, sun-kissed golden glow with the DXN Natural Tanning Oil. Expertly blended with premium botanical oils, this luxury formula accelerates a rapid, deep, and beautifully even tan while keeping your skin deeply hydrated and soft. It provides intense nourishment to defend against the drying effects of sun and wind, leaving a gorgeous, glossy satin sheen without a heavy greasy residue. Indulge in its tropical fragrance and show off a radiant, long-lasting tan.",
        fr: "Obtenez un bronzage doré, rapide et d'une luminosité absolue avec l'Huile de Bronzage Naturelle DXN. Conçue avec un cocktail d'huiles botaniques précieuses, cette huile de luxe accélère le bronzage naturel tout en nourrissant intensément l'épiderme. Elle empêche le dessèchement cutané lié au soleil et au vent, préserve l'élasticité de la peau et lui confère un fini satiné absolument somptueux. Son parfum exotique délicat enveloppe votre corps pour un moment de pur plaisir solaire."
      },
      usage: {
        ar: "وزعي كمية مناسبة بالتساوي على كامل الجسم قبل التعرض للشمس. أعيدي تطبيقه بانتظام للحفاظ على الترطيب واللون المثالي.",
        en: "Apply evenly over your entire body before sun exposure. Reapply frequently, especially after swimming or drying off, to maintain hydration and enhance your tan.",
        fr: "Appliquer uniformément sur l'ensemble du corps avant l'exposition solaire. Renouveler régulièrement l'application, en particulier après avoir nagé ou s'être essuyé, pour un bronzage sublimé."
      },
      price: 261,
      originalPrice: 350,
      rating: 4.8,
      reviewsCount: 45,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/G3kgyBjj/image.png",
      gallery: [
        "https://i.ibb.co/G3kgyBjj/image.png"
      ]
    },
    {
      id: 'sunscreen_spf30',
      name: {
        ar: "مستحلب واقي الشمس SPF 30 DXN",
        en: "DXN Sunscreen Emulsion SPF 30",
        fr: "Émulsion Solaire Protectrice SPF 30 DXN"
      },
      subtitle: {
        ar: "حماية يومية مرطبة واسعة الطيف لمنع ظهور بقع الشمس وعلامات تقدم السن",
        en: "Daily Hydrating Broad-Spectrum Defense, Age-Defying & Light Touch Protection",
        fr: "Protection Quotidienne Hydratante SPF 30, Anti-Taches & Toucher Soyeux"
      },
      desc: {
        ar: "مستحلب مرطب وواقي من الشمس بمعامل SPF 30 يحمي البشرة من الأشعة فوق البنفسجية ويحافظ على نعومتها وراحتها الطبيعية.",
        en: "A hydrating protective sun emulsion SPF 30 that guards your face against UV rays while maintaining soft, comfortable skin.",
        fr: "Une émulsion solaire protectrice et hydratante SPF 30 qui protège efficacement le visage tout en maintenant la souplesse de la peau."
      },
      longDesc: {
        ar: "حافظي على جمال بشرتك ونضارتها الطبيعية يومياً مع مستحلب واقي الشمس SPF 30 من دي إكس إن. يوفر هذا المستحلب حماية متوازنة وفعالة واسعة المدى من الأشعة فوق البنفسجية بنوعيها (A) و (B) لحماية الخلايا من التلف والحد من ظهور التصبغات وبقع الشمس الداكنة. تتميز تركيبته بقوام مستحلب خفيف للغاية يرطب خلايا الوجه بعمق دون أن يثقل كاهلها أو يسد المسام، مما يمنحك بشرة لينة نضرة ومحمية طوال اليوم.",
        en: "Preserve your skin's youthful luminosity with the DXN Sunscreen Emulsion SPF 30. This daily-wear protective emulsion shields your skin from harmful UVA and UVB radiation, preventing dark spots, sunburns, and premature skin aging. Infused with hydrating nutrients, its lightweight, fluid texture melts seamlessly into the skin, delivering essential moisture without leaving any greasy residue. Ideal for all skin types, it serves as a wonderful protective base under makeup or on its own.",
        fr: "Préservez l'éclat de votre visage au quotidien avec l'Émulsion Solaire Protectrice SPF 30 DXN. Cette formule légère à large spectre offre une défense efficace contre les rayons UVA et UVB, luttant contre le vieillissement cutané prématuré et l'apparition de taches brunes. Gorgée d'actifs hydratants, sa texture fluide pénètre instantanément sans alourdir la peau ni boucher les pores. Elle laisse le teint frais, la peau souple et parfaitement hydratée, constituant une base idéale avant le maquillage."
      },
      usage: {
        ar: "ضعي المستحلب على وجهك ورقبتك قبل الخروج في الشمس بـ 15 دقيقة. دلكي بلطف حتى يمتص بالكامل. يمكن استخدامه كأساس يومي رائع للمكياج.",
        en: "Apply to face and neck 15 minutes before sun exposure. Massage gently until absorbed. Perfect for daily wear as a protective moisturizer or makeup base.",
        fr: "Appliquer sur le visage et le cou 15 minutes avant de s'exposer. Masser délicatement jusqu'à absorption complète. Idéal au quotidien comme crème de jour protectrice."
      },
      price: 318,
      originalPrice: 420,
      rating: 4.9,
      reviewsCount: 52,
      hasVariants: false,
      primaryImage: "https://i.ibb.co/9HFcqyq0/image.png",
      gallery: [
        "https://i.ibb.co/9HFcqyq0/image.png"
      ]
    },
    {
      id: 'potenzhi',
      name: {
        ar: "بوتنزي دي إكس إن العضوي",
        en: "DXN Potenzhi Capsules",
        fr: "DXN Potenzhi Gélules"
      },
      subtitle: {
        ar: "كبسولات الحيوية والتحمل وبناء طاقة الخلايا والتحمل العضلي للرجال",
        en: "Premium Organic Stamina & Male Vitality Booster",
        fr: "Booster d'endurance, de circulation et de vitalité masculine"
      },
      desc: {
        ar: "مكمل عشبي عضوي فاخر من أقوى الأعشاب المنشطة لرفع مستويات الطاقة البدنية، تنشيط الدورة الدموية، والتحمل العضلي الفائق.",
        en: "A premium, certified organic health booster made from an exquisite blend of high-potency tonic herbs to enhance overall physical endurance, circulation, and libido.",
        fr: "Un complément biologique de prestige élaboré à partir d'un mélange d'herbes toniques puissantes pour maximiser l'endurance physique, la circulation et la vigueur."
      },
      longDesc: {
        ar: "يجمع بوتنزي دي إكس إن العضوي بين مستخلصات قوية وعالية التركيز من جذور تونغكات علي الشهيرة، وعشبة بوتيا سوبربا الفريدة، وفطر الكورديسبس النشط. يعمل هذا المزيج المتكامل كبرنامج نخبة لإعادة بناء حيوية الخلايا، دعم صحة الشرايين وتدفق الدم، والتخلص الفعال من الوهن والضعف البدني، وزيادة القدرة على التحمل واللياقة البدنية بطريقة طبيعية وآمنة بالكامل.",
        en: "DXN Potenzhi delivers an elite organic synergy of premium Tongkat Ali roots, Butea Superba, and active Cordyceps mushroom. Formulated as a high-potency tonic therapy, it helps naturally restore metabolic stamina, optimize blood circulation, protect cardiac health, and support sustained raw biological strength, endurance, and masculine vitality without any synthetic additives or dependency.",
        fr: "DXN Potenzhi associe en parfaite synergie biologique du Tongkat Ali d'exception, du Butea Superba et du Cordyceps actif. Formulé comme une cure de force suprême, ce complexe revitalise le métabolisme interne, soutient un flux sanguin optimal vers les muscles et le cœur, combat la fatigue chronique et rétablit une endurance et une virilité naturelles intenses."
      },
      usage: {
        ar: "تناول كبسولة واحدة إلى كبسولتين يومياً مع كوب كبير من الماء الدافئ قبل الفطور بـ 30 دقيقة. للحصول على أفضل النتائج، ينصح بالاستمرار على كبسولات بوتنزي كروتين يومي.",
        en: "Take 1 to 2 capsules daily with a large glass of warm water 30 minutes before breakfast. Consistently use daily to support permanent cellular stamina and natural vigor.",
        fr: "Prendre 1 à 2 gélules par jour avec un grand verre d'eau tiède le matin, de préférence 30 minutes avant le petit-déjeuner pour une assimilation idéale."
      },
      price: 434,
      originalPrice: 550,
      rating: 4.9,
      reviewsCount: 154,
      hasVariants: true,
      variants: [
        {
          id: 'potenzhi_30',
          name: {
            ar: "بوتنزي دي إكس إن (30 كبسولة)",
            en: "DXN Potenzhi (30 Capsules)",
            fr: "DXN Potenzhi (30 Gélules)"
          },
          price: 434,
          originalPrice: 550,
          primaryImage: "https://i.ibb.co/G4Cnjf7y/image.png",
          gallery: [
            "https://i.ibb.co/G4Cnjf7y/image.png",
            "https://i.ibb.co/FLz3yhff/image.png"
          ]
        },
        {
          id: 'potenzhi_90',
          name: {
            ar: "بوتنزي دي إكس إن (90 كبسولة) - توفير",
            en: "DXN Potenzhi (90 Capsules) - Eco",
            fr: "DXN Potenzhi (90 Gélules) - Éco"
          },
          price: 1066,
          originalPrice: 1300,
          primaryImage: "https://i.ibb.co/XryWc6r4/image.png",
          gallery: [
            "https://i.ibb.co/XryWc6r4/image.png",
            "https://i.ibb.co/Q78cMC16/image.png",
            "https://i.ibb.co/k283GT3D/image.png",
            "https://i.ibb.co/sdn0tDxF/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/6cYHCwqQ/image.png",
      gallery: [
        "https://i.ibb.co/6cYHCwqQ/image.png",
        "https://i.ibb.co/XryWc6r4/image.png",
        "https://i.ibb.co/Q78cMC16/image.png",
        "https://i.ibb.co/G4Cnjf7y/image.png",
        "https://i.ibb.co/FLz3yhff/image.png"
      ]
    },
    {
      id: 'moricinia',
      name: {
        ar: "عصير موريسينيا المخمر الفاخر",
        en: "DXN Moricinia Juice",
        fr: "Jus DXN Moricinia"
      },
      subtitle: {
        ar: "عصير ثمرة النوني المركز والغني بالأنزيمات الهاضمة وترميم القولون والمعدة",
        en: "Elite Concentrated Fermented Noni Juice Elixir",
        fr: "Pur Jus de Noni Concentré Fermenté pour le Côlon & l'Immunité"
      },
      desc: {
        ar: "عصير فاخر مخمر بالكامل ومستخلص من ثمرة النوني (الموريندا) العضوية. يتميز بكثافة أنزيمات هائلة ومضادات أكسدة ممتازة لإصلاح الجهاز الهضمي والقولون.",
        en: "An elite, concentrated botanical beverage made from 100% organic fermented Morinda Citrifolia (Noni) juice. Unmatched natural enzyme density to heal digestion and balance cells.",
        fr: "Une boisson d'exception élaborée à partir de pur jus fermenté de Morinda Citrifolia (Noni) biologique. Riche en enzymes actives pour régénérer la flore et calmer le côlon."
      },
      longDesc: {
        ar: "يعد عصير موريسينيا دي إكس إن (موريندا سيتريفوليا) كنزاً حقيقياً للأنزيمات الهاضمة الحية والبوليسيكاريدات والعديد من المغذيات الحيوية. تتم زراعته وتخميره بعناية فائقة لضمان تركيزه الاستثنائي وفعاليته القوية في حماية بطانة المعدة وترميم جدار القولون العصبي، تقوية المفاصل والأعصاب، والحد من آلام الجسم المزمنة والإجهاد، مما يجعله الإكسير الطبيعي الأقوى لإعادة تشغيل الحيوية والمناعة العامة للجسم.",
        en: "DXN Moricinia represents the pinnacle of fermented nutrition. Pressed from wild-harvested organic Noni (Morinda Citrifolia) fruits and naturally aged to perfection, it contains a massive active load of digestive enzymes, proxeronine, and vitamins. Moricinia works directly to repair intestinal walls, soothe ulcerative colitis or irritable bowel syndrome (IBS), promote normal bowel regularity, and cleanse the lymphatic system. Additionally, its natural analgesic values alleviate joint stiffness, muscular aches, and peripheral nerve pains, serving as a robust wellness shield.",
        fr: "Le jus Moricinia DXN est un joyau enzymatique de l'immunité. Issu de fruits de Noni (Morinda Citrifolia) biologiques mûris au soleil, ce nectar précieux est fermenté de façon artisanale et scientifique pour concentrer ses polysaccharides bioactifs et ses enzymes digestives vitales. Il répare en douceur la barrière intestinale, apaise les inflammations du côlon, élimine les toxines hépatiques, régule le transit et soulage les douleurs articulaires et nerveuses chroniques, insufflant un bien-être intérieur immédiat."
      },
      usage: {
        ar: "امزج ملعقتين كبيرتين (30 مل) من عصير موريسينيا في كوب من الماء الدافئ واشربه يومياً قبل وجبة الفطور أو الوجبات الرئيسية بـ 30 دقيقة لتحسين كفاءة الهضم وصحة القولون.",
        en: "Mix 2 tablespoons (30ml) of Moricinia juice into a glass of warm water and drink daily 30 minutes before breakfast or heavy meals to optimize digestion and intestinal comfort.",
        fr: "Mélanger 2 cuillères à soupe (30ml) dans un verre d'eau tiède et boire le matin à jeun ou avant un repas principal pour apaiser les intestins et faciliter l'absorption."
      },
      price: 300,
      originalPrice: 380,
      rating: 4.9,
      reviewsCount: 115,
      hasVariants: true,
      variants: [
        {
          id: 'moricinia_285',
          name: {
            ar: "عصير موريسينيا الصغير (285 مل)",
            en: "DXN Moricinia (285ml)",
            fr: "DXN Moricinia (285ml)"
          },
          price: 300,
          originalPrice: 380,
          primaryImage: "https://i.ibb.co/6cqgWG2d/image.png",
          gallery: [
            "https://i.ibb.co/6cqgWG2d/image.png",
            "https://i.ibb.co/sd2yxCVs/image.png"
          ]
        },
        {
          id: 'moricinia_700',
          name: {
            ar: "عصير موريسينيا الكبير (700 مل) - توفير",
            en: "DXN Moricinia (700ml) - Eco",
            fr: "DXN Moricinia (700ml) - Éco"
          },
          price: 586,
          originalPrice: 700,
          primaryImage: "https://i.ibb.co/Hfqs2qS4/image.png",
          gallery: [
            "https://i.ibb.co/Hfqs2qS4/image.png",
            "https://i.ibb.co/PZQG2d7g/image.png"
          ]
        }
      ],
      primaryImage: "https://i.ibb.co/Hfqs2qS4/image.png",
      gallery: [
        "https://i.ibb.co/Hfqs2qS4/image.png",
        "https://i.ibb.co/PZQG2d7g/image.png",
        "https://i.ibb.co/6cqgWG2d/image.png",
        "https://i.ibb.co/sd2yxCVs/image.png"
      ]
    }
  ];

  // Dynamically append all new products from allProducts to products
  allProducts.forEach(p => {
    // Exclude duplicates and merged product IDs
    const excludeIds = [
      'coffee', 'coffee3in1', 'spirulina', 'morinzhi', 'morinzhi-juice', 'morinzhi_juice', 'morinzhiJuice',
      'gano-oil', 'gano_oil', 'cocozhi', 'toothpaste', 'shampoo', 'soap', 'cordyceps',
      'limonzhi', 'reishilium', 'reishi_gano', 'cordypine',
      'ganocelium', 'roselle', 'spirulina-cereal', 'spirulinaCereal',
      'aloe-scrub', 'aloe-lotion', 'aloe-gel', 'aloeScrub', 'aloeLotion', 'aloeGel',
      'potenzhi-30', 'potenzhi-90', 'potenzhi_30', 'potenzhi_90',
      'moricinia-285', 'moricinia-700', 'moricinia_285', 'moricinia_700',
      'pack-energy', 'pack-immunity', 'pack-wellness', 'pack-golden-five', 'pack-golden-triangle'
    ];
    if (excludeIds.includes(p.id)) {
      return;
    }

    const exists = products.some(ep => ep.id === p.id || ep.id === p.id.replace(/-/g, '_'));
    if (!exists) {
      products.push({
        id: p.id,
        name: {
          ar: p.translations.ar.name,
          en: p.translations.en.name,
          fr: p.translations.fr.name
        },
        subtitle: {
          ar: p.translations.ar.subtitle,
          en: p.translations.en.subtitle,
          fr: p.translations.fr.subtitle
        },
        desc: {
          ar: p.translations.ar.desc,
          en: p.translations.en.desc,
          fr: p.translations.fr.desc
        },
        longDesc: {
          ar: p.translations.ar.details,
          en: p.translations.en.details,
          fr: p.translations.fr.details
        },
        usage: {
          ar: p.benefitsList?.ar?.join(". ") || p.translations.ar.name,
          en: p.benefitsList?.en?.join(". ") || p.translations.en.name,
          fr: p.benefitsList?.fr?.join(". ") || p.translations.fr.name
        },
        price: p.price,
        originalPrice: p.originalPrice || Math.round(p.price * 1.25),
        rating: p.rating || 4.8,
        reviewsCount: p.reviewsCount || 40,
        hasVariants: false,
        primaryImage: p.image,
        gallery: p.images && p.images.length > 0 ? p.images : [p.image]
      });
    }
  });

  // 2. Active Tab and State Management
  const getProductIndexById = (id: string | null | undefined) => {
    if (!id) return 0;
    const normalizedId = id.replace(/-/g, '_');
    const isMorinzhi = normalizedId.includes('morinzhi');
    const idx = products.findIndex(p => {
      if (isMorinzhi && p.id.includes('morinzhi')) return true;
      return p.id === id || p.id === normalizedId || p.id.replace(/-/g, '_') === normalizedId;
    });
    return idx >= 0 ? idx : 0;
  };


  const [activeProductIndex, setActiveProductIndex] = useState(() => getProductIndexById(productId));

  useEffect(() => {
    if (productId) {
      setActiveProductIndex(getProductIndexById(productId));
      setActiveImageIndex(0);
    }
  }, [productId]);

  const activeProduct = products[activeProductIndex];

  // Generalized Variant State initialized to first variant id of the active product
  const [selectedVariantId, setSelectedVariantId] = useState(() => {
    if (activeProduct.hasVariants && activeProduct.variants && activeProduct.variants.length > 0) {
      return activeProduct.variants[0].id;
    }
    return '';
  });

  // Keep variant id synchronized when active product changes
  useEffect(() => {
    if (activeProduct.hasVariants && activeProduct.variants && activeProduct.variants.length > 0) {
      setSelectedVariantId(activeProduct.variants[0].id);
    } else {
      setSelectedVariantId('');
    }
    if (activeProduct) {
      trackViewContent(activeProduct.id, activeProduct.name.en);
    }
  }, [activeProductIndex]);

  // Compute Active Product Data taking variants into account
  const getActiveProductData = () => {
    if (activeProduct.hasVariants && activeProduct.variants) {
      const activeVariant = activeProduct.variants.find(v => v.id === selectedVariantId) || activeProduct.variants[0];
      const computedStock = activeVariant.id === 'gl_360' ? 'very-limited' as const : activeVariant.id === '700ml' ? 'limited' as const : 'high' as const;
      return {
        ...activeProduct,
        price: activeVariant.price,
        originalPrice: activeVariant.originalPrice,
        primaryImage: activeVariant.primaryImage,
        gallery: activeVariant.gallery,
        selectedVariantName: activeVariant.name[lang],
        selectedVariantId: activeVariant.id,
        stock: computedStock
      };
    }
    return {
      ...activeProduct,
      selectedVariantName: null,
      selectedVariantId: null,
      stock: 'high' as const
    };
  };

  const currentProductData = getActiveProductData();

  // Active gallery image state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when product changes
  const handleProductChange = (index: number) => {
    setActiveProductIndex(index);
    setActiveImageIndex(0);
    const targetProduct = products[index];
    if (targetProduct) {
      const routeName = targetProduct.id.replace('_', '-');
      setActiveView(routeName);
    }
  };

  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    setActiveImageIndex(0);
  };

  // Zoom feature coordinates for Desktop hover
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });
  const zoomContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!zoomContainerRef.current) return;
    const { left, top, width, height } = zoomContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  // Mobile swipe/drag coordinates
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Go next image
      setActiveImageIndex((prev) => (prev + 1) % currentProductData.gallery.length);
    } else if (isRightSwipe) {
      // Go previous image
      setActiveImageIndex((prev) => (prev - 1 + currentProductData.gallery.length) % currentProductData.gallery.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Checkout Form State
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidMoroccanPhone = (num: string): boolean => {
    const cleaned = num.trim().replace(/[\s-]/g, '');
    const moroccoRegex = /^(06|07)\d{8}$|^\+212(6|7)\d{8}$/;
    return moroccoRegex.test(cleaned);
  };

  // Handle Order Submit via WhatsApp API
  const handleOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim() || !clientPhone.trim() || !clientCity.trim()) {
      setFormError(
        lang === 'ar'
          ? 'يرجى إدخال اسمك الكريم، المدينة، ورقم الهاتف لتأكيد الطلب.'
          : lang === 'fr'
          ? 'Veuillez remplir votre nom, ville et téléphone pour valider.'
          : 'Please input your name, city, and phone number to confirm.'
      );
      return;
    }

    if (!isValidMoroccanPhone(clientPhone)) {
      setFormError(lang === 'ar' ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setIsSubmitting(true);

    const activeProductTitle = currentProductData.name[lang];
    const unitPrice = currentProductData.price;
    const finalPrice = unitPrice * orderQuantity;
    const sizeStr = currentProductData.selectedVariantName ? ` [${currentProductData.selectedVariantName}]` : '';

    const message = `👑 طلب شراء جديد - مكملات DXN الفاخرة 👑

👤 الاسم الكريم للزبون: ${clientName}
📍 المدينة: ${clientCity}
🏠 عنوان التوصيل: ${clientAddress || 'غير محدد'}
📞 رقم الهاتف / واتساب: ${clientPhone}

---------------------------------------
📦 المنتج المطلوب:
• ${orderQuantity} × ${currentProductData.name.ar}${sizeStr}
💵 سعر الوحدة: ${unitPrice} درهم
💰 المجموع الإجمالي: ${finalPrice} درهم

🎁 المزايا المرفقة:
• الشحن: شحن محلي سريع وآمن بالكامل (COD)
• الضمان: منتج أصلي وموثوق 100% من مزارع دي إكس إن
• المتابعة: استشارة هاتفية مجانية مخصصة للمتابعة الصحية

---------------------------------------
🚀 أهلاً، أود تأكيد طلبي لمنتج ${activeProductTitle}${sizeStr} المذكور أعلاه. يرجى شحن الطرد في أقرب وقت ومراسلتي عبر الواتساب لتأكيد الشحن!`;

    const WHATSAPP_NUMBER = "212640386478";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      trackPurchase(finalPrice, 'MAD', [currentProductData.id]);
      try {
        const newWindow = window.open(whatsappUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        console.error("Popup blocked, trying direct redirect:", err);
        window.location.href = whatsappUrl;
      }
    }, 1200);
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(orderQuantity, currentProductData.price * orderQuantity);
    const el = document.getElementById('premium-checkout-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Text constants based on active language
  const text = {
    ar: {
      organicTag: "منتج عضوي معتمد 🌿",
      ratingSuffix: "تقييم حقيقي من زبائننا",
      priceLabel: "السعر الحصري بالدرهم:",
      originalPriceLabel: "بدلاً من:",
      discountBadge: "خصم حصري لفترة محدودة ✦",
      variantLabel: "اختر الحجم / السعة المناسبة:",
      buyNow: "اطلب الآن - الدفع عند الاستلام",
      contactSamira: "تواصل معنا مباشرة",
      whyChooseDxnTitle: "لماذا تختار منتجات دي إكس إن (DXN) العالمية؟",
      whyChooseDxnSubtitle: "جودة معترف بها دولياً تضمن عافيتكم وعافية عائلتكم في كل مكان",
      benefitsTitle: "منافع روتين الصحة المتكامل والعافية",
      benefitsSubtitle: "توليفة غنية توفر الدعم الشامل للجسم وخلايا المناعة لتستمتع بنشاط لا ينقطع",
      reviewsTitle: "شهادات وقصص نجاح من عائلتنا السعيدة",
      reviewsSubtitle: "آراء صادقة وتجارب حقيقية لزبائننا الأوفياء بمختلف المدن المغربية",
      faqTitle: "الأسئلة الشائعة حول المنتجات العضوية",
      faqSubtitle: "كل ما تود معرفته عن طريقة الاستعمال، الحفظ، ومزايا المكملات الغذائية للريادة الطبية",
      trustBadgesTitle: "أعلى معايير الأمان والتوثيق المعتمدة",
      checkoutTitle: "استمارة الطلب المباشر الفاخرة",
      checkoutSubtitle: "سجل معلوماتك المباشرة وسيتواصل معك فريق لالة سميرة فوراً لتأكيد شحن طردك وتوصيله مجاناً",
      fieldName: "الاسم الكامل الكريم *",
      fieldPhone: "رقم الهاتف / واتساب لتأكيد الشحن *",
      fieldCity: "المدينة بالمغرب *",
      fieldAddress: "عنوان التوصيل (اختياري)",
      fieldQuantity: "الكمية المطلوبة من العبوات:",
      totalPrice: "المجموع الكلي النهائي للدفع:",
      confirmOrder: "أكد طلبي الآن عبر واتساب 🚀",
      safeBadge: "🔒 دفع آمن تماماً عند الاستلام بمختلف المدن المغربية",
      stockAlert: "🚨 المخزون محدود جداً حالياً! بادر بتأكيد طلبك قبل نفاد الكمية",
      usageGuide: "طريقة الاستخدام المقترحة:",
      packsOption: "أيضاً في باقات متميزة بخصم إضافي"
    },
    en: {
      organicTag: "Certified Organic Wellness 🌿",
      ratingSuffix: "verified customer reviews",
      priceLabel: "Exclusive Premium Price:",
      originalPriceLabel: "Instead of:",
      discountBadge: "Limited-Time Exclusive Discount ✦",
      variantLabel: "Select Your Preferred Size / Variant:",
      buyNow: "Order Now - Cash on Delivery",
      contactSamira: "Contact Our Advisors",
      whyChooseDxnTitle: "Why Choose DXN International Brand?",
      whyChooseDxnSubtitle: "A decades-long legacy of high-grade purity, global trust, and premium safety",
      benefitsTitle: "Natural Support & Vital Lifestyle Benefits",
      benefitsSubtitle: "Crafted to strengthen biological immune cellular defense and sustain focus",
      reviewsTitle: "Luxury Testimonials & Healing Stories",
      reviewsSubtitle: "Honest feedback from our lovely clients enjoying sustained daily radiant energy",
      faqTitle: "Frequently Answered Botanical Questions",
      faqSubtitle: "Find precise professional tips on storage, correct dosage, and organic purity",
      trustBadgesTitle: "Elite Global Standards & Compliance Marks",
      checkoutTitle: "Direct Express COD Checkout",
      checkoutSubtitle: "Input your delivery details below. Lalla Samira's team will contact you to verify and ship your order",
      fieldName: "Your Noble Full Name *",
      fieldPhone: "WhatsApp Phone Number *",
      fieldCity: "City in Morocco *",
      fieldAddress: "Shipping Address (Optional)",
      fieldQuantity: "Required Packs Quantity:",
      totalPrice: "Final Combined Total to Pay:",
      confirmOrder: "Confirm My Order on WhatsApp 🚀",
      safeBadge: "🔒 100% Safe Cash on Delivery. Pay only when you hold it in hand",
      stockAlert: "🚨 Highly limited stock available. Secure yours today",
      usageGuide: "Suggested Usage Directions:",
      packsOption: "Also available in premium packs with an additional discount!"
    },
    fr: {
      organicTag: "Bien-être Biologique Certifié 🌿",
      ratingSuffix: "avis clients vérifiés",
      priceLabel: "Tarif Privilège Exclusif:",
      originalPriceLabel: "Au lieu de:",
      discountBadge: "Remise exclusive limitée ✦",
      variantLabel: "Choisissez le format / volume idéal:",
      buyNow: "Commander - Paiement à la Livraison",
      contactSamira: "Contacter Notre Conseillère",
      whyChooseDxnTitle: "Pourquoi Choisir la Marque DXN ?",
      whyChooseDxnSubtitle: "Une excellence reconnue mondialement pour préserver votre santé cellulaire",
      benefitsTitle: "Les Bienfaits Majeurs de notre Gamme Noble",
      benefitsSubtitle: "Des actifs purs conçus pour tonifier l'organisme et nourrir vos défenses naturelles",
      reviewsTitle: "Témoignages de Notre Communauté Maroc",
      reviewsSubtitle: "Retours d'expérience authentiques et récits inspirants de vitalité retrouvée",
      faqTitle: "Questions Fréquentes & Conseils d'Usage",
      faqSubtitle: "Tout savoir sur les dosages suggérés, la conservation et les labels de conformité",
      trustBadgesTitle: "Nos Labels de Confiance & Certifications Internationales",
      checkoutTitle: "Formulaire de Commande Directe Express",
      checkoutSubtitle: "Remplissez vos coordonnées pour recevoir votre colis. Expédition express à domicile",
      fieldName: "Votre Nom Complet *",
      fieldPhone: "Numéro WhatsApp de Livraison *",
      fieldCity: "Votre Ville au Maroc *",
      fieldAddress: "Adresse de Livraison (Optionnelle)",
      fieldQuantity: "Quantité d'unités souhaitée:",
      totalPrice: "Total Final de Votre Commande:",
      confirmOrder: "Confirmer Ma Commande sur WhatsApp 🚀",
      safeBadge: "🔒 Paiement 100% sécurisé en espèces lors de la livraison à domicile",
      stockAlert: "🚨 Stocks extremely limités ! Réservez votre cure dès aujourd'hui",
      usageGuide: "Conseils d'utilisation recommandés:",
      packsOption: "Également disponible dans nos packs exclusifs avec réduction !"
    }
  }[lang];

  // Why choose DXN Data
  const whyChooseDxnItems = [
    { title: { ar: "براند عالمي موثوق", en: "Trusted International Brand", fr: "Marque Internationale de Confiance" }, desc: { ar: "أكثر من 30 عاماً من النجاح والانتشار في 180 دولة حول العالم.", en: "Over 30 years of global success across 180 countries.", fr: "Plus de 30 ans d'histoire et de présence dans 180 pays." } },
    { title: { ar: "جودة المكونات والمصادر", en: "Premium Ingredient Sourcing", fr: "Ingrédients Purs et Sélectionnés" }, desc: { ar: "زراعة عضوية 100% في بيئات نقية خالية من الملوثات والمبيدات.", en: "100% organic farming in pristine zero-pollution reserves.", fr: "Culture organique garantie sans aucun pesticide ni contaminant." } },
    { title: { ar: "معايير صارمة للجودة", en: "Strict Quality Standards", fr: "Normes de Production Strictes" }, desc: { ar: "شهادات تصنيع دولية معتمدة مثل ISO وGMP وشهادة الحلال.", en: "International premium certifications including ISO, GMP, and Halal.", fr: "Certifications internationales d'élite comme ISO, GMP et Halal." } },
    { title: { ar: "ملايين العملاء السعداء", en: "Millions of Customers Worldwide", fr: "Des Millions de Consommateurs" }, desc: { ar: "ثقة راسخة من ملايين المستهلكين الذين يستمتعون بحيوية يومية مستدامة.", en: "Unshakable trust by millions experiencing radiant health.", fr: "Une fidélité de millions de personnes adeptes de la vitalité." } },
    { title: { ar: "منتجات موجهة للعافية", en: "Wellness-Oriented Products", fr: "Formules Axées sur la Santé" }, desc: { ar: "صيغ فريدة تدعم توازن الجسم الطبيعي وتطرد السموم بفعالية.", en: "Formulated precisely to detox cells and balance body alkalinity.", fr: "Des solutions intelligentes pour purifier et alcaliniser l'organisme." } },
    { title: { ar: "سمعة تاريخية طيبة", en: "Long-Standing Reputation", fr: "Réputation Historique Solide" }, desc: { ar: "ريادة عالمية لا تضاهى في مجال الفطور الطبية الطبيعية المتميزة.", en: "Unmatched global leadership in premium adaptogenic mushrooms.", fr: "Le leader incontesté des compléments et des champignons adaptogènes." } },
    { title: { ar: "تواجد جغرافي عالمي", en: "Global Presence", fr: "Présence Globale d'Envergure" }, desc: { ar: "مكاتب وفروع رسمية تقدم الدعم والمتابعة للعملاء بمختلف القارات.", en: "Official state-of-the-art logistics and help centers worldwide.", fr: "Des centres d'assistance et de distribution sur tous les continents." } },
    { title: { ar: "التركيز على رضا العميل", en: "Customer Satisfaction Focus", fr: "Priorité Absolue au Client" }, desc: { ar: "نلتزم بتقديم أفضل المتابعات والاستشارات الفردية لتحقيق الفائدة القصوى.", en: "We provide dedicated high-end private coaching for the best results.", fr: "Un accompagnement sur-mesure pour vous garantir une efficacité maximale." } }
  ];

  // Benefits cards data
  const benefits = [
    { id: 1, title: { ar: "مكونات نقية فاخرة", en: "Premium Ingredients", fr: "Ingrédients Purs d'Élite" }, desc: { ar: "عناصر عضوية طبيعية من مزارع DXN المعزولة والصديقة للبيئة.", en: "Direct pure extracts from pristine ecological cultivation ponds.", fr: "Des actifs nobles cueillis au cœur de réserves naturelles d'exception." }, icon: Leaf, color: "bg-emerald-50 text-emerald-800 border-emerald-100" },
    { id: 2, title: { ar: "نمط حياة صحي متوازن", en: "Wellness Lifestyle", fr: "Rituel de Vie Sain" }, desc: { ar: "مكملات ترفع مستويات الطاقة وتحافظ على حيوية الشباب والتركيز الفكري.", en: "Sustained high vitality to thrive in your daily physical & brain tasks.", fr: "Harmonie globale du corps pour un tonus constant et un esprit serein." }, icon: Sparkle, color: "bg-amber-50 text-amber-800 border-amber-100" },
    { id: 3, title: { ar: "دعم مناعي يومي", en: "Daily Support", fr: "Soutien Immunitaire" }, desc: { ar: "تقوية خلايا الدفاع ومكافحة الالتهابات والأكسدة والسموم اليومية.", en: "Powerful botanical defense to neutralize free radicals and toxicity.", fr: "Bouclier protecteur puissant contre le stress oxydatif et la fatigue." }, icon: Activity, color: "bg-rose-50 text-rose-800 border-rose-100" },
    { id: 4, title: { ar: "تصنيع ذو جودة ممتازة", en: "Quality Manufacturing", fr: "Conception Pharmaceutique" }, desc: { ar: "أعلى تكنولوجيا التصنيع البارد لحفظ كامل القوة العلاجية للأنزيمات.", en: "Cold-press extraction technology maintaining raw biological values.", fr: "Technologie brevetée d'extraction à froid préservant les enzymes." }, icon: Award, color: "bg-blue-50 text-blue-800 border-blue-100" },
    { id: 5, title: { ar: "ماركة دولية موثوقة", en: "Trusted Brand", fr: "Confiance Absolue" }, desc: { ar: "علامة دي إكس إن الحائزة على ثقة الملايين حول العالم لأكثر من ثلاثة عقود.", en: "The gold standard of wellness backed by three decades of science.", fr: "La référence internationale du bien-être depuis plus de 30 ans." }, icon: ShieldCheck, color: "bg-teal-50 text-teal-850 border-teal-100" },
    { id: 6, title: { ar: "رضا زبائننا الأكيد", en: "Customer Satisfaction", fr: "Satisfaction Garantie" }, desc: { ar: "نرافقكم خطوة بخطوة باستشارات مجانية لضمان أفضل النتائج والراحة.", en: "Private tailored nutritional guidance to fulfill your health goals.", fr: "Une écoute attentive et des résultats visibles dès la première cure." }, icon: CheckCircle, color: "bg-purple-50 text-purple-800 border-purple-100" }
  ];

  // Luxury customer reviews with portrait photos
  const customerReviews = [
    { name: "أمين الودغيري", city: "الدار البيضاء", text: "استعملت فطر الكورديسبس دي إكس إن صراحة من أروع المنتجات! زادت نسبة نشاطي وتحملي فصال الرياضة ومبقيتش كنحس بالسخفة وضيق التنفس لي كان معذبني بزاف. جودة تستحق كل درهم.", rating: 5, photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { name: "خديجة الفاسي", city: "فاس", text: "سيريال السبيرولينا رجع هو الفطور المفضل لوليداتي حيت مغذي ولذيذ بزاف. عاونهم بزاف فالتركيز المدرسي وتحسنت صحة بنتي لي كان عندها نقص حاد ففقر الدم. شكراً جزيلاً لالة سميرة على جودة التوصيل.", rating: 5, photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" },
    { name: "المهدي بناني", city: "الرباط", text: "عصير المورينزي 700 مل كنز عظيم! ريح ليا القولون والمعدة بشكل لا يصدق، ومبقيتش كنعاني من الغازات والحرقة بعد الأكل. حتى جودة النوم ديالي تحسنت بزاف ورجعت كننعس مرتاح.", rating: 5, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
    { name: "سلوى تازي", city: "مراكش", text: "طلبت الكورديسبس وعصير المورينزي ووصلوني فوقت قياسي وتغليف فخامة. النصائح ديال سميرة قيمة بزاف وكتعطي الاستشارة بحب وصدق. كنشربهم دابا وعائلتي كاملة حسات بالفرق فالحيوية اليومية.", rating: 5, photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
    { name: "عمر الشاوي", city: "طنجة", text: "سيريال السبيرولينا رائع كوجبة خفيفة ومغذية للعمل، كتعطي طاقة سريعة وكتعدل المزاج بلا خمول. السبيرولينا ديال دي إكس إن نقية وكتعطي نتائج حقيقية من الأسبوع الأول.", rating: 5, photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" },
    { name: "ليلى الناصري", city: "أكادير", text: "عصير المورينزي هو روتيني اليومي دابا. جربت الحجم الصغير أول مرة وعجبني بزاف ودابا طلبت قرورة 700 مل. صراحة الهضم ديالي ارتاح بزاف وحسيت بالبشرة ديالي نورت. منتجات تستاهل مليون نجمة!", rating: 5, photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" }
  ];

  // FAQ Accordion questions & answers
  const faqs = [
    {
      q: { ar: "ما هي هذه المنتجات وكيف تختلف عن المكملات العادية؟", en: "What is this product & what makes it unique?", fr: "Qu'est-ce que ce produit et en quoi est-il unique ?" },
      a: {
        ar: "منتجات دي إكس إن (DXN) هي أغذية صحية ومكملات طبيعية عالية القيمة الغذائية تزرع بطريقة عضوية 100% في مزارع معزولة خالية من الكيماويات والمبيدات. تتميز باحتوائها على مركبات نشطة بيولوجياً كالفطر الريشي وجراثيمه الثمينة وعصير ثمرة النوني الاستوائية، التي تطهر الخلايا من السموم وتوازن وظائف الجسم وتقوي المناعة الذاتية.",
        en: "DXN products are premium alkaline foods and 100% certified organic adaptogens grown in pristine isolated reserves without chemical fertilizers. Fortified with elite botanical ingredients like active Reishi, premium Noni enzymes, and high-density vitamins, they target raw biological restoration, deep cellular detox, and pH balancing directly.",
        fr: "Les produits DXN sont des superaliments hautement alcalins issus de cultures 100% organiques brevetées. Riches en nutriments essentiels, enzymes de Noni fermentées, polysaccharides actifs et spores de Ganoderma, ils purifient le foie, régulent la flore digestive et renforcent le système immunitaire en profondeur."
      }
    },
    {
      q: { ar: "كيف يجب استعمال واستخدام كل منتج من هذه الباقة؟", en: "How should these products be used correctly?", fr: "Comment utiliser correctement chaque produit ?" },
      a: {
        ar: "• الكورديسبس: كبسولتان يومياً مع ماء دافئ قبل الوجبات بنصف ساعة.\n• سيريال السبيرولينا: يخلط كيس واحد في كوب من الماء الدافئ أو الحليب كفطور أو وجبة عشاء مغذية.\n• عصير المورينزي: تخلط ملعقتان كبيرتان (30 مل) في كوب ماء دافئ وتشرب صباحاً على الريق.",
        en: "• Cordyceps: Take 2 capsules daily with a glass of warm water 30 minutes before meals.\n• Spirulina Cereal: Pour 1 sachet into warm water or milk and enjoy as a nutritious breakfast or light dinner.\n• Morinzhi Juice: Mix 2 tablespoons (30ml) in warm water and drink in the morning on an empty stomach.",
        fr: "• Cordyceps : 2 capsules par jour avec de l'eau tiède 30 minutes avant le repas.\n• Céréales Spiruline : Mélanger 1 sachet dans du lait ou de l'eau chaude pour un petit-déjeuner nutritif.\n• Jus Morinzhi : Diluer 2 cuillères à soupe (30ml) dans de l'eau tiède, à consommer le matin à jeun."
      }
    },
    {
      q: { ar: "ما الذي يجعل عصير المورينزي من DXN متميزاً وفريداً للغاية؟", en: "What makes DXN Morinzhi Juice highly distinct?", fr: "Qu'est-ce qui rend le jus Morinzhi DXN si exceptionnel ?" },
      a: {
        ar: "عصير المورينزي دي إكس إن يتم إنتاجه من ثمار النوني الطازجة عبر عملية تخمير طبيعية دقيقة تحافظ على سلامة الأنزيمات الهاضمة الثمينة وترفع من كفاءتها الحيوية، كما أنه معزز بخلاصة الكركديه الطبيعي ليعطيه طعماً لذيذاً ويزوده بمضادات الأكسدة وفيتامين ج الفعال لصحة الأمعاء والقولون العصبي.",
        en: "Unlike generic pasteurized juices, DXN Morinzhi undergoes a strict natural fermentation process to maximize active digestive enzymes and biological xeronines. It is also blended with natural Roselle extract to offer premium organic antioxidants, Vitamin C, and a delightfully smooth, refreshing taste.",
        fr: "À l'inverse des jus pasteurisés classiques, le Morinzhi DXN est fermenté de façon naturelle pour libérer des enzymes actives hautement biodisponibles. Enrichi en Roselle sauvage, il regorge de vitamine C et de polyphénols antioxydants, parfaits pour apaiser l'estomac."
      }
    },
    {
      q: { ar: "كيف يجب تخزين وحفظ المنتجات للمحافظة على جودتها؟", en: "How should these organic products be stored?", fr: "Comment conserver au mieux ces produits naturels ?" },
      a: {
        ar: "يجب حفظ الكبسولات والسيريال في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة ورطوبة المطبخ. أما عصير المورينزي فيجب حفظه في الثلاجة (البراد) فور فتحه للاستعمال ومخضه جيداً قبل كل استخدام للمحافظة على فعالية الأنزيمات الحية ونضارتها.",
        en: "Store Cordyceps capsules and Spirulina Cereal in a cool, dry place away from direct sunlight. Once opened, Morinzhi Juice must be kept refrigerated and shaken gently before each use to fully preserve its live biological enzymes.",
        fr: "Conservez les capsules de Cordyceps et les Céréales dans un endroit sec et frais. Après ouverture, la bouteille de Morinzhi doit être obligatoirement conservée au réfrigérateur et remuée doucement avant chaque consommation."
      }
    },
    {
      q: { ar: "هل هذه المنتجات مناسبة للاستخدام والروتين اليومي المستمر؟", en: "Are these products suitable for regular daily use?", fr: "Ces produits sont-ils adaptés à une consommation quotidienne ?" },
      a: {
        ar: "نعم، هذه المنتجات طبيعية وآمنة بالكامل ومصنفة كأغذية ممتازة فائقة القيمة (Superfoods) وليست عقاقير كيميائية، لذا فهي مناسبة جداً للاستهلاك اليومي المستمر من قبل الأطفال والكبار والنساء لتعويض النقص الغذائي ورفع طاقة الجسم والمناعة بشكل طبيعي ومستدام.",
        en: "Absolutely. These are pure, bio-organic whole foods (Superfoods) rather than synthetic chemicals, making them exceptionally safe for long-term daily routines. They help systematically replenish vital minerals, support energy levels, and raise overall cellular defense safely.",
        fr: "Tout à fait. Ces compléments sont des superaliments d'origine 100% végétale et non des molécules chimiques de synthèse. Ils sont parfaitement adaptés et hautement recommandés pour un rituel de santé quotidien pour toute la famille."
      }
    },
    {
      q: { ar: "أي حجم وسعة من عصير المورينزي يجب علي اختيارها؟", en: "Which Morinzhi Juice size should I choose?", fr: "Quel format de jus Morinzhi devrais-je choisir ?" },
      a: {
        ar: "ننصح باختيار قارورة الحجم الكبير 700 مل لأنها توفر كورس عائلي متكامل يكفي للاستخدام اليومي المستمر لمدة أطول وبسعر اقتصادي ممتاز يوفر عليك مصاريف إعادة الشحن، بينما الحجم الصغير 285 مل ممتاز كبداية لتجربة طعم وفوائد المورينزي المدهشة بشكل فردي.",
        en: "We highly recommend the large 700ml bottle as it offers a comprehensive, family-sized supply suitable for sustained daily use with maximum economic value. The smaller 285ml bottle is perfect as a starter kit to sample the taste and immediate stomach comfort.",
        fr: "Nous recommandons vive et chaleureusement le grand format de 700ml car il permet de réaliser une cure complète et régulière pour un foyer, au meilleur rapport qualité-prix. Le format 285ml est idéal pour s'initier aux bienfaits du Noni."
      }
    },
    {
      q: { ar: "لماذا أشتري منتجات DXN من متجر لالة سميرة تحديداً؟", en: "Why buy DXN from Lalla Samira's Wellness Store?", fr: "Pourquoi commander chez l'espace Samira Naturale ?" },
      a: {
        ar: "متجر لالة سميرة هو الموزع الرسمي المعتمد لمنتجات DXN الأصلية 100% بالمغرب. نحن لا نبيع المنتجات فقط، بل نقدم مع كل طلب خدمة متميزة تشمل استشارة ومتابعة هاتفية مجانية مخصصة، تغليفاً صحياً راقياً، توصيلاً سريعاً لجميع المدن المغربية، والدفع الآمن عند الاستلام.",
        en: "Lalla Samira's Wellness Store is Morocco's certified official distributor of 100% authentic DXN health products. We guarantee factory-fresh batches, elegant medical-grade packaging, lightning-fast local shipping across Morocco, and premium customized coaching to guide you toward peak wellness.",
        fr: "La boutique Samira Naturale est le distributeur officiel certifié de produits authentiques DXN au Maroc. En commandant chez nous, vous bénéficiez d'un lot frais garanti, d'une livraison à domicile rapide gratuite, d'un colis soigné et de précieux conseils d'utilisation personnalisés."
      }
    }
  ];

  // Trust badges images / icons
  const trustBadges = [
    { label: { ar: "جودة ممتازة", en: "Premium Quality", fr: "Qualité Supérieure" } },
    { label: { ar: "منتج دي إكس إن الأصلي", en: "Original DXN Product", fr: "Produit DXN Original" } },
    { label: { ar: "طلب آمن 100%", en: "Secure Ordering", fr: "Commande Sécurisée" } },
    { label: { ar: "توصيل سريع مجاني", en: "Fast Delivery", fr: "Livraison Express" } },
    { label: { ar: "رضا زبائننا الأكيد", en: "Customer Satisfaction", fr: "Satisfaction Client" } },
    { label: { ar: "علامة دي إكس إن الموثوقة", en: "Trusted DXN Brand", fr: "Marque DXN de Confiance" } },
    { label: { ar: "منتج مرخص ومؤكد", en: "Verified Product", fr: "Produit Certifié" } },
    { label: { ar: "معايير جودة دولية", en: "International Quality Standards", fr: "Normes Internationales ISO" } }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] text-slate-800" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      
      {/* ================= NEW EXQUISITE BANNER SELECTOR ================= */}
      {productId ? (
        <div className="bg-[#FAF6F0] border-b border-emerald-100 py-3.5 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
          <span className="flex items-center gap-1.5 justify-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            👑 {lang === 'ar' ? 'أنت تتصفح العروض الحصرية وعافية السوبر فود الطبيعية!' : 'Vous explorez la page exclusive du SuperAliment Miracle.'}
          </span>
          <button
            onClick={() => {
              const isPack = productId && productId.toLowerCase().includes('pack');
              setActiveView(isPack ? 'packs' : 'store');
              window.scrollTo(0, 0);
            }}
            className="px-3 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer"
          >
            {lang === 'ar' 
              ? (productId && productId.toLowerCase().includes('pack') ? 'الرجوع لتشكيلة الباقات' : 'الرجوع للمتجر للتسوق العام') 
              : (productId && productId.toLowerCase().includes('pack') ? 'Retour aux Packs' : 'Retour au catalogue général')
            }
          </button>
        </div>
      ) : (
        <div className="bg-[#1E3A34] text-white py-12 relative overflow-hidden border-b border-[#C5A560]/30 shadow-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A560]/5 blur-3xl rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 text-[#C5A560] text-xs font-bold uppercase tracking-wider border border-[#C5A560]/20 mb-4 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {lang === 'ar' ? "صيدلية الطبيعة وباقة العافية الذهبية من DXN" : "DXN PREMIUM BOTANICAL COLLECTION"}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight accent-serif mb-3">
                {lang === 'ar' ? "اختر منتج العافية والنشاط المناسب لك" : "Choose Your Radiant Health Ritual"}
              </h1>
              <p className="text-xs sm:text-base text-[#FAF7F2]/80 max-w-2xl mx-auto font-medium">
                {lang === 'ar' ? "تصفح أفخر بدائل التغذية الاستوائية والحلول الطبيعية المطورة علمياً لدعم الخلايا وحيوية الأعضاء اليومية." : "Explore high-grade, scientifically back-tested organic adaptogens built for sustained vitality."}
              </p>
            </motion.div>

            {/* Tab Navigation for Products */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 select-none">
              {products.map((p, index) => {
                const isActive = activeProductIndex === index;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleProductChange(index)}
                    className={`px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm border ${
                      isActive
                        ? 'bg-[#C5A560] text-[#122621] border-[#C5A560] shadow-md font-black'
                        : 'bg-white/10 hover:bg-white/15 text-white border-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      {p.name[lang]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= MAIN HERO PRODUCT LAYOUT ================= */}
      <section className="py-4 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1. LEFT COLUMN: PRESTIGE IMAGE GALLERY */}
          <div className="lg:col-span-6 space-y-3 md:space-y-6">
            
            {/* Main Stage with Zoom on hover and swipe on mobile */}
            <div
              ref={zoomContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative aspect-square w-full rounded-2xl md:rounded-[2.5rem] bg-white border-2 border-[#EADFC9]/30 p-1 md:p-12 flex items-center justify-center overflow-hidden shadow-md md:shadow-lg select-none group cursor-zoom-in"
            >
              {/* Internal Decorative Gold Thread Frame */}
              <div className="absolute inset-2 md:inset-4 border border-dashed border-[#C5A560]/20 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none z-10"></div>
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentProductData.id}-${activeImageIndex}`}
                  src={currentProductData.gallery[activeImageIndex]}
                  alt={currentProductData.name[lang]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-[85%] h-full object-contain filter drop-shadow-[0_15px_30px_rgba(30,58,52,0.12)] p-2 md:p-0 relative z-10 pointer-events-none"
                />
              </AnimatePresence>

              {/* Desktop Zoom Overlay Lens */}
              <div
                className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 rounded-[2.5rem] hidden md:block opacity-0 group-hover:opacity-100 border-2 border-[#C5A560]/50 shadow-2xl"
                style={{
                  ...zoomStyle,
                  backgroundImage: `url(${currentProductData.gallery[activeImageIndex]})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '200%'
                }}
              />

              {/* Swipe/Slide Help indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#122621]/70 backdrop-blur-xs text-white text-[9px] font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1 opacity-80 md:hidden">
                <Zap className="w-3 h-3 text-[#C5A560]" />
                <span>{lang === 'ar' ? "اسحب لليسار أو اليمين لتصفح الصور" : "Swipe to browse images"}</span>
              </div>
            </div>

            {/* Gallery Thumbnails List */}
            <div className="flex justify-center gap-3.5 select-none">
              {currentProductData.gallery.map((thumbUrl, thumbIdx) => {
                const isActive = activeImageIndex === thumbIdx;
                return (
                  <button
                    key={thumbIdx}
                    onClick={() => setActiveImageIndex(thumbIdx)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-2 bg-white border-2 transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer shadow-xs ${
                      isActive ? 'border-[#C5A560] ring-4 ring-[#C5A560]/10 scale-102 shadow-md' : 'border-[#EADFC9]/30 hover:border-[#C5A560]/50'
                    }`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`Thumbnail ${thumbIdx + 1}`}
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#C5A560]/5 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* 2. RIGHT COLUMN: PRODUCT INFORMATION & CONTROLS */}
          <div className="lg:col-span-6 space-y-4 md:space-y-8">
            
            <div className="space-y-3 select-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#EAF0EC] text-[#1E3A34] text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                ⭐ {text.organicTag}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C352D] tracking-tight leading-tight">
                {currentProductData.name[lang]}
              </h1>
              <h2 className="text-sm sm:text-base text-[#C5A560] font-black leading-relaxed">
                {currentProductData.subtitle[lang]}
              </h2>

              {/* Real Customer Stars rating aggregate */}
              <div className="flex items-center gap-2 pt-1.5">
                <div className="flex text-[#C5A560]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-700">
                  {currentProductData.rating} ({currentProductData.reviewsCount} {text.ratingSuffix})
                </span>
              </div>

              {/* Mobile-First Price Block immediately under the title block */}
              <div className="flex md:hidden items-baseline gap-2 pt-2 pb-1 border-b border-neutral-100 select-none">
                <span className="text-2xl font-black text-[#1C352D]">{currentProductData.price} {lang === 'ar' ? "درهم" : "MAD"}</span>
                <span className="text-xs line-through text-slate-400 font-bold">{currentProductData.originalPrice} {lang === 'ar' ? "درهم" : "MAD"}</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {lang === 'ar' ? "وفر 50 درهم" : "Save 50 DH"}
                </span>
              </div>
            </div>

            {/* Real Price Tag Presentation */}
            <div className="hidden md:block p-6 bg-white border border-[#EADFC9]/40 rounded-3xl shadow-sm space-y-3 relative overflow-hidden luxury-shimmer">
              <div className="absolute top-0 right-0 bg-[#C5A560] text-[#122621] text-[9px] font-black tracking-widest px-4 py-1 rounded-bl-2xl uppercase select-none">
                {text.discountBadge}
              </div>

              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-xs font-bold text-slate-500">{text.priceLabel}</span>
                <span className="text-3xl sm:text-4xl font-black text-[#1C352D]">{currentProductData.price}</span>
                <span className="text-sm font-black text-[#C5A560]">{lang === 'ar' ? "درهم مغربي" : "MAD"}</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">{text.originalPriceLabel}</span>
                <span className="line-through text-slate-400 font-bold">{currentProductData.originalPrice} {lang === 'ar' ? "درهم" : "MAD"}</span>
                <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  {lang === 'ar' ? "وفر 50 درهم فوراً" : "Save 50 DH Instantly"}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                {currentProductData.desc[lang]}
              </p>
              <p className="hidden md:block text-xs sm:text-sm text-slate-500 leading-relaxed">
                {currentProductData.longDesc[lang]}
              </p>
            </div>

            {/* EXQUISITE MORINZHI VARIANT SELECTOR */}
            {currentProductData.hasVariants && currentProductData.variants && (
              <div className="p-5 bg-[#FAF7F2] border border-[#C5A560]/20 rounded-2xl space-y-3 select-none">
                <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wider flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <span>{text.variantLabel}</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {currentProductData.variants.map((variant) => {
                    const isSelected = selectedVariantId === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => handleVariantChange(variant.id)}
                        className={`p-4 rounded-xl text-start border-2 transition-all duration-300 cursor-pointer transform active:scale-98 ${
                          isSelected
                            ? 'border-[#C5A560] bg-white ring-4 ring-[#C5A560]/5'
                            : 'border-[#EADFC9]/30 bg-white/40 hover:bg-white'
                        }`}
                      >
                        <p className={`text-xs font-black ${isSelected ? 'text-[#1C352D]' : 'text-slate-650'}`}>
                          {variant.name[lang]}
                        </p>
                        <p className="text-xs font-bold text-[#C5A560] mt-1">
                          {variant.price} {lang === 'ar' ? "درهم" : "MAD"}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SUGGESTED USAGE GUIDE */}
            <div className="p-4 bg-white/50 border border-[#EADFC9]/30 rounded-2xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C5A560] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black text-[#1C352D]">{text.usageGuide}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentProductData.usage[lang]}
                </p>
              </div>
            </div>

            {/* CORE ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={scrollToCheckout}
                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C352D] hover:bg-[#2A4D45] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-[#1C352D]/20 transition-all duration-300 border border-[#C5A560]/30 transform active:scale-98 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#C5A560]" />
                <span>{text.buyNow}</span>
              </button>

              <button
                onClick={handleGeneralInquiry}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#FAF7F2] text-[#1E3A34] font-extrabold text-sm sm:text-base rounded-2xl shadow-md border-2 border-emerald-150/40 transition-all duration-300 transform active:scale-98 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#C5A560]" />
                <span>{text.contactSamira}</span>
              </button>
            </div>

            {/* Quick trust assurances list */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EADFC9]/30 select-none">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                <span>{lang === 'ar' ? "توصيل سريع لباب المنزل" : "Fast Door Delivery"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                <span>{lang === 'ar' ? "الدفع فقط عند الاستلام" : "Cash on Delivery"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                <span>{lang === 'ar' ? "أصلي معتمد 100%" : "100% Certified Genuine"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                <span>{lang === 'ar' ? "استشارة مجانية للمتابعة" : "Free Wellness Coaching"}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE DXN SECTION ================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-b border-[#EADFC9]/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-150/5 blur-3xl rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#C5A560] bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase">
              {lang === 'ar' ? "المعايير والريادة الطبية" : "INTERNATIONAL STANDARDS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 tracking-tight leading-tight">
              {text.whyChooseDxnTitle}
            </h2>
            <div className="h-1 w-16 bg-[#C5A560] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {text.whyChooseDxnSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseDxnItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#C5A560]/15 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-5 text-[#1E3A34] shadow-xs group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-[#C5A560]" />
                </div>
                <h4 className="text-base font-black text-[#1C352D]">{item.title[lang]}</h4>
                <div className="w-6 h-0.5 bg-[#C5A560]/30 my-2.5 rounded-full"></div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#C5A560] bg-white px-4.5 py-1.5 rounded-full uppercase border border-[#EADFC9]/30">
              {lang === 'ar' ? "التأثير الحيوي والعضوي" : "BIOLOGICAL RESTORATION"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 tracking-tight leading-tight">
              {text.benefitsTitle}
            </h2>
            <div className="h-1 w-16 bg-[#C5A560] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {text.benefitsSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const IconComp = b.icon;
              return (
                <div
                  key={b.id}
                  className="bg-white rounded-[2rem] border border-[#EADFC9]/35 shadow-sm p-7 hover:shadow-xl hover:border-[#C5A560]/40 hover:-translate-y-1 transition-all duration-350 flex flex-col items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${b.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#1C352D] tracking-tight">{b.title[lang]}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {b.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CUSTOMER REVIEWS SECTION ================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-b border-[#EADFC9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#C5A560] bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase">
              {lang === 'ar' ? "آراء زبائننا الكرام" : "CLIENT STORIES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 tracking-tight leading-tight">
              {text.reviewsTitle}
            </h2>
            <div className="h-1 w-16 bg-[#C5A560] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {text.reviewsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#EADFC9]/40 rounded-[2rem] p-7 shadow-xs hover:shadow-md hover:border-[#C5A560]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex text-[#C5A560] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#EADFC9]/30 select-none">
                  <img
                    src={rev.photo}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A560]/30 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-black text-[#1C352D]">{rev.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400">
                      📍 {rev.city} - {lang === 'ar' ? "زبون مؤكد" : "Verified Customer"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 select-none">
            <span className="text-[10px] font-black tracking-widest text-[#C5A560] bg-white px-4.5 py-1.5 rounded-full uppercase border border-[#EADFC9]/30">
              {lang === 'ar' ? "تفاصيل ودراسات طبية" : "KNOWLEDGE RESOURCE"}
            </span>
            <h2 className="text-3xl font-extrabold text-[#1C352D] mt-4 tracking-tight">
              {text.faqTitle}
            </h2>
            <div className="h-1 w-16 bg-[#C5A560] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              {text.faqSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#EADFC9]/30 shadow-xs overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-black text-[#1C352D] flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-[#C5A560] shrink-0" />
                      {faq.q[lang]}
                    </span>
                    <span className={`p-1.5 rounded-lg bg-[#FAF7F2] text-[#1C352D] transition-transform duration-350 shrink-0 ${isOpen ? 'rotate-180 bg-[#C5A560]/10 text-[#C5A560]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[#EADFC9]/20"
                      >
                        <div className="p-5 sm:p-6 bg-[#FAF7F2]/25 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold whitespace-pre-line">
                          {faq.a[lang]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= TRUST BADGES SECTION ================= */}
      <section className="py-12 bg-white border-t border-b border-[#EADFC9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">
            {text.trustBadgesTitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADFC9]/25 flex flex-col items-center justify-center text-center shadow-xs group hover:bg-[#1E3A34] hover:text-white transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#1C352D] flex items-center justify-center mb-2 shadow-inner group-hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 text-[#C5A560]" />
                </div>
                <span className="text-[10px] font-black leading-tight">
                  {badge.label[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ONE-PAGE DIRECT CHECKOUT FORM ================= */}
      <section id="premium-checkout-section" className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] border-2 border-[#C5A560]/35 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Internal Decorative Gold Border */}
          <div className="absolute inset-4 border border-dashed border-[#C5A560]/20 rounded-[2rem] pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10 select-none">
            <span className="text-[9px] font-black tracking-widest text-emerald-800 bg-[#EAF0EC] px-4.5 py-1.5 rounded-full uppercase border border-emerald-100">
              ⚡ {lang === 'ar' ? "التوصيل بالمغرب حلال ومجاني" : "COD EXPRESS ORDER"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C352D] mt-4">
              {text.checkoutTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              {text.checkoutSubtitle}
            </p>
          </div>

          <form onSubmit={handleOrderSubmit} className="space-y-6 relative z-10">
            
            {/* Error alerts */}
            {formError && (
              <div className="p-4 rounded-xl bg-red-50 text-red-800 text-xs font-bold border border-red-150 flex items-center gap-2">
                <span>⚠️</span>
                <span>{formError}</span>
              </div>
            )}

            {/* Input fields */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#1C352D] block">
                  {text.fieldName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? "مثال: أمين الفاسي" : "e.g., Amin Fassi"}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#EADFC9] focus:border-[#C5A560] focus:ring-2 focus:ring-[#C5A560]/10 outline-none text-xs sm:text-sm font-semibold bg-[#FAF7F2]/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-[#1C352D] block">
                  {text.fieldPhone}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0612345678"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-xl border outline-none text-xs sm:text-sm font-semibold bg-[#FAF7F2]/40 transition-all ${
                    clientPhone && !isValidMoroccanPhone(clientPhone)
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10'
                      : 'border-[#EADFC9] focus:border-[#C5A560] focus:ring-2 focus:ring-[#C5A560]/10'
                  }`}
                />
                {clientPhone && !isValidMoroccanPhone(clientPhone) && (
                  <p className="text-rose-500 text-xs font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                    المرجو إدخال رقم هاتف مغربي صحيح.
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#1C352D] block">
                  {text.fieldCity}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? "مثال: الدار البيضاء" : "e.g., Casablanca"}
                  value={clientCity}
                  onChange={(e) => setClientCity(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#EADFC9] focus:border-[#C5A560] focus:ring-2 focus:ring-[#C5A560]/10 outline-none text-xs sm:text-sm font-semibold bg-[#FAF7F2]/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-[#1C352D] block">
                  {text.fieldAddress}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'ar' ? "مثال: حي الرياض، شارع النخيل" : "e.g., Hay Riad, N 12"}
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#EADFC9] focus:border-[#C5A560] focus:ring-2 focus:ring-[#C5A560]/10 outline-none text-xs sm:text-sm font-semibold bg-[#FAF7F2]/40"
                />
              </div>
            </div>

            {/* Quantity Controls & Dynamic Totals */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFC9]/40 grid sm:grid-cols-2 gap-4 items-center">
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <span className="text-xs font-black text-[#1C352D]">{text.fieldQuantity}</span>
                <div className="flex items-center rounded-xl bg-white border border-[#EADFC9]">
                  <button
                    type="button"
                    onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                    className="p-2 text-[#1C352D] hover:bg-slate-100 rounded-l-xl cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-black text-[#1C352D]">{orderQuantity}</span>
                  <button
                    type="button"
                    onClick={() => setOrderQuantity(orderQuantity + 1)}
                    className="p-2 text-[#1C352D] hover:bg-slate-100 rounded-r-xl cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="text-end border-t sm:border-t-0 pt-3 sm:pt-0 border-[#EADFC9]/50 flex items-center justify-between sm:justify-end gap-2">
                <span className="text-xs font-bold text-slate-500">{text.totalPrice}</span>
                <span className="text-xl sm:text-2xl font-black text-[#1C352D]">
                  {currentProductData.price * orderQuantity} {lang === 'ar' ? "درهم" : "MAD"}
                </span>
              </div>
            </div>

            {/* OPTION FOR PREMIUM PACKS */}
            <div 
              onClick={() => {
                setActiveView('packs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 sm:p-4 rounded-xl border border-[#C5A560]/30 bg-[#FAF7F2] hover:bg-[#FAF7F2]/80 transition-all cursor-pointer flex items-center justify-between gap-3 select-none hover:scale-[1.01] active:scale-99 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A560] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A560]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">
                  {text.packsOption}
                </span>
              </div>
              <span className="text-[#C5A560] text-xs font-black shrink-0 flex items-center gap-1">
                {lang === 'ar' ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
              </span>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !clientName.trim() || !clientPhone.trim() || !clientCity.trim() || !isValidMoroccanPhone(clientPhone)}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-emerald-800 hover:bg-[#1E3A34] disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:cursor-not-allowed disabled:opacity-50 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-emerald-800/10 transition-all duration-300 border-2 border-[#C5A560]/30 transform active:scale-98 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Phone className="w-5 h-5 text-[#C5A560] group-disabled:text-slate-400" />
                    <span>{text.confirmOrder}</span>
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-center text-slate-400 font-bold mt-3">
                {text.safeBadge}
              </p>
            </div>

          </form>

        </div>
      </section>

      {/* ================= BOTTOM PREMIUM CTA CONVERSION PANEL ================= */}
      <section className="bg-[#122621] text-white py-16 relative overflow-hidden border-t-2 border-[#C5A560]/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#C5A560]/5 blur-3xl rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1 bg-[#C5A560]/10 text-[#C5A560] text-[10px] font-black px-4.5 py-1.5 rounded-full uppercase border border-[#C5A560]/20">
            ✦ {lang === 'ar' ? "رحلة الصحة المستدامة" : "YOUR ULTIMATE ENERGY HARMONY"}
          </span>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight accent-serif max-w-2xl mx-auto">
            "اختر المنتج المناسب لك وابدأ رحلتك نحو نمط حياة أكثر توازناً"
          </h2>
          
          <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-xl mx-auto font-medium">
            {lang === 'ar' ? "تضمن لالة سميرة توريد دفعات طازجة 100% مباشرة من مزارع دي إكس إن مع توفير كامل المتابعات الصحية والاستشارات الطبية مجاناً." : "Begin your natural healing legacy with factory-sealed batches, swift local shipping, and verified support."}
          </p>

          <div className="h-0.5 w-12 bg-[#C5A560] mx-auto rounded-full my-2"></div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const el = document.getElementById('premium-checkout-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-[#C5A560] text-[#122621] hover:bg-[#dfba6b] text-sm font-black transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md"
            >
              {lang === 'ar' ? "اطلب الآن" : "Commander"}
            </button>
            <button
              onClick={handleGeneralInquiry}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm font-black transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              {lang === 'ar' ? "تواصل معنا" : "Contact"}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
