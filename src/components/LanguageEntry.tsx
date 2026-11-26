"use client";

import { useEffect } from "react";
import { homePath, site } from "@/config/site";

export function LanguageEntry() {
  useEffect(() => {
    const localeCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("haku_locale="))
      ?.slice("haku_locale=".length);
    const browserLanguage = navigator.languages?.[0] ?? navigator.language;
    const locale = localeCookie === "es" || localeCookie === "en"
      ? localeCookie
      : /^en(?:-[a-z0-9]+)*(?:\s*;|$)/i.test(browserLanguage)
        ? "en"
        : "es";

    window.location.replace(`/${locale}${window.location.search}${window.location.hash}`);
  }, []);

  return <main className="section shell">
    <h1>{site.name} Lima</h1>
    <p>Elige tu idioma · <span lang="en">Choose your language</span></p>
    <div className="hero-actions">
      <a className="button button-blue" href={homePath("es")} hrefLang="es">Español</a>
      <a className="button button-outline" href={homePath("en")} hrefLang="en" lang="en">English</a>
    </div>
  </main>;
}
