import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  Tag, 
  BarChart2, 
  Cpu, 
  Database, 
  Sparkles,
  FileText
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isReport = project.isReport || !!project.reportDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-3xl rounded-2xl glass-panel-glow bg-deep/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {project.title}
          </h3>

          <p className="text-sm text-cyan-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
          <p>{project.description}</p>

          {/* Key Highlights */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Engineering Highlights &amp; Scope:</span>
            </h4>
            <div className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Section: Data Analytics & DV Report Details */}
          {isReport && project.reportDetails && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>32-Page Data Visualisation Report Breakdown</span>
              </div>

              {/* Dataset info */}
              <div className="p-3.5 rounded-xl bg-surface/60 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Dataset Source:</span>
                <p className="text-xs text-slate-200">{project.reportDetails.dataset}</p>
              </div>

              {/* Orange Operations */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Orange Data Mining Pipeline:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.reportDetails.orangeOperations.map((op, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-void/50 border border-white/5 text-slate-300">
                      &bull; {op}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tableau Charts Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tableau Visualisation (5 Grains &amp; Charts):</span>
                </span>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {project.reportDetails.tableauCharts.map((ch, i) => (
                    <div key={i} className="p-2 rounded-lg bg-void/40 border border-white/5 flex items-center gap-2">
                      <span className="text-cyan-400 font-mono text-[11px]">0{i + 1}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive KPIs & Key Finding */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
                <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider block">
                  Key Research Conclusions &amp; KPIs:
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.reportDetails.kpis.map((kpi, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">&gt;</span>
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
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-2">
            Technologies &amp; Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>{isReport ? "Open Research Report & Archive" : "Visit Live Platform / Resource"}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && project.githubUrl !== project.liveUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 transition-all"
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
