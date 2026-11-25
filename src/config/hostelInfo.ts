import type { Locale } from "@/config/site";

export type ServiceIcon = "common" | "pingPong" | "laundry" | "tours" | "transport" | "flexibleHours";
export type ScheduleIcon = "checkIn" | "checkOut";
export type RateIcon = "tax" | "cardFee" | "payment";
export type PolicyIcon = "cancellation" | "breakfast" | "access" | "pets" | "alcohol";

type ServiceItem = { id: string; label: string; note?: string };
type HostelInformation = {
  services: {
    kicker: string;
    title: string;
    accent: string;
    body: string;
    open: string;
    close: string;
    modalTitle: string;
    modalSubtitle: string;
    highlights: readonly { id: ServiceIcon; label: string; note: string }[];
    categories: readonly { id: string; title: string; items: readonly ServiceItem[] }[];
    disclaimer: string;
    whatsapp: string;
  };
  stay: {
    schedule: readonly { id: ScheduleIcon; label: string; value: string; note: string }[];
    flexibleHoursNote: string;
    rates: readonly { id: RateIcon; label: string; value: string; body: string }[];
    policies: readonly { id: PolicyIcon; title: string; summary: string; body: string; isLong?: boolean }[];
  };
};

const es: HostelInformation = {
  services: {
    kicker: "03 / Servicios e instalaciones",
    title: "Lo esencial para",
    accent: "vivir HAKU.",
    body: "Espacios para compartir y ayuda práctica durante tu paso por Lima, sin convertir la experiencia en una lista interminable.",
    open: "Ver todos los servicios e instalaciones",
    close: "Cerrar servicios e instalaciones",
    modalTitle: "Servicios e instalaciones",
    modalSubtitle: "Información confirmada para organizar tu estancia. Los servicios adicionales dependen de disponibilidad.",
    highlights: [
      { id: "common", label: "Sala y áreas comunes", note: "Espacios para descansar y conocer viajeros" },
      { id: "pingPong", label: "Mesa de ping-pong", note: "Un punto de encuentro dentro del hostel" },
      { id: "laundry", label: "Lavandería", note: "Servicio adicional de pago" },
      { id: "tours", label: "Tours e información", note: "Consulta opciones en recepción" },
      { id: "transport", label: "Transporte", note: "Servicio adicional de pago" },
      { id: "flexibleHours", label: "Llegada y salida flexible", note: "Sujeto a disponibilidad" },
    ],
    categories: [
      {
        id: "included",
        title: "Incluido durante tu estancia",
        items: [
          { id: "breakfast", label: "Desayuno incluido", note: "Todos los días, de 07:00 a 09:00" },
          { id: "wifi", label: "Wi-Fi de alta velocidad" },
          { id: "reception", label: "Recepción las 24 horas" },
        ],
      },
      {
        id: "spaces",
        title: "Espacios para compartir",
        items: [
          { id: "common-area", label: "Sala y áreas comunes" },
          { id: "ping-pong", label: "Mesa de ping-pong" },
        ],
      },
      {
        id: "additional",
        title: "Servicios adicionales",
        items: [
          { id: "laundry", label: "Lavandería", note: "Servicio adicional de pago. Consultar tarifas en recepción" },
          { id: "tours", label: "Tours e información turística", note: "Consultar opciones y tarifas en recepción" },
          { id: "transport", label: "Transporte", note: "Servicio adicional de pago. Consultar disponibilidad" },
          { id: "early-late", label: "Early check-in y late check-out", note: "Sujeto a disponibilidad" },
        ],
      },
    ],
    disclaimer: "Algunos servicios tienen un coste adicional y están sujetos a disponibilidad. Confirma los detalles en recepción.",
    whatsapp: "Consultar con recepción por WhatsApp",
  },
  stay: {
    schedule: [
      { id: "checkIn", label: "Check-in", value: "14:00", note: "Desde las 14:00" },
      { id: "checkOut", label: "Check-out", value: "11:00", note: "Hasta las 11:00" },
    ],
    flexibleHoursNote: "Early check-in y late check-out disponibles previa consulta y sujetos a disponibilidad.",
    rates: [
      { id: "tax", label: "IGV para residentes", value: "18 %", body: "Las tarifas no incluyen el IGV del 18 % aplicable a residentes en Perú." },
      { id: "cardFee", label: "Recargo por pago con tarjeta", value: "5 %", body: "Los pagos con tarjeta están sujetos a un recargo adicional del 5 %." },
      { id: "payment", label: "Pago al llegar", value: "Efectivo o tarjeta", body: "Puedes pagar al llegar en efectivo, con tarjeta de crédito o débito." },
    ],
    policies: [
      { id: "cancellation", title: "Política de cancelación", summary: "Hasta 5 días antes", body: "Cancela hasta 5 días antes de la llegada. Una cancelación tardía o no presentarse puede generar el cobro total de la estadía.", isLong: true },
      { id: "breakfast", title: "Desayuno incluido", summary: "De 07:00 a 09:00", body: "El desayuno está incluido y se sirve todos los días de 07:00 a 09:00." },
      { id: "access", title: "Acceso", summary: "Sin toque de queda", body: "No hay horario de cierre. Puedes entrar y salir libremente; la recepción funciona las 24 horas." },
      { id: "pets", title: "Mascotas", summary: "No permitidas", body: "No se permiten mascotas en el alojamiento." },
      { id: "alcohol", title: "Bebidas alcohólicas", summary: "No se permite el ingreso externo", body: "No está permitido ingresar al hostel bebidas alcohólicas compradas fuera del establecimiento." },
    ],
  },
};

const en: HostelInformation = {
  services: {
    kicker: "03 / Services & facilities",
    title: "The essentials for",
    accent: "experiencing HAKU.",
    body: "Social spaces and practical support for your time in Lima, presented without turning the experience into an endless checklist.",
    open: "View all services and facilities",
    close: "Close services and facilities",
    modalTitle: "Services & facilities",
    modalSubtitle: "Confirmed information to help plan your stay. Additional services are subject to availability.",
    highlights: [
      { id: "common", label: "Lounge and common areas", note: "Spaces to rest and meet fellow travellers" },
      { id: "pingPong", label: "Ping-pong table", note: "A social meeting point inside the hostel" },
      { id: "laundry", label: "Laundry", note: "Paid additional service" },
      { id: "tours", label: "Tours and information", note: "Ask reception about available options" },
      { id: "transport", label: "Transport", note: "Paid additional service" },
      { id: "flexibleHours", label: "Flexible arrival and departure", note: "Subject to availability" },
    ],
    categories: [
      {
        id: "included",
        title: "Included during your stay",
        items: [
          { id: "breakfast", label: "Breakfast included", note: "Every day, from 7:00 to 9:00 am" },
          { id: "wifi", label: "High-speed Wi-Fi" },
          { id: "reception", label: "24-hour reception" },
        ],
      },
      {
        id: "spaces",
        title: "Spaces to share",
        items: [
          { id: "common-area", label: "Lounge and common areas" },
          { id: "ping-pong", label: "Ping-pong table" },
        ],
      },
      {
        id: "additional",
        title: "Additional services",
        items: [
          { id: "laundry", label: "Laundry", note: "Paid additional service. Ask reception for rates" },
          { id: "tours", label: "Tours and travel information", note: "Ask reception about options and rates" },
          { id: "transport", label: "Transport", note: "Paid additional service. Subject to availability" },
          { id: "early-late", label: "Early check-in and late check-out", note: "Subject to availability" },
        ],
      },
    ],
    disclaimer: "Some services cost extra and are subject to availability. Confirm the details with reception.",
    whatsapp: "Ask reception on WhatsApp",
  },
  stay: {
    schedule: [
      { id: "checkIn", label: "Check-in", value: "2:00 pm", note: "From 2:00 pm" },
      { id: "checkOut", label: "Check-out", value: "11:00 am", note: "By 11:00 am" },
    ],
    flexibleHoursNote: "Early check-in and late check-out are available on request and subject to availability.",
    rates: [
      { id: "tax", label: "VAT for residents", value: "18 %", body: "Rates do not include the 18% VAT applicable to residents in Peru." },
      { id: "cardFee", label: "Card payment surcharge", value: "5 %", body: "Card payments are subject to an additional 5% surcharge." },
      { id: "payment", label: "Pay on arrival", value: "Cash or card", body: "Pay on arrival by cash, credit card or debit card." },
    ],
    policies: [
      { id: "cancellation", title: "Cancellation policy", summary: "Up to 5 days before", body: "Cancel up to 5 days before arrival. Late cancellation or no-show may result in the full stay being charged.", isLong: true },
      { id: "breakfast", title: "Breakfast included", summary: "From 7:00 to 9:00 am", body: "Breakfast is included and served every day from 7:00 to 9:00 am." },
      { id: "access", title: "Access", summary: "No curfew", body: "There is no curfew. Come and go freely; reception is open 24 hours a day." },
      { id: "pets", title: "Pets", summary: "Not allowed", body: "Pets are not allowed at the property." },
      { id: "alcohol", title: "Alcoholic drinks", summary: "No outside alcohol", body: "Alcoholic drinks purchased outside the property may not be brought into the hostel." },
    ],
  },
};

const hostelInformation = { es, en } satisfies Record<Locale, HostelInformation>;

export const getHostelInformation = (locale: Locale) => hostelInformation[locale];
