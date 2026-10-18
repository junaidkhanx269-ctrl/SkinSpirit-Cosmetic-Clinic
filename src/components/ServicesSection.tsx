import React from 'react';
import { TREATMENTS, getWhatsAppLink } from '../data/clinicData';
import { Treatment } from '../types';
import { ArrowUpRight, Clock, Sparkles, Info } from 'lucide-react';

interface ServicesSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenPricing: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectTreatment,
  onOpenPricing,
}) => {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#BD8780]">
              <span className="w-5 h-[1px] bg-[#D4A7A1]" />
              <span>Curated Clinical Treatments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-[-0.02em]">
              Precision Injectables &amp; Skin Health
            </h2>
            <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
              Every procedure is administered in our private George St suites by senior clinicians focused on natural rejuvenation rather than artificial alteration.
            </p>
          </div>

          <button
            onClick={onOpenPricing}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] hover:text-[#BD8780] transition-colors pb-1 border-b border-[#1A1A1A]/30 hover:border-[#BD8780] cursor-pointer"
          >
            <span>View Complete Price Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => {
            const whatsappUrl = getWhatsAppLink(
              `Hello SkinSpirit Clinic, I would like to book an appointment for ${treatment.title} (${treatment.subtitle}) at 650 George St.`
            );

            return (
              <div
                key={treatment.id}
                className="luxury-card flex flex-col overflow-hidden group border border-[#1A1A1A]/8 bg-white"
              >
                {/* Image Container with 4:3 Aspect Ratio and subtle zoom on hover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F1EB]">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Starting price tag - clean unboxed float */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-sm">
                    <span className="text-xs font-bold text-[#1A1A1A] tracking-tight font-mono">
                      From ${treatment.startingPrice}
                    </span>
                  </div>

                  {/* Treatment Subtitle preview */}
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium tracking-wide">
                    <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {treatment.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] tracking-tight group-hover:text-[#BD8780] transition-colors">
                        {treatment.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Metadata strip */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1A1A1A]/60">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#BD8780]" />
                        <span>{treatment.duration}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BD8780]" />
                        <span>{treatment.downtime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="pt-4 border-t border-[#1A1A1A]/8 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectTreatment(treatment)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#BD8780]" />
                      <span>Details</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A7A1]" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Personalized Treatment Recommendation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-[20px] bg-[#F5F1EB] border border-[#1A1A1A]/8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#1A1A1A]">
              Unsure which injectable or skin treatment suits you best?
            </h4>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70">
              Send our senior clinician photos or questions confidentially on WhatsApp for honest guidance before booking.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hello! I'm not sure which treatment I need and would love a complimentary aesthetic assessment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] bg-white rounded-full hover:bg-[#FAF8F5] transition-all border border-[#1A1A1A]/15 shadow-sm"
          >
            <span>Ask on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#BD8780]" />
          </a>
        </div>

      </div>
    </section>
  );
};
