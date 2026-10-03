import React, { useState, useEffect } from 'react';
import { Mail, Heart, Sparkles, FolderDown } from 'lucide-react';
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
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-void/90 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Tag */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a 
              href="#home" 
              onClick={playCyberClick}
              className="text-2xl font-bold font-display text-white tracking-tight flex items-center gap-1.5"
            >
              Krishna<span className="text-cyan-400">.</span>
            </a>
            <p className="text-xs text-slate-500 font-mono">
              B.Tech Computer Software Engineering &bull; MITAOE Pune
            </p>
          </div>

          {/* Pune Live Time Badge */}
          <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300">Pune, India (IST):</span>
            <span className="text-cyan-300 font-bold">{time || '04:00 AM'}</span>
          </div>

          {/* Social Icons row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="GitHub (@me13krishna)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="LinkedIn (krishnamishra13)"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="LeetCode (@me13_krishna)"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={personalInfo.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="CodeChef (me13_krishna)"
            >
              <CodechefIcon className="w-4 h-4 text-amber-500" />
            </a>
            <a
              href={personalInfo.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Medium (@krishna1307mishra)"
            >
              <MediumIcon className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={personalInfo.creatorInstaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Instagram Creator (@yappp.kris)"
            >
              <InstagramIcon className="w-4 h-4 text-fuchsia-400" />
            </a>
            <a
              href={personalInfo.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="X / Twitter (@yapppkris)"
            >
              <TwitterIcon className="w-4 h-4 text-slate-300" />
            </a>
            <a
              href={personalInfo.certificatesDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Google Drive Certificates Archive"
            >
              <FolderDown className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Email (krishna1307mishra@gmail.com)"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & quick command prompt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Krishna Rameshwar Mishra. Built with React, Vite &amp; Tailwind CSS.
          </div>

          <button
            onClick={() => {
              playCyberClick();
              onOpenTerminal();
            }}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open Terminal (CLI)</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
