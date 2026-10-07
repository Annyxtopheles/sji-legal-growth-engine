import React from 'react';

export const PartnershipStats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="text-xs font-bold text-[#EA7826] uppercase tracking-widest block mb-2">
              Proven Tech Partner
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-balance">
              Technology + Marketing <br className="hidden sm:inline" />
              Under One Team
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed text-balance">
              Unlike traditional agencies that overpromise rankings, SJ Innovation provides end-to-end technology support, AI workflows, and local growth systems.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-300 mb-1">20+ Years</h4>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">Established in 2004 in New York with continuous tech expertise.</p>
            </div>
            <div className="group p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-300 mb-1">AI & CRM</h4>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">Deep experience in AI integration and practice CRM workflows.</p>
            </div>
            <div className="group p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-300 mb-1">Web Experts</h4>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">Custom web applications and high-conversion mobile frameworks.</p>
            </div>
            <div className="group p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-300 mb-1">Long-Term</h4>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300">Dedicated technology partnership so your business never stalls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
