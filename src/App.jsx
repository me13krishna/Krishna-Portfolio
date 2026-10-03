import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { Search, Sparkles } from 'lucide-react';
import { playCyberClick } from './utils/audio';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('km_portfolio_theme');
      if (stored === 'dark' || stored === 'light') return stored;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light'; // Light mode is primary
  });

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('km_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('km_portfolio_theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Lenis smooth scrolling
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
    <div className="min-h-screen bg-cream dark:bg-dark-bg text-charcoal dark:text-warm-white relative selection:bg-leaf/25 dark:selection:bg-sun/25 bg-grain transition-colors duration-300 overflow-x-hidden">
      
      {/* Top Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-forest via-leaf to-sun dark:from-sun dark:via-leaf dark:to-forest z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Subtle Natural Grid Pattern */}
      <div className="fixed inset-0 bg-natural-grid pointer-events-none opacity-40 z-0" />
      
      {/* Atmospheric Sunlight & Canopy Glows */}
      <div className="fixed top-0 right-1/4 w-[700px] h-[700px] bg-sunlight-radial pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[600px] bg-canopy-glow pointer-events-none z-0" />

      {/* Smooth Custom Cursor on Desktop */}
      <CustomCursor />

      {/* a) Sticky Minimal Navbar */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Primary Narrative & Content Flow in Exact Required Order */}
      <main id="main-content" className="relative z-10">
        
        {/* b) Hero: Value proposition, headline options, 2 CTAs, status chip, social bar */}
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        {/* c) Selected Work: Flagship case studies with STAR modal & filterable 12 projects */}
        <Projects />

        {/* d) About: Short human story ~120 words, optimized portrait, 4 quick facts */}
        <About 
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* e) Skills/Stack: Grouped with real application context instead of fake percentage bars */}
        <Skills />

        {/* f) Experience / Education / Achievements: Vertical timeline, quantified impact, drive folder */}
        <Experience />

        {/* g) Now / Currently Building: Active sprints + Medium notes teaser */}
        <CurrentlyBuilding />

        {/* h) Contact: Strong headline, copy-to-clipboard email, socials, working Netlify form */}
        <Contact />

      </main>

      {/* i) Footer: Minimal, back-to-top, copyright, designed & built by Krishna */}
      <Footer />

      {/* Floating Quick Navigation Pill (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-cream-card/90 dark:bg-dark-card/90 p-1.5 rounded-full border border-forest/10 dark:border-white/10 shadow-soft-card backdrop-blur-xl transition-all duration-300 hover:border-leaf/40 dark:hover:border-sun/40">
        <button
          onClick={() => {
            playCyberClick();
            setPaletteOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream dark:bg-dark-cardElevated hover:bg-cream-subtle dark:hover:bg-dark-card text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white text-xs font-mono transition-all"
          title="Quick Navigation (⌘K)"
        >
          <Search className="w-3.5 h-3.5 text-forest dark:text-sun" />
          <span>Quick Find</span>
          <kbd className="text-[10px] bg-forest/5 dark:bg-white/10 border border-forest/10 dark:border-white/10 px-1.5 py-0.5 rounded text-charcoal dark:text-warm-white">⌘K</kbd>
        </button>

        <button
          onClick={() => {
            playCyberClick();
            setResumeOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-forest/5 dark:hover:bg-white/5 text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white text-xs font-sans transition-all"
          title="Review Curriculum Vitae"
        >
          <Sparkles className="w-3 h-3 text-leaf dark:text-sun" />
          <span>Resume</span>
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
