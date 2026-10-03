import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (icon) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-4 h-4 text-ember" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-amberGold" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-borderMuted">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-ember/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
            Technical Competencies &bull; Architecture
          </span>
          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Technologies &amp; Systems
          </h2>
          <p className="text-xs sm:text-base text-ivory-muted leading-relaxed">
            A curated stack spanning core programming languages, modern full-stack web frameworks, 
            enterprise AI orchestration platforms, and statistical data visualization toolsets.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => {
                playCyberClick();
                setActiveTab(idx);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-white text-void font-bold shadow-lg shadow-white/10 scale-[1.02]'
                  : 'bg-surface text-ivory-muted hover:text-white border border-borderMuted hover:border-white/20'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl p-6 bg-surface/90 border border-borderMuted hover:border-ember/40 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-ember group-hover:scale-150 transition-transform" />
                  <h4 className="text-base font-bold text-white group-hover:text-ember transition-colors font-display">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-amberGold">
                  {skill.level}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-ivory-muted mb-3.5 font-mono">
                <span>{skill.tag}</span>
                <span>Proficiency</span>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full h-1.5 bg-void rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-ember to-amberGold transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Tenet Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-surface/40 border border-borderMuted max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <h4 className="text-sm font-bold font-mono uppercase text-white tracking-wider">
              Tooling Philosophy
            </h4>
            <p className="text-xs text-ivory-muted max-w-xl">
              "Tools and frameworks change; fundamentals remain. I select technologies based on execution speed, type safety, and real architectural resilience rather than hype."
            </p>
          </div>

          <a
            href="#projects"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-surface hover:bg-surfaceHover text-white border border-borderMuted hover:border-ember/40 transition-all"
          >
            <span>See Stack in Action</span>
            <ArrowRight className="w-3.5 h-3.5 text-ember" />
          </a>
        </div>

      </div>
    </section>
  );
}
