import {
  AppConfig,
  ProjectItem,
  SkillCategory,
  ExperienceItem,
  WallpaperPreset,
} from "@/types/os";

export const APPS: AppConfig[] = [
  {
    id: "about",
    title: "About Me",
    filename: "About_Jero.exe",
    iconName: "person",
    color: "#afc6ff",
    badgeColor: "#2e7cff",
    category: "System",
    description: "Developer profile, bio, and background overview",
  },
  {
    id: "projects",
    title: "My Projects",
    filename: "Projects.dir",
    iconName: "folder_open",
    color: "#4edea3",
    badgeColor: "#00a572",
    category: "Work",
    description: "Explore live web apps, custom platforms & client solutions",
  },
  {
    id: "skills",
    title: "Skill Set",
    filename: "System_Terminal.sh",
    iconName: "terminal",
    color: "#ddb7ff",
    badgeColor: "#6f00be",
    category: "Terminal",
    description: "Web development stack & tech capabilities shell",
  },
  {
    id: "contact",
    title: "Get in Touch",
    filename: "Connect_Client.app",
    iconName: "mail",
    color: "#ffb4ab",
    badgeColor: "#93000a",
    category: "Network",
    description: "Direct contact form and social connection hub",
  },
  {
    id: "camera",
    title: "Camera",
    filename: "Camera.app",
    iconName: "camera",
    color: "#f43f5e",
    badgeColor: "#e11d48",
    category: "Media",
    description: "Aceternity webcam pixel grid interactive motion camera",
  },
  {
    id: "wallpaper",
    title: "Wallpapers",
    filename: "Wallpaper_Picker.app",
    iconName: "palette",
    color: "#ec4899",
    badgeColor: "#db2777",
    category: "Customization",
    description: "Live Aceternity background wallpaper customizer",
  },
];

export const WALLPAPERS: WallpaperPreset[] = [
  {
    id: "floating-lines",
    name: "React Bits 3D Floating Lines",
    category: "Dynamic",
    previewGradient: "from-[#e947f5] via-[#2f4ba2] to-black",
  },
  {
    id: "particles",
    name: "React Bits 3D Particles",
    category: "Dynamic",
    previewGradient: "from-blue-600 via-indigo-900 to-black",
  },
  {
    id: "blobs",
    name: "Cyber Motion Blobs",
    category: "Dynamic",
    previewGradient: "from-blue-600 via-purple-600 to-indigo-900",
  },
  {
    id: "boxes",
    name: "Interactive Grid Boxes",
    category: "Dynamic",
    previewGradient: "from-slate-900 via-slate-800 to-slate-950",
  },
  {
    id: "gradient-anim",
    name: "Animated Gradient Flow",
    category: "Dynamic",
    previewGradient: "from-purple-900 via-indigo-900 to-black",
  },
  {
    id: "wavy",
    name: "Wavy Canvas Shader",
    category: "Dynamic",
    previewGradient: "from-cyan-900 via-[#0a0b1e] to-black",
  },
  {
    id: "synthwave",
    name: "Synthwave Pulse",
    category: "Dynamic",
    previewGradient: "from-fuchsia-950 via-purple-900 to-black",
  },
  {
    id: "cyber-grid",
    name: "Cyberpunk Horizon",
    category: "Dynamic",
    previewGradient: "from-pink-950 via-cyan-950 to-black",
  },
  {
    id: "sunset",
    name: "Neon Sunset",
    category: "Static",
    previewGradient: "from-amber-950 via-rose-950 to-black",
  },
  {
    id: "matrix",
    name: "Hacker Matrix Glow",
    category: "Static",
    previewGradient: "from-emerald-950 via-black to-emerald-950",
  },
  {
    id: "aurora",
    name: "Northern Aurora",
    category: "Static",
    previewGradient: "from-teal-950 via-emerald-950 to-black",
  },
  {
    id: "space",
    name: "Deep Space Void",
    category: "Static",
    previewGradient: "from-indigo-950 via-slate-950 to-black",
  },
  {
    id: "nebula",
    name: "Cosmic Nebula",
    category: "Static",
    previewGradient: "from-purple-950 via-violet-900 to-black",
  },
  {
    id: "minimal",
    name: "Dark Onyx Minimal",
    category: "Static",
    previewGradient: "from-zinc-900 via-zinc-950 to-black",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Blue Pig Web Solutions (Baguio City)",
    date: "January 2022 – June 2026",
    type: "corporate",
    bullets: [
      "Develop and maintain websites across multiple platforms, implementing new features and improving functionality based on business and client requirements.",
      "Build and customize web solutions using modern web technologies, while optimizing website performance, responsiveness, and SEO.",
    ],
  },
  {
    role: "Junior Project Manager",
    company: "Technodream LLC (Baguio City)",
    date: "November 2019 – December 2021",
    type: "corporate",
    bullets: [
      "Gathered and analyzed client requirements for WordPress projects and assisted in translating them into technical specifications.",
      "Coordinated between developers, designers, and clients while preparing project quotations and ensuring timely delivery.",
    ],
  },
  {
    role: "Customer Support Representative",
    company: "Sitel (Baguio City)",
    date: "February 2018 – December 2018",
    type: "corporate",
    bullets: [
      "Provided support to banking customers affected by fraud, theft, or identity-related concerns.",
      "Assisted customers with credit card inquiries while maintaining compliance with financial security procedures.",
    ],
  },
  {
    role: "Shopify Developer (Project Based)",
    company: "Uppertech",
    date: "Project Based",
    type: "freelance",
    bullets: [
      "Developed and customized Shopify stores, implementing scalable features and optimized storefront performance.",
      "Managed store maintenance, updates, and troubleshooting to ensure reliability and smooth user experience.",
    ],
  },
  {
    role: "Web Developer (Project Based)",
    company: "Technodream LLC",
    date: "Project Based",
    type: "freelance",
    bullets: [
      "Built and customized WordPress websites, including theme and plugin modifications based on client requirements.",
      "Provided technical guidance to junior developers and supported project implementation.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "uppertech",
    title: "Uppertech Shopify Platform",
    category: "Shopify Storefront",
    description:
      "Bespoke Shopify storefront engineered for high conversion, liquid template customization, and headless performance.",
    tags: ["Shopify", "Liquid", "Tailwind CSS", "JavaScript"],
    stars: "5.0",
    metrics: "Storefront Architecture",
    link: "https://jero-portfolio.netlify.app/",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "bluepig",
    title: "Blue Pig Enterprise WordPress",
    category: "WordPress Architecture",
    description:
      "Custom WordPress Gutenberg block theme and enterprise client architecture built for maximum scalability and speed.",
    tags: ["WordPress", "PHP", "Gutenberg", "Elementor Pro"],
    stars: "4.9",
    metrics: "Lead WordPress Arch",
    link: "https://jero-portfolio.netlify.app/",
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    id: "aviationta",
    title: "AviationTA Portal",
    category: "Aviation Web App",
    description:
      "Full web platform for AviationTA featuring course booking systems, client portals, and interactive schedules.",
    tags: ["Booking UI", "WordPress", "JavaScript", "REST API"],
    stars: "4.9",
    metrics: "Aviation TA Live",
    link: "https://aviationta.aero/",
    gradient: "from-purple-500 to-pink-700",
  },
  {
    id: "divi-booking",
    title: "Custom Booking & Scheduling Engine",
    category: "Custom Web App",
    description:
      "Interactive appointment and service scheduling web app with automated notifications and calendar sync.",
    tags: ["Divi", "WordPress", "Accessibility", "Booking UI"],
    stars: "4.8",
    metrics: "Client Scheduling System",
    link: "https://jero-portfolio.netlify.app/",
    gradient: "from-amber-500 to-rose-700",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development & Frontend",
    skills: [
      { name: "React / Next.js", level: 92, tag: "Expert" },
      { name: "TypeScript & JavaScript", level: 90, tag: "Expert" },
      { name: "Tailwind CSS & Styling", level: 95, tag: "Master" },
      { name: "Modern HTML5 / CSS3", level: 96, tag: "Master" },
    ],
  },
  {
    title: "CMS & Ecommerce Solutions",
    skills: [
      { name: "Shopify & Liquid", level: 94, tag: "Master" },
      { name: "WordPress & PHP Architecture", level: 95, tag: "Master" },
      { name: "Gutenberg / Divi / Elementor", level: 96, tag: "Master" },
      { name: "WooCommerce & Storefronts", level: 90, tag: "Expert" },
    ],
  },
  {
    title: "Tooling & Deployment",
    skills: [
      { name: "Git & GitHub Workflow", level: 92, tag: "Expert" },
      { name: "Netlify / Vercel Hosting", level: 94, tag: "Master" },
      { name: "REST APIs & Webhooks", level: 88, tag: "Advanced" },
      { name: "WCAG Accessibility (a11y)", level: 90, tag: "Expert" },
    ],
  },
];
