'use client';

import React from 'react';
import { MdArrowForward, MdSecurity, MdCheckCircle, MdTrendingUp } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-medium text-slate-800">YouTube Script Retention Simulator</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono text-[11px]">0:00–0:30 Pre-Flight</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Fix your first 30 seconds{' '}
            <span className="text-red-600 inline-block">before you press record.</span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Most viewers click away in the opening 15 seconds. Prevue tests your script draft against proven audience retention curves, flags drop-off traps, and restructures your hook for maximum hold.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={scrollToDemo}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all active:scale-[0.99]"
            >
              <span>Test Your Script in Simulator</span>
              <MdArrowForward className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200/90 shadow-subtle transition-all flex items-center justify-center gap-2"
            >
              <FaApple className="w-4 h-4 text-slate-900" />
              <span>Get Mobile App</span>
            </button>
          </div>

          {/* Trust proof indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <MdSecurity className="w-3.5 h-3.5 text-slate-400" />
              YouTube Data API v3 Verified
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <MdCheckCircle className="w-3.5 h-3.5 text-slate-400" />
              RevenueCat Subscriptions
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-amber-500 font-bold">★ 4.9</span>
              from 1,800+ YouTube Creators
            </span>
          </div>
        </div>

        {/* Hero Preview Card / Live Simulator Teaser */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-xl bg-white p-4 sm:p-6 shadow-studio border border-slate-200/80 relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs text-slate-600 font-medium">0:00–0:30 Second-by-Second Hold Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200/60">
                  Calibrated Baseline
                </span>
              </div>
            </div>

            {/* Teaser Dual Column */}
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Radial Hook Score */}
              <div className="md:col-span-4 bg-slate-50/80 rounded-lg p-5 border border-slate-200/70 flex flex-col items-center justify-center text-center">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1">Pre-Flight Hook Score</div>
                
                <div className="relative w-32 h-32 flex items-center justify-center my-1">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-slate-200/80"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-emerald-600 transition-all duration-700"
                      strokeWidth="7"
                      strokeDasharray="251.2"
                      strokeDashoffset="20.1"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">9.2</span>
                    <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">High Retention</span>
                  </div>
                </div>

                <div className="w-full pt-3 mt-1 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Pacing</div>
                    <div className="text-xs font-semibold text-slate-800 font-mono">148 WPM</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">0:30 Hold</div>
                    <div className="text-xs font-semibold text-emerald-700 font-mono">76% of Viewers</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Retention Waveform preview */}
              <div className="md:col-span-8 bg-slate-900 text-white rounded-lg p-5 border border-slate-800 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MdTrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-200">Second-by-Second Audience Hold</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                    +38% Above Niche Median
                  </span>
                </div>

                <div className="relative h-24 w-full flex items-end justify-between gap-1 pt-4 pb-2 px-1 bg-slate-950/90 rounded-md border border-slate-800">
                  {[98, 97, 95, 94, 92, 90, 88, 86, 85, 84, 83, 81, 80, 78, 77, 76].map((pct, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                      <div
                        className="w-full rounded-t bg-emerald-500/90 group-hover:bg-emerald-400 transition-all"
                        style={{ height: `${(pct / 100) * 60}px` }}
                      />
                      <span className="text-[8px] font-mono text-slate-500">
                        {idx * 2}s
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Immediate value promise delivered at 0:04</span>
                  </div>
                  <button
                    onClick={scrollToDemo}
                    className="text-slate-300 hover:text-white font-medium text-xs underline underline-offset-2 transition-colors"
                  >
                    Open Simulator Studio →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

