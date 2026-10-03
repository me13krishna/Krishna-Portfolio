import React from 'react';
import { CheckCircle2, ArrowUpRight, Sparkles, Flame } from 'lucide-react';
import { LeetcodeIcon, CodechefIcon, HackerrankIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProblemSolving() {
  const platforms = [
    {
      step: "01 &bull; LOGIC & OPTIMIZATION",
      name: "LeetCode",
      role: "Algorithms & Data Structures",
      handle: "@me13_krishna",
      url: "https://leetcode.com/u/me13_krishna/",
      badgeColor: "bg-sun/15 text-forest dark:text-sun border-sun/30",
      tagline: "Dynamic programming, graph theory, trees, and continuous streak discipline.",
      icon: <LeetcodeIcon className="w-5 h-5 text-gold dark:text-sun" />,
      features: [
        "Consistent daily problem solving and contest participation",
        "Deep focus on optimal time & space complexity analysis (O(N) & O(log N))",
        "Mastery across Hash Maps, Heaps, Binary Search, and Two-Pointer paradigms"
      ]
    },
    {
      step: "02 &bull; TIMED EXECUTION",
      name: "CodeChef",
      role: "Competitive Speed & Contests",
      handle: "me13_krishna",
      url: "https://www.codechef.com/users/me13_krishna",
      badgeColor: "bg-leaf/15 text-olive dark:text-leaf border-leaf/30",
      tagline: "High-speed contest execution, rapid pattern recognition, and mathematical intuition.",
      icon: <CodechefIcon className="w-5 h-5 text-olive dark:text-leaf" />,
      features: [
        "Timed competitive programming rated contests under tight constraints",
        "Mathematical, number-theoretic, and combinatoric algorithms",
        "Handling massive constraints, edge cases, and automated test suites"
      ]
    },
    {
      step: "03 &bull; VERIFIED CRAFT",
      name: "HackerRank",
      role: "Core CS Fundamentals",
      handle: "krishna13mishra",
      url: "https://www.hackerrank.com/profile/krishna13mishra",
      badgeColor: "bg-forest/10 dark:bg-white/10 text-forest dark:text-warm-white border-forest/15 dark:border-white/15",
      tagline: "Verified skill assessments in Python, object-oriented architecture, and algorithmic mastery.",
      icon: <HackerrankIcon className="w-5 h-5 text-forest dark:text-sun" />,
      features: [
        "Certified badges in Python programming & Problem Solving",
        "Solid foundational architecture in modularity and standard libraries",
        "Algorithmic challenges validated by external automated evaluation"
      ]
    }
  ];

  return (
    <section id="problem-solving" className="py-28 relative border-t border-forest/10 dark:border-white/10 bg-cream-subtle/40 dark:bg-dark-bg/40">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted shadow-sm">
            <Flame className="w-3.5 h-3.5 text-sun" />
            <span className="font-semibold text-forest dark:text-sun text-[11px] tracking-wider uppercase">
              PROBLEM SOLVING &bull; CODING PROFILES
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-charcoal dark:text-warm-white tracking-tight">
            Think <span className="text-forest dark:text-sun">&rarr;</span> Solve <span className="text-leaf">&rarr;</span> Ship
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted dark:text-dark-textMuted leading-relaxed font-normal">
            Writing performant production systems requires relentless problem-solving discipline. 
            I test and refine algorithmic instincts across three distinct competitive arenas.
          </p>
        </div>

        {/* 3 Connected Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left mt-10">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-[28px] p-8 sm:p-9 bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-leaf/40 dark:hover:border-sun/40 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card group"
            >
              <div>
                {/* Header: Step + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-xs font-mono font-medium tracking-widest text-charcoal-muted dark:text-dark-textMuted uppercase"
                    dangerouslySetInnerHTML={{ __html: p.step }}
                  />
                  <div className="w-11 h-11 rounded-2xl bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {p.icon}
                  </div>
                </div>

                {/* Platform Name & Handle */}
                <div className="space-y-1.5 mb-4">
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-medium inline-block ${p.badgeColor}`}>
                    {p.role}
                  </span>
                  <h3 className="text-2xl font-bold text-charcoal dark:text-warm-white mt-2 group-hover:text-forest dark:group-hover:text-sun transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted">
                    Handle: <strong className="text-charcoal dark:text-warm-white">{p.handle}</strong>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed mb-6 font-normal">
                  {p.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-leaf dark:text-sun flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal dark:text-warm-white">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Open in New Tab Button */}
              <div className="pt-5 border-t border-forest/10 dark:border-white/10 mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white font-semibold text-xs transition-all border border-forest/10 dark:border-white/10 shadow-sm"
                >
                  <span>Open {p.name} Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
