'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useState } from 'react';

export default function HeaderPremium() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/premium" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <img
                  src="/images/logo.png"
                  alt="Rushby Industries"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-slate-900 tracking-tight">RUSHBY</div>
              <div className="text-xs text-slate-500 -mt-1 tracking-wider">INDUSTRIES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="/premium"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              Shop All
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/triggers"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              Triggers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/magwells"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              Magwells
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/compatibility"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              Compatibility
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 hidden sm:flex"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <Link href="/premium" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                Shop All
              </Link>
              <Link href="/triggers" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                Triggers
              </Link>
              <Link href="/magwells" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                Magwells
              </Link>
              <Link href="/compatibility" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                Compatibility Guide
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900 py-2">
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
