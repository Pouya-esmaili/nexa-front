import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

const steps = [
  { num: "01", title: "Acquire qualifying property", desc: "Residential or commercial real estate eligible under residency criteria." },
  { num: "02", title: "Submit residency application", desc: "Verified ownership documentation reviewed through structured channels." },
  { num: "03", title: "Receive renewable permit", desc: "Issued for the principal applicant and eligible family members." },
  { num: "04", title: "Pathway to CBI unlocked", desc: "Upgrade to Turkish citizenship when investment thresholds are met." },
];

const suitedFor = [
  "Entrepreneurs seeking regional expansion",
  "Families planning international relocation",
  "Investors diversifying assets internationally",
  "Individuals seeking a secondary residence",
  "Remote business owners & digital entrepreneurs",
];

export default function Residency() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up" className="mb-10 md:mb-14 text-center">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight">
            Turkish Residency Through Property Investment
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-6 items-stretch">

          {/* ── Left card ── */}
          <Reveal variant="up" delay={100} className="h-full">
            <div style={{
              background: "#fff",
              border: "1px solid #E2E2E2",
              borderRadius: 26,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              gap: 32,
              height: "100%",
            }}>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "#474747", fontWeight: 400, margin: 0 }}>
                Foreign nationals can obtain residency in Türkiye through qualifying property ownership. Residential or commercial property may provide eligibility for renewable residence permits — opening access to local services, education, healthcare and banking.
              </p>

              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", borderTop: "1px solid #E2E2E2" }}>
                {steps.map((s) => (
                  <li
                    key={s.num}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "64px 1fr",
                      gap: 20,
                      alignItems: "flex-start",
                      padding: "20px 0",
                      borderBottom: "1px solid #E2E2E2",
                    }}
                  >
                    <span style={{
                      display: "inline-block",
                      width: 48,
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#8F27FF",
                      padding: "6px 0",
                      borderRadius: 6,
                      letterSpacing: "0.04em",
                      background: "#FAF6FF",
                    }}>
                      {s.num}
                    </span>
                    <div>
                      <h5 style={{ fontSize: 16, fontWeight: 600, margin: "4px 0 4px", letterSpacing: "-0.015em", color: "#000" }}>{s.title}</h5>
                      <p style={{ fontSize: 13.5, color: "#474747", lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* ── Right aside ── */}
          <Reveal variant="up" delay={200} className="h-full">
            <aside style={{
              background: "#FAF6FF",
              border: "1px solid #ECDFFB",
              borderRadius: 26,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              height: "100%",
            }}>
              <span style={{
                alignSelf: "flex-start",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "6px 12px",
                background: "#fff",
                border: "1px solid #ECDFFB",
                borderRadius: 999,
                color: "#8F27FF",
              }}>
                Suited for
              </span>

              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                {suitedFor.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#000", lineHeight: 1.45, fontWeight: 500 }}>
                    <span style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#8F27FF",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: "auto",
                paddingTop: 20,
                borderTop: "1px dashed #D7C5F2",
                fontSize: 13,
                color: "#474747",
                lineHeight: 1.6,
              }}>
                Property ownership also creates a direct pathway toward Turkish citizenship under the CBI Program when investment thresholds are met.
              </div>
            </aside>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
