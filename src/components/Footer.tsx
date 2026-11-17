import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { homePath, roomsPath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = homePath(locale);
  return <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={site.logo} alt="HAKU HOSTEL" width={76} height={82} /><p>{dict.footer.tagline.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p></div><nav aria-label="Footer"><Link href={roomsPath(locale)}>{dict.footer.rooms}</Link><Link href={`${home}#experience`}>{dict.footer.experience}</Link><Link href={`${home}#location`}>{dict.footer.location}</Link><Link href={`${home}#stay-info`}>{dict.footer.info}</Link></nav><div className="footer-links"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {dict.footer.contact} <ArrowIcon diagonal /></a><a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">{dict.nav.book} <ArrowIcon diagonal /></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} HAKU HOSTEL. {dict.footer.rights}</span><span>Miraflores / Lima / Perú</span><a href="#top">{dict.footer.top} ↑</a></div></footer>;
}
