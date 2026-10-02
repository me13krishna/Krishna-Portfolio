import React from 'react';
import { X, Download, FileText, Mail, GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
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
        className="w-full max-w-2xl rounded-2xl glass-panel-glow bg-deep/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-white font-display">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              Krishna Rameshwar Mishra &bull; Software Engineering
            </p>
          </div>
        </div>

        {/* Summary Details */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          
          {/* Education Box */}
          <div className="p-4 rounded-xl bg-surface/70 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                MIT Academy of Engineering, Pune
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold">CGPA: 8.76</span>
            </div>
            <p className="text-xs text-slate-400">
              B.Tech in Computer Science (Software Engineering) &bull; Batch 2025–2029
            </p>
          </div>

          {/* Core Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">
              Key Candidate Highlights:
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Certified in Python (Cisco Networking Academy Essentials 1 &amp; 2)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Anthropic Artificial Intelligence Certification in LLM foundations &amp; prompt design</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Collaborator &amp; Developer of the MITAOE Smart Campus Web Platform</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Linux-native system utility project and daily algorithmic problem solving</span>
              </div>
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
            <span>Request Official PDF Copy</span>
          </button>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 transition-all"
          >
            <span>View Verified Certificates Drive</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
