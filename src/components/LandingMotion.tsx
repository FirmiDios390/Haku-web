"use client";

import { useEffect } from "react";

export function LandingMotion() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const photo = document.querySelector<HTMLElement>(".space-photo-1");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1120px) and (hover: hover) and (pointer: fine)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    let photoVisible = false;

    const update = () => {
      frame = 0;
      header?.toggleAttribute("data-scrolled", window.scrollY > 24);
      if (!photo || !photoVisible || !desktop.matches || reduced.matches) return;
      const bounds = photo.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      photo.style.setProperty("--photo-offset", `${(progress - 0.5) * 26}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observe = () => {
      observer?.disconnect();
      photoVisible = false;
      photo?.removeAttribute("data-parallax");
      photo?.style.removeProperty("--photo-offset");
      if (!("IntersectionObserver" in window) || reduced.matches) return;
      observer = new IntersectionObserver((entries, currentObserver) => {
        for (const entry of entries) {
          const tracksParallax = entry.target === photo && desktop.matches;
          if (tracksParallax) {
            photoVisible = entry.isIntersecting;
            if (photoVisible) photo?.setAttribute("data-parallax", "");
            schedule();
          }
          if (entry.isIntersecting && !entry.target.hasAttribute("data-revealed")) {
            entry.target.setAttribute("data-revealed", "");
          }
          if (entry.isIntersecting && !tracksParallax) currentObserver.unobserve(entry.target);
        }
      }, { threshold: 0.06 });
      document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((node) => observer?.observe(node));
      if (photo && desktop.matches) observer.observe(photo);
    };

    observe();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", observe);
    reduced.addEventListener("change", observe);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", observe);
      reduced.removeEventListener("change", observe);
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return null;
}
