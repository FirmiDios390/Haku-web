type BookingEvent = "booking_modal_open" | "booking_engine_open" | "booking_external_click";
type AnalyticsWindow = Window & {
  gtag?: (command: "event", name: BookingEvent, parameters: { site_language: string; site_path: string }) => void;
};

// The tag will only exist after a separately approved GA4 integration.
export function trackBookingInteraction(name: BookingEvent) {
  const tag = (window as AnalyticsWindow).gtag;
  if (typeof tag !== "function") return;
  try {
    tag("event", name, {
      site_language: document.documentElement.lang,
      site_path: window.location.pathname,
    });
  } catch {
    // Analytics must never interrupt a booking interaction.
  }
}
