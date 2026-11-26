import { homePath, site } from "@/config/site";

export function LanguageEntry() {
  return <main className="section shell">
    <h1>{site.name} Lima</h1>
    <p>Elige tu idioma · <span lang="en">Choose your language</span></p>
    <div className="hero-actions">
      <a className="button button-blue" href={homePath("es")} hrefLang="es">Español</a>
      <a className="button button-outline" href={homePath("en")} hrefLang="en" lang="en">English</a>
    </div>
  </main>;
}
