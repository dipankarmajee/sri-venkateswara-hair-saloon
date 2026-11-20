'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Scissors, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import MobileBottomBar from '@/components/MobileBottomBar';
import { HAIRCUT_STYLES } from '@/lib/data';

export default function StylesPage() {
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);

  const faceShapes = [
    { id: 'all', label: 'All Styles' },
    { id: 'Oval', label: 'Oval Face' },
    { id: 'Square', label: 'Square Face' },
    { id: 'Round', label: 'Round Face' },
    { id: 'Oblong', label: 'Oblong Face' },
  ];

  const filteredStyles = selectedShape === 'all'
    ? HAIRCUT_STYLES
    : HAIRCUT_STYLES.filter((s) => s.faceShape.includes(selectedShape));

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <main className="flex-1 py-10 sm:py-20 pb-24 sm:pb-10 overflow-x-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Men’s Styling Lookbook
            </span>
            <h1 className="font-editorial text-3xl xs:text-4xl sm:text-6xl font-bold text-white break-words">
              Signature Cuts & <br />
              <span className="gold-gradient-text italic">Style Inspiration</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed">
              A curated lookbook inspired by Hyderabad's leading trends and traditional classics. Show any style from this catalog to our master barbers upon your visit.
            </p>
          </div>

          {/* Interactive Face-Shape Filter */}
          <div className="p-5 sm:p-6 rounded-3xl bg-dark-900 border border-white/[0.08] mb-10 space-y-3.5 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
                  Filter by Cranial / Face Profile:
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Complimentary face-shape advice in salon.
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {faceShapes.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                    selectedShape === shape.id
                      ? 'bg-gold text-dark-950 font-bold shadow'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.06]'
                  }`}
                >
                  {shape.label}
                </button>
              ))}
            </div>
          </div>

          {/* Styles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {filteredStyles.map((style) => (
              <div
                key={style.id}
                className="rounded-3xl overflow-hidden bg-dark-900 border border-white/[0.08] luxury-card-hover flex flex-col justify-between p-5 sm:p-7 space-y-4 w-full"
              >
                <div className="space-y-3.5">
                  {/* Photo with Overlay */}
                  <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/[0.08]">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-dark-950/80 border border-white/[0.1] text-gold">
                        {style.teluguTitle}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                      {style.name}
                    </h2>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mt-1">
                      {style.description}
                    </p>
                  </div>

                  {/* Specification Table */}
                  <div className="p-3.5 rounded-2xl bg-dark-950 border border-white/[0.06] space-y-1.5 text-xs">
                    <div className="flex justify-between border-b border-white/[0.05] pb-1.5">
                      <span className="text-slate-400">Suits Face Shape:</span>
                      <strong className="text-slate-200">{style.faceShape}</strong>
                    </div>
                    <div className="flex justify-between border-b border-white/[0.05] pb-1.5">
                      <span className="text-slate-400">Hair Compatibility:</span>
                      <strong className="text-slate-200">{style.hairType}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Touchup Cycle:</span>
                      <strong className="text-gold">{style.maintenance}</strong>
                    </div>
                  </div>

                  {/* Styling Tip */}
                  <div className="text-xs text-slate-400 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                    <strong className="text-gold block mb-0.5">Barber Tip:</strong>
                    {style.stylingTips}
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-gold hover:text-dark-950 text-slate-200 text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Request This Haircut</span>
                </button>
              </div>
            ))}
          </div>

          {/* Custom Photos Note */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dark-900 to-dark-950 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left w-full">
            <div className="space-y-1">
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                Have a reference photo on your phone?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Simply display the picture to your barber when you sit down. We tailor the cut to match your facial profile.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-gold text-dark-950 text-xs uppercase font-bold tracking-widest whitespace-nowrap hover:brightness-110"
            >
              Book Studio Visit
            </button>
          </div>

        </div>
      </main>

      <Footer onOpenBooking={() => setModalOpen(true)} />
      <MobileBottomBar onOpenBooking={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
