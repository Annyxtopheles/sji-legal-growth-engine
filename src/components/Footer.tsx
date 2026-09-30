import React from 'react';
import { Download } from 'lucide-react';
import { exportLeadsToCsv, getStoredLeads } from '../utils/leadStorage';

export const Footer: React.FC = () => {
  const leadCount = getStoredLeads().length;

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/sji-logo.png"
            alt="SJ Innovation"
            className="h-7 w-auto object-contain"
          />
          <span className="text-slate-900 font-bold tracking-tight">LEGAL ENGINE</span>
          <span>• Powered by SJ Innovation</span>
        </div>

        <div className="flex items-center gap-4">
          {leadCount > 0 && (
            <button
              onClick={exportLeadsToCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-black transition-colors text-xs font-semibold"
              title="Download captured leads as CSV"
            >
              <Download className="w-3.5 h-3.5 text-[#3E7DBF]" />
              <span>Export Captured Leads ({leadCount})</span>
            </button>
          )}
          <p>© 2026 SJ Innovation LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
