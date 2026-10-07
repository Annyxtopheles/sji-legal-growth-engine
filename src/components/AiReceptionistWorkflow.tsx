import React from 'react';
import { PhoneIncoming, Bot, ClipboardList, CalendarCheck, MessageSquareCheck, ShieldAlert, Play } from 'lucide-react';

interface AiReceptionistWorkflowProps {
  onOpenDemo: () => void;
}

export const AiReceptionistWorkflow: React.FC<AiReceptionistWorkflowProps> = ({ onOpenDemo }) => {
  return (
    <section id="ai-receptionist" className="py-24 bg-slate-50/70 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-3">
            24/7 Automated Intake
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            What Happens When Your Firm <br className="hidden sm:inline" />
            Misses a Call?
          </h3>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto text-balance">
            Your field crews can't always stop mid-mitigation to answer the phone. Our AI handles emergency intake smoothly.
          </p>
        </div>

        {/* Workflow Process Steps - Exact original layout & clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4 group-hover:bg-[#3E7DBF] group-hover:text-white transition-all duration-300 shadow-xs">
              1
            </div>
            <PhoneIncoming className="w-6 h-6 text-slate-700 mb-2 group-hover:text-[#3E7DBF] group-hover:scale-110 transition-all duration-300" />
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200 mb-1">Panicked Client Calls</h4>
            <p className="text-[11px] text-slate-500">After hours or while team is on job site.</p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center hover:border-[#EA7826] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-full bg-[#EA7826]/10 border border-[#EA7826]/30 text-[#EA7826] font-bold flex items-center justify-center text-sm mb-4 group-hover:bg-[#EA7826] group-hover:text-white transition-all duration-300 shadow-xs">
              2
            </div>
            <Bot className="w-6 h-6 text-[#EA7826] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#EA7826] transition-colors duration-200 mb-1">AI Receptionist Responds</h4>
            <p className="text-[11px] text-slate-500">Answers within 2 rings with branded greeting.</p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4 group-hover:bg-[#3E7DBF] group-hover:text-white transition-all duration-300 shadow-xs">
              3
            </div>
            <ClipboardList className="w-6 h-6 text-slate-700 mb-2 group-hover:text-[#3E7DBF] group-hover:scale-110 transition-all duration-300" />
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200 mb-1">Captures Damage Info</h4>
            <p className="text-[11px] text-slate-500">Logs property address, water/fire type & urgency.</p>
          </div>

          {/* Step 4 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4 group-hover:bg-[#3E7DBF] group-hover:text-white transition-all duration-300 shadow-xs">
              4
            </div>
            <CalendarCheck className="w-6 h-6 text-slate-700 mb-2 group-hover:text-[#3E7DBF] group-hover:scale-110 transition-all duration-300" />
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200 mb-1">Schedules Tech Dispatch</h4>
            <p className="text-[11px] text-slate-500">Logs inspection or alerts on-call technician.</p>
          </div>

          {/* Step 5 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center hover:border-[#3E7DBF] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/30 text-[#3E7DBF] font-bold flex items-center justify-center text-sm mb-4 group-hover:bg-[#3E7DBF] group-hover:text-white transition-all duration-300 shadow-xs">
              5
            </div>
            <MessageSquareCheck className="w-6 h-6 text-slate-700 mb-2 group-hover:text-[#3E7DBF] group-hover:scale-110 transition-all duration-300" />
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3E7DBF] transition-colors duration-200 mb-1">Instant Confirmation</h4>
            <p className="text-[11px] text-slate-500">SMS confirmation sent to customer & crew.</p>
          </div>
        </div>

        {/* Live Simulator Preview CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-xl bg-white border border-[#3E7DBF]/30 text-[#3E7DBF] hover:bg-slate-50 hover:border-[#3E7DBF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-xs font-bold flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Play className="w-4 h-4 fill-current text-[#EA7826]" />
            <span>Test Live AI Dispatch Simulator</span>
          </button>
        </div>

        {/* Disclaimer Banner - Exact original inline icon & alignment */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
          <p className="text-xs text-slate-600 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-[#EA7826] inline mr-1.5 -mt-0.5 align-middle" />
            <strong className="text-slate-900">Important Note:</strong> The AI receptionist is designed for immediate intake, scheduling, and emergency dispatch logging — not technical damage assessments.
          </p>
        </div>
      </div>
    </section>
  );
};
