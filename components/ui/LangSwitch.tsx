"use client";

import Link from "next/link";
import type { Lang } from "@/content/types";

const LABELS: Record<Lang, string> = { en: "EN", es: "ES" };

/**
 * Remembers the choice for a year so a later visit to "/" (the middleware's
 * redirect target) lands back on the language the visitor picked, not
 * whatever Accept-Language says.
 */
function persistChoice(lang: Lang) {
  document.cookie = `lang=${lang}; max-age=${60 * 60 * 24 * 365}; path=/`;
}

export function LangSwitch({ current, label }: { current: Lang; label: string }) {
  const other: Lang = current === "en" ? "es" : "en";

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-line p-1"
    >
      {(["en", "es"] as Lang[]).map((lang) => (
        <Link
          key={lang}
          href={`/${lang}`}
          onClick={() => persistChoice(lang)}
          aria-current={lang === current ? "true" : undefined}
          className={
            "mono rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-colors " +
            (lang === current ? "bg-accent text-bg" : "text-ink-3 hover:text-ink-2")
          }
        >
          {LABELS[lang]}
        </Link>
      ))}
    </div>
  );
}
