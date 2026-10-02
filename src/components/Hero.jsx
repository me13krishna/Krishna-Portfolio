import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Code2,
  Cpu,
  Layers,
  Copy,
  Check,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Responsive Grid: Left Text & CTA, Right Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-950/50 backdrop-blur-md animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>Open to Engineering Internships</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-bold">CGPA 8.76</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
                <span className="text-slate-100 block mb-1">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
                  Krishna Mishra
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed max-w-xl">
                B.Tech in <span className="text-cyan-300 font-semibold">Computer Science (Software Engineering)</span> at{' '}
                <span className="text-purple-300 font-semibold">MIT Academy of Engineering, Pune</span>.
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Passionate software engineer &amp; AI enthusiast crafting practical student platforms, 
              Linux system utilities, and high-performance applications.
            </p>

            {/* Location & Institution Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400 pt-1">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
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
                <span>Launch CLI</span>
              </button>
            </div>

            {/* Quick Interactive Terminal Box */}
            <div className="w-full max-w-xl mt-4 rounded-2xl glass-panel p-3 border border-white/10 text-left font-mono text-xs shadow-2xl relative group">
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
                <p className="text-slate-400 text-[11px]">
                  &gt; [READY] B.Tech CSE Student @ MITAOE | CGPA: <span className="text-emerald-400 font-bold">8.76</span>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Krishna's Image with Cyber Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Background Rotating Glow Ring */}
            <div className="absolute inset-0 max-w-[380px] max-h-[460px] mx-auto bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-3xl blur-2xl -z-10 animate-pulse-slow" />

            {/* Profile Card Container with Holographic Border */}
            <div className="relative group max-w-[340px] sm:max-w-[380px] w-full rounded-3xl p-2 bg-gradient-to-b from-white/15 via-cyan-500/20 to-purple-500/30 border border-white/20 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Image Frame */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-deep/90 border border-white/10">
                <img
                  src={krishnaImg}
                  alt="Krishna Rameshwar Mishra"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient overlay for readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />

                {/* Bottom Identity Overlay */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl glass-panel border border-white/15 backdrop-blur-md text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">Krishna Mishra</h3>
                      <p className="text-[11px] font-mono text-cyan-400">Software Engineer &bull; MITAOE</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                </div>
              </div>

              {/* Floating Badge Top-Right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel-glow bg-deep/90 border border-cyan-400/50 shadow-xl flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>AI Builder</span>
              </div>

              {/* Floating Badge Bottom-Left */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl glass-panel-glow bg-deep/90 border border-purple-400/50 shadow-xl flex items-center gap-1.5 text-xs font-mono text-purple-300">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>CGPA 8.76</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
