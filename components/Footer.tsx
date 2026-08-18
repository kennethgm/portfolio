import type { Content } from "@/content/types";

export function Footer({ content }: { content: Content }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-3 px-5 py-8 text-center md:flex-row md:justify-between md:px-9 md:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line">
            <span className="mono text-[10.5px] text-ink-2">KG</span>
          </span>
          <span className="mono text-xs text-ink-3">kennethgm.com</span>
        </div>
        <span className="mono text-xs text-ink-3">
          © {year} Kenneth Granados · {content.footer.note}
        </span>
      </div>
    </footer>
  );
}
