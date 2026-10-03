import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Compass, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowUpRight,
  School,
  BookOpen
} from 'lucide-react';
import { personalInfo, stats, educationList } from '../data/portfolioData';
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
            From foundational algorithms to generative AI architectures, here is a snapshot of my academic milestones and engineering philosophy.
          </p>
        </div>

        {/* Content Layout: Left Bio + Right Stats & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Education (7 cols) */}
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
                  <span className="text-xs font-mono text-cyan-400">AI Developer &bull; Software Engineer &bull; MITAOE</span>
                </div>
              </div>
              
              <p>
                I am <strong className="text-white font-semibold">Krishna Rameshwar Mishra</strong>, a Computer Software Engineering undergraduate at <strong className="text-cyan-300">MIT Academy of Engineering, Pune</strong>, focused on Artificial Intelligence, Generative AI, and modern software development.
              </p>

              <p>
                With hands-on experience through entrepreneurship at <strong className="text-purple-300">Indian Pixel</strong>, alongside technical internships at <strong className="text-cyan-300">Drishyam</strong>, <strong className="text-pink-300">CodeAlpha</strong>, and <strong className="text-blue-300">IBM SkillsBuild</strong>, I build AI-powered applications, responsive web interfaces, and data-driven solutions with Python, JavaScript, React, Node.js, IBM watsonx, Gemini API, and Tableau.
              </p>

              <p>
                I actively follow the end-to-end <strong className="text-white">Software Development Lifecycle (SDLC)</strong> — researching system architecture, implementing robust logic, and deploying secure, production-grade applications.
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

            {/* Academic Qualifications Timeline Box */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/30 bg-gradient-to-br from-surface to-deep shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">Academic Education</h4>
                  <p className="text-xs text-slate-400 font-mono">Formal academic milestones &amp; scores</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-void/50 border border-white/5 space-y-1.5 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-white">{edu.institution}</h5>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                        {edu.score}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <span className="text-cyan-300 font-medium">{edu.degree}</span>
                      <span className="text-slate-500">&bull;</span>
                      <span className="text-slate-400 font-mono text-[11px]">{edu.period}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Key Stats & Principles (5 cols) */}
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
                  <span><strong>AI &amp; Full-Stack Synergy:</strong> Combining Generative AI (watsonx, Gemini) with responsive, production React architectures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Consistent Problem Solving:</strong> Active problem-solving across LeetCode, CodeChef, and HackerRank to refine time/space complexity.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Product-Driven Entrepreneurship:</strong> Building actual products at Indian Pixel and campus apps for genuine user adoption.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Tech Communication:</strong> Sharing knowledge via Medium articles, creator content on Instagram (@yappp.kris), and team mentorship.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
