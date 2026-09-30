import React, { useState, useEffect } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import type { LeadFormData } from '../types';
import { submitLead } from '../utils/leadStorage';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
  onSuccess: (message: string) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  onSuccess
}) => {
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageInterest: selectedPackage }));
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullLead: LeadFormData = {
      ...formData,
      createdAt: new Date().toISOString()
    };

    const res = await submitLead(fullLead);
    setLoading(false);
    onClose();
    onSuccess(res.message);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 relative shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Request Free Law Firm Audit
        </h3>
        <p className="text-slate-500 text-xs mb-4">
          Enter your practice details and our legal engineering team will review your local map pack rank, speed, and intake response.
        </p>

        {formData.packageInterest && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#EA7826]" />
            <span>Interested in: {formData.packageInterest}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="First Name *"
              value={formData.firstName}
              onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
            />
            <input
              type="text"
              required
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
            />
          </div>

          <input
            type="text"
            required
            placeholder="Law Firm Name *"
            value={formData.companyName}
            onChange={e => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
          />

          <input
            type="text"
            placeholder="Website URL (e.g. www.lawfirm.com)"
            value={formData.websiteUrl}
            onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="email"
              required
              placeholder="Attorney Email *"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
            />
            <input
              type="tel"
              required
              placeholder="Direct Phone Number *"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full font-bold text-white bg-[#EA7826] hover:bg-[#d46519] disabled:opacity-50 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-sji-orange"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Audit Request...</span>
              </>
            ) : (
              <span>Submit Free Audit Request</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
