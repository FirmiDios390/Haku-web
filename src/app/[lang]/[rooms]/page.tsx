import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoomsPage } from "@/components/RoomsPage";
import { isLocale, roomsPath } from "@/config/site";
import { localizedMetadata } from "@/config/seo";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams({ params: { lang } }: { params: { lang: string } }) {
  return isLocale(lang) ? [{ rooms: roomsPath(lang).split("/")[2] }] : [];
}

function validRoomSlug(lang: string, rooms: string) {
  return isLocale(lang) && roomsPath(lang) === `/${lang}/${rooms}`;
}

type RoomsPageProps = { params: Promise<{ lang: string; rooms: string }> };

export async function generateMetadata({ params }: RoomsPageProps): Promise<Metadata> {
  const { lang, rooms } = await params;
  if (!isLocale(lang) || !validRoomSlug(lang, rooms)) return {};
  const dict = getDictionary(lang);
  return localizedMetadata(lang, "rooms", `${dict.nav.rooms} | HAKU HOSTEL Lima`, dict.rooms.pageBody);
}

export default async function Page({ params }: RoomsPageProps) {
  const { lang, rooms } = await params;
  if (!isLocale(lang) || !validRoomSlug(lang, rooms)) notFound();
  return <RoomsPage locale={lang} dict={getDictionary(lang)} />;
}
