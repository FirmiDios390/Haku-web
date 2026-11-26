import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { isLocale } from "@/config/site";
import { hostelJsonLd, localizedMetadata } from "@/config/seo";
import { getDictionary } from "@/i18n/dictionaries";

type LangPageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return localizedMetadata(lang, "home", dict.metadata.title, dict.metadata.description);
}

export default async function Page({ params }: LangPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: hostelJsonLd(lang, dict.metadata.description) }} />
    <LandingPage locale={lang} dict={dict} />
  </>;
}
