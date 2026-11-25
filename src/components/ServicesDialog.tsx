"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { site } from "@/config/site";
import { getHostelInformation } from "@/config/hostelInfo";

type ServicesCopy = ReturnType<typeof getHostelInformation>["services"];

export function ServicesDialog({ services }: { services: ServicesCopy }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const scrollPosition = window.scrollY;
    const body = document.body;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";
    dialog.showModal();
    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      window.scrollTo(0, scrollPosition);
      requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
    };
  }, [isOpen]);

  return <>
    <button ref={triggerRef} type="button" className="services-open" onClick={() => setIsOpen(true)}>
      {services.open}
    </button>
    <dialog
      ref={dialogRef}
      className="services-dialog"
      aria-labelledby="services-dialog-title"
      aria-describedby="services-dialog-description"
      onCancel={(event) => { event.preventDefault(); closeDialog(); }}
      onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}
    >
      <section className="services-dialog-panel">
        <header className="services-dialog-header">
          <div>
            <span>HAKU HOSTEL / LIMA</span>
            <h2 id="services-dialog-title">{services.modalTitle}</h2>
            <p id="services-dialog-description">{services.modalSubtitle}</p>
          </div>
          <button ref={closeRef} type="button" className="services-dialog-close" aria-label={services.close} onClick={closeDialog}>
            <X aria-hidden="true" />
          </button>
        </header>
        <div className="services-dialog-scroll">
          {services.categories.map((category) => <section className="service-category" key={category.id} aria-labelledby={`service-category-${category.id}`}>
            <h3 id={`service-category-${category.id}`}>{category.title}</h3>
            <ul>{category.items.map((item) => <li key={item.id}><span>{item.label}</span>{item.note && <small>{item.note}</small>}</li>)}</ul>
          </section>)}
        </div>
        <footer className="services-dialog-footer">
          <p>{services.disclaimer}</p>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{services.whatsapp}</a>
        </footer>
      </section>
    </dialog>
  </>;
}
