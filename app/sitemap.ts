import type { MetadataRoute } from "next";
import { LANGS } from "@/content/types";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1
  }));
}
