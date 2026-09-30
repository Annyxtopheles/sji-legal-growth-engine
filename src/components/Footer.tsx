import React from 'react';
import { Flame, Download } from 'lucide-react';
import { exportLeadsToCsv, getStoredLeads } from '../utils/leadStorage';

export const Footer: React.FC = () => {
  const leadCount = getStoredLeads().length;

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-goldAccent-500" />
          <span className="text-white font-bold">RESTORATION ENGINE</span>
          <span>• Powered by SJ Innovation</span>
        </div>

        <div className="flex items-center gap-4">
          {leadCount > 0 && (
            <button
              onClick={exportLeadsToCsv}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors text-[11px]"
              title="Download captured leads as CSV"
            >
              <Download className="w-3 h-3 text-goldAccent-500" />
              <span>Export Captured Leads ({leadCount})</span>
            </button>
          )}
          <p>© 2026 SJ Innovation LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
