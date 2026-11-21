"use client";

import { useEffect } from "react";

const REVEAL_THRESHOLD = 0.08;
const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_STEPS = 4;

function useMobileMenu() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".s-menu");
    if (!menu) return;

    const close = () => menu.removeAttribute("open");
    const onMenuClick = (event: MouseEvent) => {
      if ((event.target as Element).closest("a")) close();
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (menu.open && !menu.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        close();
        menu.querySelector("summary")?.focus();
      }
    };

    menu.addEventListener("click", onMenuClick);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      menu.removeEventListener("click", onMenuClick);
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}

function useScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: REVEAL_THRESHOLD },
    );

    items.forEach((item, index) => {
      item.style.setProperty("--d", `${(index % REVEAL_STAGGER_STEPS) * REVEAL_STAGGER_MS}ms`);
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
}

export function SiteBehavior() {
  useMobileMenu();
  useScrollReveal();
  return null;
}
