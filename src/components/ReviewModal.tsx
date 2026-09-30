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
    service: 'Water Damage Mitigation',
    challenge: 'Not getting enough calls',
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
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-700 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-1">Request Free Digital Review</h3>
        <p className="text-slate-400 text-xs mb-4">
          Enter your company details and our team will analyze your restoration site and Google Maps ranking.
        </p>

        {formData.packageInterest && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
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
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
            />
            <input
              type="text"
              required
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
            />
          </div>

          <input
            type="text"
            required
            placeholder="Restoration Company Name *"
            value={formData.companyName}
            onChange={e => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
          />

          <input
            type="text"
            placeholder="Website URL (e.g. www.myrestoration.com)"
            value={formData.websiteUrl}
            onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
            className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 disabled:opacity-50 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-md"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Audit Request...</span>
              </>
            ) : (
              <span>Submit Review Request</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
