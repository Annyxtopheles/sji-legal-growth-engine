import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

interface WebsiteRedesignProps {
  onOpenReview: () => void;
}

export const WebsiteRedesign: React.FC<WebsiteRedesignProps> = ({ onOpenReview }) => {
  return (
    <section id="website-redesign" className="py-24 bg-navy-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-goldAccent-500 uppercase tracking-widest mb-3">
            Built for High Conversions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Your Website Should Convert Visitors — Not Just Look Good
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            We build fast, mobile-first restoration websites that instill immediate trust and drive immediate phone calls.
          </p>
        </div>

        {/* Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-red-500/20 relative">
            <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold rounded mb-4">
              Old / Standard Contractor Site
            </span>
            <div className="space-y-3 opacity-60 pointer-events-none select-none">
              <div className="h-6 bg-slate-800 rounded w-3/4"></div>
              <div className="h-24 bg-slate-900 rounded border border-slate-800 p-3 text-xs text-slate-500">
                Cluttered text, tiny contact phone number buried at bottom, slow load times, no clear dispatch CTAs.
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-red-400">
                <div className="p-2 bg-red-500/5 rounded">❌ Hard to call on mobile</div>
                <div className="p-2 bg-red-500/5 rounded">❌ Low trust factors</div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="glass-panel p-6 rounded-2xl border-2 border-goldAccent-500 relative glow-gold">
            <span className="inline-block px-3 py-1 bg-goldAccent-500 text-navy-950 text-xs font-black rounded mb-4">
              Modern High-Converting Redesign
            </span>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-goldAccent-500" />
                  24/7 Emergency Dispatch Header
                </span>
                <span className="text-xs font-bold text-goldAccent-400">(555) 019-2831</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sticky tap-to-call buttons, instant booking forms, IICRC certifications highlighted, and real-time review badges.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-semibold">
                <div className="p-2 bg-goldAccent-500/10 border border-goldAccent-500/20 rounded flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-goldAccent-500" /> Mobile-first speed
                </div>
                <div className="p-2 bg-goldAccent-500/10 border border-goldAccent-500/20 rounded flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-goldAccent-500" /> GHL Lead Integration
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenReview}
            className="px-8 py-3.5 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all text-xs tracking-wide shadow-md active:scale-95"
          >
            Request Free Website Conversion Audit
          </button>
        </div>
      </div>
    </section>
  );
};
