import React, { useState } from 'react';
import { FAQ } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  idPrefix?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common questions about our services, process, and deliverables.',
  idPrefix = 'faq',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id={`${idPrefix}-section`} className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-[#0d1424] border-cyan-500/30 shadow-lg shadow-cyan-950/20'
                  : 'bg-[#090d18]/70 border-slate-800/90 hover:border-slate-700'
              }`}
            >
              <button
                id={`${idPrefix}-toggle-${index}`}
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {faq.question}
                </span>
                <div
                  className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div
                  id={`${idPrefix}-content-${index}`}
                  className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
