import React from 'react';
import { CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { LeetcodeIcon, CodechefIcon, HackerrankIcon } from './SocialIcons';
import { playCyberClick } from '../utils/audio';

export default function ProblemSolving() {
  const platforms = [
    {
      step: "01 &bull; THINK",
      name: "LeetCode",
      role: "Algorithmic Logic & Data Structures",
      handle: "@me13_krishna",
      url: "https://leetcode.com/u/me13_krishna/",
      badgeColor: "bg-[#E2A866]/10 text-[#E2A866] border-[#E2A866]/20",
      tagline: "Dynamic programming, graph theory, trees, and continuous streak discipline.",
      icon: <LeetcodeIcon className="w-5 h-5 text-[#E2A866]" />,
      features: [
        "Consistent daily problem solving and contest participation",
        "Deep focus on optimal time & space complexity analysis (O(N) & O(log N))",
        "Mastery across Hash Maps, Heaps, Binary Search, and Two-Pointer paradigms"
      ]
    },
    {
      step: "02 &bull; SOLVE",
      name: "CodeChef",
      role: "Competitive Speed & Pressure Coding",
      handle: "me13_krishna",
      url: "https://www.codechef.com/users/me13_krishna",
      badgeColor: "bg-[#C48B71]/15 text-[#D9A38C] border-[#C48B71]/30",
      tagline: "High-speed contest execution, rapid pattern recognition, and mathematical intuition.",
      icon: <CodechefIcon className="w-5 h-5 text-[#D9A38C]" />,
      features: [
        "Timed competitive programming rated contests under tight constraints",
        "Mathematical, number-theoretic, and combinatoric algorithms",
        "Handling massive constraints, edge cases, and automated test suites"
      ]
    },
    {
      step: "03 &bull; SHIP",
      name: "HackerRank",
      role: "Core CS Fundamentals & Verification",
      handle: "krishna13mishra",
      url: "https://www.hackerrank.com/profile/krishna13mishra",
      badgeColor: "bg-[#728A7C]/15 text-[#8FA699] border-[#728A7C]/30",
      tagline: "Verified skill assessments in Python, object-oriented architecture, and algorithmic mastery.",
      icon: <HackerrankIcon className="w-5 h-5 text-[#8FA699]" />,
      features: [
        "Certified badges in Python programming & Problem Solving",
        "Solid foundational architecture in modularity and standard libraries",
        "Algorithmic challenges validated by external automated evaluation"
      ]
    }
  ];

  return (
    <section id="problem-solving" className="py-28 relative border-t border-white/[0.06] bg-[#121215]/40">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#E2A866]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151518] border border-white/[0.06] text-xs font-mono text-[#9B988E]">
            <Sparkles className="w-3.5 h-3.5 text-[#E2A866]" />
            <span>Algorithmic Craft &bull; Three Arenas</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Think <span className="text-[#E2A866]">&rarr;</span> Solve <span className="text-[#728A7C]">&rarr;</span> Ship
          </h2>

          <p className="text-sm sm:text-base text-[#9B988E] leading-relaxed font-normal">
            Writing performant production systems requires relentless problem-solving discipline. 
            I test and refine algorithmic instincts across three distinct competitive arenas.
          </p>
        </div>

        {/* 3 Connected Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-[28px] p-8 sm:p-9 bg-[#151518]/90 border border-white/[0.06] hover:border-[#E2A866]/30 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card group"
            >
              <div>
                {/* Header: Step + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-xs font-mono font-medium tracking-widest text-[#9B988E] uppercase"
                    dangerouslySetInnerHTML={{ __html: p.step }}
                  />
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {p.icon}
                  </div>
                </div>

                {/* Platform Name & Handle */}
                <div className="space-y-1.5 mb-4">
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-medium inline-block ${p.badgeColor}`}>
                    {p.role}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F7F6F2] mt-2 group-hover:text-white transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-mono text-[#9B988E]">
                    Handle: <strong className="text-[#E3E1D8]">{p.handle}</strong>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-[#9B988E] leading-relaxed mb-6 font-normal">
                  {p.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#9B988E] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#728A7C] flex-shrink-0 mt-0.5" />
                      <span className="text-[#E3E1D8]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Open in New Tab Button */}
              <div className="pt-5 border-t border-white/[0.06] mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-[#F7F6F2] hover:text-[#0E0E10] text-[#E3E1D8] font-semibold text-xs transition-all border border-white/[0.06] shadow-sm"
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
