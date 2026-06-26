import React, { useState, useRef, useCallback, memo } from 'react';
import { PAGE_COPY } from '../../data/pageCopy';
import { Icon } from '../ui/Icon';

export const FAQSection = memo(function FAQSection() {
  const { sectionTitle, items } = PAGE_COPY.faq;
  const [openIndex, setOpenIndex] = useState(-1);
  const buttonRefs = useRef([]);

  const toggleFaq = useCallback((index) => {
    setOpenIndex(prev => prev === index ? -1 : index);
  }, []);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      buttonRefs.current[prevIndex]?.focus();
    }
  }, [items.length]);

  return (
    <section id="faq" className="py-24 px-4 bg-brand-oceanic relative overflow-hidden border-t border-brand-mint/5 scroll-mt-28" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="faq-title" className="text-2xl md:text-4xl font-bold font-mono-custom tracking-tight text-brand-arctic mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-brand-mint/70">
            Have questions about system operations, state limits, or pricing isolation? Find answers below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-2xl mx-auto" role="presentation">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border-premium bg-[#1b303b]/30 transition-all duration-300"
              >
                <button
                  ref={(el) => (buttonRefs.current[idx] = el)}
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="flex items-center justify-between w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-forsythia/50 rounded-2xl focus:ring-offset-2 focus:ring-offset-brand-oceanic transition-all cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-brand-arctic">
                    {item.question}
                  </span>
                  <span className="text-brand-mint/60 ml-4 flex-shrink-0">
                    <Icon name="chevron-down" className={`w-3.5 h-3.5 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-brand-mint/70 border-t border-brand-mint/5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});


