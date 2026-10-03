import React from 'react';
import { Sparkles, Terminal, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { currentlyBuilding, personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-canopy-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 dark:bg-sun/10 border border-forest/10 dark:border-sun/20 text-xs font-mono text-forest dark:text-sun">
              <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse" />
              <span>ACTIVE SPRINTS &bull; AUTUMN 2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-charcoal dark:text-warm-white tracking-tight">
              Now Building &amp; Exploring
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted max-w-md leading-relaxed">
            What is currently on my workbench: prototypes under active development and research monographs.
          </p>
        </div>

        {/* 2-Column Grid: Active Works + Notes Teaser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Active Work In Progress Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentlyBuilding.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-[26px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col justify-between hover:border-forest/30 dark:hover:border-sun/30 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-sun border border-forest/10 dark:border-white/10 font-semibold">
                      {item.context}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted">
                      <Clock className="w-3 h-3 text-leaf dark:text-sun" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-forest/10 dark:border-white/10">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/5 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Notes / Medium Column (4 cols) */}
          <div className="lg:col-span-4 p-7 rounded-[26px] bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-forest/5 dark:bg-white/5 flex items-center justify-center text-forest dark:text-sun">
                <BookOpen className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block mb-1">
                  Technical Dispatches
                </span>
                <h3 className="text-xl font-bold text-charcoal dark:text-warm-white">
                  Writing &amp; Research Notes
                </h3>
              </div>

              <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                Documenting engineering breakthroughs, algorithmic edge cases, and post-mortems across distributed ledgers, agentic AI, and system internals on Medium.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={personalInfo.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark text-xs font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <span>Read on Medium (@krishna1307mishra)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
