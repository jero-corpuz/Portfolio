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
    title: "Contact",
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
    id: "aviationta-aero",
    slug: "aviationta-aero",
    title: "AviationTA Charter & Training",
    client: "AviationTA",
    category: "WordPress",
    excerpt:
      "Custom WordPress experience for an aviation training and charter operator, pairing immersive storytelling with booking-ready flows.",
    description:
      "Built a bespoke block theme that showcases fleet inventory, charter routes, and pilot programs with GSAP-driven motion and multilingual-ready content controls.",
    year: "2024",
    technologies: ["WordPress", "PHP", "ACF"],
    tags: ["WordPress", "PHP", "ACF", "GSAP", "Booking UI"],
    gradient: "from-blue-600 via-indigo-600 to-purple-800",
    stars: "5.0",
    metrics: "42% Inquiry Boost",
    link: "https://aviationta.aero",
    githubUrl: null,
    highlights: [
      "Crafted modular hero, fleet, and CTA blocks with parallax and cursor-reactive motion.",
      "Integrated regional inquiry forms that sync to the client CRM via webhooks.",
      "Optimized Core Web Vitals (LCP under 1.6s) despite large hero photography.",
    ],
    solution:
      "Designed a custom WordPress theme with ACF-powered sections, GSAP animations, and device-aware request forms that surface the right CTA wherever the user is.",
    impact:
      "Lifted charter inquiries by 42% within the first quarter and cut publishing time for new routes from days to under an hour.",
  },
  {
    id: "therapy-for-cancer-lives",
    slug: "therapy-for-cancer-lives",
    title: "Therapy For Cancer Lives",
    client: "Therapyforcancerlives.com",
    category: "WordPress",
    excerpt:
      "A compassion-first WordPress build for an oncology therapy collective, focused on accessibility, trust, and clear care pathways.",
    description:
      "Delivered a calm, ADA-compliant site with step-by-step intake guides, translated resources, and HIPAA-aware lead routing.",
    year: "2024",
    technologies: ["WordPress", "PHP", "ACF"],
    tags: ["WordPress", "PHP", "ACF", "Accessibility", "WCAG AA"],
    gradient: "from-teal-500 via-emerald-600 to-cyan-800",
    stars: "4.9",
    metrics: "55% Intake Growth",
    link: "https://therapyforcancerlives.com",
    githubUrl: null,
    highlights: [
      "Implemented light/dark palettes with WCAG AA contrast to reduce cognitive load.",
      "Built multilingual resource library with Algolia-powered filtering.",
      "Hooked IntakeQ onboarding packets directly into custom multi-step forms.",
    ],
    solution:
      "Mapped the care journey, restructured content into digestible steps, and wired forms to automate warm hand-offs to the therapy team.",
    impact:
      "Completed intake submissions grew 55% and support calls dropped by a third as self-serve content improved clarity.",
  },
  {
    id: "house-of-comedy",
    slug: "house-of-comedy",
    title: "House of Comedy Network",
    client: "Houseofcomedy.net",
    category: "WordPress & Divi",
    excerpt:
      "Divi-powered entertainment hub promoting multi-city comedy venues with schedule management and ticketing CTAs.",
    description:
      "Refreshed the Divi theme with reusable sections, show calendars, and sponsor integrations while keeping the low-code stack familiar to the in-house team.",
    year: "2023",
    technologies: ["WordPress", "Divi", "WooCommerce"],
    tags: ["WordPress", "Divi", "WooCommerce", "Event UI"],
    gradient: "from-amber-500 via-orange-600 to-rose-800",
    stars: "4.9",
    metrics: "31% Ticket CTR",
    link: "https://houseofcomedy.net",
    githubUrl: null,
    highlights: [
      "Introduced per-venue landing pages with localized SEO schema.",
      "Synced BoxOffice ticket widgets inside Divi modules for quick swaps.",
      "Added sponsor strip and press kit downloads without touching code.",
    ],
    solution:
      "Created a modular Divi design system with shared typography, event cards, and CTA patterns while preserving marketer-friendly editing.",
    impact:
      "Ticket click-through improved 31% and venue managers now launch seasonal campaigns in minutes.",
  },
  {
    id: "crispin-supper-club",
    slug: "crispin-supper-club",
    title: "Crispin Supper Club",
    client: "Crispinsupperclub.com",
    category: "WordPress & Divi",
    excerpt:
      "Divi site for a private dining club highlighting chef stories, tasting menus, and membership perks.",
    description:
      "Crafted a cinematic experience with layered typography, reservation prompts, and integrated newsletter capture.",
    year: "2023",
    technologies: ["WordPress", "Divi", "Mailchimp", "Stripe"],
    tags: ["WordPress", "Divi", "Stripe", "Mailchimp"],
    gradient: "from-rose-600 via-purple-700 to-pink-900",
    stars: "4.8",
    metrics: "28% Deposit Lift",
    link: "https://crispinsupperclub.com",
    githubUrl: null,
    highlights: [
      "Animated tasting menu cards with seasonal toggles editors can swap in seconds.",
      "Added frictionless membership funnel tied to Stripe Checkout.",
      "Optimized imagery with responsive sources to keep load times under 1.5s.",
    ],
    solution:
      "Translated chef storytelling into on-site modules and wired Divi forms to Stripe + Mailchimp so every lead is nurtured automatically.",
    impact:
      "Membership deposits increased 28% and the team publishes new menu drops without designer involvement.",
  },
  {
    id: "tilefixny",
    slug: "tilefixny",
    title: "Tilefix NY Studio",
    client: "Tilefixny.com",
    category: "Squarespace",
    excerpt:
      "Squarespace refresh for a NYC tile repair studio, highlighting artisan quality and quick booking pathways.",
    description:
      "Took a dated template and reworked it into a modern Fluid Engine layout with before/after storytelling, localized SEO, and streamlined quote capture.",
    year: "2024",
    technologies: ["Squarespace", "CSS"],
    tags: ["Squarespace", "Fluid Engine", "Custom CSS", "Booking UI"],
    gradient: "from-slate-600 via-zinc-700 to-neutral-900",
    stars: "4.9",
    metrics: "35% Quote Growth",
    link: "https://tilefixny.com",
    githubUrl: null,
    highlights: [
      "Crafted gallery-led hero blocks with sticky CTAs that follow the scroll on desktop and collapse to tap-friendly buttons on mobile.",
      "Service detail pages share a centralized schema, so the client edits copy once and it cascades everywhere.",
      "Embedded repair request form pushes inquiries to CRM with automated SMS confirmations for faster follow-ups.",
    ],
    solution:
      "Rebuilt the site inside Squarespace Fluid Engine, layering custom CSS, reusable sections, and metadata hygiene to modernize the brand without moving platforms.",
    impact:
      "Quote requests increased 35% within the first month and organic search impressions grew as localized service pages now map to borough-level queries.",
  },
  {
    id: "music-klima-de",
    slug: "music-klima-de",
    title: "Music Klima Festival",
    client: "Music-klima.de",
    category: "Elementor Pro",
    excerpt:
      "Elementor Pro build for a European music collective with rich media storytelling and sponsor-ready blocks.",
    description:
      "Implemented immersive sections featuring audio snippets, Lottie animations, and bilingual program schedules.",
    year: "2024",
    technologies: ["WordPress", "Elementor Pro"],
    tags: ["WordPress", "Elementor Pro", "Lottie", "Multilingual"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-800",
    stars: "4.8",
    metrics: "2x Press Downloads",
    link: "https://musik-klima.de",
    githubUrl: null,
    highlights: [
      "Dynamic schedule grid that filters by stage, city, or genre.",
      "Single-click theme tokens let curators refresh color palettes per season.",
      "Sponsor marquee auto-populates from a CMS repeater to keep logos fresh.",
    ],
    solution:
      "Used Elementor containers + custom CSS to create responsive, media-rich layouts editors can tweak visually.",
    impact:
      "Press kit downloads doubled and partner referrals now account for 38% of site traffic.",
  },
  {
    id: "ked-bluestone",
    slug: "ked-bluestone",
    title: "KED Bluestone Architectural",
    client: "Kedbluestone.com",
    category: "Elementor Pro",
    excerpt:
      "Elementor-powered site for an architectural stone supplier with immersive galleries and spec downloads.",
    description:
      "Blended editorial storytelling with B2B utility—builders can browse surfaces, order samples, and download CAD packs from one responsive hub.",
    year: "2023",
    technologies: ["WordPress", "Elementor", "ACF"],
    tags: ["WordPress", "Elementor", "ACF", "B2B Catalog"],
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    stars: "4.9",
    metrics: "3x Sample Orders",
    link: "https://kedbluestone.com",
    githubUrl: null,
    highlights: [
      "Smart galleries auto-generate color stories and pull from a shared asset library.",
      "Spec sheet request form writes leads straight into HubSpot.",
      "Implemented multilingual toggle for architects working across regions.",
    ],
    solution:
      "Shipped a content-managed surface catalog with sample ordering workflows and CRM sync.",
    impact:
      "Sample requests tripled and the sales team now tracks every architectural inquiry with source attribution.",
  },
  {
    id: "words2action",
    slug: "words2action",
    title: "Words2Action Collective",
    client: "Words2action.org",
    category: "Elementor Pro",
    excerpt:
      "Advocacy hub built on Elementor featuring campaign storytelling, donation funnels, and volunteer management.",
    description:
      "Created a modular system that lets organizers spin up campaigns, embed petitions, and show real-time progress without writing code.",
    year: "2023",
    technologies: ["WordPress", "Elementor Pro"],
    tags: ["WordPress", "Elementor Pro", "GiveWP", "Airtable"],
    gradient: "from-red-600 via-rose-700 to-orange-800",
    stars: "4.9",
    metrics: "37% MoM Donations",
    link: "https://words2action.org",
    githubUrl: null,
    highlights: [
      "Donation funnels with Apple Pay + ACH support via GiveWP.",
      "Volunteer stories auto-rotate via CMS and include audio snippets.",
      "Event signups push to Airtable for resource planning.",
    ],
    solution:
      "Centralized every initiative in WordPress with structured data, donation tracking, and volunteer pipelines.",
    impact:
      "Donations increased 37% MoM and volunteer onboarding time dropped from a week to two days.",
  },
  {
    id: "pure-and-pastry",
    slug: "pure-and-pastry",
    title: "Pure & Pastry Bakery",
    client: "Pureandpastry.com",
    category: "Shopify",
    excerpt:
      "Shopify OS 2.0 storefront for a gluten-free bakery with subscriptions, build-a-box experiences, and local pickup scheduling.",
    description:
      "Launched a playful yet performance-focused theme featuring story-driven PDPs, dynamic nutrition labels, and SMS-ready checkout flows.",
    year: "2022",
    technologies: ["Shopify OS 2.0"],
    tags: ["Shopify", "Liquid", "Recharge", "Subscriptions"],
    gradient: "from-pink-500 via-rose-600 to-amber-700",
    stars: "5.0",
    metrics: "61% Repeat Revenue",
    link: "https://pureandpastry.com",
    githubUrl: null,
    highlights: [
      "Custom build-a-box flow that writes metafields for fulfillment.",
      "Subscription logic built on Recharge with pause/skip automation.",
      "Pickup scheduler coordinates bakery capacity and closes slots in real time.",
    ],
    solution:
      "Implemented Shopify OS 2.0 with modular sections and automated subscriptions so operations run on one platform.",
    impact:
      "Repeat orders now account for 61% of revenue and food waste dropped thanks to accurate production forecasts.",
  },
  {
    id: "region-rx",
    slug: "region-rx",
    title: "RegionRX Regulated Store",
    client: "Regionrx.com",
    category: "Shopify",
    excerpt:
      "Regulated CBD retailer on Shopify with gated catalogs, education funnels, and pharmacist consultations.",
    description:
      "Architected compliance-friendly PDPs, dosage calculators, and region-aware cart rules to navigate hilly regulations.",
    year: "2022",
    technologies: ["Shopify"],
    tags: ["Shopify", "Shopify Functions", "Compliance", "Calendly"],
    gradient: "from-emerald-500 via-green-600 to-teal-800",
    stars: "4.8",
    metrics: "3x Checkout Speed",
    link: "https://regionrx.com",
    githubUrl: null,
    highlights: [
      "Visitor verification + gated catalog built with Shopify Functions.",
      "Education center with faceted search guiding customers to safe usage.",
      "Consult booking integrates with Calendly + DrChrono for pharmacists.",
    ],
    solution:
      "Added automated compliance checks, educational funnels, and dynamic pricing rules tied to jurisdiction.",
    impact:
      "Approved customers get to checkout 3× faster and compliance flags are logged centrally for audits.",
  },
  {
    id: "fishpond-inc",
    slug: "fishpond-inc",
    title: "Fishpond Inc. Equipment",
    client: "Fishpondinc.com",
    category: "Shopify",
    excerpt:
      "Premium fly-fishing equipment site with lifestyle storytelling, wholesale ordering, and dealer tools.",
    description:
      "Refined the theme with long-form journal templates, dynamic lookbooks, and dealer locator integrations without sacrificing page speed.",
    year: "2021",
    technologies: ["Shopify"],
    tags: ["Shopify", "Liquid", "Algolia", "Wholesale B2B"],
    gradient: "from-blue-600 via-cyan-700 to-slate-900",
    stars: "4.9",
    metrics: "80% B2B Adoption",
    link: "https://fishpondinc.com",
    githubUrl: null,
    highlights: [
      "Dealer locator with map clustering + Algolia search.",
      "Story-driven PDPs mixing video, specs, and testimonials.",
      "Wholesale portal shares codebase but enforces tiered pricing.",
    ],
    solution:
      "Merged storytelling, B2B ordering, and DTC flows into a single Shopify codebase with role-aware components.",
    impact:
      "Wholesale orders moved online (80% adoption) and PDP engagement metrics rose across the board.",
  },
  {
    id: "i-want-candy",
    slug: "i-want-candy",
    title: "I Want Candy Store",
    client: "Iwantcandy.us",
    category: "Shopify",
    excerpt:
      "Sugar-rush Shopify store with custom mix & match builder, seasonal drops, and influencer-ready landing pages.",
    description:
      "Delivered a playful aesthetic with candy-conveyor animations, bundling logic, and TikTok-ready tracking.",
    year: "2021",
    technologies: ["Shopify"],
    tags: ["Shopify", "React Bundle", "Liquid", "TikTok Pixel"],
    gradient: "from-fuchsia-500 via-pink-600 to-rose-700",
    stars: "4.9",
    metrics: "48% GMV Bundles",
    link: "https://iwantcandy.us",
    githubUrl: null,
    highlights: [
      "Mix & match builder that calculates weight + pricing on the fly.",
      "Seasonal landing pages share a single JSON schema for quick swaps.",
      "Influencer-specific discount links auto-tag orders for attribution.",
    ],
    solution:
      "Extended Shopify sections with schema controls and built a React-powered bundle tool that feeds Liquid metafields.",
    impact:
      "Bundle sales now represent 48% of GMV and influencer campaigns report real ROI with tagged orders.",
  },
  {
    id: "gladiator-mgmt-agency",
    slug: "gladiator-mgmt-agency",
    title: "Gladiator Management Agency",
    client: "Gladiatormgmtagency.com",
    category: "Duda",
    excerpt:
      "Duda platform site for a talent agency combining roster management, embedded reels, and automated lead routing.",
    description:
      "Extended Duda widgets to support dynamic rosters, spotlight overlays, and CRM-integrated inquiry flows.",
    year: "2023",
    technologies: ["Duda"],
    tags: ["Duda", "Airtable Sync", "Zapier", "Video Reels"],
    gradient: "from-indigo-600 via-purple-700 to-slate-900",
    stars: "4.8",
    metrics: "Sub-6hr Response",
    link: "https://gladiatormgmtagency.com",
    githubUrl: null,
    highlights: [
      "Roster cards auto-sync from Airtable to prevent duplicate edits.",
      "Embedded reel player adapts aspect ratios without cropping talent.",
      "Leads route to the right agent via Zapier + Slack alerts.",
    ],
    solution:
      "Centralized the roster in Airtable, sync’d it to Duda via custom widgets, and automated routing so agents respond instantly.",
    impact:
      "Response time dropped from 48 hours to under 6, and roster edits take minutes instead of days.",
  },
  {
    id: "23-wines",
    slug: "23-wines",
    title: "23 Wines Boutique Importer",
    client: "23wines.com",
    category: "Duda",
    excerpt:
      "Duda commerce experience for a boutique importer featuring tasting notes, club tiers, and vineyard storytelling.",
    description:
      "Designed atmospheric layouts with scroll-triggered parallax, regional maps, and an embedded wine club sign-up.",
    year: "2022",
    technologies: ["Duda"],
    tags: ["Duda", "Ecwid Commerce", "Wine Club", "Parallax"],
    gradient: "from-purple-900 via-rose-950 to-black",
    stars: "4.8",
    metrics: "<5% Club Churn",
    link: "https://23wines.com",
    githubUrl: null,
    highlights: [
      "Wine cards pull tasting notes from JSON and render in multiple layouts.",
      "Club tier selector educates users before capturing payment in Ecwid.",
      "CRM automations tag leads by varietal interest for targeted drops.",
    ],
    solution:
      "Leveraged Duda + Ecwid for quick commerce, layering custom scripts for club management and lead nurturing.",
    impact:
      "Wine club churn fell below 5% and product discovery time dropped thanks to improved filtering.",
  },
  {
    id: "gotham-comedy",
    slug: "gotham-comedy",
    title: "Gotham Comedy Club",
    client: "Gothamcomedyclub.com",
    category: "Webflow",
    excerpt:
      "Webflow CMS build for an iconic comedy venue with interactive calendars, podcast embeds, and sponsor inventory.",
    description:
      "Reimagined the experience with CMS collections for shows, talent, and partnerships, powered by micro-animations.",
    year: "2023",
    technologies: ["Webflow"],
    tags: ["Webflow", "Webflow CMS", "Memberstack", "Event UI"],
    gradient: "from-amber-600 via-rose-700 to-black",
    stars: "5.0",
    metrics: "3x VIP Presales",
    link: "https://gothamcomedyclub.com",
    githubUrl: null,
    highlights: [
      "Show calendar filters by room, date, and comic with zero reloads.",
      "Memberstack powers VIP presales without leaving Webflow.",
      "Sponsor billboards rotate automatically using CMS controls.",
    ],
    solution:
      "Migrated to Webflow CMS for stability, added Memberstack for gated content, and automated sponsor inventory with collections.",
    impact:
      "Presale memberships grew 3× and sponsor revenue per month increased 26%.",
  },
  {
    id: "studio-wrx",
    slug: "studio-wrx",
    title: "Studio WRX Design Lab",
    client: "Studiowrx.com",
    category: "WordPress",
    excerpt:
      "WPBakery-powered portfolio for an automotive design lab featuring case studies, reels, and press coverage.",
    description:
      "Refined an existing WPBakery build with reusable templates, high-impact video headers, and performance-minded code cleanup.",
    year: "2020",
    technologies: ["WordPress", "WPBakery"],
    tags: ["WordPress", "WPBakery", "Video Header", "Optimization"],
    gradient: "from-zinc-600 via-neutral-700 to-black",
    stars: "4.8",
    metrics: "+20 PageSpeed",
    link: "https://studiowrx.com",
    githubUrl: null,
    highlights: [
      "Created global WPBakery templates so the team publishes projects in under 10 minutes.",
      "Lazy-loaded 4K video reels while keeping motion intact.",
      "Added sticky spec sheets that highlight drivetrain data per build.",
    ],
    solution:
      "Audited the codebase, trimmed unused scripts, and introduced template discipline without changing the authoring tool.",
    impact:
      "PageSpeed scores improved by 20 points and the marketing team doubled publishing cadence without regressions.",
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
