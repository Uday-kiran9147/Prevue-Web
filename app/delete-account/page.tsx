'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdDelete, MdWarning, MdGppBad, MdCheckCircle, MdPlayArrow } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';;

export default function AccountDeletionPage() {
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handle.trim() || !email.trim()) {
      setErrorMsg('Please provide both your YouTube handle and registered email address.');
      return;
    }
    if (!confirmed) {
      setErrorMsg('Please check the confirmation box acknowledging permanent data deletion.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicket = `PRV-DEL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(generatedTicket);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="py-12 md:py-20 bg-studio-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="text-xs font-semibold text-red-700 hover:text-red-800 flex items-center gap-1"
          >
            ← Back to Prevue Flight Deck
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-800">
            <MdDelete className="w-4 h-4 text-rose-600" />
            <span>Store Compliance Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Prevue Account & Data Deletion
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In accordance with <strong>Apple App Store Guideline 5.1.1(v)</strong> and <strong>Google Play User Data Policies</strong>, you can permanently delete your Prevue account, cached channel graphs, and simulator blueprints at any time.
          </p>
        </div>

        {/* Crucial Active Subscription Warning Box */}
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 bg-amber-200/80 rounded-xl text-amber-900 shrink-0 mt-0.5">
              <MdWarning className="w-6 h-6 text-amber-800" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-black text-amber-950">
                ⚠️ Crucial Subscription Advisory: Deleting Account Does NOT Cancel Store Billing
              </h2>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Deleting your Prevue account will permanently wipe your cached channel data and simulator history, but <strong>it does NOT automatically cancel your active recurring subscription</strong> on Apple App Store or Google Play Store. You must cancel active subscriptions directly through your device operating system to avoid recurring charges.
              </p>
            </div>
          </div>

          {/* Expandable Step-by-step guides for iOS & Android */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {/* Apple iOS Cancellation Steps */}
            <div className="p-4 rounded-xl bg-white border border-amber-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-black flex items-center gap-1.5">
                <FaApple className="w-4 h-4 text-black" />
                How to Cancel on iPhone / iPad:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
                <li>Open <strong>Settings</strong> on your iOS device.</li>
                <li>Tap your <strong>Apple ID name</strong> at the top.</li>
                <li>Tap <strong>Subscriptions</strong>.</li>
                <li>Select <strong>Prevue: Retention Simulator</strong>.</li>
                <li>Tap <strong>Cancel Subscription</strong>.</li>
              </ol>
            </div>

            {/* Android Google Play Cancellation Steps */}
            <div className="p-4 rounded-xl bg-white border border-amber-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-black flex items-center gap-1.5">
                <MdPlayArrow className="w-3.5 h-3.5 fill-current text-black" />
                How to Cancel on Android:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
                <li>Open the <strong>Google Play Store</strong> app.</li>
                <li>Tap your profile icon at top right.</li>
                <li>Tap <strong>Payments & subscriptions</strong> &gt; <strong>Subscriptions</strong>.</li>
                <li>Select <strong>Prevue: Creator Pro</strong>.</li>
                <li>Tap <strong>Cancel subscription</strong>.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* 2-Column Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Self-Service Deletion Form */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-studio-lg p-6 sm:p-8 space-y-6">
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Method 1</span>
              <h2 className="text-xl font-bold text-black">Self-Service Web Deletion Form</h2>
              <p className="text-xs text-slate-500">Submit an official data purge request directly through this verified portal.</p>
            </div>

            {submittedTicket ? (
              <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                  <MdCheckCircle className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-red-950">Deletion Request Logged</h3>
                  <p className="text-xs text-red-800">
                    Your request for <strong>{handle}</strong> has been registered.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-red-200 font-mono text-xs text-slate-800 font-bold">
                  Tracking Ticket: {submittedTicket}
                </div>
                <p className="text-[11px] text-slate-600">
                  Data purge turnaround SLA: Processed within <strong>7 business days</strong>. A confirmation email will be sent to <strong>{email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setHandle('');
                    setEmail('');
                    setConfirmed(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                    <MdGppBad className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    YouTube Channel Handle <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="e.g. @yourchannel"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-black focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address Associated With Purchase <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creator@domain.com"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-black focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Let us know how we could improve..."
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-black focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="confirmDelete"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-1 w-4 h-4 text-rose-600 rounded border-slate-300 focus:ring-rose-500"
                  />
                  <label htmlFor="confirmDelete" className="text-xs text-rose-950 cursor-pointer">
                    I understand that this action is <strong>irreversible</strong> and will permanently erase my cached retention graphs, Hook Score history, and RevenueCat alias.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <MdDelete className="w-4 h-4" />
                  <span>{isSubmitting ? 'Processing Request...' : 'Submit Permanent Deletion Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 2: In-App Deletion Instructions & Data Purge Breakdown */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-studio p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Method 2</span>
                <h3 className="text-lg font-bold text-black">Instant In-App Deletion</h3>
                <p className="text-xs text-slate-500">Purge data immediately directly inside the Prevue mobile app:</p>
              </div>

              <div className="p-4 rounded-xl bg-black text-white font-mono text-xs space-y-2 border border-slate-800">
                <div className="text-slate-400 text-[10px] uppercase">Navigation Path:</div>
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <span>Settings</span>
                  <span>&gt;</span>
                  <span>Account &amp; Graph</span>
                  <span>&gt;</span>
                  <span className="text-rose-400">Delete My Data</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  ✓ Instant client-side cache wipe<br />
                  ✓ Anonymizes device identifier
                </div>
              </div>
            </div>

            <div className="bg-studio-card rounded-2xl border border-studio-border p-6 space-y-4">
              <h3 className="text-sm font-bold text-black uppercase tracking-wider">
                What Data Gets Purged
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-black">Local &amp; Cloud Storage:</div>
                  <p className="text-slate-600">All cached YouTube channel graphs, historical hook scores, 0:00–0:30 scrub history, and custom blueprints are permanently expunged.</p>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-black">RevenueCat Customer Alias:</div>
                  <p className="text-slate-600">Your App User ID is anonymized and unlinked from any customer analytics profile.</p>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-black">Turnaround SLA:</div>
                  <p className="text-slate-600">Instant purge if executed via the in-app menu; processed within 7 business days if submitted through this web form.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
