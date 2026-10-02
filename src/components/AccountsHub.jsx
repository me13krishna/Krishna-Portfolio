import React, { useState } from 'react';
import { 
  Code2, 
  Video, 
  Terminal, 
  FolderDown, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Award
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  TwitterIcon, 
  LeetcodeIcon 
} from './SocialIcons';
import { accounts } from '../data/portfolioData';
import { playCyberClick, playCyberBeep } from '../utils/audio';

export default function AccountsHub() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text, e) => {
    e.preventDefault();
    e.stopPropagation();
    playCyberBeep();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'code':
        return <LeetcodeIcon className="w-5 h-5 text-amber-400" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-pink-400" />;
      case 'camera':
        return <Video className="w-5 h-5 text-fuchsia-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'twitter':
        return <TwitterIcon className="w-5 h-5" />;
      case 'folder':
        return <FolderDown className="w-5 h-5 text-cyan-400" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="accounts" className="py-20 relative overflow-hidden bg-deep/40">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Footprint &amp; Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Accounts &amp; Profiles</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All my programming platforms, competitive coding profiles, open-source repositories, 
            personal links, and upcoming developer content creation hub in one unified place.
          </p>
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className={`group relative rounded-2xl glass-panel p-6 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                acc.highlight 
                  ? 'border-cyan-500/30 shadow-lg shadow-cyan-950/20 hover:border-cyan-400/60 hover:shadow-cyan-500/15' 
                  : 'border-white/10 hover:border-purple-500/40 hover:shadow-purple-500/15'
              }`}
            >
              {/* Card top subtle color stripe */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${acc.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Header inside card: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform text-white shadow-inner">
                    {getIcon(acc.icon)}
                  </div>
                  
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-semibold border ${
                    acc.id === 'insta-creator' 
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40 animate-pulse'
                      : 'bg-white/5 text-slate-300 border-white/10'
                  }`}>
                    {acc.badge}
                  </span>
                </div>

                {/* Account Details */}
                <div className="space-y-1 mb-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {acc.category}
                  </p>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {acc.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {acc.description}
                </p>
              </div>

              {/* Handle with quick Copy button */}
              <div className="pt-3 border-t border-white/5 mt-auto">
                <div className="flex items-center justify-between gap-2 mb-3 bg-void/60 px-3 py-1.5 rounded-lg border border-white/5 text-xs font-mono">
                  <span className="text-slate-300 truncate" title={acc.handle}>
                    {acc.handle}
                  </span>
                  <button
                    onClick={(e) => handleCopy(acc.id, acc.handle, e)}
                    className="text-slate-400 hover:text-cyan-300 transition-colors p-1 rounded hover:bg-white/10 flex-shrink-0"
                    title="Copy Handle"
                  >
                    {copiedId === acc.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Visit Button */}
                <a
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playCyberClick}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 text-xs font-semibold transition-all group-hover:shadow-md"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Creator Note Banner */}
        <div className="mt-12 rounded-2xl glass-panel p-6 border border-fuchsia-500/30 bg-gradient-to-r from-fuchsia-950/20 via-purple-950/30 to-slate-900/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center flex-shrink-0 text-fuchsia-300">
              <Video className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white font-bold text-base">Content Creation Journey Starting Soon</h4>
                <span className="text-[10px] font-mono bg-fuchsia-500/30 text-fuchsia-200 px-2 py-0.5 rounded-full border border-fuchsia-400/40 font-semibold">
                  Exciting Era
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Preparing short-form engineering breakdowns, AI tool tutorials, campus tech life, and daily coding solutions. Stay tuned or drop a follow!
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:brightness-110 text-white font-semibold text-xs shadow-lg shadow-fuchsia-500/20 transition-all active:scale-95"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow Creator Page</span>
          </a>
        </div>

      </div>
    </section>
  );
}
