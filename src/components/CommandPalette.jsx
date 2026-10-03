import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  Terminal, 
  FileText, 
  Mail, 
  Sparkles, 
  ExternalLink, 
  Code2,
  FolderDown,
  Briefcase
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetcodeIcon, 
  CodechefIcon, 
  MediumIcon, 
  InstagramIcon, 
  TwitterIcon 
} from './SocialIcons';
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
      title: 'Explore Featured Projects',
      sub: 'Qlockain Vault, Startup Mentor AI, StadiumOps, AI Workforce Report',
      icon: <Sparkles className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'qlockain-live',
      title: 'Launch Qlockain (Live on Render)',
      sub: 'qlockain.onrender.com — Blockchain Identity Vault',
      icon: <ExternalLink className="w-4 h-4 text-leaf dark:text-leaf" />,
      action: () => { window.open('https://qlockain.onrender.com/', '_blank'); onClose(); }
    },
    {
      id: 'startup-mentor-live',
      title: 'Launch Startup Mentor AI (Live on Render)',
      sub: 'startup-mentor-jftd.onrender.com — AI Blueprint Generator',
      icon: <ExternalLink className="w-4 h-4 text-gold dark:text-sun" />,
      action: () => { window.open('https://startup-mentor-jftd.onrender.com/', '_blank'); onClose(); }
    },
    {
      id: 'stadiumops-live',
      title: 'Launch StadiumOps AI (Live on Vercel)',
      sub: 'stadiumopsai-xi.vercel.app — Venue & Crowd Intelligence',
      icon: <ExternalLink className="w-4 h-4 text-olive dark:text-leaf" />,
      action: () => { window.open('https://stadiumopsai-xi.vercel.app/', '_blank'); onClose(); }
    },
    {
      id: 'prakrushti-live',
      title: 'Launch Prakrushti (Live on Vercel)',
      sub: 'prakrushti.vercel.app — Hackathon Platform',
      icon: <ExternalLink className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => { window.open('https://prakrushti.vercel.app/', '_blank'); onClose(); }
    },
    {
      id: 'exp',
      title: 'View Work Experience & Leadership',
      sub: 'Indian Pixel, Drishyam, CodeAlpha, IBM SkillsBuild',
      icon: <Briefcase className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => { window.location.href = '#experience'; onClose(); }
    },
    {
      id: 'cert-drive',
      title: 'Open Google Drive Credentials Archive',
      sub: 'Verified certifications & transcripts folder',
      icon: <FolderDown className="w-4 h-4 text-sun dark:text-sun" />,
      action: () => { window.open(personalInfo.certificatesDriveUrl, '_blank'); onClose(); }
    },
    {
      id: 'resume',
      title: 'View Curriculum Vitae',
      sub: 'Academic records, achievements, and technical stack',
      icon: <FileText className="w-4 h-4 text-olive dark:text-leaf" />,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'gh',
      title: 'Open GitHub Profile',
      sub: 'github.com/me13krishna',
      icon: <GithubIcon className="w-4 h-4 text-charcoal dark:text-warm-white" />,
      action: () => { window.open(personalInfo.githubUrl, '_blank'); onClose(); }
    },
    {
      id: 'li',
      title: 'Open LinkedIn Profile',
      sub: 'linkedin.com/in/krishnamishra13',
      icon: <LinkedinIcon className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => { window.open(personalInfo.linkedinUrl, '_blank'); onClose(); }
    },
    {
      id: 'lc',
      title: 'Open LeetCode Profile',
      sub: 'leetcode.com/u/me13_krishna',
      icon: <LeetcodeIcon className="w-4 h-4 text-sun" />,
      action: () => { window.open(personalInfo.leetcodeUrl, '_blank'); onClose(); }
    },
    {
      id: 'cc',
      title: 'Open CodeChef Profile',
      sub: 'codechef.com/users/me13_krishna',
      icon: <CodechefIcon className="w-4 h-4 text-leaf" />,
      action: () => { window.open(personalInfo.codechefUrl, '_blank'); onClose(); }
    },
    {
      id: 'med',
      title: 'Read Medium Publications',
      sub: 'medium.com/@krishna1307mishra',
      icon: <MediumIcon className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => { window.open(personalInfo.mediumUrl, '_blank'); onClose(); }
    },
    {
      id: 'ig-creator',
      title: 'Follow Creator Page (@yappp.kris)',
      sub: 'Engineering breakdowns & student tutorials',
      icon: <InstagramIcon className="w-4 h-4 text-olive" />,
      action: () => { window.open(personalInfo.creatorInstaUrl, '_blank'); onClose(); }
    },
    {
      id: 'copy-email',
      title: 'Copy Direct Email Address',
      sub: personalInfo.email,
      icon: <Mail className="w-4 h-4 text-forest dark:text-sun" />,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onClose();
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-charcoal/60 dark:bg-dark-bg/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div 
        className="w-full max-w-xl rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-forest/10 dark:border-white/10 gap-3">
          <Search className="w-5 h-5 text-forest dark:text-sun flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section / project..."
            className="flex-1 bg-transparent border-none outline-none text-charcoal dark:text-warm-white text-sm font-sans placeholder-charcoal-muted/40 dark:placeholder-dark-textMuted/40 focus:ring-0"
          />
          <kbd className="text-[10px] bg-forest/5 dark:bg-white/10 px-2 py-0.5 rounded text-charcoal-muted dark:text-dark-textMuted font-mono">
            ESC
          </kbd>
        </div>

        {/* Action Results */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-charcoal-muted dark:text-dark-textMuted font-mono">
              No matching actions found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playCyberClick();
                  item.action();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-forest/5 dark:hover:bg-white/5 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-charcoal-muted dark:text-dark-textMuted truncate max-w-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-charcoal-muted dark:text-dark-textMuted group-hover:text-forest dark:group-hover:text-sun group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-forest/[0.03] dark:bg-dark-bg/60 border-t border-forest/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted">
          <span>Press ⌘K or Ctrl+K anytime</span>
          <span className="text-forest dark:text-sun font-medium">Krishna Mishra</span>
        </div>

      </div>

    </div>
  );
}
