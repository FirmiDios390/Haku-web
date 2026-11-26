"use client";

import { useEffect, useRef } from "react";

export function useDialogExit() {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (dialog: HTMLDialogElement | null, close: () => void) => {
    if (!dialog?.open || dialog.hasAttribute("data-exiting")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      close();
      return;
    }

    dialog.setAttribute("data-exiting", "");
    timer.current = setTimeout(() => {
      close();
      dialog.removeAttribute("data-exiting");
    }, 240);
  };
}
