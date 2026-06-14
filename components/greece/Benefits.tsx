import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";
import type { ReactNode } from "react";

const cards: { icon: ReactNode; title: string; desc: ReactNode }[] = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>,
    title: "Zero Physical Stay Required",
    desc: "Not a single day in Greece is legally required to secure, maintain, or infinitely renew your permanent residency — investment continuity is the only condition.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "True Three-Generation Coverage",
    desc: <>One investment covers you, your spouse, all unmarried children up to age 21 (extendable to 24), and the <strong>biological parents of both spouses</strong> — no dependency proof required.</>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Immediate Permanent Status",
    desc: <>Greece issues a <strong>permanent residence card</strong> valid for 5 years, infinitely renewable — not a temporary visa that escalates to permanent status over time.</>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: "Schengen Zone Integration",
    desc: <>Visa-free travel throughout all <strong>29 Schengen countries</strong> for up to 90 days per 180-day window — across Europe, business and personal.</>,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5"/></svg>,
    title: "Zero Language Prerequisites",
    desc: "No Greek language test is required to secure, maintain, or infinitely renew your 5-year permanent residency permit — ever.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Corporate Ownership Eligible",
    desc: <>Investment can be made via a Greek or EU-registered corporate entity, provided the applicant owns <strong>100% of shares</strong> with full voting rights.</>,
  },
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            Program Advantages & Strategic Benefits
          </h2>
        </Reveal>

        <div className="rounded-[20px] overflow-hidden border border-[#E2E2E2]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80}>
                <div
                  className="p-9 transition-colors duration-200 hover:bg-[#F7F6F9] h-full"
                  style={{
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid #E2E2E2" : undefined,
                    borderBottom: i < 3 ? "1px solid #E2E2E2" : undefined,
                  }}
                >
                  <div className="w-12 h-12 rounded-[12px] grid place-items-center bg-[#FAF6FF] text-[#8F27FF] mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] mb-2">{c.title}</h3>
                  <p className="text-[13.5px] text-[#929292] leading-[1.6]">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
