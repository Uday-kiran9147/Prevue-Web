'use client';

import React, { useState } from 'react';
import { MdTrendingUp, MdCheckCircle } from 'react-icons/md';

export const DailyBriefings: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<'tech' | 'finance' | 'education'>('tech');

  const briefings = {
    tech: [
      {
        title: "The Silent Death of Budget Smartphones",
        hookScore: "9.6 Hook Score",
        concept: "Explores why $200 phones disappeared from the market, contrasting 2019 vs 2026 component costs and manufacturing margins.",
        retentionBlueprint: "0:00 Visual teardown → 0:08 The $140 Component Shock → 0:24 The Manufacturer Secret.",
        confidence: "94% Outlier Probability"
      },
      {
        title: "Why Everyone Is Returning the New VR Headset",
        hookScore: "9.2 Hook Score",
        concept: "Investigates weight distribution fatigue curves and return window analytics across major retail distribution channels.",
        retentionBlueprint: "0:00 Headset drop on scale → 0:06 Real user return receipts → 0:18 Ergonomic thermal scans.",
        confidence: "89% Outlier Probability"
      }
    ],
    finance: [
      {
        title: "The Index Fund Rebalancing Drag Nobody Mentions",
        hookScore: "9.7 Hook Score",
        concept: "Deep dive into market cap concentration in the top 3 equities and why passive market rebalancing causes silent drag.",
        retentionBlueprint: "0:00 Split chart of 500 stocks vs top 3 → 0:07 The hidden drag coefficient → 0:20 The strategic fix.",
        confidence: "96% Outlier Probability"
      },
      {
        title: "How Payment Processors Make Billions on 0.5% Swipes",
        hookScore: "9.3 Hook Score",
        concept: "Step-by-step financial breakdown of the interchange fee waterfall across card networks, banks, and merchant gateways.",
        retentionBlueprint: "0:00 Tap-to-pay transaction sound → 0:05 Fee breakdown graphic → 0:21 The $40B hidden industry.",
        confidence: "91% Outlier Probability"
      }
    ],
    education: [
      {
        title: "The 100-Year Mistake in High School Physics Textbooks",
        hookScore: "9.5 Hook Score",
        concept: "Visual recreation of why common textbook diagrams for airplane wing lift violate fundamental fluid conservation laws.",
        retentionBlueprint: "0:00 Wind tunnel smoke stream → 0:09 The textbook diagram error → 0:22 The actual Bernoulli reality.",
        confidence: "91% Outlier Probability"
      },
      {
        title: "Why Concrete Gets Harder Underwater",
        hookScore: "9.4 Hook Score",
        concept: "Macro-lens chemical investigation into hydration crystal growth that makes Roman concrete harden over millennia under seawater.",
        retentionBlueprint: "0:00 2000-year-old Roman pier footage → 0:07 Chemical crystal time-lapse → 0:19 Modern civil engineering insight.",
        confidence: "93% Outlier Probability"
      }
    ]
  };

  return (
    <section id="daily-briefings-section" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Hook Blueprint Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Daily Retention Blueprints
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Curated 0:00–0:30 hook structures designed around verified curiosity loops, high visual contrast, and immediate payoffs.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedNiche('tech')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedNiche === 'tech'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900'
              }`}
            >
              Consumer Tech
            </button>
            <button
              onClick={() => setSelectedNiche('finance')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedNiche === 'finance'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900'
              }`}
            >
              Finance & Markets
            </button>
            <button
              onClick={() => setSelectedNiche('education')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedNiche === 'education'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900'
              }`}
            >
              Science & Education
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {briefings[selectedNiche].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200/70 text-slate-700">
                    BLUEPRINT 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                    {item.hookScore}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight">
                  "{item.title}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.concept}
                </p>

                <div className="p-3.5 rounded-lg bg-slate-50/80 border border-slate-200/70 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 font-mono">
                    0:00–0:30 Hook Architecture
                  </div>
                  <div className="text-xs font-mono text-slate-800 leading-relaxed">
                    {item.retentionBlueprint}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-medium flex items-center gap-1.5 font-mono">
                  <MdTrendingUp className="w-4 h-4" />
                  {item.confidence}
                </span>
                <span className="text-slate-400 text-[11px] font-mono">Updated today</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


