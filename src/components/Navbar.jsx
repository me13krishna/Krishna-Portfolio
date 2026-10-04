import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, FileText, Sparkles, Clock, Leaf } from 'lucide-react';
import { getNaturalAtmosphere } from '../utils/natureTime';
import { playCyberClick } from '../utils/audio';

export default function Navbar({ 
  onOpenResume, 
  theme, 
  onToggleTheme, 
  isAutoSync, 
  onResetAutoSync 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [atmosphere, setAtmosphere] = useState(() => getNaturalAtmosphere());

  // Update atmosphere every 60 seconds
  useEffect(() => {
    const updateTime = () => setAtmosphere(getNaturalAtmosphere());
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-2xl border-b border-forest/10 dark:border-white/10 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Status */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-3 text-left"
          title="Krishna Mishra — Return to top"
        >
          <div className="w-9 h-9 rounded-2xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark flex items-center justify-center font-bold text-xs tracking-wider shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
            <span className="font-mono">KM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors leading-tight">
              Krishna Mishra
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf dark:bg-sun animate-pulse" />
              <span className="text-[10px] font-mono text-charcoal-muted dark:text-dark-textMuted tracking-tight">
                MITAOE &bull; Open for Roles
              </span>
            </div>
          </div>
        </a>

        {/* Clear, Spacious Desktop Navigation */}
        <nav 
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-cream-card/90 dark:bg-dark-card/90 backdrop-blur-xl px-2.5 py-1.5 rounded-full border border-forest/10 dark:border-white/10 shadow-soft-card"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playCyberClick}
                className={`relative text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-forest dark:text-sun font-semibold bg-forest/8 dark:bg-sun/15 shadow-xs'
                    : 'text-charcoal-muted dark:text-dark-textMuted hover:text-charcoal dark:hover:text-warm-white hover:bg-forest/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Time & Sun Atmosphere Switcher + Resume + Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Nature Time & Atmosphere Pill (Toggle between Sunlit Day & Night Canopy) */}
          <button
            onClick={() => {
              playCyberClick();
              onToggleTheme();
            }}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 hover:border-forest/30 dark:hover:border-sun/40 text-charcoal dark:text-warm-white transition-all shadow-sm hover:scale-[1.02] active:scale-95"
            title={`${theme === 'dark' ? 'Switch to Sunlit Light Mode' : 'Switch to Nocturnal Dark Mode'} (Currently: ${atmosphere.name})`}
            aria-label="Toggle time of day theme"
          >
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-forest/5 dark:bg-sun/10 text-forest dark:text-sun">
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-sun animate-in spin-in-90 duration-300" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-forest animate-in -spin-in-90 duration-300" />
              )}
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold text-charcoal dark:text-warm-white group-hover:text-forest dark:group-hover:text-sun transition-colors leading-none">
                {theme === 'dark' ? 'Night Canopy' : 'Sunlit Day'}
              </span>
              <span className="text-[9px] font-mono text-charcoal-muted dark:text-dark-textMuted mt-0.5">
                {atmosphere.timeString}
              </span>
            </div>
          </button>

          {/* Clean Resume Modal Button */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-cream-card dark:bg-dark-card hover:bg-forest/5 dark:hover:bg-white/5 text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10 transition-all shadow-sm hover:border-forest/25 dark:hover:border-white/20"
            title="Review Resume Dossier"
          >
            <FileText className="w-3.5 h-3.5 text-olive dark:text-sun" />
            <span>Resume</span>
          </button>

          {/* Let's Talk CTA Button */}
          <a
            href="#contact"
            onClick={playCyberClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4.5 py-2 rounded-full bg-forest dark:bg-sun hover:bg-forest-deep dark:hover:bg-sun-light text-warm-white dark:text-forest-dark transition-all shadow-sm hover:shadow-md active:scale-95 duration-200"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Navigation Header Trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Sun/Night Toggle for Mobile */}
          <button
            onClick={() => {
              playCyberClick();
              onToggleTheme();
            }}
            className="p-2 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Toggle time theme"
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4 text-sun" /> : <Sun className="w-4 h-4 text-forest" />}
          </button>

          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 rounded-xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-charcoal dark:text-warm-white"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-forest dark:text-sun" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Crystal Clear Full-Width Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-5 pt-4 pb-8 bg-cream/98 dark:bg-dark-bg/98 backdrop-blur-2xl border-b border-forest/15 dark:border-white/15 space-y-4 mt-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          
          {/* Atmosphere indicator bar */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-cream-card dark:bg-dark-card border border-forest/10 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-base">{theme === 'dark' ? '🌙' : '☀️'}</span>
              <div>
                <div className="font-semibold text-charcoal dark:text-warm-white">
                  {theme === 'dark' ? 'Night Canopy Mode' : 'Sunlit Day Mode'}
                </div>
                <div className="text-[10px] font-mono text-charcoal-muted dark:text-dark-textMuted">
                  {atmosphere.timeString} &bull; {atmosphere.greeting}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                playCyberClick();
                onToggleTheme();
              }}
              className="text-[11px] font-mono px-3 py-1 rounded-full bg-forest/10 dark:bg-sun/15 text-forest dark:text-sun font-medium"
            >
              Switch Mode
            </button>
          </div>

          {/* Clean, Labeled Navigation Links */}
          <div className="space-y-1.5 text-left">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playCyberClick();
                    setMobileOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-forest text-warm-white dark:bg-sun dark:text-forest-dark font-semibold shadow-sm'
                      : 'bg-cream-card dark:bg-dark-card text-charcoal dark:text-warm-white border border-forest/10 dark:border-white/10'
                  }`}
                >
                  <span className="text-sm font-medium">{link.name}</span>
                  <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTAs in Mobile */}
          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <button
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-cream-card dark:bg-dark-card text-charcoal dark:text-warm-white border border-forest/15 dark:border-white/15 text-xs font-semibold shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-forest dark:text-sun" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
              }}
              className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-2xl bg-forest dark:bg-sun text-warm-white dark:text-forest-dark text-xs font-semibold shadow-sm"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
