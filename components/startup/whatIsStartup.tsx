import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Row from "../global/Row";

const Program = () => {
    const items = [
        "Team-Driven Vision And Collaborative Execution",
        "Innovative Solutions For Real Market Needs",
        "Sustainable Revenue And Wealth Creation Models",
        "Scalable Structure With Global Growth Potential",
    ];

    return (
        <section className="w-full py-14 md:py-20">
            <Row>
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">
                    What is the Startup?
                </h2>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-14">

                    {/* Image */}
                    <div className="w-1/2">
                        <Image
                            width={1400}
                            height={1000}
                            src="/images/Entrepreneurship/programs.svg"
                            alt="startup"
                            className="w-full object-cover rounded-[32px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-1/2">
                        <h3 className="text-3xl font-bold text-black leading-snug mb-6">
                            Built To Innovate. Designed To Scale.
                        </h3>

                        <p className="text-[17px] leading-8 text-[#333] mb-8">
                            A Startup Is A Team-Driven Venture Focused On Solving
                            Real Market Needs Through Innovation and Technology,
                            While Building Sustainable Revenue Models Designed For
                            Scalable, Long-Term Growth.
                        </p>

                        {/* Items */}
                        <div className="flex flex-col gap-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2
                                        size={32}
                                        className="text-white fill-[#FFE600] mt-1"
                                    />

                                    <p className="text-[16px] text-[#222]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col md:hidden">

                    {/* Image */}
                    <div className="mb-6">
                        <Image
                            width={1200}
                            height={1000}
                            src="/images/Entrepreneurship/programs.svg"
                            alt="startup"
                            className="w-full object-cover rounded-[24px]"
                        />
                    </div>

                    {/* Paragraph */}
                    <h3 className="text-2xl font-bold text-black leading-snug mb-4">
                        Built To Innovate. Designed To Scale.
                    </h3>

                    <p className="text-[16px] leading-7 text-[#333] mb-6">
                        A Startup Is A Team-Driven Venture Focused On Solving
                        Real Market Needs Through Innovation and Technology,
                        While Building Sustainable Revenue Models Designed For
                        Scalable, Long-Term Growth.
                    </p>

                    {/* Items */}
                    <div className="flex flex-col gap-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2
                                    size={20}
                                    className="text-white fill-[#FFE600] mt-1"
                                />

                                <p className="text-[15px] text-[#222] leading-6">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Row>
        </section>
    );
};

export default Program;