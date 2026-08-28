'use client';

import React from 'react';
import { MdClose, MdPlayArrow, MdAutoAwesome, MdSecurity, MdCheckCircle, MdQrCode } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';;

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="h-2 bg-gradient-to-r from-red-500 via-amber-500 to-rose-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <MdClose className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white shadow-md">
              <MdAutoAwesome className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Get Prevue for Mobile</h3>
              <p className="text-sm text-slate-500">YouTube Creator Intelligence & Pre-Flight Simulator</p>
            </div>
          </div>

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Run your 0:00–0:30 retention simulations, generate Daily Briefings, and connect your YouTube Data API channel baseline right on your phone.
          </p>

          {/* QR Code and App Badges layout */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* iOS App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-black hover:text-white hover:border-slate-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <FaApple className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 group-hover:text-slate-300">Download on</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
                <div className="text-[10px] text-red-600 font-medium group-hover:text-red-400">iOS 16+ • StoreKit 2</div>
              </div>
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-black hover:text-white hover:border-slate-900 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <MdPlayArrow className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 group-hover:text-slate-300">Get it on</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
                <div className="text-[10px] text-red-600 font-medium group-hover:text-red-400">Android 12+ • Play Billing</div>
              </div>
            </a>
          </div>

          {/* QR Code Quick Scan */}
          <div className="p-4 rounded-xl bg-studio-card border border-studio-border flex items-center gap-4">
            <div className="w-16 h-16 bg-white p-1.5 rounded-lg border border-slate-200 shadow-inner flex items-center justify-center shrink-0">
              <svg className="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v2h-4v-2zm0-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-6-2h2v2h-2v-2zm0 2h2v2h-2v-2zm6-8h2v2h-2V8zm-4 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2V6zm2 2h2v2h-2V8z" />
              </svg>
            </div>
            <div className="text-xs text-slate-600">
              <div className="font-semibold text-black flex items-center gap-1.5 mb-1">
                <MdQrCode className="w-3.5 h-3.5 text-slate-500" />
                Scan to install directly on mobile
              </div>
              Point your phone camera to download Prevue and start your 7-day Creator Pro free trial.
            </div>
          </div>

          {/* Security Guarantee */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <MdSecurity className="w-3.5 h-3.5 text-red-600" />
              YouTube Data API v3 Verified
            </span>
            <span className="flex items-center gap-1">
              <MdCheckCircle className="w-3.5 h-3.5 text-red-600" />
              RevenueCat Protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
