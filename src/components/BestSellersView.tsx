import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, ShoppingBag, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { productsData } from '../translations';

interface BestSellersViewProps {
  lang: 'ar' | 'fr' | 'en';
  isRtl: boolean;
  addToCart: (productId: string) => void;
  isDark: boolean;
  setActiveView: (view: any) => void;
}

const bestSellerList = [
  { id: 'spirulina', dataKey: 'spirulina', price: 190, rating: 5.0, reviewsCount: 142, badgeAr: "الأكثر مبيعاً 🏆", badgeFr: "Bestseller N°1", view: 'spirulina' as const, highlightTextAr: "الغذاء السوبر الأقوى لمحاربة فقر الدم ونقص الحديد وتعزيز النشاط.", highlightTextFr: "Le superaliment ultime pour combler les carences et purifier le métabolisme." },
  { id: 'coffee', dataKey: 'coffee', price: 130, rating: 4.9, reviewsCount: 194, badgeAr: "شعبية قياسية ⭐", badgeFr: "Favori Gourmet", view: 'coffee' as const, highlightTextAr: "القهوة السوداء الصحية المنشطة الخالية تماماً من السكر والحموضة.", highlightTextFr: "Le café noir sain d'excellence, tonifiant digestif sans palpitations." },
  { id: 'toothpaste', dataKey: 'toothpaste', price: 85, rating: 4.8, reviewsCount: 115, badgeAr: "توصية الأطباء 🦷", badgeFr: "Dentaire Royal", view: 'toothpaste' as const, highlightTextAr: "معجون الأسنان العشبي الطبيعي الخالي تماماً من الفلورايد والكيماويات.", highlightTextFr: "Formule saine et naturelle sans fluor pour des gencives fortes et saines." },
  { id: 'gano-oil', dataKey: 'ganoOil', price: 120, rating: 4.9, reviewsCount: 88, badgeAr: "راحة فورية 🌿", badgeFr: "Soin Relaxant", view: 'gano-oil' as const, highlightTextAr: "زيت التدليك الطبي المهدئ لآلام المفاصل وتشنج العضلات.", highlightTextFr: "Huile sacrée au Reishi pour dénouer les tensions musculaires et articulaires." }
];

export default function BestSellersView({ lang, isRtl, addToCart, isDark, setActiveView }: BestSellersViewProps) {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    addToCart(id);
    setAddedIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  const t = {
    headingAr: "المنتجات الأكثر طلباً ومبيعاً",
    headingFr: "Nos Meilleurs Best-Sellers",
    headingEn: "Our Top Best Sellers",
    subAr: "اكتشف المنتجات الأكثر مبيعاً وثقةً لدى عملائنا في المغرب. حلول صحية مجربة وطبيعية 100% مستخلصة من فطر الريشي المعجزة.",
    subFr: "Découvrez notre sélection exclusive de produits d'excellence plébiscités par nos clients. Naturels, biologiques et hautement efficaces.",
    subEn: "Explore our top selling products highly trusted by our wellness community. 100% natural, tested, and organic solutions.",
    orderNowAr: "اشتري الآن (الدفع عند الاستلام)",
    orderNowFr: "Commander (Paiement à la Livraison)",
    orderNowEn: "Order Now (Cash on Delivery)",
    viewProductAr: "عرض صفحة المنتج",
    viewProductFr: "Découvrir le produit",
    viewProductEn: "View Product details",
    currencyAr: "درهم",
    currencyFr: "DH",
    currencyEn: "MAD"
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 select-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-[10px] font-black uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            {lang === 'ar' ? "توصيات ومختارات النخبة" : "RECOMMANDATIONS D'EXCELLENCE"}
          </span>
          
          <h2 className="text-3xl sm:text-4.5xl font-black text-[#1C352D] dark:text-white mt-4 font-sans tracking-tight">
            {lang === 'ar' ? t.headingAr : lang === 'fr' ? t.headingFr : t.headingEn}
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            {lang === 'ar' ? t.subAr : lang === 'fr' ? t.subFr : t.subEn}
          </p>
        </div>

        {/* List of best sellers */}
        <div className="space-y-12">
          {bestSellerList.map((prod, idx) => {
            const translation = (productsData as any)[prod.dataKey]?.[lang] || (productsData as any)[prod.dataKey]?.['en'];
            const price = (productsData as any)[prod.dataKey]?.price || prod.price;
            const img = (productsData as any)[prod.dataKey]?.image || '';
            const badge = lang === 'ar' ? prod.badgeAr : prod.badgeFr;
            const highlightText = lang === 'ar' ? prod.highlightTextAr : prod.highlightTextFr;

            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white dark:bg-slate-800 rounded-3xl border border-emerald-100/40 dark:border-slate-700/50 shadow-xl overflow-hidden p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Product Image and badges */}
                <div className="w-full lg:w-1/2 relative bg-[#FAF6F0] dark:bg-slate-700/30 rounded-2xl p-8 aspect-square flex items-center justify-center select-none overflow-hidden group">
                  <span className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} z-10 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase text-[#1C352D] bg-white border border-amber-300 shadow-md`}>
                    {badge}
                  </span>
                  
                  <img
                    src={img}
                    alt={translation?.name}
                    className="w-full h-full max-h-72 object-contain transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info & Description */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between select-none">
                  <div className="space-y-5">
                    
                    {/* Trust indicators */}
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-[#1C352D] dark:text-amber-400 font-mono mt-0.5">
                        {prod.rating.toFixed(1)} / 5.0
                      </span>
                      <span className="text-slate-300 dark:text-slate-600">|</span>
                      <span className="text-xs text-slate-400 font-bold">
                        {prod.reviewsCount} {lang === 'ar' ? 'تقييم زبناء حقيقي' : 'avis vérifiés'}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3.5xl font-black text-[#1C352D] dark:text-white leading-tight">
                      {translation?.name}
                    </h3>

                    {/* Highlight Box */}
                    <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border-l-4 border-[#C5A560] text-xs sm:text-sm font-bold text-[#1C352D] dark:text-emerald-400">
                      {highlightText}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {translation?.desc}
                    </p>

                    {/* Benefits bullet points */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {translation?.benefits?.slice(0, 4).map((benefit: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Pricing and checkout buttons */}
                  <div className="pt-8 mt-8 border-t border-emerald-50/50 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                      <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">{lang === 'ar' ? 'السعر الحصري' : 'Prix exclusif'}</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-3xl font-black text-[#1C352D] dark:text-white font-mono">{price}</span>
                        <span className="text-xs font-black text-[#C5A560] uppercase">{lang === 'ar' ? t.currencyAr : lang === 'fr' ? t.currencyFr : t.currencyEn}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Read details */}
                      <button
                        onClick={() => setActiveView(prod.view)}
                        className="px-5 py-3 rounded-xl bg-slate-50 border border-emerald-100/60 text-[#1C352D] hover:bg-emerald-50 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors duration-200 cursor-pointer"
                      >
                        {lang === 'ar' ? (
                          <>
                            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                            {t.viewProductAr}
                          </>
                        ) : (
                          <>
                            {t.viewProductFr}
                            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                          </>
                        )}
                      </button>

                      {/* Add to cart */}
                      <button
                        onClick={() => handleAddToCart(prod.id)}
                        className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                          addedIds[prod.id]
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'bg-[#1C352D] text-white hover:bg-[#25443B] dark:bg-[#C5A560] dark:text-slate-900 dark:hover:bg-[#d6b772] shadow-md shadow-emerald-950/10'
                        }`}
                      >
                        {addedIds[prod.id] ? (
                          <>
                            <Check className="w-4 h-4" />
                            {lang === 'ar' ? 'تمت الإضافة ✓' : 'Ajouté au panier ✓'}
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            {lang === 'ar' ? 'أضف للسلة' : 'Ajouter au panier'}
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
