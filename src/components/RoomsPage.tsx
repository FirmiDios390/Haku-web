import { StaticPhoto } from "@/components/StaticPhoto";
import Link from "next/link";
import { Check } from "lucide-react";
import { BookingLink } from "@/components/BookingLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowIcon } from "@/components/Icons";
import { homePath, roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function RoomsPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = [dict.rooms.shared, dict.rooms.private];
  const alternate = roomsPath(locale === "es" ? "en" : "es");
  return <><Header locale={locale} dict={dict} languageHref={alternate} /><main id="main-content" className="rooms-page">
    <header id="rooms-top" className="rooms-page-hero shell"><div className="section-kicker">HAKU LIMA / {dict.nav.rooms}</div><h1>{dict.rooms.pageTitle}<br /><em>{dict.rooms.pageAccent}</em></h1><p>{dict.rooms.pageBody}</p><Link className="text-link" href={`${homePath(locale)}#rooms`}><ArrowIcon />{dict.rooms.back}</Link></header>
    <div className="shell room-detail-list">{site.rooms.map((room, index) => <article className="room-detail" key={room.id}>
      <div className="room-detail-gallery"><figure className="room-detail-main"><StaticPhoto src={room.images[0]} alt={copy[index].alt} preload={index === 0} sizes="(max-width: 760px) 68vw, 44vw" className="cover-image" /></figure><figure className="room-detail-small"><StaticPhoto src={room.images[1]} alt="" sizes="(max-width: 760px) 32vw, 18vw" className="cover-image" /></figure><figure className="room-detail-extra"><StaticPhoto src={room.images[2]} alt="" sizes="(max-width: 760px) 32vw, 18vw" className="cover-image" /></figure></div>
      <div className="room-detail-copy"><span>0{index + 1} / {dict.nav.rooms}</span><h2>{copy[index].title}</h2><p>{copy[index].description}</p><ul>{copy[index].details.map((item) => <li key={item}><Check size={18} strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul><BookingLink className="button button-blue">{dict.rooms.book}</BookingLink></div>
    </article>)}</div>
    <div className="shell room-page-note"><p>{dict.rooms.verified}</p><BookingLink className="text-link">{dict.rooms.book}</BookingLink></div>
  </main><Footer locale={locale} dict={dict} /></>;
}
