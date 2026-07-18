import Image from "next/image";
import Row from "../global/Row";

const Story = () => {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-6 px-6 mt-16 md:hidden">
                <h2 className="text-3xl font-bold text-black">
                    Our Story
                </h2>

                <p className="text-[20px] text-justify">
                    Nexa is guided by a team shaped around Hadi Hasanpour, whose multidisciplinary engineering background and analytical expertise established a structured approach to building ventures. With formal training across electrical, civil, and mechanical engineering, combined with experience in structured consulting, systems analysis, and entrepreneurship, this foundation defined Nexa’s direction long before its first venture was launched.
                </p>

                <Image
                    width={1200}
                    height={1200}
                    src="/images/about/IMG_0881.webp"
                    alt="hero"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18">
                        {/* Text */}
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-8 text-[32px] font-bold text-black">Our Story</h2>
                            <p className="text-[24px]">
                                Nexa is guided by a team shaped around Hadi Hasanpour, whose multidisciplinary engineering background and analytical expertise established a structured approach to building ventures. With formal training across electrical, civil, and mechanical engineering, combined with experience in structured consulting, systems analysis, and entrepreneurship, this foundation defined Nexa’s direction long before its first venture was launched.
                            </p>
                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/about/IMG_0881.webp"
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

export default Story;
