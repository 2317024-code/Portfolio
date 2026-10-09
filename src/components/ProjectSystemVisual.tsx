import React from 'react';
import { Terminal, Database, Activity, Scan, Layers, Cpu, Radio, GitBranch } from 'lucide-react';

interface ProjectSystemVisualProps {
  projectId: string;
  className?: string;
}

export const ProjectSystemVisual: React.FC<ProjectSystemVisualProps> = ({ projectId, className = '' }) => {
  if (projectId === 'sheetflow-ai') {
    return (
      <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5 font-mono text-xs overflow-hidden ${className}`}>
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="text-[11px] text-slate-400 font-medium ml-1">
              sheetflow://workspace/multilingual-pipeline
            </span>
          </div>
          <span className="text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/60">
            STT + LLM Active
          </span>
        </div>

        {/* Multilingual Voice Waveform & Token Stream */}
        <div className="space-y-3">
          <div className="p-3 bg-slate-900/70 border border-slate-800/80 rounded-lg">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Acoustic Ingestion (EN / 日本語 / தமிழ்)
              </span>
              <span className="text-[10px] text-slate-500">16kHz 16-bit PCM</span>
            </div>
            {/* Audio Wave Spectrum SVG */}
            <div className="h-8 flex items-center justify-between gap-1 overflow-hidden px-1">
              {[40, 65, 30, 85, 95, 45, 60, 80, 50, 75, 90, 65, 40, 85, 100, 70, 55, 35, 80, 60, 45, 90, 75, 50].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-blue-500/80 rounded-sm"
                />
              ))}
            </div>
          </div>

          {/* Tabular Reasoning Map */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 bg-slate-900/60 border border-slate-800/80 rounded">
              <span className="text-slate-500 block mb-1">Synthesized SQL Ast:</span>
              <span className="text-emerald-400 truncate block">SELECT region, SUM(rev)...</span>
            </div>
            <div className="p-2.5 bg-slate-900/60 border border-slate-800/80 rounded">
              <span className="text-slate-500 block mb-1">Multi-Source Adapters:</span>
              <span className="text-cyan-400 truncate block">CSV · XLSX · PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'medical-xai-icodses') {
    return (
      <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5 font-mono text-xs overflow-hidden ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-slate-300 font-medium">
              ICODSES &apos;26 Explainable Deep CNN Architecture
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
            Grad-CAM Saliency: 94.7%
          </span>
        </div>

        {/* Architecture flow diagram */}
        <div className="grid grid-cols-4 gap-2 items-center text-center text-[10px] mb-3">
          <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded">
            <span className="text-slate-400 block mb-1">Input Scan</span>
            <span className="text-white font-bold">256×256 T1-w</span>
          </div>
          <div className="p-2.5 bg-blue-950/40 border border-blue-900/60 rounded">
            <span className="text-slate-400 block mb-1">Enhancement</span>
            <span className="text-blue-300 font-bold">Adaptive SNR</span>
          </div>
          <div className="p-2.5 bg-indigo-950/40 border border-indigo-900/60 rounded">
            <span className="text-slate-400 block mb-1">Backbone</span>
            <span className="text-indigo-300 font-bold">CNN Layer 8</span>
          </div>
          <div className="p-2.5 bg-rose-950/40 border border-rose-900/60 rounded">
            <span className="text-slate-400 block mb-1">XAI Target</span>
            <span className="text-rose-300 font-bold">Tumor Lesion</span>
          </div>
        </div>

        {/* Heatmap Matrix Simulation */}
        <div className="p-3 bg-slate-900/50 border border-slate-800/80 rounded-lg flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="text-slate-300">Saliency Peak Centroid: (X: 142, Y: 88)</span>
          </div>
          <span className="text-slate-500">IoU Score: 96.3%</span>
        </div>
      </div>
    );
  }

  if (projectId === 'nexstate-ai') {
    return (
      <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5 font-mono text-xs overflow-hidden ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] text-slate-300 font-medium">
              nexstate://wearable/physiological-telemetry
            </span>
          </div>
          <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Sampling @ 50Hz
          </span>
        </div>

        {/* Waveform Signal Stream */}
        <div className="p-3 bg-slate-900/70 border border-slate-800/80 rounded-lg mb-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
            <span>PPG & GSR Temporal Series</span>
            <span className="text-emerald-400">Normal Autonomic Zone</span>
          </div>
          <svg className="w-full h-8 stroke-emerald-400 fill-none" viewBox="0 0 300 40" preserveAspectRatio="none">
            <path
              d="M0,20 L30,20 L40,12 L50,32 L60,18 L70,20 L110,20 L120,12 L130,32 L140,18 L150,20 L190,20 L200,12 L210,32 L220,18 L230,20 L270,20 L280,12 L290,32 L300,20"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Edge Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
            <span className="text-slate-500 block">HRV RMSSD</span>
            <span className="text-white font-bold">58.4 ms</span>
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
            <span className="text-slate-500 block">Skin Galvanic</span>
            <span className="text-white font-bold">4.2 μS</span>
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
            <span className="text-slate-500 block">Edge Latency</span>
            <span className="text-cyan-400 font-bold">&lt; 50 ms</span>
          </div>
        </div>
      </div>
    );
  }

  // vehicle-monitoring-ai
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5 font-mono text-xs overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Scan className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] text-slate-300 font-medium">
            vision://yolov8-deepsort/realtime-tracking
          </span>
        </div>
        <span className="text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/60">
          30+ FPS Edge
        </span>
      </div>

      {/* CV Grid Representation */}
      <div className="relative p-3 bg-slate-900/70 border border-slate-800/80 rounded-lg mb-3 h-20 flex items-center justify-center">
        {/* Bounding box vectors */}
        <div className="absolute left-6 top-3 border border-emerald-400/80 bg-emerald-500/10 rounded px-2 py-1 text-[9px] text-emerald-300">
          #ID:104 [Sedan] 62.4 km/h (96.4%)
        </div>
        <div className="absolute right-8 bottom-3 border border-blue-400/80 bg-blue-500/10 rounded px-2 py-1 text-[9px] text-blue-300">
          #ID:105 [SUV] 58.1 km/h (94.2%)
        </div>
        <div className="w-full border-t border-dashed border-slate-700 opacity-40" />
      </div>

      {/* Multi-lane Analytics */}
      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-slate-500 block">Class Precision</span>
          <span className="text-white font-bold">94.2% mAP</span>
        </div>
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-slate-500 block">Occlusion Filter</span>
          <span className="text-emerald-400 font-bold">DeepSORT</span>
        </div>
        <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
          <span className="text-slate-500 block">Pipeline</span>
          <span className="text-cyan-400 font-bold">OpenCV / PyTorch</span>
        </div>
      </div>
    </div>
  );
};
