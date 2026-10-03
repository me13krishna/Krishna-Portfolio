import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Search } from 'lucide-react';
import { playCyberClick } from '../utils/audio';

export default function Navbar({ onOpenTerminal, onOpenPalette, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "Problem Solving", href: "#problem-solving" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#skills" },
    { name: "Credentials", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-void/85 backdrop-blur-xl border-b border-borderMuted shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Editorial Brand Anchor */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold font-display tracking-tight text-white"
        >
          <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_8px_#FF5500] group-hover:scale-125 transition-transform" />
          <span className="tracking-tight uppercase text-ivory group-hover:text-ember transition-colors">
            Krishna Mishra
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-ivory-muted px-2 py-0.5 rounded border border-white/10">
            MITAOE '29
          </span>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-borderMuted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={playCyberClick}
              className="text-xs font-medium text-ivory-muted hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Spotlight Key trigger */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="flex items-center gap-2 text-xs font-mono text-ivory-muted hover:text-white px-3 py-1.5 rounded-lg border border-borderMuted hover:border-white/20 transition-all"
            title="Search Commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-ember" />
            <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-ivory">⌘K</kbd>
          </button>

          {/* Connect CTA Button */}
          <a
            href="#contact"
            onClick={playCyberClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white text-void hover:bg-ember hover:text-white transition-all shadow-md active:scale-95 duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="p-2 rounded-lg bg-surface border border-borderMuted text-ivory"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-ember" />
          </button>
          
          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 rounded-lg bg-surface border border-borderMuted text-ivory"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-surface/98 backdrop-blur-2xl border-b border-borderMuted space-y-3 mt-2 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  setMobileOpen(false);
                }}
                className="text-xs font-medium text-ivory-dim hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-white/10 text-ivory hover:bg-white/20 transition-all"
            >
              <span>View Official Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl bg-ember text-white"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
