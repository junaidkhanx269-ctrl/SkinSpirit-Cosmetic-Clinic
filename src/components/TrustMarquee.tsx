import React from 'react';

export const TrustMarquee: React.FC = () => {
  const items = [
    '★★★★★ 200+ 5-Star Reviews',
    'AHPRA Registered',
    'TGA Approved Products',
    'Sydney CBD · 650 George St',
    '10+ Years Injectable Expertise',
    'Private Consultation Suites',
    'Doctor & Senior Nurse Led'
  ];

  return (
    <div className="w-full bg-[#1A1A1A] text-[#FAF8F5] py-4 border-y border-neutral-800 overflow-hidden relative select-none">
      {/* Edge gradient fade masks for clean luxury marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render 3 repetitions for seamless infinite scroll */}
        {[...Array(3)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-8 sm:space-x-12 shrink-0 pr-8 sm:pr-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8 sm:space-x-12 text-xs sm:text-sm font-medium tracking-wider uppercase">
                <span className={item.includes('★★★★★') ? 'text-[#D4A7A1] font-semibold' : 'text-[#FAF8F5]/90'}>
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A7A1]/50" aria-hidden="true" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
