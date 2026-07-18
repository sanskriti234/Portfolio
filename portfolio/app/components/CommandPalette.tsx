'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Command {
  id: string;
  label: string;
  action: () => void;
  category: string;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    { id: 'about', label: 'Go to About', action: () => scrollToSection('about'), category: 'Navigate' },
    { id: 'skills', label: 'View Skills & Capabilities', action: () => scrollToSection('skills'), category: 'Navigate' },
    { id: 'projects', label: 'Browse AI Projects', action: () => scrollToSection('projects'), category: 'Navigate' },
    { id: 'experience', label: 'See Experience Timeline', action: () => scrollToSection('experience'), category: 'Navigate' },
    { id: 'achievements', label: 'View Achievements', action: () => scrollToSection('achievements'), category: 'Navigate' },
    { id: 'contact', label: 'Contact / AI Terminal', action: () => scrollToSection('contact'), category: 'Navigate' },
    { id: 'github', label: 'Open GitHub Profile', action: () => window.open('https://github.com/sanskriti234', '_blank'), category: 'External' },
    { id: 'kaggle', label: 'Open Kaggle Profile', action: () => window.open('https://www.kaggle.com/sakshi231204', '_blank'), category: 'External' },
    { id: 'linkedin', label: 'Open LinkedIn', action: () => window.open('https://www.linkedin.com/in/sanskriti-mishra-718884331/', '_blank'), category: 'External' },
    { id: 'resume', label: 'Download Resume', action: () => window.open('/resume.pdf', '_blank'), category: 'Action' },
    { id: 'assistant', label: 'Open AI Assistant', action: () => {
      const btn = document.querySelector('[aria-label="Open AI Assistant"]') as HTMLElement;
      btn?.click();
    }, category: 'Action' },
  ];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 95;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setQuery('');
        setSelectedIndex(0);
      }

      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }

      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
        }
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-[18vh]">
          <div className="fixed inset-0 bg-black/70" onClick={() => setIsOpen(false)} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
            className="command-palette relative w-full max-w-135 mx-4 glass rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Search Header */}
            <div className="flex items-center px-5 py-4 border-b border-white/10">
              <Search className="w-4 h-4 text-[#64748B] mr-3" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Jump to section, project or action..."
                className="flex-1 bg-transparent outline-none text-lg placeholder:text-[#64748B]"
              />
              <div className="text-xs px-2 py-px bg-white/5 rounded text-[#64748B]">ESC</div>
            </div>

            {/* Results */}
            <div className="max-h-85 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="px-5 py-8 text-center text-[#64748B] text-sm">No results found</div>
              ) : (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-4 py-3.25 rounded-2xl text-left transition-all ${
                      idx === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#00F5FF] text-[10px] font-mono tracking-widest w-18">{cmd.category}</div>
                      <span className="text-[15px]">{cmd.label}</span>
                    </div>
                    {cmd.shortcut && <div className="text-xs text-[#64748B]">{cmd.shortcut}</div>}
                  </button>
                ))
              )}
            </div>

            <div className="px-5 py-3.5 border-t border-white/10 text-[10px] text-[#64748B] flex items-center justify-between">
              <div>Navigate with ↑ ↓  •  Enter to select</div>
              <div>⌘K to toggle</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
