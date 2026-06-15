import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const routes = [
  "Financial Instruments — from €1M (Bonds, Funds, Equity, Deposits)",
  "Enterprise Project — no capital floor, merit-based evaluation",
];

export default function NoPropertyCTA() {
  return (
    <section className="py-20" style={{ background: "#F7F6F9", borderTop: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div
            className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] rounded-[24px] overflow-hidden"
            style={{ border: "1.5px solid #E2E2E2" }}
          >
            {/* Left — black */}
            <div className="bg-black px-7 md:px-12 py-10 md:py-[52px] flex flex-col gap-5">
              <div
                className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.1em] text-white px-3.5 py-1.5 rounded-full"
                style={{ background: "#DC2626" }}
              >
                ✕ Real Estate Route Closed
              </div>
              <h2 className="text-[24px] md:text-[30px] font-bold text-white leading-[1.15] tracking-[-0.03em]">
                Property is out.
                <br />
                <em className="not-italic text-[#8F27FF]">Capital and enterprise</em> are in.
              </h2>
              <p className="text-[14px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Organic Law 1/2025 permanently closed the €500K property route. The two remaining pathways are
                structurally stronger for serious investors.
              </p>
              <div className="flex flex-col gap-2.5">
                {routes.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-[14px] font-semibold text-white px-4 py-3 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-[#8F27FF] font-bold flex-shrink-0">→</span>
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — primary-soft */}
            <div
              className="px-7 md:px-11 py-10 md:py-[52px] flex flex-col gap-5 justify-center"
              style={{ background: "#FAF6FF", borderLeft: "1px solid rgba(143,39,255,0.18)" }}
            >
              <div
                className="font-black text-[#8F27FF] leading-[0.9] tabular-nums"
                style={{ fontSize: "72px", letterSpacing: "-0.06em" }}
              >
                5 yr
              </div>
              <div className="text-[15px] font-semibold text-black mt-2">
                Capital lock-in until Permanent Residency
              </div>
              <p className="text-[13px] text-[#929292] leading-[1.55] m-0">
                At year 5, your legal status permanently uncouples from the investment — you can liquidate freely.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 self-start mt-2 px-6 py-3.5 bg-[#8F27FF] text-white font-bold rounded-full text-[14px] transition-all hover:-translate-y-0.5 sm:self-stretch sm:justify-center"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}
              >
                Explore My Options →
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
