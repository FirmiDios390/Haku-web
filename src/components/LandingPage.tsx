import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  FinalCtaSection, GallerySection, HeroSection, LocationSection,
  RoomsPreview, ServicesSection, SpacesSection, StayInfoSection, TrustStrip,
} from "@/components/sections/LandingSections";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function LandingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const alternate = locale === "es" ? "/en" : "/es";
  return <><Header locale={locale} dict={dict} languageHref={alternate} />
          <main id="main-content">
            <HeroSection locale={locale} dict={dict} />
            <TrustStrip locale={locale} dict={dict} />
            <SpacesSection locale={locale} dict={dict} />
            <RoomsPreview locale={locale} dict={dict} />
            <ServicesSection locale={locale} dict={dict} />
            <GallerySection locale={locale} dict={dict} />
            <LocationSection locale={locale} dict={dict} />
            <StayInfoSection locale={locale} dict={dict} />
            <FinalCtaSection locale={locale} dict={dict} />
            </main><Footer locale={locale} dict={dict} /></>;
}
