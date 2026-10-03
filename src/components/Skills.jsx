import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  Sparkles, 
  ArrowRight,
  Database,
  Wrench,
  Server
} from 'lucide-react';
import { skillsWithContext } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    "Programming Languages": <Code2 className="w-4 h-4 text-forest dark:text-sun" />,
    "AI & Machine Learning": <Cpu className="w-4 h-4 text-gold dark:text-sun" />,
    "Frontend & UI Engineering": <Layers className="w-4 h-4 text-leaf dark:text-leaf" />,
    "Backend & Systems": <Server className="w-4 h-4 text-olive dark:text-leaf" />,
    "Data & Visualization": <Database className="w-4 h-4 text-sun dark:text-gold" />,
    "Tools & DevOps": <Wrench className="w-4 h-4 text-forest dark:text-sun" />
  };

  const categories = ['All', ...skillsWithContext.map(s => s.category)];

  const filteredGroups = skillsWithContext.filter(
    (group) => activeCategory === 'All' || group.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-canopy-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            SKILLS &bull; STACK &bull; PROVEN CONTEXT
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Engineering Tooling
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Grouped by system layer with explicit application context instead of arbitrary percentage bars. Built for production reliability and algorithmic determinism.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playCyberClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                  : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white border border-forest/10 dark:border-white/10'
              }`}
            >
              {cat === 'All' ? 'All Technologies' : cat}
            </button>
          ))}
        </div>

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-[26px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col justify-between hover:border-forest/30 dark:hover:border-sun/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-forest/10 dark:border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-forest/5 dark:bg-white/5 flex items-center justify-center">
                    {categoryIcons[group.category] || <Terminal className="w-4 h-4 text-forest dark:text-sun" />}
                  </div>
                  <h3 className="text-base font-bold text-charcoal dark:text-warm-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills with Contextual Usage Badge */}
                <div className="space-y-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 shadow-xs transition-all hover:border-forest/20 dark:hover:border-sun/20"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-charcoal dark:text-warm-white">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-leaf dark:bg-sun" />
                      </div>
                      <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono mt-1">
                        &rarr; {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-14 p-8 rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-soft-card">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase text-forest dark:text-sun tracking-wider font-semibold">
              First-Principles Philosophy
            </h4>
            <p className="text-xs text-charcoal-muted dark:text-dark-textMuted max-w-xl leading-relaxed">
              “Frameworks and libraries change quickly. Computational foundations, deterministic algorithms, and disciplined problem solving remain the true constants.”
            </p>
          </div>

          <a
            href="#projects"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm"
          >
            <span>See Stack in Production</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
