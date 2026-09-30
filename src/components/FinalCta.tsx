import React from 'react';

interface FinalCtaProps {
  onOpenReview: () => void;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenReview, onOpenBooking }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 p-10 sm:p-14 rounded-3xl border border-goldAccent-500/50 text-center relative overflow-hidden shadow-2xl glow-gold">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Capture Every Restoration Lead?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Let's review your website, Google Maps visibility, and emergency intake process today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenReview}
              className="px-8 py-4 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all text-xs tracking-wide shadow-md active:scale-95"
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
