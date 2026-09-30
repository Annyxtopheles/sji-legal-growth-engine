import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Does the AI receptionist provide legal advice to prospective clients?",
      answer: "No. In strict compliance with State Bar ethics and unauthorized practice of law (UPL) regulations, the AI receptionist does not provide legal advice or predict case outcomes. It is strictly programmed for professional intake triage, gathering factual incident data, checking conflict parameters, answering firm logistical questions, and booking consultations with your licensed attorneys."
    },
    {
      question: "Can it integrate with our legal practice management software (Clio, Lawmatics, Filevine)?",
      answer: "Yes! Our system seamlessly integrates with leading legal CRMs and practice management platforms including Clio, Lawmatics, Filevine, GoHighLevel, and Zapier. New intake leads and booking details sync directly into your pipeline with zero manual data entry."
    },
    {
      question: "How does the AI handle late-night and weekend emergencies?",
      answer: "The AI receptionist operates 24/7/365 without missing a single ring. If a caller reports a high-priority matter (such as a severe auto collision, catastrophic injury, or urgent arrest), the system logs the details and can immediately dispatch an SMS alert to your firm's on-call partner."
    },
    {
      question: "Can you work with our existing law firm website?",
      answer: "Yes. Our $199/mo Legal SEO Starter and $399/mo AI Legal Growth packages integrate easily with your existing website and phone lines. If your current website is outdated or slow, our $999 One-Time package includes a complete custom redesign built for maximum retainer conversions."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 relative bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1">
            Clear Answers
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="sji-card rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#3E7DBF]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center text-slate-900 font-bold text-xs sm:text-sm focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3E7DBF] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#EA7826]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
