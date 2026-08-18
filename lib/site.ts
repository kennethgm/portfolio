import type { Lang } from "@/content/types";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const EMAIL = "kenneth.granados@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/kennethmgm",
  instagram: "https://instagram.com/kennethmgm",
  github: "https://github.com/kennethgm"
};

export const DEFAULT_LANG: Lang = "en";

/** Absolute URL for a given path, used by metadata that needs a full origin. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
