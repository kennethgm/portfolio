import type { ReactNode } from "react";

// Deliberately empty: the html/body tags live in app/[lang]/layout.tsx so the
// lang attribute can be set from the route param. This is the documented
// Next.js App Router pattern for a localized root - see
// https://nextjs.org/docs/app/building-your-application/routing/internationalization
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
