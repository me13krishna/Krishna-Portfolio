import React from 'react';
import { 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  FolderDown,
  Sparkles,
  Cloud,
  Cpu,
  Bot,
  Shield,
  Terminal
} from 'lucide-react';
import { certifications, personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'bot':
        return <Bot className="w-6 h-6 text-blue-400" />;
      case 'terminal':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Award className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-deep/50">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <span>05 — Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Industry &amp; Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">Certifications</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Officially verified credentials spanning AWS Generative AI, IBM Cloud &amp; AI, Cisco Networking Academy, 
            corporate job simulations (JPMorganChase, Deloitte), Anthropic Claude, and nasscom. All documents available in the official Google Drive archive.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                {/* Header Icon + Verification Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                    Verified Credential
                  </span>
                </div>

                {/* Issuer & Date */}
                <div className="text-xs font-mono text-slate-400 mb-1">
                  {cert.issuer} &bull; {cert.date}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors font-display mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Key Covered Topics */}
                <div className="space-y-1.5 mb-6">
                  {cert.topics.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Certificate Link (Points to Drive folder) */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-purple-500/20 text-slate-200 hover:text-purple-300 border border-white/10 hover:border-purple-500/30 text-xs font-semibold transition-all"
                >
                  <span>View in Drive Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Master Google Drive Archive Banner */}
        <div className="mt-12 rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-300 shadow-inner">
              <FolderDown className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white font-bold text-lg">Official Certificate Repository on Google Drive</h4>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Full Access
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Direct access to the comprehensive Google Drive archive housing all original high-resolution PDFs, transcripts, and completion credentials for AWS, IBM, Cisco, Job Simulations, Anthropic, and internships.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:brightness-110 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 transition-all active:scale-95"
          >
            <span>Open Google Drive Folder</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
