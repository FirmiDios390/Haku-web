import Image, { getImageProps } from "next/image";
import Link from "next/link";
import {
  Clock3, Coffee, MapPin, Navigation, Wifi,
} from "lucide-react";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { BookingLink } from "@/components/BookingLink";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { StayPolicies, StaySchedule } from "@/components/StayDetails";
import { roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type SectionProps = { locale: Locale; dict: Dictionary };
const iconProps = { size: 23, strokeWidth: 1.65, "aria-hidden": true } as const;

export function HeroSection({ dict }: SectionProps) {
  const entranceAlt = "Entrada real de HAKU Hostel Lima con arco azul, ladrillos y plantas";
  const { props: { srcSet: desktopEntrance, ...desktopEntranceProps } } = getImageProps({
    src: site.images.entrance,
    alt: entranceAlt,
    width: 2048,
    height: 1536,
    sizes: "58vw",
    quality: 90,
    priority: true,
  });
  const { props: { srcSet: mobileEntrance } } = getImageProps({
    src: site.images.entranceMobile,
    alt: entranceAlt,
    width: 1536,
    height: 2048,
    sizes: "100vw",
    quality: 90,
    priority: true,
  });

  return <section id="top" className="hero shell" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span />{dict.hero.eyebrow}</p>
      <h1 id="hero-title">{dict.hero.title}<br /><em>{dict.hero.accent}</em></h1>
      <p className="hero-text">{dict.hero.body}</p>
      <div className="hero-actions"><BookingLink className="button button-blue">{dict.hero.cta}</BookingLink><a className="button button-terracotta" href="#gallery">{dict.hero.galleryCta}<ArrowIcon diagonal /></a></div>
    </div>
    <div className="hero-media"><span className="hero-shape hero-shape-sand" aria-hidden="true" /><span className="hero-shape hero-shape-terracotta" aria-hidden="true" /><figure className="hero-visual">
      <picture className="hero-picture">
        <source media="(max-width: 899px)" srcSet={mobileEntrance} />
        <img {...desktopEntranceProps} srcSet={desktopEntrance} />
      </picture>
      <figcaption>{dict.hero.caption}<span>01 / HAKU</span></figcaption>
    </figure></div>
  </section>;
}

export function TrustStrip({ dict }: SectionProps) {
  const items = [
    { icon: Coffee, label: dict.trust.breakfast, note: "" },
    { icon: Clock3, label: dict.trust.reception, note: "" },
    { icon: Wifi, label: dict.trust.wifi, note: "" },
    { icon: MapPin, label: dict.trust.award, note: dict.trust.awardNote },
  ];
  return <section className="trust-strip" aria-label="HAKU highlights"><div className="shell trust-grid">
    {items.map(({ icon: Icon, label, note }) => <div className="trust-item" key={label}><Icon {...iconProps} /><span><strong>{label}</strong>{note && <small>{note}</small>}</span></div>)}
  </div></section>;
}

export function RoomsPreview({ locale, dict }: SectionProps) {
  const rooms = [
    { image: site.images.homeSharedRoom, copy: dict.rooms.shared },
    { image: site.images.homePrivateRoom, copy: dict.rooms.private },
  ];
  return <section id="rooms" className="section rooms" aria-labelledby="rooms-title"><div className="shell rooms-layout">
    <div className="rooms-intro"><div className="section-kicker">{dict.rooms.kicker}</div><h2 id="rooms-title">{dict.rooms.title}<br /><em>{dict.rooms.accent}</em></h2><p>{dict.rooms.intro}</p><Link className="text-link" href={`${roomsPath(locale)}#rooms-top`}>{dict.rooms.seeAll}<ArrowIcon diagonal /></Link></div>
    {rooms.map((room, index) => <article className="room-card" key={room.copy.title}><div className="room-card-image"><Image src={room.image} alt={room.copy.alt} fill sizes="(max-width: 899px) 100vw, 32vw" className="cover-image" /></div><div className="room-card-body"><div><span>0{index + 1}</span><h3>{room.copy.title}</h3><p>{room.copy.description}</p></div><BookingLink className="round-link"><span className="sr-only">{dict.rooms.book}: {room.copy.title}</span></BookingLink></div></article>)}
    <p className="source-note">{dict.rooms.verified}</p>
  </div></section>;
}

export function SpacesSection({ dict }: SectionProps) {
  const spaces = [
    { src: site.images.lobby, label: dict.spaces.lobby },
    { src: site.images.dining, label: dict.spaces.dining },
    { src: site.images.homePatio, label: dict.spaces.patio },
  ];
  return <section id="experience" className="section spaces" aria-labelledby="spaces-title"><div className="shell spaces-layout">
    <div className="spaces-heading"><div className="section-kicker">{dict.spaces.kicker}</div><h2 id="spaces-title">{dict.spaces.title}<br /><em>{dict.spaces.accent}</em></h2><p>{dict.spaces.body}</p><a className="button button-dark-outline" href="#gallery">{dict.spaces.link}<ArrowIcon diagonal /></a></div>
    <div className="spaces-media">{spaces.map((space, index) => <figure className={`space-photo space-photo-${index + 1}`} key={space.src}><Image src={space.src} alt={`${space.label} — HAKU Hostel Lima`} fill sizes="(max-width: 899px) 90vw, 24vw" className="cover-image" /><figcaption>0{index + 1} / {space.label}</figcaption></figure>)}</div>
  </div></section>;
}

export function StayInfoSection({ dict }: SectionProps) {
  return <section id="stay-info" className="section stay-info" aria-labelledby="stay-title"><div className="shell stay-grid">
    <div className="stay-intro"><div className="section-kicker">{dict.stay.kicker}</div><h2 id="stay-title">{dict.stay.title}<br /><em>{dict.stay.accent}</em></h2><p>{dict.stay.body}</p></div>
    <StaySchedule stay={dict.stay} />
    <StayPolicies stay={dict.stay} />
  </div></section>;
}

export function GallerySection({ dict }: SectionProps) {
  return <section id="gallery" className="section gallery" aria-labelledby="gallery-title"><div className="shell">
    <div className="gallery-heading"><div><div className="section-kicker">{dict.gallery.kicker}</div><h2 id="gallery-title">{dict.gallery.title}<br /><em>{dict.gallery.accent}</em></h2></div><p>{dict.gallery.body}</p></div>
    <GalleryLightbox images={site.gallery} alts={dict.gallery.alts} captions={dict.gallery.captions} labels={{ open: dict.gallery.open, close: dict.gallery.close, previous: dict.gallery.previous, next: dict.gallery.next, imageOf: dict.gallery.imageOf }} />
  </div></section>;
}

export function LocationSection({ dict }: SectionProps) {
  return <section id="location" className="section location" aria-labelledby="location-title"><div className="shell location-grid">
    <div className="location-copy"><div className="section-kicker">{dict.location.kicker}</div><h2 id="location-title">{dict.location.title}<br /><em>{dict.location.accent}</em></h2><p>{dict.location.body}</p><address>{site.address}</address><a className="button button-outline" href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer">{dict.location.open}<Navigation {...iconProps} /></a></div>
    <div className="editorial-map"><iframe src={site.mapEmbedUrl} title={dict.location.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-card"><MapPin size={26} strokeWidth={1.65} aria-hidden="true" /><span><strong>HAKU HOSTEL Lima</strong><small>{site.address}</small></span></div></div>
  </div></section>;
}

export function FinalCtaSection({ dict }: SectionProps) {
  return <section className="final-cta" aria-labelledby="cta-title"><div className="shell cta-panel"><span className="cta-shape" aria-hidden="true" /><div><div className="section-kicker">{dict.cta.kicker}</div><h2 id="cta-title">{dict.cta.title} <em>{dict.cta.accent}</em></h2><p>{dict.cta.body}</p></div><div className="cta-actions"><BookingLink className="button button-white">{dict.cta.book}</BookingLink><a className="instagram-link" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />{dict.cta.instagram}</a></div></div></section>;
}
