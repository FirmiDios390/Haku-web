import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomsPage } from "@/components/RoomsPage";
import { isLocale, roomsPath } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

function validRoomSlug(lang: string, rooms: string) {
  return (lang === "es" && rooms === "habitaciones") || (lang === "en" && rooms === "rooms");
}

type RoomsPageProps = { params: Promise<{ lang: string; rooms: string }> };

export async function generateMetadata({ params }: RoomsPageProps): Promise<Metadata> {
  const { lang, rooms } = await params;
  if (!isLocale(lang) || !validRoomSlug(lang, rooms)) return {};
  const dict = getDictionary(lang);
  return { title: `${dict.nav.rooms} | HAKU HOSTEL Lima`, description: dict.rooms.pageBody, alternates: { canonical: roomsPath(lang), languages: { es: "/es/habitaciones", en: "/en/rooms" } } };
}

export default async function Page({ params }: RoomsPageProps) {
  const { lang, rooms } = await params;
  if (!isLocale(lang) || !validRoomSlug(lang, rooms)) notFound();
  return <RoomsPage locale={lang} dict={getDictionary(lang)} />;
}
