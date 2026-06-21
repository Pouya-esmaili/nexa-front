import Row from "@/components/global/Row";
import Reveal from "@/components/global/LazyReveal";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Weeks 1–3",
    title: "Asset Selection & Legal Structure Setup",
    desc: "Select your investment tier (€250K, €400K, or €800K). Issue a remote Power of Attorney via your local Greek Consulate or apostilled notary. Nexa secures your Greek Tax Number (AFM) and opens your local bank account remotely.",
  },
  {
    num: "2",
    meta: "Step 2 · Weeks 4–8",
    title: "Legal Due Diligence & Property Purchase",
    desc: "Nexa's real estate attorneys audit the property registry — guaranteeing clean title ownership, freedom from mortgages, and total building permit compliance. Execute the final digital purchase contract and wire the full investment capital.",
  },
  {
    num: "3",
    meta: "Step 3 · Weeks 9–12",
    title: "Deed Registration & Residency Filing",
    desc: "Notary submits the executed deed to the Land Registry. Nexa compiles apostilled civil documents (birth/marriage certificates, background checks, health insurance) and files the application digitally with the Ministry of Migration.",
  },
  {
    num: "4",
    meta: "Step 4 · Months 4–6",
    title: "Biometric Collection & Card Issuance",
    desc: "Ministry issues a temporary receipt certificate (Blue Paper) granting 12 months of legal entry to Greece. Schedule a single biometric appointment in Greece. Physical permanent residence cards issued within 30 to 60 days post-biometrics.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-start">

          {/* Left — sticky lead */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="up">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                Investment & Application Timeline
              </h2>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <blockquote className="text-[18px] italic font-medium leading-[1.5] text-black py-5 pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                "Nexa coordinates your investment life cycle into a linear engineering workflow — data validation occurs well before capital deployment."
              </blockquote>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                From remote Power of Attorney to physical residence card collection, the full process takes approximately 4 to 6 months. Nexa manages the entire pipeline — property diligence, AFM registration, deed execution, and Ministry filing.
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <Reveal variant="up" delay={80}>
            <div className="relative pl-[52px]">
              {/* Vertical line */}
              <div className="absolute top-[22px] bottom-[22px] left-[20px] w-[2px] rounded-[2px]"
                style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

              {steps.map((s, i) => (
                <div key={s.num} className={`relative group ${i < steps.length - 1 ? "pb-8" : ""}`}>
                  {/* Circle number */}
                  <div className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold text-[#8F27FF] bg-white transition-all duration-300 group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                    }}>
                    {s.num}
                  </div>

                  {/* Step card */}
                  <div className="rounded-[14px] p-[18px_22px] border border-[#E2E2E2] bg-white transition-all duration-200 group-hover:translate-x-1 group-hover:border-[rgba(143,39,255,0.18)]">
                    <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">
                      {s.meta}
                    </div>
                    <h4 className="text-[16px] font-semibold text-black mb-1.5">{s.title}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
