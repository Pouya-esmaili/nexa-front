"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import NexaLoader from "./NexaLoader";

export default function NavLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const hideTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // show loader briefly when pathname changes (navigation completed)
    if (!pathname) return;
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 900);
    // clear any safety hide timer set by click handler
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = undefined;
    }
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // show loader immediately on clicks of internal links so user sees instant feedback
    const handler = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const a = t.closest && (t.closest("a") as HTMLAnchorElement | null);
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;

      // ignore external links and new-tab targets
      const target = a.getAttribute("target");
      if (target && target !== "") return;

      try {
        const url = new URL(href, location.href);
        if (url.origin !== location.origin) return; // external
        // ignore same-page hash navigations
        if (url.pathname === location.pathname && url.hash && url.hash !== "") return;
      } catch (err) {
        return;
      }

      setLoading(true);
      // set a safety hide timer in case navigation doesn't change pathname
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => {
        setLoading(false);
        hideTimerRef.current = undefined;
      }, 2000);
    };

    // also listen to pointerdown to catch interactions earlier than click
    const pointerHandler = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const a = t.closest && (t.closest("a") as HTMLAnchorElement | null);
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;

      const target = a.getAttribute("target");
      if (target && target !== "") return;

      try {
        const url = new URL(href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname && url.hash && url.hash !== "") return;
      } catch (err) {
        return;
      }

      setLoading(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => {
        setLoading(false);
        hideTimerRef.current = undefined;
      }, 2000);
    };

    document.addEventListener("click", handler, { capture: true });
    document.addEventListener("pointerdown", pointerHandler, { capture: true });
    return () => {
      document.removeEventListener("click", handler, { capture: true });
      document.removeEventListener("pointerdown", pointerHandler, { capture: true });
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-[#0d0d0f]/80 backdrop-blur-sm">
      <NexaLoader size={80} />
    </div>
  );
}
