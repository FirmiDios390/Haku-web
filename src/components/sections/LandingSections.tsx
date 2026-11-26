import { StaticPhoto } from "@/components/StaticPhoto";
import Link from "next/link";
import {
  BusFront, CircleDot, Clock3, ClockArrowUp, Coffee, MapPin, MapPinned,
  MessageCircle, Navigation, UsersRound, WashingMachine, Wifi,
} from "lucide-react";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { BookingLink } from "@/components/BookingLink";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { ServicesDialog } from "@/components/ServicesDialog";
import { StayPolicies, StayRates, StaySchedule } from "@/components/StayDetails";
import { getHostelInformation } from "@/config/hostelInfo";
import { roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type SectionProps = { locale: Locale; dict: Dictionary };
const iconProps = { size: 23, strokeWidth: 1.65, "aria-hidden": true } as const;
const serviceIcons = {
  common: UsersRound,
  pingPong: CircleDot,
  laundry: WashingMachine,
  tours: MapPinned,
  transport: BusFront,
  flexibleHours: ClockArrowUp,
} as const;

export function HeroSection({ locale, dict }: SectionProps) {
  const entranceAlt = locale === "es"
    ? "Entrada real de HAKU Hostel Lima con arco azul, ladrillos y plantas"
    : "HAKU Hostel Lima entrance with a blue arch, brickwork and plants";
  return <section id="top" className="hero shell" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span />{dict.hero.eyebrow}</p>
      <h1 id="hero-title"><span className="hero-title-mask"><span>{dict.hero.title}</span></span>{" "}<span className="hero-title-mask"><em>{dict.hero.accent}</em></span></h1>
      <p className="hero-text">{dict.hero.body}</p>
      <div className="hero-actions"><BookingLink className="button button-blue">{dict.hero.cta}</BookingLink><a className="button button-terracotta" href="#gallery">{dict.hero.galleryCta}<ArrowIcon diagonal /></a></div>
    </div>
    <div className="hero-media"><figure className="hero-visual">
      <div className="hero-picture">
        <StaticPhoto src={site.images.entrance} alt={entranceAlt} sizes="(max-width: 899px) calc(100vw - 32px), 58vw" preload />
      </div>
    </figure></div>
  </section>;
}

export function TrustStrip({ locale, dict }: SectionProps) {
  const items = [
    { icon: Coffee, label: dict.trust.breakfast, note: "" },
    { icon: Wifi, label: dict.trust.wifi, note: "" },
    { icon: Clock3, label: dict.trust.reception, note: "" },
    { icon: MapPin, label: dict.trust.award, note: dict.trust.awardNote },
  ];
  return <section className="trust-strip" aria-label={locale === "es" ? "Lo esencial de HAKU" : "HAKU highlights"} style={{ paddingBlockEnd: "clamp(16px, 3vw, 28px)" }}><div className="shell trust-grid">
    {items.map(({ icon: Icon, label, note }) => <div className="trust-item" key={label}><Icon {...iconProps} /><span><strong>{label}</strong>{note && <small>{note}</small>}</span></div>)}
  </div></section>;
}

export function RoomsPreview({ locale, dict }: SectionProps) {
  const rooms = [
    { image: site.images.homeSharedRoom, copy: dict.rooms.shared },
    { image: site.images.homePrivateRoom, copy: dict.rooms.private },
  ];
  return <section id="rooms" className="section rooms" aria-labelledby="rooms-title"><div className="shell rooms-layout">
    <div className="rooms-intro"><div><div className="section-kicker">{dict.rooms.kicker}</div><h2 id="rooms-title">{dict.rooms.title}<br /><em>{dict.rooms.accent}</em></h2><p>{dict.rooms.intro}</p></div><Link className="text-link" href={`${roomsPath(locale)}#rooms-top`}>{dict.rooms.seeAll}<ArrowIcon diagonal /></Link></div>
    <div className="rooms-showcase">{rooms.map((room) => <article className="room-feature" key={room.copy.title}><div className="room-feature-image"><StaticPhoto src={room.image} alt={room.copy.alt} sizes="(max-width: 699px) 100vw, 50vw" className="cover-image" /></div><div className="room-feature-body"><div><h3>{room.copy.title}</h3><p>{room.copy.description}</p></div><BookingLink className="room-book-link">{dict.rooms.book}</BookingLink></div></article>)}</div>
    <p className="source-note">{dict.rooms.verified}</p>
  </div></section>;
}

export function ServicesSection({ locale }: SectionProps) {
  const services = getHostelInformation(locale).services;
  return <section id="services" className="section services" aria-labelledby="services-title"><div className="shell services-layout">
    <div className="services-heading"><div className="section-kicker">{services.kicker}</div><h2 id="services-title">{services.title}<br /><em>{services.accent}</em></h2><p>{services.body}</p><ServicesDialog services={services} /></div>
    <div className="services-list">{services.highlights.map((item) => {
      const Icon = serviceIcons[item.id];
      return <article className="service-highlight" data-reveal="service" key={item.id}><Icon {...iconProps} /><div><h3>{item.label}</h3><p>{item.note}</p></div></article>;
    })}</div>
  </div></section>;
}

export function SpacesSection({ dict }: SectionProps) {
  const spaces = [
    { src: site.images.lobby, label: dict.spaces.lobby },
    { src: site.images.dining, label: dict.spaces.dining },
  ];
  return <section id="experience" className="section spaces" aria-labelledby="spaces-title"><div className="shell spaces-layout">
    <div className="spaces-heading" data-reveal="spaces-copy">
      <div className="section-kicker">{dict.spaces.kicker}</div>
      <h2 id="spaces-title">
        <span className="hero-title-mask"><span>{dict.spaces.title}</span></span>{" "}
        <span className="hero-title-mask"><em>{dict.spaces.accent}</em></span>
      </h2>
      <p>{dict.spaces.body}</p>
      <a className="button button-dark-outline" href="#gallery">{dict.spaces.link}<ArrowIcon diagonal /></a>
    </div>
    <div className="spaces-media">{spaces.map((space, index) => (
      <figure className={`space-photo space-photo-${index + 1}`} data-reveal="space-photo" key={space.src}>
        <div className="space-photo-reveal">
          <StaticPhoto src={space.src} alt={`${space.label} — HAKU Hostel Lima`} sizes={index === 0
            ? "(max-width: 699px) 100vw, (max-width: 1119px) 60vw, 42vw"
            : "(max-width: 699px) 85vw, (max-width: 1119px) 40vw, 27vw"} className="cover-image" />
        </div>
        <figcaption className="sr-only">{space.label}</figcaption>
      </figure>
    ))}</div>
  </div></section>;
}

export function StayInfoSection({ locale, dict }: SectionProps) {
  const stay = getHostelInformation(locale).stay;
  return <section id="stay-info" className="section stay-info" aria-labelledby="stay-title"><div className="shell stay-grid">
    <div className="stay-intro"><div className="section-kicker">{dict.stay.kicker}</div><h2 id="stay-title">{dict.stay.title}<br /><em>{dict.stay.accent}</em></h2><p>{dict.stay.body}</p></div>
    <div className="stay-columns"><div className="stay-primary"><StaySchedule info={stay} labels={dict.stay} /><StayRates info={stay} labels={dict.stay} /><a className="stay-reception-contact" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{dict.stay.contactReception}</a></div><StayPolicies info={stay} labels={dict.stay} /></div>
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
    <div className="editorial-map">
      <iframe src={site.mapEmbedUrl} title={dict.location.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </div>
  </div></section>;
}

export function FinalCtaSection({ dict }: SectionProps) {
  return <section className="final-cta" aria-labelledby="cta-title"><div className="shell cta-panel" data-reveal="cta"><span className="cta-shape" aria-hidden="true" /><div><div className="section-kicker">{dict.cta.kicker}</div><h2 id="cta-title">{dict.cta.title} <em>{dict.cta.accent}</em></h2><p>{dict.cta.body}</p></div><div className="cta-actions"><BookingLink className="button button-white">{dict.cta.book}</BookingLink><a className="instagram-link" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />{dict.cta.instagram}</a></div></div></section>;
}
