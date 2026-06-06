import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    title: "Accelerated Settlement",
    desc: "Apply for Indefinite Leave to Remain (ILR) after just 3 years — significantly faster than the standard 5-year route required by most other UK visas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "No Minimum Capital Floor",
    desc: "The previous statutory £50,000 investment requirement has been removed. You only need to demonstrate sufficient funds to execute your specific business plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Flexible Professional Rights",
    desc: "Legally permitted to take secondary employment alongside your startup — provided the role is skilled at RQF Level 3 or higher (equivalent to A-levels or above).",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4" />
      </svg>
    ),
  },
  {
    title: "Complete Family Unity",
    desc: "Spouse or registered partner receives full UK work and business rights. Minor children can enroll unconditionally in the British education system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function KeyBenefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            Key Benefits &amp; Program Strengths
          </h2>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-4 rounded-[20px] overflow-hidden"
          style={{ border: "1px solid #E2E2E2" }}
        >
          {cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div
                className="p-8 md:p-9 h-full transition-colors duration-300 hover:bg-[#F7F6F9]"
                style={{
                  borderRight: i < cards.length - 1 ? "1px solid #E2E2E2" : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#FAF6FF] text-[#8F27FF] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] mb-2.5">{c.title}</h3>
                <p className="text-[14px] text-[#929292] leading-[1.6]">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
