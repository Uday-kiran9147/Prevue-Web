'use client';

import React, { useState } from 'react';
import { MdMic, MdAdd, MdArrowUpward, MdSecurity, MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [promptText, setPromptText] = useState(
    'In the next 30 seconds, I will show you the exact 4-second pattern interrupt that took our average retention from 38% to 74%...'
  );

  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const samplePrompts = [
    'In the next 30 seconds, I will show you the exact 4-second pattern interrupt that took our average retention from 38% to 74%...',
    'Here is the single biggest mistake creators make at second 6 that kills viewer watch time before the first minute...',
    'We spent $40,000 analyzing 1,200 viral videos to discover why opening greetings drop 35% of your audience immediately...',
    'Before you film your next YouTube draft, run this 3-stage pre-flight hold check on your opening 30 seconds...',
  ];

  const handlePromptCycle = () => {
    const nextIdx = (samplePrompts.indexOf(promptText) + 1) % samplePrompts.length;
    setPromptText(samplePrompts[nextIdx]);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Rating Badge Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-subtle hover:border-slate-300 transition-all cursor-pointer">
            <span className="text-amber-500 font-bold">★ 4.9</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="font-semibold text-slate-800">YouTube Script Retention Simulator</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-500 font-mono text-[11px]">0:00–0:30 Pre-Flight</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] font-sans">
            Fix your first 30 seconds{' '}
            <span className="text-red-600 inline-block">before you press record.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Most viewers drop off in the opening 15 seconds. Prevue simulates your YouTube script draft against proven retention curves, flags drop-off traps, and restructures your hook for maximum hold.
          </p>

          {/* Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={scrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2"
            >
              <span>Test Your Script in Simulator</span>
              <MdArrowForward className="w-4 h-4 text-slate-300" />
            </button>

            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-subtle transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <FaApple className="w-4 h-4 text-slate-900" />
              <span>Get Mobile App</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <MdSecurity className="w-3.5 h-3.5 text-slate-400" />
              YouTube Data API v3 Verified
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <MdCheckCircle className="w-3.5 h-3.5 text-slate-400" />
              RevenueCat Protected Subscriptions
            </span>
          </div>
        </div>

        {/* Hero Showcase: Studio Dark Mesh Banner with Floating Prompt/Script Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-14 mesh-gradient-prevue-hero shadow-2xl min-h-[360px] sm:min-h-[440px] flex flex-col justify-between items-center text-center">
            
            {/* Top Bar Floating Pills */}
            <div className="w-full flex flex-wrap items-center justify-between gap-2 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>0:00–0:30 Pre-Flight Hold Simulator</span>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950/70 border border-slate-800 text-emerald-400">
                Calibrated Baseline (9.2 Hook Score)
              </span>
            </div>

            {/* Centered Floating White Script Prompt Bar */}
            <div className="relative z-10 w-full max-w-2xl my-auto py-4">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/80 space-y-4 text-left transition-all">
                
                {/* Script Snippet / Prompt Input */}
                <div
                  onClick={handlePromptCycle}
                  className="flex items-start gap-3 text-slate-900 text-xs sm:text-sm font-normal cursor-pointer select-none group"
                >
                  <span className="text-red-500 font-bold mt-0.5 text-sm shrink-0">✦</span>
                  <div className="w-full space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Opening 0:00–0:30 Draft Hook (Click to cycle samples)
                    </div>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      "{promptText}"
                    </p>
                  </div>
                </div>

                {/* Bottom Row Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePromptCycle}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
                    >
                      <MdAdd className="w-4 h-4 text-red-600" />
                      <span>Switch Hook Template</span>
                    </button>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-mono text-slate-500">
                      Pacing: <strong className="text-slate-900">148 WPM</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={scrollToDemo}
                      className="w-full sm:w-auto px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
                    >
                      <span>Simulate Hold</span>
                      <MdArrowUpward className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Subtitle below prompt */}
              <p className="mt-4 text-xs text-slate-300 font-medium drop-shadow-sm">
                Calibrated against YouTube Data API v3 • Start testing in the <strong className="text-white font-bold underline underline-offset-2">Simulator Studio</strong> below.
              </p>
            </div>

            {/* Bottom Spacer */}
            <div className="w-full h-2" />

          </div>
        </div>

      </div>
    </section>
  );
};



