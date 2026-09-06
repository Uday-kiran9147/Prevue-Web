import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { MdSecurity, MdOpenInNew, MdMail, MdLock, MdCheckCircle, MdStorage, MdSmartphone } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Privacy Policy — Prevue (YouTube API & Store Compliant)',
  description: 'Official privacy policy for Prevue. Transparent YouTube Data API v3 disclosure, zero credential collection, RevenueCat payment isolation, and data protection terms.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center gap-1"
          >
            ← Back to Prevue
          </Link>
        </div>

        {/* Policy Document Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
              <MdSecurity className="w-3.5 h-3.5 text-slate-600" />
              <span>Legal Disclosure</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Prevue Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
              <span>Last Updated: August 24, 2026</span>
              <span>•</span>
              <span>App Store & Google Play Compliant</span>
            </div>
          </div>

          {/* Mandatory YouTube API Services Disclosure Box */}
          <div className="p-5 rounded-lg bg-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                1. YouTube API Services & Google Privacy Policy Disclosure
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prevue uses the <strong>YouTube Data API v3</strong> to retrieve public channel statistics (public handle, subscriber count, video titles, and upload metrics) to construct your Channel Graph baseline.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              By using Prevue, you explicitly agree to be bound by the{' '}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline inline-flex items-center gap-1"
              >
                YouTube Terms of Service <MdOpenInNew className="w-3 h-3" />
              </a>
              . Furthermore, your data is accessed and processed in accordance with the{' '}
              <a
                href="https://www.google.com/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline inline-flex items-center gap-1"
              >
                Google Privacy Policy <MdOpenInNew className="w-3 h-3" />
              </a>
              .
            </p>
            <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs text-slate-400">
              Users may revoke Prevue’s access to their YouTube data at any time via the{' '}
              <a
                href="https://security.google.com/settings/security/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:underline inline-flex items-center gap-1"
              >
                Google Security Settings page <MdOpenInNew className="w-2.5 h-2.5" />
              </a>
              .
            </div>
          </div>

          {/* Section: Data Collected */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MdStorage className="w-4 h-4 text-slate-700" />
              2. Data Collected by Prevue
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We practice data minimization. Prevue only processes the minimum information necessary to calculate your Hook Score and generate retention simulations:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900">Public Channel Metadata</div>
                <p className="text-slate-600">Channel handles (@name), public subscriber counts, public video titles, upload frequency, and view statistics fetched via YouTube Data API v3.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900">Script Drafts & Hooks</div>
                <p className="text-slate-600">The 0:00–0:30 script snippets you input into the Pre-Flight Simulator are evaluated client-side or ephemerally in-memory to compute your Hook Score.</p>
              </div>
            </div>
          </div>

          {/* Section: Data NOT Collected */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MdLock className="w-4 h-4 text-slate-700" />
              3. Data NOT Collected
            </h2>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-2">
              <p className="font-semibold text-slate-900">Prevue guarantees that it does NOT collect or access:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>No Google account passwords or private authentication credentials.</li>
                <li>No private YouTube videos, unlisted video drafts, or unpublished analytics.</li>
                <li>No browsing history, cookies, or external activity outside of public YouTube metadata.</li>
                <li>No biometric, geolocation, or third-party behavioral profiling trackers.</li>
              </ul>
            </div>
          </div>

          {/* Section: Subscriptions & In-App Payments */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MdSmartphone className="w-4 h-4 text-slate-700" />
              4. In-App Subscriptions & RevenueCat
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All in-app purchases and Creator Pro subscriptions are processed securely through <strong>Apple StoreKit</strong> (iOS) and <strong>Google Play Billing</strong> (Android) via our subscription infrastructure provider, <strong>RevenueCat</strong>.
            </p>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-900">Zero Raw Payment Storage</div>
              <p className="text-slate-600">Prevue never receives, stores, or transmits credit card numbers or banking information on our servers. All transaction billing is exclusively governed by Apple and Google Store terms.</p>
            </div>
          </div>

          {/* Section: Data Retention, Local Caching & No-Sale Pledge */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">
              5. Data Retention, Caching & No-Sale Pledge
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Local-First Caching:</strong> Public channel graph metrics are cached locally on your device to minimize network requests and optimize performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Sale of Personal Data:</strong> We do not sell, rent, monetize, or trade your personal information or script drafts to data brokers, advertisers, or third parties.</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Right to Erasure:</strong> You can purge all cached channel graphs and simulation history at any time through the app or via our <Link href="/delete-account" className="text-slate-900 underline font-semibold">Account Deletion portal</Link>.</span>
              </li>
            </ul>
          </div>

          {/* Section: Contact Information */}
          <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold text-slate-900">Have Questions About Your Privacy?</h3>
              <p className="text-xs text-slate-500">Our legal and compliance team is available to help.</p>
            </div>
            <a
              href="mailto:privacy@prevue.app"
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <MdMail className="w-3.5 h-3.5" />
              <span>privacy@prevue.app</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

