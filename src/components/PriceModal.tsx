import React, { useState } from 'react';
import { PRICE_LIST, CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';
import { PriceItem } from '../types';
import { X, ArrowUpRight, Check, Sparkles, MessageCircle, Info } from 'lucide-react';

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriceModal: React.FC<PriceModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'anti-wrinkle' | 'fillers' | 'skin' | 'packages'>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'anti-wrinkle', label: 'Anti-Wrinkle (From $149)' },
    { id: 'fillers', label: 'Dermal Fillers (From $299)' },
    { id: 'skin', label: 'Advanced Skin (From $199)' },
    { id: 'packages', label: 'Curated Bundles' }
  ];

  const filteredPrices = selectedCategory === 'all' 
    ? PRICE_LIST 
    : PRICE_LIST.filter(item => item.category === selectedCategory);

  const toggleItemSelection = (itemName: string) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(name => name !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((acc, itemName) => {
      const found = PRICE_LIST.find(p => p.name === itemName);
      if (!found) return acc;
      const num = parseInt(found.price.replace(/[^0-9]/g, ''), 10);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
  };

  const getCustomWhatsAppUrl = () => {
    if (selectedItems.length === 0) {
      return getWhatsAppLink("Hi SkinSpirit, I would like to book a consultation at 650 George St to discuss my treatment plan.");
    }
    const itemsList = selectedItems.join(', ');
    const msg = `Hi SkinSpirit Clinic, I viewed your price guide and would like to book a consultation at 650 George St for: ${itemsList}.`;
    return getWhatsAppLink(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-[24px] shadow-2xl border border-white/40 overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#1A1A1A]/8 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#BD8780] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Medical Pricing · Sydney CBD</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
              SkinSpirit Treatment &amp; Price Guide
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70">
              650 George St, Sydney NSW 2000 · All procedures performed by AHPRA-registered clinicians.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-neutral-500 hover:text-neutral-900 transition-colors shrink-0"
            aria-label="Close Price Guide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Tabs Filter */}
        <div className="px-6 sm:px-8 py-3 bg-white border-b border-[#1A1A1A]/8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-[#F5F1EB] text-[#1A1A1A]/75 hover:bg-[#ECE5DA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Table Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-3 flex-1 divide-y divide-[#1A1A1A]/5">
          {filteredPrices.map((item, index) => {
            const isSelected = selectedItems.includes(item.name);
            const itemWhatsApp = getWhatsAppLink(
              `Hi SkinSpirit, I would like to book ${item.name} (${item.price}) at 650 George St.`
            );

            return (
              <div 
                key={index}
                className={`pt-3.5 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group transition-colors rounded-xl px-2.5 ${
                  isSelected ? 'bg-[#F5F1EB]/80' : 'hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleItemSelection(item.name)}
                    className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                      isSelected 
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' 
                        : 'border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50 bg-white'
                    }`}
                    title="Select to quote on WhatsApp"
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-[#1A1A1A]">
                        {item.name}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-mono tracking-wider uppercase bg-[#EBD6D2] text-[#8C4A42] px-2 py-0.5 rounded-full font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    {item.specification && (
                      <p className="text-xs text-[#1A1A1A]/60 font-normal">
                        {item.specification}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 pl-8 sm:pl-0">
                  <span className="font-mono text-base font-semibold text-[#1A1A1A] tabular-nums">
                    {item.price}
                  </span>

                  <a
                    href={itemWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1A1A1A] bg-white border border-[#1A1A1A]/15 hover:border-[#1A1A1A] rounded-full transition-colors whitespace-nowrap"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3 h-3 text-[#BD8780]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Sticky Action & Multi-Select Drawer */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#1A1A1A]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#1A1A1A]">
            <Info className="w-4 h-4 text-[#BD8780] shrink-0" />
            <span>
              {selectedItems.length > 0 ? (
                <>
                  <strong className="font-semibold">{selectedItems.length} treatment(s) selected</strong> · Estimated total:{' '}
                  <span className="font-mono font-bold text-sm text-[#1A1A1A]">${calculateTotal()}</span>
                </>
              ) : (
                'Tick treatments above to calculate investment or book directly on WhatsApp.'
              )}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {selectedItems.length > 0 && (
              <button
                onClick={() => setSelectedItems([])}
                className="text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] underline px-2 cursor-pointer"
              >
                Clear
              </button>
            )}

            <a
              href={getCustomWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A1A] rounded-full hover:bg-black transition-all shadow-md whitespace-nowrap font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {selectedItems.length > 0 
                  ? `Book Selected (${selectedItems.length}) on WhatsApp` 
                  : 'Book via WhatsApp'}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A7A1]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
