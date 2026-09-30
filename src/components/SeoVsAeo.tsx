import React from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const SeoVsAeo: React.FC = () => {
  return (
    <section id="seo-aeo" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            Modern Search Visibility
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Be Visible Where Clients Search for Legal Help
          </p>
          <p className="mt-3 text-slate-600 text-sm">
            We combine classic local Google search rankings with modern AI answer engine optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: SEO */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#3E7DBF]/10 rounded-xl text-[#3E7DBF] border border-[#3E7DBF]/20">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Traditional Local SEO</h3>
                <p className="text-xs text-slate-500">Google & Google Maps Search</p>
              </div>
            </div>
            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Optimizes your <strong>Google Business Profile</strong> for map pack positioning.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Targets high-intent terms like <em>"car accident lawyer near me"</em> or <em>"defense attorney [city]"</em>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Builds local backlinks and citation consistency across major legal trade directories.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: AEO */}
          <div className="bg-white p-8 rounded-3xl border border-[#EA7826]/30 shadow-sm hover:border-[#EA7826]/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#EA7826]/10 rounded-xl text-[#EA7826] border border-[#EA7826]/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">AI Engine Optimization (AEO)</h3>
                <p className="text-xs text-slate-500">ChatGPT, Perplexity & AI Search</p>
              </div>
            </div>
            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Structures your site content so AI platforms recommend your law firm first.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Formats case FAQs, contingency fee guides, and practice logic for AI indexing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Future-proofs your brand as more prospective clients ask AI assistants for recommendations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
