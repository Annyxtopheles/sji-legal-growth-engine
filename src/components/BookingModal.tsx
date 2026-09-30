import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, Download, Loader2 } from 'lucide-react';
import type { BookingFormData } from '../types';
import { submitBooking } from '../utils/leadStorage';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  // Generate next 10 business days (Mon-Fri)
  const getAvailableDates = () => {
    const dates = [];
    let cur = new Date();
    while (dates.length < 10) {
      cur = new Date(cur.getTime() + 24 * 60 * 60 * 1000);
      const day = cur.getDay();
      if (day !== 0 && day !== 6) { // Skip Sunday (0) and Saturday (6)
        dates.push({
          raw: cur.toISOString().slice(0, 10),
          weekday: cur.toLocaleDateString('en-US', { weekday: 'short' }),
          monthDay: cur.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const timeSlots = [
    '09:00 AM EST',
    '10:30 AM EST',
    '11:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST'
  ];

  const [step, setStep] = useState<'pick' | 'details' | 'confirmed'>('pick');
  const [selectedDate, setSelectedDate] = useState(availableDates[0]?.raw || '');
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const booking: BookingFormData = {
      ...formData,
      date: selectedDate,
      timeSlot: selectedTime,
      timezone: 'America/New_York (EST)',
      createdAt: new Date().toISOString()
    };

    const res = await submitBooking(booking);
    setLoading(false);
    setStep('confirmed');
    onSuccess(res.message);
  };

  const handleClose = () => {
    setStep('pick');
    onClose();
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent("15-Min Restoration Growth Strategy Call | SJ Innovation");
    const details = encodeURIComponent(`Restoration growth consultation with ${formData.fullName} (${formData.companyName}).\nDiscussing SEO, AEO, and 24/7 AI Receptionist Intake.`);
    const location = encodeURIComponent("Google Meet (link will be sent to email)");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SJ Innovation//Restoration Growth Engine//EN',
      'BEGIN:VEVENT',
      `SUMMARY:15-Min Restoration Growth Strategy Call`,
      `DESCRIPTION:Restoration growth consultation with ${formData.fullName} (${formData.companyName})`,
      `LOCATION:Google Meet`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'restoration-strategy-call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-700 relative animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'pick' && (
          <div>
            <div className="w-12 h-12 bg-goldAccent-500/10 rounded-2xl border border-goldAccent-500/30 flex items-center justify-center text-goldAccent-500 mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-1">
              Book a 15-Minute Strategy Call
            </h3>
            <p className="text-slate-400 text-xs text-center mb-6">
              Select your preferred day and time for a 1-on-1 restoration growth session.
            </p>

            {/* Date selection grid */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-goldAccent-500" />
                <span>1. Select Date (Next 2 Weeks)</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {availableDates.map(d => {
                  const isSelected = selectedDate === d.raw;
                  return (
                    <button
                      key={d.raw}
                      type="button"
                      onClick={() => setSelectedDate(d.raw)}
                      className={`p-2 rounded-xl text-center border transition-all text-xs ${
                        isSelected
                          ? 'bg-goldAccent-500 text-navy-950 border-goldAccent-400 font-bold shadow-md'
                          : 'bg-navy-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-[10px] uppercase opacity-80">{d.weekday}</div>
                      <div className="font-semibold text-xs mt-0.5">{d.monthDay}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-goldAccent-500" />
                <span>2. Select Time (Eastern Standard Time)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map(t => {
                  const isSelected = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-3 rounded-xl text-center border transition-all text-xs font-medium ${
                        isSelected
                          ? 'bg-tealAccent-500 text-navy-950 border-tealAccent-400 font-bold shadow-md'
                          : 'bg-navy-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setStep('details')}
              className="w-full py-3.5 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 shadow-md"
            >
              <span>Continue to Contact Info</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 'details' && (
          <form onSubmit={handleConfirmBooking}>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <button
                type="button"
                onClick={() => setStep('pick')}
                className="text-xs text-goldAccent-400 hover:underline font-semibold"
              >
                ← Change Date/Time
              </button>
              <span className="text-xs text-slate-300 font-bold bg-navy-950 px-2.5 py-1 rounded-lg border border-slate-800">
                {selectedDate} at {selectedTime}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Enter Your Details</h3>
            <p className="text-slate-400 text-xs mb-4">
              Where should we send the calendar invitation and meeting link?
            </p>

            <div className="space-y-3">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
              />

              <input
                type="text"
                required
                placeholder="Restoration Company Name *"
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Direct Phone Number *"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500"
                />
              </div>

              <textarea
                placeholder="Specific goals or questions (e.g. want to test the AI dispatcher, or need local SEO help in Dallas)"
                rows={2}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-goldAccent-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-navy-950 bg-goldAccent-500 hover:bg-goldAccent-400 disabled:opacity-50 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Reserving Time Slot...</span>
                </>
              ) : (
                <span>Confirm Calendar Booking</span>
              )}
            </button>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Strategy Call Confirmed!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
              We look forward to speaking with you, <strong>{formData.fullName}</strong>.
            </p>

            <div className="bg-navy-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Date:</span>
                <span className="text-white font-semibold">{selectedDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Time:</span>
                <span className="text-white font-semibold">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Company:</span>
                <span className="text-white font-semibold">{formData.companyName}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-goldAccent-500 text-navy-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-goldAccent-400 transition-all shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Google Cal</span>
              </a>
              <button
                onClick={downloadIcs}
                className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download .ICS</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 text-xs text-slate-400 hover:text-white underline"
            >
              Done / Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
