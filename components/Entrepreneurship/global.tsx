"use client";

import Image from "next/image";
import Row from "../global/Row";

const countries = [
    {
        name: "Canada",
        image: "/images/Entrepreneurship/canada.png",
        flag: "/images/Entrepreneurship/cn.svg",
    },
    {
        name: "Spain",
        image: "/images/Entrepreneurship/spain.png",
        flag: "/images/Entrepreneurship/ES.svg",
    },
    {
        name: "Finland",
        image: "/images/Entrepreneurship/finland.png",
        flag: "/images/Entrepreneurship/FI.svg",
    },
    {
        name: "Portugal",
        image: "/images/Entrepreneurship/portugal.png",
        flag: "/images/Entrepreneurship/PT.svg",
    },
    {
        name: "Netherland",
        image: "/images/Entrepreneurship/netherland.png",
        flag: "/images/Entrepreneurship/NT (1).svg",
    },
];

export default function GlobalTargets() {
    return (
        <section className="w-full py-16">
            <Row>
                <div className="">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Global Targets
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="relative h-[260px] rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                {/* Background Image */}
                                <Image
                                    src={country.image}
                                    alt={country.name}
                                    fill
                                    className="object-cover"
                                />

                                {/* Flag */}
                                <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:scale-135">
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        width={32}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Center Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">
                                        {country.name}
                                    </h3>

                                    {/* Line under name */}
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
        </section>
    );
}