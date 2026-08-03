'use client';

import React from 'react';
import { ViewMode } from '@/types/os';
import { Monitor, Smartphone, RotateCcw } from 'lucide-react';

interface ViewSwitcherProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  onReboot: () => void;
}

export default function ViewSwitcher({
  currentMode,
  onModeChange,
  onReboot,
}: ViewSwitcherProps) {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-90 flex items-center gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl text-xs font-mono">
      <button
        onClick={() => onModeChange('desktop')}
        className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
          currentMode === 'desktop'
            ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <Monitor className="w-3.5 h-3.5" /> Desktop
      </button>

      <button
        onClick={() => onModeChange('mobile')}
        className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
          currentMode === 'mobile'
            ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-500/30'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <Smartphone className="w-3.5 h-3.5" /> iPhone
      </button>

      <button
        onClick={onReboot}
        title="Reboot OS Boot Sequence"
        className="p-1.5 rounded-full text-white/50 hover:text-amber-300 hover:bg-white/10 transition-colors ml-1"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
