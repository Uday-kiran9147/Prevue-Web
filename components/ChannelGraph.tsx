'use client';

import React, { useState } from 'react';
import { MdSecurity, MdTrendingUp, MdLayers, MdFlashOn, MdPlayArrow } from 'react-icons/md';;

interface CreatorProfile {
  handle: string;
  name: string;
  subscribers: string;
  medianViews: string;
  outlierMultiplier: string;
  topics: Array<{ name: string; share: number; avgRetention: number }>;
  avatar: string;
}

const PRESET_CREATORS: Record<string, CreatorProfile> = {
  '@mkbhd': {
    handle: '@mkbhd',
    name: 'Marques Brownlee',
    subscribers: '19.4M',
    medianViews: '2.45M',
    outlierMultiplier: '3.2x',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    topics: [
      { name: 'Flagship Smartphone Deep-Dives', share: 45, avgRetention: 76 },
      { name: 'Studio & Camera Tech Hardware', share: 30, avgRetention: 81 },
      { name: 'EV & Future Automotive', share: 25, avgRetention: 69 },
    ],
  },
  '@veritasium': {
    handle: '@veritasium',
    name: 'Veritasium',
    subscribers: '16.8M',
    medianViews: '4.10M',
    outlierMultiplier: '4.6x',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    topics: [
      { name: 'Physics & Mathematical Paradoxes', share: 50, avgRetention: 86 },
      { name: 'Real-World Scientific Experiments', share: 30, avgRetention: 79 },
      { name: 'Science History Investigations', share: 20, avgRetention: 72 },
    ],
  },
  '@aliabdaal': {
    handle: '@aliabdaal',
    name: 'Ali Abdaal',
    subscribers: '5.8M',
    medianViews: '620K',
    outlierMultiplier: '2.8x',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    topics: [
      { name: 'Productivity Systems & Notion', share: 40, avgRetention: 72 },
      { name: 'Creator Business & Solopreneurship', share: 35, avgRetention: 75 },
      { name: 'Life Philosophy & Book Summaries', share: 25, avgRetention: 65 },
    ],
  },
};

export const ChannelGraph: React.FC = () => {
  const [selectedHandle, setSelectedHandle] = useState<string>('@mkbhd');
  const activeCreator = PRESET_CREATORS[selectedHandle] || PRESET_CREATORS['@mkbhd'];

  return (
    <section id="channel-graph-section" className="py-20 bg-studio-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold">
            <span className="w-3.5 h-2.5 bg-rose-600 rounded-sm flex items-center justify-center">
              <MdPlayArrow className="w-2 h-2 fill-current text-white ml-0.5" />
            </span>
            <span>YouTube Data API v3 Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Channel Graph Baseline Intelligence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Calibrate your retention simulator against your actual public channel taxonomy, median view benchmarks, and topic outliers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {Object.keys(PRESET_CREATORS).map((handle) => (
              <button
                key={handle}
                onClick={() => setSelectedHandle(handle)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedHandle === handle
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{handle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-studio-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={activeCreator.avatar}
                  alt={activeCreator.name}
                  className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-slate-900 flex items-center justify-center text-black text-[10px] font-bold">
                  ✓
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{activeCreator.name}</h3>
                  <span className="font-mono text-xs text-slate-400">{activeCreator.handle}</span>
                </div>
                <div className="text-xs text-red-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <MdSecurity className="w-3.5 h-3.5" />
                  YouTube Data API v3 Channel Graph Synced
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider">Subscribers</div>
                <div className="text-sm font-bold font-mono text-white">{activeCreator.subscribers}</div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider">Median Views</div>
                <div className="text-sm font-bold font-mono text-red-400">{activeCreator.medianViews}</div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MdLayers className="w-4 h-4 text-red-600" />
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider">Topic Clustering & Retention Averages</h4>
                </div>
                <span className="text-xs text-slate-400">Past 90 days</span>
              </div>

              <div className="space-y-3">
                {activeCreator.topics.map((topic, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">{topic.name}</span>
                      <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {topic.avgRetention}% Avg Retention
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-black h-full rounded-full transition-all duration-700"
                        style={{ width: `${topic.share}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Channel share: {topic.share}%</span>
                      <span>Hook velocity index: {(topic.avgRetention / 10).toFixed(1)} / 10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-studio-card rounded-xl p-5 border border-studio-border flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  <MdTrendingUp className="w-4 h-4 text-red-600" />
                  Outlier Multiplier Ratio
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1 shadow-sm">
                  <div className="text-3xl font-black text-black font-mono">
                    {activeCreator.outlierMultiplier}
                  </div>
                  <div className="text-xs font-semibold text-red-700">
                    Retention Outlier Multiplier
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Videos scoring &gt; 9.0 Hook Score outperform channel median by {activeCreator.outlierMultiplier}.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <MdFlashOn className="w-3.5 h-3.5 text-red-600" />
                  Pre-Flight Calibration
                </div>
                <p className="text-[11px] leading-relaxed text-red-800">
                  Prevue adapts its drop-off hazard scrubber to match your channel's specific audience pacing and baseline topic fatigue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
