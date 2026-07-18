'use client';

import React from 'react';
import { X, Code, ExternalLink, BarChart2, Clock, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.2 }}
            className="w-full max-w-4xl glass rounded-3xl overflow-hidden border border-white/10 max-h-[92vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-7 pt-7 pb-5 flex justify-between items-center border-b border-white/10 bg-[#0B1026]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-[3px] px-3 py-1 rounded-full bg-white/5 text-[#5EEAD4]">{project.category}</span>
                  <span className="font-mono text-emerald-400 text-sm">{project.status}</span>
                </div>
                <h2 className="text-4xl font-semibold tracking-[-1.4px] mt-2 pr-8">{project.title}</h2>
              </div>
              <button onClick={onClose} className="text-[#64748B] hover:text-white p-2"><X size={22} /></button>
            </div>

            <div className="overflow-y-auto p-7 space-y-9 flex-1 custom-scroll" style={{ scrollbarWidth: 'thin' }}>
              {/* Overview */}
              <div>
                <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-2.5">PROJECT OVERVIEW</h4>
                <p className="text-[#C0C9E0] leading-relaxed text-[15px]">{project.description}</p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "ACCURACY / SCORE", value: project.accuracy, icon: BarChart2 },
                  { label: "INFERENCE TIME", value: project.inferenceTime, icon: Clock },
                  { label: "COMPLEXITY", value: project.complexity, icon: Cpu },
                  { label: "DATASET", value: "Kaggle", icon: BarChart2 },
                ].map((stat, idx) => (
                  <div key={idx} className="glass p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1">
                      <stat.icon size={14} /> {stat.label}
                    </div>
                    <div className="font-mono text-2xl tracking-[-0.5px]">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Architecture */}
              <div>
                <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-3">MODEL ARCHITECTURE</h4>
                <div className="glass p-6 rounded-3xl font-mono text-sm space-y-2">
                  <div className="text-[#A5B4FC]">Pipeline: Data Ingestion → Preprocessing → Feature Engineering → Model Training → Evaluation → Deployment</div>
                  <div className="pt-2 border-t border-white/10 text-[#64748B] text-xs">Architecture: {project.tech.join(' + ')} pipeline</div>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-3">EVALUATION METRICS</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  {Object.entries(project.metrics).map(([key, val], i) => (
                    <div key={i} className="glass px-5 py-4 rounded-2xl">
                      <div className="text-[#64748B] text-xs tracking-wider mb-1">{key.toUpperCase()}</div>
                      <div className="font-mono text-3xl font-semibold text-[#5EEAD4]">{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-3">TECHNOLOGY STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="px-4 py-1.5 text-sm bg-white/5 border border-white/10 rounded-2xl">{tech}</div>
                  ))}
                </div>
              </div>

              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-2">PROBLEM STATEMENT</h4>
                  <p className="text-sm text-[#A5B4FC] leading-relaxed">Build accurate predictive models to estimate academic outcomes using student data and gaming behavior patterns. Focus on interpretability for educators.</p>
                </div>
                <div>
                  <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-2">APPROACH</h4>
                  <p className="text-sm text-[#A5B4FC] leading-relaxed">End-to-end ML pipeline. Cleaned data, engineered features (study hours vs gaming hours), trained multiple regression + classification models with cross validation and hyperparameter tuning.</p>
                </div>
              </div>

              {/* Dataset */}
              {project.kaggleDataset && (
                <div>
                  <h4 className="uppercase text-xs tracking-[2px] text-[#64748B] mb-2">DATASET</h4>
                  <a href={project.kaggleDataset} target="_blank" className="inline-block text-[#00F5FF] hover:underline text-sm">View full dataset on Kaggle →</a>
                </div>
              )}

              {/* Challenges & Future */}
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="text-[#64748B] uppercase tracking-wider text-xs mb-2">CHALLENGES SOLVED</h4>
                  <ul className="space-y-1 text-[#A5B4FC]">
                    <li>• Missing values &amp; outliers in academic scores</li>
                    <li>• Feature correlation between gaming time and study</li>
                    <li>• Overfitting on small sample</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#64748B] uppercase tracking-wider text-xs mb-2">FUTURE IMPROVEMENTS</h4>
                  <ul className="space-y-1 text-[#A5B4FC]">
                    <li>• Deploy model as FastAPI service</li>
                    <li>• Add SHAP explainability</li>
                    <li>• Expand to multi-class classification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-7 py-5 flex items-center gap-3 border-t border-white/10 bg-[#0B1026]">
              <a 
                href={project.github} 
                target="_blank" 
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white text-[#050816] text-sm font-medium hover:bg-[#E0E7FF]"
              >
                <Code size={16} /> VIEW ON GITHUB
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-white/10 hover:bg-white/5 text-sm"
                >
                  <ExternalLink size={16} /> LIVE DEMO
                </a>
              )}
              <button 
                onClick={onClose} 
                className="px-7 py-3.5 text-sm border border-white/10 rounded-2xl hover:bg-white/5"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
