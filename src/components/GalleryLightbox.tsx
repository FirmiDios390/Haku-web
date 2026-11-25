"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/config/site";

type GalleryLightboxProps = {
  images: readonly GalleryImage[];
  alts: readonly string[];
  captions: readonly string[];
  labels: {
    open: string;
    close: string;
    previous: string;
    next: string;
    imageOf: string;
  };
};

export function GalleryLightbox({ images, alts, captions, labels }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeGallery = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  const featured = images.slice(0, 4);
  const counter = labels.imageOf
    .replace("{current}", String(activeIndex + 1))
    .replace("{total}", String(images.length));

  return <>
    <div className="gallery-editorial">
      {featured.map((image, index) => <button type="button" className={`gallery-tile gallery-tile-${index + 1}`} key={image.src} onClick={() => openGallery(index)} aria-label={`${labels.open}: ${captions[index]}`}>
        <Image src={image.src} alt={alts[index]} fill sizes="(max-width: 699px) 100vw, 50vw" className="cover-image" style={{ objectPosition: image.position }} />
      </button>)}
    </div>
    <button type="button" className="button button-outline gallery-open" onClick={() => openGallery(0)}><Images size={19} aria-hidden="true" />{labels.open}</button>

    <dialog ref={dialogRef} className="gallery-dialog" aria-label={labels.open} onClose={() => setIsOpen(false)} onKeyDown={handleKeyDown} onClick={(event) => {
      if (event.target === event.currentTarget) closeGallery();
    }}>
      <div className="lightbox-panel">
        <button ref={closeRef} type="button" className="lightbox-close" onClick={closeGallery} aria-label={labels.close}><X aria-hidden="true" /></button>
        <div className="lightbox-image">
          <Image src={images[activeIndex].src} alt={alts[activeIndex]} fill sizes="95vw" className="contain-image" />
        </div>
        <div className="lightbox-meta"><span>{counter}</span><strong>{captions[activeIndex]}</strong></div>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={showPrevious} aria-label={labels.previous}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" className="lightbox-nav lightbox-next" onClick={showNext} aria-label={labels.next}><ChevronRight aria-hidden="true" /></button>
      </div>
    </dialog>
  </>;
}
