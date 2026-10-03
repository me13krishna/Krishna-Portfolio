import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Sun, Moon, FileText } from 'lucide-react';
import { playCyberClick } from '../utils/audio';

export default function Navbar({ onOpenPalette, onOpenResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-2xl border-b border-forest/10 dark:border-white/10 shadow-sm dark:shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram "KM" */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-3 text-base font-bold tracking-tight text-charcoal dark:text-warm-white"
        >
          <div className="w-8 h-8 rounded-xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
            KM
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors leading-none">
              Krishna Mishra
            </span>
            <span className="text-[10px] font-mono text-charcoal-muted dark:text-dark-textMuted tracking-normal mt-0.5">
              Software &bull; AI
            </span>
          </div>
        </a>

        {/* Minimalist Desktop Navigation with Active Section Indicator */}
        <nav className="hidden lg:flex items-center gap-1 bg-cream-card/90 dark:bg-dark-card/90 backdrop-blur-xl px-3 py-1.5 rounded-full border border-forest/10 dark:border-white/10 shadow-soft-card">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playCyberClick}
                className={`relative text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-forest dark:text-sun font-semibold bg-forest/5 dark:bg-sun/10 shadow-sm'
                    : 'text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white hover:bg-forest/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-forest dark:bg-sun rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Resume + Let's Talk */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Animated Light / Dark Mode Toggle */}
          <button
            onClick={() => {
              playCyberClick();
              onToggleTheme();
            }}
            className="p-2 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/40 text-charcoal dark:text-warm-white transition-all shadow-sm hover:scale-105 active:scale-95"
            title={theme === 'dark' ? "Switch to Nature Light Mode" : "Switch to Deep Obsidian Dark Mode"}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-sun animate-in spin-in-90 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-forest animate-in -spin-in-90 duration-300" />
            )}
          </button>

          {/* Quick Find (⌘K) */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="flex items-center gap-1.5 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white px-3 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/25 dark:hover:border-white/20 transition-all shadow-sm"
            title="Search Commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-olive dark:text-sun" />
            <kbd className="text-[10px] bg-forest/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-charcoal dark:text-warm-white font-mono">⌘K</kbd>
          </button>

          {/* Secondary CTA: Resume Modal */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full bg-cream-card dark:bg-dark-card hover:bg-forest/5 dark:hover:bg-white/5 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-all"
            title="Review Resume"
          >
            <FileText className="w-3.5 h-3.5 text-olive dark:text-sun" />
            <span>Resume</span>
          </button>

          {/* Primary CTA: Let's Talk */}
          <a
            href="#contact"
            onClick={playCyberClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4.5 py-2 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm hover:shadow-md active:scale-95 duration-200"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-warm-white dark:text-forest-dark" />
          </a>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              playCyberClick();
              onToggleTheme();
            }}
            className="p-2 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-sun" /> : <Moon className="w-4 h-4 text-forest" />}
          </button>

          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="p-2 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-olive dark:text-sun" />
          </button>
          
          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-cream-card/98 dark:bg-dark-card/98 backdrop-blur-2xl border-b border-forest/15 dark:border-white/15 space-y-3 mt-2 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playCyberClick();
                    setMobileOpen(false);
                  }}
                  className={`text-xs font-medium px-3.5 py-2.5 rounded-xl border text-center transition-all ${
                    isActive
                      ? 'bg-forest/10 dark:bg-sun/15 text-forest dark:text-sun border-forest/20 dark:border-sun/30 font-semibold'
                      : 'bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white border-forest/5 dark:border-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white hover:bg-forest/10 dark:hover:bg-white/10 transition-all border border-forest/10 dark:border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-olive dark:text-sun" />
              <span>Review Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-3 rounded-xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-4 h-4 text-warm-white dark:text-forest-dark" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
