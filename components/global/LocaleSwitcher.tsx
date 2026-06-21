"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "en" ? "fa" : "en";
  const label = locale === "en" ? "فا" : "EN";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2E2E2] text-sm font-medium hover:border-[#8F27FF] hover:text-[#8F27FF] transition-colors cursor-pointer"
      aria-label={`Switch to ${otherLocale === "fa" ? "Persian" : "English"}`}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>{label}</span>
    </button>
  );
}
