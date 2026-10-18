import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Optional dismissible floating card prompt */}
      {showTooltip && (
        <div className="mb-3 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Direct Clinician WhatsApp · 650 George St</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-700 p-0.5"
            aria-label="Dismiss prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Action Button */}
      <a
        href={getWhatsAppLink("Hello SkinSpirit Cosmetic Clinic! I would like to book a consultation at 650 George St.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with SkinSpirit Cosmetic Clinic"
        className="group relative flex items-center gap-3 bg-[#1A1A1A] text-white pl-4 pr-5 py-3.5 sm:py-3.5 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95 border border-[#D4A7A1]/40"
      >
        {/* Soft Ambient Radiating Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#D4A7A1] opacity-40 group-hover:opacity-60 animate-ping pointer-events-none" />
        <span className="absolute -inset-0.5 rounded-full bg-[#1A1A1A] -z-10" />

        {/* WhatsApp Icon */}
        <div className="relative w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 shadow-sm">
          <MessageCircle className="w-4 h-4 fill-white text-emerald-500" />
        </div>

        {/* Text Label */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-wider uppercase text-[#D4A7A1] font-mono leading-none">
            Instant Booking
          </span>
          <span className="text-xs font-semibold text-white tracking-tight leading-tight mt-0.5">
            Book on WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
};
