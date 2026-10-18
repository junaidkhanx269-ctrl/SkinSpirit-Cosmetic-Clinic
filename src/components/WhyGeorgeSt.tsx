import React from 'react';
import { CLINIC_INFO, WHY_GEORGE_ST_POINTS, getWhatsAppLink } from '../data/clinicData';
import { Train, ShieldCheck, Clock, MapPin, Navigation, ArrowUpRight, Phone } from 'lucide-react';

export const WhyGeorgeSt: React.FC = () => {
  const icons = [Train, ShieldCheck, Clock];

  return (
    <section id="why-george-st" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-y border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#BD8780]">
            <span className="w-5 h-[1px] bg-[#D4A7A1]" />
            <span>Sydney CBD Sanctuary</span>
            <span className="w-5 h-[1px] bg-[#D4A7A1]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-[-0.02em]">
            Why 650 George St?
          </h2>
          <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
            Conveniently situated in the heartbeat of Sydney, our discreet clinical space was custom-engineered to deliver absolute medical privacy without compromising on central CBD access.
          </p>
        </div>

        {/* 3 Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WHY_GEORGE_ST_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="luxury-card p-8 bg-white border border-[#1A1A1A]/8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F1EB] border border-[#1A1A1A]/5 flex items-center justify-center text-[#1A1A1A]">
                    <Icon className="w-5 h-5 text-[#BD8780]" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#BD8780] font-semibold">
                      {point.badge}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mt-1">
                      {point.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A1A1A]/8 text-xs text-[#1A1A1A]/60 font-medium">
                  {point.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Map & Suite Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Suite Photo & Experience */}
          <div className="lg:col-span-5 rounded-[20px] overflow-hidden bg-white border border-[#1A1A1A]/8 shadow-sm flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ECE5DA]">
                <img
                  src="/src/assets/images/clinic_luxury_suite_1792302365394.jpg"
                  alt="Ultra-luxury limestone consultation suite at 650 George St Sydney"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-white font-medium">
                  Private Treatment Suite 01
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-2xl font-semibold text-[#1A1A1A]">
                  Discreet Medical Architecture
                </h4>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Stepping into 650 George St feels like entering a tranquil sanctuary away from the hustle of Sydney CBD. With private entry, acoustically damped suites, and views over heritage sandstone, you are assured complete serenity.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1A1A1A]/8 flex items-center justify-between text-xs text-[#1A1A1A]/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BD8780]" />
                <span>Hours: {CLINIC_INFO.hours}</span>
              </div>
              <span className="font-semibold text-[#1A1A1A]">Mon – Sat</span>
            </div>
          </div>

          {/* Right: Embedded Map & Fast Transit Card */}
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden bg-white border border-[#1A1A1A]/8 shadow-sm flex flex-col">
            
            {/* Top Bar with address & fast action */}
            <div className="p-5 sm:p-6 border-b border-[#1A1A1A]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFFFFF]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                  <MapPin className="w-4 h-4 text-[#BD8780]" />
                  <span>{CLINIC_INFO.address}</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/60">
                  Opposite World Square · Sydney CBD NSW 2000
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#F5F1EB] hover:bg-[#ECE5DA] rounded-full transition-colors border border-[#1A1A1A]/10"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#BD8780]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A7A1]" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 min-h-[320px] relative bg-[#FAF8F5]">
              <iframe
                title="SkinSpirit Cosmetic Clinic Location Map - 650 George St Sydney"
                src="https://maps.google.com/maps?q=650+George+St,+Sydney+NSW+2000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />

              {/* In-Map floating marker pin info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/80 shadow-md pointer-events-none hidden sm:block">
                <p className="font-serif text-xs font-bold text-[#1A1A1A]">SkinSpirit Cosmetic Clinic</p>
                <p className="text-[10px] text-[#1A1A1A]/70">650 George St · 2min from Town Hall</p>
              </div>
            </div>

            {/* Bottom transit badges */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#1A1A1A]/8 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1A1A1A]/75">
              <span className="flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-[#BD8780]" />
                <span>Town Hall Station (2 mins walk)</span>
              </span>
              <span className="text-[#1A1A1A]/30 hidden sm:inline">·</span>
              <span>Chinatown Light Rail (30 seconds)</span>
              <span className="text-[#1A1A1A]/30 hidden sm:inline">·</span>
              <span>World Square Parking (Directly opposite)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
