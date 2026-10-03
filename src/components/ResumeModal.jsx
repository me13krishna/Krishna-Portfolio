import React from 'react';
import { X, Mail, GraduationCap, ExternalLink, Briefcase, FolderGit2, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, experiences, projects } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    playCyberClick();
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E2A866', '#728A7C', '#F7F6F2']
      });
    } catch (e) {}
    window.location.href = `mailto:${personalInfo.email}?subject=Resume Request - Krishna Mishra`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E10]/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-3xl rounded-[32px] bg-[#151518] border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full text-[#9B988E] hover:text-[#F7F6F2] bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E2A866]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F2] tracking-tight">
              Curriculum Vitae / Dossier
            </h3>
            <p className="text-xs font-mono text-[#E2A866] mt-0.5 font-medium">
              Krishna Rameshwar Mishra &bull; Software Engineer &bull; AI Builder
            </p>
          </div>
        </div>

        {/* Resume Content Snapshot */}
        <div className="space-y-6 text-xs sm:text-sm text-[#E3E1D8] leading-relaxed mb-8">
          
          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-[#1C1C21]/60 border border-white/[0.06] space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#E2A866] font-medium">
              Professional Summary
            </h4>
            <p className="text-xs text-[#9B988E] leading-relaxed font-normal">
              Computer Science undergraduate focused on Artificial Intelligence, Distributed Architectures, and Software Craftsmanship. Hands-on experience as Co-Founder at Indian Pixel and engineering internships, developing AI applications, responsive web interfaces, and data-driven solutions with Python, JavaScript, React, Node.js, IBM watsonx, Gemini API, and Tableau.
            </p>
          </div>

          {/* Education Box */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#E2A866]" />
              <span>Education</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#1C1C21]/40 border border-white/[0.04] space-y-1">
                  <div className="font-semibold text-[#F7F6F2] text-xs">{edu.institution}</div>
                  <div className="text-[11px] text-[#E2A866]">{edu.degree}</div>
                  <div className="flex items-center justify-between text-[10px] text-[#9B988E] font-mono pt-1">
                    <span>{edu.period}</span>
                    <span className="text-[#F7F6F2] font-bold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#728A7C]" />
              <span>Experience &amp; Internships</span>
            </h4>
            <div className="space-y-2.5 text-xs">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-[#1C1C21]/40 border border-white/[0.04] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#F7F6F2]">{exp.role} — <span className="text-[#E2A866]">{exp.company}</span></span>
                    <span className="font-mono text-[11px] text-[#9B988E]">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-[#9B988E]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#9B988E] font-medium flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#728A7C]" />
              <span>Flagship Works</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-[#1C1C21]/40 border border-white/[0.04]">
                  <span className="font-semibold text-[#F7F6F2] block mb-1">{proj.title}</span>
                  <span className="text-[11px] text-[#9B988E] block line-clamp-2">{proj.tagline}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-white/[0.06]">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs transition-all shadow-md active:scale-98"
          >
            <Mail className="w-4 h-4 text-[#0E0E10]" />
            <span>Request Official PDF Resume</span>
          </button>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#F7F6F2] font-medium text-xs border border-white/[0.08] transition-all"
          >
            <span>Verified Credentials on Drive</span>
            <ExternalLink className="w-4 h-4 text-[#E2A866]" />
          </a>
        </div>

      </div>
    </div>
  );
}
