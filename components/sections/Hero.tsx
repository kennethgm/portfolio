import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { ArrowRightIcon } from "@/components/Icons";
import { Counter } from "@/components/ui/Counter";
import { LiveDot } from "@/components/ui/LiveDot";
import { MagneticLink } from "@/components/ui/MagneticLink";
import type { Content } from "@/content/types";

export function Hero({ content }: { content: Content }) {
  const { hero, stats } = content;

  return (
    <section className="relative overflow-hidden border-b border-line-soft">
      <div
        aria-hidden="true"
        className="absolute -left-[10%] -top-[18%] h-[560px] w-[560px] rounded-full bg-accent opacity-[0.16] blur-[70px] md:h-[900px] md:w-[900px]"
      />
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.42'/></svg>\")"
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:gap-10 md:px-9 md:py-28">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <LiveDot />
          <span className="mono text-[11px] uppercase tracking-[0.16em] text-ink-2 md:text-[12.5px]">
            {hero.status}
          </span>
          <span className="hidden h-3.5 w-px bg-line md:inline-block" />
          <span className="mono hidden text-[12.5px] uppercase tracking-[0.16em] text-ink-3 md:inline">
            {hero.location}
          </span>
        </div>

        <h1 className="max-w-[15ch] text-[42px] font-bold leading-[0.98] tracking-[-0.035em] text-balance md:text-[92px] md:leading-[0.94] md:tracking-[-0.035em]">
          {hero.headlineLead} <span className="text-accent">{hero.headlineAccent}</span>
        </h1>

        <p className="max-w-[60ch] text-[16.5px] leading-[1.62] text-ink-2 md:text-[19px]">
          {hero.lede}
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
          <MagneticLink
            href="#contact"
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-accent px-7 text-[15px] font-semibold text-bg md:text-[15.5px]"
          >
            {hero.ctaPrimary}
            <ArrowRightIcon />
          </MagneticLink>
          <MagneticLink
            href="#work"
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-line px-7 text-[15px] font-medium text-ink md:text-[15.5px]"
          >
            {hero.ctaSecondary}
          </MagneticLink>
        </div>
      </div>

      <div className="relative grid grid-cols-2 border-t border-line-soft md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={
              "flex flex-col gap-1.5 border-line-soft px-5 py-5 md:gap-2 md:px-8 md:py-7 " +
              (index % 2 === 0 ? "border-r" : "") +
              " md:border-r md:last:border-r-0" +
              (index < 2 ? " border-b md:border-b-0" : "")
            }
          >
            <Counter
              value={stat.value}
              className="text-[26px] font-bold leading-none tracking-[-0.03em] md:text-[38px]"
            />
            <span className="mono text-[10px] uppercase tracking-[0.12em] text-ink-3 md:text-[11.5px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
