import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles,
  ArrowDown,
  Download,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, heroHeadlineOptions } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function Hero({ onOpenResume }) {
  const [selectedHeadlineIdx, setSelectedHeadlineIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeHeadline = heroHeadlineOptions[selectedHeadlineIdx] || heroHeadlineOptions[0];

  const copyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="home" className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      
      {/* Background Ambient Subtle Gradient Mesh */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-sunlight-radial pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-canopy-glow pointer-events-none -z-10" />
      
      {/* Delicate floating ambient glow */}
      <div className="absolute top-24 right-12 w-80 h-80 bg-sun/[0.08] dark:bg-sun/[0.05] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-24 left-1/3 w-96 h-96 bg-leaf/[0.09] dark:bg-leaf/[0.05] rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* 12-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Value Prop, Headline, Bio, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">
            
            {/* Status Chip: Open to internships & collaborations */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-xs font-mono shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse shadow-[0_0_8px_rgba(127,166,58,0.6)]" />
              <span className="text-charcoal dark:text-warm-white font-medium text-[11px] tracking-wide">
                Open to internships &amp; collaborations
              </span>
            </div>

            {/* Fluid Hero Headline: clamp(2.8rem, 7vw, 6.2rem) with Italic Serif Accent */}
            <div className="space-y-4 w-full">
              <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold text-charcoal dark:text-warm-white tracking-[-0.035em] leading-[1.05]">
                {activeHeadline.primary}{' '}
                <span className="font-serif italic font-normal text-forest dark:text-sun block sm:inline">
                  {activeHeadline.accent}
                </span>
              </h1>

              {/* Short Supporting Sentence */}
              <p className="text-base sm:text-lg font-normal text-charcoal-muted dark:text-dark-textMuted tracking-normal leading-relaxed max-w-xl">
                I’m <strong className="text-charcoal dark:text-warm-white font-semibold">{personalInfo.shortName}</strong> — Software Engineer &amp; AI Builder at <strong className="text-charcoal dark:text-warm-white font-semibold">MIT Academy of Engineering, Pune</strong> (CGPA 8.76). Crafting thoughtful software, intelligent systems, and calm digital experiences.
              </p>
            </div>

            {/* Status Indicators */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted dark:text-dark-textMuted pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white font-mono text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white font-mono text-[11px]">
                <span className="text-forest dark:text-sun font-bold">8.76</span>
                <span>CGPA &bull; MITAOE</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white font-mono text-[11px]">
                <Sparkles className="w-3 h-3 text-sun" />
                <span>Python &bull; React &bull; watsonx</span>
              </div>
            </div>

            {/* 2 Primary CTAs + Direct Resume Download */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* CTA 1: View Work */}
              <a
                href="#projects"
                onClick={playCyberClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-xs tracking-wide shadow-soft-lift hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 text-warm-white dark:text-forest-dark group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* CTA 2: Download / Review Resume */}
              <a
                href="/resume.pdf"
                download="Krishna_Mishra_Resume.pdf"
                onClick={playCyberClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-card dark:bg-dark-card hover:bg-cream-subtle dark:hover:bg-dark-cardElevated text-charcoal dark:text-warm-white font-medium text-xs border border-forest/15 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/40 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-olive dark:text-sun" />
                <span>Download Resume</span>
              </a>

              {/* View Interactive CV */}
              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted hover:text-forest dark:hover:text-sun underline underline-offset-4 decoration-forest/30 dark:decoration-sun/30 transition-colors py-2 px-1"
              >
                or view interactive CV
              </button>
            </div>

            {/* Direct Connect & Social Bar: GitHub, LinkedIn, Email */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/30 text-charcoal dark:text-warm-white transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-charcoal dark:text-warm-white" />
                <span className="font-mono text-[11px]">me13krishna</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/30 text-charcoal dark:text-warm-white transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-olive dark:text-sun" />
                <span className="font-mono text-[11px]">in/krishnamishra13</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/30 text-charcoal dark:text-warm-white transition-all"
                title="Copy Email Address"
              >
                <Mail className="w-3.5 h-3.5 text-gold dark:text-sun" />
                <span className="font-mono text-[11px] truncate max-w-[170px] sm:max-w-none">{personalInfo.email}</span>
                {copied ? <Check className="w-3 h-3 text-leaf" /> : <Copy className="w-3 h-3 text-charcoal-muted opacity-60" />}
              </button>
            </div>

            {/* Subtle Headline Switcher Pill (Delight element for user selection) */}
            <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-charcoal-muted dark:text-dark-textMuted">
              <span className="opacity-70">Headline Style:</span>
              <div className="inline-flex rounded-lg p-0.5 bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10">
                {heroHeadlineOptions.map((opt, i) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      playCyberClick();
                      setSelectedHeadlineIdx(i);
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all ${
                      selectedHeadlineIdx === i
                        ? 'bg-cream-card dark:bg-dark-cardElevated text-forest dark:text-sun font-semibold shadow-xs'
                        : 'text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Professional Portrait of Krishna */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Soft Ambient Light Halo */}
            <div className="absolute inset-0 max-w-[380px] max-h-[480px] mx-auto bg-gradient-to-tr from-leaf/25 via-sun/20 to-transparent dark:from-leaf/15 dark:via-sun/10 rounded-[36px] blur-2xl -z-10" />

            {/* Asymmetric Framing */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[30px] p-2.5 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-soft-lift dark:shadow-dark-lift transition-all duration-700 hover:scale-[1.01] group">
              
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-cream dark:bg-dark-bg border border-forest/10 dark:border-white/10">
                <img
                  src={krishnaImg}
                  alt="Krishna Mishra — Software Engineer & AI Builder"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />

                {/* Gentle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent pointer-events-none" />

                {/* Top Location Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-cream-card/90 dark:bg-dark-bg/85 backdrop-blur-md border border-forest/15 dark:border-white/15 text-[10px] font-mono tracking-wider text-forest dark:text-sun uppercase font-medium">
                  MITAOE &bull; PUNE
                </div>

                {/* Bottom Identification */}
                <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-xl bg-cream-card/95 dark:bg-dark-card/95 backdrop-blur-xl border border-forest/10 dark:border-white/10 text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-charcoal dark:text-warm-white tracking-tight">
                        Krishna Mishra
                      </h3>
                      <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted font-mono mt-0.5">
                        Software &bull; AI Builder
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10">
                      <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse" />
                      <span className="text-[10px] font-mono text-forest dark:text-sun font-semibold">Active</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge (Top-Right) */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-cream-card dark:bg-dark-cardElevated border border-forest/15 dark:border-white/15 shadow-md flex items-center gap-1.5 text-xs text-charcoal dark:text-warm-white backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sun" />
                <span className="font-sans font-medium text-[11px]">Intelligent Systems</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Subtle Scroll Cue at the bottom */}
      <div className="pt-6 pb-2 flex flex-col items-center justify-center text-charcoal-muted dark:text-dark-textMuted text-[11px] font-mono tracking-wider opacity-70 hover:opacity-100 transition-opacity">
        <a 
          href="#projects" 
          onClick={playCyberClick}
          className="flex flex-col items-center gap-1.5 group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300 text-forest dark:text-sun" />
        </a>
      </div>

    </section>
  );
}
