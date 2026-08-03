export type AppId = 'about' | 'experience' | 'projects' | 'skills' | 'contact' | 'camera' | 'wallpaper';

export interface AppConfig {
  id: AppId;
  title: string;
  filename: string;
  iconName: string;
  color: string;
  badgeColor: string;
  category: string;
  description: string;
}

export interface WindowState {
  id: string;
  title: string;
  filename: string;
  iconName: string;
  color: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  iframeUrl?: string;
}

export type ViewMode = 'desktop' | 'mobile';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  gradient: string;
  stars: string;
  link?: string;
  metrics: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  type: 'corporate' | 'freelance';
  bullets: string[];
}

export interface WallpaperPreset {
  id: string;
  name: string;
  category: string;
  previewGradient: string;
  styleClass?: string;
}
