import Image from "next/image";
import Row from "../global/Row";

const Hero = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <h2 className="text-3xl font-bold text-black">
                    Your{" "}
                    <mark className="bg-[#FFE52C]">Global Launchpad</mark>{" "} for Investment, Startups, Entrepreneurship, and Career Opportunities
                </h2>

                <p className="text-[20px] text-justify">
                    We fuel the global expansion of startups into new markets — for
                    entrepreneurs ready to scale and investors seeking high-growth
                    opportunities.
                </p>

                <Image
                    width={1200}
                    height={1200}
                    src="/images/landing/TEAM 1 (1).svg"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-8 text-[32px] font-bold text-black">Your{" "}<mark className="bg-[#FFE52C]">Global Launchpad</mark>{" "}for<br></br> Investment, Startups,<br></br> Entrepreneurship, and Career Opportunities</h2>
                            <p className="text-[24px]">
                                We fuel the global expansion of startups into new markets — for
                                entrepreneurs ready to scale and investors seeking high-growth
                                opportunities.
                            </p>
                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/landing/TEAM 2 (1).svg"
                                alt="hero"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Hero;
