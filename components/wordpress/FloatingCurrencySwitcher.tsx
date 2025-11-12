'use client';

import { useState, useEffect, useRef } from 'react';
import { DollarSign, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
}

const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
];

export default function FloatingCurrencySwitcher() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(CURRENCIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load saved currency from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('selectedCurrency');
    if (saved) {
      const currency = CURRENCIES.find(c => c.code === saved);
      if (currency) setSelectedCurrency(currency);
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('selectedCurrency', currency.code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="sm:hidden fixed bottom-6 right-6 z-40">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        aria-label="Change currency"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-lg leading-none">{selectedCurrency.flag}</span>
          <span className="text-[10px] font-bold leading-none mt-0.5">{selectedCurrency.code}</span>
        </div>
      </motion.button>

      {/* Currency Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 min-w-[240px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
              <span className="text-sm font-semibold text-gray-900">Select Currency</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Currency List */}
            <div className="max-h-64 overflow-y-auto">
              {CURRENCIES.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => handleCurrencyChange(currency)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors ${
                    selectedCurrency.code === currency.code ? 'bg-red-50' : ''
                  }`}
                >
                  <span className="text-2xl">{currency.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-gray-900">{currency.code}</div>
                    <div className="text-xs text-gray-600">{currency.name}</div>
                  </div>
                  {selectedCurrency.code === currency.code && (
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 bg-gray-50 px-3 py-2.5">
              <p className="text-[10px] text-gray-600 text-center leading-tight">
                <span className="italic">These conversions are estimates.</span>
                <br />
                <span className="font-medium">All payments are collected in ZAR</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
