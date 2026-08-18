import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Kenneth Granados, full stack engineer",
    description:
      "I build and ship production web applications. Eleven years delivering platforms for US companies in fintech, healthcare, e-commerce and analytics. React, Node.js, TypeScript, AWS and Azure.",
    ogTagline: "Full stack engineer"
  },

  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    menu: "Open menu",
    language: "Change language"
  },

  hero: {
    status: "Available for new work",
    location: "Costa Rica / UTC-6",
    headlineLead: "I build and ship",
    headlineAccent: "production software.",
    lede: "Kenneth Granados, full stack engineer. Eleven years delivering platforms for US companies in fintech, healthcare, e-commerce and analytics. React, Node.js, TypeScript, AWS and Azure.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the work"
  },

  stats: [
    { value: "11", label: "Years shipping" },
    { value: "6,000+", label: "Products migrated" },
    { value: "~60%", label: "Faster deploys" },
    { value: "4", label: "Industries" }
  ],

  services: {
    eyebrow: "01 / What I build",
    heading: "Senior engineering capacity, without adding headcount.",
    lede: "I deal directly with founders and product owners, including on projects where the requirements still need pinning down.",
    items: [
      {
        title: "Web applications and internal tools",
        blurb:
          "End to end delivery in React and Next.js on a Node.js backend, from the data model to the deployed product."
      },
      {
        title: "APIs and third-party integrations",
        blurb:
          "REST services, payment flows with Stripe, headless commerce, PIM and partner system integrations."
      },
      {
        title: "E-commerce builds and migrations",
        blurb:
          "Storefront development and large catalog or data migrations onto modern commerce stacks."
      },
      {
        title: "CI/CD and cloud deployment",
        blurb:
          "Dockerized pipelines on GitHub Actions or CircleCI, with deployment and monitoring on AWS and Azure."
      },
      {
        title: "Frontend rescue and modernization",
        blurb:
          "Refactoring legacy or inherited codebases, fixing performance and UX defects, adding test coverage."
      },
      {
        title: "Technical advisory",
        blurb:
          "Architecture review, code review and mentoring for teams that need a senior voice part-time."
      }
    ]
  },

  work: {
    eyebrow: "02 / Selected work",
    heading: "Things I built that you can open right now.",
    lede: "Two are my own products, end to end. The client engagements below are described by domain: names stay confidential.",
    openSite: "Open the site",
    featured: [
      {
        id: "liganeta",
        name: "La Liganeta",
        wordmark: "Liganeta",
        url: "laliganeta.com",
        href: "https://laliganeta.com",
        tag: "Live",
        role: "Sole engineer",
        tone: "#FF4D57",
        wash: "radial-gradient(circle at 50% 40%, #241318 0%, #0E1014 70%)",
        blurb:
          "The digital home of a Costa Rican football fan community. Live match centre, standings, a qualification calculator and an admin panel the owner uses on match night. Designed, built and deployed solo, from empty folder to production. The calculator's engine also ships as its own zero-dependency site, quienpasa.kennethgm.com, built for fans of all six countries in the tournament and verified against a second, independent implementation before every release.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Netlify"],
        live: true
      },
      {
        id: "tombola",
        name: "La Tombola CR",
        wordmark: "Tombola CR",
        url: "latombolacr.com",
        tag: "Case study",
        role: "Sole engineer",
        tone: "#FFB020",
        wash: "radial-gradient(circle at 50% 40%, #231B0E 0%, #0E1014 70%)",
        blurb:
          "Card management and delivery platform for a real raffle business. Bulk-imports card data from spreadsheets, generates each numbered card as an image, and emails it to buyers one by one or in bulk. I own the whole stack, including the AWS infrastructure: EC2 for the API, S3 and CloudFront for the static frontend, Route 53 for DNS, and Let's Encrypt for TLS. The instance is stopped between uses to keep costs down, so this one is a case study rather than a live link.",
        stack: ["React", "NestJS", "PostgreSQL", "AWS EC2", "S3 + CloudFront", "Route 53"],
        live: false
      }
    ],
    client: [
      {
        id: "lending",
        name: "Digital lending and refinance platform",
        domain: "fintech",
        sector: "Fintech, US",
        years: "2025 to now",
        role: "Frontend architecture and delivery",
        blurb:
          "Customer-facing refinance flow for a US credit union: the web front end, the Node services behind it and the data model underneath.",
        achievements: [
          "Owned the application flow end to end, from UI to the REST services and data model behind it.",
          "Rebuilt the release pipeline on Docker and cloud CI/CD, cutting deploy time by roughly 60% for the whole team.",
          "Refined loosely specified requirements with stakeholders before development started, not mid-sprint."
        ],
        metric: "~60%",
        metricLabel: "Faster releases"
      },
      {
        id: "commerce",
        name: "Health and wellness e-commerce",
        domain: "commerce",
        sector: "Retail, US",
        years: "2023 to 2025",
        role: "Storefront, API layer and catalog migration",
        blurb:
          "Direct-to-consumer storefront on a headless commerce stack, for a high-traffic US health and wellness retailer.",
        achievements: [
          "Led the migration of a 6,000+ product catalog, media included, with the live store never going dark during cutover.",
          "Built the Node.js API layer powering a newly launched site, integrating commerce, Stripe payments and PIM data.",
          "Owned release management and production troubleshooting after launch."
        ],
        metric: "6,000+",
        metricLabel: "Products migrated"
      },
      {
        id: "analytics",
        name: "Recruitment and HR analytics",
        domain: "analytics",
        sector: "HR SaaS",
        years: "2019 to 2022",
        role: "Reporting frontend and backend services",
        blurb:
          "Multi-tenant analytics surfacing recruitment and workforce insight for global enterprise customers.",
        achievements: [
          "Led UI implementation for the reporting and dashboard modules used by enterprise customers worldwide.",
          "Built backend services and worked directly with the database team on the data models feeding them.",
          "Integrated AWS QuickSight to extend the platform's data visualization."
        ],
        metric: "Global",
        metricLabel: "Enterprise tenants"
      }
    ]
  },

  experience: {
    eyebrow: "03 / Experience",
    heading: "Eleven years, one consultancy, three roles.",
    company: "10Pearls",
    companyNote: "(formerly ProximityCR)",
    companyBlurb: "Enterprise software consultancy. Platforms for US clients.",
    span: "Feb 2015 to now",
    roles: [
      {
        title: "Senior Software Engineer",
        span: "2020 to now",
        blurb:
          "Led frontend architecture and feature delivery on production platforms in React, Next.js and TypeScript. Rebuilt build and release pipelines with Docker, GitHub Actions and CircleCI. Designed Node.js REST APIs integrating payments, headless commerce and PIM services, and ran deployments and monitoring across AWS and Azure."
      },
      {
        title: "Full Stack Developer",
        span: "2017 to 2020",
        blurb:
          "Built full stack web applications and internal business tools, developed and customised e-commerce storefronts, and delivered reusable UI component libraries adopted across client projects."
      },
      {
        title: "Web Developer",
        span: "2015 to 2017",
        blurb:
          "Delivered e-commerce, marketing and customer service web projects with AngularJS, Vue.js, Magento, PHP and jQuery, covering implementation and post-launch support."
      }
    ],
    education: {
      degree: "B.Sc. Information Systems Engineering",
      school: "Universidad Nacional de Costa Rica",
      years: "2010 to 2014"
    },
    languagesLabel: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional working" }
    ],
    downloadsLabel: "Documents",
    downloads: [
      { label: "Download full CV", file: "/cv/kenneth-granados-cv.pdf" },
      { label: "Download CV one-pager", file: "/cv/kenneth-granados-one-pager.pdf" }
    ]
  },

  stack: {
    eyebrow: "05 / Stack",
    heading: "What I reach for.",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Jest"]
      },
      {
        label: "Backend",
        items: ["Node.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        label: "Cloud and DevOps",
        items: ["AWS", "Azure", "Docker", "GitHub Actions", "CircleCI", "Netlify"]
      },
      {
        label: "Commerce",
        items: ["commercetools", "Stripe", "Magento", "PIM systems"]
      }
    ]
  },

  howIWork: {
    eyebrow: "04 / How I work",
    heading: "Most projects stall on requirements, not code.",
    items: [
      {
        num: "01",
        title: "Scoped in milestones",
        blurb:
          "A short discovery, then fixed deliverables with clear acceptance criteria. You always know what you are paying for and what lands next."
      },
      {
        num: "02",
        title: "Requirements first",
        blurb:
          "Most of what stalls a project is an under-specified requirement. I raise the gaps with the product owner before writing code, not halfway through the sprint."
      },
      {
        num: "03",
        title: "Visible progress",
        blurb:
          "Your repo, your branch strategy, your review process. Weekly demos or written updates, whichever you actually read."
      },
      {
        num: "04",
        title: "AI-accelerated, human-reviewed",
        blurb:
          "I use Claude and similar tools daily to move faster on scaffolding, tests and research. Every line that ships is one I understand and can defend in review. This site is built the same way."
      }
    ]
  },

  contact: {
    status: "Available for new work",
    headingLead: "Let us talk about",
    headingAccent: "what you need built.",
    lede: "Tell me the problem, even if the requirements are still fuzzy. I will come back with scope, milestones and what I would build first.",
    copyIdle: "Copy address",
    copyDone: "Copied",
    basedInLabel: "Based in",
    basedIn: "Costa Rica, on UTC-6. Same hours as US Central.",
    linkLabels: {
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub"
    },
    download: {
      label: "Download the one-pager (PDF)",
      file: "/cv/kenneth-granados-freelance-one-pager.pdf"
    }
  },

  footer: {
    note: "Built from scratch, no template."
  }
};
