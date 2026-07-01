import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqItems } from '../data/spirulinaData';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  lang: 'en' | 'fr' | 'ar';
  customItems?: FAQItem[];
}

export default function FAQAccordion({ lang, customItems }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = customItems || faqItems[lang] || faqItems.ar;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isRtl = lang === 'ar';

  return (
    <div id="faq_accordion_wrapper" className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            id={`faq_item_${index}`}
            className="bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_2px_8px_rgba(28,53,45,0.02)] border-[#E5D5C0]/50 hover:border-[#C5A560]"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#1C352D] text-sm sm:text-base outline-none cursor-pointer focus:bg-[#FAF6F0]/20 select-none"
              style={{ textAlign: isRtl ? 'right' : 'left', direction: isRtl ? 'rtl' : 'ltr' }}
            >
              <span className="leading-tight">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#C5A560] shrink-0 text-xl font-medium"
              >
                {isOpen ? '−' : '+'}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3"
                    style={{ textAlign: isRtl ? 'right' : 'left', direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
