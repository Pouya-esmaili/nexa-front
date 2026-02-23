import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const CertificateSection: React.FC = () => {
    return (
        <section className="w-full py-20 relative">
            <Row>
                {/* Full width shadow background */}
                <div
                    className="
    absolute 
    left-14
    right-14
    bottom-0 
    h-[100px]
    bg-[#F3F5F680]
    shadow-[0px_8px_10px_0px_#00000040]
    rounded-2xl
  "
                />

                <div className="relative mx-auto w-full">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                        {/* Left Content */}
                        <div className="text-center  md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                NEXA Certificate
                            </h2>

                            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                                Our certifications and professional affiliations reflect our
                                commitment to transparency, ethical conduct, and operational
                                credibility.
                            </p>
                        </div>

                        {/* Certificates */}
                        <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 justify-center md:justify-center relative z-10">

                            {/* Certificate 1 */}
                            <div className="bg-[#F3F5F680] rounded-2xl shadow-[0px_8px_10px_0px_#00000040] p-4">
                                <Image
                                    src="/images/about/Small Certificate2.svg"
                                    alt="Certificate 1"
                                    width={260}
                                    height={180}
                                    className="object-contain"
                                />
                            </div>

                            {/* Certificate 2 */}
                            <div className="bg-[#F3F5F680] rounded-2xl shadow-[0px_8px_10px_0px_#00000040] p-4">
                                <Image
                                    src="/images/about/Small Certificate.svg"
                                    alt="Certificate 2"
                                    width={260}
                                    height={180}
                                    className="object-contain"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </Row>
        </section>
    );
};

export default CertificateSection;