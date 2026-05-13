"use client";

import Image from "next/image";
import Row from "../global/Row";

const countries = [
    {
        name: "UAE",
        image: "/images/investment/uae.svg",
        flag: "/images/investment/AUE.svg",
    },
    {
        name: "Turkey",
        image: "/images/investment/turkey.svg",
        flag: "/images/investment/TR.svg",
    },
    {
        name: "greece",
        image: "/images/investment/greece.svg",
        flag: "/images/investment/GR.svg",
    },
    {
        name: "Spain",
        image: "/images/investment/spain.png",
        flag: "/images/investment/ES.svg",
    },
    {
        name: "France",
        image: "/images/investment/france.svg",
        flag: "/images/investment/fr.svg",
    },
];

export default function GlobalTargets() {
    return (
        <section className="w-full py-16">

            {/* Mobile بدون Row */}
            <div className="md:hidden px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Where We Offer
                </h2>

                <div className="grid grid-cols-1 gap-6 ">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="relative h-[360px] overflow-hidden group cursor-pointer rounded-2xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={country.image}
                                alt={country.name}
                                fill
                                className="object-cover"
                            />

                            {/* Flag */}
                            <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:scale-125">
                                <Image
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    width={32}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white text-center">
                                <h3 className="text-2xl font-bold mb-2">
                                    {country.name}
                                </h3>

                                <div className="w-50 h-[1px] bg-white mb-2" />

                                <div className="flex items-center gap-2 text-md">
                                    <span>Read More</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop داخل Row */}
            <div className="hidden md:block">
                <Row>
                    <div>
                        <h2 className="text-4xl font-bold text-center mb-12">
                            Where We Offer
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {countries.map((country, index) => (
                                <div
                                    key={index}
                                    className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={country.image}
                                        alt={country.name}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Flag */}
                                    <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:scale-125">
                                        <Image
                                            src={country.flag}
                                            alt={`${country.name} flag`}
                                            width={32}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white text-center">
                                        <h3 className="text-2xl font-bold mb-2">
                                            {country.name}
                                        </h3>

                                        <div className="w-50 h-[1px] bg-white mb-2" />

                                        <div className="flex items-center gap-2 text-md">
                                            <span>Read More</span>
                                            <span>→</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Row>
            </div>
        </section>
    );
}