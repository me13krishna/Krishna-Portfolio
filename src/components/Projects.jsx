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
  Globe,
  Terminal,
  Trophy,
  FileText
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Projects (12)' },
    { id: 'AI & ML', label: 'AI & Machine Learning' },
    { id: 'Full-Stack & Web', label: 'Full-Stack & Web' },
    { id: 'Data & Systems', label: 'Data & Systems' },
    { id: 'Hackathons & SIH', label: 'Hackathons & SIH' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI & ML') {
      return (
        p.category.includes('AI') ||
        p.category.includes('NLP') ||
        p.category.includes('Computer Vision')
      );
    }
    if (activeCategory === 'Full-Stack & Web') {
      return (
        p.category.includes('Web') ||
        p.category.includes('Full-Stack') ||
        p.category.includes('Blockchain')
      );
    }
    if (activeCategory === 'Data & Systems') {
      return (
        p.category.includes('Data') ||
        p.category.includes('Analytics') ||
        p.category.includes('Linux') ||
        p.category.includes('Systems')
      );
    }
    if (activeCategory === 'Hackathons & SIH') {
      return (
        p.category.includes('Hackathon') ||
        p.category.includes('SIH')
      );
    }
    return true;
  });

  const handleLaunchProject = (url) => {
    playCyberBeep();
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#3b82f6', '#a855f7']
      });
    } catch (e) {
      // Ignore
    }
  };

  const getCategoryIcon = (category) => {
    if (category.includes('SIH') || category.includes('Hackathon')) return <Trophy className="w-4 h-4 text-amber-400" />;
    if (category.includes('Data') || category.includes('Analytics')) return <BarChart3 className="w-4 h-4 text-cyan-400" />;
    if (category.includes('Blockchain')) return <ShieldCheck className="w-4 h-4 text-purple-400" />;
    if (category.includes('Linux') || category.includes('Systems')) return <Terminal className="w-4 h-4 text-emerald-400" />;
    if (category.includes('AI') || category.includes('Vision') || category.includes('NLP')) return <Cpu className="w-4 h-4 text-cyan-400" />;
    return <Globe className="w-4 h-4 text-blue-400" />;
  };

  const getButtonLabel = (proj) => {
    if (proj.isReport) return 'View DV Report';
    if (proj.id === 'qlockain') return 'Live on Render';
    if (proj.id === 'startup-mentor') return 'Live on Render';
    if (proj.id === 'stadiumops-ai') return 'Live on Vercel';
    if (proj.id === 'prakrushti') return 'Live on Vercel';
    if (proj.id === 'smart-campus') return 'Live Portal';
    if (proj.liveUrl && proj.liveUrl.includes('github.com')) return 'GitHub Repo';
    if (proj.liveUrl && proj.liveUrl.includes('drive.google.com')) return 'Open Resource';
    return 'Live Resource';
  };

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>04 — Engineered Works &amp; Repositories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Technical &amp; AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Projects</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct access to deployed applications on Render &amp; Vercel, open-source AI repositories, 
            Smart India Hackathon initiatives, Linux POSIX utilities, and comprehensive Data Visualisation research.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playCyberClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'glass-panel text-slate-400 hover:text-white border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-bl-full transition-colors pointer-events-none" />

              <div>
                {/* Meta bar */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{idx + 1} //
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {getCategoryIcon(proj.category)}
                      <span className="truncate max-w-[140px]">{proj.category}</span>
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface border border-white/10 text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display mb-2">
                  {proj.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {proj.tagline}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {proj.tags.slice(0, 4).map((t) => (
                    <span 
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-slate-500">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3.5 border-t border-white/10 flex items-center gap-2 mt-auto">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLaunchProject(proj.liveUrl)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all hover:shadow-md hover:shadow-cyan-950/40"
                >
                  <span className="truncate">{getButtonLabel(proj)}</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(proj);
                  }}
                  className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
                  title="View detailed overview"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>Info</span>
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
