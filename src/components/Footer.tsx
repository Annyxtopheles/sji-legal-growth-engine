import React from 'react';
import { Mail } from 'lucide-react';
import sjiLogo from '../assets/sji-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src={sjiLogo}
            alt="SJ Innovation"
            className="h-7 w-auto object-contain"
          />
          <span className="text-slate-900 font-bold tracking-tight">LEGAL ENGINE</span>
          <span>• Powered by SJ Innovation</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#EA7826]" />
          <span>Direct Inquiries:</span>
          <a
            href="mailto:siddiqur.rahman@sjinnovation.com"
            className="text-slate-900 font-semibold hover:text-[#3E7DBF] transition-colors underline decoration-slate-300 underline-offset-4"
          >
            siddiqur.rahman@sjinnovation.com
          </a>
        </div>

        <div>
          <p>© 2026 SJ Innovation LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
