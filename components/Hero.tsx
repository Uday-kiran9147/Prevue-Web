'use client';

import React from 'react';
import { MdSecurity, MdArrowForward, MdShowChart, MdTrendingUp, MdCheckCircle } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';;

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      {/* Ambient Studio Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[350px] bg-gradient-to-tr from-amber-100/40 via-red-100/30 to-rose-100/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-studio-sm text-xs font-semibold text-slate-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>Prevue 2.0 Pre-Flight Simulator Live</span>
            <span className="text-slate-300">•</span>
            <span className="text-red-700 font-mono">Hook Score Engine</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.1]">
            Simulate YouTube Retention{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-600 to-teal-700 bg-clip-text text-transparent">
                Before You Film.
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -rotate-1 -z-0 rounded" />
            </span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Stop guessing your first 30 seconds. Run your YouTube script through Prevue’s{' '}
            <strong className="text-black font-semibold">0:00–0:30 retention hazard simulator</strong>, detect early drop-off points, and apply 1-click prescriptive script fixes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={scrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all group active:scale-95"
            >
              <MdShowChart className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
              <span>Test Interactive Simulator</span>
              <MdArrowForward className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <FaApple className="w-5 h-5 text-black" />
              <span>Get Mobile App</span>
            </button>
          </div>

          {/* Trust proof indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <MdSecurity className="w-4 h-4 text-red-600" />
              YouTube Data API v3 Verified
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <MdCheckCircle className="w-4 h-4 text-red-600" />
              RevenueCat In-App Subscriptions
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-500 font-bold">★ 4.9</span>
              from 1,800+ YouTube Creators
            </span>
          </div>
        </div>

        {/* Hero Preview Card / Live Simulator Teaser */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl studio-glass p-3 sm:p-5 shadow-studio-lg border border-slate-200/90 relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-500 font-medium">prevue_flight_deck // 0:00–0:30 retention radar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono font-semibold">
                  ACTIVE SIMULATION
                </span>
              </div>
            </div>

            {/* Teaser Dual Column */}
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Radial Hook Score */}
              <div className="md:col-span-4 bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Pre-Flight Hook Score</div>
                
                <div className="relative w-36 h-36 flex items-center justify-center my-1">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-slate-100"
                      strokeWidth="9"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-red-500 transition-all duration-1000 ease-out"
                      strokeWidth="9"
                      strokeDasharray="251.2"
                      strokeDashoffset="25.1"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-black font-mono">9.4</span>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">Jade Outlier</span>
                  </div>
                </div>

                <div className="w-full pt-3 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <div className="text-[10px] text-slate-400">Curiosity Index</div>
                    <div className="text-xs font-bold text-slate-800">9.6 / 10</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Drop-Off Risk</div>
                    <div className="text-xs font-bold text-red-600">Minimal (4%)</div>
                  </div>
                </div>
              </div>

              {/* Right Column: 0:00-0:30 Retention Waveform preview */}
              <div className="md:col-span-8 bg-black text-white rounded-xl p-5 shadow-inner border border-slate-800 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MdTrendingUp className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-bold text-slate-200">0:00–0:30 Second-by-Second Scrubber</span>
                  </div>
                  <span className="text-[11px] font-mono text-red-400 bg-red-950/60 border border-red-800/60 px-2 py-0.5 rounded">
                    +42% Above Channel Median
                  </span>
                </div>

                <div className="relative h-24 w-full flex items-end justify-between gap-1 pt-4 pb-2 px-1 bg-black/80 rounded-lg border border-slate-800/80">
                  {[98, 97, 96, 95, 93, 91, 89, 87, 86, 85, 84, 83, 82, 80, 79, 78].map((pct, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                      <div
                        className={`w-full rounded-t transition-all ${
                          idx === 2 || idx === 3
                            ? 'bg-rose-500 group-hover:bg-rose-400'
                            : 'bg-red-500 group-hover:bg-red-400'
                        }`}
                        style={{ height: `${(pct / 100) * 65}px` }}
                      />
                      <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-300">
                        {idx * 2}s
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-rose-500 inline-block" />
                    <span>Ruby Hazard Removed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded bg-red-500 inline-block" />
                    <span>Jade Outlier Trajectory</span>
                  </div>
                  <button
                    onClick={scrollToDemo}
                    className="text-red-400 hover:text-red-300 font-semibold underline text-xs"
                  >
                    Launch Interactive Studio →
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
