'use client';

import React, { useState } from 'react';
import { MdCheck, MdAutoAwesome, MdFlashOn, MdSmartphone } from 'react-icons/md';;

interface PricingProps {
  onOpenDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDownload }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing-section" className="py-20 bg-studio-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-800">
            <MdAutoAwesome className="w-3.5 h-3.5 text-red-600" />
            <span>RevenueCat In-App Subscriptions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Predictable Pricing for High-Retention Creators
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Start with 3 free simulations on your phone. Unlock unlimited 0:00–0:30 simulations and YouTube Data API channel baseline with Creator Pro.
          </p>

          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-black' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-12 h-6 rounded-full bg-black p-0.5 transition-colors focus:outline-none"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-red-400 shadow-md transform transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${billingCycle === 'annual' ? 'text-black' : 'text-slate-400'}`}>
                Annual Billing
              </span>
              <span className="text-[10px] font-bold text-red-700 bg-red-100 border border-red-300 px-2 py-0.5 rounded-full">
                Save 38%
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Free Tier Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-studio flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Starter Baseline</div>
                <h3 className="text-2xl font-bold text-black mt-1">Free Tier</h3>
                <p className="text-slate-500 text-xs mt-1">Ideal for testing your first couple of video scripts.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-black font-mono">$0</span>
                <span className="text-xs text-slate-400 font-medium">/ forever</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>3 Pre-Flight Simulations</strong> per month</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Hook Score (0–10) radial gauge breakdown</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>Basic 0:00–0:30 drop-off hazard detection</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-slate-300">—</span>
                  <span>1-Click Prescriptive Script Fixes (Pro only)</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5 text-slate-300">—</span>
                  <span>YouTube Data API Channel Graph Sync (Pro only)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MdSmartphone className="w-4 h-4" />
                <span>Download Free on iOS & Android</span>
              </button>
            </div>
          </div>

          {/* Creator Pro Card */}
          <div className="relative bg-black text-white rounded-2xl p-8 border-2 border-red-500 shadow-studio-lg flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-black text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              Most Popular
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Unlimited Intelligence</div>
                <h3 className="text-2xl font-bold text-white mt-1">Creator Pro</h3>
                <p className="text-slate-400 text-xs mt-1">For serious creators and production studios aiming for outlier retention.</p>
              </div>

              <div className="flex items-baseline gap-1">
                {billingCycle === 'monthly' ? (
                  <>
                    <span className="text-4xl font-black text-white font-mono">$19.99</span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-black text-white font-mono">$149</span>
                    <span className="text-xs text-slate-400 font-medium">/ year ($12.41/mo equivalent)</span>
                  </>
                )}
              </div>

              <div className="p-2.5 rounded-xl bg-black border border-slate-800 text-[11px] text-red-400 font-medium flex items-center gap-2">
                <MdFlashOn className="w-4 h-4 text-red-400 shrink-0" />
                <span>Includes 7-Day Free Trial. Cancel anytime in App Store / Google Play.</span>
              </div>

              <ul className="space-y-3 pt-1 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Unlimited 0:00–0:30 Pre-Flight Simulations</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>1-Click Prescriptive Script Fixes</strong> (Ruby $\rightarrow$ Jade rewrites)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Live YouTube Data API v3</strong> Channel Graph Baseline & Median Views</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Daily Prescriptive Briefings</strong> with AI concepts & topic radar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MdCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Instant restore purchases across iPhone, iPad, and Android via RevenueCat</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 space-y-2">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 rounded-xl bg-red-500 hover:bg-red-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-red-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <MdAutoAwesome className="w-4 h-4" />
                <span>Start 7-Day Free Trial</span>
              </button>
              <div className="text-[10px] text-center text-slate-500">
                Billed through Apple App Store or Google Play Store via RevenueCat
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
