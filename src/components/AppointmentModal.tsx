'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Scissors, FileText } from 'lucide-react';
import { SERVICES_CATALOG, SALOON_CONFIG } from '@/lib/data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialServiceId,
}: AppointmentModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES_CATALOG[0].id
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDay, setPreferredDay] = useState('Today');
  const [preferredTime, setPreferredTime] = useState('Immediate / Next Available');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrlGenerated, setWhatsappUrlGenerated] = useState('');

  const selectedService =
    SERVICES_CATALOG.find((s) => s.id === selectedServiceId) || SERVICES_CATALOG[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const clientName = name.trim() || 'Valued Guest';
    const clientPhone = phone.trim() || 'Not specified';
    const clientNotes = notes.trim() ? `%0A📝 *Special Request:* ${notes.trim()}` : '';

    const text =
      `*Grooming Appointment Request*%0A` +
      `*Sri Venkateswara Hair Saloon (Gulmohar Park Colony)*%0A%0A` +
      `👤 *Client Name:* ${clientName}%0A` +
      `📞 *Contact Number:* ${clientPhone}%0A` +
      `✂️ *Selected Ritual:* ${selectedService.name}%0A` +
      `⏱️ *Estimated Duration:* ${selectedService.duration}%0A` +
      `📅 *Preferred Day:* ${preferredDay}%0A` +
      `⏰ *Preferred Time Slot:* ${preferredTime}` +
      clientNotes +
      `%0A%0A_Please confirm slot & current wait time. Thank you!_`;

    const whatsappUrl = `https://wa.me/${SALOON_CONFIG.whatsappNumber}?text=${text}`;
    setWhatsappUrlGenerated(whatsappUrl);
    setSubmitted(true);

    // Direct redirect / launch WhatsApp
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg bg-dark-900 border border-white/[0.1] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="font-editorial text-2xl font-bold text-white">
                Redirecting to WhatsApp...
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto">
                Your appointment details have been prepared for <strong className="text-white">Sri Venkateswara Hair Saloon</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-dark-950 border border-white/[0.08] text-xs text-slate-300 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Guest:</span>
                <span className="font-semibold text-white">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-semibold text-white">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Service:</span>
                <span className="font-semibold text-gold">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time & Date:</span>
                <span className="font-semibold text-slate-200">{preferredDay} • {preferredTime}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={whatsappUrlGenerated}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp Again</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleClose}
                  className="py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-xs uppercase font-bold tracking-wider"
                >
                  Done
                </button>
                <a
                  href={`tel:${SALOON_CONFIG.phone}`}
                  className="py-2.5 rounded-xl bg-gold text-dark-950 text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Saloon</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-[10px] font-bold uppercase tracking-widest mb-2">
                <Scissors className="w-3 h-3" />
                <span>Instant WhatsApp Booking</span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white">
                Book Your Grooming Session
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill the details below. You will be redirected directly to WhatsApp to confirm your slot with our studio team!
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Select Grooming Service / Ritual
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/[0.1] text-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-gold"
                >
                  {SERVICES_CATALOG.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/[0.1] text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/[0.1] text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>Preferred Day</span>
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/[0.1] text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Upcoming Saturday">Upcoming Saturday</option>
                    <option value="Upcoming Sunday">Upcoming Sunday</option>
                    <option value="Next Weekday">Next Weekday</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/[0.1] text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="Immediate / Next Available">Immediate / Next Available</option>
                    <option value="Morning (8:30 AM - 11:00 AM)">Morning (8:30 AM - 11:00 AM)</option>
                    <option value="Afternoon (11:30 AM - 4:00 PM) [No Waiting]">Afternoon (11:30 AM - 4:00 PM) [No Waiting]</option>
                    <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    <option value="Night (7:30 PM - 9:30 PM)">Night (7:30 PM - 9:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Any Specific Style / Reference? (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Low Skin Fade with beard trim, or child's haircut"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/[0.08] text-slate-200 text-xs focus:outline-none focus:border-gold"
                />
              </div>

              {/* Submit Button Redirecting to WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Booking to WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                Direct WhatsApp message to Sri Venkateswara Hair Saloon (+91 94901 82345). Walk-ins are always welcomed!
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
