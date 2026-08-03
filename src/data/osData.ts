import {
  AppConfig,
  ProjectItem,
  SkillCategory,
  ExperienceItem,
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
    id: "experience",
    title: "Experience",
    filename: "Experience.log",
    iconName: "briefcase",
    color: "#f59e0b",
    badgeColor: "#d97706",
    category: "Career",
    description: "Professional career timeline & freelance milestone log",
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
    badgeColor: "#be123c",
    category: "Media",
    description: "Real-time webcam pixel matrix & snapshot shader",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    date: "Jan 2022 - June 2026",
    role: "Web Developer",
    company: "Blue Pig Web Solutions",
    type: "corporate",
    bullets: [
      "Designing and developing tailored WordPress experiences while leading architecture decisions for client sites.",
      "Delivered new features and UI systems that balanced design polish with maintainable codebases.",
      "Produced net-new themes and plugins to match unique brand requirements.",
      "Handled day-to-day site management, deployments, and performance optimizations.",
    ],
  },
  {
    date: "2024",
    role: "Shopify Developer · Project-Based",
    company: "Uppertech",
    type: "freelance",
    bullets: [
      "Partnering with the Uppertech studio to plan, build, and launch bespoke Shopify storefronts with performance-focused architecture.",
    ],
  },
  {
    date: "2021",
    role: "Freelance Engineer & Coach",
    company: "Technodream LLC",
    type: "freelance",
    bullets: [
      "Supporting internal teams as an on-call specialist for complex builds, client communications, and mentorship.",
    ],
  },
  {
    date: "Nov 2019 - Dec 2021",
    role: "Junior Project Manager",
    company: "Technodream LLC",
    type: "corporate",
    bullets: [
      "Coordinated multiple WordPress initiatives, translating client requirements into actionable backlogs.",
      "Facilitated specification workshops and kept delivery aligned with scope.",
      "Prepared detailed quotations and timelines for multi-site engagements.",
    ],
  },
  {
    date: "Feb 2018 - Dec 2018",
    role: "Customer Support Representative",
    company: "Sitel",
    type: "corporate",
    bullets: [
      "Provided frontline banking support for customers impacted by card fraud, theft, or identity compromise.",
      "Resolved fraud cases empathetically while meeting strict compliance KPIs.",
      "Coordinated card replacements and ensured accurate documentation for each incident.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "aviation-ta",
    title: "AviationTA Charter & Training",
    description:
      "Custom WordPress experience for an aviation training and charter operator, pairing immersive storytelling with booking-ready flows.",
    category: "WordPress / Aviation",
    tags: ["WordPress", "PHP", "Custom UX", "Booking Engine"],
    gradient: "from-blue-600 to-cyan-500",
    stars: 48,
    link: "https://aviationta.aero/",
    metrics: "Immersive Booking Flow",
  },
  {
    id: "therapy-cancer-lives",
    title: "Therapy For Cancer Lives",
    description:
      "A compassion-first WordPress build for an oncology therapy collective, focused on accessibility, trust, and clear care pathways.",
    category: "Healthcare / Web",
    tags: ["WordPress", "Accessibility", "UX Design", "Healthcare"],
    gradient: "from-pink-600 to-[#93000a]",
    stars: 62,
    link: "https://therapyforcancerlives.com",
    metrics: "WCAG AAA Accessibility Focus",
  },
  {
    id: "house-of-comedy",
    title: "House of Comedy Network",
    description:
      "Divi-powered entertainment hub promoting multi-city comedy venues with schedule management and ticketing CTAs.",
    category: "Entertainment",
    tags: ["Divi", "WordPress", "Events API", "Ticket CTAs"],
    gradient: "from-amber-500 to-rose-600",
    stars: 84,
    link: "https://houseofcomedy.net",
    metrics: "Multi-City Ticketing Hub",
  },
  {
    id: "crispin-supper-club",
    title: "Crispin Supper Club",
    description:
      "Divi site for a private dining club highlighting chef stories, tasting menus, and membership perks.",
    category: "Culinary & Hospitality",
    tags: ["Divi", "WordPress", "Membership UI", "Custom Layouts"],
    gradient: "from-violet-600 to-indigo-700",
    stars: 56,
    link: "https://crispinsupperclub.com",
    metrics: "Exclusive Member Portal",
  },
  {
    id: "tilefix-ny",
    title: "Tilefix NY",
    description:
      "Squarespace refresh for a NYC tile repair studio, highlighting artisan quality and quick booking pathways.",
    category: "Artisan & Local Business",
    tags: ["Squarespace", "Custom CSS", "Local SEO", "Booking UI"],
    gradient: "from-emerald-500 to-teal-700",
    stars: 39,
    link: "https://tilefixny.com",
    metrics: "Artisan Showcase & Leads",
  },
  {
    id: "music-klima-festival",
    title: "Music Klima Festival",
    description:
      "Elementor Pro build for a European music collective with rich media storytelling and sponsor-ready blocks.",
    category: "Festival & Media",
    tags: ["Elementor Pro", "WordPress", "Media Gallery", "Sponsor Hub"],
    gradient: "from-fuchsia-600 to-purple-800",
    stars: 71,
    link: "https://music-klima.de",
    metrics: "Rich Media European Hub",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Engineering & Frameworks",
    icon: "code",
    skills: [
      { name: "React / Next.js", level: 92, tag: "Expert" },
      { name: "TypeScript & JavaScript (ES6+)", level: 90, tag: "Expert" },
      { name: "Tailwind CSS & Custom Styling", level: 95, tag: "Master" },
      { name: "HTML5 / Modern CSS / Animations", level: 96, tag: "Master" },
    ],
  },
  {
    title: "CMS & Custom Solutions",
    icon: "database",
    skills: [
      { name: "WordPress (Custom Themes & PHP)", level: 94, tag: "Master" },
      { name: "Divi & Elementor Pro Customization", level: 92, tag: "Master" },
      { name: "Squarespace Custom Refresh", level: 88, tag: "Advanced" },
      { name: "REST APIs & Webhooks", level: 85, tag: "Advanced" },
    ],
  },
  {
    title: "Tooling & Deployment",
    icon: "memory",
    skills: [
      { name: "Netlify & Vercel Deployment", level: 92, tag: "Expert" },
      { name: "Git & GitHub Collaboration", level: 90, tag: "Advanced" },
      { name: "UI/UX Design & Responsive Layouts", level: 95, tag: "Master" },
      { name: "SEO & Performance Optimization", level: 89, tag: "Advanced" },
    ],
  },
];
