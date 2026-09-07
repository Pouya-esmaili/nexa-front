"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";
import LangSwitch from "./LangSwitch";

/* ─── Types ─────────────────────────────────── */
type PanelName = "services" | "about" | "forms" | null;

export default function Header() {
  const pathname = usePathname();
  const { t } = useLang();
  const [openPanel, setOpenPanel] = useState<PanelName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState<string | null>(null);
  const [mobileServiceCat, setMobileServiceCat] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* close on route change */
  useEffect(() => {
    setOpenPanel(null);
    setMobileOpen(false);
    setMobileAcc(null);
    setMobileServiceCat(null);
  }, [pathname]);

  /* close on outside click (mobile) — exclude hamburger so click-toggle still works */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      const drawer = document.getElementById("nexaMobDrawer");
      const ham = hamburgerRef.current;
      const target = e.target as Node;
      if (
        drawer && !drawer.contains(target) &&
        ham && !ham.contains(target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const enter = (name: PanelName) => {
    clearTimeout(closeTimer.current);
    setOpenPanel(name);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenPanel(null), 80);
  };

  /* navigate to the homepage contact form from any page */
  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenPanel(null);
    setMobileOpen(false);
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const toggleAcc = (name: string) =>
    setMobileAcc((prev) => {
      const next = prev === name ? null : name;
      if (next !== "services") setMobileServiceCat(null);
      return next;
    });

  const toggleServiceCat = (name: string) =>
    setMobileServiceCat((prev) => (prev === name ? null : name));

  return (
    <>
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="sticky top-0 z-[200] bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center pe-10 flex-shrink-0">
            <Image src="/images/logo.svg" alt="Nexa" width={72} height={26} priority />
          </Link>

          {/* NAV — desktop, takes middle space */}
          <nav className="hidden md:flex items-center flex-1 justify-center h-[72px]">

            <Link href="/"
              className="relative flex items-center h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              {t("Home", "خانه")}
            </Link>

            {/* Services dropdown */}
            <div
              className="relative h-[72px] flex items-center"
              onMouseEnter={() => enter("services")}
              onMouseLeave={leave}
            >
              <button className="relative flex items-center gap-1.5 h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                {t("Services", "خدمات")}
                <svg
                  className={`w-[14px] h-[14px] opacity-55 transition-transform duration-200 ${openPanel === "services" ? "rotate-180 opacity-100" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Services PANEL */}
              {openPanel === "services" && (
                <div
                  className="fixed top-[72px] left-0 right-0 bg-white border-t border-b border-[#E2E2E2] shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-[199] animate-fadeDown"
                  onMouseEnter={() => enter("services")}
                  onMouseLeave={leave}
                >
                  <div className="max-w-[1240px] mx-auto px-6 py-9 grid grid-cols-4 gap-0">

                    {/* Entrepreneurship */}
                    <div className="pr-7 border-r border-[#E2E2E2]">
                      <Link href="/Entrepreneurship" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </span>
                        {t("Entrepreneurship", "کارآفرینی")}
                      </Link>
                      {[
                        ["Canada Entrepreneurship", "کارآفرینی کانادا", "/Entrepreneurship/canada"],
                        ["Spain Entrepreneurship", "کارآفرینی اسپانیا", "/Entrepreneurship/spain"],
                        ["Portugal Entrepreneurship", "کارآفرینی پرتغال", "/Entrepreneurship/portugal"],
                        ["Finland Entrepreneurship", "کارآفرینی فنلاند", "/Entrepreneurship/finland"],
                        ["Netherland Entrepreneurship", "کارآفرینی هلند", "/Entrepreneurship/netherlands"],
                      ].map(([en, fa, href]) => (
                        <Link key={href} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {t(en, fa)}
                        </Link>
                      ))}
                    </div>

                    {/* Startup */}
                    <div className="px-7 border-r border-[#E2E2E2]">
                      <Link href="/startup" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </span>
                        {t("Startup", "استارتاپ")}
                      </Link>
                      {[
                        ["Finland Startup", "استارتاپ فنلاند", "/startup/finland"],
                        ["Netherland Startup", "استارتاپ هلند", "/startup/netherlands"],
                        ["Canada Startup", "استارتاپ کانادا", "/startup/canada"],
                        ["UK Startup", "استارتاپ انگلستان", "/startup/uk"],
                        ["France Startup", "استارتاپ فرانسه", "/startup/france"],
                      ].map(([en, fa, href]) => (
                        <Link key={href} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {t(en, fa)}
                        </Link>
                      ))}
                    </div>

                    {/* Investment */}
                    <div className="px-7 border-r border-[#E2E2E2]">
                      <Link href="/investment" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </span>
                        {t("Investment", "سرمایه‌گذاری")}
                      </Link>
                      {[
                        ["UAE Investment", "سرمایه‌گذاری امارات", "/investment/uae"],
                        ["Turkey Investment", "سرمایه‌گذاری ترکیه", "/investment/turkiye"],
                        ["Greece Investment", "سرمایه‌گذاری یونان", "/investment/greece"],
                        ["Spain Investment", "سرمایه‌گذاری اسپانیا", "/investment/spain"],
                        ["France Investment", "سرمایه‌گذاری فرانسه", "/investment/france"],
                      ].map(([en, fa, href]) => (
                        <Link key={href} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {t(en, fa)}
                        </Link>
                      ))}
                    </div>

                    {/* Advisory */}
                    <div className="pl-7">
                      <Link href="/advisory" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                        </span>
                        {t("Advisory", "مشاوره")}
                      </Link>
                      {[
                        ["Visual Identity", "هویت بصری", "/advisory/visual-identity"],
                        ["Web Design", "طراحی وب", "/advisory/web-design"],
                        ["Content Creation", "تولید محتوا", "/advisory/content-creation"],
                        ["Business Strategy", "استراتژی کسب‌وکار", "/advisory/business-strategy"],
                      ].map(([en, fa, href]) => (
                        <Link key={href} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {t(en, fa)}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* About Us dropdown */}
            <div
              className="relative h-[72px] flex items-center"
              onMouseEnter={() => enter("about")}
              onMouseLeave={leave}
            >
              <button className="relative flex items-center gap-1.5 h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                {t("About Us", "درباره ما")}
                <svg
                  className={`w-[14px] h-[14px] opacity-55 transition-transform duration-200 ${openPanel === "about" ? "rotate-180 opacity-100" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openPanel === "about" && (
                <div
                  className="fixed top-[72px] left-0 right-0 bg-white border-t border-b border-[#E2E2E2] shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-[199] animate-fadeDown"
                  onMouseEnter={() => enter("about")}
                  onMouseLeave={leave}
                >
                  <div className="max-w-[1240px] mx-auto px-6 py-9 grid grid-cols-2 gap-6">
                    <DdCard href="/our-team" title={t("Our Team", "تیم ما")} desc={t("Meet the people behind Nexa.", "با افراد پشت نکسا آشنا شوید.")}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </DdCard>
                    <DdCard href="/our-story" title={t("Our Story", "داستان ما")} desc={t("Our journey and mission for the future.", "مسیر و مأموریت ما برای آینده.")}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    </DdCard>
                  </div>
                </div>
              )}
            </div>

            {/* Forms dropdown */}
            <div
              className="relative h-[72px] flex items-center"
              onMouseEnter={() => enter("forms")}
              onMouseLeave={leave}
            >
              <button className="relative flex items-center gap-1.5 h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                {t("Forms", "فرم‌ها")}
                <svg
                  className={`w-[14px] h-[14px] opacity-55 transition-transform duration-200 ${openPanel === "forms" ? "rotate-180 opacity-100" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openPanel === "forms" && (
                <div
                  className="fixed top-[72px] left-0 right-0 bg-white border-t border-b border-[#E2E2E2] shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-[199] animate-fadeDown"
                  onMouseEnter={() => enter("forms")}
                  onMouseLeave={leave}
                >
                  <div className="max-w-[1240px] mx-auto px-6 py-9 grid grid-cols-2 gap-6">
                    <DdCard href="/form/step-1" title={t("Apply for Funding", "درخواست سرمایه")} desc={t("Submit your funding application.", "درخواست سرمایه خود را ثبت کنید.")}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    </DdCard>
                    <DdCard href="/#contact" onClick={goToContact} title={t("Evaluate Form", "فرم ارزیابی")} desc={t("Evaluate your eligibility quickly.", "واجد شرایط بودن خود را سریع بسنجید.")}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                    </DdCard>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right: CTA (desktop) + Hamburger (mobile) — always in same right slot */}
          <div className="ms-auto flex items-center gap-3 flex-shrink-0">
            <LangSwitch className="hidden md:inline-flex" />
            <Link href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-[22px] py-[10px] bg-white border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[13px] transition-all hover:bg-[#8F27FF] hover:text-white hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(143,39,255,0.28)]">
              {t("Contact Us", "تماس با ما")}
            </Link>
            <button
              ref={hamburgerRef}
              className={`md:hidden w-10 h-10 rounded-[10px] grid place-items-center text-[18px] transition-colors ${mobileOpen ? "bg-[#8F27FF] text-white" : "bg-[#F4F4F4] text-[#474747]"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════ MOBILE OVERLAY ═══════════════ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/45 z-[198] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <div
        id="nexaMobDrawer"
        className={`fixed top-[72px] right-0 bottom-0 w-[min(320px,90vw)] bg-white shadow-[-8px_0_32px_rgba(0,0,0,0.12)] z-[199] overflow-y-auto transition-transform duration-300 md:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col min-h-full pt-3">

          {/* Home */}
          <Link href="/"
            className="block px-6 py-5 text-[16px] font-medium border-b border-[#E2E2E2] hover:text-[#8F27FF] hover:bg-[#FAF6FF] transition-colors">
            {t("Home", "خانه")}
          </Link>

          {/* Services accordion */}
          <MobAccordion label={t("Services", "خدمات")} open={mobileAcc === "services"} toggle={() => toggleAcc("services")}>
            <MobServiceCat
              label={t("Entrepreneurship", "کارآفرینی")}
              href="/Entrepreneurship"
              open={mobileServiceCat === "entrepreneurship"}
              toggle={() => toggleServiceCat("entrepreneurship")}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>}
              items={[
                ["Canada Entrepreneurship", "کارآفرینی کانادا", "/Entrepreneurship/canada"],
                ["Spain Entrepreneurship", "کارآفرینی اسپانیا", "/Entrepreneurship/spain"],
                ["Portugal Entrepreneurship", "کارآفرینی پرتغال", "/Entrepreneurship/portugal"],
                ["Finland Entrepreneurship", "کارآفرینی فنلاند", "/Entrepreneurship/finland"],
                ["Netherland Entrepreneurship", "کارآفرینی هلند", "/Entrepreneurship/netherlands"],
              ]}
            />
            <MobServiceCat
              label={t("Startup", "استارتاپ")}
              href="/startup"
              open={mobileServiceCat === "startup"}
              toggle={() => toggleServiceCat("startup")}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>}
              items={[
                ["Finland Startup", "استارتاپ فنلاند", "/startup/finland"],
                ["Canada Startup", "استارتاپ کانادا", "/startup/canada"],
                ["UK Startup", "استارتاپ انگلستان", "/startup/uk"],
                ["Netherlands Startup", "استارتاپ هلند", "/startup/netherlands"],
                ["France Startup", "استارتاپ فرانسه", "/startup/france"],
              ]}
            />
            <MobServiceCat
              label={t("Investment", "سرمایه‌گذاری")}
              href="/investment"
              open={mobileServiceCat === "investment"}
              toggle={() => toggleServiceCat("investment")}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
              items={[
                ["UAE Investment", "سرمایه‌گذاری امارات", "/investment/uae"],
                ["Turkey Investment", "سرمایه‌گذاری ترکیه", "/investment/turkiye"],
                ["Greece Investment", "سرمایه‌گذاری یونان", "/investment/greece"],
                ["Spain Investment", "سرمایه‌گذاری اسپانیا", "/investment/spain"],
                ["France Investment", "سرمایه‌گذاری فرانسه", "/investment/france"],
              ]}
            />
            <MobServiceCat
              label={t("Advisory", "مشاوره")}
              href="/advisory"
              open={mobileServiceCat === "advisory"}
              toggle={() => toggleServiceCat("advisory")}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>}
              items={[
                ["Visual Identity", "هویت بصری", "/advisory/visual-identity"],
                ["Web Design", "طراحی وب", "/advisory/web-design"],
                ["Content Creation", "تولید محتوا", "/advisory/content-creation"],
                ["Business Strategy", "استراتژی کسب‌وکار", "/advisory/business-strategy"],
              ]}
            />
          </MobAccordion>

          {/* About Us accordion */}
          <MobAccordion
            label={t("About Us", "درباره ما")}
            open={mobileAcc === "about"}
            toggle={() => toggleAcc("about")}
          >
            <MobSubLink
              href="/our-team"
              label={t("Our Team", "تیم ما")}
              icon={
                <svg
                  className="w-4 h-4 text-[#8F27FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />

            <MobSubLink
              href="/our-story"
              label={t("Our Story", "داستان ما")}
              icon={
                <svg
                  className="w-4 h-4 text-[#8F27FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              }
            />
          </MobAccordion>

          {/* Forms accordion */}
          <MobAccordion
            label={t("Forms", "فرم‌ها")}
            open={mobileAcc === "forms"}
            toggle={() => toggleAcc("forms")}
          >
            <MobSubLink
              href="/form/step-1"
              label={t("Apply for Funding", "درخواست سرمایه")}
              icon={
                <svg
                  className="w-4 h-4 text-[#8F27FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
            />

            <MobSubLink
              href="/#contact"
              onClick={goToContact}
              label={t("Evaluate Form", "فرم ارزیابی")}
              icon={
                <svg
                  className="w-4 h-4 text-[#8F27FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              }
            />
          </MobAccordion>

          {/* Bottom CTA */}
          <div className="mt-auto p-6 border-t border-[#E2E2E2] flex flex-col gap-2.5">
            <LangSwitch className="justify-center w-full" />
            <Link href="/contact"
              className="flex items-center justify-center px-6 py-3.5 border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[15px] hover:bg-[#8F27FF] hover:text-white transition-all">
              {t("Contact Us", "تماس با ما")}
            </Link>
          </div>

        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeDown { animation: fadeDown 0.18s ease forwards; }
      `}</style>
    </>
  );
}

/* ─── Sub-components ─────────────────────────── */

function DdCard({ href, title, desc, children, onClick }: { href: string; title: string; desc: string; children: ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link href={href} onClick={onClick}
      className="flex items-start gap-3.5 p-3.5 rounded-[10px] hover:bg-[#FAF6FF] transition-colors group">
      <span className="w-[38px] h-[38px] rounded-[9px] bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:text-[#8F27FF] group-hover:[&>svg]:text-white [&>svg]:transition-colors">
        {children}
      </span>
      <div>
        <div className="text-[14px] font-bold text-[#1a1a1a] mb-0.5">{title}</div>
        <div className="text-[12.5px] text-[#777] leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
}

function MobAccordion({ label, open, toggle, children }: { label: string; open: boolean; toggle: () => void; children: ReactNode }) {
  return (
    <div>
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between px-6 py-5 text-[16px] font-medium border-b border-[#E2E2E2] transition-colors ${open ? "text-[#8F27FF] bg-[#FAF6FF] border-b-0" : "text-[#1a1a1a]"}`}
      >
        {label}
        <svg
          className={`w-[18px] h-[18px] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-[#8F27FF]" : "opacity-50"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="bg-[#F7F6F9] overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "2000px" : "0" }}
      >
        {children}
        <div className="h-px bg-[#E2E2E2]" />
      </div>
    </div>
  );
}

function MobServiceCat({
  label,
  href,
  icon,
  items,
  open,
  toggle,
}: {
  label: string;
  href: string;
  icon: ReactNode;
  items: [string, string, string][];
  open: boolean;
  toggle: () => void;
}) {
  const { t } = useLang();
  return (
    <div className="border-b border-[#E2E2E2]">
      <button
        onClick={toggle}
        className={`w-full flex items-center gap-3 px-6 py-3.5 text-[14px] font-bold transition-colors group ${open ? "text-[#8F27FF] bg-[#FAF6FF]" : "text-[#1a1a1a] hover:text-[#8F27FF] hover:bg-[#FAF6FF]"}`}
      >
        <span className="w-5 h-6 rounded-md bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors [&>svg]:w-3 [&>svg]:h-3 [&>svg]:text-[#8F27FF] group-hover:[&>svg]:text-white [&>svg]:transition-colors">
          {icon}
        </span>
        <span className="flex-1 text-left">{label}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-[#8F27FF]" : "opacity-50"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="bg-[#F7F6F9] overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "1000px" : "0" }}
      >
        <Link href={href}
          className="block px-12 py-3.5 text-[13.5px] font-semibold text-[#8F27FF] border-b border-[#F4F4F4] hover:bg-[#f3ecff] transition-colors">
          {t("View all", "مشاهده همه")} {label}
        </Link>
        {items.map(([itemEn, itemFa, itemHref]) => (
          <MobSubLink key={itemHref} href={itemHref} label={t(itemEn, itemFa)} />
        ))}
      </div>
    </div>
  );
}

function MobSubLink({
  href,
  label,
  icon,
  onClick,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-3.5 text-[14px] text-[#444] border-b border-[#F4F4F4] hover:text-[#8F27FF] hover:bg-[#f3ecff] transition-colors"
    >
      {icon && (
        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </Link>
  );
}
