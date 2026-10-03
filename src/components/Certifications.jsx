import React from 'react';
import { 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  FolderDown, 
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
        return <Cloud className="w-5 h-5 text-[#E2A866]" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-[#728A7C]" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#C48B71]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#E2A866]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#728A7C]" />;
      default:
        return <Award className="w-5 h-5 text-[#E2A866]" />;
    }
  };

  return (
    <section id="certifications" className="py-28 relative border-t border-white/[0.06] bg-[#121215]/30">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#E2A866]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Verified Credentials &bull; Industry Accreditation
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F6F2] tracking-tight">
            Credentials &amp; Recognition
          </h2>
          <p className="text-sm sm:text-base text-[#9B988E] leading-relaxed font-normal">
            Formal technical certifications spanning AWS, IBM, Cisco Networking Academy, corporate engineering simulations (JPMorganChase, Deloitte), Anthropic Claude, and nasscom. All high-resolution PDF credentials are archived in Google Drive.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-[28px] p-8 bg-[#151518]/90 border border-white/[0.06] hover:border-[#E2A866]/30 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5 shadow-soft-card group"
            >
              <div>
                {/* Header Icon + Verification Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  
                  <span className="text-[10px] font-mono px-3 py-0.5 rounded-full bg-white/[0.04] text-[#E3E1D8] border border-white/[0.06]">
                    Verified
                  </span>
                </div>

                {/* Issuer & Date */}
                <div className="text-xs font-mono text-[#9B988E] mb-1.5">
                  {cert.issuer} &bull; {cert.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F7F6F2] group-hover:text-white transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#9B988E] mb-5 leading-relaxed font-normal">
                  {cert.description}
                </p>

                {/* Topics */}
                <div className="space-y-2 mb-6">
                  {cert.topics.map((t) => (
                    <div key={t} className="flex items-center gap-2.5 text-[11px] text-[#9B988E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#728A7C] flex-shrink-0" />
                      <span className="text-[#E3E1D8]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View in Drive Link */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={personalInfo.certificatesDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#F7F6F2] hover:text-[#0E0E10] text-[#E3E1D8] text-xs font-medium transition-all border border-white/[0.06]"
                >
                  <span>View in Drive Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Master Google Drive Archive Banner */}
        <div className="rounded-[32px] p-8 sm:p-12 bg-gradient-to-r from-[#17171C] via-[#1A1A22] to-[#17171C] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-soft-lift text-left">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-[#E2A866] shadow-sm">
              <FolderDown className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h4 className="text-[#F7F6F2] font-bold text-xl sm:text-2xl tracking-tight">Official Credentials Drive Repository</h4>
                <span className="hidden sm:inline-block text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#E2A866]/10 text-[#E2A866] border border-[#E2A866]/20 font-medium">
                  Verified Archive
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#9B988E] mt-1.5 max-w-2xl leading-relaxed font-normal">
                Direct access to all verified PDF credentials, completion transcripts, and badges for AWS, IBM, Cisco, JPMorganChase, Deloitte, Anthropic, and nasscom.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F7F6F2] hover:bg-white text-[#0E0E10] font-semibold text-xs transition-all shadow-md active:scale-98"
          >
            <span>Open Google Drive Folder</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
