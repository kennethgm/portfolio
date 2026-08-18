import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getContent, LANGS, toLang } from "@/content";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import "../globals.css";

// next/font downloads at build time and serves from our own domain, so the
// visitor's browser never hits Google directly.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap"
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Anything outside "en"/"es" 404s instead of silently rendering a blank page.
export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const content = getContent(lang);
  const path = `/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        es: "/es"
      }
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: absoluteUrl(path),
      siteName: "Kenneth Granados",
      locale: lang === "es" ? "es_CR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = toLang((await params).lang);
  const content = getContent(lang);

  return (
    <html lang={lang} className={`${archivo.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-bg text-ink">
        <Header lang={lang} nav={content.nav} />
        <main>{children}</main>
        <Footer content={content} />
      </body>
    </html>
  );
}
