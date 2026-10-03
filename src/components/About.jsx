import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowUpRight, 
  Heart,
  Compass,
  Cpu,
  Layers
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';
import krishnaImg from '../assets/krishna.jpg';

export default function About({ onOpenResume }) {
  const philosophies = [
    {
      title: "First-Principles Thinking",
      desc: "Deconstructing complicated requirements into atomic logical truths before writing a single line of code.",
      icon: <Compass className="w-4 h-4 text-[#E2A866]" />
    },
    {
      title: "Algorithmic Stamina",
      desc: "Deep respect for asymptotic time and space bounds. Clean code is deterministic, efficient, and predictable.",
      icon: <Cpu className="w-4 h-4 text-[#728A7C]" />
    },
    {
      title: "End-to-End Ownership",
      desc: "Caring deeply about every layer — from PostgreSQL schemas and REST APIs to typography, padding, and micro-delights.",
      icon: <Layers className="w-4 h-4 text-[#C48B71]" />
    },
    {
      title: "Human Quietude",
      desc: "Great software doesn't need to shout. It solves the user’s problem with calm precision and disappears into the background.",
      icon: <Heart className="w-4 h-4 text-[#E2A866]" />
    }
  ];

  return (
    <section id="about" className="py-28 relative border-t border-white/[0.06]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#728A7C]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Philosophy &bull; Human Story &bull; Education
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Curious by default. <br />
            <span className="font-editorial text-[#E2A866] italic font-normal">
              Building with quiet intention.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column (7 cols): The Conversational Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="rounded-[32px] p-8 sm:p-10 bg-[#151518]/90 border border-white/[0.07] space-y-6 text-sm sm:text-base text-[#E3E1D8] leading-relaxed shadow-soft-card">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/[0.06]">
                <img 
                  src={krishnaImg} 
                  alt="Krishna Mishra" 
                  className="w-16 h-16 rounded-2xl object-cover border border-white/[0.1] shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#F7F6F2]">Krishna Rameshwar Mishra</h3>
                  <p className="text-xs font-mono text-[#E2A866] mt-0.5">Software Engineer &bull; MITAOE Pune (CGPA 8.76)</p>
                </div>
              </div>

              <p>
                I’ve always believed that good software, much like a thoughtful conversation, begins with genuine listening.
              </p>

              <p>
                I didn’t fall in love with engineering because of buzzwords or trend cycles. I fell in love with that quiet, deeply satisfying moment when an idea sketched out on a notepad turns into a reliable, working system that someone actually relies upon.
              </p>

              <p>
                Currently, I am pursuing my B.Tech in Software Engineering at <strong className="text-[#F7F6F2] font-semibold">MIT Academy of Engineering, Pune</strong>, maintaining a <strong className="text-[#F7F6F2] font-semibold">CGPA of 8.76</strong>. My journey blends deep foundational rigor in C and Linux POSIX systems with modern production work: building AI orchestrations with <strong className="text-[#F7F6F2] font-semibold">IBM watsonx</strong>, developing cryptographic vaults with Flask and SHA-256, and co-founding <strong className="text-[#F7F6F2] font-semibold">Indian Pixel</strong>.
              </p>

              <p className="text-[#9B988E] text-xs sm:text-sm">
                When I’m not debugging complex algorithmic bounds or training models, I write technical analyses on Medium exploring the societal impact of AI and create visual engineering breakdowns for fellow student developers.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playCyberClick();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-[#F7F6F2] text-[#0E0E10] hover:bg-white transition-all shadow-md active:scale-98"
                >
                  <span>Review Official Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={playCyberClick}
                  className="inline-flex items-center gap-2 text-xs font-medium px-6 py-3 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#E3E1D8] border border-white/[0.06] transition-all"
                >
                  <span>Start a Conversation</span>
                </a>
              </div>

            </div>

            {/* Core Tenets & Strengths */}
            <div className="rounded-[32px] p-8 bg-[#151518]/60 border border-white/[0.06] space-y-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E2A866]" />
                <span>How I Approach Craft &amp; Engineering</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {philosophies.map((phil) => (
                  <div key={phil.title} className="p-4 rounded-2xl bg-[#1C1C21]/60 border border-white/[0.04] space-y-1.5">
                    <div className="flex items-center gap-2">
                      {phil.icon}
                      <strong className="text-[#F7F6F2] text-xs font-sans">{phil.title}</strong>
                    </div>
                    <p className="text-[#9B988E] leading-relaxed font-normal">
                      {phil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Academic Milestones */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-[32px] p-8 sm:p-9 bg-[#151518]/90 border border-white/[0.07] space-y-6 shadow-soft-card">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-[#E2A866]" />
                  <h4 className="text-lg font-bold text-[#F7F6F2] tracking-tight">Academic Journey</h4>
                </div>
                <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.08]">
                  Verified Record
                </span>
              </div>

              {/* Education Cards */}
              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#1C1C21]/50 border border-white/[0.04] hover:border-[#E2A866]/30 transition-colors space-y-2 text-left"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="text-sm font-bold text-[#F7F6F2]">{edu.institution}</h5>
                      <span className="text-xs font-mono font-bold text-[#E2A866] px-2.5 py-0.5 rounded-full bg-[#E2A866]/10 border border-[#E2A866]/20 flex-shrink-0">
                        {edu.score}
                      </span>
                    </div>

                    <div className="text-xs text-[#728A7C] font-mono font-medium">
                      {edu.degree}
                    </div>

                    <div className="text-[11px] text-[#9B988E] font-mono">
                      {edu.period}
                    </div>

                    <p className="text-xs text-[#9B988E] pt-1 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiet Quote */}
            <div className="rounded-[32px] p-7 bg-gradient-to-br from-[#E2A866]/[0.08] via-[#151518] to-[#151518] border border-[#E2A866]/20 text-left space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2A866] font-medium">
                Personal North Star
              </span>
              <p className="text-sm text-[#F7F6F2] font-editorial italic leading-relaxed">
                “Quiet craft always outlasts loud noise. Build things with deep attention, measure your work against reality, and never compromise on character.”
              </p>
              <span className="text-xs font-mono text-[#9B988E] block text-right">
                — Krishna Mishra
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
