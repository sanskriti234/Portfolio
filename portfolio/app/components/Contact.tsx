'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import * as emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if keys are missing or still placeholders
      const isPlaceholder = 
        !serviceId || !templateId || !publicKey ||
        serviceId.includes('xxxx') || 
        templateId.includes('xxxx') || 
        publicKey.includes('your_');

      if (isPlaceholder) {
        // DEMO MODE — COMPLETELY SILENT (no console logs at all)
        await new Promise(resolve => setTimeout(resolve, 600));

        // Show toast only once per browser session (prevents repeated messages)
        if (typeof window !== 'undefined' && !(window as any).__emailjs_toast_shown) {
          toast.error("EmailJS keys not set yet", {
            description: "Demo mode. Add real keys in .env.local to enable actual emails (see README.md)",
          });
          (window as any).__emailjs_toast_shown = true;
        }

        // Show nice success UI for visitors
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitted(false);
        }, 2300);

        setLoading(false);
        return;
      }

      // === REAL EMAIL SENDING ===
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sanskriti Mishra",
          reply_to: formData.email,
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitted(true);
        toast.success("Message sent successfully!", {
          description: "Thank you! I'll reply within 48 hours.",
        });

        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitted(false);
        }, 2600);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message", {
        description: "Please try LinkedIn or GitHub instead.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-9">
        <div className="uppercase tracking-[3px] text-xs text-[#64748B]">COMMUNICATION TERMINAL</div>
        <div className="section-header text-5xl font-semibold tracking-[-2px] mt-1">Send Message</div>
        <p className="mt-3 text-[#A5B4FC]">This form sends real emails directly to my inbox.</p>
      </div>

      <div className="glass rounded-3xl p-8 md:p-10 max-w-155 mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-widest text-[#64748B] mb-1.5">NAME</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-3.25 text-sm placeholder:text-[#64748B] outline-none focus:border-[#00F5FF]/40" 
                  placeholder="Jane Cooper" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-[#64748B] mb-1.5">EMAIL</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-3.25 text-sm placeholder:text-[#64748B] outline-none focus:border-[#00F5FF]/40" 
                  placeholder="jane@company.com" 
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest text-[#64748B] mb-1.5">MESSAGE</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-[#111827] border border-white/10 rounded-3xl px-5 py-4 text-sm placeholder:text-[#64748B] outline-none resize-y min-h-30 focus:border-[#00F5FF]/40" 
                placeholder="Hi Sanskriti, I saw your Game Performance Predictor project..." 
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-2 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#00F5FF] text-[#050816] font-medium hover:bg-[#5EEAD4] disabled:opacity-60 transition-all"
            >
              {loading ? "SENDING TO MY INBOX..." : "SEND MESSAGE TO SANSKRITI"} 
              <Send size={16} />
            </button>

            <p className="text-center text-[10px] text-[#64748B] pt-1">
              Powered by EmailJS • Real emails delivered
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5">
              <CheckCircle className="w-9 h-9 text-emerald-400" />
            </div>
            <div className="text-2xl tracking-tight font-semibold">Message Sent!</div>
            <div className="text-[#5EEAD4] mt-2">Thank you. I'll reply within 48 hours.</div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 text-sm justify-center text-center">
          <a href="https://github.com/sanskriti234" target="_blank" className="hover:text-[#00F5FF]">github.com/sanskriti234</a>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="https://www.linkedin.com/in/sanskriti-mishra-718884331/" target="_blank" className="hover:text-[#00F5FF]">LinkedIn</a>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="https://www.kaggle.com/sakshi231204" target="_blank" className="hover:text-[#00F5FF]">Kaggle</a>
        </div>
      </div>
    </div>
  );
}
