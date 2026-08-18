"use client";

import Link from "next/link";
import { useState } from "react";
import { LangSwitch } from "@/components/ui/LangSwitch";
import type { Content, Lang } from "@/content/types";
import { CloseIcon, MenuIcon } from "./Icons";

const NAV_ITEMS: { key: keyof Content["nav"]; href: string }[] = [
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "stack", href: "#stack" },
  { key: "contact", href: "#contact" }
];

export function Header({ lang, nav }: { lang: Lang; nav: Content["nav"] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-9 md:py-[30px]">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent">
            <span className="mono text-xs font-medium text-accent">KG</span>
          </span>
          <span className="mono hidden text-xs uppercase tracking-[0.14em] text-ink-3 md:inline">
            kennethgm.com
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="mono text-[12.5px] uppercase tracking-[0.1em] text-ink-2 transition-colors hover:text-ink"
            >
              {nav[item.key]}
            </a>
          ))}
          <LangSwitch current={lang} label={nav.language} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch current={lang} label={nav.language} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? nav.menu : nav.menu}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-5 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mono flex min-h-11 items-center text-sm uppercase tracking-[0.1em] text-ink-2"
            >
              {nav[item.key]}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
