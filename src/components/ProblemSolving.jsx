import React from 'react';
import { ExternalLink, Code2, Terminal, Award, Sparkles, Flame, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { LeetcodeIcon, CodechefIcon, HackerrankIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProblemSolving() {
  const platforms = [
    {
      step: "01 // THINK",
      name: "LeetCode",
      role: "Algorithmic Logic & Data Structures",
      handle: "@me13_krishna",
      url: "https://leetcode.com/u/me13_krishna/",
      accent: "border-amber-500/30 hover:border-amber-500/60 bg-gradient-to-b from-amber-500/5 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      tagline: "Dynamic programming, graph algorithms, trees, and continuous streak discipline.",
      icon: <LeetcodeIcon className="w-6 h-6 text-amber-400" />,
      features: [
        "Consistent daily problem solving & weekly contest participation",
        "Deep focus on optimal time & space complexity analysis (O(N) & O(log N))",
        "Data structures mastery: Hash maps, heaps, binary search, two-pointer methods"
      ]
    },
    {
      step: "02 // SOLVE",
      name: "CodeChef",
      role: "Competitive Speed & Pressure Coding",
      handle: "me13_krishna",
      url: "https://www.codechef.com/users/me13_krishna",
      accent: "border-ember/30 hover:border-ember/60 bg-gradient-to-b from-ember/5 to-transparent",
      badgeColor: "bg-ember/10 text-ember border-ember/30",
      tagline: "High-speed contest execution, rapid pattern recognition, and edge-case resilience.",
      icon: <CodechefIcon className="w-6 h-6 text-ember" />,
      features: [
        "Timed competitive programming rated contests under high pressure",
        "Mathematical and combinatoric problem solving with Python & C",
        "Handling massive constraints, memory limits, and automated test runners"
      ]
    },
    {
      step: "03 // SHIP",
      name: "HackerRank",
      role: "Core CS Fundamentals & Verification",
      handle: "krishna13mishra",
      url: "https://www.hackerrank.com/profile/krishna13mishra",
      accent: "border-emerald-500/30 hover:border-emerald-500/60 bg-gradient-to-b from-emerald-500/5 to-transparent",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      tagline: "Verified skill assessments in Python, object-oriented concepts, and computational logic.",
      icon: <HackerrankIcon className="w-6 h-6 text-emerald-400" />,
      features: [
        "Certified badges in Python programming & Problem Solving",
        "Solid foundational mastery in modularity and standard libraries",
        "Algorithmic tests verified by external automated graders"
      ]
    }
  ];

  return (
    <section id="problem-solving" className="py-24 relative border-t border-borderMuted bg-surface/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-amberGold/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-borderMuted text-xs font-mono text-ivory-dim tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-ember" />
            <span>Algorithmic Craft &bull; Three Pillars</span>
          </div>

          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Think <span className="text-ember">&rarr;</span> Solve <span className="text-amberGold">&rarr;</span> Ship
          </h2>

          <p className="text-xs sm:text-base text-ivory-muted leading-relaxed">
            Writing performant production code requires relentless problem-solving muscle. 
            I test and refine algorithmic instincts across three distinct competitive arenas.
          </p>
        </div>

        {/* 3 Connected Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-7 sm:p-8 bg-surface/90 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl group ${p.accent}`}
            >
              <div>
                {/* Header: Step + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-ivory-muted uppercase">
                    {p.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                </div>

                {/* Platform Name & Handle */}
                <div className="space-y-1 mb-3">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${p.badgeColor}`}>
                    {p.role}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-2 group-hover:text-white transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-mono text-ivory-muted">
                    Handle: <strong className="text-ivory">{p.handle}</strong>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-ivory-dim leading-relaxed mb-6">
                  {p.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ivory-muted leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ivory-dim flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Open in New Tab Button */}
              <div className="pt-4 border-t border-borderMuted mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  data-cursor="SOLVE"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white text-ivory hover:text-void font-semibold text-xs transition-all border border-white/10 shadow-sm"
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
