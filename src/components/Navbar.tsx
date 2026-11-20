'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, CalendarCheck, Menu, X, Scissors, MapPin, MessageSquare } from 'lucide-react';
import LiveStatusPill from './LiveStatusPill';
import { SALOON_CONFIG } from '@/lib/data';

export default function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Lookbook', href: '/styles' },
    { label: 'Timings', href: '/timings' },
    { label: 'Our Story', href: '/about' },
    { label: 'Location', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors overflow-hidden">
      
      {/* Top Utility Announcement Bar (Only on large screens to prevent tablet/mobile overflow) */}
      <div className="hidden lg:block bg-[#05070A] border-b border-white/[0.06] text-xs text-slate-400 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Location & AC studio note */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Shop #3, Gulmohar Park Colony, Serilingampalle, Hyderabad</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[11px] text-emerald-400 font-medium">
              ❄️ Fully Air Conditioned Studio
            </span>
          </div>

          {/* Right: Live Status & Quick Hotline */}
          <div className="flex items-center gap-4">
            <LiveStatusPill withHours={true} />

            <span className="text-white/20">|</span>

            <a
              href={`tel:${SALOON_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{SALOON_CONFIG.phone}</span>
            </a>

            <a
              href={`https://wa.me/${SALOON_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Spacious Navigation Bar */}
      <div className="bg-dark-950/95 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22">
            
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0 mr-4 lg:mr-12">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-gold via-gold-dark to-dark-900 p-[1.5px] shadow-md shadow-gold/15 group-hover:scale-105 transition-transform flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center text-gold">
                  <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light -rotate-45" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-editorial text-base sm:text-xl lg:text-2xl font-bold tracking-wide text-white group-hover:text-gold transition-colors">
                    Sri Venkateswara
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded bg-crimson/25 border border-crimson/40 text-red-400">
                    AC
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-medium tracking-widest text-slate-400 uppercase">
                  Hair Saloon & Grooming
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Centered with Generous Spacing */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-11 flex-1 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest font-semibold py-2 px-1 transition-all relative whitespace-nowrap ${
                      isActive
                        ? 'text-gold font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Clean Single Gold CTA Button */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-4 lg:ml-12">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-2.5 xl:px-5 xl:py-3 rounded-2xl text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-950 shadow-xl shadow-gold/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider bg-gold text-dark-950 shadow"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/[0.08] bg-dark-900 px-4 sm:px-6 pt-4 pb-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="pb-3 border-b border-white/[0.08] flex justify-between items-center text-xs">
              <LiveStatusPill withHours={true} />
              <span className="text-slate-400">Gulmohar Park</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all text-center ${
                    pathname === link.href
                      ? 'bg-gold/15 text-gold border border-gold/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-dark-950 bg-gradient-to-r from-gold to-gold-light shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve on WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SALOON_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/[0.08] text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Us</span>
                </a>
                <a
                  href={SALOON_CONFIG.googleMaps.queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/[0.08] text-slate-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
