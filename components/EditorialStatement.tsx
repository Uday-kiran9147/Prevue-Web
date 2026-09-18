'use client';

import React from 'react';

interface EditorialStatementProps {
  onOpenDownload?: () => void;
}

export const EditorialStatement: React.FC<EditorialStatementProps> = ({ onOpenDownload }) => {
  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold tracking-wider text-slate-800 uppercase mb-8 font-mono">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
          <span>PRE-PRODUCTION INTELLIGENCE</span>
        </div>

        {/* High-Contrast Clear Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.2] max-w-4xl mx-auto font-sans">
          Prevue ensures every second of your opening holds attention—
          <span className="text-slate-500 font-normal"> diagnosing viewer drop-off risks and engineering high-retention hooks before you hit record.</span>
        </h2>

        {/* Supporting Clarification */}
        <p className="mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Stop losing up to 40% of your viewers in the first 15 seconds. Test speech velocity, scan drop-off hazards, and deploy proven curiosity loops in seconds.
        </p>

        {/* Floating Avatar Stack Pill Bar */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-2 sm:p-2.5 sm:pr-3 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-studio hover:shadow-card transition-all">
            
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 pl-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                alt="Creator 1"
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
                alt="Creator 2"
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces"
                alt="Creator 3"
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>

            {/* Label */}
            <div className="text-xs text-slate-700 text-center sm:text-left font-medium px-1">
              Test your 0:00–0:30 script draft in 1 click
            </div>

            {/* Action Pill Button */}
            <button
              onClick={scrollToDemo}
              className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-sm shrink-0"
            >
              Simulate Script
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

