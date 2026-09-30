import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

interface WebsiteRedesignProps {
  onOpenReview: () => void;
}

export const WebsiteRedesign: React.FC<WebsiteRedesignProps> = ({ onOpenReview }) => {
  return (
    <section id="website-redesign" className="py-24 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Built for Retainer Conversions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Your Law Firm Website Should Sign Retainers — Not Just Look Prestigious
          </p>
          <p className="mt-3 text-slate-600 text-sm">
            We build fast, mobile-first legal websites that convey courtroom credibility and make contacting an attorney effortless.
          </p>
        </div>

        {/* Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="bg-white p-6 rounded-3xl border border-red-200 relative shadow-sm">
            <span className="inline-block px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-xs font-bold rounded-full mb-4">
              Old / Traditional Law Firm Site
            </span>
            <div className="space-y-3 opacity-60 pointer-events-none select-none">
              <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              <div className="h-24 bg-slate-100 rounded border border-slate-200 p-3 text-xs text-slate-500">
                Dense walls of legal text, tiny phone number buried in footer, slow mobile load speed, no clear consultation booking flow.
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-red-500">
                <div className="p-2 bg-red-50 rounded-lg">❌ Frustrating to call on mobile</div>
                <div className="p-2 bg-red-50 rounded-lg">❌ 70%+ bounce rate on PPC ads</div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="sji-card p-6 rounded-3xl border-2 border-[#3E7DBF] relative shadow-lg">
            <span className="inline-block px-3 py-1 bg-[#3E7DBF] text-white text-xs font-bold rounded-full mb-4">
              Modern SJI High-Converting Redesign
            </span>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3E7DBF]" />
                  24/7 Free Case Evaluation Header
                </span>
                <span className="text-xs font-bold text-[#EA7826]">(800) 555-LEGAL</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sticky 1-tap call button, instant AI intake triage, settlement results showcase, attorney board certifications, and verified 5-star client review carousels.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-semibold">
                <div className="p-2 bg-[#3E7DBF]/10 border border-[#3E7DBF]/20 rounded-xl flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#3E7DBF]" /> Sub-1s Mobile Speed
                </div>
                <div className="p-2 bg-[#EA7826]/10 border border-[#EA7826]/20 rounded-xl flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#EA7826]" /> Practice CRM Integration
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenReview}
            className="px-8 py-3.5 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-sji-orange active:scale-95"
          >
            Request Free Law Firm Conversion Audit
          </button>
        </div>
      </div>
    </section>
  );
};
