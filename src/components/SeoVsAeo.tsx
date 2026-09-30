import React from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const SeoVsAeo: React.FC = () => {
  return (
    <section id="seo-aeo" className="py-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1.5">
            Modern Legal Search Visibility
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Be Visible Where Clients Search for Legal Representation
          </p>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            We combine high-intent Google Maps 3-Pack rankings with cutting-edge AI Answer Engine Optimization (AEO).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Column 1: SEO */}
          <div className="sji-card p-6 sm:p-7 rounded-3xl hover:border-[#3E7DBF]/50 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-[#3E7DBF]/10 rounded-2xl text-[#3E7DBF]">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Traditional Legal SEO</h3>
                <p className="text-[11px] text-slate-500">Google Search & Local Maps 3-Pack</p>
              </div>
            </div>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Optimizes your <strong>Google Business Profile</strong> to dominate local 3-pack map positioning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Targets competitive high-value queries like <em>"car accident lawyer near me"</em> or <em>"defense attorney [city]"</em>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E7DBF] mt-0.5 flex-shrink-0" />
                <span>Builds authoritative legal citations across Justia, Avvo, FindLaw, and state bar directories.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: AEO */}
          <div className="sji-card p-6 sm:p-7 rounded-3xl border-2 border-[#EA7826]/30 hover:border-[#EA7826] transition-all bg-gradient-to-br from-white to-[#EA7826]/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-[#EA7826]/10 rounded-2xl text-[#EA7826]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Legal AI Engine Optimization (AEO)</h3>
                <p className="text-[11px] text-slate-500">ChatGPT, Perplexity & Google AI Overviews</p>
              </div>
            </div>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Structures attorney bios, past verdicts, and settlement data so AI search engines cite your firm first.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Formats practice area FAQs, contingency fee disclosures, and jurisdictional schema for LLM indexing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA7826] mt-0.5 flex-shrink-0" />
                <span>Future-proofs your firm as prospective clients increasingly ask AI assistants: <em>"Who is the best injury attorney in [city]?"</em></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
