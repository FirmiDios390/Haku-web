import Image from "next/image";
import Link from "next/link";
import {
  Award, CalendarClock, CalendarX, Clock3, Coffee, CreditCard,
  DoorOpen, Dumbbell, MapPin, Navigation, PawPrint, UsersRound, Waves, Wifi,
} from "lucide-react";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { BookingLink } from "@/components/BookingLink";
import { roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type SectionProps = { locale: Locale; dict: Dictionary };
const iconProps = { size: 23, strokeWidth: 1.65, "aria-hidden": true } as const;

export function HeroSection({ dict }: SectionProps) {
  return <section id="top" className="hero shell" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span />{dict.hero.eyebrow}</p>
      <h1 id="hero-title">{dict.hero.title}<br /><em>{dict.hero.accent}</em></h1>
      <p className="hero-text">{dict.hero.body}</p>
      <div className="hero-actions"><BookingLink className="button button-blue">{dict.hero.cta}</BookingLink><a className="button button-terracotta" href="#gallery">{dict.hero.galleryCta}<ArrowIcon diagonal /></a></div>
    </div>
    <div className="hero-media"><span className="hero-shape hero-shape-sand" aria-hidden="true" /><span className="hero-shape hero-shape-terracotta" aria-hidden="true" /><figure className="hero-visual">
      <Image src={site.images.entrance} alt="Entrada real de HAKU Hostel Lima con arco azul, ladrillos y plantas" fill priority sizes="(max-width: 760px) 100vw, 54vw" className="cover-image" />
      <figcaption>{dict.hero.caption}<span>01 / 08</span></figcaption>
    </figure></div>
  </section>;
}

export function TrustStrip({ dict }: SectionProps) {
  const items = [
    { icon: Coffee, label: dict.trust.breakfast },
    { icon: Clock3, label: dict.trust.reception },
    { icon: Wifi, label: dict.trust.wifi },
  ];
  return <section className="trust-strip" aria-label="HAKU highlights"><div className="shell trust-grid">
    {items.map(({ icon: Icon, label }) => <div className="trust-item" key={label}><Icon {...iconProps} /><span>{label}</span></div>)}
    <a className="trust-item trust-award" href={site.award.sourceUrl} target="_blank" rel="noopener noreferrer"><Award {...iconProps} /><span><strong>{dict.trust.award}</strong><small>{dict.trust.awardNote}</small></span></a>
  </div></section>;
}

export function ExperienceSection({ dict }: SectionProps) {
  return <section id="experience" className="section experience" aria-labelledby="experience-title"><div className="shell experience-grid">
    <div className="section-kicker">{dict.experience.kicker}</div>
    <div className="experience-copy"><h2 id="experience-title">{dict.experience.title}<br /><em>{dict.experience.accent}</em></h2><p>{dict.experience.body}</p><a className="text-link" href="#spaces">{dict.experience.link}<ArrowIcon diagonal /></a></div>
    <figure className="experience-image"><Image src={site.images.lounge} alt={dict.gallery.alts[5]} fill sizes="(max-width: 760px) 100vw, 32vw" className="cover-image" /></figure>
    <p className="experience-note">{dict.experience.note}</p>
  </div></section>;
}

export function RoomsPreview({ locale, dict }: SectionProps) {
  const roomCopy = [dict.rooms.shared, dict.rooms.private];
  return <section id="rooms" className="section rooms" aria-labelledby="rooms-title"><div className="shell">
    <div className="section-heading"><div><div className="section-kicker">{dict.rooms.kicker}</div><h2 id="rooms-title">{dict.rooms.title}<br /><em>{dict.rooms.accent}</em></h2></div><div><p>{dict.rooms.intro}</p><Link className="text-link" href={roomsPath(locale)}>{dict.rooms.seeAll}<ArrowIcon diagonal /></Link></div></div>
    <div className="room-preview-grid">{site.rooms.map((room, index) => <article className="room-card" key={room.id}><div className="room-card-image"><Image src={room.images[0]} alt={roomCopy[index].alt} fill sizes="(max-width: 760px) 100vw, 48vw" className="cover-image" /></div><div className="room-card-body"><span>0{index + 1}</span><div><h3>{roomCopy[index].title}</h3><p>{roomCopy[index].description}</p></div><BookingLink className="round-link"><span className="sr-only">{dict.rooms.book}: {roomCopy[index].title}</span></BookingLink></div></article>)}</div>
    <p className="source-note">{dict.rooms.verified}</p>
  </div></section>;
}

export function SpacesSection({ dict }: SectionProps) {
  return <section id="spaces" className="section spaces" aria-labelledby="spaces-title"><div className="shell spaces-grid">
    <div className="spaces-heading"><div className="section-kicker">{dict.spaces.kicker}</div><h2 id="spaces-title">{dict.spaces.title}<br /><em>{dict.spaces.accent}</em></h2><p>{dict.spaces.body}</p></div>
    <figure className="space-main"><Image src={site.images.lounge} alt={dict.gallery.alts[5]} fill sizes="(max-width: 760px) 100vw, 52vw" className="cover-image" /><figcaption><UsersRound {...iconProps} />01 / {dict.spaces.lounge}<span>{dict.spaces.social}</span></figcaption></figure>
    <figure className="space-small"><Image src={site.images.exercise} alt={dict.gallery.alts[6]} fill sizes="(max-width: 760px) 78vw, 25vw" className="cover-image" /><figcaption><Dumbbell {...iconProps} />02 / {dict.spaces.exercise}<span>{dict.spaces.calm}</span></figcaption></figure>
  </div></section>;
}

export function GallerySection({ dict }: SectionProps) {
  return <section id="gallery" className="section gallery" aria-labelledby="gallery-title"><div className="shell">
    <div className="gallery-heading"><div className="section-kicker">{dict.gallery.kicker}</div><h2 id="gallery-title">{dict.gallery.title}<br /><em>{dict.gallery.accent}</em></h2><p>{dict.gallery.body}</p></div>
    <div className="gallery-grid">{site.gallery.map((image, index) => <figure key={image.src} className={`gallery-item gallery-${index + 1} gallery-${image.layout}`}><Image src={image.src} alt={dict.gallery.alts[index]} fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 38vw" className="cover-image" style={{ objectPosition: image.position }} /><figcaption>0{index + 1} / {dict.gallery.captions[index]}</figcaption></figure>)}</div>
  </div></section>;
}

export function LocationSection({ dict }: SectionProps) {
  return <section id="location" className="section location" aria-labelledby="location-title"><div className="shell location-grid">
    <div className="location-copy"><div className="section-kicker">{dict.location.kicker}</div><h2 id="location-title">{dict.location.title}<br /><em>{dict.location.accent}</em></h2><p>{dict.location.body}</p><address>{site.address}</address><a className="button button-outline" href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer">{dict.location.open}<Navigation {...iconProps} /></a></div>
    <div className="editorial-map" aria-label={dict.location.map}><div className="map-grid" aria-hidden="true" /><span className="map-coast"><Waves {...iconProps} />{dict.location.coast}</span><span className="map-pin"><MapPin size={35} strokeWidth={1.5} aria-hidden="true" /><strong>HAKU</strong><small>{dict.location.district}</small></span><span className="map-distance">{dict.location.center}</span></div>
  </div></section>;
}

export function StayInfoSection({ dict }: SectionProps) {
  const details = [
    { icon: CreditCard, title: dict.stay.payment, body: dict.stay.paymentBody },
    { icon: CalendarX, title: dict.stay.cancellation, body: dict.stay.cancellationBody },
    { icon: DoorOpen, title: dict.stay.curfew, body: dict.stay.curfewBody },
    { icon: PawPrint, title: dict.stay.pets, body: dict.stay.petsBody },
  ];
  return <section id="stay-info" className="section stay-info" aria-labelledby="stay-title"><div className="shell">
    <div className="stay-heading"><div><div className="section-kicker">{dict.stay.kicker}</div><h2 id="stay-title">{dict.stay.title}<br /><em>{dict.stay.accent}</em></h2></div><p>{dict.stay.body}</p></div>
    <div className="schedule-grid"><div><CalendarClock {...iconProps} /><span>14:00</span><p>{dict.stay.checkIn}</p></div><div><Clock3 {...iconProps} /><span>11:00</span><p>{dict.stay.checkOut}</p></div></div>
    <div className="policy-grid">{details.map(({ icon: Icon, title, body }) => <details key={title}><summary><span><Icon {...iconProps} />{title}</span><span aria-hidden="true">+</span></summary><p>{body}</p></details>)}</div>
  </div></section>;
}

export function FinalCtaSection({ dict }: SectionProps) {
  return <section className="section final-cta" aria-labelledby="cta-title"><div className="shell cta-grid"><div><div className="section-kicker">{dict.cta.kicker}</div><h2 id="cta-title">{dict.cta.title}<br /><em>{dict.cta.accent}</em></h2></div><div><p>{dict.cta.body}</p><BookingLink className="button button-white">{dict.cta.book}</BookingLink><a className="instagram-link" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />{dict.cta.instagram}<ArrowIcon diagonal /></a></div></div></section>;
}
