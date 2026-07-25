"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import NexaLoader from "./NexaLoader";

export default function NavLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const hideTimerRef = useRef<number | undefined>(undefined);

  const isFirstRun = useRef(true);

  useEffect(() => {
    // pathname changed => navigation actually completed, hide the loader
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setLoading(false);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = undefined;
    }
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
      // safety fallback only: hide if navigation never actually happens
      // (broken link, cancelled nav, etc.) — not meant to fire on normal loads
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => {
        setLoading(false);
        hideTimerRef.current = undefined;
      }, 15000);
    };

    document.addEventListener("click", handler, { capture: true });
    return () => {
      document.removeEventListener("click", handler, { capture: true });
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
