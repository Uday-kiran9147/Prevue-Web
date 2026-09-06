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
    <section id="how-it-works-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
            <span className="font-mono text-[11px] text-slate-500">PRE-PRODUCTION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How Prevue Pre-Flights Your Script
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate audience drop-off in the first 30 seconds through a systematic three-stage studio review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 hover:bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 uppercase px-2 py-0.5 rounded bg-white border border-slate-200/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-slate-800 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 text-xs text-slate-600">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>STAGE {item.step}</span>
                  <span className="text-emerald-700 font-medium">✓ Automatic verification</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
