import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectSystemVisual } from './ProjectSystemVisual';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, featured }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:border-slate-700 hover:shadow-xl hover:shadow-black/40 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Unboxed Metadata Header (NO PILLS) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span className="text-blue-400 font-semibold">{project.category}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{project.techStack.slice(0, 2).join(', ')}</span>
          {project.conference && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400 font-medium">Presented Paper</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors font-display mb-2">
          {project.title}
        </h3>

        {/* Subtitle / Kicker */}
        <p className="text-xs font-medium text-slate-400 mb-4 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Architectural System Visual (Replaces static image screenshots) */}
        <div className="mb-5">
          <ProjectSystemVisual projectId={project.id} />
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Unboxed Tech Stack */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
            {project.techStack.slice(0, featured ? 4 : 3).map((tech, i) => (
              <React.Fragment key={i}>
                <span>{tech}</span>
                {i < (featured ? 4 : 3) - 1 && (
                  <span aria-hidden="true" className="text-slate-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors shrink-0 ml-3">
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
