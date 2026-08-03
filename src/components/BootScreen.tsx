'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, HardDrive, Zap } from 'lucide-react';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BOOT_MESSAGES = [
  'Jero OS Kernel v2026.8.3 loading...',
  'Initializing Linux x86_64 architecture...',
  'Mounting virtual filesystem /dev/nvme0n1p2...',
  'Loading Glassmorphism Display Server & Compositor...',
  'Establishing secure websocket link to Antigravity Mesh...',
  'Loading desktop icons & window management module...',
  'Injecting custom dark Linux pointer subsystem...',
  'Calibrating dynamic particle background blobs...',
  'System check complete: All 4 virtual sub-apps initialized.',
  'Starting Jero OS Desktop Session...',
];

export default function BootScreen({ onBootComplete }: BootScreenProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress increment timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 5;
        return next > 100 ? 100 : next;
      });
    }, 150);

    // Boot message line revealer
    const messageInterval = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < BOOT_MESSAGES.length - 1) {
          return prev + 1;
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, 220);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && currentLineIndex >= BOOT_MESSAGES.length - 1) {
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        setTimeout(onBootComplete, 600);
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, currentLineIndex, onBootComplete]);

  const handleSkip = () => {
    setProgress(100);
    setCurrentLineIndex(BOOT_MESSAGES.length - 1);
    setIsFinished(true);
    setTimeout(onBootComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-between p-8 bg-[#050509] text-[#e5e2e1] font-mono select-none overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none" />

          {/* Top Header */}
          <div className="w-full max-w-4xl flex items-center justify-between border-b border-white/10 pb-4 z-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Jero OS Bootloader
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> CPU: 8 Cores
              </span>
              <span className="flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-purple-400" /> RAM: 16GB
              </span>
              <span className="text-blue-400 font-bold">Linux v6.8.0</span>
            </div>
          </div>

          {/* Center Branding & Progress */}
          <div className="w-full max-w-2xl flex flex-col items-center my-auto z-10">
            {/* Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <div className="w-24 h-24 rounded-3xl bg-linear-to-tr from-blue-600 via-indigo-600 to-purple-600 p-px shadow-[0_0_60px_rgba(46,124,255,0.4)]">
                <div className="w-full h-full bg-[#0b0c16] rounded-3xl flex items-center justify-center border border-white/10">
                  <Zap className="w-12 h-12 text-blue-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2 text-center font-sans">
              Jero <span className="text-blue-500">OS</span>
            </h1>
            <p className="text-xs text-white/50 tracking-widest uppercase mb-8">
              Virtual Operating System Environment
            </p>

            {/* Terminal Log Box */}
            <div className="w-full h-44 bg-[#0a0b12] rounded-xl border border-white/10 p-4 font-mono text-xs text-blue-300 overflow-hidden flex flex-col justify-end shadow-inner mb-6 relative">
              <div className="space-y-1">
                {BOOT_MESSAGES.slice(0, currentLineIndex + 1).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-emerald-400 font-bold">[OK]</span>
                    <span className={i === currentLineIndex ? 'text-white font-semibold' : 'text-white/70'}>
                      {msg}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2 text-white/40 text-[11px]">
                <span className="w-2 h-4 bg-blue-400 animate-pulse" /> Loading drivers...
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/5 rounded-full h-3 p-0.5 border border-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="w-full flex justify-between items-center text-xs text-white/60 mt-2">
              <span>Initializing workspace...</span>
              <span className="font-bold text-blue-400">{progress}%</span>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="w-full max-w-4xl flex justify-between items-center z-10 text-xs text-white/40 border-t border-white/10 pt-4">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Shield className="w-3.5 h-3.5" /> Security Context: Sandboxed
            </span>
            <button
              onClick={handleSkip}
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors flex items-center gap-1 border border-white/10"
            >
              Skip Boot sequence &rarr;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
