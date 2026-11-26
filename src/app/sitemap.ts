import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/config/seo";
import { homePath, locales, roomsPath } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [homePath, roomsPath].flatMap((route) => locales.map((locale) => ({
    url: canonicalUrl(route(locale)),
    alternates: {
      languages: { es: canonicalUrl(route("es")), en: canonicalUrl(route("en")), "x-default": canonicalUrl(route("es")) },
    },
  })));
}
