import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { site } from "../src/config/site.ts";

// Use the image encoder already shipped and locked with Next.js.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const sources = [...new Set([
  site.images.entrance,
  site.images.lobby,
  site.images.dining,
  site.images.homeSharedRoom,
  site.images.homePrivateRoom,
  ...site.rooms.flatMap((room) => room.images),
  ...site.gallery.map(({ src }) => src),
])];
const widths = [384, 640, 828, 1080, 1440, 1920];
const output = resolve("public/_photos");
await mkdir(output, { recursive: true });
await mkdir("src/generated", { recursive: true });

const manifest = {};
for (const src of sources) {
  const original = await readFile(resolve("public", src.slice(1)));
  const metadata = await sharp(original).metadata();
  const orientedWidth = metadata.autoOrient?.width ?? metadata.width;
  const largest = Math.min(orientedWidth, widths.at(-1));
  const candidates = [...widths.filter((width) => width < largest), largest];
  const quality = src === site.images.entrance ? 88 : 84;
  const key = createHash("sha256")
    .update(original)
    .update(`webp:rotate:${quality}:${sharp.versions.sharp}`)
    .digest("hex").slice(0, 16);
  manifest[src] = [];

  for (const width of candidates) {
    const filename = `${key}-${width}.webp`;
    const destination = resolve(output, filename);
    try {
      await access(destination);
    } catch {
      const variant = await sharp(original).rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality }).toBuffer();
      await writeFile(destination, variant);
    }
    manifest[src].push({ width, url: `/_photos/${filename}` });
  }
}

const manifestPath = "src/generated/photos.json";
const json = JSON.stringify(manifest, null, 2) + "\n";
const prior = await readFile(manifestPath, "utf8").catch(() => "");
if (prior !== json) await writeFile(manifestPath, json);
console.log(`Verified responsive photo variants for ${sources.length} originals.`);
