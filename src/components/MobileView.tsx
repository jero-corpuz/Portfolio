'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppId } from '@/types/os';
import { APPS } from '@/data/osData';
import WindowContent from './WindowContent';
import { Boxes } from '@/components/ui/background-boxes';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { WavyBackground } from '@/components/ui/wavy-background';
import {
  Signal,
  Wifi,
  Battery,
  User,
  FolderOpen,
  Terminal,
  Mail,
  ChevronDown,
  Monitor,
  Briefcase,
  Camera,
  Palette,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface MobileViewProps {
  onSwitchToDesktop: () => void;
  onReboot: () => void;
}

export default function MobileView({ onSwitchToDesktop, onReboot }: MobileViewProps) {
  const [activeAppId, setActiveAppId] = useState<AppId | null>('about');
  const [activeWallpaper, setActiveWallpaper] = useState<string>('blobs');
  const [currentTime, setCurrentTime] = useState<string>('09:41');
  const [currentDate, setCurrentDate] = useState<string>('');

  // Top-left PortfolioOS Dropdown Menu state
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Restore saved wallpaper from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_os_wallpaper');
    if (saved) {
      setActiveWallpaper(saved);
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
      setCurrentDate(
        now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
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
      default:
        return <User className={className} />;
    }
  };

  return (
    <div className="relative h-screen w-screen bg-[#131313] text-[#e5e2e1] font-sans select-none overflow-hidden flex flex-col justify-between">
      {/* Wallpaper Engine Canvas */}
      {activeWallpaper === 'boxes' ? (
        <div className="fixed inset-0 bg-slate-900 overflow-hidden pointer-events-auto">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
        </div>
      ) : activeWallpaper === 'gradient-anim' ? (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <BackgroundGradientAnimation />
        </div>
      ) : activeWallpaper === 'wavy' ? (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <WavyBackground />
        </div>
      ) : activeWallpaper === 'synthwave' ? (
        <div className="fixed inset-0 bg-linear-to-b from-fuchsia-950 via-purple-900 to-black pointer-events-none" />
      ) : activeWallpaper === 'sunset' ? (
        <div className="fixed inset-0 bg-sunset-canvas pointer-events-none" />
      ) : activeWallpaper === 'matrix' ? (
        <div className="fixed inset-0 bg-black pointer-events-none" />
      ) : activeWallpaper === 'space' ? (
        <div className="fixed inset-0 bg-[#060713] pointer-events-none" />
      ) : activeWallpaper === 'minimal' ? (
        <div className="fixed inset-0 bg-[#0f1017] pointer-events-none" />
      ) : (
        <div className="fixed inset-0 bg-linear-to-b from-[#1a1a3a] via-[#0a0a20] to-black pointer-events-none" />
      )}

      {/* iPhone Top Status Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-11 pt-2 bg-transparent text-white drop-shadow-sm font-sans font-semibold text-sm">
        <div className="tracking-tight">{currentTime}</div>

        <div className="flex items-center gap-3">
          {/* Top-Right PortfolioOS System Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsSystemMenuOpen(!isSystemMenuOpen)}
              className="px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-white/30 text-[11px] text-white flex items-center gap-1 border border-white/20 backdrop-blur-md transition-colors"
            >
              <Sparkles className="w-3 h-3 text-blue-300" />
              <span>Jero OS</span>
              <ChevronDown className={`w-3 h-3 text-white/70 transition-transform ${isSystemMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isSystemMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-1.5 w-56 bg-[#111222]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-1.5 z-100 text-xs font-sans space-y-1 text-left"
                >
                  <div className="px-3 py-1.5 border-b border-white/10">
                    <p className="font-bold text-white text-xs">Jero OS System</p>
                    <p className="text-[10px] text-white/50 font-mono">Mobile View</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSystemMenuOpen(false);
                      onSwitchToDesktop();
                    }}
                    className="w-full px-3 py-2 rounded-xl hover:bg-blue-600/30 text-blue-300 hover:text-white flex items-center justify-between transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" /> Switch to Desktop OS
                    </span>
                    <span className="text-[10px] font-mono text-white/40">&rarr;</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSystemMenuOpen(false);
                      setActiveAppId('wallpaper');
                    }}
                    className="w-full px-3 py-2 rounded-xl hover:bg-pink-600/30 text-pink-300 hover:text-white flex items-center justify-between transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Palette className="w-4 h-4" /> Change Wallpaper...
                    </span>
                    <span className="text-[10px] font-mono text-white/40">App</span>
                  </button>

                  <div className="border-t border-white/10 my-1" />

                  <button
                    onClick={() => {
                      setIsSystemMenuOpen(false);
                      onReboot();
                    }}
                    className="w-full px-3 py-2 rounded-xl hover:bg-amber-600/30 text-amber-300 hover:text-white flex items-center justify-between transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" /> Reboot OS
                    </span>
                    <span className="text-[10px] font-mono text-white/40">Restart</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="relative z-10 h-full flex flex-col pt-16 pb-28 px-6 overflow-hidden">
        {/* Large Clock Widget */}
        <section className="w-full flex flex-col items-center justify-center py-6 mb-6">
          <h1 className="text-7xl font-bold tracking-tight text-white drop-shadow-lg mb-1">
            {currentTime}
          </h1>
          <p className="font-medium text-base text-white/90 drop-shadow-sm">
            {currentDate || 'Tuesday, June 12'}
          </p>
        </section>

        {/* 7-App Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-x-3 gap-y-6 px-1 grow content-start">
          {APPS.map((app) => (
            <motion.button
              key={app.id}
              whileTap={{ scale: 0.88 }}
              aria-label={`Open ${app.title}`}
              onClick={() => setActiveAppId(app.id)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-[22.5%] bg-white/15 backdrop-blur-xl flex items-center justify-center border border-white/25 shadow-xl group-hover:bg-white/25 transition-colors"
                style={{ color: app.color }}
              >
                {renderAppIcon(app.iconName, 'w-6 h-6')}
              </div>
              <span className="text-[10px] text-white font-medium tracking-wide drop-shadow-md truncate max-w-15">
                {app.title}
              </span>
            </motion.button>
          ))}
        </div>
      </main>

      {/* Bottom iPhone Floating Dock */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center justify-around px-3 h-21 w-[calc(100%-32px)] max-w-100 bg-[#161726]/90 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/20" aria-label="Mobile Dock">
        {APPS.map((app) => (
          <button
            key={app.id}
            aria-label={`Launch ${app.title}`}
            onClick={() => setActiveAppId(app.id)}
            className="w-11 h-11 rounded-[22.5%] bg-white/10 hover:bg-white/20 active:scale-90 transition-all flex items-center justify-center text-white shrink-0 cursor-pointer"
            style={{ color: app.color }}
          >
            {renderAppIcon(app.iconName, 'w-5 h-5')}
          </button>
        ))}
      </nav>

      {/* Slide-Up iOS Modal Sheet (Solid Background) */}
      <AnimatePresence>
        {activeAppId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAppId(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-end justify-center"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-[90%] bg-[#0e0f18] rounded-t-[2.5rem] flex flex-col overflow-hidden shadow-2xl border-t border-white/20"
            >
              {/* iOS Modal Grab Handle Bar */}
              <div
                onClick={() => setActiveAppId(null)}
                className="h-12 w-full flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-1.5 bg-white/40 rounded-full" />
              </div>

              {/* Modal App Header */}
              <div className="px-6 pb-4 border-b border-white/10 flex justify-between items-center bg-[#141524]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15"
                    style={{ color: APPS.find((a) => a.id === activeAppId)?.color }}
                  >
                    {renderAppIcon(APPS.find((a) => a.id === activeAppId)?.iconName || 'person', 'w-5 h-5')}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {APPS.find((a) => a.id === activeAppId)?.title}
                    </h3>
                    <p className="text-xs text-white/50 font-mono">
                      {APPS.find((a) => a.id === activeAppId)?.filename}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveAppId(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Inner Modal Content */}
              <div
                className={`flex-1 overflow-y-auto bg-[#0a0b12] ${
                  activeAppId === 'camera' || activeAppId === 'skills' ? 'p-0 overflow-hidden' : 'p-6'
                }`}
              >
                <WindowContent
                  appId={activeAppId}
                  activeWallpaper={activeWallpaper}
                  onSelectWallpaper={handleSelectWallpaper}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
