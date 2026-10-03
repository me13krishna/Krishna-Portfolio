import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowUpRight, 
  MapPin, 
  Compass, 
  Cpu, 
  Heart,
  Code2,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { personalInfo, quickFacts } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function About({ onOpenResume }) {
  const facts = [
    { label: "Location", value: "Pune, Maharashtra, India", icon: <MapPin className="w-4 h-4 text-olive dark:text-leaf" /> },
    { label: "College", value: "MIT Academy of Engineering (8.76 CGPA)", icon: <GraduationCap className="w-4 h-4 text-gold dark:text-sun" /> },
    { label: "Focus Areas", value: "Distributed Systems, AI Reasoning & Full-Stack", icon: <Cpu className="w-4 h-4 text-forest dark:text-leaf" /> },
    { label: "Current Interests", value: "Edge Vision, Agentic Workflows, System Call Internals", icon: <Sparkles className="w-4 h-4 text-sun" /> }
  ];

  const tenets = [
    {
      title: "First-Principles Logic",
      desc: "Deconstructing ambiguous problems to mathematical axioms before writing code.",
      icon: <Compass className="w-3.5 h-3.5 text-forest dark:text-sun" />
    },
    {
      title: "Algorithmic Stamina",
      desc: "Relentless attention to Big-O bounds, space efficiency, and memory allocations.",
      icon: <Cpu className="w-3.5 h-3.5 text-olive dark:text-leaf" />
    },
    {
      title: "Calm Craftsmanship",
      desc: "Software should feel like well-built hardware: fast, quiet, and unobtrusive.",
      icon: <Heart className="w-3.5 h-3.5 text-gold dark:text-sun" />
    }
  ];

  return (
    <section id="about" className="py-28 relative border-t border-forest/10 dark:border-white/10">
      
      {/* Background Soft Natural Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-canopy-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
            ABOUT &bull; PERSPECTIVE &bull; INTENTION
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Curious by default.{' '}
            <span className="text-forest dark:text-sun font-serif italic font-normal">
              Building with quiet intention.
            </span>
          </h2>
        </div>

        {/* 12-Column Asymmetric About Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column (5 cols): Optimized Photo + Verified Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[30px] p-3 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-soft-card group">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-cream dark:bg-dark-bg border border-forest/10 dark:border-white/10">
                <img
                  src={krishnaImg}
                  alt="Krishna Rameshwar Mishra"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-cream-card/95 dark:bg-dark-card/95 backdrop-blur-xl border border-forest/10 dark:border-white/10 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-charcoal dark:text-warm-white">Krishna Rameshwar Mishra</h4>
                      <p className="text-[11px] font-mono text-forest dark:text-sun">MITAOE Pune &bull; Batch 2025–2029</p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun font-bold">
                      8.76 CGPA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link to Master Credentials Drive */}
            <a
              href={personalInfo.certificatesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-5 rounded-2xl bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/30 flex items-center justify-between text-xs transition-all shadow-soft-card group block"
            >
              <div className="space-y-0.5">
                <span className="font-mono text-forest dark:text-sun uppercase tracking-wider text-[10px] font-semibold block">
                  Credential Verification Archive
                </span>
                <span className="font-semibold text-charcoal dark:text-warm-white text-xs">
                  Official Google Drive Repository
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-forest dark:text-sun group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column (7 cols): Human Story (~120 words) + 4 Quick Facts + Engineering Tenets */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Short, Human First-Person Story (max ~120 words) */}
            <div className="p-8 sm:p-9 rounded-[30px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-4 shadow-soft-card">
              <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
                The Narrative
              </span>
              <p className="text-base sm:text-lg text-charcoal dark:text-warm-white font-normal leading-relaxed">
                I didn’t enter computer science for the trend cycles. I fell in love with that quiet moment when an idea sketched on paper turns into a deterministic, dependable system that genuinely helps someone.
              </p>
              <p className="text-sm text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                As a software engineering student at MITAOE Pune (8.76 CGPA), I treat software as an exacting craft. Whether architecting SHA-256 cryptographic vaults in Python, orchestrating enterprise reasoning models with IBM watsonx, or co-founding Indian Pixel, I balance clean algorithmic Big-O complexity with calm, human-centered interfaces.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playCyberClick();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark hover:bg-forest-deep dark:hover:bg-sun-light transition-all shadow-sm"
                >
                  <span>Review Curriculum Vitae</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-5 py-2.5 rounded-full bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-all"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            {/* 4 Quick Facts Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-1 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted uppercase tracking-wider">
                    {f.icon}
                    <span>{f.label}</span>
                  </div>
                  <p className="text-xs font-semibold text-charcoal dark:text-warm-white pt-1">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Engineering Tenets */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-sun font-semibold block">
                How I Think About Engineering
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tenets.map((t, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-forest/[0.02] dark:bg-white/[0.02] border border-forest/5 dark:border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal dark:text-warm-white">
                      {t.icon}
                      <span className="text-[11px]">{t.title}</span>
                    </div>
                    <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
