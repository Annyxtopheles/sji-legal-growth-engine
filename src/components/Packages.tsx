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
            Transparent Scaling Plans
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Select Your Law Firm Growth Package
          </p>
          <p className="mt-4 text-slate-600 text-sm">
            No convoluted retainers or hidden agency markups. Built specifically to scale independent personal injury, litigation, defense, and growing law practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: Legal SEO Starter */}
          <div className="sji-card rounded-3xl p-8 flex flex-col justify-between hover:border-[#3E7DBF]/50 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
                Local Legal 3-Pack Focus
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Legal SEO Starter</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Dominate Google Maps and local search for high-value cases.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Google Business Profile Optimization (Legal 3-Pack)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Practice Area Keyword Strategy (Injury, Criminal, Family)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>On-Page Attorney Bio & Practice Page SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Legal Citation Matrix (Justia, Avvo, FindLaw, Super Lawyers)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Monthly Local Search & Call Volume Analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <strong>Best for:</strong> Established law firms with a functioning website that need to capture more inbound local retainers.
              </p>
              <button
                onClick={() => onSelectPackage('Legal SEO Starter ($199/mo)')}
                className="w-full py-3.5 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all text-xs border border-slate-200 active:scale-95"
              >
                Start With Legal SEO Starter
              </button>
            </div>
          </div>

          {/* Package 2: AI Legal Growth (MOST POPULAR) */}
          <div className="sji-card rounded-3xl p-8 border-2 border-[#3E7DBF] flex flex-col justify-between hover:shadow-sji-hover transition-all relative shadow-lg bg-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA7826] text-white font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-xs font-semibold mb-4 mt-2">
                Complete AI Intake + SEO Engine
              </div>
              <h3 className="text-2xl font-bold text-slate-900">AI Legal Growth</h3>
              <p className="text-slate-600 text-xs mt-1 mb-6">Turn after-hours and emergency inquiries into signed retainers.</p>
              
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
                  <span><strong>24/7 AI Legal Receptionist</strong> for Phone & Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>Instant Missed-Call Auto-Text Back (Under 5s)</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Automated Attorney Consultation Scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Incident Qualification & Conflict Screening Triage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Practice CRM Integration (Clio, Lawmatics, Filevine, GHL)</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-600 mb-4 bg-[#3E7DBF]/5 p-3 rounded-xl border border-[#3E7DBF]/20">
                <strong>Best for:</strong> Firms running ads or receiving after-hours calls that cannot afford to lose high-value cases to competitors.
              </p>
              <button
                onClick={() => onSelectPackage('AI Legal Growth ($399/mo)')}
                className="w-full py-4 rounded-full font-extrabold text-white bg-[#EA7826] hover:bg-[#d46519] transition-all text-xs uppercase tracking-wider shadow-sji-orange active:scale-95"
              >
                Explore AI Legal Growth
              </button>
            </div>
          </div>

          {/* Package 3: Law Firm Website + Growth */}
          <div className="sji-card rounded-3xl p-8 flex flex-col justify-between hover:border-[#3E7DBF]/50 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#EA7826]/10 text-[#EA7826] text-xs font-semibold mb-4">
                Complete Digital Transformation
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Law Firm Website + Growth</h3>
              <p className="text-slate-500 text-xs mt-1 mb-6">Modernize your firm's brand with high-conversion legal UX.</p>
              
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">$999</span>
                <span className="text-[#3E7DBF] text-xs font-bold uppercase tracking-wider bg-[#3E7DBF]/10 px-2.5 py-0.5 rounded-full border border-[#3E7DBF]/20">
                  One-Time Payment
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-3 font-semibold text-[#3E7DBF]">
                  <Layout className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full Custom Law Firm Website Redesign</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Mobile-First Retainer-Focused Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Settlement Showcases, Attorney Profiles & Trust Badges</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Free Legal SEO Support</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span><strong>3 Months Legal Social Media & Thought Leadership</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#3E7DBF] flex-shrink-0" />
                  <span>Full Practice Intake Form Flow & CRM Integration</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <strong>Best for:</strong> Law practices with slow or outdated websites that need a prestigious image and maximum conversion rate.
              </p>
              <button
                onClick={() => onSelectPackage('Law Firm Website + Growth ($999 One-Time)')}
                className="w-full py-3.5 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all text-xs border border-slate-200 active:scale-95"
              >
                Redesign Our Law Firm Website
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
