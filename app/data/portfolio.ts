export const CONTACT_EMAIL = "hello@beamfolio.dev";

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  status: string;
  tagline: string;
  problem: string;
  solution: string;
  decisions: string[];
  stack: string[];
  metrics: string[];
  impact: string;
  lessons: string;
  accent: string;
  index: string;
  signal: 1 | 2 | 3;
}

export const projects: Project[] = [
  {
    id: "nexus",
    slug: "nexus",
    title: "NEXUS",
    year: "2024–25",
    category: "Full-Stack Platform",
    status: "Production",
    tagline: "A living command center. Built as a portfolio platform with real-time infrastructure.",
    problem:
      "Most portfolio sites are static brochures. I wanted something that demonstrated live engineering capabilities — real-time data, production-grade security, and elegant API design working in concert.",
    solution:
      "Built a full-stack Next.js 15 platform with a production-grade backend: HMAC-SHA256 webhooks with retry/dead-letter/replay queues, SSE activity feeds, Redis-backed rate limiting, and a complete REST API under /api/v1/. Every piece of infrastructure exists as a working example of the engineering principles I apply at scale.",
    decisions: [
      "Chose Next.js 15 App Router for co-location of API and UI logic",
      "HMAC-SHA256 over simple tokens — timing-safe comparison prevents timing attacks",
      "SSE over WebSockets for the activity feed — simpler deployment, no sticky sessions",
      "Dead-letter queue in Redis with exponential backoff for webhook reliability",
      "Structured logging with correlation IDs throughout the request lifecycle",
    ],
    stack: ["Next.js 15", "TypeScript", "Prisma", "Redis", "Docker", "GitHub Actions", "Vercel"],
    metrics: ["48+ files", "Complete REST API", "HMAC webhooks", "CI/CD pipeline", "Docker Compose"],
    impact: "Turned a portfolio into a working systems demo — every claim on this site is backed by running code.",
    lessons: "Building the infrastructure you'd specify for a client is the fastest way to find the edge cases in your own advice.",
    accent: "#6C63FF",
    index: "01",
    signal: 3,
  },
  {
    id: "tipbeam",
    slug: "tipbeam",
    title: "TipBeam",
    year: "2024",
    category: "Real-Time Platform",
    status: "V2 In Progress",
    tagline: "Streamer donation infrastructure. Engineered for latency, not just functionality.",
    problem:
      "Existing tipping platforms treat donations as simple transactions. They miss the real-time performance requirements of live streaming: sub-100ms overlay updates, concurrent viewer handling, and alert reliability under load.",
    solution:
      "V1 shipped a working system. V2 is a ground-up rewrite targeting monorepo architecture with shared/server/client packages. Socket.io for real-time alerts, HMAC-SHA256 webhooks, OBS overlay injection, and JWT refresh rotation — every security decision documented and justified.",
    decisions: [
      "Monorepo over separate repos — shared Zod schemas eliminate API contract drift",
      "Socket.io rooms scoped per streamer — prevents cross-stream event leakage",
      "Drizzle ORM chosen over Prisma for lighter runtime in the critical path",
      "Helmet.js + custom CSP policy — overlay endpoints need strict content security",
      "Refresh token rotation with Redis blocklist — compromise detection without session invalidation",
    ],
    stack: ["Node.js", "Express", "Socket.io", "Drizzle ORM", "React 18", "Vite", "TypeScript", "Redis"],
    metrics: ["<100ms overlays", "JWT rotation", "HMAC webhooks", "OBS native support", "Thai/EN i18n"],
    impact: "V1 validated the concept with real streamers; V2's monorepo rewrite is built to survive scale instead of patching around it.",
    lessons: "Shipping V1 first — even with known shortcuts — was the right call. You can't design the right monorepo boundaries until you've felt the wrong ones.",
    accent: "#A78BFA",
    index: "02",
    signal: 2,
  },
  {
    id: "trading-engine",
    slug: "trading-engine",
    title: "Market Signal Engine",
    year: "2024",
    category: "Data Infrastructure",
    status: "Personal Use",
    tagline: "Personal trading infrastructure for NASDAQ and Thai SET. Signal clarity over noise.",
    problem:
      "Day trading across US equities and Thai SET simultaneously means context-switching between platforms with incompatible data formats, time zones, and signal methodologies. The cognitive overhead compounds errors.",
    solution:
      "Built a unified signal aggregation layer: normalized data feeds from multiple sources, custom screener logic in TypeScript, and a minimal dashboard showing only actionable information. The design principle was ruthless: if it doesn't affect a trade decision in the next 4 hours, it's not on screen.",
    decisions: [
      "TypeScript for signal logic — type safety prevents category errors in financial calculations",
      "Event-driven architecture — price feeds trigger signal recalculation, not polling",
      "Minimal UI — every element passes the 'does this change my decision?' test",
      "Timezone normalization at ingestion, not display — eliminates conversion bugs",
    ],
    stack: ["TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Redis", "React"],
    metrics: ["NASDAQ + SET", "Real-time feeds", "Custom screeners", "Signal alerts"],
    impact: "Cut the context-switching tax between two markets to near zero — one screen, one mental model, faster decisions.",
    lessons: "The hardest part wasn't the data pipeline — it was having the discipline to delete dashboard widgets that felt useful but didn't change decisions.",
    accent: "#818CF8",
    index: "03",
    signal: 2,
  },
  {
    id: "vscode-skill",
    slug: "vscode-skill",
    title: "Dev Workflow Extension",
    year: "2023",
    category: "Developer Tooling",
    status: "Shipped",
    tagline: "VS Code extension for AI-assisted code diagnostics and README generation.",
    problem:
      "Generating useful project documentation is a context-switching tax. By the time you open a doc tool, the mental model you had while coding has partially faded.",
    solution:
      "A dual-mode VS Code extension: in-editor diagnostics mode surfaces issues contextually, README generation mode outputs structured, accurate documentation by analyzing the open workspace. Works as a skill scaffold for AI-assisted workflows.",
    decisions: [
      "Dual-mode architecture — diagnostics and generation share the same AST analysis layer",
      "Extension runs in a Worker to avoid blocking the main thread",
      "Output format is configurable — different teams have different README conventions",
    ],
    stack: ["TypeScript", "VS Code API", "Node.js", "AST Analysis"],
    metrics: ["Dual-mode", "Non-blocking", "Configurable output"],
    impact: "Removed the context-switch between coding and documenting — README quality stopped depending on end-of-sprint willpower.",
    lessons: "Running analysis in a Worker felt like overkill for a small extension — until the first time it didn't freeze the editor on a large repo.",
    accent: "#7C3AED",
    index: "04",
    signal: 3,
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  frameworks: ["Next.js", "React", "Node.js", "Express", "Fastify"],
  infrastructure: ["Docker", "Redis", "PostgreSQL", "GitHub Actions", "Vercel", "AWS"],
  patterns: ["REST API Design", "Webhook Systems", "Real-Time (SSE/WS)", "Auth & Security", "CI/CD"],
  tools: ["Prisma", "Drizzle ORM", "Zod", "Tailwind CSS", "Vitest"],
};

export const timeline = [
  {
    year: "2025",
    role: "Staff Engineer",
    description: "Leading architecture decisions across multiple product lines. Security-first API design, system reliability, and engineering culture.",
  },
  {
    year: "2024",
    role: "Senior Engineer",
    description: "Built production webhook infrastructure, real-time platforms, and developer tooling. Active day trader — NASDAQ and Thai SET.",
  },
  {
    year: "2023",
    role: "Engineer",
    description: "Focused on API quality, auth systems, and frontend architecture. Developed strong opinions about what makes systems trustworthy.",
  },
  {
    year: "2022",
    role: "Engineer",
    description: "Bangkok becomes home base. Building full-stack systems with TypeScript and growing into platform thinking.",
  },
];

export const experience = {
  title: "Dollywood",
  location: "Pigeon Forge, Tennessee, USA",
  role: "Guest Services — Mobility & Accessibility Equipment",
  program: "Work and Travel USA · Cultural Exchange Program",
  tagline:
    "Long before I debugged systems, I helped people navigate one of America's busiest theme parks — wheelchairs, scooters, language barriers, and all.",
  stats: [
    { value: "10+", label: "Languages heard daily" },
    { value: "100s", label: "Guests assisted per shift" },
    { value: "1", label: "Season, full immersion" },
  ],
  sections: [
    {
      heading: "The Setting",
      body: "Dollywood is one of the most-visited theme parks in the United States, drawing guests from across the country and around the world — especially during peak season. As part of a Work and Travel cultural exchange program, I spent a season working in guest services, specifically mobility and accessibility equipment: fitting, renting, and explaining electric scooters and wheelchairs to guests who needed them to enjoy the park.",
    },
    {
      heading: "The Work",
      body: "The role looked simple from the outside — hand someone a scooter — but every interaction had layers.",
      list: [
        "Fitted and issued mobility scooters and wheelchairs to guests with accessibility needs, often under time pressure with a line forming",
        "Taught first-time users how to operate unfamiliar equipment safely — throttle, braking, turning radius — frequently in simplified English",
        "Coordinated with ride operators and other staff to accommodate guests with mobility devices throughout the park",
        "Handled payments, returns, and on-the-spot troubleshooting when equipment malfunctioned mid-shift",
        "Worked daily with guests from dozens of countries, communicating across language barriers without a script",
      ],
    },
    {
      heading: "The Challenge",
      body: "Most of what I knew about English I'd learned in classrooms in Thailand. Suddenly I was explaining how to operate a motorized scooter to an elderly guest from Tennessee, then turning around to do the same — in even simpler English — for a family visiting from Brazil or Korea who spoke less English than I did. There was no script for this. I had to read body language, demonstrate physically, simplify language on the fly, and stay calm when equipment broke down mid-queue or a guest was frustrated by heat and wait times.",
    },
    {
      heading: "What Changed",
      body: "By the end of the season, a few things were different.",
      list: [
        "Communication — explaining how a throttle, brake, and turning radius work to someone with zero shared vocabulary maps directly onto explaining a system to a non-technical stakeholder today",
        "Problem-solving under pressure — equipment failures, weather, and crowd surges meant constant on-the-spot triage: stay calm, fix what you can, escalate what you can't",
        "Empathy — many guests using mobility equipment were managing health conditions or caring for aging parents; patience and dignity mattered as much as the equipment",
        "Adaptability — every shift had a different crowd, different languages, different equipment issues — no two queues looked the same",
        "English fluency — by the end, conversational English had gone from classroom Thai-English to genuinely fluent, real-time communication",
      ],
    },
  ],
  skillsForged: [
    {
      title: "Communication",
      body: "Explaining complex things simply, to people who don't share your vocabulary.",
      bridge: "→ writing docs, RFCs, onboarding guides",
    },
    {
      title: "Problem-Solving",
      body: "Fixing things in real time, under pressure, with a queue watching.",
      bridge: "→ incident response, debugging in production",
    },
    {
      title: "Empathy",
      body: "Understanding the person behind the request, not just the request.",
      bridge: "→ designing for the user, not the spec",
    },
    {
      title: "Adaptability",
      body: "No two days looked the same — different people, different problems.",
      bridge: "→ working across stacks, domains, and teams",
    },
  ],
  quote: [
    "The best engineers I know are good at explaining things to people",
    "who don't share their vocabulary. I learned that first at a theme",
    "park in Tennessee — years before I learned it at a keyboard.",
  ],
};

