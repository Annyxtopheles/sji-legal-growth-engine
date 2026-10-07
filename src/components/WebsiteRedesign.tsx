import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

interface WebsiteRedesignProps {
  onOpenReview?: () => void;
}

export const WebsiteRedesign: React.FC<WebsiteRedesignProps> = () => {
  return (
    <section id="website-redesign" className="py-24 bg-slate-50/70 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Built for High Conversions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Your Website Should Convert Visitors — Not Just Look Good
          </p>
          <p className="mt-3 text-slate-600 text-sm">
            We build fast, mobile-first legal websites that instill immediate trust and drive immediate phone calls.
          </p>
        </div>

        {/* Comparison Showcase - Exact original side-by-side structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="bg-white p-6 rounded-2xl border border-red-500/20 relative shadow-sm">
            <span className="inline-block px-3 py-1 bg-red-50 border border-red-200 text-red-500 text-xs font-bold rounded mb-4">
              Old / Standard Law Firm Site
            </span>
            <div className="space-y-3 opacity-60 pointer-events-none select-none">
              <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              <div className="h-24 bg-slate-100 rounded border border-slate-200 p-3 text-xs text-slate-500">
                Cluttered text, tiny contact phone number buried at bottom, slow load times, no clear consult CTAs.
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-red-500">
                <div className="p-2 bg-red-50 rounded">❌ Hard to call on mobile</div>
                <div className="p-2 bg-red-50 rounded">❌ Low trust factors</div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#3E7DBF] relative shadow-lg">
            <span className="inline-block px-3 py-1 bg-[#3E7DBF] text-white text-xs font-bold rounded mb-4">
              Modern High-Converting Redesign
            </span>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3E7DBF]" />
                  24/7 Free Case Evaluation Header
                </span>
                <span className="text-xs font-bold text-[#EA7826]">(555) 019-2831</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sticky tap-to-call buttons, instant booking forms, Bar certifications highlighted, and real-time review badges.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-700 font-semibold">
                <div className="p-2 bg-[#3E7DBF]/10 border border-[#3E7DBF]/20 rounded flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#3E7DBF]" /> Mobile-first speed
                </div>
                <div className="p-2 bg-[#3E7DBF]/10 border border-[#3E7DBF]/20 rounded flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#3E7DBF]" /> Practice CRM Integration
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:siddiqur.rahman@sjinnovation.com?subject=Law%20Firm%20Website%20Conversion%20Audit%20Request&body=Hi%20Siddiqur,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20free%20website%20conversion%20audit%20for%20our%20law%20firm.%0D%0A%0D%0ALaw%20Firm%20Name:%20%0D%0AWebsite:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
            className="px-8 py-3.5 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-md active:scale-95 inline-block"
          >
            Request Free Website Conversion Audit →
          </a>
        </div>
      </div>
    </section>
  );
};
