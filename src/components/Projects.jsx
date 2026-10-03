import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Info,
  Sparkles,
  Cpu,
  ShieldCheck,
  BarChart3,
  Globe
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLaunchProject = (url) => {
    playCyberBeep();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#3b82f6', '#a855f7']
      });
    } catch (e) {
      // Ignore
    }
  };

  const getCategoryIcon = (category) => {
    if (category.includes('AI')) return <Cpu className="w-4 h-4 text-cyan-400" />;
    if (category.includes('Blockchain')) return <ShieldCheck className="w-4 h-4 text-purple-400" />;
    if (category.includes('Analytics')) return <BarChart3 className="w-4 h-4 text-emerald-400" />;
    return <Globe className="w-4 h-4 text-blue-400" />;
  };

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>04 — Featured Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Technical &amp; AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Projects</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems spanning IBM watsonx generative blueprints, blockchain identity vaults, 
            workforce data analytics dashboards, and campus software platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="group glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-bl-full transition-colors pointer-events-none" />

              <div>
                {/* Meta bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{idx + 1} //
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {getCategoryIcon(proj.category)}
                      <span>{proj.category}</span>
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display mb-2">
                  {proj.title}
                </h3>

                {/* Tagline / Snippet */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed line-clamp-2">
                  {proj.tagline}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((t) => (
                    <span 
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLaunchProject(proj.liveUrl)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all hover:shadow-lg hover:shadow-cyan-950/40"
                >
                  <span>Project Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(proj);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
                  title="View detailed overview"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
