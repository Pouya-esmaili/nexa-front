"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Row from "@/components/global/Row";

const menuIcons = {
  home: "/images/home-2.svg",
  services: "/images/service.svg",
  about: "/images/profile-2user.svg",
  forms: "/images/document-text.svg",
};

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const activeClass = "text-[#8F27FF] rounded-lg";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setServicesOpen(false);
        setAboutOpen(false);
        setFormsOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setAboutOpen(false);
    setFormsOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full relative md:pb-[88px]">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Image
          src="/images/logo.svg"
          alt="Nexa Logo"
          width={120}
          height={40}
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl"
        >
          ☰
        </button>

        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 flex flex-col gap-4 flex-1 overflow-y-auto">
              <Link
                href="/"
                className={`flex items-center gap-3 px-3 py-2 ${pathname === "/" ? activeClass : ""
                  }`}
              >
                <Image
                  src={menuIcons.home}
                  alt="Home"
                  width={20}
                  height={20}
                />
                Home
              </Link>

              <details>
                <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={menuIcons.services}
                      alt="Services"
                      width={20}
                      height={20}
                    />
                    Services
                  </div>

                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </summary>

                <div className="pl-6 flex flex-col gap-2 mt-2">
                  <Link href="/Entrepreneurship">
                    Entrepreneurship
                  </Link>
                  <Link href="/startup">
                    Startup
                  </Link>
                  <Link href="/advisory">
                    Advisory
                  </Link>
                  <Link href="/investment">
                    Investment
                  </Link>
                </div>
              </details>

              <details>
                <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={menuIcons.about}
                      alt="About Us"
                      width={20}
                      height={20}
                    />
                    About Us
                  </div>

                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </summary>

                <div className="pl-6 flex flex-col gap-2 mt-2">
                  <Link href="/our-story">
                    Our Story
                  </Link>
                  <Link href="/our-team">
                    Our Team
                  </Link>
                </div>
              </details>

              <details>
                <summary className="flex items-center justify-between cursor-pointer px-3 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={menuIcons.forms}
                      alt="Forms"
                      width={20}
                      height={20}
                    />
                    Forms
                  </div>

                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </summary>

                <div className="pl-6 flex flex-col gap-2 mt-2">
                  <Link href="/form/step-1">
                    Apply for funding
                  </Link>
                  <Link href="/form-2">
                    Form 2
                  </Link>
                </div>
              </details>
            </div>

            <div className="p-6">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-5 py-3 border border-[#8F27FF] bg-[#8F27FF] text-white rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div
        className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white p-4"
        style={{ boxShadow: "0px 4px 30px 0px #00000040" }}
      >
        <Row className="relative flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Nexa Logo"
            width={120}
            height={40}
          />

          <nav
            ref={navRef}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8"
          >
            <Link
              href="/"
              className={`px-3 py-2 ${pathname === "/" ? activeClass : ""
                }`}
            >
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
                Services

                <Image
                  src="/images/arrow.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg">
                  <Link
                    href="/Entrepreneurship"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Entrepreneurship
                  </Link>
                  <Link
                    href="/startup"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Startup
                  </Link>
                  <Link
                    href="/advisory"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Advisory
                  </Link>
                  <Link
                    href="/investment"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Investment
                  </Link>
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
                className="flex items-center gap-2 px-3 py-2"
              >
                About Us

                <Image
                  src="/images/arrow.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg min-w-[200px]">
                  <Link
                    href="/our-story"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/our-team"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Our Team
                  </Link>
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
                className="flex items-center gap-2 px-3 py-2"
              >
                Forms

                <Image
                  src="/images/arrow.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className={`transition-transform duration-300 ${formsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {formsOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg min-w-[200px]">
                  <Link
                    href="/form/step-1"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Apply for funding
                  </Link>
                  <Link
                    href="/form-2"
                    className="block p-3 hover:bg-[#FAF6FF] rounded-xl"
                  >
                    Form 2
                  </Link>
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