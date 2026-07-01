import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, MapPin, Sparkles, Plus, X } from 'lucide-react';
import { Review } from '../App';

interface ReviewsListProps {
  lang: 'en' | 'fr' | 'ar';
  reviews: Review[];
  onAddReview: (newReview: { name: string; city: string; text: string; rating: number; productId: string }) => void;
  rTrans: any;
  isRtl: boolean;
  productsData: any;
}

export default function ReviewsList({
  lang,
  reviews,
  onAddReview,
  rTrans,
  isRtl,
  productsData,
}: ReviewsListProps) {
  // Filtering and local states
  const [showAddReview, setShowAddReview] = useState(false);
  const [selectedProductFilter, setSelectedProductFilter] = useState('all');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('all');

  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newProduct, setNewProduct] = useState('spirulina');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Overall calculations
  const totalReviews = reviews.length;
  const overallAvg =
    parseFloat(
      (reviews.reduce((s, r) => s + r.rating, 0) / (totalReviews || 1)).toFixed(1)
    ) || 5.0;

  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((r) => r.rating === stars).length;
    const pct = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
    return { stars, count, pct };
  });

  const filteredReviews = reviews.filter((r) => {
    const matchesProduct =
      selectedProductFilter === 'all' || r.productId === selectedProductFilter;
    const matchesRating =
      selectedRatingFilter === 'all' || r.rating.toString() === selectedRatingFilter;
    return matchesProduct && matchesRating;
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newCity.trim() || !newText.trim()) {
      setErrorMsg(rTrans.validationError || "Please fill all fields");
      return;
    }
    setErrorMsg('');

    onAddReview({
      name: newName.trim(),
      city: newCity.trim(),
      text: newText.trim(),
      rating: newRating,
      productId: newProduct,
    });

    setSuccessMsg(true);
    setNewName('');
    setNewCity('');
    setNewText('');
    setNewRating(5);

    setTimeout(() => {
      setSuccessMsg(false);
      setShowAddReview(false);
    }, 2500);
  };

  return (
    <div className="w-full">
      {/* Statistics Block */}
      <div className="bg-white rounded-3xl border border-[#E5D5C0]/50 p-6 sm:p-8 shadow-[0_4px_24px_rgba(28,53,45,0.02)] mb-10 grid md:grid-cols-12 gap-8 items-center">
        {/* Column 1: Averages */}
        <div className="md:col-span-4 text-center md:border-r border-slate-100 py-4 flex flex-col items-center justify-center">
          <span className="text-5xl sm:text-6xl font-black text-[#1C352D] block tracking-tight">
            {overallAvg}
          </span>
          <div className="flex gap-1 text-amber-500 mt-3 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(overallAvg) ? 'fill-current text-[#C5A560]' : 'text-slate-100'
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
            {rTrans.basedOn} {totalReviews} {rTrans.reviewsCount}
          </p>

          <button
            onClick={() => {
              setShowAddReview(!showAddReview);
              setErrorMsg('');
            }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer border border-[#C5A560]/20"
          >
            <Plus className="w-4 h-4 text-[#C5A560]" />
            {rTrans.writeReview}
          </button>
        </div>

        {/* Column 2: Distribution Bars */}
        <div className="md:col-span-5 space-y-3">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-600 w-10 flex items-center gap-1 justify-end">
                {dist.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              </span>
              <div className="flex-grow bg-slate-100 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${dist.pct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[#C5A560] h-full rounded-full"
                />
              </div>
              <span className="text-xs text-slate-400 font-bold w-12 text-right">
                {dist.count} ({dist.pct}%)
              </span>
            </div>
          ))}
        </div>

        {/* Column 3: Badges */}
        <div className="md:col-span-3 space-y-4 text-center md:text-left" style={{ textAlign: isRtl ? 'right' : 'left' }}>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-xl bg-emerald-50 text-[#1C352D] border border-emerald-100">
              <ShieldCheck className="w-5 h-5 text-[#C5A560]" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wider">100% Verified</h4>
              <p className="text-[10px] text-slate-400">Authentic buyer reports</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
              <Sparkles className="w-5 h-5 text-[#C5A560]" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wider">Top-Tier Quality</h4>
              <p className="text-[10px] text-slate-400">DXN certified standards</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-xl bg-slate-50 text-slate-600 border border-slate-100">
              <MapPin className="w-5 h-5 text-slate-500" />
            </div>
            <div>
              <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wider">Moroccan Presence</h4>
              <p className="text-[10px] text-slate-400">Dispatch express national</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Write Form Dropdown */}
      <AnimatePresence>
        {showAddReview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-10"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAF6F0]/60 rounded-3xl border border-[#E5D5C0]/50 p-6 sm:p-8 space-y-5"
            >
              <div className="border-b border-[#E5D5C0]/30 pb-3 flex justify-between items-center">
                <h4 className="text-lg font-bold text-[#1C352D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A560] animate-pulse" />
                  {rTrans.addReviewTitle}
                </h4>
                <button
                  type="button"
                  onClick={() => setShowAddReview(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {rTrans.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder={rTrans.namePlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A560] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {rTrans.cityLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder={rTrans.cityPlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A560] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {rTrans.productLabel}
                  </label>
                  <select
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A560] transition-all"
                  >
                    <option value="spirulina">{lang === 'ar' ? productsData.spirulina.ar.name : lang === 'fr' ? productsData.spirulina.fr.name : productsData.spirulina.en.name}</option>
                    <option value="toothpaste">{lang === 'ar' ? productsData.toothpaste.ar.name : lang === 'fr' ? productsData.toothpaste.fr.name : productsData.toothpaste.en.name}</option>
                    <option value="coffee">{lang === 'ar' ? productsData.coffee.ar.name : lang === 'fr' ? productsData.coffee.fr.name : productsData.coffee.en.name}</option>
                    <option value="general">{rTrans.generalFeedback}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {rTrans.ratingLabel}
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isLit = hoverRating !== null ? star <= hoverRating : star <= newRating;
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C5A560] cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              isLit ? 'text-[#C5A560] fill-[#C5A560]' : 'text-slate-300'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                  {rTrans.reviewTextLabel} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder={rTrans.reviewTextPlaceholder}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A560] transition-all"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-600 font-bold bg-rose-50 p-3 rounded-lg border border-rose-100">
                  {errorMsg}
                </p>
              )}

              {successMsg && (
                <p className="text-xs text-emerald-800 font-bold bg-emerald-100 p-3 rounded-lg border border-emerald-200">
                  {rTrans.thankYouReview}
                </p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1C352D] hover:bg-[#25443B] text-white text-xs font-bold hover:shadow-md transition-all active:scale-95 cursor-pointer border border-[#C5A560]/20"
              >
                {rTrans.submitBtn}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-slate-100 pb-5 mb-8">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {[
            { id: 'all', label: rTrans.allProducts },
            { id: 'spirulina', label: lang === 'ar' ? productsData.spirulina.ar.name : lang === 'fr' ? productsData.spirulina.fr.name : productsData.spirulina.en.name },
            { id: 'toothpaste', label: lang === 'ar' ? productsData.toothpaste.ar.name : lang === 'fr' ? productsData.toothpaste.fr.name : productsData.toothpaste.en.name },
            { id: 'coffee', label: lang === 'ar' ? productsData.coffee.ar.name : lang === 'fr' ? productsData.coffee.fr.name : productsData.coffee.en.name },
            { id: 'general', label: rTrans.generalFeedback },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setSelectedProductFilter(pill.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedProductFilter === pill.id
                  ? 'bg-[#1C352D] text-white border-[#1C352D]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">{rTrans.filterByRating}:</span>
          <select
            value={selectedRatingFilter}
            onChange={(e) => setSelectedRatingFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#C5A560]"
          >
            <option value="all">{rTrans.allStars}</option>
            <option value="5">5 ★</option>
            <option value="4">4 ★</option>
            <option value="3">3 ★</option>
            <option value="2">2 ★</option>
            <option value="1">1 ★</option>
          </select>
        </div>
      </div>

      {/* Reviews Cards List */}
      {filteredReviews.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400 font-medium">
            {isRtl ? 'لا توجد مراجعات تطابق خيارات التصفية المحددة.' : 'Aucun avis ne correspond aux critères sélectionnés.'}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => {
              const productRef =
                rev.productId !== 'general'
                  ? rev.productId === 'toothpaste'
                    ? productsData.toothpaste
                    : rev.productId === 'coffee'
                    ? productsData.coffee
                    : productsData.spirulina
                  : null;
              const itemTitle = productRef ? productRef[lang].name : rTrans.generalFeedback;
              const monogram = rev.name
                ? rev.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase()
                : 'C';

              return (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(28,53,45,0.01)] flex flex-col justify-between"
                  style={{ textAlign: isRtl ? 'right' : 'left' }}
                >
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center gap-2" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                        <div className="flex gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating
                                  ? 'fill-current text-[#C5A560]'
                                  : 'text-slate-100'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">{rev.date}</span>
                      </div>
                      <span className="inline-flex max-w-fit items-center gap-1 text-[10px] font-bold text-[#1C352D] bg-[#EAF0EC] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {itemTitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      « {rev.text[lang] || rev.text.ar || rev.text.fr || rev.text.en} »
                    </p>
                  </div>

                  <footer
                    className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50"
                    style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                  >
                    <div className="w-9 h-9 rounded-full font-black flex items-center justify-center text-xs text-white bg-[#1C352D] border border-[#C5A560]/20 shrink-0">
                      {monogram}
                    </div>
                    <div>
                      <cite className="font-bold text-[#1C352D] not-italic block text-sm leading-none">
                        {rev.name}
                      </cite>
                      <div className={`flex items-center gap-1.5 mt-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <span className="text-[9px] text-slate-400 font-bold uppercase">{rev.city}</span>
                        <span className="text-[9px] text-[#C5A560] font-bold">• {rTrans.verifiedBuyer}</span>
                      </div>
                    </div>
                  </footer>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
