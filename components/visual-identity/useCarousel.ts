"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Ports the original design's mobile swipe-carousel behavior: tracks which
 * card is centered (via IntersectionObserver) to drive the "01/10" counter
 * and active-card highlight, and wires prev/next buttons to scroll by one
 * card width.
 */
export function useCarousel(
  gridRef: RefObject<HTMLElement | null>,
  count: number,
  activeClass: string
) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.children) as HTMLElement[];
    cardsRef.current = cards;
    if (!cards.length) return;

    let obs: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const idx = cards.indexOf(e.target as HTMLElement);
            if (e.isIntersecting && e.intersectionRatio > 0.6) {
              e.target.classList.add(activeClass);
              setActiveIdx(idx);
            } else {
              e.target.classList.remove(activeClass);
            }
          });
        },
        { root: grid, threshold: [0, 0.6, 1] }
      );
      cards.forEach((c) => obs!.observe(c));
    }

    const updateButtons = () => {
      const maxScroll = grid.scrollWidth - grid.clientWidth - 2;
      setAtStart(grid.scrollLeft <= 2);
      setAtEnd(grid.scrollLeft >= maxScroll);
    };
    updateButtons();
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(updateButtons, 80);
    };
    grid.addEventListener("scroll", onScroll);

    return () => {
      obs?.disconnect();
      grid.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const scroll = (delta: number) => {
    const grid = gridRef.current;
    const cards = cardsRef.current;
    if (!grid || !cards.length) return;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(grid).gap || "14");
    grid.scrollBy({ left: delta * (cardWidth + gap), behavior: "smooth" });
  };

  return { activeIdx, atStart, atEnd, scroll };
}
