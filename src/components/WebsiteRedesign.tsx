import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

interface WebsiteRedesignProps {
  onOpenReview: () => void;
}

export const WebsiteRedesign: React.FC<WebsiteRedesignProps> = ({ onOpenReview }) => {
  return (
    <section id="website-redesign" className="py-12 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1.5">
            Built for Retainer Conversions
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Website Should Sign Retainers — Not Just Look Prestigious
          </p>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            We build fast, mobile-first legal websites that convey courtroom credibility and make contacting an attorney effortless.
          </p>
        </div>

        {/* Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
          {/* Before Card */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-red-200 relative shadow-xs">
            <span className="inline-block px-3 py-0.5 bg-red-50 border border-red-200 text-red-600 text-[11px] font-bold rounded-full mb-3">
              Old / Traditional Law Firm Site
            </span>
            <div className="space-y-2.5 opacity-60 pointer-events-none select-none">
              <div className="h-5 bg-slate-200 rounded w-3/4"></div>
              <div className="h-16 bg-slate-100 rounded border border-slate-200 p-2.5 text-xs text-slate-500">
                Dense walls of legal text, tiny phone number buried in footer, slow mobile load speed, no clear consult flow.
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-red-500">
                <div className="p-1.5 bg-red-50 rounded-lg">❌ Difficult to call on mobile</div>
                <div className="p-1.5 bg-red-50 rounded-lg">❌ High bounce on PPC ads</div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="sji-card p-5 sm:p-6 rounded-3xl border-2 border-[#3E7DBF] relative shadow-lg">
            <span className="inline-block px-3 py-0.5 bg-[#3E7DBF] text-white text-[11px] font-bold rounded-full mb-3">
              Modern SJI High-Converting Redesign
            </span>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3E7DBF]" />
                  24/7 Free Case Evaluation Header
                </span>
                <span className="text-xs font-bold text-[#EA7826]">(800) 555-LEGAL</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sticky 1-tap call button, instant AI intake triage, settlement results showcase, attorney board certifications, and verified 5-star client review carousels.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] text-slate-700 font-semibold">
                <div className="p-1.5 bg-[#3E7DBF]/10 border border-[#3E7DBF]/20 rounded-xl flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#3E7DBF]" /> Sub-1s Mobile Speed
                </div>
                <div className="p-1.5 bg-[#EA7826]/10 border border-[#EA7826]/20 rounded-xl flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#EA7826]" /> Practice CRM Integration
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 text-center">
          <button
            onClick={onOpenReview}
            className="px-6 py-2.5 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-sji-orange active:scale-95"
          >
            Request Free Law Firm Conversion Audit
          </button>
        </div>
      </div>
    </section>
  );
};
