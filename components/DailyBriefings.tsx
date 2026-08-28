'use client';

import React, { useState } from 'react';
import { MdAutoAwesome, MdTrendingUp } from 'react-icons/md';;

export const DailyBriefings: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<'tech' | 'finance' | 'education'>('tech');

  const briefings = {
    tech: [
      {
        title: "The Silent Death of Budget Smartphones",
        hookScoreForecast: "9.6 Hook Score",
        concept: "Explores why $200 phones disappeared from the market, contrasting 2019 vs 2026 manufacturing margins.",
        retentionBlueprint: "0:00 Visual teardown -> 0:08 The $140 Component Shock -> 0:24 The Manufacturer Secret.",
        confidence: "94% Outlier Probability"
      },
      {
        title: "Why Everyone Is Returning the New VR Headset",
        hookScoreForecast: "9.2 Hook Score",
        concept: "Investigates weight distribution fatigue curves and return window analytics across major retailers.",
        retentionBlueprint: "0:00 Headset drop on scale -> 0:06 Real user return receipts -> 0:18 Ergonomic thermal scans.",
        confidence: "89% Outlier Probability"
      }
    ],
    finance: [
      {
        title: "The 2026 Index Fund Trap Nobody Explains",
        hookScoreForecast: "9.7 Hook Score",
        concept: "Deep dive into market cap concentration in top 3 equities and why passive rebalancing causes drag.",
        retentionBlueprint: "0:00 Split chart of 500 stocks vs top 3 -> 0:07 The hidden drag coefficient -> 0:20 Fix.",
        confidence: "96% Outlier Probability"
      }
    ],
    education: [
      {
        title: "The 100-Year Mistake in High School Physics",
        hookScoreForecast: "9.5 Hook Score",
        concept: "Visual recreation of why common textbook diagrams for airplane lift violate fluid conservation laws.",
        retentionBlueprint: "0:00 Wind tunnel smoke stream -> 0:09 The textbook diagram error -> 0:22 Actual Bernoulli reality.",
        confidence: "91% Outlier Probability"
      }
    ]
  };

  return (
    <section id="daily-briefings-section" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
            <MdAutoAwesome className="w-3.5 h-3.5 text-amber-600" />
            <span>Prescriptive Concept Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Daily Prescriptive Briefings
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            AI/heuristic video concept generator analyzing real-time niche retention curves, competitor saturation, and channel taxonomy.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedNiche('tech')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedNiche === 'tech'
                  ? 'bg-black text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Consumer Tech
            </button>
            <button
              onClick={() => setSelectedNiche('finance')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedNiche === 'finance'
                  ? 'bg-black text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Finance & Markets
            </button>
            <button
              onClick={() => setSelectedNiche('education')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedNiche === 'education'
                  ? 'bg-black text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Science & Education
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {briefings[selectedNiche].map((item, idx) => (
            <div
              key={idx}
              className="bg-studio-card rounded-2xl p-6 border border-studio-border shadow-studio hover:shadow-studio-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800">
                    Daily Briefing #{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                    {item.hookScoreForecast}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black leading-snug">
                  "{item.title}"
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.concept}
                </p>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                    0:00–0:30 Pre-Flight Blueprint
                  </div>
                  <div className="text-xs font-mono text-slate-800">
                    {item.retentionBlueprint}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-red-700 font-semibold flex items-center gap-1">
                  <MdTrendingUp className="w-3.5 h-3.5" />
                  {item.confidence}
                </span>
                <span className="text-slate-400 font-mono">Updated today</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
