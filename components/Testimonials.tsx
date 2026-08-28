'use client';

import React from 'react';
import { MdStar } from 'react-icons/md';;

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcus Vance",
      channel: "Vance Media Lab (840K Subs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      quote: "Before Prevue, we always lost 35% of viewers by second 0:15 without knowing why. The 1-click prescriptive fixes completely changed our scriptwriting workflow.",
      metric: "+28% Retention at 0:30",
      rating: 5
    },
    {
      name: "Elena Rostova",
      channel: "Tech Architecture Daily (410K Subs)",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
      quote: "The Hook Score radial gauge gives our editing team an objective benchmark before filming a single frame. It's the most valuable creator tool on my phone.",
      metric: "3.4x Outlier Views",
      rating: 5
    },
    {
      name: "David K.",
      channel: "Explain It Simply (1.2M Subs)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      quote: "Connecting our YouTube Data API baseline showed us our topic clusters and why certain hooks consistently triggered Jade Outlier performance.",
      metric: "9.6 Avg Hook Score",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Verified Retention Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Trusted by Creators With 10M+ Combined Subscribers
          </h2>
          <p className="text-slate-600 text-base">
            See how high-performing YouTube channels use Prevue's Pre-Flight Simulator before every production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-studio-card rounded-2xl p-6 border border-studio-border shadow-studio flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <MdStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                    {t.metric}
                  </span>
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-200/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-black">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
