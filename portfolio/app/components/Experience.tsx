'use client';

import React from 'react';

const experiences = [
  {
    role: "Independent ML Researcher & Developer",
    company: "Personal Projects & Kaggle",
    period: "2024 — Present",
    points: [
      "Developed 6+ end-to-end ML systems using Python and scikit-learn",
      "Trained and evaluated regression & classification models on Kaggle datasets",
      "Implemented feature engineering pipelines and model validation strategies",
      "Built interactive visualizations and deployed model prototypes",
    ],
  },
  {
    role: "ML & Data Science Learner",
    company: "Kaggle Learn",
    period: "2024",
    points: [
      "Completed Intro to Machine Learning, Intermediate ML, Pandas, and Feature Engineering",
      "Applied concepts to real datasets in practical competitions and notebooks",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <div className="uppercase tracking-[3px] text-xs text-[#64748B]">JOURNEY</div>
        <div className="section-header text-5xl font-semibold tracking-[-2px]">Experience</div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="ai-card rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-5">
              <div className="font-semibold text-2xl tracking-tight">{exp.role}</div>
              <div className="text-[#5EEAD4] text-lg md:text-xl font-medium">• {exp.company}</div>
              <div className="ml-auto font-mono text-xs text-[#64748B]">{exp.period}</div>
            </div>

            <ul className="space-y-2.25 text-[#A5B4FC] text-[15px]">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="text-[#00F5FF] mt-1">→</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
