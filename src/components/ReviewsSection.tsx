import React from 'react';
import { REVIEWS, getWhatsAppLink } from '../data/clinicData';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#BD8780]">
              <span className="w-5 h-[1px] bg-[#D4A7A1]" />
              <span>Verified Patient Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-[-0.02em]">
              Praised by Sydney’s Most Discerning
            </h2>
            <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
              Real testimonials from corporate professionals and local Sydney residents who trust our doctor-led clinical discretion at 650 George St.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
            <div className="flex text-[#D4A7A1]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4A7A1] text-[#D4A7A1]" />
              ))}
            </div>
            <span>5.0 Star Average (200+ Reviews)</span>
          </div>
        </div>

        {/* Reviews 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="luxury-card p-8 bg-white border border-[#1A1A1A]/8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#BD8780]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#BD8780] text-[#BD8780]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4A7A1]/40" />
                </div>

                <p className="text-sm text-[#1A1A1A]/85 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/8 flex items-baseline justify-between">
                <div>
                  <h4 className="font-serif font-semibold text-base text-[#1A1A1A]">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/60">{review.suburb}</p>
                </div>
                <span className="text-[11px] font-mono text-[#BD8780] font-medium">
                  {review.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
