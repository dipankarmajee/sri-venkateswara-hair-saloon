'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, CheckCircle2, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import MobileBottomBar from '@/components/MobileBottomBar';
import { SERVICES_CATALOG, ServiceItem } from '@/lib/data';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'hair', label: '✂️ Haircut & Styling' },
    { id: 'beard', label: '🪒 Beard & Shaving' },
    { id: 'spa', label: '💆‍♂️ Scalp & Head Spa' },
    { id: 'skin', label: '✨ Skin & De-Tan' },
    { id: 'rituals', label: '👑 Complete Packages' },
  ];

  const filtered = activeCategory === 'all'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter((s) => s.category === activeCategory);

  const handleOpenBooking = (id?: string) => {
    setSelectedServiceId(id);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Grooming Catalog
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-white">
              Bespoke Services & <br />
              <span className="gold-gradient-text italic">Grooming Rituals</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Every appointment at Sri Venkateswara Hair Saloon is carried out with precision tools, fresh sterile blades, and personalized consultations. Explore our rituals below.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all ${
                  activeCategory === c.id
                    ? 'bg-gold text-dark-950 shadow-lg shadow-gold/20 scale-105'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Detailed Rituals Grid (STRICTLY NO PRICES) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filtered.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden bg-dark-900 border border-white/[0.08] luxury-card-hover p-6 sm:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-5">
                    {/* Top Row: Category Tag & Duration */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                        {service.category.toUpperCase()} RITUAL
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Image & Title */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                      <div className="sm:col-span-5 relative h-40 rounded-2xl overflow-hidden border border-white/[0.06]">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="sm:col-span-7 space-y-2">
                        {service.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-crimson/80 text-white inline-block">
                            {service.badge}
                          </span>
                        )}
                        <h2 className="font-editorial text-2xl font-bold text-white">
                          {service.name}
                        </h2>
                        <p className="text-xs text-gold-light italic">
                          "{service.tagline}"
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Ritual Process Checklist */}
                    <div className="p-4 rounded-2xl bg-dark-950 border border-white/[0.06] space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Step-by-Step Experience Includes:
                      </div>
                      <div className="space-y-1.5">
                        {service.ritualSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-gold font-bold">Ideal for:</span>
                      <span>{service.recommendedFor}</span>
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">
                      Personalized consultation upon arrival
                    </span>
                    <button
                      onClick={() => handleOpenBooking(service.id)}
                      className="px-6 py-2.5 rounded-xl bg-gold text-dark-950 text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                    >
                      <Scissors className="w-3.5 h-3.5" />
                      <span>Book Service</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Consultation Note */}
          <div className="mt-16 text-center p-8 rounded-3xl bg-dark-900 border border-white/[0.08] max-w-2xl mx-auto space-y-3">
            <h3 className="font-editorial text-2xl font-bold text-white">
              Special Wedding & Group Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Planning for a wedding, family function, or group grooming session? Contact our head stylist for customized schedule coordination.
            </p>
            <div className="pt-2">
              <a
                href="tel:+919490182345"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gold border border-gold/30 text-xs uppercase font-bold tracking-wider"
              >
                Call Concierge: +91 94901 82345
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
