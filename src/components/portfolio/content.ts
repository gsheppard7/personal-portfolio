export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  highlight?: string;
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
  name: "Chad",
  role: "Software Engineer",
  tagline:
    "Building interactive products with clean architecture, sharp UX, and measurable impact.",
  location: "Open to remote & hybrid",
  email: "chad@example.com",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    resume: "#contact",
  },
  availability: "Available for full-time roles · Q4 2026",
};

export const heroStats = [
  { label: "Years shipping", value: "5+" },
  { label: "Projects shipped", value: "12+" },
  { label: "Stack focus", value: "Web · UI · Systems" },
];

export const projects: Project[] = [
  {
    id: "hivemind",
    title: "Hivemind Platform",
    description:
      "Multi-agent orchestration workspace with real-time collaboration, task routing, and developer tooling.",
    tags: ["React", "TypeScript", "Node", "WebSockets"],
    href: "#",
    highlight: "Featured",
  },
  {
    id: "portfolio",
    title: "Interactive Portfolio",
    description:
      "Recruiter-focused personal site with motion design, accessible navigation, and project storytelling.",
    tags: ["Next.js", "CSS", "A11y"],
    href: "#projects",
    highlight: "This site",
  },
  {
    id: "analytics",
    title: "Telemetry Dashboard",
    description:
      "Operational metrics dashboard with custom charts, alerting hooks, and role-based views.",
    tags: ["React", "D3", "PostgreSQL"],
    href: "#",
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Software Engineer",
    company: "Tech Company · Product Engineering",
    period: "2022 — Present",
    summary: "Led frontend platform work and cross-team delivery for customer-facing products.",
    bullets: [
      "Owned design-system adoption across 4 product squads, cutting UI inconsistency and review cycles.",
      "Shipped performance wins (LCP −38%, bundle −22%) via code-splitting and interaction budgeting.",
      "Partnered with design on accessible patterns; WCAG 2.1 AA audits passed for major releases.",
    ],
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Startup · Full Stack",
    period: "2019 — 2022",
    summary: "Full-stack feature development from prototype through production monitoring.",
    bullets: [
      "Built billing and onboarding flows used by thousands of monthly active users.",
      "Introduced CI quality gates and component tests for critical user journeys.",
      "Mentored interns and junior engineers on React patterns and code review habits.",
    ],
  },
  {
    id: "exp-3",
    role: "Engineering Intern",
    company: "Enterprise · Platform",
    period: "2018 — 2019",
    summary: "Internal tools and automation supporting developer productivity.",
    bullets: [
      "Automated release checklist tooling, reducing manual deployment steps.",
      "Contributed to shared component library documentation and Storybook stories.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "CSS / Motion", "Accessibility"],
  },
  {
    id: "backend",
    label: "Backend & Data",
    items: ["Node.js", "REST / GraphQL", "PostgreSQL", "Redis"],
  },
  {
    id: "ops",
    label: "Delivery",
    items: ["GitHub Actions", "Docker", "Observability", "Agile / Scrum"],
  },
];

export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
