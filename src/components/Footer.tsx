import React from 'react';
import sjiLogo from '../assets/sji-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src={sjiLogo}
            alt="SJ Innovation"
            className="h-7 w-auto object-contain"
          />
          <span className="text-slate-900 font-bold tracking-tight">RESTORATION ENGINE</span>
          <span>• Powered by SJ Innovation</span>
        </div>

        <div>
          <p>© 2026 SJ Innovation LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
