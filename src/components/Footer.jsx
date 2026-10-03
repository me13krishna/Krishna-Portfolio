import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FolderDown } from 'lucide-react';
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

export default function Footer() {
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
    <footer className="relative border-t border-forest/10 dark:border-white/10 bg-cream-card dark:bg-dark-bg pt-20 pb-14 text-charcoal-muted dark:text-dark-textMuted transition-colors duration-300">
      
      {/* Background Subtle Sunlight Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-forest/10 dark:border-white/10 text-left">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              {/* Tiny Green/Yellow Visual Accent */}
              <span className="w-2.5 h-2.5 rounded-full bg-sun ring-2 ring-leaf flex-shrink-0" />
              <span className="text-xl font-bold text-charcoal dark:text-warm-white tracking-tight">
                Krishna Rameshwar Mishra
              </span>
            </div>
            <p className="text-xs font-mono text-charcoal-muted dark:text-dark-textMuted max-w-md">
              Software Engineer &bull; AI Builder &bull; MIT Academy of Engineering, Pune (2025–2029)
            </p>
          </div>

          {/* Live Pune IST Clock Badge */}
          <div className="px-4 py-2 rounded-full bg-cream dark:bg-dark-card border border-forest/10 dark:border-white/10 flex items-center gap-2.5 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse shadow-[0_0_8px_rgba(127,166,58,0.6)]" />
            <span className="text-charcoal-muted dark:text-dark-textMuted">Pune, India (IST):</span>
            <span className="text-charcoal dark:text-warm-white font-semibold">{time || '07:00 PM'}</span>
          </div>

          {/* Social Platform Icons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4 text-sun" />
            </a>
            <a
              href={personalInfo.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="CodeChef"
            >
              <CodechefIcon className="w-4 h-4 text-leaf" />
            </a>
            <a
              href={personalInfo.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="Medium"
            >
              <MediumIcon className="w-4 h-4 text-forest dark:text-sun" />
            </a>
            <a
              href={personalInfo.creatorInstaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="Instagram Creator"
            >
              <InstagramIcon className="w-4 h-4 text-olive" />
            </a>
            <a
              href={personalInfo.certificatesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2.5 rounded-xl bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
              title="Drive Credentials Folder"
            >
              <FolderDown className="w-4 h-4 text-gold dark:text-sun" />
            </a>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted text-left">
          <div className="font-editorial text-sm italic text-charcoal dark:text-warm-white">
            “Quiet craft always outlasts loud noise.”
          </div>

          <div className="text-[11px]">
            &copy; {new Date().getFullYear()} Krishna Mishra &bull; Built with React &amp; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
