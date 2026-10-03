import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function ProofStrip() {
  const pillars = [
    {
      num: "01",
      tag: "BUILD",
      title: "Production Systems",
      desc: "Architecting end-to-end full-stack platforms, IBM watsonx AI orchestrations, cryptographic blockchain vaults, and real-time operations dashboards.",
      metric: "12+ Shipped Deployments",
      link: "#projects"
    },
    {
      num: "02",
      tag: "SOLVE",
      title: "Algorithmic Rigor",
      desc: "Continuous algorithmic discipline across LeetCode, CodeChef, and HackerRank. Obsessed with optimal time complexity and deterministic memory bounds.",
      metric: "Active Competitive Rating",
      link: "#problem-solving"
    },
    {
      num: "03",
      tag: "COMPETE",
      title: "High-Stakes Sprints",
      desc: "Rapid prototyping and resilient engineering under intense pressure: Smart India Hackathon (SIH 2024 Netra X) and Prakrushti.",
      metric: "National Hackathons",
      link: "#projects"
    },
    {
      num: "04",
      tag: "CREATE",
      title: "Writing & Insights",
      desc: "Demystifying complex generative systems and workforce shifts through long-form Medium research publications and visual tech breakdowns.",
      metric: "Published Technical Essays",
      link: "#contact"
    }
  ];

  return (
    <section className="py-20 relative border-y border-forest/10 dark:border-white/10 bg-cream-card/60 dark:bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-sun font-semibold block">
              PROOF OF CRAFT &bull; CORE PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-charcoal dark:text-warm-white tracking-tight">
              Pillars of Execution
            </h2>
          </div>
          <p className="text-sm text-charcoal-muted dark:text-dark-textMuted max-w-md text-left leading-relaxed">
            Tangible engineering depth across software architecture, competitive algorithms, national hackathons, and published technical writing.
          </p>
        </div>

        {/* 4 Pillars - Soft Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <a
              key={pillar.num}
              href={pillar.link}
              className="group p-7 rounded-[26px] bg-warm-white dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-leaf/40 dark:hover:border-sun/40 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-charcoal-muted dark:text-dark-textMuted font-medium tracking-wider">
                    {pillar.num} &bull; {pillar.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-forest/5 dark:bg-white/5 group-hover:bg-leaf/20 dark:group-hover:bg-sun/20 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-charcoal-muted dark:text-dark-textMuted group-hover:text-forest dark:group-hover:text-sun transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal dark:text-warm-white mb-3 group-hover:text-forest dark:group-hover:text-sun transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-charcoal-muted dark:text-dark-textMuted leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10 dark:border-white/10 text-xs font-mono text-forest dark:text-sun font-semibold">
                {pillar.metric}
              </div>
            </a>
          ))}
        </div>

        {/* Authentic Metric Pillars */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-forest/10 dark:border-white/10">
          {stats.map((s, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-warm-white/70 dark:bg-dark-cardElevated/50 border border-forest/10 dark:border-white/5 text-left shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                {s.value}
              </div>
              <div className="text-xs font-semibold text-charcoal dark:text-warm-white mt-1.5">
                {s.label}
              </div>
              <div className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono mt-0.5 truncate">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
