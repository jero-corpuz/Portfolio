'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { AppId, WindowState } from '@/types/os';
import { APPS, WALLPAPERS } from '@/data/osData';
import WindowContent from './WindowContent';
import dynamic from 'next/dynamic';

const Boxes = dynamic(() => import('@/components/ui/background-boxes').then(m => m.Boxes), { ssr: false });
const BackgroundGradientAnimation = dynamic(() => import('@/components/ui/background-gradient-animation').then(m => m.BackgroundGradientAnimation), { ssr: false });
const WavyBackground = dynamic(() => import('@/components/ui/wavy-background').then(m => m.WavyBackground), { ssr: false });
const FloatingLines = dynamic(() => import('@/components/ui/floating-lines'), { ssr: false });
const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });
import {
  Wifi,
  Battery,
  User,
  FolderOpen,
  Terminal,
  Mail,
  Minus,
  Square,
  X,
  Sparkles,
  Briefcase,
  Globe,
  ExternalLink,
  RotateCw,
  Camera,
  Palette,
  ChevronDown,
  Smartphone,
  RefreshCw,
} from 'lucide-react';

interface DesktopViewProps {
  onReboot: () => void;
  onSwitchToMobile: () => void;
}

export default function DesktopView({ onReboot, onSwitchToMobile }: DesktopViewProps) {
  // Wallpaper state with localStorage persistence
  const [activeWallpaper, setActiveWallpaper] = useState<string>('blobs');

  // Top-left JerOS Dropdown Menu state
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Open windows state with initial cascade position (x: 140, y: 64)
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'about',
      title: 'About_Jero.exe',
      filename: 'About_Jero.exe',
      iconName: 'person',
      color: '#afc6ff',
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 140,
      y: 64,
    },
  ]);

  const [activeZIndex, setActiveZIndex] = useState(20);
  const [activeWindowId, setActiveWindowId] = useState<string | null>('about');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Restore saved wallpaper from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_os_wallpaper');
    if (saved) {
      setActiveWallpaper(saved);
    }
  }, []);

  // Live time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close system dropdown menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsSystemMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectWallpaper = (id: string) => {
    setActiveWallpaper(id);
    localStorage.setItem('portfolio_os_wallpaper', id);
  };

  // Helper to calculate cascading offset (+35px x, +35px y lower than recent window)
  const getNextCascadePos = () => {
    if (windows.length === 0) return { x: 140, y: 64 };
    const lastWin = windows[windows.length - 1];
    let nextX = lastWin.x + 35;
    let nextY = lastWin.y + 35;
    if (nextX > 400 || nextY > 260) {
      nextX = 140 + ((windows.length * 15) % 120);
      nextY = 64 + ((windows.length * 15) % 120);
    }
    return { x: nextX, y: nextY };
  };

  // Open / Hide / Unhide app window from dock or desktop
  const handleOpenApp = (id: AppId) => {
    const existing = windows.find((w) => w.id === id);
    const newZ = activeZIndex + 1;

    if (existing) {
      if (!existing.isMinimized && activeWindowId === id) {
        setWindows((prev) =>
          prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
        );
        setActiveWindowId(null);
      } else {
        setActiveZIndex(newZ);
        setActiveWindowId(id);
        setWindows((prev) =>
          prev.map((w) =>
            w.id === id ? { ...w, isMinimized: false, zIndex: newZ } : w
          )
        );
      }
    } else {
      const appInfo = APPS.find((a) => a.id === id)!;
      const { x: newX, y: newY } = getNextCascadePos();
      setActiveZIndex(newZ);
      setActiveWindowId(id);
      setWindows((prev) => [
        ...prev,
        {
          id,
          title: appInfo.filename,
          filename: appInfo.filename,
          iconName: appInfo.iconName,
          color: appInfo.color,
          isMinimized: false,
          isMaximized: false,
          zIndex: newZ,
          x: newX,
          y: newY,
        },
      ]);
    }
  };

  // Open Project Iframe Window cascading lower in Desktop OS
  const handleOpenProjectFrame = (projectTitle: string, url: string) => {
    const winId = `frame-${projectTitle.replace(/\s+/g, '-').toLowerCase()}`;
    const existing = windows.find((w) => w.id === winId);
    const newZ = activeZIndex + 1;

    if (existing) {
      if (!existing.isMinimized && activeWindowId === winId) {
        setWindows((prev) =>
          prev.map((w) => (w.id === winId ? { ...w, isMinimized: true } : w))
        );
        setActiveWindowId(null);
      } else {
        setActiveZIndex(newZ);
        setActiveWindowId(winId);
        setWindows((prev) =>
          prev.map((w) =>
            w.id === winId ? { ...w, isMinimized: false, zIndex: newZ } : w
          )
        );
      }
    } else {
      const { x: newX, y: newY } = getNextCascadePos();
      setActiveZIndex(newZ);
      setActiveWindowId(winId);
      setWindows((prev) => [
        ...prev,
        {
          id: winId,
          title: `Browser: ${projectTitle}`,
          filename: `Browser_${projectTitle}.app`,
          iconName: 'globe',
          color: '#3b82f6',
          isMinimized: false,
          isMaximized: false,
          zIndex: newZ,
          x: newX,
          y: newY,
          iframeUrl: url,
        },
      ]);
    }
  };

  // Close window
  const handleCloseWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      const remaining = windows.filter((w) => w.id !== id);
      setActiveWindowId(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  // Minimize window
  const handleMinimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  // Toggle maximize
  const handleMaximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  };

  // Bring window to focus
  const handleFocusWindow = (id: string) => {
    const newZ = activeZIndex + 1;
    setActiveZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w))
    );
  };

  // Icon switcher helper
  const renderAppIcon = (iconName: string, className = 'w-7 h-7') => {
    switch (iconName) {
      case 'person':
        return <User className={className} />;
      case 'briefcase':
        return <Briefcase className={className} />;
      case 'folder_open':
        return <FolderOpen className={className} />;
      case 'terminal':
        return <Terminal className={className} />;
      case 'mail':
        return <Mail className={className} />;
      case 'camera':
        return <Camera className={className} />;
      case 'palette':
        return <Palette className={className} />;
      case 'globe':
        return <Globe className={className} />;
      default:
        return <User className={className} />;
    }
  };

  return (
    <div className="relative h-screen w-screen bg-[#05050a] text-[#e5e2e1] font-sans select-none overflow-hidden">
      <div className="noise-overlay" />

      {/* Dynamic Wallpaper Background Engine (Pointer Events Enabled) */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#05050a] pointer-events-auto">
        {activeWallpaper === 'floating-lines' ? (
          <div className="absolute inset-0 bg-[#05050a] overflow-hidden pointer-events-auto">
            <FloatingLines
              linesGradient={['#e947f5', '#4775a2', '#2f4ba2', '#ec4899']}
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={[10, 15, 20]}
              lineDistance={[8, 6, 4]}
              bendRadius={6.0}
              bendStrength={-0.8}
              interactive={true}
              parallax={true}
            />
          </div>
        ) : activeWallpaper === 'particles' ? (
          <div className="absolute inset-0 bg-[#05050a] overflow-hidden pointer-events-auto">
            <Particles
              particleColors={['#60a5fa', '#a855f7', '#ec4899', '#34d399']}
              particleCount={250}
              particleSpread={12}
              speed={0.15}
              particleBaseSize={120}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>
        ) : activeWallpaper === 'boxes' ? (
          <div className="absolute inset-0 bg-slate-900 overflow-hidden pointer-events-auto">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
          </div>
        ) : activeWallpaper === 'gradient-anim' ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-auto">
            <BackgroundGradientAnimation />
          </div>
        ) : activeWallpaper === 'wavy' ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-auto">
            <WavyBackground />
          </div>
        ) : activeWallpaper === 'synthwave' ? (
          <div className="absolute inset-0 bg-linear-to-b from-fuchsia-950 via-purple-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ec4899_0%,transparent_60%)] opacity-40" />
            <div className="abstract-blob w-150 h-150 bg-pink-600 top-[-10%] left-[20%] opacity-40 animate-pulse" />
          </div>
        ) : activeWallpaper === 'cyber-grid' ? (
          <div className="absolute inset-0 bg-linear-to-b from-pink-950 via-cyan-950 to-black overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#06b6d4_0%,transparent_70%)] opacity-35" />
            <div className="abstract-blob w-150 h-150 bg-cyan-500 top-[10%] left-[30%] opacity-30 animate-pulse" />
          </div>
        ) : activeWallpaper === 'sunset' ? (
          <div className="absolute inset-0 bg-linear-to-b from-amber-950 via-rose-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f43f5e_0%,transparent_70%)] opacity-45" />
          </div>
        ) : activeWallpaper === 'matrix' ? (
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#052e16_0%,transparent_80%)]" />
          </div>
        ) : activeWallpaper === 'aurora' ? (
          <div className="absolute inset-0 bg-linear-to-b from-teal-950 via-emerald-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#14b8a6_0%,transparent_65%)] opacity-40" />
          </div>
        ) : activeWallpaper === 'space' ? (
          <div className="absolute inset-0 bg-[#060713]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e1b4b_0%,transparent_60%)]" />
            <div className="abstract-blob w-150 h-150 bg-indigo-700 top-[10%] left-[60%] opacity-25" />
          </div>
        ) : activeWallpaper === 'nebula' ? (
          <div className="absolute inset-0 bg-linear-to-b from-purple-950 via-violet-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf6_0%,transparent_70%)] opacity-35" />
          </div>
        ) : activeWallpaper === 'minimal' ? (
          <div className="absolute inset-0 bg-[#0f1017]" />
        ) : (
          /* Default Cyber Blobs */
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a3a_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#0a0a20_0%,transparent_50%)]" />
            <div className="abstract-blob w-150 h-150 bg-[#2e7cff] top-[-10%] left-[-10%] opacity-35" style={{ animationDuration: '25s' }} />
            <div className="abstract-blob w-125 h-125 bg-[#6f00be] bottom-[-5%] right-[10%] opacity-35" style={{ animationDuration: '30s', animationDelay: '-5s' }} />
            <div className="abstract-blob w-100 h-100 bg-[#00a572] top-[40%] left-[60%] opacity-20" style={{ animationDuration: '22s', animationDelay: '-2s' }} />
            <div className="abstract-blob w-112.5 h-112.5 bg-[#548dff] bottom-[20%] left-[5%] opacity-15" style={{ animationDuration: '28s', animationDelay: '-10s' }} />
          </>
        )}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Top Status Bar with JerOS System Dropdown */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-9 bg-[#0a0b14]/90 backdrop-blur-md border-b border-white/10 text-xs font-mono pointer-events-auto">
        {/* Top-Left JerOS Brand Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            aria-expanded={isSystemMenuOpen}
            aria-haspopup="true"
            aria-label="System Menu Dropdown"
            onClick={() => setIsSystemMenuOpen(!isSystemMenuOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-white/10 text-white font-extrabold tracking-tight font-sans text-sm transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Jero OS</span>
            <ChevronDown className={`w-3.5 h-3.5 text-white/60 transition-transform ${isSystemMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Sleek System Dropdown Menu */}
          <AnimatePresence>
            {isSystemMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-1 w-56 bg-[#111222]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-1.5 z-100 text-xs font-sans space-y-1"
                role="menu"
                aria-label="System Options"
              >
                <div className="px-3 py-1.5 border-b border-white/10">
                  <p className="font-bold text-white text-xs">Jero OS System</p>
                  <p className="text-[10px] text-white/50 font-mono">Version 2026.1</p>
                </div>

                <button
                  role="menuitem"
                  onClick={() => {
                    setIsSystemMenuOpen(false);
                    onSwitchToMobile();
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 text-white font-mono flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Mobile View
                  </span>
                  <span className="text-[10px] opacity-40">📱</span>
                </button>

                <button
                  role="menuitem"
                  onClick={() => {
                    setIsSystemMenuOpen(false);
                    handleOpenApp('wallpaper');
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 text-white font-mono flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-pink-400" /> Wallpapers
                  </span>
                  <span className="text-[10px] opacity-40">🎨</span>
                </button>

                <button
                  role="menuitem"
                  onClick={() => {
                    setIsSystemMenuOpen(false);
                    window.location.reload();
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-500/20 text-rose-300 font-mono flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-rose-400" /> Reboot OS
                  </span>
                  <span className="text-[10px] opacity-40">🔄</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Top-Right Status Metrics */}
        <div className="flex items-center gap-4 text-white/80">
          <Wifi className="w-3.5 h-3.5" aria-label="Wifi Status: Connected" />
          <Battery className="w-4 h-4 text-emerald-400" aria-label="Battery Status: Charged" />
          <span className="font-bold text-white" aria-label={`Current Time: ${currentTime}`}>{currentTime || '12:00 PM'}</span>
        </div>
      </header>

      {/* Desktop Grid Area (Vertical Left-Side Column Alignment) */}
      <main className="relative h-full w-full pt-14 pb-28 px-6 z-10 pointer-events-none">
        <div className="flex flex-col flex-wrap gap-6 max-h-[calc(100vh-160px)] content-start items-start">
          {APPS.map((app) => {
            const isOpen = windows.some((w) => w.id === app.id && !w.isMinimized);
            return (
              <button
                key={app.id}
                role="button"
                tabIndex={0}
                aria-label={`Open ${app.title}`}
                onClick={() => handleOpenApp(app.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenApp(app.id);
                  }
                }}
                className="group flex flex-col items-center gap-2 cursor-pointer transition-all active:scale-95 pointer-events-auto w-25 border-none bg-transparent outline-none focus:ring-2 focus:ring-blue-400 focus:rounded-2xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center border transition-all shadow-lg group-hover:scale-110 group-hover:bg-white/20 ${
                    isOpen ? 'border-blue-400/80 shadow-[0_0_20px_rgba(46,124,255,0.4)]' : 'border-white/20'
                  }`}
                  style={{ color: app.color }}
                >
                  {renderAppIcon(app.iconName, 'w-8 h-8')}
                </div>
                <span className="text-xs font-medium text-center text-white drop-shadow-md tracking-wide group-hover:text-blue-300 truncate max-w-23.75">
                  {app.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Windows Container (Pointer events enabled for active windows) */}
        <AnimatePresence>
          {windows.map((win) => {
            if (win.isMinimized) return null;

            return (
              <DesktopWindow
                key={win.id}
                win={win}
                isActive={activeWindowId === win.id}
                onClose={() => handleCloseWindow(win.id)}
                onMinimize={() => handleMinimizeWindow(win.id)}
                onMaximize={() => handleMaximizeWindow(win.id)}
                onFocus={() => handleFocusWindow(win.id)}
                onOpenProjectFrame={handleOpenProjectFrame}
                activeWallpaper={activeWallpaper}
                onSelectWallpaper={handleSelectWallpaper}
              />
            );
          })}
        </AnimatePresence>
      </main>

      {/* Bottom Floating Magnification Dock */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-2.5 bg-[#0f101c]/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_16px_64px_-16px_rgba(0,0,0,0.8)] pointer-events-auto" aria-label="Desktop Dock">
        {APPS.map((app) => {
          const windowState = windows.find((w) => w.id === app.id);
          const isOpen = windowState && !windowState.isMinimized;
          const isFocused = isOpen && activeWindowId === app.id;

          return (
            <div key={app.id} className="relative group">
              <button
                aria-label={`Launch ${app.title}`}
                onClick={() => handleOpenApp(app.id)}
                className={`p-3 rounded-xl transition-all duration-300 ease-out hover:scale-125 hover:-translate-y-2 flex items-center justify-center shadow-lg cursor-pointer ${
                  isFocused
                    ? 'bg-blue-600 text-white shadow-blue-500/40 ring-2 ring-blue-400/50'
                    : isOpen
                    ? 'bg-blue-900/60 text-white border border-blue-400/40'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                style={{ color: isOpen ? '#ffffff' : app.color }}
              >
                {renderAppIcon(app.iconName, 'w-6 h-6')}
              </button>
              {/* Active Indicator Dot */}
              {windowState && (
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all ${
                    isOpen
                      ? 'bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,1)]'
                      : 'bg-white/40'
                  }`}
                />
              )}
            </div>
          );
        })}
      </footer>
    </div>
  );
}

interface DesktopWindowProps {
  win: WindowState;
  isActive: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onOpenProjectFrame?: (title: string, url: string) => void;
  activeWallpaper?: string;
  onSelectWallpaper?: (id: string) => void;
}

function DesktopWindow({
  win,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onOpenProjectFrame,
  activeWallpaper,
  onSelectWallpaper,
}: DesktopWindowProps) {
  const dragControls = useDragControls();
  const [size, setSize] = useState({
    width: win.iframeUrl ? 960 : 840,
    height: win.iframeUrl ? 640 : 560,
  });
  const [iframeKey, setIframeKey] = useState(0);

  // Free Drag Resize Handler (Bottom-Right & Edges)
  const handleResizeStart = (e: React.PointerEvent, direction: 'se' | 'e' | 's') => {
    e.preventDefault();
    e.stopPropagation();
    onFocus();

    const startX = e.clientX;
    const startY = e.clientY;
    const startW = size.width;
    const startH = size.height;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      setSize({
        width: direction === 's' ? startW : Math.max(380, startW + deltaX),
        height: direction === 'e' ? startH : Math.max(280, startH + deltaY),
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <motion.div
      drag={!win.isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onMouseDown={onFocus}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{
        zIndex: win.zIndex,
        width: win.isMaximized ? '100vw' : `${size.width}px`,
        height: win.isMaximized ? 'calc(100vh - 2.25rem - 4.5rem)' : `${size.height}px`,
        left: win.isMaximized ? 0 : `${win.x}px`,
        top: win.isMaximized ? '2.25rem' : `${win.y}px`,
      }}
      className={`fixed bg-[#0c0d16] border flex flex-col shadow-2xl transition-shadow overflow-hidden pointer-events-auto ${
        win.isMaximized ? 'rounded-none z-99' : 'rounded-2xl'
      } ${
        isActive ? 'window-glow-active border-blue-500/60' : 'window-glow border-white/20'
      }`}
    >
      {/* Title Bar Header */}
      <div
        onPointerDown={(e) => {
          if (!win.isMaximized) {
            dragControls.start(e);
          }
        }}
        className={`h-10 flex items-center justify-between px-4 bg-[#141624] border-b border-white/10 cursor-grab active:cursor-grabbing shrink-0 select-none ${
          win.isMaximized ? 'rounded-none' : 'rounded-t-2xl'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          {/* Red Close */}
          <button
            aria-label="Close window"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/20 hover:opacity-80 transition-opacity flex items-center justify-center group shrink-0 cursor-pointer"
          >
            <X className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100" />
          </button>
          {/* Yellow Minimize */}
          <button
            aria-label="Minimize window"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/20 hover:opacity-80 transition-opacity flex items-center justify-center group shrink-0 cursor-pointer"
          >
            <Minus className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100" />
          </button>
          {/* Green Maximize */}
          <button
            aria-label="Maximize window"
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/20 hover:opacity-80 transition-opacity flex items-center justify-center group shrink-0 cursor-pointer"
          >
            <Square className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
          </button>

          <span className="ml-2 font-mono text-[11px] font-bold text-white/80 uppercase tracking-widest truncate">
            {win.title}
          </span>
        </div>

        {/* Address Bar if Iframe Window */}
        {win.iframeUrl && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-black/40 rounded-lg border border-white/10 text-xs font-mono text-white/70 max-w-xs truncate">
            <Globe className="w-3 h-3 text-blue-400 shrink-0" />
            <span className="truncate">{win.iframeUrl}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIframeKey((k) => k + 1);
              }}
              title="Refresh Iframe"
              className="hover:text-white transition-colors ml-1"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Upper Right Controls */}
        <div className="flex items-center gap-2 text-white/60 shrink-0">
          {win.iframeUrl && (
            <a
              href={win.iframeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
              title="Open in External Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>
          )}
        </div>
      </div>

      {/* Inner Content Area */}
      {win.iframeUrl ? (
        <div className="flex-1 w-full h-full relative bg-[#05050a] flex flex-col">
          <iframe
            key={iframeKey}
            src={win.iframeUrl}
            title={win.title}
            className="w-full h-full border-none bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          <div className="absolute top-2 right-4 z-20 pointer-events-auto">
            <a
              href={win.iframeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-lg bg-blue-600/90 hover:bg-blue-500 text-white font-mono text-[11px] shadow-lg flex items-center gap-1.5 border border-white/20 backdrop-blur-md"
            >
              Open External Tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`flex-1 overflow-y-auto bg-[#0a0b12] relative ${
            win.id === 'camera' || win.id === 'skills' ? 'p-0 overflow-hidden' : 'p-6'
          } ${win.isMaximized ? 'rounded-none' : 'rounded-b-2xl'}`}
        >
          <WindowContent
            appId={win.id}
            onOpenProjectFrame={onOpenProjectFrame}
            activeWallpaper={activeWallpaper}
            onSelectWallpaper={onSelectWallpaper}
          />
        </div>
      )}

      {/* Interactive Free Drag Resize Handles */}
      {!win.isMaximized && (
        <>
          <div
            onPointerDown={(e) => handleResizeStart(e, 'e')}
            className="absolute top-0 right-0 w-2 h-full cursor-ew-resize hover:bg-blue-500/30 transition-colors z-30"
          />
          <div
            onPointerDown={(e) => handleResizeStart(e, 's')}
            className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize hover:bg-blue-500/30 transition-colors z-30"
          />
          <div
            onPointerDown={(e) => handleResizeStart(e, 'se')}
            className="absolute bottom-0 right-0 w-5 h-5 cursor-nwse-resize hover:bg-blue-500/50 rounded-tl rounded-br-2xl transition-colors z-40 flex items-center justify-center"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-white/60">
              <path d="M8 2L2 8M8 5L5 8M8 8L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </>
      )}
    </motion.div>
  );
}
