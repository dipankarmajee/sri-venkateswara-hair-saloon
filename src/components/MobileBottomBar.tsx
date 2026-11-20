'use client';

import { Phone, MessageSquare, CalendarCheck, Navigation } from 'lucide-react';
import { SALOON_CONFIG } from '@/lib/data';

export default function MobileBottomBar({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark-950/95 backdrop-blur-xl border-t border-white/[0.08] p-2.5 px-4 shadow-2xl flex items-center justify-between gap-2">
      <a
        href={`tel:${SALOON_CONFIG.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.06] text-slate-200 text-xs font-semibold border border-white/[0.08] active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-gold" />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/${SALOON_CONFIG.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-md active:scale-95 transition-transform"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-950 text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
      >
        <CalendarCheck className="w-3.5 h-3.5" />
        <span>Book Slot</span>
      </button>

      <a
        href={SALOON_CONFIG.googleMaps.queryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/[0.06] text-slate-200 border border-white/[0.08] active:scale-95 transition-transform"
        title="Directions"
      >
        <Navigation className="w-4 h-4 text-red-400" />
      </a>
    </div>
  );
}
