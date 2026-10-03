import React from 'react';
import { Calendar, CheckCircle2, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative border-t border-forest/10 dark:border-white/10 bg-cream-subtle/30 dark:bg-dark-bg/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            EXPERIENCE &bull; LEADERSHIP &bull; VENTURES
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Journey &amp; Roles
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Real technical leadership and engineering internships spanning venture founding, computer vision security interfaces, neural pipeline implementation, and IBM Cloud architecture.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto text-left">
          
          {/* Vertical Green Timeline Guide Line */}
          <div className="absolute top-3 bottom-3 left-4 md:left-8 w-0.5 bg-gradient-to-b from-forest via-leaf to-sun/60 dark:from-sun dark:via-leaf dark:to-forest opacity-40" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-12 md:pl-20 group">
                
                {/* Yellow Milestone Node Point */}
                <div className="absolute left-[9px] md:left-[25px] top-6 w-3.5 h-3.5 rounded-full bg-sun ring-4 ring-cream dark:ring-dark-bg shadow-sm group-hover:scale-125 transition-transform" />

                {/* Timeline Card */}
                <div className="rounded-[28px] p-8 sm:p-9 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-leaf/40 dark:hover:border-sun/40 transition-all duration-400 shadow-soft-card group-hover:-translate-y-1">
                  
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun border border-forest/10 dark:border-sun/20 font-medium">
                          {exp.badge}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm text-charcoal-muted dark:text-dark-textMuted font-medium">
                        <strong className="text-charcoal dark:text-warm-white font-semibold">{exp.company}</strong>
                        <span className="text-charcoal-muted/40">&bull;</span>
                        <span className="text-xs">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-forest dark:text-sun bg-forest/5 dark:bg-white/5 px-4 py-1.5 rounded-full border border-forest/10 dark:border-white/10 self-start md:self-auto font-medium">
                      <Calendar className="w-3.5 h-3.5 text-olive dark:text-sun" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted mb-5 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-charcoal-muted dark:text-dark-textMuted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf dark:text-sun flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal dark:text-warm-white">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-forest/10 dark:border-white/10">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/5 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
