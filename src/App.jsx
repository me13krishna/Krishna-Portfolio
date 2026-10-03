import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { Terminal, Search } from 'lucide-react';
import { playCyberClick } from './utils/audio';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-void text-ivory relative selection:bg-ember/30 selection:text-white bg-grain">
      
      {/* Subtle Architectural Grid Lines */}
      <div className="fixed inset-0 bg-architect-grid pointer-events-none opacity-40 z-0" />
      
      {/* Smooth Editorial Custom Cursor */}
      <CustomCursor />

      {/* Main Top Sticky Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Primary Editorial Content Flow */}
      <main className="relative z-10">
        
        {/* 1. Hero Statement & Art-Directed Portrait */}
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        {/* 2. Core Pillars of Execution / Proof of Craft */}
        <ProofStrip />

        {/* 3. Featured Editorial Projects Showcase & Directory (All 12) */}
        <Projects />

        {/* 4. Problem Solving Arena: Think -> Solve -> Ship */}
        <ProblemSolving />

        {/* 5. Authentic Story & Academic Journey */}
        <About 
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 6. Experience & Leadership Timeline */}
        <Experience />

        {/* 7. Categorized Technologies & Systems */}
        <Skills />

        {/* 8. Verified Credentials & Google Drive Repository */}
        <Certifications />

        {/* 9. Direct Outreach & Message Channels */}
        <Contact />

      </main>

      {/* 10. Massive CTA Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Floating Quick Action Widget (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-surface/90 p-1.5 rounded-full border border-borderMuted shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => {
            playCyberClick();
            setTerminalOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-void text-ivory-dim hover:text-white border border-borderMuted text-xs font-mono font-medium transition-all"
          title="Open CLI Terminal"
        >
          <Terminal className="w-3.5 h-3.5 text-ember" />
          <span>CLI</span>
        </button>

        <button
          onClick={() => {
            playCyberClick();
            setPaletteOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/5 text-ivory-muted hover:text-white text-xs font-mono transition-all"
          title="Open Command Palette"
        >
          <Search className="w-3.5 h-3.5 text-amberGold" />
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
