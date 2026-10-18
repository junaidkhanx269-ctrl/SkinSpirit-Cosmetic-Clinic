import React from 'react';
import { Treatment } from '../types';
import { getWhatsAppLink } from '../data/clinicData';
import { X, Clock, Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
}) => {
  if (!treatment) return null;

  const whatsappUrl = getWhatsAppLink(
    `Hello SkinSpirit Clinic, I would like to book an appointment for ${treatment.title} (${treatment.subtitle}) at 650 George St.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl border border-white/50 overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F1EB]">
          <img
            src={treatment.image}
            alt={treatment.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and pricing overlay */}
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D4A7A1] font-semibold">
              Clinical Protocol
            </span>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                {treatment.title}
              </h3>
              <span className="font-mono text-lg font-bold text-[#FAF8F5]">
                From ${treatment.startingPrice}
              </span>
            </div>
            <p className="text-xs text-white/80">{treatment.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#1A1A1A]">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#1A1A1A]/5 text-xs">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#BD8780]" />
              <div>
                <span className="text-[#1A1A1A]/50 block">Session Time</span>
                <span className="font-medium text-[#1A1A1A]">{treatment.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#BD8780]" />
              <div>
                <span className="text-[#1A1A1A]/50 block">Downtime</span>
                <span className="font-medium text-[#1A1A1A]">{treatment.downtime}</span>
              </div>
            </div>
          </div>

          {/* Clinical Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/50">
              Treatment Overview
            </h4>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              {treatment.details.overview}
            </p>
          </div>

          {/* Popular Areas */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/50">
              Common Treatment Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {treatment.popularAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#F5F1EB] text-xs text-[#1A1A1A]/85 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Clinical Benefits */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#1A1A1A]/50">
              Key Medical Advantages
            </h4>
            <ul className="space-y-2 text-xs text-[#1A1A1A]/80">
              {treatment.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BD8780] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aftercare Guidance */}
          <div className="space-y-2 p-4 rounded-xl bg-[#FAF8F5] border border-[#1A1A1A]/5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1A1A1A]">
              <ShieldCheck className="w-4 h-4 text-[#BD8780]" />
              <span>Recommended Aftercare Protocol</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#1A1A1A]/70 pl-6 list-disc">
              {treatment.details.aftercare.map((care, idx) => (
                <li key={idx}>{care}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#1A1A1A]/8 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer"
          >
            Close
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-md font-mono"
          >
            <span>Book This On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A7A1]" />
          </a>
        </div>

      </div>
    </div>
  );
};
