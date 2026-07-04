import React from 'react';
import { ShoppingBag, Sparkles, Award, Globe, Leaf } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: 'en' | 'fr' | 'ar' | 'es';
  setLang: (lang: 'en' | 'fr' | 'ar' | 'es') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const translations = {
    en: {
      brand: 'SAMIRA NATURALE',
      tagline: 'Moroccan Botanical Alchimie',
      shop: 'Botanical Shop',
      hammam: 'Hammam Ritual',
      glossary: 'Glossary',
      aiConsult: 'AI consultation',
    },
    fr: {
      brand: 'SAMIRA NATURALE',
      tagline: 'Alchimie Botanique Marocaine',
      shop: 'Boutique',
      hammam: 'Rituel Hammam',
      glossary: 'Glossaire',
      aiConsult: 'Diagnostic IA',
    },
    ar: {
      brand: 'سميرة ناتورال',
      tagline: 'أسرار الطبيعة المغربية',
      shop: 'المتجر',
      hammam: 'طقوس الحمام',
      glossary: 'المكونات',
      aiConsult: 'استشارة الذكاء الاصطناعي',
    },
    es: {
      brand: 'SAMIRA NATURALE',
      tagline: 'Alquimia Botánica Marroquí',
      shop: 'Tienda Botánica',
      hammam: 'Ritual Hammam',
      glossary: 'Glosario',
      aiConsult: 'Consulta IA',
    },
  };

  const t = translations[lang];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200">
      {/* Top Banner */}
      <div className="bg-forest-800 text-white py-1 px-4 text-center text-xs tracking-widest font-mono flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
        <span>
          {lang === 'ar' 
            ? 'توصيل مجاني لجميع الطلبات فوق 50 دولار • كود: MOROCCANGLOW' 
            : lang === 'fr' 
              ? 'LIVRAISON OFFERTE DÈS 50$ • CODE: MOROCCANGLOW' 
              : lang === 'es'
                ? 'ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 50$ • CÓDIGO: MOROCCANGLOW'
                : 'FREE SHIPPING ON ORDERS OVER $50 • CODE: MOROCCANGLOW'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex flex-col items-start cursor-pointer" onClick={() => setCurrentTab('shop')}>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-forest-600" />
              <h1 className={`font-serif text-xl sm:text-2xl font-bold tracking-wider text-forest-900 ${lang === 'ar' ? 'font-serif' : ''}`}>
                {t.brand}
              </h1>
            </div>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-gold-600 mt-0.5">
              {t.tagline}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {[
              { id: 'shop', label: t.shop },
              { id: 'hammam', label: t.hammam },
              { id: 'glossary', label: t.glossary },
              { id: 'aiConsult', label: t.aiConsult, special: true },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors tracking-wide rounded-md ${
                  currentTab === tab.id
                    ? tab.special
                      ? 'text-gold-700 bg-gold-50 font-semibold'
                      : 'text-forest-800 font-semibold'
                    : 'text-stone-500 hover:text-forest-700'
                }`}
              >
                {tab.label}
                {currentTab === tab.id && !tab.special && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-forest-600 rounded-full" />
                )}
                {tab.special && (
                  <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-gold-500 animate-bounce" />
                )}
              </button>
            ))}
          </nav>

          {/* Settings & Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-200 text-stone-600 hover:text-forest-800 text-xs font-mono transition-colors bg-white">
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-1.5 w-28 bg-white border border-stone-200 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50 py-1">
                <button
                  onClick={() => setLang('en')}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-stone-50 text-stone-700 font-mono flex items-center justify-between"
                >
                  English <span>EN</span>
                </button>
                <button
                  onClick={() => setLang('fr')}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-stone-50 text-stone-700 font-mono flex items-center justify-between"
                >
                  Français <span>FR</span>
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-stone-50 text-stone-700 font-serif flex items-center justify-between"
                >
                  العربية <span>AR</span>
                </button>
                <button
                  onClick={() => setLang('es')}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-stone-50 text-stone-700 font-mono flex items-center justify-between"
                >
                  Español <span>ES</span>
                </button>
              </div>
            </div>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-700 transition-colors flex items-center justify-center bg-white border border-stone-200"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-white font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF8F5]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
