import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { MdSecurity, MdOpenInNew, MdMail, MdLock, MdCheckCircle, MdStorage, MdSmartphone } from 'react-icons/md';;

export const metadata: Metadata = {
  title: 'Privacy Policy — Prevue (YouTube API & Store Compliant)',
  description: 'Official privacy policy for Prevue. Transparent YouTube Data API v3 disclosure, zero credential collection, RevenueCat payment isolation, and data protection terms.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-studio-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs font-semibold text-red-700 hover:text-red-800 flex items-center gap-1"
          >
            ← Back to Prevue Flight Deck
          </Link>
        </div>

        {/* Policy Document Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-studio-lg p-6 sm:p-10 md:p-12 space-y-10">
          {/* Header */}
          <div className="space-y-3 pb-8 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-800">
              <MdSecurity className="w-4 h-4 text-red-600" />
              <span>Official Privacy Policy & Legal Disclosure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Prevue Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
              <span>Last Updated: August 24, 2026</span>
              <span>•</span>
              <span>Effective: Immediately</span>
              <span>•</span>
              <span>App Store & Google Play Verified</span>
            </div>
          </div>

          {/* Mandatory YouTube API Services Disclosure Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black text-white border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                1. YouTube API Services & Google Privacy Policy Disclosure
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prevue uses the <strong>YouTube Data API v3</strong> to retrieve public channel metadata (such as public handle details, subscriber tiers, video titles, and upload metrics) to construct your Channel Graph Baseline.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              By using Prevue or accessing our pre-flight features, you explicitly agree to be bound by the{' '}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-semibold underline inline-flex items-center gap-1"
              >
                YouTube Terms of Service <MdOpenInNew className="w-3 h-3" />
              </a>
              . Furthermore, your data is accessed, processed, and handled in accordance with the{' '}
              <a
                href="https://www.google.com/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-semibold underline inline-flex items-center gap-1"
              >
                Google Privacy Policy <MdOpenInNew className="w-3 h-3" />
              </a>
              .
            </p>
            <div className="p-3 rounded-xl bg-black border border-slate-800 text-xs text-slate-400">
              Users may revoke Prevue’s access to their YouTube data at any time via the{' '}
              <a
                href="https://security.google.com/settings/security/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline inline-flex items-center gap-1"
              >
                Google Security Settings page <MdOpenInNew className="w-2.5 h-2.5" />
              </a>
              .
            </div>
          </div>

          {/* Section: Data Collected */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <MdStorage className="w-5 h-5 text-red-600" />
              2. Data Collected by Prevue
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We practice data minimization. Prevue only processes the minimum information necessary to calculate your Hook Score and generate retention simulations:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-black">Public Channel Metadata</div>
                <p>Channel handles (@name), public subscriber counts, public video titles, upload frequency, and view statistics fetched via YouTube Data API v3.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-black">Script Drafts & Hooks</div>
                <p>The 0:00–0:30 script snippets you input into the Pre-Flight Simulator are evaluated client-side or ephemerally in-memory to compute your Hook Score.</p>
              </div>
            </div>
          </div>

          {/* Section: Data NOT Collected */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <MdLock className="w-5 h-5 text-rose-600" />
              3. Data NOT Collected
            </h2>
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 space-y-2">
              <p className="font-semibold text-rose-900">Prevue guarantees that it does NOT collect or access:</p>
              <ul className="list-disc list-inside space-y-1 text-rose-800">
                <li>No Google account passwords or private authentication credentials.</li>
                <li>No private YouTube videos, unlisted video drafts, or unpublished analytics without explicit authorization.</li>
                <li>No browsing history, cookies, or external activity outside of public YouTube metadata.</li>
                <li>No biometric, geolocation, or third-party behavioral profiling trackers.</li>
              </ul>
            </div>
          </div>

          {/* Section: Subscriptions & In-App Payments */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <MdSmartphone className="w-5 h-5 text-indigo-600" />
              4. In-App Subscriptions & RevenueCat
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All in-app purchases and Creator Pro subscriptions are processed securely through <strong>Apple StoreKit</strong> (for iOS) and <strong>Google Play Billing</strong> (for Android) via our subscription infrastructure provider, <strong>RevenueCat</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-black">Zero Raw Payment Storage</div>
              <p>Prevue never receives, stores, or transmits credit card numbers, CVVs, or banking information on our servers. All transaction billing is exclusively governed by Apple and Google Store terms.</p>
            </div>
          </div>

          {/* Section: Data Retention, Local Caching & No-Sale Pledge */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">
              5. Data Retention, Caching & No-Sale Pledge
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Local-First Caching:</strong> Public channel graph metrics are cached locally on your device to minimize network requests and optimize performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>No Sale of Personal Data:</strong> We do not sell, rent, monetize, or trade your personal information or script drafts to data brokers, advertisers, or third parties.</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Right to Erasure:</strong> You can purge all cached channel graphs and simulation history at any time through the app or via our <Link href="/delete-account" className="text-rose-600 underline font-semibold">Account Deletion portal</Link>.</span>
              </li>
            </ul>
          </div>

          {/* Section: Contact Information */}
          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-black">Have Questions About Your Privacy?</h3>
              <p className="text-xs text-slate-600">Our Data Protection & Legal team is available 24/7 to address any compliance questions.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:privacy@prevue.app"
                className="px-4 py-2 rounded-xl bg-black hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <MdMail className="w-3.5 h-3.5 text-red-400" />
                <span>privacy@prevue.app</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
