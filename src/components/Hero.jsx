import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  ArrowDownRight,
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Soft Ambient Light Halo (Sage & Warm Amber - Reflecting Krishna's Jacket & Natural Sunlight) */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#728A7C]/[0.08] rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-12 w-[550px] h-[550px] bg-[#E2A866]/[0.06] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Thoughtful Headline & Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
            
            {/* Status Pill - Soft, Calm, Refined */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151518]/90 border border-white/[0.08] text-xs text-[#9B988E] shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#728A7C] animate-pulse shadow-[0_0_10px_rgba(114,138,124,0.6)]" />
              <span className="text-[#F7F6F2] font-medium">Krishna Mishra</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-[#E3E1D8]">Software Engineer &amp; AI Builder</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-[#E2A866] font-mono text-[11px]">MITAOE '29</span>
            </div>

            {/* Monumental, Emotionally Resonant Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold text-[#F7F6F2] tracking-tight leading-[1.08]">
                Crafting software with{' '}
                <span className="font-editorial text-[#E2A866] italic font-normal">
                  quiet depth
                </span>{' '}
                and human intuition.
              </h1>

              {/* Subheading Statement */}
              <p className="text-lg sm:text-xl font-normal text-[#9B988E] tracking-normal leading-relaxed max-w-2xl">
                B.Tech Software Engineering student at <strong className="text-[#F7F6F2] font-medium">MIT Academy of Engineering, Pune</strong> (CGPA 8.76). 
                Designing resilient full-stack systems, production AI platforms, and quiet digital craft.
              </p>
            </div>

            {/* Tiny Elegant Status Indicators (Refined & Human) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#9B988E] pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151518] border border-white/[0.06] text-[#E3E1D8]">
                <MapPin className="w-3.5 h-3.5 text-[#728A7C]" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151518] border border-white/[0.06] text-[#E3E1D8]">
                <GraduationCap className="w-3.5 h-3.5 text-[#E2A866]" />
                <span>MITAOE &bull; CGPA 8.76</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151518] border border-white/[0.06] text-[#E3E1D8]">
                <span className="w-2 h-2 rounded-full bg-[#728A7C]" />
                <span>Open to Engineering Roles</span>
              </div>
            </div>

            {/* Soft Luxury Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={playCyberClick}
                data-cursor="VIEW"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-sm shadow-xl shadow-black/30 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 text-[#0E0E10]" />
              </a>

              <a
                href="#contact"
                onClick={playCyberClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#151518] hover:bg-[#1C1C21] text-[#F7F6F2] font-medium text-sm border border-white/[0.08] hover:border-[#E2A866]/40 transition-all duration-300"
              >
                <span>Let’s Talk</span>
                <ArrowDownRight className="w-4 h-4 text-[#9B988E]" />
              </a>

              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] text-[#9B988E] hover:text-[#F7F6F2] text-xs font-mono transition-all duration-200"
                title="Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5 text-[#E2A866]" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Warm Direct Email Card (Soft & Welcoming) */}
            <div className="w-full max-w-lg rounded-2xl bg-[#151518]/80 border border-white/[0.06] p-4 text-xs text-[#9B988E] flex items-center justify-between shadow-soft-card backdrop-blur-md">
              <div className="flex items-center gap-3 truncate">
                <span className="w-2 h-2 rounded-full bg-[#E2A866]/80 flex-shrink-0" />
                <span className="text-[#E3E1D8] font-mono truncate">{personalInfo.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F7F6F2] transition-colors border border-white/[0.06] flex-shrink-0 font-sans text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#728A7C]" />
                    <span className="text-[#728A7C] font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#E2A866]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Cinematic Warm Framed Portrait of Krishna */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Natural Warm Backlight (Sage Green & Amber Sunlight) */}
            <div className="absolute inset-0 max-w-[380px] max-h-[480px] mx-auto bg-gradient-to-tr from-[#728A7C]/25 via-[#E2A866]/15 to-transparent rounded-[36px] blur-2xl -z-10" />

            {/* Multi-layered Soft Editorial Frame */}
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] rounded-[32px] p-3 bg-gradient-to-b from-white/[0.12] via-[#151518] to-[#151518] border border-white/[0.08] shadow-soft-lift transition-all duration-700 hover:scale-[1.01] group">
              
              {/* Image Container with Natural Light & Film Texture */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#121214] border border-white/[0.06]">
                <img
                  src={krishnaImg}
                  alt="Krishna Mishra — Software Engineer & AI Builder"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />

                {/* Gentle Cinematic Gradient - Preserving natural daylight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/85 via-transparent to-transparent pointer-events-none" />

                {/* Discreet Editorial Corner Stamp */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E0E10]/70 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono tracking-wider text-[#E3E1D8] uppercase">
                  PUNE &bull; 2026
                </div>

                {/* Warm Identification Card at the bottom */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#151518]/90 backdrop-blur-xl border border-white/[0.08] text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-[#F7F6F2] tracking-tight">
                        Krishna Mishra
                      </h3>
                      <p className="text-xs text-[#9B988E] font-normal mt-0.5">
                        Software Engineer &amp; AI Builder
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#728A7C] shadow-[0_0_8px_rgba(114,138,124,0.6)] mb-1" />
                      <span className="text-[10px] font-mono text-[#E2A866] font-medium">8.76 CGPA</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Soft Luxury Accent (Top-Right: AI Builder) */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-[#1C1C21]/95 border border-white/[0.08] shadow-lg flex items-center gap-1.5 text-xs text-[#E3E1D8] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#E2A866]" />
                <span className="font-sans font-medium">Intelligent Systems</span>
              </div>

              {/* Floating Soft Luxury Accent (Bottom-Left: MITAOE) */}
              <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-full bg-[#1C1C21]/95 border border-white/[0.08] shadow-lg flex items-center gap-2 text-xs text-[#E3E1D8] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#728A7C]" />
                <span className="font-mono text-[11px]">MIT Academy of Eng.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
