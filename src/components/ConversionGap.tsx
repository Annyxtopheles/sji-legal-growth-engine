import React from 'react';
import { MapPinOff, PhoneMissed, Clock, Globe, AlertCircle } from 'lucide-react';

export const ConversionGap: React.FC = () => {
  const problems = [
    {
      icon: MapPinOff,
      title: "Not Showing Up Locally",
      description: "Property owners cannot find your company on Google Maps when urgently searching for water extraction or fire cleanup.",
      impact: "Leads go to national franchises"
    },
    {
      icon: PhoneMissed,
      title: "Missed Emergency Calls",
      description: "Calls coming in after hours or while your crews are in the field go straight to voicemail and end up as lost claims.",
      impact: "$8,000+ lost per missed call"
    },
    {
      icon: Clock,
      title: "Slow Follow-Up",
      description: "Panicked homeowners contact 3-4 contractors simultaneously. A delay of just 10 minutes means losing the restoration contract.",
      impact: "Competitor dispatches first"
    },
    {
      icon: Globe,
      title: "Outdated Website",
      description: "A slow, non-responsive site destroys trust before a customer ever speaks with your dispatch team or estimators.",
      impact: "High visitor bounce rates"
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-50/70 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            The Conversion Gap
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Potential Clients Don't Wait Long <br className="hidden sm:inline" />
            for a Response
          </h3>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto text-balance">
            When property damage strikes at 2 AM, homeowners and property managers call whoever can dispatch first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-red-50 rounded-xl border border-red-100 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200 mb-2">{prob.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {prob.description}
                  </p>
                </div>
                <p className="mt-6 text-[11px] font-semibold text-red-600 flex items-center gap-1.5 border-t border-slate-100 pt-3">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{prob.impact}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 max-w-3xl mx-auto shadow-sm hover:border-[#3E7DBF]/40 hover:shadow-md transition-all duration-300">
          <p className="text-base font-semibold text-slate-900">
            <span className="text-[#3E7DBF] font-bold">We help fix the entire client journey</span> — from being discovered on Google to getting the dispatch confirmed and contract signed.
          </p>
        </div>
      </div>
    </section>
  );
};
