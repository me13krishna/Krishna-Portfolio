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
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { certifications, personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-amberGold" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-ember" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-amberGold" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative border-t border-borderMuted bg-surface/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-ember/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ember font-semibold block">
            Verified Credentials &bull; Industry Accreditation
          </span>
          <h2 className="headline-editorial text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter">
            Certifications &amp; Simulations
          </h2>
          <p className="text-xs sm:text-base text-ivory-muted leading-relaxed">
            Verified technical certifications spanning AWS Generative AI, IBM Cloud &amp; AI, Cisco Networking Academy, corporate simulations (JPMorganChase, Deloitte), Anthropic Claude, and nasscom. All high-resolution PDF credentials are archived on Google Drive.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl p-7 bg-surface/90 border border-borderMuted hover:border-ember/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                {/* Header Icon + Verification Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-surface border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-ivory-dim border border-white/10">
                    Verified
                  </span>
                </div>

                {/* Issuer & Date */}
                <div className="text-xs font-mono text-ivory-muted mb-1">
                  {cert.issuer} &bull; {cert.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-ember transition-colors font-display mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-ivory-dim mb-5 leading-relaxed">
                  {cert.description}
                </p>

                {/* Topics */}
                <div className="space-y-1.5 mb-6">
                  {cert.topics.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[11px] text-ivory-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ember flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View in Drive Link */}
              <div className="pt-4 border-t border-borderMuted">
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-ember hover:text-white text-ivory-dim text-xs font-semibold transition-all border border-white/10"
                >
                  <span>View in Drive Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Master Google Drive Archive Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-surface via-surfaceHover to-surface border border-ember/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start sm:items-center gap-5 text-left">
            <div className="w-14 h-14 rounded-2xl bg-ember/10 border border-ember/30 flex items-center justify-center flex-shrink-0 text-ember shadow-inner">
              <FolderDown className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h4 className="text-white font-bold text-xl font-display">Official Credentials Google Drive Folder</h4>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-ember/15 text-ember border border-ember/30 font-semibold">
                  Open Repository
                </span>
              </div>
              <p className="text-xs text-ivory-muted mt-1.5 max-w-2xl leading-relaxed">
                Direct access to all verified PDF certificates, completion transcripts, and badges for AWS, IBM, Cisco, JPMorganChase, Deloitte, Anthropic, and nasscom.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ember hover:bg-ember-light text-white font-semibold text-xs transition-all shadow-xl shadow-ember/25 active:scale-95"
          >
            <span>Open Google Drive Folder</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
