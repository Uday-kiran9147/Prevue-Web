'use client';

import React from 'react';
import { MdStar } from 'react-icons/md';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcus Vance",
      channel: "Vance Media Lab (840K Subs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      quote: "Before Prevue, we lost ~35% of viewers by second 0:15 without understanding the psychological cause. Restructuring the hook loop before filming added 28% to our 30-second hold rate.",
      metric: "+28% 0:30 Retention",
      rating: 5
    },
    {
      name: "Elena Rostova",
      channel: "Tech Architecture (410K Subs)",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
      quote: "The Hook Score gives our editing team an objective pacing standard before filming a single frame. It eliminated the throat-clearing fluff we used to leave in our video intros.",
      metric: "3.4x Outlier Multiplier",
      rating: 5
    },
    {
      name: "David K.",
      channel: "Explain It Simply (1.2M Subs)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      quote: "Calibrating against our actual channel median showed us why certain intro structures reliably perform. It is a permanent step in our pre-production checklist.",
      metric: "9.4 Avg Hook Score",
      rating: 5
    }
  ];

  return (
    <section id="customers" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold shadow-subtle">
            <span>Creator Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
            Used Across 10M+ Combined YouTube Subscribers
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            See how high-retention channels use Prevue to test and optimize hooks before every production shoot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-subtle flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <MdStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    {t.metric}
                  </span>
                </div>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-neutral-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200 shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-neutral-950">{t.name}</h4>
                  <p className="text-[11px] text-neutral-400 font-mono">{t.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



