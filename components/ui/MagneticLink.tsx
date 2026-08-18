"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/lib/motion";

export function MagneticLink({
  href,
  children,
  className,
  external = false
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const ref = useMagnetic<HTMLAnchorElement>();

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform duration-200 ease-out ${className ?? ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`transition-transform duration-200 ease-out ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
