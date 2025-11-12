'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
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

interface CurrencySwitcherProps {
  align?: 'left' | 'right';
}

export default function CurrencySwitcher({ align = 'right' }: CurrencySwitcherProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(CURRENCIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load saved currency from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('selectedCurrency');
    if (saved) {
      const currency = CURRENCIES.find(c => c.code === saved);
      if (currency) setSelectedCurrency(currency);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('selectedCurrency', currency.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-sm"
        aria-label="Select currency"
      >
        <span className="hidden sm:inline">{selectedCurrency.flag}</span>
        <span className="font-medium">{selectedCurrency.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${align === 'left' ? 'left-0' : 'right-0'} top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[200px] z-[60]`}
          >
            {/* Currency List */}
            <div className="py-2">
              {CURRENCIES.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => handleCurrencyChange(currency)}
                  className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-100 transition-colors ${
                    selectedCurrency.code === currency.code ? 'bg-gray-50' : ''
                  }`}
                >
                  <span className="text-xl">{currency.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-gray-900">{currency.code}</div>
                    <div className="text-xs text-gray-600">{currency.name}</div>
                  </div>
                  <span className="text-sm text-gray-500">{currency.symbol}</span>
                </button>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 bg-gray-50 px-3 py-2">
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
