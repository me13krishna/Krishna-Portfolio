import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-borderMuted bg-surface/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-amberGold/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
            Career &bull; Ventures &bull; Internships
          </span>
          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Experience &amp; Leadership
          </h2>
          <p className="text-xs sm:text-base text-ivory-muted leading-relaxed">
            Hands-on technical engineering roles across early-stage entrepreneurship, Computer Vision security interfaces, NLP neural pipelines, and enterprise IBM Cloud implementations.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="rounded-3xl p-7 sm:p-9 bg-surface/90 border border-borderMuted hover:border-ember/40 transition-all duration-300 shadow-xl group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ember via-amberGold to-white/40 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-ember transition-colors font-display">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-ember/10 text-ember border border-ember/30 font-semibold">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-ivory-dim">
                    <strong className="text-white">{exp.company}</strong>
                    <span className="text-ivory-muted">&bull;</span>
                    <span className="text-xs font-mono text-ivory-muted">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-amberGold bg-void/60 px-3.5 py-1.5 rounded-full border border-borderMuted self-start md:self-auto font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amberGold" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-ivory-dim mb-5 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities bullets */}
              <div className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-ivory-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ember flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-borderMuted">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ivory-dim border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
