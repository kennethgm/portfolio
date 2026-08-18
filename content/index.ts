import { en } from "./en";
import { es } from "./es";
import { LANGS, type Content, type Lang } from "./types";

const DICTIONARIES: Record<Lang, Content> = { en, es };

export function getContent(lang: Lang): Content {
  return DICTIONARIES[lang];
}

/**
 * Next's typed routes generate `params.lang` as a plain `string` for any
 * `[lang]` segment - it has no way to know the segment is really our two-
 * value union. `dynamicParams = false` on app/[lang]/layout.tsx already
 * 404s anything outside LANGS before this ever runs, so narrowing here is
 * just telling TypeScript what routing has already guaranteed.
 */
export function toLang(raw: string): Lang {
  return LANGS.includes(raw as Lang) ? (raw as Lang) : "en";
}

export * from "./types";
