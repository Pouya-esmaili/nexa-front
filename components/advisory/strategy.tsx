import Image from "next/image";
import Row from "../global/Row";

const Strategy = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <Image
                    width={1200}
                    height={1200}
                    src="/images/advisory/Precision.webp"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
                <h2 className="text-3xl font-bold text-[#8F27FF]">
                    Precision in Every Document
                </h2>

                <p className="text-[20px] text-justify">
                    Every document we deliver is crafted with precision to help you and your clients see the full picture and make informed decisions. We start by creating professional business documents that clearly convey the story of your deal, while also assisting with intellectual property and patent registration to protect your innovations. Along the way, you benefit from access to our international network of experts, gaining insights and connections that elevate your strategy.  

                </p>

            </div>

            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-18">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-8 text-[26px] font-bold text-[#8F27FF]">Precision in Every Document</h2>
                            <p className="text-[20px] text-justify">
                                  Every document we deliver is crafted with precision to help you and your clients see the full picture and make informed decisions. We start by creating professional business documents that clearly convey the story of your deal, while also assisting with intellectual property and patent registration to protect your innovations. Along the way, you benefit from access to our international network of experts, gaining insights and connections that elevate your strategy.
                            </p>
                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/advisory/Precision.webp"
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

export default Strategy;
