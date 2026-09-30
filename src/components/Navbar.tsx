import React, { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReview, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2 bg-goldAccent-500/10 rounded-xl border border-goldAccent-500/30 text-goldAccent-500 group-hover:bg-goldAccent-500/20 transition-all">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  RESTORATION<span className="text-goldAccent-500">ENGINE</span>
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 block -mt-1 font-medium">
                Powered by SJ Innovation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#problems" className="hover:text-goldAccent-400 transition-colors">The Challenge</a>
            <a href="#packages" className="hover:text-goldAccent-400 transition-colors">Packages</a>
            <a href="#ai-receptionist" className="hover:text-goldAccent-400 transition-colors">AI Dispatch</a>
            <a href="#seo-aeo" className="hover:text-goldAccent-400 transition-colors">SEO vs AEO</a>
            <a href="#website-redesign" className="hover:text-goldAccent-400 transition-colors">Websites</a>
            <a href="#faq" className="hover:text-goldAccent-400 transition-colors">FAQ</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReview}
              className="px-4 py-2.5 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all text-xs tracking-wide shadow-md active:scale-95"
            >
              Free Review
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl font-semibold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-all text-xs active:scale-95"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 text-sm animate-fadeIn">
          <a
            href="#problems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            The Challenge
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            Packages
          </a>
          <a
            href="#ai-receptionist"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            AI Dispatch
          </a>
          <a
            href="#seo-aeo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            SEO vs AEO
          </a>
          <a
            href="#website-redesign"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            Websites
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-goldAccent-400"
          >
            FAQ
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReview();
              }}
              className="w-full py-3 rounded-xl font-bold text-navy-950 bg-goldAccent-500 text-center"
            >
              Get Free Review
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-semibold text-white border border-slate-700 text-center"
            >
              Book 15-Min Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
