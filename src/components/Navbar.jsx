import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Sun, Moon } from 'lucide-react';
import { playCyberClick } from '../utils/audio';

export default function Navbar({ onOpenPalette, onOpenResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-2xl border-b border-forest/10 dark:border-white/10 shadow-sm dark:shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Anchor */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-charcoal dark:text-warm-white"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-leaf dark:bg-sun shadow-[0_0_10px_rgba(127,166,58,0.6)] group-hover:scale-125 transition-transform" />
          <span className="tracking-tight text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors">
            Krishna Mishra
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-charcoal-muted dark:text-dark-textMuted px-2 py-0.5 rounded-full bg-forest/5 dark:bg-white/5 border border-forest/10 dark:border-white/10">
            MITAOE '29
          </span>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-cream-card/80 dark:bg-dark-card/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-forest/10 dark:border-white/10 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={playCyberClick}
              className="text-xs font-medium text-charcoal-muted dark:text-dark-textMuted hover:text-forest dark:hover:text-sun px-3.5 py-1.5 rounded-full hover:bg-forest/5 dark:hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Search + Let's Talk */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Animated Light / Dark Mode Toggle */}
          <button
            onClick={() => {
              playCyberClick();
              onToggleTheme();
            }}
            className="p-2 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/40 text-charcoal dark:text-warm-white transition-all shadow-sm hover:scale-105 active:scale-95"
            title={theme === 'dark' ? "Switch to Nature Light Mode" : "Switch to Deep Forest Dark Mode"}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-sun animate-in spin-in-90 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-forest animate-in -spin-in-90 duration-300" />
            )}
          </button>

          {/* Quick Find Key Trigger */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="flex items-center gap-2 text-xs font-mono text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white px-3 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/25 dark:hover:border-white/20 transition-all shadow-sm"
            title="Search Commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-olive dark:text-sun" />
            <kbd className="text-[10px] bg-forest/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-charcoal dark:text-warm-white font-mono">⌘K</kbd>
          </button>

          {/* Let's Talk CTA Button */}
          <a
            href="#contact"
            onClick={playCyberClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm hover:shadow-md active:scale-95 duration-200"
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
            className="p-2.5 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-sun" /> : <Moon className="w-4 h-4 text-forest" />}
          </button>

          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="p-2.5 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-olive dark:text-sun" />
          </button>
          
          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2.5 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-cream-card/98 dark:bg-dark-card/98 backdrop-blur-2xl border-b border-forest/15 dark:border-white/15 space-y-3 mt-2 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  setMobileOpen(false);
                }}
                className="text-xs font-medium text-charcoal dark:text-warm-white hover:text-forest dark:hover:text-sun px-3.5 py-2.5 rounded-xl bg-forest/5 dark:bg-white/5 border border-forest/5 dark:border-white/5 text-center"
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
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl bg-forest/5 dark:bg-white/5 text-charcoal dark:text-warm-white hover:bg-forest/10 dark:hover:bg-white/10 transition-all"
            >
              <span>View Curriculum Vitae</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-3 rounded-xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-warm-white dark:text-forest-dark" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
