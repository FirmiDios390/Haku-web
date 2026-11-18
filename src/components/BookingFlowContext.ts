"use client";

import { createContext } from "react";

export type BookingFlowContextValue = { openBooking: (trigger: HTMLElement) => void };
export const BookingFlowContext = createContext<BookingFlowContextValue | null>(null);
