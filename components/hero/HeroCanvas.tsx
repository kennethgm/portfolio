"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

const ACCENT = "#8ea2ff";
// Any two points closer than this (in px, squared to skip a sqrt per pair) get a line.
const LINK_DISTANCE_SQUARED = 175 * 175;

/**
 * A drifting constellation of points behind the hero copy. Pure canvas 2D,
 * no dependency. Point count scales with the canvas area so a phone runs a
 * fraction of the desktop load, it pauses via IntersectionObserver when
 * scrolled out of view, and goes fully static under prefers-reduced-motion.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let raf = 0;
    let running = true;

    const seedPoints = () => {
      const count = Math.max(18, Math.round((width * height) / 15000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38
      }));
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedPoints();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reduced) {
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
      }

      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distSquared = dx * dx + dy * dy;
          if (distSquared < LINK_DISTANCE_SQUARED) {
            ctx.globalAlpha = (1 - distSquared / LINK_DISTANCE_SQUARED) * 0.22;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.7;
      ctx.fillStyle = ACCENT;
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduced && running) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
