"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "@/components/Icons";
import type { MediaSlide } from "@/config/media";

export function MediaCarousel({ slides }: { slides: MediaSlide[] }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) {
    return <div className="media-empty" role="status"><span className="media-empty-mark" aria-hidden="true">✳</span><span>Un espacio para nuevas historias</span><p>El carrusel está preparado para recibir fotografías oficiales de HAKU.</p><span className="media-empty-index">00 / 00</span></div>;
  }

  const slide = slides[index];
  const change = (step: number) => setIndex((current) => (current + step + slides.length) % slides.length);

  return <div className="media-carousel" aria-label="Carrusel de imágenes de HAKU"><div className="media-carousel-image"><Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 700px) 100vw, 80vw" className="cover-image" /></div><div className="media-carousel-controls"><span>{slide.caption}</span><div><button type="button" onClick={() => change(-1)} aria-label="Imagen anterior"><ArrowIcon /></button><span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><button type="button" onClick={() => change(1)} aria-label="Imagen siguiente"><ArrowIcon /></button></div></div></div>;
}
