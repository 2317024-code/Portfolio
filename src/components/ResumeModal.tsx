import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ABIJIN SUVEDHA A
Artificial Intelligence and Data Science
Phone: ${PORTFOLIO_DATA.personal.phone} | Email: ${PORTFOLIO_DATA.personal.email}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin} | GitHub: ${PORTFOLIO_DATA.personal.github}

OBJECTIVE
${PORTFOLIO_DATA.personal.objective}

EDUCATION
B.Tech - Artificial Intelligence and Data Science
National Engineering College, Tamil Nadu
Aug 2023 – Jun 2027 | CGPA: 8.76 (up to V Semester)

Higher Secondary
Zion Matriculation Hr. Sec. School, Tamil Nadu
April 2022 – March 2023 | 89.16%

SKILLS
Programming Languages: Java, Python & SQL
Web Technologies: React, Node.js, Express, MERN
Tools & Platforms: GitHub, MySQL & Microsoft Power BI, Snowflake
Languages: English, Hindi, Tamil & Japanese (JLPT N4)

PROJECTS
• SheetFlow AI: Developed a React based intelligent workspace enabling multisource dataset analysis with multilingual speech recognition.
• NexState AI - Personalized Healthcare Monitoring System: Building an AI-driven wearable solution for real-time stress detection using physiological signals.
• AI-Based Vehicle Monitoring System: Designed & implemented a deep learning based system for real time vehicle detection, tracking and monitoring.
• Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection: Presented at ICODSES 2026 International Conference.

INTERNSHIPS
• AI Developer Intern | Hostwire Systems, Chennai (Jan 2026 - Apr 2026)
  Architected an intelligent automation system leveraging AI models to generate, refine & optimize digital content.
• Full Stack Web Developer Intern | Webstack Academy, Bengaluru (Dec 2025 - Jan 2026)
  Developed a dynamic web application using the MERN stack, integrating backend APIs and frontend interfaces for seamless user experience.

CERTIFICATIONS
• NPTEL - Cloud Computing
• SnowPro Associate Certification - Snowflake
• Java Training - Spoken Tutorial Project, IIT Bombay
• Career Essentials in Generative AI by Microsoft & LinkedIn - LinkedIn Learning

ACHIEVEMENTS & CO-CURRICULAR ACTIVITIES
• Research Paper Presenter at ICODSES 2026 (International Conference): Contributed to research and presented a paper on Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection.
• Executive Member at AI Club, National Engineering College: Organized and contributed to AI-driven technical events, workshops, and collaborative learning initiatives.
• Finalist at KONE Elevate Hackathon: Contributed to an AI technology oriented solution.
• Winner at Tech Triad: Secured first place by solving a series of technical challenges through logical thinking and teamwork.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl my-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-100/95 backdrop-blur border-b border-slate-200 no-print rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span id="modal-resume-title" className="text-sm font-bold text-slate-800">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              · ATS-Compliant Layout
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              title="Copy plain text formatted resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clean ATS-Optimized Resume Document */}
        <div className="p-8 sm:p-12 font-sans space-y-6 text-slate-800 selection:bg-blue-100">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight font-display mb-1">
              ABIJIN SUVEDHA A
            </h1>
            <p className="text-base font-semibold text-slate-700 mb-2">
              Artificial Intelligence and Data Science
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-mono">
              <span>{PORTFOLIO_DATA.personal.phone}</span>
              <span>·</span>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-700 hover:underline">
                {PORTFOLIO_DATA.personal.email}
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                linkedin.com/in/abijin-suvedha-a
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                github.com/abijin-suvedha-a
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-display">
              Objective
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {PORTFOLIO_DATA.personal.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between text-xs font-bold text-slate-900">
                  <span>B.Tech - Artificial Intelligence and Data Science</span>
                  <span className="font-mono text-slate-600 font-normal">Aug 2023 – Jun 2027</span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-slate-700">
                  <span>National Engineering College, Tamil Nadu</span>
                  <span className="font-semibold text-slate-900">CGPA: 8.76 (up to V Semester)</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs font-bold text-slate-900">
                  <span>Higher Secondary</span>
                  <span className="font-mono text-slate-600 font-normal">April 2022 – March 2023</span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-slate-700">
                  <span>Zion Matriculation Hr. Sec. School, Tamil Nadu</span>
                  <span className="font-semibold text-slate-900">89.16%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-display">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900">Programming Languages: </span>
                <span className="text-slate-700">Java, Python & SQL</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Web Technologies: </span>
                <span className="text-slate-700">React, Node.js, Express, MERN</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Tools & Platforms: </span>
                <span className="text-slate-700">GitHub, MySQL & Microsoft Power BI, Snowflake</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Languages: </span>
                <span className="text-slate-700">English, Hindi, Tamil & Japanese (JLPT N4)</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              Projects
            </h2>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <div className="font-bold text-slate-900">
                  • SheetFlow AI:
                </div>
                <p className="pl-3 mt-0.5 leading-relaxed">
                  Developed a React based intelligent workspace enabling multisource dataset analysis with multilingual speech recognition.
                </p>
              </div>

              <div>
                <div className="font-bold text-slate-900">
                  • NexState AI - Personalized Healthcare Monitoring System:
                </div>
                <p className="pl-3 mt-0.5 leading-relaxed">
                  Building an AI-driven wearable solution for real-time stress detection using physiological signals.
                </p>
              </div>

              <div>
                <div className="font-bold text-slate-900">
                  • AI-Based Vehicle Monitoring System:
                </div>
                <p className="pl-3 mt-0.5 leading-relaxed">
                  Designed & implemented a deep learning based system for real time vehicle detection, tracking and monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              Internships
            </h2>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>AI Developer Intern</span>
                  <span className="font-mono text-slate-600 font-normal">Jan 2026 - Apr 2026</span>
                </div>
                <div className="text-slate-600 font-medium">Hostwire Systems, Chennai</div>
                <p className="mt-1 leading-relaxed">
                  Architected an intelligent automation system leveraging AI models to generate, refine & optimize digital content.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between font-bold text-slate-900">
                  <span>Full Stack Web Developer Intern</span>
                  <span className="font-mono text-slate-600 font-normal">Dec 2025 - Jan 2026</span>
                </div>
                <div className="text-slate-600 font-medium">Webstack Academy, Bengaluru</div>
                <p className="mt-1 leading-relaxed">
                  Developed a dynamic web application using the MERN stack, integrating backend APIs and frontend interfaces for seamless user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-display">
              Certifications
            </h2>
            <ul className="space-y-1 text-xs text-slate-700 pl-3">
              <li>• NPTEL - Cloud Computing</li>
              <li>• SnowPro Associate Certification - Snowflake</li>
              <li>• Java Training - Spoken Tutorial Project, IIT Bombay</li>
              <li>• Career Essentials in Generative AI by Microsoft & LinkedIn - LinkedIn Learning</li>
            </ul>
          </div>

          {/* Achievements & Co-Curricular */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-display">
              Achievements & Co-Curricular Activities
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700 pl-3">
              <li>
                <span className="font-bold text-slate-900">• Research Paper Presenter at ICODSES 2026 (International Conference): </span>
                Contributed to research and presented a paper on Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection at ICODSES 2026.
              </li>
              <li>
                <span className="font-bold text-slate-900">• Executive Member at AI Club, National Engineering College: </span>
                Organized and contributed to AI-driven technical events, workshops, and collaborative learning initiatives.
              </li>
              <li>
                <span className="font-bold text-slate-900">• Finalist at KONE Elevate Hackathon: </span>
                Contributed to an AI technology oriented solution.
              </li>
              <li>
                <span className="font-bold text-slate-900">• Winner at Tech Triad: </span>
                Secured first place by solving a series of technical challenges through logical thinking and teamwork.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
