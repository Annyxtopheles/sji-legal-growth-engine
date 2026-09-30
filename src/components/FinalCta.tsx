import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="py-12 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sji-card p-7 sm:p-10 rounded-3xl text-center relative overflow-hidden shadow-lg border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-[#3E7DBF]/5">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#EA7826]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3E7DBF]/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2.5 relative z-10 tracking-tight">
            Ready to Capture Every High-Value Case?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto mb-6 relative z-10">
            Let's review your law firm's Google Maps 3-Pack rank, website conversion bottlenecks, and emergency intake speed today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 relative z-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-white bg-black hover:bg-slate-800 transition-all text-xs tracking-wide shadow-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <span>BOOK A 15-MINUTE CALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenReview}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs shadow-sji-orange active:scale-95"
            >
              Get Free Practice Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
