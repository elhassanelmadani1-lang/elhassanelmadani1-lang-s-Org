import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Eye, Star, Check, Filter, Search, X } from 'lucide-react';
import { productsData } from '../translations';
import ProductCard from './ProductCard';
import { allProducts } from '../data/allProducts';

interface ShopViewProps {
  lang: 'ar' | 'fr' | 'en';
  isRtl: boolean;
  addToCart: (productId: string) => void;
  isDark: boolean;
  setActiveView: (view: any) => void;
  wishlist?: string[];
  toggleWishlist?: (id: string) => void;
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
  onSelectPack?: (packId: string) => void;
}

const shopProducts = [
  // Row 1: The Ultimate Best-Sellers (Group of 3)
  { id: 'spirulina', category: 'supplements', dataKey: 'spirulina', price: 190, rating: 5.0, reviewsCount: 142, badgeAr: "السوبر فود الأقوى", badgeFr: "Bestseller ✦", view: 'spirulina' as const },
  { id: 'toothpaste', category: 'care', dataKey: 'toothpaste', price: 85, rating: 4.8, reviewsCount: 115, badgeAr: "روتين العناية الأساسي", badgeFr: "Premium Soin", view: 'toothpaste' as const },
  { id: 'coffee', category: 'coffee', dataKey: 'coffee', price: 130, rating: 4.9, reviewsCount: 194, badgeAr: "نشاط وطاقة مستدامة", badgeFr: "Gourmet Tonique", view: 'coffee' as const },

  // Row 2: Hot Drinks / Chocolate & Creamy (Group of 3)
  { id: 'coffee3in1', category: 'coffee', dataKey: 'coffee3in1', price: 140, rating: 4.9, reviewsCount: 106, badgeAr: "كريمي صحي جديد", badgeFr: "Nouveau Onctueux", view: 'coffee3in1' as const },
  { id: 'cocozhi', category: 'coffee', dataKey: 'cocozhi', price: 155, rating: 4.9, reviewsCount: 112, badgeAr: "شوكولاتة الطاقة والتركيز", badgeFr: "Cacao Vitalité", view: 'cocozhi' as const },
  { id: 'limonzhi', category: 'drinks', dataKey: 'limonzhi', price: 140, rating: 4.8, reviewsCount: 74, badgeAr: "انتعاش وحيوية طبيعية", badgeFr: "Fraîcheur & Tonus", view: 'limonzhi' as const },

  // Row 3: Daily Personal Care (Group of 3)
  { id: 'soap', category: 'care', dataKey: 'soap', price: 75, rating: 4.8, reviewsCount: 82, badgeAr: "تطهير وترطيب عميق", badgeFr: "Douceur Reishi", view: 'soap' as const },
  { id: 'shampoo', category: 'care', dataKey: 'shampoo', price: 120, rating: 4.7, reviewsCount: 92, badgeAr: "عناية فائقة بالشعر", badgeFr: "Soin Capillaire Royal", view: 'shampoo' as const },
  { id: 'gano-oil', category: 'care', dataKey: 'ganoOil', price: 120, rating: 4.9, reviewsCount: 88, badgeAr: "استرخاء طبيعي فاخر", badgeFr: "Détente Royale", view: 'gano-oil' as const },

  // Row 4: Elite Health Supplements (Group of 3)
  { id: 'reishilium', category: 'supplements', dataKey: 'reishilium', price: 401, rating: 4.9, reviewsCount: 68, badgeAr: "إكسير المناعة النقي", badgeFr: "Spore Sacrée", view: 'reishilium' as const },
  { id: 'reishi_gano', category: 'supplements', dataKey: 'reishi_gano', price: 706, rating: 4.9, reviewsCount: 112, badgeAr: "طرد السموم الشامل (RG)", badgeFr: "Détox Suprême RG", view: 'reishi_gano' as const },
  { id: 'ganocelium', category: 'supplements', dataKey: 'ganocelium', price: 230, rating: 4.8, reviewsCount: 95, badgeAr: "أكسجين الخلايا والترميم", badgeFr: "Mycélium Actif", view: 'ganocelium' as const },

  // Row 5: Vitality & Nutrition (Group of 3)
  { id: 'cordyceps', category: 'supplements', dataKey: 'cordyceps', price: 240, rating: 4.9, reviewsCount: 164, badgeAr: "أكسجين الخلايا والتحمل", badgeFr: "Énergie Cellulaire", view: 'cordyceps' as const },
  { id: 'potenzhi', category: 'supplements', dataKey: 'potenzhi', price: 434, rating: 4.9, reviewsCount: 154, badgeAr: "الحيوية والتحمل الفائق", badgeFr: "Stamina Suprême", view: 'potenzhi' as const },
  { id: 'spirulinaCereal', category: 'foods', dataKey: 'spirulinaCereal', price: 220, rating: 4.8, reviewsCount: 138, badgeAr: "فطور مغذٍ خارق", badgeFr: "Équilibre Vital", view: 'spirulina-cereal' as const },

  // Row 6: Premium Drinks & Enzymes (Group of 3)
  { id: 'cordypine', category: 'drinks', dataKey: 'cordypine', price: 340, rating: 4.9, reviewsCount: 78, badgeAr: "مزيج الأنزيمات والكورديسبس", badgeFr: "Élixir Enzymatique", view: 'cordypine' as const },
  { id: 'roselle', category: 'drinks', dataKey: 'roselle', price: 140, rating: 4.8, reviewsCount: 52, badgeAr: "إكسير الفيتامينات والجمال", badgeFr: "Roselle Éclat", view: 'roselle' as const },
  { id: 'moricinia', category: 'drinks', dataKey: 'moricinia', price: 300, rating: 4.9, reviewsCount: 115, badgeAr: "ترميم القولون والمناعة", badgeFr: "Enzymes Élite", view: 'moricinia' as const },

  // Row 7: Aloe Vera Skin Series (Group of 3)
  { id: 'aloeScrub', category: 'care', dataKey: 'aloeScrub', price: 169, rating: 4.9, reviewsCount: 95, badgeAr: "تقشير وتجديد بالصبار", badgeFr: "Éclat Aloe Vera", view: 'aloe-scrub' as any },
  { id: 'aloeLotion', category: 'care', dataKey: 'aloeLotion', price: 156, rating: 4.8, reviewsCount: 110, badgeAr: "ترطيب ونعومة فائقة", badgeFr: "Douceur Soyeuse", view: 'aloe-lotion' as any },
  { id: 'aloeGel', category: 'care', dataKey: 'aloeGel', price: 156, rating: 4.8, reviewsCount: 85, badgeAr: "منظف لطيف ومنعش", badgeFr: "Pureté Aloe Vera", view: 'aloe-gel' as any },

  // Row 8: Aromatic Body Cosmetics (Group of 3)
  { id: 'aromaticShowerGel', category: 'cosmetics', dataKey: 'aromaticShowerGel', price: 175, rating: 4.9, reviewsCount: 75, badgeAr: "شاور جل معطر فاخر", badgeFr: "Douche Aromatique", view: 'aromatic-shower-gel' as any },
  { id: 'aromaticBodyLotion', category: 'cosmetics', dataKey: 'aromaticBodyLotion', price: 213, rating: 4.8, reviewsCount: 64, badgeAr: "لوشن معطر فاخر للجسم", badgeFr: "Satin Aromatique", view: 'aromatic-body-lotion' as any },
  { id: 'handCream', category: 'cosmetics', dataKey: 'handCream', price: 183, rating: 4.9, reviewsCount: 80, badgeAr: "نعومة فائقة لليدين", badgeFr: "Douceur des Mains", view: 'hand-cream' as any },

  // Row 9: Face Cosmetics Essentials (Group of 3)
  { id: 'lipBalm', category: 'cosmetics', dataKey: 'lipBalm', price: 91, rating: 4.8, reviewsCount: 110, badgeAr: "ترطيب ولمعان طبيعي", badgeFr: "Éclat des Lèvres", view: 'lip-balm' as any },
  { id: 'faceMask', category: 'cosmetics', dataKey: 'faceMask', price: 205, rating: 4.9, reviewsCount: 92, badgeAr: "تغذية ونضارة فائقة", badgeFr: "Masque Hydratant", view: 'face-mask' as any },
  { id: 'foamingCleanser', category: 'cosmetics', dataKey: 'foamingCleanser', price: 233, rating: 4.8, reviewsCount: 39, badgeAr: "رغوة منظفة منشطة", badgeFr: "Mousse Nettoyante", view: 'foaming-cleanser' as any },

  // Row 10: Face Cosmetics Advanced Anti-Aging (Group of 3)
  { id: 'faceSerum', category: 'cosmetics', dataKey: 'faceSerum', price: 513, rating: 4.9, reviewsCount: 54, badgeAr: "شد ونضارة عميقة", badgeFr: "Sérum Tenseur ✦", view: 'face-serum' as any },
  { id: 'eyeCream', category: 'cosmetics', dataKey: 'eyeCream', price: 504, rating: 5.0, reviewsCount: 48, badgeAr: "شد فوري لمحيط العين", badgeFr: "Lifting Regard ✦", view: 'eye-cream' as any },
  { id: 'faceCream', category: 'cosmetics', dataKey: 'faceCream', price: 560, rating: 5.0, reviewsCount: 62, badgeAr: "نحت وامتلاء البشرة", badgeFr: "Crème Reconstructrice", view: 'face-cream' as any },

  // Row 11: Premium Oils & Toner (Group of 3)
  { id: 'nightOil', category: 'cosmetics', dataKey: 'nightOil', price: 327, rating: 4.9, reviewsCount: 41, badgeAr: "ترميم وإصلاح ليلي مكثف", badgeFr: "Élixir de Nuit", view: 'night-oil' as any },
  { id: 'dryOil', category: 'cosmetics', dataKey: 'dryOil', price: 375, rating: 5.0, reviewsCount: 76, badgeAr: "لمعان حريري للشعر والجسم", badgeFr: "Huile Sèche Sublime", view: 'dry-oil' as any },
  { id: 'tonicWater', category: 'cosmetics', dataKey: 'tonicWater', price: 205, rating: 4.9, reviewsCount: 43, badgeAr: "تونر منشط ومنقي", badgeFr: "Eau Tonique pure", view: 'tonic-water' as any },

  // Row 12: Skin Firming, Hydrating & UV Defense (Group of 3)
  { id: 'tighteningSerum', category: 'cosmetics', dataKey: 'tighteningSerum', price: 327, rating: 5.0, reviewsCount: 51, badgeAr: "شد التجاعيد الفوري", badgeFr: "Sérum Tenseur Minute", view: 'tightening-serum' as any },
  { id: 'hydratingFaceCream', category: 'cosmetics', dataKey: 'hydratingFaceCream', price: 289, rating: 4.9, reviewsCount: 57, badgeAr: "ترطيب ومقاومة الجفاف", badgeFr: "Crème Hydratation 24h", view: 'hydrating-face-cream' as any },
  { id: 'sunscreenSpf50', category: 'cosmetics', dataKey: 'sunscreenSpf50', price: 381, rating: 5.0, reviewsCount: 65, badgeAr: "حماية فائقة من الشمس", badgeFr: "Écran Invisible SPF 50", view: 'sunscreen-spf50' as any },

  // Row 13: Skin Protection & Golden Sun Care (Group of 3)
  { id: 'sunscreenSpf30', category: 'cosmetics', dataKey: 'sunscreenSpf30', price: 318, rating: 4.9, reviewsCount: 52, badgeAr: "مستحلب حماية مرطب", badgeFr: "Émulsion Protectrice SPF30", view: 'sunscreen-spf30' as any },
  { id: 'coolingAfterSun', category: 'cosmetics', dataKey: 'coolingAfterSun', price: 183, rating: 4.9, reviewsCount: 38, badgeAr: "تهدئة وانتعاش بعد الشمس", badgeFr: "Après-Soleil Fraîcheur", view: 'cooling-after-sun' as any },
  { id: 'tanningOil', category: 'cosmetics', dataKey: 'tanningOil', price: 261, rating: 4.8, reviewsCount: 45, badgeAr: "لون برونزي طبيعي ساحر", badgeFr: "Satin Hâle Doré", view: 'tanning-oil' as any }
];

// Dynamically push the 29 new products into shopProducts
allProducts.forEach(p => {
  const key = p.id;
  const excludeIds = [
    'coffee', 'coffee3in1', 'spirulina',
    'gano-oil', 'gano_oil', 'cocozhi', 'toothpaste', 'shampoo', 'soap', 'cordyceps',
    'limonzhi', 'reishilium', 'reishi_gano', 'cordypine',
    'ganocelium', 'roselle', 'spirulina-cereal', 'spirulinaCereal',
    'aloe-scrub', 'aloe-lotion', 'aloe-gel', 'aloeScrub', 'aloeLotion', 'aloeGel',
    'potenzhi', 'potenzhi-30', 'potenzhi-90', 'potenzhi_30', 'potenzhi_90',
    'moricinia', 'moricinia-285', 'moricinia-700', 'moricinia_285', 'moricinia_700',
    'pack-energy', 'pack-immunity', 'pack-wellness', 'pack-golden-five', 'pack-golden-triangle'
  ];
  if (excludeIds.includes(key)) {
    return;
  }

  const exists = shopProducts.some(sp => sp.id === key || sp.dataKey === key);
  if (!exists) {
    let category = 'supplements';
    if (['coffee', 'coffee3in1', 'lions-mane-coffee', 'non-dairy-creamer'].includes(key)) {
      category = 'coffee';
    } else if (['spirulina', 'ganocelium', 'cordyceps', 'reishilium', 'reishi_gano', 'potenzhi-30', 'potenzhi-90', 'black-cumin-plus', 'poria-s', 'lions-mane', 'lions_mane'].includes(key)) {
      category = 'supplements';
    } else if (['spirulinaCereal', 'multipurpose-seasoning', 'vinaigrette-honey', 'spirudle', 'spirudle-tom-yam', 'ganoodle-tom-yam', 'spirudle-curry', 'himalayan-salt'].includes(key)) {
      category = 'foods';
    } else if (['morinzhi', 'morinzhi-juice', 'morinzhi_juice', 'cordypine', 'roselle', 'morinzhiJuice', 'limonzhi', 'zhitea', 'oozhi-tea', 'aloe-vita', 'lions-mane-oocha', 'apple-enzyme', 'oocha-ganoderma', 'moricinia-700', 'moricinia-285', 'oolong-tea', 'neph-v'].includes(key)) {
      category = 'drinks';
    } else if (['gano-oil', 'toothpaste', 'shampoo', 'soap', 'ganozhi-body-foam', 'chubby-baby-oil', 'ganozhi-trans-soap', 'oocha-trans-soap', 'zhi-mint-plus', 'zhimeko', 'vco-l', 'aloeScrub', 'aloeLotion', 'aloeGel'].includes(key)) {
      category = 'care';
    } else if (p.category === 'skincare' || p.category === 'personal' || p.category === 'oils') {
      category = 'care';
    } else if (p.category === 'coffee') {
      category = 'coffee';
    } else {
      category = 'cosmetics';
    }

    shopProducts.push({
      id: (key === 'morinzhi' || key === 'morinzhi_juice' || key === 'morinzhi-juice') ? 'morinzhi-juice' : key,
      category: category as any,
      dataKey: (key === 'morinzhi' || key === 'morinzhi_juice' || key === 'morinzhi-juice') ? 'morinzhiJuice' : key,
      price: p.price,
      rating: p.rating || 4.8,
      reviewsCount: p.reviewsCount || 40,
      badgeAr: p.isBestSeller ? "الأكثر مبيعاً 🏆" : undefined,
      badgeFr: p.isBestSeller ? "Bestseller ✦" : undefined,
      view: ((key === 'morinzhi' || key === 'morinzhi_juice' || key === 'morinzhi-juice') ? 'morinzhi-juice' : key) as any
    });
  }
});


export default function ShopView({
  lang,
  isRtl,
  addToCart,
  isDark,
  setActiveView,
  wishlist,
  toggleWishlist,
  activeCategory,
  setActiveCategory,
  onSelectPack
}: ShopViewProps) {
  const [localActiveCategory, setLocalActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [localWishlist, setLocalWishlist] = useState<string[]>([]);

  const currentActiveCategory = activeCategory !== undefined ? activeCategory : localActiveCategory;
  const updateActiveCategory = setActiveCategory !== undefined ? setActiveCategory : setLocalActiveCategory;

  const activeWishlist = wishlist || localWishlist;
  const activeToggleWishlist = toggleWishlist || ((id: string) => {
    setLocalWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  });

  const categories = [
    { id: 'all', labelAr: "الكل", labelFr: "Tous les Produits", labelEn: "All Products" },
    { id: 'coffee', labelAr: "القهوة الصحية", labelFr: "Café Santé", labelEn: "Healthy Coffee" },
    { id: 'supplements', labelAr: "المكملات الغذائية", labelFr: "Compléments Alimentaires", labelEn: "Food Supplements" },
    { id: 'foods', labelAr: "الأغذية الصحية", labelFr: "Aliments Sains", labelEn: "Healthy Foods" },
    { id: 'drinks', labelAr: "المشروبات الصحية", labelFr: "Boissons Saines", labelEn: "Healthy Drinks" },
    { id: 'care', labelAr: "العناية الشخصية", labelFr: "Soins Personnels", labelEn: "Personal Care" },
    { id: 'cosmetics', labelAr: "مستحضرات تجميل كالو", labelFr: "Kallow Cosmétique", labelEn: "Kallow Cosmetics" }
  ];

  const handleAddToCart = (id: string) => {
    addToCart(id);
    setAddedIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  // Dynamic search and filter logic
  const filteredProducts = shopProducts.filter(p => {
    // 1. Filter by category
    if (currentActiveCategory !== 'all' && p.category !== currentActiveCategory) {
      return false;
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const trans = (productsData as any)[p.dataKey];
      
      const nameAr = trans?.ar?.name?.toLowerCase() || '';
      const nameFr = trans?.fr?.name?.toLowerCase() || '';
      const nameEn = trans?.en?.name?.toLowerCase() || '';
      
      const descAr = trans?.ar?.desc?.toLowerCase() || '';
      const descFr = trans?.fr?.desc?.toLowerCase() || '';
      const descEn = trans?.en?.desc?.toLowerCase() || '';

      const matchesName = nameAr.includes(query) || nameFr.includes(query) || nameEn.includes(query);
      const matchesDesc = descAr.includes(query) || descFr.includes(query) || descEn.includes(query);

      return matchesName || matchesDesc;
    }

    return true;
  });

  const t = {
    titleAr: "متجر سميرة ناتورال الفاخر",
    titleFr: "Boutique Samira Naturale",
    titleEn: "Samira Naturale Boutique",
    subAr: "منتجات طبيعية صحية وعضوية 100% مستوردة ومصادق عليها لتعزيز مناعتك وحيويتك اليومية.",
    subFr: "Produits 100% naturels et biologiques de qualité premium, certifiés pour votre bien-être quotidien.",
    subEn: "100% natural and certified organic products, curated to enhance your daily health and immunity.",
    viewDetailsAr: "عرض التفاصيل",
    viewDetailsFr: "Voir Détails",
    viewDetailsEn: "View Details",
    addToCartAr: "أضف للسلة",
    addToCartFr: "Ajouter au Panier",
    addToCartEn: "Add to Cart",
    addedAr: "تمت الإضافة ✓",
    addedFr: "Ajouté ✓",
    addedEn: "Added ✓",
    currencyAr: "درهم",
    currencyFr: "DH",
    currencyEn: "MAD",
    searchPlaceholderAr: "ابحث عن منتجك المفضل... (مثال: سبيرولينا، قهوة، شامبو...)",
    searchPlaceholderFr: "Rechercher votre produit favori... (ex: café, spiruline...)",
    searchPlaceholderEn: "Search your favorite product...",
    noResultsAr: "عذراً، لم نجد أي منتج يطابق بحثك. جرب كلمة أخرى!",
    noResultsFr: "Aucun produit ne correspond à votre recherche. Essayez un autre mot-clé !",
    noResultsEn: "No products matched your search. Try another term!",
    resultsCountAr: "نتيجة",
    resultsCountFr: "produit(s) trouvé(s)",
    resultsCountEn: "product(s) found",
    clearSearchAr: "مسح البحث",
    clearSearchFr: "Effacer",
    clearSearchEn: "Clear"
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] dark:bg-slate-900 py-4 md:py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 select-none">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#1C352D] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-900/60 mb-4"
          >
            <Star className="w-3.5 h-3.5 text-[#C5A560] fill-[#C5A560]" />
            {lang === 'ar' ? "صحة وعافية مستدامة" : "SANTÉ & BIEN-ÊTRE NATUREL"}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#1C352D] dark:text-white mb-4 font-sans tracking-tight"
          >
            {lang === 'ar' ? t.titleAr : lang === 'fr' ? t.titleFr : t.titleEn}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed"
          >
            {lang === 'ar' ? t.subAr : lang === 'fr' ? t.subFr : t.subEn}
          </motion.p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative flex items-center bg-white dark:bg-slate-800 rounded-2xl border border-emerald-100/80 dark:border-slate-700 shadow-lg px-4 py-1.5"
          >
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ar' ? t.searchPlaceholderAr : lang === 'fr' ? t.searchPlaceholderFr : t.searchPlaceholderEn}
              className={`w-full bg-transparent border-none outline-none focus:ring-0 text-slate-800 dark:text-white text-xs sm:text-sm font-bold px-3 py-2 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>
          {searchQuery && (
            <div className={`mt-2.5 text-xs text-slate-500 dark:text-slate-400 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
              <span>{filteredProducts.length} </span>
              <span>{lang === 'ar' ? t.resultsCountAr : lang === 'fr' ? t.resultsCountFr : t.resultsCountEn}</span>
            </div>
          )}
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => updateActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2.5 border ${
                currentActiveCategory === cat.id
                  ? 'bg-[#C8A34D]/15 border-[#C8A34D] text-[#C8A34D] shadow-[0_4px_15px_-4px_rgba(200,163,77,0.3)] dark:bg-[#C8A34D]/25 dark:text-[#C8A34D] dark:border-[#C8A34D]'
                  : 'bg-white hover:bg-[#C8A34D]/5 text-slate-600 border-neutral-200 hover:text-[#C8A34D] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-750'
              }`}
            >
              <Filter className="w-3.5 h-3.5 opacity-60 shrink-0" />
              <span>
                {lang === 'ar' ? cat.labelAr : lang === 'fr' ? cat.labelFr : cat.labelEn}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Product Grid / Empty State */}
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-20 bg-white dark:bg-slate-800 border border-emerald-100/40 dark:border-slate-700/50 rounded-3xl p-8 max-w-lg mx-auto shadow-xl"
            >
              <div className="w-16 h-16 bg-[#FAF6F0] dark:bg-slate-750 text-[#C5A560] rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-100 dark:border-amber-900/40">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#1C352D] dark:text-white mb-2">
                {lang === 'ar' ? t.noResultsAr : lang === 'fr' ? t.noResultsFr : t.noResultsEn}
              </h3>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-5 py-2 bg-[#1C352D] hover:bg-[#25443B] dark:bg-[#C5A560] dark:text-slate-900 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  {lang === 'ar' ? t.clearSearchAr : lang === 'fr' ? t.clearSearchFr : t.clearSearchEn}
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div 
              layout
              key="product-grid"
              className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8"
            >
              {filteredProducts.map((prod) => {
                const translation = (productsData as any)[prod.dataKey]?.[lang] || (productsData as any)[prod.dataKey]?.['en'];
                const price = (productsData as any)[prod.dataKey]?.price || prod.price;
                const img = (productsData as any)[prod.dataKey]?.image || '';
                const badge = lang === 'ar' ? prod.badgeAr : prod.badgeFr;

                return (
                  <ProductCard
                    key={prod.id}
                    prod={prod}
                    lang={lang}
                    isRtl={isRtl}
                    translation={translation}
                    price={price}
                    img={img}
                    badge={badge}
                    isAdded={!!addedIds[prod.id]}
                    onAddToCart={() => handleAddToCart(prod.id)}
                    onViewDetails={() => {
                      setActiveView(prod.view);
                      window.scrollTo(0, 0);
                    }}
                    isWishlisted={activeWishlist.includes(prod.id)}
                    onToggleWishlist={() => activeToggleWishlist(prod.id)}
                    onSelectPack={onSelectPack}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
