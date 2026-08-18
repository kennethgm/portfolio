"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/motion";

/**
 * Wraps children in a div that fades/lifts in on scroll. `delay` staggers
 * siblings via a plain CSS transition-delay, in ms. Sections keep their own
 * semantic <section> tag around this - this is just the animated inner box.
 */
export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={revealed ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
