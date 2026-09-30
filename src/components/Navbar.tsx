import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReview, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching SJI website */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/sji-logo.png"
              alt="SJ Innovation - AI First Solutions"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-xs font-black tracking-widest text-[#3E7DBF] uppercase">
                Legal Growth
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                AI Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-700">
            <a href="#problems" className="hover:text-[#3E7DBF] transition-colors">
              The Challenge
            </a>
            <a href="#packages" className="hover:text-[#3E7DBF] transition-colors">
              Growth Plans
            </a>
            <a href="#ai-receptionist" className="hover:text-[#3E7DBF] transition-colors">
              24/7 AI Intake
            </a>
            <a href="#seo-aeo" className="hover:text-[#3E7DBF] transition-colors">
              SEO vs AEO
            </a>
            <a href="#website-redesign" className="hover:text-[#3E7DBF] transition-colors">
              Law Websites
            </a>
            <a href="#faq" className="hover:text-[#3E7DBF] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Action Buttons matching SJI aesthetic */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReview}
              className="px-4 py-2.5 rounded-full font-bold text-xs text-[#EA7826] bg-[#EA7826]/10 hover:bg-[#EA7826]/20 border border-[#EA7826]/30 transition-all flex items-center gap-1 active:scale-95"
            >
              <span>Free Practice Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-black hover:bg-slate-800 transition-all shadow-sm active:scale-95 tracking-wide"
            >
              BOOK A CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-black focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-3 text-sm animate-fadeIn shadow-lg">
          <a
            href="#problems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            The Challenge
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            Growth Plans
          </a>
          <a
            href="#ai-receptionist"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            24/7 AI Intake
          </a>
          <a
            href="#seo-aeo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            SEO vs AEO
          </a>
          <a
            href="#website-redesign"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            Law Firm Websites
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-[#3E7DBF] font-medium"
          >
            FAQ
          </a>
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReview();
              }}
              className="w-full py-3 rounded-full font-bold text-xs text-[#EA7826] bg-[#EA7826]/10 border border-[#EA7826]/30 text-center"
            >
              Get Free Practice Audit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full font-bold text-xs text-white bg-black hover:bg-slate-800 text-center"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
