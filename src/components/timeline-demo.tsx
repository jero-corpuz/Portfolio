'use client';
import React from 'react';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';

export default function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: 'Jan 2022 – Jun 2026',
      content: (
        <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all">
          <h4 className="text-base font-bold text-white">
            Web Developer <span className="text-blue-400 font-mono font-normal">@ Blue Pig Web Solutions (Baguio City)</span>
          </h4>
          <ul className="space-y-2 text-xs text-white/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <span className="leading-relaxed">Develop and maintain websites across multiple platforms, implementing new features and improving functionality based on business and client requirements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <span className="leading-relaxed">Build and customize web solutions using modern web technologies, while optimizing website performance, responsiveness, and SEO.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Nov 2019 – Dec 2021',
      content: (
        <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all">
          <h4 className="text-base font-bold text-white">
            Junior Project Manager <span className="text-purple-400 font-mono font-normal">@ Technodream LLC (Baguio City)</span>
          </h4>
          <ul className="space-y-2 text-xs text-white/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span className="leading-relaxed">Gathered and analyzed client requirements for WordPress projects and assisted in translating them into technical specifications.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span className="leading-relaxed">Coordinated between developers, designers, and clients while preparing project quotations and ensuring timely delivery.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Feb 2018 – Dec 2018',
      content: (
        <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-emerald-500/40 transition-all">
          <h4 className="text-base font-bold text-white">
            Customer Support Representative <span className="text-emerald-400 font-mono font-normal">@ Sitel (Baguio City)</span>
          </h4>
          <ul className="space-y-2 text-xs text-white/80 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span className="leading-relaxed">Provided support to banking customers affected by fraud, theft, or identity-related concerns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span className="leading-relaxed">Assisted customers with credit card inquiries while maintaining compliance with financial security procedures.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Project Based',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all">
            <h5 className="text-sm font-bold text-white">
              Shopify Developer <span className="text-amber-400 font-mono font-normal">@ Uppertech</span>
            </h5>
            <ul className="space-y-2 text-xs text-white/80 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span className="leading-relaxed">Developed and customized Shopify stores, implementing scalable features and optimized storefront performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span className="leading-relaxed">Managed store maintenance, updates, and troubleshooting to ensure reliability and smooth user experience.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all">
            <h5 className="text-sm font-bold text-white">
              Web Developer <span className="text-cyan-400 font-mono font-normal">@ Technodream LLC</span>
            </h5>
            <ul className="space-y-2 text-xs text-white/80 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span className="leading-relaxed">Built and customized WordPress websites, including theme and plugin modifications based on client requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span className="leading-relaxed">Provided technical guidance to junior developers and supported project implementation.</span>
              </li>
            </ul>
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
