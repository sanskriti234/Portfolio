'use client';

import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    id: 1,
    title: "Game Academic Performance Predictor",
    description: "Predicts student academic performance using gaming behavior, study hours, and demographic features. Built end-to-end regression + classification pipeline with strong interpretability.",
    status: "LIVE",
    accuracy: "89.2%",
    inferenceTime: "18ms",
    complexity: "Medium",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/sanskriti234/Game_academic_performance_predict",
    kaggleDataset: "https://www.kaggle.com/datasets/rajatraj0502/student-performance-data",
    category: "REGRESSION",
    metrics: { accuracy: 89.2, precision: 87, recall: 84, r2: 0.89 }
  },
  {
    id: 2,
    title: "HindsightOps — AI Incident Memory Agent",
    description:
      "LLM-powered incident response assistant combining Retrieval-Augmented Generation (RAG) with organizational memory. Enables semantic search across historical incidents, automated RCA generation, and multi-provider LLM fallback for production reliability.",
    status: "LIVE",
    accuracy: "94.1%",
    inferenceTime: "820ms",
    complexity: "High",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "OpenAI",
      "RAG",
      "Vector Database"
    ],
    github: "https://github.com/sanskriti234/HindsightOps",
    kaggleDataset: "",
    category: "GENERATIVE AI",
    metrics: {
      accuracy: 94.1,
      precision: 93,
      recall: 95
    }
  },
  
  {
    id: 1,
    title: "CoreSight — Automated Attendance System",
    description:
      "AI-powered facial recognition attendance system using CNN-based 128-dimensional facial encoding for real-time identity verification. Achieved 86.5% system accuracy across test scenarios. Research paper published at ICSEAIS Conference 2026.",
    status: "LIVE",
    accuracy: "86.5%",
    inferenceTime: "72ms",
    complexity: "High",
    tech: [
      "Python",
      "FastAPI",
      "OpenCV",
      "SQLite",
      "CNN",
      "Computer Vision"
    ],
    github: "https://github.com/sanskriti234/CoreSight",
    kaggleDataset: "",
    category: "COMPUTER VISION",
    metrics: {
      accuracy: 86.5,
      precision: 88,
      recall: 85
    }
  },
  
  {
    id: 4,
    title: "Breast Cancer Diagnosis",
    description: "Binary classification model to diagnose breast cancer using the Wisconsin dataset. Applied feature selection, scaling, and evaluated multiple algorithms including SVM and Random Forest.",
    status: "LIVE",
    accuracy: "96.8%",
    inferenceTime: "9ms",
    complexity: "Medium",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/sanskriti234",
    kaggleDataset: "https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data",
    category: "CLASSIFICATION",
    metrics: { accuracy: 96.8, precision: 95, recall: 98 }
  },
  
  {
    id: 5,
    title: "Sentiment Analysis on Reviews",
    description: "Text classification model using TF-IDF + Logistic Regression and Naive Bayes to classify movie reviews. Achieved strong F1 scores with basic NLP techniques.",
    status: "LIVE",
    accuracy: "87.1%",
    inferenceTime: "26ms",
    complexity: "Medium",
    tech: ["Python", "scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/sanskriti234",
    kaggleDataset: "https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews",
    category: "NLP",
    metrics: { accuracy: 87.1, precision: 86, recall: 88 }
  },
  
  {
    id: 6,
    title: "House Price Regression",
    description: "Advanced regression pipeline predicting house prices using multiple features. Applied log transformations, feature engineering, and used Gradient Boosting + XGBoost.",
    status: "LIVE",
    accuracy: "91.3%",
    inferenceTime: "14ms",
    complexity: "High",
    tech: ["Python", "scikit-learn", "Pandas", "XGBoost"],
    github: "https://github.com/sanskriti234",
    kaggleDataset: "https://www.kaggle.com/datasets/harlfoxem/housesalesprediction",
    category: "REGRESSION",
    metrics: { accuracy: 91.3, r2: 0.91 }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects" className="max-w-7xl mx-auto px-6 pt-20 pb-20">
      <div className="flex items-end justify-between mb-9">
        <div>
          <div className="uppercase text-xs tracking-[3px] text-[#64748B]">AI MODELS</div>
          <div className="section-header text-5xl font-semibold tracking-[-2.4px]">Projects</div>
        </div>
        <div className="hidden md:block text-sm max-w-xs text-right text-[#64748B]">
          All projects use real public Kaggle datasets. Full code, notebooks, and analysis available.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpen={setSelectedProject} 
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
