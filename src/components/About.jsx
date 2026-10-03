import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Target, 
  ArrowUpRight, 
  CheckCircle,
  Lightbulb,
  Compass
} from 'lucide-react';
import { personalInfo, educationList } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 relative border-t border-borderMuted">
      
      {/* Background Subtle Warmth */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-ember/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
            Philosophy &bull; Identity &bull; Education
          </span>
          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Curious By Default. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-amberGold to-white">
              Building By Choice.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols): The Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="rounded-3xl p-7 sm:p-9 bg-surface/80 border border-borderMuted space-y-5 text-sm sm:text-base text-ivory-dim leading-relaxed shadow-xl">
              
              <div className="flex items-center gap-4 pb-4 border-b border-borderMuted">
                <img 
                  src={krishnaImg} 
                  alt="Krishna Mishra" 
                  className="w-14 h-14 rounded-2xl object-cover border border-white/20 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Krishna Rameshwar Mishra</h3>
                  <p className="text-xs font-mono text-ember font-medium">Undergraduate Software Engineer &bull; MITAOE Pune</p>
                </div>
              </div>

              <p>
                I am driven by the thrill of turning abstract technical concepts into production software that real humans actually use. Whether designing scalable full-stack web platforms at <strong className="text-white">Indian Pixel</strong>, integrating LLM reasoning chains via <strong className="text-white">IBM watsonx</strong>, or analyzing global AI disruption patterns on Kaggle datasets, I treat software engineering as an exacting craft.
              </p>

              <p>
                My foundation was forged through intense competitive coding and POSIX system programming in Linux. I believe true engineering credibility isn’t about buzzwords—it’s about writing clean, maintainable logic, measuring algorithmic time and space complexities, and having the stamina to debug deep into the night until the system works flawlessly.
              </p>

              <p>
                Currently, I am diving deep into <strong className="text-white">Agentic AI architectures</strong>, Computer Vision pipelines for surveillance (Netra X for SIH), and building software platforms that merge speed with exceptional user experience.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playCyberClick();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-white text-void hover:bg-ember hover:text-white transition-all shadow-md"
                >
                  <span>Review Official Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-surface hover:bg-surfaceHover text-ivory-dim border border-borderMuted transition-all"
                >
                  <span>Start a Conversation</span>
                </a>
              </div>

            </div>

            {/* Approach to Problem Solving */}
            <div className="rounded-3xl p-6 sm:p-8 bg-surface/50 border border-borderMuted space-y-4">
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amberGold" />
                <span>How I Approach Engineering</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ivory-muted pt-1">
                <div className="p-3.5 rounded-xl bg-void/50 border border-white/5 space-y-1">
                  <strong className="text-white block font-sans">First-Principles Logic</strong>
                  <span>Break complex requirements down into atomic components before writing a single line of code.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-void/50 border border-white/5 space-y-1">
                  <strong className="text-white block font-sans">Time &amp; Space Rigor</strong>
                  <span>Always analyze big-O bounds. Elegant code is fast, deterministic, and predictable.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-void/50 border border-white/5 space-y-1">
                  <strong className="text-white block font-sans">End-to-End Ownership</strong>
                  <span>From system architecture and UI prototyping to deployment scripts and automated testing.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-void/50 border border-white/5 space-y-1">
                  <strong className="text-white block font-sans">Continuous Curiosity</strong>
                  <span>Constantly exploring new tools: watsonx Orchestrate, Gemini 1.5, Orange ML, and Next.js.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Academic Journey */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl p-7 sm:p-8 bg-surface/90 border border-borderMuted space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-borderMuted">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-ember" />
                  <h4 className="text-lg font-bold font-display text-white uppercase tracking-tight">Academic Path</h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-ivory-dim border border-white/10">
                  Verified
                </span>
              </div>

              {/* Education Cards */}
              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-void/60 border border-white/5 hover:border-ember/30 transition-colors text-left space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-sm font-bold text-white">{edu.institution}</h5>
                      <span className="text-xs font-mono font-bold text-amberGold px-2 py-0.5 rounded bg-amberGold/10 border border-amberGold/30 flex-shrink-0">
                        {edu.score}
                      </span>
                    </div>

                    <div className="text-xs text-ember font-medium font-mono">
                      {edu.degree}
                    </div>

                    <div className="text-[11px] text-ivory-muted font-mono">
                      {edu.period}
                    </div>

                    <p className="text-xs text-ivory-muted pt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quote / Tenet */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-ember/15 via-surface to-surface border border-ember/30 text-left space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ember font-bold">
                Builder Tenet
              </span>
              <p className="text-xs sm:text-sm text-ivory font-serif italic leading-relaxed">
                "Great software is never accidental. It is the result of continuous curiosity, rigorous attention to detail, and the courage to build and iterate in public."
              </p>
              <span className="text-[11px] font-mono text-ivory-muted block text-right">
                — Krishna Mishra
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
