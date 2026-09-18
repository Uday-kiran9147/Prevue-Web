'use client';

import React from 'react';
import { MdTrendingUp, MdVerified } from 'react-icons/md';

interface TestimonialBannerProps {
  onOpenCaseStudy?: () => void;
}

export const TestimonialBanner: React.FC<TestimonialBannerProps> = ({ onOpenCaseStudy }) => {
  const scrollToDemo = () => {
    const el = document.getElementById('simulator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Dark Mesh Silk Banner Container */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden p-8 sm:p-12 md:p-16 text-white mesh-gradient-prevue-silk shadow-2xl min-h-[380px] flex flex-col justify-between border border-slate-800">
          
          {/* Subtle overlay shading for legibility */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] pointer-events-none" />

          {/* Top Quotation Mark */}
          <div className="relative z-10">
            <span className="text-4xl sm:text-5xl font-serif text-red-500 leading-none block select-none">
              “
            </span>
            
            {/* Main Testimonial Statement */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.25] max-w-4xl mt-3 drop-shadow-sm font-sans">
              Before Prevue, we lost ~35% of viewers by second 0:15 without understanding the psychological cause. Restructuring the hook loop before filming added 28% to our 30-second hold rate.
            </h3>
          </div>

          {/* Bottom Profile Bar */}
          <div className="relative z-10 pt-8 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-700/60">
            <div className="flex items-center gap-3.5">
              {/* Leader Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 shadow-md shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
                  alt="Marcus Vance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white tracking-tight">Marcus Vance</h4>
                  <MdVerified className="w-4 h-4 text-red-500 shrink-0" />
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  Vance Media Lab (840K Subs) • <span className="text-emerald-400 font-bold">+28% 0:30 Retention</span>
                </p>
              </div>
            </div>

            {/* View Case Study Pill Button */}
            <button
              onClick={scrollToDemo}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Test Your Hook Like Marcus →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

