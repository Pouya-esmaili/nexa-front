import Image from "next/image";
import Row from "../global/Row";
import Highlight from "../ui/Highlight";

export default function Bio() {
    return (
        <section className="w-full">

            {/* DESKTOP */}
            <div className="hidden sm:block">
                <Row className="flex flex-col md:flex-row gap-10 py-16 justify-between">

                    {/* Image + floating card */}
                    <div className="relative w-full md:w-1/2">

                        <Image
                            src="/images/landing/teammate.svg"
                            alt="team"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto object-cover"
                        />

                        <div
                            className="absolute bottom-6 left-0 right-0 mx-4 p-5 md:p-8 rounded-2xl shadow-2xl"
                            style={{
                                backgroundColor: "#F3F5F680",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                            }}
                        >

                            <p className="mb-6 text-lg font-bold text-black">
                                Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                            </p>

                            <ul className="space-y-3 text-black">

                                <li className="text-md font-medium">
                                    • Direct Access to Top Accelerators and Research Ecosystems
                                </li>

                                <li className="text-md font-semibold">
                                    • Cross-border Co-founder and Elite Talent Pools
                                </li>

                                <li className="text-md font-semibold">
                                    • Global Investor Circles and Strategic Growth Capital
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 space-y-4">

                        <h2 className="text-4xl font-bold">
                            Who <Highlight>We</Highlight> Are !
                        </h2>

                        <p className="leading-relaxed font-normal text-black text-lg">
                            NEXA is a global hub where bold founders and bright ideas come to grow.
                            We unite industry expertise with the creativity of young, global-minded team —
                            fusing the fearless creativity of next-generation talent with the strategic precision
                            of industry leaders to turn early concepts into world-ready companies.

                            With strong roots in emerging markets and powerful networks across, we give entrepreneurs
                            the capital, mentorship, and global access they need to thrive.

                            We don’t just invest — we ignite ecosystems, accelerate growth, and help visionaries
                            build meaningful impact. This is where ambition becomes reality, and where the next
                            generation of global leaders begins.
                        </p>

                    </div>

                </Row>
            </div>


            {/* MOBILE */}
            <div className="block sm:hidden py-8 px-4">

                {/* Image */}
                <div className="w-full mb-6">
                    <Image
                        src="/images/landing/teammate.svg"
                        alt="team"
                        width={600}
                        height={400}
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>


                {/* Text */}
                <div className="space-y-4 mb-6">

                    <h2 className="text-3xl font-bold text-start">
                        Who <Highlight>We</Highlight> Are !
                    </h2>

                    <p className="leading-relaxed text-black text-md font-normal text-start">
                        NEXA is a global hub where bold founders and bright ideas come to grow. We unite industry expertise with the creativity of young, global-minded team — fusing the fearless creativity of next-generation talent with the strategic precision of industry leaders to turn early concepts into world-ready companies. With strong roots in emerging markets and powerful networks across, we give entrepreneurs the capital, mentorship, and global access they need to thrive. We don’t just invest — we ignite ecosystems, accelerate growth, and help visionaries build meaningful impact. This is where ambition becomes reality, and where the next generation of global leaders begins.
                        nies.
                    </p>

                </div>


                {/* MOBILE NETWORK BOXES */}
                <div
                    className="rounded-2xl"
                >

                    <p className="mb-4 text-[18px] font-bold text-center text-black">
                        Through exclusive networks in Europe, Canada, and the Middle East, we deliver:
                    </p>

                    <div className="space-y-3">

                        <div className="border border-[#8F27FF] rounded-xl p-4 mb-4 text-center bg-white">

                            <p className="text-md font-medium text-black">
                                . Direct Access to Top Accelerators and Research Ecosystems
                            </p>

                        </div>


                        <div className="border border-[#8F27FF] rounded-xl p-4 mb-4 text-center bg-white">

                            <p className="text-md font-semibold text-black">
                                . Cross-border Co-founder and Elite Talent Pools
                            </p>

                        </div>


                        <div className="border border-[#8F27FF] rounded-xl p-4 text-center bg-white">

                            <p className="text-md font-semibold text-black">
                                . Global Investor Circles and Strategic Growth Capital
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
