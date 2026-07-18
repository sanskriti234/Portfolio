'use client';

import React, { useState } from 'react';

// Inline simple data for recommender
const interestOptions = [
  { id: 'regression', label: 'Regression & Prediction' },
  { id: 'classification', label: 'Classification' },
  { id: 'nlp', label: 'NLP & Text' },
  { id: 'data', label: 'Data Analysis' },
];

const projectList = [
  { id: 1, title: "Game Academic Performance Predictor", category: "regression", score: 92, tech: "scikit-learn" },
  { id: 2, title: "Naive Bayes Classifier", category: "classification", score: 87, tech: "NumPy" },
  { id: 3, title: "Student Performance Prediction", category: "regression", score: 84, tech: "scikit-learn" },
  { id: 4, title: "Breast Cancer Diagnosis", category: "classification", score: 96, tech: "scikit-learn" },
  { id: 5, title: "Sentiment Analysis on Reviews", category: "nlp", score: 88, tech: "scikit-learn" },
  { id: 6, title: "House Price Regression", category: "regression", score: 90, tech: "XGBoost" },
];

export default function ProjectRecommender() {
  const [selectedInterest, setSelectedInterest] = useState<string>('regression');
  const [recommendations, setRecommendations] = useState(projectList.slice(0, 3));

  const getRecommendations = (interest: string) => {
    const filtered = projectList
      .filter(p => p.category === interest || interest === 'data')
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    
    setRecommendations(filtered.length ? filtered : projectList.slice(0, 3));
  };

  const handleSelect = (id: string) => {
    setSelectedInterest(id);
    getRecommendations(id);
  };

  return (
    <div className="ai-card p-8 rounded-3xl mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-[#00F5FF]">★</div>
        <div>
          <div className="font-semibold text-xl tracking-tight">AI Project Recommender</div>
          <div className="text-sm text-[#64748B]">Based on your interest — dynamically matched</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {interestOptions.map(opt => (
          <button 
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className={`px-4 py-1.5 rounded-2xl text-sm transition-all border ${selectedInterest === opt.id ? 'bg-[#00F5FF] text-[#050816] border-transparent' : 'border-white/10 hover:bg-white/5'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {recommendations.map((proj, idx) => (
          <div key={idx} className="bg-[#111827] px-5 py-4 rounded-2xl">
            <div className="text-sm font-medium tracking-tight">{proj.title}</div>
            <div className="flex items-center justify-between mt-4 text-xs">
              <div className="text-[#64748B]">{proj.tech}</div>
              <div className="font-mono text-[#5EEAD4]">{proj.score}% match</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-[#64748B] mt-4">This recommender is live and client-side. Click interests to filter.</div>
    </div>
  );
}
