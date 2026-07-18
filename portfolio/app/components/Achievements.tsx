'use client';

import React, { useState } from 'react';
import { Award, Star, TrendingUp } from 'lucide-react';

const achievements = [
  { title: "Kaggle Intro to Machine Learning", count: "Completed", icon: Award, desc: "Mastered fundamentals of ML models" },
  { title: "Kaggle Pandas", count: "Completed", icon: Award, desc: "Data manipulation & analysis mastery" },
  { title: "Kaggle Intermediate Machine Learning", count: "Completed", icon: Award, desc: "Advanced pipelines & feature engineering" },
  { title: "GitHub Pull Shark", count: "2×", icon: Star, desc: "Active open source contributions" },
  { title: "Multiple ML Projects", count: "6+", icon: TrendingUp, desc: "Fully deployed & documented models" },
];

const counters = [
  { label: "Projects", value: 6, suffix: "" },
  { label: "Kaggle Courses", value: 3, suffix: "" },
  { label: "Models Trained", value: 14, suffix: "" },
  { label: "Git Commits", value: 83, suffix: "" },
];

export default function Achievements() {
  const [animated, setAnimated] = useState(false);

  return (
    <div id="achievements" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <div className="uppercase tracking-[3px] text-xs text-[#64748B]">RECOGNITION</div>
        <div className="section-header text-5xl font-semibold tracking-[-2.1px]">Achievements</div>
      </div>

      {/* Live Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {counters.map((counter, i) => (
          <div key={i} className="ai-card rounded-3xl p-7 flex flex-col">
            <div className="font-mono text-[42px] leading-none font-semibold text-[#5EEAD4] counter">
              {animated ? counter.value : Math.floor(counter.value * 0.3)}
              {counter.suffix}
            </div>
            <div className="text-[#A5B4FC] mt-auto text-sm tracking-wide">{counter.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {achievements.map((ach, index) => (
          <div key={index} className="ai-card p-6 rounded-3xl group">
            <ach.icon className="text-[#00F5FF] w-7 h-7 mb-5 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-xl tracking-tight mb-1">{ach.title}</div>
            <div className="text-[#5EEAD4] font-mono text-sm mb-4">{ach.count}</div>
            <div className="text-xs text-[#A5B4FC] leading-snug">{ach.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
