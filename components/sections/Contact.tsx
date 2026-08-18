import {
  DownloadIcon,
  ExternalLinkIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon
} from "@/components/Icons";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { LiveDot } from "@/components/ui/LiveDot";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/types";
import { EMAIL, SOCIAL_LINKS } from "@/lib/site";

export function Contact({ content }: { content: Content }) {
  const { contact } = content;

  const links = [
    { label: contact.linkLabels.linkedin, handle: "/in/kennethmgm", href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
    { label: contact.linkLabels.instagram, handle: "@kennethmgm", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
    { label: contact.linkLabels.github, handle: "@kennethgm", href: SOCIAL_LINKS.github, Icon: GithubIcon }
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-accent opacity-[0.13] blur-[80px] md:h-[700px] md:w-[1100px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-16 md:px-9 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <LiveDot />
            <span className="mono text-[11px] uppercase tracking-[0.16em] text-ink-2 md:text-xs">
              {contact.status}
            </span>
          </div>

          <h2 className="text-[38px] font-bold leading-[0.98] tracking-[-0.04em] md:text-[68px]">
            {contact.headingLead}
            <br />
            <span className="text-accent">{contact.headingAccent}</span>
          </h2>

          <p className="max-w-[46ch] text-[15.5px] leading-[1.64] text-ink-2 md:text-[17.5px]">
            {contact.lede}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-accent px-7 text-[15px] font-semibold text-bg md:text-base"
            >
              <MailIcon size={17} />
              {EMAIL}
            </a>
            <CopyEmailButton email={EMAIL} idleLabel={contact.copyIdle} doneLabel={contact.copyDone} />
          </div>

          <a
            href={contact.download.file}
            download
            className="mono flex w-fit items-center gap-2 text-[13px] text-ink-3 underline decoration-line underline-offset-4 transition-colors hover:text-ink-2"
          >
            <DownloadIcon size={14} />
            {contact.download.label}
          </a>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-3">
          {links.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-line bg-surface px-6 py-5 transition-[border-color,transform] duration-200 hover:translate-x-1.5 hover:border-ink-3"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-accent">
                <Icon />
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                  {label}
                </span>
                <span className="text-[16px] font-medium tracking-[-0.015em]">{handle}</span>
              </span>
              <ExternalLinkIcon className="text-ink-3" />
            </a>
          ))}

          <div className="flex items-center gap-5 rounded-2xl border border-line bg-raised px-6 py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-accent">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <span className="flex flex-col gap-1">
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                {contact.basedInLabel}
              </span>
              <span className="text-[16px] font-medium tracking-[-0.015em]">{contact.basedIn}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
