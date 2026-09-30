import React, { useState } from 'react';
import { X, Bot, User, CheckCircle2, Send, RefreshCw } from 'lucide-react';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  isOpen,
  onClose,
  onBookCall
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Thanks for calling Rapid Dry Restoration 24/7 Emergency Line. I'm your AI dispatcher. Are you currently in a safe location away from standing water?",
      time: '12:04 AM'
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
      let reply = "Understood. I have logged your address and property damage report. Our on-call certified water mitigation crew has received the dispatch alert via SMS. An on-call supervisor will call you in 3 minutes.";
      if (text.toLowerCase().includes('mold') || text.toLowerCase().includes('smell')) {
        reply = "I've flagged this for an emergency environmental inspection. Is the affected area contained from children and pets?";
      } else if (text.toLowerCase().includes('fire') || text.toLowerCase().includes('smoke')) {
        reply = "First, please confirm the fire department has fully cleared the structure for re-entry. Our emergency board-up and soot mitigation crew is on standby.";
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
        text: "Thanks for calling Rapid Dry Restoration 24/7 Emergency Line. I'm your AI dispatcher. Are you currently in a safe location away from standing water?",
        time: '12:04 AM'
      }
    ]);
    setTicketLogged(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-xl p-6 rounded-3xl border border-tealAccent-500/40 relative shadow-2xl animate-fadeIn flex flex-col max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-tealAccent-500/10 border border-tealAccent-500/30 flex items-center justify-center text-tealAccent-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Live AI Intake & Dispatcher Simulator</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </h3>
            <p className="text-[11px] text-slate-400">Simulates 24/7 emergency caller triage & on-call technician SMS alerts</p>
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-navy-950/90 rounded-2xl border border-slate-800/80 mb-3 min-h-[220px]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-tealAccent-500/20 text-tealAccent-400 flex items-center justify-center flex-shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-goldAccent-500 text-navy-950 font-semibold rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <p>{m.text}</p>
                <span className={`block text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-navy-950/60' : 'text-slate-500'}`}>
                  {m.time}
                </span>
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-goldAccent-500/20 text-goldAccent-400 flex items-center justify-center flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {ticketLogged && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dispatch Ticket #8491 Created & Dispatched to Tech Crew (SMS in 3.4s)</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <button
            onClick={() => handleSend("Yes, I'm upstairs. My water heater burst and water is flooding the basement floor!")}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-[11px] transition-colors"
          >
            "Water heater burst in basement"
          </button>
          <button
            onClick={() => handleSend("We had a kitchen fire earlier. Smoke damage is throughout the main floor.")}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-[11px] transition-colors"
          >
            "Kitchen fire & heavy smoke"
          </button>
          <button
            onClick={() => handleSend("Found black mold behind drywall in our master bathroom.")}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-[11px] transition-colors"
          >
            "Mold behind drywall"
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
            placeholder="Type emergency response or question..."
            className="flex-1 bg-navy-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-tealAccent-500"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-tealAccent-500 hover:bg-tealAccent-400 text-navy-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Reset Simulator"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            Want this custom AI phone & web intake for your business?
          </p>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="text-xs text-goldAccent-400 font-bold hover:underline"
          >
            Schedule 15-Min Setup Call →
          </button>
        </div>
      </div>
    </div>
  );
};
