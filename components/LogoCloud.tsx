'use client';

import React from 'react';
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Calibrated with Industry Intelligence &amp; Creator Formats
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity">
          
          {/* YouTube Data API mark */}
          <div className="flex items-center gap-2 font-bold tracking-tight text-slate-800 hover:text-slate-950 transition-colors">
            <FaYoutube className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-tight">YouTube API v3</span>
          </div>

          {/* RevenueCat mark */}
          <div className="flex items-center gap-2 font-bold text-slate-800 hover:text-slate-950 transition-colors">
            <div className="w-4 h-4 rounded-md bg-red-600 flex items-center justify-center text-white text-[9px] font-black shrink-0">
              R
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-tight">RevenueCat</span>
          </div>

          {/* Spotify Video */}
          <div className="flex items-center gap-2 font-bold text-slate-800 hover:text-slate-950 transition-colors">
            <FaSpotify className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-tight">Spotify Video</span>
          </div>

          {/* Apple StoreKit */}
          <div className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-slate-950 transition-colors">
            <FaApple className="w-4 h-4 text-slate-900 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-tight">StoreKit 2</span>
          </div>

          {/* Google Play Billing */}
          <div className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-slate-950 transition-colors">
            <SiGooglecloud className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-tight">Play Billing</span>
          </div>

          {/* Creator Studio Labs */}
          <div className="flex items-center text-slate-800 hover:text-slate-950 transition-colors">
            <span className="text-[11px] font-bold font-mono tracking-wider text-slate-700">10M+ AUDIENCE</span>
          </div>

        </div>
      </div>
    </section>
  );
};

