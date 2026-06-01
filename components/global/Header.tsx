 "use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Row from "@/components/global/Row";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const activeClass =
    "text-[#8F27FF] rounded-lg";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setAboutOpen(false);
        setFormsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node)
    ) {
      setServicesOpen(false);
      setAboutOpen(false);
      setFormsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);

useEffect(() => {
  setServicesOpen(false);
  setAboutOpen(false);
  setFormsOpen(false);
  setMenuOpen(false);
}, [pathname]);
  const IconPlaceholder = () => (
    <div className="w-5 h-5 flex items-center justify-center border rounded text-[10px]">
      I
    </div>
  );

  return (
    <header className="w-full relative">
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Image src="/images/logo.svg" alt="Nexa Logo" width={120} height={40} />

        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-4">
            <Link
              href="/"
              className={`flex items-center gap-3 px-3 py-2 ${pathname === "/" ? activeClass : ""}`}
            >
              <IconPlaceholder />
              Home
            </Link>

            <details>
              <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                <div className="flex items-center gap-3">
                  <IconPlaceholder />
                  Services
                </div>
                ▼
              </summary>
              <div className="pl-6 flex flex-col gap-2 mt-2">
                <Link href="/Entrepreneurship">Entrepreneurship</Link>
                <Link href="/startup">Startup</Link>
                <Link href="/advisory">Advisory</Link>
                <Link href="/investment">Investment</Link>
              </div>
            </details>

            <details>
              <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                <div className="flex items-center gap-3">
                  <IconPlaceholder />
                  About Us
                </div>
                ▼
              </summary>
              <div className="pl-6 flex flex-col gap-2 mt-2">
                <Link href="/about-us">Our Story</Link>
                <Link href="/our-team">Our Team</Link>
              </div>
            </details>

            <details>
              <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                <div className="flex items-center gap-3">
                  <IconPlaceholder />
                  Forms
                </div>
                ▼
              </summary>
              <div className="pl-6 flex flex-col gap-2 mt-2">
                <Link href="/form/step-1">Apply for funding</Link>
                <Link href="/form-2">Form 2</Link>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div className="hidden md:block p-4" style={{ boxShadow: "0px 4px 30px 0px #00000040" }}>
        <Row className="relative flex items-center">
          <Image src="/images/logo.svg" alt="Nexa Logo" width={120} height={40} />

          <nav
            ref={navRef}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8"
          >
            <Link href="/" className={`px-3 py-2 ${pathname === "/" ? activeClass : ""}`}>
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setAboutOpen(false);
                  setFormsOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2"
              >
                Services ▼
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg ">
                  <Link href="/Entrepreneurship" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Entrepreneurship</Link>
                  <Link href="/startup" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Startup</Link>
                  <Link href="/advisory" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Advisory</Link>
                  <Link href="/investment" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Investment</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setServicesOpen(false);
                  setFormsOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2"
              >
                About Us ▼
              </button>

              {aboutOpen && (
                <div className="absolute top-full mt-2 bg-white  rounded-xl shadow-lg min-w-[200px]">
                  <Link href="/about-us" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Our Story</Link>
                  <Link href="/our-team" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Our Team</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setFormsOpen(!formsOpen);
                  setServicesOpen(false);
                  setAboutOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2"
              >
                Forms ▼
              </button>

              {formsOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg min-w-[200px]">
                  <Link href="/form/step-1" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Apply for funding</Link>
                  <Link href="/form-2" className="block p-3 hover:bg-[#FAF6FF] rounded-xl">Form 2</Link>
                </div>
              )}
            </div>
          </nav>

          <div className="ml-auto">
            <Link
              href="/contact"
              className="px-5 py-2 border border-[#8F27FF] text-[#8F27FF] rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </Row>
      </div>
    </header>
  );
}
