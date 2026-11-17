import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { homePath, isLocale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

type LangPageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.metadata.title, description: dict.metadata.description, alternates: { canonical: homePath(lang), languages: { es: "/es", en: "/en" } } };
}

export default async function Page({ params }: LangPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <div id="main-content"><LandingPage locale={lang} dict={getDictionary(lang)} /></div>;
}
