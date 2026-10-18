import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { ArrowUpRight, Check, Sparkles, MessageCircle } from 'lucide-react';

export const ConsultationFinder: React.FC = () => {
  const [goal, setGoal] = useState<string>('lips');
  const [timing, setTiming] = useState<string>('after-hours');

  const goals = [
    { id: 'lips', label: 'Lip Hydration & Natural Volume', tag: 'Dermal Fillers' },
    { id: 'lines', label: 'Forehead & Expression Line Smoothing', tag: 'Anti-Wrinkle' },
    { id: 'jaw', label: 'Jawline Contouring & Masseter Slimming', tag: 'Aesthetic Sculpt' },
    { id: 'skin', label: 'Glass Skin, Texture & Collagen Induction', tag: 'Dermapen 4' },
  ];

  const timings = [
    { id: 'lunch', label: 'Lunchtime Express (12PM – 2PM)' },
    { id: 'after-hours', label: 'After-Hours (5PM – 7PM)' },
    { id: 'saturday', label: 'Saturday Weekend Suite (11AM – 5PM)' },
  ];

  const getCustomUrl = () => {
    const selectedGoal = goals.find(g => g.id === goal)?.label;
    const selectedTime = timings.find(t => t.id === timing)?.label;
    const message = `Hello SkinSpirit Clinic! I'm interested in ${selectedGoal} and would prefer an appointment time around ${selectedTime} at 650 George St. Could you let me know upcoming availability?`;
    return getWhatsAppLink(message);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#1A1A1A]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="luxury-card p-8 sm:p-12 bg-[#F5F1EB]/60 border border-[#1A1A1A]/8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#BD8780] font-semibold">
              Instant Treatment Matcher
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A]">
              Personalized Consultation Concierge
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70">
              Select your primary aesthetic focus and preferred schedule for an instant direct WhatsApp booking quote.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1: Goal */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 font-semibold block">
                1. What is your primary aesthetic focus?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      goal === g.id
                        ? 'bg-white border-[#1A1A1A] shadow-sm'
                        : 'bg-white/60 border-black/5 hover:bg-white hover:border-black/20'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]">{g.label}</p>
                      <span className="text-[11px] font-mono text-[#BD8780]">{g.tag}</span>
                    </div>
                    {goal === g.id && (
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Preferred Time */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 font-semibold block">
                2. Preferred appointment window at 650 George St
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timings.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTiming(t.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      timing === t.id
                        ? 'bg-white border-[#1A1A1A] shadow-sm'
                        : 'bg-white/60 border-black/5 hover:bg-white hover:border-black/20'
                    }`}
                  >
                    <span className="text-xs font-medium text-[#1A1A1A]">{t.label}</span>
                    {timing === t.id && (
                      <span className="w-4 h-4 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Launch WhatsApp CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1A1A1A]/8">
              <div className="text-xs text-[#1A1A1A]/70 text-center sm:text-left">
                <span>Free confidential aesthetic assessment · No obligation · Replied in ~10 mins</span>
              </div>

              <a
                href={getCustomUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-md font-mono"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Send Enquiry on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4A7A1]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
