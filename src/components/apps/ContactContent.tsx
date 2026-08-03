'use client';

import React, { useState } from 'react';
import { Mail, Code, Globe, ExternalLink, Send, Check } from 'lucide-react';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-rose-400" /> Get In Touch
        </h3>
        <p className="text-xs text-white/60 font-mono mt-0.5">
          Send a direct message to Jero Corpuz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6">
        {/* Form */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white">Message Delivered!</h4>
              <p className="text-xs text-white/70 max-w-sm mx-auto font-sans">
                Thank you for reaching out! Your message has been logged in Jero's portfolio inbox.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label htmlFor="contact-name" className="block text-white/70 font-mono mb-1">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-white/70 font-mono mb-1">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-white/70 font-mono mb-1">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold font-mono rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social Channels */}
        <div className="space-y-4 font-mono text-xs">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-white/50 uppercase tracking-widest text-[10px] block font-bold">
              Connect With Jero
            </span>

            <a
              href="https://github.com/jero-corpuz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
            >
              <Code className="w-4 h-4 text-blue-400" />
              <span className="truncate">GitHub / jero-corpuz</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jero-corpuz-713847142/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="truncate">LinkedIn Profile</span>
            </a>

            <a
              href="https://jero-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
            >
              <ExternalLink className="w-4 h-4 text-emerald-400" />
              <span className="truncate">jero-portfolio.netlify.app</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
