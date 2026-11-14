export const site = {
  name: "HAKU HOSTEL",
  description: "Un espacio para llegar, hacer una pausa y sentirte parte del viaje.",
  logo: "/logo.png",
  // BananaDesk: enlace temporal de prueba. Sustituirlo por el oficial.
  bookingUrl: "https://www.google.com",
  instagramUrl: "https://www.instagram.com/haku.hostel/",
  address: "",
  phone: "",
  email: "",
  images: {
    entrance: "/images/Entrada.jpeg",
    lounge: "/images/Sala.jpeg",
    exercise: "/images/Gimnasio.jpeg",
    sharedRoom: "/images/Dormitorios/Dormitorio.jpeg",
    doubleRoom: "/images/Dormitorios/Dormitorios.jpeg",
    room204: "/images/Dormitorios/Dormitorio-204.jpeg",
    room204View: "/images/Dormitorios/Dormitorio-204(2).jpeg",
  },
  rooms: [
    {
      number: "01",
      title: "Un espacio para compartir",
      description: "Una mirada a una de nuestras habitaciones con camas individuales.",
      image: "/images/Dormitorios/Dormitorio.jpeg",
      alt: "Habitación real de HAKU HOSTEL con camas individuales",
    },
    {
      number: "02",
      title: "Tu propio momento de pausa",
      description: "Una de nuestras habitaciones con cama doble, fotografiada tal como es.",
      image: "/images/Dormitorios/Dormitorios.jpeg",
      alt: "Habitación real de HAKU HOSTEL con cama doble",
    },
  ],
  spaces: [
    {
      label: "Sala común",
      image: "/images/Sala.jpeg",
      alt: "Sala común con sillones y espacio de encuentro",
    },
    {
      label: "Espacio de ejercicio",
      image: "/images/Gimnasio.jpeg",
      alt: "Patio con equipamiento para ejercicio",
    },
  ],
} as const;

// Cada sede tiene su propio módulo de datos. Cusco se publicará cuando exista
// contenido confirmado; por ahora solo se presenta como próxima sede.
export const destinations = {
  lima: {
    slug: "lima",
    name: "Lima",
    status: "active",
    tagline: "Tu punto de partida en Lima.",
    bookingUrl: site.bookingUrl,
    address: site.address,
    phone: site.phone,
    email: site.email,
    images: site.images,
    rooms: site.rooms,
    spaces: site.spaces,
  },
  cusco: {
    slug: "cusco",
    name: "Cusco",
    status: "coming-soon",
    tagline: "Una nueva historia está por comenzar.",
    bookingUrl: null,
    address: "",
    phone: "",
    email: "",
    images: null,
    rooms: [],
    spaces: [],
  },
} as const;

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/#destinos" },
  { label: "Habitaciones", href: "/lima#habitaciones" },
  { label: "Experiencia", href: "/lima#experiencia" },
  { label: "Galería", href: "/lima#galeria" },
  { label: "Ubicación", href: "/lima#ubicacion" },
  { label: "Contacto", href: "/lima#contacto" },
] as const;
