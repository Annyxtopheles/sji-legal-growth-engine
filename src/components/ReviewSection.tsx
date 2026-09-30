import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import type { LeadFormData } from '../types';
import { submitLead } from '../utils/leadStorage';

interface ReviewSectionProps {
  selectedPackage?: string;
  onLeadSuccess: (message: string) => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ selectedPackage, onLeadSuccess }) => {
  const [formData, setFormData] = useState<Omit<LeadFormData, 'createdAt'>>({
    firstName: '',
    lastName: '',
    companyName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    service: 'Personal Injury Law',
    challenge: 'Not ranking in Google Maps 3-Pack',
    packageInterest: selectedPackage || ''
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageInterest: selectedPackage }));
    }
  }, [selectedPackage]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullLead: LeadFormData = {
      ...formData,
      createdAt: new Date().toISOString()
    };

    const res = await submitLead(fullLead);
    setLoading(false);
    setSubmitted(true);
    onLeadSuccess(res.message);
  };

  return (
    <section id="review-section" className="py-12 relative bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sji-card p-6 sm:p-9 rounded-3xl relative shadow-lg border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-7">
            <span className="text-[11px] uppercase font-bold text-[#EA7826] tracking-widest block mb-1">
              Zero Risk Practice Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Your Free Law Firm Digital & Intake Audit
            </h2>
            <p className="text-slate-600 text-xs mt-1.5">
              Our engineering team will manually audit your firm's Google Maps 3-pack rank, mobile page speed, and after-hours intake responsiveness.
            </p>
            {formData.packageInterest && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-[#EA7826]" />
                <span>Selected Package: {formData.packageInterest}</span>
              </div>
            )}
          </div>

          {submitted ? (
            <div className="p-6 text-center bg-emerald-50/70 rounded-2xl border border-emerald-200 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Audit Request Confirmed!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto mb-4 leading-relaxed">
                Thank you, <strong>{formData.firstName}</strong>. Our legal growth strategist will review <strong>{formData.companyName}</strong>'s local map pack visibility and intake speed. We will deliver your detailed audit report via <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Michael"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Ross, Esq."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Law Firm Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Ross & Associates Injury Law"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL *</label>
                  <input
                    type="text"
                    required
                    value={formData.websiteUrl}
                    onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="www.rossinjurylaw.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Attorney Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="michael@rossinjurylaw.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Direct Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(212) 555-0199"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Practice Area</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  >
                    <option>Personal Injury & Auto Accidents</option>
                    <option>Criminal Defense & DUI</option>
                    <option>Family & Divorce Law</option>
                    <option>Commercial Litigation & Corporate</option>
                    <option>Estate Planning & Probate</option>
                    <option>Immigration Law</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Biggest Challenge Right Now</label>
                  <select
                    value={formData.challenge}
                    onChange={e => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#3E7DBF] focus:bg-white transition-colors"
                  >
                    <option>Not ranking in Google Maps 3-Pack</option>
                    <option>Missing calls after 5 PM and weekends</option>
                    <option>Low consultation-to-retainer conversion</option>
                    <option>Outdated website hurting firm credibility</option>
                    <option>Slow lead follow-up losing cases to competitors</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full font-extrabold text-white bg-[#EA7826] hover:bg-[#d46519] disabled:opacity-50 transition-all text-xs uppercase tracking-wider shadow-sji-orange mt-2 flex items-center justify-center gap-2 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Law Firm Profile...</span>
                  </>
                ) : (
                  <span>Get My Free Law Firm Audit</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
