import React from 'react';
import { PhoneIncoming, Bot, ClipboardList, CalendarCheck, MessageSquareCheck, ShieldAlert, Play } from 'lucide-react';

interface AiReceptionistWorkflowProps {
  onOpenDemo: () => void;
}

export const AiReceptionistWorkflow: React.FC<AiReceptionistWorkflowProps> = ({ onOpenDemo }) => {
  return (
    <section id="ai-receptionist" className="py-24 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            24/7 Automated Intake & Case Qualification
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Happens When Your Law Firm Misses a Call?
          </p>
          <p className="mt-3 text-slate-600 text-sm">
            Attorneys cannot stop mid-trial or mid-deposition to answer inbound inquiries. Our AI handles empathetic, compliant client triage around the clock.
          </p>
        </div>

        {/* Workflow Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="sji-card p-6 rounded-2xl relative text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4">
              1
            </div>
            <PhoneIncoming className="w-6 h-6 text-slate-700 mb-2" />
            <h4 className="text-sm font-bold text-slate-900 mb-1">Client Inquires</h4>
            <p className="text-[11px] text-slate-500">Urgent evening car crash, arrest, or custody emergency.</p>
          </div>

          {/* Step 2 */}
          <div className="sji-card p-6 rounded-2xl border-2 border-[#3E7DBF] relative text-center flex flex-col items-center shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF] text-white font-bold flex items-center justify-center text-sm mb-4">
              2
            </div>
            <Bot className="w-6 h-6 text-[#EA7826] mb-2" />
            <h4 className="text-sm font-bold text-slate-900 mb-1">AI Receptionist Answers</h4>
            <p className="text-[11px] text-slate-500">Answers within 2 rings with your firm's professional greeting.</p>
          </div>

          {/* Step 3 */}
          <div className="sji-card p-6 rounded-2xl relative text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4">
              3
            </div>
            <ClipboardList className="w-6 h-6 text-slate-700 mb-2" />
            <h4 className="text-sm font-bold text-slate-900 mb-1">Captures Case Details</h4>
            <p className="text-[11px] text-slate-500">Logs incident date, injury severity, parties & conflict check.</p>
          </div>

          {/* Step 4 */}
          <div className="sji-card p-6 rounded-2xl relative text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4">
              4
            </div>
            <CalendarCheck className="w-6 h-6 text-slate-700 mb-2" />
            <h4 className="text-sm font-bold text-slate-900 mb-1">Schedules Consultation</h4>
            <p className="text-[11px] text-slate-500">Direct calendar booking or SMS dispatch to on-call attorney.</p>
          </div>

          {/* Step 5 */}
          <div className="sji-card p-6 rounded-2xl relative text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4">
              5
            </div>
            <MessageSquareCheck className="w-6 h-6 text-slate-700 mb-2" />
            <h4 className="text-sm font-bold text-slate-900 mb-1">Instant Confirmation</h4>
            <p className="text-[11px] text-slate-500">Client receives intake confirmation before calling another firm.</p>
          </div>
        </div>

        {/* Live Simulator Preview CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] hover:bg-[#3E7DBF]/20 transition-all text-xs font-bold flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Play className="w-4 h-4 fill-current text-[#EA7826]" />
            <span>Test Live AI Legal Intake Simulator</span>
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#EA7826] flex-shrink-0" />
            <span>
              <strong>Professional Ethics Compliance:</strong> The AI receptionist is designed for prompt intake triage, factual intake gathering, and consultation scheduling — not providing formal legal advice.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
