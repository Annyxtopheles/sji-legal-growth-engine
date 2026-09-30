import React from 'react';
import { PhoneIncoming, Bot, ClipboardList, CalendarCheck, MessageSquareCheck, ShieldAlert, Play } from 'lucide-react';

interface AiReceptionistWorkflowProps {
  onOpenDemo: () => void;
}

export const AiReceptionistWorkflow: React.FC<AiReceptionistWorkflowProps> = ({ onOpenDemo }) => {
  return (
    <section id="ai-receptionist" className="py-24 bg-navy-900/50 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-goldAccent-500 uppercase tracking-widest mb-3">
            24/7 Automated Intake
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            What Happens When Your Firm Misses a Call?
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            Your field crews can't always stop mid-mitigation to answer the phone. Our AI handles emergency intake smoothly.
          </p>
        </div>

        {/* Workflow Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 relative text-center flex flex-col items-center hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 font-bold flex items-center justify-center text-sm mb-4">
              1
            </div>
            <PhoneIncoming className="w-6 h-6 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Panicked Client Calls</h4>
            <p className="text-[11px] text-slate-400">After hours or while team is on job site.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-goldAccent-500/40 relative text-center flex flex-col items-center glow-gold">
            <div className="w-10 h-10 rounded-full bg-goldAccent-500 text-navy-950 font-bold flex items-center justify-center text-sm mb-4">
              2
            </div>
            <Bot className="w-6 h-6 text-goldAccent-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">AI Receptionist Responds</h4>
            <p className="text-[11px] text-slate-400">Answers within 2 rings with branded greeting.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 relative text-center flex flex-col items-center hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 font-bold flex items-center justify-center text-sm mb-4">
              3
            </div>
            <ClipboardList className="w-6 h-6 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Captures Damage Info</h4>
            <p className="text-[11px] text-slate-400">Logs property address, water/fire type & urgency.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 relative text-center flex flex-col items-center hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 font-bold flex items-center justify-center text-sm mb-4">
              4
            </div>
            <CalendarCheck className="w-6 h-6 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Schedules Tech Dispatch</h4>
            <p className="text-[11px] text-slate-400">Logs inspection or alerts on-call technician.</p>
          </div>

          {/* Step 5 */}
          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 relative text-center flex flex-col items-center hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-full bg-goldAccent-500/10 border border-goldAccent-500/30 text-goldAccent-400 font-bold flex items-center justify-center text-sm mb-4">
              5
            </div>
            <MessageSquareCheck className="w-6 h-6 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Instant Confirmation</h4>
            <p className="text-[11px] text-slate-400">SMS confirmation sent to customer & crew.</p>
          </div>
        </div>

        {/* Live Simulator Preview CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-xl bg-tealAccent-500/10 border border-tealAccent-500/30 text-tealAccent-400 hover:bg-tealAccent-500/20 transition-all text-xs font-bold flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Test Live AI Intake Simulator</span>
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-goldAccent-500 flex-shrink-0" />
            <span>
              <strong>Important Note:</strong> The AI receptionist is designed for immediate intake, scheduling, and emergency dispatch logging — not technical damage assessments.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
