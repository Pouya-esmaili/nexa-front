import Image from "next/image";
import Row from "../global/Row";
import Highlight from "../ui/Highlight";

export default function Bio() {
    return (
        <section className="w-full">

            {/* DESKTOP */}
            <div className="hidden sm:block">
                <Row className="py-16">
                    {/* wrapper نسبی برای position باکس */}
                    <div className="relative flex flex-col md:flex-row gap-10 items-start pb-10">

                        {/* چپ: عکس */}
                        <div className="w-full md:w-[45%] shrink-0">
                            <Image
                                src="/images/landing/teammate.svg"
                                alt="team"
                                width={600}
                                height={500}
                                className="rounded-2xl w-full h-auto object-cover"
                            />
                        </div>

                        {/* راست: عنوان + متن */}
                        <div className="flex-1 flex flex-col gap-6">

                            <h2 className="text-3xl lg:text-4xl font-bold">
                                Who <Highlight>We</Highlight> Are !
                            </h2>

                            <p className="leading-relaxed font-normal text-black text-base lg:text-lg">
                                NEXA is a global hub where bold founders and bright ideas come to grow.
                                We unite industry expertise with the creativity of young, global-minded team —
                                fusing the fearless creativity of next-generation talent with the strategic precision
                                of industry leaders to turn early concepts into world-ready companies.
                                With strong roots in emerging markets and powerful networks across, we give entrepreneurs
                                the capital, mentorship, and global access they need to thrive.
                                We don't just invest — we ignite ecosystems, accelerate growth, and help visionaries
                                build meaningful impact. This is where ambition becomes reality, and where the next
                                generation of global leaders begins.
                            </p>

                            {/* spacer — جای باکس را در ستون راست نگه می‌داره */}
                            <div className="h-[120px]" />
                        </div>

                        {/* باکس absolute — از روی عکس شروع، تا انتهای ستون راست */}
                        <div
                            className="absolute bottom-0 right-0 rounded-2xl p-5 lg:p-6"
                            style={{
                                left: "20%",
                                marginBottom: "5%",
                                backgroundColor: "#F3F5F6",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                            }}
                        >
                            <p className="text-sm lg:text-base font-bold text-black mb-3">
                                Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                            </p>
                            <ul className="space-y-2 text-black">
                                <li className="text-sm lg:text-base font-medium">
                                    • Direct Access to Top Accelerators and Research Ecosystems
                                </li>
                                <li className="text-sm lg:text-base font-medium">
                                    • Cross-border Co-founder and Elite Talent Pools
                                </li>
                                <li className="text-sm lg:text-base font-medium">
                                    • Global Investor Circles and Strategic Growth Capital
                                </li>
                            </ul>
                        </div>

                    </div>
                </Row>
             </div>

            {/* MOBILE */}
            <div className="block sm:hidden py-8 px-4">

                <div className="w-full mb-6">
                    <Image
                        src="/images/landing/teammate.svg"
                        alt="team"
                        width={600}
                        height={400}
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                <div className="space-y-4 mb-6">
                    <h2 className="text-3xl font-bold">
                        Who <Highlight>We</Highlight> Are !
                    </h2>
                    <p className="leading-relaxed text-black text-base font-normal">
                        NEXA is a global hub where bold founders and bright ideas come to grow.
                        We unite industry expertise with the creativity of young, global-minded team —
                        fusing the fearless creativity of next-generation talent with the strategic precision
                        of industry leaders to turn early concepts into world-ready companies.
                        With strong roots in emerging markets and powerful networks across, we give entrepreneurs
                        the capital, mentorship, and global access they need to thrive.
                        We don't just invest — we ignite ecosystems, accelerate growth, and help visionaries
                        build meaningful impact. This is where ambition becomes reality, and where the next
                        generation of global leaders begins.
                    </p>
                </div>

                <div
                    className="rounded-2xl p-5"
                    style={{ backgroundColor: "#F3F5F6", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                    <p className="text-base font-bold text-black mb-4">
                        Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                    </p>
                    <ul className="space-y-3 text-black">
                        <li className="text-sm font-medium">• Direct Access to Top Accelerators and Research Ecosystems</li>
                        <li className="text-sm font-medium">• Cross-border Co-founder and Elite Talent Pools</li>
                        <li className="text-sm font-medium">• Global Investor Circles and Strategic Growth Capital</li>
                    </ul>
                </div>

            </div>

        </section>
    );
}
