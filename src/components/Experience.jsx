import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink,
  Flame,
  ArrowUpRight,
  FolderDown
} from 'lucide-react';
import { 
  experiences, 
  educationList, 
  codingProfiles, 
  personalInfo 
} from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-28 relative border-t border-forest/10 dark:border-white/10 bg-cream-subtle/30 dark:bg-dark-bg/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            EXPERIENCE &bull; EDUCATION &bull; ACHIEVEMENTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Trajectory &amp; Track Record
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Real engineering leadership, industry internships, competitive programming arenas, and formal academic foundation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-12 text-left">
          <button
            onClick={() => {
              playCyberClick();
              setActiveTab('experience');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted border border-forest/10 dark:border-white/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Engineering &amp; Ventures ({experiences.length})</span>
          </button>

          <button
            onClick={() => {
              playCyberClick();
              setActiveTab('education');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted border border-forest/10 dark:border-white/10'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education &amp; Academic Honors ({educationList.length})</span>
          </button>

          <button
            onClick={() => {
              playCyberClick();
              setActiveTab('coding');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'coding'
                ? 'bg-forest dark:bg-sun text-warm-white dark:text-forest-dark font-semibold shadow-sm'
                : 'bg-cream-card dark:bg-dark-card text-charcoal-muted dark:text-dark-textMuted border border-forest/10 dark:border-white/10'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Competitive Problem Solving</span>
          </button>
        </div>

        {/* TAB 1: WORK EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="relative max-w-4xl text-left">
            <div className="absolute top-3 bottom-3 left-4 md:left-8 w-0.5 bg-gradient-to-b from-forest via-leaf to-sun/60 dark:from-sun dark:via-leaf dark:to-forest opacity-35" />

            <div className="space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-12 md:pl-20 group">
                  <div className="absolute left-[9px] md:left-[25px] top-6 w-3.5 h-3.5 rounded-full bg-sun ring-4 ring-cream dark:ring-dark-bg shadow-sm group-hover:scale-125 transition-transform" />

                  <div className="rounded-[28px] p-7 sm:p-9 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/30 transition-all duration-300 shadow-soft-card group-hover:-translate-y-0.5">
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <h3 className="text-xl font-bold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors">
                            {exp.role}
                          </h3>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun border border-forest/10 dark:border-sun/20 font-semibold">
                            {exp.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-charcoal-muted dark:text-dark-textMuted font-medium">
                          <strong className="text-charcoal dark:text-warm-white">{exp.company}</strong>
                          <span>&bull;</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-forest dark:text-sun bg-forest/5 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-forest/10 dark:border-white/10 self-start md:self-auto font-medium">
                        <Calendar className="w-3.5 h-3.5 text-olive dark:text-sun" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-muted dark:text-dark-textMuted mb-4 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-muted dark:text-dark-textMuted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-leaf dark:text-sun flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal dark:text-warm-white">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-forest/10 dark:border-white/10">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border border-forest/5 dark:border-white/5"
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
        )}

        {/* TAB 2: EDUCATION */}
        {activeTab === 'education' && (
          <div className="max-w-4xl text-left space-y-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-[28px] p-7 sm:p-9 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-charcoal dark:text-warm-white">
                      {edu.degree}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun border border-forest/10 dark:border-sun/20 font-bold">
                      {edu.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted font-medium">
                    {edu.institution} &bull; <strong className="text-forest dark:text-sun">{edu.score}</strong>
                  </p>
                  <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed max-w-xl">
                    {edu.description}
                  </p>
                </div>

                <div className="flex-shrink-0 flex items-center gap-1.5 text-xs font-mono text-forest dark:text-sun bg-forest/5 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-forest/10 dark:border-white/10 self-start md:self-auto font-medium">
                  <Calendar className="w-3.5 h-3.5 text-olive dark:text-sun" />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: COMPETITIVE PROBLEM SOLVING */}
        {activeTab === 'coding' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {codingProfiles.map((p) => (
              <div
                key={p.name}
                className="p-7 rounded-[26px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-forest/10 dark:border-white/10">
                    <div>
                      <h4 className="text-lg font-bold text-charcoal dark:text-warm-white">{p.name}</h4>
                      <span className="text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted">{p.handle}</span>
                    </div>
                    <Flame className="w-5 h-5 text-gold dark:text-sun" />
                  </div>

                  <p className="text-xs font-mono text-forest dark:text-sun uppercase tracking-wider font-semibold mb-3">
                    {p.role}
                  </p>

                  <div className="space-y-2 mb-6">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-muted dark:text-dark-textMuted">
                        <span className="text-leaf dark:text-sun">&bull;</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-xs font-medium text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-all"
                >
                  <span>Verify Profile Arena</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Master Credentials Drive Repository Callout */}
        <div className="mt-14 p-7 rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-soft-card">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-forest dark:text-sun tracking-wider font-semibold block">
              Official Verification Repository
            </span>
            <h4 className="text-base font-bold text-charcoal dark:text-warm-white">
              All Certifications, Badges &amp; Internship Completion Letters
            </h4>
            <p className="text-xs text-charcoal-muted dark:text-dark-textMuted max-w-xl">
              Includes AWS Generative AI, IBM SkillsBuild Cloud Internship, Cisco Networking Academy, Anthropic Claude 101, and Deloitte / JPMorgan corporate simulations.
            </p>
          </div>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm"
          >
            <FolderDown className="w-4 h-4" />
            <span>Open Google Drive Archive</span>
          </a>
        </div>

      </div>
    </section>
  );
}
