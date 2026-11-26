import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { reportOnlyPolicy, securityHeaders } from "../hosting/security.mjs";

const out = new URL("../out/", import.meta.url);
const files = (await readdir(out, { recursive: true })).filter((name) => name.endsWith(".html"));
const hashes = new Set();

for (const file of files) {
  const html = await readFile(new URL(file.replaceAll("\\", "/"), out), "utf8");
  for (const [, attributes, script] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (!/\bsrc\s*=/i.test(attributes) && script) {
      hashes.add(`'sha256-${createHash("sha256").update(script).digest("base64")}'`);
    }
  }
}

const cspHeader = `  Content-Security-Policy-Report-Only: ${reportOnlyPolicy([...hashes].sort())}`;
if (cspHeader.length > 2000) throw new Error("Report-only CSP exceeds the Cloudflare _headers line limit.");

const headers = [
  "/*",
  ...Object.entries(securityHeaders).map(([name, value]) => `  ${name}: ${value}`),
  cspHeader,
  "",
  "/_photos/*",
  "  Cache-Control: public, max-age=31536000, immutable",
  "",
  "https://:project.pages.dev/*",
  "  X-Robots-Tag: noindex",
  "",
  "https://:version.:project.pages.dev/*",
  "  X-Robots-Tag: noindex",
  "",
].join("\n");

await writeFile(new URL("_headers", out), headers);
console.log(`Generated Pages security headers with ${hashes.size} inline-script hashes.`);
