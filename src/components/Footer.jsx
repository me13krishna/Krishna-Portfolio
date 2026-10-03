import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, FolderDown } from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  LeetcodeIcon, 
  CodechefIcon, 
  MediumIcon, 
  TwitterIcon 
} from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export default function Footer({ onOpenTerminal }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0E0E10] pt-24 pb-16 text-[#9B988E]">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E2A866]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* WARM INVITATIONAL CLOSING                                       */}
        {/* ============================================================== */}
        <div className="pb-20 border-b border-white/[0.06] text-left space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E2A866] font-medium block">
            Next Chapters &bull; Opportunities
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F7F6F2] tracking-tight">
            Let's build something <br />
            <span className="font-editorial text-[#E2A866] italic font-normal">
              thoughtful together.
            </span>
          </h2>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}?subject=Project Collaboration / Opportunity`}
              onClick={playCyberClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F7F6F2] text-[#0E0E10] font-semibold text-sm hover:bg-white transition-all shadow-lg active:scale-98"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight className="w-4 h-4 text-[#0E0E10]" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#151518] hover:bg-[#1C1C21] text-[#F7F6F2] font-medium text-sm border border-white/[0.08] transition-all"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[#9B988E]" />
            </a>
          </div>
        </div>

        {/* Secondary Info & Socials Strip */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.06] text-left">
          
          <div className="space-y-1">
            <div className="text-lg font-bold text-[#F7F6F2] tracking-tight">
              Krishna Rameshwar Mishra
            </div>
            <p className="text-xs font-mono text-[#9B988E]">
              B.Tech in Computer Software Engineering &bull; MITAOE Pune (2025–2029)
            </p>
          </div>

          {/* Live Pune IST Clock Badge */}
          <div className="px-4 py-2 rounded-full bg-[#151518] border border-white/[0.06] flex items-center gap-2.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#728A7C] animate-pulse shadow-[0_0_8px_rgba(114,138,124,0.6)]" />
            <span className="text-[#9B988E]">Pune, India (IST):</span>
            <span className="text-[#F7F6F2] font-medium">{time || '06:30 PM'}</span>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#8FA699]" />
            </a>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4 text-[#E2A866]" />
            </a>
            <a
              href={personalInfo.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="CodeChef"
            >
              <CodechefIcon className="w-4 h-4 text-[#C48B71]" />
            </a>
            <a
              href={personalInfo.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="Medium"
            >
              <MediumIcon className="w-4 h-4 text-[#8FA699]" />
            </a>
            <a
              href={personalInfo.creatorInstaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="Instagram Creator"
            >
              <InstagramIcon className="w-4 h-4 text-[#D9A38C]" />
            </a>
            <a
              href={personalInfo.certificatesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[#9B988E] hover:text-[#F7F6F2] border border-white/[0.06] transition-colors"
              title="Drive Credentials Folder"
            >
              <FolderDown className="w-4 h-4 text-[#E2A866]" />
            </a>
          </div>

        </div>

        {/* Memorable Human Closing Line & Colophon */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#9B988E] text-left">
          <div className="font-editorial text-sm italic text-[#E3E1D8]">
            “Good software, like good conversation, begins with genuine curiosity and quiet listening.”
          </div>

          <div className="text-[11px] text-[#9B988E]">
            &copy; {new Date().getFullYear()} Krishna Mishra &bull; Built with React &amp; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
