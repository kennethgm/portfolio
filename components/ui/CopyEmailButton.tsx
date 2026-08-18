"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/Icons";

export function CopyEmailButton({
  email,
  idleLabel,
  doneLabel
}: {
  email: string;
  idleLabel: string;
  doneLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API can fail on http/older browsers - the mailto button
      // right next to this one still works, so there is nothing more to do.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex min-h-[54px] items-center justify-center gap-2.5 rounded-full border border-line px-6 text-[14.5px] font-medium text-ink"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? doneLabel : idleLabel}
    </button>
  );
}
