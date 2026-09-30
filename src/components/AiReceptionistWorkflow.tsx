import React from 'react';
import { PhoneIncoming, Bot, ClipboardList, CalendarCheck, MessageSquareCheck, ShieldAlert, Play } from 'lucide-react';

interface AiReceptionistWorkflowProps {
  onOpenDemo: () => void;
}

export const AiReceptionistWorkflow: React.FC<AiReceptionistWorkflowProps> = ({ onOpenDemo }) => {
  const steps = [
    {
      num: 1,
      icon: PhoneIncoming,
      title: "Client Inquires",
      desc: "Urgent evening car crash, arrest, or custody emergency."
    },
    {
      num: 2,
      icon: Bot,
      title: "AI Receptionist Answers",
      desc: "Answers within 2 rings with your firm's professional greeting."
    },
    {
      num: 3,
      icon: ClipboardList,
      title: "Captures Case Details",
      desc: "Logs incident date, injury severity, parties & conflict check."
    },
    {
      num: 4,
      icon: CalendarCheck,
      title: "Schedules Consultation",
      desc: "Direct calendar booking or SMS dispatch to on-call attorney."
    },
    {
      num: 5,
      icon: MessageSquareCheck,
      title: "Instant Confirmation",
      desc: "Client receives intake confirmation before calling another firm."
    }
  ];

  return (
    <section id="ai-receptionist" className="py-12 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-[#EA7826] uppercase tracking-widest mb-1.5">
            24/7 Automated Intake & Case Qualification
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Happens When Your Law Firm Misses a Call?
          </p>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            Attorneys cannot stop mid-trial or mid-deposition to answer inbound inquiries. Our AI handles empathetic, compliant client triage around the clock.
          </p>
        </div>

        {/* Workflow Process Steps - Consistent, clean, no stuck cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 relative">
          {steps.map(s => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="sji-card p-4 sm:p-5 rounded-2xl relative text-center flex flex-col items-center hover:border-[#3E7DBF] hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#3E7DBF]/10 text-[#3E7DBF] font-bold flex items-center justify-center text-xs mb-3 group-hover:bg-[#3E7DBF] group-hover:text-white transition-colors">
                  {s.num}
                </div>
                <Icon className="w-5 h-5 text-slate-700 mb-2 group-hover:text-[#EA7826] transition-colors" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Live Simulator Preview CTA */}
        <div className="mt-7 flex justify-center">
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-full bg-[#3E7DBF]/10 border border-[#3E7DBF]/25 text-[#3E7DBF] hover:bg-[#3E7DBF]/20 transition-all text-xs font-bold flex items-center gap-2 shadow-xs active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#EA7826]" />
            <span>Test Live AI Legal Intake Simulator</span>
          </button>
        </div>

        {/* Professional Ethics Compliance Banner - Perfectly Aligned */}
        <div className="mt-6 max-w-2xl mx-auto p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#EA7826] flex-shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Professional Ethics Compliance:</strong> The AI receptionist is strictly engineered for intake triage, factual intake gathering, and consultation scheduling — it does not provide formal legal advice or establish an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
