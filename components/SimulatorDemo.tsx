'use client';

import React, { useState, useMemo } from 'react';
import { MdWarning, MdCheckCircle, MdArrowForward, MdAutorenew, MdInfoOutline } from 'react-icons/md';

export const SimulatorDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'sandbox'>('compare');
  const [currentPreset, setCurrentPreset] = useState<'weak' | 'strong'>('weak');
  const [scrubSecond, setScrubSecond] = useState<number>(6);
  const [customScript, setCustomScript] = useState<string>(
    "Hey guys! Welcome back to my channel. Today I'm super excited to share 5 tips that helped me grow, but before we get started make sure you hit that subscribe button..."
  );
  const [isApplyingFix, setIsApplyingFix] = useState(false);

  const weakScript = "Hey guys, welcome back to the channel! In this video today, before we get started, please make sure to smash that like button and subscribe. Today I want to discuss how YouTube retention works and why your videos might be dying...";
  const strongScript = "In the next 30 seconds, I will show you the exact 4-second pattern interrupt that took our average retention from 38% to 74%. If you're making this mistake at second 6, your video is already dead.";

  const activeScriptText = activeTab === 'compare' 
    ? (currentPreset === 'weak' ? weakScript : strongScript)
    : customScript;

  const evaluation = useMemo(() => {
    const text = activeScriptText.trim().toLowerCase();
    const wordCount = activeScriptText.trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round((wordCount / 30) * 60) || 140;

    let score = 8.8;
    let hazards: Array<{ second: number; title: string; desc: string; type: 'danger' | 'warning' }> = [];

    if (text.includes('welcome back') || text.includes('hey guys') || text.includes('in this video') || text.includes('excited to share')) {
      score -= 2.4;
      hazards.push({
        second: 4,
        title: 'Throat-Clearing Opening (0:02–0:06)',
        desc: 'Greeting the viewer before delivering a promise causes an immediate 28–35% drop-off.',
        type: 'danger',
      });
    }

    if (text.includes('subscribe') || text.includes('like button') || text.includes('smash that') || text.includes('hit that')) {
      score -= 2.0;
      hazards.push({
        second: 10,
        title: 'Premature Call to Action (0:08–0:14)',
        desc: 'Asking for likes or subscriptions before providing proof or value breaks audience trust.',
        type: 'danger',
      });
    }

    if (text.startsWith('today') || text.startsWith('so') || text.startsWith('well') || text.includes('super excited')) {
      score -= 0.8;
      hazards.push({
        second: 2,
        title: 'Passive Opener (0:00–0:03)',
        desc: 'Lacks immediate curiosity, stakes, or visual tension in the critical first frame.',
        type: 'warning',
      });
    }

    if (text.includes('in the next') || text.includes('exact') || text.includes('pattern interrupt') || text.includes('mistake') || text.includes('single biggest')) {
      score += 1.2;
    }

    score = Math.max(3.2, Math.min(9.8, score));
    score = Math.round(score * 10) / 10;

    const isStrong = score >= 8.0;
    const isWeak = score <= 6.5;

    const timeline = [];
    let currentPct = 100;
    for (let s = 0; s <= 30; s += 2) {
      const drop = isStrong ? 0.9 : isWeak ? 2.8 : 1.6;
      const hazardImpact = hazards.some(h => Math.abs(h.second - s) <= 2) ? 4.5 : 0;
      currentPct = Math.max(32, currentPct - drop - hazardImpact * 0.25);
      timeline.push({
        second: s,
        retentionPct: Math.round(currentPct),
      });
    }

    return {
      score,
      isStrong,
      isWeak,
      wpm,
      hazards,
      timeline,
      curiosityIndex: isStrong ? 9.4 : isWeak ? 4.2 : 6.8,
      velocity: isStrong ? 9.2 : isWeak ? 4.8 : 6.9,
      dropRiskPct: isWeak ? 52 : isStrong ? 12 : 28,
      finalHoldPct: timeline[timeline.length - 1]?.retentionPct || 50,
    };
  }, [activeScriptText, activeTab, currentPreset]);

  const handleApplyFix = () => {
    setIsApplyingFix(true);
    setTimeout(() => {
      if (activeTab === 'compare') {
        setCurrentPreset('strong');
      } else {
        setCustomScript(
          "Here is the single biggest mistake creators make in the first 30 seconds. Watch what happens when you replace your channel greeting with this 3-second tension loop."
        );
      }
      setIsApplyingFix(false);
    }, 350);
  };

  return (
    <section id="simulator-section" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span>Interactive Simulator Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Test Your 0:00–0:30 Script Retention
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Inspect line-by-line drop-off hazards in real time. Compare passive introductions against high-retention structural rewrites.
          </p>

          <div className="flex items-center justify-center pt-3">
            <div className="inline-flex p-1 bg-slate-200/70 rounded-lg border border-slate-200/80 shadow-subtle">
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'compare'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Preset Comparison
              </button>
              <button
                onClick={() => setActiveTab('sandbox')}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'sandbox'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Custom Script Sandbox
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Script Editor & Identified Hazards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-subtle">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${evaluation.isStrong ? 'bg-emerald-500' : 'bg-red-500'}`} />
                  <span className="font-semibold text-xs uppercase tracking-wider text-slate-700 font-mono">
                    Script Teleprompter
                  </span>
                </div>

                {activeTab === 'compare' ? (
                  <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg border border-slate-200/80">
                    <button
                      onClick={() => setCurrentPreset('weak')}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                        currentPreset === 'weak'
                          ? 'bg-white text-red-700 font-semibold shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Weak Intro (4.6)
                    </button>
                    <button
                      onClick={() => setCurrentPreset('strong')}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                        currentPreset === 'strong'
                          ? 'bg-white text-emerald-700 font-semibold shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Optimized Hook (9.2)
                    </button>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono">
                    Type or paste opening 30s
                  </span>
                )}
              </div>

              {/* Script Viewer / Editor */}
              <div>
                {activeTab === 'compare' ? (
                  <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/70 text-slate-800 text-sm leading-relaxed min-h-[120px] flex flex-col justify-between font-sans">
                    <div>
                      {currentPreset === 'weak' ? (
                        <>
                          <span className="bg-red-100/90 text-red-950 px-1.5 py-0.5 rounded font-medium border border-red-200">
                            Hey guys, welcome back to the channel!
                          </span>{' '}
                          In this video today, before we get started, please{' '}
                          <span className="bg-red-100/90 text-red-950 px-1.5 py-0.5 rounded font-medium border border-red-200">
                            make sure to smash that like button and subscribe
                          </span>
                          . Today I want to discuss how YouTube retention works and why your videos might be dying...
                        </>
                      ) : (
                        <>
                          <span className="bg-emerald-100/90 text-emerald-950 px-1.5 py-0.5 rounded font-medium border border-emerald-200">
                            In the next 30 seconds, I will show you the exact 4-second pattern interrupt
                          </span>{' '}
                          that took our average retention from 38% to 74%. If you're making this mistake at second 6, your video is already dead.
                        </>
                      )}
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Pacing: <strong className="text-slate-800 font-bold">{evaluation.wpm} WPM</strong></span>
                      <span>Target: <strong className="text-slate-800 font-medium">135–155 WPM</strong></span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <textarea
                      value={customScript}
                      onChange={(e) => setCustomScript(e.target.value)}
                      rows={4}
                      className="w-full p-3.5 rounded-lg bg-slate-50/80 border border-slate-200 text-slate-800 text-sm leading-relaxed focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:outline-none font-sans"
                      placeholder="Paste your 0:00–0:30 script draft here..."
                    />
                    <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-mono">
                      <span>Pacing: <strong className="text-slate-800">{evaluation.wpm} WPM</strong> (Target: 135–155)</span>
                      <span>{customScript.trim().split(/\s+/).filter(Boolean).length} words</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Restructure Hook CTA */}
              {(!evaluation.isStrong || activeTab === 'sandbox') && (
                <div className="mt-4 p-3.5 rounded-lg bg-amber-50/90 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs text-amber-950">
                    <span className="font-bold">Prescriptive Suggestion:</span> Replace throat-clearing intro with an immediate tension loop.
                  </div>
                  <button
                    onClick={handleApplyFix}
                    disabled={isApplyingFix}
                    className="w-full sm:w-auto px-3.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shrink-0 active:scale-98 disabled:opacity-50 shadow-sm"
                  >
                    {isApplyingFix ? (
                      <MdAutorenew className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <MdArrowForward className="w-3.5 h-3.5" />
                    )}
                    <span>Apply Optimized Hook</span>
                  </button>
                </div>
              )}

              {/* Detected Scrub Hazards */}
              <div className="mt-5 space-y-2">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                  Detected Drop-Off Hazards
                </div>
                {evaluation.hazards.length === 0 ? (
                  <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900">
                    <MdCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero critical drop-off hazards detected. Immediate value promise and pacing are calibrated.</span>
                  </div>
                ) : (
                  evaluation.hazards.map((h, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-lg border text-xs flex items-start gap-2.5 ${
                        h.type === 'danger'
                          ? 'bg-red-50/80 border-red-200 text-red-950'
                          : 'bg-amber-50/80 border-amber-200 text-amber-950'
                      }`}
                    >
                      <MdWarning className={`w-4 h-4 mt-0.5 shrink-0 ${h.type === 'danger' ? 'text-red-600' : 'text-amber-600'}`} />
                      <div className="space-y-0.5">
                        <div className="font-semibold">{h.title}</div>
                        <div className="text-slate-600 text-[11px] leading-relaxed">{h.desc}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Radial Hook Score & Interactive Scrubber Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-studio flex flex-col items-center text-center">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">Pre-Flight Hook Score</div>
              
              <div className="relative w-36 h-36 flex items-center justify-center my-1">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-100"
                    strokeWidth="7"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className={`transition-all duration-500 ease-out ${
                      evaluation.isStrong ? 'stroke-emerald-600' : evaluation.isWeak ? 'stroke-red-500' : 'stroke-amber-500'
                    }`}
                    strokeWidth="7"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * (evaluation.score / 10))}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {evaluation.score}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 border ${
                      evaluation.isStrong
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : evaluation.isWeak
                        ? 'bg-red-50 text-red-800 border-red-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    {evaluation.isStrong ? 'High Hold' : evaluation.isWeak ? 'High Drop Risk' : 'Average Hold'}
                  </span>
                </div>
              </div>

              <div className="w-full pt-3 mt-2 border-t border-slate-100 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Velocity</div>
                  <div className="text-xs font-bold text-slate-800">{evaluation.velocity} / 10</div>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Curiosity</div>
                  <div className="text-xs font-bold text-slate-800">{evaluation.curiosityIndex} / 10</div>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">0:30 Hold</div>
                  <div className={`text-xs font-bold ${evaluation.isWeak ? 'text-red-600' : 'text-emerald-700'}`}>
                    {evaluation.finalHoldPct}%
                  </div>
                </div>
              </div>
            </div>

            {/* Scrubber Timeline Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-studio space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MdInfoOutline className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-200">0:00–0:30 Timeline Scrubber</span>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  {scrubSecond < 10 ? `0:0${scrubSecond}` : `0:${scrubSecond}`} Selected
                </span>
              </div>

              <div className="space-y-1.5">
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="2"
                  value={scrubSecond}
                  onChange={(e) => setScrubSecond(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-500">
                  <span>0:00 (Hook)</span>
                  <span>0:15 (Tension)</span>
                  <span>0:30 (Payoff)</span>
                </div>
              </div>

              <div className="h-16 flex items-end justify-between gap-1 pt-2">
                {evaluation.timeline.map((item, idx) => {
                  const isCurrent = Math.abs(item.second - scrubSecond) < 2;
                  return (
                    <div
                      key={idx}
                      onClick={() => setScrubSecond(item.second)}
                      className="flex-1 flex flex-col items-center gap-1 cursor-pointer group"
                    >
                      <div
                        className={`w-full rounded-t transition-all duration-200 ${
                          isCurrent
                            ? 'bg-white ring-2 ring-emerald-400'
                            : evaluation.isStrong
                            ? 'bg-emerald-500 group-hover:bg-emerald-400'
                            : item.second <= 12
                            ? 'bg-red-500 group-hover:bg-red-400'
                            : 'bg-slate-700'
                        }`}
                        style={{ height: `${(item.retentionPct / 100) * 48}px` }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs flex items-center justify-between font-mono">
                <div>
                  <span className="text-slate-400 font-sans">Retention at {scrubSecond}s: </span>
                  <span className="font-bold text-white">
                    {evaluation.timeline.find(t => t.second === scrubSecond)?.retentionPct || 85}%
                  </span>
                </div>
                <div className="text-[11px] font-sans font-medium text-slate-400">
                  {scrubSecond <= 6 && evaluation.isWeak ? '⚠️ Early Drop Hazard' : '✓ Good Retention Hold'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


