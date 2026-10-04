import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  BarChart3, 
  Info,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playCyberClick } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: `All Works (${projects.length})` },
    { id: 'AI & ML', label: 'AI & Generative Systems' },
    { id: 'Full-Stack', label: 'Full-Stack & Web' },
    { id: 'Data & Systems', label: 'Data & Security' },
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
        p.category.includes('Campus')
      );
    }
    if (activeCategory === 'Data & Systems') {
      return (
        p.category.includes('Data') ||
        p.category.includes('Analytics') ||
        p.category.includes('Linux') ||
        p.category.includes('Systems') ||
        p.category.includes('Blockchain') ||
        p.category.includes('Security')
      );
    }
    return true;
  });

  const getButtonLabel = (proj) => {
    if (proj.isReport) return 'Read Research Report';
    if (proj.id === 'qlockain') return 'Launch on Render';
    if (proj.id === 'startup-mentor') return 'Launch on Render';
    if (proj.id === 'stadiumops-ai') return 'Launch on Vercel';
    if (proj.id === 'prakrushti') return 'Launch on Vercel';
    if (proj.id === 'smart-campus') return 'Launch Live App';
    if (proj.liveUrl && proj.liveUrl.includes('github.com')) return 'GitHub Source';
    if (proj.liveUrl && proj.liveUrl.includes('drive.google.com')) return 'Open Document';
    return 'View Project';
  };

  return (
    <section id="projects" className="py-28 relative">
      
      {/* Background Ambient Sunlight & Canopy Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sunlight-radial pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-canopy-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
              SELECTED WORKS &bull; 2024–2026
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
              Featured Case Studies &amp; Systems
            </h2>
          </div>
          <p className="text-sm text-charcoal-muted dark:text-dark-textMuted max-w-md leading-relaxed">
            Architected and engineered from first principles to live deployment. Each project solves real constraints across cryptographic immutability, enterprise AI reasoning, and crowd operations.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. ASYMMETRIC PREMIUM SHOWCASE (LARGE HERO + COMPANION CARDS)  */}
        {/* ============================================================== */}
        <div className="space-y-10 mb-24">
          
          {/* Large Hero Card: QLOCKAIN VAULT */}
          <div className="rounded-[32px] p-8 sm:p-12 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 hover:border-leaf/50 dark:hover:border-sun/40 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-soft-card group">
            
            {/* Visual Panel Left (6 cols) */}
            <div className="lg:col-span-6 rounded-[24px] bg-gradient-to-br from-forest/15 via-forest/5 to-cream-subtle dark:from-dark-cardElevated dark:via-dark-card dark:to-dark-bg p-8 sm:p-10 border border-forest/10 dark:border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[340px] text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-forest dark:text-sun font-semibold tracking-widest">
                  CASE 01 &bull; CRYPTOGRAPHY
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-sun border border-forest/10 dark:border-white/10 font-medium">
                  Live on Render
                </span>
              </div>

              <div className="my-8 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 dark:bg-white/5 border border-forest/15 dark:border-white/10 flex items-center justify-center text-forest dark:text-sun mb-4 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                  Qlockain Vault
                </h4>
                <p className="text-sm text-charcoal-muted dark:text-dark-textMuted font-editorial italic text-base">
                  Cryptographic permanence for digital identity &amp; document integrity.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted">
                <span>Production URL:</span>
                <span className="text-forest dark:text-sun underline underline-offset-4 decoration-forest/30 dark:decoration-sun/30 font-medium">
                  qlockain.onrender.com
                </span>
              </div>
            </div>

            {/* Content Panel Right (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-olive dark:text-leaf uppercase tracking-wider font-semibold">
                  Blockchain &bull; SHA-256 Ledger &bull; Python Flask
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-warm-white mt-1.5 tracking-tight">
                  Immutable Credential Verification Architecture
                </h3>
              </div>

              <p className="text-sm text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
                A security-first platform developed with Python and Flask providing cryptographic identity management and document verification. Leverages immutable blockchain logic and SHA-256 hashing for tamper-resistant credential storage and validation.
              </p>

              <div className="space-y-2 text-xs text-charcoal dark:text-warm-white font-medium">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf dark:bg-sun" />
                  <span>Immutable block sequencing ensuring credentials cannot be modified retroactively</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf dark:bg-sun" />
                  <span>Sub-millisecond verification throughput via optimized REST endpoints</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'Flask', 'Blockchain', 'SHA-256', 'Render Cloud', 'REST API'].map((t) => (
                  <span key={t} className="text-[11px] font-sans px-3 py-1 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3.5 pt-4">
                <a
                  href="https://qlockain.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs shadow-md transition-all duration-300"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5 text-warm-white dark:text-forest-dark" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'qlockain'));
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle dark:hover:bg-dark-card text-charcoal dark:text-warm-white border border-forest/15 dark:border-white/10 text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                  <span>Architecture Details</span>
                </button>
              </div>
            </div>

          </div>

          {/* Asymmetric Pair: STARTUP MENTOR AI + STADIUMOPS AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            
            {/* Startup Mentor AI Card */}
            <div className="rounded-[32px] p-8 sm:p-10 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 hover:border-leaf/50 dark:hover:border-sun/40 transition-all duration-400 shadow-soft-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gold dark:text-sun font-semibold tracking-wider">
                    02 &bull; GENERATIVE AI
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sun/10 text-forest dark:text-sun border border-sun/20 font-medium">
                    watsonx Key Renewable
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 flex items-center justify-center text-forest dark:text-sun mb-5 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-charcoal dark:text-warm-white tracking-tight mb-2">
                  Startup Mentor AI
                </h3>

                <p className="text-xs font-editorial italic text-olive dark:text-sun mb-4">
                  Autonomous business strategy synthesis powered by enterprise foundation models.
                </p>

                <p className="text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted leading-relaxed mb-6">
                  An enterprise-grade AI platform generating comprehensive 19-section business blueprints on demand. Integrated IBM watsonx Orchestrate with a Node.js/Express backend and a responsive React frontend with instant PDF export.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['IBM watsonx', 'Node.js', 'Express', 'React', 'PDF Export'].map((t) => (
                    <span key={t} className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10 dark:border-white/10 flex items-center gap-3">
                <a
                  href="https://startup-mentor-jftd.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs transition-all shadow-sm"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'startup-mentor'));
                  }}
                  className="p-3 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle text-charcoal dark:text-warm-white border border-forest/15 dark:border-white/10 transition-all"
                  title="Technical Blueprint"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* StadiumOps AI Card */}
            <div className="rounded-[32px] p-8 sm:p-10 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 hover:border-leaf/50 dark:hover:border-sun/40 transition-all duration-400 shadow-soft-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-leaf dark:text-leaf font-semibold tracking-wider">
                    03 &bull; PREDICTIVE OPERATIONS
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-leaf border border-forest/10 dark:border-white/10 font-medium">
                    Live on Vercel
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 flex items-center justify-center text-forest dark:text-leaf mb-5 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-charcoal dark:text-warm-white tracking-tight mb-2">
                  StadiumOps AI
                </h3>

                <p className="text-xs font-editorial italic text-olive dark:text-sun mb-4">
                  Predictive crowd flow simulation and automated arena safety orchestration.
                </p>

                <p className="text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted leading-relaxed mb-6">
                  An intelligent venue logistics and crowd flow platform. Designed to monitor real-time attendee density, forecast queue bottlenecks, optimize venue gate distribution, and coordinate rapid response protocols.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Next.js', 'React', 'Crowd Analytics', 'Queue Modeling', 'Vercel'].map((t) => (
                    <span key={t} className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10 dark:border-white/10 flex items-center gap-3">
                <a
                  href="https://stadiumopsai-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs transition-all shadow-sm"
                >
                  <span>Launch on Vercel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'stadiumops-ai'));
                  }}
                  className="p-3 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle text-charcoal dark:text-warm-white border border-forest/15 dark:border-white/10 transition-all"
                  title="Platform Scope"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. DIRECTORY OF ALL 12 PROJECTS WITH CATEGORY FILTER PILLS     */}
        {/* ============================================================== */}
        <div className="pt-12 border-t border-forest/10 dark:border-white/10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                All Engineered Repositories &amp; Products
              </h3>
              <p className="text-xs text-charcoal-muted dark:text-dark-textMuted mt-1">
                Explore all 12 projects across AI systems, web architectures, data engineering, and national hackathons.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    playCyberClick();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                      : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white border border-forest/10 dark:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-[26px] bg-cream-card dark:bg-dark-card p-7 border border-forest/10 dark:border-white/10 hover:border-leaf/40 dark:hover:border-sun/40 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-forest dark:text-sun font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 text-charcoal-muted dark:text-dark-textMuted">
                      {proj.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors mb-2">
                    {proj.title}
                  </h4>

                  {/* Tagline */}
                  <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed line-clamp-3 mb-5 font-normal">
                    {proj.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-sans px-2.5 py-0.5 rounded-md bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/5 dark:border-white/5">
                        {t}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-forest/5 dark:bg-white/5 text-charcoal-muted dark:text-dark-textMuted">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-forest/10 dark:border-white/10 flex items-center gap-2 mt-auto">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white text-xs font-semibold transition-all border border-forest/10 dark:border-white/10"
                  >
                    <span className="truncate">{getButtonLabel(proj)}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>

                  <button
                    onClick={() => {
                      playCyberClick();
                      setSelectedProject(proj);
                    }}
                    className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white border border-forest/10 dark:border-white/10 transition-all"
                    title="View technical details"
                  >
                    <Info className="w-4 h-4" />
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
