'use client';

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import CurrencySwitcher from './CurrencySwitcher';

export default function AnnouncementBar() {
  return (
    <div className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left - Contact Info */}
          <div className="hidden md:flex items-center gap-4 text-gray-300">
            <a
              href="mailto:info@rushbyindustries.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs">info@rushbyindustries.com</span>
            </a>
            <a
              href="tel:+27123456789"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">+27 12 345 6789</span>
            </a>
          </div>

          {/* Currency Switcher (Mobile) */}
          <div className="md:hidden">
            <CurrencySwitcher align="left" />
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-xs text-gray-400 mr-2">Follow Us:</span>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
