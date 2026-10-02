import React, { useState, useEffect } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetcodeIcon } from './SocialIcons';
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
              B.Tech Computer Science (Software Engineering) &bull; MITAOE
            </p>
          </div>

          {/* Pune Live Time Badge */}
          <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300">Pune, India (IST):</span>
            <span className="text-cyan-300 font-bold">{time || '04:00 AM'}</span>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/me13krishna"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/krishnamishra13"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/me13krishna/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={playCyberClick}
              className="p-2 rounded-lg glass-panel hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & quick command prompt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Krishna Rameshwar Mishra. Designed &amp; Engineered with React &amp; Tailwind.
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
