"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { ArrowIcon } from "@/components/Icons";
import { BookingFlowContext } from "@/components/BookingFlowContext";
import { StayPolicies, StaySchedule } from "@/components/StayDetails";
import { homePath, site, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type BookingFlowProps = {
  children: React.ReactNode;
  locale: Locale;
  dict: Dictionary;
};

export function BookingFlow({ children, locale, dict }: BookingFlowProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const restoreFocusRef = useRef(true);
  const afterCloseRef = useRef<(() => void) | undefined>(undefined);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [session, setSession] = useState(0);

  const openBooking = useCallback((trigger: HTMLElement) => {
    if (dialogRef.current?.open || isOpen) return;
    triggerRef.current = trigger;
    restoreFocusRef.current = true;
    afterCloseRef.current = undefined;
    setSession((current) => current + 1);
    setIsOpen(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const scrollPosition = window.scrollY;
    const body = document.body;
    const root = document.documentElement;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = Math.max(0, window.innerWidth - root.clientWidth);

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";
    if (scrollbarWidth) body.style.paddingRight = `${scrollbarWidth}px`;

    dialog.showModal();
    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.paddingRight = previous.paddingRight;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      root.style.scrollBehavior = previousScrollBehavior;
      requestAnimationFrame(() => {
        if (restoreFocusRef.current) triggerRef.current?.focus({ preventScroll: true });
        const afterClose = afterCloseRef.current;
        afterCloseRef.current = undefined;
        if (afterClose) requestAnimationFrame(afterClose);
      });
    };
  }, [isOpen]);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  const finishClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    dialogRef.current?.close();
    setIsClosing(false);
    setIsOpen(false);
  }, []);

  const closeBooking = useCallback((options?: { restoreFocus?: boolean; afterClose?: () => void }) => {
    if (!dialogRef.current?.open || isClosing) return;
    const restoreFocus = options?.restoreFocus ?? true;
    const afterClose = options?.afterClose;
    restoreFocusRef.current = restoreFocus;
    afterCloseRef.current = afterClose;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    setIsClosing(true);
    closeTimerRef.current = setTimeout(finishClose, 180);
  }, [finishClose, isClosing]);

  const conditionsHref = `${homePath(locale)}#stay-info`;
  const showAllConditions = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeBooking({
      restoreFocus: false,
      afterClose: () => {
        if (window.location.pathname === homePath(locale)) {
          window.history.pushState(null, "", conditionsHref);
          document.getElementById("stay-info")?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
        window.location.assign(conditionsHref);
      },
    });
  };

  const contextValue = useMemo(() => ({ openBooking }), [openBooking]);

  return <BookingFlowContext.Provider value={contextValue}>
    {children}
    <dialog
      ref={dialogRef}
      id="booking-modal"
      className="booking-dialog"
      data-closing={isClosing ? "true" : undefined}
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-subtitle"
      onCancel={(event) => { event.preventDefault(); closeBooking(); }}
      onClick={(event) => { if (event.target === event.currentTarget) closeBooking(); }}
    >
      <section className="booking-sheet">
        <header className="booking-modal-header">
          <div><span>HAKU HOSTEL / LIMA</span><h2 id="booking-modal-title">{dict.bookingModal.title}</h2><p id="booking-modal-subtitle">{dict.bookingModal.subtitle}</p></div>
          <button ref={closeRef} type="button" className="booking-modal-close" aria-label={dict.bookingModal.close} onClick={() => closeBooking()}><X aria-hidden="true" /></button>
        </header>
        <div className="booking-modal-scroll">
          <StaySchedule stay={dict.stay} variant="modal" />
          <div className="booking-rules-label">{dict.stay.rulesLabel}</div>
          <StayPolicies key={session} stay={dict.stay} variant="modal" />
          <a className="booking-conditions-link" href={conditionsHref} onClick={showAllConditions}>{dict.bookingModal.viewAll}<ArrowIcon diagonal /></a>
        </div>
        <footer className="booking-modal-footer">
          <p>{dict.bookingModal.helper}</p>
          <a className="button button-blue booking-continue" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">{dict.bookingModal.continue}<ArrowIcon diagonal /></a>
        </footer>
      </section>
    </dialog>
  </BookingFlowContext.Provider>;
}
