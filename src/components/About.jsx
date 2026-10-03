import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowUpRight, 
  Compass,
  Cpu,
  Layers,
  Heart,
  Code2,
  Trophy,
  Flame,
  Award
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function About({ onOpenResume }) {
  const statCards = [
    {
      value: "12+",
      label: "Projects Built & Shipped",
      sub: "AI platforms, blockchain vault, systems",
      icon: <Code2 className="w-5 h-5 text-leaf dark:text-sun" />,
      tag: "Engineering"
    },
    {
      value: "8.76",
      label: "B.Tech CGPA",
      sub: "MIT Academy of Engineering, Pune",
      icon: <GraduationCap className="w-5 h-5 text-gold dark:text-sun" />,
      tag: "Academic"
    },
    {
      value: "SIH '24",
      label: "National Hackathons",
      sub: "Smart India Hackathon & Prakrushti",
      icon: <Trophy className="w-5 h-5 text-olive dark:text-leaf" />,
      tag: "Competition"
    },
    {
      value: "3 Arenas",
      label: "Coding Problem Solving",
      sub: "LeetCode, CodeChef, HackerRank",
      icon: <Flame className="w-5 h-5 text-sun dark:text-gold" />,
      tag: "Algorithms"
    }
  ];

  const philosophies = [
    {
      title: "First-Principles Thinking",
      desc: "Deconstructing complex technical problems down to fundamental logical truths before touching code.",
      icon: <Compass className="w-4 h-4 text-leaf dark:text-sun" />
    },
    {
      title: "Algorithmic Stamina",
      desc: "Deep respect for asymptotic time and space limits. Clean engineering is deterministic, fast, and scalable.",
      icon: <Cpu className="w-4 h-4 text-olive dark:text-leaf" />
    },
    {
      title: "End-to-End Craftsmanship",
      desc: "Caring about every layer — from database schemas and backend APIs to typography, padding, and subtle micro-delights.",
      icon: <Layers className="w-4 h-4 text-gold dark:text-sun" />
    },
    {
      title: "Human Quietude",
      desc: "Great software doesn't need to shout. It solves human problems with calm precision and disappears into the background.",
      icon: <Heart className="w-4 h-4 text-forest dark:text-leaf" />
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
            ABOUT ME &bull; PHILOSOPHY &bull; JOURNEY
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Curious by default.{' '}
            <span className="text-forest dark:text-sun font-editorial italic font-normal">
              Building with quiet intention.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed pt-1">
            I believe that software, much like architecture or nature, is at its finest when it is balanced, resilient, and deeply respectful of the person interacting with it.
          </p>
        </div>

        {/* Visual Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 text-left">
          {statCards.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[24px] bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 shadow-soft-card hover:border-leaf/40 dark:hover:border-sun/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-sun border border-forest/10 dark:border-white/10 font-medium">
                  {stat.tag}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-charcoal dark:text-warm-white mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column (7 cols): Narrative & Tenets */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="rounded-[32px] p-8 sm:p-10 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-6 text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed shadow-soft-card">
              
              {/* Profile Snippet Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-forest/10 dark:border-white/10">
                <img 
                  src={krishnaImg} 
                  alt="Krishna Mishra" 
                  className="w-16 h-16 rounded-2xl object-cover border border-forest/15 dark:border-white/15 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-charcoal dark:text-warm-white">Krishna Rameshwar Mishra</h3>
                  <p className="text-xs font-mono text-forest dark:text-sun mt-0.5 font-medium">
                    Software Engineering &bull; MIT Academy of Engineering, Pune
                  </p>
                </div>
              </div>

              <p>
                I didn’t fall in love with software development because of industry buzzwords. I fell in love with that quiet, deeply satisfying moment when an idea on a notepad turns into a working, deterministic system that genuinely solves a real person's problem.
              </p>

              <p>
                Currently, I am pursuing my B.Tech in Software Engineering at <strong className="text-charcoal dark:text-warm-white font-semibold">MIT Academy of Engineering, Pune</strong>, maintaining a <strong className="text-forest dark:text-sun font-semibold">CGPA of 8.76</strong>. My journey blends deep foundational rigor in C and Linux POSIX systems with modern production work: building AI orchestrations with <strong className="text-charcoal dark:text-warm-white font-semibold">IBM watsonx</strong>, developing cryptographic vaults with Flask and SHA-256, and co-founding <strong className="text-charcoal dark:text-warm-white font-semibold">Indian Pixel</strong>.
              </p>

              <p>
                I care as much about clean algorithmic Big-O complexity as I do about visual hierarchy, typography, and micro-interactions. The best software feels effortless because every detail was thought through.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playCyberClick();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-forest dark:bg-sun text-warm-white dark:text-forest-dark hover:bg-forest-deep dark:hover:bg-sun-light transition-all shadow-sm active:scale-98"
                >
                  <span>Review Official Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 text-xs font-medium px-6 py-3 rounded-full bg-cream-card dark:bg-dark-cardElevated hover:bg-cream-subtle dark:hover:bg-dark-card text-charcoal dark:text-warm-white border border-forest/15 dark:border-white/10 transition-all"
                >
                  <span>Start a Conversation</span>
                </a>
              </div>

            </div>

            {/* Core Tenets & Approaches */}
            <div className="rounded-[32px] p-8 bg-cream-card/70 dark:bg-dark-card/60 border border-forest/10 dark:border-white/10 space-y-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-forest dark:text-sun font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-leaf dark:text-sun" />
                <span>How I Approach Engineering</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {philosophies.map((phil) => (
                  <div key={phil.title} className="p-4 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 space-y-1.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      {phil.icon}
                      <strong className="text-charcoal dark:text-warm-white text-xs font-sans">{phil.title}</strong>
                    </div>
                    <p className="text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
                      {phil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Academic Milestones & Tenet */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-[32px] p-8 sm:p-9 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 space-y-6 shadow-soft-card">
              <div className="flex items-center justify-between pb-4 border-b border-forest/10 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-forest dark:text-sun" />
                  <h4 className="text-lg font-bold text-charcoal dark:text-warm-white tracking-tight">Academic Journey</h4>
                </div>
                <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-sun border border-forest/10 dark:border-white/10 font-medium">
                  Verified
                </span>
              </div>

              {/* Education Cards */}
              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-warm-white dark:bg-dark-cardElevated border border-forest/10 dark:border-white/5 hover:border-leaf/40 dark:hover:border-sun/40 transition-colors space-y-2 text-left shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="text-sm font-bold text-charcoal dark:text-warm-white">{edu.institution}</h5>
                      <span className="text-xs font-mono font-bold text-forest dark:text-sun px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-sun/10 border border-forest/15 dark:border-sun/20 flex-shrink-0">
                        {edu.score}
                      </span>
                    </div>

                    <div className="text-xs text-olive dark:text-leaf font-mono font-medium">
                      {edu.degree}
                    </div>

                    <div className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono">
                      {edu.period}
                    </div>

                    <p className="text-xs text-charcoal-muted dark:text-dark-textMuted pt-1 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiet Quote */}
            <div className="rounded-[32px] p-7 bg-gradient-to-br from-leaf/10 via-cream-card to-cream-card dark:from-leaf/10 dark:via-dark-card dark:to-dark-card border border-forest/15 dark:border-white/10 text-left space-y-3 shadow-soft-card">
              <span className="text-[11px] font-mono uppercase tracking-widest text-forest dark:text-sun font-medium">
                Personal North Star
              </span>
              <p className="text-sm text-charcoal dark:text-warm-white font-editorial italic leading-relaxed">
                “Quiet craft always outlasts loud noise. Build things with deep attention, measure your work against reality, and never compromise on character.”
              </p>
              <span className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted block text-right">
                — Krishna Mishra
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
