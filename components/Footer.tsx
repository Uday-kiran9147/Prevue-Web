'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdSecurity, MdOpenInNew, MdSmartphone } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md overflow-hidden bg-white flex items-center justify-center">
                <Image src="/logo.png" alt="Prevue Logo" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Prevue</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              YouTube Creator Intelligence & 0:00–0:30 Script Retention Simulator. Test your hook hold before you press record.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3 font-mono">Product</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/#how-it-works-section" className="hover:text-white transition-colors">
                  Studio Protocol
                </Link>
              </li>
              <li>
                <Link href="/#simulator-section" className="hover:text-white transition-colors">
                  Retention Simulator
                </Link>
              </li>
              <li>
                <Link href="/#channel-graph-section" className="hover:text-white transition-colors">
                  Channel Graph Baseline
                </Link>
              </li>
              <li>
                <Link href="/#daily-briefings-section" className="hover:text-white transition-colors">
                  Daily Hook Blueprints
                </Link>
              </li>
              <li>
                <Link href="/#pricing-section" className="hover:text-white transition-colors">
                  Creator Pro Pricing
                </Link>
              </li>
            </ul>
          </div>


          {/* Legal & Compliance (Mandatory Routes) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <MdSecurity className="w-3.5 h-3.5 text-slate-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Account & Data Deletion
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1"
                >
                  YouTube Terms of Service <MdOpenInNew className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/policies/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1"
                >
                  Google Privacy Policy <MdOpenInNew className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Downloads */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Mobile Downloads</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Available on iOS (StoreKit 2) and Android (Google Play Billing). Subscriptions handled securely via RevenueCat.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MdSmartphone className="w-3.5 h-3.5" />
              <span>Get Mobile App</span>
            </button>
          </div>
        </div>

        {/* Mandatory YouTube API & Google Service Disclosures */}
        <div className="pt-6 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
            <p className="font-medium text-slate-300 mb-1">YouTube API Services Disclosure:</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Prevue uses the <strong>YouTube Data API v3</strong> to retrieve publicly available channel statistics, median view counts, and topic cluster metadata for user-specified creator handles. By using Prevue, you agree to be bound by the{' '}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                YouTube Terms of Service <MdOpenInNew className="w-2.5 h-2.5" />
              </a>{' '}
              and acknowledge that your data is processed in accordance with the{' '}
              <a
                href="https://www.google.com/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Google Privacy Policy <MdOpenInNew className="w-2.5 h-2.5" />
              </a>
              . Prevue does not access, store, or transmit private Google account credentials or non-public YouTube data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-2">
            <div>
              &copy; {new Date().getFullYear()} Prevue Technologies, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span>Apple App Store Guideline 5.1.1(v) Compliant</span>
              <span>•</span>
              <span>Google Play Policy Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
