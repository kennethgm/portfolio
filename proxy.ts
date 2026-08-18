import { NextRequest, NextResponse } from "next/server";
import { LANGS, type Lang } from "@/content/types";
import { DEFAULT_LANG } from "@/lib/site";

const COOKIE_NAME = "lang";

function pickFromAcceptLanguage(header: string | null): Lang {
  if (!header) return DEFAULT_LANG;
  const preferred = header.split(",")[0]?.slice(0, 2).toLowerCase();
  return LANGS.includes(preferred as Lang) ? (preferred as Lang) : DEFAULT_LANG;
}

// Called "proxy" and not "middleware": Next 16 renamed the file/function
// (see https://nextjs.org/docs/messages/middleware-to-proxy), behavior is
// unchanged.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only the root needs redirecting. Everything under /en or /es already
  // has its language in the URL and is left alone.
  if (pathname !== "/") return NextResponse.next();

  const cookieLang = request.cookies.get(COOKIE_NAME)?.value;
  const lang: Lang = LANGS.includes(cookieLang as Lang)
    ? (cookieLang as Lang)
    : pickFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(COOKIE_NAME, lang, { maxAge: 60 * 60 * 24 * 365, path: "/" });
  return response;
}

export const config = {
  matcher: "/"
};
