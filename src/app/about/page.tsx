'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar onOpenBooking={() => setModalOpen(true)} />

      <main className="flex-1 py-10 sm:py-20 pb-24 sm:pb-10 overflow-x-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 w-full">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
              Our Heritage & Philosophy
            </span>
            <h1 className="font-editorial text-3xl xs:text-4xl sm:text-6xl font-bold text-white break-words">
              The Story of <br />
              <span className="gold-gradient-text italic">Sri Venkateswara Saloon</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed">
              Serving the gentlemen, youth, and families of Gulmohar Park Colony, Serilingampally, and Nallagandla with steadfast dedication to master barbering.
            </p>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            <div className="lg:col-span-6 relative h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-white/[0.08] w-full">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
                alt="Craft Barbering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-dark-950/85 backdrop-blur-md border border-white/[0.08]">
                <div className="font-editorial text-base sm:text-lg font-bold text-white">
                  Craftsmanship Over Speed
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-light mt-0.5">
                  Every haircut is tailored to your cranial shape and lifestyle needs.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Founded on Respect & Craft
              </span>

              <h2 className="font-editorial text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight">
                A Neighborhood Pillar in Gulmohar Park Colony
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Founded over a decade ago in the heart of Serilingampalle Mandal, <strong className="text-white">Sri Venkateswara Hair Saloon</strong> was built on a simple conviction: every man deserves distinguished, precise styling in an immaculate, air-conditioned environment without unnecessary pretense.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Whether you are stepping in for a quick low skin fade before a crucial presentation, bringing your young child for their relaxed weekend haircut, or taking an hour to unwind with our signature Ayurvedic cooling head spa, our stylists take personal pride in every stroke of the scissors.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/[0.06] space-y-0.5">
                  <div className="font-editorial text-xl sm:text-2xl font-bold text-gold">15,000+</div>
                  <div className="text-[11px] text-slate-400">Gentlemen Groomed</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-dark-900 border border-white/[0.06] space-y-0.5">
                  <div className="font-editorial text-xl sm:text-2xl font-bold text-emerald-400">12+ Years</div>
                  <div className="text-[11px] text-slate-400">Community Trust</div>
                </div>
              </div>
            </div>

          </div>

          {/* Three Cornerstones */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Our Three Pledges
              </h3>
              <p className="text-xs text-slate-400">
                The standards that define every visit to Sri Venkateswara Hair Saloon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full">
              
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/[0.08] space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-white">
                  100% Sterile Blade Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  We never reuse blades. Every straight-razor shave, beard line, and temple cleanup uses a freshly unsealed surgical razor blade that is safely discarded immediately after your session.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/[0.08] space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-white">
                  Sartorial Consultation
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Our barbers don't rush. We listen to your routine, study hair whorls and cowlicks, and suggest cuts that flatter your facial structure and stay easy to style at home.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/[0.08] space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-crimson/10 border border-crimson/20 text-red-400 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-white">
                  Welcoming Family Ambience
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  From toddlers experiencing their first haircuts to respected senior citizens, our studio provides a patient, polite, and air-conditioned environment with entertainment for all ages.
                </p>
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
