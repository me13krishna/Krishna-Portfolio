import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  BarChart2, 
  Cpu, 
  Database, 
  Sparkles,
  Target,
  Compass,
  Zap,
  TrendingUp
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isReport = project.isReport || !!project.reportDetails;
  const star = project.star;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 dark:bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-3xl rounded-[32px] bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 p-6 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
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
        <div className="space-y-3 mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun border border-forest/10 dark:border-sun/20 font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-leaf/10 dark:bg-leaf/20 text-olive dark:text-leaf border border-leaf/20 dark:border-leaf/30 font-medium">
              {project.status}
            </span>
            {project.role && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal-muted dark:text-dark-textMuted border border-forest/10 dark:border-white/10">
                {project.role}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            {project.title}
          </h3>

          {project.outcome && (
            <p className="text-sm font-semibold text-forest dark:text-sun">
              &bull; Outcome: {project.outcome}
            </p>
          )}

          <p className="text-sm text-charcoal-muted dark:text-dark-textMuted font-editorial italic text-base">
            {project.tagline}
          </p>
        </div>

        {/* STAR Case Study Framework (Problem -> Approach -> Solution -> Impact) */}
        {star ? (
          <div className="space-y-4 mb-8">
            <h4 className="text-xs uppercase font-mono tracking-wider text-forest dark:text-sun font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-leaf dark:text-sun" />
              <span>STAR Case Study Breakdown</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Problem */}
              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-charcoal dark:text-warm-white">
                  <Target className="w-3.5 h-3.5 text-leaf dark:text-sun" />
                  <span className="uppercase font-mono tracking-wider text-[11px]">01 &bull; The Problem</span>
                </div>
                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                  {star.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-charcoal dark:text-warm-white">
                  <Compass className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                  <span className="uppercase font-mono tracking-wider text-[11px]">02 &bull; Engineering Approach</span>
                </div>
                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                  {star.approach}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-charcoal dark:text-warm-white">
                  <Zap className="w-3.5 h-3.5 text-gold dark:text-sun" />
                  <span className="uppercase font-mono tracking-wider text-[11px]">03 &bull; Technical Solution</span>
                </div>
                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                  {star.solution}
                </p>
              </div>

              {/* Impact / Result */}
              <div className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-charcoal dark:text-warm-white">
                  <TrendingUp className="w-3.5 h-3.5 text-forest dark:text-sun" />
                  <span className="uppercase font-mono tracking-wider text-[11px]">04 &bull; Result &amp; Learnings</span>
                </div>
                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                  {star.impact}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-charcoal-muted dark:text-dark-textMuted text-sm leading-relaxed mb-6 font-normal">
            <p>{project.description}</p>
          </div>
        )}

        {/* Key Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-3 mb-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-semibold">
              Key Capabilities:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal dark:text-warm-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-leaf dark:text-sun flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Section: Data Analytics & DV Report Details */}
        {isReport && project.reportDetails && (
          <div className="space-y-4 pt-4 border-t border-forest/10 dark:border-white/10 mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-charcoal dark:text-warm-white">
              <BarChart2 className="w-4 h-4 text-forest dark:text-sun" />
              <span>32-Page Data Visualisation Research Report</span>
            </div>

            <div className="p-3.5 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1 text-xs">
              <span className="font-mono text-forest dark:text-sun uppercase tracking-wider block font-semibold text-[10px]">
                Dataset Source &amp; Scope:
              </span>
              <p className="text-charcoal dark:text-warm-white">{project.reportDetails.dataset}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3.5 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5">
                <span className="font-mono text-olive dark:text-leaf uppercase text-[10px] block font-semibold mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" /> Orange Data Mining Pipeline
                </span>
                <ul className="space-y-1 text-[11px] text-charcoal dark:text-warm-white">
                  {project.reportDetails.orangeOperations.map((op, i) => (
                    <li key={i}>&bull; {op}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5">
                <span className="font-mono text-gold dark:text-sun uppercase text-[10px] block font-semibold mb-1 flex items-center gap-1.5">
                  <Database className="w-3 h-3" /> Tableau Visualizations
                </span>
                <ul className="space-y-1 text-[11px] text-charcoal dark:text-warm-white">
                  {project.reportDetails.tableauCharts.map((ch, i) => (
                    <li key={i}>&bull; {ch}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-muted dark:text-dark-textMuted font-medium mb-2.5">
            Stack &amp; Frameworks:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
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
