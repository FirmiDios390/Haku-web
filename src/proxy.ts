import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/config/site";

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("haku_locale")?.value;
  if (saved && isLocale(saved)) return saved;
  return request.headers.get("accept-language")?.toLowerCase().startsWith("en") ? "en" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLocale(pathname.split("/")[1])) return NextResponse.next();
  const locale = preferredLocale(request);
  const destination = request.nextUrl.clone();
  destination.pathname = pathname === "/" || pathname === "/lima" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(destination);
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
