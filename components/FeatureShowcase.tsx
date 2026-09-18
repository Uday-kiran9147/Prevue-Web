'use client';

import React, { useState } from 'react';
import { MdTrendingUp, MdCheck, MdAdd, MdRemove, MdArrowForward, MdSpeed, MdSearch, MdAutoFixHigh } from 'react-icons/md';

interface FeatureShowcaseProps {
  onOpenDownload?: () => void;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ onOpenDownload }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    {
      id: '01',
      title: 'Script Teleprompter & Pacing Calibration',
      badge: 'Pacing Calibration (135–155 WPM)',
      icon: MdSpeed,
      description:
        'Calculates your speech velocity in real-time and highlights timing gates to prevent rushed or dragging openings.',
      highlights: [
        'Real-time speech velocity & words-per-minute gauge',
        'Second-by-second teleprompter timing gates',
        'Cadence warning if pacing exceeds 160 WPM',
      ],
      previewType: 'pacing',
    },
    {
      id: '02',
      title: 'Audience Drop-Off Hazard Scanner',
      badge: '0:00–0:30 Drop-Off Hazard Scanner',
      icon: MdSearch,
      description:
        'Scans opening 30 seconds for passive greetings, delayed payoff promises, and premature subscription requests.',
      highlights: [
        'Line-by-line drop-off risk flags with second markers',
        'Calibrated Hook Score (0–10) vs niche averages',
        'Curiosity loop & narrative velocity evaluation',
      ],
      previewType: 'hazards',
    },
    {
      id: '03',
      title: '1-Click Prescriptive Hook Restructuring',
      badge: 'Tension Loop & Pattern Interrupt Engine',
      icon: MdAutoFixHigh,
      description:
        'Replaces weak introductions with high-retention curiosity loops and pattern interrupts proven across 10M+ subscribers.',
      highlights: [
        'Instant pattern interrupt & curiosity loop deployment',
        'Calibrated to top 1% YouTube creator baseline data',
        'Direct teleprompter export for iPhone & Android apps',
      ],
      previewType: 'restructure',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Category, Heading, Optimized Feature Lines, Pill Button */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-red-600 uppercase block font-mono">
                CREATOR INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.15]">
                We help creators simulate and build high-retention hooks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Prevue gives you an objective pre-flight diagnostic on your opening 30 seconds so you can fix pacing flaws and weak introductions before you hit record.
              </p>
            </div>

            {/* Optimized Feature Accordion Lines */}
            <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                const Icon = tab.icon;

                return (
                  <div
                    key={idx}
                    className="transition-all duration-200"
                  >
                    {/* Feature Line Header */}
                    <button
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`w-full py-4 text-left flex items-center justify-between gap-4 group transition-colors ${
                        isActive ? 'text-slate-950' : 'text-slate-700 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors shrink-0">
                          {tab.id}
                        </span>
                        <span className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                          isActive ? 'text-slate-950 font-bold' : 'text-slate-700 group-hover:text-slate-950'
                        }`}>
                          {tab.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isActive 
                            ? 'bg-slate-900 text-white shadow-sm' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900'
                        }`}>
                          {isActive ? (
                            <MdRemove className="w-4 h-4" />
                          ) : (
                            <MdAdd className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Active Expanded Feature Card */}
                    {isActive && (
                      <div className="pb-5 pt-1 space-y-3.5">
                        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200 shadow-subtle space-y-3.5">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-900 shadow-subtle">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{tab.badge}</span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {tab.description}
                          </p>

                          {/* Refined Feature Detail Lines */}
                          <div className="pt-2 border-t border-slate-200/60 space-y-2">
                            {tab.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                                  <MdCheck className="w-3 h-3" />
                                </div>
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Pill Button */}
            <div className="pt-2">
              <button
                onClick={scrollToDemo}
                className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all active:scale-95 shadow-sm inline-flex items-center gap-2"
              >
                <span>Test Your Script — For Free!</span>
                <MdArrowForward className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Studio Dark Container with Dynamic Mobile Device Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] mesh-gradient-prevue-device p-6 sm:p-8 flex items-center justify-center shadow-2xl overflow-hidden border border-slate-800">
              
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] pointer-events-none" />

              {/* Floating Mobile Device Mockup */}
              <div className="relative z-10 w-[270px] sm:w-[290px] bg-slate-900 rounded-[2.2rem] p-3 shadow-2xl border-4 border-slate-800 flex flex-col justify-between">
                
                {/* Phone Speaker & Notch */}
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-3 bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                  </div>
                </div>

                {/* In-App Screen Content (Dynamically adapts to selected feature) */}
                <div className="bg-[#FAFAFA] rounded-[1.6rem] p-4 space-y-3 text-slate-900 border border-slate-200 min-h-[360px] flex flex-col justify-between">
                  
                  {/* Top App Bar */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 font-mono pb-1 border-b border-slate-200">
                    <span>Prevue Studio</span>
                    <span className="text-slate-400">
                      {activeTab === 0 ? 'Pacing Engine' : activeTab === 1 ? 'Hazard Scanner' : 'Hook Restructure'}
                    </span>
                  </div>

                  {/* Dynamic Tab 0: Script Teleprompter & Pacing Calibration */}
                  {activeTab === 0 && (
                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold">
                            ⚡
                          </div>
                          <span className="text-xs font-bold text-slate-900">Speech Velocity</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          148 WPM
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1.5">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Pacing Gate (135–155 WPM)</div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-600">
                          <span>Status: Optimal Pace</span>
                          <span className="text-emerald-700 font-bold">96% Flow</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[92%]" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
                        <div className="text-[9px] text-slate-400 uppercase">Teleprompter Cue (0:00–0:12)</div>
                        <p className="text-[11px] text-slate-900 leading-snug">
                          "In the next 30 seconds, I will show you the exact 4-second pattern interrupt..."
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Tab 1: Audience Drop-Off Hazard Scanner */}
                  {activeTab === 1 && (
                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                            ✦
                          </div>
                          <span className="text-xs font-bold text-slate-900">Hook Score</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          9.2 / 10
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">30-Sec Hold Projection</div>
                        <div className="text-xl font-extrabold text-slate-950 font-mono">76% of Viewers</div>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                          <MdTrendingUp className="w-3.5 h-3.5" />
                          <span>+38% Above Niche Median</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 space-y-0.5">
                        <div className="font-bold flex items-center gap-1">
                          <MdCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>0 Hazards Detected</span>
                        </div>
                        <div className="text-[10px] text-emerald-700">Throat-clearing & delayed payoff eliminated.</div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Tab 2: 1-Click Hook Restructuring */}
                  {activeTab === 2 && (
                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                            ✦
                          </div>
                          <span className="text-xs font-bold text-slate-900">Restructured Hook</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                          +28% Hold
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-[10px] text-red-950 space-y-0.5">
                        <span className="font-mono font-bold text-red-700">Before Fix (Score 4.6):</span>
                        <p className="leading-tight text-slate-700">"Hey guys! Welcome back to my channel today..."</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-950 space-y-0.5">
                        <span className="font-mono font-bold text-emerald-700">After Prevue Fix (Score 9.4):</span>
                        <p className="leading-tight font-medium text-emerald-950">"In the next 30s, watch what happens when you fix this..."</p>
                      </div>
                    </div>
                  )}

                  {/* Quick Action Pill */}
                  <button
                    onClick={scrollToDemo}
                    className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Run Script Simulation</span>
                    <MdArrowForward className="w-3 h-3 text-slate-300" />
                  </button>

                </div>

                {/* Home Indicator */}
                <div className="flex justify-center pt-2">
                  <div className="w-20 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

