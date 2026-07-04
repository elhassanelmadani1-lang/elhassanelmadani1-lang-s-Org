import { useState, useMemo, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Check, ShoppingBag, Eye, Tag, Heart, Shield, Zap, Coffee, Gift, 
  Search, ArrowLeft, ArrowRight, Star, Clock, HelpCircle, Phone, MapPin, CheckCircle, Flame
} from 'lucide-react';
import { wellnessPacks, WellnessPack } from '../data/wellnessPacksData';
import FAQAccordion from './FAQAccordion';

interface PremiumPacksViewProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  activeView: 'packs' | 'pack-detail';
  setActiveView: (view: any) => void;
  selectedPackId: string;
  setSelectedPackId: (id: string) => void;
  addToCart: (productId: string) => void;
  isDark: boolean;
}

export default function PremiumPacksView({
  lang,
  isRtl,
  activeView,
  setActiveView,
  selectedPackId,
  setSelectedPackId,
  addToCart,
  isDark
}: PremiumPacksViewProps) {
  
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'family' | 'immunity' | 'energy' | 'coffee' | 'premium' | 'cosmetics'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutCity, setCheckoutCity] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');

  const orderFormRef = useRef<HTMLDivElement>(null);

  // Translation Dictionaries
  const t = {
    en: {
      title: "Premium Wellness Packs",
      subtitle: "Discover carefully selected DXN wellness combinations designed for families, daily wellness, immunity and energy.",
      searchPlaceholder: "Search premium packs...",
      filterAll: "All Packs",
      filterFamily: "Family Packs",
      filterImmunity: "Immunity",
      filterEnergy: "Energy & Vitality",
      filterCoffee: "Coffee Lovers",
      filterPremium: "Premium Elixirs",
      filterCosmetics: "Luxury Cosmetics",
      backToList: "Back to All Packs",
      includingLabel: "Included in this Pack",
      benefitsLabel: "Key Health Benefits",
      whoIsItFor: "Who is this pack for?",
      recommendedUsage: "Recommended Daily Usage",
      savingTitle: "Your Pack Savings Meter",
      savingsDetails: "Individual Value vs Pack Price",
      saveText: "You Save",
      individualValue: "Individual products value",
      packPrice: "Exclusive Bundle Price",
      addToCart: "Add to Cart",
      orderCod: "Order COD (Cash on Delivery)",
      directCheckoutTitle: "Direct COD Order Form",
      directCheckoutSub: "Fill your details below. Shipping is 100% free with cash payment on delivery!",
      fullName: "Full Name",
      phone: "Phone Number (WhatsApp)",
      city: "City / Town",
      address: "Delivery Address",
      submitOrder: "Confirm Order & Ship Now",
      submitting: "Processing Order...",
      relatedPacks: "Related Wellness Packs",
      relatedPacksSub: "Discover more premium DXN natural health combinations",
      faqTitle: "Frequently Asked Questions",
      currency: "DH",
      successTitle: "Order Placed Successfully! 🎉",
      successSub: "Thank you! We have received your order. We are redirecting you to WhatsApp to confirm your immediate free delivery.",
      redirectCta: "Open WhatsApp to Confirm Delivery"
    },
    fr: {
      title: "Packs de Bien-être Premium",
      subtitle: "Découvrez des combinaisons de bien-être DXN soigneusement sélectionnées, conçues pour les familles, le bien-être quotidien, l'immunité et l'énergie.",
      searchPlaceholder: "Rechercher un pack bien-être...",
      filterAll: "Tous les Packs",
      filterFamily: "Packs Famille",
      filterImmunity: "Immunité Forte",
      filterEnergy: "Énergie & Force",
      filterCoffee: "Amateurs de Café",
      filterPremium: "Cures Premium",
      filterCosmetics: "Cosmétiques de Luxe",
      backToList: "Retour aux Packs",
      includingLabel: "Inclus dans ce Pack",
      benefitsLabel: "Bienfaits Majeurs pour la Santé",
      whoIsItFor: "Pour qui est fait ce pack ?",
      recommendedUsage: "Conseils d'utilisation quotidienne",
      savingTitle: "Votre jauge d'économie",
      savingsDetails: "Valeur unitaire vs Prix de lot",
      saveText: "Vous économisez",
      individualValue: "Valeur des produits séparés",
      packPrice: "Prix exclusif du pack",
      addToCart: "Ajouter au panier",
      orderCod: "Commander en 1 clic (COD)",
      directCheckoutTitle: "Formulaire d'Envoi Gratuit",
      directCheckoutSub: "Remplissez vos informations. Livraison gratuite partout au Maroc & Paiement à la livraison !",
      fullName: "Nom Complet",
      phone: "Numéro de Téléphone (WhatsApp)",
      city: "Ville",
      address: "Adresse de Livraison",
      submitOrder: "Confirmer la commande & Recevoir",
      submitting: "Enregistrement de commande...",
      relatedPacks: "Packs de Bien-être Associés",
      relatedPacksSub: "Explorez d'autres combinaisons biologiques exclusives DXN",
      faqTitle: "Questions Fréquentes",
      currency: "DH",
      successTitle: "Commande Enregistrée ! 🎉",
      successSub: "Merci ! Votre commande a bien été reçue. Nous vous redirigeons vers WhatsApp pour planifier la livraison express gratuite.",
      redirectCta: "Confirmer l'envoi sur WhatsApp"
    },
    es: {
      title: "Packs de Bienestar Premium",
      subtitle: "Descubra combinaciones de bienestar de DXN cuidadosamente seleccionadas y diseñadas para familias, bienestar diario, inmunidad y energía.",
      searchPlaceholder: "Buscar packs premium...",
      filterAll: "Todos los Packs",
      filterFamily: "Packs Familiares",
      filterImmunity: "Inmunidad Fuerte",
      filterEnergy: "Energía y Vitalidad",
      filterCoffee: "Amantes del Café",
      filterPremium: "Elixires Premium",
      filterCosmetics: "Cosmética de Lujo",
      backToList: "Volver a todos los Packs",
      includingLabel: "Incluido en este Pack",
      benefitsLabel: "Beneficios de Salud Clave",
      whoIsItFor: "¿Para quién es este pack?",
      recommendedUsage: "Uso Diario Recomendado",
      savingTitle: "Su Medidor de Ahorro del Pack",
      savingsDetails: "Valor Individual vs Precio del Pack",
      saveText: "Usted Ahorra",
      individualValue: "Valor de productos individuales",
      packPrice: "Precio Exclusivo del Pack",
      addToCart: "Añadir al Carrito",
      orderCod: "Pedido COD (Pago contra reembolso)",
      directCheckoutTitle: "Formulario de Pedido COD Directo",
      directCheckoutSub: "Complete sus datos a continuación. ¡El envío es 100% gratuito con pago en efectivo a la entrega!",
      fullName: "Nombre Completo",
      phone: "Número de Teléfono (WhatsApp)",
      city: "Ciudad / Pueblo",
      address: "Dirección de Entrega",
      submitOrder: "Confirmar Pedido y Enviar Ahora",
      submitting: "Procesando Pedido...",
      relatedPacks: "Packs de Bienestar Relacionados",
      relatedPacksSub: "Descubra más combinaciones de salud natural de DXN premium",
      faqTitle: "Preguntas Frecuentes",
      currency: "DH",
      successTitle: "¡Pedido Realizado con Éxito! 🎉",
      successSub: "¡Muchas gracias! Hemos recibido su pedido. Le estamos redirigiendo a WhatsApp para coordinar su envío express gratuito.",
      redirectCta: "Abrir WhatsApp para Confirmar Envío"
    },
    ar: {
      title: "باقات العافية الفاخرة",
      subtitle: "اكتشف مجموعات عافية DXN العضوية المنسقة بعناية فائقة لتلائم احتياجات العائلة، المناعة، الطاقة والنشاط المتكامل.",
      searchPlaceholder: "ابحث عن باقة صحية فاخرة...",
      filterAll: "جميع الباقات",
      filterFamily: "باقات العائلة",
      filterImmunity: "تقوية المناعة",
      filterEnergy: "الطاقة والنشاط",
      filterCoffee: "عشاق القهوة",
      filterPremium: "برامج النخبة",
      filterCosmetics: "مستحضرات التجميل الفاخرة",
      backToList: "الرجوع لتشكيلة الباقات",
      includingLabel: "المنتجات المشمولة في الباقة",
      benefitsLabel: "الفوائد الصحية المعتمدة",
      whoIsItFor: "لمن هذه الباقة؟",
      recommendedUsage: "طريقة الاستخدام المقترحة والجرعات",
      savingTitle: "مؤشر التوفير الحصري للباقة",
      savingsDetails: "مقارنة السعر الفردي مقابل سعر الباقة المخفض",
      saveText: "مجموع التوفير",
      individualValue: "القيمة الإجمالية للمنتجات منفردة",
      packPrice: "سعر الباقة الخاص والمخفض",
      addToCart: "إضافة للسلة",
      orderCod: "طلب مباشر (الدفع عند الاستلام)",
      directCheckoutTitle: "استمارة الطلب السريع والدفع عند الاستلام",
      directCheckoutSub: "أدخل معلوماتك أدناه. التوصيل مجاني 100% والدفع نقداً عند استلام طلبك بباب المنزل!",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف المحمول (واتساب)",
      city: "المدينة / القرية",
      address: "عنوان التوصيل بالكامل",
      submitOrder: "تأكيد الطلب وشحن المنتجات فوراً",
      submitting: "جاري تسجيل طلبك الفاخر...",
      relatedPacks: "باقات عافية وصحة أخرى قد تعجبك",
      relatedPacksSub: "اكتشف المزيد من توليفات دي إكس إن العضوية لدعم الحيوية والنشاط",
      faqTitle: "الأسئلة الشائعة حول هذه الباقة",
      currency: "درهم",
      successTitle: "تم تسجيل طلبك بنجاح! 🎉",
      successSub: "شكراً لك! لقد تم تسجيل طلبك الفاخر بنجاح. جاري نقلك إلى واتساب مع لالة سميرة لتأكيد الشحن السريع المجاني.",
      redirectCta: "أرسل تفاصيل طلبي عبر واتساب للشحن"
    }
  }[pl];

  // Filters logic
  const filteredPacks = useMemo(() => {
    return wellnessPacks.filter(pack => {
      // 1. Filter by category
      if (activeFilter !== 'all') {
        if (activeFilter === 'family' && pack.id !== 'family-pack') return false;
        if (activeFilter === 'immunity' && pack.id !== 'immunity-pack') return false;
        if (activeFilter === 'energy' && pack.id !== 'energy-pack') return false;
        if (activeFilter === 'coffee' && pack.id !== 'coffee-lovers-pack') return false;
        if (activeFilter === 'premium' && pack.id !== 'premium-wellness-pack') return false;
        if (activeFilter === 'cosmetics' && pack.id !== 'luxury-cosmetics-pack' && pack.id !== 'lifting-antiaging-pack' && pack.id !== 'supreme-lifting-elixir-pack' && pack.id !== 'sun-protection-tanning-pack' && pack.id !== 'aloe-vera-pack') return false;
      }
      // 2. Filter by search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const nameMatch = pack.name[pl].toLowerCase().includes(query);
        const descMatch = pack.desc[pl].toLowerCase().includes(query);
        const benefitsMatch = pack.benefits[pl].some(b => b.toLowerCase().includes(query));
        return nameMatch || descMatch || benefitsMatch;
      }
      return true;
    });
  }, [activeFilter, searchQuery, pl]);

  // Find currently selected pack
  const currentPack = useMemo(() => {
    return wellnessPacks.find(pack => pack.id === selectedPackId) || wellnessPacks[0];
  }, [selectedPackId]);

  // Find related packs (all packs except current one)
  const relatedPacks = useMemo(() => {
    return wellnessPacks.filter(pack => pack.id !== currentPack.id).slice(0, 3);
  }, [currentPack]);

  const scrollToOrderForm = () => {
    orderFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const isValidMoroccanPhone = (num: string): boolean => {
    const cleaned = num.trim().replace(/[\s-]/g, '');
    const moroccoRegex = /^(06|07)\d{8}$|^\+212(6|7)\d{8}$/;
    return moroccoRegex.test(cleaned);
  };

  // Submit direct COD order to WhatsApp
  const handleDirectCodSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutPhone || !checkoutCity) return;

    if (!isValidMoroccanPhone(checkoutPhone)) {
      alert(lang === 'ar' ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setFormSubmitted(true);

    const WHATSAPP_NUMBER = '212648834419';
    const productsListText = currentPack.products.map(p => `• ${(p.name as any)[lang] || p.name[pl]}`).join('\n');
    
    const textMessage = lang === 'ar' 
      ? `*طلب جديد لباقة العافية الفاخرة* 🌿✨\n\n` +
        `*اسم الباقة:* ${currentPack.name.ar}\n` +
        `*سعر الباقة:* ${currentPack.price} درهم\n` +
        `*التوفير الحاصل:* ${currentPack.originalPrice - currentPack.price} درهم\n\n` +
        `*معلومات المشتري:*\n` +
        `👤 *الاسم:* ${checkoutName}\n` +
        `📞 *الهاتف:* ${checkoutPhone}\n` +
        `📍 *المدينة:* ${checkoutCity}\n` +
        `🏡 *العنوان:* ${checkoutAddress || 'لم يحدد'}\n\n` +
        `*المنتجات المشمولة:*\n${productsListText}\n\n` +
        `🚀 _يرجى تأكيد طلب الشحن السريع المجاني والاستشارة الهدية مع لالة سميرة في أقرب وقت._`
      : lang === 'es'
      ? `*NUEVO PEDIDO - PACK PREMIUM* 🌿✨\n\n` +
        `*Nombre del Pack:* ${((currentPack.name as any)[lang] || currentPack.name[pl])}\n` +
        `*Precio del Pack:* ${currentPack.price} DH\n` +
        `*Ahorro Realizado:* ${currentPack.originalPrice - currentPack.price} DH\n\n` +
        `*Datos del Cliente:*\n` +
        `👤 *Nombre:* ${checkoutName}\n` +
        `📞 *Teléfono:* ${checkoutPhone}\n` +
        `📍 *Ciudad:* ${checkoutCity}\n` +
        `🏡 *Dirección:* ${checkoutAddress || 'No especificada'}\n\n` +
        `*Productos Incluidos:*\n${productsListText}\n\n` +
        `🚀 _Por favor, confirme mi envío express gratuito y mis consejos personalizados._`
      : `*NOUVELLE COMMANDE - PACK PREMIUM* 🌿✨\n\n` +
        `*Nom du Pack :* ${(currentPack.name as any)[lang] || currentPack.name[pl]}\n` +
        `*Prix du Pack :* ${currentPack.price} DH\n` +
        `*Économie Réalisée :* ${currentPack.originalPrice - currentPack.price} DH\n\n` +
        `*Coordonnées Client :*\n` +
        `👤 *Nom :* ${checkoutName}\n` +
        `📞 *Téléphone :* ${checkoutPhone}\n` +
        `📍 *Ville :* ${checkoutCity}\n` +
        `🏡 *Adresse :* ${checkoutAddress || 'Non spécifiée'}\n\n` +
        `*Produits Inclus :*\n${productsListText}\n\n` +
        `🚀 _Veuillez valider ma livraison express gratuite et mes conseils personnalisés._`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    setTimeout(() => {
      try {
        const newWindow = window.open(whatsappUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        console.error("Popup blocked, trying direct redirect:", err);
        window.location.href = whatsappUrl;
      }
    }, 1500);
  };

  // Convert Pack FAQ format to FAQAccordion expected format
  const formattedFaqs = useMemo(() => {
    return currentPack.faq.map(f => ({
      q: f.question[lang],
      a: f.answer[lang]
    }));
  }, [currentPack, lang]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF7F2] text-slate-800'}`}>
      
      {/* Alert Top Bar for direct reassurance */}
      <div className="bg-[#1C352D] text-[#FAF6F0] py-3 text-center px-4 select-none flex flex-wrap items-center justify-center gap-2 text-xs font-bold border-b border-[#C5A560]/20 relative z-10">
        <span className="flex items-center gap-1.5 justify-center">
          <span className="w-2 h-2 rounded-full bg-[#C5A560] animate-ping"></span>
          🚚 {isRtl ? 'باقات النخبة الفاخرة: شحن مجاني سريع لجميع مدن المغرب وهدية متابعة صحية خاصة!' : 'Offre Pack Elite : Livraison gratuite partout au Maroc & Conseil personnalisé offert !'}
        </span>
      </div>

      <AnimatePresence mode="wait">
        
        {/* ================= LIST VIEW (DIRECTORY) ================= */}
        {activeView === 'packs' ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Header Title Block */}
            <div className="text-center max-w-3xl mx-auto mb-12 select-none">
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100 mb-4"
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin" />
                {isRtl ? 'برامج دي إكس إن الصحية الشاملة' : 'PROGRAMMES BIOLOGIQUES SPECIAUX'}
              </motion.span>
              
              <h1 className="text-3.5xl sm:text-5xl font-black text-[#1E3A34] tracking-tight leading-tight">
                {t.title}
              </h1>
              
              <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-bold">
                {t.subtitle}
              </p>
            </div>

            {/* Search & Filter Controls Panel */}
            <div className="bg-white rounded-3xl border border-[#EADFC9]/50 shadow-md p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Live search input field */}
              <div className="relative w-full md:w-96" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                <Search className={`absolute top-3.5 w-4 h-4 text-slate-400 ${isRtl ? 'right-4' : 'left-4'}`} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-3 px-11 rounded-2xl bg-[#FAF7F2] border border-[#EADFC9]/30 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#D4AF37] text-[#1E3A34] transition-all`}
                />
              </div>

              {/* Horizontal filter category chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                {[
                  { id: 'all', label: t.filterAll },
                  { id: 'family', label: t.filterFamily },
                  { id: 'immunity', label: t.filterImmunity },
                  { id: 'energy', label: t.filterEnergy },
                  { id: 'coffee', label: t.filterCoffee },
                  { id: 'premium', label: t.filterPremium },
                  { id: 'cosmetics', label: t.filterCosmetics }
                ].map((chip) => {
                  const isActive = activeFilter === chip.id;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => setActiveFilter(chip.id as any)}
                      className={`py-2 px-4 rounded-xl text-xs font-extrabold cursor-pointer transition-all border ${
                        isActive 
                          ? 'bg-[#1E3A34] text-white border-[#1E3A34] shadow-xs scale-102' 
                          : 'bg-[#FAF7F2] text-slate-600 border-[#EADFC9]/40 hover:bg-[#EAF0EC] hover:text-[#1E3A34]'
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Grid of Results */}
            {filteredPacks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {filteredPacks.map((pack, idx) => {
                  const savings = pack.originalPrice - pack.price;
                  const savingsPercent = Math.round((savings / pack.originalPrice) * 100);

                  return (
                    <motion.div
                      key={pack.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="group relative bg-white rounded-3xl border border-[#EADFC9]/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                    >
                      <div className="p-6 pb-0">
                        {/* Top indicators */}
                        <div className="flex justify-between items-center mb-4 gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[9px] font-extrabold uppercase tracking-wider border border-emerald-100">
                            {pack.badge[pl]}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#D4AF37] text-[9px] font-black border border-[#EADFC9]">
                            -{savingsPercent}%
                          </span>
                        </div>

                        {/* Image */}
                        <div className="h-48 w-full rounded-2xl bg-[#FAF7F2] flex items-center justify-center p-0 overflow-hidden group-hover:bg-[#EAF0EC]/30 transition-all">
                          <img
                            src={pack.image}
                            alt={pack.name[pl]}
                            className="w-full h-full object-cover filter drop-shadow-sm group-hover:scale-103 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Text */}
                        <div className="mt-5 space-y-1.5">
                          <h3 className="text-lg font-black text-[#1E3A34] leading-snug group-hover:text-[#D4AF37] transition-colors">
                            {pack.name[pl]}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2">
                            {pack.desc[pl]}
                          </p>
                        </div>

                        {/* Mini products lists */}
                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                          <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] font-black block">✦ {t.includingLabel}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {pack.products.map(p => (
                              <span key={p.id} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FAF7F2] text-[10px] font-bold text-[#1E3A34] border border-[#EADFC9]/25">
                                {p.name[pl]}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Benefits list (limit 2) */}
                        <div className="mt-4 space-y-1.5 pb-6">
                          {pack.benefits[pl].slice(0, 2).map((b, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                              <span className="text-[10px] sm:text-[11px] text-slate-650 font-bold leading-tight">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing block & action buttons */}
                      <div className="p-6 pt-0 border-t border-slate-50 bg-slate-50/20">
                        <div className="flex justify-between items-center py-3">
                          <div className="space-y-0.5">
                            <span className="text-[10px] text-slate-400 line-through block font-semibold">{pack.originalPrice} {t.currency}</span>
                            <span className="text-xl font-black text-[#1E3A34] leading-none block">{pack.price} {t.currency}</span>
                          </div>
                          <div className="bg-[#EAF0EC] px-3 py-1 rounded-xl text-center">
                            <span className="text-[8px] text-emerald-800 font-extrabold block uppercase tracking-wider leading-none">{t.saveText}</span>
                            <span className="text-xs font-extrabold text-[#1E3A34]">{pack.originalPrice - pack.price} {t.currency}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => {
                              setSelectedPackId(pack.id);
                              setActiveView('pack-detail');
                              window.scrollTo(0, 0);
                            }}
                            className="inline-flex items-center justify-center gap-1 py-2.5 px-3 bg-white hover:bg-slate-50 text-[#1E3A34] font-extrabold text-[11px] uppercase tracking-wider border border-emerald-100 rounded-lg cursor-pointer transition-all"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{t.backToList.split(' ').slice(-2).join(' ')}</span>
                          </button>
                          
                          <button
                            onClick={() => {
                              addToCart(pack.id);
                              setActiveView('checkout');
                              window.scrollTo(0, 0);
                            }}
                            className="inline-flex items-center justify-center gap-1 py-2.5 px-3 bg-[#1E3A34] hover:bg-[#25443B] text-white font-extrabold text-[11px] uppercase tracking-wider rounded-lg cursor-pointer transition-all"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{t.orderCod.split(' ').slice(0, 2).join(' ')}</span>
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-[#EADFC9]/30 rounded-3xl p-8 max-w-lg mx-auto">
                <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg font-bold text-[#1E3A34]">{isRtl ? 'عذراً، لم نجد أي باقات مطابقة لطلبك' : 'Aucun pack correspondant à votre recherche'}</h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold">{isRtl ? 'يرجى مراجعة كلمات البحث أو تجربة تصفية تصنيف مختلفة' : 'Veuillez vérifier l\'orthographe ou changer de filtre de catégorie.'}</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className="mt-5 px-5 py-2.5 bg-[#1E3A34] hover:bg-[#25443B] text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  {isRtl ? 'عرض كل الباقات مجدداً' : 'Réinitialiser les filtres'}
                </button>
              </div>
            )}

          </motion.div>
        ) : (
          
          /* ================= DETAIL VIEW (INDIVIDUAL PACK) ================= */
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-20"
          >
            {/* Top alert / warning bar reference to go back */}
            <div className="bg-[#FAF7F2] border-b border-emerald-100/50 py-3 text-center sm:px-6 flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 z-10">
              <button
                onClick={() => {
                  setActiveView('packs');
                  window.scrollTo(0, 0);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black border transition-colors cursor-pointer active:scale-95 bg-white hover:bg-slate-50 text-[#1C352D] border-[#EADFC9]/40`}
                style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
              >
                {isRtl ? <span>{t.backToList} ➔</span> : <span>← {t.backToList}</span>}
              </button>
              
              <span className="text-[10px] sm:text-xs font-extrabold text-[#1C352D] font-mono hidden md:inline">
                ✨ {currentPack.badge[pl]}
              </span>
            </div>

            {/* Luxury Header Banner */}
            <div className="bg-gradient-to-b from-white via-[#FAF7F2]/40 to-[#FAF7F2] border-b border-[#EADFC9]/30 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid md:grid-cols-12 gap-8 items-center" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
                
                {/* Left col: Image block */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl bg-white border border-[#EADFC9]/40 shadow-xl flex items-center justify-center p-0 overflow-hidden group">
                    <img
                      src={currentPack.image}
                      alt={currentPack.name[pl]}
                      className="w-full h-full object-cover filter drop-shadow-[0_15px_30px_rgba(28,53,45,0.12)] transform group-hover:scale-102 transition-transform duration-550"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-black border border-emerald-100">
                      -{Math.round(((currentPack.originalPrice - currentPack.price) / currentPack.originalPrice) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Right col: Name, description & top reassurance */}
                <div className="md:col-span-7 flex flex-col items-start gap-4" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-black border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                    5.0 / 5.0 (248 {isRtl ? 'تقييم حقيقي' : 'avis vérifiés'})
                  </span>

                  <h1 className="text-3xl sm:text-4.5xl font-black text-[#1C352D] leading-tight tracking-tight">
                    {currentPack.name[pl]}
                  </h1>

                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl">
                    {currentPack.desc[pl]}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-[#1C352D] text-xs font-bold">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-[9px]">✔</span>
                      <span>{isRtl ? 'منتجات أصلية 100%' : '100% Authentique DXN'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1C352D] text-xs font-bold">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-[9px]">✔</span>
                      <span>{isRtl ? 'الدفع نقداً عند الاستلام بالمنزل' : 'Paiement à la livraison'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1C352D] text-xs font-bold">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-[9px]">✔</span>
                      <span>{isRtl ? 'توصيل مجاني وسريع' : 'Livraison gratuite express'}</span>
                    </div>
                  </div>

                  {/* Immediate buttons bar */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                    <button
                      onClick={scrollToOrderForm}
                      className="py-4 px-6 bg-[#1C352D] hover:bg-[#25443B] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl cursor-pointer shadow-md border border-[#D4AF37]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>{t.orderCod}</span>
                    </button>

                    <button
                      onClick={() => {
                        addToCart(currentPack.id);
                        setActiveView('checkout');
                        window.scrollTo(0, 0);
                      }}
                      className="py-4 px-6 bg-white hover:bg-slate-50 text-[#1C352D] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl cursor-pointer border border-[#EADFC9] shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>{t.addToCart}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Split Page Layout: Details Left, Order Card Sticky Right */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              
              {/* Left Column: Product Info (Included list, benefits, who for) */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* 1. Product gallery - Included Products */}
                <div className="bg-white rounded-3xl border border-[#EADFC9]/45 p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C352D] flex items-center gap-2">
                    <span className="w-2.5 h-6 rounded-full bg-[#D4AF37]"></span>
                    {t.includingLabel}
                  </h2>

                  <div className="grid gap-6">
                    {currentPack.products.map((prod) => (
                      <div 
                        key={prod.id} 
                        className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFC9]/20 hover:border-[#D4AF37]/35 transition-all group"
                        style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                      >
                        <div className="w-24 h-24 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-2 shrink-0 overflow-hidden shadow-xs">
                          <img
                            src={prod.image}
                            alt={prod.name[pl]}
                            className="max-h-full max-w-full object-contain filter drop-shadow-2xs group-hover:scale-104 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="space-y-1 text-center sm:text-right flex-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                          <h3 className="text-base font-extrabold text-[#1C352D]">{prod.name[pl]}</h3>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-bold leading-relaxed">
                            {isRtl 
                              ? "مستحضر دي إكس إن عضوي طبيعي 100% معتمد عالمياً، تم إنتاجه وتعبئته بأرقى معايير الجودة لضمان أقصى عافية ونشاط طبيعي."
                              : "Produit authentique de qualité supérieure DXN, certifié biologique et naturel pour garantir une nutrition optimale et une assimilation cellulaire parfaite."
                            }
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Key benefits bulletpoints */}
                <div className="bg-white rounded-3xl border border-[#EADFC9]/45 p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C352D] flex items-center gap-2">
                    <span className="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                    {t.benefitsLabel}
                  </h2>

                  <div className="grid gap-4">
                    {currentPack.benefits[pl].map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/20 border border-emerald-100/30"
                        style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                      >
                        <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-650 leading-relaxed font-bold block" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Who is this pack for */}
                <div className="bg-white rounded-3xl border border-[#EADFC9]/45 p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C352D] flex items-center gap-2">
                    <span className="w-2.5 h-6 rounded-full bg-[#D4AF37]"></span>
                    {t.whoIsItFor}
                  </h2>

                  <div className="grid gap-3.5">
                    {currentPack.whoIsItFor[pl].map((target, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-650 font-bold leading-tight" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                          {target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Pricing, Savings Gauge & COD form */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* A. Sticky Pricing & Savings card */}
                <div className="bg-white rounded-3xl border border-[#EADFC9]/65 p-6 sm:p-8 space-y-6 shadow-md sticky top-28">
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-[#1C352D] pb-3 border-b border-slate-150 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-[#D4AF37]" />
                      {t.savingTitle}
                    </h3>

                    {/* Progress Bar visual indicator of discount */}
                    <div className="space-y-2 select-none">
                      <div className="flex justify-between text-xs font-black text-slate-500">
                        <span>{t.savingsDetails}</span>
                        <span className="text-emerald-700">-{Math.round(((currentPack.originalPrice - currentPack.price) / currentPack.originalPrice) * 100)}%</span>
                      </div>
                      <div className="h-4.5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/40">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-600 via-[#D4AF37] to-emerald-600 rounded-full"
                          style={{ width: `${100 - Math.round(((currentPack.originalPrice - currentPack.price) / currentPack.originalPrice) * 100)}%` }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-[#1C352D] leading-none uppercase tracking-wider">
                          {t.saveText}: {currentPack.originalPrice - currentPack.price} {t.currency}
                        </span>
                      </div>
                    </div>

                    {/* Price details line items */}
                    <div className="space-y-3 pt-2 text-xs font-bold text-slate-600">
                      <div className="flex justify-between">
                        <span>{t.individualValue}</span>
                        <span className="line-through text-slate-400">{currentPack.originalPrice} {t.currency}</span>
                      </div>
                      <div className="flex justify-between text-emerald-800 font-extrabold">
                        <span>{isRtl ? 'مصاريف الشحن والتوصيل' : 'Frais de livraison express'}</span>
                        <span className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider border border-emerald-100">{isRtl ? 'مجاني بالكامل' : 'GRATUIT'}</span>
                      </div>
                      <div className="h-px bg-slate-100 pt-1"></div>
                      <div className="flex justify-between items-end pt-2 text-[#1C352D]">
                        <span className="text-sm font-black">{t.packPrice}</span>
                        <span className="text-3xl font-black tracking-tight">{currentPack.price} <span className="text-base font-black">{t.currency}</span></span>
                      </div>
                    </div>
                  </div>

                  {/* B. Inline COD checkout form card */}
                  <div ref={orderFormRef} className="pt-4 border-t border-slate-100 space-y-4">
                    <div className="text-center bg-[#FAF7F2] p-4 rounded-2xl border border-[#EADFC9]/30 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
                      <Flame className="w-5 h-5 text-[#D4AF37] mx-auto mb-1.5 animate-bounce" />
                      <h4 className="text-sm font-black text-[#1C352D]">{t.directCheckoutTitle}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 font-bold max-w-xs mx-auto leading-normal">{t.directCheckoutSub}</p>
                    </div>

                    {formSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-150 rounded-2xl p-5 text-center space-y-3"
                      >
                        <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto animate-pulse" />
                        <h4 className="text-sm sm:text-base font-black text-emerald-900">{t.successTitle}</h4>
                        <p className="text-[11px] text-emerald-800 font-bold leading-relaxed">{t.successSub}</p>
                        
                        <a 
                          href={`https://wa.me/212648834419?text=${encodeURIComponent(
                            lang === 'ar' 
                              ? `طلب الباقة: ${currentPack.name.ar}\nالاسم: ${checkoutName}\nالهاتف: ${checkoutPhone}`
                              : `Commande du Pack: ${currentPack.name[pl]}\nNom: ${checkoutName}\nTéléphone: ${checkoutPhone}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex w-full items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md cursor-pointer"
                        >
                          <Phone className="w-4.5 h-4.5 fill-white text-white" />
                          <span>{t.redirectCta}</span>
                        </a>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleDirectCodSubmit} className="space-y-4">
                        
                        {/* Name Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-extrabold uppercase text-slate-500 block">{t.fullName} <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder={isRtl ? 'مثال: فاطمة الزهراء' : 'Ex: Fatima Zahra'}
                              value={checkoutName}
                              onChange={(e) => setCheckoutName(e.target.value)}
                              className="w-full py-3 px-4 bg-[#FAF7F2] border border-[#EADFC9]/30 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#D4AF37] text-[#1C352D]"
                            />
                          </div>
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-extrabold uppercase text-slate-500 block">{t.phone} <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <input
                              type="tel"
                              required
                              placeholder={isRtl ? 'مثال: 0612345678' : 'Ex: 0612345678'}
                              value={checkoutPhone}
                              onChange={(e) => setCheckoutPhone(e.target.value)}
                              className={`w-full py-3 px-4 bg-[#FAF7F2] border rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#D4AF37] text-[#1C352D] ${
                                checkoutPhone && !isValidMoroccanPhone(checkoutPhone)
                                  ? 'border-rose-500 focus:border-rose-500'
                                  : 'border-[#EADFC9]/30'
                              }`}
                            />
                          </div>
                          {checkoutPhone && !isValidMoroccanPhone(checkoutPhone) && (
                            <p className="text-rose-500 text-[10px] sm:text-xs font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                              المرجو إدخال رقم هاتف مغربي صحيح.
                            </p>
                          )}
                        </div>

                        {/* City Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-extrabold uppercase text-slate-500 block">{t.city} <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder={isRtl ? 'مثال: الدار البيضاء، مراكش، الرباط...' : 'Ex: Casablanca, Marrakech...'}
                              value={checkoutCity}
                              onChange={(e) => setCheckoutCity(e.target.value)}
                              className="w-full py-3 px-4 bg-[#FAF7F2] border border-[#EADFC9]/30 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#D4AF37] text-[#1C352D]"
                            />
                          </div>
                        </div>

                        {/* Address Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-extrabold uppercase text-slate-500 block">{t.address}</label>
                          <div className="relative">
                            <textarea
                              rows={2}
                              placeholder={isRtl ? 'مثال: حي الرياض، زنقة 5، رقم المنزل 12' : 'Ex: Quartier Ryad, Rue 5...'}
                              value={checkoutAddress}
                              onChange={(e) => setCheckoutAddress(e.target.value)}
                              className="w-full py-3 px-4 bg-[#FAF7F2] border border-[#EADFC9]/30 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#D4AF37] text-[#1C352D] resize-none"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={!checkoutName || !checkoutPhone || !checkoutCity || !isValidMoroccanPhone(checkoutPhone)}
                          className="w-full py-4 px-4 bg-[#1C352D] hover:bg-[#25443B] disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-97 cursor-pointer border border-[#D4AF37]/20"
                        >
                          {t.submitOrder}
                        </button>

                      </form>
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* Recommended Usage Panel */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              <div className="bg-white rounded-3xl border border-[#EADFC9]/45 p-6 sm:p-8 space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C352D] flex items-center gap-2 select-none">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  {t.recommendedUsage}
                </h2>

                <div className="grid sm:grid-cols-3 gap-6 pt-2">
                  {currentPack.usage[pl].map((instruction, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADFC9]/20 flex flex-col justify-between"
                      style={{ textAlign: isRtl ? 'right' : 'left' }}
                    >
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-black">✦ {isRtl ? 'خطوة' : 'Étape'} {idx + 1}</span>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-bold">
                          {instruction}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              <div className="bg-white rounded-3xl border border-[#EADFC9]/45 p-6 sm:p-8 space-y-8">
                <div className="text-center max-w-lg mx-auto">
                  <h2 className="text-xl sm:text-2.5xl font-black text-[#1C352D]">
                    {t.faqTitle}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 font-bold">
                    {isRtl ? 'كل ما تحتاج معرفته حول فعالية وطريقة وضمان استخدام الباقة الصحية الفاخرة' : 'Tout savoir sur l\'efficacité, l\'utilisation et la sécurité de votre pack.'}
                  </p>
                </div>

                <FAQAccordion lang={lang} customItems={formattedFaqs} />
              </div>
            </div>

            {/* Related Wellness Packs Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              <div className="text-center max-w-xl mx-auto mb-10 select-none">
                <h2 className="text-xl sm:text-2.5xl font-black text-[#1C352D] tracking-tight">{t.relatedPacks}</h2>
                <p className="text-[11px] text-slate-400 mt-1 font-bold leading-normal">{t.relatedPacksSub}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPacks.map((pack) => {
                  const rSavings = pack.originalPrice - pack.price;
                  return (
                    <div 
                      key={pack.id} 
                      className="bg-white rounded-2xl border border-[#EADFC9]/40 p-5 space-y-4 hover:shadow-md hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between"
                      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                    >
                      <div className="space-y-3">
                        <div className="h-40 bg-[#FAF7F2] rounded-xl flex items-center justify-center p-0 overflow-hidden">
                          <img 
                            src={pack.image} 
                            alt={pack.name[pl]} 
                            className="w-full h-full object-cover filter drop-shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h3 className="text-base font-extrabold text-[#1C352D] tracking-tight hover:text-[#D4AF37] cursor-pointer" onClick={() => { setSelectedPackId(pack.id); window.scrollTo(0,0); }}>
                          {pack.name[pl]}
                        </h3>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-semibold">
                          {pack.desc[pl]}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-base font-black text-[#1C352D]">{pack.price} {t.currency}</span>
                        <button
                          onClick={() => {
                            setSelectedPackId(pack.id);
                            window.scrollTo(0, 0);
                          }}
                          className="px-3 py-1.5 bg-[#1C352D] hover:bg-[#25443B] text-white font-black text-[9px] uppercase tracking-wider rounded-lg cursor-pointer"
                        >
                          {t.backToList.split(' ').slice(-1)[0]}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
