import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Work Experience & Industry Internships
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Professional trajectory.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Hands-on experience delivering production-grade AI automation pipelines and full-stack web applications in engineering environments.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 max-w-4xl">
          {PORTFOLIO_DATA.internships.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition-all duration-300"
            >
              {/* Top metadata strip (NO PILLS) */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-blue-400 text-sm">{exp.company}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {exp.location}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{exp.type}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                {exp.role}
              </h3>

              {/* Summary Statement */}
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Key Accomplishments */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Utilized */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
