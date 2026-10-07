import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, ShieldCheck, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, copyEmailToClipboard } from '../utils/mailHelper';

interface ReviewSectionProps {
  selectedPackage?: string;
  onLeadSuccess?: (message: string) => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ selectedPackage }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyEmailToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const emailTemplates = [
    {
      title: 'Free Digital Practice Audit',
      description: 'Full manual review of your Google Maps 3-Pack rank, website speed & emergency intake responsiveness.',
      subject: 'Free Practice Digital Audit Request',
      body: 'Hi Siddiqur,%0D%0A%0D%0AI would like to request a free digital practice audit for our law firm.%0D%0A%0D%0ALaw Firm Name:%20%0D%0AWebsite URL:%20%0D%0APrimary Practice Area:%20%0D%0APhone Number:%20%0D%0A%0D%0AThank you!'
    },
    {
      title: 'Legal SEO Starter ($199/mo)',
      description: 'Focus on local Google Business Profile optimization, citations, and practice area rankings.',
      subject: 'Inquiry: Legal SEO Starter Package ($199/mo)',
      body: 'Hi Siddiqur,%0D%0A%0D%0AI am interested in the Legal SEO Starter package ($199/mo) for our law firm.%0D%0A%0D%0ALaw Firm Name:%20%0D%0AWebsite URL:%20%0D%0APhone Number:%20%0D%0A%0D%0AThank you!'
    },
    {
      title: 'AI Legal Growth ($399/mo)',
      description: '24/7 AI Legal Receptionist, sub-5s missed call auto text back, qualification flow & CRM sync.',
      subject: 'Inquiry: AI Legal Growth Package ($399/mo)',
      body: 'Hi Siddiqur,%0D%0A%0D%0AI am interested in the AI Legal Growth package ($399/mo) for our law firm.%0D%0A%0D%0ALaw Firm Name:%20%0D%0AWebsite URL:%20%0D%0APrimary Practice Area:%20%0D%0APhone Number:%20%0D%0A%0D%0AThank you!'
    },
    {
      title: 'Law Firm Website + Growth ($999)',
      description: 'Complete custom mobile-first website redesign + 3 months free legal SEO & social media.',
      subject: 'Inquiry: Law Firm Website + Growth Package ($999)',
      body: 'Hi Siddiqur,%0D%0A%0D%0AI am interested in the Law Firm Website + Growth redesign package ($999) for our firm.%0D%0A%0D%0ALaw Firm Name:%20%0D%0ACurrent Website URL:%20%0D%0APhone Number:%20%0D%0A%0D%0AThank you!'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-[#EA7826] tracking-widest block mb-2">
            Direct Partner Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Scale Your Law Firm?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about our packages or want a tailored audit of your current digital setup? Connect directly with our legal growth team.
          </p>
          {selectedPackage && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#EA7826]" />
              <span>Selected Interest: {selectedPackage}</span>
            </div>
          )}
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Contact Box */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EA7826]/10 text-[#EA7826] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Direct Email Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 mb-2 break-all">
                {CONTACT_EMAIL}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Reach out anytime. You'll be connected directly with Siddiqur Rahman and our senior technical team at SJ Innovation.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Law%20Firm%20Growth%20Engine%20Inquiry`}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Inquiry</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all text-xs flex items-center justify-center gap-2 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                <span><strong>Response Guarantee:</strong> Within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                <span><strong>Strict Confidentiality:</strong> Non-disclosure compliant</span>
              </div>
            </div>
          </div>

          {/* Quick-Launch Inquiry Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="mb-2">
              <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Select an Inquiry Topic:
              </h4>
            </div>

            {emailTemplates.map((t, idx) => (
              <a
                key={idx}
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${t.body}`}
                className="group block bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-md transition-all text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors">
                        {t.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#3E7DBF] text-slate-400 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
