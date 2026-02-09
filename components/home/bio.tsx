import Image from "next/image";
import Row from "../global/Row";

export default function Bio() {
    return (
        <section className="w-full">
            <div className="hidden sm:block">
                <Row className="flex flex-col md:flex-row gap-10 py-16 justify-between">
                    <div className="relative w-full md:w-1/2">
                        <Image
                            src="/images/landing/teammate.svg"
                            alt="team"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto object-cover"
                        />

                        <div
                            className="absolute bottom-6 left-1/2 translate-x-1/4 text-white p-8 rounded-2xl shadow-2xl w-[120%]"
                            style={{ backgroundColor: "#F3F5F680", boxShadow:"#00000040" }}
                        >
                            <ul className="space-y-2 text-black">
                                <p className="mb-12 text-md font-bold">
                                    Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                                </p>
                                <li className="text-sm font-semibold">• Direct Access to Top Accelerators and Research Ecosystems</li>
                                <li className="text-sm font-semibold">• Cross-border Co-founder and Elite Talent Pools</li>
                                <li className="text-sm font-semibold">• Global Investor Circles and Strategic Growth Capital</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-4xl font-bold">
                            Who <span className="bg-yellow-300 px-1">We</span> Are !
                        </h2>

                        <p className="leading-relaxed text-black text-sm md:text-base">
                            NEXA is a global hub where bold founders and bright ideas come to grow. We unite industry expertise with the creativity of young, global-minded team — fusing the fearless creativity of next-generation talent with the strategic precision of industry leaders to turn early concepts into world-ready companies. With strong roots in emerging markets and powerful networks across, we give entrepreneurs the capital, mentorship, and global access they need to thrive. We don’t just invest — we ignite ecosystems, accelerate growth, and help visionaries build meaningful impact. This is where ambition becomes reality, and where the next generation of global leaders begins.
                        </p>
                    </div>
                </Row>
            </div>

            <div className="block sm:hidden py-8 px-4">

                <div className="w-full mb-4">
                    <Image
                        src="/images/landing/teammate.svg"
                        alt="team"
                        width={600}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>

                <div className="space-y-4 mb-4">
                    <h2 className="text-2xl font-bold">
                        Who <span className="bg-yellow-300 px-1">We</span> Are !
                    </h2>

                    <p className="leading-relaxed text-black text-sm">
                        NEXA is a global hub where bold founders and bright ideas come to grow. We unite industry expertise with the creativity of young, global-minded team — fusing the fearless creativity of next-generation talent with the strategic precision of industry leaders to turn early concepts into world-ready companies. With strong roots in emerging markets and powerful networks across, we give entrepreneurs the capital, mentorship, and global access they need to thrive. We don’t just invest — we ignite ecosystems, accelerate growth, and help visionaries build meaningful impact. This is where ambition becomes reality, and where the next generation of global leaders begins.
                    </p>
                </div>

            </div>
            <div
                className="text-white md:hidden p-6 mb-18 w-full"
                style={{ backgroundColor: "#F3F5F680" }}
            >
                <ul className="space-y-2 text-sm">
                    <p className="mb-2 text-md font-bold">
                        Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                    </p>
                    <li className="text-sm font-semibold">• Direct Access to Top Accelerators and Research Ecosystems</li>
                    <li className="text-sm font-semibold">• Cross-border Co-founder and Elite Talent Pools</li>
                    <li className="text-sm font-semibold">• Global Investor Circles and Strategic Growth Capital</li>
                </ul>
            </div>
        </section>
    );
}
