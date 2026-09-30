import React from 'react';
import { Check, Sparkles, Layout } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Transparent Growth Plans
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Select Your Law Firm Scaling Package
          </p>
          <p className="mt-4 text-slate-600 text-sm">
            No complex tiers. Built specifically to scale personal injury, litigation, defense, and growing law practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: SEO Starter */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
                Local Legal 3-Pack Focus
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Legal SEO Starter</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Build stronger local search and Google Maps visibility.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Google Business Profile Optimization (3-Pack)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Practice Area Keyword Targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Website On-Page Legal SEO Fixes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Local Legal Citation Matrix (Justia, Avvo)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Monthly Search Visibility & Call Reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <strong>Best for:</strong> Law practices with a decent website that need more inbound local calls.
              </p>
              <button
                onClick={() => onSelectPackage('Legal SEO Starter ($199/mo)')}
                className="w-full py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all text-xs border border-slate-200 active:scale-95"
              >
                Start With SEO Starter
              </button>
            </div>
          </div>

          {/* Package 2: AI Legal Growth (MOST POPULAR) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#3E7DBF] shadow-xl ring-4 ring-[#3E7DBF]/10 flex flex-col justify-between hover:border-[#3E7DBF] transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA7826] text-white font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-xs font-semibold mb-4 mt-2">
                Complete Intake + SEO Engine
              </div>
              <h3 className="text-2xl font-bold text-slate-900">AI Legal Growth</h3>
              <p className="text-slate-600 text-xs mt-1 mb-6">Turn more inquiries into signed client retainers.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-5xl font-black text-slate-900">$399</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-3 font-semibold text-[#3E7DBF]">
                  <Sparkles className="w-4 h-4 text-[#EA7826] flex-shrink-0" />
                  <span>Everything in SEO Starter + Legal AEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>24/7 AI Legal Receptionist</strong> for Calls & Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>Instant Missed-Call Auto Text Back (Sub-5s)</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Automated Attorney Consultation Scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Case Qualification & Conflict Screening Flow</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Legal CRM Sync (Clio, Lawmatics, Filevine, GHL)</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-600 mb-4 bg-[#3E7DBF]/5 p-2.5 rounded-lg border border-[#3E7DBF]/20">
                <strong>Best for:</strong> Firms looking to maximize case volume and eliminate dropped emergency inquiries.
              </p>
              <button
                onClick={() => onSelectPackage('AI Legal Growth ($399/mo)')}
                className="w-full py-4 rounded-xl font-extrabold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs uppercase tracking-wider shadow-md active:scale-95"
              >
                Explore AI Legal Growth
              </button>
            </div>
          </div>

          {/* Package 3: Law Firm Website + Growth */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#EA7826]/10 text-[#EA7826] text-xs font-semibold mb-4">
                Complete Transformation
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Law Firm Website + Growth</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Modernize your firm's entire digital footprint & brand.</p>
              
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$999</span>
                <span className="text-[#3E7DBF] text-xs font-bold uppercase tracking-wider bg-[#3E7DBF]/10 px-2 py-0.5 rounded border border-[#3E7DBF]/20">
                  One-Time Payment
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3 font-semibold text-[#3E7DBF]">
                  <Layout className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full Custom Law Firm Web Redesign</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Mobile-First Retainer-Focused Layout</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>SEO-Optimized Structure & Fast Loading</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Free Legal SEO Support</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Legal Social Media & Authority</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full Practice Intake Form Flow & CRM Integration</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <strong>Best for:</strong> Firms with outdated sites that need a premium image and high conversion setup.
              </p>
              <button
                onClick={() => onSelectPackage('Law Firm Website + Growth ($999 One-Time)')}
                className="w-full py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all text-xs border border-slate-200 active:scale-95"
              >
                Redesign Our Website
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
