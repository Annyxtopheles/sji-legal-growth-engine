import React from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const SeoVsAeo: React.FC = () => {
  return (
    <section id="seo-aeo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-goldAccent-500 uppercase tracking-widest mb-3">
            Modern Search Visibility
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Be Visible Where Homeowners Search for Emergency Help
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            We combine classic local Google search rankings with modern AI answer engine optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: SEO */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-goldAccent-500/10 rounded-xl text-goldAccent-500 border border-goldAccent-500/20">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Traditional Local SEO</h3>
                <p className="text-xs text-slate-400">Google & Google Maps Search</p>
              </div>
            </div>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-goldAccent-500 mt-0.5 flex-shrink-0" />
                <span>Optimizes your <strong>Google Business Profile</strong> for map pack positioning.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-goldAccent-500 mt-0.5 flex-shrink-0" />
                <span>Targets high-intent terms like <em>"water mitigation near me"</em> or <em>"mold inspection [city]"</em>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-goldAccent-500 mt-0.5 flex-shrink-0" />
                <span>Builds local backlinks and citation consistency across major trade directories.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: AEO */}
          <div className="glass-panel p-8 rounded-3xl border border-tealAccent-500/30 hover:border-tealAccent-500/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-tealAccent-500/10 rounded-xl text-tealAccent-400 border border-tealAccent-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Engine Optimization (AEO)</h3>
                <p className="text-xs text-slate-400">ChatGPT, Perplexity & AI Search</p>
              </div>
            </div>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 mt-0.5 flex-shrink-0" />
                <span>Structures your site content so AI platforms recommend your business first.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 mt-0.5 flex-shrink-0" />
                <span>Formats emergency FAQs, insurance process guides, and pricing logic for AI indexing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-tealAccent-400 mt-0.5 flex-shrink-0" />
                <span>Future-proofs your brand as more property owners ask AI assistants for recommendations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
