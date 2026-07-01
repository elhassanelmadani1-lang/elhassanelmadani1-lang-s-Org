import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Heart, Eye, ShoppingBag, Check, X, ShieldCheck, Sparkles } from 'lucide-react';

export interface ProductCardProps {
  key?: any;
  prod: any;
  lang: 'ar' | 'fr' | 'en';
  isRtl: boolean;
  translation: any;
  price: number;
  img: string;
  badge?: string;
  isAdded: boolean;
  onAddToCart: () => void;
  onViewDetails: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export default function ProductCard({
  prod,
  lang,
  isRtl,
  translation,
  price,
  img,
  badge,
  isAdded,
  onAddToCart,
  onViewDetails,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // 3D Parallax Tilt state variables for Apple-like cursor perspective
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth angle based on mouse distance from center (max 6 degrees)
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setTilt({ rotateX, rotateY, scale: 1.015 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  // Simulated premium discount for Aesop/Apple style luxury promotional look
  const oldPrice = Math.round(price * 1.25);
  const percentOff = 20;

  // Dynamically extract the first benefit or use an elegant default
  const shortBenefit = translation?.benefits?.[0] || (
    lang === 'ar' ? 'دعم كامل ومناعة متكاملة' : 
    lang === 'fr' ? 'Soutien immunitaire & vitalité naturelle' : 
    'Premium Wellness Support'
  );

  // Detect and beautify badge design dynamically
  const getBadgeDetails = (badgeText: string) => {
    const txt = badgeText.toLowerCase();
    if (txt.includes('best') || txt.includes('أفضل') || txt.includes('détox') || txt.includes('طرد')) {
      return {
        icon: '🔥',
        style: 'bg-rose-50/90 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-100 dark:border-rose-900/30'
      };
    }
    if (txt.includes('new') || txt.includes('جديد') || txt.includes('nouveau')) {
      return {
        icon: '✨',
        style: 'bg-indigo-50/90 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30'
      };
    }
    if (txt.includes('organic') || txt.includes('عضوي') || txt.includes('bio') || txt.includes('naturel')) {
      return {
        icon: '🌿',
        style: 'bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
      };
    }
    return {
      icon: '🏆',
      style: 'bg-amber-50/90 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30'
    };
  };

  const badgeDetails = badge ? getBadgeDetails(badge) : null;

  const t = {
    addToCart: lang === 'ar' ? 'أضف للسلة' : lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart',
    added: lang === 'ar' ? 'تمت الإضافة ✓' : lang === 'fr' ? 'Ajouté ✓' : 'Added ✓',
    quickView: lang === 'ar' ? 'نظرة سريعة' : lang === 'fr' ? 'Aperçu rapide' : 'Quick View',
    benefitsTitle: lang === 'ar' ? 'الفوائد والمميزات الرئيسية' : lang === 'fr' ? 'Bénéfices & Propriétés' : 'Key Benefits & Properties',
    guarantee: lang === 'ar' ? 'منتج أصلي معتمد 100%' : lang === 'fr' ? 'Certifié 100% Organique' : '100% Certified Organic',
    save: lang === 'ar' ? 'وفر' : lang === 'fr' ? 'Économisez' : 'Save',
    currency: lang === 'ar' ? 'درهم' : lang === 'fr' ? 'DH' : 'MAD',
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', damping: 28, stiffness: 170 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s',
          transformStyle: 'preserve-3d',
        }}
        className="group relative bg-white dark:bg-slate-900/90 border border-neutral-150/60 dark:border-slate-800/80 rounded-[32px] shadow-[0_4px_25px_-4px_rgba(0,0,0,0.02),0_12px_45px_-12px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_-15px_rgba(31,77,58,0.1)] dark:hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] hover:border-[#1F4D3A]/15 dark:hover:border-amber-500/15 hidden md:flex flex-col overflow-hidden w-full h-full"
        id={`product-card-${prod.id}`}
      >
        {/* Apple-like Card Header Media Container */}
        <div className="relative aspect-[1.05] w-full overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F3F1EC] dark:from-slate-950 dark:to-slate-900 p-2 flex items-center justify-center select-none shrink-0 border-b border-neutral-100/40 dark:border-slate-800/40">
          
          {/* Soft Organic Glow Background Aura */}
          <div className="absolute w-44 h-44 rounded-full bg-emerald-500/5 dark:bg-amber-400/5 blur-3xl group-hover:bg-emerald-500/10 dark:group-hover:bg-amber-400/10 transition-colors duration-500 pointer-events-none" />

          {/* Premium Refined Badges Top Left */}
          {badge && badgeDetails && (
            <div className={`absolute top-5 ${isRtl ? 'right-5' : 'left-5'} z-10 flex flex-col gap-1.5`}>
              <span className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-wide uppercase shadow-sm border flex items-center gap-1.5 backdrop-blur-md transition-all duration-300 group-hover:shadow-md ${badgeDetails.style}`}>
                <span className="shrink-0">{badgeDetails.icon}</span>
                <span className="font-extrabold">{badge}</span>
              </span>
            </div>
          )}

          {/* Glassmorphic Wishlist Heart Button Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist();
            }}
            className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} z-10 w-11 h-11 rounded-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border border-white/40 dark:border-slate-800/50 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:scale-110 active:scale-90 transition-all cursor-pointer text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 ${
              isWishlisted ? 'text-rose-500 fill-rose-500 dark:text-rose-400 dark:fill-rose-400 border-rose-200/40' : ''
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 transition-transform duration-300 ${isWishlisted ? 'scale-110' : 'group-hover:scale-115'}`} />
          </button>

          {/* Smooth-Drifting Interactive Floating Product Photo Inside a Premium Inner Frame */}
          <div 
            onClick={onViewDetails}
            className="w-full h-full p-1 flex items-center justify-center cursor-pointer relative z-2"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="w-full h-full rounded-[24px] border border-neutral-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/80 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01),0_8px_24px_-8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.01),0_12px_30px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center relative overflow-hidden group-hover:border-[#1F4D3A]/25 dark:group-hover:border-amber-500/25 transition-all duration-300"
            >
              <img
                src={img}
                alt={translation?.name}
                loading="lazy"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_20px_rgba(31,77,58,0.05)] dark:drop-shadow-[0_12px_20px_rgba(0,0,0,0.4)] transform group-hover:scale-[1.08] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Quick View Button Overlay */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="px-4.5 py-3 rounded-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-neutral-200/30 dark:border-slate-800/60 text-[#1F4D3A] dark:text-white font-black text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#1F4D3A] hover:text-white dark:hover:bg-amber-500 dark:hover:text-slate-950 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.quickView}</span>
            </button>
          </div>
        </div>

        {/* Card Content & Details Area */}
        <div className="p-6 sm:p-7.5 flex-1 flex flex-col justify-between select-none relative z-1 bg-white/50 dark:bg-transparent">
          <div>
            {/* Elegant Stars Review Row */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 font-mono mt-0.5">
                {prod.rating || '4.9'}
              </span>
              <span className="text-[11px] text-slate-400 font-medium font-mono">
                ({prod.reviewsCount})
              </span>
            </div>

            {/* Product Name (Bold, Elegant Typography & Clamped) */}
            <h3 
              onClick={onViewDetails}
              className="text-base sm:text-lg font-extrabold text-[#1F4D3A] dark:text-white hover:text-[#C9A227] dark:hover:text-amber-400 transition-colors duration-250 cursor-pointer leading-snug line-clamp-2 mb-1.5 min-h-[2.6rem] flex items-center font-sans tracking-tight"
            >
              {translation?.name}
            </h3>

            {/* Benefit-driven Muted Subtitle */}
            <p className="text-[10.5px] text-[#C9A227] dark:text-amber-400/90 font-black uppercase tracking-wider truncate mb-5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C9A227] dark:text-amber-400 shrink-0" />
              <span>{shortBenefit}</span>
            </p>
          </div>

          {/* Pricing & Checkout Actions Panel */}
          <div className="pt-4 border-t border-neutral-100 dark:border-slate-800/80">
            {/* Pricing Info-Matrix */}
            <div className="flex items-center justify-between gap-1 mb-4.5">
              <div className="flex flex-col">
                {/* Strike-through Old Price */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-400 line-through font-mono font-medium">
                    {oldPrice} {t.currency}
                  </span>
                  <span className="text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded-md border border-emerald-100/10">
                    -{percentOff}%
                  </span>
                </div>
                {/* Active Current Price */}
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xl sm:text-[25px] font-black text-emerald-600 dark:text-emerald-400 font-mono leading-none tracking-tight">
                    {price}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#1F4D3A] dark:text-white uppercase tracking-wider">
                    {t.currency}
                  </span>
                </div>
              </div>

              {/* Instant Savings details */}
              <div className="text-right flex flex-col items-end">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.save}</span>
                <span className="text-xs sm:text-sm font-black text-[#1F4D3A] dark:text-amber-400 font-mono">
                  {oldPrice - price} {t.currency}
                </span>
              </div>
            </div>

            {/* Glowing CTA Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
              className={`w-full py-3.5 px-5 rounded-[18px] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-emerald-950/15 dark:shadow-emerald-950/30 hover:shadow-emerald-900/25 hover:bg-emerald-500 active:scale-95'
                  : 'bg-gradient-to-r from-[#1F4D3A] to-[#2E6B52] dark:from-amber-400 dark:to-amber-500 text-white dark:text-slate-950 hover:opacity-[0.98] shadow-[#1F4D3A]/15 dark:shadow-amber-500/10 hover:shadow-[0_8px_25px_rgba(46,107,82,0.25)] dark:hover:shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:scale-[1.015] active:scale-98'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 shrink-0 stroke-[3px]" />
                  <span>{t.added}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>{t.addToCart}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE COMPACT CARD VIEW (under md) */}
      <div 
        className="flex md:hidden flex-col justify-between bg-white dark:bg-slate-900 border border-neutral-150 dark:border-slate-800 rounded-xl shadow-xs p-2 h-full relative"
        id={`product-card-mobile-${prod.id}`}
      >
        <div 
          onClick={onViewDetails}
          className="relative aspect-square w-full rounded-lg overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center cursor-pointer select-none border border-neutral-100 dark:border-slate-850"
        >
          {/* Discount Badge in the corner */}
          <span className="absolute top-1 left-1 bg-emerald-600/95 dark:bg-emerald-500/95 text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm z-10">
            -{percentOff}%
          </span>
          
          <img
            src={img}
            alt={translation?.name}
            className="w-full h-full object-cover filter drop-shadow-md transition-transform duration-300 active:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between pt-1 pb-0 select-none">
          <div className="space-y-0.5">
            {/* Stars rating */}
            <div className="flex items-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-current" />
              ))}
            </div>

            {/* Product Title (11px-12px, max 2 lines, line-clamp-2) */}
            <h3 
              onClick={onViewDetails}
              className="text-[11px] font-extrabold text-[#1F4D3A] dark:text-white leading-tight line-clamp-2 min-h-[2.1rem] flex items-center cursor-pointer font-sans tracking-tight"
            >
              {translation?.name}
            </h3>
          </div>

          <div className="mt-1 pt-1 border-t border-neutral-100 dark:border-slate-850">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 line-through font-mono leading-none">
                {oldPrice} {t.currency}
              </span>
              <span className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 leading-none">
                {price} {t.currency}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
              className={`w-full h-8 mt-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1F4D3A] dark:bg-amber-400 text-white dark:text-slate-950 hover:bg-[#2E6B52] dark:hover:bg-amber-500 active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3 h-3 stroke-[3px]" />
                  <span>{lang === 'ar' ? 'تم✓' : 'Added ✓'}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3 h-3" />
                  <span>{lang === 'ar' ? 'أضف' : 'Add'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Aesthetic, Ultra-Glassmorphic Quick Preview Modal Overlay */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
            {/* Deep Frosted Dark backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 35 }}
              transition={{ type: 'spring', damping: 30, stiffness: 210 }}
              className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-950/95 border border-neutral-100 dark:border-slate-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] md:max-h-none"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {/* Product Visual Canvas Column */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-[#FAF9F6] to-[#F3F1EC] dark:from-slate-950 dark:to-slate-900/60 p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-neutral-100/60 dark:border-slate-850">
                {badge && badgeDetails && (
                  <span className={`absolute top-5 ${isRtl ? 'right-5' : 'left-5'} px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-wide uppercase shadow-sm border ${badgeDetails.style}`}>
                    {badgeDetails.icon} {badge}
                  </span>
                )}
                
                {/* Floating Preview Image Inside a Premium Inner Frame */}
                <div className="w-full h-full p-4 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full rounded-[24px] border border-neutral-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/80 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01),0_8px_24px_-8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.01),0_12px_30px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={translation?.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(31,77,58,0.06)] dark:drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Close Button Trigger */}
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} z-10 p-2.5 rounded-full bg-white dark:bg-slate-900 border border-neutral-150 dark:border-slate-800 text-slate-500 hover:text-rose-500 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Details & Specifications Column */}
              <div className="w-full md:w-1/2 p-6 md:p-8.5 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      {t.guarantee}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-[#1F4D3A] dark:text-white leading-tight mb-3">
                    {translation?.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-amber-600 dark:text-amber-400 font-mono">
                      {prod.rating || '4.9'}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">({prod.reviewsCount})</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {translation?.desc}
                  </p>

                  {/* Highlighting Product Benefits */}
                  {translation?.benefits && translation.benefits.length > 0 && (
                    <div className="space-y-3 mb-6.5">
                      <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        {t.benefitsTitle}
                      </h4>
                      <div className="space-y-2">
                        {translation.benefits.slice(0, 3).map((b: string, i: number) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-[11.5px] font-extrabold text-slate-700 dark:text-slate-300 leading-tight">
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing & Modal Actions Segment */}
                <div className="border-t border-neutral-100 dark:border-slate-800/80 pt-5 mt-auto">
                  <div className="flex items-baseline justify-between mb-5">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 line-through font-mono">
                        {oldPrice} {t.currency}
                      </span>
                      <span className="text-[26px] font-black text-emerald-600 dark:text-emerald-400 font-mono leading-none">
                        {price} <span className="text-xs font-bold text-[#1F4D3A] dark:text-white uppercase tracking-wider">{t.currency}</span>
                      </span>
                    </div>
                    <span className="text-xs font-black text-amber-600 dark:text-slate-900 bg-amber-50 dark:bg-amber-400 px-3 py-1.5 rounded-full border border-amber-150">
                      👑 {t.save} {oldPrice - price} {t.currency}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      onClick={() => {
                        setIsQuickViewOpen(false);
                        onViewDetails();
                        window.scrollTo(0, 0);
                      }}
                      className="w-full py-3.5 border border-neutral-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-neutral-50 dark:hover:bg-slate-900 font-extrabold rounded-xl text-xs transition-colors cursor-pointer text-center"
                    >
                      {lang === 'ar' ? 'استكشف المزيد' : lang === 'fr' ? 'Détails' : 'More Details'}
                    </button>

                    <button
                      onClick={() => {
                        onAddToCart();
                      }}
                      className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:shadow ${
                        isAdded
                          ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-emerald-950/20'
                          : 'bg-gradient-to-r from-[#1F4D3A] to-[#2E6B52] dark:from-amber-400 dark:to-amber-500 text-white dark:text-slate-950 hover:opacity-95'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5 stroke-[3px]" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      <span>{isAdded ? t.added : t.addToCart}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
