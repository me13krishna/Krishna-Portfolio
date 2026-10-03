import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative border-t border-white/[0.06] bg-[#121215]/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#E2A866]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Career Journey &bull; Ventures &bull; Internships
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Experience &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#9B988E] leading-relaxed font-normal">
            Real-world technical engineering roles spanning venture building, computer vision security interfaces, neural pipelines, and enterprise IBM Cloud deployments.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-5xl mx-auto text-left">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-[30px] p-8 sm:p-10 bg-[#151518]/90 border border-white/[0.06] hover:border-[#E2A866]/30 transition-all duration-400 shadow-soft-card group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#728A7C] via-[#E2A866] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F7F6F2] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#E2A866]/10 text-[#E2A866] border border-[#E2A866]/20 font-medium">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#E3E1D8]">
                    <strong className="text-[#F7F6F2] font-semibold">{exp.company}</strong>
                    <span className="text-white/20">&bull;</span>
                    <span className="text-xs text-[#9B988E]">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#E2A866] bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/[0.06] self-start md:self-auto font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#E2A866]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#9B988E] mb-6 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Responsibilities bullets */}
              <div className="space-y-2.5 mb-7">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-[#9B988E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#728A7C] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E3E1D8]">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-sans px-3 py-1 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.04]"
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
