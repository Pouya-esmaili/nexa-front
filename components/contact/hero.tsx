import Image from "next/image";
import Row from "../global/Row";



const Hero = () => {
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-5 px-5 mt-8 md:hidden">
                <h2 className="text-2xl font-bold text-black">Let’s Build Beyond Borders</h2>
                <p className="text-md">
                    Every global breakthrough starts with a single conversation. Whether you are an ambitious founder ready to scale international heights, an investor seeking high-conviction pathways, or a partner aligned with a borderless future, Nexa is your bridge to global influence.
                </p>

                <Image
                    width={800}
                    height={500}
                    src="/images/advisory/IMG_1328 1 (1).svg"
                    alt="Startup hero"
                    className="w-full h-auto object-contain rounded-2xl mt-2"
                />
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-10">
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-4 text-[32px] font-bold text-black">
                                Let’s Build Beyond Borders
                            </h2>
                            <p className="text-[24px]">
                                Every global breakthrough starts with a single conversation. Whether you are an ambitious founder ready to scale international heights, an investor seeking high-conviction pathways, or a partner aligned with a borderless future, Nexa is your bridge to global influence.
                            </p>
                            

                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/advisory/IMG_1328 1 (1).svg"
                                alt="Startup hero"
                                className="w-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Hero;
