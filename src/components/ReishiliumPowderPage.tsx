import { useState, FormEvent } from 'react';
import { trackPurchase, trackInitiateCheckout } from '../utils/metaPixel';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Truck, 
  HeartHandshake, 
  Star, 
  ChevronDown, 
  ShoppingBag, 
  Phone, 
  Package, 
  HelpCircle, 
  Award,
  Leaf,
  Flower2,
  Users,
  BadgeAlert,
  ArrowRight,
  Clock,
  Instagram,
  Facebook,
  Globe,
  Plus,
  Compass,
  Smile,
  Lock,
  Gift
} from 'lucide-react';
import { 
  reishiliumLandingCopy, 
  reishiliumBenefits, 
  reishiliumFeatures, 
  reishiliumSteps, 
  reishiliumReviews, 
  reishiliumFAQs, 
  reishiliumPacks,
  whyChooseReishiliumList
} from '../data/reishiliumData';
import FAQAccordion from './FAQAccordion';

interface ReishiliumPowderPageProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  t: any;
  WHATSAPP_PHONE: string;
  setActiveView?: (view: string) => void;
}

export default function ReishiliumPowderPage({ lang, isRtl, t, WHATSAPP_PHONE, setActiveView }: ReishiliumPowderPageProps) {
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const copy = reishiliumLandingCopy[pl];
  const benefits = reishiliumBenefits[pl];
  const features = reishiliumFeatures[pl];
  const steps = reishiliumSteps[pl];
  const faqs = reishiliumFAQs[pl];
  const packs = reishiliumPacks[pl];
  const whyChooseItems = whyChooseReishiliumList[pl];

  // Size / Bottle variant state (boita srira & boita kbira)
  const [reishiVariant, setReishiVariant] = useState<'small' | 'large'>('small');

  // Verified High-Quality direct image links from ImgBB
  const mainProductImg = reishiVariant === 'small' ? "https://i.ibb.co/LhsPdhTv/image.png" : "https://i.ibb.co/PZMWLpRv/image.png";
  const secondaryImg1 = "https://i.ibb.co/8Ldhf3Yy/image.png";
  const secondaryImg2 = "https://i.ibb.co/F4ZCjQNR/image.png";

  // Gallery active index state
  const [activeGalleryImg, setActiveGalleryImg] = useState(0);
  const galleryImages = reishiVariant === 'small' 
    ? [
        { url: "https://i.ibb.co/LhsPdhTv/image.png", caption: isRtl ? "مسحوق ريشيليوم 22 غرام الأصلي" : "Poudre Reishilium 22g Authentique" },
        { url: "https://i.ibb.co/8Ldhf3Yy/image.png", caption: isRtl ? "جودة نقية وطاقة متكاملة" : "Qualité Pure & Énergie Intégrale" },
        { url: "https://i.ibb.co/F4ZCjQNR/image.png", caption: isRtl ? "طريقة تحضير سهلة للريشيليوم" : "Dissolution Pratique de Reishilium" }
      ]
    : [
        { url: "https://i.ibb.co/PZMWLpRv/image.png", caption: isRtl ? "مسحوق ريشيليوم 70 غرام الأصلي" : "Poudre Reishilium 70g Authentique" },
        { url: "https://i.ibb.co/8Ldhf3Yy/image.png", caption: isRtl ? "جودة نقية وطاقة متكاملة" : "Qualité Pure & Énergie Intégrale" }
      ];

  // Before/After interactive state
  const [activeBeforeState, setActiveBeforeState] = useState<'morning' | 'evening'>('morning');

  // Checkout Form states
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  // Luxury companion cross-sells
  const [addSpirulina, setAddSpirulina] = useState(false);
  const [addCoffee, setAddCoffee] = useState(false);
  const [addSoap, setAddSoap] = useState(false);

  // Flow states
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  const getBasePrice = () => {
    const unitPrice = reishiVariant === 'small' ? 401 : 1226;
    return unitPrice * quantity;
  };

  const calculateTotal = () => {
    let price = getBasePrice();
    if (addSpirulina) price += 365;
    if (addCoffee) price += 310;
    if (addSoap) price += 73;
    return price;
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(quantity, calculateTotal());
    document.getElementById('reishilium-checkout-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isValidMoroccanPhone = (num: string): boolean => {
    const cleaned = num.trim().replace(/[\s-]/g, '');
    const moroccoRegex = /^(06|07)\d{8}$|^\+212(6|7)\d{8}$/;
    return moroccoRegex.test(cleaned);
  };

  const handleOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(isRtl ? "يرجى تعبئة جميع المعلومات المطلوبة المحددة بالنجمة." : "Veuillez remplir toutes les informations requises marquées d'une étoile.");
      return;
    }

    if (!isValidMoroccanPhone(customerPhone)) {
      setFormError(isRtl ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateTotal();
    const unitPrice = reishiVariant === 'small' ? 401 : 1226;
    const variantName = reishiVariant === 'small' 
      ? (isRtl ? 'مسحوق ريشيليوم (22 غرام)' : 'Poudre Reishilium (22g)') 
      : (isRtl ? 'مسحوق ريشيليوم (70 غرام)' : 'Poudre Reishilium (70g)');

    let upsellsText = '';
    if (addSpirulina) upsellsText += `• ${isRtl ? 'أقراص سبيرولينا العضوية (+365 درهم)' : 'Tablettes de Spiruline Bio (+365 DH)'}\n`;
    if (addCoffee) upsellsText += `• ${isRtl ? 'قهوة لينجزي السوداء 2 في 1 (+310 درهم)' : 'Café Noir Gano 2-en-1 (+310 DH)'}\n`;
    if (addSoap) upsellsText += `• ${isRtl ? 'صابون جانوزي الفاخر بالريشي (+73 درهم)' : 'Savon Premium Ganozhi (+73 DH)'}\n`;

    const freeShipping = quantity > 1;
    const finalBill = totalPrice + (quantity === 1 ? 20 : 0);

    const message = 
`👑 ${isRtl ? 'طلب شراء جديد: ريشيليوم بودرة الفاخر' : 'NOUVELLE COMMANDE: REISHILIUM POWDER DXN'} 👑

👤 ${isRtl ? 'اسم الزبون الكريم' : 'Nom du Client'}: ${customerName}
📍 ${isRtl ? 'عنوان الشحن والتوصيل' : 'Adresse de Livraison'}: ${customerAddress}
📞 ${isRtl ? 'رقم هاتف الواتساب' : 'Téléphone / WhatsApp'}: ${customerPhone}

----------------------------------------
📦 ${isRtl ? 'الكمية المطلوبة لريشيليوم بودرة' : 'Quantité de Reishilium Powder'}:
• ${quantity} × ${isRtl ? 'ريشيليوم بودرة الفاخر' : 'Reishilium Powder DXN'} (${variantName}) [${unitPrice * quantity} DH]

➕ ${isRtl ? 'المنتجات الإضافية لروتينك' : 'Compagnons de Bien-être'} (Cross-sells):
${upsellsText || (isRtl ? '• لا توجد إضافات' : '• Aucun add-on')}\n
🎁 ${isRtl ? 'امتيازات وخدمات الباقة' : 'Avantages Spéciaux'}:
• ${isRtl ? 'توصيل مغلف وآمن' : 'Livraison'}: ${freeShipping ? (isRtl ? 'مجاني وسريع بالكامل 🚚' : 'توصيل محلي اقتصادي (+20 درهم)') : (isRtl ? 'توصيل محلي اقتصادي (+20 درهم)' : 'Livraison Standard (+20 DH)')}
• ${isRtl ? 'الإرشاد والمتابعة الصحية' : 'Suivi personnalisé'}: ${isRtl ? 'متابعة ورعاية مخصصة من سميرة ناتورال' : 'Conseils et accompagnement personnalisé par Samira'}
----------------------------------------
💵 ${isRtl ? 'المجموع الإجمالي للدفع' : 'TOTAL À PAYER'}: ${finalBill} DH

🚚 ${isRtl ? 'الدفع نقداً عند الاستلام بعد فحص ومعاينة المنتج ودقته.' : 'Paiement en espèces à la livraison après contrôle.'}`;

    setTimeout(() => {
      setIsOrdering(false);
      setOrderCompleted(true);
      trackPurchase(finalBill, 'MAD', [reishiVariant === 'small' ? 'reishilium-22g' : 'reishilium-70g']);
      const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
      try {
        const newWindow = window.open(url, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = url;
        }
      } catch (err) {
        console.error("Popup blocked, trying direct redirect:", err);
        window.location.href = url;
      }
    }, 1200);
  };

  return (
    <div id="dxn-reishilium-landing" className={`min-h-screen bg-[#FAF9F6] text-stone-800 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F2C] via-[#0C2E21] to-[#06140E] text-white min-h-[95vh] flex items-center pt-28 pb-20 sm:py-36 border-b-2 border-[#D4A64A]/30">
        
        {/* Luxury Atmospheric Background Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0C2E21]/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#D4A64A]/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#0C2E21]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#D4A64A]/10 blur-3xl pointer-events-none"></div>

        {/* Delicate floating leaves for organic aesthetic */}
        <div className="absolute top-24 right-[12%] w-10 h-10 bg-emerald-400/5 rounded-full border border-emerald-500/15 flex items-center justify-center animate-bounce duration-[8000ms] hidden lg:flex">
          <Leaf className="w-5 h-5 text-emerald-300 opacity-20" />
        </div>
        <div className="absolute bottom-32 left-[15%] w-12 h-12 bg-[#D4A64A]/5 rounded-full border border-[#D4A64A]/15 flex items-center justify-center animate-pulse hidden lg:flex">
          <Flower2 className="w-5 h-5 text-[#D4A64A] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Text and Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 lg:space-y-8"
            >
              {/* Premium Golden Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-[#D4A64A]/30 px-4.5 py-2 rounded-full shadow-lg backdrop-blur-md">
                <span className="text-[#D4A64A] text-xs sm:text-sm animate-pulse">✦</span>
                <span className="text-emerald-100 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                  {copy.heroBadge}
                </span>
              </div>

              {/* Outstanding Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-white leading-tight md:leading-[1.12] tracking-tight">
                {isRtl ? (
                  <>
                    اكتشف القوة الطبيعية مع <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A]">DXN Reishilium Powder</span>
                  </>
                ) : (
                  <>
                    Discover the Natural Power of <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A]">DXN Reishilium Powder</span>
                  </>
                )}
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal max-w-2xl">
                {copy.heroSub}
              </p>

              {/* Conversion Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  isRtl ? "🏆 تركيبة DXN المعتمدة لأرقى معايير النقاء" : "🏆 Certified original premium DXN formula",
                  isRtl ? "🌿 دعم شامل للمناعة والنشاط الفكري والجسدي" : "🌿 Complete daily wellness & energy support",
                  isRtl ? "🥄 قوام مسحوق فاخر سهل الانحلال والخلط" : "🥄 Ultra-fine powder format, easy to blend",
                  isRtl ? "🚚 شحن سريع مجاني للمغرب مع الدفع عند الاستلام" : "🚚 Fast Morocco shipping with Cash on Delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#081F2C]/40 border border-white/5 p-3 rounded-xl hover:border-[#D4A64A]/20 transition-all duration-300">
                    <div className="p-1 rounded-md bg-emerald-950 text-[#D4A64A]">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Actions buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={scrollToCheckout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A] text-stone-900 font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all py-4.5 px-9 rounded-full shadow-xl shadow-[#D4A64A]/10 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{copy.heroCTAOrder}</span>
                </button>
                <a
                  href="#reishilium-about-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest py-4.5 px-8 rounded-full transition-all cursor-pointer"
                >
                  <span>{copy.heroCTALearn}</span>
                </a>
              </div>

            </motion.div>

            {/* Right Side: Beautiful Interactive Hero Product Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              {/* Spinning luxury frame */}
              <div className="absolute inset-0 border border-[#D4A64A]/10 rounded-full animate-spin duration-[60s] pointer-events-none scale-105"></div>
              
              {/* Highlight background glow */}
              <div className="absolute w-72 h-72 rounded-full bg-[#D4A64A]/10 blur-3xl pointer-events-none"></div>

              {/* Main premium visual container */}
              <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-[#0C2E21]/80 to-[#081F2C]/80 border-2 border-[#D4A64A]/45 p-6 flex items-center justify-center shadow-2xl shadow-[#D4A64A]/5">
                <img
                  src={mainProductImg}
                  alt="DXN Reishilium Powder"
                  className="w-5/6 h-5/6 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded luxury overlay tags */}
                <span className="absolute bottom-6 right-6 bg-[#D4A64A] text-stone-900 font-mono text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                  100% ORGANIC
                </span>
                
                <div className="absolute top-8 left-8 p-2 rounded-full bg-[#081F2C]/90 border border-[#D4A64A]/30 text-[#D4A64A] shadow-md animate-pulse">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Cash on Delivery label overlay */}
              <div className="mt-6 flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full select-none backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A64A] animate-ping"></span>
                <span className="text-xs text-stone-300 font-bold uppercase tracking-wider font-mono">
                  {isRtl ? 'الدفع عند الاستلام بالمغرب 🇲🇦' : 'Cash on Delivery in Morocco 🇲🇦'}
                </span>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST QUICK BAR */}
      <section className="bg-gradient-to-r from-[#0C2E21] to-[#081F2C] border-b border-[#D4A64A]/25 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-white/90">
            {[
              { icon: Award, label: isRtl ? 'جودة فاخرة ومضمونة' : 'Premium Quality', sub: 'DXN Original' },
              { icon: ShieldCheck, label: isRtl ? 'أصلي 100٪ ومضمون' : '100% Original DXN', sub: 'Verified Seal' },
              { icon: Truck, label: isRtl ? 'توصيل سريع مجاني' : 'Fast Free Delivery', sub: 'Morocco Wide' },
              { icon: Package, label: isRtl ? 'الدفع عند الاستلام' : 'Cash On Delivery', sub: 'Inspect First' },
              { icon: HeartHandshake, label: isRtl ? 'دعم وإرشاد مخصص' : 'Personal Guidance', sub: 'By Samira' },
              { icon: Clock, label: isRtl ? 'توصيل خلال 24/48 ساعة' : '24/48h Dispatch', sub: 'Fast Route' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2 border-r border-white/5 last:border-0">
                <item.icon className="w-5 h-5 text-[#D4A64A] mb-1.5" />
                <span className="text-[11px] sm:text-xs font-black tracking-tight leading-none text-white">{item.label}</span>
                <span className="text-[9px] font-mono text-[#D4A64A]/70 mt-1 uppercase tracking-widest">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM BENEFITS SECTION */}
      <section id="reishilium-benefits-section" className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 border border-[#D4A64A]/40 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'العافية الطبيعية' : 'Pure Nutrition'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4 leading-tight">
              {copy.benefitsHeading}
            </h2>
            <div className="w-16 h-1 bg-[#D4A64A] mx-auto mt-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-stone-500 mt-3 max-w-xl mx-auto">
              {copy.benefitsSub}
            </p>
          </div>

          {/* Benefits Grid (Premium animated cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(12,46,33,0.05)' }}
                className="bg-white border border-stone-200/60 p-8 rounded-2xl relative overflow-hidden group transition-all duration-300"
              >
                {/* Hover border glow accent */}
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#D4A64A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Circular indicator */}
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#0C2E21] flex items-center justify-center font-mono font-black text-sm mb-6 group-hover:bg-[#0C2E21] group-hover:text-white transition-colors duration-300">
                  {idx + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0C2E21] mb-3 leading-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ABOUT THE PRODUCT SECTION (LUXURY EDITORIAL) */}
      <section id="reishilium-about-section" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#081F2C] to-[#0C2E21] text-white overflow-hidden border-t border-b border-[#D4A64A]/20">
        
        {/* Soft background visual leaf element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#D4A64A]/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Premium lifestyle/botanical photo */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden border border-[#D4A64A]/30 group shadow-2xl"
              >
                <img
                  src={secondaryImg1}
                  alt="Natural Reishilium Extract"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081F2C]/90 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[#D4A64A] text-xs font-mono font-extrabold uppercase tracking-widest">
                      DXN Premium Sourcing
                    </span>
                    <p className="text-sm font-bold text-white mt-1">
                      {isRtl ? 'حقول عضوية منتقاة لعافيتك' : 'Pristine fields cultivated for your longevity'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Luxurious text description */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 space-y-6 lg:space-y-8 select-none"
            >
              <span className="text-xs font-extrabold text-[#D4A64A] uppercase tracking-widest font-mono">
                {copy.overviewTitle}
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {copy.overviewHeading}
              </h2>

              <div className="w-12 h-1 bg-[#D4A64A] rounded-full"></div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {copy.overviewParagraph1}
              </p>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {copy.overviewParagraph2}
              </p>

              {/* Verified badge checklist */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {[
                  isRtl ? '✓ خلو من المضافات الكيماوية' : '✓ Zero chemical binders',
                  isRtl ? '✓ معايير جودة صارمة' : '✓ Absolute biological purity',
                  isRtl ? '✓ تركيبة طبيعيّة نشطة' : '✓ Dynamic natural structure',
                  isRtl ? '✓ تغليف محكم وصحي' : '✓ Hermetic oxidation lock'
                ].map((item, idx) => (
                  <span key={idx} className="text-xs sm:text-sm text-[#D4A64A] font-bold">
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE/AFTER LIFESTYLE ADVANTAGE COMPARISON */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'التأثير اليومي لروتينك' : 'Daily Wellness Impact'} ✦
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-stone-900 mt-4">
              {isRtl ? 'توازن طاقتك وحيويتك على مدار اليوم' : 'Balanced Energy & Resilience All Day'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {isRtl 
                ? 'شاهد كيف يمكن لريشيليوم بودرة تعديل توازنك اليومي بلطف مقارنة بالإرهاق المعتاد.' 
                : 'Experience the subtle restorative difference in your daily physical & mental rhythm.'}
            </p>
          </div>

          {/* Interactive Toggle tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {[
              { id: 'morning', label: isRtl ? 'الصباح وبداية اليوم ☀️' : 'Morning Energy ☀️' },
              { id: 'evening', label: isRtl ? 'المساء والهدوء 🌙' : 'Evening Recovery 🌙' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveBeforeState(tab.id as 'morning' | 'evening')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeBeforeState === tab.id
                    ? 'bg-[#0C2E21] text-white shadow-md'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* 1. Before Card (Common State) */}
            <motion.div
              key={`before-${activeBeforeState}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-stone-50 border border-stone-200 p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-rose-500 font-mono">
                  {isRtl ? 'بدون روتين ريشيليوم' : 'Without Reishilium'}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-stone-800 mt-1 mb-4">
                  {activeBeforeState === 'morning'
                    ? (isRtl ? 'كسل صباحي وصعوبة في التركيز' : 'Morning fatigue & brain fog')
                    : (isRtl ? 'إجهاد متراكم وصعوبة الاسترخاء' : 'Heavy evening burnout & stress')}
                </h4>
                <ul className="space-y-3">
                  {[
                    activeBeforeState === 'morning'
                      ? (isRtl ? '• الشعور بالخمول بعد الاستيقاظ مباشرة' : '• Waking up feeling unrefreshed and tired')
                      : (isRtl ? '• تعب العضلات وصداع الإرهاق اليومي' : '• Accumulated tension in neck and back muscles'),
                    activeBeforeState === 'morning'
                      ? (isRtl ? '• الاعتماد المفرط على كافيين المنبهات المجهدة' : '• Relying heavily on coffee spikes to function')
                      : (isRtl ? '• قلق فكري وصعوبة النوم بعمق' : '• Mental chatter preventing deep peaceful sleep')
                  ].map((bullet, i) => (
                    <li key={i} className="text-xs sm:text-sm text-stone-600 font-medium">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-400 font-mono">
                {isRtl ? 'إرهاق مألوف يؤثر على الإنتاجية' : 'Common daily strain affecting performance'}
              </div>
            </motion.div>

            {/* 2. After Card (Reishilium State) */}
            <motion.div
              key={`after-${activeBeforeState}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-emerald-50/50 border-2 border-[#D4A64A]/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Gold light corner effect */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#D4A64A]/10 rounded-full blur-xl"></div>
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#0C2E21] font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D4A64A]" />
                    <span>{isRtl ? 'مع ملعقة ريشيليوم صباحاً' : 'With Reishilium Daily'}</span>
                  </span>
                  <span className="px-2 py-0.5 bg-[#D4A64A] text-stone-900 font-black text-[8px] uppercase tracking-widest rounded">
                    ULTIMATE
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#0C2E21] mt-1 mb-4">
                  {activeBeforeState === 'morning'
                    ? (isRtl ? 'نشاط طبيعي متزن وتركيز صافٍ' : 'Calm sustained energy & mental clarity')
                    : (isRtl ? 'استرخاء عضلي ونوم مريح وعميق' : 'Restored physical balance & calm muscles')}
                </h4>
                <ul className="space-y-3">
                  {[
                    activeBeforeState === 'morning'
                      ? (isRtl ? '• حيوية هادئة تمتد لساعات دون خمول' : '• Natural, sustained stamina without caffeine crashes')
                      : (isRtl ? '• استرخاء طبيعي يخفف حدة التوتر العصبي' : '• Adaptogenic support to soothe stress receptors'),
                    activeBeforeState === 'morning'
                      ? (isRtl ? '• صفاء ذهني مميز لمواجهة التحديات' : '• Superb mental focus and cellular oxygenation')
                      : (isRtl ? '• تهيئة الجسم لنوم متوازن لتجديد الخلايا' : '• Promotes healthy, restorative, deep sleep cycle')
                  ].map((bullet, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#0C2E21] font-bold flex items-center gap-2">
                      <Check className="w-4.5 h-4.5 text-[#D4A64A] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-100 text-[11px] text-[#0C2E21] font-black font-mono">
                {isRtl ? 'عافية حقيقية لنمط حياة أكثر راحة' : 'Authentic wellness for a pristine lifestyle'}
              </div>
            </motion.div>

          </div>
          
          {/* Conversion CTA call */}
          <div className="mt-10">
            <button
              onClick={scrollToCheckout}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0C2E21] to-[#081F2C] text-white font-extrabold text-xs uppercase tracking-widest py-3.5 px-8 rounded-full hover:brightness-110 shadow-lg cursor-pointer"
            >
              <span>{isRtl ? 'ابدأ روتين ريشيليوم اليوم' : 'Start your Reishilium routine'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. KEY FEATURES SECTION */}
      <section id="reishilium-features-section" className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 border border-[#D4A64A]/40 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'مميزات التركيبة' : 'Key Specifications'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4">
              {copy.featuresHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-3 max-w-xl mx-auto">
              {copy.featuresSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              // Custom icon maps
              const iconMap = [Award, Package, Compass, ShieldCheck, HeartHandshake, Star];
              const IconComp = iconMap[idx] || Award;
              
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#D4A64A] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0C2E21] flex items-center justify-center mb-5 border border-emerald-100">
                    <IconComp className="w-5 h-5 text-[#0C2E21]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-stone-900 mb-2 font-sans leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. HOW TO USE SECTION */}
      <section id="reishilium-how-to-use" className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 border border-[#D4A64A]/40 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'دليل التحضير' : 'Instructions Guide'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4">
              {copy.howToUseHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-3 max-w-xl mx-auto">
              {copy.howToUseSub}
            </p>
          </div>

          {/* Elegant Horizontal steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 relative">
            
            {/* Horizontal progress line */}
            <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-stone-200 hidden md:block pointer-events-none -z-10"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                
                {/* Number badge */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#D4A64A] text-[#0C2E21] flex items-center justify-center font-mono font-black text-lg shadow-md hover:bg-[#0C2E21] hover:text-white transition-colors duration-300">
                  0{idx + 1}
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 8. WHY CHOOSE DXN SECTION */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#081F2C] to-[#0A2218] text-white border-t border-[#D4A64A]/25 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4A64A]/5 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Title and badge */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#D4A64A] uppercase tracking-widest font-mono">
                ✦ {isRtl ? 'الريادة العالمية' : 'Global Quality Leader'} ✦
              </span>
              <h2 className="text-2xl sm:text-4.5xl font-extrabold tracking-tight leading-tight">
                {copy.whyChooseHeading}
              </h2>
              <div className="w-16 h-1 bg-[#D4A64A] rounded-full"></div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {copy.whyChooseSub}
              </p>
            </div>

            {/* Right Column: Key facts checklist */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4.5 bg-white/5 border border-white/5 rounded-2xl hover:border-[#D4A64A]/35 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#D4A64A] text-stone-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-200 leading-snug font-medium select-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 9. PREMIUM PRODUCT GALLERY WITH EXQUISITE DETAIL */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'معرض الصور الفاخر' : 'Premium Gallery'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4">
              {isRtl ? 'معرض ريشيليوم دي إكس إن الأصلي' : 'Authentic DXN Reishilium Gallery'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {isRtl ? 'تصفح صور المنتج الرسمية عالية الدقة والوضوح لمعاينته بدقة.' : 'Examine the detailed product attributes and luxury biological sachet features.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Main large visual frame (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-stone-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-[#0C2E21] text-white font-mono text-[9px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                {(galleryImages[activeGalleryImg] || galleryImages[0]).caption}
              </div>

              <div className="flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeGalleryImg}
                    src={(galleryImages[activeGalleryImg] || galleryImages[0]).url}
                    alt="DXN Reishilium Detail"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className="max-h-[380px] object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnails list selector (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryImg(idx)}
                  className={`w-full flex items-center gap-4 p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                    activeGalleryImg === idx
                      ? 'border-[#D4A64A] bg-emerald-50/20 shadow-md'
                      : 'border-stone-200 hover:border-stone-300 bg-[#FAF9F6]'
                  }`}
                  style={{ textAlign: isRtl ? 'right' : 'left', direction: isRtl ? 'rtl' : 'ltr' }}
                >
                  <div className="w-20 h-20 bg-white border border-stone-200/60 rounded-xl p-2 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={img.url}
                      alt="Thumbnail"
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-[#D4A64A]">
                      VIEW DETAIL 0{idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                      {img.caption}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-stone-500 font-normal leading-relaxed">
                      {idx === 0 
                        ? (isRtl ? 'العلبة الرسمية المحكمة الغلق' : 'Official hermetic seal bottle packaging')
                        : idx === 1
                        ? (isRtl ? 'مسحوق نباتي نقي مائة بالمائة' : '100% natural pure biological powder texture')
                        : (isRtl ? 'تذوب وتنحل بسهولة تامة بالسوائل' : 'Easily dissolves and blends in morning water')}
                    </p>
                  </div>
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 10. SAVINGS PACKAGES & DIRECT CHECKOUT FORM (CONVERSION CORE) */}
      <section id="reishilium-checkout-section" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-[#EAE1D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-white border border-[#D4A64A]/50 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'طلب الشراء والتوصيل' : 'Checkout & Order Form'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4 leading-tight">
              {copy.packagesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {copy.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Discount packages choices (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#0C2E21] select-none flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4A64A]" />
                <span>{isRtl ? '1. اختر حجم العبوة (22 غرام / 70 غرام)' : '1. Choose Powder Format (22g / 70g)'}</span>
              </h3>

              <div className="grid grid-cols-2 gap-3.5 select-none">
                <button
                  type="button"
                  onClick={() => setReishiVariant('small')}
                  className={`p-4 rounded-2xl border text-center flex flex-col justify-center items-center transition-all duration-300 cursor-pointer ${
                    reishiVariant === 'small'
                      ? 'border-[#0C2E21] bg-[#0C2E21]/5 shadow-md scale-102 ring-1 ring-[#0C2E21]'
                      : 'border-stone-200 bg-white text-stone-500 hover:bg-stone-50'
                  }`}
                >
                  <span className={`text-xs sm:text-sm font-black ${reishiVariant === 'small' ? 'text-[#0C2E21]' : 'text-stone-700'}`}>
                    {isRtl ? 'عبوة 22 غرام' : 'Format 22g'}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1">
                    {isRtl ? 'مسحوق ريشيليوم 22g' : 'Reishilium Powder 22g'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#D4A64A] mt-2 font-mono">
                    401 DH
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setReishiVariant('large')}
                  className={`p-4 rounded-2xl border text-center flex flex-col justify-center items-center transition-all duration-300 cursor-pointer ${
                    reishiVariant === 'large'
                      ? 'border-[#0C2E21] bg-[#0C2E21]/5 shadow-md scale-102 ring-1 ring-[#0C2E21]'
                      : 'border-stone-200 bg-white text-stone-500 hover:bg-stone-50'
                  }`}
                >
                  <span className={`text-xs sm:text-sm font-black ${reishiVariant === 'large' ? 'text-[#0C2E21]' : 'text-stone-700'}`}>
                    {isRtl ? 'عبوة 70 غرام' : 'Format 70g'}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1">
                    {isRtl ? 'مسحوق ريشيليوم 70g' : 'Reishilium Powder 70g'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#D4A64A] mt-2 font-mono">
                    1226 DH
                  </span>
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0C2E21] select-none flex items-center gap-2 pt-2">
                <Gift className="w-5 h-5 text-[#D4A64A]" />
                <span>{isRtl ? '2. اختر كمية العبوات المطلوبة' : '2. Choose Bottles Quantity'}</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4.5 rounded-3xl border border-stone-200 shadow-[0_2px_8px_rgba(0,0,0,0.01)] w-full sm:w-auto inline-flex justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-[#D4A64A] active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    -
                  </button>
                  <span className="text-xl font-black text-[#0C2E21] min-w-[3rem] text-center font-mono select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.min(99, prev + 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-[#D4A64A] active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Morocco delivery guarantee notice */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-[#D4A64A]/30 flex items-start gap-3.5 select-none text-[#0C2E21]">
                <Truck className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs leading-relaxed">
                  <p className="font-bold">{isRtl ? 'تغطية شاملة لجميع مدن المغرب' : 'Morocco-wide priority delivery'}</p>
                  <p className="font-normal text-stone-600">
                    {isRtl 
                      ? 'نشحن لجميع مدن المغرب (الدار البيضاء، الرباط، فاس، مراكش، طنجة، أكادير، وجدة، العيون...) والتوصيل حتى باب المنزل خلال 24 إلى 48 ساعة.'
                      : 'We safely deliver to your doorstep across Casablanca, Rabat, Fes, Marrakech, Tangier, and all other Moroccan regions in 24 to 48 hours.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Checkout form & total calculation (7 cols) */}
            <div className="lg:col-span-7 bg-[#081F2C] text-white border border-[#D4A64A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle inner decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A64A]/5 rounded-full blur-2xl"></div>

              {orderCompleted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-950 border border-[#D4A64A] text-[#D4A64A] flex items-center justify-center mx-auto shadow-lg animate-pulse">
                    <Check className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#D4A64A]">
                      {isRtl ? 'تم تجهيز طلبك لالة بنجاح!' : 'Order Form Prepared Successfully!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md mx-auto">
                      {isRtl 
                        ? 'جاري توجيهك الآن تلقائياً إلى واتساب مع المنسقة سميرة لتأكيد عنوان الشحن وإرسال طردك فوراً.'
                        : 'Redirecting you directly to WhatsApp to complete your shipment details and priority courier routing.'}
                    </p>
                  </div>
                  <p className="text-[11px] font-mono text-[#D4A64A]/70 animate-pulse">
                    {isRtl ? 'جاري التحويل لـ WhatsApp...' : 'Opening WhatsApp interface...'}
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  
                  <div className="select-none space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#D4A64A] flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#D4A64A]" />
                      <span>{isRtl ? '2. تعبئة معلومات الشحن والتوصيل' : '2. Provide shipment address'}</span>
                    </h3>
                    <p className="text-xs text-stone-400">
                      {isRtl ? 'يرجى إدخال معلومات دقيقة لضمان عدم تأخر التوصيل.' : 'All information remains encrypted and strictly used for local shipping only.'}
                    </p>
                  </div>

                  <form onSubmit={handleOrderSubmit} className="space-y-5">
                    
                    {/* Customer Name */}
                    <div className="space-y-2 text-left">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#D4A64A]">
                        {copy.checkoutNameLabel}
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={isRtl ? "سهام العلوي" : "Siham Alaoui"}
                        required
                        className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-white/20 bg-white/5 placeholder-stone-500 focus:outline-none focus:border-[#D4A64A] focus:ring-1 focus:ring-[#D4A64A] tracking-normal text-white"
                      />
                    </div>

                    {/* Customer Address */}
                    <div className="space-y-2 text-left">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#D4A64A]">
                        {copy.checkoutAddressLabel}
                      </label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder={isRtl ? "مثال: الشارع، رقم الشقة، اسم المدينة" : "e.g., Boulevard Anfa, Casablanca, Morocco"}
                        required
                        className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-white/20 bg-white/5 placeholder-stone-500 focus:outline-none focus:border-[#D4A64A] focus:ring-1 focus:ring-[#D4A64A] tracking-normal text-white"
                      />
                    </div>

                    {/* Customer Phone */}
                    <div className="space-y-2 text-left">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#D4A64A]">
                        {copy.checkoutPhoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="0612345678"
                        required
                        style={{ direction: 'ltr' }}
                        className={`w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl border bg-white/5 placeholder-stone-500 focus:outline-none transition-all tracking-normal text-white ${
                          customerPhone && !isValidMoroccanPhone(customerPhone)
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/20 focus:border-[#D4A64A] focus:ring-1 focus:ring-[#D4A64A]'
                        }`}
                      />
                      {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                        <p className="text-rose-400 text-[10px] font-bold mt-1 animate-pulse" style={{ direction: 'rtl', textAlign: 'right' }}>
                          المرجو إدخال رقم هاتف مغربي صحيح.
                        </p>
                      )}
                    </div>

                    {/* Premium Cross-sell recommendation items */}
                    <div className="pt-4 border-t border-white/10 space-y-4">
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#D4A64A] select-none">
                        🎁 {isRtl ? 'عروض مكملة وموصى بها لروتينك (بخصم خاص)' : 'Recommended DXN companions (With extra discount)'}
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        
                        {/* 1. Spirulina Tablettes */}
                        <button
                          type="button"
                          onClick={() => setAddSpirulina(!addSpirulina)}
                          className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                            addSpirulina
                              ? 'border-[#D4A64A] bg-[#D4A64A]/10 text-white'
                              : 'border-white/10 bg-white/[0.02] text-stone-300 hover:bg-white/5'
                          }`}
                          style={{ textAlign: isRtl ? 'right' : 'left' }}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-[11px] sm:text-xs font-bold truncate">
                              {isRtl ? 'السبيرولينا العضوية' : 'Spirulina Tablets'}
                            </span>
                            <Plus className={`w-3.5 h-3.5 transition-transform ${addSpirulina ? 'rotate-45 text-[#D4A64A]' : 'text-stone-400'}`} />
                          </div>
                          <span className="text-xs font-mono font-extrabold text-[#D4A64A]">+365 DH</span>
                        </button>

                        {/* 2. Black Coffee */}
                        <button
                          type="button"
                          onClick={() => setAddCoffee(!addCoffee)}
                          className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                            addCoffee
                              ? 'border-[#D4A64A] bg-[#D4A64A]/10 text-white'
                              : 'border-white/10 bg-white/[0.02] text-stone-300 hover:bg-white/5'
                          }`}
                          style={{ textAlign: isRtl ? 'right' : 'left' }}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-[11px] sm:text-xs font-bold truncate">
                              {isRtl ? 'قهوة لينجزي السوداء' : 'Lingzhi Black Coffee'}
                            </span>
                            <Plus className={`w-3.5 h-3.5 transition-transform ${addCoffee ? 'rotate-45 text-[#D4A64A]' : 'text-stone-400'}`} />
                          </div>
                          <span className="text-xs font-mono font-extrabold text-[#D4A64A]">+310 DH</span>
                        </button>

                        {/* 3. Ganozhi Soap */}
                        <button
                          type="button"
                          onClick={() => setAddSoap(!addSoap)}
                          className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                            addSoap
                              ? 'border-[#D4A64A] bg-[#D4A64A]/10 text-white'
                              : 'border-white/10 bg-white/[0.02] text-stone-300 hover:bg-white/5'
                          }`}
                          style={{ textAlign: isRtl ? 'right' : 'left' }}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-[11px] sm:text-xs font-bold truncate">
                              {isRtl ? 'صابون جانوزي الفاخر' : 'Ganozhi Soap Bar'}
                            </span>
                            <Plus className={`w-3.5 h-3.5 transition-transform ${addSoap ? 'rotate-45 text-[#D4A64A]' : 'text-stone-400'}`} />
                          </div>
                          <span className="text-xs font-mono font-extrabold text-[#D4A64A]">+73 DH</span>
                        </button>

                      </div>
                    </div>

                    {/* Total Calculator Panel */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 select-none font-mono text-stone-300">
                      <div className="flex items-center justify-between text-xs">
                        <span>{isRtl ? 'سعر ريشيليوم الأساسي:' : 'Base Reishilium price:'}</span>
                        <span className="font-bold text-white">{getBasePrice()} DH</span>
                      </div>
                      
                      {(addSpirulina || addCoffee || addSoap) && (
                        <div className="text-xs space-y-1">
                          <span className="block text-[10px] text-stone-400 uppercase tracking-widest">{isRtl ? 'المنتجات الإضافية:' : 'Ad-on products:'}</span>
                          {addSpirulina && <div className="flex justify-between pl-2"><span>- أقراص سبيرولينا العضوية</span><span>+365 DH</span></div>}
                          {addCoffee && <div className="flex justify-between pl-2"><span>- قهوة لينجزي السوداء</span><span>+310 DH</span></div>}
                          {addSoap && <div className="flex justify-between pl-2"><span>- صابون جانوزي الفاخر</span><span>+73 DH</span></div>}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                        <span>{isRtl ? 'سعر الشحن والتوصيل للمنزل:' : 'Delivery & packaging fee:'}</span>
                        <span className="font-extrabold text-[#D4A64A]">
                          {quantity === 1 ? '+20 DH' : (isRtl ? 'مجاني وسريع 🚚' : 'FREE Shipping 🚚')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm sm:text-base pt-2 border-t border-white/10 font-bold text-[#D4A64A]">
                        <span>{isRtl ? 'المجموع الإجمالي المطلوب:' : 'TOTAL TO PAY AT DOOR:'}</span>
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {calculateTotal() + (quantity === 1 ? 20 : 0)} DH
                        </span>
                      </div>
                    </div>

                    {formError && (
                      <p className="text-rose-400 text-xs font-bold font-mono">⚠️ {formError}</p>
                    )}

                    {/* Premium Packs Option Promo Banner */}
                    <div 
                      onClick={() => {
                        if (setActiveView) {
                          setActiveView('packs');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const el = document.getElementById('bundle-offers-section') || document.getElementById('packs-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="p-3.5 rounded-xl border border-[#D4A64A]/25 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between gap-3 select-none hover:scale-[1.01] active:scale-99"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A64A] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A64A]"></span>
                        </span>
                        <span className="text-[11px] font-bold text-stone-200">
                          {isRtl ? 'أيضاً في باقات متميزة بخصم إضافي' : lang === 'fr' ? 'Disponible dans nos packs exclusifs !' : 'Available in premium packs!'}
                        </span>
                      </div>
                      <span className="text-[#D4A64A] text-[11px] font-black shrink-0 flex items-center gap-1">
                        {isRtl ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
                      </span>
                    </div>

                    {/* Order Submit Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                        className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A] disabled:from-stone-800 disabled:to-stone-900 disabled:text-stone-500 disabled:cursor-not-allowed text-stone-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all py-4 px-6 rounded-xl cursor-pointer shadow-lg shadow-[#D4A64A]/10"
                      >
                        {isOrdering ? (
                          <span>{isRtl ? 'جاري إعداد وتحضير طلبك لالة...' : 'PREPARING YOUR ORDER...'}</span>
                        ) : (
                          <>
                            <ShoppingBag className="w-4.5 h-4.5" />
                            <span>{copy.checkoutSubmitBtn}</span>
                          </>
                        )}
                      </button>
                      <p className="text-center text-[10px] text-stone-400 font-bold mt-3.5 flex items-center justify-center gap-1.5 select-none">
                        <Lock className="w-3.5 h-3.5 text-[#D4A64A]" />
                        <span>{copy.secureCheckoutBadge}</span>
                      </p>
                    </div>

                  </form>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 11. CUSTOMER REVIEWS GRID */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono">
              ✦ {isRtl ? 'آراء وتجارب' : 'Heartfelt Reviews'} ✦
            </span>
            <h2 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4 leading-tight">
              {copy.reviewsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {copy.reviewsSub}
            </p>
          </div>

          {/* 6 Luxury Testimonials Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reishiliumReviews[pl].map((review) => (
              <div
                key={review.id}
                className="bg-white border border-stone-200/60 p-6 sm:p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#D4A64A] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#D4A64A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#D4A64A] stroke-none" />
                    ))}
                  </div>
                  
                  {/* Testimonial comments */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    "{review.text}"
                  </p>
                </div>

                {/* User avatar and name info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                  <div className="w-11 h-11 rounded-full border border-stone-200 overflow-hidden shrink-0 bg-stone-100">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-stone-900 leading-none">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest leading-none mt-1.5 block">
                      {isRtl ? 'زبونة موثوقة' : 'Verified Purchase'}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. TOGGLABLE ACCORDIONS FAQ SECTION */}
      <section id="reishilium-faq-section" className="py-20 sm:py-28 bg-white border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 select-none">
            <span className="text-xs font-bold text-[#0C2E21] uppercase tracking-widest bg-emerald-50 border border-[#D4A64A]/50 px-3.5 py-1.5 rounded-full font-mono">
              FAQ
            </span>
            <h3 className="text-2xl sm:text-4.5xl font-black text-stone-900 mt-4 leading-tight font-sans">
              {copy.faqHeading}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {copy.faqSub}
            </p>
          </div>

          {/* Connected premium FAQAccordion */}
          <FAQAccordion lang={lang} customItems={faqs} />

        </div>
      </section>

      {/* 13. CONVERSIVE CALL TO ACTION SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-[#081F2C] to-[#0A2218] text-white overflow-hidden border-t-2 border-[#D4A64A]/30">
        
        {/* Soft background botanical leaves */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10">
          <Leaf className="absolute -top-10 -left-10 w-48 h-48 text-[#D4A64A] transform -rotate-12" />
          <Leaf className="absolute top-1/4 right-8 w-32 h-32 text-emerald-300 transform rotate-45" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6 sm:space-y-8 select-none flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Smile className="w-4.5 h-4.5 text-[#D4A64A]" />
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#D4A64A]">
              {isRtl ? 'انضم إلى آلاف الزبناء السعداء' : 'Join thousands of satisfied families'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4.5xl font-extrabold leading-tight tracking-tight max-w-3xl">
            {copy.ctaHeading}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl mx-auto">
            {isRtl 
              ? 'احصل على طرد ريشيليوم الأصلي دي إكس إن اليوم لتبدأ عيش العافية بلمسة طبيعية استثنائية ونقاء مئة بالمئة.'
              : 'Secure your biological Reishilium Powder today. Rehydrate your cells, protect your physiological paths with zero compromise.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md pt-4">
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A] text-stone-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all py-4 px-10 rounded-full shadow-lg"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span>{isRtl ? 'اطلب الآن' : 'Order Now'}</span>
            </button>
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(isRtl ? 'مرحباً لالة سميرة، أريد الاستفسار عن مسحوق ريشيليوم الفاخر...' : 'Hello Samira, I would like to inquire about DXN Reishilium Powder...')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-900/30 border border-[#D4A64A]/30 hover:bg-[#0C2E21] text-white font-black text-xs sm:text-sm uppercase tracking-widest py-4 px-9 rounded-full transition-all"
            >
              <Phone className="w-4.5 h-4.5 text-[#D4A64A]" />
              <span>{copy.contactUs}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 14. SOCIAL MEDIAS PREMIUM GLASSMISM SECTION */}
      <section className="bg-gradient-to-b from-[#0C2E21] to-[#081F2C] text-[#FAF9F6] py-16 px-4 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center space-y-6">
          
          <div className="space-y-1.5 max-w-md mx-auto select-none">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              {isRtl ? 'تواصل معنا على منصاتنا الاجتماعية' : 'Connect with our Official Medias'}
            </h4>
            <p className="text-xs text-stone-400">
              {isRtl ? 'انضم إلى عائلتنا الممتدة لمتابعة نصائح العافية والاستشارات الصحية.' : 'Engage with our wellness post guides, tips and direct product restocks.'}
            </p>
          </div>

          {/* Social Icons with precise 24px spacing & premium design */}
          <div className="flex items-center justify-center gap-6 pt-2">
            
            {/* Website Icon */}
            <div className="flex flex-col items-center gap-2.5">
              <a
                href="#"
                className="w-18 h-18 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#D4A64A] hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(212,166,74,0.3)] hover:scale-110 active:scale-95"
                aria-label="Website"
              >
                <Globe className="w-7 h-7" />
              </a>
              <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 font-mono select-none">
                {isRtl ? 'الموقع' : 'Website'}
              </span>
            </div>

            {/* Premium Instagram Icon */}
            <div className="flex flex-col items-center gap-2.5">
              <a
                href="https://www.instagram.com/samira_naturale?igsh=a3V5OHc1NXl2b2R3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:border-[#ee2a7b]/50 hover:bg-gradient-to-tr hover:from-[#f9ce34]/20 hover:via-[#ee2a7b]/20 hover:to-[#6228d7]/20 hover:shadow-[0_0_25px_rgba(238,42,123,0.4)] hover:scale-110 active:scale-95 group relative overflow-hidden"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#ee2a7b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Instagram className="w-7 h-7 relative z-10 group-hover:scale-105 transition-transform" />
              </a>
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#D4A64A] font-mono select-none flex items-center gap-1.5">
                <span>Instagram</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] animate-pulse" />
              </span>
            </div>

            {/* Facebook Icon */}
            <div className="flex flex-col items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/1B8mwBwGef/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#1877F2] hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 font-mono select-none">
                Facebook
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 15. FLOATING WHATSAPP & STICKY MOBILE BUY BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 select-none">
        
        {/* Floating WhatsApp Action Button */}
        <a
          href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(isRtl ? 'مرحباً سميرة، أريد شراء ريشيليوم بودرة الفاخر...' : 'Hello Samira, I would like to purchase DXN Reishilium Powder...')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 hover:bg-[#20ba5a] transition-all duration-300 relative group"
          aria-label="WhatsApp Assistance"
        >
          {/* Pulsing outline glow */}
          <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
          <Phone className="w-6 h-6 fill-white" />
          
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#081F2C] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow pointer-events-none">
            {isRtl ? 'تواصل معنا واتساب' : 'WhatsApp Assistance'}
          </span>
        </a>

      </div>

      {/* Sticky Mobile Buy Now Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#081F2C]/90 backdrop-blur-md border-t border-[#D4A64A]/30 p-3 flex sm:hidden items-center justify-between shadow-2xl select-none">
        <div className="text-left font-mono pl-2">
          <span className="block text-[8px] text-[#D4A64A] uppercase tracking-widest">{isRtl ? 'سعر الباقة الأفضل' : 'Best pack price'}</span>
          <span className="text-lg font-black text-white">540 DH</span>
        </div>
        <button
          onClick={scrollToCheckout}
          className="bg-gradient-to-r from-[#D4A64A] via-[#EAE1D1] to-[#D4A64A] text-stone-950 font-black text-xs uppercase tracking-widest py-3 px-6 rounded-xl active:scale-95 transition-transform"
        >
          {isRtl ? 'اطلب الآن 🛒' : 'Buy Now 🛒'}
        </button>
      </div>

    </div>
  );
}
