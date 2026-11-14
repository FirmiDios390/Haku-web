import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MediaCarousel } from "@/components/MediaCarousel";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { homeMediaSlides } from "@/config/media";
import { destinations, site } from "@/config/site";

export default function HomePage() {
  return <><Header /><main>
    <section id="inicio" className="home-hero shell" aria-labelledby="home-title">
      <div className="hero-topline"><span>HAKU HOSTEL</span><span>Un lugar para empezar otra historia.</span><span>LIMA / CUSCO</span></div>
      <div className="home-hero-grid"><div className="home-hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> BIENVENIDO A HAKU</div><h1 id="home-title">Tu viaje<br /><span>comienza</span><br />aquí.</h1><p>Espacios para hacer una pausa, vivir la ciudad y seguir tu camino a tu propio ritmo. Empezamos en Lima.</p><a href="/lima" className="button button-blue">Conoce HAKU Lima <ArrowIcon diagonal /></a></div><figure className="home-hero-photo"><Image src={destinations.lima.images.entrance} alt="Entrada real de HAKU HOSTEL Lima con arco azul y plantas" fill priority sizes="(max-width: 700px) 100vw, 55vw" className="cover-image" /><figcaption>HAKU / LIMA — 01</figcaption></figure></div>
      <div className="hero-bottomline"><span>Un destino hoy. Más historias mañana.</span><a href="#destinos">Explora los destinos <span aria-hidden="true">↓</span></a></div>
    </section>

    <section id="destinos" className="destinations section-pad" aria-labelledby="destinations-title"><div className="shell"><div className="destinations-heading"><div><div className="section-kicker"><span>01</span> / NUESTROS DESTINOS</div><h2 id="destinations-title">Elige tu próximo<br /><em>capítulo.</em></h2></div><p>Cada sede tendrá su propio espacio, sus propias imágenes y su propia historia. La primera parada es Lima.</p></div><div className="destination-grid"><article className="destination-card destination-lima"><div className="destination-image"><Image src={destinations.lima.images.lounge} alt="Sala común real de HAKU Lima" fill sizes="(max-width: 700px) 100vw, 55vw" className="cover-image" /></div><div className="destination-body"><span>01 / DESTINO DISPONIBLE</span><div><h3>{destinations.lima.name}</h3><a href="/lima" aria-label="Descubrir HAKU Lima"><ArrowIcon diagonal /></a></div><p>{destinations.lima.tagline}</p></div></article><article className="destination-card destination-cusco"><div className="destination-future-art" aria-hidden="true"><span>H.</span></div><div className="destination-body"><span>02 / PRÓXIMAMENTE</span><div><h3>{destinations.cusco.name}</h3><span className="destination-soon">En preparación</span></div><p>{destinations.cusco.tagline}</p></div></article></div></div></section>

    <section id="momentos" className="moments section-pad" aria-labelledby="moments-title"><div className="shell"><div className="moments-heading"><div className="section-kicker"><span>02</span> / MOMENTOS HAKU</div><h2 id="moments-title">La historia se vive<br /><em>en imágenes.</em></h2><p>Pronto, una selección de momentos del hostel y de quienes lo hacen suyo.</p></div><MediaCarousel slides={homeMediaSlides} /></div></section>

    <section className="home-story section-pad" aria-labelledby="story-title"><div className="shell home-story-grid"><div className="section-kicker"><span>03</span> / EL ESPÍRITU HAKU</div><div><h2 id="story-title">Entre un destino y otro, <em>encuentra tu lugar.</em></h2><p>Hay viajes que se recuerdan por lo que ocurre entre planes. Un rato en la sala, una conversación o el simple gusto de llegar. Así empieza la experiencia HAKU.</p><a href="/lima#experiencia" className="text-link">Descubre los espacios de Lima <ArrowIcon diagonal /></a></div><div className="home-story-photo"><Image src={destinations.lima.images.room204View} alt="Vista real de una habitación en HAKU Lima" fill sizes="(max-width: 700px) 100vw, 26vw" className="cover-image" /></div></div></section>

    <section className="home-cta section-pad" aria-labelledby="home-cta-title"><div className="shell home-cta-grid"><div><div className="section-kicker"><span>04</span> / SIGAMOS EL VIAJE</div><h2 id="home-cta-title">Nos vemos<br /><em>en Lima.</em></h2></div><div><p>Conoce las habitaciones, explora los espacios o da el siguiente paso hacia tu estancia.</p><a href="/lima" className="button button-white">Explorar HAKU Lima <ArrowIcon diagonal /></a><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="home-instagram"><InstagramIcon /> Síguenos en Instagram <ArrowIcon diagonal /></a></div></div></section>
  </main><Footer /></>;
}
