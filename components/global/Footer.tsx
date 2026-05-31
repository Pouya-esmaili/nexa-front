import Image from "next/image";
import Link from "next/link";
import Row from "@/components/global/Row";

export default function Footer() {
    return (
        <footer className="bg-[#E2E2E2] pt-8 mt-20">

            <div className="flex flex-col gap-6 px-6 md:hidden">

                <div>
                    <Image
                        src="/images/logo.svg"
                        alt="Nexa Logo"
                        width={120}
                        height={40}
                        className="mb-4"
                    />
                    <p className="text-sm text-black font-normal leading-relaxed">
                        At NEXA, Global Launchpad for Entrepreneurship, Startup Acceleration,
                        and Strategic Investment, Backed by Over 7 Years of Proven Expertise
                        in Business Development, Strategic Planning, and International Market
                        Access.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-bold text-md text-black mb-2">Services</h4>
                        <ul className="space-y-1 font-normal text-sm text-black">
                            <li><Link href="#">Startup</Link></li>
                            <li><Link href="#">Investment</Link></li>
                            <li><Link href="#">Advisory</Link></li>
                            <li><Link href="#">Entrepreneurship</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-md text-black mb-2">About Nexa</h4>
                        <ul className="space-y-1 font-normal text-sm text-black">
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="#">Our Team</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-400 my-4" />

                <div>
                    <h4 className="font-bold text-black mb-2">Our Offices</h4>

                    <p className="font-semibold text-sm mb-1">Canada</p>
                    <div className="flex items-start gap-2 text-sm text-black">
                        <Image src="/images/location-tick.svg" alt="Location" width={16} height={16} className="mt-1" />
                        <p className="whitespace-normal font-medium break-words">
                            906-935 Marine Dr, West Vancouver, British Columbia, Canada
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black mt-1">
                        <Image src="/images/call-calling.svg" alt="Phone" width={16} height={16} />
                        <p className="whitespace-normal font-medium break-words">+1 (604) 351 - 5951</p>
                    </div>

                    {/* Iran */}
                    <p className="font-semibold text-sm mt-4 mb-1">Iran</p>
                    <div className="flex items-start gap-2 text-sm text-black">
                        <Image src="/images/location-tick.svg" alt="Location" width={16} height={16} className="mt-1" />
                        <p className="whitespace-normal font-medium break-words">
                            No. 27, Neom Building (Next to the Tandis Complex), Tajrish Square, Tehran, Iran
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black mt-1">
                        <Image src="/images/call-calling.svg" alt="Phone" width={16} height={16} />
                        <p className="whitespace-normal break-words">+98 (21) 2691 - 7416</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-6 mt-6">
                    <Link href="#"><Image src="/images/youtube.svg" alt="YouTube" width={26} height={26} /></Link>
                    <Link href="#"><Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} /></Link>
                    <Link href="#"><Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} /></Link>
                </div>

                <div className="border-t border-gray-400 mt-6" />

                <p className="text-sm text-black font-normal py-4 text-center">
                    Copyright © 2025 Nexa. All rights reserved.
                </p>
            </div>

            <div className="hidden md:block">
                <Row>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

                        <div>
                            <Image
                                src="/images/logo.svg"
                                alt="Nexa Logo"
                                width={120}
                                height={40}
                                className="mb-4"
                            />
                            <p className="text-sm text-black font-normal leading-relaxed max-w-sm">
                                At NEXA, Global Launchpad for Entrepreneurship, Startup Acceleration,
                                and Strategic Investment, Backed by Over 7 Years of Proven Expertise
                                in Business Development, Strategic Planning, and International Market
                                Access.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-black text-center mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-center text-black">
                                <li><Link href="./startup">Startup</Link></li>
                                <li><Link href="./investment">Investment</Link></li>
                                <li><Link href="./advisory">Advisory</Link></li>
                                <li><Link href="./Entrepreneurship">Entrepreneurship</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-black text-end mb-4">About Nexa</h4>
                            <ul className="space-y-2 text-sm font-normal text-end text-black">
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="#">Testimonials</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-gray-400 mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

                        <div>
                            <h4 className="font-bold text-black mb-4">Our Offices</h4>
                            <p className="font-semibold text-sm mb-1">Canada</p>
                            <div className="flex items-center gap-2 text-sm text-black">
                                <Image src="/images/location-tick.svg" alt="Location" width={16} height={16} />
                                <p className="font-medium leading-relaxed">
                                    906-935 Marine Dr, West Vancouver, British Columbia, Canada
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-black mt-1">
                                <Image src="/images/call-calling.svg" alt="Phone" width={16} height={16} />
                                <p className="font-medium leading-relaxed">+1 (604) 351 - 5951</p>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-10">
                            <p className="font-semibold text-sm mb-1">Iran</p>
                            <div className="flex items-center gap-2 text-sm text-black">
                                <Image src="/images/location-tick.svg" alt="Location" width={16} height={16} />
                                <p className="font-medium leading-relaxed">
                                    No. 27, Neom Building (Next to the Tandis Complex),
                                    Tajrish Square, Tehran, Iran
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-black mt-1">
                                <Image src="/images/call-calling.svg" alt="Phone" width={16} height={16} />
                                <p className="font-medium leading-relaxed">+98 (21) 2691 - 7416</p>
                            </div>
                        </div>

                        <div className="flex md:justify-end items-end gap-8 mt-8 md:mt-0">
                            <Link href="#"><Image src="/images/youtube.svg" alt="YouTube" width={26} height={26} /></Link>
                            <Link href="#"><Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} /></Link>
                            <Link href="#"><Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} /></Link>
                        </div>

                    </div>

                    <div className="border-t border-gray-400" />

                    <div className="py-4">
                        <p className="text-sm text-black font-normal">
                            Copyright © 2025 Nexa. All rights reserved.
                        </p>
                    </div>

                </Row>
            </div>

        </footer>
    );
}
