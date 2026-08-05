"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const items: { en: string; fa: string }[] = [
  { en: "ELY Centre assesses commercial viability first", fa: "ابتدا مرکز ELY امکان‌پذیری تجاری را ارزیابی می‌کند" },
  { en: "Migri issues your physical residence card", fa: "Migri کارت فیزیکی اقامت شما را صادر می‌کند" },
  { en: "3–4 month average processing time", fa: "زمان پردازش میانگین ۳ تا ۴ ماه" },
  { en: "Family moves with you from day one", fa: "خانواده از روز نخست همراه شما جابه‌جا می‌شود" },
];

export default function GatewayCTA() {
  const { t } = useLang();
  return (
    <section className="py-20 bg-white" style={{ borderTop: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div
            className="grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden"
            style={{ border: "1.5px solid #000000" }}
          >
            {/* Left — black */}
            <div
              className="bg-black px-7 md:px-12 py-10 md:py-[52px] flex flex-col gap-5 relative overflow-hidden"
            >
              <div
                className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,230,0,0.07), transparent 70%)" }}
              />
              <div
                className="inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-[0.1em] px-3.5 py-1.5 rounded-full text-black"
                style={{ background: "#FFE600" }}
              >
                {t("Nordic EU Gateway", "دروازه‌ی نوردیک اتحادیه اروپا")}
              </div>
              <h2
                className="text-[26px] md:text-[32px] font-bold text-white leading-[1.15] tracking-[-0.03em] relative z-10"
              >
                {t("Two authorities.", "دو مرجع.")}
                <br />
                <em className="not-italic" style={{ color: "#FFE600" }}>
                  {t("One clear path.", "یک مسیر روشن.")}
                </em>
              </h2>
              <p className="text-[14px] leading-[1.65] relative z-10" style={{ color: "rgba(255,255,255,0.6)" }}>
                {t("The Finland Entrepreneur Permit runs a two-stage evaluation — ELY Centre for business viability, then Migri for immigration. Nexa engineers your file to clear both gates cleanly.", "مجوز کارآفرینی فنلاند یک ارزیابی دومرحله‌ای دارد — مرکز ELY برای امکان‌پذیری کسب‌وکار، سپس Migri برای مهاجرت. نکسا پرونده‌ی شما را طوری مهندسی می‌کند که هر دو دروازه را به‌درستی بگذراند.")}
              </p>
            </div>

            {/* Right — yellow */}
            <div
              className="px-7 md:px-12 py-10 md:py-[52px] flex flex-col gap-5 justify-center"
              style={{ background: "#FFE600" }}
            >
              <ul className="flex flex-col gap-0">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] font-semibold text-black py-[13px] leading-[1.4]"
                    style={{ borderBottom: i < items.length - 1 ? "1.5px solid rgba(0,0,0,0.1)" : "none" }}
                  >
                    <span
                      className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0 mt-[5px]"
                    />
                    {t(item.en, item.fa)}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 self-start px-6 py-3.5 bg-black text-white font-bold rounded-full text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8F27FF] sm:self-stretch sm:justify-center"
              >
                {t("Start My Application →", "درخواستم را آغاز کنید →")}
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
