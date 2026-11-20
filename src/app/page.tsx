'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, MapPin, Phone, MessageSquare, Clock, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import LiveStatusPill from '@/components/LiveStatusPill';
import MobileBottomBar from '@/components/MobileBottomBar';
import { SALOON_CONFIG, SERVICES_CATALOG, HAIRCUT_STYLES, SALOON_PILLARS, TESTIMONIALS_DATA } from '@/lib/data';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const openBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100">
      <Navbar onOpenBooking={() => openBooking()} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 bg-dark-950">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial-gradient pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Editorial Manifesto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6 sm:space-y-8"
              >
                {/* Status + Location Pill */}
                <div className="flex flex-wrap items-center gap-3">
                  <LiveStatusPill withHours={true} />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>Gulmohar Park Colony, Hyderabad</span>
                  </div>
                </div>

                {/* Editorial Headline */}
                <div className="space-y-4">
                  <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                    Mastering The Art of <br />
                    <span className="gold-gradient-text italic">Distinguished</span> <br />
                    Grooming.
                  </h1>
                  <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
                    Step inside <strong className="text-white font-semibold">Sri Venkateswara Hair Saloon</strong> — where time-honored barbering tradition meets modern precision. Experience tailored scissor architecture, razor skin fades, hot towel shaves, and cooling head spas in a climate-controlled studio.
                  </p>
                </div>

                {/* Statistics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-white/[0.08]">
                  {SALOON_CONFIG.stats.map((s, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-editorial text-2xl sm:text-3xl font-bold text-gold">
                        {s.value}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => openBooking()}
                    className="flex items-center gap-2.5 px-7 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold text-dark-950 bg-gradient-to-r from-gold via-gold-light to-gold shadow-xl shadow-gold/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Scissors className="w-4 h-4 text-dark-950" />
                    <span>Book Your Session</span>
                  </button>

                  <Link
                    href="/services"
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl text-xs uppercase tracking-widest font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.09] transition-all"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>

                  <a
                    href={`https://wa.me/${SALOON_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-4 rounded-2xl text-xs uppercase tracking-widest font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Visual Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-dark-900 shadow-2xl p-7 space-y-6">
                  
                  {/* Image Collage Card */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/[0.08]">
                    <Image
                      src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
                      alt="Barbershop Craftsmanship"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold px-2 py-0.5 rounded bg-dark-950/80 border border-gold/30">
                          Bespoke Studio
                        </span>
                        <div className="font-editorial text-lg font-bold text-white mt-1">
                          Sri Venkateswara Saloon
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Gulmohar Park Colony • Hyderabad
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                          Walk-ins Welcome
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="text-gold font-bold">❄️ Climate Controlled</div>
                      <div className="text-slate-400 text-[11px]">Chilled split AC studio</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="text-gold font-bold">🪒 Fresh Sterile Blades</div>
                      <div className="text-slate-400 text-[11px]">Single-use for every client</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="text-gold font-bold">📺 HD Entertainment</div>
                      <div className="text-slate-400 text-[11px]">Cricket & movies in chair</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="text-gold font-bold">⏰ Open 7 Days</div>
                      <div className="text-slate-400 text-[11px]">8:00 AM – 9:30 PM</div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <Link
                      href="/timings"
                      className="text-gold hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Check Today's Wait Times & Schedule</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* PILLARS OF EXCELLENCE */}
        <section className="py-16 sm:py-24 bg-dark-900 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                Studio Standards
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white">
                The Heritage of Pure Craft
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-light">
                Every detail of your visit is crafted for uncompromising hygiene, tailored precision, and deep relaxation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SALOON_PILLARS.map((p, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-dark-950 border border-white/[0.06] luxury-card-hover space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
                    <Sparkles className="w-6 h-6 text-gold-light" />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED SERVICES PREVIEW (NO PRICES) */}
        <section className="py-20 sm:py-28 bg-dark-950 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="space-y-3 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                  Curated Rituals
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white">
                  Distinguished Grooming Services
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light">
                  From cranial-tailored scissor work to hot towel straight razor shaves and herbal pressure-point head massages.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-gold hover:text-gold-light group"
              >
                <span>View Full Services Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Service Cards Grid (NO PRICES) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_CATALOG.slice(0, 6).map((service) => (
                <div
                  key={service.id}
                  className="rounded-3xl overflow-hidden bg-dark-900 border border-white/[0.08] luxury-card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-dark-950/80 border border-white/[0.1] text-gold">
                          {service.category.toUpperCase()}
                        </span>
                      </div>

                      {service.badge && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-crimson/80 text-white">
                            {service.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>Duration: {service.duration}</span>
                      </div>

                      <h3 className="font-editorial text-xl font-bold text-white">
                        {service.name}
                      </h3>

                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {service.tagline}
                      </p>

                      <div className="pt-2 border-t border-white/[0.06] space-y-1">
                        {service.ritualSteps.slice(0, 3).map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => openBooking(service.id)}
                      className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-gold hover:text-dark-950 text-slate-200 text-xs uppercase font-bold tracking-wider border border-white/[0.08] transition-all"
                    >
                      Reserve This Ritual
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HAIR STYLE LOOKBOOK PREVIEW */}
        <section className="py-20 sm:py-28 bg-dark-900 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="space-y-3 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                  Lookbook Catalog
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white">
                  Signature Hair & Beard Cuts
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light">
                  Find the exact hairstyle that elevates your face geometry, whether you prefer modern fades or timeless scissor tapers.
                </p>
              </div>

              <Link
                href="/styles"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-gold hover:text-gold-light group"
              >
                <span>Explore Complete Lookbook</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HAIRCUT_STYLES.slice(0, 3).map((style) => (
                <div
                  key={style.id}
                  className="rounded-3xl overflow-hidden bg-dark-950 border border-white/[0.08] luxury-card-hover p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                      <Image
                        src={style.image}
                        alt={style.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-gold uppercase tracking-wider">
                        {style.teluguTitle}
                      </div>
                      <h3 className="font-editorial text-xl font-bold text-white">
                        {style.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {style.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Best for:</span>
                        <strong className="text-slate-200">{style.faceShape}</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Maintenance:</span>
                        <strong className="text-gold">{style.maintenance}</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking()}
                    className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-gold hover:text-dark-950 text-slate-200 text-xs uppercase font-bold tracking-wider transition-all"
                  >
                    Request This Style
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 sm:py-24 bg-dark-950 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                Community Trust
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white">
                Words From Gentlemen of Hyderabad
              </h2>
              <div className="flex items-center justify-center gap-1.5 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="text-xs font-bold text-slate-200 ml-2">4.8 / 5.0 Star Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-dark-900 border border-white/[0.08] flex flex-col justify-between space-y-5"
                >
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed italic">
                    "{item.quote}"
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">{item.author}</div>
                      <div className="text-[11px] text-slate-400">{item.location}</div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-gold">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION & HOURS CALLOUT */}
        <section className="py-20 bg-dark-900 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-dark-950 border border-white/[0.1] p-8 sm:p-12 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <LiveStatusPill withHours={false} />
                    <span className="text-xs text-slate-400">Open 7 Days • 8:00 AM – 9:30 PM</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                    Visit Sri Venkateswara Saloon in Gulmohar Park Colony
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                    Located at Shop No. 3, Block L, near Netaji Nagar. Easily reachable from Lingampally MMTS Station (5 mins) and Nallagandla (6 mins) with convenient parking.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl bg-gold text-dark-950 text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all"
                    >
                      Get Directions & Map
                    </Link>

                    <Link
                      href="/timings"
                      className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs uppercase font-bold tracking-wider border border-white/[0.08] transition-all"
                    >
                      View Rush Hours Guide
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 text-center lg:text-right">
                  <button
                    onClick={() => openBooking()}
                    className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-gradient-to-r from-crimson to-crimson-light text-white font-bold text-xs uppercase tracking-widest shadow-2xl hover:brightness-110 active:scale-95 transition-all"
                  >
                    Reserve In Advance
                  </button>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Walk-ins are welcomed throughout the day.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenBooking={() => openBooking()} />
      <MobileBottomBar onOpenBooking={() => openBooking()} />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
