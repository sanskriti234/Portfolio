'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const quickSuggestions = [
  "Tell me about Sanskriti",
  "Show ML projects",
  "What is your experience?",
  "Show GitHub",
  "Download resume",
  "What technologies do you use?",
  "Contact information",
  "Explain your strongest project"
];

const assistantResponses: Record<string, string> = {
  "tell me about sanskriti": "Sanskriti Mishra is an AI/ML student and engineer passionate about building practical machine learning systems. She specializes in predictive modeling, classification, NLP, and data-driven insights using Python, scikit-learn, and TensorFlow. Currently focused on academic performance prediction and classification models.",
  "show ml projects": "I have built several ML projects including:\n• Game Academic Performance Predictor (regression/classification on student data)\n• Naive Bayes Classifier from scratch\n• Student Performance Prediction\n• Sentiment Analysis\nAll projects use real Kaggle datasets and are fully open-source on GitHub.",
  "what is your experience?": "I am a student with hands-on ML engineering experience. I've completed multiple Kaggle courses and built end-to-end ML pipelines. Key skills include data preprocessing, feature engineering, model training, and evaluation. I also have experience building interactive AI interfaces.",
  "show github": "You can find all my repositories at https://github.com/sanskriti234. Top projects include Game Academic Performance Predictor and CoreSight.",
  "download resume": "Resume download initiated. [Simulated] A PDF resume with all experience and projects has been prepared. In production this would trigger an actual download.",
  "what technologies do you use?": "Core stack: Python, NumPy, Pandas, Scikit-learn, Matplotlib, TensorFlow, Jupyter. Also familiar with FastAPI, Next.js, and data visualization tools. Vector DBs & LangChain basics for future LLM work.",
  "contact information": "You can reach me via LinkedIn (linkedin.com/in/sanskriti-mishra-718884331) or email. Use the terminal below to send a message.",
  "explain your strongest project": "My strongest project is the Game Academic Performance Predictor. It uses regression and classification models on student gaming + academic data from Kaggle to predict performance scores. Achieved ~0.89 R² with feature engineering and cross-validation.",
  "default": "I'm here to help you navigate Sanskriti's portfolio. Ask about projects, experience, skills, or anything AI/ML related!"
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm Sanskriti's AI assistant. How can I help you explore the portfolio today?", 
      isUser: false, 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase().trim();
    
    if (lowerQuery.includes('about') || lowerQuery.includes('who are you') || lowerQuery.includes('sanskriti')) {
      return assistantResponses["tell me about sanskriti"];
    }
    if (lowerQuery.includes('project') || lowerQuery.includes('ml')) {
      return assistantResponses["show ml projects"];
    }
    if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
      return assistantResponses["what is your experience?"];
    }
    if (lowerQuery.includes('github')) {
      return assistantResponses["show github"];
    }
    if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
      return assistantResponses["download resume"];
    }
    if (lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('technology')) {
      return assistantResponses["what technologies do you use?"];
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach')) {
      return assistantResponses["contact information"];
    }
    if (lowerQuery.includes('strong') || lowerQuery.includes('best')) {
      return assistantResponses["explain your strongest project"];
    }
    
    return assistantResponses["default"];
  };

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate streaming response
    setTimeout(() => {
      const responseText = getResponse(messageText);
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // Special actions
      if (messageText.toLowerCase().includes('resume') || messageText.toLowerCase().includes('download')) {
        setTimeout(() => {
          window.open('/resume.pdf', '_blank');
        }, 900);
      }
      if (messageText.toLowerCase().includes('github')) {
        setTimeout(() => {
          window.open('https://github.com/sanskriti234', '_blank');
        }, 1100);
      }
    }, 820);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-[#00F5FF] text-[#050816] shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
        aria-label="Open AI Assistant"
      >
        <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-24 right-8 z-50 w-full max-w-[390px] h-[520px] glass rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0B1026]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#38BDF8] flex items-center justify-center">
                  <Bot className="w-4.5 h-4.5 text-[#050816]" />
                </div>
                <div>
                  <div className="font-semibold text-white text-[15px]">Aether Assistant</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full status-online"></div>
                    Online • Powered by your portfolio
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-[#64748B] hover:text-white p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-sm bg-[#050816] custom-scroll">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`chat-bubble ${msg.isUser ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className="text-[9px] mt-1 opacity-50 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 px-4">
                  <div className="chat-bubble chat-bubble-assistant">
                    <div className="typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length < 4 && (
              <div className="px-4 py-3 border-t border-white/10 bg-[#0B1026]/70 flex flex-wrap gap-1.5">
                {quickSuggestions.slice(0, 4).map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickSuggestion(sug)}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-[#A5B4FC]"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#0B1026]">
              <div className="flex items-center gap-2 bg-[#111827] border border-white/10 rounded-2xl px-4 py-1.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about my work..."
                  className="flex-1 bg-transparent text-sm placeholder:text-[#64748B] outline-none"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#00F5FF] text-[#050816] disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:bg-[#5EEAD4]"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-[9px] text-center text-[#64748B] mt-1.5">Responses are simulated based on portfolio data</div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
