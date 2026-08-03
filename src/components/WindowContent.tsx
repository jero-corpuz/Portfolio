'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AboutContent from './apps/AboutContent';
import ProjectsContent from './apps/ProjectsContent';
import SkillsContent from './apps/SkillsContent';
import ContactContent from './apps/ContactContent';
import WallpaperContent from './apps/WallpaperContent';

const WebcamPixelGrid = dynamic(() => import('./ui/webcam-pixel-grid'), { ssr: false });

interface WindowContentProps {
  appId: string;
  onOpenProjectFrame?: (title: string, url: string) => void;
  activeWallpaper?: string;
  onSelectWallpaper?: (id: string) => void;
}

export default function WindowContent({
  appId,
  onOpenProjectFrame,
  activeWallpaper = 'blobs',
  onSelectWallpaper,
}: WindowContentProps) {
  switch (appId) {
    case 'about':
      return <AboutContent />;
    case 'projects':
      return <ProjectsContent onOpenProjectFrame={onOpenProjectFrame} />;
    case 'skills':
      return <SkillsContent />;
    case 'contact':
      return <ContactContent />;
    case 'camera':
      return <WebcamPixelGrid />;
    case 'wallpaper':
      return (
        <WallpaperContent
          activeWallpaper={activeWallpaper}
          onSelectWallpaper={onSelectWallpaper}
        />
      );
    default:
      return null;
  }
}
