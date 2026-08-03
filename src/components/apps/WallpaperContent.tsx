'use client';

import React, { useState } from 'react';
import { WALLPAPERS } from '@/data/osData';
import { Palette, Check as CheckIcon } from 'lucide-react';

interface WallpaperContentProps {
  activeWallpaper: string;
  onSelectWallpaper?: (id: string) => void;
}

export default function WallpaperContent({
  activeWallpaper,
  onSelectWallpaper,
}: WallpaperContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Dynamic' | 'Static'>('All');

  const filteredWallpapers =
    selectedCategory === 'All'
      ? WALLPAPERS
      : WALLPAPERS.filter((wp) => wp.category === selectedCategory);

  return (
    <div className="space-y-6 text-[#e5e2e1]">
      <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Palette className="w-5 h-5 text-pink-400" /> Wallpaper & Aesthetics Picker
          </h3>
          <p className="text-xs text-white/60 font-mono mt-0.5">
            Select an OS background wallpaper preset (Saved automatically in your browser)
          </p>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
          {(['All', 'Dynamic', 'Static'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'Dynamic' ? '⚡ Dynamic' : cat === 'Static' ? '🎨 Static' : 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Wallpapers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredWallpapers.map((wp) => {
          const isSelected = activeWallpaper === wp.id;
          return (
            <div
              key={wp.id}
              onClick={() => onSelectWallpaper && onSelectWallpaper(wp.id)}
              className={`group relative rounded-2xl p-4 border transition-all cursor-pointer overflow-hidden flex flex-col justify-between h-40 ${
                isSelected
                  ? 'border-pink-500 ring-2 ring-pink-500/50 shadow-lg shadow-pink-500/20 bg-white/10'
                  : 'border-white/15 bg-white/5 hover:border-pink-500/50 hover:bg-white/10'
              }`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${wp.previewGradient} opacity-40 group-hover:opacity-60 transition-opacity`} />

              <div className="relative z-10 flex justify-between items-start">
                <span className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold border ${
                  wp.category === 'Dynamic'
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}>
                  {wp.category === 'Dynamic' ? '⚡ Dynamic' : '🎨 Static'}
                </span>
                {isSelected && (
                  <span className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div className="relative z-10">
                <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                  {wp.name}
                </h4>
                <p className="text-[11px] text-white/60 font-mono">
                  {isSelected ? 'Active Wallpaper' : 'Click to Apply'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
