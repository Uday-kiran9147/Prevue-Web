'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdDelete, MdWarning, MdGppBad, MdCheckCircle, MdPlayArrow } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';

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
    }, 500);
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center gap-1"
          >
            ← Back to Prevue
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
            <span>Store Compliance Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Account & Data Deletion
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In accordance with <strong>Apple App Store Guideline 5.1.1(v)</strong> and <strong>Google Play User Data Policies</strong>, you can permanently delete your Prevue data and cached channel taxonomy at any time.
          </p>
        </div>

        {/* Crucial Active Subscription Warning Box */}
        <div className="rounded-xl bg-amber-50/90 border border-amber-300/80 p-5 sm:p-6 space-y-4">
          <div className="flex items-start gap-3">
            <MdWarning className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-amber-950">
                Subscription Notice: Deleting Account Does Not Cancel App Store / Play Store Billing
              </h2>
              <p className="text-xs text-amber-900 leading-relaxed">
                Deleting your account will purge all simulator history and cached data, but recurring StoreKit or Google Play Billing subscriptions must be cancelled directly in your device operating system settings.
              </p>
            </div>
          </div>

          {/* Step-by-step guides for iOS & Android */}
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            {/* Apple iOS Cancellation Steps */}
            <div className="p-3.5 rounded-lg bg-white border border-amber-200 text-xs text-slate-700 space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <FaApple className="w-3.5 h-3.5" />
                How to Cancel on iPhone / iPad:
              </div>
              <ol className="list-decimal list-inside space-y-0.5 text-slate-600 leading-relaxed text-[11px]">
                <li>Open <strong>Settings</strong> on iOS.</li>
                <li>Tap your <strong>Apple ID</strong> at the top.</li>
                <li>Tap <strong>Subscriptions</strong>.</li>
                <li>Select <strong>Prevue</strong>.</li>
                <li>Tap <strong>Cancel Subscription</strong>.</li>
              </ol>
            </div>

            {/* Android Google Play Cancellation Steps */}
            <div className="p-3.5 rounded-lg bg-white border border-amber-200 text-xs text-slate-700 space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <MdPlayArrow className="w-3.5 h-3.5" />
                How to Cancel on Android:
              </div>
              <ol className="list-decimal list-inside space-y-0.5 text-slate-600 leading-relaxed text-[11px]">
                <li>Open <strong>Google Play Store</strong>.</li>
                <li>Tap your profile icon at top right.</li>
                <li>Tap <strong>Payments & subscriptions</strong> &gt; <strong>Subscriptions</strong>.</li>
                <li>Select <strong>Prevue</strong>.</li>
                <li>Tap <strong>Cancel subscription</strong>.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* 2-Column Section */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* Column 1: Self-Service Deletion Form */}
          <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 shadow-card p-5 sm:p-6 space-y-5">
            <div className="space-y-0.5 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-slate-400">Method 1</span>
              <h2 className="text-base font-bold text-slate-900">Web Data Deletion Request</h2>
            </div>

            {submittedTicket ? (
              <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <MdCheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-emerald-950">Deletion Request Logged</h3>
                  <p className="text-xs text-emerald-800">
                    Request for <strong>{handle}</strong> has been registered.
                  </p>
                </div>
                <div className="p-2.5 rounded bg-white border border-emerald-200 font-mono text-xs text-slate-800 font-bold">
                  Ticket: {submittedTicket}
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
                  className="px-3.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMsg && (
                  <div className="p-2.5 rounded-md bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                    <MdGppBad className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    YouTube Channel Handle <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="e.g. @yourchannel"
                    className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Email Address Associated With Purchase <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creator@domain.com"
                    className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Let us know how we could improve..."
                    className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="confirmDelete"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 text-slate-900 rounded border-slate-300 focus:ring-slate-900"
                  />
                  <label htmlFor="confirmDelete" className="text-xs text-slate-700 cursor-pointer">
                    I acknowledge that this action is irreversible and will permanently wipe my cached channel graphs and simulation history.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-all active:scale-98 disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  <MdDelete className="w-4 h-4" />
                  <span>{isSubmitting ? 'Processing Request...' : 'Submit Permanent Deletion Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 2: In-App Deletion Instructions & Data Purge Breakdown */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-card p-5 space-y-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-slate-400">Method 2</span>
                <h3 className="text-sm font-bold text-slate-900">Instant In-App Deletion</h3>
                <p className="text-xs text-slate-500">Purge data immediately directly inside the app:</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 text-white font-mono text-xs space-y-1.5 border border-slate-800">
                <div className="text-slate-400 text-[9px] uppercase">Navigation Path:</div>
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold text-xs">
                  <span>Settings</span>
                  <span>&gt;</span>
                  <span>Account &amp; Graph</span>
                  <span>&gt;</span>
                  <span className="text-rose-400">Delete My Data</span>
                </div>
                <div className="text-[10px] text-slate-400 pt-1">
                  ✓ Instant client-side cache wipe
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-card p-5 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                What Gets Purged
              </h3>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-900">Channel Graphs & History:</div>
                  <p className="text-[11px] text-slate-500">All cached YouTube channel metrics, hook score logs, and custom drafts are expunged.</p>
                </div>

                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-900">RevenueCat Alias:</div>
                  <p className="text-[11px] text-slate-500">Your App User ID is unlinked and anonymized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
