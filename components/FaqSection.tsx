'use client';

import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess, MdHelpOutline } from 'react-icons/md';;

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Prevue and how does the Pre-Flight Simulator work?",
      a: "Prevue is a YouTube Creator Intelligence and Pre-Flight Simulator app. It analyzes your opening 0:00–0:30 script draft before you film, detecting psychological drop-off hazards (such as throat-clearing intros, premature calls-to-action, or slow pacing). It provides an objective Hook Score (0–10) and 1-click prescriptive script fixes to convert low-retention Ruby Hazards into high-retention Jade Outliers."
    },
    {
      q: "How does Prevue use the YouTube Data API v3?",
      a: "Prevue utilizes the official YouTube Data API v3 strictly to fetch public channel statistics (such as public subscriber counts, video titles, and median view benchmarks). We never request private account passwords or OAuth write permissions. Public metadata is used only to calibrate your channel graph baseline and is cached locally on your device."
    },
    {
      q: "How do subscriptions and the 7-Day Free Trial work?",
      a: "Subscriptions for Prevue Creator Pro ($19.99/mo or $149/yr) are managed securely via Apple StoreKit and Google Play Billing through RevenueCat. You can start with a 7-day free trial on your mobile device. Prevue never sees or stores your raw credit card data. You can manage or cancel your subscription at any time directly in your iOS or Android device settings."
    },
    {
      q: "Can I delete my account and cached data?",
      a: "Yes! In full compliance with Apple App Store Guideline 5.1.1(v) and Google Play User Data Policies, you can initiate account deletion either inside the app (Settings > Account & Graph > Delete My Data) or directly on the web via our Account Deletion portal (/delete-account)."
    }
  ];

  return (
    <section className="py-20 bg-studio-bg border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800">
            <MdHelpOutline className="w-3.5 h-3.5 text-slate-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about Prevue, retention scoring, and store compliance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-black text-sm md:text-base">{faq.q}</span>
                  {isOpen ? (
                    <MdExpandLess className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <MdExpandMore className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
