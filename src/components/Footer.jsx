import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Sparkles, FolderDown, Heart } from 'lucide-react';
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
    <footer className="relative border-t border-borderMuted bg-void pt-20 pb-12 text-ivory-muted">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-ember/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* MASSIVE FINAL CALL TO ACTION                                    */}
        {/* ============================================================== */}
        <div className="pb-16 border-b border-borderMuted text-left space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ember font-bold block">
            Next Steps &bull; Opportunities
          </span>

          <h2 className="headline-editorial text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tighter">
            Have An Idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-amberGold to-white">
              Let's Build It.
            </span>
          </h2>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}?subject=Project Collaboration / Opportunity`}
              onClick={playCyberClick}
              data-cursor="EMAIL"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-void font-bold text-sm hover:bg-ember hover:text-white transition-all shadow-xl duration-200"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-surface hover:bg-surfaceHover text-white font-medium text-sm border border-borderMuted transition-all duration-200"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-ivory-muted" />
            </a>
          </div>
        </div>

        {/* Secondary Info & Socials Strip */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-borderMuted">
          
          <div className="space-y-1 text-left">
            <div className="text-xl font-bold font-display text-white tracking-tight uppercase">
              Krishna Rameshwar Mishra
            </div>
            <p className="text-xs font-mono text-ivory-muted">
              B.Tech in Computer Software Engineering &bull; MITAOE Pune (2025–2029)
            </p>
          </div>

          {/* Live Pune IST Clock Badge */}
          <div className="px-4 py-2 rounded-full bg-surface border border-borderMuted flex items-center gap-2.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-ivory-muted">Pune, India (IST):</span>
            <span className="text-white font-bold">{time || '06:00 PM'}</span>
          </div>

          {/* All Platform Social Icons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={personalInfo.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="CodeChef"
            >
              <CodechefIcon className="w-4 h-4 text-ember" />
            </a>
            <a
              href={personalInfo.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="Medium"
            >
              <MediumIcon className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={personalInfo.creatorInstaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="Instagram Creator"
            >
              <InstagramIcon className="w-4 h-4 text-fuchsia-400" />
            </a>
            <a
              href={personalInfo.certificatesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-surface hover:bg-surfaceHover text-ivory-dim hover:text-white border border-borderMuted transition-colors"
              title="Drive Certificates Folder"
            >
              <FolderDown className="w-4 h-4 text-amberGold" />
            </a>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory-muted">
          <div>
            &copy; {new Date().getFullYear()} Krishna Rameshwar Mishra. Designed &amp; Engineered with React &amp; Tailwind CSS.
          </div>

          <button
            onClick={() => {
              playCyberClick();
              onOpenTerminal();
            }}
            className="hover:text-ember transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-ember" />
            <span>Open Terminal Console</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
