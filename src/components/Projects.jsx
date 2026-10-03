import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Info, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  Terminal, 
  Trophy, 
  Sparkles,
  ArrowRight
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
    { id: 'All', label: 'All Works (12)' },
    { id: 'AI & ML', label: 'AI & Machine Learning' },
    { id: 'Full-Stack', label: 'Full-Stack & Web' },
    { id: 'Data & Systems', label: 'Data & Systems' },
    { id: 'Hackathons', label: 'Hackathons & SIH' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI & ML') {
      return (
        p.category.includes('AI') ||
        p.category.includes('NLP') ||
        p.category.includes('Vision')
      );
    }
    if (activeCategory === 'Full-Stack') {
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
    if (activeCategory === 'Hackathons') {
      return (
        p.category.includes('Hackathon') ||
        p.category.includes('SIH')
      );
    }
    return true;
  });

  // Top 3 Flagship Projects for Editorial Alternating Showcase
  const flagshipProjects = projects.slice(0, 3);
  // Remaining Projects for curated editorial grid
  const secondaryProjects = filteredProjects;

  const handleLaunchProject = (url) => {
    playCyberBeep();
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF5500', '#FFAA00', '#FFFFFF']
      });
    } catch (e) {}
  };

  const getButtonLabel = (proj) => {
    if (proj.isReport) return 'View 32-Page Report';
    if (proj.id === 'qlockain') return 'Launch on Render';
    if (proj.id === 'startup-mentor') return 'Launch on Render';
    if (proj.id === 'stadiumops-ai') return 'Launch on Vercel';
    if (proj.id === 'prakrushti') return 'Launch on Vercel';
    if (proj.id === 'smart-campus') return 'Launch Live App';
    if (proj.liveUrl && proj.liveUrl.includes('github.com')) return 'GitHub Repository';
    if (proj.liveUrl && proj.liveUrl.includes('drive.google.com')) return 'Open Resource';
    return 'View Project';
  };

  return (
    <section id="projects" className="py-24 relative">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-ember/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
              Selected Works &bull; 2024–2026
            </span>
            <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ivory-muted max-w-md leading-relaxed">
            Architected and engineered from concept to live deployment. Each system addresses real-world constraints across AI reasoning, cryptographic immutability, venue logistics, and workforce transitions.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. EDITORIAL ALTERNATING SHOWCASE (TOP 3 FLAGSHIP WORKS)     */}
        {/* ============================================================== */}
        <div className="space-y-12 mb-20">
          
          {/* Showcase 01: QLOCKAIN (Visual Left, Info Right) */}
          <div className="rounded-3xl p-7 sm:p-10 bg-surface/90 border border-borderMuted hover:border-ember/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl group">
            
            {/* Visual Panel Left (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-surface to-void p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 font-bold tracking-widest">
                  01 // FLAGSHIP
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Live on Render
                </span>
              </div>

              <div className="my-6 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Qlockain Vault
                </h4>
                <p className="text-xs font-mono text-ivory-muted">
                  SHA-256 Ledger &bull; Python Flask REST API &bull; Tamper-Resistant
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <span>Production URL:</span>
                <span className="text-white underline">qlockain.onrender.com</span>
              </div>
            </div>

            {/* Info Panel Right (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <span className="text-xs font-mono text-ember uppercase tracking-wider font-semibold">
                  Blockchain &amp; Cryptographic Security
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  Qlockain — Blockchain-Based Digital Identity Vault
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed">
                A security-first platform developed with Python and Flask providing cryptographic identity management and document verification. Leverages immutable blockchain logic and SHA-256 hashing for tamper-resistant credential storage and validation.
              </p>

              <div className="space-y-1.5 text-xs text-ivory-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                  <span>Immutable blockchain ledger ensuring credentials cannot be altered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                  <span>Fast Python Flask REST backend for instant verification checks</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Flask', 'Blockchain', 'Cryptography', 'Render Deployed', 'REST APIs'].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ivory-dim border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://qlockain.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLaunchProject('https://qlockain.onrender.com/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-xs transition-all shadow-lg shadow-ember/20"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'qlockain'));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Architecture Details</span>
                </button>
              </div>
            </div>

          </div>

          {/* Showcase 02: STARTUP MENTOR (Info Left, Visual Right) */}
          <div className="rounded-3xl p-7 sm:p-10 bg-surface/90 border border-borderMuted hover:border-ember/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl group">
            
            {/* Info Panel Left (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono text-amberGold uppercase tracking-wider font-semibold">
                  Generative AI &amp; Enterprise Orchestration
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  Startup Mentor — AI-Powered Blueprint Generator
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed">
                An enterprise-grade AI platform generating comprehensive 19-section business blueprints on demand. Integrated IBM watsonx Orchestrate with a Node.js/Express backend and a responsive React/Vite frontend featuring instant client-side PDF export.
              </p>

              <div className="space-y-1.5 text-xs text-ivory-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold" />
                  <span>19-section business blueprint logic covering market analysis &amp; financials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold" />
                  <span>IBM watsonx multi-step reasoning pipeline integration</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['IBM watsonx', 'Generative AI', 'React', 'Vite', 'Node.js', 'Express', 'PDF Export'].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ivory-dim border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://startup-mentor-jftd.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLaunchProject('https://startup-mentor-jftd.onrender.com/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-xs transition-all shadow-lg shadow-ember/20"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'startup-mentor'));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Technical Blueprint</span>
                </button>
              </div>
            </div>

            {/* Visual Panel Right (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-amber-950/30 via-surface to-void p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[300px] order-1 lg:order-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amberGold font-bold tracking-widest">
                  02 // FLAGSHIP
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  watsonx Key Renewable
                </span>
              </div>

              <div className="my-6 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amberGold mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Startup Mentor AI
                </h4>
                <p className="text-xs font-mono text-ivory-muted">
                  IBM watsonx Orchestrate &bull; 19-Section Blueprint &bull; PDF Engine
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                <span>Production URL:</span>
                <span className="text-white underline truncate">startup-mentor-jftd.onrender.com</span>
              </div>
            </div>

          </div>

          {/* Showcase 03: STADIUMOPS AI (Visual Left, Info Right) */}
          <div className="rounded-3xl p-7 sm:p-10 bg-surface/90 border border-borderMuted hover:border-ember/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl group">
            
            {/* Visual Panel Left (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-surface to-void p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-widest">
                  03 // FLAGSHIP
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Live on Vercel
                </span>
              </div>

              <div className="my-6 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  StadiumOps AI
                </h4>
                <p className="text-xs font-mono text-ivory-muted">
                  Crowd Logistics &bull; Queue Optimization &bull; Command Center UI
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                <span>Production URL:</span>
                <span className="text-white underline">stadiumopsai-xi.vercel.app</span>
              </div>
            </div>

            {/* Info Panel Right (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  AI &amp; Smart Venue Logistics
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  StadiumOps AI — Venue &amp; Crowd Intelligence
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed">
                An intelligent stadium operations and crowd management web platform. Designed to monitor real-time attendee density, forecast queue bottlenecks, optimize venue gate distribution, and coordinate rapid response protocols for massive events.
              </p>

              <div className="space-y-1.5 text-xs text-ivory-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Real-time crowd flow analysis and bottleneck mitigation algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Emergency protocol coordination &amp; staff dispatch workflow</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Next.js/React', 'Crowd Analytics', 'AI Operations', 'Real-Time', 'Vercel Deployed'].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ivory-dim border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://stadiumopsai-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLaunchProject('https://stadiumopsai-xi.vercel.app/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-xs transition-all shadow-lg shadow-ember/20"
                >
                  <span>Launch on Vercel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'stadiumops-ai'));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Platform Scope</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. CURATED DIRECTORY OF ALL 12 PROJECTS WITH FILTER TABS       */}
        {/* ============================================================== */}
        <div className="pt-10 border-t border-borderMuted">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">
                All Engineered Works &amp; Repositories
              </h3>
              <p className="text-xs text-ivory-muted mt-1">
                Explore all 12 projects across AI, Web, Systems, and Hackathon challenges.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    playCyberClick();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeCategory === cat.id
                      ? 'bg-ember text-white font-semibold shadow-md shadow-ember/20'
                      : 'bg-surface text-ivory-muted hover:text-white border border-borderMuted hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Secondary / Filtered Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="group rounded-2xl bg-surface/80 p-6 border border-borderMuted hover:border-ember/35 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-ember font-bold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-ivory-muted">
                      {proj.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white group-hover:text-ember transition-colors font-display mb-2">
                    {proj.title}
                  </h4>

                  {/* Tagline */}
                  <p className="text-xs text-ivory-muted leading-relaxed line-clamp-3 mb-4">
                    {proj.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-ivory-dim border border-white/5">
                        {t}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-ivory-muted">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-borderMuted flex items-center gap-2 mt-auto">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLaunchProject(proj.liveUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-ember hover:text-white text-ivory-dim text-xs font-semibold transition-all border border-white/10"
                  >
                    <span className="truncate">{getButtonLabel(proj)}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>

                  <button
                    onClick={() => {
                      playCyberClick();
                      setSelectedProject(proj);
                    }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-ivory-muted hover:text-white border border-white/10 transition-all"
                    title="View full specs"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

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
