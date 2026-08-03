'use client';

import React, { useState, useEffect } from 'react';
import { ViewMode } from '@/types/os';
import BootScreen from '@/components/BootScreen';
import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';
import ViewSwitcher from '@/components/ViewSwitcher';

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  useEffect(() => {
    // Auto detect screen size
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setViewMode('mobile');
    }
  }, []);

  const handleReboot = () => {
    setIsBooted(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#05050a]">
      {!isBooted ? (
        <BootScreen onBootComplete={() => setIsBooted(true)} />
      ) : (
        <>
          <ViewSwitcher
            currentMode={viewMode}
            onModeChange={(mode) => setViewMode(mode)}
            onReboot={handleReboot}
          />

          {viewMode === 'desktop' ? (
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
        </>
      )}
    </div>
  );
}
