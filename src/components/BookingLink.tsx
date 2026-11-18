"use client";

import { useContext, type MouseEvent } from "react";
import { site } from "@/config/site";
import { ArrowIcon } from "@/components/Icons";
import { BookingFlowContext } from "@/components/BookingFlowContext";

type BookingLinkProps = {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
};

export function BookingLink({ children, className = "", onOpen }: BookingLinkProps) {
  const bookingFlow = useContext(BookingFlowContext);
  const openModal = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !bookingFlow) return;
    event.preventDefault();
    onOpen?.();
    bookingFlow.openBooking(event.currentTarget);
  };

  return <a className={className} href={site.bookingUrl} target="_blank" rel="noopener noreferrer" aria-haspopup="dialog" aria-controls="booking-modal" onClick={openModal}>{children}<ArrowIcon diagonal /></a>;
}
