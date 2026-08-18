"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function supportsHover(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover)").matches;
}

/**
 * Fades and lifts an element in once it enters the viewport. Renders
 * visible by default (see the html.reveal-armed rule in globals.css) so
 * content never depends on this hook running to be readable.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setRevealed(true);
      return;
    }

    document.documentElement.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

/**
 * Pointer-following 3D tilt for cards. No-op on touch (hover: none) and
 * under reduced motion, so it only ever runs where a mouse is actually
 * hovering.
 */
export function useTilt<T extends HTMLElement>(strength = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion() || !supportsHover()) return;

    const handleMove = (event: PointerEvent) => {
      const box = node.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      node.style.transform = `rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength * 1.15).toFixed(2)}deg) translateY(-4px)`;
    };

    const handleLeave = () => {
      node.style.transform = "";
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Nudges an element a few pixels toward the pointer. Used on primary CTAs.
 * Same no-op guards as useTilt.
 */
export function useMagnetic<T extends HTMLElement>(strength = 14) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion() || !supportsHover()) return;

    const handleMove = (event: PointerEvent) => {
      const box = node.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      node.style.transform = `translate(${(px * strength).toFixed(1)}px, ${(py * strength).toFixed(1)}px)`;
    };

    const handleLeave = () => {
      node.style.transform = "";
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Counts a numeric value up from 0 once its element enters the viewport.
 * Non-numeric strings (e.g. "~60%", "6,000+") are parsed for their leading
 * digits and the rest of the string is kept as a static suffix/prefix.
 */
export function useCounter(target: string, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? target : "0"));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setDisplay(target);
      return;
    }

    const match = target.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const end = parseInt(numStr.replace(/,/g, ""), 10);
    const hasCommas = numStr.includes(",");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(end * eased);
          const formatted = hasCommas ? value.toLocaleString("en-US") : String(value);
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, display };
}
