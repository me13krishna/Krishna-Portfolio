import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Building2
} from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-surface/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 — Experience &amp; Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Internships &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Ventures</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on professional engineering experience spanning early-stage entrepreneurship, Computer Vision UI design, Python AI chatbots, and IBM watsonx cloud implementations.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">{exp.company}</span>
                    <span className="text-slate-500">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-void/60 px-3 py-1.5 rounded-xl border border-white/10 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities bullets */}
              <div className="space-y-2 mb-5">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
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
