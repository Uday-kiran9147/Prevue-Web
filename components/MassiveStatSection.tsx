'use client';

import React from 'react';

export const MassiveStatSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-4">
          {/* Top Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Don't take our word for it.
          </h2>

          {/* Metric Sub-label */}
          <div className="text-xs font-bold font-mono tracking-[0.2em] text-red-600 uppercase">
            14,200+ SCRIPTS SIMULATED • 10M+ AUDIENCE BENCHMARK
          </div>

          {/* Massive Display Number */}
          <div className="pt-2 pb-2">
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold text-slate-950 tracking-tighter leading-none select-none font-sans">
              26,900,000+
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono">
            Total viewer watch-time seconds protected by Prevue Hook Hazard pre-flight simulations.
          </p>
        </div>

      </div>
    </section>
  );
};

