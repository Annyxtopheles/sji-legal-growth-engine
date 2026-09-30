import React from 'react';
import { MapPinOff, PhoneMissed, Clock, Globe, AlertCircle } from 'lucide-react';

export const ConversionGap: React.FC = () => {
  const problems = [
    {
      icon: MapPinOff,
      title: "Invisible in the Google 3-Pack",
      description: "When potential clients urgently search 'car accident attorney near me' or 'criminal defense lawyer [city]', your firm doesn't appear in the top 3 map pack.",
      impact: "Retainers go to competing high-spend firms"
    },
    {
      icon: PhoneMissed,
      title: "Missed Emergency Inquiries",
      description: "Calls coming in after 5 PM, over weekends, or while your attorneys are in depositions or trial go straight to voicemail and are lost forever.",
      impact: "$25,000+ to $100,000+ lost per missed retainer"
    },
    {
      icon: Clock,
      title: "Slow Intake Follow-Up",
      description: "Panicked accident victims or criminal defendants reach out to 3-4 firms at once. A 10-minute delay means they sign with whoever answered first.",
      impact: "Competitor signs the retainer first"
    },
    {
      icon: Globe,
      title: "Outdated Law Firm Website",
      description: "A slow, non-responsive site filled with legal jargon destroys client trust before an intake specialist or attorney can even speak with them.",
      impact: "High bounce rate on high-cost PPC clicks"
    }
  ];

  return (
    <section id="problems" className="py-12 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1.5">
            The Conversion Gap
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Prospective Legal Clients Call Whoever Answers First
          </p>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            When serious injuries occur or legal emergencies strike, clients don't leave voicemails. They hire the firm that provides instant counsel and signs the retainer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="sji-card p-5 rounded-2xl flex flex-col justify-between hover:border-[#3E7DBF]/40 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 bg-red-50 rounded-xl border border-red-100 flex items-center justify-center text-red-500 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{prob.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {prob.description}
                  </p>
                </div>
                <p className="mt-4 text-[11px] font-semibold text-red-600 flex items-center gap-1.5 border-t border-slate-100 pt-2.5">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{prob.impact}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center bg-white p-4 rounded-xl border border-slate-200 shadow-xs max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-medium text-slate-700">
            <span className="text-[#3E7DBF] font-bold">We fix your law firm's entire client acquisition funnel</span> — from Google search discovery to 24/7 AI case qualification and signed retainer agreements.
          </p>
        </div>
      </div>
    </section>
  );
};
