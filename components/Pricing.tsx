'use client';

import React, { useState } from 'react';
import { MdCheck, MdFlashOn, MdSmartphone } from 'react-icons/md';

interface PricingProps {
  onOpenDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDownload }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing-section" className="py-20 md:py-28 bg-white border-b border-neutral-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold shadow-subtle">
            <span>Creator Pro Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
            Transparent Plans for Serious Creators
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Start free on your phone. Unlock unlimited 0:00–0:30 simulations, script rewrites, and channel baseline sync with Creator Pro.
          </p>

          {/* Billing Switch Pill */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-neutral-950' : 'text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-12 h-6 rounded-full bg-black p-0.5 transition-colors focus:outline-none shadow-subtle"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${billingCycle === 'annual' ? 'text-neutral-950' : 'text-neutral-400'}`}>
                Annual
              </span>
              <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Save 38%
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          
          {/* Free Tier Card */}
          <div className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-neutral-200/80 shadow-subtle flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">Starter Baseline</div>
                <h3 className="text-2xl font-bold text-neutral-950 mt-1">Free Tier</h3>
                <p className="text-neutral-500 text-xs mt-1">Perfect for testing your first couple of video drafts.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-neutral-950 font-mono tracking-tight">$0</span>
                <span className="text-xs text-neutral-400 font-mono">/ forever</span>
              </div>

              {/* Optimized Feature Lines */}
              <div className="pt-2 border-t border-neutral-200/60 divide-y divide-neutral-200/50">
                <div className="py-2.5 first:pt-0 flex items-start gap-2.5 text-xs text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span><strong className="text-slate-950">3 Pre-Flight Simulations</strong> per month</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Hook Score (0–10) radial breakdown</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Basic 0:00–0:30 drop-off hazard scanner</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-400">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono">
                    —
                  </div>
                  <span>1-Click Hook Restructuring (Pro only)</span>
                </div>
                <div className="py-2.5 last:pb-0 flex items-start gap-2.5 text-xs text-neutral-400">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono">
                    —
                  </div>
                  <span>YouTube Data API Baseline Sync (Pro only)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/60">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-xs border border-neutral-300 transition-colors flex items-center justify-center gap-2 shadow-subtle active:scale-95"
              >
                <MdSmartphone className="w-4 h-4 text-neutral-700" />
                <span>Download Free Mobile App</span>
              </button>
            </div>
          </div>

          {/* Creator Pro Card */}
          <div className="relative bg-black text-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">Full Intelligence</div>
                  <h3 className="text-2xl font-bold text-white mt-1">Creator Pro</h3>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                  7-Day Free Trial
                </span>
              </div>
              <p className="text-neutral-400 text-xs">For channels and studios dedicated to high retention.</p>

              <div className="flex items-baseline gap-1">
                {billingCycle === 'monthly' ? (
                  <>
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">$19.99</span>
                    <span className="text-xs text-neutral-400 font-mono">/ month</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">$149</span>
                    <span className="text-xs text-neutral-400 font-mono">/ year ($12.41/mo)</span>
                  </>
                )}
              </div>

              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-2">
                <MdFlashOn className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes 7-day free trial. Cancel anytime in Store settings.</span>
              </div>

              {/* Optimized Feature Lines */}
              <div className="pt-2 border-t border-neutral-800/80 divide-y divide-neutral-800/60">
                <div className="py-2.5 first:pt-0 flex items-start gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span><strong className="text-white">Unlimited 0:00–0:30</strong> Pre-Flight Simulations</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span><strong className="text-white">1-Click Prescriptive</strong> Hook Restructuring</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span><strong className="text-white">YouTube Data API v3</strong> Channel Baseline Sync</span>
                </div>
                <div className="py-2.5 flex items-start gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span><strong className="text-white">Daily Retention Blueprints</strong> & Niche Radar</span>
                </div>
                <div className="py-2.5 last:pb-0 flex items-start gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span>Cross-device sync for iOS, iPadOS & Android</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 space-y-2">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Start 7-Day Free Trial</span>
              </button>
              <div className="text-[10px] text-center text-neutral-500 font-mono">
                Billed securely via Apple App Store or Google Play Store
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};



