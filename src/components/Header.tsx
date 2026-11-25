"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { homePath, roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { BookingLink } from "@/components/BookingLink";
import { ArrowIcon, InstagramIcon } from "./Icons";

export function Header({ locale, dict, languageHref }: { locale: Locale; dict: Dictionary; languageHref: string }) {
  const [open, setOpen] = useState(false);
  const home = homePath(locale);
  const rooms = `${roomsPath(locale)}#rooms-top`;
  const navigation = [
    { label: dict.nav.home, href: `${home}#top` },
    { label: dict.nav.experience, href: `${home}#experience` },
    { label: dict.nav.rooms, href: rooms },
    { label: dict.nav.gallery, href: `${home}#gallery` },
    { label: dict.nav.location, href: `${home}#location` },
    { label: dict.nav.info, href: `${home}#stay-info` },
  ];
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  const switchLanguage = () => {
    document.cookie = `haku_locale=${locale === "es" ? "en" : "es"};path=/;max-age=31536000;samesite=lax`;
    setOpen(false);
  };
  const followNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href === rooms && window.location.pathname === roomsPath(locale)) {
      event.preventDefault();
      document.getElementById("rooms-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", rooms);
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href={home} aria-label="HAKU HOSTEL" onClick={() => setOpen(false)}>
          <Image src={site.logo} alt="" width={88} height={67} priority unoptimized />
        </Link>
        <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={(event) => followNavigation(event, item.href)}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="language-switch" href={languageHref} hrefLang={locale === "es" ? "en" : "es"} onClick={switchLanguage}>{locale === "es" ? "EN" : "ES"}</a>
          <BookingLink className="button button-blue header-book">{dict.nav.book}</BookingLink>
          <button type="button" className={`menu-toggle ${open ? "is-open" : ""}`} aria-label={open ? dict.nav.close : dict.nav.menu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"} inert={!open}>
        {navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={(event) => followNavigation(event, item.href)}><span>0{index + 1}</span>{item.label}<ArrowIcon diagonal /></Link>)}
        <div className="mobile-menu-bottom">
          <a href={languageHref} onClick={switchLanguage}>{locale === "es" ? "English" : "Español"}</a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><InstagramIcon /> Instagram</a>
          <BookingLink onOpen={() => setOpen(false)}>{dict.nav.book}</BookingLink>
        </div>
      </nav>
    </header>
  );
}
