export function LiveDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`h-1.5 w-1.5 shrink-0 rounded-full bg-ok shadow-[0_0_12px_rgba(95,227,176,0.6)] motion-safe:animate-pulse ${className ?? ""}`}
    />
  );
}
