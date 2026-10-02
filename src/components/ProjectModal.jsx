import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-2xl rounded-2xl glass-panel-glow bg-deep/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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
          <div className="flex items-center gap-2">
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
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">
              Engineering Highlights &amp; Scope:
            </h4>
            <div className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
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
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Visit Live / Resource</span>
            <ExternalLink className="w-4 h-4" />
          </a>

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
        </div>

      </div>
    </div>
  );
}
