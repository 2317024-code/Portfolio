import React, { useState, useEffect } from 'react';
import { Mic, Play, RefreshCw, Activity, Cpu, Sparkles, CheckCircle2, Sliders, Volume2, ArrowRight } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sheetflow' | 'nexstate' | 'xai'>('sheetflow');

  // SheetFlow AI state
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isProcessingQuery, setIsProcessingQuery] = useState(false);
  const [queryOutput, setQueryOutput] = useState<{
    queryText: string;
    language: string;
    sqlGenerated: string;
    insights: string[];
    metricValue: string;
    metricLabel: string;
    chartBars: number[];
  }>({
    queryText: 'Find regional sales outliers and correlate with promotional campaigns',
    language: 'English (EN)',
    sqlGenerated: 'SELECT region, AVG(revenue), STDDEV(revenue) FROM sales GROUP BY region HAVING revenue > AVG(revenue) * 1.35',
    insights: [
      'APAC sector showed +42% spike following the Q3 promotional sprint',
      'Anomaly detected in Week 38: standard deviation exceeds 2.1σ',
      'Multilingual synthesis synchronized across 12,400 distributed records',
    ],
    metricValue: '+42.8%',
    metricLabel: 'APAC Growth Delta',
    chartBars: [45, 62, 58, 89, 74, 96, 68, 82],
  });

  const sheetflowPrompts = [
    {
      lang: 'English',
      label: 'Financial Anomaly Detection',
      text: 'Find regional sales outliers and correlate with promotional campaigns',
      sql: 'SELECT region, AVG(revenue), STDDEV(revenue) FROM sales GROUP BY region HAVING revenue > AVG(revenue) * 1.35',
      metric: '+42.8%',
      metricLabel: 'APAC Growth Delta',
      insights: [
        'APAC sector showed +42% spike following the Q3 promotional sprint',
        'Anomaly detected in Week 38: standard deviation exceeds 2.1σ',
        'Multilingual synthesis synchronized across 12,400 distributed records',
      ],
      bars: [45, 62, 58, 89, 74, 96, 68, 82],
    },
    {
      lang: 'Japanese (JLPT N4)',
      label: '日本語音声クエリ (Japanese Speech Query)',
      text: '四半期の業績データから異常値を抽出して要約してください (Extract & summarize quarterly anomalies)',
      sql: 'SELECT quarter, product_sku, anomaly_score FROM performance WHERE anomaly_score >= 0.85 ORDER BY anomaly_score DESC',
      metric: '98.4%',
      metricLabel: 'Speech Match Accuracy',
      insights: [
        '日本語の音響モデル解析完了 (Japanese acoustic model decoding complete)',
        'Q3サーバー負荷の急上昇と顧客アクティビティの相関を検出 (Correlated Q3 server spikes with user activity)',
        'JLPT N4 multilingual speech vocabulary mapped into standardized analytics schema',
      ],
      bars: [32, 55, 78, 64, 92, 85, 90, 76],
    },
    {
      lang: 'Tamil',
      label: 'தமிழ் குரல் வினவல் (Tamil Speech Query)',
      text: 'மாதாந்திர விற்பனை போக்குகள் மற்றும் செயல்திறனை பகுப்பாய்வு செய் (Analyze monthly sales trends and performance)',
      sql: 'SELECT strftime("%Y-%m", sale_date) AS month, SUM(total_sales) FROM transactions GROUP BY month',
      metric: '12.4k',
      metricLabel: 'Processed Transactions',
      insights: [
        'தமிழ் ஒலிப்பு மாதிரிகள் துல்லியமாக அடையாளம் காணப்பட்டன (Tamil phonetic stream accurately localized)',
        'அனைத்து மாவட்டங்களின் விற்பனை போக்குகளும் தொகுக்கப்பட்டன (Aggregated district-level transaction trends)',
        'Zero-code tabular visualization rendered dynamically for decision makers',
      ],
      bars: [50, 48, 65, 70, 84, 78, 91, 88],
    },
  ];

  const handleSelectPrompt = (index: number) => {
    setSelectedPromptIndex(index);
    setIsProcessingQuery(true);
    setTimeout(() => {
      const p = sheetflowPrompts[index];
      setQueryOutput({
        queryText: p.text,
        language: p.lang,
        sqlGenerated: p.sql,
        insights: p.insights,
        metricValue: p.metric,
        metricLabel: p.metricLabel,
        chartBars: p.bars,
      });
      setIsProcessingQuery(false);
    }, 400);
  };

  // NexState AI state
  const [stressState, setStressState] = useState<'calm' | 'focused' | 'stressed'>('focused');
  const [livePulse, setLivePulse] = useState(72);
  const [liveGSR, setLiveGSR] = useState(4.2);
  const [liveHRV, setLiveHRV] = useState(58);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stressState === 'calm') {
        setLivePulse(64 + Math.floor(Math.random() * 4));
        setLiveGSR(2.8 + (Math.random() * 0.4));
        setLiveHRV(72 + Math.floor(Math.random() * 6));
      } else if (stressState === 'focused') {
        setLivePulse(74 + Math.floor(Math.random() * 5));
        setLiveGSR(4.5 + (Math.random() * 0.5));
        setLiveHRV(52 + Math.floor(Math.random() * 5));
      } else {
        setLivePulse(98 + Math.floor(Math.random() * 8));
        setLiveGSR(8.6 + (Math.random() * 0.8));
        setLiveHRV(28 + Math.floor(Math.random() * 4));
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [stressState]);

  // XAI Inspector state
  const [xaiView, setXaiView] = useState<'raw' | 'enhanced' | 'features' | 'gradcam'>('gradcam');

  return (
    <section id="sandbox" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Interactive Technical Sandboxes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            Explore live engineering demonstrations.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test and interact with simulated prototypes of my AI systems: from multilingual tabular reasoning in SheetFlow AI, to wearable autonomic stress detection in NexState AI, and clinical explainability heatmaps from my ICODSES 2026 research.
          </p>
        </div>

        {/* Tab Switcher: Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-950 border border-slate-800 rounded-xl max-w-2xl mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('sheetflow')}
            className={`flex-1 min-w-[170px] px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap text-center ${
              activeTab === 'sheetflow'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            SheetFlow AI (Speech & LLMs)
          </button>
          <button
            onClick={() => setActiveTab('nexstate')}
            className={`flex-1 min-w-[170px] px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap text-center ${
              activeTab === 'nexstate'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            NexState AI (Bio-Signals & Edge ML)
          </button>
          <button
            onClick={() => setActiveTab('xai')}
            className={`flex-1 min-w-[170px] px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap text-center ${
              activeTab === 'xai'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            ICODSES &apos;26 (XAI Neuroimaging)
          </button>
        </div>

        {/* TAB 1: SheetFlow AI Interactive Demo */}
        {activeTab === 'sheetflow' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Input Simulator */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Speech Query Input & Language Selection
                  </div>
                  <p className="text-xs text-slate-400">
                    Select a voice prompt below to trigger multilingual speech recognition and tabular query synthesis:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {sheetflowPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectPrompt(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                        selectedPromptIndex === idx
                          ? 'bg-blue-950/40 border-blue-500/80 text-white'
                          : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                          <Volume2 className="w-3.5 h-3.5" />
                          {p.lang}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {p.label}
                        </span>
                      </div>
                      <p className="text-slate-300 line-clamp-2 leading-relaxed font-sans">
                        &quot;{p.text}&quot;
                      </p>
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="font-semibold text-slate-300 block mb-1">
                    Architecture Pipeline:
                  </span>
                  <div className="text-[11px] text-slate-400 leading-relaxed font-mono">
                    Audio Frame Ingestion → Multilingual Phonetic Decoding → Schema Alignment → LLM Analytical Context Window → Dynamic Chart Generation
                  </div>
                </div>
              </div>

              {/* Right Column: Reactive Output & Chart */}
              <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-300">
                      Query Execution Result
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-xs text-blue-400 font-mono">{queryOutput.language}</span>
                  </div>
                  {isProcessingQuery ? (
                    <span className="text-xs text-blue-400 flex items-center gap-1.5 font-mono">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Synthesizing...
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3 h-3" /> Ready (180ms)
                    </span>
                  )}
                </div>

                {/* Generated SQL / Code Block */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                    Synthesized SQL / Analytic Query
                  </div>
                  <pre className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto">
                    <code>{queryOutput.sqlGenerated}</code>
                  </pre>
                </div>

                {/* KPI & Chart Visualization */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      {queryOutput.metricLabel}
                    </span>
                    <span className="text-2xl font-bold text-white font-display tabular-nums">
                      {queryOutput.metricValue}
                    </span>
                  </div>

                  <div className="sm:col-span-2 p-4 bg-slate-950 border border-slate-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-slate-400">Dynamic Distribution Vector</span>
                      <span className="text-[10px] text-slate-400 font-mono">8 Data Points</span>
                    </div>
                    {/* Clean SVG Bar Chart */}
                    <div className="flex items-end gap-2 h-14 pt-2">
                      {queryOutput.chartBars.map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div
                            style={{ height: `${bar}%` }}
                            className="w-full bg-blue-500 hover:bg-blue-400 rounded-t-sm transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Extracted Insights */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Synthesized Business Intelligence
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {queryOutput.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono mt-0.5">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NexState AI Bio-Monitor */}
        {activeTab === 'nexstate' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stress State Simulator */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Wearable Physiological State Simulation
                  </div>
                  <p className="text-xs text-slate-400">
                    Switch between clinical conditions to observe how the lightweight edge neural model responds to multi-modal physiological shifts:
                  </p>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setStressState('calm')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      stressState === 'calm'
                        ? 'bg-emerald-950/30 border-emerald-500/80 text-white'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-emerald-400">Resting Baseline (Parasympathetic)</span>
                      <span className="text-[11px] font-mono text-slate-400">Low Stress</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Regular heart rate intervals, baseline skin conductance, balanced homeostasis.
                    </p>
                  </button>

                  <button
                    onClick={() => setStressState('focused')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      stressState === 'focused'
                        ? 'bg-blue-950/30 border-blue-500/80 text-white'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-blue-400">Active Focus (Moderate Load)</span>
                      <span className="text-[11px] font-mono text-slate-400">Engaged</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Elevated cognitive processing, mild sympathetic arousal, optimal task engagement.
                    </p>
                  </button>

                  <button
                    onClick={() => setStressState('stressed')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      stressState === 'stressed'
                        ? 'bg-rose-950/30 border-rose-500/80 text-white'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-rose-400">Acute Stress Trigger (Sympathetic Surge)</span>
                      <span className="text-[11px] font-mono text-rose-300">Action Required</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Suppressed HRV (RMSSD drops), sharp rise in galvanic skin conductance, rapid pulse.
                    </p>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="font-semibold text-slate-300 block mb-1">Edge Hardware Constraints:</span>
                  <p className="text-[11px] text-slate-400">
                    Engineered to run under 32KB RAM memory limits with quantized fixed-point temporal convolution network weights.
                  </p>
                </div>
              </div>

              {/* Right Column: Live Telemetry Display */}
              <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    Live Bio-Telemetry Stream
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Sampling Frequency: 50Hz
                  </span>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <span className="text-[11px] text-slate-400 block mb-1">Heart Rate (PPG)</span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {livePulse} <span className="text-xs font-normal text-slate-400">BPM</span>
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <span className="text-[11px] text-slate-400 block mb-1">HRV (RMSSD)</span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {liveHRV} <span className="text-xs font-normal text-slate-400">ms</span>
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <span className="text-[11px] text-slate-400 block mb-1">Skin Conductance (GSR)</span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {liveGSR.toFixed(1)} <span className="text-xs font-normal text-slate-400">μS</span>
                    </span>
                  </div>
                </div>

                {/* Simulated Biosignal Waveform */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>Synthesized Electrocardiographic Interval</span>
                    <span className="font-mono text-blue-400">Temporal Filter Active</span>
                  </div>
                  {/* Waveform graphic */}
                  <div className="h-14 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full stroke-blue-400 fill-none" viewBox="0 0 400 60" preserveAspectRatio="none">
                      <path
                        d={
                          stressState === 'stressed'
                            ? 'M0,30 L30,30 L40,10 L50,55 L60,25 L70,30 L100,30 L110,8 L120,58 L130,22 L140,30 L180,30 L190,5 L200,60 L210,20 L220,30 L260,30 L270,10 L280,55 L290,25 L300,30 L340,30 L350,8 L360,58 L370,22 L400,30'
                            : 'M0,30 L50,30 L65,18 L75,50 L85,26 L95,30 L170,30 L185,18 L195,50 L205,26 L215,30 L290,30 L305,18 L315,50 L325,26 L335,30 L400,30'
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Classification Decision */}
                <div className={`p-4 rounded-lg border text-xs ${
                  stressState === 'stressed'
                    ? 'bg-rose-950/30 border-rose-800/80 text-rose-200'
                    : stressState === 'focused'
                    ? 'bg-blue-950/30 border-blue-800/80 text-blue-200'
                    : 'bg-emerald-950/30 border-emerald-800/80 text-emerald-200'
                }`}>
                  <div className="font-semibold mb-1 flex items-center gap-1.5">
                    <span>Classifier Decision:</span>
                    <span>
                      {stressState === 'stressed'
                        ? 'High Stress State Detected (94.2% Confidence)'
                        : stressState === 'focused'
                        ? 'Optimal Cognitive Engagement (88.7% Confidence)'
                        : 'Parasympathetic Rest State (96.1% Confidence)'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {stressState === 'stressed'
                      ? 'Recommending autonomic regulation prompt: Initiating 4-7-8 rhythmic breathing haptic cue.'
                      : stressState === 'focused'
                      ? 'Cognitive workload within healthy threshold. Continuing passive background sampling.'
                      : 'Vital biomarkers within reference baseline boundaries.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ICODSES 2026 Research XAI Heatmap Inspector */}
        {activeTab === 'xai' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Research Context */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">
                    ICODSES 2026 International Conference Presentation
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Explainable Deep Learning for Medical Image Enhancement & Tumor Detection
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Black-box deep neural networks often struggle to earn clinician adoption. This research couples contrast-adaptive image filtering with Grad-CAM (Gradient-weighted Class Activation Mapping) to produce auditable, verified visual justification for tumor localization.
                  </p>
                </div>

                {/* View Selector */}
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                    Select Neural Inspection Stage:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setXaiView('raw')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                        xaiView === 'raw'
                          ? 'bg-blue-950/50 border-blue-500 text-white font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      1. Raw MRI Scan
                    </button>
                    <button
                      onClick={() => setXaiView('enhanced')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                        xaiView === 'enhanced'
                          ? 'bg-blue-950/50 border-blue-500 text-white font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      2. Contrast Filtered
                    </button>
                    <button
                      onClick={() => setXaiView('features')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                        xaiView === 'features'
                          ? 'bg-blue-950/50 border-blue-500 text-white font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      3. Deep Feature Map
                    </button>
                    <button
                      onClick={() => setXaiView('gradcam')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                        xaiView === 'gradcam'
                          ? 'bg-blue-950/50 border-blue-500 text-white font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      4. Grad-CAM XAI Heatmap
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold block mb-1">Clinical Interpretability Metric:</span>
                  <div className="text-[11px] text-slate-400">
                    Grad-CAM activation coordinates demonstrated a 96.3% Intersection over Union (IoU) concordance against ground-truth radiologist boundary annotations.
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Inspection */}
              <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-semibold text-white">
                    Stage Visualizer: {xaiView === 'raw' ? 'Input Patient MRI (T1-w axial)' : xaiView === 'enhanced' ? 'Adaptive Contrast Filtered MRI' : xaiView === 'features' ? 'Layer 8 Convolutional Feature Space' : 'Grad-CAM Attention Heatmap Overlay'}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    Confidence: 94.7%
                  </span>
                </div>

                {/* Scientific Vector Visual (Replaces screenshot with live reactive neural stage inspector) */}
                <div className="relative rounded-lg overflow-hidden border border-slate-800 aspect-[16/9] bg-slate-950 flex items-center justify-center p-6">
                  {/* Stage-dependent Vector Visualizer */}
                  {xaiView === 'raw' && (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono">
                      <div className="w-36 h-36 rounded-full border-2 border-slate-700/60 flex items-center justify-center relative bg-slate-900/40">
                        {/* Axial brain contour */}
                        <div className="w-28 h-28 rounded-full border border-slate-600/40 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-slate-800/80 blur-xs absolute top-8 left-8" />
                          <span className="text-[10px] text-slate-500">T1-w Matrix</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-2">Raw Axial Acquisition (Unfiltered 1.5T MRI)</span>
                    </div>
                  )}

                  {xaiView === 'enhanced' && (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono">
                      <div className="w-36 h-36 rounded-full border-2 border-blue-500/80 flex items-center justify-center relative bg-blue-950/20 shadow-lg shadow-blue-500/10">
                        <div className="w-28 h-28 rounded-full border border-blue-400/50 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-blue-300/30 blur-xs absolute top-8 left-8 border border-blue-300" />
                          <span className="text-[10px] text-blue-300">SNR Boosted</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-blue-400 mt-2">Adaptive Contrast Filtered (+18.4dB Peak SNR)</span>
                    </div>
                  )}

                  {xaiView === 'features' && (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono">
                      <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((f) => (
                          <div key={f} className="p-2 bg-indigo-950/40 border border-indigo-700/60 rounded text-center">
                            <span className="text-[9px] text-indigo-400 block">K{f}</span>
                            <div className="h-6 bg-indigo-600/20 rounded mt-1 flex items-center justify-center text-[9px] text-indigo-300">
                              3×3
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-indigo-300 mt-3">Layer 8 Convolutional Feature Filters</span>
                    </div>
                  )}

                  {xaiView === 'gradcam' && (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono relative">
                      {/* Saliency Heatmap Simulation */}
                      <div className="w-40 h-40 rounded-full border border-slate-700 relative flex items-center justify-center bg-slate-900/60">
                        {/* Brain hemisphere lines */}
                        <div className="w-full h-[1px] bg-slate-800 absolute" />
                        <div className="h-full w-[1px] bg-slate-800 absolute" />
                        
                        {/* Grad-CAM Hotspot */}
                        <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-rose-500/30 border border-rose-500 blur-xs animate-pulse flex items-center justify-center">
                          <div className="w-7 h-7 rounded-full bg-amber-400/60" />
                        </div>
                        {/* Target Crosshair */}
                        <div className="absolute top-8 left-8 text-[9px] text-rose-300 bg-slate-950/80 px-1 py-0.5 rounded border border-rose-600">
                          Lesion Centroid 94.7%
                        </div>
                      </div>
                      <span className="text-[11px] text-rose-400 mt-2">Grad-CAM Activation Focus (Clinical Ground Truth Match)</span>
                    </div>
                  )}

                  {/* Informative stage caption */}
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-sm border border-slate-800/80 rounded p-2 text-[11px] text-slate-300 font-sans">
                    <span className="font-semibold text-white">
                      {xaiView === 'gradcam' ? 'XAI Heatmap Verification:' : xaiView === 'features' ? 'Mid-to-High Level Feature Activations:' : 'Pre-processing Pipeline:'}
                    </span>{' '}
                    {xaiView === 'gradcam'
                      ? 'Gradient backpropagation selectively localizes the left-hemisphere pathological lesion without background false positives.'
                      : xaiView === 'features'
                      ? 'Spatial convolution extracts micro-structural textures prior to dense classifier voting.'
                      : 'Noise reduction and contrast enhancement isolate fine tumor boundaries for downstream layers.'}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>Paper: ICODSES 2026 International Conference</span>
                  <span className="font-mono text-slate-300">Authored by Abijin Suvedha A</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
