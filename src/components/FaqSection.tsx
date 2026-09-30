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
      question: "Does the AI receptionist give technical restoration advice?",
      answer: "No. The AI receptionist is strictly designed for initial caller intake, logging emergency details, answering general firm questions, scheduling technician visits, and alerting your team. Technical assessment remains entirely with your certified mitigation staff."
    },
    {
      question: "Can the AI answer after normal office hours?",
      answer: "Yes! It operates 24/7/365 to handle night, weekend, and holiday emergency inquiries seamlessly so you never lose a job to a competitor."
    },
    {
      question: "Can you work with our existing website?",
      answer: "Yes. The $199/mo SEO Starter and $399/mo AI Growth packages integrate easily with most existing websites. If your website needs a full refresh, our $999 One-Time package includes a complete redesign."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-goldAccent-500 uppercase tracking-widest mb-3">
            Clear Answers
          </h2>
          <p className="text-3xl font-extrabold text-white">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-white font-bold text-sm focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-goldAccent-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
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
