'use client';

import React, { useState } from 'react';
import { MdSecurity, MdTrendingUp, MdLayers, MdCheckCircle } from 'react-icons/md';

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
      { name: 'Flagship Smartphone Reviews', share: 45, avgRetention: 76 },
      { name: 'Studio & Camera Hardware', share: 30, avgRetention: 81 },
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
      { name: 'Physics Paradoxes & Misconceptions', share: 50, avgRetention: 86 },
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
      { name: 'Productivity Systems & Workflows', share: 40, avgRetention: 72 },
      { name: 'Creator Business & Entrepreneurship', share: 35, avgRetention: 75 },
      { name: 'Book Summaries & Life Lessons', share: 25, avgRetention: 65 },
    ],
  },
};

export const ChannelGraph: React.FC = () => {
  const [selectedHandle, setSelectedHandle] = useState<string>('@mkbhd');
  const activeCreator = PRESET_CREATORS[selectedHandle] || PRESET_CREATORS['@mkbhd'];

  return (
    <section id="channel-graph-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-semibold shadow-subtle">
            <MdSecurity className="w-3.5 h-3.5 text-slate-600" />
            <span>YouTube Data API v3 Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Channel Baseline Intelligence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Retention benchmarks differ by audience size and genre. Prevue calibrates your hook tests against your channel's public median views and topic performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {Object.keys(PRESET_CREATORS).map((handle) => (
              <button
                key={handle}
                onClick={() => setSelectedHandle(handle)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all font-mono ${
                  selectedHandle === handle
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span>{handle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200/80 shadow-studio overflow-hidden">
          {/* Creator Profile Header */}
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3.5">
              <img
                src={activeCreator.avatar}
                alt={activeCreator.name}
                className="w-12 h-12 rounded-full border border-slate-700 object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">{activeCreator.name}</h3>
                  <span className="font-mono text-xs text-slate-400">{activeCreator.handle}</span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MdCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Public channel taxonomy synced
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-left sm:text-right">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Subscribers</div>
                <div className="text-sm font-bold font-mono text-white">{activeCreator.subscribers}</div>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div className="text-left sm:text-right">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Median Views</div>
                <div className="text-sm font-bold font-mono text-emerald-400">{activeCreator.medianViews}</div>
              </div>
            </div>
          </div>

          {/* Metrics Body */}
          <div className="p-6 sm:p-8 grid md:grid-cols-12 gap-6 bg-slate-50/40">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <MdLayers className="w-4 h-4 text-slate-700" />
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">Topic Clusters & Retention Hold</h4>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">90-Day Sample</span>
              </div>

              <div className="space-y-3">
                {activeCreator.topics.map((topic, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-900">{topic.name}</span>
                      <span className="font-mono font-semibold text-slate-800">
                        {topic.avgRetention}% Avg Hold
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-slate-900 h-full rounded-full"
                        style={{ width: `${topic.share}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>Niche share: {topic.share}%</span>
                      <span>Pacing benchmark: {(topic.avgRetention / 10).toFixed(1)} / 10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-white rounded-lg p-5 border border-slate-200/80 shadow-subtle flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2 font-mono">
                  <MdTrendingUp className="w-4 h-4 text-slate-700" />
                  Retention Multiplier
                </div>

                <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 text-center space-y-1">
                  <div className="text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                    {activeCreator.outlierMultiplier}
                  </div>
                  <div className="text-xs font-medium text-emerald-700 font-mono">
                    High-Retention View Multiplier
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                    Scripts scoring &gt;8.5 Hook Score consistently generate {activeCreator.outlierMultiplier} the views of median uploads.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-md bg-slate-50 border border-slate-200/70 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-900">Customized Pre-Flight Tuning</div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Prevue tunes hazard sensitivity to match expected viewer patience in your specific vertical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


