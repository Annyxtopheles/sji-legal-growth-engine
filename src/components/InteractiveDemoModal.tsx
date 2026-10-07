import React, { useState } from 'react';
import { X, Bot, User, CheckCircle2, Send, RefreshCw } from 'lucide-react';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall?: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  isOpen,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Thank you for calling Apex Restoration 24/7 Emergency Dispatch Line. I'm your AI emergency intake assistant. Are you experiencing active water, fire, mold, or storm damage at your property right now?",
      time: '11:42 PM'
    }
  ]);

  const [input, setInput] = useState('');
  const [ticketLogged, setTicketLogged] = useState(false);

  if (!isOpen) return null;

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let reply = "Thank you for providing those details. I have logged your emergency intake file. Our on-call restoration dispatch team has received your address and contact details via priority SMS and will contact you immediately.";
      if (text.toLowerCase().includes('water') || text.toLowerCase().includes('pipe') || text.toLowerCase().includes('flood') || text.toLowerCase().includes('burst')) {
        reply = "I understand this is urgent. If it is safe to do so, please locate and shut off the main water valve. I have logged your property location and water mitigation urgency. Our on-call certified technician has been dispatched via priority SMS and will call you within 2 minutes.";
      } else if (text.toLowerCase().includes('fire') || text.toLowerCase().includes('smoke') || text.toLowerCase().includes('soot')) {
        reply = "I am so sorry to hear about this. Please ensure all occupants are evacuated and first responders have cleared the structure. I have logged the fire and smoke remediation request. Our emergency board-up and mitigation crew has been alerted immediately.";
      } else if (text.toLowerCase().includes('mold') || text.toLowerCase().includes('mildew')) {
        reply = "Understood. I have logged your mold remediation assessment request. A certified mold inspector will follow up within business hours to schedule an on-site moisture mapping and air quality inspection.";
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setTicketLogged(true);
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'ai',
        text: "Thank you for calling Apex Restoration 24/7 Emergency Dispatch Line. I'm your AI emergency intake assistant. Are you experiencing active water, fire, mold, or storm damage at your property right now?",
        time: '11:42 PM'
      }
    ]);
    setTicketLogged(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-3xl border border-slate-200 relative shadow-2xl animate-fadeIn flex flex-col max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-2xl bg-[#3E7DBF]/10 text-[#3E7DBF] flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>Live AI Emergency Intake & Dispatch Simulator</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </h3>
            <p className="text-[11px] text-slate-500">
              Simulates 24/7 after-hours emergency property damage triage & on-call technician SMS dispatch
            </p>
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 mb-3 min-h-[220px]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-[#3E7DBF] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  AI
                </div>
              )}
              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#EA7826] text-white font-medium rounded-tr-none shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                }`}
              >
                <p>{m.text}</p>
                <span className={`block text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-white/70' : 'text-slate-400'}`}>
                  {m.time}
                </span>
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {ticketLogged && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dispatch #4829 Created (Critical Urgency) — SMS alert dispatched to On-Call Tech in 2.8s!</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <button
            onClick={() => handleSend("I have a major pipe burst in our finished basement with 2 inches of standing water.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Burst pipe in finished basement"
          </button>
          <button
            onClick={() => handleSend("We had an electrical kitchen fire. Fire department put it out but severe smoke and soot damage.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Kitchen fire & smoke damage"
          </button>
          <button
            onClick={() => handleSend("We found widespread black mold behind the bathroom drywall after a leak.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Black mold behind bathroom wall"
          </button>
        </div>

        {/* Input bar */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type homeowner message or emergency request..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-[#3E7DBF] hover:bg-[#32669e] text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 transition-colors"
            title="Reset Simulator"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <p className="text-[11px] text-slate-500">
            Want this custom AI dispatch engine for your restoration company?
          </p>
          <a
            href="mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20Restoration%20AI%20Dispatch%20Engine&body=Hi%20Siddiqur,%0D%0A%0D%0AI%20tested%20the%20AI%20dispatch%20demo%20and%20would%20like%20to%20learn%20more%20about%20implementing%20this%20for%20our%20restoration%20company.%0D%0A%0D%0ACompany%20Name:%20%0D%0AWebsite:%20%0D%0APhone:%20"
            className="text-xs text-[#EA7826] font-bold hover:underline inline-flex items-center gap-1"
          >
            Get AI Dispatch Engine →
          </a>
        </div>
      </div>
    </div>
  );
};
