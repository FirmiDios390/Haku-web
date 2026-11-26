import type { Metadata } from "next";
import { homePath, roomsPath, site, type Locale } from "@/config/site";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = new URL(configuredOrigin ?? "http://localhost:3000");
if (configuredOrigin && (
  siteUrl.protocol !== "https:" ||
  siteUrl.pathname !== "/" ||
  siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash
)) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be the canonical HTTPS origin without a path.");
}
if (process.env.CF_PAGES === "1" && !configuredOrigin) {
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the canonical HTTPS origin in Cloudflare Pages.");
}

export const siteOrigin = siteUrl.origin;
export const siteIndexable = Boolean(configuredOrigin);
export const canonicalUrl = (path: string) => new URL(path, siteOrigin).href;

export function localizedMetadata(locale: Locale, page: "home" | "rooms", title: string, description: string): Metadata {
  const route = page === "home" ? homePath : roomsPath;
  const canonical = canonicalUrl(route(locale));
  const ogImage = page === "home" ? site.images.entrance : site.images.homePrivateRoom;
  return {
    title,
    description,
    robots: { index: siteIndexable, follow: true },
    alternates: {
      canonical,
      languages: { es: canonicalUrl(route("es")), en: canonicalUrl(route("en")), "x-default": canonicalUrl(route("es")) },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title,
      description,
      locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_PE",
      images: [{ url: canonicalUrl(ogImage) }],
    },
  };
}

export function hostelJsonLd(locale: Locale, description: string) {
  const streetAddress = site.address.split(",")[0];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Hostel",
    "@id": canonicalUrl("/es#hostel"),
    name: site.name,
    url: canonicalUrl(homePath(locale)),
    description,
    image: canonicalUrl(site.images.entrance),
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: "Miraflores",
      addressRegion: "Lima",
      postalCode: "15074",
      addressCountry: "PE",
    },
    hasMap: site.googleMapsUrl,
    sameAs: [site.instagramUrl],
  }).replace(/</g, "\\u003c");
}
