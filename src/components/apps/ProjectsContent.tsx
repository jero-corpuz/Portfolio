'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/osData';
import { Layers, Star, Maximize2, ExternalLink } from 'lucide-react';

interface ProjectsContentProps {
  onOpenProjectFrame?: (title: string, url: string) => void;
}

export default function ProjectsContent({ onOpenProjectFrame }: ProjectsContentProps) {
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
