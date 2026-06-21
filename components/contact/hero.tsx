import Image from "next/image";
import Row from "../global/Row";
import { getTranslations } from "next-intl/server";



const Hero = async () => {
    const t = await getTranslations("contact.hero");
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-5 px-5 mt-8 md:hidden">
                <Image
                    width={800}
                    height={500}
                    src="/images/advisory/IMG_1328 1 (1).svg"
                    alt="Startup hero"
                    className="w-full h-[240px] object-cover rounded-2xl mt-2"
                />
                <h2 className="text-[32px] md:text-[46px] font-extrabold text-black">{t("title")}</h2>
                <p className="text-[16px] text-[#929292] leading-[1.68]">
                    {t("description")}
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-10">
                        <div className="w-1/2 text-left flex flex-col justify-between">
                            <h2 className="my-4 text-[32px] md:text-[46px] font-extrabold text-black">
                                {t("title")}
                            </h2>
                            <p className="text-[16px] text-[#929292] leading-[1.68] max-w-[520px] mb-9">
                                {t("description")}
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
