/**
 * Single source of truth for the whole site.
 * Edit this file to change any text, link or project; no component changes needed.
 *
 * CONFIDENTIALITY: Never write the name of the US publishing client anywhere in
 * this repository (text, alt text, filenames, comments, metadata, images).
 * Refer to them as "a major US media publisher".
 */

export type Link = { label: string; href: string };

export type WorkArea = {
  label: string;
  meta: string;
  summary: string;
  points: string[];
};

export type Project = {
  title: string;
  kind: string;
  summary: string;
  tags: string[];
  confidential?: boolean;
  status?: string;
};

export type SkillGroup = { group: string; items: string[] };

export const profile = {
  name: "Ahmad Elwan",
  title: "Software Engineer",
  location: "Amman, Jordan",

  /** Short line shown next to a pulsing dot in the hero. Leave empty to hide it. */
  availability: "Open to freelance projects and new roles",

  /** Optional portrait, e.g. "/ahmad.jpg" after placing a square-ish photo in /public. Empty = geometric AE mark. */
  photo: "",

  /** Placeholder only. The real address comes from the SITE_URL environment variable (see .env.example and README), which also turns indexing on. */
  siteUrl: "https://ahmadelwan.dev",

  /** Any empty value is hidden automatically. */
  contact: {
    email: "ahmadmelwan02@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmadelwan/",
    github: "https://github.com/AhmadElwan",
    cv: "", // e.g. "/ahmad-elwan-cv.pdf" after placing the file in /public
  },

  /**
   * Contact form delivery. Messages are sent to your email by a form service.
   * Option A (recommended): get a free access key at https://web3forms.com (enter your email,
   * the key is emailed to you) and paste it into web3formsKey.
   * Option B: create a form at https://formspree.io and paste its URL into formEndpoint.
   * Until one of these is set, the form falls back to opening the visitor's email app.
   */
  form: {
    web3formsKey: "a1f3af4d-92e2-44e5-9607-6a626eb4e63c", // public by design; emails go to ahmadmelwan02@gmail.com
    formEndpoint: "",
  },

  // Wrap a phrase in *asterisks* to render it in the accent italic style.
  headline: "I build for the web end to end, and I understand *what makes it grow*.",
  intro:
    "Software engineer at Optimum Partners in Amman. I work on a major US publisher's Next.js website today, and I've also built backend microservices, WordPress sites, and the SEO, ads and CRM systems behind a company's growth.",

  facts: [
    { value: "2.5 yrs", label: "building software professionally" },
    { value: "Level 1", label: "highest of five intermediate levels" },
    { value: "3 fields", label: "front-end, back-end, digital growth" },
  ],

  /** What a client or recruiter can hire you for. Plain descriptions, no outcomes. */
  services: [
    {
      title: "Websites & web apps",
      body: "Front ends in Next.js and React, from marketing pages to content-heavy sites like the publisher platform I work on.",
      tags: ["Next.js", "React"],
    },
    {
      title: "APIs & backends",
      body: "Python (FastAPI) or .NET services on PostgreSQL, structured with Clean Architecture and shipped in Docker.",
      tags: ["FastAPI", ".NET", "PostgreSQL", "Docker"],
    },
    {
      title: "WordPress sites",
      body: "Business websites on WordPress, the way I've built them for a client and for my own company.",
      tags: ["WordPress"],
    },
    {
      title: "SEO, ads & CRM",
      body: "SEO work, paid campaigns on Google Ads, LinkedIn Ads and Outbrain, and sales funnels set up in HubSpot.",
      tags: ["SEO", "Google Ads", "HubSpot"],
    },
  ],

  about: [
    "I'm an Intermediate Software Engineer (Level 1). Over two and a half years I've moved across the stack: backend services in .NET and later Python, WordPress sites, and I've been working for more than a year with a major US media publisher on their website.",
    "Alongside engineering I spent more than a year on the company's digital marketing team: improving SEO, running paid campaigns, and building the sales funnel in HubSpot for the leadership team. That mix means I think about the reader, the business goal and the code at the same time.",
    "These days I work in weekly sprints with product and editorial teams, shipping features, fixing bugs and acting on feedback, and I built an agentic newsletter system together with the client's AI lead.",
  ],

  experience: {
    org: "Optimum Partners",
    role: "Intermediate Software Engineer",
    place: "Amman, Jordan",
    period: "Jul 2024 – Present",
    areasLabel: "What I've worked on",
    areas: [
      {
        label: "Front-end",
        meta: "Client: a major US media publisher · since Sep 2025",
        summary:
          "Part of the client's team, working mostly on their Next.js website.",
        points: [
          "Ship new features and fix bugs in weekly sprints, driven by requests from the product and editorial teams.",
          "Worked on consent management with Ketch and on optimizing the site's ads system.",
          "Worked with Google Cloud Platform (GCP) as part of the client's stack.",
          "Contributed to special projects on the website: the online games and a registration wall.",
          "Built an agentic newsletter system together with the client's AI lead.",
        ],
      },
      {
        label: "Digital marketing",
        meta: "Internal marketing team · 1.5+ years",
        summary:
          "Worked with the marketing team alongside engineering, covering organic and paid growth plus the CRM behind it.",
        points: [
          "Performed SEO optimization for the company's websites.",
          "Managed paid advertising campaigns on Outbrain, LinkedIn Ads and Google Ads.",
          "Built the company's sales funnel in HubSpot, configuring the objects, properties and views required by the leadership team.",
        ],
      },
      {
        label: "Back-end",
        meta: "HR & employee-management product",
        summary:
          "Part of the backend team on an HR product covering attendance tracking and leave management.",
        points: [
          "Built services with .NET and Entity Framework, then helped move the platform to Python with FastAPI, SQLAlchemy and Pydantic.",
          "Worked in a microservices setup, containerized with Docker.",
          "Followed Clean Architecture and Domain-Driven Design on top of PostgreSQL.",
        ],
      },
      {
        label: "WordPress",
        meta: "Client and company websites",
        summary: "Delivered WordPress work for both a client and the company itself.",
        points: [
          "Worked on a WordPress website for a client's project.",
          "Built two websites for Optimum Partners using WordPress.",
        ],
      },
    ] satisfies WorkArea[],
  },

  projectsNote:
    "Client work is described in general terms because of client confidentiality.",

  projects: [
    {
      title: "Publisher website",
      kind: "Front-end · Next.js",
      summary:
        "Day-to-day feature development and bug fixing on a major US media publisher's Next.js website, working from a steady flow of product and editorial requests.",
      tags: ["Next.js", "React"],
      confidential: true,
    },
    {
      title: "Online games",
      kind: "Special project",
      summary:
        "Worked on the online games that are part of the publisher's Next.js website, as a special project.",
      tags: ["Next.js", "Games"],
      confidential: true,
    },
    {
      title: "Registration wall",
      kind: "Special project",
      summary:
        "Worked on a registration wall, a flow that asks readers to sign up in order to keep reading.",
      tags: ["Next.js", "User flows"],
      confidential: true,
    },
    {
      title: "Consent & ads",
      kind: "Platform work",
      summary:
        "Worked on consent management with Ketch and on optimizing the site's ads system.",
      tags: ["Ketch", "Ads", "GCP"],
      confidential: true,
    },
    {
      title: "Agentic newsletters",
      kind: "AI",
      summary:
        "A newsletter system built around AI agents, developed together with the client's AI lead. The details are kept private.",
      tags: ["AI agents", "Newsletters"],
      confidential: true,
    },
    {
      title: "HR & attendance platform",
      kind: "Back-end · Microservices",
      summary:
        "Attendance tracking and leave management for an employee-management product, from .NET and Entity Framework to Python FastAPI microservices built with Clean Architecture and DDD.",
      tags: ["FastAPI", "SQLAlchemy", "Pydantic", "PostgreSQL", "Docker", ".NET"],
    },
    {
      title: "CRM and Sales Funnel Management",
      kind: "CRM · Growth",
      summary:
        "Built the sales funnel in HubSpot and configured the objects, properties and views required by the leadership team.",
      tags: ["HubSpot", "CRM", "Sales ops"],
    },
    {
      title: "SEO & paid acquisition",
      kind: "Digital marketing",
      summary:
        "SEO optimization for the company's websites, plus paid campaigns across Outbrain, LinkedIn Ads and Google Ads.",
      tags: ["SEO", "Google Ads", "LinkedIn Ads", "Outbrain"],
    },
  ] satisfies Project[],

  skills: [
    {
      group: "Front-end",
      items: ["Next.js", "React", "Consent management (Ketch)", "Ads optimization"],
    },
    {
      group: "Back-end",
      items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", ".NET", "Entity Framework", "PostgreSQL"],
    },
    {
      group: "Architecture & infra",
      items: ["Microservices", "Clean Architecture", "Domain-Driven Design", "Docker", "Google Cloud (GCP)"],
    },
    {
      group: "Growth & CRM",
      items: ["SEO", "Google Ads", "LinkedIn Ads", "Outbrain", "HubSpot"],
    },
    {
      group: "Also",
      items: ["WordPress", "Agentic AI systems"],
    },
  ] satisfies SkillGroup[],

  seo: {
    description:
      "Ahmad Elwan is a software engineer in Amman, Jordan working across Next.js front-end, Python and .NET back-end, and digital growth (SEO, paid ads, HubSpot).",
    keywords: [
      "Ahmad Elwan",
      "software engineer",
      "Next.js developer",
      "FastAPI",
      "Amman Jordan",
      "SEO",
      "HubSpot",
    ],
  },
};

export type Profile = typeof profile;

export type ContactLink = Link & { display: string };

export function contactLinks(): ContactLink[] {
  const c = profile.contact;
  const links: ContactLink[] = [];
  if (c.email) links.push({ label: "Email", href: `mailto:${c.email}`, display: c.email });
  if (c.linkedin)
    links.push({
      label: "LinkedIn",
      href: c.linkedin,
      display: c.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    });
  if (c.github)
    links.push({
      label: "GitHub",
      href: c.github,
      display: c.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    });
  if (c.cv) links.push({ label: "CV", href: c.cv, display: "Download my CV" });
  return links;
}
