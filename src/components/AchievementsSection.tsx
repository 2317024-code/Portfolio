import React from 'react';
import { Award, Trophy, GraduationCap, Globe, Check, BookOpen, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-20 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Honors, Education & Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Validated excellence & domain expertise.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A track record of high academic performance, hackathon wins, verified industry certifications, and international conference contributions.
          </p>
        </div>

        {/* Section 1: Key Achievements Bento */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Key Achievements & Co-Curricular Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-950 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-blue-400 font-medium">{ach.category}</span>
                    <span className="font-mono text-slate-400">{ach.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-display mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="text-amber-400">★</span>
                  <span>{ach.significance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* Education */}
          <div className="lg:col-span-6">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Academic Education</span>
            </h3>

            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-mono text-blue-400">{edu.duration}</span>
                    <span className="font-semibold text-emerald-400">{edu.score}</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-slate-400 mb-4">
                    {edu.institution} · {edu.location}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-6">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Industry Certifications</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-blue-400">{cert.issuer}</span>
                    <span className="text-[11px] font-mono text-slate-400">{cert.badgeType}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Technical Skills & Spoken Languages */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tech Skills Columns */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Technical Skills & Engineering Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xs font-semibold text-slate-200 mb-3 uppercase tracking-wider">
                    Programming & Data
                  </h5>
                  <div className="space-y-2">
                    {PORTFOLIO_DATA.skills.programming.map((p, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                        <div className="flex items-center justify-between text-white font-medium mb-0.5">
                          <span>{p.name}</span>
                          <span className="text-[11px] text-blue-400 font-mono">{p.level}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{p.context}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-slate-200 mb-3 uppercase tracking-wider">
                    AI, ML & Explainability
                  </h5>
                  <div className="space-y-2">
                    {PORTFOLIO_DATA.skills.aiAndDataScience.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                        <span className="text-white font-medium block mb-0.5">{item.name}</span>
                        <p className="text-[11px] text-slate-400">{item.context}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider">
                  Web Architecture & Data Platforms
                </h5>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PORTFOLIO_DATA.skills.webAndTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-mono text-xs"
                      title={tool.context}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Proficiency (Highlighting JLPT N4 Japanese!) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Multilingual Capabilities</span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Fluent in 4 languages, offering international cross-cultural communication and technical adaptation:
                </p>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs ${
                        lang.language === 'Japanese'
                          ? 'bg-rose-950/20 border-rose-800/60 text-slate-200'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold mb-0.5">
                        <span className={lang.language === 'Japanese' ? 'text-rose-300 font-bold' : 'text-white'}>
                          {lang.language}
                        </span>
                        <span className="text-[11px] font-mono text-blue-400">{lang.proficiency}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {lang.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-[11px] text-slate-400">
                Official Certification: JLPT N4 (Japan Educational Exchanges and Services)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
