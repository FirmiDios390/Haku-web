import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { test } from "node:test";
import { languageEntryPaths, localeRedirect } from "../hosting/locale.mjs";

const out = new URL("../out/", import.meta.url);
const read = (name) => readFile(new URL(name, out), "utf8");
const pages = [
  ["es", "es", "es", "en"],
  ["en", "en", "es", "en"],
  ["es/habitaciones", "es", "es/habitaciones", "en/rooms"],
  ["en/rooms", "en", "es/habitaciones", "en/rooms"],
];

test("locale redirects are temporary, same-origin, validated and never shared-cached", () => {
  const cases = [
    ["/", {}, "/es"],
    ["/", { "accept-language": "en-US,en;q=0.9" }, "/en"],
    ["/lima?utm_source=demo", { cookie: "other=1; haku_locale=es", "accept-language": "en" }, "/es?utm_source=demo"],
    ["/lima/", { cookie: "haku_locale=en" }, "/en"],
    ["/?next=https://example.invalid", { cookie: "haku_locale=//example.invalid", "accept-language": "enochian" }, "/es?next=https://example.invalid"],
    ["/", { cookie: "haku_locale=%65n", "accept-language": "es-PE" }, "/es"],
  ];
  for (const [path, headers, expected] of cases) {
    const response = localeRedirect(new Request(`https://example.test${path}`, { headers }));
    assert.equal(response.status, 307);
    assert.equal(response.headers.get("location"), expected);
    assert.equal(response.headers.get("cache-control"), "private, no-store");
    assert.equal(response.headers.get("vary"), "Cookie, Accept-Language");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
  }
  for (const path of ["/es", "/en/rooms", "/_next/image", "/robots.txt", "/otro"]) {
    assert.equal(localeRedirect(new Request(`https://example.test${path}`)).status, 404);
  }
  assert.equal(localeRedirect(new Request("https://branch.project.pages.dev/")).headers.get("x-robots-tag"), "noindex");
});

test("Pages invokes Functions only for the language entries, which have static fallbacks", async () => {
  const routes = JSON.parse(await read("_routes.json"));
  assert.deepEqual(routes, { version: 1, include: languageEntryPaths, exclude: [] });
  for (const file of ["index.html", "lima.html"]) {
    const html = await read(file);
    assert.match(html, /<a[^>]+href="\/es"/);
    assert.match(html, /<a[^>]+href="\/en"/);
    assert.match(html, /name="robots" content="noindex, follow"/);
  }
  assert.ok((await stat(new URL("404.html", out))).isFile());
});

test("metadata, server HTML, images and CSP in the four canonical pages", async () => {
  const headers = await read("_headers");
  const csp = headers.split("\n").find((line) => line.includes("Content-Security-Policy-Report-Only"));
  assert.ok(csp && csp.length <= 2000);
  assert.match(csp, /frame-src https:\/\/banana-hotels\.com https:\/\/www\.google\.com/);
  assert.doesNotMatch(csp, /script-src[^;]*unsafe/);
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /https:\/\/:version\.:project\.pages\.dev\/\*\n\s+X-Robots-Tag: noindex/);
  for (const [path, locale, es, en] of pages) {
    const html = await read(`${path}.html`);
    assert.match(html, new RegExp(`<html lang="${locale}"`));
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical);
    assert.equal(new URL(canonical).pathname, `/${path}`);
    assert.match(html, new RegExp(`hrefLang="es" href="[^"]+/${es}"`, "i"));
    assert.match(html, new RegExp(`hrefLang="en" href="[^"]+/${en}"`, "i"));
    assert.match(html, new RegExp(`hrefLang="x-default" href="[^"]+/${es}"`, "i"));
    assert.match(html, /property="og:title"/);
    assert.match(html, /property="og:locale"/);
    assert.equal([...html.matchAll(/id="main-content"/g)].length, 1);
    assert.match(html, /href="https:\/\/banana-hotels\.com\/booking-engine\/haku-hostel"/);
    assert.doesNotMatch(html, /src="\/_next\/image/);
    const imagePaths = new Set([...html.matchAll(/\/_photos\/([\w-]+\.webp)/g)].map(([, file]) => file));
    assert.ok(imagePaths.size > 0);
    for (const file of imagePaths) assert.ok((await stat(new URL(`_photos/${file}`, out))).size > 0);
    assert.match(html, /srcSet="\/_photos\/[^"]+ \d+w/i);
    if (path === locale) {
      const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1]);
      assert.equal(schema["@type"], "Hostel");
      assert.equal(schema.name, "HAKU HOSTEL");
      assert.equal(schema.address.addressLocality, "Miraflores");
      assert.equal(schema.aggregateRating, undefined);
    }
    for (const [, attributes, script] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (!/\bsrc\s*=/i.test(attributes) && script) {
        const hash = createHash("sha256").update(script).digest("base64");
        assert.ok(csp.includes(`'sha256-${hash}'`));
      }
    }
  }
});

test("sitemap contains exactly the four canonical URLs; robots separates search and training", async () => {
  const sitemap = await read("sitemap.xml");
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname).sort(), pages.map(([path]) => `/${path}`).sort());
  const robots = await read("robots.txt");
  assert.match(robots, /User-Agent: OAI-SearchBot\s+Allow: \//i);
  assert.match(robots, /User-Agent: GPTBot\s+Disallow: \//i);
  assert.match(robots, /Sitemap: https?:\/\/[^\s]+\/sitemap\.xml/);
});
