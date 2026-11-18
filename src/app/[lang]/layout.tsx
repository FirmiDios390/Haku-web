import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "../globals.css";
import { isLocale, locales, site } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { BookingFlow } from "@/components/BookingFlow";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  icons: { icon: site.logo },
  openGraph: { type: "website", siteName: site.name, images: [site.images.entrance] },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return <html lang={lang} data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">{lang === "es" ? "Saltar al contenido" : "Skip to content"}</a><BookingFlow locale={lang} dict={dict}>{children}</BookingFlow><span className="sr-only">{dict.metadata.description}</span></body></html>;
}
