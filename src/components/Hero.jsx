import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function Hero({ onOpenTerminal, onOpenAccounts, onOpenResume }) {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    playCyberBeep();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero Container */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-950/50 backdrop-blur-md animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Open to Engineering Internships</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">CGPA 8.76</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
              <span className="text-slate-100 block mb-1">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
                Krishna Mishra
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
              B.Tech in <span className="text-cyan-300 font-semibold">Computer Science (Software Engineering)</span> at{' '}
              <span className="text-purple-300 font-semibold">MIT Academy of Engineering, Pune</span>.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Passionate software engineer &amp; AI builder crafting high-performance code, 
            practical college utility ecosystems, and user-centric software.
          </p>

          {/* Location & Institution Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-md border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-md border border-white/5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <span>MITAOE (2025–2029)</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 w-full sm:w-auto">
            
            <a
              href="#projects"
              onClick={playCyberClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#accounts"
              onClick={playCyberClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface/80 hover:bg-surface text-slate-200 hover:text-white font-semibold text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-950/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Accounts Hub</span>
            </a>

            <button
              onClick={() => {
                playCyberClick();
                onOpenTerminal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 text-cyan-300 font-mono text-sm border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-slate-900 transition-all shadow-md hover:shadow-cyan-500/10"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Terminal</span>
            </button>

          </div>

          {/* Quick Interactive Interactive Terminal Strip */}
          <div className="w-full max-w-2xl mt-6 rounded-2xl glass-panel p-3 border border-white/10 text-left font-mono text-xs shadow-2xl relative group">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-400 ml-1">krishna@portfolio:~</span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors bg-white/5 px-2 py-0.5 rounded"
                title="Copy Email"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="text-slate-300 space-y-1">
              <p>
                <span className="text-purple-400">$</span> <span className="text-cyan-300">krishna</span> --status
              </p>
              <p className="text-slate-400">
                &gt; [READY] B.Tech CSE (Software Engineering) student | AI &amp; Python enthusiast | CGPA: <span className="text-emerald-400 font-bold">8.76</span>
              </p>
              <p>
                <span className="text-purple-400">$</span> <span className="text-cyan-300">contact</span> --direct
              </p>
              <p className="text-slate-400">
                &gt; <span className="text-amber-300">{personalInfo.email}</span>
              </p>
            </div>
          </div>

          {/* Tech Stack Floating Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider mr-1">Focus Areas:</span>
            {['Python 3', 'Artificial Intelligence', 'Data Structures & Algorithms', 'Linux OS', 'Web Development', 'System Utilities'].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-all font-mono text-[11px] cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
