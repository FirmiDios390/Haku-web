import type { Locale } from "@/config/site";

export type Dictionary = {
  metadata: { title: string; description: string };
  nav: { rooms: string; experience: string; gallery: string; location: string; info: string; book: string; menu: string; close: string };
  hero: { eyebrow: string; title: string; accent: string; body: string; cta: string; galleryCta: string; scroll: string; caption: string };
  trust: { breakfast: string; reception: string; wifi: string; award: string; awardNote: string };
  experience: { kicker: string; title: string; accent: string; body: string; link: string; note: string };
  rooms: {
    kicker: string; title: string; accent: string; intro: string; seeAll: string; book: string; verified: string;
    shared: { title: string; description: string; alt: string; details: readonly string[] };
    private: { title: string; description: string; alt: string; details: readonly string[] };
    pageTitle: string; pageAccent: string; pageBody: string; back: string;
  };
  spaces: { kicker: string; title: string; accent: string; body: string; lounge: string; exercise: string; social: string; calm: string };
  gallery: { kicker: string; title: string; accent: string; body: string; captions: readonly string[]; alts: readonly string[] };
  location: { kicker: string; title: string; accent: string; body: string; district: string; coast: string; center: string; map: string; open: string };
  stay: {
    kicker: string; title: string; accent: string; body: string; checkIn: string; checkOut: string;
    payment: string; paymentBody: string; cancellation: string; cancellationBody: string;
    curfew: string; curfewBody: string; pets: string; petsBody: string;
  };
  cta: { kicker: string; title: string; accent: string; body: string; book: string; instagram: string };
  footer: { tagline: string; rooms: string; experience: string; location: string; info: string; contact: string; top: string; rights: string };
};

const es: Dictionary = {
  metadata: { title: "HAKU HOSTEL Lima | Miraflores", description: "Habitaciones y espacios reales a una cuadra del Malecón de la Costa Verde." },
  nav: { rooms: "Habitaciones", experience: "Experiencia", gallery: "Galería", location: "Ubicación", info: "Información", book: "Reservar", menu: "Abrir menú", close: "Cerrar menú" },
  hero: { eyebrow: "Un hostel social en Miraflores", title: "Lima se vive", accent: "mejor juntos.", body: "A una cuadra del malecón, un lugar para descansar, conocer viajeros y empezar tu próxima aventura por Perú.", cta: "Reservar estadía", galleryCta: "Galería", scroll: "Descubre HAKU", caption: "HAKU Lima / Miraflores" },
  trust: { breakfast: "Desayuno incluido", reception: "Recepción 24 horas", wifi: "Wi‑Fi de alta velocidad", award: "Hoscar 2025", awardNote: "HAKU Cusco — 1.º nuevo en Hostelworld" },
  experience: { kicker: "01 / La experiencia", title: "Tu pausa entre", accent: "una historia y otra.", body: "HAKU es una base tranquila y social para recorrer Lima a tu ritmo: conversar en la sala, jugar una partida o simplemente descansar antes del siguiente plan.", link: "Explorar los espacios", note: "Cerca del mar. Cerca de todo lo que quieres descubrir." },
  rooms: {
    kicker: "02 / Habitaciones", title: "Descansa como", accent: "prefieras.", intro: "Dormitorios compartidos para conectar y habitaciones privadas para bajar el ritmo. Siempre con fotografías reales y reserva externa segura.", seeAll: "Ver todas las habitaciones", book: "Consultar disponibilidad", verified: "Categorías e instalaciones verificadas; disponibilidad y detalles finales en BananaDesk.",
    shared: { title: "Dormitorios compartidos", description: "Una opción práctica para viajeros que quieren descansar y compartir el camino.", alt: "Dormitorio compartido real de HAKU Hostel Lima", details: ["Camas individuales", "Ambiente compartido", "Wi‑Fi incluido"] },
    private: { title: "Habitaciones privadas", description: "Más privacidad para parejas, amigos o quienes prefieren un espacio propio.", alt: "Habitación privada real de HAKU Hostel Lima", details: ["Espacio privado", "Opciones para dos huéspedes", "Wi‑Fi incluido"] },
    pageTitle: "Encuentra tu", pageAccent: "forma de descansar.", pageBody: "Conoce las categorías disponibles en HAKU Lima. Los tipos exactos, condiciones y disponibilidad se confirman en nuestro motor de reservas.", back: "Volver a la experiencia",
  },
  spaces: { kicker: "03 / Espacios", title: "Más que una", accent: "cama.", body: "Áreas pensadas para encontrarse, moverse y sentirse cómodo sin perder ese pequeño momento de calma.", lounge: "Sala común", exercise: "Espacio de ejercicio", social: "Conoce viajeros de todo el mundo", calm: "Encuentra tu propio ritmo" },
  gallery: { kicker: "04 / Galería", title: "Así se siente", accent: "HAKU.", body: "Fotografías reales, espacios cotidianos y una mirada honesta al hostel.", captions: ["Patio principal", "Arcos y ping-pong", "Dormitorio compartido", "Patio por la noche", "Habitación privada", "Sala común", "Ping-pong", "Terraza cubierta"], alts: ["Patio principal de ladrillo de HAKU Hostel Lima", "Arcos azules y mesa de ping-pong en HAKU Hostel Lima", "Dormitorio compartido con literas en HAKU Hostel Lima", "Patio iluminado de HAKU Hostel Lima por la noche", "Habitación privada real de HAKU Hostel Lima", "Sala común con sofás de HAKU Hostel Lima", "Mesa de ping-pong en el patio de HAKU Hostel Lima", "Terraza cubierta con mesas en HAKU Hostel Lima"] },
  location: { kicker: "05 / Ubicación", title: "Miraflores es tu", accent: "punto de partida.", body: "Estamos a una cuadra del Malecón de la Costa Verde, en un barrio fácil de recorrer y conectado con la ciudad.", district: "Miraflores", coast: "Malecón / Costa Verde", center: "7.9 km del centro", map: "HAKU está aquí", open: "Abrir en Google Maps" },
  stay: { kicker: "06 / Antes de llegar", title: "Todo claro para", accent: "disfrutar la estadía.", body: "La información esencial de HAKU Lima, reunida para que llegues sin dudas.", checkIn: "Check-in desde las 14:00", checkOut: "Check-out hasta las 11:00", payment: "Pagos", paymentBody: "Pago al llegar en efectivo, tarjeta de crédito o débito.", cancellation: "Cancelación", cancellationBody: "Cancela hasta 5 días antes de la llegada. Una cancelación tardía o no presentarse puede generar el cobro total de la estadía.", curfew: "Sin horario de cierre", curfewBody: "Puedes entrar y salir sin toque de queda; la recepción funciona las 24 horas.", pets: "Mascotas", petsBody: "No se permiten mascotas en el alojamiento." },
  cta: { kicker: "07 / Tu próxima parada", title: "Nos vemos", accent: "en Lima.", body: "Elige tus fechas y consulta las opciones vigentes en nuestro motor de reservas.", book: "Reservar estadía", instagram: "Seguir en Instagram" },
  footer: { tagline: "Un lugar para llegar.\nUn lugar para conectar.", rooms: "Habitaciones", experience: "Experiencia", location: "Ubicación", info: "Información", contact: "Instagram", top: "Volver arriba", rights: "Todos los derechos reservados." },
};

const en: Dictionary = {
  metadata: { title: "HAKU HOSTEL Lima | Miraflores", description: "Real rooms and shared spaces one block from Lima's Costa Verde boardwalk." },
  nav: { rooms: "Rooms", experience: "Experience", gallery: "Gallery", location: "Location", info: "Stay info", book: "Book now", menu: "Open menu", close: "Close menu" },
  hero: { eyebrow: "A social hostel in Miraflores", title: "Lima is better", accent: "when shared.", body: "One block from the boardwalk, a place to rest, meet fellow travellers and begin your next adventure through Peru.", cta: "Book your stay", galleryCta: "Gallery", scroll: "Discover HAKU", caption: "HAKU Lima / Miraflores" },
  trust: { breakfast: "Breakfast included", reception: "24-hour reception", wifi: "High-speed Wi‑Fi", award: "2025 Hoscar", awardNote: "HAKU Cusco — No. 1 New to Hostelworld" },
  experience: { kicker: "01 / The experience", title: "Your pause between", accent: "one story and the next.", body: "HAKU is a calm, social base for discovering Lima at your own pace: chat in the lounge, play a game or simply rest before the next plan.", link: "Explore our spaces", note: "Close to the ocean. Close to everything you want to discover." },
  rooms: {
    kicker: "02 / Rooms", title: "Rest your", accent: "own way.", intro: "Shared dorms to connect and private rooms to slow down. Always shown through real photography, with secure external booking.", seeAll: "See all rooms", book: "Check availability", verified: "Categories and facilities are verified; final availability and details are shown in BananaDesk.",
    shared: { title: "Shared dorms", description: "A practical choice for travellers who want to rest and share the journey.", alt: "Real shared dorm at HAKU Hostel Lima", details: ["Single beds", "Shared atmosphere", "Wi‑Fi included"] },
    private: { title: "Private rooms", description: "More privacy for couples, friends or anyone who prefers a space of their own.", alt: "Real private room at HAKU Hostel Lima", details: ["Private space", "Options for two guests", "Wi‑Fi included"] },
    pageTitle: "Find your", pageAccent: "way to rest.", pageBody: "Explore the categories available at HAKU Lima. Exact room types, conditions and availability are confirmed in our booking engine.", back: "Back to the experience",
  },
  spaces: { kicker: "03 / Spaces", title: "More than a", accent: "bed.", body: "Spaces designed to meet, move and feel at home without losing that quiet moment to yourself.", lounge: "Common lounge", exercise: "Exercise space", social: "Meet travellers from around the world", calm: "Find your own pace" },
  gallery: { kicker: "04 / Gallery", title: "This is what", accent: "HAKU feels like.", body: "Real photographs, everyday spaces and an honest look at the hostel.", captions: ["Main courtyard", "Arches and ping-pong", "Shared dorm", "Courtyard at night", "Private room", "Common lounge", "Ping-pong", "Covered terrace"], alts: ["Brick main courtyard at HAKU Hostel Lima", "Blue arches and ping-pong table at HAKU Hostel Lima", "Shared bunk dorm at HAKU Hostel Lima", "Lit courtyard at HAKU Hostel Lima at night", "Real private room at HAKU Hostel Lima", "Common lounge with sofas at HAKU Hostel Lima", "Ping-pong table in the courtyard at HAKU Hostel Lima", "Covered terrace with tables at HAKU Hostel Lima"] },
  location: { kicker: "05 / Location", title: "Miraflores is your", accent: "starting point.", body: "We are one block from the Costa Verde boardwalk, in a walkable neighbourhood connected to the rest of the city.", district: "Miraflores", coast: "Boardwalk / Costa Verde", center: "7.9 km from the city centre", map: "HAKU is here", open: "Open in Google Maps" },
  stay: { kicker: "06 / Before you arrive", title: "Everything you need for", accent: "an easy stay.", body: "Essential information about HAKU Lima, gathered so you can arrive with no surprises.", checkIn: "Check-in from 2:00 pm", checkOut: "Check-out by 11:00 am", payment: "Payments", paymentBody: "Pay on arrival by cash, credit card or debit card.", cancellation: "Cancellation", cancellationBody: "Cancel up to 5 days before arrival. Late cancellation or no-show may result in the full stay being charged.", curfew: "No curfew", curfewBody: "Come and go freely; reception is open 24 hours a day.", pets: "Pets", petsBody: "Pets are not allowed at the property." },
  cta: { kicker: "07 / Your next stop", title: "See you", accent: "in Lima.", body: "Choose your dates and check current options in our booking engine.", book: "Book your stay", instagram: "Follow on Instagram" },
  footer: { tagline: "A place to arrive.\nA place to connect.", rooms: "Rooms", experience: "Experience", location: "Location", info: "Stay info", contact: "Instagram", top: "Back to top", rights: "All rights reserved." },
};

const dictionaries = { es, en } satisfies Record<Locale, Dictionary>;
export const getDictionary = (locale: Locale) => dictionaries[locale];
