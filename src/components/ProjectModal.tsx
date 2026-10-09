import React from 'react';
import { X, CheckCircle, Layers, Cpu, Award, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenSandbox?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenSandbox }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
            <span>{project.category}</span>
            {project.conference && (
              <>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{project.conference}</span>
              </>
            )}
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white font-display">
            {project.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Image preview if exists */}
        {project.image && (
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              System Overview
            </h3>
            <p className="leading-relaxed text-slate-300">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture Pipeline */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>System Architecture & Pipeline Flow</span>
            </div>
            <p className="text-xs font-mono text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
              {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Core Capabilities & Engineering Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantitative Impact */}
          <div className="p-4 bg-blue-950/20 border border-blue-900/40 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
              <Award className="w-4 h-4" />
              <span>Validated Impact & Benchmarks</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack Unboxed */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Technologies & Tools Used
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>

          {project.hasDemo && onOpenSandbox && (
            <button
              onClick={() => {
                onClose();
                onOpenSandbox();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <span>Test in Live Sandbox</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
