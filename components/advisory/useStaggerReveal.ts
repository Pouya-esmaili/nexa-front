"use client";

import { useEffect, type RefObject } from "react";

/**
 * Ports the original design's IntersectionObserver reveal logic:
 * observes every element matching `selector` inside `ref`, and when it
 * enters the viewport adds `visibleClass` after a staggered delay.
 */
export function useStaggerReveal(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  visibleClass: string,
  delay: (idx: number) => number,
  threshold = 0.15
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add(visibleClass));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = els.indexOf(e.target as HTMLElement);
            setTimeout(() => (e.target as HTMLElement).classList.add(visibleClass), delay(idx));
            obs.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
