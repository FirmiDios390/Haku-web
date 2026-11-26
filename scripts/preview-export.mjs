import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { languageEntryPaths, localeRedirect } from "../hosting/locale.mjs";

const root = resolve("out");
const port = Number(process.env.PORT ?? 4173);
const staticOnly = process.argv.includes("--static-only");
const headerFile = await readFile(resolve(root, "_headers"), "utf8");
const sharedHeaders = Object.fromEntries(headerFile.split("\n\n")[0].split("\n").slice(1).map((line) => {
  const [name, ...value] = line.trim().split(":");
  return [name, value.join(":").trim()];
}));

const types = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".css": "text/css; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

async function staticFile(pathname) {
  const path = decodeURIComponent(pathname).replace(/\/$/, "");
  if (path.includes("\\") || path.includes("\0") || ["/_headers", "/_routes.json"].includes(path)) return null;
  const candidates = path === "" ? ["/index.html"] : [path, `${path}.html`, `${path}/index.html`];
  for (const candidate of candidates) {
    const file = resolve(root, "." + candidate);
    if (!file.startsWith(root + sep)) continue;
    try {
      return { body: await readFile(file), file };
    } catch (error) {
      if (!["ENOENT", "ENOTDIR", "EISDIR", "EPERM"].includes(error.code)) throw error;
    }
  }
  return null;
}

createServer(async (request, response) => {
  try {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { ...sharedHeaders, Allow: "GET, HEAD" }).end();
      return;
    }
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    if (!staticOnly && languageEntryPaths.includes(url.pathname)) {
      const redirect = localeRedirect(new Request(url, { headers: request.headers, method: request.method }));
      response.writeHead(redirect.status, Object.fromEntries(redirect.headers)).end();
      return;
    }
    const asset = await staticFile(url.pathname);
    const { file, body } = asset ?? await staticFile("/404.html");
    const contentType = types[extname(file).toLowerCase()] ?? "application/octet-stream";
    const immutable = url.pathname.startsWith("/_photos/");
    response.writeHead(asset ? 200 : 404, {
      ...sharedHeaders,
      "Content-Type": contentType,
      "Content-Length": body.byteLength,
      ...(immutable ? { "Cache-Control": "public, max-age=31536000, immutable" } : {}),
    }).end(request.method === "HEAD" ? undefined : body);
  } catch (error) {
    if (!(error instanceof URIError)) console.error(error);
    response.writeHead(error instanceof URIError ? 400 : 500, sharedHeaders).end();
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Static preview: http://127.0.0.1:${port} (${staticOnly ? "fallback only" : "locale handler enabled"}).`);
});
