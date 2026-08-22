"use client";

import Image from "next/image";
import Row from "../global/Row";
import { useLang } from "../global/LanguageProvider";



const Hero = () => {
    const { t, lang } = useLang();
    return (
        <div className="w-full">

            {/* Mobile */}
            <div className="flex flex-col gap-5 px-5 mt-8 md:hidden">
                <Image
                    width={800}
                    height={500}
                    src="/images/advisory/IMG_1328 1 (1).webp"
                    alt="Startup hero"
                    className="w-full h-[240px] object-cover rounded-2xl mt-2"
                />
                <h2 className="text-[32px] md:text-[46px] font-extrabold text-black">{t("Let’s Build Beyond Borders", "مسیر جهانی شما از اینجا آغاز می‌شود")}</h2>
                <p className="text-[16px] text-[#929292] leading-[1.68]">
                    {t("Every global breakthrough starts with a single conversation. Whether you are an ambitious founder ready to scale international heights, an investor seeking high-conviction pathways, or a partner aligned with a borderless future, Nexa is your bridge to global influence.", "هر دستاورد جهانی، از یک گفت‌وگوی مؤثر آغاز می‌شود. اگر کارآفرینی هستید که برای ورود به بازارهای بین‌المللی آماده‌اید، سرمایه‌گذاری هستید که به دنبال فرصت‌های رشد آینده‌دار می‌گردد، یا شریکی که به قدرت همکاری‌های جهانی باور دارد، نکسا پلی میان شما و فرصت‌های بین‌المللی خواهد بود.")}
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <Row>
                    <div className="flex items-center gap-18 mt-10">
                        <div className={`w-1/2 flex flex-col justify-between ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <h2 className="my-4 text-[32px] md:text-[46px] font-extrabold text-black">
                                {t("Let’s Build Beyond Borders", "مسیر جهانی شما از اینجا آغاز می‌شود")}
                            </h2>
                            <p className="text-[16px] text-[#929292] leading-[1.68] max-w-[520px] mb-9">
                                {t("Every global breakthrough starts with a single conversation. Whether you are an ambitious founder ready to scale international heights, an investor seeking high-conviction pathways, or a partner aligned with a borderless future, Nexa is your bridge to global influence.", "هر دستاورد جهانی، از یک گفت‌وگوی مؤثر آغاز می‌شود. اگر کارآفرینی هستید که برای ورود به بازارهای بین‌المللی آماده‌اید، سرمایه‌گذاری هستید که به دنبال فرصت‌های رشد آینده‌دار می‌گردد، یا شریکی که به قدرت همکاری‌های جهانی باور دارد، نکسا پلی میان شما و فرصت‌های بین‌المللی خواهد بود.")}
                            </p>
                            

                        </div>

                        <div className="w-1/2">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/advisory/IMG_1328 1 (1).webp"
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
