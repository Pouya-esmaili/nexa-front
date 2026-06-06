import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const cards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Globally Credible",
    desc: "A G7 nation delivering economic stability and worldwide credibility.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: "Innovation-First",
    desc: "One of the world's most entrepreneurial immigration ecosystems.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Strategic Location",
    desc: "A bridge between U.S. capital flows and European trade corridors.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: "Capital Networks",
    desc: "Access to VCs, angels, incubators, and accelerators.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    title: "Quality of Life",
    desc: "A multicultural consumer base with reach into global markets.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Stage-Aware",
    desc: "Programs supporting seed, growth, and scale-up companies alike.",
  },
];

export default function WhyCanada() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Why Canada
          </h2>
        </Reveal>

        <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80}>
                <div
                  className="p-9 transition-colors duration-250 hover:bg-[#F7F6F9]"
                  style={{
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
                    borderBottom: i < 3 ? "1px solid #E2E2E2" : undefined,
                  }}
                >
                  <div className="w-12 h-12 rounded-[12px] grid place-items-center bg-[#FAF6FF] text-[#8F27FF] mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.015em] mb-2">{c.title}</h3>
                  <p className="text-[14.5px] text-[#929292] leading-[1.6]">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
