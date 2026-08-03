'use client';

import React, { useState, useEffect } from 'react';
import { ViewMode } from '@/types/os';
import BootScreen from '@/components/BootScreen';
import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  useEffect(() => {
    const checkIsMobileOrTablet = () => {
      if (typeof window === 'undefined') return;

      // Comprehensive user-agent check for iPhone, Mobile & Tablets (iPad, Android, etc.)
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(
        navigator.userAgent
      );

      // Touch capability check (e.g. iPad Pro in desktop mode)
      const isTouchDevice =
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
        ('ontouchstart' in window);

      // Screen width threshold (Covers phones and tablets up to 1024px)
      const isNarrowOrTablet = window.innerWidth <= 1024;

      if (isMobileUA || (isTouchDevice && isNarrowOrTablet) || window.innerWidth < 1024) {
        setViewMode('mobile');
      } else {
        setViewMode('desktop');
      }
    };

    checkIsMobileOrTablet();
    window.addEventListener('resize', checkIsMobileOrTablet);
    return () => window.removeEventListener('resize', checkIsMobileOrTablet);
  }, []);

  const handleReboot = () => {
    setIsBooted(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#05050a]">
      {!isBooted ? (
        <BootScreen onBootComplete={() => setIsBooted(true)} />
      ) : viewMode === 'desktop' ? (
        <DesktopView
          onReboot={handleReboot}
          onSwitchToMobile={() => setViewMode('mobile')}
        />
      ) : (
        <MobileView
          onReboot={handleReboot}
          onSwitchToDesktop={() => setViewMode('desktop')}
        />
      )}
    </div>
  );
}
