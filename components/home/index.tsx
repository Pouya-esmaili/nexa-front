import Image from "next/image";
import Row from "../global/Row";

const Hero = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-6 px-6 mt-10     md:hidden">
                <h2 className="text-2xl font-medium text-black">
                    Your{" "}
                    <mark className="bg-[#FFE52C]">Global Launchpad</mark>{" "} for Investment, Startups, Entrepreneurship, and Career Opportunities
                </h2>

                <p className="text-[16px] text-justify">
                    We fuel the global expansion of startups into new markets — for
                    entrepreneurs ready to scale and investors seeking high-growth
                    opportunities.
                </p>

                <Image
                    width={1200}
                    height={1200}
                    src="/images/landing/Team.svg"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-8 text-[32px] font-medium text-black">Your{" "}<mark className="bg-[#FFE52C]">Global Launchpad</mark>{" "}for Investment, Startups, Entrepreneurship, and Career Opportunities</h2>
                            <p className="text-[18px] text-justify">
                                We fuel the global expansion of startups into new markets — for
                                entrepreneurs ready to scale and investors seeking high-growth
                                opportunities.
                            </p>
                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/landing/Team.svg"
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
