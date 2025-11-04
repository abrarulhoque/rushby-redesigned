'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderWP() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-700 shadow-md">
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/wordpress-style" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform overflow-hidden bg-white/10">
                <img
                  src="/images/logo.png"
                  alt="Rushby Industries Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white tracking-tight">RUSHBY</div>
              <div className="text-xs text-gray-300 -mt-1">INDUSTRIES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/wordpress-style" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              HOME
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              SHOP
            </Link>
            <Link href="/account" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              MY ACCOUNT
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <Link href="/account" className="hidden sm:block text-gray-300 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white transition-colors"
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
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search for triggers, magwells, springs..."
                    className="w-full pl-10 bg-white border-gray-300 text-gray-900"
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
            className="lg:hidden overflow-hidden border-t border-gray-600 bg-gray-700"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/wordpress-style" className="block text-sm font-medium text-gray-200 hover:text-white py-2">
                HOME
              </Link>
              <Link href="/shop" className="block text-sm font-medium text-gray-200 hover:text-white py-2">
                SHOP
              </Link>
              <Link href="/account" className="block text-sm font-medium text-gray-200 hover:text-white py-2">
                MY ACCOUNT
              </Link>
              <Link href="/contact" className="block text-sm font-medium text-gray-200 hover:text-white py-2">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
