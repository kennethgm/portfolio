import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/types";

export function Services({ content }: { content: Content }) {
  const { services } = content;

  return (
    <section className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-9 md:py-24">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:max-w-[52ch]">
          <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
            {services.eyebrow}
          </span>
          <h2 className="text-[32px] font-bold leading-[1.06] tracking-[-0.03em] md:text-[44px]">
            {services.heading}
          </h2>
          <p className="text-[15.5px] leading-[1.62] text-ink-2 md:text-base">{services.lede}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 70}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="text-[18px] font-semibold leading-tight tracking-[-0.015em]">
                {item.title}
              </h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{item.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
