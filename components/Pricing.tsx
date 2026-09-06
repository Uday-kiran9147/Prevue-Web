'use client';

import React, { useState } from 'react';
import { MdCheck, MdFlashOn, MdSmartphone } from 'react-icons/md';

interface PricingProps {
  onOpenDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDownload }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-semibold shadow-subtle">
            <span>Creator Pro Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Transparent Plans for Serious Creators
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Start free on your phone. Unlock unlimited 0:00–0:30 simulations, script rewrites, and channel baseline sync with Creator Pro.
          </p>

          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-11 h-6 rounded-full bg-slate-900 p-0.5 transition-colors focus:outline-none shadow-subtle"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-400'}`}>
                Annual
              </span>
              <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                Save 38%
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          {/* Free Tier Card */}
          <div className="bg-slate-50/70 rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400">Starter Baseline</div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Free Tier</h3>
                <p className="text-slate-500 text-xs mt-1">Perfect for testing your first couple of video drafts.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">$0</span>
                <span className="text-xs text-slate-400 font-mono">/ forever</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <span><strong>3 Pre-Flight Simulations</strong> per month</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <span>Hook Score (0–10) radial breakdown</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <span>Basic 0:00–0:30 drop-off hazard detection</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-slate-300 font-mono">—</span>
                  <span>1-Click Hook Restructuring (Pro only)</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-slate-300 font-mono">—</span>
                  <span>YouTube Data API Channel Graph Sync (Pro only)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60">
              <button
                onClick={onOpenDownload}
                className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200/80 transition-colors flex items-center justify-center gap-2 shadow-subtle"
              >
                <MdSmartphone className="w-4 h-4 text-slate-700" />
                <span>Download Free Mobile App</span>
              </button>
            </div>
          </div>

          {/* Creator Pro Card */}
          <div className="relative bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-studio flex flex-col justify-between overflow-hidden">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400">Full Intelligence</div>
                  <h3 className="text-xl font-bold text-white mt-1">Creator Pro</h3>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800/80 px-2 py-0.5 rounded">
                  7-Day Free Trial
                </span>
              </div>
              <p className="text-slate-400 text-xs">For channels and studios dedicated to high retention.</p>

              <div className="flex items-baseline gap-1">
                {billingCycle === 'monthly' ? (
                  <>
                    <span className="text-3xl font-extrabold text-white font-mono tracking-tight">$19.99</span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-extrabold text-white font-mono tracking-tight">$149</span>
                    <span className="text-xs text-slate-400 font-mono">/ year ($12.41/mo)</span>
                  </>
                )}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                <MdFlashOn className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes 7-day free trial. Cancel anytime in Store settings.</span>
              </div>

              <ul className="space-y-3 pt-1 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Unlimited 0:00–0:30 Pre-Flight Simulations</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1-Click Prescriptive Hook Restructuring</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Live YouTube Data API v3</strong> Channel Baseline Sync</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Daily Retention Blueprints</strong> and topic fatigue radar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cross-device sync across iPhone, iPad, and Android via RevenueCat</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all active:scale-98 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Start 7-Day Free Trial</span>
              </button>
              <div className="text-[10px] text-center text-slate-500 font-mono">
                Billed securely via Apple App Store or Google Play Store
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


