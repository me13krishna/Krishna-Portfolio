import React from 'react';
import { Layers, Terminal, Trophy, Sparkles, ArrowUpRight } from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function ProofStrip() {
  const pillars = [
    {
      num: "01",
      tag: "BUILD",
      title: "Production Products & Platforms",
      desc: "Full-stack architectures, IBM watsonx AI generators, decentralized blockchain vaults, and real-time operations dashboards.",
      metric: "12+ Repositories & Deployments",
      link: "#projects"
    },
    {
      num: "02",
      tag: "SOLVE",
      title: "Algorithmic Problem Solving",
      desc: "Rigorous daily data structures, time complexity optimization, and competitive coding across LeetCode, CodeChef, and HackerRank.",
      metric: "Active Competitive Rating",
      link: "#problem-solving"
    },
    {
      num: "03",
      tag: "COMPETE",
      title: "Hackathons & Sprint Execution",
      desc: "High-intensity rapid prototyping under real-world constraints: Smart India Hackathon (SIH 2024 Netra X) and Prakrushti.",
      metric: "National Hackathon Builds",
      link: "#projects"
    },
    {
      num: "04",
      tag: "CREATE",
      title: "Tech Writing & Content Creation",
      desc: "Breaking down complex AI systems through in-depth Medium publications and developer reels on Instagram (@yappp.kris).",
      metric: "Articles & Visual Breakdowns",
      link: "#accounts"
    }
  ];

  return (
    <section className="py-16 relative border-y border-borderMuted bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block mb-2">
              Core Pillars of Execution
            </span>
            <h2 className="headline-editorial text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Proof of Craft
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ivory-muted max-w-md">
            Tangible engineering execution across software architecture, competitive algorithms, national hackathons, and technical writing.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => (
            <a
              key={pillar.num}
              href={pillar.link}
              className="group p-6 rounded-2xl bg-surface/80 border border-borderMuted hover:border-ember/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-ivory-muted font-bold">
                    {pillar.num} // {pillar.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ivory-muted group-hover:text-ember group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-ember transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-ivory-muted leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-borderMuted text-[11px] font-mono text-amberGold font-semibold">
                &gt; {pillar.metric}
              </div>
            </a>
          ))}
        </div>

        {/* Real Metrics Banner */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-borderMuted">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-surface/30 text-left">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-xs font-bold text-ivory-dim mt-1">
                {s.label}
              </div>
              <div className="text-[11px] font-mono text-ivory-muted mt-0.5 truncate">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
