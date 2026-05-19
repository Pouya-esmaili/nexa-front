import Image from "next/image";
import Row from "../global/Row";

const invest = () => {
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <h2 className="text-3xl font-bold text-black">
                    Investment
                </h2>

                <p className="text-[18px] font-medium ">
                    Invest With Confidence, Grow with Vision.
                </p>

                <hr className="hidden h-px w-full border-0 bg-[#D9D9D9]" />

                {/* Image */}
                <Image
                    width={1200}
                    height={1200}
                    src="/images/investment/IMG_1328 1.png"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />

                {/* Bullet items */}
                <div className="flex flex-col gap-4 mt-4">
                    {[
                        "Startup Investment Advisory",
                        "Project Capital Structuring",
                        "Strategic Growth & Market Expansion",
                        "Legal Documentation Preparing",
                    ].map((text, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Image
                                src="/images/Entrepreneurship/donee.svg"
                                alt="done"
                                width={20}
                                height={20}
                                className="mt-1"
                            />
                            <p className="text-[18px]">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-10">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-4 text-[32px] font-bold text-black">
                                Investment
                            </h2>

                            <p className="text-[24px]">
                                Invest with Confidence, Grow with Vision.
                            </p>

                            <div className="w-70 h-[3px] bg-[#929292] mb-4 mt-4" />

                            {/* Bullet items */}
                            <div className="flex flex-col gap-5">
                                {[
                                    "Startup Investment Advisory",
                                    "Project Capital Structuring",
                                    "Strategic Growth & Market Expansion",
                                    "Legal Documentation Preparing",
                                ].map((text, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Image
                                            src="/images/Entrepreneurship/donee.svg"
                                            alt="done"
                                            width={22}
                                            height={22}
                                            className="mt-1"
                                        />
                                        <p className="text-[20px]">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/investment/IMG_1328 1.png"
                                alt="hero"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default invest;