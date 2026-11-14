import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowIcon, InstagramIcon } from "@/components/Icons";
import { destinations, site } from "@/config/site";

const lima = destinations.lima;

function BookingLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={lima.bookingUrl} target="_blank" rel="noopener noreferrer">{children}<ArrowIcon diagonal /></a>;
}

export default function LimaPage() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-topline"><span>HAKU HOSTEL / LIMA</span><span>Un espacio para estar, explorar y volver.</span><span>01 / 08</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> Bienvenido a HAKU Lima</div>
              <h1 id="hero-title">Llegar.<br /><span>Sentir.</span><br />Quedarse.</h1>
              <p>Un hostel para bajar el ritmo, encontrar tu espacio y disfrutar cada parte del camino.</p>
              <BookingLink className="button button-blue hero-cta">Reserva tu estancia</BookingLink>
              <div className="hero-side-note"><span className="asterisk">✳</span><span>Tu viaje también<br />necesita una pausa.</span></div>
            </div>
            <figure className="hero-image-wrap">
              <Image src={lima.images.entrance} alt="Entrada real de HAKU HOSTEL, con arco azul y plantas" fill priority sizes="(max-width: 800px) 100vw, 55vw" className="cover-image hero-image" />
              <figcaption><span>01 — La bienvenida</span><span>HAKU / HOSTEL</span></figcaption>
            </figure>
          </div>
          <div className="hero-bottomline"><span>Un lugar para hacer una pausa.</span><a href="#presentacion">Descubre HAKU <span aria-hidden="true">↓</span></a></div>
        </section>

        <section id="presentacion" className="intro section-pad" aria-labelledby="intro-title">
          <div className="shell intro-grid">
            <div className="section-kicker"><span>01</span> / EL ESPÍRITU HAKU</div>
            <div className="intro-main"><h2 id="intro-title">Hay lugares que se convierten en <em>parte del viaje.</em></h2><p>En HAKU creemos en los pequeños momentos: llegar, acomodarse, conversar o simplemente encontrar un rincón propio. Un espacio sencillo y cercano para vivir tu estancia a tu manera.</p><a className="text-link" href="#experiencia">Conoce nuestros espacios <ArrowIcon diagonal /></a></div>
            <div className="intro-mark" aria-hidden="true">H.</div>
          </div>
        </section>

        <section id="habitaciones" className="rooms section-pad" aria-labelledby="rooms-title">
          <div className="shell">
            <div className="section-heading rooms-heading"><div><div className="section-kicker"><span>02</span> / DESCANSO</div><h2 id="rooms-title">Espacios para<br /><em>hacer una pausa.</em></h2></div><p>Conoce algunas de nuestras habitaciones a través de fotografías reales. Para detalles y disponibilidad, visita el motor de reservas.</p></div>
            <div className="rooms-grid">
              {lima.rooms.map((room) => <article className="room" key={room.number}><div className="room-image"><Image src={room.image} alt={room.alt} fill sizes="(max-width: 700px) 100vw, 48vw" className="cover-image" /></div><div className="room-details"><span>{room.number} / HABITACIONES</span><div><h3>{room.title}</h3><p>{room.description}</p><BookingLink className="round-arrow" ><span className="sr-only">Consultar disponibilidad de {room.title}</span></BookingLink></div></div></article>)}
            </div>
            <p className="rooms-footnote">Las imágenes muestran habitaciones reales. Consulta las opciones vigentes al reservar.</p>
          </div>
        </section>

        <section id="experiencia" className="experience section-pad" aria-labelledby="experience-title">
          <div className="shell experience-grid">
            <div className="experience-heading"><div className="section-kicker"><span>03</span> / EXPERIENCIA</div><h2 id="experience-title">Más que<br />una <em>habitación.</em></h2><p>Un lugar para compartir, moverse y encontrar un momento de tranquilidad entre planes.</p><BookingLink className="text-link">Planea tu estancia</BookingLink></div>
            <div className="experience-photo experience-photo-main"><Image src={lima.spaces[0].image} alt={lima.spaces[0].alt} fill sizes="(max-width: 800px) 100vw, 42vw" className="cover-image" /><span>01 / {lima.spaces[0].label}</span></div>
            <div className="experience-photo experience-photo-small"><Image src={lima.spaces[1].image} alt={lima.spaces[1].alt} fill sizes="(max-width: 800px) 70vw, 20vw" className="cover-image" /><span>02 / {lima.spaces[1].label}</span></div>
            <p className="experience-quote">Cada viaje tiene su ritmo.<br /><em>Encuentra el tuyo aquí.</em></p>
          </div>
        </section>

        <section id="galeria" className="gallery section-pad" aria-labelledby="gallery-title">
          <div className="shell"><div className="gallery-heading"><div className="section-kicker"><span>04</span> / GALERÍA</div><h2 id="gallery-title">Un vistazo<br /><em>a HAKU.</em></h2><p>Espacios reales, instantes cotidianos.</p></div>
            <div className="gallery-grid">
              <figure className="gallery-item gallery-a"><Image src={lima.images.room204View} alt="Vista desde la puerta de la habitación 204" fill sizes="(max-width: 700px) 100vw, 35vw" className="cover-image" /><figcaption>01 / HABITACIÓN 204</figcaption></figure>
              <figure className="gallery-item gallery-b"><Image src={lima.images.entrance} alt="Detalle de la entrada azul del hostel" fill sizes="(max-width: 700px) 100vw, 40vw" className="cover-image" /><figcaption>02 / ENTRADA</figcaption></figure>
              <figure className="gallery-item gallery-c"><Image src={lima.images.room204} alt="Interior de la habitación 204" fill sizes="(max-width: 700px) 100vw, 26vw" className="cover-image" /><figcaption>03 / INTERIOR</figcaption></figure>
            </div>
          </div>
        </section>

        <section id="ubicacion" className="location section-pad" aria-labelledby="location-title">
          <div className="shell location-grid"><div><div className="section-kicker"><span>05</span> / UBICACIÓN</div><h2 id="location-title">El punto de partida de <em>tu próxima historia.</em></h2></div><div className="location-info"><span className="line-art" aria-hidden="true">↗</span><p>La dirección exacta y el mapa estarán disponibles cuando recibamos los datos oficiales del hostel.</p><BookingLink className="text-link">Consultar tu estancia</BookingLink></div></div>
        </section>

        <section id="opiniones" className="voices section-pad" aria-labelledby="voices-title"><div className="shell voices-grid"><div className="section-kicker"><span>06</span> / VOCES DEL VIAJE</div><div><h2 id="voices-title">Las mejores historias las cuentan <em>quienes estuvieron aquí.</em></h2><p>Pronto compartiremos experiencias reales de nuestros huéspedes.</p></div><span aria-hidden="true" className="voices-star">✳</span></div></section>

        <section id="contacto" className="contact section-pad" aria-labelledby="contact-title"><div className="shell contact-grid"><div><div className="section-kicker"><span>07</span> / SIGAMOS EN CONTACTO</div><h2 id="contact-title">Nos vemos<br /><em>en HAKU.</em></h2></div><div className="contact-right"><p>¿Pensando en tu próxima estancia? Reserva o sigue lo que ocurre en HAKU.</p><BookingLink className="button button-white">Reservar estancia</BookingLink><a className="contact-instagram" href={site.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon /> Instagram <ArrowIcon diagonal /></a><p className="contact-note">Los datos oficiales de WhatsApp, correo y dirección se incorporarán aquí cuando estén disponibles.</p></div></div></section>
      </main>
      <Footer />
    </>
  );
}
