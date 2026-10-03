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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E10]/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-3xl rounded-[32px] bg-[#151518] border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full text-[#9B988E] hover:text-[#F7F6F2] bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E2A866]/10 text-[#E2A866] border border-[#E2A866]/20">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#728A7C]/15 text-[#8FA699] border border-[#728A7C]/30">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold text-[#F7F6F2] tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm text-[#9B988E] font-editorial italic text-base">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6 text-[#E3E1D8] text-sm leading-relaxed mb-8 font-normal">
          <p>{project.description}</p>

          {/* Key Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E2A866]" />
              <span>Engineering Architecture &amp; Highlights:</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-[#9B988E]">
                  <CheckCircle2 className="w-4 h-4 text-[#728A7C] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3E1D8]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Section: Data Analytics & DV Report Details */}
          {isReport && project.reportDetails && (
            <div className="space-y-5 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F7F6F2]">
                <BarChart2 className="w-4 h-4 text-[#E2A866]" />
                <span>32-Page Data Visualisation Research Report</span>
              </div>

              {/* Dataset info */}
              <div className="p-4 rounded-2xl bg-[#1C1C21]/60 border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono text-[#E2A866] uppercase tracking-wider block">Dataset Source &amp; Scope:</span>
                <p className="text-xs text-[#E3E1D8]">{project.reportDetails.dataset}</p>
              </div>

              {/* Orange Operations */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#9B988E] font-semibold block flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#728A7C]" />
                  <span>Orange Data Mining Pipeline:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.reportDetails.orangeOperations.map((op, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#1C1C21]/40 border border-white/[0.04] text-[#E3E1D8]">
                      &bull; {op}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tableau Charts Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#9B988E] font-semibold block flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#E2A866]" />
                  <span>Tableau Visualisation (5 Multi-Level Grains):</span>
                </span>
                <div className="space-y-2 text-xs text-[#E3E1D8]">
                  {project.reportDetails.tableauCharts.map((ch, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#1C1C21]/40 border border-white/[0.04] flex items-center gap-3">
                      <span className="text-[#E2A866] font-mono text-[11px]">0{i + 1}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              <div className="p-5 rounded-2xl bg-[#1C1C21]/70 border border-white/[0.06] space-y-2">
                <span className="text-xs font-mono text-[#E2A866] font-medium uppercase tracking-wider block">
                  Empirical Findings &amp; Conclusions:
                </span>
                <ul className="space-y-1.5 text-xs text-[#E3E1D8]">
                  {project.reportDetails.kpis.map((kpi, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#E2A866]">&bull;</span>
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
          <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium mb-3">
            Technologies &amp; Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#E3E1D8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.06]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs transition-all shadow-md"
            >
              <span>{isReport ? "Open Research Report & Archive" : "Launch Production Platform"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0E0E10]" />
            </a>
          )}

          {project.githubUrl && project.githubUrl !== project.liveUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#F7F6F2] font-semibold text-xs border border-white/[0.08] transition-all"
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
