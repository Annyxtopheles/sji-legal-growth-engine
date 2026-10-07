import React from 'react';
import { ArrowRight, Search, Bot, Zap, Layout } from 'lucide-react';

interface HeroProps {
  onOpenReview?: () => void;
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden bg-white">
      {/* Subtle ambient light blurs matching SJI website */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3E7DBF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA7826]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge - Exact original proportion and spacing */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-[#3E7DBF]/30 text-[#3E7DBF] text-xs font-semibold mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#EA7826] animate-ping"></span>
          <span>Designed Exclusively for Personal Injury, Criminal Defense & Growing Law Firms</span>
        </div>

        {/* Main Title - Exact 2-line clarity from original design */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto">
          Get Found. Respond Faster. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7DBF] via-[#3E7DBF] to-[#EA7826]">
            Book More Legal Cases.
          </span>
        </h1>

        {/* Subtitle - Exact original width and readable scale */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          SEO, AI-powered intake, consultation booking, follow-up automation, and modern websites designed to help growing law practices turn urgent inquiries into signed retainers.
        </p>

        {/* Action CTAs - Exact original 2-button layout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href="mailto:siddiqur.rahman@sjinnovation.com?subject=Free%20Law%20Firm%20Practice%20Review%20Request&body=Hi%20Siddiqur,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20free%20review%20of%20our%20law%20firm's%20digital%20presence,%20Google%20Maps%20rank,%20and%20intake%20speed.%0D%0A%0D%0ALaw%20Firm%20Name:%20%0D%0AWebsite:%20%0D%0APractice%20Area:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all shadow-lg text-base flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Get My Free Practice Review</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all text-base flex items-center justify-center gap-2 active:scale-95"
          >
            <span>See Packages</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          No retainer commitment required. Direct review by SJ Innovation • <a href="mailto:siddiqur.rahman@sjinnovation.com" className="text-[#3E7DBF] hover:underline font-semibold">siddiqur.rahman@sjinnovation.com</a>
        </p>

        {/* Value Chips - Exact original 4-card grid on border-t bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#3E7DBF]/40 transition-colors">
            <Search className="w-5 h-5 text-[#3E7DBF] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Local Google Visibility</p>
              <p className="text-[11px] text-slate-500">Rank high on Maps</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#EA7826]/40 transition-colors">
            <Bot className="w-5 h-5 text-[#EA7826] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">24/7 AI Legal Intake</p>
              <p className="text-[11px] text-slate-500">Zero missed calls</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#3E7DBF]/40 transition-colors">
            <Zap className="w-5 h-5 text-[#3E7DBF] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Sub-5s Case Follow-Up</p>
              <p className="text-[11px] text-slate-500">Lock leads instantly</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#EA7826]/40 transition-colors">
            <Layout className="w-5 h-5 text-[#EA7826] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Conversion Web Designs</p>
              <p className="text-[11px] text-slate-500">Built for retainers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
