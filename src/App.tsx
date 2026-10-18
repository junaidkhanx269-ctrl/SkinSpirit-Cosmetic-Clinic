/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { ServicesSection } from './components/ServicesSection';
import { WhyGeorgeSt } from './components/WhyGeorgeSt';
import { ResultsSlider } from './components/ResultsSlider';
import { ConsultationFinder } from './components/ConsultationFinder';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PriceModal } from './components/PriceModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { Treatment } from './types';

export default function App() {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleOpenPricing = () => {
    setIsPriceModalOpen(true);
  };

  const handleClosePricing = () => {
    setIsPriceModalOpen(false);
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleCloseTreatmentDetail = () => {
    setSelectedTreatment(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased selection:bg-[#D4A7A1] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenPricing={handleOpenPricing} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenPricing={handleOpenPricing} />

        {/* 2. Trust Marquee Bar */}
        <TrustMarquee />

        {/* 3. Services Section */}
        <ServicesSection 
          onSelectTreatment={handleSelectTreatment} 
          onOpenPricing={handleOpenPricing} 
        />

        {/* 4. Why 650 George St Section (Map + 3 points + Suite photography) */}
        <WhyGeorgeSt />

        {/* 5. Results Section (Before/After Slider) */}
        <ResultsSlider />

        {/* Interactive Consultation Concierge */}
        <ConsultationFinder />

        {/* Patient Reviews & Social Proof */}
        <ReviewsSection />
      </main>

      {/* 6. Footer */}
      <Footer onOpenPricing={handleOpenPricing} />

      {/* Floating Pulsing WhatsApp Button (Always Visible) */}
      <FloatingWhatsApp />

      {/* Interactive Price Guide Modal */}
      <PriceModal 
        isOpen={isPriceModalOpen} 
        onClose={handleClosePricing} 
      />

      {/* Treatment Deep-Dive Specification Modal */}
      <TreatmentDetailModal 
        treatment={selectedTreatment} 
        onClose={handleCloseTreatmentDetail} 
      />
    </div>
  );
}
