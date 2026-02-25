"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Row from "@/components/global/Row";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full relative">

            <div className="md:hidden flex items-center justify-between px-6 py-4">
                <Image
                    src="/images/logo.svg"
                    alt="Nexa Logo"
                    width={120}
                    height={40}
                />

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>

                <div
                    className={`
            fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
                >
                    <div className="flex flex-col justify-between h-full px-6 py-8">
                        <nav className="flex flex-col gap-6 font-normal text-black">
                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>

                            <details>
                                <summary className="cursor-pointer font-normal list-none">
                                    Services
                                </summary>
                                <div className="flex flex-col gap-3 font-normal pl-4 mt-2">
                                    <Link href="/services/service1" onClick={() => setMenuOpen(false)}>
                                        Service 1
                                    </Link>
                                    <Link href="/services/service2" onClick={() => setMenuOpen(false)}>
                                        Service 2
                                    </Link>
                                </div>
                            </details>

                            <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                                About Us
                            </Link>

                            <Link href="/form/step-1" onClick={() => setMenuOpen(false)}>
                                Forms
                            </Link>

                            <Link
                                href="/contact"
                                className="mt-4 inline-flex justify-center px-5 py-2 border border-[#8F27FF] text-[#8F27FF] rounded-full"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </nav>

                        <button
                            className="absolute top-4 right-4"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:block p-4" style={{ boxShadow: "0px 4px 30px 0px #00000040" }}>
                <Row className="relative flex items-center">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo.svg"
                            alt="Nexa Logo"
                            width={120}
                            height={40}
                        />
                    </div>

                    <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 text-black">
                        <Link href="/" className="hover:text-purple-600 transition-colors">
                            Home
                        </Link>

                        <div className="relative group">
                            <button className="hover:text-purple-600 transition-colors">
                                Services
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2 min-w-[160px] z-50">
                                <Link
                                    href="/services/service1"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Service 1
                                </Link>
                                <Link
                                    href="/services/service2"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Service 2
                                </Link>
                            </div>
                        </div>

                        <Link href="/about-us" className="hover:text-purple-600 transition-colors">
                            About Us
                        </Link>

                        <Link href="/form/step-1" className="hover:text-purple-600 transition-colors">
                            Forms
                        </Link>
                    </nav>

                    <div className="ml-auto">
                        <Link
                            href="/contact"
                            className="px-5 py-2 border border-[#8F27FF] text-[#8F27FF] rounded-full hover:bg-[#8F27FF] hover:text-white transition-colors font-medium"
                        >
                            Contact Us
                        </Link>
                    </div>
                </Row>
            </div>
        </header>
    );
}
