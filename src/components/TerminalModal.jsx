import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projects, experiences } from '../data/portfolioData';
import { playCyberClick, playCyberBeep, playSuccessFanfare } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose, onOpenResume }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Krishna Mishra — Developer Console [v2.5 Nature × Tech Edition]' },
    { type: 'system', text: 'Type "help" for a list of available exploration commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIdx < commandHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput('');
      }
      return;
    }

    if (e.key !== 'Enter') return;
    
    playCyberBeep();
    const rawCmd = input.trim();
    const cmd = rawCmd.toLowerCase();

    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);

    const newHistory = [...history, { type: 'input', text: `krishna@workstation:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help       - Show this command reference
  about      - Display background, education & MITAOE info
  skills     - View languages, AI platforms & stack
  experience - View journey & roles (Indian Pixel, Drishyam, etc.)
  projects   - List flagship systems (Qlockain, watsonx Startup Mentor, etc.)
  contact    - View direct channels & socials
  resume     - Open curriculum vitae dossier
  hire       - Fast-track collaboration
  clear      - Clear the console
  exit       - Close this console`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `NAME: ${personalInfo.name}
ROLE: ${personalInfo.role}
INSTITUTION: ${personalInfo.college} (${personalInfo.batch})
LOCATION: ${personalInfo.location}
SUMMARY: ${personalInfo.summary}`
        });
        break;

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          text: `WORK EXPERIENCE & VENTURES:
${experiences.map(e => `• [${e.period}] ${e.role} @ ${e.company}\n  -> ${e.description}`).join('\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL STACK & CRAFT (FROM RESUME):
  • Programming: Python, JavaScript, C, Java
  • Web: HTML, CSS, React, Vite, Node.js, Express.js, REST APIs
  • AI/ML: Generative AI, Machine Learning, Prompt Engineering, Agentic AI, Computer Vision
  • AI Platforms: IBM watsonx, IBM Cloud, Gemini API
  • Data: Data Analysis, Tableau, Orange Data Mining
  • Tools: Git, GitHub, Jupyter Notebook, VS Code`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map(p => `• [${p.category}] ${p.title}\n  -> ${p.tagline}\n  Resource: ${p.liveUrl}`).join('\n\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CHANNELS & PROFILES:
  • Email: ${personalInfo.email}
  • LinkedIn: ${personalInfo.linkedinUrl}
  • GitHub: ${personalInfo.githubUrl}
  • LeetCode: ${personalInfo.leetcodeUrl}
  • CodeChef: ${personalInfo.codechefUrl}
  • Medium: ${personalInfo.mediumUrl}
  • Certificates Drive: ${personalInfo.certificatesDriveUrl}`
        });
        break;

      case 'resume':
        newHistory.push({ type: 'output', text: 'Opening resume dossier...' });
        onOpenResume();
        break;

      case 'hire':
        playSuccessFanfare();
        try {
          confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.5 },
            colors: ['#E8C547', '#7FA63A', '#173D2B']
          });
        } catch (e) {}
        newHistory.push({
          type: 'output',
          text: `[READY TO BUILD] ✨
Krishna Mishra is open for engineering roles and high-impact collaborations.
Contact directly: ${personalInfo.email}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" to see available commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 dark:bg-dark-bg/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Terminal Window Box */}
      <div 
        className="w-full max-w-3xl h-[520px] rounded-[28px] bg-cream-card dark:bg-dark-card border border-forest/15 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden relative text-left"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-forest/[0.04] dark:bg-dark-bg/80 border-b border-forest/10 dark:border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { playCyberClick(); onClose(); }}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" 
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-sun/80" />
            <div className="w-3 h-3 rounded-full bg-leaf/80" />
            <div className="flex items-center gap-2 ml-4 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted">
              <TerminalIcon className="w-3.5 h-3.5 text-forest dark:text-sun" />
              <span>krishna@workstation:~</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 text-forest dark:text-sun border border-forest/10 dark:border-white/10 font-medium">
              Console
            </span>
            <button
              onClick={() => { playCyberClick(); onClose(); }}
              className="text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white p-1 rounded-full hover:bg-forest/5 dark:hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-6 font-mono text-xs overflow-y-auto space-y-2 select-text">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">
              {line.type === 'system' && (
                <span className="text-charcoal-muted dark:text-dark-textMuted">{line.text}</span>
              )}
              {line.type === 'input' && (
                <span className="text-forest dark:text-sun font-semibold">{line.text}</span>
              )}
              {line.type === 'output' && (
                <span className="text-charcoal dark:text-warm-white">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-600 dark:text-rose-400">{line.text}</span>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-forest dark:text-sun pt-1">
            <span className="text-leaf font-mono font-bold">krishna@workstation:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-charcoal dark:text-warm-white font-mono text-xs focus:ring-0 p-0"
              placeholder="Type command ('help', 'projects', 'about')..."
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="p-3.5 bg-forest/[0.02] dark:bg-dark-bg/60 border-t border-forest/10 dark:border-white/10 flex flex-wrap items-center gap-2 text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted select-none">
          <span>Suggestions:</span>
          {['help', 'about', 'skills', 'experience', 'projects', 'contact', 'resume', 'hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                playCyberClick();
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-2.5 py-1 rounded-lg bg-forest/5 dark:bg-white/5 hover:bg-forest dark:hover:bg-sun hover:text-warm-white dark:hover:text-forest-dark text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
