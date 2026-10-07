import React from 'react';
import { Check, Sparkles, Layout } from 'lucide-react';

interface PackagesProps {
  onSelectPackage?: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = () => {
  return (
    <section id="packages" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Transparent Growth Plans
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Select Your Restoration <br className="hidden sm:inline" />
            Scaling Package
          </h3>
          <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto text-balance">
            No complex tiers. Built specifically to scale independent water, fire & mold restoration businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: SEO Starter */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#3E7DBF] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#3E7DBF]/10 group-hover:text-[#3E7DBF] text-slate-700 text-xs font-semibold mb-4 transition-colors duration-300">
                Local Ranking Focus
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200">SEO Starter</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Build stronger local search and Google Maps visibility.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Google Business Profile Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Water/Fire/Mold Keyword Targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Website On-Page SEO Fixes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Local Citation Matrix Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Monthly Search Visibility Reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">
                <strong>Best for:</strong> Restoration firms with a decent website that need more local emergency calls.
              </p>
              <a
                href="mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20Restoration%20SEO%20Starter%20Package%20($199/mo)&body=Hi%20Siddiqur,%0D%0A%0D%0AI'm%20interested%20in%20the%20SEO%20Starter%20package%20($199/mo)%20for%20our%20restoration%20company.%0D%0A%0D%0ACompany%20Name:%20%0D%0AWebsite:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
                className="w-full py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-[#3E7DBF] hover:text-white hover:border-[#3E7DBF] hover:shadow-md transition-all duration-300 text-xs border border-slate-200 active:scale-95 text-center block"
              >
                Start With SEO Starter
              </a>
            </div>
          </div>

          {/* Package 2: AI Growth (MOST POPULAR) */}
          <div className="group bg-white rounded-3xl p-8 border-2 border-[#3E7DBF] shadow-xl ring-4 ring-[#3E7DBF]/10 hover:ring-[#3E7DBF]/25 hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA7826] text-white font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-xs font-semibold mb-4 mt-2">
                Complete Intake + SEO Engine
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200">AI Growth</h3>
              <p className="text-slate-600 text-xs mt-1 mb-6">Turn more inquiries into booked emergency dispatches.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-5xl font-black text-slate-900">$399</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-3 font-semibold text-[#3E7DBF]">
                  <Sparkles className="w-4 h-4 text-[#EA7826] flex-shrink-0" />
                  <span>Everything in SEO Starter + SEO & AEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>24/7 AI Receptionist</strong> for Calls & Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>Instant Missed-Call Auto Text Back</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Automated On-Call Tech Scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>SMS & Email Nurture Workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Social Media Management & GHL CRM Setup</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-600 mb-4 bg-[#3E7DBF]/5 p-2.5 rounded-lg border border-[#3E7DBF]/20">
                <strong>Best for:</strong> Firms looking to maximize lead volume and eliminate dropped emergency inquiries.
              </p>
              <a
                href="mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20Restoration%20AI%20Growth%20Package%20($399/mo)&body=Hi%20Siddiqur,%0D%0A%0D%0AI'm%20interested%20in%20the%20AI%20Growth%20package%20($399/mo)%20for%20our%20restoration%20company.%0D%0A%0D%0ACompany%20Name:%20%0D%0AWebsite:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
                className="w-full py-4 rounded-xl font-extrabold text-white bg-[#EA7826] hover:bg-[#d46519] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-xs uppercase tracking-wider shadow-md active:scale-95 text-center block"
              >
                Explore AI Growth
              </a>
            </div>
          </div>

          {/* Package 3: Website + Growth */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#EA7826] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#EA7826]/10 text-[#EA7826] text-xs font-semibold mb-4">
                Complete Transformation
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#EA7826] transition-colors duration-200">Website + Growth</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Modernize your entire digital footprint & brand.</p>
              
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$999</span>
                <span className="text-[#3E7DBF] text-xs font-bold uppercase tracking-wider bg-[#3E7DBF]/10 px-2 py-0.5 rounded border border-[#3E7DBF]/20">
                  One-Time Payment
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3 font-semibold text-[#3E7DBF]">
                  <Layout className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full Custom Restoration Web Redesign</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Mobile-First Dispatch-Focused Layout</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>SEO-Optimized Structure & Fast Loading</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Free SEO Support</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Social Media Management</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full GHL Integration & Lead Form Flow</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">
                <strong>Best for:</strong> Firms with outdated sites that need a premium image and high conversion setup.
              </p>
              <a
                href="mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20Restoration%20Website%20+%20Growth%20Package%20($999)&body=Hi%20Siddiqur,%0D%0A%0D%0AI'm%20interested%20in%20the%20Restoration%20Website%20+%20Growth%20redesign%20package%20($999)%20for%20our%20firm.%0D%0A%0D%0ACompany%20Name:%20%0D%0ACurrent%20Website:%20%0D%0APhone%20Number:%20%0D%0A%0D%0AThank%20you!"
                className="w-full py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-[#EA7826] hover:text-white hover:border-[#EA7826] hover:shadow-md transition-all duration-300 text-xs border border-slate-200 active:scale-95 text-center block"
              >
                Redesign My Website
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
