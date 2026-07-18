'use client';

import React, { useState } from 'react';
import { ExternalLink, Code, Star, Clock, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  accuracy: string;
  inferenceTime: string;
  complexity: string;
  tech: string[];
  github: string;
  demo?: string;
  kaggleDataset?: string;
  category: string;
  metrics: {
    accuracy: number;
    precision?: number;
    recall?: number;
    r2?: number;
  };
}

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onClick={() => onOpen(project)}
      className="model-card ai-card rounded-3xl overflow-hidden cursor-pointer group"
    >
      <div className="model-header px-6 pt-6 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="uppercase text-[10px] tracking-[2px] px-2.5 py-px bg-white/5 text-[#5EEAD4] rounded">{project.category}</div>
              <div className="text-emerald-400 text-xs font-mono flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full status-online"></div> 
                {project.status}
              </div>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mt-3 pr-4 leading-none">{project.title}</h3>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <p className="text-[#A5B4FC] text-[14.5px] leading-snug line-clamp-3 mb-5">{project.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div>
            <div className="text-[#64748B] text-xs">ACCURACY</div>
            <div className="font-mono text-xl font-medium text-[#5EEAD4] tracking-tight">{project.accuracy}</div>
          </div>
          <div>
            <div className="text-[#64748B] text-xs">INFERENCE</div>
            <div className="font-mono text-xl font-medium text-[#5EEAD4] tracking-tight">{project.inferenceTime}</div>
          </div>
          <div>
            <div className="text-[#64748B] text-xs">COMPLEXITY</div>
            <div className="font-medium text-[#5EEAD4] tracking-tight">{project.complexity}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="text-[10px] px-2.5 py-px bg-white/5 rounded border border-white/10 text-[#A5B4FC]">{t}</span>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <a 
            href={project.github} 
            target="_blank" 
            onClick={e => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/5 transition-colors"
          >
            <Code size={15} /> GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              onClick={e => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/5 transition-colors"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
          <button 
            onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            className="px-4 py-3 text-xs border border-[#00F5FF]/30 rounded-2xl hover:bg-[#00F5FF]/10 flex items-center justify-center gap-1 transition-all"
          >
            DETAILS <BarChart3 size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
