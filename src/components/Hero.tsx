import React from 'react';
import { CLINIC_INFO, getWhatsAppLink, heroSydneyImg } from '../data/clinicData';
import { ArrowUpRight, ShieldCheck, Sparkles, Star, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPricing }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-[#1A1A1A]/5">
      {/* Subtle architectural ambient lighting effect */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4A7A1]/12 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5F1EB] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            
            {/* Editorial Location Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/70">
              <span className="w-6 h-[1px] bg-[#D4A7A1]" />
              <span>Aesthetic Medicine · 650 George St Sydney</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] text-[#1A1A1A] font-medium tracking-[-0.02em] text-balance">
              Sydney’s Most Trusted Injectable Clinic on George St
            </h1>

            {/* Trust Subtitle */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base font-medium text-[#1A1A1A]/90">
                <span className="inline-flex items-center gap-1 text-[#BD8780] font-semibold">
                  <Star className="w-4 h-4 fill-[#D4A7A1] text-[#D4A7A1]" />
                  5.0 ★ Rated
                </span>
                <span className="text-[#1A1A1A]/30">|</span>
                <span>10+ Years Expertise</span>
                <span className="text-[#1A1A1A]/30">|</span>
                <span className="text-[#1A1A1A]">Natural Results That Last</span>
              </div>

              <p className="text-base sm:text-lg text-[#1A1A1A]/75 font-normal leading-relaxed max-w-xl">
                Doctor and senior nurse-led cosmetic injectables tailored for refined Australian beauty. Zero duck lips, zero overfilled faces—just fresh, sculpted, and authentic balance.
              </p>
            </div>

            {/* Action Buttons: Required Black Pill + View Prices */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppLink("Hello SkinSpirit, I would like to book a consultation at 650 George St.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] border border-black/10 group cursor-pointer"
              >
                <span>BOOK ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4A7A1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenPricing}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] bg-white hover:bg-[#F5F1EB] rounded-full transition-all border border-[#1A1A1A]/15 shadow-sm hover:border-[#1A1A1A]/30 cursor-pointer"
              >
                <span>VIEW PRICES</span>
                <span className="text-xs text-[#BD8780] font-mono">FROM $99</span>
              </button>
            </div>

            {/* Micro Credential Strip */}
            <div className="pt-4 border-t border-[#1A1A1A]/8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#1A1A1A]/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#BD8780] shrink-0" />
                <span className="font-medium">AHPRA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#BD8780] shrink-0" />
                <span className="font-medium">100% TGA Approved</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#BD8780] shrink-0" />
                <span className="font-medium">2min to Town Hall</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame with rounded-20px discipline */}
              <div className="relative rounded-[20px] overflow-hidden bg-[#ECE5DA] shadow-2xl border border-white/60">
                <img
                  src={heroSydneyImg}
                  alt="Radiant Australian woman with natural aesthetic results at SkinSpirit Cosmetic Clinic Sydney"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to public folder path if bundled asset fails
                    e.currentTarget.src = '/images/hero_sydney_clinic_model_1792302362982.jpg';
                  }}
                  className="w-full h-auto object-cover aspect-[3/4] hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle luxury overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom luxury glass capsule info */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-[#1A1A1A]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm font-semibold">Natural Aesthetic Refinement</p>
                      <p className="text-[11px] text-[#1A1A1A]/70">Zero duck lips · Anatomical balance</p>
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-[#BD8780] uppercase font-semibold">
                      Sydney CBD
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative warm sand offset glow backdrop */}
              <div className="absolute -inset-2 rounded-[24px] bg-[#D4A7A1]/20 -z-10 blur-xl opacity-70 transform -rotate-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
