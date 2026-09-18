'use client';

import React from 'react';

export const MetricsGrid: React.FC = () => {
  const metrics = [
    {
      prefix: 'Up to',
      value: '+38%',
      title: '0:30 Viewer Hold Increase',
      description: 'Higher 30-second viewer retention compared to uncalibrated niche baselines.',
      color: 'text-emerald-700',
    },
    {
      prefix: 'Up to',
      value: '96%',
      title: 'Throat-Clearing Reduction',
      description: 'Opening channel greetings and delayed value promises completely eliminated.',
      color: 'text-slate-950',
    },
    {
      prefix: 'Up to',
      value: '3.4x',
      title: 'View Outlier Multiplier',
      description: 'Higher probability of breakout algorithm performance on tested hooks.',
      color: 'text-red-600',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 shadow-subtle">
            <span>Proven Retention Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Built for High YouTube Retention
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Designed to eliminate viewer drop-off in the critical opening window before you film a single frame.
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1 font-mono uppercase tracking-wider">
                  {item.prefix}
                </span>
                <div className={`text-5xl sm:text-6xl font-bold font-mono tracking-tight mb-4 ${item.color}`}>
                  {item.value}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight mb-1.5">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-2 border-t border-slate-200/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

