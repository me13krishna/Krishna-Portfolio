import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  BarChart3, 
  Sparkles,
  Info,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playCyberClick } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Works (12)' },
    { id: 'AI & ML', label: 'Artificial Intelligence' },
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
      
      {/* Background Soft Warm Atmospheric Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#E2A866]/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#728A7C]/[0.04] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
              Selected Works &bull; 2024–2026
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
              Crafted Systems &amp; Case Studies
            </h2>
          </div>
          <p className="text-sm text-[#9B988E] max-w-md leading-relaxed">
            From algorithmic prototypes to live production platforms. Each system is designed with rigorous performance, thoughtful UX, and architectural integrity.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. LARGE MAGAZINE-STYLE CASE STUDY CARDS (TOP 3 FLAGSHIPS)    */}
        {/* ============================================================== */}
        <div className="space-y-12 mb-28">
          
          {/* Case Study 01: QLOCKAIN VAULT */}
          <div className="rounded-[32px] p-8 sm:p-12 bg-[#151518]/90 border border-white/[0.07] hover:border-[#E2A866]/30 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-soft-card group">
            
            {/* Visual Panel Left (6 cols) */}
            <div className="lg:col-span-6 rounded-[24px] bg-gradient-to-br from-[#1C1824] via-[#151518] to-[#0E0E10] p-8 sm:p-10 border border-white/[0.06] relative overflow-hidden flex flex-col justify-between min-h-[340px] text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#E2A866] font-medium tracking-widest">
                  CASE 01 &bull; CRYPTOGRAPHY
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.08]">
                  Render Deployed
                </span>
              </div>

              <div className="my-8 space-y-3">
                <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E2A866] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-[#F7F6F2] tracking-tight">
                  Qlockain Vault
                </h4>
                <p className="text-sm text-[#9B988E] font-editorial italic text-base">
                  Cryptographic permanence for digital identity &amp; document integrity.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#9B988E]">
                <span>Endpoint:</span>
                <span className="text-[#F7F6F2] underline underline-offset-4 decoration-white/20">qlockain.onrender.com</span>
              </div>
            </div>

            {/* Content Panel Right (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-[#728A7C] uppercase tracking-wider font-medium">
                  Blockchain &bull; SHA-256 Ledger
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] mt-1.5 tracking-tight">
                  Immutable Credential Verification Architecture
                </h3>
              </div>

              <p className="text-sm text-[#9B988E] leading-relaxed font-normal">
                Engineered with Python and Flask to provide tamper-proof identity verification without centralized vulnerability. Utilizes SHA-256 cryptographic hashing to store and validate institutional credentials with mathematical finality.
              </p>

              <div className="space-y-2 text-xs text-[#E3E1D8]">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2A866]" />
                  <span>Immutable block sequencing ensuring credentials cannot be modified retroactively</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2A866]" />
                  <span>Sub-millisecond verification throughput via optimized REST endpoints</span>
                </div>
              </div>

              {/* Soft Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'Flask', 'Blockchain', 'SHA-256', 'Render Cloud', 'REST API'].map((t) => (
                  <span key={t} className="text-[11px] font-sans px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.06]">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs shadow-md transition-all duration-300"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0E0E10]" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'qlockain'));
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#E3E1D8] hover:text-[#F7F6F2] border border-white/[0.06] text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5 text-[#9B988E]" />
                  <span>Case Details</span>
                </button>
              </div>
            </div>

          </div>

          {/* Case Study 02: STARTUP MENTOR AI */}
          <div className="rounded-[32px] p-8 sm:p-12 bg-[#151518]/90 border border-white/[0.07] hover:border-[#E2A866]/30 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-soft-card group">
            
            {/* Content Panel Left (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono text-[#E2A866] uppercase tracking-wider font-medium">
                  Enterprise AI &bull; IBM watsonx Orchestrate
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] mt-1.5 tracking-tight">
                  Startup Mentor — 19-Section Blueprint Engine
                </h3>
              </div>

              <p className="text-sm text-[#9B988E] leading-relaxed font-normal">
                An intelligent generative workbench generating comprehensive strategic plans. Translates raw concept inputs into market evaluations, unit economics, risk matrices, and instant downloadable PDF dossiers.
              </p>

              <div className="space-y-2 text-xs text-[#E3E1D8]">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#728A7C]" />
                  <span>Integrated with IBM watsonx Orchestrate multi-step reasoning pipeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#728A7C]" />
                  <span>Custom client-side PDF document generation formatted for venture presentations</span>
                </div>
              </div>

              {/* Soft Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['IBM watsonx', 'Node.js', 'Express', 'React', 'Vite', 'Client PDF Engine'].map((t) => (
                  <span key={t} className="text-[11px] font-sans px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3.5 pt-4">
                <a
                  href="https://startup-mentor-jftd.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs shadow-md transition-all duration-300"
                >
                  <span>Launch on Render</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0E0E10]" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'startup-mentor'));
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#E3E1D8] hover:text-[#F7F6F2] border border-white/[0.06] text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5 text-[#9B988E]" />
                  <span>Case Details</span>
                </button>
              </div>
            </div>

            {/* Visual Panel Right (6 cols) */}
            <div className="lg:col-span-6 rounded-[24px] bg-gradient-to-br from-[#1C1A16] via-[#151518] to-[#0E0E10] p-8 sm:p-10 border border-white/[0.06] relative overflow-hidden flex flex-col justify-between min-h-[340px] text-left order-1 lg:order-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#E2A866] font-medium tracking-widest">
                  CASE 02 &bull; GENERATIVE AI
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#E2A866]/10 text-[#E2A866] border border-[#E2A866]/20">
                  watsonx Key Renewable
                </span>
              </div>

              <div className="my-8 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E2A866] mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-[#F7F6F2] tracking-tight">
                  Startup Mentor AI
                </h4>
                <p className="text-sm text-[#9B988E] font-editorial italic text-base">
                  Autonomous business strategy synthesis powered by enterprise foundation models.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#9B988E]">
                <span>Endpoint:</span>
                <span className="text-[#F7F6F2] underline underline-offset-4 decoration-white/20 truncate">startup-mentor-jftd.onrender.com</span>
              </div>
            </div>

          </div>

          {/* Case Study 03: STADIUMOPS AI */}
          <div className="rounded-[32px] p-8 sm:p-12 bg-[#151518]/90 border border-white/[0.07] hover:border-[#E2A866]/30 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-soft-card group">
            
            {/* Visual Panel Left (6 cols) */}
            <div className="lg:col-span-6 rounded-[24px] bg-gradient-to-br from-[#141C18] via-[#151518] to-[#0E0E10] p-8 sm:p-10 border border-white/[0.06] relative overflow-hidden flex flex-col justify-between min-h-[340px] text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#728A7C] font-medium tracking-widest">
                  CASE 03 &bull; PREDICTIVE OPERATIONS
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.08]">
                  Vercel Deployed
                </span>
              </div>

              <div className="my-8 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#728A7C] mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-[#F7F6F2] tracking-tight">
                  StadiumOps AI
                </h4>
                <p className="text-sm text-[#9B988E] font-editorial italic text-base">
                  Predictive crowd flow simulation and automated arena safety orchestration.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#9B988E]">
                <span>Endpoint:</span>
                <span className="text-[#F7F6F2] underline underline-offset-4 decoration-white/20">stadiumopsai-xi.vercel.app</span>
              </div>
            </div>

            {/* Content Panel Right (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-[#728A7C] uppercase tracking-wider font-medium">
                  Smart Logistics &bull; Real-Time Analytics
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] mt-1.5 tracking-tight">
                  Large-Scale Venue Flow Optimization
                </h3>
              </div>

              <p className="text-sm text-[#9B988E] leading-relaxed font-normal">
                Designed to forecast attendee choke points, balance entrance turnstile saturation, and provide stadium dispatch directors with live actionable density metrics during peak ingress and egress windows.
              </p>

              <div className="space-y-2 text-xs text-[#E3E1D8]">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#728A7C]" />
                  <span>Real-time density modelling to prevent corridor congestion before it forms</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#728A7C]" />
                  <span>Dynamic staff re-allocation workflows during unexpected gate surges</span>
                </div>
              </div>

              {/* Soft Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Next.js', 'React', 'Crowd Analytics', 'Queue Modeling', 'Vercel Deployed'].map((t) => (
                  <span key={t} className="text-[11px] font-sans px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3.5 pt-4">
                <a
                  href="https://stadiumopsai-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs shadow-md transition-all duration-300"
                >
                  <span>Launch on Vercel</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0E0E10]" />
                </a>

                <button
                  onClick={() => {
                    playCyberClick();
                    setSelectedProject(projects.find(p => p.id === 'stadiumops-ai'));
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#E3E1D8] hover:text-[#F7F6F2] border border-white/[0.06] text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5 text-[#9B988E]" />
                  <span>Case Details</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. CURATED DIRECTORY OF ALL 12 PROJECTS WITH FILTER TABS       */}
        {/* ============================================================== */}
        <div className="pt-12 border-t border-white/[0.06]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] tracking-tight">
                All Engineered Works &amp; Repositories
              </h3>
              <p className="text-xs text-[#9B988E] mt-1">
                Explore all 12 projects across AI systems, full-stack applications, data engineering, and national hackathons.
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
                      ? 'bg-[#F7F6F2] text-[#0E0E10] font-semibold shadow-sm'
                      : 'bg-[#151518] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06]'
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
                className="group rounded-[24px] bg-[#151518]/90 p-7 border border-white/[0.06] hover:border-[#E2A866]/30 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#E2A866] font-medium">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#9B988E]">
                      {proj.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#F7F6F2] group-hover:text-white transition-colors mb-2">
                    {proj.title}
                  </h4>

                  {/* Tagline */}
                  <p className="text-xs text-[#9B988E] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {proj.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-sans px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[#E3E1D8] border border-white/[0.04]">
                        {t}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#9B988E]">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 mt-auto">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#F7F6F2] hover:text-[#0E0E10] text-[#E3E1D8] text-xs font-medium transition-all border border-white/[0.06]"
                  >
                    <span className="truncate">{getButtonLabel(proj)}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>

                  <button
                    onClick={() => {
                      playCyberClick();
                      setSelectedProject(proj);
                    }}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-all"
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
