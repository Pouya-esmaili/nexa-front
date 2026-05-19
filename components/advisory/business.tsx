import Image from "next/image";
import Row from "../global/Row";

const business = () => {
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-6 px-6 mt-10 md:hidden">
                <h2 className="text-3xl font-bold text-black">
                    Business Advisory
                </h2>

                <p className="text-[20px] text-justify">
                    Professional advisory for business growth and investment readiness
                </p>

                {/* Purple line */}
                <div className="hidden md:block absolute left-0 top-10 h-14 w-[4px] bg-[#8F27FF] rounded-2xl" />

                {/* Bullet items */}
                <div className="flex flex-col gap-4 mt-4">
                    {[
                        "Shaping and scaling your business",
                        "Leveraging our connections growth",
                        "Acquiring high-potential startups",
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

                <Image
                    width={1200}
                    height={1200}
                    src="/images/advisory/IMG_1328 1 (1).svg"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-10">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-4  text-[32px] font-bold text-black">
                                Business Advisory
                            </h2>

                            <p className="text-[24px]">
                                Professional advisory for business growth and investment readiness
                            </p>
                            <div className="w-70 h-[3px] bg-[#929292] mb-4 mt-4" />


                            {/* Bullet items */}
                            <div className="flex flex-col gap-5">
                                {[
                                    "Shaping and scaling your business",
                                    "Leveraging our connections growth",
                                    "Acquiring high-potential startups",
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
                                src="/images/advisory/IMG_1328 1 (1).svg"
                                alt="hero"
                                className="w-full h-98 object-cover"
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default business;