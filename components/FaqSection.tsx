'use client';

import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Prevue and how does the Retention Simulator work?",
      a: "Prevue is a YouTube Creator Intelligence and pre-flight hook testing app. It evaluates your opening 0:00–0:30 script draft before filming, detecting audience drop-off traps such as throat-clearing greetings, delayed value promises, or premature subscription pleas. It provides an objective Hook Score (0–10) and structured rewrite recommendations to maximize 30-second viewer hold rate."
    },
    {
      q: "How does Prevue use the official YouTube Data API v3?",
      a: "Prevue connects strictly via the read-only YouTube Data API v3 to fetch public channel statistics (such as public subscriber count, video titles, and median view benchmarks). We never ask for Google passwords or OAuth write permissions. Public channel metadata is cached locally on your device to establish your channel baseline."
    },
    {
      q: "How do subscriptions and the 7-Day Free Trial work?",
      a: "Subscriptions for Prevue Creator Pro ($19.99/mo or $149/yr) are managed securely through Apple StoreKit and Google Play Billing via RevenueCat. You can start with a 7-day free trial directly on your mobile device. Prevue never sees or stores raw payment information. You can manage or cancel your subscription at any time in your iOS or Android device settings."
    },
    {
      q: "Can I delete my account and purge cached data?",
      a: "Yes. In full compliance with Apple App Store Guideline 5.1.1(v) and Google Play User Data Policies, you can initiate permanent account and data deletion either inside the app (Settings > Account & Graph > Delete My Data) or via our web Account Deletion portal (/delete-account)."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-subtle">
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Prevue, retention scoring, and store compliance.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 shadow-subtle overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-neutral-100/50 transition-colors"
                >
                  <span className="font-semibold text-neutral-950 text-sm sm:text-base">{faq.q}</span>
                  {isOpen ? (
                    <MdExpandLess className="w-5 h-5 text-neutral-700 shrink-0" />
                  ) : (
                    <MdExpandMore className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4 bg-white">
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



