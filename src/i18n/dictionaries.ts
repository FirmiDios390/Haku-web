import type { Locale } from "@/config/site";

export type Dictionary = {
  metadata: { title: string; description: string };
  nav: { home: string; rooms: string; experience: string; gallery: string; location: string; info: string; book: string; menu: string; close: string };
  hero: { eyebrow: string; title: string; accent: string; body: string; cta: string; galleryCta: string; scroll: string };
  trust: { breakfast: string; reception: string; wifi: string; award: string; awardNote: string };
  experience: { kicker: string; title: string; accent: string; body: string; link: string; note: string };
  rooms: {
    kicker: string; title: string; accent: string; intro: string; seeAll: string; book: string; verified: string;
    shared: { title: string; description: string; alt: string; details: readonly string[] };
    private: { title: string; description: string; alt: string; details: readonly string[] };
    pageTitle: string; pageAccent: string; pageBody: string; back: string;
  };
  spaces: { kicker: string; title: string; accent: string; body: string; link: string; lobby: string; dining: string; patio: string };
  gallery: {
    kicker: string; title: string; accent: string; body: string; open: string; close: string; previous: string; next: string; imageOf: string;
    captions: readonly string[]; alts: readonly string[];
  };
  location: { kicker: string; title: string; accent: string; body: string; district: string; coast: string; center: string; map: string; open: string };
  stay: {
    kicker: string; title: string; accent: string; body: string;
    scheduleLabel: string; ratesLabel: string; rulesLabel: string; contactReception: string;
  };
  bookingModal: {
    title: string; subtitle: string; close: string; helper: string; viewAll: string;
    checkDates: string; chooseDatesTitle: string; chooseDatesSubtitle: string;
    backToConditions: string; widgetTitle: string; widgetLoading: string; redirectNotice: string;
  };
  cta: { kicker: string; title: string; accent: string; body: string; book: string; instagram: string };
  footer: { tagline: string; rooms: string; experience: string; location: string; info: string; contact: string; top: string; rights: string };
};

const es: Dictionary = {
  metadata: { title: "HAKU HOSTEL Lima | Miraflores", description: "Habitaciones y espacios reales a una cuadra del Malecón de la Costa Verde." },
  nav: { home: "Inicio", rooms: "Habitaciones", experience: "Conoce HAKU", gallery: "Galería", location: "Ubicación", info: "Antes de reservar", book: "Reservar", menu: "Abrir menú", close: "Cerrar menú" },
  hero: { eyebrow: "Un hostel social en Miraflores", title: "Lima se vive", accent: "mejor juntos.", body: "A una cuadra del malecón, un lugar para descansar, conocer viajeros y empezar tu próxima aventura por Perú.", cta: "Reservar estadía", galleryCta: "Galería", scroll: "Descubre HAKU" },
  trust: { breakfast: "Desayuno incluido", reception: "Recepción 24 horas", wifi: "Wi‑Fi gratis", award: "A una cuadra del malecón", awardNote: "Miraflores, Lima" },
  experience: { kicker: "01 / La experiencia", title: "Tu pausa entre", accent: "una historia y otra.", body: "HAKU es una base tranquila y social para recorrer Lima a tu ritmo: conversar en la sala, jugar una partida o simplemente descansar antes del siguiente plan.", link: "Explorar los espacios", note: "Cerca del mar. Cerca de todo lo que quieres descubrir." },
  rooms: {
    kicker: "02 / Habitaciones", title: "Descansa como", accent: "prefieras.", intro: "Dormitorios compartidos para conectar y habitaciones privadas para bajar el ritmo. Siempre con fotografías reales y reserva externa segura.", seeAll: "Ver todas las habitaciones", book: "Consultar disponibilidad", verified: "Categorías e instalaciones verificadas; disponibilidad y detalles finales en nuestro motor de reservas.",
    shared: { title: "Dormitorios compartidos", description: "Una opción práctica para viajeros que quieren descansar y compartir el camino.", alt: "Dormitorio compartido real de HAKU Hostel Lima", details: ["Camas individuales", "Ambiente compartido", "Wi‑Fi incluido"] },
    private: { title: "Habitaciones privadas", description: "Más privacidad para parejas, amigos o quienes prefieren un espacio propio.", alt: "Habitación privada real de HAKU Hostel Lima", details: ["Espacio privado", "Opciones para dos huéspedes", "Wi‑Fi incluido"] },
    pageTitle: "Encuentra tu", pageAccent: "forma de descansar.", pageBody: "Conoce las categorías disponibles en HAKU Lima. Los tipos exactos, condiciones y disponibilidad se confirman en nuestro motor de reservas.", back: "Volver a la experiencia",
  },
  spaces: { kicker: "04 / Conoce HAKU", title: "Más que un", accent: "hostel.", body: "Un espacio social y tranquilo para conocer viajeros, compartir una partida y descansar antes de seguir recorriendo Perú.", link: "Nuestra experiencia", lobby: "Sala común", dining: "Arte y detalles HAKU", patio: "Patio y ping-pong" },
  gallery: { kicker: "05 / Galería", title: "Así se siente", accent: "HAKU.", body: "Conoce nuestros espacios con fotos reales antes de tu llegada.", open: "Ver todas las fotos", close: "Cerrar galería", previous: "Foto anterior", next: "Foto siguiente", imageOf: "Foto {current} de {total}", captions: ["Patio de ladrillo", "Ping-pong en el patio", "Zona de ejercicios", "Murales de HAKU", "Entrada de HAKU", "Sala común", "Patio social", "Arte HAKU"], alts: ["Patio de HAKU Hostel Lima con mesas, plantas y arcos de ladrillo", "Mesa de ping-pong en el patio de HAKU Hostel Lima", "Zona de ejercicios al aire libre de HAKU Hostel Lima", "Escaleras azules y murales de HAKU Hostel Lima", "Entrada real de HAKU Hostel Lima con arco azul, ladrillos y plantas", "Sala común de HAKU Hostel Lima con mesas y decoración peruana", "Patio social de HAKU Hostel Lima con ping-pong y áreas para sentarse", "Pintura y rincón de lectura de HAKU Hostel Lima"] },
  location: { kicker: "06 / Ubicación", title: "Miraflores es tu", accent: "punto de partida.", body: "Estamos a una cuadra del Malecón de la Costa Verde, en un barrio fácil de recorrer y conectado con la ciudad.", district: "Miraflores", coast: "Malecón / Costa Verde", center: "7.9 km del centro", map: "HAKU está aquí", open: "Abrir en Google Maps" },
  stay: { kicker: "07 / Antes de reservar", title: "Todo claro", accent: "antes de llegar.", body: "Horarios, pagos y reglas importantes presentados de forma directa para que organices tu estadía sin sorpresas.", scheduleLabel: "Horarios", ratesLabel: "Tarifas y pagos", rulesLabel: "Políticas del hostel", contactReception: "¿Tienes alguna duda? Escríbenos a recepción" },
  bookingModal: {
    title: "Antes de reservar",
    subtitle: "Conoce los detalles importantes de tu estancia en HAKU",
    close: "Cerrar información de reserva",
    helper: "A continuación podrás consultar disponibilidad y elegir tu alojamiento",
    viewAll: "Ver todas las condiciones",
    checkDates: "Comenzar mi reserva",
    chooseDatesTitle: "Completa tu reserva",
    chooseDatesSubtitle: "Elige tus fechas, habitación y forma de pago sin salir de HAKU.",
    backToConditions: "Volver a las condiciones",
    widgetTitle: "Motor de reservas de HAKU HOSTEL",
    widgetLoading: "Cargando el motor de reservas…",
    redirectNotice: "Tu selección y el pago se procesan de forma segura dentro de esta ventana.",
  },
  cta: { kicker: "Tu próxima parada", title: "¿Listo para", accent: "vivir Lima?", body: "Reserva tu estancia en HAKU y empieza tu próxima aventura desde Miraflores.", book: "Reservar ahora", instagram: "Seguir en Instagram" },
  footer: { tagline: "Un lugar para llegar.\nUn lugar para conectar.", rooms: "Habitaciones", experience: "Conoce HAKU", location: "Ubicación", info: "Antes de reservar", contact: "Instagram", top: "Volver arriba", rights: "Todos los derechos reservados." },
};

const en: Dictionary = {
  metadata: { title: "HAKU HOSTEL Lima | Miraflores", description: "Real rooms and shared spaces one block from Lima's Costa Verde boardwalk." },
  nav: { home: "Home", rooms: "Rooms", experience: "Discover HAKU", gallery: "Gallery", location: "Location", info: "Before booking", book: "Book now", menu: "Open menu", close: "Close menu" },
  hero: { eyebrow: "A social hostel in Miraflores", title: "Lima is better", accent: "when shared.", body: "One block from the boardwalk, a place to rest, meet fellow travellers and begin your next adventure through Peru.", cta: "Book your stay", galleryCta: "Gallery", scroll: "Discover HAKU" },
  trust: { breakfast: "Breakfast included", reception: "24-hour reception", wifi: "Free Wi‑Fi", award: "One block from the boardwalk", awardNote: "Miraflores, Lima" },
  experience: { kicker: "01 / The experience", title: "Your pause between", accent: "one story and the next.", body: "HAKU is a calm, social base for discovering Lima at your own pace: chat in the lounge, play a game or simply rest before the next plan.", link: "Explore our spaces", note: "Close to the ocean. Close to everything you want to discover." },
  rooms: {
    kicker: "02 / Rooms", title: "Rest your", accent: "own way.", intro: "Shared dorms to connect and private rooms to slow down. Always shown through real photography, with secure external booking.", seeAll: "See all rooms", book: "Check availability", verified: "Categories and facilities are verified; final availability and details are shown in our booking engine.",
    shared: { title: "Shared dorms", description: "A practical choice for travellers who want to rest and share the journey.", alt: "Real shared dorm at HAKU Hostel Lima", details: ["Single beds", "Shared atmosphere", "Wi‑Fi included"] },
    private: { title: "Private rooms", description: "More privacy for couples, friends or anyone who prefers a space of their own.", alt: "Real private room at HAKU Hostel Lima", details: ["Private space", "Options for two guests", "Wi‑Fi included"] },
    pageTitle: "Find your", pageAccent: "way to rest.", pageBody: "Explore the categories available at HAKU Lima. Exact room types, conditions and availability are confirmed in our booking engine.", back: "Back to the experience",
  },
  spaces: { kicker: "04 / Discover HAKU", title: "More than a", accent: "hostel.", body: "A calm, social space to meet travellers, share a game and rest before continuing your journey through Peru.", link: "Our experience", lobby: "Common lounge", dining: "HAKU art and details", patio: "Courtyard and ping-pong" },
  gallery: { kicker: "05 / Gallery", title: "This is what", accent: "HAKU feels like.", body: "Get to know our spaces with real photos before you arrive.", open: "View all photos", close: "Close gallery", previous: "Previous photo", next: "Next photo", imageOf: "Photo {current} of {total}", captions: ["Brick courtyard", "Courtyard ping-pong", "Exercise area", "HAKU murals", "HAKU entrance", "Common lounge", "Social courtyard", "HAKU art"], alts: ["HAKU Hostel Lima courtyard with tables, plants and brick arches", "Ping-pong table in the courtyard at HAKU Hostel Lima", "Outdoor exercise area at HAKU Hostel Lima", "Blue stairs and murals at HAKU Hostel Lima", "Real entrance of HAKU Hostel Lima with blue arch, brickwork and plants", "HAKU Hostel Lima common lounge with tables and Peruvian decoration", "HAKU Hostel Lima social courtyard with ping-pong and seating areas", "Painting and reading corner at HAKU Hostel Lima"] },
  location: { kicker: "06 / Location", title: "Miraflores is your", accent: "starting point.", body: "We are one block from the Costa Verde boardwalk, in a walkable neighbourhood connected to the rest of the city.", district: "Miraflores", coast: "Boardwalk / Costa Verde", center: "7.9 km from the city centre", map: "HAKU is here", open: "Open in Google Maps" },
  stay: { kicker: "07 / Before booking", title: "Everything clear", accent: "before you arrive.", body: "Times, payments and important hostel rules presented clearly so you can plan your stay with no surprises.", scheduleLabel: "Times", ratesLabel: "Rates and payments", rulesLabel: "Hostel policies", contactReception: "Any questions? Message reception" },
  bookingModal: {
    title: "Before booking",
    subtitle: "Review the important details of your stay at HAKU",
    close: "Close booking information",
    helper: "Next, you can check availability and choose your accommodation",
    viewAll: "View all conditions",
    checkDates: "Start my booking",
    chooseDatesTitle: "Complete your booking",
    chooseDatesSubtitle: "Choose your dates, room and payment method without leaving HAKU.",
    backToConditions: "Back to the conditions",
    widgetTitle: "HAKU HOSTEL booking engine",
    widgetLoading: "Loading the booking engine…",
    redirectNotice: "Your selection and payment are processed securely within this window.",
  },
  cta: { kicker: "Your next stop", title: "Ready to", accent: "experience Lima?", body: "Book your stay at HAKU and start your next adventure from Miraflores.", book: "Book now", instagram: "Follow on Instagram" },
  footer: { tagline: "A place to arrive.\nA place to connect.", rooms: "Rooms", experience: "Discover HAKU", location: "Location", info: "Before booking", contact: "Instagram", top: "Back to top", rights: "All rights reserved." },
};

const dictionaries = { es, en } satisfies Record<Locale, Dictionary>;
export const getDictionary = (locale: Locale) => dictionaries[locale];
