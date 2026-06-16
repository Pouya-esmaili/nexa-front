"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Delegated prefetcher: on pointer/hover/touch of internal links, call router.prefetch
export default function LinkPrefetcher() {
  const router = useRouter();
  const seen = useRef(new Set<string>());

  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as Element | null;
      if (!t) return;
      const a = t.closest && (t.closest("a") as HTMLAnchorElement | null);
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;

      const target = a.getAttribute("target");
      if (target && target !== "") return; // don't prefetch new-tab links

      try {
        const url = new URL(href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname && url.hash && url.hash !== "") return;
      } catch (err) {
        return;
      }

      if (seen.current.has(href)) return;
      seen.current.add(href);
      // best-effort prefetch, ignore errors
      try {
        Promise.resolve(router.prefetch(href)).catch(() => {});
      } catch (err) {
        // no-op
      }
    };

    document.addEventListener("pointerenter", handler, { capture: true });
    document.addEventListener("touchstart", handler, { capture: true });
    document.addEventListener("mouseover", handler, { capture: true });

    return () => {
      document.removeEventListener("pointerenter", handler, { capture: true });
      document.removeEventListener("touchstart", handler, { capture: true });
      document.removeEventListener("mouseover", handler, { capture: true });
    };
  }, [router]);

  return null;
}
