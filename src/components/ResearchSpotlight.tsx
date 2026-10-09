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
          {/* Scientific Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2 overflow-hidden shadow-2xl">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/medical_ai_research_xai_1791535903180.jpg"
                  alt="ICODSES 2026 Paper Presentation - Explainable Deep Learning Model"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-xs text-slate-400 flex items-center justify-between border-t border-slate-900 mt-2">
                <span className="font-mono text-slate-300">Architecture: CNN Backbone + Grad-CAM Heatmap</span>
                <span className="text-emerald-400 font-mono">Confidence: 94.7%</span>
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
