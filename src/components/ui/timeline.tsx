'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0.2); // Start with visible glowing beam

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Find closest scrollable modal container or fallback to window
    const scrollParent = el.closest('.overflow-y-auto') || window;

    const handleScroll = () => {
      if (!ref.current) return;

      if (scrollParent === window) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0),
          1
        );
        setScrollProgress(progress);
      } else {
        const parentEl = scrollParent as HTMLElement;
        const parentRect = parentEl.getBoundingClientRect();
        const rect = ref.current.getBoundingClientRect();
        
        // Calculate scroll offset relative to parent modal window
        const scrolledAmount = parentRect.top - rect.top + parentEl.clientHeight * 0.4;
        const totalHeight = rect.height;
        const progress = Math.min(Math.max(scrolledAmount / (totalHeight || 1), 0.15), 1);
        setScrollProgress(progress);
      }
    };

    scrollParent.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollParent.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeBeamHeight = Math.max(height * scrollProgress, 60);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-4"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-4 px-2 md:px-4">
        <h2 className="text-lg md:text-2xl mb-1 text-white font-bold tracking-tight">
          Career Timeline & History
        </h2>
        <p className="text-neutral-400 text-xs font-mono max-w-xl">
          A visual timeline of my web development journey, lead architecture projects, and corporate growth.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-10 gap-4 md:gap-6"
          >
            <div className="sticky flex items-center top-16 self-start shrink-0 z-40">
              <div className="h-7 w-7 absolute left-[30px] -translate-x-1/2 rounded-full bg-[#0c0d16] flex items-center justify-center border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.4)] z-50">
                <div className="h-2.5 w-2.5 rounded-full bg-purple-400 border border-white animate-pulse" />
              </div>
              <div className="hidden md:block pl-14">
                <span className="inline-block text-[11px] font-mono font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 rounded-md shadow-xs">
                  {item.title}
                </span>
              </div>
            </div>

            <div className="relative pl-14 md:pl-2 w-full grow">
              <div className="md:hidden mb-2">
                <span className="inline-block text-[10px] font-mono font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-md">
                  {item.title}
                </span>
              </div>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Base Track Line */}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute left-[30px] -translate-x-1/2 top-0 overflow-hidden w-1 bg-white/10 rounded-full"
        >
          {/* Animated Glowing Beam Line */}
          <motion.div
            animate={{ height: activeBeamHeight }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-x-0 top-0 w-full bg-linear-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)]"
          />
        </div>
      </div>
    </div>
  );
};
