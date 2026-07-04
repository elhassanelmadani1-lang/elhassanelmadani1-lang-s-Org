import { useState, useEffect, FormEvent, useRef } from 'react';
import { trackInitiateCheckout, trackPurchase } from '../utils/metaPixel';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  Phone,
  MapPin,
  Check,
  Plus,
  Minus,
  Lock,
  Star,
  MessageCircle,
  Clock,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  Gift,
  ShoppingBag,
  ThumbsUp
} from 'lucide-react';
import { productsData } from '../translations';
import { generateOrderMessage } from '../utils/orderMessageHelper';
const logoImg = 'https://i.ibb.co/BScXT93/16e2c2de-c552-451e-bde1-1d22720f0ba4-1.png';

interface PremiumCheckoutFormProps {
  productId: string;
  lang: 'ar' | 'fr' | 'en' | 'es';
  spirulinaVariant?: '120' | '500';
  onOrderCompleted?: (orderDetails: any) => void;
  onNavigateHome?: () => void;
}

const WHATSAPP_PHONE = '212648834419';

// Categories mapping to determine intelligent bundle offers and related products
const getProductCategory = (id: string): 'superfood' | 'beverage' | 'personal_care' | 'cosmetics' => {
  if (id === 'spirulina' || id === 'reishilium' || id === 'reishi_gano') return 'superfood';
  if (id === 'coffee' || id === 'coffee3in1' || id === 'limonzhi') return 'beverage';
  if (['aromaticShowerGel', 'aromaticBodyLotion', 'handCream', 'lipBalm', 'faceMask', 'eyeCream', 'faceSerum', 'faceCream', 'nightOil', 'dryOil'].includes(id)) return 'cosmetics';
  return 'personal_care';
};

export default function PremiumCheckoutForm({
  productId,
  lang: inputLang,
  spirulinaVariant = '120',
  onOrderCompleted,
  onNavigateHome
}: PremiumCheckoutFormProps) {
  const lang = (inputLang === 'es' ? 'en' : inputLang) as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';
  const category = getProductCategory(productId);

  // --- Multi-Language Translatable Dictionary for CRO ---
  const t = {
    ar: {
      freeShippingProgress: (remaining: number) => `أضف فقط ${remaining} درهم واحصل على التوصيل المجاني ✨`,
      freeShippingReached: '✓ تهانينا! لقد حصلت على توصيل مجاني وسريع بالمغرب 🎁',
      addMoreTitle: 'العملاء الذين اشتروا هذا المنتج أضافوا أيضاً 🔥',
      addMoreSub: 'عزز باقتك بمنتجات دي إكس إن الطبيعية بضغطة زر واحدة ودون مغادرة الصفحة',
      addToOrder: 'أضف للطلب',
      addedToOrder: '✓ مضاف للطلب',
      bundleTitle: '🔥 باقات التوفير الفائقة بخصم إضافي وشحن مجاني',
      bundleSub: 'وفر حتى 15% واحصل على باقة متكاملة للصحة والجمال والوقاية',
      orderSummary: 'ملخص الفاتورة المباشرة',
      mainProduct: 'المنتج الرئيسي',
      additionalProducts: 'المنتجات الإضافية المضافة',
      shipping: 'مصاريف الشحن والتوصيل',
      free: 'مجاني بالكامل',
      subtotal: 'المجموع الفرعي للمنتجات',
      discount: 'خصم الكمية والعروض',
      totalPayable: 'المجموع المستحق عند الاستلام',
      saveAmount: 'لقد وفرت {amount} درهم!',
      urgencyText: 'تم طلب هذا المنتج 27 مرة خلال آخر 48 ساعة ⚡',
      limitedStock: '⚠️ الكمية المتوفرة محدودة جداً! العرض الحالي قد ينتهي قريباً',
      boosters: [
        'منتجات دي إكس إن أصلية ومضمونة 100%',
        'الدفع نقداً عند الاستلام المباشر بالمنزل',
        'توصيل سريع وموثوق لجميع مدن وقرى المغرب',
        'متابعة واستشارة مجانية عبر واتساب مع لالة سميرة',
        'ضمان الجودة الفائقة والرضا التام'
      ],
      confirmButton: 'تأكيد طلبي الآن والدفع عند الاستلام',
      submitting: 'جاري تسجيل طلبك المباشر...',
      whatsappCta: 'أرسل تفاصيل طلبي عبر واتساب الآن لتأكيد الشحن الفوري 🚀',
      backToStore: 'الرجوع للمتجر الرئيسي',
      trustTitle: 'لماذا تشتري من لالة سميرة؟',
      helpTitle: 'هل تحتاج إلى مساعدة في اختيار المنتج؟',
      helpSub: 'لالة سميرة تجيبكم مباشرة على الواتساب',
      helpCta: 'استشارة واتساب مباشرة',
      reviewsTitle: 'آراء وتجارب عملاء حقيقيين للطلب:',
      exitConfirmTitle: 'هل تريد مغادرة صفحة الطلب؟',
      exitConfirmDesc: 'لقد قمت بإدخال معلومات التوصيل الخاصة بك. إذا غادرت الآن، ستفقد هذه المعلومات ويتعين عليك إدخالها مجدداً.',
      exitConfirmStay: 'البقاء وإكمال الطلب',
      exitConfirmLeave: 'نعم، مغادرة الصفحة',
      moroccoNotice: '🚚 تذكير: التوصيل مجاني لطلبك الحالي لجميع المدن المغربية',
      recommendationTitle: 'العملاء الذين اشتروا هذا المنتج أضافوا أيضاً',
      packsOption: 'أيضاً في باقات متميزة بخصم إضافي'
    },
    fr: {
      freeShippingProgress: (remaining: number) => `Ajoutez encore ${remaining} DH pour profiter de la livraison gratuite ! ✨`,
      freeShippingReached: '✓ Félicitations ! Vous avez débloqué la livraison gratuite ! 🎁',
      addMoreTitle: 'Les clients qui ont acheté ce produit ont aussi ajouté 🔥',
      addMoreSub: 'Complétez votre commande en un seul clic, sans quitter la page !',
      addToOrder: 'Ajouter au colis',
      addedToOrder: '✓ Ajouté au colis',
      bundleTitle: '🔥 Packs Économiques Spéciaux & Packs Cadeaux',
      bundleSub: 'Économisez jusqu\'à 15% sur des sélections bien-être complètes !',
      orderSummary: 'Récapitulatif de Commande',
      mainProduct: 'Produit principal',
      additionalProducts: 'Articles additionnels',
      shipping: 'Frais de livraison express',
      free: 'GRATUIT',
      subtotal: 'Sous-total des articles',
      discount: 'Remises spéciales cumulées',
      totalPayable: 'Total net à payer à la livraison',
      saveAmount: 'Économie de {amount} DH !',
      urgencyText: 'Commandé 27 fois au Maroc ces dernières 48 heures ⚡',
      limitedStock: '⚠️ Quantités limitées ! L’offre en cours peut expirer à tout moment.',
      boosters: [
        'Produits DXN 100% Authentiques et certifiés',
        'Paiement sécurisé en espèces à la livraison (COD)',
        'Livraison express à domicile partout au Maroc',
        'Conseils personnalisés gratuits par Samira',
        'Garantie de qualité et de satisfaction'
      ],
      confirmButton: 'Confirmer ma commande maintenant',
      submitting: 'Enregistrement en cours...',
      whatsappCta: 'Envoyer ma commande sur WhatsApp pour envoi immédiat 🚀',
      backToStore: 'Retourner à la boutique',
      trustTitle: 'Pourquoi choisir Samira Naturale ?',
      helpTitle: 'Besoin d\'aide pour commander ?',
      helpSub: 'Samira vous répond directement sur WhatsApp',
      helpCta: 'Assistance WhatsApp Directe',
      reviewsTitle: 'Retours de clients vérifiés au Maroc :',
      exitConfirmTitle: 'Quitter la page de commande ?',
      exitConfirmDesc: 'Vous avez commencé à remplir vos coordonnées. Si vous quittez, vos données seront perdues.',
      exitConfirmStay: 'Rester et commander',
      exitConfirmLeave: 'Oui, abandonner',
      moroccoNotice: '🚚 Rappel : Livraison gratuite sur votre commande en cours',
      recommendationTitle: 'Les clients qui ont acheté ce produit ont aussi ajouté',
      packsOption: 'Également disponible dans nos packs exclusifs avec réduction !'
    },
    en: {
      freeShippingProgress: (remaining: number) => `Add only ${remaining} DH to get free shipping! ✨`,
      freeShippingReached: '✓ Congratulations! You got 100% free shipping! 🎁',
      addMoreTitle: 'Customers who bought this also added 🔥',
      addMoreSub: 'Upgrade your pack in one single click, no page reloads!',
      addToOrder: 'Add to Order',
      addedToOrder: '✓ Added to Order',
      bundleTitle: '🔥 Smart Bundles with Extra Discounts & Free Shipping',
      bundleSub: 'Save up to 15% and get a complete certified organic routine!',
      orderSummary: 'Live Order Summary',
      mainProduct: 'Main Product',
      additionalProducts: 'Additional Products',
      shipping: 'Morocco Express Shipping',
      free: 'FREE SHIPPING',
      subtotal: 'Subtotal of items',
      discount: 'Cumulative special discount',
      totalPayable: 'Total payable on delivery',
      saveAmount: 'You save {amount} DH!',
      urgencyText: 'Ordered 27 times in Morocco within the last 48 hours ⚡',
      limitedStock: '⚠️ Very limited stock left! The current offer may end soon.',
      boosters: [
        '100% Genuine and Certified DXN Products',
        'Secure Cash On Delivery (COD) at your door',
        'Fast shipping across all Moroccan cities & villages',
        'Direct free coaching & consultation with Samira',
        '100% satisfaction & purity guaranteed'
      ],
      confirmButton: 'Confirm My Order Now',
      submitting: 'Processing your order...',
      whatsappCta: 'Send Order Details to WhatsApp to Ship Now 🚀',
      backToStore: 'Back to Main Store',
      trustTitle: 'Why Order From Samira?',
      helpTitle: 'Need help or wellness advice?',
      helpSub: 'Samira is online right now on WhatsApp',
      helpCta: 'Chat on WhatsApp Now',
      reviewsTitle: 'Verified Client Reviews:',
      exitConfirmTitle: 'Leave Order Page?',
      exitConfirmDesc: 'You have entered delivery details. Leaving now will clear them.',
      exitConfirmStay: 'Stay and complete order',
      exitConfirmLeave: 'Yes, leave page',
      moroccoNotice: '🚚 Reminder: Free shipping is active on your current order',
      recommendationTitle: 'Customers who bought this also added',
      packsOption: 'Also available in premium packs with an additional discount!'
    }
  }[lang];

  // --- Form Inputs ---
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [qty, setQty] = useState(1);

  // --- Dynamic Upsell & Bundle State ---
  // Store additional products added to order as { [productId]: quantity }
  const [additionalItems, setAdditionalItems] = useState<Record<string, number>>({});
  // Store bundles added to order as { [bundleId]: quantity }
  const [activeBundles, setActiveBundles] = useState<Record<string, number>>({});

  // --- UI States ---
  const [isOrdering, setIsOrdering] = useState(false);
  const [formError, setFormError] = useState('');
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [stockCount, setStockCount] = useState(17);
  const [orderSuccessData, setOrderSuccessData] = useState<any | null>(null);

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('samira_naturale_cust');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setCustomerName(parsed.name);
        if (parsed.address) setCustomerAddress(parsed.address);
        if (parsed.phone) setCustomerPhone(parsed.phone);
      }
    } catch (e) {
      console.error("Failed to load saved customer details", e);
    }
  }, []);

  const hasInitiatedCheckoutRef = useRef(false);
  useEffect(() => {
    if (!hasInitiatedCheckoutRef.current) {
      // Calculate local grand total safely
      let localAddPrice = 0;
      Object.entries(additionalItems).forEach(([id, q]) => {
        const numQty = Number(q) || 0;
        if (numQty > 0) {
          const info = getProductInfo(id);
          localAddPrice += info.price * numQty;
        }
      });
      let localBundlesPrice = 0;
      Object.entries(activeBundles).forEach(([id, q]) => {
        const numQty = Number(q) || 0;
        if (numQty > 0) {
          const b = bundles.find(item => item.id === id);
          if (b) {
            localBundlesPrice += b.discountedPrice * numQty;
          }
        }
      });
      const localMainProductPrice = getProductInfo(productId).price * qty;
      const localSubtotal = localMainProductPrice + localAddPrice + localBundlesPrice;
      let localDiscountPercentage = 0;
      if (qty === 3) localDiscountPercentage = 5;
      else if (qty >= 4) localDiscountPercentage = 10;
      const localMainProductDiscount = Math.round((localMainProductPrice * localDiscountPercentage) / 100);
      const localGrandTotal = localSubtotal - localMainProductDiscount;

      if (localGrandTotal > 0) {
        hasInitiatedCheckoutRef.current = true;
        const totalItems = qty + Object.values(additionalItems).reduce((acc, count) => Number(acc) + (Number(count) || 0), 0);
        const contents = [
          { id: productId, quantity: qty },
          ...Object.entries(additionalItems).map(([id, quantity]) => ({ id, quantity: Number(quantity) || 0 }))
        ];
        trackInitiateCheckout(
          totalItems,
          localGrandTotal,
          'MAD',
          contents,
          contents.map(c => c.id)
        );
      }
    }
  }, [productId, qty, additionalItems, activeBundles]);

  // Save data to localStorage on changes
  useEffect(() => {
    try {
      const dataToSave = { name: customerName, address: customerAddress, phone: customerPhone };
      localStorage.setItem('samira_naturale_cust', JSON.stringify(dataToSave));
    } catch (e) {
      console.error("Failed to save customer details", e);
    }
  }, [customerName, customerAddress, customerPhone]);

  // Prevent accidental page exit via browser actions
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (customerName.trim() || customerAddress.trim() || customerPhone.trim()) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [customerName, customerAddress, customerPhone]);

  // Dynamic stock depletion simulation to drive urgency
  useEffect(() => {
    const interval = setInterval(() => {
      setStockCount(prev => (prev > 4 ? prev - (Math.random() > 0.85 ? 1 : 0) : prev));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // --- Helper to Retrieve Product Details Dynamic ---
  const getProductInfo = (id: string) => {
    if (id === 'spirulina') {
      const spPrice = spirulinaVariant === '120' ? 190 : 490;
      const spName = spirulinaVariant === '120'
        ? (isRtl ? 'سبيرولينا عضوية دي إكس إن (120 حبة)' : 'Spiruline Biologique DXN (120 caps)')
        : (isRtl ? 'سبيرولينا عضوية دي إكس إن (500 حبة)' : 'Spiruline Biologique DXN (500 caps)');
      return {
        id: 'spirulina',
        name: spName,
        price: spPrice,
        image: spirulinaVariant === '120' ? 'https://i.ibb.co/1tMCDQsD/image.png' : 'https://i.ibb.co/xST3WmwW/image.png',
        benefits: productsData.spirulina[lang]?.benefits || []
      };
    }

    if (id === 'reishilium' || id === 'reishilium_small') {
      return {
        id: 'reishilium_small',
        name: isRtl ? 'مسحوق ريشيليوم (22 غرام)' : 'Reishilium Powder (22g)',
        price: 401,
        image: 'https://i.ibb.co/LhsPdhTv/image.png',
        benefits: productsData.reishilium[lang]?.benefits || []
      };
    }

    if (id === 'reishilium_large') {
      return {
        id: 'reishilium_large',
        name: isRtl ? 'مسحوق ريشيليوم (70 غرام)' : 'Reishilium Powder (70g)',
        price: 1226,
        image: 'https://i.ibb.co/PZMWLpRv/image.png',
        benefits: productsData.reishilium[lang]?.benefits || []
      };
    }

    if (id === 'reishi_gano' || id === 'rg_90' || id === 'reishi_gano_small') {
      return {
        id: 'reishi_gano_small',
        name: isRtl ? 'فطر ريشي جانو RG (90 كبسولة)' : 'DXN Reishi Gano RG (90 Caps)',
        price: 706,
        image: 'https://i.ibb.co/j9vb2YGq/image.png',
        benefits: productsData.reishi_gano[lang]?.benefits || []
      };
    }

    if (id === 'rg_360' || id === 'reishi_gano_large') {
      return {
        id: 'reishi_gano_large',
        name: isRtl ? 'فطر ريشي جانو RG (360 كبسولة)' : 'DXN Reishi Gano RG (360 Caps)',
        price: 2346,
        image: 'https://i.ibb.co/jdx5mcV/image.png',
        benefits: productsData.reishi_gano[lang]?.benefits || []
      };
    }

    const key = id as keyof typeof productsData;
    const prod = productsData[key];
    if (prod) {
      return {
        id: id,
        name: prod[lang]?.name || prod['en']?.name || id,
        price: prod.price,
        image: prod.image || logoImg,
        benefits: prod[lang]?.benefits || []
      };
    }

    // Default fallback
    return {
      id: id,
      name: isRtl ? 'منتج دي إكس إن طبيعي' : 'DXN Natural Product',
      price: 100,
      image: logoImg,
      benefits: []
    };
  };

  const mainProduct = getProductInfo(productId);

  // --- Define Bundle Offers dynamically & categorized ---
  const bundles = [
    {
      id: 'pack-energy',
      category: 'beverage',
      name: {
        ar: '🔥 باقة الطاقة والنشاط الفائقة (موصى بها للتركيز)',
        fr: '🔥 Pack Énergie & Vitalité Suprême',
        en: '🔥 Ultimate Energy & Vitality Pack'
      },
      description: {
        ar: 'مزيج طبيعي متكامل من قهوة لينجزي السوداء، السبيرولينا العضوية ومشروب ليمونزي لزيادة التركيز ومحاربة التعب المستمر.',
        fr: 'Le trio idéal pour vaincre la fatigue chronique : Café Noir Gourmet, comprimés de Spiruline et Limonzhi rafraîchissant.',
        en: 'The perfect trio to eliminate chronic fatigue: Gourmet Black Coffee, pure Spirulina tablets, and refreshing Limonzhi.'
      },
      products: ['coffee', 'spirulina', 'limonzhi'],
      regularPrice: 460,
      discountedPrice: 414, // 10% discount
      savingsPercent: 10,
      image: 'https://i.ibb.co/1tMCDQsD/image.png'
    },
    {
      id: 'pack-family-health',
      category: 'superfood',
      name: {
        ar: '🔥 باقة الصحة والوقاية المتكاملة للعائلة',
        fr: '🔥 Pack Santé & Défense Familiale',
        en: '🔥 Complete Family Health & Defense Pack'
      },
      description: {
        ar: 'الباقة الذهبية لرفع مناعة أفراد الأسرة: بودرة ريشيليوم الفاخرة، أقراص السبيرولينا ومشروب ليمونزي الطبيعي الغني بمضادات الأكسدة.',
        fr: 'Le bouclier immunitaire absolu pour votre famille : Poudre Reishilium, Spiruline alcaline et Limonzhi riche en vitamine C.',
        en: 'The ultimate immune shield for your family: Reishilium powder, alkaline Spirulina tablets, and vitamin C-rich Limonzhi.'
      },
      products: ['reishilium', 'spirulina', 'limonzhi'],
      regularPrice: 620,
      discountedPrice: 527, // 15% discount
      savingsPercent: 15,
      image: 'https://i.ibb.co/j9vb2YGq/image.png'
    },
    {
      id: 'pack-personal-care',
      category: 'personal_care',
      name: {
        ar: '🔥 باقة العناية الشخصية اليومية بالجانوديرما',
        fr: '🔥 Pack Soins & Hygiène Gano',
        en: '🔥 Gano Personal Care & Skin Routine'
      },
      description: {
        ar: 'نظام حماية وتجميل طبيعي متكامل وخالٍ من الكيماويات: معجون أسنان جانوزي بلس، زيت المساج جانو الفاخر وصابون جانوزي المرطب.',
        fr: 'Routine protectrice et douce pour le corps et la bouche : Dentifrice Ganozhi Plus, Huile de massage Gano et Savon bio.',
        en: 'Protective and organic routine for body and dental care: Ganozhi Plus Toothpaste, Gano massage oil, and moisturizing soap.'
      },
      products: ['toothpaste', 'ganoOil', 'soap'],
      regularPrice: 280,
      discountedPrice: 252, // 10% discount
      savingsPercent: 10,
      image: 'https://i.ibb.co/zHxTHyjQ/image.png'
    },
    {
      id: 'luxury-cosmetics-pack',
      category: 'cosmetics',
      name: {
        ar: '✨ باقة التجميل والعناية العطرية الفاخرة (توفير 98 درهم)',
        fr: '✨ Pack Cosmétiques & Beauté Aromatique de Luxe',
        en: '✨ DXN Luxury Aromatic Cosmetics & Beauty Pack'
      },
      description: {
        ar: 'الروتين الفاخر المتكامل للبشرة والجسم: الشاور جل واللوشن المعطرين، كريم اليدين، مرطب الشفاه وقناع ترطيب الوجه بالكامل.',
        fr: 'La routine corporelle aromatique et soin visage suprême : Gel douche, Lotion corps, Crème mains, Baume lèvres et Masque hydratant.',
        en: 'The ultimate aromatic body & skincare ritual: Shower gel, Body lotion, Hand cream, Lip balm, and Hydrating face mask.'
      },
      products: ['aromaticShowerGel', 'aromaticBodyLotion', 'handCream', 'lipBalm', 'faceMask'],
      regularPrice: 867,
      discountedPrice: 769, // ~11.3% discount
      savingsPercent: 11,
      image: 'https://i.ibb.co/PvK5dyrD/image.png'
    },
    {
      id: 'lifting-antiaging-pack',
      category: 'cosmetics',
      name: {
        ar: '👑 الباقة الاحترافية لشد ومقاومة تجاعيد البشرة (توفير 136 درهم)',
        fr: '👑 Pack Anti-Âge & Lifting Suprême Visage',
        en: '👑 DXN Ultimate Lifting & Anti-Aging Pack'
      },
      description: {
        ar: 'الروتين الطبي والجمالي المتكامل للتنظيف، تنشيط المسام، الشد الفوري المذهل للتجاعيد، الترطيب العميق وحماية قصوى من الشمس.',
        fr: 'Le rituel de rajeunissement complet en 5 étapes : Mousse nettoyante, Eau tonique, Sérum tenseur minute, Crème hydratante et Écran invisible SPF 50.',
        en: 'The premium 5-step youth-restoring set: Foaming cleanser, Tonic water, Instant tightening serum, Hydrating face cream, and UV protection SPF 50.'
      },
      products: ['foamingCleanser', 'tonicWater', 'tighteningSerum', 'hydratingFaceCream', 'sunscreenSpf50'],
      regularPrice: 1435,
      discountedPrice: 1299, // ~9.5% discount
      savingsPercent: 10,
      image: 'https://i.ibb.co/YTVhG0PT/image.png'
    },
    {
      id: 'supreme-lifting-elixir-pack',
      category: 'cosmetics',
      name: {
        ar: '👑 الباقة الذهبية الفاخرة لشد البشرة والزيوت المغذية (توفير 279 درهم)',
        fr: '👑 Pack Lifting Suprême & Éclat d\'Or',
        en: '👑 DXN Supreme Lifting & Elixir Oil Pack'
      },
      description: {
        ar: 'أرقى روتين لشد البشرة، محاربة التجاعيد العميقة لمحيط العينين والوجه، والتغذية الحيوية الفاخرة بالزيوت الطبيعية والزيت الجاف الساحر.',
        fr: 'Le soin anti-âge et nutrition ultime : Crème yeux, Sérum & Crème de jour lifting, combinés aux huiles de nuit précieuses et huiles sèches corps/cheveux.',
        en: 'The peak of luxury skincare: Eye cream, lifting serum, lifting face cream, paired with nurturing night oil and multi-purpose dry oil.'
      },
      products: ['eyeCream', 'faceSerum', 'faceCream', 'nightOil', 'dryOil'],
      regularPrice: 2279,
      discountedPrice: 2000, // ~12.2% discount
      savingsPercent: 12,
      image: 'https://i.ibb.co/7ttPhgJ1/image.png'
    },
    {
      id: 'sun-protection-tanning-pack',
      category: 'cosmetics',
      name: {
        ar: '👑 باقة الحماية من الشمس والتسمير الطبيعي (توفير 13 درهم)',
        fr: '👑 Pack Solaire & Bronzage Éclat Naturel',
        en: '👑 DXN Ultimate Sun Care & Natural Tanning Pack'
      },
      description: {
        ar: 'روتين الصيف المتكامل: مستحلب واقي الشمس SPF 30، زيت التسمير الطبيعي، وجل التبريد الفوري الفائق بعد التعرض للشمس.',
        fr: 'Le rituel d\'été complet : Émulsion solaire protectrice SPF 30, Huile de bronzage naturelle et Gel fraîcheur après-soleil.',
        en: 'The complete summer skin ritual: Sunscreen protective emulsion SPF 30, Natural tanning oil, and Cooling after-sun gel.'
      },
      products: ['sunscreenSpf30', 'tanningOil', 'coolingAfterSun'],
      regularPrice: 762,
      discountedPrice: 749, // ~1.7% discount
      savingsPercent: 2,
      image: 'https://i.ibb.co/jvxS81D0/image.png'
    },
    {
      id: 'aloe-vera-pack',
      category: 'cosmetics',
      name: {
        ar: '👑 مجموعة الألوفيرا الطبيعية المتكاملة (توفير 32 درهم)',
        fr: '👑 Coffret Aloe Vera Hydratation Naturelle',
        en: '👑 DXN Natural Aloe Vera Set'
      },
      description: {
        ar: 'اختبري الترطيب والنعومة الفائقة مع قوة الصبار النقي. مجموعة متكاملة لتنظيف، تقشير، وترطيب البشرة بعمق وحمايتها من الجفاف والمشاكل الجلدية.',
        fr: 'Faites l\'expérience d\'une hydratation et d\'un rajeunissement ultimes grâce au pouvoir pur de l\'Aloe Vera. Ce coffret premium nettoie, exfolie et hydrate en profondeur.',
        en: 'Experience the ultimate hydration and rejuvenation with the pure power of Aloe Vera. This premium set deeply cleanses, exfoliates, and moisturizes your skin.'
      },
      products: ['aloeGel', 'aloeScrub', 'aloeLotion'],
      regularPrice: 481,
      discountedPrice: 449, // ~6.6% discount
      savingsPercent: 7,
      image: 'https://i.ibb.co/BKKs84CC/image.png'
    },
    {
      id: 'pack-golden-five',
      category: 'superfood',
      name: {
        ar: '👑 باقة الخماسي الذهبي دي إكس إن (توفير 300 درهم + شحن مجاني)',
        fr: '👑 Pack Khoumassi Ed-Dahabi (Économisez 300 MAD)',
        en: '👑 DXN Golden Five Pack (Save 300 MAD)'
      },
      description: {
        ar: 'الباقة الأقوى عالمياً للصحة والتشافي الذاتي والوقاية المتكاملة: كبسولات الفطر الريشي RG-90، السبيرولينا العضوية، عصير المورينزي، فطر الكورديسبس، وفطر عرف الأسد.',
        fr: 'L\'association suprême des 5 superaliments légendaires de DXN : Reishi Gano RG-90 Gélules, Spiruline, Jus Morinzhi, Cordyceps, et Crinière de Lion.',
        en: 'The ultimate botanical rejuvenation combo: Pure Spirulina, Reishi Gano RG-90 Capsules, Morinzhi Noni Juice, Cordyceps, and Lion\'s Mane.'
      },
      products: ['reishi_gano', 'spirulina', 'morinzhi-juice', 'cordyceps', 'lions_mane'],
      regularPrice: 2700,
      discountedPrice: 2399,
      savingsPercent: 11,
      image: 'https://i.ibb.co/v4tJcg2w/image.png'
    },
    {
      id: 'pack-golden-triangle',
      category: 'superfood',
      name: {
        ar: '👑 باقة المثلث الذهبي دي إكس إن (توفير 181 درهم + شحن مجاني)',
        fr: '👑 Pack Triangle d\'Or DXN (Économisez 181 MAD)',
        en: '👑 DXN Golden Triangle Pack (Save 181 MAD)'
      },
      description: {
        ar: 'الباقة الثلاثية الأساسية للصحة المستدامة وطرد السموم: كبسولات الفطر الريشي RG-90، السبيرولينا، وعصير المورينزي الغني بالأنزيمات.',
        fr: 'Le trio de base indispensable de DXN pour nettoyer et revitaliser votre corps : Reishi Gano RG-90 Gélules, Spiruline Pure, et Jus de Noni Morinzhi.',
        en: 'The essential daily cellular nutrition trio for systemic detoxification and pH balance: Reishi Gano RG-90 Capsules, Pure Spirulina, and Morinzhi Noni Juice.'
      },
      products: ['reishi_gano', 'spirulina', 'morinzhi-juice'],
      regularPrice: 1180,
      discountedPrice: 999,
      savingsPercent: 15,
      image: 'https://i.ibb.co/1g172cC/image.png'
    }
  ];

  // Reorder bundles to show the most relevant one first based on current product's category
  const sortedBundles = [...bundles].sort((a, b) => {
    if (a.category === category) return -1;
    if (b.category === category) return 1;
    return 0;
  });

  // --- Automatically load all other products from the store database for Upsell ---
  const outOfStockProducts: string[] = []; // Safe dynamic list of out of stock products if any
  const upsellProducts = Object.keys(productsData)
    .filter(key => key !== productId && !outOfStockProducts.includes(key))
    .map(key => getProductInfo(key));

  // --- CALCULATION ENGINE ---
  const mainProductPrice = mainProduct.price * qty;

  // Cast Object entries to correct types to satisfy TypeScript compiler
  const additionalEntries = Object.entries(additionalItems) as [string, number][];
  const bundleEntries = Object.entries(activeBundles) as [string, number][];

  // Additional products price
  let additionalProductsPrice = 0;
  additionalEntries.forEach(([id, q]) => {
    if (q > 0) {
      const info = getProductInfo(id);
      additionalProductsPrice += info.price * q;
    }
  });

  // Bundles price
  let bundlesPrice = 0;
  bundleEntries.forEach(([id, q]) => {
    if (q > 0) {
      const b = bundles.find(item => item.id === id);
      if (b) {
        bundlesPrice += b.discountedPrice * q;
      }
    }
  });

  const subtotal = mainProductPrice + additionalProductsPrice + bundlesPrice;

  // Quantity discounts on the main product
  // Buy 2 of main -> Free shipping
  // Buy 3 of main -> 5% discount on main product
  // Buy 4+ of main -> 10% discount on main product
  let discountPercentage = 0;
  if (qty === 3) discountPercentage = 5;
  else if (qty >= 4) discountPercentage = 10;
  const mainProductDiscount = Math.round((mainProductPrice * discountPercentage) / 100);

  // Bundle savings
  let bundleSavingsAmount = 0;
  bundleEntries.forEach(([id, q]) => {
    if (q > 0) {
      const b = bundles.find(item => item.id === id);
      if (b) {
        bundleSavingsAmount += (b.regularPrice - b.discountedPrice) * q;
      }
    }
  });

  const totalDiscount = mainProductDiscount + bundleSavingsAmount;

  // FREE SHIPPING STRATEGY: Free shipping on all products!
  const FREE_SHIPPING_THRESHOLD = 0;
  const isFreeShipping = true;
  const shippingCost = 0;

  const grandTotal = subtotal - mainProductDiscount + shippingCost;
  const totalSavings = totalDiscount + (isFreeShipping && qty === 1 ? 20 : 0); // Include saved shipping if eligible

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const isValidMoroccanPhone = (num: string): boolean => {
    const cleaned = num.trim().replace(/[\s-]/g, '');
    const moroccoRegex = /^(06|07)\d{8}$|^\+212(6|7)\d{8}$/;
    return moroccoRegex.test(cleaned);
  };

  // --- Dynamic WhatsApp Message Generation ---
  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !customerAddress.trim() || !customerPhone.trim()) {
      setFormError(isRtl ? "يرجى كتابة الاسم الكامل وعنوان التوصيل ورقم الهاتف بشكل صحيح" : "Veuillez remplir correctement toutes les coordonnées.");
      return;
    }

    if (!isValidMoroccanPhone(customerPhone)) {
      setFormError(isRtl ? 'المرجو إدخال رقم هاتف مغربي صحيح.' : 'Veuillez entrer un numéro de téléphone marocain valide.');
      return;
    }

    setIsOrdering(true);

    const orderedProducts: { name: string; desc: string; qty: number; price: number; total: number; }[] = [];
    
    orderedProducts.push({
      name: mainProduct.name,
      desc: isRtl ? 'المنتج الرئيسي من متجر سميرة الطبيعي' : 'Produit Principal DXN',
      qty: qty,
      price: mainProduct.price,
      total: mainProduct.price * qty
    });

    additionalEntries.forEach(([id, q]) => {
      if (q > 0) {
        const info = getProductInfo(id);
        orderedProducts.push({
          name: info.name,
          desc: isRtl ? 'مكمل إضافي طبيعي فاخر للطلب' : 'Article Supplémentaire',
          qty: q,
          price: info.price,
          total: info.price * q
        });
      }
    });

    bundleEntries.forEach(([id, q]) => {
      if (q > 0) {
        const b = bundles.find(item => item.id === id);
        if (b) {
          const nameTrans = b.name[lang] || b.name['en'];
          orderedProducts.push({
            name: nameTrans,
            desc: isRtl ? 'عرض باقة ترويجية بخصم خاص' : 'Pack Promo',
            qty: q,
            price: b.discountedPrice,
            total: b.discountedPrice * q
          });
        }
      }
    });

    const clientMsg = isRtl 
      ? '🚀 مرحباً لالة سميرة، أود تأكيد طلبي لمنتجات دي إكس إن الطبيعية المذكورة أعلاه. يرجى شحن طلبي في أقرب وقت!' 
      : 'Bonjour Samira, je confirme ma commande ci-dessus. Merci de m\'expédier mon colis rapidement !';

    const addressParts = customerAddress.split(/[,،\s]+/);
    const lastWord = addressParts[addressParts.length - 1]?.trim() || '';
    const customerCity = lastWord.length > 2 && lastWord.length < 20 ? lastWord : (isRtl ? 'محددة في العنوان' : 'Spécifiée dans l\'adresse');

    const orderResult = generateOrderMessage({
      customerName,
      customerCity,
      customerAddress,
      customerPhone,
      products: orderedProducts,
      customerMessage: clientMsg,
      grandTotal: grandTotal
    });

    const orderNo = orderResult.orderNo;
    const message = orderResult.message;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;

    // Simulate database/local processing and render premium success screen
    setTimeout(() => {
      setIsOrdering(false);
      const orderDetails = {
        orderNo,
        customerName,
        customerAddress,
        customerPhone,
        grandTotal,
        whatsappUrl,
        itemsText: orderedProducts.map(p => `• ${p.qty} × ${p.name} [${p.price} DH]`).join('\n')
      };
      setOrderSuccessData(orderDetails);
      const contents = [
        { id: productId, quantity: qty },
        ...Object.entries(additionalItems).map(([id, quantity]) => ({ id, quantity: Number(quantity) || 0 }))
      ];
      trackPurchase(
        grandTotal,
        'MAD',
        contents.map(c => c.id),
        contents,
        orderNo,
        qty + Object.values(additionalItems).reduce((acc, count) => Number(acc) + (Number(count) || 0), 0)
      );
      if (onOrderCompleted) onOrderCompleted(orderDetails);
    }, 1200);
  };

  // --- Dynamic Verified Reviews ---
  const getProductReviews = () => {
    switch (productId) {
      case 'toothpaste':
        return [
          { name: 'حليمة السعدي', city: 'مكناس', rating: 5, comment: 'عاوني بزاف لعلاج نزيف اللثة والتهاب اللسان، المذاق ديالو منعش ومن نهار جربتو مابقيتش كنستغنى عليه.' },
          { name: 'يوسف بنجلون', city: 'الرباط', rating: 5, comment: 'رائع جداً، طبيعي وخالي من الفلورايد الكيماوي، آمن للأطفال وكيبيض الأسنان بفعالية.' }
        ];
      case 'coffee':
      case 'coffee3in1':
        return [
          { name: 'مصطفى الداودي', city: 'الدار البيضاء', rating: 5, comment: 'كنت كنعاني من عسر الهضم مع القهوة العادية، هادي خفيفة على المعدة وكتعطيني نشاط وحيوية طيلة اليوم.' },
          { name: 'كوثر التازي', city: 'فاس', rating: 5, comment: 'قهوة ممتازة غنية بالريشي الفطر المعجزة، مذاق ونشاط ومناعة مرتفعة تبارك الله!' }
        ];
      case 'shampoo':
        return [
          { name: 'رشيدة مبروك', city: 'أكادير', rating: 5, comment: 'شعري كان تالف ويتساقط بكثرة، مورا أسبوعين من استعمال شامبو جانوزي رجعت الحيوية لشعري ونقص التساقط بشكل ملحوظ.' },
          { name: 'سناء الودادي', city: 'مراكش', rating: 5, comment: 'رائحة طبيعية رائعة وكيرطب الفروة ديال الشعر بزاف، منتج راقي ويستحق كل درهم.' }
        ];
      default:
        return [
          { name: 'أمينة العلوي', city: 'طنجة', rating: 5, comment: 'مكملات ممتازة وجودة أصلية 100%، وتواصل لالة سميرة راقي وتوصيل سريع لباب الدار.' },
          { name: 'كمال الناصري', city: 'وجدة', rating: 5, comment: 'تجربتي مع المنتجات كانت ناجحة بزاف، عاوناتني في تجديد الطاقة والنشاط، بارك الله فيكم.' }
        ];
    }
  };

  const reviews = getProductReviews();

  // If order was successfully processed, show the luxurious success screen
  if (orderSuccessData) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#EADFC9]/70 shadow-2xl p-6 sm:p-10 text-center space-y-8 animate-fade-in" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <Check className="w-10 h-10 text-emerald-800" />
        </div>

        <div className="space-y-3">
          <span className="bg-[#FAF6F0] border border-[#EADFC9]/50 text-[#C5A560] text-xs font-black tracking-widest px-4 py-1.5 rounded-full uppercase">
            🎉 {isRtl ? 'تم تسجيل طلبك بنجاح' : 'Commande Enregistrée !'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1C352D] leading-tight">
            {isRtl ? 'شكراً لثقتكم في لالة سميرة ناتورال' : 'Merci de Votre Confiance !'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {isRtl ? 'لقد قمنا بتجهيز طلبك! يرجى النقر على الزر أدناه لتأكيد شحن طلبك الفوري وتحديد موعد التسليم عبر الواتساب.' : 'Votre colis est prêt pour l’envoi. Cliquez sur le bouton ci-dessous pour confirmer l’adresse et l’heure de livraison via WhatsApp.'}
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#EADFC9]/40 p-5 text-right space-y-4 font-sans text-xs">
          <div className="flex justify-between items-center border-b border-[#EADFC9]/30 pb-2.5">
            <span className="text-slate-400 font-bold">{isRtl ? 'رقم الطلب:' : 'N° Commande:'}</span>
            <span className="font-mono font-black text-[#1C352D] bg-[#EAF0EC] px-3 py-1 rounded-md text-[13px]">{orderSuccessData.orderNo}</span>
          </div>

          <div className="space-y-1.5">
            <span className="text-slate-400 font-bold block mb-1">{isRtl ? 'المنتجات المطلوبة:' : 'Articles Commandés :'}</span>
            <div className="bg-white/80 p-3 rounded-xl border border-slate-100 text-slate-700 space-y-1 leading-relaxed">
              {qty} × {mainProduct.name} ({mainProduct.price} DH)<br />
              {additionalEntries.map(([id, q]) => {
                if (q > 0) {
                  const info = getProductInfo(id);
                  return <div key={id} className="text-emerald-800">• {q} × {info.name} ({info.price} DH)</div>;
                }
                return null;
              })}
              {bundleEntries.map(([id, q]) => {
                if (q > 0) {
                  const b = bundles.find(item => item.id === id);
                  if (b) {
                    const nameTrans = b.name[lang] || b.name['en'];
                    return <div key={id} className="text-emerald-800 font-bold">• {q} × {nameTrans} ({b.discountedPrice} DH)</div>;
                  }
                }
                return null;
              })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-bold">{isRtl ? 'اسم المستلم:' : 'Client :'}</span>
            <span className="font-extrabold text-[#1C352D]">{orderSuccessData.customerName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-bold">{isRtl ? 'العنوان:' : 'Adresse :'}</span>
            <span className="font-extrabold text-[#1C352D]">{orderSuccessData.customerAddress}</span>
          </div>

          <div className="flex justify-between items-center border-t border-[#EADFC9]/30 pt-3 text-sm font-bold text-[#1C352D]">
            <span>{isRtl ? 'المجموع المستحق عند الاستلام بالمنزل:' : 'Total net à payer (COD) :'}</span>
            <span className="text-lg font-black text-[#C5A560] font-mono">{orderSuccessData.grandTotal} DH</span>
          </div>
        </div>

        {/* WhatsApp Redirection Button */}
        <div className="space-y-4">
          <a
            href={orderSuccessData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-4.5 rounded-2xl shadow-xl shadow-emerald-500/15 hover:scale-[1.01] active:scale-99 transition-all text-sm sm:text-base cursor-pointer tracking-wide"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            <span>{t.whatsappCta}</span>
          </a>

          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
            }}
            className="text-xs font-bold text-slate-400 hover:text-[#C5A560] transition-colors cursor-pointer block mx-auto underline"
          >
            {isRtl ? 'الرجوع للمتجر الرئيسي' : 'Retourner à la boutique'}
          </button>
        </div>

        <div className="border-t border-[#EADFC9]/30 pt-6 flex justify-center items-center gap-4 text-[10px] text-slate-400 font-bold">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isRtl ? 'الدفع عند الاستلام بالمغرب' : 'Paiement à la livraison'}</span>
          </span>
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isRtl ? 'توصيل سريع مجاني' : 'Livraison express gratuite'}</span>
          </span>
        </div>
      </div>
    );
  }

  // Helper to add an upsell item instantly
  const handleAddUpsell = (id: string, customQty: number = 1) => {
    setAdditionalItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + customQty
    }));
  };

  const handleUpdateUpsellQty = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setAdditionalItems(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    } else {
      setAdditionalItems(prev => ({
        ...prev,
        [id]: newQty
      }));
    }
  };

  // Helper to add/toggle bundles instantly
  const handleToggleBundle = (id: string) => {
    setActiveBundles(prev => {
      if (prev[id]) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      } else {
        return { ...prev, [id]: 1 };
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      
      {/* Visual Progress Steps */}
      <div className="max-w-3xl mx-auto mb-8 select-none">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#EADFC9]/40 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-black shadow-md border-2 border-white">✓</div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-500">{isRtl ? 'اختيار المنتج الطبيعي' : 'Produit'}</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#C5A560] text-white flex items-center justify-center text-xs font-black shadow-md border-2 border-white">2</div>
            <span className="text-[10px] sm:text-xs font-black text-[#1C352D]">{isRtl ? 'معلومات التوصيل والعروض' : 'Offres & Livraison'}</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-black">3</div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400">{isRtl ? 'تأكيد الطلب المباشر' : 'Confirmation'}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start relative">
        
        {/* LEFT COLUMN: Main product config, Delivery Form, Bundle Upgrades, Smart Upsells, Reviews */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Delivery & Checkout Box */}
          <div id="checkout_form_box" className="bg-white rounded-3xl border border-[#EADFC9]/60 shadow-xl overflow-hidden">
            {/* Header with Urgency Badges */}
            <div className="bg-[#1C352D] text-[#FAF6F0] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#C5A560] animate-pulse" />
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  {isRtl ? 'الاستمارة الرسمية للشحن السريع بالمغرب' : 'Formulaire de Livraison Rapide'}
                </h3>
              </div>

              {/* Urgency & Social Proof Bar */}
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3 space-y-2 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-emerald-100 font-bold">
                  <Clock className="w-4 h-4 text-[#C5A560] shrink-0" />
                  <span>{t.urgencyText}</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300 font-bold">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{t.limitedStock}</span>
                </div>
              </div>

              {/* Stock Tracker */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                  <span>{isRtl ? `المتبقي في المخزون: ${stockCount} قطع فقط` : `Plus que ${stockCount} pièces disponibles`}</span>
                </span>
                <span className="text-[#C5A560] uppercase tracking-widest">{isRtl ? 'طلب مرتفع جداً' : 'Haute Demande'}</span>
              </div>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* Product Info Display inside form */}
              <div className="flex gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EADFC9]/30 items-center">
                <img
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded-xl border border-[#EADFC9]/20 p-1 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1 flex-1">
                  <span className="bg-[#1C352D] text-white text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                    {isRtl ? 'منتج دي إكس إن أصلي 100%' : '100% ORIGINAL DXN'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[#1C352D] leading-tight mt-1">
                    {mainProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-1" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <span className="text-sm font-black text-[#C5A560] font-sans">{mainProduct.price}</span>
                    <span className="text-[10px] font-bold text-[#C5A560]">{isRtl ? 'درهم' : 'DH'}</span>
                  </div>
                </div>
              </div>

              {/* Main Product Quantity Selector */}
              <div className="space-y-3.5 bg-[#FAF8F5]/50 p-4 rounded-2xl border border-dashed border-[#EADFC9]/50">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-black text-[#1C352D] uppercase tracking-wider">
                    {isRtl ? 'تحديد كمية المنتج الرئيسي:' : 'Quantité du Produit Principal :'}
                  </label>
                  
                  {qty === 1 && !isFreeShipping && (
                    <span className="text-[10px] text-slate-400 font-semibold">{isRtl ? 'توصيل +20 درهم' : '+20 DH Livraison'}</span>
                  )}
                  {isFreeShipping && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-100 font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      🎁 {isRtl ? 'شحن سريع ومجاني بالكامل' : 'LIVRAISON GRATUITE'}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-center gap-6 py-1">
                  <button
                    type="button"
                    onClick={() => setQty(prev => Math.max(1, prev - 1))}
                    className="w-11 h-11 rounded-xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    <Minus className="w-4 h-4 text-[#1C352D]" />
                  </button>
                  <span className="text-2.5xl font-black text-[#1C352D] min-w-[3rem] text-center font-mono select-none">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(prev => Math.min(99, prev + 1))}
                    className="w-11 h-11 rounded-xl bg-[#FAF6F0] border border-[#E5D5C0]/60 flex items-center justify-center font-black text-[#1C352D] hover:bg-white hover:border-[#C5A560] active:scale-95 transition-all text-xl cursor-pointer select-none"
                  >
                    <Plus className="w-4 h-4 text-[#1C352D]" />
                  </button>
                </div>
              </div>

              {/* Delivery Details Inputs */}
              <div className="space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  {isRtl ? 'معلومات المستلم والشحن:' : 'Adresse & Coordonnées du Destinataire :'}
                </p>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {isRtl ? 'الاسم الكامل للزبون الكريم *' : 'Nom Complet de l\'acheteur *'}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <ThumbsUp className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={isRtl ? 'مثال: فاطمة الزهراء العلمي' : 'Ex: Fatima Alami'}
                      className="w-full text-xs sm:text-sm px-4 py-3.5 pl-10 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#C5A560] bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {isRtl ? 'عنوان التوصيل الكامل بالمغرب *' : 'Adresse de Livraison Complète *'}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3 text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <textarea
                      rows={2}
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder={isRtl ? 'اسم الحي، رقم المنزل، اسم المدينة أو القرية بالمغرب بالتفصيل' : 'Ex: N 12, Rue Nour, Casablanca, Maroc'}
                      className="w-full text-xs sm:text-sm px-4 py-3.5 pl-10 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#C5A560] bg-white transition-all"
                    />
                  </div>
                  <span className="text-[10px] text-emerald-800 font-extrabold block">
                    🚀 {isRtl ? 'تنبيه: التوصيل متوفر لجميع المدن والمداشر بالمملكة المغربية' : 'Livraison assurée dans toutes les régions et communes du Maroc.'}
                  </span>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#1C352D] uppercase tracking-wider">
                    {isRtl ? 'رقم هاتف الواتساب للتواصل وتأكيد الشحن *' : 'Numéro WhatsApp / Tél *'}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ex: 0612345678"
                      className={`w-full text-xs sm:text-sm px-4 py-3.5 pl-10 rounded-xl border placeholder-slate-400 focus:outline-none focus:ring-1 bg-white transition-all font-mono ${
                        customerPhone && !isValidMoroccanPhone(customerPhone)
                          ? 'border-rose-500 focus:ring-rose-500 focus:border-rose-500'
                          : 'border-slate-200 focus:ring-[#C5A560]'
                      }`}
                      style={{ direction: 'ltr', textAlign: isRtl ? 'right' : 'left' }}
                    />
                  </div>
                  {customerPhone && !isValidMoroccanPhone(customerPhone) && (
                    <p className="text-rose-500 text-xs font-bold mt-1" style={{ direction: 'rtl', textAlign: 'right' }}>
                      المرجو إدخال رقم هاتف مغربي صحيح.
                    </p>
                  )}
                </div>
              </div>

              {formError && (
                <div className="p-3.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-xs font-bold">
                  ⚠️ {formError}
                </div>
              )}

              {/* Premium Packs Option Promo Banner */}
              <div 
                onClick={() => {
                  document.getElementById('bundle-offers-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 sm:p-4 rounded-xl border border-[#C5A560]/30 bg-[#FAF6F0] hover:bg-[#FAF6F0]/80 transition-all cursor-pointer flex items-center justify-between gap-3 select-none hover:scale-[1.01] active:scale-99 shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A560] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A560]"></span>
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-[#1C352D]">
                    {t.packsOption}
                  </span>
                </div>
                <span className="text-[#C5A560] text-xs font-black shrink-0 flex items-center gap-1">
                  {isRtl ? 'عرض الباقات ←' : lang === 'fr' ? 'Voir les Packs →' : 'View Packs →'}
                </span>
              </div>

              {/* Inside card trigger CTA */}
              <button
                type="submit"
                disabled={isOrdering || !customerName.trim() || !customerAddress.trim() || !customerPhone.trim() || !isValidMoroccanPhone(customerPhone)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1C352D] hover:bg-[#25443B] disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:cursor-not-allowed disabled:opacity-50 text-[#FAF6F0] font-black py-4.5 rounded-2xl shadow-xl border border-[#C5A560]/30 hover:scale-[1.01] active:scale-99 transition-all text-xs sm:text-sm cursor-pointer select-none uppercase tracking-wider"
              >
                {isOrdering ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Lock className="w-4.5 h-4.5 text-[#C5A560]" />
                    <span>{t.confirmButton}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* VERIFIED CUSTOMER REVIEWS */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#EADFC9]/40 space-y-4">
            <h4 className="text-xs font-black text-[#1C352D] uppercase tracking-wider">
              {t.reviewsTitle}
            </h4>
            <div className="space-y-3.5">
              {reviews.map((rev, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-2 text-right">
                  <div className="flex justify-between items-center" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#1C352D]">{rev.name}</span>
                      <span className="text-[9px] text-slate-400 font-medium">({rev.city})</span>
                    </div>
                    <div className="flex gap-0.5 text-[#C5A560]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Sticky Order Summary Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl border border-[#EADFC9]/60 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
            
            {/* Summary Title */}
            <div className="border-b border-slate-100 pb-4">
              <h4 className="text-sm font-black text-[#1C352D] uppercase tracking-wider">
                {t.orderSummary}
              </h4>
              <p className="text-[10px] text-slate-400 font-bold mt-1">
                {isRtl ? 'تحديث فوري وحساب تلقائي لجميع المنتجات والعروض' : 'Mise à jour en temps réel selon vos sélections'}
              </p>
            </div>

            {/* FREE SHIPPING PROGRESS BAR */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-bold">
                {isFreeShipping ? (
                  <span className="text-emerald-800 font-black flex items-center gap-1">
                    🎁 {t.freeShippingReached}
                  </span>
                ) : (
                  <span className="text-slate-600 leading-relaxed text-[11px]">
                    {t.freeShippingProgress(remainingForFreeShipping)}
                  </span>
                )}
                <span className="text-[11px] font-mono text-[#C5A560] font-black">{subtotal} / 300 DH</span>
              </div>

              {/* Styled Progress bar container */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/40">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(100, (subtotal / 300) * 100)}%` }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  className={`h-full rounded-full ${isFreeShipping ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 animate-pulse' : 'bg-gradient-to-r from-[#C5A560] to-emerald-800'}`}
                />
              </div>

              {/* Progress animations/rewards */}
              <AnimatePresence>
                {isFreeShipping && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-[10.5px] font-extrabold text-center"
                  >
                    🎉 {isRtl ? 'تهانينا! لقد وفرت 20 درهم - شحن سريع ومجاني لجميع المدن' : 'Félicitations ! Vous économisez 20 DH sur les frais d\'envoi.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price Line Items */}
            <div className="space-y-3 text-xs border-t border-slate-100 pt-4">
              
              {/* Main Product */}
              <div className="flex justify-between items-center text-slate-600">
                <span>{mainProduct.name} ({qty} ×)</span>
                <span className="font-extrabold text-[#1C352D] font-mono">{mainProductPrice} DH</span>
              </div>

              {/* Upsell Items dynamic list */}
              {additionalEntries.map(([id, q]) => {
                if (q > 0) {
                  const info = getProductInfo(id);
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={id}
                      className="flex justify-between items-center text-emerald-800 font-bold"
                    >
                      <span>+ {info.name} ({q} ×)</span>
                      <span className="font-mono">{info.price * q} DH</span>
                    </motion.div>
                  );
                }
                return null;
              })}

              {/* Active Bundles dynamic list */}
              {bundleEntries.map(([id, q]) => {
                if (q > 0) {
                  const b = bundles.find(item => item.id === id);
                  if (b) {
                    const nameTrans = b.name[lang] || b.name['en'];
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={id}
                        className="flex justify-between items-center text-emerald-800 font-extrabold bg-[#EAF0EC]/60 px-2 py-1 rounded-lg border border-emerald-100/40"
                      >
                        <span>📦 {nameTrans} ({q} ×)</span>
                        <span className="font-mono">{b.discountedPrice * q} DH</span>
                      </motion.div>
                    );
                  }
                }
                return null;
              })}

              {/* Shipping Row */}
              <div className="flex justify-between items-center text-slate-500 pt-1.5">
                <span>{t.shipping}</span>
                <span className={shippingCost === 0 ? "text-emerald-700 font-black uppercase" : "text-slate-700 font-bold font-sans"}>
                  {shippingCost === 0 ? t.free : `+20 DH`}
                </span>
              </div>

              {/* Cumulative Discounts area */}
              {totalDiscount > 0 && (
                <div className="flex justify-between items-center text-emerald-800 font-extrabold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                  <span>{t.discount}</span>
                  <span className="font-mono">-{totalDiscount} DH</span>
                </div>
              )}

              {/* Live Animated Total Area */}
              <div className="pt-4 border-t border-[#EADFC9]/40 space-y-1">
                <span className="text-[10px] text-[#4E6E5D] font-bold uppercase tracking-wider block">
                  {t.totalPayable}
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <motion.span
                      key={grandTotal}
                      initial={{ scale: 1.15, color: '#C5A560' }}
                      animate={{ scale: 1, color: '#1C352D' }}
                      transition={{ duration: 0.25 }}
                      className="text-3xl sm:text-4.5xl font-black font-sans tracking-tight"
                    >
                      {grandTotal}
                    </motion.span>
                    <span className="text-xs sm:text-sm font-black text-[#C5A560]">{isRtl ? 'درهم مغربي' : 'DH'}</span>
                  </div>

                  {totalSavings > 0 && (
                    <span className="text-[10.5px] bg-emerald-800 text-white font-extrabold px-3 py-1 rounded-full uppercase animate-bounce">
                      🎉 {isRtl ? `وفرت ${totalSavings} درهم` : `Économie : ${totalSavings} DH`}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* TRUSTED CONVERSION BOOSTERS */}
            <div className="pt-4 border-t border-slate-50 space-y-3 text-[11px] text-slate-500 font-bold">
              {t.boosters.map((booster: string, index: number) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-800 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>{booster}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Assistance widget */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EADFC9]/40 text-center space-y-3">
              <div className="space-y-1">
                <h5 className="text-[11px] sm:text-xs font-black text-[#1C352D] uppercase">
                  {t.helpTitle}
                </h5>
                <p className="text-[9.5px] text-slate-400 font-medium">
                  {t.helpSub}
                </p>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(isRtl ? 'مرحباً لالة سميرة، لدي استفسار بخصوص منتجات دي إكس إن الطبيعية وكيفية الاستفادة منها.' : 'Bonjour Samira, j\'ai une question concernant les produits DXN.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[11px] px-4 py-2.5 rounded-xl transition-all shadow-md cursor-pointer select-none"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.helpCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY BOTTOM DRAWER SUMMARY & ORDER TRIGGERS */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#EADFC9]/70 overflow-hidden flex flex-col">
          
          {/* Summary Toggle Click Bar */}
          <div
            onClick={() => setShowMobileSummary(!showMobileSummary)}
            className="flex items-center justify-between px-4 py-3 bg-[#1C352D] text-white cursor-pointer select-none"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="w-2 h-2 rounded-full bg-rose-500 absolute -top-0.5 -right-0.5 animate-ping"></span>
                <span className="text-[10px] bg-emerald-800 border border-emerald-600/50 text-white font-black px-2 py-0.5 rounded-full">
                  {qty + additionalEntries.reduce((acc, [, val]) => acc + val, 0) + bundleEntries.reduce((acc, [, val]) => acc + val, 0)}
                </span>
              </div>
              <span className="text-xs font-black">{isRtl ? 'ملخص الفاتورة المباشرة' : 'Votre Commande'}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-sans text-[#C5A560]">{grandTotal} DH</span>
              {showMobileSummary ? <ChevronDown className="w-4 h-4 text-slate-300" /> : <ChevronUp className="w-4 h-4 text-slate-300" />}
            </div>
          </div>

          <AnimatePresence>
            {showMobileSummary && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-white p-4 space-y-3 text-xs border-t border-slate-100"
              >
                <div className="space-y-1.5 text-[11px] leading-relaxed">
                  <div className="flex justify-between text-slate-600">
                    <span>{mainProduct.name}</span>
                    <span className="font-bold">{qty} × {mainProduct.price} DH</span>
                  </div>

                  {additionalEntries.map(([id, q]) => {
                    if (q > 0) {
                      const info = getProductInfo(id);
                      return (
                        <div key={id} className="flex justify-between text-emerald-800">
                          <span>+ {info.name}</span>
                          <span className="font-bold">{q} × {info.price} DH</span>
                        </div>
                      );
                    }
                    return null;
                  })}

                  {bundleEntries.map(([id, q]) => {
                    if (q > 0) {
                      const b = bundles.find(item => item.id === id);
                      if (b) {
                        const nameTrans = b.name[lang] || b.name['en'];
                        return (
                          <div key={id} className="flex justify-between text-emerald-800 font-bold">
                            <span>📦 {nameTrans}</span>
                            <span>{q} × {b.discountedPrice} DH</span>
                          </div>
                        );
                      }
                    }
                    return null;
                  })}

                  <div className="flex justify-between text-slate-500 pt-1">
                    <span>{t.shipping}</span>
                    <span className="font-bold">{shippingCost === 0 ? t.free : '20 DH'}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-dashed border-slate-100 flex justify-between items-center font-bold text-[#1C352D]">
                  <span>{isRtl ? 'المجموع المستحق نقداً:' : 'Total net à payer :'}</span>
                  <span className="text-sm font-black text-[#C5A560] font-sans">{grandTotal} DH</span>
                </div>

                {/* Instant CTA inside Mobile Summary Drawer */}
                <button
                  onClick={() => {
                    setShowMobileSummary(false);
                    const formBox = document.getElementById('checkout_form_box');
                    if (formBox) {
                      formBox.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-[#1C352D] text-white py-3 rounded-xl font-black text-[10.5px] uppercase text-center cursor-pointer select-none"
                >
                  {isRtl ? 'إكمال معلومات التوصيل الآن والدفع عند الاستلام' : 'Remplir mes coordonnées de livraison'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
