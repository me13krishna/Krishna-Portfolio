import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
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
        return <Code2 className="w-4 h-4 text-[#E2A866]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#728A7C]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#C48B71]" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-[#E2A866]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#F7F6F2]" />;
    }
  };

  return (
    <section id="skills" className="py-28 relative border-t border-white/[0.06]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#728A7C]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-18 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Technical Stack &bull; Architecture
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Stack &amp; Engineering Craft
          </h2>
          <p className="text-sm sm:text-base text-[#9B988E] leading-relaxed font-normal">
            A curated set of technologies chosen for deterministic performance, architectural flexibility, and real-world resilience.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 mt-6">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => {
                playCyberClick();
                setActiveTab(idx);
              }}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-[#F7F6F2] text-[#0E0E10] font-semibold shadow-md'
                  : 'bg-[#151518] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06]'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl text-left">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-[24px] p-6 bg-[#151518]/90 border border-white/[0.06] hover:border-[#E2A866]/30 transition-all duration-300 shadow-soft-card group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E2A866]" />
                  <h4 className="text-base font-bold text-[#F7F6F2] group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-medium text-[#E2A866]">
                  {skill.level}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#9B988E] mb-3.5 font-mono">
                <span>{skill.tag}</span>
                <span>Proficiency</span>
              </div>

              {/* Minimal Progress Bar */}
              <div className="w-full h-1.5 bg-[#0E0E10] rounded-full overflow-hidden border border-white/[0.04]">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#728A7C] to-[#E2A866] transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Tenet Footer */}
        <div className="mt-14 p-8 rounded-[28px] bg-[#151518]/50 border border-white/[0.06] max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase text-[#E2A866] tracking-wider font-medium">
              Tooling Philosophy
            </h4>
            <p className="text-xs text-[#9B988E] max-w-xl leading-relaxed">
              “Languages and frameworks change every couple of seasons; core computational fundamentals and clean system architecture remain timeless.”
            </p>
          </div>

          <a
            href="#projects"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-medium px-6 py-3 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#F7F6F2] border border-white/[0.08] transition-all"
          >
            <span>See Stack in Action</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E2A866]" />
          </a>
        </div>

      </div>
    </section>
  );
}
