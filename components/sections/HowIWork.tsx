import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/types";

export function HowIWork({ content }: { content: Content }) {
  const { howIWork } = content;

  return (
    <section className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-9 md:py-24">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14">
          <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
            {howIWork.eyebrow}
          </span>
          <h2 className="max-w-[24ch] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[42px]">
            {howIWork.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
            >
              <span className="mono text-xs tracking-[0.16em] text-accent">{item.num}</span>
              <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-[14px] leading-[1.66] text-ink-2">{item.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
