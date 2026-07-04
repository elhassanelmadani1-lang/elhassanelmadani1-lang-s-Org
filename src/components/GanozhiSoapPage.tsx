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
  Droplet,
  Flower2,
  Users,
  BadgeAlert
} from 'lucide-react';
import { 
  ganoSoapLandingCopy, 
  ganoSoapBenefits, 
  ganoSoapFeatures, 
  ganoSoapSteps, 
  ganoSoapReviews, 
  ganoSoapFAQs, 
  ganoSoapPacks,
  whyChooseSoapList,
  FAQItem,
  PackItem
} from '../data/ganoSoapData';

interface GanozhiSoapPageProps {
  lang: 'en' | 'fr' | 'ar' | 'es';
  isRtl: boolean;
  t: any;
  WHATSAPP_PHONE: string;
  setActiveView?: (view: string) => void;
}

export default function GanozhiSoapPage({ lang, isRtl, t, WHATSAPP_PHONE, setActiveView }: GanozhiSoapPageProps) {
  const pl = (lang === 'es' ? 'en' : lang) as 'en' | 'fr' | 'ar';
  const copy = ganoSoapLandingCopy[pl];
  const benefits = ganoSoapBenefits[pl];
  const features = ganoSoapFeatures[pl];
  const steps = ganoSoapSteps[pl];
  const faqs = ganoSoapFAQs[pl];
  const packs = ganoSoapPacks[pl];
  const whyChooseItems = whyChooseSoapList[pl];

  // Resolved High-Quality Soap Images from the user
  const mainProductImg = "https://i.ibb.co/TCQmWf0/image.png"; // Asasya
  const secondaryImg1 = "https://i.ibb.co/QvwnJrK9/image.png";   // Secondary image with foam & Reishi elements
  const secondaryImg2 = "https://i.ibb.co/wFcy8xDk/image.png";   // Secondary water-splashed product image

  // Checkout states
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  // Upsells / Cross-sells
  const [addMassageOil, setAddMassageOil] = useState(false);
  const [addShampoo, setAddShampoo] = useState(false);
  const [addToothpaste, setAddToothpaste] = useState(false);

  // General States
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Active step in how-to-use
  const [activeStepTab, setActiveStepTab] = useState(0);

  const getBasePrice = () => {
    return 75 * quantity;
  };

  const calculateTotal = () => {
    let price = getBasePrice();
    if (addMassageOil) price += 120;
    if (addShampoo) price += 120;
    if (addToothpaste) price += 85;
    return price;
  };

  const scrollToCheckout = () => {
    trackInitiateCheckout(quantity, calculateTotal());
    document.getElementById('soap-checkout-section')?.scrollIntoView({ behavior: 'smooth' });
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
    if (addMassageOil) upsellsText += `• ${lang === 'ar' ? 'زيت جانو للمساج الفاخر (+120 درهم)' : 'Huile de Massage Gano Luxe (+120 DH)'}\n`;
    if (addShampoo) upsellsText += `• ${lang === 'ar' ? 'شامبو جانوزي الفاخر (+120 درهم)' : 'Shampoing Premium Ganozhi (+120 DH)'}\n`;
    if (addToothpaste) upsellsText += `• ${lang === 'ar' ? 'معجون أسنان جانوزي بلس (+85 درهم)' : 'Dentifrice Ganozhi Plus (+85 DH)'}\n`;

    const freeShipping = quantity > 1;
    const finalBill = totalPrice + (quantity === 1 ? 20 : 0);

    const message = 
`🧼 ${lang === 'ar' ? 'طلب شراء جديد: صابون جانوزي الفاخر' : 'NOUVELLE COMMANDE: SAVON GANOZHI DXN'} 🧼

👤 ${isRtl ? 'اسم الزبون الكريم' : 'Nom du Client'}: ${customerName}
📍 ${isRtl ? 'عنوان الشحن والتوصيل' : 'Adresse de Livraison'}: ${customerAddress}
📞 ${isRtl ? 'رقم هاتف الواتساب' : 'Téléphone / WhatsApp'}: ${customerPhone}

----------------------------------------
📦 ${isRtl ? 'الكمية المطلوبة للصابون' : 'Quantité de savon Ganozhi'}:
• ${quantity} × ${isRtl ? 'صابون جانوزي الفاخر' : 'Savon Ganozhi DXN'} [${75 * quantity} DH]

➕ ${isRtl ? 'المنتجات الإضافية لروتينك' : 'Compagnons de Beauté'} (Cross-sells):
${upsellsText || (isRtl ? '• لا توجد إضافات' : '• Aucun add-on')}\n
🎁 ${isRtl ? 'مكافآت وامتيازات الباقة' : 'Avantages Spéciaux'}:
• ${isRtl ? 'الشحن والتوصيل' : 'Livraison'}: ${freeShipping ? (isRtl ? 'مجاني وسريع بالكامل 🚚' : 'توصيل محلي اقتصادي (+20 درهم)') : (isRtl ? 'توصيل محلي اقتصادي (+20 درهم)' : 'Livraison Standard (+20 DH)')}
• ${isRtl ? 'الإرشاد والمتابعة بروتينات العناية' : 'Suivi personnalisé'}: ${isRtl ? 'متابعة ورعاية مخصصة من سميرة ناتورال' : 'Conseils et accompagnement personnalisé par Samira'}
----------------------------------------
💵 ${isRtl ? 'المجموع الإجمالي للدفع' : 'TOTAL À PAYER'}: ${finalBill} DH

🚚 ${isRtl ? 'الدفع نقداً عند الاستلام بعد فحص المنتج ودقته.' : 'Paiement en espèces à la livraison après contrôle.'}`;

    setTimeout(() => {
      setIsOrdering(false);
      setOrderCompleted(true);
      trackPurchase(finalBill, 'MAD', ['soap']);
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
    <div id="dxn-soap-landing" className={`min-h-screen bg-[#FAF8F5] text-stone-800 ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white min-h-[95vh] flex items-center pt-28 pb-20 sm:py-36 border-b-2 border-[#C5A560]/30">
        
        {/* Soft Organic Ambient Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/25 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

        {/* Elegant Floating Botanical Leaves details */}
        <div className="absolute top-20 right-[15%] w-10 h-10 bg-emerald-400/5 rounded-full border border-emerald-500/20 flex items-center justify-center animate-bounce duration-[6000ms] hidden lg:flex">
          <Flower2 className="w-5 h-5 text-emerald-300 opacity-30" />
        </div>
        <div className="absolute bottom-20 left-[20%] w-12 h-12 bg-amber-400/5 rounded-full border border-amber-500/20 flex items-center justify-center animate-pulse hidden lg:flex">
          <Droplet className="w-5 h-5 text-amber-300 opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 lg:space-y-8"
            >
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800/40 border border-emerald-500/30 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                <span className="text-amber-400 text-xs sm:text-sm animate-pulse">✦</span>
                <span className="text-emerald-100 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                  {copy.heroBadge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-white leading-tight md:leading-[1.15] tracking-tight">
                {copy.heroTitle}
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-stone-200/95 leading-relaxed font-normal max-w-2xl">
                {copy.heroSub}
              </p>

              {/* Conversion bullet factors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  isRtl ? "🛁 تطهير لطيف وإحساس منعش بالنعومة" : "🛁 Gentle cleansing & lasting freshness",
                  isRtl ? "🌿 مدعم بفوائد فطر ريشي (الجانوديرما)" : "🌿 Reinforced with bio-active Reishi",
                  isRtl ? "🧼 رغوة كريمية فاخرة دون جفاف" : "🧼 Rich luxurious lather without dryness",
                  isRtl ? "🚚 توصيل سريع ليدك والدفع عند الاستلام" : "🚚 Hassle-free cash-on-delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-emerald-950/40 border border-emerald-500/10 p-2.5 rounded-xl">
                    <div className="p-1 rounded-md bg-emerald-800/70 text-amber-400">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-stone-100">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={scrollToCheckout}
                  className="px-8 py-4.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl hover:shadow-amber-500/10 hover:translate-y-[-2px] transition-all duration-300 text-center uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-5 stroke-[2.5]" />
                  <span>{copy.heroCTAOrder}</span>
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('soap-about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4.5 bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm rounded-2xl border border-white/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{copy.heroCTALearn}</span>
                </button>
              </div>

            </motion.div>

            {/* Hero Image / Presentation Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-gradient-to-tr from-emerald-500/10 to-amber-500/5 rounded-[3rem] p-4 border border-white/10 overflow-hidden flex items-center justify-center">
                
                {/* Micro circle pedestals */}
                <div className="absolute inset-10 border border-dashed border-white/10 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-16 border border-white/5 rounded-[2rem] pointer-events-none"></div>

                {/* Sparkling details */}
                <div className="absolute top-12 left-12 text-amber-400 opacity-60 animate-pulse">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="absolute bottom-16 right-16 text-emerald-400 opacity-50 animate-bounce duration-[4000ms]">
                  <Sparkles className="w-4 h-4" />
                </div>

                <motion.img 
                  src={mainProductImg}
                  alt="DXN Ganozhi Soap"
                  className="w-[90%] h-[90%] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  layoutId="product-main-soap"
                />
              </div>

              {/* Floating review count bubble */}
              <div className="absolute -bottom-4 right-4 sm:right-10 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-150/80 flex items-center gap-3 text-stone-900 z-20">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-800 text-amber-400 flex items-center justify-center text-[10px] font-black font-mono border-2 border-white">4.9</span>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-950 uppercase tracking-wider">{isRtl ? "ثقة مطلقة" : "Skincare Top Choice"}</span>
                  <span className="text-[9px] text-stone-500 font-bold">{isRtl ? "+550 عميل سعيد بمصر والمغرب" : "+550 Satisfied Customers"}</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
        
        {/* Soft geometric details */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A560]/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#916E2B] bg-[#FAF0DC] px-4 py-2 rounded-full border border-[#E9D5A6]/40 font-mono">
              💎 {isRtl ? "عناية متكاملة وصحة دائمية" : "NATURAL SKIN LUXURY DESCRIPTION"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl font-black text-[#1C352D] leading-tight">
              {copy.benefitsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold max-w-2xl mx-auto">
              {copy.benefitsSub}
            </p>
          </div>

          {/* Grid Layout of the 6 Premium Beautiful Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 sm:gap-8">
            {benefits.map((benefit, idx) => {
              // Custom design elements per card
              const bgIcons = [
                <Droplet className="w-6 h-6 text-[#916E2B]" />,
                <Sparkles className="w-6 h-6 text-[#916E2B]" />,
                <Flower2 className="w-6 h-6 text-[#916E2B]" />,
                <Award className="w-6 h-6 text-[#916E2B]" />,
                <Users className="w-6 h-6 text-[#916E2B]" />,
                <ShieldCheck className="w-6 h-6 text-[#916E2B]" />
              ];

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl border border-[#EADFC9]/50 shadow-[0_12px_30px_rgba(0,0,0,0.015)] p-6 sm:p-7 relative overflow-hidden hover:shadow-[0_20px_45px_rgba(197,165,96,0.05)] hover:border-[#C5A560] hover:translate-y-[-4px] transition-all duration-500 group"
                >
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A560]/10 to-transparent group-hover:via-[#C5A560]/50 transition-all"></div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0DC] flex items-center justify-center shrink-0 border border-[#E9D5A6]/20 transition-transform duration-500 group-hover:scale-110">
                      {bgIcons[idx % bgIcons.length]}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-[#1C352D] text-sm sm:text-base leading-snug group-hover:text-amber-700 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-stone-500 leading-relaxed font-semibold">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ABOUT THE PRODUCT SECTION (LUXURY SECTION WITH IMAGE) */}
      <section id="soap-about-section" className="py-20 sm:py-28 bg-[#F5EFE4]/40 border-y border-[#EADFC9]/30 relative overflow-hidden">
        
        {/* Soft vector circular highlights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Pedestal Side */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-square rounded-[2.5rem] bg-white p-5 border border-[#EADFC9] shadow-xl relative overflow-hidden luxury-shimmer">
                
                <div className="absolute inset-2 border border-dashed border-[#C5A560]/10 rounded-[2.2rem] pointer-events-none"></div>

                <img 
                  src={secondaryImg1} 
                  alt="Premium DXN Soap Details" 
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(28,53,45,0.06)] hover:scale-104 transition-transform duration-700 rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                <span className="absolute bottom-5 left-5 bg-emerald-800 text-white font-mono text-[9px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  ✨ {isRtl ? "تغذية طبيعية للبشرة" : "SKIN COMFORT FORMULA"}
                </span>
              </div>
            </div>

            {/* Explanatory Text Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#916E2B] font-mono block">
                  🛡️ {copy.overviewTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1C352D] leading-tight select-none">
                  {copy.overviewHeading}
                </h3>
              </div>

              <div className="space-y-4 text-stone-600 font-semibold text-xs sm:text-sm leading-relaxed">
                <p>{copy.overviewParagraph1}</p>
                <p>{copy.overviewParagraph2}</p>
              </div>

              {/* Mini benefit checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-[#EADFC9]/60 pt-6">
                {[
                  isRtl ? "✓ غني بالجانوديرما وفيتامين هـ" : "✓ Rich in Reishi & Natural Vitamin E",
                  isRtl ? "✓ قاعِدته طبيعية خالية من الكيماويات" : "✓ Organic soap base without harsh additives",
                  isRtl ? "✓ متوازن الحموضة تماماً للبشرة الحساسة" : "✓ pH-balanced specifically for facial tissues",
                  isRtl ? "✓ يزيل الأوساخ والدهون الميتة بفاعلية" : "✓ Seamlessly removes sweat and impurities"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 text-stone-750">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                    <span className="text-xs font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={scrollToCheckout}
                  className="px-6.5 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-black rounded-xl shadow-md transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-4 text-amber-400 stroke-[2.5]" />
                  <span>{isRtl ? "انتقل للعروض والأسعار ←" : "Explore Packages & Pricing ←"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 4. KEY FEATURES SECTION */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full font-mono border border-emerald-100/50">
              🧖‍♂️ {isRtl ? "مميزات الجودة الفائقة" : "PREMIUM INGREDIENT EXQUISITENESS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              {copy.featuresHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.featuresSub}
            </p>
          </div>

          {/* Clean bento styled feature list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7.5">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5]/80 rounded-[2rem] p-5.5 sm:p-7 border border-[#EADFC9]/30 hover:bg-white hover:border-[#1C352D] hover:shadow-xl transition-all duration-400 text-center space-y-3 relative group"
              >
                {/* Simulated serial key index */}
                <span className="text-[10px] font-mono text-[#C5A560] font-black tracking-widest uppercase block mb-1">
                  [ 0{idx + 1} / DXN-GZ ]
                </span>

                <h4 className="text-base font-extrabold text-[#1C352D] group-hover:text-amber-700 transition-colors">
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
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#1C352D] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono border border-[#EADFC9]">
              🚿 {isRtl ? "دليل الاستخدام اليومي" : "EASY SELF-CARE ROUTINE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              {copy.howToUseHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
              {copy.howToUseSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual steps side: Pedestal and details */}
            <div className="lg:col-span-5 justify-center flex relative">
              <div className="absolute w-72 h-72 rounded-full bg-amber-400/5 blur-3xl pointer-events-none"></div>
              
              {/* Central Premium Card explaining active step */}
              <div className="w-full max-w-sm rounded-[2rem] bg-white border border-[#EADFC9] p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-800 to-amber-500"></div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-extrabold bg-[#1C352D] text-amber-400 px-3 py-1 rounded-lg">
                    {isRtl ? `الخطوة ${activeStepTab + 1}` : `STEP ${activeStepTab + 1}`}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{isRtl ? "نظافة ورعاية" : "DAILY TOILETTE"}</span>
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

                {/* Simulated skincare properties detail */}
                <div className="mt-8 pt-5 border-t border-stone-100 flex justify-between items-center">
                  <span className="text-[11px] text-amber-700 font-bold flex items-center gap-1.5 font-mono">
                    <Droplet className="w-4 h-4 fill-amber-500/20 text-amber-600" />
                    {isRtl ? "استحمام صحي مثالي" : "Silky creamy texture"}
                  </span>
                  
                  {/* Slider Dots */}
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveStepTab(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeStepTab === i ? 'bg-emerald-800 w-5' : 'bg-stone-300'}`}
                        id={`step-dot-${i}`}
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
                  className={`flex gap-5 p-4 rounded-2xl border cursor-pointer transition-all ${activeStepTab === idx ? 'bg-white border-[#1C352D] shadow-md translate-x-2' : 'bg-transparent border-transparent hover:bg-stone-200/40'}`}
                  id={`step-container-${idx}`}
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

          {/* Secondary spa-styled illustration block with secondaryImg2 */}
          <div className="mt-14 p-6 sm:p-8 rounded-[2.5rem] bg-[#1C352D] text-stone-200 flex flex-col md:flex-row items-center gap-8 justify-between shadow-xl relative overflow-hidden border border-emerald-800/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-transparent to-transparent"></div>
            
            <div className="flex items-center gap-5 shrink-0 max-w-sm">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden shrink-0">
                <img src={secondaryImg2} alt="Soap detail" className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-[#C5A560] font-black uppercase tracking-wider font-mono">🌟 {isRtl ? "نصيحة خبراء" : "SKIN RITUAL TIP"}</span>
                <p className="text-xs text-stone-300 font-bold leading-relaxed">
                  {isRtl ? "للحصول على رغوة فخمة وغنية للغاية، افرك الصابونة ببطء بين كفيك واغسل بها الدوائر العلوية للوجه." : "Massage the thick lather for at least 30 seconds onto face pores before washing with clean water."}
                </p>
              </div>
            </div>

            <button onClick={scrollToCheckout} className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-lg">
              {isRtl ? "احصل على العرّض المتاح" : "Claim Premium Offer"}
            </button>
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE DXN SECTION */}
      <section className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Context/List Side */}
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#916E2B] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono border border-[#E9D5A6]/40">
                🎖️ {t.whyChooseUs}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
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
                    <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic side: Quality Credentials and trust labels */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-transparent to-transparent opacity-80 rounded-[3rem] blur-xl pointer-events-none"></div>
              
              <div className="relative rounded-[2.5rem] bg-stone-50/50 p-6 sm:p-8 border border-stone-200/80 w-full max-w-md shadow-lg space-y-6">
                
                <h4 className="text-base sm:text-lg font-black text-[#1C352D] text-center border-b border-stone-200 pb-4">
                  {isRtl ? "شهادات واعتمادات الصابون الفاخر" : "DXN Global Credentials"}
                </h4>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white rounded-2xl border border-stone-100 space-y-1 shadow-xs">
                    <span className="block text-2xl">🌱</span>
                    <span className="block text-[10px] font-extrabold text-stone-700 leading-tight">{isRtl ? "عضوي بالكامل" : "100% Organic"}</span>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-stone-100 space-y-1 shadow-xs">
                    <span className="block text-2xl">🧪</span>
                    <span className="block text-[10px] font-extrabold text-stone-700 leading-tight">{isRtl ? "مفحوص مختبرياً" : "Dermatologist Tested"}</span>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-stone-100 space-y-1 shadow-xs">
                    <span className="block text-2xl">🏆</span>
                    <span className="block text-[10px] font-extrabold text-stone-700 leading-tight">{isRtl ? "معايير GMP" : "GMP Certified"}</span>
                  </div>
                </div>

                <div className="bg-emerald-950 p-5 rounded-2xl text-center space-y-1.5 border border-emerald-900 shadow-md">
                  <span className="text-amber-400 font-mono text-[9px] font-black tracking-widest uppercase block">
                    ★ DXN SECURE GUARANTEE ★
                  </span>
                  <p className="text-[11px] text-stone-200 leading-relaxed font-bold">
                    {isRtl ? "صابون جانوزي مستخلص بالكامل من فطر الجانوديرما العضوي، خالٍ كلياً من الشحوم الحيوانية ومصنوع بتقنيات رائدة وصديقة للبيئة." : "Formulated with zero animal fat. DXN strictly practices premium environment-friendly organic extraction methods."}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS SECTION */}
      <section className="py-20 bg-[#FAF8F5] relative overflow-hidden border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#916E2B] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono border border-[#E9D5A6]/45">
              ⭐ {isRtl ? "تجارب وقصص نجاح" : "REVIEWS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              {copy.reviewsHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold text-center leading-relaxed">
              {copy.reviewsSub}
            </p>
          </div>

          {/* Elegant customer reviews grid (6 reviews) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ganoSoapReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-3xl p-6.5 sm:p-7 border border-[#EADFC9]/40 shadow-xs relative flex flex-col justify-between hover:scale-[1.02] hover:border-[#1C352D]/40 hover:shadow-lg transition-all duration-400"
              >
                <div>
                  {/* Star layout */}
                  <div className="flex text-amber-400 gap-1 mb-4" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-650 leading-relaxed font-semibold italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4.5 border-t border-[#F2ECE0]/70 pt-4" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-0.5">
                    <h5 className="font-extrabold text-[#1C352D] text-xs sm:text-sm">{review.name}</h5>
                    <span className="text-[10px] text-amber-600 font-extrabold tracking-wider block font-mono flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-800" />
                      {isRtl ? "زبون متفاعل مميز" : "Verified Buyer"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PACKAGES & INTERACTIVE CHECKOUT SECTION */}
      <section id="soap-checkout-section" className="py-20 sm:py-28 bg-white overflow-hidden relative border-b border-stone-200">
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C352D] bg-emerald-100/50 px-3.5 py-1.5 rounded-full font-mono border border-emerald-200/50">
              🛒 {isRtl ? "الاستلام محلي والدفع بعد المراجعة" : "SECURE FAST CHECKOUT SYSTEM"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              {copy.packagesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Package Cards & Upsells */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-sm font-bold text-[#1C352D] uppercase tracking-wider font-mono flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-500" />
                <span>{isRtl ? "الكمية المطلوبة من الصابون" : "1. Choose Soap Quantity"}</span>
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

              {/* Cross-Sellers Option Box to boost average order value */}
              <div className="bg-[#FAF8F5] rounded-3xl p-5 sm:p-7 border border-[#EADFC9]/60 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-700 font-mono tracking-widest">🧼 {isRtl ? "عزّز روتين النظافة والاستحمام الفاخر" : "UPGRADE YOUR BATHING LUXURY"}</span>
                  <h4 className="text-sm font-extrabold text-stone-900">
                    {isRtl ? "أضف منتجات DXN المتجانسة لزيادة الفوائد (خصم خاص اليوم)" : "Add complementary premium DXN wellness products:"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Upsell 1: Gano Massage Oil */}
                  <div 
                    onClick={() => setAddMassageOil(!addMassageOil)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addMassageOil ? 'border-[#1C352D] bg-[#1C352D]/5 shadow-xs' : 'border-stone-200'}`}
                    id="upsell-massage-oil"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addMassageOil ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addMassageOil && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-950">
                          {isRtl ? "زيت جانو الفاخر" : "DXN Gano Massage Oil"}
                        </span>
                        <span className="text-[9px] text-[#916E2B] font-bold block">+120 DH <span className="line-through text-stone-400">150 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Upsell 2: Shampoo */}
                  <div 
                    onClick={() => setAddShampoo(!addShampoo)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addShampoo ? 'border-[#1C352D] bg-[#1C352D]/5 shadow-xs' : 'border-stone-200'}`}
                    id="upsell-shampoo"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addShampoo ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addShampoo && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-950">
                          {isRtl ? "شامبو جانوزي الفاخر" : "DXN Ganozhi Shampoo"}
                        </span>
                        <span className="text-[9px] text-[#916E2B] font-bold block">+120 DH <span className="line-through text-stone-400">150 DH</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Upsell 3: Ganozhi Toothpaste */}
                  <div 
                    onClick={() => setAddToothpaste(!addToothpaste)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all flex items-center justify-between hover:border-[#1C352D]/55 ${addToothpaste ? 'border-[#1C352D] bg-[#1C352D]/5 shadow-xs' : 'border-stone-200'}`}
                    id="upsell-toothpaste"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center text-white ${addToothpaste ? 'bg-emerald-800' : 'border-stone-300'}`}>
                        {addToothpaste && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-950">
                          {isRtl ? "معجون أسنان بلس" : "DXN Toothpaste Plus"}
                        </span>
                        <span className="text-[9px] text-[#916E2B] font-bold block">+85 DH <span className="line-through text-stone-400">110 DH</span></span>
                      </div>
                    </div>
                  </div>

                </div>

                <p className="text-[10px] sm:text-xs text-emerald-800 font-semibold leading-relaxed">
                  💡 {isRtl ? "جمع هذه المنتجات المتكاملة لروتينك يمنحك رعاية ونقاء كاملين ويضمن لك التميز الدائم والشحن والتوصيل مجاناً ليدك." : "Bundling items unlocks complete personal care synergy while immediately validating free delivery."}
                </p>
              </div>

            </div>

            {/* Right Column: Premium Checkout Form Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] bg-gradient-to-br from-stone-900 to-slate-950 p-6 sm:p-8 text-white border-2 border-amber-500/10 shadow-2xl relative overflow-hidden">
                
                {/* Background ambient details */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>

                <h4 className="text-base sm:text-lg font-black text-white border-b border-white/10 pb-4 mb-6 flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-amber-500 text-slate-950"><Check className="w-4 h-4 stroke-[3]" /></span>
                  <span>{copy.checkoutHeading}</span>
                </h4>

                <AnimatePresence mode="wait">
                  {!orderCompleted ? (
                    <motion.form 
                      key="soap-checkout-form"
                      onSubmit={handleOrderSubmit}
                      className="space-y-4 sm:space-y-5"
                    >
                      <p className="text-[11px] text-stone-300 font-semibold">
                        {copy.checkoutSub}
                      </p>

                      {formError && (
                        <div className="p-3 bg-red-950/80 border border-red-500/30 text-red-200 rounded-xl text-xs font-bold flex items-center gap-2">
                          <BadgeAlert className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{formError}</span>
                        </div>
                      )}

                      {/* Customer Name Input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-stone-300 block">{copy.checkoutNameLabel}</label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={isRtl ? "مثال: مريم العلمي" : "e.g. Maryam Alami"}
                          className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-semibold"
                        />
                      </div>

                      {/* Customer Address Input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-stone-300 block">{copy.checkoutAddressLabel}</label>
                        <input
                          type="text"
                          required
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder={isRtl ? "مثال: حي الرياض، شارع النخيل، شقة 4، الرباط" : "e.g. Hay Riad, Rabat"}
                          className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-semibold"
                        />
                      </div>

                      {/* Customer WhatsApp Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-stone-300 block">{copy.checkoutPhoneLabel}</label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder={isRtl ? "مثال: 0612345678" : "e.g. +212 612 345 678"}
                          className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-xs sm:text-sm text-white focus:outline-none transition-all font-semibold ${
                            customerPhone && !isValidMoroccanPhone(customerPhone)
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-white/15 focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                          }`}
                        />
                        {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                          <p className="text-rose-400 text-[10px] font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                            المرجو إدخال رقم هاتف مغربي صحيح.
                          </p>
                        )}
                      </div>

                      {/* Total Pricing Box */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5 space-y-2.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-stone-300">{isRtl ? "سعر الصابون الإجمالي" : "Total Soap Price"}</span>
                          <span className="font-extrabold text-white">{getBasePrice()} DH</span>
                        </div>

                        {(addMassageOil || addShampoo || addToothpaste) && (
                          <div className="space-y-1 pb-2 border-b border-white/5">
                            <span className="text-[10px] text-[#C5A560] font-black uppercase tracking-widest block font-mono">
                              {isRtl ? "المنتجات الإضافية" : "Selected Add-ons"}
                            </span>
                            {addMassageOil && (
                              <div className="flex justify-between text-[11px] text-stone-400">
                                <span>• {isRtl ? "زيت جانو الفاخر" : "DXN Massage Oil"}</span>
                                <span>+120 DH</span>
                              </div>
                            )}
                            {addShampoo && (
                              <div className="flex justify-between text-[11px] text-stone-400">
                                <span>• {isRtl ? "شامبو جانوزي" : "Ganozhi Shampoo"}</span>
                                <span>+120 DH</span>
                              </div>
                            )}
                            {addToothpaste && (
                              <div className="flex justify-between text-[11px] text-stone-400">
                                <span>• {isRtl ? "معجون أسنان بلس" : "Ganozhi Toothpaste"}</span>
                                <span>+85 DH</span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex justify-between items-center text-xs">
                          <span className="text-stone-300">{isRtl ? "تكلفة الشحن والتوصيل" : "Courier Delivery"}</span>
                          <span className="font-bold text-amber-400">
                            {quantity === 1 ? `+20 DH (${isRtl ? 'اقتصادي استثنائي' : 'Std Delivery'})` : (isRtl ? "مجاني وسريع 🚚" : "FREE regional 🚚")}
                          </span>
                        </div>

                        <div className="flex justify-between items-baseline pt-2.5 border-t border-white/10 text-stone-100">
                          <span className="font-bold text-sm">{isRtl ? "المجموع الإجمالي المستحق" : "NET AMOUNT TO PAY"}</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2.5xl font-black text-amber-400">
                              {calculateTotal() + (quantity === 1 ? 20 : 0)}
                            </span>
                            <span className="text-xs font-bold text-amber-400">DH</span>
                          </div>
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

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                        className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 disabled:from-stone-800 disabled:to-stone-900 disabled:text-stone-500 disabled:cursor-not-allowed disabled:opacity-50 text-slate-950 font-black text-xs sm:text-sm rounded-xl tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-1px] cursor-pointer shadow-lg shadow-amber-500/5"
                      >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>{isOrdering ? (isRtl ? "جاري تحضير طلبك..." : "Processing order...") : copy.checkoutSubmitBtn}</span>
                      </button>

                      <div className="text-center pt-2">
                        <span className="text-[10px] text-stone-400 font-semibold block bg-white/5 py-1.5 rounded-lg border border-white/5">
                          🛡️ {copy.secureCheckoutBadge}
                        </span>
                      </div>

                    </motion.form>
                  ) : (
                    <motion.div 
                      key="soap-checkout-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-800 text-amber-400 mx-auto flex items-center justify-center text-2xl shadow-xl">
                        ✓
                      </div>
                      <h4 className="text-lg font-black text-white">{isRtl ? "شكراً جزيلاً لثقتك بنا!" : "Thank you for your order!"}</h4>
                      <p className="text-xs text-stone-300 leading-relaxed font-semibold max-w-sm mx-auto">
                        {isRtl 
                          ? "تم توجيه طلبك بنجاح للواتساب لربطه برعاية سميرة ناتورال وتنسيق الشحن السريع في نفس اليوم." 
                          : "Your order details have been successfully prepared and opened in WhatsApp. Samira will coordinate shipping details immediately."}
                      </p>
                      <button 
                        onClick={() => setOrderCompleted(false)}
                        className="mt-4 text-xs font-bold text-amber-400 hover:underline"
                      >
                        ← {isRtl ? "العودة لتعديل الطلب" : "Go back to edit order"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. TRUST BADGES ROW */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            {[
              { icon: <Award className="w-7 h-7 text-emerald-800 mx-auto" />, ar: "جودة معتمدة", en: "Premium Quality" },
              { icon: <Check className="w-7 h-7 text-emerald-800 mx-auto" />, ar: "منتج أصلي 100٪", en: "100% Original DXN" },
              { icon: <ShieldCheck className="w-7 h-7 text-emerald-800 mx-auto" />, ar: "طلب مأمون بالكامل", en: "Secure Ordering" },
              { icon: <Truck className="w-7 h-7 text-emerald-800 mx-auto" />, ar: "توصيل سريع وآمن", en: "Fast Delivery" },
              { icon: <HeartHandshake className="w-7 h-7 text-emerald-800 mx-auto" />, ar: "رضا العملاء الكامل", en: "Satisfaction Guaranteed" },
              { icon: <Star className="w-7 h-7 text-emerald-800 mx-auto fill-emerald-800/20" />, ar: "دي إكس إن الموثوقة", en: "Trusted DXN Brand" }
            ].map((badge, index) => (
              <div key={index} className="space-y-2 p-3 hover:translate-y-[-2px] transition-transform duration-300">
                <div className="p-2.5 rounded-full bg-stone-50 border border-stone-100 w-12 h-12 flex items-center justify-center mx-auto">
                  {badge.icon}
                </div>
                <h5 className="text-xs font-extrabold text-stone-900">{isRtl ? badge.ar : badge.en}</h5>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C352D] bg-[#FAF0DC] px-3.5 py-1.5 rounded-full font-mono border border-[#EADFC9]">
              💡 {isRtl ? "مكتبة المعرفة والأسئلة" : "MORE KNOWLEDGE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight select-none">
              {copy.faqHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-semibold">
              {copy.faqSub}
            </p>
          </div>

          {/* Premium Accordion with smooth transitions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-stone-100 hover:border-stone-200 shadow-xs overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 flex justify-between items-center text-stone-900 text-left cursor-pointer focus:outline-none"
                    style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}
                    id={`faq-button-${index}`}
                  >
                    <span className="text-xs sm:text-sm font-extrabold pr-4 text-[#1C352D] leading-relaxed">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-stone-50"
                      >
                        <p className="p-5 text-xs sm:text-sm text-stone-500 font-semibold leading-relaxed">
                          {faq.a}
                        </p>
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
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#1C352D] to-emerald-950 text-white relative overflow-hidden border-t border-amber-500/20">
        
        {/* Decorative backdrop graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800/35 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="text-amber-400 text-xs sm:text-sm animate-pulse">✦</span>
            <span className="text-emerald-100 font-extrabold text-[10px] sm:text-xs uppercase tracking-widest font-mono">
              {isRtl ? "احصل على صابون جانوزي اليوم" : "Elevate Your Skin Routine Today"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-black text-white leading-tight">
            {isRtl ? "اجعل العناية اليومية بالبشرة تجربة أكثر فخامة مع صابون Ganozhi" : "Make Daily Personal Skincare More Luxurious with Ganozhi Soap"}
          </h2>

          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal max-w-2xl mx-auto">
            {isRtl 
              ? "صابون فاخر بجودة دي إكس إن العالمية مدعم بالفطر الريشي الطبيعي ينظف بلطف ويغذي بمتياز. ابدأ اهتمامك بنفسك اليوم."
              : "Re-explore true organic skin comfort. A pure, foaming, dense soap trusted by millions. Order yours at local wholesale pricing."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4.5 pt-4">
            <button 
              onClick={scrollToCheckout}
              className="px-8 py-4.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              <span>{isRtl ? "اطلب الآن بقيمة مخفضة" : "Order Bulk Deals Now"}</span>
            </button>
            
            <a 
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(isRtl ? "مرحباً سميرة، أرغب بالاستفسار عن صابون جانوزي الفاخر ومعرفة المزيد من فوائده للبشرة." : "Hello Samira, I would like to know more details about Ganozhi Soap.")}`}
              target="_blank"
              className="px-8 py-4.5 bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm rounded-2xl border border-white/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400/10" />
              <span>{isRtl ? "تواصل معنا للاستفسار" : "Chat for Skincare Guidance"}</span>
            </a>
          </div>

          <div className="pt-4 flex justify-center gap-3.5 text-[10px] text-stone-300 font-semibold flex-wrap">
            <span>🛡️ {isRtl ? "ضمان الجودة والتبديل" : "100% Satisfaction Guarantee"}</span>
            <span className="text-amber-500 hidden sm:inline">|</span>
            <span>🚚 {isRtl ? "شحن مجاني لكافة المدن عند طلب كميات" : "Free Courier Shipping on Bulk"}</span>
            <span className="text-amber-500 hidden sm:inline">|</span>
            <span>💼 {isRtl ? "إشراف ومتابعة مع الأخصائية سميرة ناتورال" : "Assisted by Samira Naturale"}</span>
          </div>

        </div>

      </section>

    </div>
  );
}
