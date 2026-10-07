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
      if (day !== 0 && day !== 6) { // Skip weekends
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
    const details = encodeURIComponent(`Restoration emergency intake & local SEO strategy consultation with ${formData.fullName} (${formData.companyName}).\nFocus: 24/7 AI Receptionist, Dispatch Scheduling & Google Maps SEO.`);
    const location = encodeURIComponent("Google Meet (video conference link provided in email)");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SJ Innovation//Restoration Growth Engine//EN',
      'BEGIN:VEVENT',
      `SUMMARY:15-Min Restoration Growth Strategy Call | SJ Innovation`,
      `DESCRIPTION:Restoration emergency intake and local SEO consultation with ${formData.fullName} (${formData.companyName})`,
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
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 relative shadow-2xl animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'pick' && (
          <div>
            <div className="w-12 h-12 bg-[#3E7DBF]/10 rounded-2xl border border-[#3E7DBF]/25 flex items-center justify-center text-[#3E7DBF] mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
              Book a 15-Minute Strategy Call
            </h3>
            <p className="text-slate-500 text-xs text-center mb-6">
              Select your preferred day and time for a 1-on-1 restoration growth session.
            </p>

            {/* Date selection grid */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#3E7DBF]" />
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
                          ? 'bg-[#3E7DBF] text-white border-[#3E7DBF] font-bold shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#3E7DBF]/40'
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
              <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#EA7826]" />
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
                          ? 'bg-[#EA7826] text-white border-[#EA7826] font-bold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
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
              className="w-full py-3.5 rounded-full font-bold text-white bg-black hover:bg-slate-800 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 shadow-md"
            >
              <span>Continue to Contact Info</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 'details' && (
          <form onSubmit={handleConfirmBooking}>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <button
                type="button"
                onClick={() => setStep('pick')}
                className="text-xs text-[#3E7DBF] hover:underline font-semibold"
              >
                ← Change Date/Time
              </button>
              <span className="text-xs text-slate-700 font-bold bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                {selectedDate} at {selectedTime}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">Enter Restoration Company Details</h3>
            <p className="text-slate-500 text-xs mb-4">
              Where should we send the calendar invitation and meeting link?
            </p>

            <div className="space-y-3">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
              />

              <input
                type="text"
                required
                placeholder="Restoration Company Name *"
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Business Email *"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Direct Phone Number *"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white"
                />
              </div>

              <textarea
                placeholder="Specific company goals (e.g. test 24/7 AI emergency intake, or improve Google Maps 3-Pack rank for water mitigation)"
                rows={2}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3E7DBF] focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full font-bold text-white bg-black hover:bg-slate-800 disabled:opacity-50 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-md"
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
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategy Call Confirmed!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
              We look forward to speaking with you, <strong>{formData.fullName}</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Date:</span>
                <span className="text-slate-900 font-semibold">{selectedDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Time:</span>
                <span className="text-slate-900 font-semibold">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Restoration Company:</span>
                <span className="text-slate-900 font-semibold">{formData.companyName}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Google Cal</span>
              </a>
              <button
                onClick={downloadIcs}
                className="flex-1 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download .ICS</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 text-xs text-slate-400 hover:text-slate-700 underline"
            >
              Done / Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
