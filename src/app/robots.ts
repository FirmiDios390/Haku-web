import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/config/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Proposed publishing default: allow search, opt out of foundation-model training.
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: canonicalUrl("/sitemap.xml"),
  };
}
