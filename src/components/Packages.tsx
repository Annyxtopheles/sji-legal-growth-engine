import React from 'react';
import { Check, Sparkles, Layout, Zap } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-14 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1.5">
            Transparent Scaling Plans
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select Your Law Firm Growth Package
          </p>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            No convoluted retainers or hidden agency markups. Built specifically to scale personal injury, litigation, defense, and growing law practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          
          {/* Package 1: Legal SEO Starter */}
          <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all relative">
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px] font-semibold mb-3">
                Local Legal 3-Pack Focus
              </div>
              <h3 className="text-xl font-bold text-slate-900">Legal SEO Starter</h3>
              <p className="text-slate-500 text-xs mt-0.5 mb-5">Dominate Google Maps and local search for high-value cases.</p>
              
              <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-slate-200/80">
                <span className="text-3xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Google Business Profile Optimization (3-Pack)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Practice Area Keyword Strategy (Injury, Criminal, Family)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>On-Page Attorney Bio & Practice Page SEO</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Legal Citation Matrix (Justia, Avvo, FindLaw)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Monthly Local Search & Call Volume Analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-3 bg-white p-2.5 rounded-xl border border-slate-200/70">
                <strong>Best for:</strong> Established firms with a functioning website that need more inbound local retainers.
              </p>
              <button
                onClick={() => onSelectPackage('Legal SEO Starter ($199/mo)')}
                className="w-full py-3 rounded-full font-bold text-slate-800 bg-white hover:bg-slate-100 transition-all text-xs border border-slate-300 active:scale-95 shadow-xs"
              >
                Start With Legal SEO Starter
              </button>
            </div>
          </div>

          {/* Package 2: AI Legal Growth (MOST POPULAR - PROMINENTLY ELEVATED) */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#3E7DBF] shadow-2xl ring-4 ring-[#3E7DBF]/10 flex flex-col justify-between relative lg:-translate-y-2.5 transition-all">
            {/* Prominent Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EA7826] text-white font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>MOST POPULAR CHOICE</span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-[11px] font-bold mb-3 mt-1">
                <Zap className="w-3.5 h-3.5 text-[#EA7826]" />
                <span>Complete AI Intake + SEO Engine</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">AI Legal Growth</h3>
              <p className="text-slate-600 text-xs mt-0.5 mb-5">Turn after-hours and emergency inquiries into signed retainers.</p>
              
              <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-slate-100">
                <span className="text-4xl font-black text-slate-900">$399</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-700 mb-6">
                <li className="flex items-start gap-2.5 font-semibold text-[#3E7DBF]">
                  <Sparkles className="w-4 h-4 text-[#EA7826] flex-shrink-0 mt-0.5" />
                  <span>Everything in SEO Starter + Legal AEO</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 AI Legal Receptionist</strong> for Phone & Web</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Missed-Call Auto-Text Back (Under 5s)</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Automated Attorney Consultation Scheduling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Incident Qualification & Conflict Screening Triage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Practice CRM Integration (Clio, Lawmatics, Filevine, GHL)</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-600 mb-3.5 bg-[#3E7DBF]/5 p-2.5 rounded-xl border border-[#3E7DBF]/20">
                <strong>Best for:</strong> Firms running ads or receiving after-hours calls that cannot afford to lose high-value cases to competitors.
              </p>
              <button
                onClick={() => onSelectPackage('AI Legal Growth ($399/mo)')}
                className="w-full py-3.5 rounded-full font-black text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs uppercase tracking-wider shadow-sji-orange active:scale-95"
              >
                Explore AI Legal Growth
              </button>
            </div>
          </div>

          {/* Package 3: Law Firm Website + Growth */}
          <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all relative">
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#EA7826]/10 text-[#EA7826] text-[11px] font-semibold mb-3">
                Complete Digital Transformation
              </div>
              <h3 className="text-xl font-bold text-slate-900">Law Firm Website + Growth</h3>
              <p className="text-slate-500 text-xs mt-0.5 mb-5">Modernize your firm's brand with high-conversion legal UX.</p>
              
              <div className="flex items-baseline gap-2 mb-5 pb-5 border-b border-slate-200/80">
                <span className="text-3xl font-extrabold text-slate-900">$999</span>
                <span className="text-[#3E7DBF] text-[10px] font-bold uppercase tracking-wider bg-[#3E7DBF]/10 px-2 py-0.5 rounded-full border border-[#3E7DBF]/20">
                  One-Time Payment
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 mb-6">
                <li className="flex items-start gap-2.5 font-semibold text-[#3E7DBF]">
                  <Layout className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Full Custom Law Firm Website Redesign</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Mobile-First Retainer-Focused Architecture</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Settlement Showcases & Attorney Profiles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span><strong>3 Months Free Legal SEO Support</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span><strong>3 Months Legal Social Media Management</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0 mt-0.5" />
                  <span>Full Practice Intake Form Flow & CRM Integration</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-3 bg-white p-2.5 rounded-xl border border-slate-200/70">
                <strong>Best for:</strong> Practices with slow or outdated websites that need a prestigious image and maximum conversion rate.
              </p>
              <button
                onClick={() => onSelectPackage('Law Firm Website + Growth ($999 One-Time)')}
                className="w-full py-3 rounded-full font-bold text-slate-800 bg-white hover:bg-slate-100 transition-all text-xs border border-slate-300 active:scale-95 shadow-xs"
              >
                Redesign Law Firm Website
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
