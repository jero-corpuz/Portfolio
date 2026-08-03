'use client';

import React, { useState } from 'react';
import { AppId } from '@/types/os';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '@/data/osData';
import WebcamPixelGrid from './ui/webcam-pixel-grid';
import {
  Terminal,
  Code,
  Palette,
  Download,
  ExternalLink,
  Mail,
  Send,
  Check,
  Star,
  Cpu,
  Layers,
  MapPin,
  Globe,
  Briefcase,
  Calendar,
  Building2,
  ArrowRight,
  User,
  Compass,
  Rocket,
  Maximize2,
  CheckCircle,
} from 'lucide-react';

const RESUME_URL =
  'https://docs.google.com/document/d/1tt9LQ9mTlnZNipFOeCpIIifr95rXS9p6/edit?rtpof=true&sd=true&tab=t.0';

const AVATAR_URL =
  'https://jero-portfolio.netlify.app/_next/image?url=%2Fimages%2Favatar%2Favatar.jpg&w=384&q=75';

interface WindowContentProps {
  appId: string;
  onOpenProjectFrame?: (title: string, url: string) => void;
}

export default function WindowContent({ appId, onOpenProjectFrame }: WindowContentProps) {
  switch (appId) {
    case 'about':
      return <AboutContent />;
    case 'experience':
      return <ExperienceContent />;
    case 'projects':
      return <ProjectsContent onOpenProjectFrame={onOpenProjectFrame} />;
    case 'skills':
      return <SkillsContent />;
    case 'contact':
      return <ContactContent />;
    case 'camera':
      return <WebcamPixelGrid />;
    default:
      return null;
  }
}

function AboutContent() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-8 text-[#e5e2e1]">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start">
        {/* Profile Sidebar */}
        <div className="flex flex-col items-center space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="relative group">
            <div className="absolute -inset-3 bg-linear-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
            <img
              src={AVATAR_URL}
              alt="Jero Corpuz"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">Jero</h2>
            <p className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold mt-1">
              Web Developer & Architecture Lead
            </p>
          </div>
          <div className="w-full space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white/60">Status</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Hire
              </span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white/60">Philosophy</span>
              <span className="text-white font-medium flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-blue-400" /> Platform-Agnostic
              </span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white/60">Core Expertise</span>
              <span className="text-purple-300 font-bold">Shopify & WordPress</span>
            </div>
          </div>
        </div>

        {/* Main Bio Sections from Jero's Portfolio */}
        <div className="space-y-6">
          {/* Who I Am */}
          <section className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-blue-400" /> Who I Am
            </h3>
            <p className="text-sm text-white/90 leading-relaxed font-sans">
              I am a Web Developer focused on building high-performance, platform-agnostic digital experiences. My core philosophy is{' '}
              <span className="text-blue-400 font-semibold underline decoration-blue-500/50">flexibility</span>—identifying the perfect tool for every challenge, whether it's architecting a bespoke Shopify storefront, a custom WordPress ecosystem, or a streamlined low-code solution.
            </p>
          </section>

          {/* What I Do */}
          <section className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-emerald-400" /> What I Do
            </h3>
            <p className="text-sm text-white/90 leading-relaxed font-sans">
              Currently, I build bespoke Shopify storefronts at{' '}
              <span className="text-emerald-400 font-semibold">Uppertech</span> and lead WordPress architecture at{' '}
              <span className="text-blue-400 font-semibold">Blue Pig Web Solutions</span>. I bridge the gap between technical complexity and business growth, ensuring every project is not just functional, but built to adapt to the future.
            </p>
          </section>

          {/* My Journey */}
          <section className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-purple-400" /> My Journey
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              My path in tech has been a journey through every stage of the product lifecycle. I started in customer support, learning the value of empathy and clear communication, before moving into Project Management to coordinate complex initiatives.
            </p>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              Today, I combine that leadership foundation with deep technical expertise. Whether I’m shipping a custom block theme or coaching programmers, my goal is always the same: building fast, accessible, and high-converting web experiences that solve real problems.
            </p>
          </section>

          {/* Resume CTA */}
          <div className="pt-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleDownload}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 border border-white/20 font-mono text-xs"
            >
              {downloaded ? (
                <>
                  <Check className="w-5 h-5 text-emerald-300" /> Opening Resume...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" /> View Full Resume (Google Docs)
                </>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  const corporateItems = EXPERIENCES.filter((item) => item.type === 'corporate');
  const freelanceItems = EXPERIENCES.filter((item) => item.type === 'freelance');

  return (
    <div className="space-y-8 text-[#e5e2e1]">
      <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-400" /> Professional Experience Timeline
          </h3>
          <p className="text-xs text-white/60 font-mono mt-0.5">
            A timeline of my professional growth & technical contributions
          </p>
        </div>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-mono transition-all flex items-center gap-1.5"
        >
          Full Resume <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Corporate Work Timeline */}
      <section className="space-y-6">
        <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-400" /> Corporate Work
        </h4>

        <div className="relative pl-6 border-l-2 border-white/10 space-y-8 ml-2">
          {corporateItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0c0d16] border-2 border-amber-400 group-hover:bg-amber-400 transition-colors shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

              <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <h5 className="text-lg font-bold text-white">
                    {item.role} <span className="text-amber-400 font-medium">@ {item.company}</span>
                  </h5>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 font-mono text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" /> {item.date}
                  </span>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-white/80 font-sans">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Freelance Work */}
      <section className="space-y-6 pt-4 border-t border-white/10">
        <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
          <Code className="w-4 h-4 text-emerald-400" /> Freelance Work & Consulting
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {freelanceItems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h5 className="text-base font-bold text-white">{item.role}</h5>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">{item.company}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {item.bullets[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectsContent({
  onOpenProjectFrame,
}: {
  onOpenProjectFrame?: (title: string, url: string) => void;
}) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const tags = ['All', 'WordPress', 'Divi', 'Accessibility', 'Booking UI', 'Elementor Pro'];

  const filteredProjects =
    selectedTag === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(selectedTag));

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    if (project.link && onOpenProjectFrame) {
      onOpenProjectFrame(project.title, project.link);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" /> Jero's Featured Projects
          </h3>
          <p className="text-xs text-white/60 font-mono mt-0.5">
            Click any project to open an interactive desktop iframe window
          </p>
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                selectedTag === tag
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 p-5 transition-all hover:bg-white/8 flex flex-col justify-between overflow-hidden shadow-lg cursor-pointer"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${project.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
            
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/80 font-mono text-[11px]">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  <Star className="w-3 h-3 fill-amber-300" /> {project.stars}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 flex items-center justify-between">
                {project.title}
                <Maximize2 className="w-4 h-4 text-white/30 group-hover:text-emerald-400 transition-colors" />
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-white/60 border border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <span className="text-emerald-400/90 text-[11px]">{project.metrics}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleProjectClick(project);
                }}
                className="flex items-center gap-1 text-white bg-emerald-600/80 hover:bg-emerald-500 px-3 py-1 rounded-lg border border-emerald-400/30 transition-all font-bold"
              >
                Launch Iframe OS <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-purple-400" /> Technical Capabilities & Tools
        </h3>
        <p className="text-xs text-white/60 font-mono mt-0.5">
          Web Developer stack breakdown
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-3 overflow-x-auto">
        {SKILL_CATEGORIES.map((cat, index) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === index
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md'
                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            {cat.title}
          </button>
        ))}
      </div>

      {/* Selected Category Skill Bars */}
      <div className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10">
        {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#a855f7]" />
                {skill.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {skill.tag}
                </span>
                <span className="font-mono text-white/70 font-bold">{skill.level}%</span>
              </div>
            </div>
            <div className="w-full bg-black/40 rounded-full h-2.5 p-0.5 border border-white/10 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-purple-500 to-indigo-400 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mini Terminal Code Snippet */}
      <div className="rounded-xl bg-[#090a12] border border-white/10 p-4 font-mono text-xs text-emerald-400 space-y-1">
        <p className="text-white/40">// Interactive Console Output</p>
        <p>$ jero-cli --fetch-projects</p>
        <p className="text-purple-300">[SUCCESS] Netlify live deployment link active.</p>
        <p className="text-blue-300">[SUCCESS] 6 Featured Projects Loaded.</p>
      </div>
    </div>
  );
}

function ContactContent() {
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
                <label className="block text-white/70 font-mono mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 font-mono mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 font-mono mb-1">Message</label>
                <textarea
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
