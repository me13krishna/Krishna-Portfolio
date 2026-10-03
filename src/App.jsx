import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
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
import { Search, Sparkles } from 'lucide-react';
import { playCyberClick } from './utils/audio';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Initialize Lenis buttery-smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Keyboard shortcut for Command Palette (Cmd/Ctrl + K)
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F7F6F2] relative selection:bg-[#E2A866]/25 selection:text-white bg-grain overflow-x-hidden">
      
      {/* Subtle Architectural Grid Lines - Restrained & Warm */}
      <div className="fixed inset-0 bg-architect-grid pointer-events-none opacity-30 z-0" />
      
      {/* Ambient Atmospheric Lighting (Sage + Amber) */}
      <div className="fixed top-0 right-1/4 w-[700px] h-[700px] bg-[#728A7C]/[0.04] rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[600px] bg-[#E2A866]/[0.035] rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Smooth Editorial Custom Cursor */}
      <CustomCursor />

      {/* Main Top Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Primary Narrative & Content Flow */}
      <main className="relative z-10">
        
        {/* 1. Hero Statement & Art-Directed Portrait of Krishna */}
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        {/* 2. Proof of Craft / Core Pillars (Build • Solve • Compete • Create) */}
        <ProofStrip />

        {/* 3. Selected Works: Flagship Magazine Cases + 12-Project Directory */}
        <Projects />

        {/* 4. Problem Solving Arena: Think -> Solve -> Ship (LeetCode, CodeChef, HackerRank) */}
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

      {/* 10. Warm Poetic Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Quiet Floating Quick Navigation Pill (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-[#151518]/90 p-1.5 rounded-full border border-white/[0.08] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#E2A866]/30">
        <button
          onClick={() => {
            playCyberClick();
            setPaletteOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C21] hover:bg-[#23232A] text-[#9B988E] hover:text-[#F7F6F2] text-xs font-mono transition-all"
          title="Quick Navigation (⌘K)"
        >
          <Search className="w-3.5 h-3.5 text-[#E2A866]" />
          <span>Quick Find</span>
          <kbd className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[#E3E1D8]">⌘K</kbd>
        </button>

        <button
          onClick={() => {
            playCyberClick();
            setResumeOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/5 text-[#9B988E] hover:text-[#F7F6F2] text-xs font-sans transition-all"
          title="Review Official Resume"
        >
          <Sparkles className="w-3 h-3 text-[#728A7C]" />
          <span>Resume</span>
        </button>
      </div>

      {/* Modals */}
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
