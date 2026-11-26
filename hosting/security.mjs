export const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // Payment delegation stays with the existing booking iframe and its provider.
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export function reportOnlyPolicy(scriptHashes = []) {
  const scripts = ["script-src", "'self'", ...scriptHashes].join(" ");
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'self'",
    scripts,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "frame-src https://banana-hotels.com https://www.google.com",
  ].join("; ");
}

export function isPagesHostname(hostname) {
  return hostname.endsWith(".pages.dev");
}
