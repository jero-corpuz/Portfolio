'use client';
import React from 'react';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';

export default function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: '2024 - Present',
      content: (
        <div className="space-y-4">
          <p className="text-xs md:text-sm font-normal text-white/90 leading-relaxed font-sans bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-emerald-400 font-mono">Web Developer @ Uppertech:</strong> Architecting and building custom Shopify storefronts, bespoke liquid templates, performance optimizations, and headless integrations.
          </p>
          <p className="text-xs md:text-sm font-normal text-white/90 leading-relaxed font-sans bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-blue-400 font-mono">Web Developer Lead @ Blue Pig Web Solutions:</strong> Leading WordPress architecture, block theme development, custom plugins, and enterprise client site builds.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              ⚡ Shopify Storefronts & Liquid API
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
              🎨 WordPress Gutenberg Architecture
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2023 - 2024',
      content: (
        <div className="space-y-4">
          <p className="text-xs md:text-sm font-normal text-white/90 leading-relaxed font-sans bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-purple-400 font-mono">Web Developer @ AviationTA:</strong> Developed the primary web platform for AviationTA (<a href="https://aviationta.aero/" target="_blank" rel="noreferrer" className="text-blue-400 underline">aviationta.aero</a>), featuring responsive booking flows, course catalogs, and client portals.
          </p>
          <p className="text-xs md:text-sm font-normal text-white/90 leading-relaxed font-sans bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-amber-400 font-mono">Freelance Web Architect:</strong> Designed and deployed accessible WordPress & WooCommerce web apps for international clients with WCAG compliance and page speed optimization.
          </p>
        </div>
      ),
    },
    {
      title: 'Earlier Journey',
      content: (
        <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans">
            Started in Customer Support & Technical Assistance, gaining deep empathy for end-user experiences, before advancing to Project Manager coordinating engineering sprints and client deliverables.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded bg-white/10 text-white/80">Project Management</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-white/80">Client Success</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-white/80">Frontend Engineering</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
