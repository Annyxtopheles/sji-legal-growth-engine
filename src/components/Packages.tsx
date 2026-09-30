import React from 'react';
import { Check, Sparkles, Layout } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-goldAccent-500 uppercase tracking-widest mb-3">
            Transparent Growth Plans
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white">
            Select Your Restoration Scaling Package
          </p>
          <p className="mt-4 text-slate-400 text-sm">
            No complex tiers. Built specifically to scale independent water, fire & mold restoration businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: SEO Starter */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                Local Ranking Focus
              </div>
              <h3 className="text-2xl font-bold text-white">SEO Starter</h3>
              <p className="text-slate-400 text-xs mt-1 mb-6">Build stronger local search and Google Maps visibility.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                <span className="text-4xl font-extrabold text-white">$199</span>
                <span className="text-slate-400 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Google Business Profile Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Water/Fire/Mold Keyword Targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Website On-Page SEO Fixes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Local Citation Matrix Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Monthly Search Visibility Reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-400 mb-4 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                <strong>Best for:</strong> Restoration firms with a decent website that need more local emergency calls.
              </p>
              <button
                onClick={() => onSelectPackage('SEO Starter ($199/mo)')}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 transition-all text-xs border border-slate-700 active:scale-95"
              >
                Start With SEO Starter
              </button>
            </div>
          </div>

          {/* Package 2: AI Growth (MOST POPULAR) */}
          <div className="glass-panel rounded-3xl p-8 border-2 border-goldAccent-500 flex flex-col justify-between hover:border-goldAccent-400 transition-all relative glow-gold bg-navy-900/90 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-goldAccent-500 text-navy-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/20 text-goldAccent-400 text-xs font-semibold mb-4 mt-2">
                Complete Intake + SEO Engine
              </div>
              <h3 className="text-2xl font-bold text-white">AI Growth</h3>
              <p className="text-slate-300 text-xs mt-1 mb-6">Turn more inquiries into booked emergency dispatches.</p>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                <span className="text-5xl font-black text-white">$399</span>
                <span className="text-slate-400 text-xs">/month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
                <li className="flex items-center gap-3 font-semibold text-goldAccent-400">
                  <Sparkles className="w-4 h-4 text-goldAccent-400 flex-shrink-0" />
                  <span>Everything in SEO Starter + SEO & AEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span><strong>24/7 AI Receptionist</strong> for Calls & Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span><strong>Instant Missed-Call Auto Text Back</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Automated On-Call Tech Scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>SMS & Email Nurture Workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
                  <span>Social Media Management & GHL CRM Setup</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-300 mb-4 bg-navy-950/80 p-2.5 rounded-lg border border-goldAccent-500/20">
                <strong>Best for:</strong> Firms looking to maximize lead volume and eliminate dropped emergency inquiries.
              </p>
              <button
                onClick={() => onSelectPackage('AI Growth ($399/mo)')}
                className="w-full py-4 rounded-xl font-extrabold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all text-xs uppercase tracking-wider shadow-md active:scale-95"
              >
                Explore AI Growth
              </button>
            </div>
          </div>

          {/* Package 3: Website + Growth Launch */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all relative">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-tealAccent-500/10 border border-tealAccent-500/20 text-tealAccent-400 text-xs font-semibold mb-4">
                Complete Transformation
              </div>
              <h3 className="text-2xl font-bold text-white">Website + Growth</h3>
              <p className="text-slate-400 text-xs mt-1 mb-6">Modernize your entire digital footprint & brand.</p>
              
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                <span className="text-4xl font-extrabold text-white">$999</span>
                <span className="text-tealAccent-400 text-xs font-bold uppercase tracking-wider bg-tealAccent-500/10 px-2 py-0.5 rounded border border-tealAccent-500/20">
                  One-Time Payment
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-3 font-semibold text-tealAccent-400">
                  <Layout className="w-4 h-4 text-tealAccent-400 flex-shrink-0" />
                  <span>Full Custom Restoration Web Redesign</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-tealAccent-500 flex-shrink-0" />
                  <span>Mobile-First Dispatch-Focused Layout</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-tealAccent-500 flex-shrink-0" />
                  <span>SEO-Optimized Structure & Fast Loading</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-tealAccent-500 flex-shrink-0" />
                  <span><strong>3 Months Free SEO Support</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-tealAccent-500 flex-shrink-0" />
                  <span><strong>3 Months Social Media Management</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-tealAccent-500 flex-shrink-0" />
                  <span>Full GHL Integration & Lead Form Flow</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-slate-400 mb-4 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                <strong>Best for:</strong> Firms with outdated sites that need a premium image and high conversion setup.
              </p>
              <button
                onClick={() => onSelectPackage('Website + Growth Launch ($999 One-Time)')}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 transition-all text-xs border border-slate-700 active:scale-95"
              >
                Redesign My Website
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
