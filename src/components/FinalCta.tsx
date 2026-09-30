import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="py-20 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sji-card p-10 sm:p-14 rounded-3xl text-center relative overflow-hidden shadow-xl border-2 border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-[#3E7DBF]/5">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA7826]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3E7DBF]/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 relative z-10">
            Ready to Capture Every High-Value Case?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8 relative z-10">
            Let's review your law firm's Google Maps 3-Pack rank, website conversion bottlenecks, and emergency intake speed today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-black hover:bg-slate-800 transition-all text-xs tracking-wide shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <span>BOOK A 15-MINUTE CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenReview}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs shadow-sji-orange active:scale-95"
            >
              Get Free Practice Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
