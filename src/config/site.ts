export type Locale = "es" | "en";
export type BranchStatus = "active" | "hidden" | "coming-soon";
export type RoomCategory = { id: "shared" | "private"; images: readonly string[] };
export type GalleryImage = { src: string; position: string; layout: "wide" | "portrait" | "standard" };
export type ExternalSource = { name: string; url: string; verifiedAt: string };

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export const site = {
  name: "HAKU HOSTEL",
  logo: "/logo.png?v=20261117",
  bookingUrl: "https://banana-hotels.com/booking-engine/haku-hostel",
  instagramUrl: "https://www.instagram.com/haku.hostel/",
  address: "C. Comandante Juan G. Moore 304, Miraflores 15074, Perú",
  googleMapsUrl: "https://www.google.com/maps/place/HAKU+HOSTEL+Lima/@-12.1204657,-77.0444266,17z/data=!3m1!4b1!4m9!3m8!1s0x9105c90040859e27:0x71e8fa7cbf80a7a9!5m2!4m1!1i2!8m2!3d-12.1204657!4d-77.0418517!16s%2Fg%2F11x84k3qbx?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl: "https://www.google.com/maps?q=HAKU+HOSTEL+Lima,+C.+Comandante+Juan+G.+Moore+304,+Miraflores+15074,+Peru&z=16&output=embed",
  images: {
    entrance: "/images/Entrada.jpeg",
    homeSharedRoom: "/images/Habitaciones/dc587f27.avif",
    homePrivateRoom: "/images/Habitaciones/ffba815c.avif",
    lobby: "/images/Areas Comunes/1c73b34f.avif",
    dining: "/images/Areas Comunes/4448919d.avif",
    homePatio: "/images/Areas Comunes/9f5fbcd5.avif",
    lounge: "/images/Areas Comunes/ec7a6b9d.avif",
    patio: "/images/Areas Comunes/a5ae6aca.avif",
    patioNight: "/images/Areas Comunes/3435af11.avif",
    exercise: "/images/Servicios/8f3da86b.avif",
    sharedRoom: "/images/Habitaciones/65453975.webp",
    privateRoom: "/images/Habitaciones/23a525bb.avif",
    room204: "/images/Dormitorios/Dormitorio-204.jpeg",
    room204View: "/images/Dormitorios/Dormitorio-204(2).jpeg",
  },
  rooms: [
    { id: "shared", images: ["/images/Habitaciones/65453975.webp", "/images/Habitaciones/dc587f27.avif", "/images/Habitaciones/1b4a8f0c.avif"] },
    { id: "private", images: ["/images/Habitaciones/23a525bb.avif", "/images/Habitaciones/ffba815c.avif", "/images/Habitaciones/0e23c98c.avif"] },
  ] satisfies readonly RoomCategory[],
  gallery: [
    { src: "/images/Areas Comunes/2475f079.webp", position: "50% 50%", layout: "portrait" },
    { src: "/images/Areas Comunes/a5ae6aca.avif", position: "50% 52%", layout: "wide" },
    { src: "/images/Habitaciones/65453975.webp", position: "50% 50%", layout: "wide" },
    { src: "/images/Areas Comunes/3435af11.avif", position: "50% 55%", layout: "portrait" },
    { src: "/images/Habitaciones/23a525bb.avif", position: "50% 58%", layout: "portrait" },
    { src: "/images/Areas Comunes/ec7a6b9d.avif", position: "50% 50%", layout: "wide" },
    { src: "/images/Servicios/8f3da86b.avif", position: "50% 55%", layout: "standard" },
    { src: "/images/Areas Comunes/a63373a4.avif", position: "50% 54%", layout: "portrait" },
  ] satisfies readonly GalleryImage[],
  award: {
    label: "1st — New to Hostelworld",
    year: "2025",
    branch: "HAKU Cusco",
    sourceUrl: "https://www.hostelworld.com/hostels/south-america/peru/cusco/",
  },
  reviews: { enabled: false, rating: null, count: null, verifiedAt: null, quotes: [] },
  sources: [{
    name: "Hostelworld — HAKU Lima",
    url: "https://www.hostelworld.com/hostels/p/331100/haku-hostel/",
    verifiedAt: "2026-11-16",
  }] satisfies readonly ExternalSource[],
} as const;

export const branches = {
  lima: { slug: "lima", status: "active" as BranchStatus },
  cusco: { slug: "cusco", status: "hidden" as BranchStatus },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const homePath = (locale: Locale) => `/${locale}`;
export const roomsPath = (locale: Locale) => locale === "es" ? `/${locale}/habitaciones` : `/${locale}/rooms`;
