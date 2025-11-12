'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-zinc-400">
                Get exclusive deals, new product launches, and installation tips delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-black font-semibold whitespace-nowrap">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-zinc-500 mt-2">
                Get 10% off your first order when you subscribe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Brand & Description */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white/5">
              <img
                src="/images/logo.png"
                alt="Rushby Industries Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <div className="text-lg font-bold text-white">RUSHBY</div>
              <div className="text-xs text-zinc-500 -mt-1">INDUSTRIES</div>
            </div>
          </Link>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Precision-engineered CZ firearm accessories from Cape Town, South Africa.
          </p>
        </div>

        {/* Support Links */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider text-center">
            Support
          </h4>
          <nav className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8">
            <Link href="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
            <Link href="/shipping" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Shipping Info
            </Link>
            <Link href="/returns" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Returns Policy
            </Link>
            <Link href="/faq" className="text-zinc-400 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
            <Link href="/quality" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Quality Guarantee
            </Link>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-12">
          <Link
            href="https://facebook.com/rushbyindustries"
            className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-amber-600 hover:bg-zinc-800 transition-colors"
          >
            <Facebook className="w-4 h-4 text-zinc-400" />
          </Link>
          <Link
            href="https://instagram.com/rushbyindustries"
            className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-amber-600 hover:bg-zinc-800 transition-colors"
          >
            <Instagram className="w-4 h-4 text-zinc-400" />
          </Link>
          <Link
            href="https://youtube.com/channel/UCDgCnlBaiViGkX_e4pFIGRQ"
            className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-amber-600 hover:bg-zinc-800 transition-colors"
          >
            <Youtube className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-500">
              © 2025 Rushby Industries. All rights reserved. | Reg: 2020/053579/07
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-zinc-500 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
