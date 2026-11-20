'use client';

import Link from 'next/link';
import { Scissors, Phone, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { SALOON_CONFIG } from '@/lib/data';
import LiveStatusPill from './LiveStatusPill';

export default function Footer({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.08] text-slate-400 pt-16 pb-28 sm:pb-14 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-dark-900 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center text-gold">
                  <Scissors className="w-4 h-4 text-gold-light -rotate-45" />
                </div>
              </div>
              <div>
                <span className="font-editorial text-xl font-bold tracking-wide text-white block">
                  Sri Venkateswara Hair Saloon
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">
                  Gulmohar Park Colony • Hyderabad
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              Hyderabad’s respected neighborhood barber studio dedicated to the craft of traditional and contemporary gentleman grooming. Fully air-conditioned with medical-grade hygiene standards.
            </p>

            <div className="pt-2">
              <LiveStatusPill withHours={true} />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${SALOON_CONFIG.phone}`}
                className="px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 text-xs font-semibold flex items-center gap-2 border border-white/[0.08] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call {SALOON_CONFIG.phone}</span>
              </a>

              <a
                href={`https://wa.me/${SALOON_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 text-xs font-semibold flex items-center gap-2 border border-emerald-500/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Explore Studio
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-300">
              <Link href="/services" className="hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/styles" className="hover:text-gold transition-colors">
                Lookbook
              </Link>
              <Link href="/timings" className="hover:text-gold transition-colors">
                Store Hours
              </Link>
              <Link href="/about" className="hover:text-gold transition-colors">
                Our Story
              </Link>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Location & Map
              </Link>
              <button
                onClick={onOpenBooking}
                className="text-left text-gold hover:underline font-semibold"
              >
                Reserve on WhatsApp →
              </button>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Studio Address</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {SALOON_CONFIG.address.shop},<br />
              {SALOON_CONFIG.address.colony}, {SALOON_CONFIG.address.area},<br />
              {SALOON_CONFIG.address.city}, {SALOON_CONFIG.address.state} — {SALOON_CONFIG.address.pincode}
            </p>
            <div className="text-[11px] text-slate-400">
              {SALOON_CONFIG.address.landmark}
            </div>

            <div className="pt-2 flex flex-col space-y-1.5">
              <a
                href={SALOON_CONFIG.googleMaps.queryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:underline font-semibold flex items-center gap-1"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={SALOON_CONFIG.googleMaps.knowledgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sri Venkateswara Hair Saloon. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/services" className="hover:text-slate-300">
              Services
            </Link>
            <span>•</span>
            <Link href="/styles" className="hover:text-slate-300">
              Lookbook
            </Link>
            <span>•</span>
            <Link href="/timings" className="hover:text-slate-300">
              Store Hours
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">
              Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
