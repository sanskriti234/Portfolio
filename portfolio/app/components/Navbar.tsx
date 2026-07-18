'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Active section detection
      const sections = ['about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      let current = 'hero';

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#8B5CF6] flex items-center justify-center">
            <span className="font-bold text-[#050816] text-sm tracking-[-1px]">SM</span>
          </div>
          <div>
            <div className="font-semibold tracking-tight text-lg">Sanskriti Mishra</div>
            <div className="text-[10px] text-[#64748B] -mt-1">AI / ML ENGINEER</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`transition-colors hover:text-[#00F5FF] ${activeSection === link.href.slice(1) ? 'text-[#00F5FF]' : 'text-[#A5B4FC]'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
              document.dispatchEvent(event);
            }}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl border border-white/10 bg-white/5 text-xs hover:bg-white/10 transition-all"
          >
            <Command size={13} /> <span className="font-mono text-[#64748B]">K</span>
          </button>

          <a 
            href="https://github.com/sanskriti234" 
            target="_blank"
            className="hidden md:block text-xs px-4 py-2 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
          >
            GitHub
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050816] px-6 py-6 space-y-4 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-2 text-[#A5B4FC] hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <a href="https://github.com/sanskriti234" target="_blank" className="block pt-3 text-[#00F5FF]">Open GitHub →</a>
        </div>
      )}
    </nav>
  );
}
