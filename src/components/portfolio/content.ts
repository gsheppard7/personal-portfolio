export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  highlight?: string;
  period?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const siteMeta = {
  name: "Gavin Sheppard",
  role: "Computer Science · Georgia Tech",
  tagline:
    "Data engineering and full-stack development with a focus on sports analytics, AI systems, and products that turn messy data into decisions.",
  location: "Atlanta, GA · Cleveland, OH",
  email: "gsheppard7@gatech.edu",
  phone: "(440) 799-0354",
  links: {
    github: "https://github.com/gsheppard7",
    linkedin: "https://www.linkedin.com/in/gavin-sheppard29/",
    resume: "/Gavin-Sheppard-Resume.pdf",
  },
  availability: "Georgia Tech · Open to internships & co-ops",
};

export const heroAbout =
  "I'm most energized when code sits next to a real problem — turning athlete and game data into something coaches can use, prototyping wearables, or building agents and bots that react to the world in real time.";

export const heroStats = [
  {
    value: "Sports analytics",
    label:
      "Data engineering and visualization for the Cleveland Guardians and GT Baseball.",
  },
  {
    value: "AI & vision",
    label:
      "Agent orchestration, ML pipelines, and computer-vision projects (yes, including game bots).",
  },
  {
    value: "Full-stack & embedded",
    label:
      "Next.js apps, Supabase backends, ESP32 wearables — from schema design to the last UI detail.",
  },
];

export const projects: Project[] = [
  {
    id: "hivemind",
    title: "Hivemind",
    description:
      "Platform for creating, managing, and coordinating autonomous AI agents across tasks and workflows.",
    tags: ["AI", "Agents", "TypeScript"],
    period: "2026 — Present",
    highlight: "In progress",
  },
  {
    id: "gms-audit",
    title: "GMS Audit Management",
    description:
      "CMMI compliance audit system with Next.js, Supabase, AI document analysis, multi-tenant tracking, and OCR-backed ingestion pipelines.",
    tags: ["Next.js", "TypeScript", "Supabase", "AI"],
    period: "2025 — Present",
    highlight: "Client work",
  },
  {
    id: "clash-royale-bot",
    title: "Clash Royale Bot",
    description:
      "Automated bot that uses computer vision and game-state analysis to make real-time gameplay decisions and learn competitive strategies.",
    tags: ["Python", "Computer Vision", "ML"],
    href: "https://github.com/gsheppard7/ClashRoyaleBot",
    period: "2025 — Present",
  },
  {
    id: "firefighter-safety",
    title: "Firefighter Safety Wearable",
    description:
      "ESP32 wearable integrating heart rate, SpO₂, and BLE proximity sensing with real-time display and wireless telemetry for field safety.",
    tags: ["ESP32", "Embedded", "IoT"],
    period: "2025 — 2026",
    highlight: "Grand Challenges",
  },
  {
    id: "baseball-simulator",
    title: "Baseball Simulator",
    description:
      "Simulation and analytics tooling supporting baseball modeling and scenario exploration (Georgia Tech Baseball Analytics).",
    tags: ["TypeScript", "Sports Analytics"],
    href: "https://github.com/gsheppard7/BaseballSimulator",
    period: "2025 — Present",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "This site — projects, experience, and resume for recruiters and hiring teams, built with Next.js and deployed on Vercel.",
    tags: ["Next.js", "React", "TypeScript"],
    href: "https://github.com/gsheppard7/personal-portfolio",
    highlight: "This site",
  },
  {
    id: "text2pointcloud",
    title: "Text2PointCloud",
    description:
      "Generates a 3D point representation of an object described in natural language — bridging language models and spatial output.",
    tags: ["Python", "ML", "3D"],
    href: "https://github.com/gsheppard7/Text2PointCloud",
  },
  {
    id: "rubiks",
    title: "Rubik's Cube Solver",
    description: "Program that solves any Rubik's cube configuration using a structured solving algorithm.",
    tags: ["JavaScript", "Algorithms"],
    href: "https://github.com/gsheppard7/RubixCubeSolver",
  },
];

export const experience: Experience[] = [
  {
    id: "guardians-data",
    role: "Data Engineering Intern",
    company: "Cleveland Guardians · Sports Science",
    period: "May 2026 — July 2026",
    summary:
      "Built biomechanics and athlete performance pipelines on Databricks for staff-facing analysis and scouting.",
    bullets: [
      "Migrated production baseball pipelines from Airflow to Databricks (bronze/silver/gold, incremental jobs, serverless).",
      "Delivered a pinch-hit tendency advance scouting report used in game preparation.",
      "Integrated vendor REST APIs with auth, pagination, rate limits, normalization, and automated ingestion.",
    ],
  },
  {
    id: "gt-baseball",
    role: "Leadership Team · Software & Analytics",
    company: "GT Baseball Analytics",
    period: "Jan 2025 — Present",
    summary:
      "Software, models, and data infrastructure for Georgia Tech Baseball coaching staff.",
    bullets: [
      "Built ingestion and processing pipelines for Trackman game data.",
      "Developed a defensive positioning platform visualizing player locations across plays.",
    ],
  },
  {
    id: "gms",
    role: "Independent Software Developer",
    company: "GMS · Cleveland, OH",
    period: "May 2025 — Present",
    summary:
      "End-to-end ownership of a compliance audit platform for CMMI assessments and document workflows.",
    bullets: [
      "Shipped Next.js + Supabase app with AI document analysis, multi-tenant audit tracking, and automated extraction.",
      "Designed OCR fallback, row-level security, and REST APIs for scalable document processing.",
    ],
  },
  {
    id: "guardians-ld",
    role: "Learning & Development Intern",
    company: "Cleveland Guardians",
    period: "May 2025 — July 2025",
    summary: "Internal tools and content systems for L&D serving 200+ employees.",
    bullets: [
      "Designed and built a Notion-based internal site for the Learning & Development team.",
      "Structured navigation and content so non-technical staff could maintain resources independently.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "stack",
    label: "Technologies",
    items: [
      "Next.js",
      "Supabase",
      "Databricks",
      "Apache Airflow",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "domains",
    label: "Technical areas",
    items: [
      "Data engineering & ETL",
      "Machine learning",
      "Computer vision",
      "Backend development",
      "Sports analytics",
    ],
  },
];

export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
