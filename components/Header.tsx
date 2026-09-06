'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdMenu, MdClose, MdChevronRight, MdSmartphone } from 'react-icons/md';

interface HeaderProps {
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm flex items-center justify-center">
              <Image src="/logo.png" alt="Prevue" width={32} height={32} className="w-full h-full object-contain" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-slate-900">Prevue</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                Retention Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            <Link
              href="/#how-it-works-section"
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Protocol
            </Link>
            <Link
              href="/#simulator-section"
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Simulator
            </Link>
            <Link
              href="/#channel-graph-section"
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Channel Graph
            </Link>
            <Link
              href="/#daily-briefings-section"
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Hook Blueprints
            </Link>
            <Link
              href="/#pricing-section"
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Pricing
            </Link>
            <div className="h-3.5 w-px bg-slate-200 mx-1" />
            <Link
              href="/privacy"
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                pathname === '/privacy'
                  ? 'text-slate-900 bg-slate-100 font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Privacy
            </Link>
            <Link
              href="/delete-account"
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                pathname === '/delete-account'
                  ? 'text-rose-600 bg-rose-50 font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Data Deletion
            </Link>
          </nav>


          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-98"
            >
              <MdSmartphone className="w-4 h-4 text-slate-300" />
              <span>Get Mobile App</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <MdClose className="w-5 h-5" /> : <MdMenu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xl space-y-3">
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="/#how-it-works-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-xs text-left"
              >
                <span>Studio Protocol</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#simulator-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-xs text-left"
              >
                <span>Retention Simulator</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/#channel-graph-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-xs text-left"
              >
                <span>Channel Graph Baseline</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#daily-briefings-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-xs text-left"
              >
                <span>Hook Blueprints</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#pricing-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-xs text-left"
              >
                <span>Creator Pro Pricing</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2">Store Compliance</div>
              <Link
                href="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center justify-between"
              >
                <span>Privacy Policy</span>
                <MdChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/delete-account"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 text-left flex items-center justify-between"
              >
                <span>Account & Data Deletion</span>
                <MdChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/terms"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center justify-between"
              >
                <span>Terms of Service</span>
                <MdChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MdSmartphone className="w-4 h-4" />
                <span>Get Mobile App</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

