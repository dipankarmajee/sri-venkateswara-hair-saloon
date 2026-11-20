'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Train, Car, Bus, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import LiveStatusPill from '@/components/LiveStatusPill';
import MobileBottomBar from '@/components/MobileBottomBar';
import { SALOON_CONFIG } from '@/lib/data';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100">
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Studio Location & Navigation
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-white">
              Visit Us in <br />
              <span className="gold-gradient-text italic">Gulmohar Park Colony</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Located conveniently in Serilingampalle Mandal, just minutes from Lingampally MMTS Station, Nallagandla, Chandanagar, and BHEL.
            </p>

            <div className="pt-2 flex justify-center">
              <LiveStatusPill withHours={true} />
            </div>
          </div>

          {/* Interactive Map & Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Contact Dossier & Directions */}
            <div className="lg:col-span-5 rounded-3xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                
                {/* Address */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    Physical Studio Address
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-white">
                    Sri Venkateswara Hair Saloon
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {SALOON_CONFIG.address.shop},<br />
                    {SALOON_CONFIG.address.colony}, {SALOON_CONFIG.address.area},<br />
                    {SALOON_CONFIG.address.city}, {SALOON_CONFIG.address.state} — {SALOON_CONFIG.address.pincode}
                  </p>
                  <div className="text-[11px] text-slate-400 pt-1">
                    <strong className="text-slate-300">Landmark:</strong> {SALOON_CONFIG.address.landmark}
                  </div>
                </div>

                {/* Travel Distances */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Proximity from Key Localities
                  </span>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <Train className="w-4 h-4 text-emerald-400" />
                        <span>Lingampally MMTS Station</span>
                      </div>
                      <strong className="text-gold">5 Mins (1.8 km)</strong>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-blue-400" />
                        <span>Nallagandla Flyover / Aparna</span>
                      </div>
                      <strong className="text-gold">6 Mins (2.2 km)</strong>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <Bus className="w-4 h-4 text-amber-400" />
                        <span>Chandanagar & BHEL</span>
                      </div>
                      <strong className="text-gold">10 Mins (3.5 km)</strong>
                    </div>
                  </div>
                </div>

                {/* Google Knowledge Graph Link */}
                <div className="p-4 rounded-2xl bg-dark-950 border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                    <span>Google Business Search Card</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Verify client reviews, store photographs, and ratings on Google:
                  </p>
                  <a
                    href={SALOON_CONFIG.googleMaps.knowledgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gold hover:underline font-bold text-xs"
                  >
                    View Official Google Search Profile →
                  </a>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={SALOON_CONFIG.googleMaps.queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gold text-dark-950 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:brightness-110 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Turn-By-Turn Route in Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SALOON_CONFIG.phone}`}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs uppercase font-semibold text-slate-200 bg-white/[0.05] border border-white/[0.08]"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call Studio</span>
                  </a>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs uppercase font-bold text-white bg-crimson hover:bg-crimson-light"
                  >
                    <span>Reserve Slot</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="lg:col-span-7 rounded-3xl bg-dark-900 border border-white/[0.08] overflow-hidden flex flex-col min-h-[460px] shadow-2xl">
              <div className="p-4 px-6 bg-dark-950 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Gulmohar Park Colony, Serilingampally Mandal, Hyderabad</span>
                </div>
                <a
                  href={SALOON_CONFIG.googleMaps.queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Expand Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative flex-1 w-full min-h-[400px]">
                <iframe
                  title="Sri Venkateswara Hair Saloon Google Map"
                  src={SALOON_CONFIG.googleMaps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.03]"
                />
              </div>

              <div className="p-4 px-6 bg-dark-950 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                <span>Free Dedicated Bike & Car Parking</span>
                <span className="text-emerald-400 font-semibold">✓ Walk-ins Warmly Welcomed</span>
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
