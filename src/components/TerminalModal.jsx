import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, accounts, projects, experiences, certifications } from '../data/portfolioData';
import { playCyberClick, playCyberBeep, playSuccessFanfare } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose, onOpenResume, onToggleMatrix }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'KM-OS v3.0 (x86_64-pc-none-elf) - Cyber Terminal' },
    { type: 'system', text: 'Type "help" for a list of available commands.' },
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

    const newHistory = [...history, { type: 'input', text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help       - Show this command reference
  about      - Display bio, education & college info
  skills     - View programming languages, AI & tech stack
  experience - View work experience & internships (Indian Pixel, IBM, etc.)
  projects   - List completed & featured projects (watsonx, Blockchain, etc.)
  accounts   - View developer profiles & socials (LeetCode, CodeChef, Medium, etc.)
  certs      - View verified certificates & Google Drive link
  resume     - View / request resume
  matrix     - Toggle green matrix digital rain mode
  sudo hire  - Fast-track hire approval (Try it!)
  clear      - Clear the console screen
  exit       - Close this terminal session`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `NAME: ${personalInfo.name}
ROLE: ${personalInfo.role}
COLLEGE: ${personalInfo.college}
DEGREE: ${personalInfo.degree} (Batch ${personalInfo.batch})
CGPA: ${personalInfo.cgpa} / 10.0
LOCATION: ${personalInfo.location}
STATUS: ${personalInfo.status}
SUMMARY: Computer Science undergraduate focused on AI, Generative AI, and software engineering.`
        });
        break;

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          text: `WORK EXPERIENCE & INTERNSHIPS:
${experiences.map(e => `• [${e.period}] ${e.role} @ ${e.company} (${e.type})\n  -> ${e.description}`).join('\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL SKILLS & TOOLS:
  • Programming: Python, JavaScript (ES6+), C, Java
  • Web & APIs: HTML, CSS, React, Vite, Node.js, Express.js, REST APIs
  • AI / ML: Generative AI, Machine Learning, Prompt Engineering, Agentic AI, Computer Vision
  • AI Platforms: IBM watsonx Orchestrate, IBM Cloud, Gemini API
  • Data: Data Analysis, Tableau, Orange Data Mining
  • Dev Tools: Git, GitHub, Jupyter Notebook, VS Code`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map(p => `• [${p.category}] ${p.title}\n  -> ${p.tagline}\n  Resource: ${p.liveUrl}`).join('\n\n')
        });
        break;

      case 'accounts':
        newHistory.push({
          type: 'output',
          text: `DEVELOPER & SOCIAL PROFILES:
  • GitHub: ${personalInfo.githubUrl}
  • LinkedIn: ${personalInfo.linkedinUrl}
  • LeetCode: ${personalInfo.leetcodeUrl}
  • CodeChef: ${personalInfo.codechefUrl}
  • HackerRank: ${personalInfo.hackerrankUrl}
  • Medium: ${personalInfo.mediumUrl}
  • X (Twitter): ${personalInfo.twitterUrl}
  • Instagram (Creator): ${personalInfo.creatorInstaUrl}
  • Instagram (Personal): ${personalInfo.personalInstaUrl}
  • Certifications Drive: ${personalInfo.certificatesDriveUrl}`
        });
        break;

      case 'certs':
      case 'certifications':
      case 'drive':
        newHistory.push({
          type: 'output',
          text: `VERIFIED CREDENTIALS ARCHIVE:
  Google Drive URL: ${personalInfo.certificatesDriveUrl}
  Track: AWS GenAI, IBM Cloud/AI, Cisco Networking Academy, Job Simulations (JPMorganChase, Deloitte), Anthropic Claude, nasscom Digit 101.`
        });
        break;

      case 'resume':
        newHistory.push({ type: 'output', text: 'Opening resume modal...' });
        onOpenResume();
        break;

      case 'matrix':
        newHistory.push({ type: 'output', text: 'Toggling digital matrix rain effect...' });
        if (onToggleMatrix) onToggleMatrix();
        break;

      case 'sudo hire':
      case 'hire':
        playSuccessFanfare();
        try {
          confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#00f0ff', '#10b981', '#f59e0b']
          });
        } catch (e) {}
        newHistory.push({
          type: 'output',
          text: `[ACCESS GRANTED] 🎉
Krishna Rameshwar Mishra is ready to create value for your team!
Contact: ${personalInfo.email}`
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
          text: `Command not recognized: "${rawCmd}". Type "help" to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Terminal Window Box */}
      <div 
        className="w-full max-w-3xl h-[520px] rounded-3xl bg-surface border border-borderMuted shadow-2xl flex flex-col overflow-hidden relative"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-void/80 border-b border-borderMuted select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { playCyberClick(); onClose(); }}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:brightness-125 transition-all" 
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-ivory-dim font-semibold">
              <TerminalIcon className="w-3.5 h-3.5 text-ember" />
              <span>krishna@workstation:~ (bash)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-ivory-muted border border-white/10">
              Interactive
            </span>
            <button
              onClick={() => { playCyberClick(); onClose(); }}
              className="text-ivory-muted hover:text-white p-1 rounded hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-5 font-mono text-xs overflow-y-auto space-y-2 select-text">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">
              {line.type === 'system' && (
                <span className="text-ivory-muted">{line.text}</span>
              )}
              {line.type === 'input' && (
                <span className="text-amberGold font-bold">{line.text}</span>
              )}
              {line.type === 'output' && (
                <span className="text-ivory">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-400">{line.text}</span>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-ember pt-1">
            <span className="font-bold text-white">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0"
              placeholder="Type command ('help', 'projects', 'skills', 'about')..."
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="p-3 bg-void/60 border-t border-borderMuted flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-ivory-muted select-none">
          <span className="text-ivory-muted">Quick:</span>
          {['help', 'about', 'skills', 'experience', 'projects', 'accounts', 'certs', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                playCyberClick();
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-ember hover:text-white text-ivory-dim border border-white/5 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
