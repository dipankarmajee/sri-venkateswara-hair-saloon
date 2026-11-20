'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, AlertCircle, CheckCircle2, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import LiveStatusPill from '@/components/LiveStatusPill';
import MobileBottomBar from '@/components/MobileBottomBar';
import { SALOON_CONFIG } from '@/lib/data';

export default function TimingsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const timetable = [
    { day: 'Monday', hours: '8:00 AM – 9:30 PM', peak: '5:30 PM – 8:30 PM', advice: 'Walk-ins prompt in afternoons' },
    { day: 'Tuesday', hours: '8:00 AM – 9:30 PM', peak: '5:30 PM – 8:30 PM', advice: 'Best day for relaxed head spa' },
    { day: 'Wednesday', hours: '8:00 AM – 9:30 PM', peak: '5:30 PM – 8:30 PM', advice: 'Steady flow throughout day' },
    { day: 'Thursday', hours: '8:00 AM – 9:30 PM', peak: '5:30 PM – 8:30 PM', advice: 'Great midday availability' },
    { day: 'Friday', hours: '8:00 AM – 9:30 PM', peak: '5:00 PM – 9:00 PM', advice: 'Pre-weekend evening rush' },
    { day: 'Saturday', hours: '7:30 AM – 10:00 PM', peak: 'Morning & Evening peak', advice: 'Reserve or WhatsApp before visiting' },
    { day: 'Sunday', hours: '7:30 AM – 10:00 PM', peak: 'Full day rush', advice: 'Early morning (7:30 - 9:00 AM) is fastest' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100">
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Hours of Operation
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-white">
              Studio Timings & <br />
              <span className="gold-gradient-text italic">Rush-Hour Guide</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Open 7 days a week from morning until late night. Check current availability or pick an optimal time slot to skip the queue.
            </p>

            <div className="pt-2 flex justify-center">
              <LiveStatusPill withHours={true} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Weekly Hours Table */}
            <div className="lg:col-span-7 rounded-3xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-editorial text-xl font-bold text-white">
                    Full Weekly Operating Hours
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  Open All 7 Days
                </span>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {timetable.map((item, idx) => (
                  <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] px-2 rounded-xl transition-colors">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {item.day}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Rush Window: <strong className="text-slate-300">{item.peak}</strong>
                      </div>
                    </div>

                    <div className="text-left sm:text-right space-y-0.5">
                      <div className="font-bold text-sm sm:text-base text-gold">
                        {item.hours}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.advice}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-start gap-2 border-t border-white/[0.08]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  We remain open throughout lunch hours, festival days, and national holidays.
                </span>
              </div>
            </div>

            {/* Smart Rush Guide */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-3xl bg-dark-900 border border-white/[0.08] p-6 sm:p-7 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                
                <h3 className="font-editorial text-2xl font-bold text-white">
                  When Is The Best Time To Visit?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  If you prefer an undisturbed, personalized grooming experience with virtually zero chair waiting time:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      ⚡ Fastest Turnaround (Recommended)
                    </div>
                    <div className="text-sm font-bold text-white">
                      Weekdays: 11:30 AM – 4:30 PM
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Minimum queue; ideal for extensive head spas & skin cleanses.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/20 space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      ⏳ Moderate Traffic
                    </div>
                    <div className="text-sm font-bold text-white">
                      Weekday Evenings: 5:30 PM – 9:00 PM
                    </div>
                    <div className="text-[11px] text-slate-400">
                      After-office rush; short 10-15 min wait time.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/20 space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                      🔥 High Rush Window
                    </div>
                    <div className="text-sm font-bold text-white">
                      Sundays: 9:00 AM – 1:00 PM & 5:00 PM – 9:30 PM
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Peak neighborhood visits; advance WhatsApp booking recommended.
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Queue Checker */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-crimson/20 via-dark-900 to-dark-900 border border-crimson/40 space-y-4">
                <h4 className="font-editorial text-xl font-bold text-white">
                  Check Current Queue Live
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Before stepping out of your house or office, send a quick WhatsApp message to verify the live chair count!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={`https://wa.me/${SALOON_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi! Could you please share the current waiting time at Sri Venkateswara Hair Saloon?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Check</span>
                  </a>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex-1 py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-xs uppercase font-bold tracking-wider border border-white/[0.08]"
                  >
                    Reserve Slot
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <MobileBottomBar onOpenBooking={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
