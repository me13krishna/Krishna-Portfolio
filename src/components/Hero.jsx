import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  ArrowDownRight,
  FileText,
  Copy,
  Check,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Ambient Sunlight & Canopy Glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-sunlight-radial pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-canopy-glow pointer-events-none -z-10" />

      {/* Floating Organic Soft Ambient Light Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-sun/[0.12] dark:bg-sun/[0.07] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-1/4 w-[420px] h-[420px] bg-leaf/[0.14] dark:bg-leaf/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Identity, Headline & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">
            
            {/* Small Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse shadow-[0_0_10px_rgba(127,166,58,0.6)]" />
              <span className="text-forest dark:text-sun font-semibold tracking-wider text-[11px] uppercase">
                SOFTWARE ENGINEER &bull; AI BUILDER &bull; CREATOR
              </span>
            </div>

            {/* Large Expressive Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold text-charcoal dark:text-warm-white tracking-tight leading-[1.08]">
                Building ideas <br />
                that turn into{' '}
                <span className="relative inline-block">
                  <span className="text-forest dark:text-sun font-editorial italic font-normal">
                    real products.
                  </span>
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-sun/40 dark:bg-leaf/40 rounded-full" />
                </span>
              </h1>

              {/* Concise Supporting Statement */}
              <p className="text-lg sm:text-xl font-normal text-charcoal-muted dark:text-dark-textMuted tracking-normal leading-relaxed max-w-2xl">
                I’m <strong className="text-charcoal dark:text-warm-white font-semibold">Krishna Mishra</strong> — an undergraduate engineer at <strong className="text-forest dark:text-sun font-medium">MIT Academy of Engineering, Pune</strong> (CGPA 8.76). I engineer practical, resilient full-stack applications, deploy enterprise AI reasoning pipelines, and explore the frontier where human intuition meets machine intelligence.
              </p>
            </div>

            {/* Status Indicators (Natural, Clean & Non-Techy) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted dark:text-dark-textMuted pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white">
                <MapPin className="w-3.5 h-3.5 text-olive dark:text-leaf" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white">
                <GraduationCap className="w-3.5 h-3.5 text-gold dark:text-sun" />
                <span>MITAOE &bull; CGPA 8.76</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white">
                <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun" />
                <span>Open for High-Impact Roles</span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={playCyberClick}
                data-cursor="VIEW"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark font-semibold text-sm shadow-soft-lift hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-warm-white dark:text-forest-dark group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={playCyberClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-card dark:bg-dark-card hover:bg-cream-subtle dark:hover:bg-dark-cardElevated text-charcoal dark:text-warm-white font-medium text-sm border border-forest/15 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/40 transition-all duration-300"
              >
                <span>Let’s Connect</span>
                <ArrowDownRight className="w-4 h-4 text-olive dark:text-leaf" />
              </a>

              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-forest/5 dark:hover:bg-white/5 text-charcoal-muted dark:text-dark-textMuted hover:text-forest dark:hover:text-warm-white text-xs font-mono transition-all duration-200"
                title="Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5 text-olive dark:text-sun" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Direct Email Card - Soft & Inviting */}
            <div className="w-full max-w-lg rounded-2xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 p-4 text-xs text-charcoal-muted dark:text-dark-textMuted flex items-center justify-between shadow-soft-card backdrop-blur-md">
              <div className="flex items-center gap-3 truncate">
                <span className="w-2 h-2 rounded-full bg-sun flex-shrink-0" />
                <span className="text-charcoal dark:text-warm-white font-mono truncate">{personalInfo.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-forest dark:text-warm-white transition-colors border border-forest/10 dark:border-white/10 flex-shrink-0 font-sans text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-leaf" />
                    <span className="text-leaf font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-olive dark:text-sun" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Warm Sunlight & Leaf Aura behind photo */}
            <div className="absolute inset-0 max-w-[390px] max-h-[490px] mx-auto bg-gradient-to-tr from-leaf/30 via-sun/20 to-transparent dark:from-leaf/20 dark:via-sun/15 rounded-[36px] blur-2xl -z-10" />

            {/* Asymmetric Organic Decorative Backplate */}
            <div className="absolute -inset-2 bg-gradient-to-br from-olive/10 via-transparent to-sun/10 rounded-[38px] -rotate-1 pointer-events-none -z-10" />

            {/* Editorial Framed Container */}
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] rounded-[32px] p-3 bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-soft-lift dark:shadow-dark-lift transition-all duration-700 hover:scale-[1.01] group">
              
              {/* Natural Outdoor Image with Warm Natural Light */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-cream dark:bg-dark-bg border border-forest/10 dark:border-white/10">
                <img
                  src={krishnaImg}
                  alt="Krishna Mishra — Software Engineer & AI Builder"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />

                {/* Gentle Sunlight Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Editorial Top Stamp */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream-card/90 dark:bg-dark-bg/80 backdrop-blur-md border border-forest/15 dark:border-white/15 text-[10px] font-mono tracking-wider text-forest dark:text-sun uppercase font-medium">
                  MITAOE &bull; PUNE
                </div>

                {/* Bottom Identification Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-cream-card/95 dark:bg-dark-card/95 backdrop-blur-xl border border-forest/10 dark:border-white/10 text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-charcoal dark:text-warm-white tracking-tight">
                        Krishna Mishra
                      </h3>
                      <p className="text-xs text-charcoal-muted dark:text-dark-textMuted font-normal mt-0.5">
                        Software Engineer &amp; AI Builder
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="w-2.5 h-2.5 rounded-full bg-leaf dark:bg-sun shadow-[0_0_8px_rgba(127,166,58,0.6)] mb-1" />
                      <span className="text-[10px] font-mono text-forest dark:text-sun font-semibold">8.76 CGPA</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge (Top-Right: AI Builder) */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-warm-white dark:bg-dark-cardElevated border border-forest/15 dark:border-white/15 shadow-lg flex items-center gap-1.5 text-xs text-charcoal dark:text-warm-white backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sun" />
                <span className="font-sans font-medium text-[11px]">Intelligent Systems</span>
              </div>

              {/* Floating Badge (Bottom-Left: Shipped Works) */}
              <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-full bg-warm-white dark:bg-dark-cardElevated border border-forest/15 dark:border-white/15 shadow-lg flex items-center gap-2 text-xs text-charcoal dark:text-warm-white backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5 text-leaf" />
                <span className="font-mono text-[11px]">12+ Shipped Projects</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
