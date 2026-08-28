'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdAutoAwesome, MdMenu, MdClose, MdSmartphone, MdShowChart, MdChevronRight } from 'react-icons/md';;

interface HeaderProps {
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-studio-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <Image src="/logo.png" alt="Prevue Logo" width={36} height={36} className="rounded-xl shadow-md group-hover:scale-105 transition-transform" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-black font-sans">Prevue</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
                  Pre-Flight
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium hidden sm:block">YouTube Creator Intelligence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/#simulator-section"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100/70 rounded-lg transition-colors flex items-center gap-1"
            >
              <MdShowChart className="w-3.5 h-3.5 text-red-600" />
              Retention Simulator
            </Link>
            <Link
              href="/#channel-graph-section"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Channel Graph
            </Link>
            <Link
              href="/#daily-briefings-section"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Daily Briefings
            </Link>
            <Link
              href="/#pricing-section"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100/70 rounded-lg transition-colors"
            >
              Pricing
            </Link>
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <Link
              href="/privacy"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                pathname === '/privacy'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/delete-account"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                pathname === '/delete-account'
                  ? 'text-rose-700 bg-rose-50 font-semibold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
              }`}
            >
              Account Deletion
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <MdSmartphone className="w-4 h-4 text-red-400" />
              <span>Get App</span>
              <span className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-red-400 font-mono">iOS & Android</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-black hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-3">
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="/#simulator-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm text-left"
              >
                <span className="flex items-center gap-2">
                  <MdShowChart className="w-4 h-4 text-red-600" />
                  Retention Simulator
                </span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#channel-graph-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm text-left"
              >
                <span>Channel Graph Baseline</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#daily-briefings-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm text-left"
              >
                <span>Daily Briefings</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/#pricing-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm text-left"
              >
                <span>Creator Pro Pricing</span>
                <MdChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2">Compliance & Policies</div>
              <Link
                href="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center justify-between"
              >
                <span>Privacy Policy (YouTube API Disclosed)</span>
                <MdChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/delete-account"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 text-left flex items-center justify-between"
              >
                <span>Account & Data Deletion Portal</span>
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
                className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MdSmartphone className="w-4 h-4 text-red-400" />
                <span>Get Prevue App</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
