import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES, getWhatsAppLink } from '../data/clinicData';
import { Sparkles, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';

export const ResultsSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleInteractionStart = () => {
    setIsDragging(true);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#BD8780]">
            <span className="w-5 h-[1px] bg-[#D4A7A1]" />
            <span>Clinical Precision</span>
            <span className="w-5 h-[1px] bg-[#D4A7A1]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-[-0.02em]">
            Natural Results That Last
          </h2>
          <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
            Drag the slider to examine our clinical work. No pillow faces, no frozen brows, and zero duck lips—just refined, authentic facial harmony.
          </p>

          {/* Case Study Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-[#F5F1EB] text-[#1A1A1A]/80 hover:bg-[#ECE5DA]'
                }`}
              >
                <span>{item.category}: {item.title.split('&')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before / After Split Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card overflow-hidden bg-[#FAF8F5] border border-[#1A1A1A]/8 shadow-xl">
            
            {/* The Draggable Container */}
            <div
              ref={containerRef}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onMouseLeave={handleInteractionEnd}
              onMouseMove={handleMouseMove}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none cursor-ew-resize bg-[#F5F1EB]"
            >
              {/* AFTER Image (Full background) */}
              <img
                src={activeCase.afterImage}
                alt={`After: ${activeCase.title}`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* AFTER Label Badge */}
              <div className="absolute top-5 right-5 z-20 bg-[#1A1A1A]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase">
                After
              </div>

              {/* BEFORE Image (Clipped by slider width) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`Before: ${activeCase.title}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                    height: '100%'
                  }}
                />

                {/* BEFORE Label Badge */}
                <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 text-[#1A1A1A] text-[11px] font-semibold tracking-widest uppercase">
                  Before
                </div>
              </div>

              {/* Dividing Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Vertical Hairline */}
                <div className="w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]" />

                {/* Circular Draggable Button */}
                <div className="absolute w-10 h-10 rounded-full bg-white text-[#1A1A1A] border-2 border-[#D4A7A1] shadow-xl flex items-center justify-center gap-0.5 pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <ArrowLeft className="w-3 h-3 text-[#1A1A1A]" />
                  <ArrowRight className="w-3 h-3 text-[#1A1A1A]" />
                </div>
              </div>

              {/* Subtle mobile hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md text-white/90 px-3.5 py-1 rounded-full text-[11px] font-medium tracking-wide pointer-events-none">
                Drag slider to compare results
              </div>
            </div>

            {/* Case Details Bar below Slider */}
            <div className="p-6 sm:p-8 bg-white border-t border-[#1A1A1A]/8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#BD8780] font-semibold">
                      {activeCase.category}
                    </span>
                    <span className="text-[#1A1A1A]/30">·</span>
                    <span className="text-xs text-[#1A1A1A]/60">{activeCase.timeframe}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                    {activeCase.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/75 max-w-2xl leading-relaxed">
                    {activeCase.description} {activeCase.details}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(`Hi SkinSpirit, I love the results in the ${activeCase.category} case study (${activeCase.title}). Can I book a consultation to discuss a similar natural result?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-sm cursor-pointer"
                >
                  <span>Book This Treatment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A7A1]" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
