import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Terminal, 
  FileText, 
  Mail, 
  Sparkles, 
  ExternalLink, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenResume }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        playCyberBeep();
        if (isOpen) onClose();
        else onClose(false);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'proj',
      title: 'Explore Projects',
      sub: 'Jump to software & platform projects',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'acc',
      title: 'Developer Accounts & Profiles',
      sub: 'View LeetCode, GitHub, Instagrams, X',
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      action: () => { window.location.href = '#accounts'; onClose(); }
    },
    {
      id: 'cli',
      title: 'Launch Interactive CLI Terminal',
      sub: 'Execute bash-like portfolio commands',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => { onClose(); onOpenTerminal(); }
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      sub: 'Open resume snapshot and PDF link',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      sub: personalInfo.email,
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onClose();
        alert('Email copied: ' + personalInfo.email);
      }
    },
    {
      id: 'gh',
      title: 'Open GitHub Profile',
      sub: 'github.com/me13krishna',
      icon: <GithubIcon className="w-4 h-4 text-slate-300" />,
      action: () => { window.open('https://github.com/me13krishna', '_blank'); onClose(); }
    },
    {
      id: 'li',
      title: 'Open LinkedIn Profile',
      sub: 'linkedin.com/in/krishnamishra13',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
      action: () => { window.open('https://linkedin.com/in/krishnamishra13', '_blank'); onClose(); }
    },
    {
      id: 'party',
      title: 'Trigger Confetti Burst 🎉',
      sub: 'Add some celebratory vibes',
      icon: <Sparkles className="w-4 h-4 text-fuchsia-400" />,
      action: () => {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
        onClose();
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-void/80 backdrop-blur-md animate-in fade-in duration-150">
      
      <div 
        className="w-full max-w-xl rounded-2xl glass-panel-glow bg-deep/95 border border-cyan-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent border-none outline-none text-white text-sm font-sans placeholder-slate-500 focus:ring-0"
          />
          <kbd className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400 font-mono">
            ESC
          </kbd>
        </div>

        {/* Action Results */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              No matching commands or actions found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playCyberClick();
                  item.action();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {item.sub}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-surface/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use ⌘K / Ctrl+K anytime</span>
          <span>KM-Command-Palette</span>
        </div>

      </div>

    </div>
  );
}
