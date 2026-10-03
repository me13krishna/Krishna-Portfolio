import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over an interactive target with data-cursor
      const target = e.target.closest('[data-cursor], a, button');
      if (target) {
        setHovered(true);
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[9px] font-semibold uppercase tracking-widest transition-all duration-300 ${
          hovered
            ? 'w-11 h-11 bg-[#E2A866] text-[#0E0E10] shadow-lg shadow-black/40 scale-100'
            : 'w-3 h-3 bg-[#F7F6F2]/80 border border-white/20'
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
}
