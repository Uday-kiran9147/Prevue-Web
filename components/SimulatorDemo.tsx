'use client';

import React, { useState, useMemo } from 'react';
import { MdShowChart, MdWarning, MdCheckCircle, MdAutoAwesome, MdAutoFixHigh, MdAutorenew } from 'react-icons/md';;
import confetti from 'canvas-confetti';

export const SimulatorDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'sandbox'>('compare');
  const [currentPreset, setCurrentPreset] = useState<'hazard' | 'outlier'>('hazard');
  const [scrubSecond, setScrubSecond] = useState<number>(6);
  const [customScript, setCustomScript] = useState<string>(
    "Hey guys! Welcome back to my channel. Today I'm super excited to share 5 tips that helped me grow, but before we get started make sure you hit that subscribe button..."
  );
  const [isApplyingFix, setIsApplyingFix] = useState(false);

  const rubyHazardScript = "Hey guys, welcome back to the channel! In this video today, before we get started, please make sure to smash that like button and subscribe. Today I want to discuss how YouTube retention works and why your videos might be dying...";
  const jadeOutlierScript = "In the next 30 seconds, I will show you the exact 4-second pattern interrupt that took our average retention from 38% to 74%. If you're doing this one thing at second 6, your video is already dead.";

  const activeScriptText = activeTab === 'compare' 
    ? (currentPreset === 'hazard' ? rubyHazardScript : jadeOutlierScript)
    : customScript;

  const evaluation = useMemo(() => {
    const text = activeScriptText.trim().toLowerCase();
    const wordCount = activeScriptText.trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round((wordCount / 30) * 60) || 130;

    let score = 8.8;
    let hazards: Array<{ second: number; title: string; desc: string; type: 'danger' | 'warning' }> = [];

    if (text.includes('welcome back') || text.includes('hey guys') || text.includes('in this video')) {
      score -= 2.2;
      hazards.push({
        second: 4,
        title: 'Throat-Clearing Intro (0:02-0:06)',
        desc: 'Viewer is forced to wait for value. Expected 32% drop-off hazard.',
        type: 'danger',
      });
    }

    if (text.includes('subscribe') || text.includes('like button') || text.includes('bell')) {
      score -= 1.8;
      hazards.push({
        second: 12,
        title: 'Premature Call To Action (0:08-0:14)',
        desc: 'Asking for subscriptions before delivering promised insight.',
        type: 'danger',
      });
    }

    if (text.startsWith('today') || text.startsWith('so') || text.startsWith('well')) {
      score -= 0.6;
      hazards.push({
        second: 2,
        title: 'Passive Opener (0:00-0:03)',
        desc: 'Lacks high-contrast visual or narrative tension.',
        type: 'warning',
      });
    }

    if (text.includes('in the next') || text.includes('exact') || text.includes('pattern interrupt') || text.includes('nobody tells you')) {
      score += 1.4;
    }

    score = Math.max(2.1, Math.min(9.8, score));
    score = Math.round(score * 10) / 10;

    const isJade = score >= 8.5;
    const isRuby = score <= 6.5;

    const timeline = [];
    let currentPct = 100;
    for (let s = 0; s <= 30; s += 2) {
      const drop = isJade ? 0.8 : isRuby ? 2.5 : 1.5;
      const hazardImpact = hazards.some(h => Math.abs(h.second - s) <= 2) ? 4.0 : 0;
      currentPct = Math.max(30, currentPct - drop - hazardImpact * 0.3);
      timeline.push({
        second: s,
        retentionPct: Math.round(currentPct),
      });
    }

    return {
      score,
      isJade,
      isRuby,
      wpm,
      hazards,
      timeline,
      curiosityIndex: isJade ? 9.6 : isRuby ? 4.8 : 7.1,
      velocity: isJade ? 9.4 : isRuby ? 5.2 : 7.0,
      dropRiskPct: isRuby ? 48 : isJade ? 8 : 24,
    };
  }, [activeScriptText, activeTab, currentPreset]);

  const handleApply1ClickFix = () => {
    setIsApplyingFix(true);
    setTimeout(() => {
      if (activeTab === 'compare') {
        setCurrentPreset('outlier');
      } else {
        setCustomScript(
          "Here is the single biggest retention mistake creators make in the first 30 seconds. Watch what happens when you replace your channel greeting with this 3-second tension loop."
        );
      }
      setIsApplyingFix(false);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10B981', '#059669', '#34D399', '#F59E0B']
        });
      } catch (e) {}
    }, 450);
  };

  return (
    <section id="simulator-section" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-800">
            <MdShowChart className="w-3.5 h-3.5 text-red-600" />
            <span>Core Simulator Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Pre-Flight Retention Hazard Scrubber
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience how Prevue identifies 0:00–0:30 drop-off traps in seconds and applies 1-click prescriptive script fixes.
          </p>

          <div className="flex items-center justify-center pt-3">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'compare'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                Side-by-Side Hazard vs Outlier
              </button>
              <button
                onClick={() => setActiveTab('sandbox')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'sandbox'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                Custom Script Sandbox
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Script Editor & 1-Click Fix */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-studio-card rounded-2xl p-6 border border-studio-border shadow-studio">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${evaluation.isJade ? 'bg-red-500 ring-4 ring-red-100' : 'bg-rose-500 ring-4 ring-rose-100'}`} />
                  <span className="font-bold text-sm text-black font-mono">
                    0:00–0:30 SCRIPT AUDIT
                  </span>
                </div>

                {activeTab === 'compare' ? (
                  <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200">
                    <button
                      onClick={() => setCurrentPreset('hazard')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors flex items-center gap-1 ${
                        currentPreset === 'hazard'
                          ? 'bg-rose-100 text-rose-800 font-bold border border-rose-200'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <MdWarning className="w-3 h-3 text-rose-600" />
                      Ruby Hazard (6.2)
                    </button>
                    <button
                      onClick={() => setCurrentPreset('outlier')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors flex items-center gap-1 ${
                        currentPreset === 'outlier'
                          ? 'bg-red-100 text-red-800 font-bold border border-red-200'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <MdCheckCircle className="w-3 h-3 text-red-600" />
                      Jade Outlier (9.4)
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 font-mono">
                    Type or paste any YouTube intro
                  </span>
                )}
              </div>

              <div className="relative">
                {activeTab === 'compare' ? (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-mono leading-relaxed min-h-[140px] flex flex-col justify-between">
                    <div>
                      {currentPreset === 'hazard' ? (
                        <>
                          <span className="bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-semibold border-b-2 border-rose-400">
                            Hey guys, welcome back to the channel!
                          </span>{' '}
                          In this video today, before we get started, please{' '}
                          <span className="bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-semibold border-b-2 border-rose-400">
                            make sure to smash that like button and subscribe
                          </span>
                          . Today I want to discuss how YouTube retention works and why your videos might be dying...
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-900 px-1.5 py-0.5 rounded font-semibold border-b-2 border-red-400">
                            In the next 30 seconds, I will show you the exact 4-second pattern interrupt
                          </span>{' '}
                          that took our average retention from 38% to 74%. If you're doing this one thing at second 6, your video is already dead.
                        </>
                      )}
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>Speaking Pace: <strong className="text-slate-700">{evaluation.wpm} WPM</strong></span>
                      <span>Estimated Duration: <strong className="text-slate-700">28.4s</strong></span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <textarea
                      value={customScript}
                      onChange={(e) => setCustomScript(e.target.value)}
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-mono leading-relaxed focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none shadow-inner"
                      placeholder="Paste your 0:00–0:30 script draft here..."
                    />
                    <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                      <span>Pacing: <strong className="text-slate-700">{evaluation.wpm} WPM</strong> (Target: 135–155)</span>
                      <span>{customScript.trim().split(/\s+/).filter(Boolean).length} words</span>
                    </div>
                  </div>
                )}
              </div>

              {(!evaluation.isJade || activeTab === 'sandbox') && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-xs text-amber-900">
                    <MdAutoFixHigh className="w-4 h-4 text-amber-700 shrink-0" />
                    <div>
                      <span className="font-bold">Prescriptive Fix Available:</span> Convert Ruby Hazard to Jade Outlier structure.
                    </div>
                  </div>
                  <button
                    onClick={handleApply1ClickFix}
                    disabled={isApplyingFix}
                    className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all shrink-0 active:scale-95 disabled:opacity-50"
                  >
                    {isApplyingFix ? (
                      <MdAutorenew className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <MdAutoAwesome className="w-3.5 h-3.5" />
                    )}
                    <span>Apply 1-Click Fix</span>
                  </button>
                </div>
              )}

              <div className="mt-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Detected Scrub Hazards</div>
                {evaluation.hazards.length === 0 ? (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-800 font-medium">
                    <MdCheckCircle className="w-4 h-4 text-red-600" />
                    <span>Zero critical drop-off hazards detected in the first 30 seconds. Strong hook velocity.</span>
                  </div>
                ) : (
                  evaluation.hazards.map((h, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border text-xs flex items-start gap-3 ${
                        h.type === 'danger'
                          ? 'bg-rose-50/80 border-rose-200 text-rose-900'
                          : 'bg-amber-50/80 border-amber-200 text-amber-900'
                      }`}
                    >
                      <MdWarning className={`w-4 h-4 mt-0.5 shrink-0 ${h.type === 'danger' ? 'text-rose-600' : 'text-amber-600'}`} />
                      <div className="space-y-0.5">
                        <div className="font-bold">{h.title}</div>
                        <div className="text-slate-600 text-[11px]">{h.desc}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Radial Hook Score & Interactive Scrubber Timeline */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-studio flex flex-col items-center text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Pre-Flight Hook Score (0–10)</div>
              
              <div className="relative w-44 h-44 flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-100"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className={`transition-all duration-700 ease-out ${
                      evaluation.isJade ? 'stroke-red-500' : evaluation.isRuby ? 'stroke-rose-500' : 'stroke-amber-500'
                    }`}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * (evaluation.score / 10))}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-black font-mono tracking-tight">
                    {evaluation.score}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-0.5 ${
                      evaluation.isJade
                        ? 'bg-red-100 text-red-800'
                        : evaluation.isRuby
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {evaluation.isJade ? 'Jade Outlier' : evaluation.isRuby ? 'Ruby Hazard' : 'Amber Baseline'}
                  </span>
                </div>
              </div>

              <div className="w-full pt-4 mt-2 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Hook Velocity</div>
                  <div className="text-xs font-bold text-slate-800 font-mono">{evaluation.velocity} / 10</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Curiosity</div>
                  <div className="text-xs font-bold text-slate-800 font-mono">{evaluation.curiosityIndex} / 10</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Drop-Off Risk</div>
                  <div className={`text-xs font-bold font-mono ${evaluation.isRuby ? 'text-rose-600' : 'text-red-600'}`}>
                    {evaluation.dropRiskPct}%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MdShowChart className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold tracking-wide">0:00–0:30 Drop-Off Scrubber</span>
                </div>
                <span className="text-xs font-mono text-red-400">
                  {scrubSecond < 10 ? `0:0${scrubSecond}` : `0:${scrubSecond}`} Selected
                </span>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="2"
                  value={scrubSecond}
                  onChange={(e) => setScrubSecond(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>0:00 (Hook)</span>
                  <span>0:15 (Tension)</span>
                  <span>0:30 (Payoff)</span>
                </div>
              </div>

              <div className="h-20 flex items-end justify-between gap-1 pt-2">
                {evaluation.timeline.map((item, idx) => {
                  const isCurrent = Math.abs(item.second - scrubSecond) < 2;
                  return (
                    <div
                      key={idx}
                      onClick={() => setScrubSecond(item.second)}
                      className="flex-1 flex flex-col items-center gap-1 cursor-pointer group"
                    >
                      <div
                        className={`w-full rounded-t transition-all duration-300 ${
                          isCurrent
                            ? 'bg-white ring-2 ring-red-400'
                            : evaluation.isJade
                            ? 'bg-red-500 group-hover:bg-red-400'
                            : item.second <= 12
                            ? 'bg-rose-500 group-hover:bg-rose-400'
                            : 'bg-slate-700'
                        }`}
                        style={{ height: `${(item.retentionPct / 100) * 55}px` }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="p-3 rounded-lg bg-black border border-slate-800 text-xs flex items-center justify-between">
                <div>
                  <span className="text-slate-400">Retention at {scrubSecond}s: </span>
                  <span className="font-bold text-white font-mono">
                    {evaluation.timeline.find(t => t.second === scrubSecond)?.retentionPct || 85}%
                  </span>
                </div>
                <div className="text-[11px] text-red-400 font-semibold">
                  {scrubSecond <= 6 && evaluation.isRuby ? '⚠️ High Drop-Off Hazard' : '✓ Optimal Retention Velocity'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
