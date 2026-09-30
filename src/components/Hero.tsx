import React from 'react';
import { ArrowRight, Search, Bot, Zap, Layout } from 'lucide-react';

interface HeroProps {
  onOpenReview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReview }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-goldAccent-500/30 text-goldAccent-400 text-xs font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-goldAccent-500 animate-ping"></span>
          <span>Designed Exclusively for Water, Fire, Mold & Storm Restoration Contractors</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
          Get Found. Respond Faster. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldAccent-400 via-goldAccent-500 to-amber-500">
            Book More Restoration Jobs.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          SEO, AI-powered intake, appointment booking, follow-up automation, and modern websites designed to help growing restoration companies turn emergency inquiries into signed contracts.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onOpenReview}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all shadow-lg glow-gold text-base flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Get My Free Restoration Review</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-all text-base flex items-center justify-center gap-2 active:scale-95"
          >
            <span>See Packages</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          No long-term commitment required. We review your site, search rank, and intake speed for free.
        </p>

        {/* Value Chips */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-goldAccent-500/30 transition-all">
            <Search className="w-5 h-5 text-goldAccent-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Local Google Visibility</p>
              <p className="text-[11px] text-slate-400">Rank high on Maps</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-tealAccent-500/30 transition-all">
            <Bot className="w-5 h-5 text-tealAccent-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">24/7 AI Emergency Intake</p>
              <p className="text-[11px] text-slate-400">Zero missed calls</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-goldAccent-500/30 transition-all">
            <Zap className="w-5 h-5 text-goldAccent-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Sub-5s Text Follow-Up</p>
              <p className="text-[11px] text-slate-400">Lock leads instantly</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-tealAccent-500/30 transition-all">
            <Layout className="w-5 h-5 text-tealAccent-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Conversion Web Designs</p>
              <p className="text-[11px] text-slate-400">Built for dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
