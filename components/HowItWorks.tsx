'use client';

import React from 'react';
import { MdSpeed, MdSearch, MdTune } from 'react-icons/md';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      tag: 'SCRIPT DRAFTING',
      title: 'Draft in Studio Teleprompter',
      description: 'Write or paste your opening 0:00–0:30 script. Prevue calculates your exact speech velocity (words-per-minute) and marks timing gates.',
      details: [
        'Real-time pacing gauge (target 135–155 WPM)',
        'Word count & estimated second-by-second timestamps',
        'Direct import for teleprompters & scripting apps',
      ],
      icon: MdSpeed,
    },
    {
      step: '02',
      tag: 'HAZARD SCANNING',
      title: 'Simulate Audience Drop-Off',
      description: 'Prevue runs your draft through retention loss algorithms to detect passive greetings, throat-clearing, and premature subscription requests.',
      details: [
        'Radial Hook Score (0–10) calibrated to your niche',
        'Line-by-line drop-off risk flags with timestamp tags',
        'Curiosity & narrative velocity evaluation',
      ],
      icon: MdSearch,
    },
    {
      step: '03',
      tag: 'PRE-FLIGHT RESTRUCTURE',
      title: 'Deploy Prescriptive Hook Fixes',
      description: 'Apply high-retention structural rewrites in 1-click. Turn passive introductions into immediate tension loops before you hit record.',
      details: [
        '1-click tension loop & pattern interrupt restructuring',
        'Channel baseline calibration via YouTube Data API v3',
        'Save blueprints to mobile for teleprompter recording',
      ],
      icon: MdTune,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 md:py-28 bg-white border-b border-neutral-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-subtle">
            <span className="font-mono text-[11px] text-neutral-500">PRE-PRODUCTION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
            How Prevue Pre-Flights Your Script
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Eliminate audience drop-off in the first 30 seconds through a systematic three-stage studio review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FAFAFA] hover:bg-neutral-50 rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-subtle flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60">
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      STAGE {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-neutral-500 uppercase px-2.5 py-0.5 rounded-full bg-white border border-neutral-200/80">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-900 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Optimized Feature Lines */}
                  <div className="pt-2 border-t border-neutral-200/60 divide-y divide-neutral-200/50">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="py-2.5 first:pt-1 last:pb-0 flex items-start gap-2.5 text-xs text-neutral-700">
                        <div className="w-4 h-4 rounded-full bg-white border border-neutral-300 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <span className="text-[10px] font-bold">✓</span>
                        </div>
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>PROTOCOL {item.step}</span>
                  <span className="text-emerald-700 font-medium">✓ Auto calibrated</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

