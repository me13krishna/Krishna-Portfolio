import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AccountsHub from './components/AccountsHub';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import MatrixRain from './components/MatrixRain';
import { Terminal, Search, Sparkles } from 'lucide-react';
import { playCyberClick } from './utils/audio';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  return (
    <div className="min-h-screen bg-void text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />
      
      {/* Matrix Rain Easter Egg */}
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />

      {/* Main Top Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Content Flow */}
      <main className="relative z-10">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenAccounts={() => {}}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        <About 
          onOpenResume={() => setResumeOpen(true)}
        />

        <AccountsHub />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Floating Quick Action Widget (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 glass-panel p-1.5 rounded-2xl border-white/10 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => {
            playCyberClick();
            setTerminalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all hover:shadow-lg hover:shadow-cyan-950/50"
          title="Open Cyber Terminal"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>CLI</span>
        </button>

        <button
          onClick={() => {
            playCyberClick();
            setPaletteOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-xs font-mono transition-all"
          title="Open Command Palette"
        >
          <Search className="w-3.5 h-3.5 text-purple-400" />
          <span>⌘K</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
        onToggleMatrix={() => setMatrixActive(!matrixActive)}
      />

      <CommandPalette 
        isOpen={paletteOpen} 
        onClose={() => setPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
