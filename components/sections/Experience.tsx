import { DownloadIcon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/types";

const DOT_COLORS = ["bg-accent", "bg-ok", "bg-ink-3"];

export function Experience({ content }: { content: Content }) {
  const { experience } = content;

  return (
    <section id="experience" className="scroll-mt-20 border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-9 md:py-24">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14">
          <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
            {experience.eyebrow}
          </span>
          <h2 className="max-w-[20ch] text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[44px]">
            {experience.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col gap-1.5 border-b border-line pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[21px] font-bold tracking-[-0.022em] md:text-[24px]">
                  {experience.company}{" "}
                  <span className="text-[16px] font-medium text-ink-3">
                    {experience.companyNote}
                  </span>
                </h3>
                <span className="mono text-[11px] uppercase tracking-[0.1em] text-accent md:text-[12.5px]">
                  {experience.span}
                </span>
              </div>
              <p className="text-sm text-ink-2">{experience.companyBlurb}</p>
            </Reveal>

            <div className="flex flex-col gap-3.5">
              {experience.roles.map((role, index) => (
                <Reveal key={role.title} delay={index * 80}>
                  <div className="flex gap-5 rounded-2xl border border-line-soft bg-surface p-5 md:p-6">
                    <div className="flex flex-col items-center gap-2 pt-1.5">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${DOT_COLORS[index] ?? "bg-ink-3"}`}
                      />
                      <span className="w-px flex-1 bg-line" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-[17px] font-semibold tracking-[-0.018em] md:text-[18.5px]">
                          {role.title}
                        </span>
                        <span className="mono text-[11.5px] text-ink-3">{role.span}</span>
                      </div>
                      <p className="text-[14px] leading-[1.64] text-ink-2 md:text-[14.8px]">
                        {role.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-[15px] font-semibold tracking-[-0.015em] md:text-base">
                  {experience.education.degree}
                </span>
                <span className="text-[13.5px] text-ink-2">{experience.education.school}</span>
              </div>
              <span className="mono shrink-0 text-[11px] text-ink-3 md:text-xs">
                {experience.education.years}
              </span>
            </Reveal>
          </div>

          <div id="stack" className="scroll-mt-20 flex flex-col gap-6">
            <Reveal className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 md:p-7">
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
                {content.stack.eyebrow}
              </span>
              {content.stack.groups.map((group) => (
                <div key={group.label} className="flex flex-col gap-2.5">
                  <span className="mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="mono rounded-md border border-line px-2.5 py-1.5 text-[11px] text-ink-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="flex flex-col gap-3 rounded-2xl border border-line bg-surface px-6 py-5 md:px-7">
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
                {experience.languagesLabel}
              </span>
              <div className="flex flex-col gap-2">
                {experience.languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between">
                    <span className="text-[14.5px]">{lang.name}</span>
                    <span className="mono text-[11.5px] text-ink-2">{lang.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-2.5">
              {experience.downloads.map((download, index) => (
                <a
                  key={download.file}
                  href={download.file}
                  download
                  className={
                    "flex min-h-[52px] items-center gap-3 rounded-xl px-5 text-[14px] font-medium " +
                    (index === 0
                      ? "bg-accent text-bg font-semibold"
                      : "border border-line text-ink")
                  }
                >
                  <DownloadIcon size={16} />
                  {download.label}
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
