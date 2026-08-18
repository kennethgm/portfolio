"use client";

import type { ReactNode } from "react";
import { useTilt } from "@/lib/motion";

export function TiltCard({
  children,
  className,
  strength = 7
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useTilt<HTMLDivElement>(strength);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
