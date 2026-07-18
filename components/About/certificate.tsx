import React from "react";
import Image from "next/image";
import Row from "../global/Row";

const CertificateSection: React.FC = () => {
    return (
        <section className="w-full py-10 md:py-16">
            <Row>
                <div
                    className="
    w-full rounded-[24px] 
    bg-transparent md:bg-white
    shadow-none md:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
    px-5 py-8 md:px-8 md:py-10
  "
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

                        {/* Left Content */}
                        <div className="w-full text-center md:text-left">
                            <h2 className="text-[28px] md:text-[40px] font-bold text-black leading-tight">
                                NEXA Certificate
                            </h2>

                            <p className="mt-4 text-[14px] md:text-[16px] leading-7 text-[#4B5563]">
                                Our certifications and professional affiliations reflect our
                                commitment to transparency, ethical conduct, and operational
                                credibility.
                            </p>
                        </div>

                        {/* Certificates */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">

                            <div className="relative w-full">
                                <div className="absolute inset-0 rounded-[20px] bg-purple-200 blur-2xl opacity-40"></div>

                                <div className="relative rounded-[20px] p-4">
                                    <Image
                                        src="/images/about/Small Certificate.webp"
                                        alt="Certificate 1"
                                        width={320}
                                        height={220}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            <div className="relative w-full">
                                <div className="absolute inset-0 rounded-[20px] bg-purple-200 blur-2xl opacity-40"></div>

                                <div className="relative rounded-[20px] p-4">
                                    <Image
                                        src="/images/about/Small Certificate2.webp"
                                        alt="Certificate 2"
                                        width={320}
                                        height={220}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Row>
        </section>
    );
};

export default CertificateSection;