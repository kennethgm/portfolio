import { ExternalLinkIcon } from "@/components/Icons";
import { LiveDot } from "@/components/ui/LiveDot";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Content } from "@/content/types";

export function Work({ content }: { content: Content }) {
  const { work } = content;

  return (
    <section id="work" className="scroll-mt-20 border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-9 md:py-24">
        <Reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-4">
            <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
              {work.eyebrow}
            </span>
            <h2 className="max-w-[18ch] text-[32px] font-bold leading-[1.03] tracking-[-0.03em] md:text-[46px]">
              {work.heading}
            </h2>
          </div>
          <p className="max-w-[34ch] text-[15px] leading-[1.62] text-ink-2 md:text-base">
            {work.lede}
          </p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-5 [perspective:1400px] md:grid-cols-2 md:gap-6">
          {work.featured.map((project, index) => {
            // An odd count (e.g. a third "case study" project without a live
            // link) gets its own full-width row instead of leaving a gap.
            const isDanglingLast =
              index === work.featured.length - 1 && work.featured.length % 2 === 1;

            return (
            <Reveal key={project.id} delay={index * 100} className={isDanglingLast ? "md:col-span-2" : ""}>
              <TiltCard className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-raised to-surface">
                <div
                  className="relative flex h-[160px] items-center justify-center overflow-hidden border-b border-line md:h-[220px]"
                  style={{ background: project.wash }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[length:40px_40px] bg-[image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
                  />
                  <div className="relative [transform:translateZ(40px)] flex flex-col items-center gap-2.5">
                    <span
                      className="text-[34px] font-extrabold uppercase tracking-[-0.04em] md:text-[46px]"
                      style={{ color: project.tone }}
                    >
                      {project.wordmark}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    {project.live ? (
                      <LiveDot />
                    ) : (
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                    )}
                    <span
                      className={`mono text-[10.5px] uppercase tracking-[0.16em] ${project.live ? "text-ok" : "text-ink-3"}`}
                    >
                      {project.tag}
                    </span>
                    <span className="h-2.5 w-px bg-line" />
                    <span className="mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[24px] font-bold tracking-[-0.025em] md:text-[27px]">
                      {project.name}
                    </h3>
                    <span className="mono text-[11.5px] text-accent">{project.url}</span>
                  </div>

                  <p className="text-[14.5px] leading-[1.66] text-ink-2">{project.blurb}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((chip) => (
                      <span
                        key={chip}
                        className="mono rounded-md border border-line px-2.5 py-1.5 text-[10.5px] text-ink-2"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-line text-[14px] font-medium text-ink"
                    >
                      {work.openSite}
                      <ExternalLinkIcon size={14} />
                    </a>
                  ) : null}
                </div>
              </TiltCard>
            </Reveal>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
          {work.client.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <TiltCard
                strength={5}
                className="flex h-full flex-col gap-4 rounded-[18px] border border-line bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                    {project.sector}
                  </span>
                  <span className="mono text-[10.5px] text-ink-3">{project.years}</span>
                </div>
                <h3 className="min-h-[52px] text-[19px] font-semibold leading-[1.24] tracking-[-0.02em]">
                  {project.name}
                </h3>
                <p className="flex-1 text-[14px] leading-[1.62] text-ink-2">{project.blurb}</p>
                <div className="flex items-center gap-2.5 border-t border-line-soft pt-3">
                  <span className="text-[20px] font-bold tracking-[-0.03em] text-accent">
                    {project.metric}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                    {project.metricLabel}
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
