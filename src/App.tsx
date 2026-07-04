import { useState, useEffect, FormEvent } from 'react'; // Verified Applet Entry
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Phone,
  MapPin,
  X,
  Plus,
  Minus,
  Award,
  CircleCheck,
  Package,
  Activity,
  Heart,
  Check,
  Smile,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Leaf,
  Globe,
  Menu,
  Search,
  User,
  ChevronDown
} from 'lucide-react';

import { translations, productsData, LanguageCode } from './translations';
import { wellnessPacks } from './data/wellnessPacksData';
import { allProducts } from './data/allProducts';
import { initPixel, trackPageView, trackViewContent, trackAddToCart, trackInitiateCheckout, trackPurchase } from './utils/metaPixel';
import { generateOrderMessage } from './utils/orderMessageHelper';
import FAQAccordion from './components/FAQAccordion';
import ReviewsList from './components/ReviewsList';
import {
  spirulinaLandingCopy,
  benefitsData,
  stepsData,
  packagePacks
} from './data/spirulinaData';
import {
  toothpasteLandingCopy,
  toothpasteBenefits,
  toothpasteSteps,
  toothpastePacks,
  toothpasteFAQs
} from './data/toothpasteData';
import {
  coffeeLandingCopy,
  coffeeBenefits,
  coffeeSteps,
  coffeePacks,
  coffeeFAQs
} from './data/coffeeData';
import {
  coffee3in1LandingCopy,
  coffee3in1Benefits,
  coffee3in1Steps,
  coffee3in1Packs,
  coffee3in1FAQs
} from './data/coffee3in1Data';
import {
  shampooLandingCopy,
  shampooBenefits,
  shampooSteps,
  shampooPacks,
  shampooFAQs,
  shampooReviews
} from './data/shampooData';
import GanoMassageOilPage from './components/GanoMassageOilPage';
import LimonzhiPage from './components/LimonzhiPage';
import GanozhiSoapPage from './components/GanozhiSoapPage';
import ReishiliumPowderPage from './components/ReishiliumPowderPage';
import PremiumCheckoutForm from './components/PremiumCheckoutForm';
import SamiraNaturaleHomepage from './components/SamiraNaturaleHomepage';
import ShopView from './components/ShopView';
import BestSellersView from './components/BestSellersView';
import OnePageCheckout from './components/OnePageCheckout';
import DXNPremiumProductsPage from './components/DXNPremiumProductsPage';
import PremiumPacksView from './components/PremiumPacksView';
import { Sun, Moon } from 'lucide-react';
const logoImg = 'https://i.ibb.co/BScXT93/16e2c2de-c552-451e-bde1-1d22720f0ba4-1.png';
const toothpasteImg = 'https://i.ibb.co/zHxTHyjQ/image.png';
const realToothpasteImg = 'https://i.ibb.co/2YY8kMnq/image.png';
const extraToothpasteImg = 'https://i.ibb.co/pBTWdD0c/image.png';
const coffeeImg = 'https://i.ibb.co/TqhqBdJ0/image.png';
const realCoffeeImg = 'https://i.ibb.co/fYPcsWsn/image.png';
const spirulinaImg = 'https://i.ibb.co/5W2nnSzN/image.png';
const realSpirulinaImg = 'https://i.ibb.co/v6KzwsdL/image.png';
const extraSpirulinaImg = 'https://i.ibb.co/Lz5rHGmp/image.png';

const shampooImg = 'https://i.ibb.co/q3q1fsms/image.png';
const realShampooImg = 'https://i.ibb.co/8gMwRhcd/image.png';
const extraShampooImg = 'https://i.ibb.co/9HV6xxVR/image.png';
const coffee3in1Img = 'https://i.ibb.co/6cYqDvwB/image.png';
const realCoffee3in1Img = 'https://i.ibb.co/dsZZQkfb/image.png';

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  productId: string;
  text: {
    en: string;
    fr: string;
    ar: string;
  };
  date: string;
}

const INITIAL_REVIEWS_SEED: Review[] = [
  {
    id: "rev_1",
    name: "Fatima-Zahra A.",
    city: "Rabat",
    rating: 5,
    productId: "spirulina",
    date: "2026-06-10",
    text: {
      ar: "السبيرولينا غزال بزاف تبارك الله، عاوناتني نرجع النشاط ديالي ونقضي على السخفة وفقر الدم لي كان مأثر عليا بزاف. شكرا لالة سميرة على النصائح والمتابعة الراقية والتوصيل لي وصلني فنهارو!",
      fr: "La spiruline est incroyable ! Elle m'a aidé à retrouver toute mon énergie et à soigner mon anémie persistante. Un grand merci à Samira pour son écoute !",
      en: "The organic spirulina powder is phenomenal! It cured my fatigue and rebuilt my blood health completely after just two weeks of use. Thanks, Samira!"
    }
  },
  {
    id: "rev_2",
    name: "Karim M.",
    city: "Casablanca",
    rating: 5,
    productId: "coffee",
    date: "2026-06-14",
    text: {
      ar: "أنا مكنتش كنشرب القهوة العادية حيت كتسبب ليا الحموضة وقلق فالمعدة. ولكن هاد قهوة لينجزي السوداء بالفطر الريشي من أروع ما جربت! طاقة ونشاط نهار كامل ومريحة بزاف للمعدة.",
      fr: "Le café noir Lingzhi est magique. Énergie immédiate sans acidité gastrique ni palpitations. Très agréable pour la digestion !",
      en: "Lingzhi black coffee is magical. Pure clean energy with zero jitters and no stomach acidity. Best coffee ever."
    }
  },
  {
    id: "rev_3",
    name: "Siham T.",
    city: "Marrakech",
    rating: 5,
    productId: "spirulina",
    date: "2026-06-18",
    text: {
      ar: "مسحوق السبيرولينا العضوي دي إكس إن كنز حقيقي! عطيته للوالد ديالي كبير فالسن ومن بعد أسبوعين حس بالفرق فالحركة والنشاط، والحمد لله تحسنت صحتو بزاف.",
      fr: "La Spiruline en poudre de DXN est un superaliment incontournable. Très efficace contre le manque de fer et parfait pour la récupération musculaire.",
      en: "This spirulina powder is a real superfood. Extremely powerful against chronic exhaustion and amazing for physical stamina."
    }
  }
];

const reviewTranslations = {
  en: {
    customerFeedback: "What Our Community Says",
    sub: "Real reviews from verified buyers across Morocco experiencing daily vitality.",
    basedOn: "Based on",
    reviewsCount: "customer reviews",
    writeReview: "Write a Review",
    addReviewTitle: "Share Your Healing Experience",
    validationError: "Please fill in all fields marked with an asterisk (*).",
    thankYouReview: "Thank you so much! Your genuine review has been recorded to inspire others.",
    nameLabel: "Your Noble Full Name *",
    namePlaceholder: "Siham Alaoui",
    cityLabel: "Your City *",
    cityPlaceholder: "Casablanca",
    productLabel: "Product Used",
    ratingLabel: "Experience Rating",
    reviewTextLabel: "Your Story *",
    reviewTextPlaceholder: "Share how these products improved your life...",
    submitBtn: "SUBMIT MY REVIEW",
    allProducts: "All Experiences",
    filterByRating: "Filter Stars",
    allStars: "All Ratings",
    generalFeedback: "General Wellness Inquiry",
    verifiedBuyer: "Verified Buyer"
  },
  fr: {
    customerFeedback: "Retours d'Expérience de Notre Communauté",
    sub: "Avis authentiques de clients partout au Maroc ressentant les bienfaits de DXN au quotidien.",
    basedOn: "Sur la base de",
    reviewsCount: "avis vérifiés",
    writeReview: "Rédiger un avis",
    addReviewTitle: "Partagez votre histoire de bien-être",
    validationError: "Veuillez remplir tous les champs obligatoires marqués d'un astérisque (*).",
    thankYouReview: "Merci infiniment ! Votre retour d'expérience précieux a été enregistré pour guider la communauté.",
    nameLabel: "Votre Nom Complet *",
    namePlaceholder: "Siham Alaoui",
    cityLabel: "Votre Ville *",
    cityPlaceholder: "Casablanca",
    productLabel: "Produit utilisé",
    ratingLabel: "Note d'expérience",
    reviewTextLabel: "Votre témoignage *",
    reviewTextPlaceholder: "Racontez comment ces produits ont amélioré votre quotidien...",
    submitBtn: "SOUMETTRE MON AVIS",
    allProducts: "Toutes les expériences",
    filterByRating: "Filtrer par note",
    allStars: "Toutes les notes",
    generalFeedback: "Conseil de bien-être général",
    verifiedBuyer: "Acheteur Vérifié"
  },
  ar: {
    customerFeedback: "تجارب وقصص عملاء سميرة ناتورال",
    sub: "آراء واقعية حقيقية لزبائننا بمختلف مدن المغرب يشاركون قصص نجاحهم مع مكملات دي إكس إن.",
    basedOn: "بناءً على",
    reviewsCount: "مراجعة زبون حقيقي",
    writeReview: "كتابة مراجعة جديدة",
    addReviewTitle: "شارك قصة نجاحك وعافيتك معنا",
    validationError: "يرجى تعبئة جميع الحقول التي تحتوي على النجمة (*).",
    thankYouReview: "شكراً جزيلاً لك! تم حفظ مراجعتك الحقيقية لتلهم زوارنا وتبث الأمل في عافيتهم.",
    nameLabel: "الاسم الكامل الكريم للكاتب *",
    namePlaceholder: "سهام العلوي",
    cityLabel: "المدينة بالمغرب *",
    cityPlaceholder: "الدار البيضاء",
    productLabel: "المنتج المستعمل",
    ratingLabel: "تقييم تجربتك",
    reviewTextLabel: "تفاصيل قصتك *",
    reviewTextPlaceholder: "شاركينا كيف ساعدتك منتجاتنا في تحسين صحتك وحيويتك اليومية...",
    submitBtn: "إرسال وتأكيد تقييمي الآن",
    allProducts: "كل التجارب",
    filterByRating: "تصفية حسب التقييم",
    allStars: "كل النجمات",
    generalFeedback: "استشارة صحية عامة",
    verifiedBuyer: "زبون مؤكد"
  }
};

export default function App() {
  const STORAGE_LANG_KEY = 'samira_naturale_lang';
  const STORAGE_CUST_KEY = 'samira_naturale_cust';

  // 1. App State
  const [lang, setLang] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    return (saved === 'fr' || saved === 'ar' || saved === 'en' || saved === 'es') ? saved as LanguageCode : 'ar';
  });

  const isRtl = lang === 'ar';
  const t = translations[lang];
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const copy = spirulinaLandingCopy[pl];
  const tCopy = toothpasteLandingCopy[pl];
  const cCopy = coffeeLandingCopy[pl];
  const cCopy3in1 = coffee3in1LandingCopy[pl] as any;
  const sCopy = shampooLandingCopy[pl] as any;
  const rTrans = reviewTranslations[pl];

  // 2. High-Converting Landing Section Configurations (Quantities)
  const [spirulinaQty, setSpirulinaQty] = useState(1);
  const [addToothpaste, setAddToothpaste] = useState(false);
  const [addCoffee, setAddCoffee] = useState(false);

  // Spirulina Product Variant State
  const [spirulinaVariant, setSpirulinaVariant] = useState<'120' | '500'>('120');

  // Toothpaste Landing Section Configurations (Quantities)
  const [toothpasteQty, setToothpasteQty] = useState(1);
  const [addToothpasteSpirulina, setAddToothpasteSpirulina] = useState(false);
  const [addToothpasteCoffee, setAddToothpasteCoffee] = useState(false);

  // Coffee Landing Section Configurations (Quantities)
  const [coffeeQty, setCoffeeQty] = useState(1);
  const [addCoffeeSpirulina, setAddCoffeeSpirulina] = useState(false);
  const [addCoffeeToothpaste, setAddCoffeeToothpaste] = useState(false);

  // Coffee 3 in 1 Landing Section Configurations (Quantities)
  const [coffee3in1Qty, setCoffee3in1Qty] = useState(1);
  const [addCoffee3in1Spirulina, setAddCoffee3in1Spirulina] = useState(false);
  const [addCoffee3in1Toothpaste, setAddCoffee3in1Toothpaste] = useState(false);
  const [addCoffee3in1Coffee, setAddCoffee3in1Coffee] = useState(false);

  // Shampoo Landing Section Configurations (Quantities)
  const [shampooQty, setShampooQty] = useState(1);
  const [addShampooSpirulina, setAddShampooSpirulina] = useState(false);
  const [addShampooToothpaste, setAddShampooToothpaste] = useState(false);
  const [addShampooCoffee3in1, setAddShampooCoffee3in1] = useState(false);

  // Delivery checkout form state
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const isValidMoroccanPhone = (num: string): boolean => {
    const cleaned = num.trim().replace(/[\s-]/g, '');
    const moroccoRegex = /^(06|07)\d{8}$|^\+212(6|7)\d{8}$/;
    return moroccoRegex.test(cleaned);
  };

  // Catalog general bag integration state
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isHeaderMobileLangOpen, setIsHeaderMobileLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(['spirulina', 'coffee']);

  const toggleWishlist = (id: string) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Premium Luxury Scroll Detection State
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSearchableProducts = () => {
    const list: any[] = [];
    const seenIds = new Set<string>();
    
    // 1. Map all products from productsData dynamically
    Object.keys(productsData).forEach((key) => {
      const prod = (productsData as any)[key];
      if (!prod) return;
      if (seenIds.has(prod.id)) return;
      seenIds.add(prod.id);
      
      // Determine correct view name
      let viewName = prod.id;
      if (viewName === 'ganoOil') viewName = 'gano-oil';
      else if (viewName === 'lions_mane') viewName = 'lions-mane';
      else if (viewName === 'spirulinaCereal') viewName = 'spirulina-cereal';
      else if (viewName === 'morinzhiJuice') viewName = 'morinzhi-juice';
      else if (viewName === 'family_pack') viewName = 'family-pack';

      const localizedName = isRtl 
        ? prod.ar?.name 
        : lang === 'fr' 
        ? prod.fr?.name 
        : prod.en?.name;
        
      const localizedDesc = isRtl 
        ? prod.ar?.desc 
        : lang === 'fr' 
        ? prod.fr?.desc 
        : prod.en?.desc;

      // Gather all translated names, descriptions, and benefits across all languages for search
      const searchTermsSet = new Set<string>();
      ['en', 'fr', 'ar'].forEach((l) => {
        const trans = prod[l];
        if (trans) {
          if (trans.name) searchTermsSet.add(trans.name.toLowerCase());
          if (trans.desc) searchTermsSet.add(trans.desc.toLowerCase());
          if (trans.benefits) {
            trans.benefits.forEach((b: string) => searchTermsSet.add(b.toLowerCase()));
          }
        }
      });
      
      // Add general key search terms & colloquial words (e.g. for spirulina: 'spirulina', 'سبيرولينا', 'سبرولينا', 'spiruline')
      searchTermsSet.add(prod.id.toLowerCase());
      if (prod.id === 'ganoOil' || prod.id === 'gano-oil') {
        searchTermsSet.add('huile');
        searchTermsSet.add('massage');
        searchTermsSet.add('جانو');
        searchTermsSet.add('مساج');
        searchTermsSet.add('زيت');
      }
      if (prod.id === 'spirulina') {
        searchTermsSet.add('سبيرولينا');
        searchTermsSet.add('سبرولينا');
        searchTermsSet.add('سبرلينا');
        searchTermsSet.add('comprimés');
        searchTermsSet.add('grains');
      }
      if (prod.id === 'toothpaste') {
        searchTermsSet.add('dentifrice');
        searchTermsSet.add('معجون');
        searchTermsSet.add('أسنان');
        searchTermsSet.add('اسنان');
        searchTermsSet.add('جانوزي');
      }
      if (prod.id === 'soap') {
        searchTermsSet.add('savon');
        searchTermsSet.add('صابون');
        searchTermsSet.add('صابونة');
        searchTermsSet.add('وجه');
      }
      if (prod.id === 'shampoo') {
        searchTermsSet.add('shampoing');
        searchTermsSet.add('shampoo');
        searchTermsSet.add('شامبو');
        searchTermsSet.add('شعر');
      }
      if (prod.id === 'coffee' || prod.id === 'coffee3in1') {
        searchTermsSet.add('café');
        searchTermsSet.add('cafe');
        searchTermsSet.add('قهوة');
        searchTermsSet.add('سوداء');
        searchTermsSet.add('لينجزي');
        searchTermsSet.add('ريشي');
      }

      list.push({
        id: prod.id,
        type: 'product',
        view: viewName,
        image: prod.image,
        price: prod.price,
        name: localizedName || prod.en?.name || '',
        desc: localizedDesc || prod.en?.desc || '',
        searchTerms: Array.from(searchTermsSet)
      });
    });

    // 2. Add custom packs manually (with full translations)
    const packs = [
      {
        id: 'happy-family',
        type: 'pack',
        view: 'packs',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600',
        price: 495,
        name: isRtl ? 'باقة العائلة السعيدة المتكاملة' : lang === 'fr' ? 'Pack Famille Heureuse' : 'Happy Family Pack',
        desc: isRtl ? 'باقة متكاملة لتغذية ونشاط ومناعة جميع أفراد العائلة.' : lang === 'fr' ? 'Pack complet pour toute la famille.' : 'Complete wellness pack for the whole family.',
        searchTerms: [
          'باقة العائلة السعيدة المتكاملة', 'باقة متكاملة لتغذية ونشاط ومناعة جميع أفراد العائلة', 'عائلة', 'العائلة',
          'pack famille heureuse', 'pack complet pour toute la famille', 'famille',
          'happy family pack', 'complete wellness pack for the whole family', 'family', 'wellness'
        ]
      },
      {
        id: 'super-vitality',
        type: 'pack',
        view: 'packs',
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600',
        price: 660,
        name: isRtl ? 'باقة النشاط والحيوية الخارقة' : lang === 'fr' ? 'Pack Super Vitalité' : 'Super Vitality Pack',
        desc: isRtl ? 'تمنحك طاقة بدنية وتركيزاً ذهنياً فائقاً للرياضيين والعمل الشاق.' : lang === 'fr' ? 'Pour un tonus physique et mental absolu.' : 'Maximum energy and stamina boost.',
        searchTerms: [
          'باقة النشاط والحيوية الخارقة', 'تمنحك طاقة بدنية وتركيزاً ذهنياً فائقاً للرياضيين والعمل الشاق', 'نشاط', 'حيوية', 'طاقة',
          'pack super vitalité', 'pour un tonus physique et mental absolu', 'vitalite', 'tonus',
          'super vitality pack', 'maximum energy and stamina boost', 'vitality', 'energy'
        ]
      },
      {
        id: 'healthy-coffee',
        type: 'pack',
        view: 'packs',
        image: 'https://i.ibb.co/TqhqBdJ0/image.png',
        price: 270,
        name: isRtl ? 'باقة النخبة لعشاق القهوة الصحية' : lang === 'fr' ? 'Pack Café Élite' : 'Elite Healthy Coffee Pack',
        desc: isRtl ? 'لعشاق القهوة الراقية والصحية الخالية من الحموضة والقولون.' : lang === 'fr' ? 'Idéal pour les amateurs de cafés sains.' : 'Perfect blend for healthy coffee lovers.',
        searchTerms: [
          'باقة النخبة لعشاق القهوة الصحية', 'لعشاق القهوة الراقية والصحية الخالية من الحموضة والقولون', 'قهوة', 'القهوة',
          'pack café élite', 'idéal pour les amateurs de cafés sains', 'cafe', 'elite',
          'elite healthy coffee pack', 'perfect blend for healthy coffee lovers', 'coffee'
        ]
      }
    ];

    return [...list, ...packs];
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('samira_recent_searches');
      return saved ? JSON.parse(saved) : ['Spirulina', 'Cocozhi', 'Coffee', 'Soap'];
    } catch (e) {
      return ['Spirulina', 'Cocozhi', 'Coffee', 'Soap'];
    }
  });

  const addRecentSearch = (query: string) => {
    if (!query.trim()) return;
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s.toLowerCase() !== query.toLowerCase());
      const next = [query, ...filtered].slice(0, 5);
      try {
        localStorage.setItem('samira_recent_searches', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };
  const [activeView, setActiveView] = useState<any>('store');
  const [selectedPackId, setSelectedPackId] = useState<string>('family-pack');
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [pendingViewChange, setPendingViewChange] = useState<any | null>(null);

  // Dark/Light Theme State & Side-Effects
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : false;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [isDark]);

  // Premium Homepage custom states
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const handleNavigateView = (view: typeof activeView) => {
    // If navigating away from a checkout page, verify if they filled the form
    if (activeView !== 'store' && activeView !== 'shop' && activeView !== 'bestsellers' && activeView !== 'checkout' && activeView !== 'gano-oil' && activeView !== 'limonzhi' && activeView !== 'soap' && activeView !== 'reishilium' && activeView !== 'reishi_gano' && activeView !== 'packs' && activeView !== 'pack-detail' && !activeView?.toString().includes('pack')) {
      try {
        const saved = localStorage.getItem('samira_naturale_cust');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.name?.trim() || parsed.address?.trim() || parsed.phone?.trim()) {
            setPendingViewChange(view);
            setShowExitConfirm(true);
            return;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    setActiveView(view);
    window.scrollTo(0, 0);
  };

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    trackAddToCart(productId, productId);
    setIsCartOpen(true);
    trackInitiateCheckout();
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart(prev => {
      const nextQty = (prev[productId] || 0) + delta;
      if (nextQty <= 0) {
        const copyCart = { ...prev };
        delete copyCart[productId];
        return copyCart;
      }
      return { ...prev, [productId]: nextQty };
    });
  };

  const isPremiumProduct = (view: string) => {
    if (!view) return false;
    const list = [
      'cocozhi', 'ganocelium', 'cordyceps', 'cordypine', 'lions-mane', 'roselle', 
      'spirulina-cereal', 'morinzhi-juice', 'family-pack', 'reishi_gano',
      'aloe-scrub', 'aloe-lotion', 'aloe-gel', 'aromatic-shower-gel', 'aromatic-body-lotion',
      'hand-cream', 'lip-balm', 'face-mask',
      'spirulina', 'toothpaste', 'coffee', 'coffee3in1', 'shampoo', 'gano-oil', 'limonzhi', 'soap', 'reishilium',
      'potenzhi', 'moricinia',
      'eye-cream', 'face-serum', 'face-cream', 'night-oil', 'dry-oil',
      'foaming-cleanser', 'tonic-water', 'tightening-serum', 'hydrating-face-cream', 'sunscreen-spf50',
      'cooling-after-sun', 'tanning-oil', 'sunscreen-spf30'
    ];
    return list.includes(view) || allProducts.some(p => p.id === view || p.id.replace(/-/g, '_') === view || view.replace(/-/g, '_') === p.id);
  };

  const getProductDetailsForCart = (productId: string) => {
    const isAr = lang === 'ar';
    const isFr = lang === 'fr';
    const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';

    // 1. Check for specific known sub-variants or unique items
    if (productId === 'toothpaste') {
      return {
        name: productsData.toothpaste[pl].name,
        price: productsData.toothpaste.price,
        image: toothpasteImg,
      };
    }
    if (productId === 'coffee') {
      return {
        name: productsData.coffee[pl].name,
        price: productsData.coffee.price,
        image: coffeeImg,
      };
    }
    if (productId === 'reishilium' || productId === 'reishilium_small') {
      const suffix = isAr ? ' (22 غرام)' : ' (22g)';
      return {
        name: `${productsData.reishilium[pl].name}${suffix}`,
        price: 401,
        image: "https://i.ibb.co/LhsPdhTv/image.png",
      };
    }
    if (productId === 'reishilium_large') {
      const suffix = isAr ? ' (70 غرام)' : ' (70g)';
      return {
        name: `${productsData.reishilium[pl].name}${suffix}`,
        price: 1226,
        image: "https://i.ibb.co/PZMWLpRv/image.png",
      };
    }
    if (productId === 'reishi_gano' || productId === 'rg_90' || productId === 'reishi_gano_small') {
      const suffix = isAr ? ' (90 كبسولة)' : ' (90 Caps)';
      return {
        name: `${productsData.reishi_gano[pl].name}${suffix}`,
        price: 706,
        image: "https://i.ibb.co/j9vb2YGq/image.png",
      };
    }
    if (productId === 'rg_360' || productId === 'reishi_gano_large') {
      const suffix = isAr ? ' (360 كبسولة)' : ' (360 Caps)';
      return {
        name: `${productsData.reishi_gano[pl].name}${suffix}`,
        price: 2346,
        image: "https://i.ibb.co/jdx5mcV/image.png",
      };
    }
    if (productId === 'spirulina_500') {
      const suffix = isAr ? ' (500 حبة)' : isFr ? ' (500 Comprimés)' : ' (500 Tablets)';
      return {
        name: `${productsData.spirulina[pl].name}${suffix}`,
        price: 1299,
        image: "https://i.ibb.co/xST3WmwW/image.png",
      };
    }
    if (productId === 'spirulina_120' || productId === 'spirulina') {
      const suffix = isAr ? ' (120 حبة)' : isFr ? ' (120 Comprimés)' : ' (120 Tablets)';
      return {
        name: `${productsData.spirulina[pl].name}${suffix}`,
        price: 365,
        image: "https://i.ibb.co/1tMCDQsD/image.png",
      };
    }

    if (productId === 'potenzhi' || productId === 'potenzhi_30' || productId === 'potenzhi-30') {
      const names = {
        ar: "بوتنزي دي إكس إن (30 كبسولة)",
        en: "DXN Potenzhi (30 Capsules)",
        fr: "DXN Potenzhi (30 Gélules)",
        es: "DXN Potenzhi (30 Cápsulas)"
      };
      return {
        name: names[lang] || names['en'],
        price: 434,
        image: "https://i.ibb.co/6cYHCwqQ/image.png",
      };
    }
    if (productId === 'potenzhi_90' || productId === 'potenzhi-90') {
      const names = {
        ar: "بوتنزي دي إكس إن (90 كبسولة)",
        en: "DXN Potenzhi (90 Capsules)",
        fr: "DXN Potenzhi (90 Gélules)",
        es: "DXN Potenzhi (90 Cápsulas)"
      };
      return {
        name: names[lang] || names['en'],
        price: 1066,
        image: "https://i.ibb.co/XryWc6r4/image.png",
      };
    }
    if (productId === 'moricinia' || productId === 'moricinia_285' || productId === 'moricinia-285') {
      const names = {
        ar: "عصير موريسينيا الصغير (285 مل)",
        en: "DXN Moricinia (285ml)",
        fr: "DXN Moricinia (285ml)",
        es: "DXN Moricinia (285ml)"
      };
      return {
        name: names[lang] || names['en'],
        price: 300,
        image: "https://i.ibb.co/6cqgWG2d/image.png",
      };
    }
    if (productId === 'moricinia_700' || productId === 'moricinia-700') {
      const names = {
        ar: "عصير موريسينيا الكبير (700 مل)",
        en: "DXN Moricinia (700ml)",
        fr: "DXN Moricinia (700ml)",
        es: "DXN Moricinia (700ml)"
      };
      return {
        name: names[lang] || names['en'],
        price: 586,
        image: "https://i.ibb.co/Hfqs2qS4/image.png",
      };
    }

    // 2. Normalization helper for productsData mapping
    const normalizeId = (id: string) => {
      if (id === 'gano-oil' || id === 'gano_oil') return 'ganoOil';
      if (id === 'spirulina-cereal') return 'spirulinaCereal';
      if (id === 'morinzhi-juice' || id === 'morinzhi' || id === 'morinzhi_juice' || id === 'morinzhiJuice') return 'morinzhiJuice';
      if (id === 'lions-mane' || id === 'lions_mane' || id === 'lionsMane') return 'lions_mane';
      if (id === 'family-pack' || id === 'family_pack') return 'family_pack';
      if (id === 'aloe-scrub' || id === 'aloe_scrub') return 'aloeScrub';
      if (id === 'aloe-lotion' || id === 'aloe_lotion') return 'aloeLotion';
      if (id === 'aloe-gel' || id === 'aloe_gel') return 'aloeGel';
      if (id === 'aromatic-shower-gel' || id === 'aromatic_shower_gel' || id === 'aromaticShowerGel') return 'aromaticShowerGel';
      if (id === 'aromatic-body-lotion' || id === 'aromatic_body_lotion' || id === 'aromaticBodyLotion') return 'aromaticBodyLotion';
      if (id === 'hand-cream' || id === 'hand_cream' || id === 'handCream') return 'handCream';
      if (id === 'lip-balm' || id === 'lip_balm' || id === 'lipBalm') return 'lipBalm';
      if (id === 'face-mask' || id === 'face_mask' || id === 'faceMask') return 'faceMask';
      return id;
    };

    const normalized = normalizeId(productId);
    const prod = (productsData as any)[normalized];
    if (prod) {
      return {
        name: prod[pl]?.name || prod['en']?.name || normalized,
        price: prod.price,
        image: prod.image || '',
      };
    }

    // 3. Fallback to wellnessPacks
    const matchedPack = wellnessPacks.find(p => p.id === productId || p.id.replace('-', '_') === productId || (typeof productId === 'string' && productId.replace('-', '_') === p.id));
    if (matchedPack) {
      return {
        name: matchedPack.name[pl] || matchedPack.name['en'],
        price: matchedPack.price,
        image: matchedPack.image
      };
    }

    return {
      name: productId,
      price: 0,
      image: '',
    };
  };

  // Sync state items back to localStorage
  useEffect(() => { localStorage.setItem(STORAGE_LANG_KEY, lang); }, [lang]);

  // Clean up any previously stored customer details so forms start empty, and initialize Meta Pixel
  useEffect(() => {
    localStorage.removeItem(`${STORAGE_CUST_KEY}_name`);
    localStorage.removeItem(`${STORAGE_CUST_KEY}_addr`);
    localStorage.removeItem(`${STORAGE_CUST_KEY}_phone`);
    initPixel();
  }, []);

  // Track page views whenever activeView changes in this single page application
  useEffect(() => {
    trackPageView();
    // Also track ViewContent for specific product views
    const productViews = ['spirulina', 'toothpaste', 'coffee', 'coffee3in1', 'shampoo', 'gano-oil', 'limonzhi', 'soap', 'reishilium', 'reishi_gano'];
    if (productViews.includes(activeView)) {
      trackViewContent(activeView, activeView);
    }
  }, [activeView]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Client Reviews state with localStorage persist
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('samira_naturale_reviews_lp');
      let baseList = saved ? JSON.parse(saved) : INITIAL_REVIEWS_SEED;
      const hasShampoo = baseList.some((r: any) => r.productId === 'shampoo');
      if (!hasShampoo) {
        const shampooSeed: Review[] = [
          {
            id: "rev_sh_1",
            name: "سامية خ.",
            city: "الدار البيضاء",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-18",
            text: {
              ar: "هذا الشامبو غير لي حياتي صراحة! كنت كنعاني بزاف من تساقط الشعر والحكة، ومن أول سيمانة حسيت بجلدة راسي ارتاحت بزاف وشعري رجع فيه اللمعان والحيوية الطبيعية.",
              en: "This shampoo genuinely transformed my hair routine! No more dry scalp irritation or ongoing hair fall. My hair is softer and looks incredibly healthy.",
              fr: "Ce shampoing a métamorphosé ma chevelure ! Je perdais mes cheveux et souffrais de démangeaisons constantes ; dès les premiers lavages, mon cuir chevelu s'est apaisé."
            }
          },
          {
            id: "rev_sh_2",
            name: "أمين ط.",
            city: "الرباط",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-19",
            text: {
              ar: "منتج رائع جداً، النظافة ديالو عميقة وفيه ريحة طبيعية فخمة بزاف. خفيف بزاف على الرأس وما كينشفش الشعر فحال الشامبوهات العادية اللي عامرين كيماويات.",
              en: "Excellent organic formula. It provides a super refreshing herbal aroma and clean feel without aggressive stripping. Pure quality.",
              fr: "Une pure merveille végétale. Le lavage est profond, l'odeur naturelle de plantes est exquise et il ne dessèche absolument pas les pointes."
            }
          },
          {
            id: "rev_sh_3",
            name: "خديجة ب.",
            city: "مراكش",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-20",
            text: {
              ar: "تبارك الله على جودة الشامبو جانوزي، شعري كان ناشف ومقصف والآن رجع رطب وكيطيح بواحد الانسيابية غزالة. خديت باقة عبوتين وتوصيل تال الباب، جودة 5 نجوم!",
              en: "Outstanding result on my frizzy, dry hair. Ganozhi and Pro-Vitamin B5 locked in absolute moisture. Highly recommend the double pack!",
              fr: "Mes cheveux étaient très secs et cassants. Ce soin enrichi en Reishi et B5 leur a redonné de la souplesse et une brillance soyeuse incroyable. Pack duo parfait !"
            }
          },
          {
            id: "rev_sh_4",
            name: "ندى م.",
            city: "طنجة",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-21",
            text: {
              ar: "بصراحة أحسن شامبو جربتو للجلدة الحساسة. كنت ديما كنعاني من القشرة وحموضة الجو، ولكن مع شامبو جانوزي بالفطر الريشي الجلدة كتتنفس والنعومة غزالة وجد مرتاحة.",
              en: "My scalp feels so clean and calm. I used to struggle with severe dandruff, but after utilizing Ganozhi, my scalp breathes properly.",
              fr: "Idéal pour les cuirs chevelus irritables. J’avais des pellicules chroniques et ce Shampoing Ganozhi a rééquilibré mon écosystème cutané en douceur."
            }
          },
          {
            id: "rev_sh_5",
            name: "عمر ف.",
            city: "فاس",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-22",
            text: {
              ar: "أصلي وممتاز ومناسب للاستعمال اليومي لوليداتي وليا. الشامبو اقتصادي حيت مركز بزاف كنحتاج غير قطرة قليلة وكتعطي رغوة وفيرة ومنعشة.",
              en: "Genuine product. Since it is highly concentrated, only a tiny squeeze creates a wonderful luxurious bubble lather. Great for the entire family.",
              fr: "Formule très concentrée, très économique à l'usage. Une noisette suffit pour obtenir un moussage de luxe onctueux et très plaisant."
            }
          },
          {
            id: "rev_sh_6",
            name: "ليلى ح.",
            city: "أكادير",
            rating: 5,
            productId: "shampoo",
            date: "2026-06-22",
            text: {
              ar: "شكراً بزاف سميرة على هاد الشامبو، طلبتو ووصلني ف 24 ساعة، التغليف راقي والمعاملة طيبة. شعري رجعت ليه الحيوية والقوة ومبقاش كيتساقط فحال الأول.",
              en: "Excellent service from Samira! Fast shipping in Morocco, elegant packaging, and spectacular shampoo quality. Hair is shiny and robust.",
              fr: "Un grand merci à Samira ! Livraison éclair, marchandise militaire impeccable et authentique. Mes cheveux respirent à nouveau la santé."
            }
          }
        ];
        baseList = [...shampooSeed, ...baseList];
      }
      return baseList;
    } catch {
      return INITIAL_REVIEWS_SEED;
    }
  });

  const onAddCustomReview = (newRev: { name: string; city: string; text: string; rating: number; productId: string }) => {
    const r: Review = {
      id: `rev_${Date.now()}`,
      name: newRev.name,
      city: newRev.city,
      rating: newRev.rating,
      productId: newRev.productId,
      date: new Date().toISOString().split('T')[0],
      text: {
        en: newRev.text,
        fr: newRev.text,
        ar: newRev.text
      }
    };
    const updated = [r, ...reviews];
    setReviews(updated);
    localStorage.setItem('samira_naturale_reviews_lp', JSON.stringify(updated));
  };

  // Testimonials Auto-sliding Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const WHATSAPP_PHONE = "212640386478";

  // Get active spirulina packs based on selected variant
  const getActiveSpirulinaPacks = () => {
    const is120 = spirulinaVariant === '120';
    return {
      en: [
        {
          id: 'single' as const,
          title: is120 ? "Vitality Starter Pack (120 Tablets)" : "Imperial Starter Pack (500 Tablets)",
          desc: is120 ? "Perfect 24-day trial of pure natural energy." : "Ideal 100-day master cure of deep energy.",
          price: is120 ? 365 : 1299
        },
        {
          id: 'double' as const,
          title: is120 ? "Imperial Renewal Dual Pack" : "Imperial Master Double Pack",
          desc: is120 ? "Ideal 2-month treatment for deep cell detox." : "Ultimate 2x 100-day treatment for families.",
          price: is120 ? 690 : 2490,
          badge: "⭐ MOST POPULAR",
          bonus: "Free Morocco Shipping"
        },
        {
          id: 'family' as const,
          title: is120 ? "Family Immunity Ritual" : "Grand Family Wellness Kit",
          desc: is120 ? "Full family wellness kit. Complete premium shield." : "Immense health preservation pack for your home.",
          price: is120 ? 990 : 3590,
          badge: "👑 BEST VALUE",
          bonus: "Free Shipping + Wellness Consultation"
        }
      ],
      fr: [
        {
          id: 'single' as const,
          title: is120 ? "Pack Découverte Énergie (120 Comprimés)" : "Pack Impérial Énergie (500 Comprimés)",
          desc: is120 ? "Idéal pour tester la force de la spiruline sur 24 jours." : "Cure complète de 100 jours pour une revitalisation profonde.",
          price: is120 ? 365 : 1299
        },
        {
          id: 'double' as const,
          title: is120 ? "Pack Double Renouveau" : "Pack Double Excellence",
          desc: is120 ? "Parfait traitement de 2 mois pour une détox cellulaire." : "Le pack idéal pour couple pour une haute synergie adaptogène.",
          price: is120 ? 690 : 2490,
          badge: "⭐ LE PLUS POPULAIRE",
          bonus: "Livraison Maroc Gratuite"
        },
        {
          id: 'family' as const,
          title: is120 ? "Rituel Immunité Famille" : "Cure Suprême Grand Format",
          desc: is120 ? "Kit de bien-être familial pour une barrière immune absolue." : "La cure santé absolue de longue durée de Samira.",
          price: is120 ? 990 : 3590,
          badge: "👑 MEILLEUR PRIX",
          bonus: "Livraison Offerte + Cuillère en bois Spéciale"
        }
      ],
      ar: [
        {
          id: 'single' as const,
          title: is120 ? "باقة الحيوية والنشاط السريع (120 حبة)" : "الباقة الفردية الكبرى (500 حبة)",
          desc: is120 ? "مثالية لتجربة طاقة السوبر فود المذهلة لمدة ممتدة." : "كورس كامل لمدة 100 يوم من الحيوية، المناعة وإزالة السموم.",
          price: is120 ? 365 : 1299
        },
        {
          id: 'double' as const,
          title: is120 ? "باقة التجديد المزدوج الإمبراطورية" : "الباقة الثنائية الكبرى للعائلة",
          desc: is120 ? "علاج مثالي لمدة شهرين لتنظيف الخلايا وزيادة القوة البدنية." : "عبوتين عائلية كاملة تكفي لمشاركتها مع شريك حياتك بسعر حصري.",
          price: is120 ? 690 : 2490,
          badge: "⭐ الأكثر طلباً",
          bonus: "شحن مجاني لكل المغرب"
        },
        {
          id: 'family' as const,
          title: is120 ? "طقوس المناعة العائلية الشاملة" : "البرنامج العائلي الذهبي المتكامل",
          desc: is120 ? "علب ثلاثية لتقوية مناعة أطفالك وعائلتك بالكامل بخصم هائل." : "التغذية الفائقة والمتكاملة لمنزلك وصحتك بأقوى توفير اقتصادي.",
          price: is120 ? 990 : 3590,
          badge: "👑 العرض الأفضل",
          bonus: "شحن مجاني + ملعقة خشبية هدية فاخرة"
        }
      ]
    }[pl];
  };

  // Calculate live order totals based on chosen quantity and optional add-ons
  const getBasePrice = () => {
    const baseUnit = spirulinaVariant === '120' ? 190 : 490;
    return baseUnit * spirulinaQty;
  };

  const calculateTotal = () => {
    let price = getBasePrice();
    if (addToothpaste) price += 85;
    if (addCoffee) price += 130;
    return price;
  };

  const handleLandingOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateTotal();

    const orderedProducts = [];
    orderedProducts.push({
      name: spirulinaVariant === '120' ? (isRtl ? 'سبيرولينا عضوية (120 حبة)' : 'Spiruline Biologique (120 caps)') : (isRtl ? 'سبيرولينا عضوية (500 حبة)' : 'Spiruline Biologique (500 caps)'),
      desc: isRtl ? 'مكمل السبيرولينا العضوي الطبيعي الفاخر' : 'Superfood pure Spiruline',
      qty: spirulinaQty,
      price: getBasePrice() / spirulinaQty,
      total: getBasePrice()
    });

    if (addToothpaste) {
      orderedProducts.push({
        name: isRtl ? 'معجون أسنان جانوزي بلس' : 'Dentifrice DXN Ganozhi Plus',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 85,
        total: 85
      });
    }

    if (addCoffee) {
      orderedProducts.push({
        name: isRtl ? 'قهوة لينجزي السوداء 2 في 1' : 'Café Noir Gourmet Lingzhi',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 130,
        total: 130
      });
    }

    const clientMsg = isRtl
      ? '🚀 أهلاً لالة سميرة، أود تأكيد طلبي لمنتجات السبيرولينا العضوية المذكورة أعلاه. يرجى شحن الطرد في أقرب وقت!'
      : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de Spiruline Biologique DXN. Merci de me contacter pour l\'expédition !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: totalPrice
    });

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(orderResult.message)}`;

    trackPurchase(totalPrice, 'MAD', [spirulinaVariant === '120' ? 'spirulina-120' : 'spirulina-500']);

    setTimeout(() => {
      setIsOrdering(false);
      window.open(url, '_blank');
    }, 1500);
  };

  const handleGeneralInquiry = () => {
    const textMsg = encodeURIComponent(t.whatsappAssistanceText);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${textMsg}`, '_blank');
  };

  const getToothpasteBasePrice = () => {
    return 85 * toothpasteQty;
  };

  const calculateToothpasteTotal = () => {
    let price = getToothpasteBasePrice();
    if (addToothpasteSpirulina) price += 260;
    if (addToothpasteCoffee) price += 130;
    return price;
  };

  const handleToothpasteOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateToothpasteTotal();
    const isSingle = toothpasteQty === 1;
    const finalAmount = totalPrice + (isSingle ? 20 : 0);

    const orderedProducts = [];
    orderedProducts.push({
      name: isRtl ? 'معجون أسنان جانوزي بلس بالجانوديرما' : 'Dentifrice Prestige Ganozhi Plus DXN',
      desc: isRtl ? 'معجون أسنان طبيعي فاخر خال من الفلورايد' : 'Dentifrice Ganozhi naturel',
      qty: toothpasteQty,
      price: 85,
      total: 85 * toothpasteQty
    });

    if (addToothpasteSpirulina) {
      orderedProducts.push({
        name: isRtl ? 'مسحوق السبيرولينا العضوي' : 'Poudre de Spiruline Biologique',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 260,
        total: 260
      });
    }

    if (addToothpasteCoffee) {
      orderedProducts.push({
        name: isRtl ? 'قهوة لينجزي السوداء 2 في 1' : 'Café noir Gourmet Lingzhi',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 130,
        total: 130
      });
    }

    const clientMsg = isRtl
      ? '🚀 أهلاً لالة سميرة، أود تأكيد طلبي لمنتج معجون أسنان جانوزي بلس بالجانوديرما المذكور أعلاه. يرجى شحن الطرد في أقرب وقت!'
      : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de Dentifrice Ganozhi Plus. Merci de me contacter pour l\'expédition !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: finalAmount
    });

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(orderResult.message)}`;

    trackPurchase(finalAmount, 'MAD', ['toothpaste']);

    setTimeout(() => {
      setIsOrdering(false);
      window.open(url, '_blank');
    }, 1500);
  };

  const scrollToToothpasteCheckout = () => {
    trackInitiateCheckout(toothpasteQty, calculateToothpasteTotal());
    document.getElementById('toothpaste-checkout-card-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCoffeeBasePrice = () => {
    return 130 * coffeeQty;
  };

  const calculateCoffeeTotal = () => {
    let price = getCoffeeBasePrice();
    if (addCoffeeSpirulina) price += 260;
    if (addCoffeeToothpaste) price += 85;
    return price;
  };

  const handleCoffeeOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateCoffeeTotal();
    const isSingle = coffeeQty === 1;
    const finalAmount = totalPrice + (isSingle ? 20 : 0);

    const orderedProducts = [];
    orderedProducts.push({
      name: isRtl ? 'قهوة لينجزي السوداء 2 في 1 بالجانوديرما' : 'Café Noir Gourmet DXN 2 in 1',
      desc: isRtl ? 'قهوة سوداء طبيعية فاخرة غنية بالفطر الريشي المعجزة' : 'Café noir Gourmet Lingzhi',
      qty: coffeeQty,
      price: 130,
      total: 130 * coffeeQty
    });

    if (addCoffeeSpirulina) {
      orderedProducts.push({
        name: isRtl ? 'مسحوق السبيرولينا العضوي' : 'Poudre de Spiruline Biologique',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 260,
        total: 260
      });
    }

    if (addCoffeeToothpaste) {
      orderedProducts.push({
        name: isRtl ? 'معجون أسنان جانوزي بلس' : 'Dentifrice Prestige Ganozhi Plus',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 85,
        total: 85
      });
    }

    const clientMsg = isRtl
      ? '🚀 أهلاً لالة سميرة، أود تأكيد طلبي لمنتج قهوة لينجزي السوداء 2 في 1 المذكورة أعلاه. يرجى شحن الطرد في أقرب وقت!'
      : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de Café Noir DXN Lingzhi 2 en 1. Merci de me contacter pour l\'expédition !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: finalAmount
    });

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(orderResult.message)}`;

    trackPurchase(finalAmount, 'MAD', ['coffee']);

    setTimeout(() => {
      setIsOrdering(false);
      window.open(url, '_blank');
    }, 1500);
  };
  const scrollToCoffeeCheckout = () => {
    trackInitiateCheckout(coffeeQty, calculateCoffeeTotal());
    document.getElementById('coffee-checkout-card-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCoffee3in1BasePrice = () => {
    return 140 * coffee3in1Qty;
  };

  const calculateCoffee3in1Total = () => {
    let price = getCoffee3in1BasePrice();
    if (addCoffee3in1Spirulina) price += 260;
    if (addCoffee3in1Toothpaste) price += 85;
    if (addCoffee3in1Coffee) price += 130;
    return price;
  };

  const handleCoffee3in1OrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateCoffee3in1Total();

    let addonsText = '';
    if (addCoffee3in1Spirulina) addonsText += `• ${lang === 'ar' ? 'مسحوق السبيرولينا العضوي (+260 درهم)' : 'Poudre de Spiruline Biologique (+260 DH)'}\n`;
    if (addCoffee3in1Toothpaste) addonsText += `• ${lang === 'ar' ? 'معجون أسنان جانوزي بلس (+85 درهم)' : 'Dentifrice Prestige Ganozhi (+85 DH)'}\n`;
    if (addCoffee3in1Coffee) addonsText += `• ${lang === 'ar' ? 'قهوة لينجزي السوداء 2 في 1 (+130 درهم)' : 'Café Gourmet Noir Lingzhi (+130 DH)'}\n`;

    const freeShipping = coffee3in1Qty > 1;

    const message = 
`👑 ${lang === 'ar' ? 'طلب شراء قهوة لينجزي 3 في 1 الفاخرة - سميرة ناتورال' : 'COMMANDE DE CAFÉ DE PRESTIGE LINGZHI 3IN1 - SAMIRA NATURALE'} 👑

👤 ${isRtl ? 'الاسم الكامل للزبون' : 'Nom du Client'}: ${customerName}
�� ${isRtl ? 'عنوان التوصيل (المغرب)' : 'Adresse de Livraison'}: ${customerAddress}
📞 ${isRtl ? 'رقم الهاتف / واتساب' : 'Téléphone'}: ${customerPhone}

---------------------------------------
📦 ${isRtl ? 'الكمية المطلوبة لقهوة 3 في 1' : 'Quantité de Café 3-en-1'}:
• ${coffee3in1Qty} × ${isRtl ? 'قهوة لينجزي 3 في 1 الفاخرة' : 'Café Crème DXN 3 en 1'} [${140 * coffee3in1Qty} ${t.currency}]

➕ ${isRtl ? 'إضافات طقوس العناية' : 'Add-ons Sélectionnés'}:
${addonsText || (isRtl ? '• لا توجد إضافات' : '• Aucun add-on')}\n
🎁 ${isRtl ? 'المزايا والهدايا المجانية' : 'Bonus et Avantages'}:
• ${isRtl ? 'التوصيل والضمان' : 'Livraison'}: ${freeShipping ? (isRtl ? 'شحن سريع ومجاني بالكامل' : 'Livraison Express OFFERTE') : (isRtl ? 'شحن محلي مدفوع' : 'Frais de port normaux')}
• ${isRtl ? 'المتابعة والتوجيه' : 'Suivi'}: ${isRtl ? 'استشارة ومتابعة هاتفية مخصصة من لالة سميرة' : 'Consultation exclusive incluse'}
${coffee3in1Qty >= 2 ? (isRtl ? '• كوب سفر فاخر أو ملعقة خشبية هدية مجانية' : '• Tasse ou spatule offerte') : ''}
---------------------------------------
💵 ${isRtl ? 'المجموع النهائي للدفع' : 'TOTAL À PAYER'}: ${totalPrice + (coffee3in1Qty === 1 ? 20 : 0)} ${t.currency}

🚀 ${isRtl ? 'أهلاً لالة سميرة، أود تأكيد طلبي لمنتج قهوة لينجزي 3 في 1 المذكورة أعلاه. يرجى شحن الطرد في أقرب وقت!' : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de Café Crème DXN 3 en 1. Merci de me contacter pour l\'expédition !'}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;

    trackPurchase(totalPrice + (coffee3in1Qty === 1 ? 20 : 0), 'MAD', ['coffee3in1']);

    setTimeout(() => {
      setIsOrdering(false);
      window.open(url, '_blank');
    }, 1500);
  };

  const scrollToCoffee3in1Checkout = () => {
    trackInitiateCheckout(coffee3in1Qty, calculateCoffee3in1Total());
    document.getElementById('coffee3in1-checkout-card-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getShampooBasePrice = () => {
    return 120 * shampooQty;
  };

  const calculateShampooTotal = () => {
    let price = getShampooBasePrice();
    if (addShampooSpirulina) price += 260;
    if (addShampooToothpaste) price += 85;
    if (addShampooCoffee3in1) price += 140;
    return price;
  };

  const handleShampooOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateShampooTotal();
    const isSingle = shampooQty === 1;
    const finalAmount = totalPrice + (isSingle ? 20 : 0);

    const orderedProducts = [];
    orderedProducts.push({
      name: isRtl ? 'شامبو جانوزي دي إكس إن الطبيعي' : 'Shampoing DXN Ganozhi Prestige',
      desc: isRtl ? 'شامبو صحي غني بالجانوديرما لتغذية الشعر وحمايته' : 'Shampoing Ganozhi naturel',
      qty: shampooQty,
      price: 120,
      total: 120 * shampooQty
    });

    if (addShampooSpirulina) {
      orderedProducts.push({
        name: isRtl ? 'مسحوق السبيرولينا العضوي' : 'Poudre de Spiruline Biologique',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 260,
        total: 260
      });
    }

    if (addShampooToothpaste) {
      orderedProducts.push({
        name: isRtl ? 'معجون أسنان جانوزي بلس' : 'Dentifrice Prestige Ganozhi Plus',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 85,
        total: 85
      });
    }

    if (addShampooCoffee3in1) {
      orderedProducts.push({
        name: isRtl ? 'قهوة لينجزي 3 في 1' : 'Café Prestige Lingzhi 3in1',
        desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
        qty: 1,
        price: 140,
        total: 140
      });
    }

    const clientMsg = isRtl
      ? '🚀 أهلاً لالة سميرة، أود تأكيد طلبي لمنتج شامبو جانوزي دي إكس إن الطبيعي المذكور أعلاه. يرجى شحن الطرد في أقرب وقت!'
      : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de Shampoing DXN Ganozhi. Merci de me contacter pour l\'expédition !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: finalAmount
    });

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(orderResult.message)}`;

    trackPurchase(finalAmount, 'MAD', ['shampoo']);

    setTimeout(() => {
      setIsOrdering(false);
      window.open(url, '_blank');
    }, 1500);
  };

  const scrollToShampooCheckout = () => {
    trackInitiateCheckout(shampooQty, calculateShampooTotal());
    document.getElementById('shampoo-checkout-card-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(spirulinaQty, calculateTotal());
    document.getElementById('checkout-card-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGeneralCartSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(t.formError);
      return;
    }

    if (!isValidMoroccanPhone(customerPhone)) {
      setFormError(lang === 'ar' ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setIsOrdering(true);

    const orderedProducts: { name: string; desc: string; qty: number; price: number; total: number; }[] = [];
    let grandTotal = 0;

    Object.entries(cart).forEach(([pId, qty]) => {
      const resolved = getProductDetailsForCart(pId);
      const price = Number(qty) * resolved.price;
      grandTotal += price;
      orderedProducts.push({
        name: resolved.name,
        desc: isRtl ? 'منتج طبيعي مميز من سلة المتجر' : 'Produit naturel DXN',
        qty: Number(qty),
        price: resolved.price,
        total: price
      });
    });

    const clientMsg = isRtl
      ? '🚀 أهلاً لالة سميرة، أود تأكيد طلبي لهذه المنتجات الطبيعية من متجرك الرائع. يرجى تجهيز الطرد وشحنه لي في أقرب وقت!'
      : 'Bonjour Samira, je souhaite confirmer ma commande ci-dessus de vos merveilleux produits DXN. Merci de me contacter pour l\'expédition !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: grandTotal
    });

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(orderResult.message)}`;

    trackPurchase(grandTotal, 'MAD', Object.keys(cart));

    setTimeout(() => {
      setIsOrdering(false);
      setIsCartOpen(false);
      window.open(url, '_blank');
    }, 1500);
  };

  const cartCount = activeView === 'spirulina'
    ? spirulinaQty
    : activeView === 'toothpaste'
    ? toothpasteQty
    : activeView === 'coffee'
    ? coffeeQty
    : activeView === 'coffee3in1'
    ? coffee3in1Qty
    : activeView === 'shampoo'
    ? shampooQty
    : activeView === 'gano-oil'
    ? 1
    : activeView === 'limonzhi'
    ? 1
    : Object.values(cart).reduce((sum: number, qty: unknown) => sum + (Number(qty) || 0), 0);

  const navItems = [
    { id: 'store', label: isRtl ? 'الرئيسية' : 'Accueil' },
    { id: 'shop', label: isRtl ? 'المتجر' : 'Boutique' },
    { id: 'packs', label: isRtl ? 'باقات العافية' : lang === 'fr' ? 'Packs Bien-être' : 'Wellness Packs' },
    { id: 'bestsellers', label: isRtl ? 'الأكثر مبيعاً' : 'Best Sellers' },
    { id: 'checkout', label: isRtl ? 'إتمام الطلب (COD)' : 'Checkout' },
  ];

  const isItemActive = (id: string) => {
    if (id === 'store') return activeView === 'store';
    if (id === 'shop') return activeView === 'shop';
    if (id === 'packs') return ['packs', 'pack-detail'].includes(activeView);
    if (id === 'bestsellers') return activeView === 'bestsellers';
    if (id === 'checkout') return activeView === 'checkout';
    return false;
  };

  return (
    <div
      id="samira_root_container"
      className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF6F0] text-slate-800'} ${isRtl ? 'font-sans rtl text-right' : 'font-sans ltr text-left'}`}
      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
    >
      <style>{`
        #samira_root_container {
          font-family: ${isRtl ? '"Cairo", "Noto Sans Arabic", "Inter", sans-serif' : '"Plus Jakarta Sans", "Inter", sans-serif'};
          letter-spacing: ${isRtl ? 'normal' : '0.2px'};
        }
        .accent-serif {
          font-family: ${isRtl ? '"Cairo", "Noto Sans Arabic", "Inter", sans-serif' : '"Plus Jakarta Sans", "Inter", sans-serif'};
        }
        @keyframes subtle-shimmer {
          0% { transform: translateX(-150%) skewX(-15deg); }
          50%, 100% { transform: translateX(150%) skewX(-15deg); }
        }
        .luxury-shimmer {
          position: relative;
          overflow: hidden;
        }
        .luxury-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4) 50%, transparent);
          transform: translateX(-150%) skewX(-15deg);
        }
        .luxury-shimmer:hover::after {
          animation: subtle-shimmer 1.5s infinite ease-in-out;
        }
      `}</style>

      {/* Brand-Guided Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#FAF6F0] z-[9999] flex flex-col items-center justify-center p-6"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full bg-[#C5A560]/10 blur-xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-dashed border-[#C5A560]/25 absolute"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl border border-[#E5D5C0]/40 p-2 shadow-sm flex items-center justify-center select-none"
              >
                <img
                  src={logoImg}
                  alt="Samira Naturale Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-6 text-center select-none"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C352D] accent-serif tracking-tight">
                  Samira Naturale
                </h2>
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#C5A560] to-transparent mx-auto mt-2"></div>
                <p className="text-[10px] sm:text-xs text-[#C5A560] font-black uppercase tracking-widest mt-2">
                  {isRtl ? 'صحة طبيعية متكاملة ومستدامة' : 'Soin Bio & Équilibre Holistique'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-over cart drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs cursor-pointer"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed top-0 bottom-0 ${isRtl ? 'left-0' : 'right-0'} w-full max-w-md bg-white z-50 shadow-2xl flex flex-col justify-between border-l border-[#FAF6F0] p-6`}
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#C5A560]" />
                    <h3 className="text-lg font-bold text-[#1C352D]">{t.cartTitle}</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 sm:p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items list */}
                {Object.keys(cart).length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4 text-3xl">🛍️</div>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-xs">{t.cartEmpty}</p>
                  </div>
                ) : (
                  <div className="space-y-4 mb-6">
                    {Object.entries(cart).map(([productId, qty]) => {
                      const resolved = getProductDetailsForCart(productId);
                      return (
                        <div key={productId} className="flex gap-3 bg-[#FAF6F0]/40 p-3.5 rounded-xl border border-[#E5D5C0]/40 items-center justify-between">
                          <img
                            src={resolved.image}
                            alt={resolved.name}
                            className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-100 p-1"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 mx-2.5">
                            <h4 className="text-xs sm:text-sm font-bold text-[#1C352D] leading-snug line-clamp-2">
                              {resolved.name}
                            </h4>
                            <p className="text-xs text-[#C5A560] font-black mt-1">
                              {resolved.price} {t.currency}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateCartQty(productId, -1)}
                              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer text-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-extrabold w-4 text-center">{qty}</span>
                            <button
                              onClick={() => updateCartQty(productId, 1)}
                              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer text-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {Object.keys(cart).length > 0 && (
                <div className="border-t border-slate-100 pt-5 mt-auto bg-white space-y-4">
                  <div className="flex items-center justify-between text-base font-bold text-[#1C352D]">
                    <span>{t.cartTotal}</span>
                    <span className="text-xl font-extrabold text-[#C5A560]">
                      {Object.entries(cart).reduce((sum, [pId, q]) => {
                        const resolved = getProductDetailsForCart(pId);
                        const qty = Number(q) || 0;
                        return sum + resolved.price * qty;
                      }, 0)}{' '}
                      {t.currency}
                    </span>
                  </div>

                  {/* Checkout credentials block inside drawer */}
                  <form onSubmit={handleGeneralCartSubmit} className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="space-y-1">
                      <label className="block text-[10px] sm:text-xs font-bold text-[#1C352D] uppercase tracking-wider">{t.checkoutName}</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={t.checkoutNamePlaceholder}
                        required
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#C5A560]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] sm:text-xs font-bold text-[#1C352D] uppercase tracking-wider">{t.checkoutAddress}</label>
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder={t.checkoutAddressPlaceholder}
                        required
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#C5A560]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] sm:text-xs font-bold text-[#1C352D] uppercase tracking-wider">{t.checkoutPhone}</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder={t.checkoutPhonePlaceholder}
                        required
                        style={{ direction: 'ltr' }}
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                          customerPhone && !isValidMoroccanPhone(customerPhone)
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-200 focus:ring-[#C5A560]'
                        }`}
                      />
                      {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                        <p className="text-rose-500 text-[10px] font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                          المرجو إدخال رقم هاتف مغربي صحيح.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                      className="w-full py-3 bg-[#1C352D] hover:bg-[#25443B] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-xl text-center font-extrabold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      {isOrdering ? '...' : isRtl ? 'تأكيد طلب التوصيل المجاني 🚚' : 'Valider ma commande gratuite'}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="w-full py-2.5 border border-[#1C352D]/20 text-[#1C352D] hover:bg-slate-50 rounded-xl text-center font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      {isRtl ? 'إضافة منتج آخر' : lang === 'fr' ? 'Ajouter un autre produit' : 'Add another product'}
                    </button>

                    <p className="text-center text-[9px] text-[#C5A560] mt-1 font-semibold">⚡ التوصيل السريع مجاني بجميع مدن المغرب مع متابعة طبية هدية</p>
                  </form>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Fullscreen Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999] cursor-pointer"
            />
            
            {/* Full-screen Drawer Panel sliding from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-[1000] shadow-2xl flex flex-col justify-between border-l border-black/[0.04] dark:border-white/[0.06] p-6 sm:p-8"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {/* Header inside Menu Drawer */}
              <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                <div className="flex items-center gap-2.5">
                  <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-full border border-[#C9A227]/20 p-0.5 bg-white object-contain" referrerPolicy="no-referrer" />
                  <span className="text-base font-bold text-[#1F4D3A] dark:text-white uppercase tracking-wider leading-none">Samira</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] text-[#1F4D3A] dark:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items in Mobile Menu */}
              <div className="flex-1 py-8 overflow-y-auto space-y-5">
                {[
                  { id: 'store', label: isRtl ? 'الرئيسية' : 'Accueil', isSection: false },
                  { id: 'shop', label: isRtl ? 'المتجر الكلي' : 'Boutique', isSection: false },
                  { id: 'packs', label: isRtl ? 'باقات العافية' : 'Packs Bien-être', isSection: false },
                  { id: 'about', label: isRtl ? 'قصتنا الحقيقية' : 'Notre Histoire', isSection: true, targetId: 'about_section' },
                  { id: 'blog', label: isRtl ? 'مجلة العافية والمدونة' : 'Blog & Conseils', isSection: false, isBlog: true },
                  { id: 'contact', label: isRtl ? 'استشارة مجانية واتساب' : 'Contact WhatsApp', isSection: true, targetId: 'whatsapp_section' }
                ].map((item) => {
                  const isActive = !item.isSection && !item.isBlog && activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.isBlog) {
                          setIsBlogOpen(true);
                        } else if (item.isSection) {
                          if (activeView !== 'store') {
                            handleNavigateView('store');
                            setTimeout(() => {
                              document.getElementById(item.targetId || '')?.scrollIntoView({ behavior: 'smooth' });
                            }, 450);
                          } else {
                            document.getElementById(item.targetId || '')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          handleNavigateView(item.id as any);
                        }
                      }}
                      className="w-full text-left py-2 px-1 text-lg font-bold flex items-center justify-between transition-colors border-b border-transparent hover:border-[#C9A227]/20"
                      style={{ textAlign: isRtl ? 'right' : 'left' }}
                    >
                      <span className={isActive ? 'text-[#C9A227]' : 'text-[#1F4D3A] dark:text-white hover:text-[#C9A227]'}>
                        {item.label}
                      </span>
                      <span className="text-xs text-[#C9A227]">✦</span>
                    </button>
                  );
                })}

                {/* Secondary actions in Mobile drawer */}
                <div className="pt-8 border-t border-black/[0.05] dark:border-white/[0.05] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'المظهر' : 'Thème'}</span>
                    <button
                      onClick={() => setIsDark(!isDark)}
                      className="p-2 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] text-[#1B1B1B] dark:text-[#C9A227] flex items-center justify-center cursor-pointer"
                    >
                      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'اللغة' : 'Langue'}</span>
                      <button
                        onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] text-stone-700 dark:text-slate-200 text-xs font-semibold"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#1F4D3A] dark:text-[#C9A227]" />
                        <span>
                          {lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'Español'}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isMobileLangOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden border border-black/[0.04] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] rounded-2xl mt-1 divide-y divide-black/[0.03] dark:divide-white/[0.03]"
                        >
                          {(['ar', 'fr', 'en', 'es'] as LanguageCode[]).map((langOption) => {
                            const isActive = lang === langOption;
                            return (
                              <button
                                key={langOption}
                                onClick={() => {
                                  setLang(langOption);
                                  setIsMobileLangOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-xs font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                  isActive
                                    ? 'bg-[#1F4D3A]/5 dark:bg-[#C9A227]/10 text-[#1F4D3A] dark:text-[#C9A227] font-bold'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                                }`}
                                style={{ direction: langOption === 'ar' ? 'rtl' : 'ltr' }}
                              >
                                <span>
                                  {langOption === 'ar' ? 'العربية' : langOption === 'fr' ? 'Français' : langOption === 'en' ? 'English' : 'Español'}
                                </span>
                                {isActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A] dark:bg-[#C9A227]" />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Bottom direct assistance info */}
              <div className="bg-[#FAF7F2] dark:bg-slate-900 border border-[#D4AF37]/20 rounded-2xl p-4.5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
                    {isRtl ? 'الدعم والاستشارة العضوية' : 'CONSEIL BIO ET ASSISTANCE'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  {isRtl 
                    ? 'سميرة ترافقكم طيلة رحلة عافيتكم العضوية. تواصلوا مباشرة للاستشارة المجانية'
                    : 'Samira vous accompagne personnellement pour vos programmes de compléments organiques.'}
                </p>
                <a
                  href={`https://wa.me/212623193237?text=${encodeURIComponent(isRtl ? 'مرحباً سميرة، أود الاستفسار عن المكملات الغذائية DXN والتوصيل' : 'Bonjour Samira, je souhaite avoir un conseil sur les suppléments DXN.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-xs hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isRtl ? 'دردشة مباشرة واستشارة مجانية' : 'Conseil WhatsApp Gratuit'}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slide-over Premium Wishlist Drawer */}
      <AnimatePresence>
        {isWishlistOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[9999] cursor-pointer"
            />
            
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl z-[10000] shadow-2xl flex flex-col justify-between border-l border-black/[0.04] dark:border-white/[0.06] p-6 sm:p-8"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#C9A227] fill-[#C9A227]" />
                  <span className="text-base font-bold text-[#1F4D3A] dark:text-white uppercase tracking-wider">
                    {isRtl ? 'المفضلة المحفوظة' : 'Mes Favoris'}
                  </span>
                  <span className="text-xs bg-black/[0.04] dark:bg-white/[0.08] px-2.5 py-1 rounded-full text-[#C9A227] font-black">
                    {wishlist.length}
                  </span>
                </div>
                <button onClick={() => setIsWishlistOpen(false)} className="p-2 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] cursor-pointer">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Wishlist Items List */}
              <div className="flex-1 py-6 overflow-y-auto space-y-4">
                {wishlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#FAF7F2] dark:bg-slate-900 border border-[#D4AF37]/25 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-slate-300 dark:text-slate-700" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-[#1F4D3A] dark:text-white">
                        {isRtl ? 'المفضلة فارغة حالياً' : 'Votre liste est vide'}
                      </h4>
                      <p className="text-xs text-slate-400 font-semibold leading-relaxed max-w-xs mx-auto">
                        {isRtl ? 'تصفح باقات العافية والمكملات وأضف العناصر المفضلة لديك للوصول السريع' : 'Ajoutez des suppléments organiques et thés précieux lors de votre parcours.'}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsWishlistOpen(false);
                        handleNavigateView('shop');
                      }}
                      className="px-6 py-3.5 bg-[#1F4D3A] dark:bg-[#C9A227] hover:bg-[#1F4D3A]/90 text-white dark:text-slate-950 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
                    >
                      {isRtl ? 'استكشف المتجر الآن' : 'Découvrir la boutique'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {wishlist.map((itemId) => {
                      const prod = (productsData as any)[itemId];
                      if (!prod) return null;
                      const translation = lang === 'ar' ? prod.ar : lang === 'fr' ? prod.fr : prod.en;
                      return (
                        <div
                          key={itemId}
                          className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2]/50 dark:bg-slate-900/50 border border-black/[0.03] dark:border-white/[0.04] relative group hover:border-[#C9A227]/30 transition-all"
                        >
                          <img src={prod.image} alt={translation.name} className="w-14 h-14 rounded-xl object-contain bg-white p-1" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-black text-[#1F4D3A] dark:text-white truncate">
                              {translation.name}
                            </h4>
                            <p className="text-[10px] text-[#C9A227] font-bold mt-0.5">
                              {prod.price} {isRtl ? 'درهم' : 'MAD'}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1.5 shrink-0">
                            <button
                              onClick={() => {
                                handleNavigateView(itemId as any);
                                setIsWishlistOpen(false);
                              }}
                              className="px-3 py-1.5 bg-[#1F4D3A] dark:bg-[#C9A227] hover:bg-opacity-90 text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                            >
                              {isRtl ? 'عرض' : 'Voir'}
                            </button>
                            <button
                              onClick={() => toggleWishlist(itemId)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-black/[0.02] cursor-pointer"
                              title="Delete"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="border-t border-black/[0.05] dark:border-white/[0.05] pt-5">
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="w-full py-4 bg-[#1F4D3A] dark:bg-[#C9A227] hover:bg-opacity-90 text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isRtl ? 'الذهاب إلى سلة الشراء' : 'Aller au panier'}</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slide-over Premium User Profile Drawer */}
      <AnimatePresence>
        {isUserOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUserOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[9999] cursor-pointer"
            />
            
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl z-[10000] shadow-2xl flex flex-col justify-between border-l border-black/[0.04] dark:border-white/[0.06] p-6 sm:p-8"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-base font-bold text-[#1F4D3A] dark:text-white uppercase tracking-wider">
                    {isRtl ? 'بوابة العميل الوفير' : 'Espace Membre VIP'}
                  </span>
                </div>
                <button onClick={() => setIsUserOpen(false)} className="p-2 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] cursor-pointer">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* User Profile Content */}
              <div className="flex-1 py-6 overflow-y-auto space-y-6">
                {/* Profile Avatar Card */}
                <div className="bg-gradient-to-br from-[#1F4D3A] to-[#143226] border-2 border-[#D4AF37]/35 rounded-3xl p-5 text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-2xl rounded-full" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-white text-[#1F4D3A] flex items-center justify-center font-black text-lg border-2 border-[#D4AF37]/50">
                      {customerName ? customerName.slice(0, 2).toUpperCase() : 'SN'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base">
                        {customerName || (isRtl ? 'ضيفنا العزيز' : 'Membre Privilégié')}
                      </h4>
                      <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mt-0.5">
                        👑 {isRtl ? 'عضو العافية الذهبي' : 'Wellness Ambassador'}
                      </p>
                    </div>
                  </div>
                  {/* Loyalty Progress */}
                  <div className="mt-5 pt-4.5 border-t border-white/10 space-y-2 relative z-10">
                    <div className="flex justify-between text-[10px] font-bold text-emerald-100">
                      <span>{isRtl ? 'ترتيب النقاط التراكمي' : 'Niveau fidélité'}</span>
                      <span className="text-[#D4AF37]">750 / 1000 PV</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <p className="text-[9px] text-emerald-200/80 leading-relaxed">
                      {isRtl 
                        ? 'متبقي 250 نقطة للحصول على شحن مجاني دائم ومكافأة استشارة إضافية هدية!'
                        : 'Encore 250 points cumulés pour activer les avantages exclusifs et remises permanentes.'}
                    </p>
                  </div>
                </div>

                {/* Delivery Information Section */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-black text-slate-400 tracking-wider uppercase">
                    📍 {isRtl ? 'بيانات التوصيل المحفوظة' : 'COORDONNÉES DE LIVRAISON'}
                  </h4>
                  <div className="bg-[#FAF7F2] dark:bg-slate-900 border border-[#D4AF37]/15 rounded-2xl p-4.5 space-y-3">
                    <div className="flex items-start gap-3">
                      <User className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">{isRtl ? 'الاسم' : 'Nom complet'}</span>
                        <span className="text-xs font-extrabold text-[#1F4D3A] dark:text-white">
                          {customerName || (isRtl ? 'لم يحدد بعد' : 'Non renseigné')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-black/[0.04] dark:border-white/[0.04] pt-3">
                      <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">{isRtl ? 'العنوان' : 'Adresse de livraison'}</span>
                        <span className="text-xs font-extrabold text-[#1F4D3A] dark:text-white leading-relaxed">
                          {customerAddress || (isRtl ? 'لم يحدد بعد' : 'Non renseignée')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-black/[0.04] dark:border-white/[0.04] pt-3">
                      <Phone className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">{isRtl ? 'الهاتف' : 'Numéro de téléphone'}</span>
                        <span className="text-xs font-extrabold text-[#1F4D3A] dark:text-white font-mono">
                          {customerPhone || (isRtl ? 'لم يحدد بعد' : 'Non renseigné')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secure information notice */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 rounded-2xl flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-emerald-800 dark:text-emerald-300 leading-relaxed font-semibold">
                    {isRtl
                      ? 'بياناتك مشفرة ومحفوظة محلياً على جهازك فقط لتسهيل عمليات طلبك القادمة بكل أمان وسرعة.'
                      : 'Vos données sont stockées localement sur votre appareil pour faciliter vos futures commandes.'}
                  </p>
                </div>
              </div>

              <div className="border-t border-black/[0.05] dark:border-white/[0.05] pt-5 space-y-3">
                <button
                  onClick={() => {
                    setIsUserOpen(false);
                    handleNavigateView('checkout');
                  }}
                  className="w-full py-4 bg-[#1F4D3A] dark:bg-[#C9A227] hover:bg-opacity-90 text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isRtl ? 'تعديل البيانات وإتمام الطلب' : 'Modifier les données & commander'}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slide-over Premium Blog/Wellness Journal Overlay */}
      <AnimatePresence>
        {isBlogOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBlogOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[9999] cursor-pointer"
            />
            
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-lg bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl z-[10000] shadow-2xl flex flex-col justify-between border-l border-black/[0.04] dark:border-white/[0.06] p-6 sm:p-8"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-base font-bold text-[#1F4D3A] dark:text-white uppercase tracking-wider">
                    {isRtl ? 'مجلة سميرة لنمط الحياة العضوي' : 'Journal de Vitalité DXN'}
                  </span>
                </div>
                <button onClick={() => setIsBlogOpen(false)} className="p-2 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] cursor-pointer">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Scrollable Blog Content with real articles */}
              <div className="flex-1 py-6 overflow-y-auto space-y-6">
                <div className="space-y-5">
                  {[
                    {
                      title: isRtl ? 'فطر ريشي (الجانوديرما): سر الشباب الدائم والمناعة الحديدية' : 'Fétiche Reishi Ganoderma: Le secret d\'une immunité impénétrable',
                      date: '2026-06-25',
                      readTime: isRtl ? 'قراءة 5 دقائق' : '5 min de lecture',
                      desc: isRtl 
                        ? 'اكتشف كيف يساهم الفطر الريشي الأحمر في طرد السموم المتراكمة من الجسم، تقوية مناعة الخلايا الطبيعية، وتحسين كفاءة النوم اليومي.' 
                        : 'Découvrez comment le roi des herbes purifie le système lymphatique, neutralise le stress cellulaire et favorise une longévité rayonnante.',
                      tag: 'Ganoderma'
                    },
                    {
                      title: isRtl ? 'السبيرولينا العضوية: الغذاء الخارق الأهم لتعويض نقص الفيتامينات' : 'Spiruline Bio: Le super-aliment pour combler les carences en fer et protéines',
                      date: '2026-06-20',
                      readTime: isRtl ? 'قراءة 4 دقائق' : '4 min de lecture',
                      desc: isRtl 
                        ? 'تُعتبر السبيرولينا منجمًا طبيعيًا للبروتينات النباتية، الحديد، والكلوروفيل. تعرف على المقدار الأمثل لتناولها يومياً لشحن حيويتك.'
                        : 'Véritable pilier de la micronutrition, découvrez pourquoi la NASA et l\'OMS l\'utilisent comme arme principale contre les carences énergétiques.',
                      tag: 'Spirulina'
                    },
                    {
                      title: isRtl ? 'لماذا يجب استبدال قهوتك العادية بقهوة لينجزي السوداء بالفطر الريشي؟' : 'Café Noir Lingzhi: Pourquoi l\'associer au Reishi change votre transit',
                      date: '2026-06-15',
                      readTime: isRtl ? 'قراءة 3 دقائق' : '3 min de lecture',
                      desc: isRtl 
                        ? 'القهوة العادية قد تسبب حموضة المعدة، بينما قهوة لينجزي السوداء الخالية من السكر المضاف تمدك بتركيز صافٍ دون إرهاق قلبك.'
                        : 'Le café bio DXN alcalinise l\'organisme, apporte de l\'énergie saine et évite les palpitations habituelles dues à la caféine pure.',
                      tag: 'Wellness'
                    }
                  ].map((post, idx) => (
                    <article
                      key={idx}
                      className="p-5 rounded-2xl bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.05] hover:border-[#C9A227]/30 transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#C9A227] bg-[#FAF7F2] dark:bg-slate-900 border border-[#D4AF37]/20 px-2.5 py-1 rounded-md">
                          {post.tag}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">{post.readTime}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-black text-[#1F4D3A] dark:text-white hover:text-[#C9A227] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {post.desc}
                      </p>
                      <div className="pt-2 flex justify-between items-center border-t border-black/[0.02] dark:border-white/[0.02]">
                        <span className="text-[9px] text-slate-400 font-bold">{post.date}</span>
                        <a
                          href={`https://wa.me/212623193237?text=${encodeURIComponent(isRtl ? `مرحباً سميرة، قرأت مقالك عن ${post.tag} وأريد الحصول على استشارة مخصصة` : `Bonjour Samira, j'ai lu votre article sur ${post.tag} et je souhaite avoir un conseil.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-black text-[#C9A227] hover:underline"
                        >
                          {isRtl ? 'استشر سميرة حول هذا الموضوع ←' : 'Savoir plus ←'}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/[0.05] dark:border-white/[0.05] pt-5">
                <button
                  onClick={() => setIsBlogOpen(false)}
                  className="w-full py-4 bg-[#1F4D3A] dark:bg-[#C9A227] hover:bg-opacity-90 text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer text-center"
                >
                  {isRtl ? 'إغلاق وقراءة لاحقاً' : 'Fermer le journal'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fullscreen Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-slate-950 z-[99999] overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {/* Close & Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600 dark:text-[#D4AF37]" />
                <h3 className="text-lg font-black text-slate-800 dark:text-white">
                  {isRtl ? 'البحث الذكي عن منتجات DXN' : 'Recherche de Produits DXN'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'اكتب اسم المنتج أو الباقة أو الفائدة...' : 'Rechercher un produit, pack ou ingrédient...'}
                className="w-full h-14 sm:h-16 px-5 py-4 pl-12 rounded-2xl bg-[#FAF7F2] dark:bg-slate-900 border border-[#EADFC9]/40 dark:border-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-bold text-base sm:text-lg text-slate-800 dark:text-white"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 sm:w-6 h-5 sm:h-6 text-slate-400" />
            </div>

            {/* Content Switch: query empty vs query typing */}
            {searchQuery.trim() === '' ? (
              <div className="flex-1 space-y-6">
                {/* Popular Products Tags */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-black mb-3">
                    🔥 {isRtl ? 'المنتجات الأكثر طلباً' : 'Suggestions Populaires'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'spirulina', label: isRtl ? 'السبيرولينا العضوية' : 'Spiruline Bio' },
                      { id: 'coffee', label: isRtl ? 'قهوة لينجزي السوداء' : 'Café Lingzhi' },
                      { id: 'cocozhi', label: isRtl ? 'شوكولاتة كوكوزي' : 'Cocozhi' },
                      { id: 'soap', label: isRtl ? 'صابون جانوزي' : 'Savon Ganozhi' },
                      { id: 'toothpaste', label: isRtl ? 'معجون جانوزي' : 'Dentifrice Ganozhi' },
                      { id: 'family_pack', label: isRtl ? 'باقة العائلة السعيدة' : 'Pack Famille' }
                    ].map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => {
                          setSearchQuery(tag.label);
                          addRecentSearch(tag.label);
                        }}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-50 hover:bg-emerald-500 hover:text-white dark:bg-slate-900 dark:hover:bg-[#D4AF37] dark:hover:text-slate-950 text-slate-655 dark:text-slate-300 transition-colors border border-slate-100 dark:border-slate-800 cursor-pointer"
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-black">
                        ⏱️ {isRtl ? 'عمليات البحث الأخيرة' : 'Recherches Récentes'}
                      </h4>
                      <button
                        onClick={() => {
                          setRecentSearches([]);
                          try { localStorage.removeItem('samira_recent_searches'); } catch (e) {}
                        }}
                        className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors"
                      >
                        {isRtl ? 'مسح الكل' : 'Effacer tout'}
                      </button>
                    </div>
                    <div className="space-y-1.5">
                      {recentSearches.map((term, i) => (
                        <div
                          key={i}
                          onClick={() => setSearchQuery(term)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer text-sm font-bold text-slate-600 dark:text-slate-350 transition-colors"
                        >
                          <span className="opacity-40">⏱️</span>
                          <span>{term}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              (() => {
                const query = searchQuery.toLowerCase().trim();
                const filteredResults = getSearchableProducts().filter(p => {
                  return (
                    p.name.toLowerCase().includes(query) ||
                    p.desc.toLowerCase().includes(query) ||
                    (p.searchTerms && p.searchTerms.some((term: string) => term.toLowerCase().includes(query)))
                  );
                });

                return (
                  <div className="flex-1 space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-black">
                      🔍 {isRtl ? `نتائج البحث (${filteredResults.length})` : `Résultats (${filteredResults.length})`}
                    </h4>

                    {filteredResults.length === 0 ? (
                      <div className="py-12 text-center text-slate-400 select-none">
                        <p className="text-lg font-bold mb-1">☹️ {isRtl ? 'لا توجد نتائج مطابقة' : 'Aucun résultat trouvé'}</p>
                        <p className="text-xs">{isRtl ? 'جرب البحث بكلمة مفتاحية مختلفة مثل "طاقة" أو "باقة" أو "فطر"' : 'Essayez avec un autre mot-clé.'}</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                        {filteredResults.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => {
                              addRecentSearch(searchQuery);
                              setIsSearchOpen(false);
                              setSearchQuery('');
                              if (p.type === 'pack') {
                                handleNavigateView('packs');
                              } else {
                                handleNavigateView(p.view);
                              }
                            }}
                            className="flex gap-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-[#D4AF37]/50 shadow-xs cursor-pointer group transition-all animate-fadeIn"
                          >
                            <div className="w-16 h-16 rounded-xl bg-[#FAF7F2] flex items-center justify-center p-1 shrink-0 overflow-hidden">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover filter drop-shadow-xs group-hover:scale-105 transition-transform"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <h5 className="text-sm font-black text-slate-850 dark:text-white line-clamp-1 leading-snug group-hover:text-emerald-600 dark:group-hover:text-[#D4AF37] transition-colors">
                                {p.name}
                              </h5>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{p.desc}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-black text-emerald-700 dark:text-[#D4AF37]">{p.price} {t.currency}</span>
                                <span className="text-[10px] uppercase font-black tracking-widest text-[#D4AF37] px-1.5 py-0.5 bg-[#FAF7F2] rounded-md scale-90 border border-[#EADFC9]/30">
                                  {p.type === 'pack' ? (isRtl ? 'باقة توفير' : 'Pack Éco') : (isRtl ? 'منتج طبيعي' : 'DXN Certifié')}
                                </span>
                              </div>
                            </div>
                            <span className="self-center text-xs opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">➔</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Sticky Navigation */}
      <motion.header
        id="nav_header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-45 w-full select-none transition-all duration-400 ease-in-out ${
          isScrolled
            ? 'h-[92px] md:h-[68px] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)] border-b border-black/[0.04] dark:border-white/[0.04]'
            : 'h-[104px] md:h-[80px] bg-white dark:bg-slate-950 border-b border-black/[0.06] dark:border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between justify-center gap-1.5 md:gap-0">
          
          {/* ================= DESKTOP HEADER (MD & UP) ================= */}
          <div className="hidden md:grid grid-cols-12 items-center w-full h-full">
            {/* 1. Left side: Brand Logo / Title or Back Button */}
            <div className="col-span-4 flex items-center justify-start gap-3">
              {activeView !== 'store' ? (
                <motion.button
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigateView(activeView === 'shop' ? 'store' : 'shop')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 cursor-pointer shadow-xs ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-100 hover:bg-slate-800'
                      : 'bg-[#FAF8F3] hover:bg-[#FAF8F3]/80 text-[#1F4D3A] border-[#1F4D3A]/10'
                  }`}
                >
                  <span>
                    {activeView === 'shop'
                      ? (isRtl ? '← الرئيسية' : lang === 'fr' ? '← Accueil' : '← Home')
                      : (isRtl ? '← العودة للمتجر' : lang === 'fr' ? '← Retour' : '← Back to Shop')}
                  </span>
                </motion.button>
              ) : (
                <div className="flex items-center gap-3">
                  <motion.img
                    id="header_brand_logo"
                    src={logoImg}
                    alt="Samira Naturale Logo"
                    className="w-12 h-12 rounded-full border border-[#C9A227]/20 p-0.5 shadow-xs object-contain cursor-pointer bg-white"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(201,162,39,0.25)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    onClick={() => handleNavigateView('store')}
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col cursor-pointer" onClick={() => handleNavigateView('store')}>
                    <h1 className="text-base font-bold text-[#1F4D3A] dark:text-white leading-tight tracking-tight uppercase">
                      Samira Naturale
                    </h1>
                    <p className="text-[9px] text-[#C9A227] font-semibold uppercase tracking-[0.15em] leading-none mt-0.5">
                      {isRtl ? 'مستحضرات عضوية فاخرة' : 'PREMIUM NATURAL WELLNESS'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Center: Navigation links (Col span 4 centered) */}
            <nav className="col-span-4 flex items-center justify-center gap-9 text-xs font-semibold uppercase tracking-wider">
              {navItems.map((item, index) => {
                const isActive = isItemActive(item.id);
                if (item.id === 'shop') {
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setIsShopHovered(true)}
                      onMouseLeave={() => setIsShopHovered(false)}
                      className="relative py-4 flex items-center"
                    >
                      <motion.button
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0, y: -10 },
                          visible: (i: number) => ({
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.1 + i * 0.05,
                              duration: 0.4,
                              ease: "easeOut"
                            }
                          })
                        }}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        onClick={() => handleNavigateView('shop')}
                        className="group relative py-2 px-1 text-xs font-semibold tracking-[0.3px] uppercase transition-colors duration-250 cursor-pointer"
                      >
                        <span className={`transition-colors duration-250 ${
                          isActive
                            ? 'text-[#1F4D3A] dark:text-[#C9A227]'
                            : 'text-[#1B1B1B]/80 dark:text-white/80 hover:text-[#1F4D3A] dark:hover:text-[#C9A227]'
                        }`}>
                          {item.label}
                        </span>
                        {/* Gold Underline */}
                        <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C9A227] origin-center transition-transform duration-250 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`} />
                      </motion.button>

                      {/* Mega Dropdown menu */}
                      <AnimatePresence>
                        {isShopHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className={`absolute left-1/2 -translate-x-1/2 top-full z-50 mt-1 w-[560px] md:w-[600px] bg-[#FAF8F5] dark:bg-slate-900 border border-[#C9A227]/20 dark:border-white/[0.08] rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)]`}
                          >
                            {/* Triangle Caret on top */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rotate-45 bg-[#FAF8F5] dark:bg-slate-900 border-t border-l border-[#C9A227]/20 dark:border-white/[0.08]" />

                            <div className="relative grid grid-cols-2 gap-3 z-10">
                              {[
                                {
                                  id: 'coffee',
                                  image: 'https://i.ibb.co/s9qYfmDg/image.png',
                                  labelAr: 'القهوة الصحية',
                                  labelFr: 'Café Santé',
                                  labelEn: 'Healthy Coffee',
                                  subAr: 'طاقة ونشاط طبيعي متجدد',
                                  subFr: 'Énergie & Vitalité',
                                  subEn: 'Energy & Vitality'
                                },
                                {
                                  id: 'supplements',
                                  image: 'https://i.ibb.co/spST9XJM/image.png',
                                  labelAr: 'المكملات الغذائية',
                                  labelFr: 'Compléments Bio',
                                  labelEn: 'Organic Supplements',
                                  subAr: 'غذاء العقل وتعزيز الخلايا',
                                  subFr: 'Nutrition Cellulaire',
                                  subEn: 'Cellular Nutrition'
                                },
                                {
                                  id: 'drinks',
                                  image: 'https://i.ibb.co/Jj1wrV2b/image.png',
                                  labelAr: 'المشروبات الصحية',
                                  labelFr: 'Boissons Saines',
                                  labelEn: 'Healthy Drinks',
                                  subAr: 'انتعاش وحيوية طبيعية يومية',
                                  subFr: 'Fraîcheur Naturelle',
                                  subEn: 'Natural Freshness'
                                },
                                {
                                  id: 'foods',
                                  image: 'https://i.ibb.co/XrgDjvXD/image.png',
                                  labelAr: 'الأغذية الصحية',
                                  labelFr: 'Aliments Sains',
                                  labelEn: 'Healthy Foods',
                                  subAr: 'تغذية قلوية شاملة ومتكاملة',
                                  subFr: 'Alimentation Saine',
                                  subEn: 'Healthy Nutrition'
                                },
                                {
                                  id: 'care',
                                  image: 'https://i.ibb.co/fYjxy5MD/image.png',
                                  labelAr: 'العناية الشخصية',
                                  labelFr: 'Hygiène Corporelle',
                                  labelEn: 'Personal Hygiene',
                                  subAr: 'حماية ونظافة طبيعية متكاملة',
                                  subFr: 'Hygiène Naturelle',
                                  subEn: 'Natural Hygiene'
                                },
                                {
                                  id: 'cosmetics',
                                  image: 'https://i.ibb.co/GfPQNL6M/image.png',
                                  labelAr: 'مستحضرات التجميل',
                                  labelFr: 'Kallow Cosmétiques',
                                  labelEn: 'Kallow Cosmetics',
                                  subAr: 'جمال وإشراق طبيعي دائم',
                                  subFr: 'Beauté Éclatante',
                                  subEn: 'Radiant Beauty'
                                }
                              ].map((cat) => {
                                const isCatActive = activeCategoryFilter === cat.id && activeView === 'shop';
                                return (
                                  <button
                                    key={cat.id}
                                    onClick={() => {
                                      setActiveCategoryFilter(cat.id);
                                      handleNavigateView('shop');
                                      setIsShopHovered(false);
                                    }}
                                    className={`w-full flex items-center gap-3 p-2 rounded-2xl border transition-all duration-300 group/item cursor-pointer ${
                                      isCatActive
                                        ? 'bg-[#1F4D3A] text-white border-transparent dark:bg-[#C9A227] dark:text-slate-950'
                                        : 'hover:bg-black/[0.03] dark:hover:bg-white/[0.05] border-transparent hover:border-[#C9A227]/20 text-[#1B1B1B]/90 dark:text-slate-200'
                                    }`}
                                  >
                                    <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-[#C5A560]/10 group-hover/item:border-[#C5A560]/30 transition-colors">
                                      <img
                                        src={cat.image}
                                        alt={cat.labelAr}
                                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                                        referrerPolicy="no-referrer"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                      <h4 className={`text-xs font-black transition-colors truncate ${isCatActive ? 'text-white dark:text-slate-950' : 'text-[#1C352D] dark:text-white group-hover/item:text-[#C9A227]'}`}>
                                        {lang === 'ar' ? cat.labelAr : lang === 'fr' ? cat.labelFr : cat.labelEn}
                                      </h4>
                                      <p className={`text-[9px] truncate mt-0.5 ${isCatActive ? 'text-emerald-100/80 dark:text-slate-800/80' : 'text-slate-400 dark:text-slate-500'}`}>
                                        {lang === 'ar' ? cat.subAr : lang === 'fr' ? cat.subFr : cat.subEn}
                                      </p>
                                    </div>
                                    <span className={`text-xs transition-colors px-1 shrink-0 ${isCatActive ? 'text-white dark:text-slate-950' : 'text-slate-300 group-hover/item:text-[#C9A227]'}`}>
                                      {isRtl ? '←' : '→'}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.button
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: (i: number) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.1 + i * 0.05,
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      })
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    onClick={() => handleNavigateView(item.id as any)}
                    className="group relative py-2 px-1 text-xs font-semibold tracking-[0.3px] uppercase transition-colors duration-250 cursor-pointer"
                  >
                    <span className={`transition-colors duration-250 ${
                      isActive
                        ? 'text-[#1F4D3A] dark:text-[#C9A227]'
                        : 'text-[#1B1B1B]/80 dark:text-white/80 hover:text-[#1F4D3A] dark:hover:text-[#C9A227]'
                    }`}>
                      {item.label}
                    </span>
                    {/* Gold Underline */}
                    <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C9A227] origin-center transition-transform duration-250 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </motion.button>
                );
              })}
            </nav>

            {/* 3. Right side: Controls (Col span 4 right-aligned) */}
            <div className="col-span-4 flex items-center justify-end gap-3.5">
              {/* Fullscreen Search Button */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                whileHover={{ scale: 1.1, y: -1, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-black/30 backdrop-blur-md text-[#1B1B1B] dark:text-slate-200 cursor-pointer shadow-xs flex items-center justify-center"
                title={isRtl ? 'بحث ذكي' : 'Recherche intelligente'}
              >
                <Search className="w-4 h-4" />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDark(!isDark)}
                whileHover={{ rotate: 180, scale: 1.1, boxShadow: "0 0 15px rgba(201,162,39,0.35)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-2.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-black/30 backdrop-blur-md text-[#1B1B1B] dark:text-[#C9A227] cursor-pointer shadow-xs flex items-center justify-center"
                title={isRtl ? 'تغيير المظهر' : 'Basculer le thème'}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              {/* Premium Language Switcher (Interactive Dropdown Menu) */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                  onBlur={() => setTimeout(() => setIsDesktopLangOpen(false), 200)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-black/30 backdrop-blur-md text-[#1B1B1B] dark:text-slate-200 cursor-pointer shadow-xs font-semibold text-xs transition-colors"
                  aria-expanded={isDesktopLangOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-3.5 h-3.5 text-[#1F4D3A] dark:text-[#C9A227]" />
                  <span>
                    {lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'Español'}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isDesktopLangOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isDesktopLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden py-1"
                    >
                      {(['ar', 'fr', 'en', 'es'] as LanguageCode[]).map((langOption) => {
                        const isActive = lang === langOption;
                        return (
                          <button
                            key={langOption}
                            onMouseDown={() => {
                              setLang(langOption);
                              setIsDesktopLangOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                              isActive
                                ? 'bg-[#1F4D3A]/5 dark:bg-[#C9A227]/10 text-[#1F4D3A] dark:text-[#C9A227] font-bold'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-stone-50 dark:hover:bg-slate-800'
                            } ${langOption === 'ar' ? 'text-right justify-end font-serif gap-2' : ''}`}
                            style={{ direction: langOption === 'ar' ? 'rtl' : 'ltr' }}
                          >
                            <span>
                              {langOption === 'ar' ? 'العربية' : langOption === 'fr' ? 'Français' : langOption === 'en' ? 'English' : 'Español'}
                            </span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A] dark:bg-[#C9A227]" />
                            )}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart Button */}
              <motion.button
                onClick={() => {
                  if (isPremiumProduct(activeView)) {
                    const el = document.getElementById('premium-checkout-section') || document.getElementById('premium-checkout-form-container');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setIsCartOpen(true);
                  }
                }}
                whileHover={{ y: -3, scale: 1.05, boxShadow: "0 8px 24px rgba(31,77,58,0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-full bg-[#1F4D3A] dark:bg-[#C9A227] text-white dark:text-slate-950 cursor-pointer shadow-md flex items-center justify-center border border-[#C9A227]/20"
              >
                <ShoppingBag className="w-4 h-4 text-white dark:text-slate-950" />
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6, y: 5 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#C9A227] dark:bg-[#1F4D3A] text-white dark:text-white font-extrabold text-[9px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs border-2 border-white dark:border-slate-950"
                >
                  {cartCount}
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* ================= MOBILE HEADER (UNDER MD) ================= */}
          <div className="flex md:hidden items-center justify-between w-full h-12 relative">
            {/* Left aligned: Hamburger Menu Button & Search Icon */}
            <div className="flex items-center gap-1.5 z-10">
              {/* Animated Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="p-1 rounded-xl text-[#1F4D3A] dark:text-white cursor-pointer flex flex-col items-center justify-center gap-1 focus:outline-hidden"
                title="Menu"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current rounded-full block origin-center transition-transform"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-current rounded-full block transition-opacity"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current rounded-full block origin-center transition-transform"
                />
              </motion.button>

              {/* Mobile Search Icon */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full border border-black/[0.04] dark:border-white/[0.06] bg-[#FAF8F3]/50 dark:bg-black/30 text-[#1F4D3A] dark:text-slate-250 cursor-pointer flex items-center justify-center"
              >
                <Search className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Centered Logo/Back Button via absolute layout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="pointer-events-auto">
                {activeView !== 'store' ? (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigateView(activeView === 'shop' ? 'store' : 'shop')}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-[#FAF8F3] text-[#1F4D3A] border-[#1F4D3A]/10'
                    }`}
                  >
                    <span>
                      {activeView === 'shop'
                        ? (isRtl ? '← الرئيسية' : lang === 'fr' ? '← Accueil' : '← Home')
                        : (isRtl ? '← العودة للمتجر' : lang === 'fr' ? '← Retour' : '← Back to Shop')}
                    </span>
                  </motion.button>
                ) : (
                  <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => handleNavigateView('store')}>
                    <img src={logoImg} alt="Logo" className="w-7 h-7 rounded-full border border-[#C9A227]/20 p-0.5 bg-white object-contain" referrerPolicy="no-referrer" />
                    <span className="text-xs font-black text-[#1F4D3A] dark:text-white uppercase tracking-wider leading-none">Samira</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right aligned: Language Switcher and Cart Button */}
            <div className="flex items-center gap-1.5 z-10">
              {/* Premium Language Switcher (Interactive Dropdown Menu) for Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsHeaderMobileLangOpen(!isHeaderMobileLangOpen)}
                  onBlur={() => setTimeout(() => setIsHeaderMobileLangOpen(false), 200)}
                  className="text-[10px] font-extrabold text-[#1F4D3A] dark:text-white px-2 py-1 rounded-md bg-[#FAF8F3]/60 dark:bg-slate-900/50 cursor-pointer border border-black/[0.03] dark:border-white/[0.04] uppercase flex items-center gap-1"
                  title="Change Language"
                  aria-expanded={isHeaderMobileLangOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-2.5 h-2.5 text-[#1F4D3A] dark:text-[#C9A227]" />
                  <span>{lang === 'ar' ? 'عربي' : lang.toUpperCase()}</span>
                  <ChevronDown className={`w-2.5 h-2.5 text-slate-400 transition-transform duration-200 ${isHeaderMobileLangOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isHeaderMobileLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                      className="absolute right-0 mt-1.5 w-32 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden py-1"
                    >
                      {(['ar', 'fr', 'en', 'es'] as LanguageCode[]).map((langOption) => {
                        const isActive = lang === langOption;
                        return (
                          <button
                            key={langOption}
                            onMouseDown={() => {
                              setLang(langOption);
                              setIsHeaderMobileLangOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-[11px] font-bold transition-colors flex items-center justify-between cursor-pointer ${
                              isActive
                                ? 'bg-[#1F4D3A]/5 dark:bg-[#C9A227]/10 text-[#1F4D3A] dark:text-[#C9A227]'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-stone-50 dark:hover:bg-slate-800'
                            } ${langOption === 'ar' ? 'text-right justify-end font-serif gap-1.5' : ''}`}
                            style={{ direction: langOption === 'ar' ? 'rtl' : 'ltr' }}
                          >
                            <span>
                              {langOption === 'ar' ? 'العربية' : langOption === 'fr' ? 'Français' : langOption === 'en' ? 'English' : 'Español'}
                            </span>
                            {isActive && (
                              <span className="w-1 h-1 rounded-full bg-[#1F4D3A] dark:bg-[#C9A227]" />
                            )}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Cart Button */}
              <motion.button
                onClick={() => {
                  if (isPremiumProduct(activeView)) {
                    const el = document.getElementById('premium-checkout-section') || document.getElementById('premium-checkout-form-container');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setIsCartOpen(true);
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative p-1.5 rounded-full bg-[#1F4D3A] dark:bg-[#C9A227] text-white dark:text-slate-950 cursor-pointer shadow-xs flex items-center justify-center border border-[#C9A227]/10"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-white dark:text-slate-950" />
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#C9A227] dark:bg-[#1F4D3A] text-white font-black text-[7px] w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-slate-900"
                >
                  {cartCount}
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* High-Clarity Mobile Navigation Bar (direct links resembling PC layout) */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto scrollbar-none py-1.5 w-full border-t border-black/[0.04] dark:border-white/[0.05] scroll-smooth" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            {navItems.map((item) => {
              const isActive = isItemActive(item.id);
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigateView(item.id as any)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer select-none border ${
                    isActive
                      ? 'bg-[#1F4D3A] border-[#1F4D3A] text-white dark:bg-[#C9A227] dark:border-[#C9A227] dark:text-slate-950 shadow-xs'
                      : 'bg-[#FAF8F3]/80 border-black/[0.04] text-[#1F4D3A] dark:bg-slate-900/40 dark:border-white/[0.04] text-slate-700 dark:text-slate-200 hover:bg-black/[0.04]'
                  }`}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>

        </div>
      </motion.header>

      {/* Conditionally Render views */}
      {activeView === 'store' ? (
        /* ================= GENERAL CATALOGUE VIEW ================= */
        <motion.div
          key="store-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          <SamiraNaturaleHomepage
            lang={lang}
            isRtl={isRtl}
            setActiveView={handleNavigateView}
            handleGeneralInquiry={handleGeneralInquiry}
            addToCart={addToCart}
            setSelectedPackId={setSelectedPackId}
            setShopCategory={setActiveCategoryFilter}
          />
        </motion.div>
      ) : isPremiumProduct(activeView) ? (
        <motion.div
          key={`${activeView}-view`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DXNPremiumProductsPage
            lang={lang}
            isRtl={isRtl}
            handleGeneralInquiry={handleGeneralInquiry}
            productId={activeView}
            setActiveView={handleNavigateView}
          />
        </motion.div>
      ) : activeView === 'spirulina' ? (
        /* ================= DETAILED SPIRULINA LANDING VIEW ================= */
        <motion.div
          key="spirulina-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Back reference warning bar banner */}
          <div className="bg-[#EAF0EC] border-b border-emerald-100 py-3 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
            <span>🌿 {isRtl ? 'أنت تتصفح العروض الحصرية وعافية السوبر فود الطبيعية!' : 'Vous explorez la page exclusive du SuperAliment Miracle.'}</span>
            <button
              onClick={() => {
                handleNavigateView('store');
              }}
              className="px-2.5 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer animate-pulse"
            >
              {isRtl ? 'الرجوع للمتجر للتسوق العام' : 'Retour au catalogue général'}
            </button>
          </div>

          {/* Premium Luxury Hero Section */}
          <section id="hero_section" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0]/40 to-[#FAF6F0] py-12 sm:py-20 lg:py-24 border-b border-[#FAF6F0]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/15 blur-3xl rounded-full -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info content panel */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EC] text-[#1C352D] text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A560] animate-pulse" />
              {copy.heroBadge}
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-bold text-[#1C352D] tracking-tight leading-tight accent-serif">
              {copy.heroTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {copy.heroSub}
            </p>

            {/* Premium Variant Cards selection */}
            <div className="w-full mt-2 space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1C352D] flex items-center gap-2 select-none">
                <span>{isRtl ? 'اختر الحجم المناسب لك:' : 'Choisir le format:'}</span>
                <span className="text-[#C5A560] font-black">
                  {spirulinaVariant === '120' ? (isRtl ? '120 حبة (كورس البداية)' : '120 Comprimés (Cure Starter)') : (isRtl ? '500 حبة (الباقة الإمبراطورية)' : '500 Comprimés (Format Impérial)')}
                </span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {/* 120 Tablets Card */}
                <button
                  type="button"
                  onClick={() => setSpirulinaVariant('120')}
                  className={`relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 text-left cursor-pointer select-none ${
                    spirulinaVariant === '120'
                      ? 'border-[#1C352D] bg-[#FAF6F0] shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-350'
                  }`}
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      spirulinaVariant === '120' ? 'border-[#1C352D] text-[#1C352D]' : 'border-slate-300'
                    }`}>
                      {spirulinaVariant === '120' && <div className="w-2.5 h-2.5 rounded-full bg-[#1C352D]" />}
                    </div>
                    <div>
                      <h5 className="font-extrabold text-[#1C352D] text-xs sm:text-sm">
                        {isRtl ? '120 حبة (Comprimés)' : '120 Tablets'}
                      </h5>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {isRtl ? 'مثالي لتجربة أولى دافئة' : 'Perfect for starter cure'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-[#1C352D] text-sm sm:text-base">190 MAD</span>
                    <p className="text-[9px] text-slate-400 leading-none mt-0.5">{isRtl ? 'الدفع عند الاستلام' : 'COD'}</p>
                  </div>
                </button>

                {/* 500 Tablets Card */}
                <button
                  type="button"
                  onClick={() => setSpirulinaVariant('500')}
                  className={`relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 text-left cursor-pointer select-none ${
                    spirulinaVariant === '500'
                      ? 'border-[#1C352D] bg-[#FAF6F0] shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-350'
                  }`}
                  style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  {/* Badge */}
                  <span className="absolute -top-2.5 left-4 bg-[#C5A560] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-wider shadow-xs">
                    ⭐ {isRtl ? 'العرض الأفضل توفيراً' : 'Best Value'}
                  </span>
                  
                  <div className="flex items-center gap-3 mt-1 sm:mt-0">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      spirulinaVariant === '500' ? 'border-[#1C352D] text-[#1C352D]' : 'border-slate-300'
                    }`}>
                      {spirulinaVariant === '500' && <div className="w-2.5 h-2.5 rounded-full bg-[#1C352D]" />}
                    </div>
                    <div>
                      <h5 className="font-extrabold text-[#1C352D] text-xs sm:text-sm">
                        {isRtl ? '500 حبة (Comprimés)' : '500 Tablets'}
                      </h5>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {isRtl ? 'أقوى كورس وقائي متكامل' : 'Complete premium course'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right mt-1 sm:mt-0">
                    <span className="font-black text-[#1C352D] text-sm sm:text-base">490 MAD</span>
                    <p className="text-[9px] text-emerald-600 font-extrabold leading-none mt-0.5">{isRtl ? 'توفير فائق' : 'Huge Saving'}</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full mt-2">
              <button
                onClick={scrollToCheckout}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs sm:text-sm text-center shadow-lg hover:shadow-emerald-950/20 cursor-pointer active:scale-98 transition-all border border-[#C5A560]/35 group flex-1 md:flex-initial"
              >
                <span>{copy.heroCTAOrder}</span>
                <ShoppingBag className="w-4 h-4 text-[#C5A560] group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={() => addToCart(spirulinaVariant === '120' ? 'spirulina_120' : 'spirulina_500')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#1C352D] hover:text-white text-[#1C352D] font-extrabold text-xs sm:text-sm border border-[#E5D5C0] text-center shadow-xs cursor-pointer active:scale-98 transition-all flex-1 md:flex-initial"
              >
                <span>{isRtl ? 'أضف إلى السلة 🛒' : 'Ajouter au Panier 🛒'}</span>
              </button>

              <button
                onClick={handleGeneralInquiry}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white hover:bg-[#FAF6F0]/50 text-slate-600 font-extrabold text-xs border border-slate-200 text-center shadow-xs cursor-pointer active:scale-98 transition-all shrink-0"
              >
                <Phone className="w-4 h-4 text-[#C5A560]" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5D5C0]/40 w-full mt-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1C352D] leading-none">100%</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-semibold">
                  {isRtl ? 'عضوي ونقي' : 'Organique Pur'}
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1C352D] leading-none">COD</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-semibold">
                  {isRtl ? 'دفع عند الاستلام' : 'Paiement à la livraison'}
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1C352D] leading-none">DXN</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-semibold">
                  {isRtl ? 'جودة معتمدة' : 'Qualité Garantie'}
                </p>
              </div>
            </div>
          </div>

           {/* Right Product Layout Frame */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-3xl bg-[#FAF6F0] rotate-3 border border-[#E5D5C0]/40"></div>
              <div className="absolute inset-0 rounded-3xl bg-white -rotate-2 border border-[#E5D5C0]/60 shadow-lg flex items-center justify-center p-6 pr-14 pl-14">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={spirulinaVariant}
                    id="spirulina_showcase_image"
                    src={spirulinaVariant === '120' ? 'https://i.ibb.co/1tMCDQsD/image.png' : 'https://i.ibb.co/xST3WmwW/image.png'}
                    alt="Samira Naturale Organic Spirulina"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain rounded-2xl filter drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Realistic Overlay preview */}
              <div className="absolute top-4 right-4 w-28 sm:w-32 aspect-square rounded-2xl overflow-hidden border-2 border-[#1C352D]/10 shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                <img
                  src={realSpirulinaImg}
                  alt="Authentic DXN Spirulina Product Photo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating micro trust badges */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#E5D5C0]/60 rounded-2xl p-3 shadow-md flex items-center gap-2 max-w-[170px] select-none">
                <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-amber-500 font-bold text-xs shrink-0 border border-[#FAF6F0]">⭐</div>
                <div>
                  <p className="text-[10px] font-extrabold text-[#1C352D] leading-none">4.9 / 5</p>
                  <p className="text-[8px] text-slate-500 leading-none mt-1">Verified reviews in Morocco</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white border border-[#E5D5C0]/60 rounded-2xl p-3 shadow-md flex items-center gap-2 select-none">
                <div className="w-8 h-8 rounded-full bg-[#EAF0EC] flex items-center justify-center text-emerald-800 font-bold shrink-0">🌿</div>
                <div>
                  <p className="text-[10px] font-extrabold text-[#1C352D] leading-none">USDA Organic</p>
                  <p className="text-[8px] text-slate-500 leading-none mt-1">100% Sun Grown</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Badges Banner */}
      <div className="bg-[#1C352D] py-5 border-y border-[#C5A560]/30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider select-none">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A560]" />
            <span>USDA Organic Certified</span>
          </div>
          <span className="text-[#C5A560]/40 hidden md:inline">|</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A560]" />
            <span>100% Vegan & Pure Alkaline</span>
          </div>
          <span className="text-[#C5A560]/40 hidden md:inline">|</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A560]" />
            <span>Certified DXN Sun Pools</span>
          </div>
          <span className="text-[#C5A560]/40 hidden md:inline">|</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A560]" />
            <span>HACCP & ISO Quality Standards</span>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <section id="benefits-section" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40">
              {isRtl ? 'كنج وعافية' : 'Bénéfices Thérapeutiques'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
              {copy.benefitsHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              {copy.benefitsSub}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData[pl].map((item, index) => (
              <div
                key={index}
                className="bg-[#FAF6F0]/40 border border-[#E5D5C0]/40 rounded-2xl p-6 hover:border-[#C5A560] hover:shadow-lg hover:shadow-[#1C352D]/5 transition-all duration-300 flex flex-col justify-between h-full group"
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5D5C0]/60 flex items-center justify-center text-[#1C352D] shadow-xs group-hover:text-white group-hover:bg-[#1C352D] transition-colors mb-5">
                    {index === 0 && <ShieldCheck className="w-6 h-6 text-[#C5A560]" />}
                    {index === 1 && <Activity className="w-6 h-6 text-[#C5A560]" />}
                    {index === 2 && <Heart className="w-6 h-6 text-[#C5A560]" />}
                    {index === 3 && <Sparkles className="w-6 h-6 text-[#C5A560]" />}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1C352D] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#C5A560] uppercase tracking-wider select-none">
                  <span>Science Fact</span>
                  <span>{item.science}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Spotlight Section */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0] border-y border-[#E5D5C0]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 ring-8 ring-[#FAF6F0] rounded-3xl overflow-hidden shadow-xl bg-white border border-[#E5D5C0]/65">
              <img
                src={extraSpirulinaImg}
                alt="Authentic DXN Spirulina Product Photo"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <span className="text-xs font-bold text-[#C5A560] bg-white border border-[#E5D5C0]/50 px-3.5 py-1 rounded-full uppercase tracking-widest leading-none">
              {isRtl ? 'حيوية نقية' : 'Composition pure'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] leading-tight accent-serif">
              {copy.ingredientsHeading}
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6E5D] font-bold">
              {copy.ingredientsSub}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {copy.ingredientsText}
            </p>

            <div className="grid gap-4 w-full mt-2">
              <div className="bg-white/80 p-4 rounded-xl border border-[#E5D5C0]/50 flex items-start gap-3">
                <span className="text-emerald-700 font-bold shrink-0 mt-0.5">✔</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C352D]">{copy.phycoTitle}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{copy.phycoDesc}</p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-[#E5D5C0]/50 flex items-start gap-3">
                <span className="text-emerald-700 font-bold shrink-0 mt-0.5">✔</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C352D]">{copy.chloroTitle}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{copy.chloroDesc}</p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-[#E5D5C0]/50 flex items-start gap-3">
                <span className="text-emerald-700 font-bold shrink-0 mt-0.5">✔</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C352D]">{copy.proteinTitle}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{copy.proteinDesc}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How to use section */}
      <section id="how-to-use" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] tracking-tight accent-serif">
              {copy.howToUseTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              {copy.howToUseSub}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {stepsData[pl].map((step, index) => (
              <div
                key={index}
                className="bg-[#FAF6F0]/20 p-6 sm:p-8 rounded-2xl border border-dashed border-[#E5D5C0] flex flex-col items-center text-center gap-4 hover:bg-[#FAF6F0]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#1C352D] text-[#C5A560] flex items-center justify-center font-bold text-sm shadow-md border border-[#C5A560]/20 select-none">
                  {index + 1}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#1C352D]">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting Pricing Bundles picker & Direct WhatsApp checkout */}
      <section id="checkout-pricing-section" className="py-16 sm:py-24 bg-[#FAF6F0] border-t border-[#E5D5C0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C5A560] bg-white border border-[#E5D5C0]/60 px-3 py-1.5 rounded-full uppercase tracking-widest">{isRtl ? 'العروض الحصرية' : 'Tarifs dégressifs'}</span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 tracking-tight leading-tight accent-serif">
              {copy.packagesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              {copy.packagesSub}
            </p>
          </div>

          {/* Quantity Counter Control */}
          <div className="max-w-md mx-auto bg-white rounded-3xl border border-[#E5D5C0]/50 p-6 sm:p-8 shadow-xs text-center space-y-6">
            <h4 className="text-lg font-bold text-[#1C352D]">
              {isRtl ? 'تحديد كمية السبيرولينا العضوية' : 'Définir la Quantité de Spiruline'}
            </h4>
            
            <div className="flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setSpirulinaQty(prev => Math.max(1, prev - 1))}
                className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-2xl cursor-pointer select-none"
              >
                -
              </button>
              <span className="text-3xl font-black text-[#1C352D] min-w-[3rem] text-center font-mono select-none">
                {spirulinaQty}
              </span>
              <button
                type="button"
                onClick={() => setSpirulinaQty(prev => Math.min(99, prev + 1))}
                className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-2xl cursor-pointer select-none"
              >
                +
              </button>
            </div>

            <div className="pt-4 border-t border-slate-50 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{isRtl ? 'سعر الوحدة:' : 'Prix Unitaire:'}</span>
                <span className="font-bold text-[#1C352D]">
                  {spirulinaVariant === '120' ? '190' : '490'} {t.currency}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-[#1C352D]">
                <span>{isRtl ? 'المجموع الأساسي:' : 'Total de base:'}</span>
                <span className="text-lg font-black text-[#C5A560]">
                  {getBasePrice()} {t.currency}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-medium leading-normal">
                {spirulinaQty > 1 ? (
                  <span className="text-emerald-800 font-extrabold bg-[#EAF0EC] px-3 py-1 rounded-full uppercase">
                    🚚 {isRtl ? 'شحن فوري ومجاني' : 'LIVRAISON GRATUITE'}
                  </span>
                ) : (
                  <span>{isRtl ? '+20 درهم شحن محلي' : '+20 DH Livraison'}</span>
                )}
              </div>
            </div>

            <button
              onClick={() => scrollToCheckout()}
              className="w-full py-4 rounded-xl font-bold text-xs uppercase cursor-pointer select-none tracking-wider text-center bg-[#1C352D] text-white hover:bg-[#25443B] transition-all shadow-md"
            >
              {isRtl ? 'متابعة لتأكيد الطلب الآن' : 'Continuer vers la commande'}
            </button>
          </div>

          {/* Form Direct Checkout card */}
          <div id="checkout-card-section" className="mt-16">
            <PremiumCheckoutForm
              productId="spirulina"
              lang={lang}
              spirulinaVariant={spirulinaVariant}
              onNavigateHome={() => setActiveView('store')}
            />
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq-section" className="py-16 sm:py-24 bg-white border-t border-[#E5D5C0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40">FAQ</span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
              {copy.faqHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto text-center">
              {copy.faqSub}
            </p>
          </div>

          <FAQAccordion lang={lang} />
        </div>
      </section>
        </motion.div>
      ) : activeView === 'toothpaste' ? (
        /* ================= DETAILED TOOTHPASTE LANDING VIEW ================= */
        <motion.div
          key="toothpaste-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Back reference warning bar banner */}
          <div className="bg-[#FAF6F0] border-b border-[#E5D5C0]/40 py-3 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
            <span>🦷 {isRtl ? 'أنت تتصفح العروض الحصرية لمعجون الأسنان بالجانوديرما الطبيعي!' : 'Vous explorez la page exclusive du Dentifrice Ganozhi Plus.'}</span>
            <button
              onClick={() => {
                handleNavigateView('store');
              }}
              className="px-2.5 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer animate-pulse"
            >
              {isRtl ? 'الرجوع للمتجر للتسوق العام' : 'Retour au catalogue général'}
            </button>
          </div>

          {/* Premium Luxury Hero Section */}
          <section id="toothpaste_hero" className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24 border-b border-[#FAF6F0]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/10 blur-3xl rounded-full -ml-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left info content panel */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EC] text-[#1C352D] text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A560] animate-pulse" />
                  {tCopy.heroBadge}
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-bold text-[#1C352D] tracking-tight leading-tight accent-serif">
                  {tCopy.heroTitle}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  {tCopy.heroSub}
                </p>

                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-2">
                  <button
                    onClick={scrollToToothpasteCheckout}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-sm text-center shadow-lg hover:shadow-emerald-950/20 cursor-pointer active:scale-98 transition-all border border-[#C5A560]/35 group"
                  >
                    <span>{tCopy.heroCTAOrder}</span>
                    <ShoppingBag className="w-4 h-4 text-[#C5A560] group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={handleGeneralInquiry}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] text-[#1C352D] font-extrabold text-sm border border-[#E5D5C0] text-center shadow-xs cursor-pointer transition-colors"
                  >
                    <span>{tCopy.heroCTAConsult}</span>
                    <Phone className="w-4 h-4 text-[#C5A560]" />
                  </button>
                </div>

                {/* Micro Reviews banner proof */}
                <div className="flex items-center gap-3 mt-4 border-t border-slate-100 pt-6 w-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#1C352D] text-white text-[10px] font-black border-2 border-white flex items-center justify-center">F</div>
                    <div className="w-8 h-8 rounded-full bg-[#C5A560] text-white text-[10px] font-black border-2 border-white flex items-center justify-center">A</div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-[#1C352D] text-[10px] font-black border-2 border-white flex items-center justify-center">M</div>
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C5A560]" />)}
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      {isRtl ? '4.9/5 نجوم اعتماداً على 100+ مراجعة مغربية حقيقية للعناية بالفم والتجربة العضوية!' : '4.9/5 stars based on 100+ verified Moroccan reviews for oral care!'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right premium illustration montage panel */}
              <div className="lg:col-span-5 flex justify-center relative select-none">
                <div className="relative group w-full max-w-sm sm:max-w-md">
                  {/* Luxury backing circular shape */}
                  <div className="absolute inset-0 bg-[#FAF6F0] rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-[#E5D5C0]/50 shadow-[0_10px_40px_rgba(28,53,45,0.02)]"></div>
                  
                  {/* Container of the main product photo */}
                  <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_30px_rgba(28,53,45,0.03)] overflow-hidden">
                    <img
                      src={toothpasteImg}
                      alt="DXN Ganozhi Ganoderma Toothpaste Premium Bottle"
                      className="w-full h-auto max-h-[380px] object-contain filter drop-shadow-md select-none group-hover:scale-103 transition-transform duration-500 pb-4 md:pb-16"
                      referrerPolicy="no-referrer"
                    />

                    {/* Realistic Overlay preview */}
                    <div className="absolute top-4 right-4 w-28 sm:w-32 aspect-square rounded-2xl overflow-hidden border-2 border-[#1C352D]/10 shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                      <img
                        src={realToothpasteImg}
                        alt="Authentic DXN Ganozhi Plus Product Photo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Quality Badges Overlaid list */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs rounded-2xl border border-[#E5D5C0]/40 p-3 flex items-center justify-between shadow-md z-10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-bold text-[#1C352D]">NON-ABRASIVE CERTIFIED</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">100% ORGANIC REISHI</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick footer level badges inside hero container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-100/70 select-none">
              <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">{tCopy.trustBadgeSub}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: lang === "ar" ? "خالٍ من الفلورايد" : "Fluoride-Free", desc: lang === "ar" ? "آمن وحيوي لجميع الأعمار" : "Pure holistic oral hygiene" },
                  { title: lang === "ar" ? "مستخلص الجانوديرما" : "Ganoderma Extract", desc: lang === "ar" ? "تغذية طبيعية فائقة للثة" : "Cellular gum protection" },
                  { title: lang === "ar" ? "نعناع Spearmint منعش" : "Spearmint Freshness", desc: lang === "ar" ? "أنفاس نقية طوال اليوم" : "No synthetic cooling chemicals" },
                  { title: lang === "ar" ? "توصيل سريع مجاني" : "Free Fast Shipping", desc: lang === "ar" ? "شحن مجاني لكافة مدن المغرب" : "Express shipping nationwide" },
                ].map((badg, idx) => (
                  <div key={idx} className="bg-[#FAF6F0]/60 p-4 rounded-xl border border-[#E5D5C0]/35 hover:bg-white transition-colors text-center">
                    <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wide">{badg.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-1">{badg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="toothpaste_benefits" className="py-16 sm:py-24 bg-[#FAF6F0]/25 border-b border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40">BENEFITS</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
                  {tCopy.benefitsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
                  {tCopy.benefitsSub}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {toothpasteBenefits[pl].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#E5D5C0]/40 rounded-2xl p-6 hover:border-[#C5A560] hover:shadow-lg hover:shadow-[#1C352D]/5 transition-all duration-300 flex flex-col justify-between h-full group"
                    style={{ textAlign: isRtl ? 'right' : 'left' }}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center text-[#1C352D] shadow-xs group-hover:text-white group-hover:bg-[#1C352D] transition-colors mb-5">
                        {index === 0 && <ShieldCheck className="w-6 h-6 text-[#C5A560] group-hover:text-white" />}
                        {index === 1 && <Sparkles className="w-6 h-6 text-[#C5A560] group-hover:text-white" />}
                        {index === 2 && <Smile className="w-6 h-6 text-[#C5A560] group-hover:text-white" />}
                        {index === 3 && <Heart className="w-6 h-6 text-[#C5A560] group-hover:text-white" />}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#1C352D] leading-tight flex items-center">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#C5A560] uppercase tracking-wider select-none">
                      <span>{isRtl ? 'حقيقة علمية' : 'Science Fact'}</span>
                      <span>{item.science}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Spotlight Active Ingredients Section */}
          <section id="toothpaste_ingredients" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40 font-mono">FORMULA SECRETS</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
                  {tCopy.ingredientsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                  {tCopy.ingredientsSub}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* 1. Scientific paragraph info box */}
                <div className="space-y-6" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {tCopy.ingredientsText}
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                      <span className="w-3 h-3 rounded-full bg-[#C5A560] shrink-0 mt-1.5"></span>
                      <div>
                        <h4 className="text-sm font-black text-[#1C352D]">{tCopy.reishiTitle}</h4>
                        <p className="text-xs text-slate-500 mt-1">{tCopy.reishiDesc}</p>
                      </div>
                    </div>
                    <div className="flex gap-4" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                      <span className="w-3 h-3 rounded-full bg-[#C5A560] shrink-0 mt-1.5"></span>
                      <div>
                        <h4 className="text-sm font-black text-[#1C352D]">{tCopy.mintTitle}</h4>
                        <p className="text-xs text-slate-500 mt-1">{tCopy.mintDesc}</p>
                      </div>
                    </div>
                    <div className="flex gap-4" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                      <span className="w-3 h-3 rounded-full bg-[#C5A560] shrink-0 mt-1.5"></span>
                      <div>
                        <h4 className="text-sm font-black text-[#1C352D]">{tCopy.pureTitle}</h4>
                        <p className="text-xs text-slate-500 mt-1">{tCopy.pureDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Visual showcase */}
                <div className="relative flex justify-center select-none">
                  {/* Subtle green/golden rings in background */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-72 h-72 rounded-full border border-[#1C352D]/5 animate-pulse"></div>
                  </div>
                  
                  <div className="relative max-w-sm w-full aspect-square bg-white rounded-3xl overflow-hidden border border-[#E5D5C0]/40 shadow-xl">
                    <img
                      src={extraToothpasteImg}
                      alt="Authentic DXN Ganozhi Plus Product Photo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient blur inside frame */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C352D]/95 via-[#1C352D]/70 to-transparent p-6 text-center" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <span className="text-[9px] font-black tracking-widest text-[#C5A560] uppercase">{isRtl ? 'منتج DXN الأصلي' : 'Produit DXN Authentique'}</span>
                      <h4 className="text-sm font-black text-white mt-1">{isRtl ? 'صورة حقيقية لعلبة ومعجون جانوزي بلس' : 'Photo Réelle Ganozhi Plus'}</h4>
                      <p className="text-[11px] text-slate-300 mt-1">{isRtl ? 'التغليف والمكونات الأصلية المعتمدة من شركة DXN العالمية دون أي تعديل.' : 'Le packaging original et les composants certifiés officiels de DXN.'}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* How To Use Section */}
          <section id="toothpaste_how_to_use" className="py-16 sm:py-24 bg-[#FAF6F0]/25 border-b border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40 font-mono">USAGE RITUAL</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
                  {tCopy.howToUseTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto font-medium">
                  {tCopy.howToUseSub}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto relative text-center">
                {toothpasteSteps[pl].map((step, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs relative text-center flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1C352D] text-[#C5A560] flex items-center justify-center font-extrabold text-xs mb-4 border border-[#C5A560]/30">
                      {idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-[#1C352D]">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Packages Section */}
          <section id="toothpaste_packages" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40 font-mono">OFFERS & KITS</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
                  {tCopy.packagesTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto font-sans">
                  {tCopy.packagesSub}
                </p>
              </div>

              {/* Quantity Counter Control */}
              <div className="max-w-md mx-auto bg-white rounded-3xl border border-[#E5D5C0]/50 p-6 sm:p-8 shadow-xs text-center space-y-6">
                <h4 className="text-lg font-bold text-[#1C352D]">
                  {isRtl ? 'تحديد كمية معجون الأسنان جانوزي' : 'Définir la Quantité de Dentifrice'}
                </h4>
                
                <div className="flex items-center justify-center gap-6">
                  <button
                    type="button"
                    onClick={() => setToothpasteQty(prev => Math.max(1, prev - 1))}
                    className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-2xl cursor-pointer select-none"
                  >
                    -
                  </button>
                  <span className="text-3xl font-black text-[#1C352D] min-w-[3rem] text-center font-mono select-none">
                    {toothpasteQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setToothpasteQty(prev => Math.min(99, prev + 1))}
                    className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-2xl cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-50 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{isRtl ? 'سعر الوحدة:' : 'Prix Unitaire:'}</span>
                    <span className="font-bold text-[#1C352D]">
                      85 {t.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-[#1C352D]">
                    <span>{isRtl ? 'المجموع الأساسي:' : 'Total de base:'}</span>
                    <span className="text-lg font-black text-[#C5A560]">
                      {getToothpasteBasePrice()} {t.currency}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium leading-normal">
                    {toothpasteQty > 1 ? (
                      <span className="text-emerald-800 font-extrabold bg-[#EAF0EC] px-3 py-1 rounded-full uppercase">
                        🚚 {isRtl ? 'شحن سريع ومجاني بالكامل' : 'LIVRAISON GRATUITE'}
                      </span>
                    ) : (
                      <span>{isRtl ? '+20 درهم شحن محلي' : '+20 DH Livraison'}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => scrollToToothpasteCheckout()}
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase cursor-pointer select-none tracking-wider text-center bg-[#1C352D] text-white hover:bg-[#25443B] transition-all shadow-md"
                >
                  {isRtl ? 'متابعة لتأكيد الطلب الآن' : 'Continuer vers la commande'}
                </button>
              </div>
            </div>
          </section>

          {/* Addons & Upgrades Rituals Section */}
          <section id="toothpaste_addons_ritual" className="py-16 sm:py-24 bg-[#FAF6F0]/25 border-b border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40 font-mono">WELLNESS UPGRADES</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif">
                  {tCopy.addonsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                  {tCopy.addonsSub}
                </p>
              </div>

              {/* Addons List Selector checkbox container */}
              <div className="max-w-3xl mx-auto space-y-4">
                {/* Addon 1: Spirulina */}
                <div
                  onClick={() => setAddToothpasteSpirulina(!addToothpasteSpirulina)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    addToothpasteSpirulina ? 'border-[#C5A560] bg-white' : 'border-[#E5D5C0]/40 bg-white/50 hover:bg-white'
                  }`}
                  style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                >
                  <div className="flex gap-4 items-center" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${addToothpasteSpirulina ? 'border-[#C5A560] bg-[#C5A560]' : 'border-slate-300'}`}>
                      {addToothpasteSpirulina && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <h4 className="text-sm sm:text-base font-bold text-[#1C352D] flex flex-wrap items-center gap-2">
                        <span>{tCopy.addonSpirulinaName}</span>
                        <span className="text-xs bg-[#EAF0EC] text-emerald-800 px-2.5 py-0.5 rounded-full">Best Combo</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{tCopy.addonSpirulinaDesc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#1C352D] shrink-0 font-mono">+260 DH</span>
                </div>

                {/* Addon 2: Coffee */}
                <div
                  onClick={() => setAddToothpasteCoffee(!addToothpasteCoffee)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    addToothpasteCoffee ? 'border-[#C5A560] bg-white' : 'border-[#E5D5C0]/40 bg-white/50 hover:bg-white'
                  }`}
                  style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                >
                  <div className="flex gap-4 items-center" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${addToothpasteCoffee ? 'border-[#C5A560] bg-[#C5A560]' : 'border-slate-300'}`}>
                      {addToothpasteCoffee && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <h4 className="text-sm sm:text-base font-bold text-[#1C352D]">
                        <span>{tCopy.addonCoffeeName}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{tCopy.addonCoffeeDesc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#1C352D] shrink-0 font-mono">+130 DH</span>
                </div>
              </div>
            </div>
          </section>

          {/* Secure Interactive Checkout Section */}
          <section id="toothpaste-checkout-card-section" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <PremiumCheckoutForm
              productId="toothpaste"
              lang={lang}
              onNavigateHome={() => setActiveView('store')}
            />
          </section>

          {/* Toothpaste FAQ Accordion Section */}
          <section id="toothpaste_faq_section" className="py-16 sm:py-24 bg-white border-t border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#E5D5C0]/40 font-mono">FAQ</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] mt-4 accent-serif font-sans">
                  {tCopy.faqHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto text-center font-medium">
                  {tCopy.faqSub}
                </p>
              </div>

              <FAQAccordion lang={lang} customItems={toothpasteFAQs[pl]} />
            </div>
          </section>
        </motion.div>
      ) : activeView === 'coffee' ? (
        /* ================= DETAILED COFFEE LANDING VIEW ================= */
        <motion.div
          key="coffee-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white text-slate-800"
        >
          {/* Back reference warning bar banner */}
          <div className="bg-[#FAF6F0] border-b border-[#E5D5C0]/40 py-3 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
            <span className="flex items-center gap-1.5 justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1C352D] animate-ping"></span>
              ☕ {isRtl ? 'عروض حصرية محدودة: شحن مجاني لكافة المدن المغربية والدفع عند الاستلام!' : 'Offre exclusive limitée : Livraison gratuite au Maroc & Paiement à la livraison !'}
            </span>
            <button
              onClick={() => {
                handleNavigateView('store');
              }}
              className="px-2.5 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer"
            >
              {isRtl ? 'الرجوع للمتجر للتسوق العام' : 'Retour au catalogue général'}
            </button>
          </div>

          {/* Luxury International Coffee House Hero Section */}
          <section id="coffee_hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0]/40 to-[#FAF6F0] text-slate-800 py-14 sm:py-20 lg:py-28 border-b border-[#E5D5C0]/30">
            {/* Ambient luxury lights */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C5A560]/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-50/10 blur-[120px] rounded-full -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Exquisite Content */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF0EC] text-[#1C352D] text-xs font-black uppercase tracking-wider border border-emerald-200">
                  <Sparkles className="w-4.5 h-4.5 text-[#C5A560] animate-pulse" />
                  {cCopy.heroBadge}
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-black text-[#1C352D] tracking-tight leading-none font-sans">
                  {cCopy.heroTitle.split('by')[0]}
                  <span className="block text-[#C5A560] text-2xl sm:text-3.5xl lg:text-4xl mt-3 font-medium accent-serif">
                    by Samira Naturale
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {cCopy.heroSub}
                </p>

                {/* Micro-assurances layout */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-2 border-y border-[#E5D5C0]/40 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EAF0EC] border border-emerald-100 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-[#1C352D]" />
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{isRtl ? 'صحي وطبيعي' : 'Adaptogène Pur'}</p>
                      <p className="text-xs text-[#1C352D] font-black mt-1">{isRtl ? 'ريشي عضوي 100%' : 'Reishi Certifié'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EAF0EC] border border-emerald-100 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-[#1C352D]" />
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{isRtl ? 'توصيل مجاني بالكامل' : 'Livraison Maroc'}</p>
                      <p className="text-xs text-[#1C352D] font-black mt-1">{isRtl ? 'الدفع عند الاستلام' : 'Paiement à Réception'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                  <button
                    onClick={scrollToCoffeeCheckout}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-950/20 active:scale-97 select-none border border-[#C5A560]/35 group"
                  >
                    <span>{cCopy.heroCTAOrder}</span>
                    <ShoppingBag className="w-4.5 h-4.5 text-[#C5A560] group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={handleGeneralInquiry}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF6F0]/50 text-[#1C352D] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border border-[#E5D5C0] active:scale-97 select-none"
                  >
                    <Phone className="w-4 h-4 text-[#C5A560]" />
                    <span>{cCopy.heroCTAConsult}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-End Packaging & Lifestyle Overlapping Scenes */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center select-none relative mt-8 lg:mt-0">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-[#FAF6F0] rounded-3xl border border-[#C5A560]/20 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] group">
                  
                  {/* Premium gold seal overlay */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#C5A560] to-[#E9DFCF] text-[#1C352D] text-[9px] font-black tracking-widest px-3 py-1.5 rounded-lg z-10 shadow-md">
                    DXN IMPORTATION
                  </div>

                  {/* Overlapping images - official & lifestyle */}
                  <div className="relative w-full h-[72%] flex items-center justify-center overflow-hidden rounded-2xl bg-[#EAF0EC] border border-[#E5D5C0]/20 p-4">
                    <img
                      src={coffeeImg}
                      alt="DXN Lingzhi Coffee Packaging"
                      className="w-full h-full p-2 md:p-0 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-5 scale-100 group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Realistic Overlay preview */}
                    <div className="absolute bottom-3 right-3 w-28 sm:w-32 aspect-square rounded-xl overflow-hidden border-2 border-[#C5A560] shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                      <img
                        src={realCoffeeImg}
                        alt="Authentic DXN Lingzhi Coffee Product Photo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Premium details block */}
                  <div className="mt-4 border-t border-slate-200/60 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Premium Gourmet Coffee</p>
                      <h4 className="text-sm font-bold text-[#1C352D] mt-0.5">Lingzhi 2 in 1 Black Coffee</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-slate-400 font-bold line-through">150 DH</p>
                      <p className="text-lg font-black text-[#1C352D] leading-none">130 DH</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Global Trust Badges Bar */}
          <div className="bg-[#FAF6F0] py-8 border-b border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-6">
                {cCopy.trustBadgeSub}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-3 bg-white rounded-2xl border border-[#E5D5C0]/30 shadow-xs flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-xl mb-2">🌿</div>
                  <h5 className="text-xs font-bold text-[#1C352D] leading-tight">100% Organique</h5>
                  <p className="text-[9px] text-slate-400 mt-1">Certified Bio Reishi</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#E5D5C0]/30 shadow-xs flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-xl mb-2">⚡</div>
                  <h5 className="text-xs font-bold text-[#1C352D] leading-tight">Zéro Palpitation</h5>
                  <p className="text-[9px] text-slate-400 mt-1">Caffeine subtrace &lt;0.06%</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#E5D5C0]/30 shadow-xs flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-xl mb-2">🛡</div>
                  <h5 className="text-xs font-bold text-[#1C352D] leading-tight">Estomac Sain</h5>
                  <p className="text-[9px] text-slate-400 mt-1">Low-Acid Alkaline pH</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#E5D5C0]/30 shadow-xs flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-xl mb-2">🇲🇦</div>
                  <h5 className="text-xs font-bold text-[#1C352D] leading-tight">Livraison Express</h5>
                  <p className="text-[9px] text-slate-400 mt-1">Paiement Cash Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Benefits Grid Section */}
          <section id="coffee-benefits" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] bg-[#FAF6F0] border border-[#E5D5C0]/40 px-3 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  BENEFITS
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight accent-serif font-sans">
                  {cCopy.benefitsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                  {cCopy.benefitsSub}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coffeeBenefits[pl].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5D5C0]/30 hover:border-[#C5A560] hover:shadow-[0_12px_30px_rgba(197,165,96,0.06)] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#EAF0EC] border border-[#E5D5C0]/40 flex items-center justify-center text-[#1C352D]">
                          {item.icon === 'Sparkles' && <Sparkles className="w-6 h-6 text-[#C5A560]" />}
                          {item.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6 text-[#C5A560]" />}
                          {item.icon === 'Activity' && <Activity className="w-6 h-6 text-[#C5A560]" />}
                          {item.icon === 'Award' && <Award className="w-6 h-6 text-[#C5A560]" />}
                        </div>
                        
                        <h4 className="text-base sm:text-lg font-black text-[#1C352D]" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                          {item.title}
                        </h4>
                        
                        <p className="text-xs text-slate-500 leading-relaxed" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-50 text-[10px] font-black tracking-widest text-[#C5A560] uppercase font-mono" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                        🔬 {item.science}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle CTA section */}
              <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#E5D5C0]/40 text-center select-none max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A560]/5 blur-3xl rounded-full"></div>
                <div className="text-left flex-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <h4 className="text-xl font-bold text-[#1C352D] leading-tight">{isRtl ? 'استعد حيويتك ونشاطك بدون أي قلق للمعدة' : 'Restaurez votre vitalité dès le premier sachet.'}</h4>
                  <p className="text-slate-500 text-xs mt-1.5">{isRtl ? 'احصل على باقتك المفضلة اليوم واحصل على هدية مجانية مدمجة مع التوصيل المجاني بالكامل.' : 'Stock originel DXN certifié. Expédition en 24/48h avec conseils de préparation.'}</p>
                </div>
                <button
                  onClick={scrollToCoffeeCheckout}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1C352D] text-white hover:bg-[#25443B] font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md shrink-0 border border-[#C5A560]/25"
                >
                  {isRtl ? 'امتلك باقتك الخاصة للنشاط ←' : 'Saisir les Formules Café ←'}
                </button>
              </div>

            </div>
          </section>

          {/* Ingredients Formulation Feature Panel */}
          <section id="coffee-ingredients" className="py-16 sm:py-24 bg-[#EAF0EC] border-b border-emerald-100 text-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#1C352D] bg-[#FAF6F0] border border-emerald-200 px-3 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  COMPOSITION
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight font-sans">
                  {cCopy.ingredientsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C352D]/80 mt-2">
                  {cCopy.ingredientsSub}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left side: descriptions details */}
                <div className="space-y-6 flex flex-col justify-center" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                    {cCopy.ingredientsText}
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#E5D5C0]/30 hover:border-[#C5A560] transition-colors flex items-start gap-4 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-lg mt-0.5 shrink-0 border border-emerald-100">🍄</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-[#1C352D]">{cCopy.reishiTitle}</h4>
                        <p className="text-[11px] text-slate-500 mt-1">{cCopy.reishiDesc}</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#E5D5C0]/30 hover:border-[#C5A560] transition-colors flex items-start gap-4 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-lg mt-0.5 shrink-0 border border-emerald-100">🔬</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-[#1C352D]">{cCopy.mintTitle}</h4>
                        <p className="text-[11px] text-slate-500 mt-1">{cCopy.mintDesc}</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#E5D5C0]/30 hover:border-[#C5A560] transition-colors flex items-start gap-4 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-[#1C352D]/10 flex items-center justify-center text-lg mt-0.5 shrink-0 border border-emerald-100">💎</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-[#1C352D]">{cCopy.pureTitle}</h4>
                        <p className="text-[11px] text-slate-500 mt-1">{cCopy.pureDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: visual scene presentation */}
                <div className="flex justify-center relative select-none">
                  {/* Subtle golden rings in background */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-72 h-72 rounded-full border border-[#C5A560]/20 animate-pulse"></div>
                  </div>
                  
                  <div className="relative max-w-sm w-full aspect-square bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#C5A560]/30 shadow-2xl">
                    <img
                      src={realCoffeeImg}
                      alt="Authentic DXN Lingzhi Coffee"
                      className="w-full h-full object-cover opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient blur inside frame */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C352D]/95 to-transparent p-6 text-center" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <span className="text-[9px] font-black tracking-widest text-[#C5A560] uppercase">Samira Naturale Routine</span>
                      <h4 className="text-sm font-black text-white mt-1">{isRtl ? 'ذوبان نقي وسريع وخالٍ من السكر' : 'Préparation instantanée pure'}</h4>
                      <p className="text-[11px] text-slate-300 mt-1">{isRtl ? 'الكيس الواحد يحتوي على تركيز فائق، مناسب لصناعة ما يصل لـ 3 أكواب ممتازة.' : 'Teneur de 4.5g par sachet. Concentration exceptionnelle.'}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* How to use / Elegant Ritual Section */}
          <section id="coffee-ritual" className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] bg-white border border-[#E5D5C0]/60 px-3 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  RITUALS
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight accent-serif font-sans">
                  {cCopy.howToUseTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto">
                  {cCopy.howToUseSub}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {coffeeSteps[pl].map((step, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5D5C0]/35 shadow-xs relative flex flex-col justify-between"
                    >
                      <div className="text-3xl font-black text-[#C5A560]/40 font-mono mb-4 text-left">0{index + 1}</div>
                      
                      <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                        <h4 className="text-sm sm:text-base font-black text-[#1C352D]">
                          {step.title}
                        </h4>
                        
                        <p className="text-xs text-slate-500 leading-relaxed mt-2.5">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-slate-50 pt-3 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-widest" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                        <span>Routine Premium</span>
                        <span>✔ Approved</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* Highly High-Converting Discount Packages & Checkout Section */}
          <section id="coffee-checkout-card-section" className="py-16 sm:py-24 bg-white">
            <PremiumCheckoutForm
              productId="coffee"
              lang={lang}
              onNavigateHome={() => setActiveView('store')}
            />
          </section>

          {/* Togglable Luxury accordians FAQ Section */}
          <section id="coffee_faq_section" className="py-16 sm:py-24 bg-[#FAF6F0] text-slate-800 border-t border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
                  FAQ
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-white mt-4 font-sans">
                  {cCopy.faqHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xs mx-auto text-center">
                  {cCopy.faqSub}
                </p>
              </div>

              {/* FAQ Accordion component with coffeeFAQs */}
              <FAQAccordion lang={lang} customItems={coffeeFAQs[pl]} />

            </div>
          </section>

        </motion.div>
      ) : activeView === 'coffee3in1' ? (
        /* ================= DETAILED COFFEE 3 IN 1 LANDING VIEW ================= */
        <motion.div
          key="coffee3in1-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white text-slate-800"
        >
          {/* Back reference warning bar banner */}
          <div className="bg-[#FAF6F0] border-b border-[#E5D5C0]/40 py-3 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
            <span className="flex items-center gap-1.5 justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1C352D] animate-ping"></span>
              ☕ {isRtl ? 'باقة الأسبوع اللذيذة: شحن مجاني لكافة المدن المغربية والدفع الآمن عند الاستلام!' : 'Bouteille de Vitalité : Livraison gratuite au Maroc & Paiement sécurisé à la livraison !'}
            </span>
            <button
              onClick={() => {
                handleNavigateView('store');
              }}
              className="px-2.5 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer"
            >
              {isRtl ? 'الرجوع للمتجر للتسوق العام' : 'Retour au catalogue général'}
            </button>
          </div>

          {/* Luxury International Coffee House Hero Section */}
          <section id="coffee3in1_hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0]/40 to-[#FAF6F0] text-[#1C352D] py-14 sm:py-20 lg:py-28 border-b border-[#E5D5C0]/30">
            {/* Ambient luxury lights */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C5A560]/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-50/10 blur-[120px] rounded-full -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Exquisite Content */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF0EC] text-[#1C352D] text-xs font-black uppercase tracking-wider border border-emerald-200">
                  <Sparkles className="w-4.5 h-4.5 text-[#C5A560] animate-pulse" />
                  {cCopy3in1.heroBadge}
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-black text-[#1C352D] tracking-tight leading-none font-sans">
                  {cCopy3in1.heroTitle.split('by')[0]}
                  <span className="block text-[#C5A560] text-2xl sm:text-3.5xl lg:text-4xl mt-3 font-medium accent-serif">
                    by Samira Naturale
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-2xl">
                  {cCopy3in1.heroSub}
                </p>

                {/* Micro-assurances layout */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-2 border-y border-[#E5D5C0]/40 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EAF0EC] border border-emerald-100 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-[#1C352D]" />
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{isRtl ? 'صحي وكريمي صفي' : 'Crémeux Premium'}</p>
                      <p className="text-xs text-[#1C352D] font-black mt-1">{isRtl ? 'خالٍ من ملونات كيماوية' : 'Reishi Adaptogène'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EAF0EC] border border-emerald-100 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-[#1C352D]" />
                    </div>
                    <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{isRtl ? 'شحن سريع بالمجان' : 'Livraison Directe'}</p>
                      <p className="text-xs text-[#1C352D] font-black mt-1">{isRtl ? 'الدفع عند الاستلام بباب الدار' : 'Partout au Maroc'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                  <button
                    onClick={scrollToCoffee3in1Checkout}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-950/20 active:scale-97 select-none border border-[#C5A560]/35 group"
                  >
                    <span>{cCopy3in1.heroCTAOrder}</span>
                    <ShoppingBag className="w-4.5 h-4.5 text-[#C5A560] group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={handleGeneralInquiry}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF6F0]/50 text-[#1C352D] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border border-[#E5D5C0] active:scale-97 select-none"
                  >
                    <Phone className="w-4 h-4 text-[#C5A560]" />
                    <span>{cCopy3in1.heroCTAConsult}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-End Packaging & Lifestyle Overlapping Scenes */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center select-none relative mt-8 lg:mt-0">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-[#FAF6F0] rounded-3xl border border-[#C5A560]/20 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] group">
                  
                  {/* Premium gold seal overlay */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#C5A560] to-[#E9DFCF] text-[#1C352D] text-[9px] font-black tracking-widest px-3 py-1.5 rounded-lg z-10 shadow-md">
                    DXN IMPORTATION
                  </div>

                  {/* Overlapping images - official & lifestyle */}
                  <div className="relative w-full h-[72%] flex items-center justify-center overflow-hidden rounded-2xl bg-[#EAF0EC] border border-[#E5D5C0]/20 p-4">
                    <img
                      src={coffee3in1Img}
                      alt="DXN Lingzhi Coffee 3 in 1 Packaging"
                      className="w-full h-full p-2 md:p-0 object-contain filter drop-shadow-[0_12px_24px_rgba(197,165,96,0.15)] relative z-1 group-hover:scale-104 transition-all duration-750"
                    />
                  </div>

                  <div className="h-[24%] flex items-center gap-4 mt-3 bg-white border border-[#E5D5C0]/35 p-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 p-1 shrink-0 border border-slate-200 flex items-center justify-center">
                      <img src={realCoffee3in1Img} alt="Real User coffee cream" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[10px] text-[#1C352D] font-bold tracking-widest uppercase leading-none">{isRtl ? 'صورة حية للمستهلكين' : 'PRODUIT REEL'}</p>
                      <h4 className="text-xs text-slate-700 font-extrabold mt-1 text-ellipsis overflow-hidden whitespace-nowrap">{isRtl ? 'قوام مخملي كريمي بالرغوة الغنية الكثيفة' : 'Mousse onctueuse et goût savoureux'}</h4>
                    </div>
                  </div>
                </div>

                {/* Floating badge for DXN certified original */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 text-slate-850 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl rotate-[-3deg] hidden sm:flex">
                  <div className="w-4.5 h-4.5 bg-[#C5A560] text-slate-900 font-extrabold flex items-center justify-center rounded-full text-xs">⭐</div>
                  <div className="text-left text-[9px]" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <p className="font-extrabold uppercase text-[#1C352D] tracking-widest">{isRtl ? 'أصلي ومغلف بالكامل' : 'LABEL ROUGE DXN'}</p>
                    <p className="font-semibold text-slate-500">{isRtl ? 'مستورد مباشرة ومعبأ بمعايير الأمان' : 'Importation Officielle Certifiée'}</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Epic Product Scientific Introduction (Overview Section) */}
          <section id="coffee3in1_overview" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Product details and certification list */}
                <div className="space-y-6" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] text-[#916E2B] text-xs font-bold uppercase tracking-wider border border-[#E9D5A6]/40">
                    💡 {isRtl ? 'ما هو سر قهوة لينجزي 3 في 1؟' : "Qu'est-ce que le Café Lingzhi 3 en 1 ?"}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] tracking-tight leading-tight font-sans">
                    {cCopy3in1.overviewTitle}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#C5A560] to-transparent rounded-full font-serif"></div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {cCopy3in1.overviewParagraph1}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {cCopy3in1.overviewParagraph2}
                  </p>

                  {/* Certified indicators list */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0">✓</div>
                      <span className="text-[11px] sm:text-xs text-slate-700 font-extrabold">{isRtl ? 'خالٍ من المبيضات الكيميائية' : 'Zéro conservateurs chimiques'}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0">✓</div>
                      <span className="text-[11px] sm:text-xs text-slate-700 font-extrabold">{isRtl ? 'غني بمستخلص الريشي العضوي' : 'Enrichi en Ganoderma bio'}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0">✓</div>
                      <span className="text-[11px] sm:text-xs text-slate-700 font-extrabold">{isRtl ? 'خفيف وسهل الهضم تماماً' : 'Digeste et protecteur stomacal'}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0">✓</div>
                      <span className="text-[11px] sm:text-xs text-slate-700 font-extrabold">{isRtl ? 'نسبة كافيين ضئيلة 0.06%' : 'Traces infimes de caféine'}</span>
                    </div>
                  </div>
                </div>

                {/* Exquisite visual display pedestal layout */}
                <div className="relative flex justify-center p-4">
                  <div className="absolute inset-0 bg-[#EADFC9]/15 blur-3xl rounded-full pointer-events-none"></div>

                  <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden border border-[#C5A560]/20 bg-white shadow-xl flex items-center justify-center p-8">
                    {/* Concentric radial decoration */}
                    <div className="absolute inset-4 border border-dashed border-[#C5A560]/10 rounded-2xl pointer-events-none"></div>
                    
                    <img
                      src={realCoffee3in1Img}
                      alt="Pouring crema coffee"
                      className="w-full h-full object-cover rounded-2xl shadow-md filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlapping stats tag */}
                    <div className="absolute bottom-6 right-6 bg-[#000]/90 border border-white/10 rounded-2xl p-3.5 text-white max-w-[200px] shadow-lg text-left" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <p className="text-[#C5A560] text-[10px] font-black uppercase tracking-widest">{isRtl ? 'العناية بالحموضة' : 'STOP ACCIDITE'}</p>
                      <p className="text-xs text-slate-200 mt-1 font-semibold">{isRtl ? 'الريشي يعمل كقاعدة تعادل حموضة المعدة.' : 'Le Reishi équilibre l\'acidité naturelle du café pour un transit confortable.'}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Premium Core Benefits Grid Section */}
          <section id="coffee3in1_benefits" className="py-16 sm:py-24 bg-[#FCFAF5] border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none animate-fade-in">
                <span className="text-xs font-black text-[#916E2B] bg-[#FAF0DC] border border-[#E9D5A6]/40 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  THE POWER OF REISHI CREAM
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight font-sans">
                  {cCopy3in1.benefitsHeading}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-[#C5A560] to-transparent rounded-full mx-auto mt-4 font-serif"></div>
                <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-md mx-auto text-center font-medium">
                  {isRtl ? 'مزايا علاجية وطاقة حية مستدامة مع كل كوب كريمي لذيذ' : 'Une merveille adaptogène qui redéfinit votre bien-être quotidien.'}
                </p>
              </div>

              {/* bento block of benefits derived from JSON data */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coffee3in1Benefits[pl].map((benefit, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-[2rem] border border-[#EADFC9]/60 hover:border-[#C5A560] p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(197,165,96,0.06)] hover:translate-y-[-4px] transition-all duration-300 relative group"
                    >
                      <div className="space-y-4" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                        <div className="w-11 h-11 rounded-2xl bg-[#C5A560]/10 border border-[#C5A560]/20 flex items-center justify-center text-xl shrink-0">
                          {index === 0 ? '⚡' : index === 1 ? '🥄' : index === 2 ? '☕' : '🌱'}
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-[#1C352D]">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* Visual Ingredients Showcase Section */}
          <section id="coffee3in1_ingredients" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-black text-emerald-800 bg-[#EAF0EC] border border-emerald-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  FORMULATION COFFEE HOUSE
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight font-sans">
                  {cCopy3in1.ingredientsHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto">
                  {isRtl ? 'مكونات طبيعية نقية لغذاء طاقة مثالي متجانس' : 'Mélange haut de gamme exempt d\'additifs artificiels nocifs'}
                </p>
              </div>

              {/* Ingredients Circle Displays */}
              <div className="grid sm:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12 items-stretch">
                <div className="flex flex-col items-center p-5 bg-[#FAF6F0]/50 rounded-2xl border border-[#FAF6F0] hover:border-[#C5A560]/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[#1C352D]/5 text-[#1C352D] border border-[#1C352D]/10 flex items-center justify-center font-bold text-2.5xl mb-4 shadow-sm">☕</div>
                  <h4 className="text-sm font-bold text-[#1C352D] uppercase">{isRtl ? 'بن برازيلي ممتاز' : 'Café Arabica Fine'}</h4>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{isRtl ? 'حبوب بن عربية فاخرة منتقاة بعناية لنكهة إسبرسو عميقة وسلسة.' : 'Grains précieux torréfiés offrant un arôme corsé divin.'}</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-[#FAF6F0]/50 rounded-2xl border border-[#FAF6F0] hover:border-[#C5A560]/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[#1C352D]/5 text-[#1C352D] border border-[#1C352D]/10 flex items-center justify-center font-bold text-2.5xl mb-4 shadow-sm">🌱</div>
                  <h4 className="text-sm font-bold text-[#1C352D] uppercase">{isRtl ? 'مستخلص الجانوديرما' : 'Extrait de Reishi'}</h4>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{isRtl ? 'خلاصة فطر الريشي العضوي المعتمد لدعم المناعة والنشاط الخلوي.' : 'Champignon de l\'immortalité rééquilibrant l\'acidité naturelle.'}</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-[#FAF6F0]/50 rounded-2xl border border-[#FAF6F0] hover:border-[#C5A560]/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[#1C352D]/5 text-[#1C352D] border border-[#1C352D]/10 flex items-center justify-center font-bold text-2.5xl mb-4 shadow-sm">🥛</div>
                  <h4 className="text-sm font-bold text-[#1C352D] uppercase">{isRtl ? 'مبيض نباتي آمن' : 'Moussant Végétal'}</h4>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{isRtl ? 'مبيض نباتي خفيف وخالٍ من مشتقات الحليب لضمان رغوة غنية مريحة للمعدة.' : 'Crème non laitière digestible procurant un corps crémeux d\'exception.'}</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-[#FAF6F0]/50 rounded-2xl border border-[#FAF6F0] hover:border-[#C5A560]/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[#1C352D]/5 text-[#1C352D] border border-[#1C352D]/10 flex items-center justify-center font-bold text-2.5xl mb-4 shadow-sm">🍬</div>
                  <h4 className="text-sm font-bold text-[#1C352D] uppercase">{isRtl ? 'قصب سكر طبيعي متوازن' : 'Sucre de Canne Financier'}</h4>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{isRtl ? 'لمسة سكر قصب طبيعي متوازن ومنخفض للغاية لتعديل المزاج من غير إرهاق البنكرياس.' : 'Rondeur douce savamment proportionnée pour d\'excellentes performances.'}</p>
                </div>
              </div>

            </div>
          </section>

          {/* Interactive Step-by-Step preparation instrucciones (How to use) */}
          <section id="coffee3in1_how_to_use" className="py-16 sm:py-24 bg-[#FCFAF5] border-b border-[#FAF6F0]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto mb-16 select-none">
                <span className="text-xs font-black text-[#916E2B] bg-[#FAF0DC] border border-[#E9D5A6]/40 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-mono">
                  BREWING RITUAL
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 tracking-tight leading-tight font-sans">
                  {cCopy3in1.howToUseHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto text-center font-medium">
                  {isRtl ? 'حضر كوب صحي متكامل بثوانٍ مع خطوات بسيطة وسريعة' : 'Comment infuser votre rituel de vitalité crémeuse DXN'}
                </p>
              </div>

              {/* Timeline list of coffee3in1Steps */}
              <div className="grid sm:grid-cols-4 gap-8 relative">
                {coffee3in1Steps[pl].map((step, idx) => {
                  return (
                    <div key={idx} className="flex flex-col items-center text-center relative p-5 bg-white rounded-2xl border border-slate-100 shadow-xs">
                      {/* Connection dashed line */}
                      {idx < 3 && (
                        <div className="hidden sm:block absolute top-[44px] left-[70%] right-[-30%] h-0.5 border-t border-dashed border-[#C5A560]/30 z-0 pointer-events-none"></div>
                      )}
                      
                      <div className="w-12 h-12 rounded-full bg-[#1C352D] text-[#C5A560] border-2 border-white flex items-center justify-center font-black text-sm relative z-1 shadow-md mb-4">
                        {idx + 1}
                      </div>

                      <h4 className="text-sm font-bold text-[#1C352D] uppercase leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* Why Choose DXN Lingzhi Coffee 3 in 1 */}
          <section id="coffee3in1_why_choose" className="py-16 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Image panel with badge */}
                <div className="relative flex justify-center order-2 lg:order-1">
                  <div className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-100 overflow-hidden border border-[#C5A560]/20">
                    <img src={realCoffee3in1Img} alt="Creamy coffee" className="w-full h-full object-cover rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <span className="text-[#C5A560] text-xs font-black uppercase tracking-widest">{isRtl ? 'الرغوة المخملية' : 'LA CREME PARFAITE'}</span>
                      <h4 className="text-lg font-bold mt-1 text-slate-100 leading-snug">{isRtl ? 'رغوة نباتية كثيفة تذوب بالفم ولا تتعب المعدة' : 'Un moussant végétal sain, digeste, sans produits laitiers'}</h4>
                    </div>
                  </div>
                </div>

                {/* Right text list */}
                <div className="space-y-6 order-1 lg:order-2" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EC] text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-100">
                    🛡 {isRtl ? 'أمان وجودة عالمية' : 'CHOIX SECURITE'}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] tracking-tight leading-tight font-sans">
                    {cCopy3in1.whyChooseHeading}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#C5A560] to-transparent rounded-full font-serif"></div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    {isRtl ? 'يسعى الملايين عالمياً للاستثمار في قهوة دي إكس إن 3 في 1 للأرقام التالية:' : 'Notre sélection vous garantit une expérience gourmande saine inégalée.'}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#1C352D]">{isRtl ? 'جودة فاخرة معتمدة' : 'Qualité d\'excellence certifiée'}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{isRtl ? 'حاصلة على شهادات الجودة العالمية والممارسات الصناعية الفضلى GMP و ISO.' : 'Produit importé officiel conditionné strictement.'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#1C352D]">{isRtl ? 'آمنة تماماً للمعدة والقولون العصبي' : 'Convient à l\'estomac fragile'}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{isRtl ? 'تعديل حموضة القهوة من خلال الفطر الريشي يضمن لك شرباً مريحاً طوال النهار.' : 'Les nutriments alcalins du Reishi agissent en barrière gastrique.'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#1C352D]">{isRtl ? 'سهل وعملية التحضير أينما كنت' : 'Facile à savourer n\'importe où'}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{isRtl ? 'أكياس صغيرة ملائمة للسفر، العمل، الرياضة، تحضر في ثوانٍ بالماء الساخن.' : 'En sachet monodose, idéal au bureau ou en voyage.'}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Highly High-Converting Discount Packages & Checkout Section */}
          <section id="coffee3in1-checkout-card-section" className="py-16 sm:py-24 bg-white">
            <PremiumCheckoutForm
              productId="coffee3in1"
              lang={lang}
              onNavigateHome={() => setActiveView('store')}
            />
          </section>

          {/* Togglable Luxury accordians FAQ Section */}
          <section id="coffee3in1_faq_section" className="py-16 sm:py-24 bg-[#FAF6F0] text-slate-800 border-t border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#1C352D] uppercase tracking-widest bg-white border border-[#E5D5C0]/60 px-3.5 py-1.5 rounded-full font-mono">
                  FAQ
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 font-sans">
                  {cCopy3in1.faqHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto text-center font-medium">
                  {cCopy3in1.faqSub}
                </p>
              </div>

              {/* FAQ Accordion component with coffee3in1FAQs */}
              <FAQAccordion lang={lang} customItems={coffee3in1FAQs[pl]} />

            </div>
          </section>

        </motion.div>
      ) : activeView === 'gano-oil' ? (
        <GanoMassageOilPage lang={lang} isRtl={isRtl} t={t} WHATSAPP_PHONE={WHATSAPP_PHONE} setActiveView={handleNavigateView} />
      ) : activeView === 'limonzhi' ? (
        <LimonzhiPage lang={lang} isRtl={isRtl} t={t} WHATSAPP_PHONE={WHATSAPP_PHONE} setActiveView={handleNavigateView} />
      ) : activeView === 'soap' ? (
        <GanozhiSoapPage lang={lang} isRtl={isRtl} t={t} WHATSAPP_PHONE={WHATSAPP_PHONE} setActiveView={handleNavigateView} />
      ) : activeView === 'reishilium' ? (
        <ReishiliumPowderPage lang={lang} isRtl={isRtl} t={t} WHATSAPP_PHONE={WHATSAPP_PHONE} setActiveView={handleNavigateView} />
      ) : activeView === 'shop' ? (
        <motion.div
          key="shop-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ShopView
            lang={lang}
            isRtl={isRtl}
            addToCart={addToCart}
            isDark={isDark}
            setActiveView={handleNavigateView}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            activeCategory={activeCategoryFilter}
            setActiveCategory={setActiveCategoryFilter}
            onSelectPack={(packId) => {
              setSelectedPackId(packId);
              handleNavigateView('pack-detail');
            }}
          />
        </motion.div>
      ) : activeView === 'bestsellers' ? (
        <motion.div
          key="bestsellers-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <BestSellersView
            lang={lang}
            isRtl={isRtl}
            addToCart={addToCart}
            isDark={isDark}
            setActiveView={handleNavigateView}
          />
        </motion.div>
      ) : activeView === 'checkout' ? (
        <motion.div
          key="checkout-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <OnePageCheckout
            cart={cart}
            updateCartQty={updateCartQty}
            lang={lang}
            isRtl={isRtl}
            setActiveView={handleNavigateView}
            isDark={isDark}
            clearCart={() => setCart({})}
          />
        </motion.div>
      ) : ['packs', 'pack-detail'].includes(activeView) ? (
        <motion.div
          key={`${activeView}-view`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PremiumPacksView
            lang={lang}
            isRtl={isRtl}
            activeView={activeView as 'packs' | 'pack-detail'}
            setActiveView={handleNavigateView}
            selectedPackId={selectedPackId}
            setSelectedPackId={setSelectedPackId}
            addToCart={addToCart}
            isDark={isDark}
          />
        </motion.div>
      ) : activeView === 'shampoo' ? (
        /* ================= DETAILED GANOZHI SHAMPOO LANDING VIEW ================= */
        <motion.div
          key="shampoo-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white text-slate-800"
        >
          {/* Back reference warning bar banner */}
          <div className="bg-[#FAF6F0] border-b border-emerald-100 py-3 text-center sm:px-6 select-none flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#1C352D]">
            <span className="flex items-center gap-1.5 justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1C352D] animate-ping"></span>
              🌿 {isRtl ? 'عرض رعاية العائلة الفاخر: شحن سريع مجاني لجميع مدن المغرب والدفع الآمن نقداً!' : 'Vitalité Capillaire : Livraison gratuite au Maroc & Paiement à la livraison !'}
            </span>
            <button
              onClick={() => {
                handleNavigateView('store');
              }}
              className="px-2.5 py-1 bg-[#1C352D] hover:bg-[#25443B] text-white text-[10px] uppercase tracking-wider rounded-lg transition-all border border-[#C5A560]/20 cursor-pointer"
            >
              {isRtl ? 'الرجوع للمتجر للتسوق العام' : 'Retour au catalogue général'}
            </button>
          </div>

          {/* Luxury Botanical Shampoo Hero Section */}
          <section id="shampoo_hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0]/40 to-[#FAF6F0] text-slate-800 py-14 sm:py-20 lg:py-28 border-b border-[#E5D5C0]/30">
            {/* Ambient luxury lights */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C5A560]/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-800/5 blur-[120px] rounded-full -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
               
              {/* Left Column: Exquisite Content */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6 select-none" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF0EC] text-[#1C352D] text-xs font-black uppercase tracking-wider border border-emerald-200 font-mono">
                  <Sparkles className="w-4.5 h-4.5 text-[#C5A560] animate-pulse" />
                  {sCopy.heroBadge}
                </span>

                <h1 className="text-3.5xl sm:text-5xl lg:text-5.5xl font-black text-[#1C352D] leading-tight tracking-tight font-sans">
                  {sCopy.heroTitle}
                </h1>

                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-2xl font-medium">
                  {sCopy.heroSub}
                </p>

                {/* Micro guarantees features list */}
                <div className="grid grid-cols-2 gap-4 w-full mt-2 text-slate-800 border-t border-b border-[#E5D5C0]/40 py-4">
                  <div className="flex items-center gap-2.5" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="w-5.5 h-5.5 rounded-full bg-[#EAF0EC] border border-emerald-200 flex items-center justify-center text-[#1C352D] text-xs shrink-0">✔</div>
                    <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">{isRtl ? 'درجة حموضة pH متوازنة' : 'pH Physiologique Neutre'}</span>
                  </div>
                  <div className="flex items-center gap-2.5" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="w-5.5 h-5.5 rounded-full bg-[#EAF0EC] border border-emerald-200 flex items-center justify-center text-[#1C352D] text-xs shrink-0">✔</div>
                    <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">{isRtl ? 'غني بخلاصة فطر الجانوديرما' : 'Riche en Ganoderma Reishi'}</span>
                  </div>
                  <div className="flex items-center gap-2.5" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="w-5.5 h-5.5 rounded-full bg-[#EAF0EC] border border-emerald-200 flex items-center justify-center text-[#1C352D] text-xs shrink-0">✔</div>
                    <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">{isRtl ? 'مغذي بـ Pro-Vitamin B5' : 'Fortifié avec Pro-Vitamine B5'}</span>
                  </div>
                  <div className="flex items-center gap-2.5" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="w-5.5 h-5.5 rounded-full bg-[#EAF0EC] border border-emerald-200 flex items-center justify-center text-[#1C352D] text-xs shrink-0">✔</div>
                    <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">{isRtl ? 'خالي من الكيماويات الضارة' : 'Zéro Sulfates ou Silicones'}</span>
                  </div>
                </div>

                {/* Call-to-actions buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <button
                    onClick={scrollToShampooCheckout}
                    className="px-8 py-4.5 bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2.5 cursor-pointer border border-[#C5A560]/35 group"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C5A560]" />
                    <span>{sCopy.heroCTAOrder}</span>
                  </button>
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(t.whatsappAssistanceText);
                      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`, '_blank');
                    }}
                    className="px-8 py-4.5 bg-white hover:bg-[#FAF6F0]/50 text-[#1C352D] font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all border border-[#E5D5C0] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#C5A560]" />
                    <span>{sCopy.heroCTAConsult}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Royal Shampoo Bottle Display */}
              <div className="lg:col-span-5 flex justify-center relative select-none">
                
                {/* Golden rotating halo behind shampoo bottle */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none -mt-8"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dashed border-[#C5A560]/35 pointer-events-none -mt-4 opacity-40"
                ></motion.div>

                {/* Primary Premium Ganozhi Shampoo bottle wrapper */}
                <div className="relative w-64 sm:w-80 aspect-square p-4 bg-[#FAF6F0] border border-[#C5A560]/30 rounded-[3rem] shadow-md flex items-center justify-center overflow-hidden backdrop-blur-sm group">
                  
                  {/* Subtle inner gold frame */}
                  <div className="absolute inset-2.5 border border-[#C5A560]/10 rounded-[2.5rem] pointer-events-none"></div>

                  <motion.img
                    src={shampooImg}
                    alt="DXN Ganozhi Shampoo"
                    className="w-full h-full p-2 md:p-0 object-contain filter drop-shadow-[0_20px_40px_rgba(3,21,13,0.1)] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  />
                  
                  {/* Premium quality batch label marker */}
                  <div className="absolute bottom-6 left-6 bg-white border border-slate-200 text-[#1C352D] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#C5A560]" />
                    <span>DXN ORIGINAL</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Features / Benefits Section */}
          <section id="shampoo_benefits" className="py-16 sm:py-24 bg-[#FCFAF5] border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono">
                  ✨ {isRtl ? 'فوائد حقيقية ملموسة' : 'Avantages Phares Recensés'}
                </span>
                <h2 className="text-2.5xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 font-sans leading-tight">
                  {sCopy.benefitsHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                  {sCopy.benefitsSub}
                </p>
              </div>

              {/* Grid cards for shampoo benefits */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto font-sans">
                {shampooBenefits[pl].map((benefit, index) => {
                  const iconsList = [Smile, Heart, Activity, Award];
                  const IconComp = iconsList[index % iconsList.length];

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADFC9]/70 shadow-xs hover:border-[#C5A560] hover:shadow-md transition-all duration-300 flex gap-5 items-start relative overflow-hidden group"
                      style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                    >
                      {/* Interactive shine */}
                      <div className="absolute inset-0 bg-[#C5A560]/1 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>

                      <div className="w-12 h-12 rounded-2xl bg-[#EAF0EC] text-[#1C352D] flex items-center justify-center shrink-0 border border-[#E5D5C0]/40 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="space-y-2 relative z-10" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                        <h3 className="text-md sm:text-lg font-bold text-[#1C352D]">{benefit.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* About Product / Chemistry & Botanical Overview */}
          <section id="shampoo_overview" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Exquisite Overlapping Photos */}
              <div className="lg:col-span-6 relative flex justify-center select-none">
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-[#FAF8F5] p-6 border border-[#EADFC9]/50 flex items-center justify-center overflow-hidden">
                  
                  {/* Subtle golden grid dots visual */}
                  <div className="absolute inset-4 border border-[#C5A560]/10 rounded-[2.5rem] pointer-events-none"></div>

                  <motion.img
                    src={realShampooImg}
                    alt="DXN Ganozhi Shampoo wellness"
                    className="w-11/12 h-11/12 object-contain filter drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlap Secondary photo card floating */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-[-30px] right-[-10px] w-48 sm:w-56 rounded-3xl bg-white p-3 border border-[#EADFC9] shadow-xl overflow-hidden group select-none"
                >
                  <div className="aspect-square rounded-2xl bg-[#FCFAF5] p-2 flex items-center justify-center border border-[#EADFC9]/30 relative overflow-hidden">
                    <img
                      src={extraShampooImg}
                      alt="Ganozhi Shampoo bubble texture"
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-2.5 space-y-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <p className="text-[10px] font-black text-[#C5A560] uppercase leading-none">{isRtl ? 'حماية ولمعان وافر' : 'Ultra Doux'}</p>
                    <p className="text-[11px] font-bold text-[#1C352D] leading-none">{isRtl ? 'ترطيب برو فيتامين B5' : 'Action Pro-B5 active'}</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Descriptions Content */}
              <div className="lg:col-span-6 flex flex-col items-start gap-6 font-sans" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="text-xs font-bold text-[#C5A560] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
                  {isRtl ? 'الفلسفة البيولوجية' : 'Soin Bio-actif Neutre'}
                </span>
                
                <h2 className="text-2.5xl sm:text-3.5xl font-black text-[#1C352D] leading-tight font-sans">
                  {sCopy.overviewTitle}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {sCopy.overviewParagraph1}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-normal">
                  {sCopy.overviewParagraph2}
                </p>

                {/* Grid stats markers */}
                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-[#EADFC9]/30 mt-2 select-none">
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-black text-[#1C352D] font-sans">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'عضوي وطبيعي' : 'Organique'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-black text-[#1C352D] font-sans">pH 5.5</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'صديق لفروة الرأس' : 'Équilibré'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-black text-[#1C352D] font-sans">250ml</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'حجم العبوة الواحدة' : 'Contenance'}</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Premium Fine Ingredients cards Display */}
          <section id="shampoo_ingredients" className="py-16 sm:py-24 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none font-sans">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono">
                  🧪 {isRtl ? 'المكونات الثلاثية النشطة' : 'Ingrédients d\'Or Capillaires'}
                </span>
                <h2 className="text-2.5xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 font-sans leading-tight">
                  {sCopy.ingredientsHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                  {sCopy.ingredientsSub}
                </p>
              </div>

              {/* Ingredients grid showcase */}
              <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center font-sans">
                
                {/* Ingredient 1 */}
                <div className="bg-[#FAF8F5] md:p-8 p-6 rounded-3xl border border-[#EADFC9]/50 flex flex-col items-center gap-4 hover:border-[#C5A560] transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-emerald-900 border border-[#C5A560]/30 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-106 transition-all duration-300 shadow-md">
                    🍄
                  </div>
                  <h3 className="text-sm sm:text-md font-bold text-[#1C352D] mt-2">{isRtl ? 'مستخلص الفطر الريشي العضوي' : 'Ganoderma Lucidum'}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{isRtl ? 'المعروف بالفطر السحري الغني بمضادات الأكسدة ومحفز الفوليكولات والمانع الطبيعي للقشرة وتساقط الشعر.' : 'Extrait de champignon impérial qui stimule la microcirculation et protège le bulbe.'}</p>
                </div>

                {/* Ingredient 2 */}
                <div className="bg-[#FAF8F5] md:p-8 p-6 rounded-3xl border border-[#EADFC9]/50 flex flex-col items-center gap-4 hover:border-[#C5A560] transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-[#1C352D] border border-[#C5A560]/30 flex items-center justify-center text-[#C5A560] text-2xl font-bold group-hover:scale-106 transition-all duration-300 shadow-md">
                    💧
                  </div>
                  <h3 className="text-sm sm:text-md font-bold text-[#1C352D] mt-2">{isRtl ? 'برو فيتامين B5 (الـبانثينول)' : 'Pro-Vitamine B5'}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{isRtl ? 'بلسم ترطيب عميق يغلف خصلات الشعر ويمنع الهشاشة، ويجعل الشعر مرناً وسهل التسريح ولامعاً للغاية.' : 'Un puissant hydratant dermo-actif qui gaine la fibre capillaire.'}</p>
                </div>

                {/* Ingredient 3 */}
                <div className="bg-[#FAF8F5] md:p-8 p-6 rounded-3xl border border-[#EADFC9]/50 flex flex-col items-center gap-4 hover:border-[#C5A560] transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-amber-900 border border-[#C5A560]/30 flex items-center justify-center text-[#C5A560] text-2xl font-bold group-hover:scale-106 transition-all duration-300 shadow-md">
                    🌱
                  </div>
                  <h3 className="text-sm sm:text-md font-bold text-[#1C352D] mt-2">{isRtl ? 'المنظفات النباتية الطبيعية' : 'Tensioactifs Végétaux'}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{isRtl ? 'رغوة مخملية لطيفة مع معدلات حموضة متوافقة تماماً لتطهير الألياف دون تجريد الزيوت الحمائية الأساسية.' : 'Agent lavant moussant ultra-doux issu de la coco pour préserver les barrières naturelles.'}</p>
                </div>

              </div>

            </div>
          </section>

          {/* How To Use Steps Section */}
          <section id="shampoo_how_to_use" className="py-16 sm:py-24 bg-[#FCFAF5] border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none font-sans">
                <span className="text-xs font-bold text-[#C5A560] uppercase tracking-widest bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono">
                  📖 {isRtl ? 'البروتوكول الصحي الفعال' : 'Rituel d\'Or d\'Application'}
                </span>
                <h2 className="text-2.5xl sm:text-4xl font-extrabold text-[#1C352D] mt-4 font-sans leading-tight">
                  {sCopy.howToUseHeading}
                </h2>
                <p className="text-xs text-slate-400 mt-1">طريقة استخدام بسيطة تضمن لك أقصى استفادة من أول استعمال</p>
              </div>

              {/* Timeline list of shampooSteps */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative select-none font-sans">
                {shampooSteps[pl].map((step, idx) => {
                  return (
                    <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EADFC9]/50 relative hover:border-[#C5A560] transition-colors flex flex-col justify-between group">
                      
                      {/* Step index badge */}
                      <div className="absolute top-[-15px] left-6 bg-[#1C352D] text-[#C5A560] border border-[#C5A560]/40 font-black text-xs w-8.5 h-8.5 rounded-xl flex items-center justify-center shadow-md">
                        {idx + 1}
                      </div>

                      <div className="pt-4 space-y-3" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                        <h4 className="text-sm sm:text-md font-bold text-[#1C352D]">{step.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">{step.desc}</p>
                      </div>

                      {/* Accent gold line bottom */}
                      <div className="w-12 h-1 bg-[#C5A560]/30 group-hover:bg-[#C5A560] transition-colors rounded-full mt-6"></div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* DXN Certification and Why Choose dxn */}
          <section id="shampoo_why_choose" className="py-16 bg-white border-b border-[#FAF6F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none font-sans">
              <span className="text-xs font-bold text-[#C5A560] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
                🏆 {isRtl ? 'شهادات الجودة العالمية' : 'Certifications du Lab DXN'}
              </span>
              <h2 className="text-2.5xl sm:text-3.5xl font-extrabold text-[#1C352D] mt-4 font-sans max-w-2xl mx-auto">
                {sCopy.whyChooseHeading}
              </h2>

              <div className="grid sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 text-slate-700">
                
                <div className="bg-[#FAF8F5] border border-[#EADFC9]/40 p-5 rounded-2xl flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1C352D] shadow-xs text-lg font-bold">🧪</div>
                  <h4 className="text-xs font-black text-[#1C352D]">{isRtl ? 'تحت الرقابة الطبية' : 'Contrôle Clinique'}</h4>
                  <p className="text-[10px] text-slate-400 font-medium font-sans">{isRtl ? 'منتجات معتمدة ومختبرة مخبرياً لضمان سلامة الجلدة.' : 'Évalué et validé par les normes de phlébologie.'}</p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#EADFC9]/40 p-5 rounded-2xl flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1C352D] shadow-xs text-lg font-bold">📜</div>
                  <h4 className="text-xs font-black text-[#1C352D]">{isRtl ? 'شهادة الـ ISO الدقيقة' : 'Certification ISO'}</h4>
                  <p className="text-[10px] text-slate-400 font-medium font-sans">{isRtl ? 'مطابقة لأعلى معايير التصنيع الدوائي والتجميلي الصارم.' : 'Fabriqué selon les normes de pureté ISO 9001.'}</p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#EADFC9]/40 p-5 rounded-2xl flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1C352D] shadow-xs text-lg font-bold">🌍</div>
                  <h4 className="text-xs font-black text-[#1C352D]">{isRtl ? 'مستخلصات نباتية حقيقة' : '100% Végétal'}</h4>
                  <p className="text-[10px] text-slate-400 font-medium font-sans">{isRtl ? 'مستخلص من الطبيعة دون تعديل وراثي أو مواد كيميائية ضارة.' : 'Produit issu des fermes préservées de DXN.'}</p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#EADFC9]/40 p-5 rounded-2xl flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1C352D] shadow-xs text-lg font-bold">🛡</div>
                  <h4 className="text-xs font-black text-[#1C352D]">{isRtl ? 'الضمان الكامل لسميرة' : 'Garantie Samira'}</h4>
                  <p className="text-[10px] text-slate-400 font-medium font-sans">{isRtl ? 'متابعة وتأكيد مستمر، وضمان استبدال فوري عند وجود أي عائق.' : 'Conseils exclusifs et retours gratuits.'}</p>
                </div>

              </div>
            </div>
          </section>

          {/* Pricing bundles options picker & direct WhatsApp checkout */}
          <section id="shampoo-checkout-card-section" className="py-16 sm:py-24 bg-white">
            <PremiumCheckoutForm
              productId="shampoo"
              lang={lang}
              onNavigateHome={() => setActiveView('store')}
            />
          </section>

          {/* Togglable Luxury accordians FAQ Section */}
          <section id="shampoo_faq_section" className="py-16 sm:py-24 bg-[#FAF6F0] text-slate-800 border-t border-[#E5D5C0]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 select-none font-sans">
                <span className="text-xs font-bold text-[#1C352D] uppercase tracking-widest bg-white border border-[#E5D5C0]/60 px-3.5 py-1.5 rounded-full font-mono">
                  FAQ
                </span>
                <h3 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] mt-4 font-sans">
                  {sCopy.faqHeading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xs mx-auto text-center font-medium font-sans">
                  {sCopy.faqSub}
                </p>
              </div>

              {/* FAQ Accordion component with shampooFAQs */}
              <FAQAccordion lang={lang} customItems={shampooFAQs[pl]} />

            </div>
          </section>

        </motion.div>
      ) : (
        /* FALLBACK OR LOADING STATE */
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0]">
          <span className="text-slate-500 font-bold">Please wait...</span>
        </div>
      )}

      {/* Customer experiences & reviews section */}
      <section id="reviews-section" className="py-16 sm:py-24 bg-[#FAF6F0]/40 border-y border-[#E5D5C0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1C352D] accent-serif">
              {rTrans.customerFeedback}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              {rTrans.sub}
            </p>
          </div>

          <ReviewsList
            lang={lang}
            reviews={reviews}
            onAddReview={onAddCustomReview}
            rTrans={rTrans}
            isRtl={isRtl}
            productsData={productsData}
          />
        </div>
      </section>

      {/* About Founder (Samira) / Personal Wellness Touch */}
      <section id="about-us" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center relative select-none">
            <div className="relative max-w-md w-full aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#E5D5C0]/40 bg-white">
              <motion.img
                src={logoImg}
                alt="Founder Samira"
                className="w-full h-full object-contain p-12 cursor-pointer"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-[#1C352D] bg-[#FAF6F0]/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E5D5C0]/40 shadow-sm" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <span className="text-[#C5A560] text-xs font-black uppercase tracking-widest">{isRtl ? 'العناية بالذات' : 'Soin Holistique'}</span>
                <h4 className="text-xl font-bold mt-0.5 leading-tight accent-serif">Samira Naturale</h4>
                <p className="text-[10px] sm:text-xs text-slate-600 mt-1">Certified DXN Partner & Natural Wellness Guide in Morocco</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#C5A560] text-[#1C352D] w-20 h-20 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-lg rotate-12 select-none border border-white">
              <p className="text-xs font-black leading-none uppercase">100%</p>
              <p className="text-[7px] leading-tight font-extrabold uppercase mt-1">Naturel & Pur</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] text-[#1C352D] text-xs font-bold uppercase tracking-wider border border-[#E5D5C0]/60">
              👑 {isRtl ? 'عن رؤيتنا' : 'Notre Vision'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C352D] accent-serif">
              {t.aboutTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.aboutText1}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.aboutText2}
            </p>

            <div className="mt-4 p-5 rounded-2xl bg-[#FAF6F0]/60 border border-[#E5D5C0]/40 flex flex-col sm:flex-row items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-full bg-[#EAF0EC] text-[#1C352D] flex items-center justify-center shrink-0 border border-[#E5D5C0]/40">
                <Phone className="w-5 h-5 text-[#C5A560]" />
              </div>
              <div className="flex-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <h5 className="font-bold text-[#1C352D] text-sm">{isRtl ? 'هل تحتاج إلى استشارة لمستلزماتك الصحية؟' : 'Besoin de conseils personnalisés ?'}</h5>
                <p className="text-[11px] text-slate-500 mt-0.5">{isRtl ? 'تواصل معي مباشرة لتحديد المنتجات المناسبة لحالتك الصحية.' : 'Contactez-moi directement pour choisir les formules les plus adaptées.'}</p>
              </div>
              <button
                type="button"
                onClick={handleGeneralInquiry}
                className="bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs px-5 py-3 rounded-xl tracking-wide transition-all border border-[#C5A560]/20 cursor-pointer select-none active:scale-95 text-center shadow-xs"
              >
                {isRtl ? 'اتصل بسميرة' : 'Parler à Samira'}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Luxury Social Media Section */}
      <section id="premium-social-section" className="bg-gradient-to-b from-[#0F2D3C] to-[#0B2A3A] text-[#F7F4EF] py-20 px-4 border-t border-white/[0.06] relative overflow-hidden">
        {/* Low-opacity elegant botanical leaf pattern */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Leaf className="absolute -top-10 -left-10 w-48 h-48 text-[#D4A64A]/[0.02] transform -rotate-12" />
          <Leaf className="absolute top-1/4 right-8 w-32 h-32 text-[#D4A64A]/[0.015] transform rotate-45 animate-pulse" style={{ animationDuration: '6s' }} />
          <Leaf className="absolute -bottom-12 left-1/4 w-40 h-40 text-[#D4A64A]/[0.02] transform rotate-90" />
          
          {/* Subtle slow floating background glow */}
          <motion.div
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -30, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4A64A]/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Small Gilded Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4A64A]/10 border border-[#D4A64A]/30 text-[#D4A64A] text-[10px] font-black uppercase tracking-wider mb-6 select-none"
          >
            <Sparkles className="w-3 h-3 text-[#D4A64A]" />
            <span>{isRtl ? 'عائلة سميرة ناتورال' : 'Communauté Exclusive'}</span>
          </motion.div>

          {/* Elegant Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 select-none max-w-2xl"
          >
            {isRtl ? 'انضموا إلى عائلتنا على وسائل التواصل' : 'Rejoignez Notre Communauté'}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#F7F4EF]/70 leading-relaxed mb-12 max-w-lg select-none"
          >
            {isRtl 
              ? 'اكتشفوا معنا روتين الحياة الصحية، نصائح العافية الطبيعية، وجديد باقات الصحة والعافية يومياً.'
              : 'Découvrez nos rituels de bien-être, conseils de naturopathie exclusifs et nouveautés inspirantes au quotidien.'}
          </motion.p>

          {/* Social Icons Container (exactly 24px gap = gap-6) */}
          <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
            
            {/* 1. Website Globe Link */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                id="social_globe_button"
                href="#"
                className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-[#F7F4EF]/90 transition-all duration-300 hover:border-[#D4A64A] hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(212,166,74,0.35)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Website"
              >
                <Globe className="w-8 h-8 transition-transform duration-300 hover:rotate-6" />
              </motion.a>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#F7F4EF]/50 select-none">
                {isRtl ? 'الموقع الرسمي' : 'Site Web'}
              </span>
            </motion.div>

            {/* 2. Premium Instagram Link */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                id="social_instagram_button"
                href="https://www.instagram.com/samira_naturale?igsh=a3V5OHc1NXl2b2R3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:border-[#ee2a7b]/60 hover:bg-gradient-to-tr hover:from-[#f9ce34]/20 hover:via-[#ee2a7b]/20 hover:to-[#6228d7]/20 hover:shadow-[0_0_30px_rgba(238,42,123,0.45)] relative overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                {/* Active hover inner glow */}
                <div className="absolute inset-0 bg-radial-gradient from-[#ee2a7b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Instagram className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              </motion.a>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#D4A64A] select-none flex items-center gap-1.5">
                <span>@samira_naturale</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] animate-pulse" />
              </span>
            </motion.div>

            {/* 3. Facebook Link */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.a
                id="social_facebook_button"
                href="https://www.facebook.com/share/1B8mwBwGef/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-[#F7F4EF]/90 transition-all duration-300 hover:border-[#1877F2] hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(24,119,242,0.35)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 transition-transform duration-300 hover:rotate-[-6deg]" />
              </motion.a>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#F7F4EF]/50 select-none">
                Facebook
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Beautiful Redesigned Premium Footer */}
      <motion.footer
        id="contact-footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#0F2D3C] text-[#F7F4EF] pt-20 pb-10 border-t border-[#D4A64A]/30 relative overflow-hidden"
      >
        {/* Subtle scattered botanical leaf icons */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Leaf className="absolute top-10 left-10 w-44 h-44 text-[#FAF6F0]/[0.02] transform -rotate-12" />
          <Leaf className="absolute -bottom-16 -right-16 w-80 h-80 text-[#FAF6F0]/[0.02] transform rotate-45" />
          <Leaf className="absolute top-1/2 left-1/3 w-36 h-36 text-[#FAF6F0]/[0.01] transform -rotate-45" />
          <Leaf className="absolute bottom-1/3 right-1/4 w-32 h-32 text-[#FAF6F0]/[0.01] transform rotate-12" />
          {/* Subtle gold gradient radial blur glow matching top luxury sites */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D4A64A]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#D4A64A]/5 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          
          {/* Column 1: Contact Section (Left on desktop, Third on mobile) */}
          <div className="lg:col-span-5 order-3 lg:order-1 space-y-6 flex flex-col" style={{ alignItems: isRtl ? 'flex-end' : 'flex-start', textAlign: isRtl ? 'right' : 'left' }}>
            <h5 className="text-[#D4A64A] font-black text-xs sm:text-sm tracking-widest uppercase relative pb-2 select-none">
              {isRtl ? 'الدعم وطلب الاستشارة' : 'Support & Assistance'}
              <span className="absolute bottom-0 w-10 h-[2px] bg-[#D4A64A]/60" style={{ [isRtl ? 'right' : 'left']: 0 }}></span>
            </h5>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              
              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.07] hover:border-[#D4A64A]/30 transition-all duration-300 shadow-xs flex items-center gap-3.5 cursor-pointer select-none"
                onClick={() => window.open('tel:0612345678')}
              >
                <div className="w-10 h-10 rounded-full bg-[#D4A64A]/10 text-[#D4A64A] flex items-center justify-center shrink-0 border border-[#D4A64A]/20 transition-transform duration-300 group-hover:rotate-12">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#D4A64A]/85 uppercase tracking-widest leading-none">{isRtl ? 'اتصال مباشر' : 'Appelez-nous'}</p>
                  <p className="text-xs sm:text-sm font-black text-[#F7F4EF] font-mono mt-1">0612345678</p>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.07] hover:border-[#D4A64A]/30 transition-all duration-300 shadow-xs flex items-center gap-3.5 cursor-pointer select-none"
                onClick={handleGeneralInquiry}
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20 transition-transform duration-300 group-hover:rotate-12">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#25D366] uppercase tracking-widest leading-none">WhatsApp</p>
                  <p className="text-xs sm:text-sm font-black text-[#F7F4EF] font-mono mt-1">+212 612345678</p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.07] hover:border-[#D4A64A]/30 transition-all duration-300 shadow-xs flex items-center gap-3.5 cursor-pointer select-none"
                onClick={() => window.open('mailto:samiranaturale@gmail.com')}
              >
                <div className="w-10 h-10 rounded-full bg-[#D4A64A]/10 text-[#D4A64A] flex items-center justify-center shrink-0 border border-[#D4A64A]/20 transition-transform duration-300 group-hover:rotate-12">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-[#D4A64A]/85 uppercase tracking-widest leading-none">{isRtl ? 'البريد الإلكتروني' : 'E-mail Support'}</p>
                  <p className="text-xs font-black text-[#F7F4EF] mt-1 truncate break-all">samiranaturale@gmail.com</p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.07] hover:border-[#D4A64A]/30 transition-all duration-300 shadow-xs flex items-center gap-3.5 cursor-default select-none"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4A64A]/10 text-[#D4A64A] flex items-center justify-center shrink-0 border border-[#D4A64A]/20 transition-transform duration-300 group-hover:rotate-12">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#D4A64A]/85 uppercase tracking-widest leading-none">{isRtl ? 'الشحن والتوصيل' : 'Livraison'}</p>
                  <p className="text-xs font-black text-[#F7F4EF] mt-1 leading-tight">
                    {isRtl ? 'شحن سريع ومجاني للمغرب كجزء من ريادتنا' : 'Maroc - Dispatch express'}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Column 2: Quick Links (Center on desktop, Second on mobile) */}
          <div className="lg:col-span-3 order-2 lg:order-2 space-y-6 flex flex-col" style={{ alignItems: isRtl ? 'flex-end' : 'flex-start', textAlign: isRtl ? 'right' : 'left' }}>
            <h5 className="text-[#D4A64A] font-black text-xs sm:text-sm tracking-widest uppercase relative pb-2 select-none">
              {isRtl ? 'روابط سريعة' : 'Navigation'}
              <span className="absolute bottom-0 w-10 h-[2px] bg-[#D4A64A]/60" style={{ [isRtl ? 'right' : 'left']: 0 }}></span>
            </h5>
            <ul className="space-y-4 text-xs text-[#F7F4EF]/80 font-sans w-full">
              {[
                { href: "#hero_section", label: isRtl ? 'الرئيسية' : 'Accueil' },
                { href: "#benefits-section", label: copy.benefitsHeading },
                { href: "#how-to-use", label: copy.howToUseTitle },
                { href: "#about-us", label: t.aboutTitle }
              ].map((link, idx) => (
                <li key={idx} className="w-fit">
                  <a
                    href={link.href}
                    className="group relative inline-flex items-center gap-1 hover:text-[#D4A64A] transition-colors duration-300 py-1 font-bold tracking-wide"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A64A] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li className="w-fit">
                <button
                  onClick={() => handleNavigateView('packs')}
                  className="group relative inline-flex items-center gap-1 hover:text-[#D4A64A] transition-colors duration-300 py-1 font-bold tracking-wide text-xs text-[#F7F4EF]/80 cursor-pointer text-left"
                >
                  <span>{isRtl ? 'باقات العافية الفاخرة' : lang === 'fr' ? 'Packs Bien-être' : 'Wellness Packs'}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A64A] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand Area (Right on desktop, First on mobile) */}
          <div className="lg:col-span-4 order-1 lg:order-3 space-y-6 flex flex-col" style={{ alignItems: isRtl ? 'flex-end' : 'flex-start', textAlign: isRtl ? 'right' : 'left' }}>
            <div className="flex items-center gap-4">
              <motion.img
                src={logoImg}
                alt="Samira Naturale Logo"
                className="w-16 h-16 rounded-2xl border border-[#D4A64A]/30 bg-white p-0.5 object-contain shadow-md cursor-pointer"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <h4 className="text-2xl font-black text-[#D4A64A] tracking-tight uppercase font-sans">
                  Samira Naturale
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-[#F7F4EF]/60 font-mono mt-0.5">
                  {isRtl ? 'العناية بالذات الطبيعية والوقائية' : 'Soin Holistique Premium'}
                </p>
              </div>
            </div>
            
            <p className="text-xs text-[#F7F4EF]/80 leading-relaxed font-sans max-w-sm">
              {isRtl
                ? 'متجر مخصص لتقديم أغذية ومكملات العناية العضوية والتجميلية المرتكزة على منتجات شركة DXN الرائدة عالمياً. نوفر منتجات مرخصة وصحية ومتابعة مستمرة لكل عميل.'
                : 'Boutique dédiée aux solutions de santé et d\'hygiène naturelle DXN. Nous offrons des produits biologiques certifiés de haute qualité avec un conseil et un suivi sur-mesure.'}
            </p>

            {/* Badge: 100% Produits Naturels */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#D4A64A]/10 border border-[#D4A64A]/30 text-[#D4A64A] text-xs font-black uppercase tracking-wider select-none">
              <Leaf className="w-3.5 h-3.5 animate-pulse text-[#D4A64A]" />
              <span>{isRtl ? 'منتجات طبيعية 100%' : '100% Produits Naturels'}</span>
            </div>

            {/* Social Media Icons with micro-interactions */}
            <div className="flex items-center gap-3.5 pt-2">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/share/1B8mwBwGef/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: Instagram, url: 'https://www.instagram.com/samira_naturale?igsh=a3V5OHc1NXl2b2R3&utm_source=qr', label: 'Instagram' },
                { icon: Globe, url: '#', label: 'Website' }
              ].map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F7F4EF]/80 hover:text-[#D4A64A] hover:bg-white/10 hover:border-[#D4A64A]/40 transition-colors duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComp className="w-4.5 h-4.5 transition-transform duration-300 hover:rotate-12" />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright area with premium layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center text-[11px] text-[#F7F4EF]/40 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 font-mono">
          <p>© {new Date().getFullYear()} Samira Naturale. {isRtl ? 'جميع الحقوق محفوظة' : 'Tous droits réservés'}.</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] animate-pulse"></span>
            <p>
              {isRtl ? 'مطور بكل ❤️ من طرف ' : 'Développé avec ❤️ par '}
              <a
                href="https://www.instagram.com/hassanmadani85?igsh=MTRpc2RuMWNhZXc1Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A64A] underline decoration-dotted transition-colors font-extrabold text-[#F7F4EF]"
              >
                El Hassan El Madani
              </a>
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Floating Interactive WhatsApp helper widget with advanced pulsing ripple effect */}
      <div className="fixed right-6 bottom-6 z-[9999] group transition-all duration-300">
        <motion.button
          onClick={handleGeneralInquiry}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotate: 6 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_12px_30px_rgba(37,211,102,0.45)] hover:bg-[#20ba5a] cursor-pointer"
          id="btn_floating_whatsapp_assistance"
          aria-label="WhatsApp Assistance"
        >
          {/* Ambient Glow Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping" style={{ animationDuration: '3s' }}></span>
          
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A64A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4A64A] border-2 border-white"></span>
          </span>
          <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.button>
      </div>

    </div>
  );
}
