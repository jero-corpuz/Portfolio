'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Download,
  Check,
  Briefcase,
  User,
  Compass,
  Rocket,
} from 'lucide-react';

const TimelineDemo = dynamic(() => import('../timeline-demo'), { ssr: false });

const RESUME_URL =
  'https://docs.google.com/document/d/1tt9LQ9mTlnZNipFOeCpIIifr95rXS9p6/edit?rtpof=true&sd=true&tab=t.0';

const AVATAR_URL =
  'https://jero-portfolio.netlify.app/_next/image?url=%2Fimages%2Favatar%2Favatar.jpg&w=384&q=75';

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<'about' | 'experience'>('about');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-8 items-start">
        {/* Profile Sidebar */}
        <div className="flex flex-col items-center space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="relative group">
            <div className="absolute -inset-3 bg-linear-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
            <img
              src={AVATAR_URL}
              alt="Jero Corpuz"
              loading="eager"
              decoding="async"
              className="relative w-36 h-36 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>

          {/* Name & Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">Jero</h2>
            <p className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold mt-1">
              Web Developer & Lead Arch
            </p>
          </div>

          {/* 2-Tab Menu Below Name Info */}
          <div className="w-full flex flex-col gap-1.5 p-1.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab('about')}
              className={`w-full py-2.5 px-3 rounded-lg font-bold transition-all flex items-center justify-between cursor-pointer ${
                activeTab === 'about'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" />
                About
              </span>
              <span className="text-[10px] opacity-50">&rarr;</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`w-full py-2.5 px-3 rounded-lg font-bold transition-all flex items-center justify-between cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                Experience
              </span>
              <span className="text-[10px] opacity-50">&rarr;</span>
            </button>
          </div>

          {/* Sidebar Status, Philosophy & Core Info Cards */}
          <div className="w-full space-y-2.5 font-mono text-xs pt-1">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">
                Status
              </span>
              <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Hire
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">
                Philosophy
              </span>
              <span className="text-blue-300 font-bold text-xs flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Platform-Agnostic
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">
                Core Expertise
              </span>
              <span className="text-purple-300 font-bold text-xs block">
                Shopify & WordPress
              </span>
            </div>
          </div>

          {/* Resume Download CTA Button */}
          <div className="w-full pt-1">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleDownload}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 border border-white/20 font-mono text-xs"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" /> Opening...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" /> Full Resume (Docs)
                </>
              )}
            </a>
          </div>
        </div>

        {/* Main Tab Content Display Area */}
        <div className="space-y-6">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <section className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" /> Who I Am
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  I am a Web Developer focused on building high-performance, platform-agnostic digital experiences. My core philosophy is{' '}
                  <span className="text-blue-400 font-semibold underline decoration-blue-500/50">flexibility</span>—identifying the perfect tool for every challenge, whether it's architecting a bespoke Shopify storefront, a custom WordPress ecosystem, or a streamlined low-code solution.
                </p>
              </section>

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
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <TimelineDemo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
