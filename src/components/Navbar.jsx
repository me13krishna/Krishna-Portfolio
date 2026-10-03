import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { playCyberClick } from '../utils/audio';

export default function Navbar({ onOpenTerminal, onOpenPalette, onOpenResume }) {
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
    { name: "Works", href: "#projects" },
    { name: "Craft", href: "#problem-solving" },
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
          ? 'py-3.5 bg-[#0E0E10]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Anchor */}
        <a 
          href="#home" 
          onClick={playCyberClick}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[#F7F6F2]"
        >
          <span className="w-2 h-2 rounded-full bg-[#728A7C] shadow-[0_0_8px_rgba(114,138,124,0.6)] group-hover:scale-125 transition-transform" />
          <span className="tracking-tight text-[#F7F6F2] group-hover:text-white transition-colors">
            Krishna Mishra
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#9B988E] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
            MITAOE '29
          </span>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#151518]/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/[0.06] shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={playCyberClick}
              className="text-xs font-medium text-[#9B988E] hover:text-[#F7F6F2] px-3.5 py-1.5 rounded-full hover:bg-white/[0.04] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Find Key trigger */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#9B988E] hover:text-[#F7F6F2] px-3 py-1.5 rounded-full bg-[#151518] border border-white/[0.06] hover:border-white/[0.12] transition-all"
            title="Search Commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#E2A866]" />
            <kbd className="text-[10px] bg-white/[0.06] px-1.5 py-0.5 rounded text-[#E3E1D8]">⌘K</kbd>
          </button>

          {/* Let's Talk CTA Button */}
          <a
            href="#contact"
            onClick={playCyberClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-[#F7F6F2] text-[#0E0E10] hover:bg-white transition-all shadow-md active:scale-95 duration-200"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0E0E10]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              playCyberClick();
              onOpenPalette();
            }}
            className="p-2.5 rounded-xl bg-[#151518] border border-white/[0.06] text-[#F7F6F2]"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[#E2A866]" />
          </button>
          
          <button
            onClick={() => {
              playCyberClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2.5 rounded-xl bg-[#151518] border border-white/[0.06] text-[#F7F6F2]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#151518]/98 backdrop-blur-2xl border-b border-white/[0.08] space-y-3 mt-2 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  setMobileOpen(false);
                }}
                className="text-xs font-medium text-[#E3E1D8] hover:text-white px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"
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
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl bg-white/[0.06] text-[#F7F6F2] hover:bg-white/[0.1] transition-all"
            >
              <span>View Official Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileOpen(false);
                playCyberClick();
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-3 rounded-xl bg-[#F7F6F2] text-[#0E0E10]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#0E0E10]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
