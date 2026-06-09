import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const rows = [
  { label: "1 Person (Main Applicant)", amount: "$15,263" },
  { label: "2 People", sub: "Applicant + Spouse", amount: "$19,001" },
  { label: "3 People", amount: "$23,360" },
  { label: "4 People", amount: "$28,362" },
  { label: "5 People", amount: "$32,168" },
  { label: "6 People", amount: "$36,280" },
  { label: "Each Additional Member", sub: "Dynamic scaling rule", amount: "+$4,112" },
];

export default function Financials() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white mb-14">
            Settlement Funds & Personal Maintenance
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 relative z-10">

            {/* Left hero card */}
            <div className="rounded-[20px] p-10 flex flex-col gap-5"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
              <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full text-[#FFE600]"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)" }}>
                Cannot Be Borrowed
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-none text-white">$15.2K</div>
              <p className="text-[14px] text-[#B5B5BA] leading-[1.65]">
                Minimum personal funds for a <strong className="text-[#FFE600] font-semibold">solo applicant</strong> in CAD — unencumbered, liquid, and <strong className="text-[#FFE600] font-semibold">cannot come from lines of credit or third parties</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: "1px solid #1f1f24" }}>
                {["Certified bank statements (4–6 months)", "Institution letters", "Fixed-term certificates"].map((chip) => (
                  <span key={chip} className="text-[12px] px-3 py-1.5 rounded-full text-white font-medium"
                    style={{ border: "1px solid #2a2a30" }}>{chip}</span>
                ))}
              </div>
            </div>

            {/* Right rows */}
            <div className="flex flex-col gap-2.5">
              {rows.map((r) => (
                <div key={r.label}
                  className="rounded-[8px] px-5 py-3.5 flex justify-between items-center gap-4 transition-all duration-200 hover:border-[rgba(143,39,255,0.3)]"
                  style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}>
                  <div>
                    <div className="text-[13px] text-white font-semibold">{r.label}</div>
                    {r.sub && <div className="text-[12px] text-[#B5B5BA]">{r.sub}</div>}
                  </div>
                  <div className="text-[20px] font-bold text-[#FFE600] tracking-[-0.02em] whitespace-nowrap">{r.amount}</div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </Row>
    </section>
  );
}
