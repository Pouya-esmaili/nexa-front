import Row from "../global/Row";
import TimelineImage from "./TimelineImage";
import TimelineItem from "./TimelineItem";

export default function TimelineSection() {
    return (
        <section className="w-full py-24">
            <Row>
                {/* TITLE */}
                <h2 className="text-center text-3xl font-bold mb-24">
                    <span className="bg-yellow-300 px-3 py-1 rounded">
                        NEXA Timeline
                    </span>
                </h2>

                {/* GRID */}
                <div className="mx-auto grid grid-cols-[1fr_auto_1fr] gap-x-18">

                    {/* ===== LAND ACADEMY (2017) ===== */}
                    <div className="text-right flex items-center justify-end">
                        <span className="text-[#8F27FF] text-3xl font-semibold">
                            2017
                        </span>
                    </div>

                    <TimelineImage />

                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg font-semibold">
                            The Spark – Landa Academy is Born
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">
                            Our story began with education. Hadi established Landa Academy in a co-working space in Isfahan to mentor bright undergraduate and graduate students. This initiative created a fertile ground for the innovative ideas that would later become Nexa's first ventures.
                        </p>
                    </div>

                    {/* ===== STARTUPS ===== */}

                    <TimelineItem
                        date="July 2021"
                        title="First Venture – Diaco"
                        description="Diaco was launched to address factory automation challenges by translating technical expertise into operational solutions."
                        side="right"
                        reverse
                    />

                    <TimelineItem
                        date="June 2022"
                        title="Reimagining Education – Vision Raft"
                        description="Vision Raft was created to bring augmented reality into learning, helping children engage with knowledge beyond traditional classroom methods."
                        side="left"
                        reverse
                    />

                    <TimelineItem
                        date="July 2023"
                        title="Learning Without Borders – Landa Trip"
                        description="LandaTrip emerged to redefine education beyond traditional settings, integrating learning with purposeful travel."
                        side="right"
                        reverse
                    />

                    <TimelineItem
                        date="November 2023"
                        title="The Innovation Hub – Diaco Center"
                        description="Diaco Center was launched as a marketplace connecting technology seekers with validated technology providers."
                        side="left"
                        reverse
                    />

                    <TimelineItem
                        date="December 2024"
                        title="Engineering a Healthier Future – PreventiGene"
                        description="PreventiGene was created to apply artificial intelligence and genetic analysis in early breast cancer risk prevention."
                        side="right"
                        reverse
                    />

                    <TimelineItem
                        date="May 2025"
                        title="A Platform for Hope – AutiLab"
                        description="AutiLab was established to enable early autism detection and improvement, combining AI-driven systems with specialist expertise."
                        side="left"
                        reverse
                    />

                    <TimelineItem
                        date="October 2025"
                        title="Protecting Artisans – Landa Craft"
                        description="Preserving craftsmanship using artificial intelligence."
                        side="right"
                        reverse
                    />
                        
                </div>
            </Row>
        </section>
    );
}
