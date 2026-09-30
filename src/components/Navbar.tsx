import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import sjiLogo from '../assets/sji-logo.png';

interface NavbarProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReview, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Preserving exact original structure with SJI logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={sjiLogo}
              alt="SJ Innovation"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900">
                  LEGAL<span className="text-[#EA7826]">ENGINE</span>
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 block -mt-1 font-semibold">
                Powered by SJ Innovation
              </span>
            </div>
          </a>

          {/* Desktop Nav - Exact original spacing and typography */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#problems" className="hover:text-[#3E7DBF] transition-colors">The Challenge</a>
            <a href="#packages" className="hover:text-[#3E7DBF] transition-colors">Packages</a>
            <a href="#ai-receptionist" className="hover:text-[#3E7DBF] transition-colors">AI Intake</a>
            <a href="#seo-aeo" className="hover:text-[#3E7DBF] transition-colors">SEO vs AEO</a>
            <a href="#website-redesign" className="hover:text-[#3E7DBF] transition-colors">Websites</a>
            <a href="#faq" className="hover:text-[#3E7DBF] transition-colors">FAQ</a>
          </nav>

          {/* Header Action Buttons - Exact original rounded-xl design */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReview}
              className="px-4 py-2.5 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-md active:scale-95"
            >
              Free Review
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all text-xs active:scale-95"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 text-sm">
          <a
            href="#problems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            The Challenge
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            Packages
          </a>
          <a
            href="#ai-receptionist"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            AI Intake
          </a>
          <a
            href="#seo-aeo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            SEO vs AEO
          </a>
          <a
            href="#website-redesign"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            Websites
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium"
          >
            FAQ
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReview();
              }}
              className="w-full py-3 rounded-xl font-bold text-white bg-[#EA7826] text-center"
            >
              Get Free Review
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-semibold text-slate-800 bg-white border border-slate-300 text-center"
            >
              Book 15-Min Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
