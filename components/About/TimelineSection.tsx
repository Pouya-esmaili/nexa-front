import Row from "../global/Row";
import TimelineImage from "./TimelineImage";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    date: "2017",
    title: "The Spark – Landa Academy is Born",
    description:
      "Our story began with education. Hadi established Landa Academy in a co-working space in Isfahan to mentor bright undergraduate and graduate students. This initiative created a fertile ground for the innovative ideas that would later become Nexa's first ventures.",
  },
  {
    date: "July 2021",
    title: "First Venture – Diaco",
    description:
      "Diaco was launched to address factory automation challenges by translating technical expertise into operational solutions.",
  },
  {
    date: "June 2022",
    title: "Reimagining Education – Vision Raft",
    description:
      "Vision Raft was created to bring augmented reality into learning, helping children engage with knowledge beyond traditional classroom methods.",
  },
  {
    date: "July 2023",
    title: "Learning Without Borders – Landa Trip",
    description:
      "LandaTrip emerged to redefine education beyond traditional settings, integrating learning with purposeful travel.",
  },
  {
    date: "November 2023",
    title: "The Innovation Hub – Diaco Center",
    description:
      "Diaco Center was launched as a marketplace connecting technology seekers with validated technology providers.",
  },
  {
    date: "December 2024",
    title: "Engineering a Healthier Future – PreventiGene",
    description:
      "PreventiGene was created to apply artificial intelligence and genetic analysis in early breast cancer risk prevention.",
  },
  {
    date: "May 2025",
    title: "A Platform for Hope – AutiLab",
    description:
      "AutiLab was established to enable early autism detection and improvement, combining AI-driven systems with specialist expertise.",
  },
  {
    date: "October 2025",
    title: "Protecting Artisans – Landa Craft",
    description: "Preserving craftsmanship using artificial intelligence.",
  },
];

export default function TimelineSection() {
  return (
    <section className="w-full py-16">
      <Row>
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-16">
          <span className="bg-yellow-300 px-3 py-1 rounded">
            NEXA Timeline
          </span>
        </h2>

        {/* Desktop 3-column grid */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-18 mx-auto">

          {/* Row 1 — Landa Academy */}
          <div className="text-right flex items-center justify-end">
            <span className="text-[#8F27FF] text-3xl font-semibold">2017</span>
          </div>

          <TimelineImage />

          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold">
              The Spark &#8211; Landa Academy is Born
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              Our story began with education. Hadi established Landa Academy in
              a co-working space in Isfahan to mentor bright undergraduate and
              graduate students. This initiative created a fertile ground for
              the innovative ideas that would later become Nexa&apos;s first ventures.
            </p>
          </div>

          {/* Remaining items */}
          <TimelineItem date="July 2021"     title="First Venture – Diaco"                        description="Diaco was launched to address factory automation challenges by translating technical expertise into operational solutions."                                                                         side="right" reverse />
          <TimelineItem date="June 2022"     title="Reimagining Education – Vision Raft"           description="Vision Raft was created to bring augmented reality into learning, helping children engage with knowledge beyond traditional classroom methods."                                                   side="left"  reverse />
          <TimelineItem date="July 2023"     title="Learning Without Borders – Landa Trip"         description="LandaTrip emerged to redefine education beyond traditional settings, integrating learning with purposeful travel."                                                                              side="right" reverse />
          <TimelineItem date="November 2023" title="The Innovation Hub – Diaco Center"             description="Diaco Center was launched as a marketplace connecting technology seekers with validated technology providers."                                                                                   side="left"  reverse />
          <TimelineItem date="December 2024" title="Engineering a Healthier Future – PreventiGene" description="PreventiGene was created to apply artificial intelligence and genetic analysis in early breast cancer risk prevention."                                                                        side="right" reverse />
          <TimelineItem date="May 2025"      title="A Platform for Hope – AutiLab"                 description="AutiLab was established to enable early autism detection and improvement, combining AI-driven systems with specialist expertise."                                                               side="left"  reverse />
          <TimelineItem date="October 2025"  title="Protecting Artisans – Landa Craft"             description="Preserving craftsmanship using artificial intelligence."                                                                                                                                       side="right" reverse />

        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">

          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#8F27FF]/30" />

          {timelineData.map((item) => (
            <div key={item.title} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#8F27FF] border-2 border-white shadow-sm" />
              <span className="text-[#8F27FF] font-semibold text-base">{item.date}</span>
              <h3 className="font-semibold text-base mt-1">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.description}</p>
            </div>
          ))}

        </div>
      </Row>
    </section>
  );
}
