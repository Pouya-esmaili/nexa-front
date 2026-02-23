import Image from "next/image";
import Row from "../global/Row";

const program = () => {
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <h2 className="text-3xl font-bold text-black">
                    What is an Entrepreneurship program?
                </h2>

                <p className="text-[20px] text-justify">
                    Entrepreneurship programs help founders and business owners access the Global markets, scale their ideas, and build sustainable businesses through clear, supportive pathways.
                </p>

                {/* Purple line */}
                <div className="w-24 h-1 bg-[#8F27FF]" />

                {/* Bullet items */}
                {/* <div className="flex flex-col gap-4 mt-4">
                    {[
                        "Market entry strategy and localization",
                        "Business development and partnerships",
                        "Investor-ready structure and scaling",
                    ].map((text, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Image
                                src="/images/Entrepreneurship/done.svg"
                                alt="done"
                                width={20}
                                height={20}
                                className="mt-1"
                            />
                            <p className="text-[18px] text-justify">{text}</p>
                        </div>
                    ))}
                </div> */}

                <Image
                    width={1200}
                    height={1200}
                    src="/images/Entrepreneurship/programs.svg"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 my-20">
                        {/* Image */}
                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/Entrepreneurship/programs.svg"
                                alt="hero"
                                className="w-full h-96 object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="text-3xl font-bold text-black">
                                What is an Entrepreneurship program?
                            </h2>
                            <div className="w-68 h-[3px] bg-[#8F27FF] mb-4 mt-8" />
                            <p className="text-lg">
                                Entrepreneurship programs help founders and business owners access the Global markets, scale their ideas, and build sustainable businesses through clear, supportive pathways.
                            </p>
                        </div>
                    </div>
                </Row>
            </div>


        </div>
    );
};

export default program;
