import React from 'react';
import { BookOpen, CheckCircle, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';

export const ResearchSpotlight: React.FC = () => {
  return (
    <section id="research" className="py-20 relative bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Kicker */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Academic Research & Conference Publication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Explainable AI in Clinical Neuroimaging.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Presented at the International Conference on Data Science and Engineering Systems (ICODSES 2026).
          </p>
        </div>

        {/* Feature Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Scientific Visual (Architectural Vector & Neural Flow Console) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 overflow-hidden shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-semibold">ICODSES &apos;26 Neural Flow Pipeline</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-900/60">
                  Paper Presentation
                </span>
              </div>

              {/* Dynamic Neural Pipeline Flow */}
              <div className="space-y-3 mb-4">
                {/* Step 1 */}
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold">
                      01
                    </span>
                    <div>
                      <span className="text-white font-medium block">Raw Neuroimaging Tensor</span>
                      <span className="text-[11px] text-slate-400">Low-contrast T1/T2 axial scan acquisition</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">256×256</span>
                </div>

                {/* Step 2 */}
                <div className="p-3 bg-blue-950/30 border border-blue-900/60 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-blue-900/60 text-blue-300 flex items-center justify-center text-[10px] font-bold">
                      02
                    </span>
                    <div>
                      <span className="text-white font-medium block">Adaptive Contrast Enhancement</span>
                      <span className="text-[11px] text-slate-400">Micro-structure edge filtering & noise attenuation</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-blue-400 font-mono">+18.4dB SNR</span>
                </div>

                {/* Step 3 */}
                <div className="p-3 bg-indigo-950/30 border border-indigo-900/60 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-indigo-900/60 text-indigo-300 flex items-center justify-center text-[10px] font-bold">
                      03
                    </span>
                    <div>
                      <span className="text-white font-medium block">Deep Convolutional Feature Backbone</span>
                      <span className="text-[11px] text-slate-400">Layer 8 convolutional activation space</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-indigo-400 font-mono">512 Channels</span>
                </div>

                {/* Step 4 */}
                <div className="p-3 bg-rose-950/30 border border-rose-900/60 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-rose-900/60 text-rose-300 flex items-center justify-center text-[10px] font-bold">
                      04
                    </span>
                    <div>
                      <span className="text-white font-medium block">Grad-CAM Interpretability Saliency</span>
                      <span className="text-[11px] text-slate-400">Gradient-weighted class localization heatmap</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-rose-400 font-mono">96.3% IoU Match</span>
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Target Lesion Classification:</span>
                <span className="text-emerald-400 font-bold">94.7% Positive Concordance</span>
              </div>
            </div>
          </div>

          {/* Research Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="text-blue-400 font-semibold">ICODSES 2026</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>International Conference</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Author & Presenter</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Standard deep convolutional models behave as opaque &quot;black boxes&quot;, which creates significant hurdles for clinical validation and radiologist trust. In this research, we formulated a dual-phase architecture: an adaptive contrast enhancement pre-processing pipeline followed by deep convolutional feature extraction and Gradient-weighted Class Activation Mapping (Grad-CAM).
            </p>

            {/* Key Innovations */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Visual Auditability:</span> Clinicians can visually inspect the exact spatial regions influencing the model&apos;s tumor classification rather than relying on uninterpretable probabilities.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Noise Resistance:</span> Contrast-adaptive filtering handles low signal-to-noise ratio (SNR) artifacts common in rapid axial MRI acquisitions.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Conference Recognition:</span> Presented and defended before peer researchers and domain specialists at ICODSES 2026.
                </div>
              </div>
            </div>

            {/* Conference Paper Metadata Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div className="grid grid-cols-2 gap-4 text-slate-400">
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-mono">Conference</span>
                  <span className="text-slate-200 font-medium">ICODSES 2026</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-mono">Domain</span>
                  <span className="text-slate-200 font-medium">Explainable AI & Medical Vision</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-mono">Primary Contributor</span>
                  <span className="text-slate-200 font-medium">Abijin Suvedha A</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-mono">Validation Focus</span>
                  <span className="text-slate-200 font-medium">Contrast & Brain Lesion Saliency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
