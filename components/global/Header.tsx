"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Types ─────────────────────────────────── */
type PanelName = "services" | "about" | "forms" | null;

export default function Header() {
  const pathname = usePathname();
  const [openPanel, setOpenPanel] = useState<PanelName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* close on route change */
  useEffect(() => {
    setOpenPanel(null);
    setMobileOpen(false);
    setMobileAcc(null);
  }, [pathname]);

  /* close on outside click (mobile) — exclude hamburger so click-toggle still works */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      const drawer = document.getElementById("nexaMobDrawer");
      const ham = hamburgerRef.current;
      const t = e.target as Node;
      if (
        drawer && !drawer.contains(t) &&
        ham && !ham.contains(t)
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

  const toggleAcc = (name: string) =>
    setMobileAcc((prev) => (prev === name ? null : name));

  return (
    <>
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="sticky top-0 z-[200] bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center pr-10 flex-shrink-0">
            <Image src="/images/logo.svg" alt="Nexa" width={72} height={26} priority />
          </Link>

          {/* NAV — desktop, takes middle space */}
          <nav className="hidden md:flex items-center flex-1 justify-center h-[72px]">

            <Link href="/"
              className="relative flex items-center h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative h-[72px] flex items-center"
              onMouseEnter={() => enter("services")}
              onMouseLeave={leave}
            >
              <button className="relative flex items-center gap-1.5 h-[72px] px-[22px] text-[15px] font-medium text-[#1a1a1a] hover:text-[#8F27FF] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[2px] after:bg-[#8F27FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                Services
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
                  <div className="max-w-[1240px] mx-auto px-10 py-9 grid grid-cols-4 gap-0">

                    {/* Entrepreneurship */}
                    <div className="pr-7 border-r border-[#E2E2E2]">
                      <Link href="/Entrepreneurship" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </span>
                        Entrepreneurship
                      </Link>
                      {[
                        ["Canada Entrepreneurship", "/Entrepreneurship/canada"],
                        ["Spain Entrepreneurship", "/Entrepreneurship/spain"],
                        ["Portugal Entrepreneurship", "/Entrepreneurship/portugal"],
                        ["Finland Entrepreneurship", "/Entrepreneurship/finland"],
                        ["Netherland Entrepreneurship", "/Entrepreneurship/netherlands"],
                      ].map(([label, href]) => (
                        <Link key={label} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {label}
                        </Link>
                      ))}
                    </div>

                    {/* Startup */}
                    <div className="px-7 border-r border-[#E2E2E2]">
                      <Link href="/startup" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </span>
                        Startup
                      </Link>
                      {[
                        ["Finland Startup", "/startup/finland"],
                        ["Netherland Startup", "/startup/netherlands"],
                        ["Canada Startup", "/startup/canada"],
                        ["UK Startup", "/startup/uk"],
                        ["France Startup", "/startup/france"],
                      ].map(([label, href]) => (
                        <Link key={label} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {label}
                        </Link>
                      ))}
                    </div>

                    {/* Investment */}
                    <div className="px-7">
                      <Link href="/investment" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </span>
                        Investment
                      </Link>
                      {[
                        ["UAE Investment", "/investment/uae"],
                        ["Turkey Investment", "/investment/turkiye"],
                        ["Greece Investment", "/investment/greece"],
                        ["Spain Investment", "/investment/spain"],
                        ["France Investment", "/investment/france"],
                      ].map(([label, href]) => (
                        <Link key={label} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {label}
                        </Link>
                      ))}
                    </div>

                    {/* Advisory */}
                    <div className="pl-7 border-l border-[#E2E2E2]">
                      <Link href="/advisory" className="flex items-center gap-2 text-[16px] font-bold text-[#1a1a1a] mb-2.5 pb-2.5 border-b-2 border-[#E2E2E2] hover:text-[#8F27FF] transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-[#f5f0ff] grid place-items-center flex-shrink-0 group-hover:bg-[#8F27FF] transition-colors">
                          <svg className="w-4 h-4 text-[#8F27FF] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                        </span>
                        Advisory
                      </Link>
                      {[
                        ["Business Model Design", "/Advisory/Business-Model-Design"],
                        ["Brand Strategy", "/Advisory/Brand-Strategy"],
                        ["Go-To-Market Strategy", "/Advisory/Go-To-Market-Strategy"],
                        ["Marketing Strategy & Planning", "/Advisory/Marketing-Strategy"],
                        ["Market Analysis", "/Advisory/Market-Analysis"],
                        ["Visual Identity", "/Advisory/Visual-Identity"],
                        ["Web Design", "/Advisory/Web-Design"],
                        ["Content Creation", "/Advisory/Content-Creation"],
                      ].map(([label, href]) => (
                        <Link key={label} href={href}
                          className="block text-[13.5px] text-[#555] py-[5px] hover:text-[#8F27FF] hover:text-[15.5px] transition-all whitespace-nowrap">
                          {label}
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
                About Us
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
                  <div className="max-w-[1240px] mx-auto px-10 py-9 grid grid-cols-3 gap-6">
                    <DdCard href="/our-team" title="Our Team" desc="Meet the people behind Nexa.">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </DdCard>
                    <DdCard href="/our-story" title="Our Story" desc="Our journey and mission for the future.">
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
                Forms
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
                  <div className="max-w-[1240px] mx-auto px-10 py-9 grid grid-cols-3 gap-6">
                    <DdCard href="/form/step-1" title="Apply for Funding" desc="Submit your funding application.">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    </DdCard>
                    <DdCard href="/form-2" title="Evaluate Form" desc="Evaluate your eligibility quickly.">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                    </DdCard>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right: CTA (desktop) + Hamburger (mobile) — always in same right slot */}
          <div className="ml-auto flex items-center gap-3 flex-shrink-0">
            <Link href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-[22px] py-[10px] bg-white border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[13px] transition-all hover:bg-[#8F27FF] hover:text-white hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(143,39,255,0.28)]">
              Contact Us
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
            Home
          </Link>

          {/* Services accordion */}
          <MobAccordion label="Services" open={mobileAcc === "services"} toggle={() => toggleAcc("services")}>
            <MobCatLink href="/Entrepreneurship" label="Entrepreneurship" />
            <MobSubLink href="/Entrepreneurship/canada" label="Canada Entrepreneurship" />
            <MobSubLink href="/Entrepreneurship/spain" label="Spain Entrepreneurship" />
            <MobSubLink href="/Entrepreneurship/portugal" label="Portugal Entrepreneurship" />
            <MobSubLink href="/Entrepreneurship/finland" label="Finland Entrepreneurship" />
            <MobSubLink href="/Entrepreneurship/netherlands" label="Netherland Entrepreneurship" />
            <MobCatLink href="/startup" label="Startup" />
            <MobSubLink href="/startup/finland" label="Finland Startup" />
            <MobSubLink href="/startup/canada" label="Canada Startup" />
            <MobSubLink href="/startup/uk" label="UK Startup" />
            <MobSubLink href="/startup/greece" label="greece Startup" />
            <MobSubLink href="/startup/spain" label="spain Startup" />
            <MobCatLink href="/investment" label="Investment" />
            <MobSubLink href="/investment/uae" label="UAE Investment" />
            <MobSubLink href="/investment/turkiye" label="Turkey Investment" />
            <MobSubLink href="/investment/greece" label="Greece Investment" />
            <MobSubLink href="/investment/spain" label="Spain Investment" />
            <MobSubLink href="/investment/france" label="France Investment" />
            <MobCatLink href="/advisory" label="Advisory" />
            <MobSubLink href="/Advisory/Business-Model-Design" label="Business Model Design" />
            <MobSubLink href="/Advisory/Brand-Strategy" label="Brand Strategy" />
            <MobSubLink href="/Advisory/Go-To-Market-Strategy" label="Go-To-Market Strategy" />
            <MobSubLink href="/Advisory/Marketing-Strategy" label="Marketing Strategy & Planning" />
            <MobSubLink href="/Advisory/Market-Analysis" label="Market Analysis" />
            <MobSubLink href="/Advisory/Visual-Identity" label="Visual Identity" />
            <MobSubLink href="/Advisory/Web-Design" label="Web Design" />
            <MobSubLink href="/Advisory/Content-Creation" label="Content Creation" />
          </MobAccordion>

          {/* About Us accordion */}
          <MobAccordion label="About Us" open={mobileAcc === "about"} toggle={() => toggleAcc("about")}>
            <MobSubLink href="/our-team" label="Our Team" />
            <MobSubLink href="/our-story" label="Our Story" />
          </MobAccordion>

          {/* Forms accordion */}
          <MobAccordion label="Forms" open={mobileAcc === "forms"} toggle={() => toggleAcc("forms")}>
            <MobSubLink href="/form/step-1" label="Apply for Funding" />
            <MobSubLink href="/form-2" label="Evaluate Form" />
          </MobAccordion>

          {/* Bottom CTA */}
          <div className="mt-auto p-6 border-t border-[#E2E2E2] flex flex-col gap-2.5">
            <Link href="#contact"
              className="flex items-center justify-center px-6 py-3.5 border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold rounded-full text-[15px] hover:bg-[#8F27FF] hover:text-white transition-all">
              Contact Us
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

function DdCard({ href, title, desc, children }: { href: string; title: string; desc: string; children: ReactNode }) {
  return (
    <Link href={href}
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

function MobCatLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}
      className="flex items-center justify-between px-6 py-3.5 text-[14px] font-bold text-[#1a1a1a] border-b border-[#E2E2E2] hover:text-[#8F27FF] hover:bg-[#FAF6FF] transition-colors">
      {label}
      <svg className="w-4 h-4 text-[#8F27FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="9 18 15 12 9 6" /></svg>
    </Link>
  );
}

function MobSubLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}
      className="block px-12 py-3.5 text-[14px] text-[#444] border-b border-[#F4F4F4] hover:text-[#8F27FF] hover:bg-[#f3ecff] transition-colors">
      {label}
    </Link>
  );
}
