"use client";

import { StaticPhoto } from "@/components/StaticPhoto";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/config/site";
import { useDialogExit } from "@/components/useDialogExit";

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
  const swipeStart = useRef<{ id: number; x: number; y: number } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [loadedIndex, setLoadedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const exitDialog = useDialogExit();

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setPreviousIndex(null);
    setLoadedIndex(null);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeGallery = () => exitDialog(dialogRef.current, () => {
    dialogRef.current?.close();
    setIsOpen(false);
  });

  const changePhoto = (direction: number) => {
    if (dialogRef.current?.hasAttribute("data-exiting")) return;
    setPreviousIndex(loadedIndex);
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

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
    if (event.key === "ArrowLeft") changePhoto(-1);
    if (event.key === "ArrowRight") changePhoto(1);
  };

  const featured = images.slice(0, 4);
  const counter = labels.imageOf
    .replace("{current}", String(activeIndex + 1))
    .replace("{total}", String(images.length));

  return <>
    <div className="gallery-editorial">
      {featured.map((image, index) => <button type="button" className={`gallery-tile gallery-tile-${index + 1}`} key={image.src} onClick={() => openGallery(index)} aria-label={`${labels.open}: ${captions[index]}`}>
        <StaticPhoto src={image.src} alt={alts[index]} sizes="(max-width: 699px) 100vw, 50vw" className="cover-image" style={{ objectPosition: image.position }} />
      </button>)}
    </div>
    <button type="button" className="button button-outline gallery-open" onClick={() => openGallery(0)}><Images size={19} aria-hidden="true" />{labels.open}</button>

    <dialog ref={dialogRef} className="gallery-dialog" aria-label={labels.open} onCancel={(event) => { event.preventDefault(); closeGallery(); }} onClose={() => setIsOpen(false)} onKeyDown={handleKeyDown} onClick={(event) => {
      if (event.target === event.currentTarget) closeGallery();
    }}>
      <div className="lightbox-panel">
        <button ref={closeRef} type="button" className="lightbox-close" onClick={closeGallery} aria-label={labels.close}><X aria-hidden="true" /></button>
        <div
          className="lightbox-image"
          onPointerDown={(event) => {
            if (!event.isPrimary || event.pointerType !== "touch") return;
            swipeStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerCancel={() => { swipeStart.current = null; }}
          onPointerUp={(event) => {
            const start = swipeStart.current;
            if (start?.id !== event.pointerId) return;
            swipeStart.current = null;
            const x = event.clientX - start.x;
            if (Math.abs(x) >= 44 && Math.abs(x) > Math.abs(event.clientY - start.y) * 1.3) {
              changePhoto(x < 0 ? 1 : -1);
            }
          }}
        >
          {isOpen && previousIndex !== null && previousIndex !== activeIndex && <StaticPhoto
            src={images[previousIndex].src} alt="" aria-hidden="true" sizes="95vw" className="contain-image"
          />}
          {isOpen && <div className="lightbox-photo" key={activeIndex} data-loading={previousIndex !== null && previousIndex !== activeIndex && loadedIndex !== activeIndex ? "" : undefined}>
            <StaticPhoto src={images[activeIndex].src} alt={alts[activeIndex]} sizes="95vw" className="contain-image" onLoad={() => setLoadedIndex(activeIndex)} onError={() => setLoadedIndex(activeIndex)} />
          </div>}
        </div>
        <div className="lightbox-meta"><span>{counter}</span></div>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={() => changePhoto(-1)} aria-label={labels.previous}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" className="lightbox-nav lightbox-next" onClick={() => changePhoto(1)} aria-label={labels.next}><ChevronRight aria-hidden="true" /></button>
      </div>
    </dialog>
  </>;
}
