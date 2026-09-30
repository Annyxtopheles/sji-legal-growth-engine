import React from 'react';

interface FinalCtaProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 sm:p-14 rounded-3xl border border-[#3E7DBF]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Capture Every High-Value Case?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Let's review your website, Google Maps visibility, and emergency intake process today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenReview}
              className="px-8 py-4 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-md active:scale-95"
            >
              Get My Free Review
            </button>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all text-xs active:scale-95"
            >
              Book a 15-Minute Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
