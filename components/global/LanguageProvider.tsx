"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

/* ─── Types ─────────────────────────────────── */
export type Lang = "en" | "fa";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Return the English or Persian string based on the active language. */
  t: (en: string, fa: string) => string;
};

const STORAGE_KEY = "nexa-lang";

const LanguageContext = createContext<LangCtx | null>(null);

/**
 * Client-side language layer.
 * - Layout stays LTR (per design decision); only the text content changes.
 * - The choice is persisted to localStorage + a cookie so it survives reloads.
 * - No URL change: the whole tree simply re-renders in the selected language.
 */
export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  /** Language read from the cookie on the server, so SSR matches the client. */
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  /* reconcile with localStorage after mount (in case it drifted from the cookie) */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if ((saved === "en" || saved === "fa") && saved !== lang) setLangState(saved);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* persist + reflect the choice on <html> — Persian flips the whole layout to RTL */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.cookie = `${STORAGE_KEY}=${lang};path=/;max-age=31536000`;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
    html.setAttribute("data-lang", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === "en" ? "fa" : "en")),
    []
  );
  const t = useCallback(
    (en: string, fa: string) => (lang === "fa" ? fa : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Access the active language and the `t(en, fa)` helper.
 * Falls back to English if used outside the provider so nothing ever crashes.
 */
export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en",
      setLang: () => {},
      toggle: () => {},
      t: (en: string) => en,
    };
  }
  return ctx;
}
