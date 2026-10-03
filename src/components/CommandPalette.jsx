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
      title: 'Explore Selected Works',
      sub: 'Qlockain Vault, Startup Mentor AI, StadiumOps, AI Workforce Report',
      icon: <Sparkles className="w-4 h-4 text-[#E2A866]" />,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'qlockain-live',
      title: 'Launch Qlockain (Live on Render)',
      sub: 'qlockain.onrender.com — Blockchain Identity Vault',
      icon: <ExternalLink className="w-4 h-4 text-[#728A7C]" />,
      action: () => { window.open('https://qlockain.onrender.com/', '_blank'); onClose(); }
    },
    {
      id: 'startup-mentor-live',
      title: 'Launch Startup Mentor AI (Live on Render)',
      sub: 'startup-mentor-jftd.onrender.com — AI Blueprint Generator',
      icon: <ExternalLink className="w-4 h-4 text-[#E2A866]" />,
      action: () => { window.open('https://startup-mentor-jftd.onrender.com/', '_blank'); onClose(); }
    },
    {
      id: 'stadiumops-live',
      title: 'Launch StadiumOps AI (Live on Vercel)',
      sub: 'stadiumopsai-xi.vercel.app — Venue & Crowd Intelligence',
      icon: <ExternalLink className="w-4 h-4 text-[#728A7C]" />,
      action: () => { window.open('https://stadiumopsai-xi.vercel.app/', '_blank'); onClose(); }
    },
    {
      id: 'prakrushti-live',
      title: 'Launch Prakrushti (Live on Vercel)',
      sub: 'prakrushti.vercel.app — Hackathon Platform',
      icon: <ExternalLink className="w-4 h-4 text-[#C48B71]" />,
      action: () => { window.open('https://prakrushti.vercel.app/', '_blank'); onClose(); }
    },
    {
      id: 'exp',
      title: 'View Work Experience & Leadership',
      sub: 'Indian Pixel, Drishyam, CodeAlpha, IBM SkillsBuild',
      icon: <Briefcase className="w-4 h-4 text-[#E2A866]" />,
      action: () => { window.location.href = '#experience'; onClose(); }
    },
    {
      id: 'cert-drive',
      title: 'Open Google Drive Credentials Archive',
      sub: 'Verified certifications & transcripts folder',
      icon: <FolderDown className="w-4 h-4 text-[#E2A866]" />,
      action: () => { window.open(personalInfo.certificatesDriveUrl, '_blank'); onClose(); }
    },
    {
      id: 'resume',
      title: 'View & Request Curriculum Vitae',
      sub: 'Academic records, achievements, and technical stack',
      icon: <FileText className="w-4 h-4 text-[#728A7C]" />,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'gh',
      title: 'Open GitHub Profile',
      sub: 'github.com/me13krishna',
      icon: <GithubIcon className="w-4 h-4 text-[#F7F6F2]" />,
      action: () => { window.open(personalInfo.githubUrl, '_blank'); onClose(); }
    },
    {
      id: 'li',
      title: 'Open LinkedIn Profile',
      sub: 'linkedin.com/in/krishnamishra13',
      icon: <LinkedinIcon className="w-4 h-4 text-[#8FA699]" />,
      action: () => { window.open(personalInfo.linkedinUrl, '_blank'); onClose(); }
    },
    {
      id: 'lc',
      title: 'Open LeetCode Profile',
      sub: 'leetcode.com/u/me13_krishna',
      icon: <LeetcodeIcon className="w-4 h-4 text-[#E2A866]" />,
      action: () => { window.open(personalInfo.leetcodeUrl, '_blank'); onClose(); }
    },
    {
      id: 'cc',
      title: 'Open CodeChef Profile',
      sub: 'codechef.com/users/me13_krishna',
      icon: <CodechefIcon className="w-4 h-4 text-[#C48B71]" />,
      action: () => { window.open(personalInfo.codechefUrl, '_blank'); onClose(); }
    },
    {
      id: 'med',
      title: 'Read Medium Publications',
      sub: 'medium.com/@krishna1307mishra',
      icon: <MediumIcon className="w-4 h-4 text-[#8FA699]" />,
      action: () => { window.open(personalInfo.mediumUrl, '_blank'); onClose(); }
    },
    {
      id: 'ig-creator',
      title: 'Follow Creator Page (@yappp.kris)',
      sub: 'Engineering breakdowns & student tutorials',
      icon: <InstagramIcon className="w-4 h-4 text-[#D9A38C]" />,
      action: () => { window.open(personalInfo.creatorInstaUrl, '_blank'); onClose(); }
    },
    {
      id: 'x',
      title: 'Follow on X (Twitter)',
      sub: 'x.com/yapppkris',
      icon: <TwitterIcon className="w-4 h-4 text-[#9B988E]" />,
      action: () => { window.open(personalInfo.twitterUrl, '_blank'); onClose(); }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      sub: personalInfo.email,
      icon: <Mail className="w-4 h-4 text-[#E2A866]" />,
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-[#0E0E10]/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div 
        className="w-full max-w-xl rounded-[28px] bg-[#151518] border border-white/[0.08] shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/[0.06] gap-3">
          <Search className="w-5 h-5 text-[#E2A866] flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section / project..."
            className="flex-1 bg-transparent border-none outline-none text-[#F7F6F2] text-sm font-sans placeholder-[#9B988E]/40 focus:ring-0"
          />
          <kbd className="text-[10px] bg-white/[0.06] px-2 py-0.5 rounded text-[#9B988E] font-mono">
            ESC
          </kbd>
        </div>

        {/* Action Results */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#9B988E] font-mono">
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
                className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/[0.04] transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-[#F7F6F2] group-hover:text-white transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-[#9B988E] truncate max-w-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-[#9B988E] group-hover:text-[#E2A866] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-[#0E0E10]/60 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#9B988E]">
          <span>Press ⌘K or Ctrl+K anytime</span>
          <span className="text-[#E2A866]">Krishna Mishra</span>
        </div>

      </div>

    </div>
  );
}
