import React, { useState, useEffect } from 'react';
import { ArrowUp, FolderDown } from 'lucide-react';
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

  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-forest/10 dark:border-white/10 bg-cream-card dark:bg-dark-bg pt-16 pb-12 text-charcoal-muted dark:text-dark-textMuted transition-colors duration-300">
      
      {/* Background Subtle Sunlight Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sunlight-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-forest/10 dark:border-white/10 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center font-mono font-bold text-xs tracking-wider">
              KM
            </div>
            <div>
              <h4 className="text-sm font-bold text-charcoal dark:text-warm-white tracking-tight">
                Krishna Rameshwar Mishra
              </h4>
              <p className="text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted">
                Software Engineer &bull; MITAOE Pune
              </p>
            </div>
          </div>

          {/* Live Pune IST Clock Badge */}
          <div className="px-3.5 py-1.5 rounded-full bg-cream dark:bg-dark-card border border-forest/10 dark:border-white/10 flex items-center gap-2 text-xs font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-leaf dark:bg-sun animate-pulse" />
            <span className="text-charcoal-muted dark:text-dark-textMuted text-[11px]">Pune (IST):</span>
            <span className="text-charcoal dark:text-warm-white font-semibold text-[11px]">{time || '07:00 PM'}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 dark:bg-white/5 hover:bg-forest/10 dark:hover:bg-white/10 text-charcoal dark:text-warm-white text-xs font-mono border border-forest/10 dark:border-white/10 transition-all self-start md:self-auto"
            title="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-forest dark:text-sun" />
          </button>

        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted text-left">
          <div className="text-[11px]">
            Designed &amp; built by Krishna &bull; MIT Academy of Engineering, Pune
          </div>

          <div className="font-serif italic text-xs text-charcoal dark:text-warm-white">
            “Quiet craft always outlasts loud noise.”
          </div>

          <div className="text-[11px]">
            &copy; {new Date().getFullYear()} Krishna Mishra. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
