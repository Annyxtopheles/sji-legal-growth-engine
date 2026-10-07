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
      text: "Thank you for calling Sterling & Morgan Legal 24/7 Intake Line. I'm your AI intake assistant. Are you or a family member currently in need of urgent legal representation?",
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
      let reply = "Thank you for providing those details. I have logged your incident report and confirmed there is no immediate conflict of interest. Our on-call senior partner has received the case file via priority SMS and will call your number within 3 minutes.";
      if (text.toLowerCase().includes('car') || text.toLowerCase().includes('crash') || text.toLowerCase().includes('accident') || text.toLowerCase().includes('injury')) {
        reply = "I am so sorry this happened. First, please ensure you have received all necessary emergency medical treatment. I have logged the collision location and vehicle data. Our on-call personal injury partner has been alerted and will contact you immediately.";
      } else if (text.toLowerCase().includes('arrest') || text.toLowerCase().includes('police') || text.toLowerCase().includes('jail') || text.toLowerCase().includes('dui')) {
        reply = "Understood. Please remember that you have the right to remain silent until your counsel is present. I am dispatching an urgent alert to our criminal defense partner right now.";
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
        text: "Thank you for calling Sterling & Morgan Legal 24/7 Intake Line. I'm your AI intake assistant. Are you or a family member currently in need of urgent legal representation?",
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
              <span>Live AI Legal Intake & Triage Simulator</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </h3>
            <p className="text-[11px] text-slate-500">
              Simulates 24/7 after-hours emergency caller triage & on-call attorney SMS notifications
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
                <span>Matter #9034 Qualified (High Urgency) — SMS alert dispatched to Partner in 3.1s!</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <button
            onClick={() => handleSend("I was in a major multi-vehicle accident on the highway. Other driver ran a red light.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Car accident on highway"
          </button>
          <button
            onClick={() => handleSend("My brother was just arrested and is being booked at the downtown precinct.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Urgent arrest downtown"
          </button>
          <button
            onClick={() => handleSend("We received an emergency court injunction regarding our business assets.")}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium transition-colors shadow-sm"
          >
            "Emergency commercial injunction"
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
            placeholder="Type prospective client response or legal inquiry..."
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
            Want this custom AI intake engine for your firm?
          </p>
          <a
            href="mailto:siddiqur.rahman@sjinnovation.com?subject=Inquiry:%20AI%20Legal%20Intake%20Engine&body=Hi%20Siddiqur,%0D%0A%0D%0AI%20tested%20the%20AI%20intake%20demo%20and%20would%20like%20to%20learn%20more%20about%20implementing%20this%20for%20our%20law%20firm.%0D%0A%0D%0ALaw%20Firm%20Name:%20%0D%0AWebsite:%20%0D%0APhone:%20"
            className="text-xs text-[#EA7826] font-bold hover:underline inline-flex items-center gap-1"
          >
            Inquire via Email →
          </a>
        </div>
      </div>
    </div>
  );
};
