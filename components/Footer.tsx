'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdSecurity, MdOpenInNew, MdSmartphone, MdPlayArrow } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';;

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="bg-black text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Prevue Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-extrabold text-white tracking-tight">Prevue</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              YouTube Creator Intelligence & Pre-Flight Retention Simulator. Optimize your first 30 seconds before you hit record.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenDownload}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Download on Apple App Store"
              >
                <FaApple className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDownload}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Download on Google Play"
              >
                <MdPlayArrow className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#simulator-section" className="hover:text-red-400 transition-colors">
                  Pre-Flight Simulator
                </Link>
              </li>
              <li>
                <Link href="/#channel-graph-section" className="hover:text-red-400 transition-colors">
                  Channel Graph Baseline
                </Link>
              </li>
              <li>
                <Link href="/#daily-briefings-section" className="hover:text-red-400 transition-colors">
                  Daily Prescriptive Briefings
                </Link>
              </li>
              <li>
                <Link href="/#pricing-section" className="hover:text-red-400 transition-colors">
                  Creator Pro Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (Mandatory Routes) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">Legal & Privacy</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <MdSecurity className="w-4 h-4 text-red-500" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Delete Account & Data
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-slate-100 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1"
                >
                  YouTube Terms of Service <MdOpenInNew className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/policies/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1"
                >
                  Google Privacy Policy <MdOpenInNew className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile & Security */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">Mobile Downloads</h4>
            <p className="text-xs text-slate-400 mb-3">
              Available on iOS (StoreKit 2) and Android (Google Play Billing). Subscriptions handled seamlessly via RevenueCat.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full py-2.5 px-3 rounded-xl bg-red-500 hover:bg-red-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-red-500/10"
            >
              <MdSmartphone className="w-3.5 h-3.5" />
              Download Prevue App
            </button>
          </div>
        </div>

        {/* Mandatory YouTube API & Google Service Disclosures */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-black/60 border border-slate-800">
            <p className="font-semibold text-slate-300 mb-1">Mandatory YouTube API Services Disclosure:</p>
            <p>
              Prevue uses the <strong>YouTube Data API v3</strong> to retrieve publicly available channel statistics, median view counts, and topic cluster metadata for user-specified creator handles. By using Prevue, you agree to be bound by the{' '}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                YouTube Terms of Service <MdOpenInNew className="w-2.5 h-2.5" />
              </a>{' '}
              and acknowledge that your data is processed in accordance with the{' '}
              <a
                href="https://www.google.com/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Google Privacy Policy <MdOpenInNew className="w-2.5 h-2.5" />
              </a>
              . Prevue does not access, store, or transmit private Google account credentials, OAuth tokens, or non-public YouTube data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 pt-2">
            <div>
              &copy; {new Date().getFullYear()} Prevue Technologies, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span>Apple App Store Guideline 5.1.1(v) Compliant</span>
              <span>•</span>
              <span>Google Play Policy Verified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
