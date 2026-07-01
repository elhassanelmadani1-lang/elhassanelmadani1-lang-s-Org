import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, Phone, MapPin, Check, MessageCircle, ArrowLeft, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { productsData } from '../translations';
import { wellnessPacks } from '../data/wellnessPacksData';

const WHATSAPP_PHONE = '212648834419';

interface OnePageCheckoutProps {
  cart: Record<string, number>;
  updateCartQty: (productId: string, delta: number) => void;
  lang: 'ar' | 'fr' | 'en' | 'es';
  isRtl: boolean;
  setActiveView: (view: any) => void;
  isDark: boolean;
  clearCart: () => void;
}

export default function OnePageCheckout({
  cart,
  updateCartQty,
  lang,
  isRtl,
  setActiveView,
  isDark,
  clearCart
}: OnePageCheckoutProps) {
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const hasPack = Object.keys(cart || {}).some(key => key.toLowerCase().includes('pack') && cart[key] > 0);

  // Form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  
  const [formError, setFormError] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load saved customer info
  useEffect(() => {
    try {
      const saved = localStorage.getItem('samira_naturale_cust');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setName(parsed.name);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.city) setCity(parsed.city);
        if (parsed.address) setAddress(parsed.address);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Map product details helper
  const getProductDetails = (id: string) => {
    const isAr = lang === 'ar';
    const isFr = lang === 'fr';

    // 1. Check for specific known sub-variants or unique items
    if (id === 'toothpaste') {
      return {
        name: productsData.toothpaste[pl].name,
        price: productsData.toothpaste.price,
        image: "https://i.ibb.co/zHxTHyjQ/image.png"
      };
    }
    if (id === 'coffee') {
      return {
        name: productsData.coffee[pl].name,
        price: productsData.coffee.price,
        image: "https://i.ibb.co/TqhqBdJ0/image.png"
      };
    }
    if (id === 'reishilium' || id === 'reishilium_small') {
      const suffix = isAr ? ' (22 غرام)' : ' (22g)';
      return {
        name: `${productsData.reishilium[pl].name}${suffix}`,
        price: 401,
        image: "https://i.ibb.co/LhsPdhTv/image.png"
      };
    }
    if (id === 'reishilium_large') {
      const suffix = isAr ? ' (70 غرام)' : ' (70g)';
      return {
        name: `${productsData.reishilium[pl].name}${suffix}`,
        price: 1226,
        image: "https://i.ibb.co/PZMWLpRv/image.png"
      };
    }
    if (id === 'reishi_gano' || id === 'rg_90' || id === 'reishi_gano_small') {
      const suffix = isAr ? ' (90 كبسولة)' : ' (90 Caps)';
      return {
        name: `${productsData.reishi_gano[pl].name}${suffix}`,
        price: 706,
        image: "https://i.ibb.co/j9vb2YGq/image.png"
      };
    }
    if (id === 'morinzhi_285' || id === 'morinzhi' || id === 'morinzhi-juice') {
      const suffix = isAr ? ' (285 مل)' : ' (285ml)';
      return {
        name: `${productsData.morinzhiJuice[pl].name}${suffix}`,
        price: 300,
        image: "https://i.ibb.co/rKvjtzNw/image.png"
      };
    }
    if (id === 'morinzhi_700') {
      const suffix = isAr ? ' (700 مل)' : ' (700ml)';
      return {
        name: `${productsData.morinzhiJuice[pl].name}${suffix}`,
        price: 589,
        image: "https://i.ibb.co/4Zg6PmHp/image.png"
      };
    }
    if (id === 'rg_360' || id === 'reishi_gano_large') {
      const suffix = isAr ? ' (360 كبسولة)' : ' (360 Caps)';
      return {
        name: `${productsData.reishi_gano[pl].name}${suffix}`,
        price: 2346,
        image: "https://i.ibb.co/jdx5mcV/image.png"
      };
    }
    if (id === 'spirulina_500') {
      const suffix = isAr ? ' (500 حبة)' : isFr ? ' (500 Comprimés)' : ' (500 Tablets)';
      return {
        name: `${productsData.spirulina[pl].name}${suffix}`,
        price: 1299,
        image: "https://i.ibb.co/xST3WmwW/image.png"
      };
    }
    if (id === 'spirulina_120' || id === 'spirulina') {
      const suffix = isAr ? ' (120 حبة)' : isFr ? ' (120 Comprimés)' : ' (120 Tablets)';
      return {
        name: `${productsData.spirulina[pl].name}${suffix}`,
        price: 365,
        image: "https://i.ibb.co/1tMCDQsD/image.png"
      };
    }

    // 2. Normalization helper for productsData mapping
    const normalizeId = (productId: string) => {
      if (productId === 'gano-oil' || productId === 'ganoOil') return 'ganoOil';
      if (productId === 'spirulina-cereal') return 'spirulinaCereal';
      if (productId === 'morinzhi-juice' || productId === 'morinzhi' || productId === 'morinzhi_juice' || productId === 'morinzhiJuice') return 'morinzhiJuice';
      if (productId === 'lions-mane' || productId === 'lions_mane' || productId === 'lionsMane') return 'lions_mane';
      if (productId === 'family-pack' || productId === 'family_pack') return 'family_pack';
      return productId;
    };

    const normalized = normalizeId(id);
    const prod = (productsData as any)[normalized];
    if (prod) {
      return {
        name: prod[pl]?.name || prod['en']?.name || normalized,
        price: prod.price,
        image: prod.image || ''
      };
    }

    // 3. Fallback to wellnessPacks
    const matchedPack = wellnessPacks.find(p => p.id === id || p.id.replace('-', '_') === id || (typeof id === 'string' && id.replace('-', '_') === p.id));
    if (matchedPack) {
      return {
        name: matchedPack.name[pl] || matchedPack.name['en'],
        price: matchedPack.price,
        image: matchedPack.image
      };
    }

    return {
      name: id,
      price: 0,
      image: ''
    };
  };

  // Compute subtotal
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const details = getProductDetails(id);
    return {
      id,
      qty,
      ...details
    };
  }).filter(item => item.qty > 0);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const isFreeShipping = subtotal > 0; // Free shipping on all orders to maximize conversion!

  // Form submit to WhatsApp
  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setFormError(lang === 'ar' ? 'السلة فارغة حالياً!' : 'Le panier est vide.');
      return;
    }

    if (!name.trim() || !phone.trim() || !city.trim() || !address.trim()) {
      setFormError(lang === 'ar' ? 'الرجاء ملء جميع خانات التوصيل المطلوبة.' : 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setFormError('');
    setIsOrdering(true);

    // Save info
    localStorage.setItem('samira_naturale_cust', JSON.stringify({ name, phone, city, address }));

    // Formulate WhatsApp Message
    const header = lang === 'ar' 
      ? '🟢 طلب شراء جديد - سميرة ناتورال 🟢' 
      : '🟢 NOUVELLE COMMANDE - SAMIRA NATURALE 🟢';

    const itemsStr = cartItems.map(item => {
      return `• ${item.name} x${item.qty} (${item.price * item.qty} MAD)`;
    }).join('\n');

    const customerDetails = lang === 'ar'
      ? `👤 الاسم الكامل: ${name}\n📞 الهاتف: ${phone}\n🏙️ المدينة: ${city}\n📍 العنوان: ${address}`
      : `👤 Nom: ${name}\n📞 Téléphone: ${phone}\n🏙️ Ville: ${city}\n📍 Adresse: ${address}`;

    const financialDetails = lang === 'ar'
      ? `💵 المجموع الإجمالي: *${subtotal} درهم*\n🚚 الشحن: *مجاني بالكامل والدفع عند الاستلام*`
      : `💵 Total de la Commande: *${subtotal} MAD*\n🚚 Livraison: *Gratuite - Paiement Cash à la Livraison*`;

    const rawMessage = `${header}\n\n🛍️ *المنتجات المطلوبة / Produits:* \n${itemsStr}\n\n${customerDetails}\n\n${financialDetails}\n\n🙏 شكراً لتسوقكم من متجرنا الطبيعي!`;
    const encodedText = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`;

    // Show success & redirect
    setTimeout(() => {
      setIsOrdering(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
      clearCart();
    }, 1000);
  };

  const t = {
    titleAr: "إتمام الطلب السريع (COD)",
    titleFr: "Passer Ma Commande COD",
    titleEn: "Fast Checkout (COD)",
    subAr: "يرجى ملء معلومات الشحن الحقيقية لتأكيد طلبيتك وتوصيلها مجاناً إلى باب منزلك.",
    subFr: "Remplissez vos informations de livraison réelles pour recevoir vos produits gratuitement chez vous.",
    subEn: "Fill in your shipping details to receive your natural products at your doorstep with free shipping.",
    emptyAr: "سلة التسوق فارغة حالياً!",
    emptyFr: "Votre panier est vide.",
    emptyEn: "Your cart is empty.",
    backToStoreAr: "الرجوع للمتجر للتسوق",
    backToStoreFr: "Retour à la Boutique",
    backToStoreEn: "Back to Shop",
    labelNameAr: "👤 الاسم الكامل (الاسم العائلي والشخصي)",
    labelNameFr: "Nom Complet (Nom & Prénom)",
    labelNameEn: "Full Name",
    placeholderNameAr: "مثال: أحمد العلمي",
    placeholderNameFr: "Ex: Ahmed Alami",
    placeholderNameEn: "Ex: John Doe",
    labelPhoneAr: "📞 رقم الهاتف (للتواصل معك عند التوصيل)",
    labelPhoneFr: "Numéro de Téléphone (Pour la livraison)",
    labelPhoneEn: "Phone Number",
    placeholderPhoneAr: "مثال: 0612345678",
    placeholderPhoneFr: "Ex: 0612345678",
    placeholderPhoneEn: "Ex: 0612345678",
    labelCityAr: "🏙️ المدينة",
    labelCityFr: "Ville de livraison",
    labelCityEn: "City",
    placeholderCityAr: "مثال: الدار البيضاء، الرباط، طنجة...",
    placeholderCityFr: "Ex: Casablanca, Rabat, Tanger...",
    placeholderCityEn: "Ex: Casablanca, Rabat, Tangier...",
    labelAddressAr: "📍 عنوان التوصيل المباشر بالكامل",
    labelAddressFr: "Adresse de livraison exacte & complète",
    labelAddressEn: "Full Delivery Address",
    placeholderAddressAr: "الرجاء كتابة اسم الحي، الشارع، ورقم الشقة/المنزل بدقة لتسريع الشحن",
    placeholderAddressFr: "Ex: Quartier Maârif, Rue 12, Appt 4",
    placeholderAddressEn: "Ex: Street name, building number, apartment number",
    summaryTitleAr: "ملخص طلبك الحالي",
    summaryTitleFr: "Résumé de votre commande",
    summaryTitleEn: "Order Summary",
    subtotalAr: "المجموع الفرعي للمنتجات",
    subtotalFr: "Sous-total des produits",
    subtotalEn: "Subtotal",
    shippingAr: "مصاريف الشحن والتوصيل بالمغرب",
    shippingFr: "Frais de livraison au Maroc",
    shippingEn: "Shipping Fee",
    freeAr: "مجاني بالكامل",
    freeFr: "Gratuit",
    freeEn: "Free",
    totalAr: "المبلغ الإجمالي المستحق عند الاستلام",
    totalFr: "Masse totale à payer à la livraison",
    totalEn: "Total to Pay on Delivery",
    currencyAr: "درهم",
    currencyFr: "DH",
    currencyEn: "MAD",
    submitBtnAr: "تأكيد الطلب عبر واتساب 🟢",
    submitBtnFr: "Confirmer la commande sur WhatsApp 🟢",
    submitBtnEn: "Confirm Order via WhatsApp 🟢",
    submittingAr: "جاري تأكيد وتسجيل الطلب...",
    submittingFr: "Enregistrement de la commande...",
    submittingEn: "Registering order...",
    successAr: "🎉 تم تسجيل طلبك بنجاح!",
    successFr: "🎉 Commande enregistrée avec succès !",
    successEn: "🎉 Order registered successfully!",
    successSubAr: "تم توجيهك إلى الواتساب الخاص بـ لالة سميرة لتأكيد الشحن الفوري والدفع عند الاستلام. شكراً لثقتكم!",
    successSubFr: "Vous avez été redirigé vers WhatsApp pour finaliser l'expédition gratuite de votre commande. Merci !",
    successSubEn: "You have been redirected to WhatsApp to confirm your free delivery. Thank you!",
    packsOptionAr: "أيضاً في باقات متميزة بخصم إضافي",
    packsOptionFr: "Également disponible dans nos packs exclusifs avec réduction !",
    packsOptionEn: "Also available in premium packs with an additional discount!"
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] dark:bg-slate-900 py-16 px-4 select-none flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-3xl border border-emerald-100 max-w-xl text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black">
            ✓
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1C352D] dark:text-white mb-4">
            {lang === 'ar' ? t.successAr : t.successFr}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed mb-8">
            {lang === 'ar' ? t.successSubAr : t.successSubFr}
          </p>
          <button
            onClick={() => setActiveView(hasPack ? 'packs' : 'store')}
            className="px-8 py-3.5 bg-[#1C352D] hover:bg-[#25443B] dark:bg-[#C5A560] dark:text-slate-900 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            {lang === 'ar' 
              ? (hasPack ? 'الرجوع لتشكيلة الباقات' : 'الرجوع للمتجر الرئيسي') 
              : (hasPack ? 'Retour aux Packs' : 'Retour à l\'accueil')
            }
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 select-none text-center sm:text-start">
          <button
            onClick={() => setActiveView(hasPack ? 'packs' : 'store')}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1C352D] dark:text-emerald-400 hover:text-[#C5A560] transition-colors mb-4 cursor-pointer"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {lang === 'ar' 
              ? (hasPack ? 'الرجوع لتشكيلة الباقات' : 'الرجوع للتسوق') 
              : (hasPack ? 'Retour aux Packs' : 'Retourner au magasin')
            }
          </button>
          
          <h1 className="text-2xl sm:text-4.5xl font-black text-[#1C352D] dark:text-white font-sans tracking-tight leading-tight">
            {lang === 'ar' ? t.titleAr : lang === 'fr' ? t.titleFr : t.titleEn}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            {lang === 'ar' ? t.subAr : lang === 'fr' ? t.subFr : t.subEn}
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-emerald-100/40 select-none shadow-xl max-w-md mx-auto"
          >
            <div className="w-16 h-16 bg-[#FAF6F0] dark:bg-slate-700/50 text-[#1C352D] dark:text-[#C5A560] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#1C352D] dark:text-white mb-2">
              {lang === 'ar' ? t.emptyAr : lang === 'fr' ? t.emptyFr : t.emptyEn}
            </h3>
            <button
              onClick={() => setActiveView('store')}
              className="px-6 py-2.5 bg-[#1C352D] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#25443B] dark:bg-[#C5A560] dark:text-slate-900 transition-colors mt-6 cursor-pointer"
            >
              {lang === 'ar' ? t.backToStoreAr : lang === 'fr' ? t.backToStoreFr : t.backToStoreEn}
            </button>
          </motion.div>
        ) : (
          /* Checkout layout */
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Cart & shipping form */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Cart List Card */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-emerald-100/40 dark:border-slate-700 shadow-xl select-none">
                <h3 className="text-lg sm:text-xl font-black text-[#1C352D] dark:text-white mb-6 border-b border-emerald-50/50 dark:border-slate-700/50 pb-4">
                  {lang === 'ar' ? 'سلة المشتريات الحالية' : 'Votre Panier'}
                </h3>

                <div className="divide-y divide-emerald-50/50 dark:divide-slate-700/50 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-[#FAF6F0] dark:bg-slate-700/30 rounded-xl p-2 shrink-0 border border-emerald-100/30"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-black text-[#1C352D] dark:text-white truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 mt-1">
                          <span>{item.price}</span>
                          <span className="text-[10px] text-[#C5A560] font-sans uppercase">
                            {lang === 'ar' ? t.currencyAr : lang === 'fr' ? t.currencyFr : t.currencyEn}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 bg-[#FAF6F0] dark:bg-slate-700 px-2.5 py-1.5 rounded-xl border border-emerald-100/30 dark:border-slate-650 shrink-0">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="p-1 text-[#1C352D] dark:text-slate-300 hover:text-red-500 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black text-[#1C352D] dark:text-white font-mono px-1">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="p-1 text-[#1C352D] dark:text-slate-300 hover:text-emerald-600 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right shrink-0 min-w-[70px]">
                        <span className="text-sm font-black text-[#1C352D] dark:text-white font-mono">
                          {item.price * item.qty}
                        </span>
                        <span className="text-[10px] font-bold text-[#C5A560] mx-0.5 uppercase">
                          {lang === 'ar' ? t.currencyAr : lang === 'fr' ? t.currencyFr : t.currencyEn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Form Card */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-emerald-100/40 dark:border-slate-700 shadow-xl">
                <h3 className="text-lg sm:text-xl font-black text-[#1C352D] dark:text-white mb-6 border-b border-emerald-50/50 dark:border-slate-700/50 pb-4 select-none">
                  {lang === 'ar' ? 'معلومات التوصيل والشحن' : 'Informations de livraison'}
                </h3>

                <form onSubmit={handleConfirmOrder} className="space-y-6">
                  {formError && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 text-xs font-bold text-red-600 border border-red-200">
                      {formError}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5 select-none">
                      {lang === 'ar' ? t.labelNameAr : lang === 'fr' ? t.labelNameFr : t.labelNameEn}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? t.placeholderNameAr : lang === 'fr' ? t.placeholderNameFr : t.placeholderNameEn}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6F0] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1C352D] border border-emerald-100 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-[#C5A560] text-xs sm:text-sm font-bold"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5 select-none">
                      {lang === 'ar' ? t.labelPhoneAr : lang === 'fr' ? t.labelPhoneFr : t.labelPhoneEn}
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={lang === 'ar' ? t.placeholderPhoneAr : lang === 'fr' ? t.placeholderPhoneFr : t.placeholderPhoneEn}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6F0] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1C352D] border border-emerald-100 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-[#C5A560] text-xs sm:text-sm font-bold font-mono"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5 select-none">
                      {lang === 'ar' ? t.labelCityAr : lang === 'fr' ? t.labelCityFr : t.labelCityEn}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={lang === 'ar' ? t.placeholderCityAr : lang === 'fr' ? t.placeholderCityFr : t.placeholderCityEn}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6F0] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1C352D] border border-emerald-100 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-[#C5A560] text-xs sm:text-sm font-bold"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5 select-none">
                      {lang === 'ar' ? t.labelAddressAr : lang === 'fr' ? t.labelAddressFr : t.labelAddressEn}
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={3}
                        placeholder={lang === 'ar' ? t.placeholderAddressAr : lang === 'fr' ? t.placeholderAddressFr : t.placeholderAddressEn}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6F0] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1C352D] border border-emerald-100 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-[#C5A560] text-xs sm:text-sm font-bold"
                      />
                    </div>
                  </div>

                  {/* Hidden form trigger */}
                  <button type="submit" className="hidden" id="checkout-form-submit-btn" />
                </form>
              </div>

            </div>

            {/* Right: Direct Bill Summary & Action button */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-emerald-100/40 dark:border-slate-700 shadow-xl select-none sticky top-6">
                <h3 className="text-lg font-black text-[#1C352D] dark:text-white mb-6 border-b border-emerald-50/50 dark:border-slate-700/50 pb-4">
                  {lang === 'ar' ? t.summaryTitleAr : t.summaryTitleFr}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between">
                    <span>{lang === 'ar' ? t.subtotalAr : t.subtotalFr}</span>
                    <span className="font-mono text-slate-800 dark:text-white">
                      {subtotal} {lang === 'ar' ? t.currencyAr : lang === 'fr' ? t.currencyFr : t.currencyEn}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex items-center justify-between">
                    <span>{lang === 'ar' ? t.shippingAr : t.shippingFr}</span>
                    <span className="text-emerald-600 font-extrabold uppercase">
                      {lang === 'ar' ? t.freeAr : t.freeFr}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-emerald-50/50 dark:border-slate-700/50 pt-4 mt-4"></div>

                  {/* Grand total */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">
                      {lang === 'ar' ? t.totalAr : t.totalFr}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[#1C352D] dark:text-white font-mono">
                        {subtotal}
                      </span>
                      <span className="text-xs font-black text-[#C5A560] uppercase">
                        {lang === 'ar' ? t.currencyAr : lang === 'fr' ? t.currencyFr : t.currencyEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secure Badge & Free Shipping promo block */}
                <div className="p-4 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/40 dark:border-emerald-900/40 mt-8 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-400">
                    <Truck className="w-4 h-4 shrink-0 text-[#C5A560]" />
                    <span>{lang === 'ar' ? 'توصيل مجاني وسريع لكافة المدن المغربية 🚚' : 'Livraison express gratuite partout au Maroc !'}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-[#C5A560]" />
                    <span>{lang === 'ar' ? 'الدفع نقداً فقط عند الاستلام والرضا التام ✓' : 'Paiement à la livraison après vérification du colis.'}</span>
                  </div>
                </div>

                {/* Premium Packs Option Promo Banner */}
                <div 
                  onClick={() => {
                    setActiveView('packs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 sm:p-4 rounded-xl border border-[#C5A560]/30 bg-[#FAF6F0] hover:bg-[#FAF6F0]/80 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 transition-all cursor-pointer flex items-center justify-between gap-3 mt-4 select-none hover:scale-[1.01] active:scale-99 shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A560] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A560]"></span>
                    </span>
                    <span className="text-[11px] sm:text-xs font-black text-[#1C352D] dark:text-emerald-400">
                      {lang === 'ar' ? t.packsOptionAr : lang === 'fr' ? t.packsOptionFr : t.packsOptionEn}
                    </span>
                  </div>
                  <span className="text-[#C5A560] text-xs font-black shrink-0 flex items-center gap-1">
                    {lang === 'ar' ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
                  </span>
                </div>

                {/* Primary WhatsApp Action Button */}
                <button
                  type="button"
                  disabled={isOrdering}
                  onClick={() => document.getElementById('checkout-form-submit-btn')?.click()}
                  className="w-full mt-8 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/10 transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
                  {isOrdering 
                    ? (lang === 'ar' ? t.submittingAr : t.submittingFr) 
                    : (lang === 'ar' ? t.submitBtnAr : t.submitBtnFr)}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView('store')}
                  className="w-full mt-3 px-6 py-3.5 rounded-2xl border-2 border-emerald-600/20 text-emerald-800 dark:text-emerald-300 dark:border-slate-600 hover:bg-emerald-50 dark:hover:bg-slate-700 font-black text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  {lang === 'ar' ? 'إضافة منتج آخر' : lang === 'fr' ? 'Ajouter un autre produit' : 'Add another product'}
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
