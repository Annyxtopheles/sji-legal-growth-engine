import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import type { ToastState } from '../types';

interface NotificationToastProps {
  toast: ToastState;
  onDismiss: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show, onDismiss]);

  if (!toast.show) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-[#3E7DBF]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-2xl font-bold text-xs flex items-center gap-3 transition-all duration-300 animate-slideUp bg-white border border-slate-200 text-slate-800"
      role="alert"
    >
      {getIcon()}
      <span className="leading-tight">{toast.message}</span>
      <button
        onClick={onDismiss}
        className="ml-2 p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-700"
        aria-label="Dismiss message"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
