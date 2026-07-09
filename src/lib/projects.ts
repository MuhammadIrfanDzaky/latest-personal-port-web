export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  context: string;
  stack: string[];
  essence: string;
  problem: string;
  build: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "dribble",
    name: "DRIBBLE",
    year: "2025",
    role: "Full-stack developer",
    context: "Capstone project, RevoU",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    essence: "Futsal court booking, minus the phone calls.",
    problem:
      "Futsal courts around Medan still run on phone calls, chat threads, and a paper schedule behind the counter. Players can't see what's free, owners double-book, and everyone wastes an evening sorting it out.",
    build:
      "A booking platform built end to end: authentication, live schedule views, booking flows, and role-based dashboards for players, administrators, and court owners. Next.js on the front, a NestJS API behind it, PostgreSQL underneath — developed in Scrum sprints with every endpoint exercised through Postman and Swagger before it shipped.",
    outcome:
      "The project that turned me from someone learning to code into someone shipping software. It covers the full arc — data model, API contract, interface — which is exactly the arc I want to own in a team.",
  },
  {
    slug: "daycare-saas",
    name: "Daycare SaaS",
    year: "2025",
    role: "Freelance developer",
    context: "Client work",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    essence: "Admin software a real daycare actually runs on.",
    problem:
      "A daycare managing enrollment, daily schedules, and parent communication across spreadsheets and chat apps — workable at five kids, painful at fifty.",
    build:
      "A focused SaaS for the day-to-day: enrollment records, schedules, and the unglamorous admin flows that keep a childcare business legible. Built solo, directly with the client, which meant translating vague wishes into concrete screens and saying no to features that didn't earn their maintenance cost.",
    outcome:
      "Freelance work is a masterclass in scope: the client doesn't care how elegant the architecture is, only that Tuesday morning check-in takes two minutes instead of twenty.",
  },
  {
    slug: "pitchcrush-ai",
    name: "PitchCrush AI",
    year: "2026",
    role: "Solo build",
    context: "Technical assessment",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenRouter"],
    essence: "A pitch deck's least polite reader.",
    problem:
      "Founders rehearse their pitch with people who are nice to them. What they need is the skeptical investor, the wary customer, and the technical co-founder who asks the question they were hoping to avoid.",
    build:
      "An AI web app that stress-tests startup pitches from multiple business perspectives. LLM calls go through the OpenRouter API via secure server-side routes, and free-form model output gets converted into structured scores, risks, weak phrases, stronger rewrites, and likely follow-up questions. Runtime validation, provider error handling, and a local fallback analysis keep the product working even when the AI service isn't.",
    outcome:
      "My favorite engineering detail: the app degrades gracefully. If the external model is down, you still get an analysis — because a tool that only works when a third-party API feels like it isn't a tool.",
  },
  {
    slug: "tiketq",
    name: "TiketQ Dashboard",
    year: "2025–26",
    role: "Backend engineer",
    context: "Team project, RevoU × TiketQ",
    stack: ["NestJS", "TypeScript", "Microservices"],
    essence: "The transaction service behind a booking dashboard.",
    problem:
      "A smart booking dashboard needs trustworthy transaction data — sales, booking trends, customer behavior — and that trust is built or broken at the service layer.",
    build:
      "Contributed the transaction domain as part of a microservice team: defined domain models, implemented repository ports, and initialized a modular NestJS application designed to stay maintainable as the team grew. Built the transaction creation endpoint, hardened request validation, and tested API behavior across valid and hostile inputs.",
    outcome:
      "Pure backend work, no pixels to hide behind. The deliverable was an API another team could build on without reading my mind — which is its own kind of interface design.",
  },
];

export const alsoBuilt = [
  {
    name: "Boarding-house management front-end",
    year: "2025",
    note: "Freelance. Responsive room listings, reservation flows, and availability views in vanilla HTML/CSS/JS, integrated against a partner's PHP/MySQL backend.",
  },
  {
    name: "PRD implementation",
    year: "2025",
    note: "Project manager for a team building from a Product Requirements Document — flagging unclear requirements and risks before they became rework.",
  },
  {
    name: "Internship report information system",
    year: "2023",
    note: "Internal MIS for Medan City's Dept. of Communication & Informatics, centralizing internship reports for mentors. Evaluated with real users post-design.",
  },
];
