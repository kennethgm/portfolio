/**
 * The single shape both language files must satisfy. Adding a field here breaks
 * the build until BOTH en.ts and es.ts fill it in, which is the whole point:
 * without it the two languages drift apart within a few edits.
 */

export type Lang = "en" | "es";

export const LANGS: Lang[] = ["en", "es"];

export interface Stat {
  /** Rendered as-is when it is not a plain number, e.g. "~60%". */
  value: string;
  label: string;
}

export interface Service {
  title: string;
  blurb: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  wordmark: string;
  url: string;
  /** Omitted when the project has no reliably-live URL to send a visitor to. */
  href?: string;
  tag: string;
  role: string;
  blurb: string;
  stack: string[];
  /** Accent used for the wordmark and the card wash. */
  tone: string;
  wash: string;
  /** Drives the pulsing dot and the "open the site" button - both need a live href to make sense. */
  live: boolean;
}

export interface ClientProject {
  id: string;
  name: string;
  sector: string;
  years: string;
  blurb: string;
  metric: string;
  metricLabel: string;
}

export interface Role {
  title: string;
  span: string;
  blurb: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Principle {
  num: string;
  title: string;
  blurb: string;
}

export interface Download {
  label: string;
  file: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
    /** Short line for the generated Open Graph card. */
    ogTagline: string;
  };

  nav: {
    work: string;
    experience: string;
    stack: string;
    contact: string;
    menu: string;
    /** Accessible label for the language switch. */
    language: string;
  };

  hero: {
    status: string;
    location: string;
    headlineLead: string;
    headlineAccent: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  stats: Stat[];

  services: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: Service[];
  };

  work: {
    eyebrow: string;
    heading: string;
    lede: string;
    openSite: string;
    featured: FeaturedProject[];
    client: ClientProject[];
  };

  experience: {
    eyebrow: string;
    heading: string;
    company: string;
    companyNote: string;
    companyBlurb: string;
    span: string;
    roles: Role[];
    education: {
      degree: string;
      school: string;
      years: string;
    };
    languagesLabel: string;
    languages: { name: string; level: string }[];
    downloadsLabel: string;
    downloads: Download[];
  };

  stack: {
    eyebrow: string;
    heading: string;
    groups: StackGroup[];
  };

  howIWork: {
    eyebrow: string;
    heading: string;
    items: Principle[];
  };

  contact: {
    status: string;
    headingLead: string;
    headingAccent: string;
    lede: string;
    copyIdle: string;
    copyDone: string;
    basedInLabel: string;
    basedIn: string;
    linkLabels: {
      linkedin: string;
      instagram: string;
      github: string;
    };
    download: Download;
  };

  footer: {
    note: string;
  };
}
