import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  MapPin, 
  GraduationCap, 
  Cpu, 
  Copy, 
  Check, 
  Sparkles,
  ArrowDownRight,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    playCyberBeep();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Subtle Warm Ambient Backlight (Ember & Charcoal) */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-ember/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amberGold/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Massive Typography & Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-borderMuted text-xs font-mono text-ivory-dim tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse shadow-[0_0_8px_#FF5500]" />
              <span className="text-white font-medium">Founder @ Indian Pixel</span>
              <span className="text-borderMuted">/</span>
              <span className="text-ivory-muted">Open to Summer '25 Roles</span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-3">
              <h1 className="headline-editorial text-5xl sm:text-7xl lg:text-[5.4rem] font-extrabold text-white tracking-tighter uppercase">
                Building Ideas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-amberGold to-white">
                  Into Reality.
                </span>
              </h1>

              {/* Subheading Statement */}
              <p className="text-lg sm:text-2xl font-light text-ivory-dim tracking-tight">
                Software Engineer <span className="text-ember font-normal">&bull;</span> AI Builder <span className="text-ember font-normal">&bull;</span> Problem Solver
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-ivory-muted leading-relaxed max-w-xl font-normal">
              B.Tech Software Engineering student at <strong className="text-white font-medium">MIT Academy of Engineering, Pune</strong> (CGPA 8.76). Architecting production AI platforms with IBM watsonx & Gemini, blockchain vaults, and performant web products with obsessive engineering craftsmanship.
            </p>

            {/* Editorial Metadata Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ivory-muted pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/80 border border-borderMuted">
                <MapPin className="w-3.5 h-3.5 text-ember" />
                <span>Pune Division, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/80 border border-borderMuted">
                <GraduationCap className="w-3.5 h-3.5 text-amberGold" />
                <span>MITAOE (2025–2029)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/80 border border-borderMuted">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>12+ Shipped Projects</span>
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={playCyberClick}
                data-cursor="EXPLORE"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-sm shadow-xl shadow-ember/20 hover:shadow-ember/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={playCyberClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-surfaceHover text-white font-medium text-sm border border-borderMuted hover:border-white/20 transition-all duration-200"
              >
                <span>Let's Connect</span>
                <ArrowDownRight className="w-4 h-4 text-ivory-muted" />
              </a>

              <button
                onClick={() => {
                  playCyberClick();
                  onOpenTerminal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-surface/50 hover:bg-surface text-ivory-muted hover:text-white font-mono text-xs border border-borderMuted transition-all duration-200"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-ember" />
                <span>CLI Terminal</span>
              </button>
            </div>

            {/* Quick Interactive Terminal Prompt */}
            <div className="w-full max-w-lg rounded-xl bg-surface/90 border border-borderMuted p-3 font-mono text-xs shadow-lg">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-borderMuted">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-ivory-muted ml-2">krishna@workstation:~$</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-[11px] text-ivory-muted hover:text-white transition-colors bg-white/5 px-2 py-0.5 rounded"
                  title="Copy direct email"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
              <div className="text-ivory-dim">
                <span className="text-ember">$</span> status --summary
                <p className="text-[11px] text-ivory-muted mt-0.5">
                  &gt; [READY] B.Tech Software Eng @ MITAOE | CGPA: <strong className="text-white">8.76</strong> | 12+ Projects | 4 Internships/Ventures
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Art-Directed Portrait of Krishna */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Warm Silhouette Glow */}
            <div className="absolute inset-0 max-w-[380px] max-h-[480px] mx-auto bg-gradient-to-tr from-ember/25 via-amberGold/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Editorial Framed Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] rounded-3xl p-2.5 bg-gradient-to-b from-white/10 via-surface to-surface border border-white/15 shadow-2xl transition-transform duration-500 hover:scale-[1.01] group">
              
              {/* Image Frame */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-surface border border-white/10">
                <img
                  src={krishnaImg}
                  alt="Krishna Rameshwar Mishra"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent opacity-80 pointer-events-none" />

                {/* Corner Editorial Stamp */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-void/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-ivory-dim uppercase">
                  ARCHIVE // 01
                </div>

                {/* Bottom Identity Block */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-surface/90 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-display uppercase tracking-tight">Krishna Mishra</h3>
                      <p className="text-[11px] font-mono text-ember font-medium">Software Engineer &bull; AI Builder</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                </div>
              </div>

              {/* Floating Editorial Badge (Top-Right) */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-surface/95 border border-ember/40 shadow-xl flex items-center gap-1.5 text-xs font-mono text-ivory">
                <Cpu className="w-3.5 h-3.5 text-ember" />
                <span>AI Platforms</span>
              </div>

              {/* Floating Editorial Badge (Bottom-Left) */}
              <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-xl bg-surface/95 border border-amberGold/40 shadow-xl flex items-center gap-1.5 text-xs font-mono text-ivory">
                <span className="w-2 h-2 rounded-full bg-amberGold" />
                <span>CGPA 8.76</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
