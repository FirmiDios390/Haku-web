import { isPagesHostname, reportOnlyPolicy, securityHeaders } from "./security.mjs";

export const languageEntryPaths = ["/", "/lima", "/lima/"];

export function preferredLocale(headers) {
  const cookieValue = (headers.get("cookie") ?? "")
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("haku_locale="))
    ?.slice("haku_locale=".length);
  if (cookieValue === "es" || cookieValue === "en") return cookieValue;

  const firstLanguage = (headers.get("accept-language") ?? "").split(",", 1)[0].trim();
  return /^en(?:-[a-z0-9]+)*(?:\s*;|$)/i.test(firstLanguage) ? "en" : "es";
}

export function localeRedirect(request) {
  const url = new URL(request.url);
  if (!languageEntryPaths.includes(url.pathname)) {
    return new Response(null, { status: 404, headers: securityHeaders });
  }
  // Only predefined paths become destinations. The query is retained for attribution.
  const location = (preferredLocale(request.headers) === "en" ? "/en" : "/es") + url.search;
  const headers = new Headers({
    ...securityHeaders,
    "Content-Security-Policy-Report-Only": reportOnlyPolicy(),
    "Cache-Control": "private, no-store",
    Vary: "Cookie, Accept-Language",
    Location: location,
  });
  if (isPagesHostname(url.hostname)) headers.set("X-Robots-Tag", "noindex");
  return new Response(null, { status: 307, headers });
}
