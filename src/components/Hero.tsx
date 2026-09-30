import React from 'react';
import { Search, Bot, Zap, Layout, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="relative flex items-center justify-center pt-8 pb-12 overflow-hidden bg-white">
      {/* Background ambient radial glow like sjinnovation.com */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3E7DBF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA7826]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/20 text-[#3E7DBF] text-[11px] font-bold mb-5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA7826] animate-pulse"></span>
          <span>Designed Exclusively for Personal Injury, Criminal Defense & Growing Law Firms</span>
        </div>

        {/* Main Title - No orphaned words, perfectly balanced */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.18] max-w-4xl mx-auto">
          Sign more high-value cases with <br className="hidden sm:inline" />
          <span className="sji-gradient-text">AI-powered legal intake</span> & local search
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          24/7 AI receptionist, instant case qualification, Google 3-Pack SEO, appointment booking, and modern websites engineered to turn panicked inquiries into signed retainers.
        </p>

        {/* Action CTAs & Clutch Review Badge */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto sm:max-w-none">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full font-bold text-white bg-black hover:bg-slate-800 transition-all shadow-sm text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <span>BOOK A CALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenReview}
            className="px-6 py-3 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all shadow-sji-orange text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Get Free Law Firm Audit</span>
          </button>

          {/* Clutch Reviews Widget */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
            <span className="w-4 h-4 rounded-full bg-slate-900 text-white font-black text-[10px] flex items-center justify-center">
              C
            </span>
            <div className="flex items-center gap-0.5 text-red-500">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              39+ REVIEWS
            </span>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          No retainer commitment required. We review your search rank, intake speed, and website conversion for free.
        </p>

        {/* Social Proof / Trusted Companies Bar */}
        <div className="mt-8 pt-5 border-t border-slate-100">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4">
            TRUSTED BY 500+ ENTERPRISES & LEGAL PRACTICES NATIONWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-serif font-black text-slate-700 text-base">Neutrogena</span>
            <span className="font-sans font-bold text-[#3E7DBF] text-sm">janssen ❩</span>
            <span className="font-serif font-extrabold text-red-700 text-xs tracking-wider">Johnson & Johnson</span>
            <span className="font-mono font-bold text-slate-800 text-xs">VYGILANCE</span>
            <span className="font-sans font-semibold text-emerald-600 text-xs">Rentah</span>
            <span className="font-serif font-bold text-red-800 text-xs">ST. JOHN'S UNIVERSITY</span>
          </div>
        </div>

        {/* Value Chips - Compact & Clean */}
        <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="sji-card p-3 rounded-xl flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#3E7DBF]/10 text-[#3E7DBF]">
              <Search className="w-4 h-4 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Local Google 3-Pack</p>
              <p className="text-[10px] text-slate-500">Rank #1 on Maps</p>
            </div>
          </div>

          <div className="sji-card p-3 rounded-xl flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#EA7826]/10 text-[#EA7826]">
              <Bot className="w-4 h-4 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">24/7 AI Legal Intake</p>
              <p className="text-[10px] text-slate-500">Zero missed retainers</p>
            </div>
          </div>

          <div className="sji-card p-3 rounded-xl flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#3E7DBF]/10 text-[#3E7DBF]">
              <Zap className="w-4 h-4 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Sub-5s Case Follow-Up</p>
              <p className="text-[10px] text-slate-500">Sign retainers instantly</p>
            </div>
          </div>

          <div className="sji-card p-3 rounded-xl flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#EA7826]/10 text-[#EA7826]">
              <Layout className="w-4 h-4 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Conversion Law Websites</p>
              <p className="text-[10px] text-slate-500">Built to sign cases</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
