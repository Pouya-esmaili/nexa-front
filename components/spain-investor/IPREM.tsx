import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const rows = [
  {
    profile: "Main Applicant",
    detail: "400% IPREM",
    monthly: "€2,400",
    annual: "€28,800",
  },
  {
    profile: "Per Dependent Member",
    detail: "+100% IPREM each",
    monthly: "+€600",
    annual: "+€7,200",
  },
];

export default function IPREM() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      <div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.25), transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-white text-center mb-14">
            Financial Sustainability Standard
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={60}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <div
                className="self-start text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                IPREM-Based Calculation
              </div>
              <div
                className="font-extrabold text-white leading-[0.9] tabular-nums"
                style={{ fontSize: "64px", letterSpacing: "-0.04em" }}
              >
                €600
              </div>
              <p className="text-[14px] leading-[1.6] m-0" style={{ color: "#B5B5BA" }}>
                Monthly IPREM index (€7,200 annually). Your liquid reserves must cover{" "}
                <strong style={{ color: "#FFE600", fontWeight: 600 }}>400% IPREM</strong> for the main applicant
                plus <strong style={{ color: "#FFE600", fontWeight: 600 }}>100% per dependent</strong>.
              </p>
            </div>
          </Reveal>

          {/* Table */}
          <Reveal variant="right" delay={60}>
            <div className="flex flex-col gap-4">
              <div className="overflow-x-auto rounded-[14px]" style={{ border: "1px solid #1f1f24" }}>
                <table className="w-full border-collapse" style={{ minWidth: "320px" }}>
                  <thead>
                    <tr style={{ background: "rgba(143,39,255,0.15)" }}>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Applicant Profile
                      </th>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Monthly
                      </th>
                      <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.08em] border-b border-[#1f1f24]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Annual Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #1f1f24" : "none" }}>
                        <td className="px-6 py-5 text-[13.5px] leading-[1.5] align-middle" style={{ color: "#B5B5BA" }}>
                          <strong className="text-white font-semibold block">{r.profile}</strong>
                          {r.detail}
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className="text-[18px] font-bold tabular-nums whitespace-nowrap" style={{ color: "#FFE600" }}>
                            {r.monthly}
                          </span>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className="text-[18px] font-bold tabular-nums whitespace-nowrap" style={{ color: "#FFE600" }}>
                            {r.annual}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="rounded-[14px] px-6 py-5 text-[13px] leading-[1.6]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1f1f24", color: "rgba(255,255,255,0.45)" }}
              >
                Consulates require 3 consecutive monthly bank statements with letterhead, clear account numbers, and
                stable end-of-period balances. Unexplained sudden cash injections will trigger additional scrutiny.
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
