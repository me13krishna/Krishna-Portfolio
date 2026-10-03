import React from 'react';
import { X, Download, FileText, Mail, GraduationCap, Award, CheckCircle2, ExternalLink, Briefcase, FolderGit2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, experiences, projects } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    playCyberClick();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#3b82f6', '#f59e0b']
      });
    } catch (e) {}
    window.location.href = `mailto:${personalInfo.email}?subject=Resume Request - Krishna Mishra`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-3xl rounded-2xl glass-panel-glow bg-deep/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-white font-display">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              Krishna Rameshwar Mishra &bull; AI Developer &bull; Software Engineer
            </p>
          </div>
        </div>

        {/* Resume Content Snapshot */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-surface/70 border border-white/10 space-y-1.5">
            <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
              Summary
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Computer Science undergraduate focused on Artificial Intelligence, Generative AI, and software development. Hands-on experience through internships, entrepreneurship, and technical projects, building AI-powered applications, responsive web interfaces, and data-driven solutions with Python, JavaScript, React, Node.js, IBM watsonx, Gemini API, and Tableau.
            </p>
          </div>

          {/* Education Box */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-surface/50 border border-white/5 space-y-1">
                  <div className="font-semibold text-white text-xs">{edu.institution}</div>
                  <div className="text-[11px] text-cyan-300">{edu.degree}</div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                    <span>{edu.period}</span>
                    <span className="text-emerald-400 font-bold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span>Experience &amp; Internships</span>
            </h4>
            <div className="space-y-2 text-xs">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-3 rounded-xl bg-surface/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{exp.role} — <span className="text-cyan-300">{exp.company}</span></span>
                    <span className="font-mono text-[11px] text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-slate-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-emerald-400" />
              <span>Key Projects</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-surface/40 border border-white/5">
                  <span className="font-semibold text-white block mb-0.5">{proj.title}</span>
                  <span className="text-[11px] text-slate-400 block line-clamp-2">{proj.tagline}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Request Official PDF Resume</span>
          </button>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-semibold text-xs border border-cyan-500/30 hover:border-cyan-400 transition-all text-cyan-300"
          >
            <span>Verified Credentials on Drive</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
