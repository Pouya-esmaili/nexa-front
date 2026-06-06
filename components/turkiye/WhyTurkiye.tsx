import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8F27FF]">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: "Tri-continental access",
    desc: "Direct corridor between Europe, the Gulf, Central Asia and North Africa.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8F27FF]">
        <path d="M4 21V8l8-4 8 4v13" /><path d="M4 21h16M9 21v-6h6v6M10 11h4M10 14h4" />
      </svg>
    ),
    title: "Real estate upside",
    desc: "Competitive acquisition costs powered by a dynamic tourism economy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8F27FF]">
        <circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" />
        <path d="M8 6h8M8 18h8M6 8v8M18 8v8" />
      </svg>
    ),
    title: "World-class infrastructure",
    desc: "Modern airports, deep-water ports and high-speed rail across major cities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8F27FF]">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Tier-1 passport",
    desc: "Internationally recognized CBI framework — from residency to passport.",
  },
];

export default function WhyTurkiye() {
  return (
    <section className="py-16 md:py-20 bg-white" id="why">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Why Türkiye?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} variant="up" delay={i * 80}>
              <article
                className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8F27FF]" style={{ background: "#FAF6FF" }}>
                  {c.icon}
                </div>
                <h3 className="font-semibold text-[16px] text-black">{c.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
