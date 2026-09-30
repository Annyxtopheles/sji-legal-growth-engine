import React from 'react';
import { Search, Bot, Zap, Layout, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-white">
      {/* Background ambient radial glow like sjinnovation.com */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3E7DBF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-[#EA7826]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/25 text-[#3E7DBF] text-xs font-bold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#EA7826] animate-pulse"></span>
          <span>Designed Exclusively for Personal Injury, Criminal Defense & Growing Law Firms</span>
        </div>

        {/* Main Title matching SJI typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
          Sign more high-value cases with <br className="hidden sm:inline" />
          <span className="sji-gradient-text">
            AI-powered legal intake
          </span> & local search
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          24/7 AI receptionist, instant case qualification, Google 3-Pack SEO, consultation booking, and modern legal websites engineered to turn panicked inquiries into signed retainers.
        </p>

        {/* Action CTAs & Clutch Review Badge matching sjinnovation.com */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto sm:max-w-none">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-black hover:bg-slate-800 transition-all shadow-md text-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <span>BOOK A CALL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenReview}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all shadow-sji-orange text-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Get Free Law Firm Audit</span>
          </button>

          {/* Clutch Reviews Widget matching screenshot */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-black text-[11px] flex items-center justify-center">
              C
            </span>
            <div className="flex items-center gap-0.5 text-red-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
              39+ REVIEWS
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          No retainer commitment required. We audit your law firm's search rank, intake speed, and website conversion for free.
        </p>

        {/* Social Proof / Trusted Companies Bar from sjinnovation.com */}
        <div className="mt-14 pt-8 border-t border-slate-100">
          <p className="text-[11px] uppercase font-bold tracking-widest text-slate-400 mb-6">
            TRUSTED BY 500+ ENTERPRISES & LEGAL PRACTICES NATIONWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-serif font-black text-slate-700 text-lg">Neutrogena</span>
            <span className="font-sans font-bold text-[#3E7DBF] text-base">janssen ❩</span>
            <span className="font-serif font-extrabold text-red-700 text-sm tracking-wider">Johnson & Johnson</span>
            <span className="font-mono font-bold text-slate-800 text-sm">VYGILANCE</span>
            <span className="font-sans font-semibold text-emerald-600 text-sm">Rentah</span>
            <span className="font-serif font-bold text-red-800 text-sm">ST. JOHN'S UNIVERSITY</span>
          </div>
        </div>

        {/* Value Chips */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="sji-card sji-card-hover p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#3E7DBF]/10 text-[#3E7DBF]">
              <Search className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Local Google 3-Pack</p>
              <p className="text-[11px] text-slate-500">Rank #1 on Maps</p>
            </div>
          </div>

          <div className="sji-card sji-card-hover p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#EA7826]/10 text-[#EA7826]">
              <Bot className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">24/7 AI Legal Intake</p>
              <p className="text-[11px] text-slate-500">Zero missed retainers</p>
            </div>
          </div>

          <div className="sji-card sji-card-hover p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#3E7DBF]/10 text-[#3E7DBF]">
              <Zap className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Sub-5s Case Follow-Up</p>
              <p className="text-[11px] text-slate-500">Sign retainers instantly</p>
            </div>
          </div>

          <div className="sji-card sji-card-hover p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#EA7826]/10 text-[#EA7826]">
              <Layout className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Conversion Law Websites</p>
              <p className="text-[11px] text-slate-500">Built to sign cases</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
