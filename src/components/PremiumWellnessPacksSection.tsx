import { motion } from 'motion/react';
import { Sparkles, Check, ShoppingBag, Eye, Tag, Heart, Shield, Zap, Coffee, Gift, Sun } from 'lucide-react';
import { wellnessPacks, WellnessPack } from '../data/wellnessPacksData';

interface PremiumWellnessPacksSectionProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  setActiveView: (view: any) => void;
  setSelectedPackId: (id: string) => void;
  addToCart: (productId: string) => void;
}

export default function PremiumWellnessPacksSection({
  lang: inputLang,
  isRtl,
  setActiveView,
  setSelectedPackId,
  addToCart
}: PremiumWellnessPacksSectionProps) {
  const lang = (inputLang === 'es' ? 'en' : inputLang) as 'en' | 'fr' | 'ar';
  
  // Localized section titles
  const tTitle = {
    en: "Premium Wellness Packs",
    fr: "Packs de Bien-être Premium",
    ar: "باقات العافية الفاخرة",
    es: "Packs de Bienestar Premium"
  }[lang];

  const tSub = {
    en: "Discover carefully selected DXN wellness combinations designed for families, daily wellness, immunity and energy.",
    fr: "Découvrez des combinaisons de bien-être DXN soigneusement sélectionnées, conçues pour les familles, le bien-être quotidien, l'immunité et l'énergie.",
    ar: "اكتشف مجموعات عافية DXN العضوية المنسقة بعناية فائقة لتلائم احتياجات العائلة، المناعة، الطاقة والنشاط المتكامل.",
    es: "Descubra combinaciones de bienestar de DXN cuidadosamente seleccionadas y diseñadas para familias, bienestar diario, inmunidad y energía."
  }[lang];

  const tViewAll = {
    en: "Explore All Premium Packs",
    fr: "Découvrir tous les Packs Premium",
    ar: "تصفح جميع الباقات الفاخرة",
    es: "Explorar todos los Packs Premium"
  }[lang];

  const tViewDetails = {
    en: "View Details",
    fr: "Voir les détails",
    ar: "عرض التفاصيل",
    es: "Ver detalles"
  }[lang];

  const tOrderNow = {
    en: "Order Now",
    fr: "Commander",
    ar: "اطلب الآن",
    es: "Pedir ahora"
  }[lang];

  const tSave = {
    en: "Save",
    fr: "Économisez",
    ar: "توفير",
    es: "Ahorre"
  }[lang];

  const tIncludes = {
    en: "Products Included",
    fr: "Produits Inclus",
    ar: "المنتجات المشمولة في الباقة",
    es: "Productos incluidos"
  }[lang];

  const tCurrency = "DH";

  // Get Pack Specific Icon for decoration
  const getPackIcon = (id: string) => {
    switch(id) {
      case 'family-pack':
        return <Gift className="w-5 h-5 text-[#D4AF37]" />;
      case 'immunity-pack':
        return <Shield className="w-5 h-5 text-[#D4AF37]" />;
      case 'energy-pack':
        return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'coffee-lovers-pack':
        return <Coffee className="w-5 h-5 text-[#D4AF37]" />;
      case 'luxury-cosmetics-pack':
      case 'lifting-antiaging-pack':
      case 'supreme-lifting-elixir-pack':
      case 'aloe-vera-pack':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'sun-protection-tanning-pack':
        return <Sun className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Heart className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const handleViewPackDetails = (id: string) => {
    setSelectedPackId(id);
    setActiveView('pack-detail');
    window.scrollTo(0, 0);
  };

  return (
    <section id="premium_wellness_packs" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-b border-[#EADFC9]/40">
      
      {/* Luxury Botanical Decorations & Organic shapes */}
      <div className="absolute top-10 left-5 w-64 h-64 bg-emerald-800/3 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-5 w-72 h-72 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Botanical leaves mock outlines */}
      <div className="absolute -top-12 -right-16 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#1E3A34" strokeWidth="1.5">
          <path d="M10,90 Q50,50 90,10 M50,50 Q40,30 20,20 M50,50 Q60,70 80,80 M30,70 Q20,55 10,50 M70,30 Q80,45 90,50" />
        </svg>
      </div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 opacity-8 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#1E3A34" strokeWidth="1.5">
          <path d="M10,10 Q50,50 90,90 M50,50 Q30,40 20,20 M50,50 Q70,60 80,80 M30,30 Q20,45 10,50 M70,70 Q80,55 90,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EAF0EC] text-[#1E3A34] text-xs font-bold uppercase tracking-wider border border-emerald-200 shadow-xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            {lang === 'ar' ? 'تشكيلات النخبة الصحية الفاخرة' : 'SYNERGIE BIOLOGIQUE EXCLUSIVE'}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E3A34] tracking-tight leading-tight"
          >
            {tTitle}
          </motion.h2>
          
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-650 text-sm sm:text-base mt-4 leading-relaxed font-medium"
          >
            {tSub}
          </motion.p>
        </div>

        {/* Desktop: 3 cards grid, Tablet: 2 cards, Mobile: 1 card */}
        {/* Large spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {wellnessPacks.map((pack: WellnessPack, index: number) => {
            const savings = pack.originalPrice - pack.price;
            const savingsPercent = Math.round((savings / pack.originalPrice) * 100);

            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-[2.5rem] border border-[#EADFC9]/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
                style={{ direction: isRtl ? 'rtl' : 'ltr' }}
              >
                
                {/* Premium Golden Shimmer line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-600 via-[#D4AF37] to-emerald-600"></div>

                {/* Card Top Section (Badge & Imagery) */}
                <div className="p-8 pb-0 relative">
                  
                  {/* Badge & Savings Tag */}
                  <div className="flex justify-between items-center mb-5 gap-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100 shadow-2xs">
                      {getPackIcon(pack.id)}
                      {pack.badge[lang]}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#EADFC9]">
                      <Tag className="w-3 h-3" />
                      -{savingsPercent}%
                    </span>
                  </div>

                  {/* Large Pack Image with luxury floating & hover effects */}
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EADFC9]/25 flex items-center justify-center p-0 group-hover:bg-[#EAF0EC]/40 transition-colors duration-500 shadow-inner">
                    <motion.img
                      src={pack.image}
                      alt={pack.name[lang]}
                      className="w-full h-full object-cover filter drop-shadow-[0_12px_24px_rgba(30,58,52,0.15)] transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500"
                      style={{ transformOrigin: 'center' }}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Organic glow reflection in background */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/10 pointer-events-none"></div>
                  </div>

                  {/* Pack Header Information */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl font-extrabold text-[#1E3A34] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                      {pack.name[lang]}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">
                      {pack.desc[lang]}
                    </p>
                  </div>

                  {/* Products Included block */}
                  <div className="mt-5 pt-5 border-t border-[#FAF6F0] space-y-3">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-black flex items-center gap-1">
                      <span>✦</span> {tIncludes}
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {pack.products.map((p) => (
                        <div key={p.id} className="flex flex-col items-center bg-[#FAF7F2] hover:bg-[#EAF0EC] rounded-xl p-2 border border-[#EADFC9]/20 transition-all text-center">
                          <img 
                            src={p.image} 
                            alt={p.name[lang]} 
                            className="w-10 h-10 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)] mb-1"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-[9px] font-black text-[#1E3A34] truncate w-full px-0.5">
                            {p.name[lang]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits Bulletpoints */}
                  <div className="mt-5 space-y-2 pb-6">
                    {pack.benefits[lang].slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-650 leading-snug font-bold">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Bottom Pricing & Actions */}
                <div className="p-8 pt-0 border-t border-[#FAF6F0] bg-[#FAF7F2]/30 rounded-b-[2.5rem] mt-auto">
                  
                  {/* Pricing and savings details */}
                  <div className="flex justify-between items-end py-4">
                    <div className="space-y-1">
                      <span className="text-xs text-slate-400 line-through block font-medium">
                        {pack.originalPrice} {tCurrency}
                      </span>
                      <span className="text-2xl font-black text-[#1E3A34] tracking-tight block">
                        {pack.price} <span className="text-sm font-extrabold">{tCurrency}</span>
                      </span>
                    </div>
                    
                    <div className="bg-[#EAF0EC] border border-emerald-100 rounded-2xl px-3.5 py-1.5 text-right">
                      <span className="text-[9px] text-emerald-800 font-extrabold block uppercase tracking-wider leading-none">
                        {tSave}
                      </span>
                      <span className="text-sm font-black text-[#1E3A34]">
                        {savings} {tCurrency}
                      </span>
                    </div>
                  </div>

                  {/* Double Actions Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    
                    {/* View Details */}
                    <button
                      onClick={() => handleViewPackDetails(pack.id)}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-white hover:bg-slate-50 text-[#1E3A34] font-extrabold text-xs uppercase tracking-wider border border-emerald-150/40 rounded-xl shadow-xs transition-all duration-300 transform active:scale-97 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#D4AF37]" />
                      <span>{tViewDetails}</span>
                    </button>

                    {/* Order Now */}
                    <button
                      onClick={() => {
                        addToCart(pack.id);
                        setActiveView('checkout');
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-[#1E3A34] hover:bg-[#2A4D45] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md border border-[#D4AF37]/20 transition-all duration-300 transform active:scale-97 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                      <span>{tOrderNow}</span>
                    </button>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global CTA redirect to Packs view page */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              setActiveView('packs');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#FAF7F2] text-[#1E3A34] font-extrabold text-sm sm:text-base rounded-2xl shadow-md border-2 border-emerald-150/40 transition-all duration-300 transform active:scale-98 cursor-pointer"
          >
            <span>{tViewAll}</span>
            <span>{isRtl ? '←' : '→'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
