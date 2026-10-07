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
      question: "Do you guarantee #1 Google rankings?",
      answer: "No. SEO performance depends on competition, local market conditions, and domain authority. We focus on established local SEO and Google Business Profile best practices to build sustainable search visibility and dominate the local 3-pack."
    },
    {
      question: "Does the AI receptionist give formal legal advice?",
      answer: "No. In strict compliance with State Bar ethics, the AI receptionist is strictly designed for initial caller intake, logging incident details, answering logistical questions, scheduling attorney visits, and alerting your team. Legal counsel remains entirely with your licensed attorneys."
    },
    {
      question: "Can the AI answer after normal office hours?",
      answer: "Yes! It operates 24/7/365 to handle night, weekend, and holiday emergency inquiries seamlessly so you never lose a high-value case retainer to a competitor."
    },
    {
      question: "Can you work with our existing law firm website?",
      answer: "Yes. Our $199/mo Legal SEO Starter and $399/mo AI Legal Growth packages integrate easily with most existing websites. If your website needs a full refresh, our $999 One-Time package includes a complete redesign."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Clear Answers
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 text-balance">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-[#3E7DBF]/60 hover:shadow-md hover:-translate-y-0.5"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-slate-900 font-bold text-sm focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 transition-colors duration-300 group-hover:text-[#3E7DBF]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 flex-shrink-0 group-hover:scale-110 ${
                      isOpen ? 'rotate-180 text-[#EA7826]' : 'text-[#3E7DBF]'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
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
