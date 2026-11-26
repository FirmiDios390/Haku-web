"use client";

import type { ComponentPropsWithoutRef } from "react";
import { preload as preloadImage } from "react-dom";
import photoManifest from "@/generated/photos.json";

type Variant = { width: number; url: string };
const photos: Record<string, Variant[] | undefined> = photoManifest;

type StaticPhotoProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "srcSet" | "sizes" | "alt"> & {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
};

export function StaticPhoto({ src, alt, sizes, preload, style, ...props }: StaticPhotoProps) {
  const variants = photos[src];
  const srcSet = variants?.map(({ url, width }) => `${url} ${width}w`).join(", ");
  const fallback = variants?.find(({ width }) => width >= 828)?.url ?? variants?.at(-1)?.url ?? src;
  if (preload) preloadImage(fallback, { as: "image", imageSrcSet: srcSet, imageSizes: sizes });
  return <img
    {...props}
    src={fallback}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    loading={preload ? "eager" : "lazy"}
    fetchPriority={preload ? "high" : undefined}
    decoding="async"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
  />;
}
