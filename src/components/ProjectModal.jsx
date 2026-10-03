import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  BarChart2, 
  Cpu, 
  Database, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isReport = project.isReport || !!project.reportDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 dark:bg-dark-bg/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
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
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun border border-forest/10 dark:border-sun/20 font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-leaf/10 dark:bg-leaf/20 text-olive dark:text-leaf border border-leaf/20 dark:border-leaf/30 font-medium">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm text-charcoal-muted dark:text-dark-textMuted font-editorial italic text-base">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6 text-charcoal-muted dark:text-dark-textMuted text-sm leading-relaxed mb-8 font-normal">
          <p>{project.description}</p>

          {/* Key Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-forest dark:text-sun font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-leaf dark:text-sun" />
              <span>Engineering Architecture &amp; Highlights:</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-charcoal dark:text-warm-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-leaf dark:text-sun flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Section: Data Analytics & DV Report Details */}
          {isReport && project.reportDetails && (
            <div className="space-y-5 pt-6 border-t border-forest/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-charcoal dark:text-warm-white">
                <BarChart2 className="w-4 h-4 text-forest dark:text-sun" />
                <span>32-Page Data Visualisation Research Report</span>
              </div>

              {/* Dataset info */}
              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1 shadow-sm">
                <span className="text-[11px] font-mono text-forest dark:text-sun uppercase tracking-wider block font-semibold">
                  Dataset Source &amp; Scope:
                </span>
                <p className="text-xs text-charcoal dark:text-warm-white">{project.reportDetails.dataset}</p>
              </div>

              {/* Orange Operations */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-charcoal-muted dark:text-dark-textMuted font-semibold block flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                  <span>Orange Data Mining Pipeline:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.reportDetails.orangeOperations.map((op, i) => (
                    <div key={i} className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 text-charcoal dark:text-warm-white shadow-sm">
                      &bull; {op}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tableau Charts Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-charcoal-muted dark:text-dark-textMuted font-semibold block flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-gold dark:text-sun" />
                  <span>Tableau Visualisation (5 Multi-Level Grains):</span>
                </span>
                <div className="space-y-2 text-xs text-charcoal dark:text-warm-white">
                  {project.reportDetails.tableauCharts.map((ch, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 flex items-center gap-3 shadow-sm">
                      <span className="text-forest dark:text-sun font-mono text-[11px] font-bold">0{i + 1}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              <div className="p-5 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-2 shadow-sm">
                <span className="text-xs font-mono text-forest dark:text-sun font-semibold uppercase tracking-wider block">
                  Empirical Findings &amp; Conclusions:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal dark:text-warm-white">
                  {project.reportDetails.kpis.map((kpi, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-leaf dark:text-sun">&bull;</span>
                      <span>{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-medium mb-3">
            Technologies &amp; Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans px-3.5 py-1 rounded-full bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-forest/10 dark:border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs transition-all shadow-md"
            >
              <span>{isReport ? "Open Research Report & Archive" : "Launch Production Platform"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && project.githubUrl !== project.liveUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle text-charcoal dark:text-warm-white font-semibold text-xs border border-forest/15 dark:border-white/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
