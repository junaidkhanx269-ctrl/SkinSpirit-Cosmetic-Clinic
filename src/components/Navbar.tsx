import React, { useState } from 'react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPricing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPricing }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1A1A1A]/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand wordmark in luxury serif */}
          <a 
            href="#" 
            className="flex flex-col tracking-tight group whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl sm:text-[26px] font-semibold text-[#1A1A1A] tracking-[-0.02em]">
              SkinSpirit
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1A1A]/60 font-medium -mt-0.5">
              Cosmetic Clinic · Sydney
            </span>
          </a>

          {/* Zone 2: 4 single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#1A1A1A]/75">
            <a 
              href="#treatments" 
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4A7A1] hover:after:w-full after:transition-all"
            >
              Treatments
            </a>
            <a 
              href="#why-george-st" 
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4A7A1] hover:after:w-full after:transition-all"
            >
              Why 650 George St
            </a>
            <a 
              href="#results" 
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4A7A1] hover:after:w-full after:transition-all"
            >
              Natural Results
            </a>
            <button 
              onClick={onOpenPricing}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4A7A1] hover:after:w-full after:transition-all cursor-pointer text-left"
            >
              Price Guide
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap border border-black/10"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A7A1]" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-[#1A1A1A] rounded-lg hover:bg-[#F5F1EB] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#1A1A1A]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#1A1A1A]">
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 flex items-center justify-between"
            >
              <span>Treatments</span>
              <span className="text-xs text-[#D4A7A1]">01</span>
            </a>
            <a
              href="#why-george-st"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 flex items-center justify-between"
            >
              <span>Why 650 George St</span>
              <span className="text-xs text-[#D4A7A1]">02</span>
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1A1A1A]/5 flex items-center justify-between"
            >
              <span>Natural Results</span>
              <span className="text-xs text-[#D4A7A1]">03</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricing();
              }}
              className="py-2 border-b border-[#1A1A1A]/5 flex items-center justify-between text-left cursor-pointer w-full"
            >
              <span>Complete Price Guide</span>
              <span className="text-xs text-[#D4A7A1]">04</span>
            </button>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full shadow-sm"
            >
              <span>Book Consultation on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4A7A1]" />
            </a>
            <p className="text-center text-xs text-[#1A1A1A]/60 mt-3">
              {CLINIC_INFO.addressShort} · Open {CLINIC_INFO.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
