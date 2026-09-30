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
    service: 'Water Damage Mitigation',
    challenge: 'Not ranking on Google Maps',
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
    <section id="review-section" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-goldAccent-500/40 relative shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold text-goldAccent-500 tracking-widest block mb-2">
              Zero Risk Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-white">Get Your Free Restoration Digital Review</h2>
            <p className="text-slate-300 text-xs mt-2">
              Our team will manually review your website, Google Maps ranking, and intake speed. No sales pressure.
            </p>
            {formData.packageInterest && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Interest: {formData.packageInterest}</span>
              </div>
            )}
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-navy-950/80 rounded-2xl border border-emerald-500/30 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Review Request Confirmed!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.firstName}</strong>. Our senior restoration strategist will audit <strong>{formData.companyName}</strong>'s local map pack position and emergency responsiveness. We will deliver your free audit report via {formData.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Restoration Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Rapid Dry Restoration"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Website URL *</label>
                  <input
                    type="text"
                    required
                    value={formData.websiteUrl}
                    onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="www.rapiddry.com"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@rapiddry.com"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Services Offered</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  >
                    <option>Water Damage Mitigation</option>
                    <option>Fire & Smoke Restoration</option>
                    <option>Mold Remediation</option>
                    <option>Storm Cleanup</option>
                    <option>Full Reconstruction Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Biggest Challenge Right Now</label>
                  <select
                    value={formData.challenge}
                    onChange={e => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-goldAccent-500 transition-colors"
                  >
                    <option>Not getting enough calls</option>
                    <option>Not ranking on Google Maps</option>
                    <option>Missing calls after hours</option>
                    <option>Outdated website</option>
                    <option>Slow lead follow-up</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-extrabold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 disabled:opacity-50 transition-all text-sm uppercase tracking-wider shadow-lg glow-gold mt-2 flex items-center justify-center gap-2 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Review Request...</span>
                  </>
                ) : (
                  <span>Get My Free Review</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
