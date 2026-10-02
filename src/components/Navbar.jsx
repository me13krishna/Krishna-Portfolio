import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  FileText,
  Send
} from 'lucide-react';
import { playCyberClick, isSoundEnabled, toggleSound } from '../utils/audio';

export default function Navbar({ onOpenTerminal, onOpenPalette, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) playCyberClick();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Accounts", href: "#accounts" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-void/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight font-display text-white"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-cyan-500/25">
            <div className="w-full h-full bg-void rounded-[10px] flex items-center justify-center font-black text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
              KM
            </div>
          </div>
          <span className="font-extrabold tracking-tight">
            Krishna<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={playCyberClick}
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Interactive Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          
          {/* Spotlight Palette Trigger */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white glass-panel px-3 py-1.5 rounded-lg border-white/10 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-300">⌘K</kbd>
          </button>

          {/* Cyber Terminal Button */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-md shadow-cyan-950/40"
            title="Launch Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>CLI</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-lg text-slate-400 hover:text-white glass-panel border-white/10 hover:border-purple-500/40 transition-all"
            title={soundOn ? "Mute SFX" : "Enable SFX"}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Resume CTA */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              playCyberClick();
              onOpenTerminal();
            }}
            className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 rounded-lg glass-panel text-slate-300 border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-deep/95 backdrop-blur-2xl border-b border-white/10 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  setMobileOpen(false);
                }}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenPalette();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs py-2.5 rounded-lg bg-white/10 text-slate-200"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Spotlight Search (Ctrl+K)</span>
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-slate-950"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
