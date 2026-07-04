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
  Award,
  Coffee,
  RotateCcw,
  Volume2
} from 'lucide-react';
import { 
  limonzhiLandingCopy, 
  limonzhiBenefits, 
  limonzhiFeatures, 
  limonzhiSteps, 
  limonzhiReviews, 
  limonzhiFAQs, 
  limonzhiPacks,
  whyChooseLimonzhiList
} from '../data/limonzhiData';

interface LimonzhiPageProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  t: any;
  WHATSAPP_PHONE: string;
  setActiveView?: (view: string) => void;
}

export default function LimonzhiPage({ lang, isRtl, t, WHATSAPP_PHONE, setActiveView }: LimonzhiPageProps) {
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const copy = limonzhiLandingCopy[pl];
  const benefits = limonzhiBenefits[pl];
  const features = limonzhiFeatures[pl];
  const steps = limonzhiSteps[pl];
  const faqs = limonzhiFAQs[pl];
  const packs = limonzhiPacks[pl];
  const whyChooseItems = whyChooseLimonzhiList[pl];

  // Images provided
  const mainProductImg = "https://i.ibb.co/pj1nyzM6/image.png"; // YFb2ZHfd - Essential product box and sachet display
  const secondaryImg1 = "https://i.ibb.co/3y3fr6n7/image.png"; // fY8tFH4K
  const secondaryImg2 = "https://i.ibb.co/bZpcFkx/lemonzhi-sachet.jpg"; // fzzXbHvF

  // Checkout states
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  // Upsells
  const [addShampoo, setAddShampoo] = useState(false);
  const [addToothpaste, setAddToothpaste] = useState(false);
  const [addCoffee3in1, setAddCoffee3in1] = useState(false);
  const [addSpirulina, setAddSpirulina] = useState(false);

  // General States
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Active step in how-to-use
  const [activeStepTab, setActiveStepTab] = useState(0);

  const getBasePrice = () => {
    return 140 * quantity;
  };

  const calculateTotal = () => {
    let price = getBasePrice();
    if (addShampoo) price += 120;
    if (addToothpaste) price += 85;
    if (addCoffee3in1) price += 140;
    if (addSpirulina) price += 260;
    return price;
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(quantity, calculateTotal());
    document.getElementById('limonzhi-checkout-section')?.scrollIntoView({ behavior: 'smooth' });
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
    if (addSpirulina) upsellsText += `• ${lang === 'ar' ? 'مسحوق السبيرولينا العضوي (+260 درهم)' : 'Poudre de Spiruline Biologique (+260 DH)'}\n`;
    if (addShampoo) upsellsText += `• ${lang === 'ar' ? 'شامبو جانوزي الفاخر (+120 درهم)' : 'Shampoing Premium Ganozhi (+120 DH)'}\n`;
    if (addToothpaste) upsellsText += `• ${lang === 'ar' ? 'معجون أسنان جانوزي بلس (+85 درهم)' : 'Dentifrice Ganozhi Plus (+85 DH)'}\n`;
    if (addCoffee3in1) upsellsText += `• ${lang === 'ar' ? 'قهوة لينجزي 3 في 1 (+140 درهم)' : 'Café Lingzhi 3in1 (+140 DH)'}\n`;

    const freeShipping = quantity > 1;
    const finalBill = totalPrice + (quantity === 1 ? 20 : 0);

    const message = 
`🍋 ${lang === 'ar' ? 'طلب شراء جديد: مشروب ليمونزي الفاخر - سميرة ناتورال' : 'NOUVELLE COMMANDE: LIMONZHI DXN - SAMIRA NATURALE'} 🍋

👤 ${isRtl ? 'اسم الزبون الكريم' : 'Nom du Client'}: ${customerName}
📍 ${isRtl ? 'عنوان الشحن والتوصيل بالمغرب' : 'Adresse de Livraison'}: ${customerAddress}
📞 ${isRtl ? 'رقم هاتف الواتساب' : 'Téléphone / WhatsApp'}: ${customerPhone}

----------------------------------------
📦 ${isRtl ? 'الكمية المطلوبة لليمونزي' : 'Quantité de Limonzhi'}:
• ${quantity} × ${isRtl ? 'مشروب ليمونزي اللذيذ' : 'Mélange Limonzhi Coco DXN'} [${140 * quantity} DH]

➕ ${isRtl ? 'العناصر المضافة لروتينك' : 'Add-ons Bien-être'} (Cross-sells):
${upsellsText || (isRtl ? '• لا توجد إضافات' : '• Aucun add-on')}\n
🎁 ${isRtl ? 'مكافآت وامتيازات الباقة' : 'Avantages Spéciaux'}:
• ${isRtl ? 'الشحن والتوصيل' : 'Livraison'}: ${freeShipping ? (isRtl ? 'مجاني وسريع بالكامل 🚚' : 'توصيل محلي اقتصادي (+20 درهم)') : (isRtl ? 'توصيل محلي مأجور (+20 درهم)' : 'Livraison Standard (+20 DH)')}
• ${isRtl ? 'الإرشاد والمتابعة' : 'Accompagnement'}: ${isRtl ? 'متابعة ورعاية دقيقة وهاتفية مخصصة من سميرة ناتورال' : 'Conseils et suivi d\'hygiène exclusif par Samira'}
----------------------------------------
💵 ${isRtl ? 'المجموع الإجمالي للدفع عند الاستلام' : 'TOTAL À PAYER'}: ${finalBill} DH

🚚 ${isRtl ? 'الدفع نقداً عند استلام ومعاينة المنتج بالكامل مع الضمان.' : 'Paiement en espèces à la livraison. Livraison express.'}`;

    setTimeout(() => {
      setIsOrdering(false);
      setOrderCompleted(true);
      trackPurchase(finalBill, 'MAD', ['limonzhi']);
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
    <div className={`min-h-screen bg-[#FDFBF7] text-slate-800 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123E2A] via-[#1A573C] to-[#253D2A] text-white min-h-[92vh] flex items-center pt-24 pb-16 sm:py-32 border-b-4 border-yellow-400">
        
        {/* Lemon Inspired background design elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-emerald-400/5 blur-[120px] pointer-events-none"></div>
        
        {/* Subtle decorative leaves */}
        <div className="absolute top-10 left-[8%] hidden lg:block opacity-15 rotate-45 pointer-events-none">
          <Leaf className="w-16 h-16 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 right-[5%] hidden lg:block opacity-10 -rotate-12 pointer-events-none">
          <Leaf className="w-20 h-20 text-[#C5A560]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 lg:space-y-8"
            >
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                <span className="text-yellow-400 text-xs sm:text-sm animate-pulse">🍋</span>
                <span className="text-yellow-100 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                  {copy.heroBadge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight md:leading-[1.15]">
                {copy.heroTitle}
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal max-w-2xl">
                {copy.heroSub}
              </p>

              {/* Conversion oriented premium bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  isRtl ? "🍋 نكهة الليمون المنعشة واللذيذة" : "🍋 Zesty, authentic citrus flavor",
                  isRtl ? "🍄 مدعم بخواص فطر الريشي لزيادة النشاط" : "🍄 Enhanced with nourishing Reishi properties",
                  isRtl ? "🔋 حيوية طبيعية دون إرهاق أو مجهود مضاف" : "🔋 Sustained vital cellular stamina",
                  isRtl ? "📦 سريع التجهيز مع مغلفات مغلقة بإحكام" : "📦 Elegant, on-the-go hermetic sachets"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#113122] border border-emerald-500/10 p-2.5 rounded-xl">
                    <div className="p-1 rounded-md bg-[#FAF4D8] text-emerald-950">
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
                  className="px-8 py-4 bg-gradient-to-r from-yellow-350 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-950 font-extrabold rounded-xl transition-all shadow-xl shadow-yellow-400/10 hover:scale-103 text-center text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  <span>{copy.heroCTAOrder}</span>
                </button>

                <button
                  onClick={() => document.getElementById('limonzhi-overview-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#1F543C] hover:bg-[#2A6D4F] text-white font-extrabold rounded-xl transition-all border border-emerald-500/20 hover:border-emerald-500/40 text-center text-xs tracking-wider cursor-pointer"
                >
                  {copy.heroCTALearn}
                </button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-4 pt-2 text-stone-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-none" />)}
                </div>
                <span className="text-[11px] sm:text-xs text-stone-300 font-mono">
                  {isRtl ? "رضا كامل 100٪ من عملاء سميرة ناتورال" : "Highly recommended on wellness hubs"}
                </span>
              </div>
            </motion.div>

            {/* Right Interactive Premium Container Box - Essential Image as main */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center items-center relative"
            >
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-yellow-400/15 blur-3xl pointer-events-none"></div>
              
              {/* Spinning luxury frame */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-yellow-400/20 pointer-events-none"
              ></motion.div>

              {/* Major Box Container for the essential image */}
              <div className="relative w-64 sm:w-80 aspect-[4/5] bg-gradient-to-b from-[#184831] to-[#113322] p-5 rounded-[2.5rem] border border-yellow-400/30 shadow-2xl flex flex-col items-center justify-between group overflow-hidden">
                
                {/* Vintage gold accent inner lines */}
                <div className="absolute inset-2 border border-yellow-400/10 rounded-[2.2rem] pointer-events-none"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>

                <span className="absolute top-3.5 right-3.5 p-1 rounded-full bg-emerald-900/30 text-yellow-300">
                  <Sparkles className="w-4 h-4" />
                </span>

                <div className="h-[76%] w-full flex items-center justify-center p-3 relative">
                  {/* MAIN ESSENTIAL PRODUCT IMAGE (YFb2ZHfd) */}
                  <motion.img 
                    src={mainProductImg}
                    alt="DXN Limonzhi"
                    className="h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] group-hover:scale-104 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                    whileHover={{ rotate: -1 }}
                  />
                </div>

                <div className="w-full text-center pb-2 z-10 bg-emerald-950/80 p-2.5 rounded-2xl border border-emerald-800/60 backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-yellow-350 font-mono tracking-widest uppercase">
                    {isRtl ? "مكونات نقية وعضوية" : "PREMIUM LEAVES & CITRUS"}
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    {isRtl ? "ليمونزي دي إكس إن (20 كيس)" : "DXN Limonzhi Sachet (20 Packs)"}
                  </p>
                </div>
              </div>

              {/* Mini thumbnails of package visual variations */}
              <div className="flex gap-3 mt-4">
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-yellow-400/25 p-1 flex items-center justify-center shadow-lg hover:border-yellow-400 transition-colors cursor-pointer">
                  <img src={secondaryImg1} alt="Box front" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-yellow-400/25 p-1 flex items-center justify-center shadow-lg hover:border-yellow-400 transition-colors cursor-pointer">
                  <img src={secondaryImg2} alt="Sachet details" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-14 h-14 bg-emerald-950/80 rounded-xl border border-yellow-400/25 p-1 flex items-center justify-center shadow-lg relative cursor-pointer" onClick={scrollToCheckout}>
                  <div className="absolute inset-0 bg-yellow-400/85 rounded-xl flex flex-col items-center justify-center text-[10px] font-black text-slate-950">
                    <span>140</span>
                    <span className="text-[7px]">DH</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-[#E8F3ED] px-3.5 py-1.5 rounded-full font-mono border border-emerald-100">
              🍋 {isRtl ? "مذاق الانتعاش ومكاسب الرفاهية" : "DAILY SENSORY WELLNESS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113122] leading-tight">
              {copy.benefitsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
              {copy.benefitsSub}
            </p>
          </div>

          {/* Dynamic Animated cards displaying natural benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              // Interactive micro-icon set for benefits
              const icons = [
                <Volume2 className="w-5 h-5 text-emerald-800" />,
                <Leaf className="w-5 h-5 text-emerald-800" />,
                <Sparkles className="w-5 h-5 text-emerald-800" />,
                <ChevronDown className="w-5 h-5 text-emerald-800 rotate-180" />,
                <ThumbsUp className="w-5 h-5 text-emerald-800" />,
                <Award className="w-5 h-5 text-emerald-800" />
              ];

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E4D9] shadow-xs flex gap-5 hover:bg-yellow-400/5 hover:border-yellow-400/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-2xl bg-[#F6F2E8] text-emerald-800 flex items-center justify-center self-start group-hover:bg-[#123E2A] group-hover:text-yellow-350 transition-colors shadow-xs">
                    {icons[index % icons.length]}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#113122] leading-tight">
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
      <section id="limonzhi-overview-section" className="py-20 sm:py-28 bg-white border-b border-stone-200/50 relative overflow-hidden">
        
        {/* Abstract background blobs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-yellow-400/5 blur-3xl pointer-events-none"></div>

              {/* Image 1: Main display front */}
              <div className="col-span-2 rounded-[2rem] bg-[#FAF8F3] p-5 border border-stone-200/80 shadow-xs flex items-center justify-center relative overflow-hidden group">
                <span className="absolute top-3 right-3 bg-yellow-400 text-slate-900 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest font-mono select-none">
                  {isRtl ? "مكونات طبيعية بالكامل" : "100% Active Source"}
                </span>
                <img 
                  src={secondaryImg1} 
                  alt="DXN Limonzhi packaging" 
                  className="w-[85%] h-56 object-contain group-hover:scale-105 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Texture element */}
              <div className="rounded-2xl bg-[#123E2A] p-4 text-white flex flex-col justify-between text-xs border border-emerald-800">
                <p className="font-mono text-[9px] text-yellow-355 font-bold uppercase tracking-widest">
                  {isRtl ? "مكون مميز" : "Active Element"}
                </p>
                <div className="my-3 space-y-1">
                  <p className="font-bold text-sm">Lemon Peel Extracts</p>
                  <p className="text-[11px] text-stone-300">
                    {isRtl ? "مستخلصات الليمون الغنية بمضادات الأكسدة والمنعشة." : "Vitamin-C rich citrus extracts that maintain cellular hydration."}
                  </p>
                </div>
                <span className="text-[9px] text-[#A7C8B7] italic">Pure DXN Quality</span>
              </div>

              {/* Sachet element */}
              <div className="rounded-2xl bg-[#EDE8DC] p-4 text-[#113122] flex flex-col justify-between text-xs border border-stone-200">
                <p className="font-mono text-[9px] text-emerald-800 font-bold uppercase tracking-widest">
                  {isRtl ? "مكافأة ممتازة" : "Fortified Compound"}
                </p>
                <div className="my-3 space-y-1">
                  <p className="font-bold text-sm">Ganoderma infused</p>
                  <p className="text-[11px] text-[#4A5D54]">
                    {isRtl ? "مستخلص فطر الجانوديرما لحماية التوازن العضوي اليومي." : "Gano extracts that restore cellular metabolism balance."}
                  </p>
                </div>
                <span className="text-[9.5px] font-bold text-emerald-900">{isRtl ? "مستورد أصلي" : "Fresh Import"}</span>
              </div>

            </div>

            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-yellow-400/10 px-3.5 py-1.5 rounded-full font-mono border border-yellow-400/20">
                ⭐ {copy.overviewTitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113122] leading-tight">
                {copy.overviewHeading}
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-semibold">
                <p>{copy.overviewParagraph1}</p>
                <p>{copy.overviewParagraph2}</p>
              </div>

              <div className="border-t border-stone-200 pt-6 mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block text-2.5xl font-black text-[#113122]">20 Sachet</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "مغلف بكل علبة" : "Packs Per Box"}</span>
                </div>
                <div className="text-center border-x border-stone-200">
                  <span className="block text-2.5xl font-black text-[#113122]">100%</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "طبيعي ونقي" : "Natural Source"}</span>
                </div>
                <div className="text-center">
                  <span className="block text-2.5xl font-black text-[#113122]">GMP</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono">{isRtl ? "تصنيع معتمد" : "Cert Verified"}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={scrollToCheckout}
                  className="px-6 py-3.5 bg-[#123E2A] hover:bg-[#1A573C] text-white font-extrabold rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>{isRtl ? "عرض باقات ليمونزي المتاحة" : "View Promo Packages"}</span>
                  <ArrowLeft className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-yellow-400/10 px-3.5 py-1.5 rounded-full font-mono border border-yellow-400/20">
              💎 {isRtl ? "مواصفات الفخامة والجودة" : "ELITE CRITERIA"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113122] leading-tight">
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
                className="bg-white rounded-2xl p-6.5 border border-[#E9E4D9] shadow-xs hover:border-yellow-450 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-850 flex items-center justify-center text-sm mb-4 font-mono font-extrabold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#113122] mb-2">
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

      {/* 5. HOW TO ENJOY SECTION */}
      <section className="py-20 bg-white border-b border-stone-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-[#E8F3ED] px-3.5 py-1.5 rounded-full font-mono border border-emerald-100">
              🧖‍♂️ {isRtl ? "طقوس الانتعاش والتحضير" : "PREPARATION RITUAL"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113122]">
              {copy.howToUseHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
              {copy.howToUseSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Steps visual focus card */}
            <div className="lg:col-span-5 justify-center flex relative">
              <div className="absolute w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none"></div>
              
              <div className="w-full max-w-sm rounded-[2rem] bg-[#FAF8F5] border border-[#E9E4D9] p-6.5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-yellow-400 to-[#123E2A]"></div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-extrabold bg-[#113122] text-yellow-300 px-3 py-1 rounded-lg">
                    {isRtl ? `الخطوة ${activeStepTab + 1}` : `STEP ${activeStepTab + 1}`}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{isRtl ? "روتين يومي صحي" : "DAILY WELLNESS"}</span>
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
                    <h4 className="text-lg font-black text-[#113122]">
                      {steps[activeStepTab]?.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
                      {steps[activeStepTab]?.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Aesthetic preparation hint */}
                <div className="mt-8 pt-5 border-t border-stone-200/80 flex justify-between items-center">
                  <span className="text-[11px] text-emerald-800 font-bold flex items-center gap-1.5 font-mono">
                    <Droplet className="w-4 h-4 fill-emerald-500/10" />
                    {isRtl ? "تحضير فوري بثوانٍ" : "Ready in seconds"}
                  </span>
                  
                  {/* Step dots */}
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveStepTab(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeStepTab === i ? 'bg-[#123E2A] w-5' : 'bg-stone-300'}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* List interaction Column */}
            <div className="lg:col-span-7 space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveStepTab(idx)}
                  className={`flex gap-5 p-4 rounded-2xl border cursor-pointer transition-all ${activeStepTab === idx ? 'bg-[#FAF8F5] border-yellow-400 shadow-md translate-x-2' : 'bg-transparent border-transparent hover:bg-stone-100/50'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${activeStepTab === idx ? 'bg-[#123E2A] text-white' : 'bg-stone-200 text-stone-500'}`}>
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h5 className={`font-bold text-xs sm:text-sm ${activeStepTab === idx ? 'text-[#113122] font-black' : 'text-stone-700'}`}>
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

          {/* Ice / Hot style hint */}
          <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-gradient-to-r from-[#123E2A] to-[#1E563B] text-slate-100 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-lg">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] text-yellow-350 font-bold uppercase tracking-widest font-mono">🌟 {isRtl ? "نصيحة الانتعاش الصيفي" : "COCKTAIL WELLNESS TIP"}</span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed text-stone-200">
                {isRtl ? "للحصول على تبريد سحري في الصيف، أفرغ الكيس في ماء مثلج وأضف مكعبات الثلج وأوراق النعناع الطازج وعصرة حامض دافئة ليروي عطشك بمذاق لا ينسى." : "For paramount cooling benefits, dissolve your sachet in chilled ice water, incorporating fresh mint leaves and key lime slices for a stellar botanical lemonade."}
              </p>
            </div>
            <button onClick={scrollToCheckout} className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-extrabold text-xs rounded-xl transition-all shrink-0 cursor-pointer">
              {isRtl ? "اطلب باقتك المنعشة" : "Secure Your Pack Now"}
            </button>
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE DXN SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Copy side */}
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-yellow-450/10 px-3.5 py-1.5 rounded-full font-mono border border-yellow-400/20">
                🎖️ {t.whyChooseUs}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113122] leading-tight">
                {copy.whyChooseHeading}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
                {copy.whyChooseSub}
              </p>

              <div className="space-y-3 pt-2">
                {whyChooseItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-3.5 rounded-xl bg-white border border-[#E9E4D9] hover:border-yellow-400/30 transition-colors">
                    <div className="p-1 rounded-full bg-emerald-50 text-emerald-800 shrink-0 self-start mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Global credentials visual panel */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-yellow-400/5 rounded-3xl blur-2xl pointer-events-none"></div>
              
              <div className="relative rounded-[2.5rem] bg-white p-6 sm:p-8 border border-[#E9E4D9] w-full max-w-md shadow-lg space-y-6">
                
                <h4 className="text-base sm:text-lg font-black text-[#113122] text-center border-b border-stone-200 pb-4">
                  {isRtl ? "شهادات وجدارة التميز لـ DXN" : "DXN Global Credentials"}
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-stone-100 text-center space-y-1 hover:border-yellow-400 transition-colors">
                    <span className="block text-xl">🛡️</span>
                    <span className="block text-xs font-bold text-stone-800">ISO 9001 / 14050</span>
                    <span className="block text-[9px] text-stone-400 font-mono">GMP Standards</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-stone-100 text-center space-y-1 hover:border-yellow-400 transition-colors">
                    <span className="block text-xl">🌱</span>
                    <span className="block text-xs font-bold text-slate-800">100% Organic Sourcing</span>
                    <span className="block text-[9px] text-stone-400 font-mono">+180 Countries</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-stone-100 text-center space-y-1 hover:border-yellow-400 transition-colors">
                    <span className="block text-xl">🕋</span>
                    <span className="block text-xs font-bold text-slate-800">Halal Certification</span>
                    <span className="block text-[9px] text-stone-400 font-mono">Clean processing</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-stone-100 text-center space-y-1 hover:border-yellow-400 transition-colors">
                    <span className="block text-xl">🔬</span>
                    <span className="block text-xs font-bold text-slate-800">TGA Approved</span>
                    <span className="block text-[9px] text-stone-400 font-mono">Tested Ingredients</span>
                  </div>
                </div>

                <div className="p-4 bg-[#123E2A] text-white rounded-2xl flex items-center gap-4 text-xs font-medium">
                  <ShieldCheck className="w-8 h-8 text-yellow-350 shrink-0" />
                  <p className="leading-relaxed">
                    {isRtl 
                      ? "جميع منتجات ليمونزي أصلية مائة بالمائة ومستوردة وفقاً للقوانين المعتمدة بالمغرب." 
                      : "We supply 100% authentic Limonzhi, freshly cataloged and imported securely."}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#C5A560] bg-yellow-400/10 px-3.5 py-1.5 rounded-full font-mono">
              ⭐ {isRtl ? "ثقة ورضا عملاء سميرة ناتورال" : "REAL CLIENT TESTIMONIALS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113122] leading-tight">
              {copy.reviewsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.reviewsSub}
            </p>
          </div>

          {/* Testimonials Bento Grid - Minimum 6 reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {limonzhiReviews[pl].map((review) => (
              <div 
                key={review.id}
                className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E9E4D9] hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative"
              >
                {/* Rating blocks */}
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400 stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold bg-white border border-emerald-100 px-2.5 py-1 rounded-md">
                    {isRtl ? "مشتري جاد" : "Verified order"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed font-semibold">
                  "{review.text}"
                </p>

                {/* Profile detail */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-stone-200">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover border border-yellow-400/30 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-extrabold text-xs text-stone-900">{review.name}</h5>
                    <span className="text-[9px] text-[#A76f11] font-bold font-mono tracking-wide">
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
      <section id="limonzhi-checkout-section" className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden relative border-b border-stone-250">
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#113122] bg-emerald-100 px-3.5 py-1.5 rounded-full font-mono border border-emerald-200">
              🛒 {isRtl ? "توصيل آمن بالمجان والدفع بعد الفحص" : "FAST BULK CHECKOUT - MOROCCO"}
            </span>
            <h2 className="text-3xl font-extrabold text-[#113122] leading-tight">
              {copy.packagesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Choose package cards */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-sm font-bold text-[#113122] uppercase tracking-wider font-mono flex items-center gap-2">
                <Package className="w-4 h-4 text-yellow-500" />
                <span>{isRtl ? "الكمية المطلوبة من ليمونزي" : "1. Choose Limonzhi Quantity"}</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4.5 rounded-3xl border border-[#E9E4D9] w-full sm:w-auto inline-flex justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-[#E9E4D9] flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-yellow-500 active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    -
                  </button>
                  <span className="text-xl font-black text-[#113122] min-w-[3rem] text-center font-mono select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.min(99, prev + 1))}
                    className="w-11 h-11 rounded-2xl bg-white border border-[#E9E4D9] flex items-center justify-center font-black text-slate-800 hover:bg-stone-50 hover:border-yellow-500 active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* UPSELLS INTEGRATION FOR HIGH BASKET SIZE */}
              <div className="bg-white rounded-3xl p-5 sm:p-6.5 border border-[#E9E4D9] space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#C5A560] font-mono tracking-widest">👑 {isRtl ? "عزّز روتينك الغذائي والصحي" : "COMPLETE WELLNESS COMPLIMENTARY UPGRADES"}</span>
                  <h4 className="text-sm font-extrabold text-stone-900">
                    {isRtl ? "إضافات مكملة حائزة على ثقة الملايين (تخفيض فوري خاص)" : "Complementary Healthy Add-ons (Special Bundled Pricing):"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Spirulina Addon */}
                  <div 
                    onClick={() => setAddSpirulina(!addSpirulina)}
                    className={`p-4 rounded-2xl bg-[#FAF8F5] border cursor-pointer transition-all flex items-center justify-between hover:border-[#113122]/50 ${addSpirulina ? 'border-[#113122] bg-[#E8F3ED]/30' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addSpirulina ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addSpirulina && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "سوبر سبيرولينا العضوية" : "Organic Spirulina Powder"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+260 DH <span className="line-through">310 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Coffee 3 in 1 Addon */}
                  <div 
                    onClick={() => setAddCoffee3in1(!addCoffee3in1)}
                    className={`p-4 rounded-2xl bg-[#FAF8F5] border cursor-pointer transition-all flex items-center justify-between hover:border-[#113122]/50 ${addCoffee3in1 ? 'border-[#113122] bg-[#E8F3ED]/30' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addCoffee3in1 ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addCoffee3in1 && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "قهوة لينجزي 3 في 1" : "Lingzhi 3in1 Coffee"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+140 DH <span className="line-through">180 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Toothpaste */}
                  <div 
                    onClick={() => setAddToothpaste(!addToothpaste)}
                    className={`p-4 rounded-2xl bg-[#FAF8F5] border cursor-pointer transition-all flex items-center justify-between hover:border-[#113122]/50 ${addToothpaste ? 'border-[#113122] bg-[#E8F3ED]/30' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addToothpaste ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addToothpaste && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "معجون أسنان جانوزي بلس" : "Ganozhi Toothpaste Plus"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+85 DH <span className="line-through">115 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Shampoo */}
                  <div 
                    onClick={() => setAddShampoo(!addShampoo)}
                    className={`p-4 rounded-2xl bg-[#FAF8F5] border cursor-pointer transition-all flex items-center justify-between hover:border-[#113122]/50 ${addShampoo ? 'border-[#113122] bg-[#E8F3ED]/30' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addShampoo ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addShampoo && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-900">
                          {isRtl ? "شامبو جانوزي الفاخر" : "Ganozhi Luxury Shampoo"}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold block">+120 DH <span className="line-through">150 DH</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[#A76f11] font-bold leading-relaxed bg-[#FAF3E5] p-3 rounded-xl border border-[#F2ECE0]">
                  💡 {isRtl ? "شراء أي باقة من باقات التوفير (علبتين فما فوق) يضمن لك شحناً مجانياً سريعاً مع متابعة طبية وإرشاد استخدام مخصص بالكامل من لالة سميرة." : "Buying any saving bundle automatically overrides normal shipping tariffs and ensures a fast priority delivery across the Moroccan map."}
                </p>
              </div>

            </div>

            {/* Right Column: Checkout Form */}
            <div className="lg:col-span-5 bg-white rounded-[2.5rem] border border-[#E9E4D9] p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-yellow-400 via-emerald-800 to-yellow-500"></div>

              <div className="space-y-2 mb-6 text-center">
                <h4 className="text-lg sm:text-xl font-black text-[#113122]">
                  {copy.checkoutHeading}
                </h4>
                <p className="text-xs text-stone-500 font-semibold leading-relaxed">
                  {copy.checkoutSub}
                </p>
              </div>

              {orderCompleted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-emerald-50 border border-emerald-250 text-emerald-950 rounded-2xl text-center space-y-4"
                >
                  <span className="text-4xl">🎉</span>
                  <p className="font-extrabold text-sm">
                    {isRtl ? "لقد تم إرساء وتوليف طلبك بنجاح!" : "Order forwarded successfully!"}
                  </p>
                  <p className="text-xs font-semibold leading-relaxed">
                    {isRtl 
                      ? "سنقوم بفتح محادثة الواتساب الآن وإرسال مسودة طلبك مباشرة لتستفيد من التجهيز الفوري السريع طوال اليوم." 
                      : "We are redirecting you to WhatsApp to instantly coordinate dynamic shipping logs."}
                  </p>
                  <button 
                    onClick={() => setOrderCompleted(false)}
                    className="text-xs font-bold text-emerald-800 underline block mx-auto pt-2 cursor-pointer"
                  >
                    {isRtl ? "تعديل الطلب والرجوع للوراء" : "Re-edit or create another order"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-5">
                  
                  {/* Name field */}
                  <div className="space-y-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-700 font-mono">
                      {copy.checkoutNameLabel}
                    </label>
                    <input 
                      type="text" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={isRtl ? "أدخل اسمك الكريم بالكامل" : "e.g., Slimane El Allam"}
                      required
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E9E4D9] bg-[#FAF8F5] focus:outline-none focus:border-[#123E2A] focus:ring-1 focus:ring-[#123E2A] text-[#113122] font-semibold"
                    />
                  </div>

                  {/* Delivery address field */}
                  <div className="space-y-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-700 font-mono">
                      {copy.checkoutAddressLabel}
                    </label>
                    <textarea 
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder={isRtl ? "أدخل عنوان سكنك التام الحالي والمدينة بالمغرب لتوجيه الموزع" : "e.g., Appt 12, Rue des Jasmin, Agadir"}
                      required
                      rows={3}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#E9E4D9] bg-[#FAF8F5] focus:outline-none focus:border-[#123E2A] focus:ring-1 focus:ring-[#123E2A] text-[#113122] font-semibold h-18 resize-none"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-700 font-mono">
                      {copy.checkoutPhoneLabel}
                    </label>
                    <input 
                      type="tel" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="0612345678"
                      required
                      className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border bg-[#FAF8F5] focus:outline-none transition-all text-[#113122] font-semibold ${
                        customerPhone && !isValidMoroccanPhone(customerPhone)
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-[#E9E4D9] focus:border-[#123E2A] focus:ring-1 focus:ring-[#123E2A]'
                      }`}
                    />
                    {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                      <p className="text-rose-500 text-[10px] font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                        المرجو إدخال رقم هاتف مغربي صحيح.
                      </p>
                    )}
                  </div>

                  {/* Cost Summary block */}
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-2.5">
                    <div className="flex justify-between items-center text-xs font-bold text-stone-600">
                      <span>{isRtl ? "سعر الباقة الأساسية:" : "Base pack price:"}</span>
                      <span>{getBasePrice()} DH</span>
                    </div>

                    {addSpirulina && (
                      <div className="flex justify-between items-center text-[11px] text-stone-550 font-bold">
                        <span>• {isRtl ? "سبيرولينا العضوية (+):" : "Organic Spirulina (+):"}</span>
                        <span>+260 DH</span>
                      </div>
                    )}
                    {addCoffee3in1 && (
                      <div className="flex justify-between items-center text-[11px] text-stone-550 font-bold">
                        <span>• {isRtl ? "قهوة لينجزي 3 في 1 (+):" : "Lingzhi 3in1 Coffee (+):"}</span>
                        <span>+140 DH</span>
                      </div>
                    )}
                    {addToothpaste && (
                      <div className="flex justify-between items-center text-[11px] text-stone-550 font-bold">
                        <span>• {isRtl ? "معجون أسنان جانوزي (+):" : "Ganozhi Toothpaste (+):"}</span>
                        <span>+85 DH</span>
                      </div>
                    )}
                    {addShampoo && (
                      <div className="flex justify-between items-center text-[11px] text-stone-550 font-bold">
                        <span>• {isRtl ? "شامبو جانوزي الفاخر (+):" : "Ganozhi Shampoo (+):"}</span>
                        <span>+120 DH</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-xs font-bold text-stone-600">
                      <span>{isRtl ? "تكاليف الشحن من لالة سميرة:" : "Moroccan Shipping Cost:"}</span>
                      <span className="text-emerald-800">
                        {quantity === 1 ? `+20 DH (${isRtl ? 'اقتصادي' : 'Standard'})` : (isRtl ? 'شحن فوري ومجاني' : 'Express FREE')}
                      </span>
                    </div>

                    <div className="border-t border-stone-200 pt-2 flex justify-between items-center text-sm font-extrabold text-[#113122]">
                      <span>{isRtl ? "المجموع للدفع عند الاستلام:" : "Total Cash on Delivery:"}</span>
                      <span className="text-[#A76f11] text-base font-black">
                        {calculateTotal() + (quantity === 1 ? 20 : 0)} DH
                      </span>
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs font-bold text-rose-500 text-center bg-rose-50 p-2.5 rounded-lg border border-rose-100">
                      ⚠️ {formError}
                    </p>
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
                    className="p-3.5 rounded-xl border border-emerald-600/25 bg-[#FAF6F0] hover:bg-white/80 transition-all cursor-pointer flex items-center justify-between gap-3 select-none hover:scale-[1.01] active:scale-99"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                      </span>
                      <span className="text-[11px] font-black text-slate-700">
                        {isRtl ? 'أيضاً في باقات متميزة بخصم إضافي' : lang === 'fr' ? 'Disponible dans nos packs exclusifs !' : 'Available in premium packs!'}
                      </span>
                    </div>
                    <span className="text-emerald-700 text-[11px] font-black shrink-0 flex items-center gap-1">
                      {isRtl ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                    className="w-full py-4 px-6 bg-gradient-to-r from-yellow-350 to-yellow-400 hover:from-yellow-450 hover:to-yellow-500 disabled:from-slate-300 disabled:to-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 text-slate-950 font-extrabold rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isOrdering ? (
                      <span className="w-5 h-5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin"></span>
                    ) : (
                      <>
                        <Phone className="w-4 h-4 fill-current stroke-none" />
                        <span>{copy.checkoutSubmitBtn}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2.5 text-[10px] text-emerald-800 font-extrabold bg-[#E8F3ED] py-2 rounded-xl border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{copy.secureCheckoutBadge}</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 9. TRUST BADGES / QUALITY STAMPS */}
      <section className="py-12 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">🏅</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "جودة فائقة وممتازة" : "Premium Quality"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "مكونات طبيعية بالكامل" : "No synthetic additives"}</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">🔍</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "منتج دي إكس إن الأصلي" : "Original DXN Product"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "مستورد من مكاتب المغرب" : "Direct batch logs"}</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">🔒</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "شراء آمن بالموقع" : "Secure Ordering"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "طلب مباشر عبر الواتساب" : "WhatsApp privacy"}</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">🚚</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "توصيل سريع ومضمون" : "Fast Delivery"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "لكل المدن المغربية بالمنزل" : "All Cities within 48h"}</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">😊</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "رضا العميل أولويتنا" : "Customer Satisfaction"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "إرشاد للمتابعة والاستعمال" : "Caring post-buy support"}</p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E4D9] space-y-1.5 hover:shadow-xs transition-shadow">
              <span className="text-2xl block">🌟</span>
              <h5 className="font-extrabold text-xs text-stone-900">{isRtl ? "علامة دي إكس إن العريقة" : "Trusted DXN Brand"}</h5>
              <p className="text-[9.5px] text-stone-400 font-bold">{isRtl ? "+30 عاماً من النقاء والتميز" : "30+ Years Global Trust"}</p>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION - Premium Accordion */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#113122] bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono">
              💡 {isRtl ? "الأسئلة الشائعة حول ليمونزي" : "FREQUENTLY ASKED QUESTIONS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113122]">
              {copy.faqHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
              {copy.faqSub}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E9E4D9] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left text-[#113122] font-extrabold text-xs sm:text-sm hover:bg-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                    style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                  >
                    <span className="max-w-[88%]">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-800 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1.5 border-t border-[#F1ECE0] text-xs sm:text-sm text-stone-500 leading-relaxed font-semibold">
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

      {/* 11. PREMIUM CALL TO ACTION SECTION */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[#123E2A] text-white">
        
        {/* Lemon Inspired background design elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-400/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-400/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
            <span className="text-yellow-400 text-xs sm:text-sm animate-pulse">🍋</span>
            <span className="text-yellow-105 font-bold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
              {isRtl ? "عرض محدود لعملاء سميرة ناتورال" : "Exclusive Direct Discount Promotion"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {copy.ctaHeading}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            {isRtl 
              ? "اجعل ليمونزي بديلك الأساسي للمشروبات الصناعية اليوم. احصل على التوازن واليقظة الطبيعية، ورطّب حواسك وجسمك برعاية لالة سميرة." 
              : "Upgrade your dietary hydration today. Quench thermal fatigue naturally and restore pure organic homeostasis with premium-sourced DXN components."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-350 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-950 font-extrabold rounded-xl transition-all shadow-xl shadow-yellow-400/10 hover:scale-103 cursor-pointer text-xs uppercase tracking-wider"
            >
              {copy.heroCTAOrder}
            </button>

            <a 
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(isRtl ? 'السلام عليكم لالة سميرة، أود الاستفسار والحصول على مزيد من المعلومات حول مشروب ليمونزي دي إكس إن وسعر الباقات' : 'Hello Samira, I would like to inquire about DXN Limonzhi sachet boxes and their current promo packs.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-extrabold rounded-xl transition-all border border-stone-200/30 hover:border-white/50 text-center text-xs tracking-wider cursor-pointer font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{copy.contactUs}</span>
            </a>
          </div>

          {/* Guarantee stamp */}
          <p className="text-[10px] text-stone-400 font-mono pt-3">
            {isRtl ? "طبيعي 100٪ • موزع رسمي معتمد • رعاية ومتابعة بمصر والمغرب" : "100% Certified DXN Distributor • Secure direct tracking logs"}
          </p>

        </div>
      </section>

    </div>
  );
}
