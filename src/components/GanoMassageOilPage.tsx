import { useState, FormEvent } from 'react';
import { trackPurchase, trackInitiateCheckout } from '../utils/metaPixel';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  HeartHandshake, 
  Star, 
  ChevronDown, 
  ShoppingBag, 
  Phone, 
  ArrowLeft, 
  Package, 
  HelpCircle, 
  Droplet,
  ThumbsUp,
  Award
} from 'lucide-react';
import { 
  ganoMassageOilLandingCopy, 
  ganoMassageOilBenefits, 
  ganoMassageOilFeatures, 
  ganoMassageOilSteps, 
  ganoMassageOilReviews, 
  ganoMassageOilFAQs, 
  ganoMassageOilPacks,
  whyChooseGanoList,
  FAQItem,
  PackItem
} from '../data/ganoMassageOilData';

interface GanoMassageOilPageProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  t: any;
  WHATSAPP_PHONE: string;
  setActiveView?: (view: string) => void;
}

export default function GanoMassageOilPage({ lang, isRtl, t, WHATSAPP_PHONE, setActiveView }: GanoMassageOilPageProps) {
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const copy = ganoMassageOilLandingCopy[pl];
  const benefits = ganoMassageOilBenefits[pl];
  const features = ganoMassageOilFeatures[pl];
  const steps = ganoMassageOilSteps[pl];
  const faqs = ganoMassageOilFAQs[pl];
  const packs = ganoMassageOilPacks[pl];
  const whyChooseItems = whyChooseGanoList[pl];

  // Images provided
  const mainProductImg = "https://i.ibb.co/RTS5Pkc3/image.png"; // Asasya
  const secondaryImg1 = "https://i.ibb.co/DH0XFf7g/image.png";
  const secondaryImg2 = "https://i.ibb.co/whXBr2Md/image.png";

  // Checkout states
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  // Upsells
  const [addShampoo, setAddShampoo] = useState(false);
  const [addToothpaste, setAddToothpaste] = useState(false);
  const [addCoffee3in1, setAddCoffee3in1] = useState(false);

  // General States
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Active step in how-to-use
  const [activeStepTab, setActiveStepTab] = useState(0);

  const getBasePrice = () => {
    return 120 * quantity;
  };

  const calculateTotal = () => {
    let price = getBasePrice();
    if (addShampoo) price += 120;
    if (addToothpaste) price += 85;
    if (addCoffee3in1) price += 140;
    return price;
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(quantity, calculateTotal());
    document.getElementById('gano-checkout-section')?.scrollIntoView({ behavior: 'smooth' });
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
      setFormError(lang === 'ar' ? "يرجى تعبئة جميع المعلومات المطلوبة." : "Veuillez remplir toutes les informations requises.");
      return;
    }

    if (!isValidMoroccanPhone(customerPhone)) {
      setFormError(lang === 'ar' ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setIsOrdering(true);

    const totalPrice = calculateTotal();

    let upsellsText = '';
    if (addShampoo) upsellsText += `• ${lang === 'ar' ? 'شامبو جانوزي الفاخر (+120 درهم)' : 'Shampoing Premium Ganozhi (+120 DH)'}\n`;
    if (addToothpaste) upsellsText += `• ${lang === 'ar' ? 'معجون أسنان جانوزي بلس (+85 درهم)' : 'Dentifrice Ganozhi Plus (+85 DH)'}\n`;
    if (addCoffee3in1) upsellsText += `• ${lang === 'ar' ? 'قهوة لينجزي 3 في 1 (+140 درهم)' : 'Café Lingzhi 3in1 (+140 DH)'}\n`;

    const freeShipping = quantity > 1;
    const finalBill = totalPrice + (quantity === 1 ? 20 : 0);

    const message = 
`💎 ${lang === 'ar' ? 'طلب شراء جديد: زيت جانو للمساج الفاخر - سميرة ناتورال' : 'NOUVELLE COMMANDE: HUILE DE MASSAGE GANO DXN - SAMIRA NATURALE'} 💎

👤 ${isRtl ? 'اسم الزبون الكريم' : 'Nom du Client'}: ${customerName}
📍 ${isRtl ? 'عنوان الشحن والتوصيل' : 'Adresse de Livraison'}: ${customerAddress}
📞 ${isRtl ? 'رقم هاتف الواتساب' : 'Téléphone / WhatsApp'}: ${customerPhone}

----------------------------------------
📦 ${isRtl ? 'الكمية المطلوبة لزيت جانو' : 'Quantité d\'huile de massage Gano'}:
• ${quantity} × ${isRtl ? 'زيت جانو للمساج الفاخر' : 'Huile de Massage Gano DXN'} [${120 * quantity} DH]

➕ ${isRtl ? 'العناصر المضافة لروتينك' : 'Add-ons Bien-être'} (Cross-sells):
${upsellsText || (isRtl ? '• لا توجد إضافات' : '• Aucun add-on')}\n
🎁 ${isRtl ? 'مكافآت وامتيازات الباقة' : 'Avantages Spéciaux'}:
• ${isRtl ? 'الشحن والتوصيل' : 'Livraison'}: ${freeShipping ? (isRtl ? 'مجاني وسريع بالكامل 🚚' : 'توصيل محلي اقتصادي (+20 درهم)') : (isRtl ? 'توصيل محلي مأجور (+20 درهم)' : 'Livraison Standard (+20 DH)')}
• ${isRtl ? 'الإرشاد والمتابعة' : 'Accompagnement'}: ${isRtl ? 'متابعة ورعاية هاتفية مخصصة من سميرة ناتورال' : 'Conseils et suivi personnalisé par Samira'}
----------------------------------------
💵 ${isRtl ? 'المجموع الإجمالي للدفع' : 'TOTAL À PAYER'}: ${finalBill} DH

🚚 ${isRtl ? 'الدفع نقداً عند الاستلام بعد فحص المنتج ودقته.' : 'Paiement en espèces à la livraison. Expédition rapide.'}`;

    setTimeout(() => {
      setIsOrdering(false);
      setOrderCompleted(true);
      trackPurchase(finalBill, 'MAD', ['gano-oil']);
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
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white min-h-[90vh] flex items-center pt-24 pb-16 sm:py-32 border-b border-yellow-600/30">
        
        {/* Absolute Background Art */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        {/* Soft Organic Background Lines */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left/Main column for text */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 lg:space-y-8"
            >
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-500/30 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                <span className="text-amber-400 text-xs sm:text-sm animate-pulse">✦</span>
                <span className="text-emerald-100 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                  {copy.heroBadge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight md:leading-tight">
                {copy.heroTitle}
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal max-w-2xl">
                {copy.heroSub}
              </p>

              {/* Bullet features for immediate high conversion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  isRtl ? "🌿 طبيعي 100٪ وآمن بالكامل" : "🌿 100% Natural & Safe",
                  isRtl ? "💆‍♂️ مثالي للمساج العضلي والاسترخاء" : "💆‍♂️ Ideal for deep relaxation",
                  isRtl ? "✨ بشرة مخملية وناعمة طوال اليوم" : "✨ Silky soft skin all day",
                  isRtl ? "🚚 التوصيل سريع والدفع عند الاستلام بمصر والمغرب" : "🚚 Fast local delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-950/40 border border-emerald-500/10 p-2.5 rounded-xl">
                    <div className="p-1 rounded-md bg-emerald-800/70 text-amber-400">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-stone-100">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={scrollToCheckout}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold rounded-xl transition-all shadow-xl shadow-amber-500/10 hover:scale-103 text-center text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  <span>{copy.heroCTAOrder}</span>
                </button>

                <button
                  onClick={() => document.getElementById('gano-overview-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#112F24] hover:bg-[#1C4535] text-white font-extrabold rounded-xl transition-all border border-emerald-500/20 hover:border-emerald-500/40 text-center text-xs tracking-wider cursor-pointer"
                >
                  {copy.heroCTALearn}
                </button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-4 pt-2 text-stone-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />)}
                </div>
                <span className="text-[11px] sm:text-xs text-stone-400 font-mono">
                  {isRtl ? "موصى به من قبل مستشاري المساج والمنتجعات الصحية" : "Recommended by wellness experts"}
                </span>
              </div>
            </motion.div>

            {/* Hero Right Column: Royal Product Image Bundle Display */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center items-center relative"
            >
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
              
              {/* Glow Halo behind bottle */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-amber-400/25 pointer-events-none opacity-50"
              ></motion.div>

              {/* Main Premium Container Box */}
              <div className="relative w-64 sm:w-80 aspect-[4/5] bg-emerald-950/60 p-5 rounded-[2.5rem] border border-amber-500/20 shadow-2xl flex flex-col items-center justify-between group overflow-hidden">
                
                {/* Vintage gold inner frame */}
                <div className="absolute inset-2 border border-[#C5A560]/10 rounded-[2.2rem] pointer-events-none"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Sparkling icon accent */}
                <span className="absolute top-3.5 right-3.5 p-1 rounded-full bg-emerald-900/30 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </span>

                <div className="h-[75%] w-full flex items-center justify-center p-3 relative">
                  {/* MAIN ESSENTIAL PRODUCT IMAGE */}
                  <motion.img 
                    src={mainProductImg}
                    alt="DXN Gano Massage Oil"
                    className="h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] group-hover:scale-103 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                    whileHover={{ rotate: 1 }}
                  />
                </div>

                <div className="w-full text-center pb-2 z-10 bg-emerald-950/80 p-2.5 rounded-2xl border border-emerald-800/60 backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-amber-300 font-mono tracking-widest uppercase">
                    {isRtl ? "مستخلص الجانوديرما النقي" : "ORGANIC REISHI INFUSED"}
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    {isRtl ? "زيت جانو للمساج والتدليك" : "DXN Gano Massage Oil (150ml)"}
                  </p>
                </div>
              </div>

              {/* Mini thumbnails of botanical wellness layout - adding more variety */}
              <div className="flex gap-3 mt-4">
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-emerald-500/20 p-1 flex items-center justify-center shadow-lg cursor-pointer hover:border-amber-400 transition-colors">
                  <img src={secondaryImg1} alt="Box Details" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-emerald-500/20 p-1 flex items-center justify-center shadow-lg cursor-pointer hover:border-amber-400 transition-colors">
                  <img src={secondaryImg2} alt="Spa ingredients" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-emerald-500/20 p-1 flex items-center justify-center shadow-lg relative cursor-pointer" onClick={scrollToCheckout}>
                  <div className="absolute inset-0 bg-emerald-900/80 rounded-xl flex flex-col items-center justify-center text-[10px] font-black text-amber-300">
                    <span>120</span>
                    <span className="text-[7px] text-white">DH</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono border border-emerald-100">
              💎 {isRtl ? "فوائد العافية العضوية" : "NATURAL HEALTH BENEFITS"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">
              {copy.benefitsHeading}
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed font-semibold">
              {copy.benefitsSub}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              // Custom icons for benefits
              const icons = [
                <Droplet className="w-5 h-5 text-emerald-800" />,
                <Leaf className="w-5 h-5 text-emerald-800" />,
                <Sparkles className="w-5 h-5 text-emerald-800" />,
                <HeartHandshake className="w-5 h-5 text-emerald-800" />,
                <ThumbsUp className="w-5 h-5 text-emerald-800" />,
                <Award className="w-5 h-5 text-emerald-800" />
              ];

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-stone-50/50 rounded-3xl p-6 sm:p-8 border border-stone-200/65 shadow-xs flex gap-5 hover:bg-emerald-50/20 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-900 flex items-center justify-center self-start group-hover:bg-emerald-800 group-hover:text-amber-400 transition-colors shadow-xs">
                    {icons[index % icons.length]}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ABOUT THE PRODUCT SECTION */}
      <section id="gano-overview-section" className="py-20 sm:py-28 bg-[#FAF6F0] border-b border-stone-200/50 relative overflow-hidden">
        
        {/* Shimmer botanical circles */}
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-800/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              
              <div className="absolute inset-0 bg-emerald-900/10 blur-2xl pointer-events-none -m-4"></div>

              {/* Element 1: Large bottle showcase */}
              <div className="col-span-2 rounded-[2rem] bg-white p-5 border border-stone-200/80 shadow-md flex items-center justify-center relative overflow-hidden group">
                <div className="absolute top-3 right-3 bg-emerald-800 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {isRtl ? "صورة لمنتج حقيقي" : "Real product photo"}
                </div>
                <img 
                  src={secondaryImg1} 
                  alt="DXN Gano Oil Package Details" 
                  className="w-[80%] h-56 object-contain group-hover:scale-106 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Element 2: Texture illustration */}
              <div className="rounded-2xl bg-emerald-950 p-4 border border-emerald-900 flex flex-col justify-between text-white text-xs">
                <p className="font-mono text-[9px] text-amber-300 font-bold uppercase tracking-widest">
                  {isRtl ? "مكون أساسي" : "Active ingredient"}
                </p>
                <div className="my-3 space-y-1">
                  <p className="font-bold text-sm">Ganoderma Lucidum</p>
                  <p className="text-[11px] text-stone-300">
                    {isRtl ? "فطر الريشي الداعم لصحة وحيوية خلايا الجلد." : "The king of herbs for deep skin cell nourishment."}
                  </p>
                </div>
                <span className="text-[10px] text-stone-400 font-semibold italic">100% DXN Organic Standard</span>
              </div>

              {/* Element 3: Wellness Spa */}
              <div className="rounded-2xl bg-white p-4 border border-stone-200 flex flex-col justify-between text-stone-800 text-xs">
                <p className="font-mono text-[9px] text-emerald-800 font-bold uppercase tracking-widest">
                  {isRtl ? "بذور النخيل" : "Carrier Base"}
                </p>
                <div className="my-3 space-y-1">
                  <p className="font-bold text-sm text-emerald-950">Palm Kernel Oil</p>
                  <p className="text-[11px] text-stone-500">
                    {isRtl ? "زيت غني بمضادات الأكسدة لامتصاص فائق دون لزوجة." : "Antioxidant-rich carrier for maximum lipid hydration."}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-800 font-bold">{isRtl ? "طبيعي 100٪" : "100% Clean Sourcing"}</span>
              </div>

            </div>

            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-amber-500/10 px-3.5 py-1.5 rounded-full font-mono border border-amber-500/20">
                ⭐ {copy.overviewTitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C352D] leading-tight">
                {copy.overviewHeading}
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-semibold">
                <p>{copy.overviewParagraph1}</p>
                <p>{copy.overviewParagraph2}</p>
              </div>

              <div className="border-t border-stone-200 pt-6 mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block text-2xl font-black text-[#1C352D]">150ml</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "حجم العبوة" : "Bottle Size"}</span>
                </div>
                <div className="text-center border-x border-stone-200">
                  <span className="block text-2xl font-black text-[#1C352D]">100%</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "تخليق عضوي" : "Organic Pure"}</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-[#1C352D]">30+</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "سنة ريادة" : "Years Trust"}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-start">
                <button
                  onClick={scrollToCheckout}
                  className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>{isRtl ? "عرض باقات التوفير" : "View Package Deals"}</span>
                  <ArrowLeft className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-amber-500/10 px-3.5 py-1.5 rounded-full font-mono">
              💎 {isRtl ? "مواصفات الجودة المعتمدة" : "PREMIUM SPECIFICATIONS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              {copy.featuresHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
              {copy.featuresSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white hover:bg-[#FAF6F0]/20 rounded-2xl p-6 border border-stone-200/80 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:border-amber-400/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center text-sm mb-4 font-mono font-extrabold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed font-semibold">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HOW TO USE SECTION */}
      <section className="py-20 bg-stone-50 border-b border-stone-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono border border-emerald-100">
              🧖‍♂️ {isRtl ? "طقوس التدليك الاحترافي" : "SPA MASSAGE RITUAL"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {copy.howToUseHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
              {copy.howToUseSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual steps side */}
            <div className="lg:col-span-5 justify-center flex relative">
              <div className="absolute w-72 h-72 rounded-full bg-amber-400/5 blur-3xl pointer-events-none"></div>
              
              {/* Central Premium Card explaining active step */}
              <div className="w-full max-w-sm rounded-[2rem] bg-white border border-stone-200 p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-800 to-amber-500"></div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-extrabold bg-[#1C352D] text-amber-400 px-3 py-1 rounded-lg">
                    {isRtl ? `الخطوة ${activeStepTab + 1}` : `STEP ${activeStepTab + 1}`}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{isRtl ? "روتين رعاية" : "DAILY WELLNESS"}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-extrabold text-[#1C352D]">
                      {steps[activeStepTab]?.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
                      {steps[activeStepTab]?.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Simulated luxury massage drop icon */}
                <div className="mt-8 pt-5 border-t border-stone-100 flex justify-between items-center">
                  <span className="text-[11px] text-amber-600 font-bold flex items-center gap-1.5 font-mono">
                    <Droplet className="w-4 h-4 fill-amber-500/20" />
                    {isRtl ? "تركيبة لطيفة وسهلة" : "Smooth-absorbing texture"}
                  </span>
                  
                  {/* Slider Dots */}
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveStepTab(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeStepTab === i ? 'bg-emerald-800 w-5' : 'bg-stone-300'}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* List side */}
            <div className="lg:col-span-7 space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveStepTab(idx)}
                  className={`flex gap-5 p-4 rounded-2xl border cursor-pointer transition-all ${activeStepTab === idx ? 'bg-white border-emerald-800 shadow-md translate-x-2' : 'bg-transparent border-transparent hover:bg-stone-200/20'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${activeStepTab === idx ? 'bg-emerald-800 text-white' : 'bg-stone-200 text-stone-500'}`}>
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h5 className={`font-bold text-xs sm:text-sm ${activeStepTab === idx ? 'text-emerald-950 font-black' : 'text-stone-700'}`}>
                      {step.title}
                    </h5>
                    <p className="text-xs text-stone-500 line-clamp-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Secondary spa-styled illustration block */}
          <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-emerald-950 border border-emerald-900 text-stone-200 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-lg">
            <div className="space-y-2 text-center sm:text-right">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">✨ {isRtl ? "حمام دافئ ومساج" : "WARM BATH TIP"}</span>
              <p className="text-sm font-semibold leading-relaxed text-stone-100">
                {isRtl ? "للحصول على أفضل النتائج، يوصى باستخدام زيت جانو بعد أخذ حمام دافئ حيث تكون مسام الجلد مفتوحة وقابلة للارتواء الأمثل." : "For paramount benefits, apply Gano Massage Oil post a warm thermal bath when the dermal pore systems are highly receptive to organic hydration."}
              </p>
            </div>
            <button onClick={scrollToCheckout} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl transition-all shrink-0 cursor-pointer">
              {isRtl ? "احصل على العرّض المتاح" : "Claim Luxury Offer"}
            </button>
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE DXN SECTION */}
      <section className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Copy side */}
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-amber-500/10 px-3.5 py-1.5 rounded-full font-mono">
                🎖️ {t.whyChooseUs}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                {copy.whyChooseHeading}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
                {copy.whyChooseSub}
              </p>

              <div className="space-y-3 pt-2">
                {whyChooseItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:bg-stone-100/40 transition-colors">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 self-start">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-stone-850 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic side: DXN certification / trust collage */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-transparent to-transparent opacity-80 rounded-[3rem] blur-xl pointer-events-none"></div>
              
              <div className="relative rounded-[2.5rem] bg-stone-50/50 p-6 sm:p-8 border border-stone-200/80 w-full max-w-md shadow-lg space-y-6">
                
                <h4 className="text-base sm:text-lg font-black text-[#1C352D] text-center border-b border-stone-200 pb-4">
                  {isRtl ? "شهادات واعتمادات الشركة" : "DXN Global Credentials"}
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-stone-100 text-center space-y-1 hover:border-emerald-300 transition-colors">
                    <span className="block text-xl">🛡️</span>
                    <span className="block text-xs font-bold text-stone-800">ISO 9001 / 14001</span>
                    <span className="block text-[9px] text-stone-400 font-mono">GMP Standards</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-stone-100 text-center space-y-1 hover:border-emerald-300 transition-colors">
                    <span className="block text-xl">🔬</span>
                    <span className="block text-xs font-bold text-stone-800">TGA Australia</span>
                    <span className="block text-[9px] text-stone-400 font-mono">100% Organic certified</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-stone-100 text-center space-y-1 hover:border-emerald-300 transition-colors">
                    <span className="block text-xl">🕋</span>
                    <span className="block text-xs font-bold text-stone-800">Halal Certified</span>
                    <span className="block text-[9px] text-stone-400 font-mono">Masyarakat Islam</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-stone-100 text-center space-y-1 hover:border-emerald-300 transition-colors">
                    <span className="block text-xl">🥇</span>
                    <span className="block text-xs font-bold text-stone-800">Global Brand</span>
                    <span className="block text-[9px] text-stone-400 font-mono">180+ Countries</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-900 text-white rounded-2xl flex items-center gap-4 text-xs font-medium">
                  <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
                  <p className="leading-relaxed">
                    {isRtl 
                      ? "جميع المنتجات أصلية وتورّد مباشرة من المكاتب المعتمدة بالمغرب." 
                      : "All DXN provisions are 100% authentic, directly dispatched with batch logs."}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="py-20 sm:py-28 bg-stone-50 border-b border-stone-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-amber-500/10 px-3.5 py-1.5 rounded-full font-mono">
              ⭐ {isRtl ? "ثقة ورضا عملاء سميرة ناتورال" : "REAL CUSTOMER TESTIMONIALS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              {copy.reviewsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.reviewsSub}
            </p>
          </div>

          {/* Testimonials Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ganoMassageOilReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 hover:border-amber-400/50 hover:shadow-lg transition-all duration-305 flex flex-col justify-between space-y-6 relative"
              >
                {/* 5 Stars block */}
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md">
                    {isRtl ? "مشتري جاد" : "Verified order"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-605 italic leading-relaxed font-medium">
                  "{review.text}"
                </p>

                {/* Profile row */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-stone-105">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover border border-[#C5A560]/30 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-extrabold text-xs text-stone-900">{review.name}</h5>
                    <span className="text-[9px] text-stone-400 font-semibold font-mono tracking-wide">
                      Morocco
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PACKAGES & INTERACTIVE CHECKOUT SECTION */}
      <section id="gano-checkout-section" className="py-20 sm:py-28 bg-white overflow-hidden relative border-b border-stone-200">
        
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C352D] bg-emerald-100/50 px-3.5 py-1.5 rounded-full font-mono border border-emerald-200/50">
              🛒 {isRtl ? "التوصيل بالمجان والدفع بعد الفحص" : "FAST CHECKOUT - SECURE DELIVERY"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              {copy.packagesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Box: Choose package cards */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-sm font-bold text-[#1C352D] uppercase tracking-wider font-mono flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-500" />
                <span>{isRtl ? "الكمية المطلوبة من زيت جانو" : "1. Choose Gano Oil Quantity"}</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#FAF8F5] p-4.5 rounded-3xl border border-stone-200 w-full sm:w-auto inline-flex justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-amber-500 active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    -
                  </button>
                  <span className="text-xl font-black text-stone-900 min-w-[3rem] text-center font-mono select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.min(99, prev + 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-amber-500 active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* UPSELLS WRAPPER CARD - Beautifully designed to maximize basket size */}
              <div className="bg-stone-50/80 rounded-3xl p-5 sm:p-6.5 border border-stone-200/90 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-600 font-mono tracking-widest">👑 {isRtl ? "عزّز روتين الاسترخاء والعناية" : "UPGRADE YOUR BODY CARE ROUTINE"}</span>
                  <h4 className="text-sm font-extrabold text-stone-900">
                    {isRtl ? "منتجات إضافية تكاملية ممتازة (حسم فوري)" : "Complete Wellness Add-ons (Special Price):"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upsell 1: Shampoo */}
                  <div 
                    onClick={() => setAddShampoo(!addShampoo)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addShampoo ? 'border-[#1C352D] bg-[#1C352D]/5' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addShampoo ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addShampoo && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "شامبو جانوزي DXN" : "DXN Ganozhi Shampoo"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+120 DH <span className="line-through">150 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Upsell 2: Toothpaste */}
                  <div 
                    onClick={() => setAddToothpaste(!addToothpaste)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addToothpaste ? 'border-[#1C352D] bg-[#1C352D]/5' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addToothpaste ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addToothpaste && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "معجون أسنان جانوزي بلس" : "DXN Ganozhi Toothpaste"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+85 DH <span className="line-through">110 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Upsell 3: Coffee 3 in 1 */}
                  <div 
                    onClick={() => setAddCoffee3in1(!addCoffee3in1)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addCoffee3in1 ? 'border-[#1C352D] bg-[#1C352D]/5' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addCoffee3in1 ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addCoffee3in1 && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "قهوة لينجزي 3 في 1" : "DXN Lingzhi 3in1 Coffee"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+140 DH <span className="line-through">180 DH</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] sm:text-xs text-emerald-800 font-semibold leading-relaxed">
                  💡 {isRtl ? "شراء هذه الملحقات مع زيت جانو يضمن لك الحصول على شحن مجاني فوري وتوصيل سريع وتأثير رعاية متكامل لك وعائلتك." : "Bundling items unlocks ultimate bodily rejuvenation while validating free regional courier express."}
                </p>
              </div>

            </div>

            {/* Right Box: Premium checkout card */}
            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] bg-gradient-to-br from-stone-900 to-slate-950 p-6 sm:p-8 text-white border-2 border-amber-500/10 shadow-2xl relative overflow-hidden">
                
                {/* Background lighting */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                
                <h4 className="text-lg font-black text-white border-b border-white/10 pb-4 mb-6 flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-amber-500 text-slate-950"><Check className="w-4 h-4 stroke-[3]" /></span>
                  <span>{copy.checkoutHeading}</span>
                </h4>

                <AnimatePresence mode="wait">
                  {!orderCompleted ? (
                    <form onSubmit={handleOrderSubmit} className="space-y-6 relative z-10">
                      
                      {/* Name label & input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C5A560] font-mono">
                          {copy.checkoutNameLabel}
                        </label>
                        <input 
                          type="text" 
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={isRtl ? "أدخل الاسم الكامل بالكامل" : "e.g., Siham Alaoui"}
                          required
                          className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-stone-800 bg-white/5 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-semibold transition-all"
                        />
                      </div>

                      {/* Address label & text */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C5A560] font-mono">
                          {copy.checkoutAddressLabel}
                        </label>
                        <textarea 
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder={isRtl ? "المدينة، اسم الحي، الشارع، رقم المنزل" : "City, neighborhood, street, house number"}
                          required
                          className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-stone-800 bg-white/5 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-semibold h-20 transition-all"
                        />
                      </div>

                      {/* Phone label & input */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#C5A560] font-mono">
                          {copy.checkoutPhoneLabel}
                        </label>
                        <input 
                          type="tel" 
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder={isRtl ? "مثال: 0612345678" : "e.g., 0612345678"}
                          required
                          className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border bg-white/5 text-stone-100 placeholder-stone-500 focus:outline-none transition-all font-mono ${
                            customerPhone && !isValidMoroccanPhone(customerPhone)
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                          }`}
                        />
                        {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                          <p className="text-rose-400 text-[10px] font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                            المرجو إدخال رقم هاتف مغربي صحيح.
                          </p>
                        )}
                      </div>

                      {/* Error block */}
                      {formError && (
                        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold leading-relaxed">
                          ⚠️ {formError}
                        </div>
                      )}

                      {/* BILL SUMMARY BOX */}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3 pt-4">
                        <div className="flex justify-between text-xs text-stone-300">
                          <span>{isRtl ? "الباقة الأساسية من زيت جانو:" : "Gano base bundle:"}</span>
                          <span className="font-bold">{getBasePrice()} DH</span>
                        </div>

                        {/* If addons exist */}
                        {(addShampoo || addToothpaste || addCoffee3in1) && (
                          <div className="space-y-1 text-[11px] text-[#C5A560] border-t border-white/5 pt-2">
                            {addShampoo && (
                              <div className="flex justify-between">
                                <span>+ {isRtl ? "شامبو جانوزي للتنظيف" : "DXN Ganozhi Shampoo"}</span>
                                <span>120 DH</span>
                              </div>
                            )}
                            {addToothpaste && (
                              <div className="flex justify-between">
                                <span>+ {isRtl ? "معجون أسنان واقي" : "DXN Toothpaste"}</span>
                                <span>85 DH</span>
                              </div>
                            )}
                            {addCoffee3in1 && (
                              <div className="flex justify-between">
                                <span>+ {isRtl ? "قهوة 3 في 1 كريمية" : "DXN 3in1 Coffee"}</span>
                                <span>140 DH</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Shipping */}
                        <div className="flex justify-between text-xs text-stone-300 border-t border-white/5 pt-2">
                          <span>{isRtl ? "رسوم الشحن والتوصيل:" : "Delivery express fee:"}</span>
                          <span className="font-mono text-emerald-400 font-extrabold font-bold">
                            {quantity > 1 ? (isRtl ? "مجاني" : "FREE") : "20 DH"}
                          </span>
                        </div>

                        {/* Grand total */}
                        <div className="flex justify-between text-sm text-stone-100 border-t border-amber-500/30 pt-3 font-extrabold">
                          <span className="text-amber-400">{isRtl ? "المجموع الكلي للدفع:" : "Grand Total:"}</span>
                          <span className="text-amber-400 font-black text-base">{calculateTotal() + (quantity === 1 ? 20 : 0)} DH</span>
                        </div>
                      </div>

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
                        className="p-3.5 rounded-xl border border-amber-500/25 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between gap-3 select-none hover:scale-[1.01] active:scale-99"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                          </span>
                          <span className="text-[11px] font-bold text-stone-200">
                            {isRtl ? 'أيضاً في باقات متميزة بخصم إضافي' : lang === 'fr' ? 'Disponible dans nos packs exclusifs !' : 'Available in premium packs!'}
                          </span>
                        </div>
                        <span className="text-amber-400 text-[11px] font-black shrink-0 flex items-center gap-1">
                          {isRtl ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
                        </span>
                      </div>

                      {/* SUBMIT ORDER BUTTON */}
                      <button
                        type="submit"
                        disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-stone-800 disabled:to-stone-900 disabled:text-stone-500 disabled:cursor-not-allowed disabled:opacity-50 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isOrdering ? (
                          <span>{isRtl ? "جاري الإرسال..." : "Processing order..."}</span>
                        ) : (
                          <>
                            <Phone className="w-4 h-4 text-slate-950 stroke-[2.5] fill-current" />
                            <span>{copy.checkoutSubmitBtn}</span>
                          </>
                        )}
                      </button>

                      {/* Payment Terms badge */}
                      <div className="flex items-center gap-2 justify-center pt-2 text-[10px] text-stone-400 font-mono font-bold uppercase tracking-widest">
                        <Truck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{copy.secureCheckoutBadge}</span>
                      </div>

                    </form>
                  ) : (
                    // Order Success Confirmation Block
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-5"
                    >
                      <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                      <h4 className="text-xl font-extrabold text-white">
                        {isRtl ? "تم تسجيل طلبك بنجاح!" : "Order Recorded Successfully!"}
                      </h4>
                      <p className="text-xs text-stone-300 leading-relaxed max-w-sm mx-auto">
                        {isRtl 
                          ? "شكراً لثقتكم. جاري فتح محادثة الواتساب تلقائياً مع خبيرة الجودة سميرة لمراجعة وتأكيد الطلب وشحنه إليك..." 
                          : "We are initializing a secure redirection to WhatsApp to verify your organic batch dispatch directly with Samira..."}
                      </p>
                      <p className="text-[10px] font-mono text-amber-500">
                        {isRtl ? "برجاء عدم إغلاق هذه الصفحة حـتى اكـتمال الـتحول." : "Redirecting automatically..."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

          {/* Trust Badges display block */}
          <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { label: isRtl ? "جودة بريميوم" : "Premium Quality", sub: "100% Guaranteed", icon: "💎" },
              { label: isRtl ? "منتج DXN أصلي" : "Original DXN", sub: "Direct Dispatch", icon: "🛡️" },
              { label: isRtl ? "شحن آمن سريع" : "Secure Shipping", sub: "Morocco Courier", icon: "🚚" },
              { label: isRtl ? "الدفع عند الاستلام" : "Cash On Delivery", sub: "Pay After Inspection", icon: "💵" },
              { label: isRtl ? "رضا العملاء تام" : "Customer Trust", sub: "100% Satisfaction", icon: "⭐" }
            ].map((badge, index) => (
              <div key={index} className="p-4 bg-stone-50 rounded-2xl border border-stone-150 hover:border-emerald-200 transition-colors">
                <span className="block text-2xl mb-1.5">{badge.icon}</span>
                <span className="block text-xs font-black text-stone-850">{badge.label}</span>
                <span className="block text-[9px] text-stone-400 font-semibold font-mono tracking-wider mt-0.5">{badge.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. PREMIUM FAQS ACCORDION SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-amber-500/10 px-3.5 py-1.5 rounded-full font-mono">
              💬 {t.faqHeading}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              {copy.faqHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.faqSub}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq: FAQItem, idx: number) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    style={{ textAlign: isRtl ? 'right' : 'left', flexDirection: isRtl ? 'row-reverse' : 'row' }}
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 leading-snug flex items-center gap-2.5">
                      <HelpCircle className="w-4.5 h-4.5 text-stone-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span className={`p-1 bg-stone-100 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-stone-600" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-semibold border-t border-stone-50">
                          {faq.a}
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

      {/* 10. PREMIUM LARGE CTA BLOCK */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 to-stone-900 text-white relative overflow-hidden text-center select-none border-t border-yellow-600/30">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/25 via-transparent to-transparent opacity-80"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
          
          <span className="text-amber-400 text-2xl">✦</span>
          
          <h2 className="text-2.5xl sm:text-3.5xl md:text-4.5xl font-black text-white leading-tight max-w-3xl mx-auto">
            {isRtl ? "اجعل الاسترخاء جزءاً من روتينك اليومي مع زيت جانو للمساج" : "Make Relaxation a Precious Part of Your Daily Routine"}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed max-w-xl mx-auto">
            {isRtl 
              ? "اشحن طاقتك، وجدد خلايا بشرتك، وقل وداعاً للتعب الجسدي والضغوط اليومية مع زيت جانو الغني بالفطر الريشي الطبيعي." 
              : "Reclaim physical vigor and healthy moisturized skin with DXN Gano Massage Oil, tailored with Reishi extract."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto px-10 py-4.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-amber-500/10 hover:scale-103 cursor-pointer flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span>{isRtl ? "اطلب الآن بقسيمة توفير" : "Order Save Pack Now"}</span>
            </button>

            <button
              onClick={() => {
                const textMsg = encodeURIComponent(isRtl ? "مرحباً سميرة! أريد الاستفسار عن فوائد زيت جانو للمساج من DXN." : "Hello Samira, I'd like to consult about Gano Massage Oil benefits.");
                window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${textMsg}`, '_blank');
              }}
              className="w-full sm:w-auto px-10 py-4.5 bg-emerald-800 hover:bg-emerald-900 border border-emerald-700 hover:border-emerald-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400 stroke-[2]" />
              <span>{isRtl ? "تواصل معنا هاتفياً" : "Consult with Samira"}</span>
            </button>

          </div>

          <p className="text-[10px] sm:text-xs text-stone-400 font-mono uppercase tracking-widest">
            {isRtl ? "✓ توصيل سريع وآمن لكافة المدن المغربية والدفع عند الاستلام" : "✓ FAST SHIPPING • CASH ON DELIVERY • 100% ORIGINAL"}
          </p>

        </div>
      </section>

    </div>
  );
}
