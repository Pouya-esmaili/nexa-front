import Image from "next/image";
import Link from "next/link";
import Row from "../global/Row";
import Highlight from "../ui/Highlight";

const Team = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col items-center gap-10 py-10 px-6 md:hidden">
                <div className="w-full">
                    <Image
                        width={1500}
                        height={1500}
                        src="/images/landing/behind.svg"
                        alt="team"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full flex flex-col justify-between text-left">
                    <h2 className="my-8 text-2xl font-bold text-black">
                        Behind the <Highlight>Nexa</Highlight>
                    </h2>

                    <p className="text-justify text-[18px] text-black">
                        NEXA is an international team with 10+ years of hands-on experience in launching and scaling businesses globally. Our expertise spans Global Marketing Strategy, Product Development, Advanced R&D, Branding & Graphic Design, UI/UX Design, Content Strategy, and Go-to-Market Execution, with a strong focus on execution.
                    </p>
                    <br />
                    <p className='text-justify text-[18px] text-black'>
                        We deliver investment-ready strategies through close collaboration with international consultants and legal experts, helping founders turn early-stage ideas into scalable, market-ready companies.
                    </p>

                    <Link
                        href="/our-team"
                        className="mt-7 h-12 w-46 border border-[#8F27FF] text-medium font-medium text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white flex items-start justify-start rounded-3xl px-6 py-3 text-base transition-colors duration-300"
                    >
                        Meet Our Team →
                    </Link>
                </div>
            </div>

            <div className="hidden md:block mt-10">
                <Row>
                    <div className="flex flex-row items-center gap-18">
                        {/* Text */}
                        <div className="w-1/2 flex flex-col justify-between text-left">
                            <h2 className="my-8 text-3xl font-bold text-black">
                                Behind the <Highlight>Nexa</Highlight>
                            </h2>

                            <p className="text-[20px] text-black">
                                NEXA is an international team with 10+ years of hands-on experience in launching and scaling businesses globally. Our expertise spans Global Marketing Strategy, Product Development, Advanced R&D, Branding & Graphic Design, UI/UX Design, Content Strategy, and Go-to-Market Execution, with a strong focus on execution.
                            </p>
                            <br />
                            <p className='text-[20px] text-black'>
                                We deliver investment-ready strategies through close collaboration with international consultants and legal experts, helping founders turn early-stage ideas into scalable, market-ready companies.
                            </p>

                            <Link
                                href="/our-team"
                                className="mt-7 h-12 w-max border border-[#8F27FF] font-medium text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white flex items-center justify-center rounded-3xl px-6 py-3 text-base transition-colors duration-300"
                            >
                                Meet Our Team →
                            </Link>
                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/landing/behind.svg"
                                alt="team"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </Row>
            </div>

        </div>
    );
};

export default Team;
