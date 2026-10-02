import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Compass, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

import krishnaImg from '../assets/krishna.jpg';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <span>01 — Identity &amp; Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Curiosity &amp; Purpose</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From foundational logic to cutting-edge AI architectures, here is a snapshot of my academic journey and engineering philosophy.
          </p>
        </div>

        {/* Content Layout: Left Bio + Right Stats & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Core Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base shadow-xl">
              <div className="flex items-center gap-3.5 mb-2">
                <img 
                  src={krishnaImg} 
                  alt="Krishna Mishra" 
                  className="w-12 h-12 rounded-xl object-cover border border-cyan-400/40 shadow-lg shadow-cyan-950/50" 
                />
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Who I Am
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">Software Engineering Student &bull; MITAOE</span>
                </div>
              </div>
              
              <p>
                I am <strong className="text-white font-semibold">Krishna Rameshwar Mishra</strong>, a B.Tech Computer Science 
                (Software Engineering) student at the prestigious <strong className="text-cyan-300">MIT Academy of Engineering, Pune</strong>.
                My focus centers on architecting clean, maintainable software systems and exploring modern Artificial Intelligence workflows.
              </p>

              <p>
                My drive comes from translating abstract technical concepts into tangible, human-centric software.
                Whether collaborating in a team to build the <strong className="text-purple-300">Smart Campus Platform</strong> for hundreds of students, 
                optimizing shell routines in Linux, or cracking complex recursion puzzles in Python, I immerse myself in every challenge.
              </p>

              <p>
                I actively follow the end-to-end <strong className="text-white">Software Development Lifecycle (SDLC)</strong> — ideating 
                system architecture, writing robust logic, and deploying fast, responsive applications.
              </p>

              {/* Action row inside bio */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    playCyberClick();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
                >
                  <span>Read Full Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-transparent hover:bg-white/5 text-slate-300 border border-white/10 transition-all"
                >
                  <span>Discuss Opportunities</span>
                </a>
              </div>
            </div>

            {/* Academic Card */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/30 bg-gradient-to-br from-surface to-deep shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-bold text-white">MIT Academy of Engineering</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      Autonomous Institute
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    B.Tech in Computer Science (Software Engineering)
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    2025 – 2029 &bull; Pune, Maharashtra, India
                  </p>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      Current CGPA: 8.76 / 10.0
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Stats & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Principles Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Core Engineering Tenets</span>
              </h4>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture:</strong> Prioritizing code readability, PEP 8 standards, and logical modularity.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Problem Solving:</strong> Strengthening algorithmic instincts and time complexity efficiency.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Product-Minded:</strong> Focusing on how end-users actually engage with software to eliminate friction.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Collaborative Spirit:</strong> Team communication, Git workflows, and active mentorship receptivity.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
