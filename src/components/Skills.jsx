import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  Wrench,
  BrainCircuit
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (icon) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'cpu':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-surface/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>02 — Competencies &amp; Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Tools, Technologies &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300">Expertise</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The programming languages, frameworks, AI concepts, and developer tooling I utilize to engineer software.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => {
                playCyberClick();
                setActiveTab(idx);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-950/50'
                  : 'glass-panel text-slate-400 hover:text-white border-white/5 hover:border-white/20'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                <span>{skill.tag}</span>
                <span className="text-slate-500">Proficiency</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-void/80 rounded-full overflow-hidden p-[1px] border border-white/5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths Badges Footer */}
        <div className="mt-14 p-6 glass-panel rounded-2xl border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Professional Strengths</h4>
              <p className="text-xs text-slate-400">Problem Solving (90%) &bull; Teamwork (88%) &bull; Adaptability (92%) &bull; Product Thinking (82%)</p>
            </div>
          </div>

          <a
            href="#projects"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
          >
            <span>See Skills In Action</span>
          </a>
        </div>

      </div>
    </section>
  );
}
