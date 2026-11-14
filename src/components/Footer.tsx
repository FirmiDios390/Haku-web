import Image from "next/image";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { navigation, site } from "@/config/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={site.logo} alt="Logo de HAKU HOSTEL" width={84} height={90} /><p>Un lugar para llegar.<br />Un lugar para quedarse.</p></div><nav aria-label="Navegación del pie de página">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-links"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon /> Instagram <ArrowIcon diagonal /></a><a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <ArrowIcon diagonal /></a><a href="/lima#contacto">Contacto <ArrowIcon diagonal /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} HAKU HOSTEL</span><span>Hecho para seguir viajando.</span><a href="#inicio">Volver arriba ↑</a></div></footer>;
}
