'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsoleLine {
  text: string;
  delay: number;
  type?: 'system' | 'success' | 'info';
}

const consoleSequence: ConsoleLine[] = [
  { text: "Initializing AI Portfolio System v4.2.1...", delay: 180 },
  { text: "Loading neural embeddings... [████████████████] 100%", delay: 240 },
  { text: "Loading ML models: scikit-learn, TensorFlow, PyTorch", delay: 260 },
  { text: "Loading embeddings from vector store...", delay: 210 },
  { text: "Knowledge Graph: 12 nodes, 41 edges connected.", delay: 190 },
  { text: "LLM Inference Engine: ONLINE", delay: 220 },
  { text: "Vector Database: Connected (ChromaDB simulation)", delay: 170 },
  { text: "Projects loaded: 6 ML models ready.", delay: 200 },
  { text: "", delay: 120 },
  { text: "System Status: OPTIMAL", delay: 100, type: 'success' },
];

export default function AIConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [showName, setShowName] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let startTimer: NodeJS.Timeout;

    const showNextLine = (index: number) => {
      if (index >= consoleSequence.length) {
        setTimeout(() => {
          setShowName(true);
        }, 340);
        return;
      }

      const current = consoleSequence[index];
      
      setTimeout(() => {
        setLines(prev => [...prev, current.text]);
        setCurrentIndex(index + 1);
        
        if (current.text !== "") {
          showNextLine(index + 1);
        } else {
          showNextLine(index + 1);
        }
      }, current.delay);
    };

    startTimer = setTimeout(() => {
      showNextLine(0);
    }, 520);

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-[820px] mx-auto">
      <div className="ai-console rounded-3xl p-8 md:p-10 font-mono text-sm md:text-[13.5px] leading-relaxed tracking-[-0.2px] text-[#A5B4FC] shadow-2xl">
        <div className="flex items-center gap-3 mb-7">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
          </div>
          <div className="flex-1 text-[11px] text-[#64748B] tracking-[1.5px] pl-3">AETHER • AI WORKSTATION</div>
          <div className="text-[10px] px-2.5 py-px rounded bg-white/5 text-[#64748B]">v4.2.1</div>
        </div>

        <div className="space-y-[5px] min-h-[232px]">
          {lines.map((line, index) => (
            <div 
              key={index} 
              className={`console-line ${line.includes('100%') || line.includes('OPTIMAL') ? 'text-[#5EEAD4]' : ''}`}
            >
              {line || <span className="opacity-0">·</span>}
            </div>
          ))}
          
          {!showName && currentIndex < consoleSequence.length && (
            <div className="flex items-center gap-2 text-[#64748B]">
              <div className="w-1.5 h-1.5 bg-[#00F5FF] rounded-full animate-pulse"></div>
              <span className="text-[12px]">processing...</span>
            </div>
          )}
        </div>

        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="pt-6 border-t border-white/10 mt-6"
            >
              <div className="flex items-baseline gap-3">
                <div>
                  <div className="text-[39px] md:text-[46px] font-semibold tracking-[-2.1px] leading-[0.92] text-white">
                    Sanskriti Mishra
                  </div>
                  <div className="text-[#00F5FF] font-medium mt-1 text-lg tracking-tight">
                    AI Engineer · Machine Learning Engineer · Data Scientist
                  </div>
                </div>
              </div>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {['LLM Systems', 'Computer Vision', 'NLP', 'Predictive Modeling'].map((tag, i) => (
                  <div 
                    key={i} 
                    className="px-3 py-px text-xs tracking-[1px] rounded-full bg-white/5 border border-white/10 text-[#A5B4FC]"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-x-4 gap-y-1 text-xs flex-wrap">
                <a 
                  href="https://github.com/sanskriti234" 
                  target="_blank"
                  className="magnetic-btn flex items-center gap-2 px-5 py-[9px] rounded-2xl border border-white/10 hover:border-[#00F5FF]/50 bg-white/5 hover:bg-white/10 transition-all text-xs font-medium"
                >
                  VIEW GITHUB
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanskriti-mishra-718884331/" 
                  target="_blank"
                  className="magnetic-btn flex items-center gap-2 px-5 py-[9px] rounded-2xl border border-white/10 hover:border-[#00F5FF]/50 bg-white/5 hover:bg-white/10 transition-all text-xs font-medium"
                >
                  LINKEDIN
                </a>
                <a 
                  href="https://www.kaggle.com/sakshi231204" 
                  target="_blank"
                  className="magnetic-btn flex items-center gap-2 px-5 py-[9px] rounded-2xl border border-white/10 hover:border-[#00F5FF]/50 bg-white/5 hover:bg-white/10 transition-all text-xs font-medium"
                >
                  KAGGLE
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
