"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation, site } from "@/config/site";
import { ArrowIcon, InstagramIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="brand" href="/" aria-label="HAKU HOSTEL, ir al inicio" onClick={() => setOpen(false)}>
          <Image src={site.logo} alt="" width={55} height={59} priority />
          <span className="brand-name">HAKU<span>HOSTEL</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="icon-link header-instagram" href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram oficial de HAKU HOSTEL"><InstagramIcon /></a>
          <a className="button button-blue header-book" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <ArrowIcon diagonal /></a>
          <button type="button" className={`menu-toggle ${open ? "is-open" : ""}`} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Navegación móvil" inert={!open}>
        {navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowIcon diagonal /></a>)}
        <div className="mobile-menu-bottom">
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><InstagramIcon /> Instagram</a>
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Reservar estancia <ArrowIcon diagonal /></a>
        </div>
      </nav>
    </header>
  );
}
