import React from 'react';

export const PartnershipStats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="text-xs font-bold text-[#EA7826] uppercase tracking-widest block mb-2">
              Proven Technology Partner
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              AI Engineering + Practice Growth Under One Roof
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Unlike generic marketing agencies that outsource software, SJ Innovation is an established technology firm providing dedicated engineering, AI-powered intake workflows, and high-ROI client acquisition systems.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sji-card p-5 rounded-2xl hover:border-[#3E7DBF]/40 transition-all">
              <h4 className="text-xl font-extrabold text-[#3E7DBF] mb-1">20+ Years</h4>
              <p className="text-xs text-slate-500">Founded in 2004 in New York, trusted by Fortune 500s and leading firms.</p>
            </div>
            <div className="sji-card p-5 rounded-2xl hover:border-[#EA7826]/40 transition-all">
              <h4 className="text-xl font-extrabold text-[#EA7826] mb-1">AI First</h4>
              <p className="text-xs text-slate-500">Deep expertise building compliant AI voice triage, chatbots, and CRM workflows.</p>
            </div>
            <div className="sji-card p-5 rounded-2xl hover:border-[#3E7DBF]/40 transition-all">
              <h4 className="text-xl font-extrabold text-[#3E7DBF] mb-1">Legal Tech</h4>
              <p className="text-xs text-slate-500">Seamless integration with Clio, Lawmatics, Filevine, GHL, and Zapier.</p>
            </div>
            <div className="sji-card p-5 rounded-2xl hover:border-[#EA7826]/40 transition-all">
              <h4 className="text-xl font-extrabold text-[#EA7826] mb-1">High SLA</h4>
              <p className="text-xs text-slate-500">Dedicated technology partnership with 99.9% uptime so your firm never stalls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
