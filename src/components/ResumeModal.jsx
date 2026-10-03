import React from 'react';
import { X, GraduationCap, ExternalLink, Briefcase, Download, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, experiences, projects } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownloadClick = () => {
    playCyberClick();
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E8C547', '#7FA63A', '#173D2B']
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 dark:bg-dark-bg/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-3xl rounded-[32px] bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 p-7 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 flex items-center justify-center text-forest dark:text-sun">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-warm-white tracking-tight">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-forest dark:text-sun mt-0.5 font-medium">
              Krishna Mishra &bull; Computer Science Undergraduate &bull; MITAOE
            </p>
          </div>
        </div>

        {/* Resume Content Snapshot */}
        <div className="space-y-6 text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted leading-relaxed mb-8">
          
          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-2 shadow-sm">
            <h4 className="text-xs uppercase font-mono tracking-wider text-forest dark:text-sun font-semibold">
              Summary
            </h4>
            <p className="text-xs text-charcoal dark:text-warm-white leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education Box */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-medium flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-forest dark:text-sun" />
              <span>Education</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1 shadow-sm">
                  <div className="font-semibold text-charcoal dark:text-warm-white text-xs">{edu.institution}</div>
                  <div className="text-[11px] text-forest dark:text-sun">{edu.degree}</div>
                  <div className="flex items-center justify-between text-[10px] text-charcoal-muted dark:text-dark-textMuted font-mono pt-1">
                    <span>{edu.period}</span>
                    <span className="text-charcoal dark:text-warm-white font-bold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-medium flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-leaf dark:text-leaf" />
              <span>Work Experience</span>
            </h4>
            <div className="space-y-2.5 text-xs">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-charcoal dark:text-warm-white">{exp.role} — <span className="text-forest dark:text-sun">{exp.company}</span></span>
                    <span className="font-mono text-[10px] text-charcoal-muted dark:text-dark-textMuted">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-medium">
              Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1">
                  <span className="font-bold text-charcoal dark:text-warm-white block">{p.title}</span>
                  <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted">{p.tagline}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-forest/10 dark:border-white/10">
          <a
            href="/resume.pdf"
            download="Krishna_Mishra_Resume.pdf"
            onClick={handleDownloadClick}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs transition-all shadow-md active:scale-98"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </a>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle text-charcoal dark:text-warm-white font-medium text-xs border border-forest/15 dark:border-white/10 transition-all"
          >
            <span>Verified Credentials on Drive</span>
            <ExternalLink className="w-4 h-4 text-forest dark:text-sun" />
          </a>
        </div>

      </div>
    </div>
  );
}
