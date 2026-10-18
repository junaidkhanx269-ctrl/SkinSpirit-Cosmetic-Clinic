import React from 'react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenPricing: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPricing }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-14 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#D4A7A1] font-medium">
              Appointments &amp; Direct Enquiries
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
              Ready for natural aesthetic results that last?
            </h3>
            <p className="text-sm text-white/70 max-w-xl">
              Book your private consultation at 650 George St with our experienced clinicians. Direct WhatsApp chat available 7 days a week.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase text-black bg-[#D4A7A1] hover:bg-[#EBD6D2] rounded-full transition-all shadow-md font-mono"
            >
              <span>Instant WhatsApp Booking</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>

            <button
              onClick={onOpenPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors border border-white/10 cursor-pointer font-mono"
            >
              <span>Explore Price Guide</span>
            </button>
          </div>
        </div>

        {/* 4 Column Info Grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          
          {/* Col 1: Brand & Ethos */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SkinSpirit
              </span>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#D4A7A1]">
                Cosmetic Clinic · Sydney
              </p>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {CLINIC_INFO.tagline}. Specialized in discreet, subtle facial harmonization and regenerative skin health in Sydney CBD.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4A7A1] pt-1">
              <Globe className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.website}</span>
            </div>
          </div>

          {/* Col 2: Clinic Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white/50">
              Clinic Address
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A7A1] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{CLINIC_INFO.name}</p>
                  <p>{CLINIC_INFO.address}</p>
                  <p className="text-white/50">Opposite World Square · Sydney CBD</p>
                </div>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#D4A7A1] hover:underline pt-1"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white/50">
              Hours &amp; Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A7A1] shrink-0" />
                <span>{CLINIC_INFO.hoursDays}: {CLINIC_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A7A1] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A7A1] shrink-0" />
                <a href={getWhatsAppLink()} className="hover:text-white transition-colors">
                  WhatsApp Support (24/7 Monitored)
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-white/50">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Anti-Wrinkle Injections (From $149)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Dermal Fillers &amp; Lips (From $299)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Advanced Skin &amp; Needling (From $199)
                </a>
              </li>
              <li>
                <button onClick={onOpenPricing} className="text-[#D4A7A1] hover:underline cursor-pointer">
                  View Full 2026 Price List →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & AHPRA Compliance Note */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/50 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#D4A7A1] shrink-0 mt-0.5" />
          <p>
            <strong>AHPRA &amp; TGA Medical Notice:</strong> Cosmetic injectables, anti-wrinkle medications, and dermal fillers are prescription-only Schedule 4 medical substances. Individual results may vary. All procedures require a mandatory clinical consultation with an AHPRA-registered medical doctor or cosmetic registered nurse to assess anatomical suitability, medical history, and risks.
          </p>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. 650 George St, Sydney NSW 2000. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/70 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white/70 cursor-pointer">Patient Terms</span>
            <span>·</span>
            <span className="hover:text-white/70 cursor-pointer">{CLINIC_INFO.website}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
