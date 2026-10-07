import React from 'react';

interface FinalCtaProps {
  onOpenReview?: () => void;
  onOpenBooking?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = () => {
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:siddiqur.rahman@sjinnovation.com?subject=Free%20Law%20Firm%20Practice%20Review%20Request&body=Hi%20Siddiqur,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20free%20review%20of%20our%20law%20firm's%20digital%20presence,%20Google%20Maps%20rank,%20and%20intake%20speed.%0D%0A%0D%0ALaw%20Firm%20Name:%20%0D%0AWebsite:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs tracking-wide shadow-md active:scale-95 text-center inline-block"
            >
              Get Free Practice Review
            </a>
            <a
              href="mailto:siddiqur.rahman@sjinnovation.com?subject=Law%20Firm%20Growth%20Inquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all text-xs active:scale-95 text-center inline-block"
            >
              Email Our Team Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
