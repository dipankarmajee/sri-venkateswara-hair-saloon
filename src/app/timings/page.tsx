'use client';

import { useState } from 'react';
import { Calendar, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
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
    { day: 'Saturday', hours: '7:30 AM – 10:00 PM', peak: 'Morning & Evening peak', advice: 'WhatsApp before visiting' },
    { day: 'Sunday', hours: '7:30 AM – 10:00 PM', peak: 'Full day rush', advice: 'Early morning (7:30 - 9:00 AM) fastest' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <main className="flex-1 py-10 sm:py-20 pb-24 sm:pb-10 overflow-x-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Hours of Operation
            </span>
            <h1 className="font-editorial text-3xl xs:text-4xl sm:text-6xl font-bold text-white break-words">
              Studio Timings & <br />
              <span className="gold-gradient-text italic">Rush-Hour Guide</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed">
              Open 7 days a week from morning until late night. Check current availability or pick an optimal time slot to skip the queue.
            </p>

            <div className="pt-1 flex justify-center">
              <LiveStatusPill withHours={true} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full">
            
            {/* Weekly Hours Table */}
            <div className="lg:col-span-7 rounded-3xl bg-dark-900 border border-white/[0.08] p-5 sm:p-8 space-y-5 w-full">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-editorial text-lg sm:text-xl font-bold text-white">
                    Weekly Schedule
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  Open All 7 Days
                </span>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {timetable.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-white/[0.02] px-2 rounded-xl transition-colors">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-white text-sm">
                        {item.day}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Peak: <strong className="text-slate-300">{item.peak}</strong>
                      </div>
                    </div>

                    <div className="text-left sm:text-right space-y-0.5">
                      <div className="font-bold text-sm text-gold">
                        {item.hours}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400">
                        {item.advice}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-start gap-2 border-t border-white/[0.08]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Open throughout lunch hours, festivals, and public holidays.
                </span>
              </div>
            </div>

            {/* Smart Rush Guide */}
            <div className="lg:col-span-5 space-y-5 w-full">
              
              <div className="rounded-3xl bg-dark-900 border border-white/[0.08] p-5 sm:p-7 space-y-4 w-full">
                <div className="w-11 h-11 rounded-2xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                  Best Times To Visit
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  For minimal queue and personalized attention:
                </p>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      ⚡ Fastest Turnaround (Zero Wait)
                    </div>
                    <div className="text-sm font-bold text-white">
                      Weekdays: 11:30 AM – 4:30 PM
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/20 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      ⏳ Moderate Traffic
                    </div>
                    <div className="text-sm font-bold text-white">
                      Weekday Evenings: 5:30 PM – 9:00 PM
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/20 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      🔥 Weekend High Rush
                    </div>
                    <div className="text-sm font-bold text-white">
                      Sundays: All Day Peak
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Queue Checker */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-crimson/20 via-dark-900 to-dark-900 border border-crimson/40 space-y-3.5 w-full">
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-white">
                  Check Current Queue Live
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Before stepping out, send a WhatsApp ping to verify the live chair count!
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
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
