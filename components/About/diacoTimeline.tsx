import React from "react";
import Row from "../global/Row";

const diacoTimeline: React.FC = () => {
    return (
        <section className="w-full py-16">
            <Row>
                <div className=" mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">

                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-black mb-3">
                                First Venture – Diaco
                            </h3>
                            <p className="text-gray-900 text-lg">
                         Diaco was launched to address factory automation challenges by translating technical expertise into operational solutions.
                            </p>
                        </div>

                        {/* Middle Timeline */}
                        <div className="flex items-center justify-center gap-4">

                            {/* Year + Circle Image */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/about/2021.svg"
                                    alt="2021"
                                    className="h-38 w-auto"
                                />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end">
                            <div className="rounded-xl">
                                <img
                                    src="/images/about/diacoo.svg"
                                    alt="Diaco team"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Row>
        </section>
    );
};

export default diacoTimeline;