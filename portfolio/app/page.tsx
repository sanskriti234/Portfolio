'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIConsole from './components/AIConsole';
import NeuralBackground from './components/NeuralBackground';
import CursorGlow from './components/CursorGlow';
import AIAssistant from './components/AIAssistant';
import CommandPalette from './components/CommandPalette';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ProjectRecommender from './components/ProjectRecommender';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Award } from 'lucide-react';

export default function AIPortfolio() {
  const [initComplete, setInitComplete] = useState(false);
  const [showInit, setShowInit] = useState(true);

  // Simulate AI initialization sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitComplete(true);
      // Hide init screen after hero is ready
      setTimeout(() => {
        setShowInit(false);
      }, 780);
    }, 3350);

    return () => clearTimeout(timer);
  }, []);

  // Add keyboard hint for command palette
  // Add keyboard hint for command palette
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key?.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="ai-os min-h-screen relative text-[#E0E7FF]">
      {/* Neural Background Layer */}
      <NeuralBackground />
      
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Initialization Screen */}
      <AnimatePresence>
        {showInit && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-200 bg-[#050816] flex items-center justify-center"
          >
            <div className="init-screen text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-[6px] border-[#00F5FF]/30 border-t-[#00F5FF] animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#00F5FF] text-[9px] font-mono tracking-[3px]">AETHER</div>
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-[#5EEAD4] font-mono text-sm tracking-[1.5px]">
                <div>INITIALIZING PORTFOLIO SYSTEM</div>
                <div className="text-[#64748B] text-xs">Loading ML models • Connecting knowledge graph • Preparing inference</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar />

      {/* Hero: AI Console */}
      <div className="relative pt-20 pb-16 z-10">
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <div className="text-center mb-7">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs tracking-[2px] bg-white/5 border border-white/10 text-[#64748B]">
              NEXT-GEN AI WORKSTATION • 2026
            </div>
          </div>
          
          <AIConsole />

          <div className="flex justify-center mt-8">
            <div 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-xs cursor-pointer text-[#64748B] hover:text-[#A5B4FC] transition-colors group"
            >
              SCROLL TO EXPLORE 
              <div className="w-px h-3 bg-white/30 group-hover:bg-[#A5B4FC]"></div> 
              ↓
            </div>
          </div>
        </div>
      </div>

      {/* Live Model Status Panel */}
      <div className="max-w-7xl mx-auto px-6 pb-8 z-10">
        <div className="glass rounded-3xl px-7 py-5 flex flex-col md:flex-row items-center gap-y-4 gap-x-7 text-sm border border-white/10">
          <div className="flex items-center gap-2 text-[#64748B] uppercase text-xs tracking-[2.5px] pr-4 border-r border-white/10">
            MODEL STATUS
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-1 text-xs">
            {[
              { label: "ML Engine", status: "ONLINE" },
              { label: "Data Pipeline", status: "ACTIVE" },
              { label: "Inference", status: "OPTIMAL" },
              { label: "Knowledge Graph", status: "SYNCED" },
              { label: "Vector Store", status: "READY" },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-online"></div>
                <span className="text-[#A5B4FC]">{s.label}</span>
                <span className="font-mono text-emerald-400 text-[10px]">{s.status}</span>
              </div>
            ))}
          </div>

          <div className="md:ml-auto text-[11px] text-[#64748B] font-mono">6 models • 14 trained • 89% avg accuracy</div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Skills / Capabilities */}
      <Skills />

      {/* Knowledge Graph */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <div className="uppercase text-xs tracking-[3px] text-[#64748B]">INTELLIGENCE MAP</div>
            <div className="section-header text-4xl font-semibold tracking-[-1.5px]">Knowledge Graph</div>
          </div>
          <div className="text-xs text-[#64748B]">Skills ↔ Projects ↔ Technologies</div>
        </div>

        <div className="glass p-9 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {[
              { node: "Python", type: "Core", connections: 9 },
              { node: "scikit-learn", type: "Core", connections: 7 },
              { node: "Game Performance", type: "Project", connections: 4 },
              { node: "Naive Bayes", type: "Project", connections: 3 },
              { node: "Pandas", type: "Core", connections: 8 },
              { node: "TensorFlow", type: "ML", connections: 4 },
              { node: "NLP", type: "Domain", connections: 5 },
              { node: "Classification", type: "Domain", connections: 6 },
              { node: "Regression", type: "Domain", connections: 7 },
              { node: "Kaggle", type: "Data", connections: 11 },
            ].map((item, idx) => (
              <div key={idx} className="knowledge-node px-4 py-3 rounded-2xl bg-[#111827] border border-white/10 hover:border-[#00F5FF]/50 transition-all cursor-default">
                <div className="font-medium text-base tracking-tight">{item.node}</div>
                <div className="text-[10px] text-[#64748B] mt-0.5">{item.type} • {item.connections} links</div>
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-[#64748B] mt-6">Click any node to filter projects (demo)</div>
        </div>
      </div>

      {/* Projects */}
      <Projects />

      {/* Dynamic Project Recommender */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <ProjectRecommender />
      </div>

      {/* Experience */}
      <Experience />

      {/* Achievements + GitHub Visual */}
      <Achievements />

      {/* GitHub Activity Visual */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="ai-card p-8 rounded-3xl">
          <div className="flex justify-between items-center mb-5">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[#64748B]">OPEN SOURCE</div>
              <div className="font-semibold text-3xl tracking-tight">GitHub Activity</div>
            </div>
            <a href="https://github.com/sanskriti234" target="_blank" className="text-sm flex items-center gap-2 text-[#00F5FF] hover:underline">
              VIEW PROFILE <Code size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Contributions", value: "83" },
              { label: "Repositories", value: "9" },
              { label: "Active Projects", value: "6" },
              { label: "Achievements", value: "2" },
            ].map((stat, idx) => (
              <div key={idx} className="px-5 py-5 rounded-2xl bg-[#0B1026]">
                <div className="font-mono text-4xl tracking-tighter font-semibold text-[#5EEAD4]">{stat.value}</div>
                <div className="text-sm text-[#64748B] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-center mt-4 text-[#64748B]">Last 12 months • 83 contributions recorded</div>
        </div>
      </div>

      {/* Contact / AI Terminal */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 py-9 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© Sanskriti Mishra — Designed as an AI-native workstation</div>
          <div className="flex gap-5">
            <a href="https://github.com/sanskriti234" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/sanskriti-mishra-718884331/" target="_blank">LinkedIn</a>
            <a href="https://www.kaggle.com/sakshi231204" target="_blank">Kaggle</a>
          </div>
          <div className="text-[10px]">Built with Next.js • Framer Motion • Three.js</div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIAssistant />

      {/* Global Command Palette */}
      <CommandPalette />

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-5 left-6 text-[10px] hidden xl:block text-[#64748B] font-mono pointer-events-none">
        Press <span className="px-1 py-px bg-white/5 rounded">⌘K</span> for command palette
      </div>
    </div>
  );
}
