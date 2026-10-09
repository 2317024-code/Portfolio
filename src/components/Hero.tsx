import React, { useState } from 'react';
import { ArrowDown, Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Interactive3DCanvas } from './Interactive3DCanvas';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient accent (subtle, non-neon) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
              <span>Artificial Intelligence & Data Science Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>ICODSES &apos;26 Researcher</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-display [text-wrap:balance]">
              Building scalable intelligent systems from research to production.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</span>. I engineer practical AI applications spanning Large Language Models, Explainable Deep Learning (XAI), and robust full-stack architectures. Currently focused on neuroimaging diagnostics and intelligent automation pipelines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-600/30 whitespace-nowrap"
              >
                Explore Selected Works
              </a>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                View Full Resume
              </button>
              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors whitespace-nowrap"
              >
                Contact Me
              </button>
            </div>

            {/* Social & Contact Bar with 1-click copy */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-slate-200 transition-colors">
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>

              <button
                onClick={copyEmailToClipboard}
                className="flex items-center gap-1.5 hover:text-slate-200 transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-0.5" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300 ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-4 ml-auto sm:ml-0">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span className="font-medium">LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="font-medium">GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive 3D Spatial Canvas (Reacts to cursor movement) */}
          <div className="lg:col-span-5 flex items-stretch justify-center">
            <Interactive3DCanvas className="w-full h-full min-h-[440px] shadow-2xl" />
          </div>
        </div>

        {/* Full-width 4-Column Metric Strip below the split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs text-slate-400 mt-1 line-clamp-1">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
