"use client";

import { useCounter } from "@/lib/motion";

export function Counter({ value, className }: { value: string; className?: string }) {
  const { ref, display } = useCounter(value);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
