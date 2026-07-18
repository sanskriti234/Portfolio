'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  description: string;
  category: string;
}

const skills: Skill[] = [
  { name: "Machine Learning", level: 90, description: "Scikit-learn, supervised & unsupervised models", category: "Core" },
  { name: "Python", level: 92, description: "Pandas, NumPy, Matplotlib, Seaborn", category: "Core" },
  { name: "Data Science", level: 88, description: "EDA, Feature Engineering, Statistical Analysis", category: "Core" },
  { name: "Deep Learning", level: 72, description: "TensorFlow, basic neural networks", category: "Advanced" },
  { name: "NLP", level: 76, description: "Text classification, TF-IDF, basic transformers", category: "Advanced" },
  { name: "Computer Vision", level: 63, description: "OpenCV basics, image preprocessing", category: "Advanced" },
  { name: "Predictive Modeling", level: 89, description: "Regression, Classification, Evaluation", category: "Core" },
  { name: "SQL & Databases", level: 71, description: "Data querying, cleaning pipelines", category: "Core" },
];

export default function Skills() {
  return (
    <div id="skills" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <div className="flex justify-between items-end mb-9">
        <div>
          <div className="uppercase tracking-[3px] text-xs text-[#64748B] mb-2">CAPABILITIES</div>
          <div className="section-header text-5xl font-semibold tracking-[-2.4px]">AI Capabilities</div>
        </div>
        <div className="text-right text-sm text-[#64748B] max-w-[240px]">
          Real skills developed through hands-on ML projects and Kaggle learning
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            viewport={{ once: true }}
            className="capability-card ai-card p-6 rounded-3xl group"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="font-semibold text-xl tracking-tight">{skill.name}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{skill.category}</div>
              </div>
              <div className="text-right">
                <span className="font-mono text-[22px] font-medium text-[#5EEAD4] tabular-nums">{skill.level}</span>
                <span className="text-[#64748B] text-xs">/100</span>
              </div>
            </div>

            <div className="skill-progress mb-4">
              <div className="bar">
                <div 
                  className="fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            <p className="text-[#A5B4FC] text-sm leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {["scikit-learn", "pandas", "numpy", "matplotlib", "tensorflow", "jupyter", "seaborn"].map(t => (
          <div key={t} className="px-3 py-1 rounded-full bg-white/5 text-[#64748B] border border-white/10">{t}</div>
        ))}
      </div>
    </div>
  );
}
