'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2024 — Present",
    title: "AI/ML Engineer & Student",
    desc: "Building practical machine learning models. Focused on predictive modeling, data science workflows, and end-to-end ML pipelines using Python and scikit-learn.",
  },
  {
    year: "2024",
    title: "Kaggle Learner & Competitor",
    desc: "Completed Intro to Machine Learning, Pandas, and Intermediate ML courses. Applied learnings to real-world datasets.",
  },
  {
    year: "2023 — 2024",
    title: "Python & Data Foundations",
    desc: "Developed strong programming fundamentals in Python. Built first classification and regression models from scratch.",
  },
];

export default function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-2xl mb-10">
        <div className="uppercase tracking-[3px] text-xs text-[#64748B]">RESEARCH MINDSET</div>
        <div className="section-header text-5xl font-semibold tracking-[-2.2px] mt-1">About</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12">
        {/* Bio */}
        <div className="lg:col-span-3">
          <div className="text-[17px] leading-relaxed text-[#C0C9E0]">
            I am Sanskriti Mishra, an AI/ML student and engineer focused on building real, production-grade machine learning systems. 
            I love turning raw data into actionable predictions using clean code, rigorous experimentation, and thoughtful feature engineering.
          </div>
          
          <div className="mt-7 text-[#A5B4FC]">
            My goal is to become a strong ML engineer who can take an idea from data collection all the way to deployed model. 
            I believe in simple, effective solutions over overly complex architectures at this stage.
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://www.kaggle.com/sakshi231204" target="_blank" className="text-xs border border-white/10 hover:bg-white/5 transition-all px-4 py-3 rounded-2xl">KAGGLE PROFILE</a>
            <a href="https://www.linkedin.com/in/sanskriti-mishra-718884331/" target="_blank" className="text-xs border border-white/10 hover:bg-white/5 transition-all px-4 py-3 rounded-2xl">LINKEDIN</a>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="text-sm font-medium text-[#64748B] mb-4">JOURNEY SO FAR</div>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-px bg-white/10 mt-1.5 relative">
                  <div className="w-1.5 h-1.5 bg-[#00F5FF] rounded-full absolute -left-[3px] top-1"></div>
                </div>
                <div className="-mt-0.5">
                  <div className="font-mono text-xs text-[#5EEAD4] mb-px">{item.year}</div>
                  <div className="font-semibold tracking-tight mb-1">{item.title}</div>
                  <div className="text-sm text-[#A5B4FC] leading-snug">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
