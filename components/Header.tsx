'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      {/* Top Bar - Trust Indicators */}
      <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border-b border-amber-900/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Precision Engineered in South Africa
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Lifetime Warranty</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform overflow-hidden bg-white/5">
                <img
                  src="/images/logo.png"
                  alt="Rushby Industries Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white tracking-tight">RUSHBY</div>
              <div className="text-xs text-zinc-400 -mt-1">INDUSTRIES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Shop
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
                By Model
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link href="/shop/p07" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">CZ P07</Link>
                  <Link href="/shop/p09" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">CZ P09</Link>
                  <Link href="/shop/shadow-2" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Shadow 2</Link>
                  <Link href="/shop/omega" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Omega P01</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
                By Category
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link href="/shop/triggers" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Triggers</Link>
                  <Link href="/shop/magwells" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Magwells</Link>
                  <Link href="/shop/springs" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Spring Kits</Link>
                  <Link href="/shop/performance" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Performance Upgrades</Link>
                  <Link href="/shop/magazine" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded">Magazine Extensions</Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <Link href="/account" className="hidden sm:block text-zinc-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-zinc-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <Input
                    type="search"
                    placeholder="Search for triggers, magwells, springs..."
                    className="w-full pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden border-t border-zinc-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/shop" className="block text-sm font-medium text-zinc-300 hover:text-white py-2">
                Shop All
              </Link>
              <div className="border-l-2 border-zinc-800 pl-4 space-y-2">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">By Model</div>
                <Link href="/shop/p07" className="block text-sm text-zinc-300 hover:text-white py-1">CZ P07</Link>
                <Link href="/shop/p09" className="block text-sm text-zinc-300 hover:text-white py-1">CZ P09</Link>
                <Link href="/shop/shadow-2" className="block text-sm text-zinc-300 hover:text-white py-1">Shadow 2</Link>
              </div>
              <div className="border-l-2 border-zinc-800 pl-4 space-y-2">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">By Category</div>
                <Link href="/shop/triggers" className="block text-sm text-zinc-300 hover:text-white py-1">Triggers</Link>
                <Link href="/shop/magwells" className="block text-sm text-zinc-300 hover:text-white py-1">Magwells</Link>
                <Link href="/shop/springs" className="block text-sm text-zinc-300 hover:text-white py-1">Spring Kits</Link>
              </div>
              <Link href="/about" className="block text-sm font-medium text-zinc-300 hover:text-white py-2">
                About
              </Link>
              <Link href="/contact" className="block text-sm font-medium text-zinc-300 hover:text-white py-2">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
