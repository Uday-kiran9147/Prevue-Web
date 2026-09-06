'use client';

import React from 'react';
import Image from 'next/image';
import { MdClose, MdSecurity, MdCheckCircle, MdQrCode } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <MdClose className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm">
              <Image src="/logo.png" alt="Prevue" width={28} height={28} className="object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Get Prevue for Mobile</h3>
              <p className="text-xs text-slate-500">YouTube Script Retention Simulator</p>
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Test 0:00–0:30 hooks, access daily retention blueprints, and calibrate with your channel baseline right from your mobile device.
          </p>

          {/* Store Badges */}
          <div className="grid sm:grid-cols-2 gap-3">
            {/* iOS App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
            >
              <div className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <FaApple className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-slate-400 group-hover:text-slate-300">Download on</div>
                <div className="text-xs font-bold leading-tight">App Store</div>
                <div className="text-[9px] text-slate-500 group-hover:text-slate-300">iOS 16+</div>
              </div>
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
            >
              <div className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <IoLogoGooglePlaystore className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-semibold text-slate-400 group-hover:text-slate-300">Get it on</div>
                <div className="text-xs font-bold leading-tight">Google Play</div>
                <div className="text-[9px] text-slate-500 group-hover:text-slate-300">Android 12+</div>
              </div>
            </a>
          </div>

          {/* QR Code Quick Scan */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3.5">
            <div className="w-14 h-14 bg-white p-1 rounded-md border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
              <svg className="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v2h-4v-2zm0-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-6-2h2v2h-2v-2zm0 2h2v2h-2v-2zm6-8h2v2h-2V8zm-4 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2V6zm2 2h2v2h-2V8z" />
              </svg>
            </div>
            <div className="text-xs text-slate-600">
              <div className="font-semibold text-slate-900 flex items-center gap-1 mb-0.5">
                <MdQrCode className="w-3.5 h-3.5 text-slate-500" />
                Scan to install on phone
              </div>
              <p className="text-[11px] text-slate-500">Scan with your camera to begin your 7-day Creator Pro free trial.</p>
            </div>
          </div>

          {/* Store & Privacy Trust */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <MdSecurity className="w-3.5 h-3.5 text-slate-400" />
              YouTube Data API v3 Verified
            </span>
            <span className="flex items-center gap-1">
              <MdCheckCircle className="w-3.5 h-3.5 text-slate-400" />
              RevenueCat Protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
