'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/osData';
import { ProjectItem } from '@/types/os';
import { Layers, ExternalLink, Maximize2 } from 'lucide-react';

interface ProjectsContentProps {
  onOpenProjectFrame?: (title: string, url: string) => void;
}

export default function ProjectsContent({ onOpenProjectFrame }: ProjectsContentProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = [
    'All',
    'WordPress',
    'Shopify',
    'Squarespace',
    'Elementor Pro',
    'Divi',
    'Duda',
    'Webflow',
  ];

  const filteredProjects =
    selectedTag === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedTag.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
        );

  const handleOpenProjectWindow = (project: ProjectItem) => {
    if (project.link && onOpenProjectFrame) {
      onOpenProjectFrame(project.title, project.link);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      {/* Header & Category Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" /> Jero's Featured Projects
          </h3>
          <p className="text-xs text-white/60 font-mono mt-0.5">
            Showing {filteredProjects.length} projects • Click any project card to launch a dedicated OS window
          </p>
        </div>

        {/* Tag Filter Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-xl font-bold transition-all cursor-pointer border ${
                selectedTag === tag
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Grid List of Cards (Clicking opens new OS Window) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenProjectWindow(project)}
            className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 p-5 transition-all hover:bg-white/8 flex flex-col justify-between overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Background Accent Glow */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${project.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity pointer-events-none`}
            />

            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/90 font-mono text-[11px] font-bold border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/50">{project.year}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5 flex items-center justify-between">
                {project.title}
                <Maximize2 className="w-4 h-4 text-white/30 group-hover:text-emerald-400 transition-colors shrink-0" />
              </h3>

              <p className="text-xs text-emerald-400/90 font-mono mb-2">
                Client: {project.client}
              </p>

              <p className="text-xs text-white/75 leading-relaxed font-sans mb-4">
                {project.excerpt || project.description}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <span className="text-emerald-400 font-bold text-[11px]">{project.metrics}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenProjectWindow(project);
                }}
                className="flex items-center gap-1.5 text-white bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 rounded-xl border border-emerald-400/30 transition-all font-bold cursor-pointer shadow-md"
              >
                Open OS Window <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
