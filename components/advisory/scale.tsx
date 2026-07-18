import Image from "next/image";
import Row from "../global/Row";

const Strategy = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <Image
                    width={1200}
                    height={1200}
                    src="/images/advisory/Growth.webp"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
                <h2 className="text-3xl font-bold text-[#8F27FF]">
                    Growth That Is Measurable and Sustainable
                </h2>

                <p className="text-[20px] text-justify">
                    To ensure your growth is measurable and sustainable, we provide fundraising support and KPI system development, aligning every step with your business goals. This is more than just completing tasks—it’s about giving you clarity, strategic guidance, and the right resources to move forward confidently. Whether you’re preparing for a negotiation or setting the stage for a successful acquisition, our approach transforms complex information into actionable steps that drive real results.  

                </p>

            </div>

            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-18">
                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/advisory/Growth.webp"
                                alt="hero"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-8 text-[26px] font-bold text-[#8F27FF]">Growth That Is Measurable and Sustainable</h2>
                            <p className="text-[20px] text-justify">
                                To ensure your growth is measurable and sustainable, we provide fundraising support and KPI system development, aligning every step with your business goals. This is more than just completing tasks—it’s about giving you clarity, strategic guidance, and the right resources to move forward confidently. Whether you’re preparing for a negotiation or setting the stage for a successful acquisition, our approach transforms complex information into actionable steps that drive real results.  
                            </p>
                        </div>


                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Strategy;
