"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    title: "Solo Founder",
    titleFa: "بنیان‌گذار منفرد",
    desc: "Minimum <strong>€21,000</strong> in unencumbered personal liquid savings. Updated semi-annually by the IND based on national minimum wage standards.",
    descFa: "حداقل <strong>۲۱٬۰۰۰ یورو</strong> پس‌انداز نقدی شخصی بدون قید. هر شش ماه یک‌بار توسط IND بر اساس استانداردهای حداقل دستمزد ملی به‌روزرسانی می‌شود.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8.5h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5M12 6v2M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Founder with Family",
    titleFa: "بنیان‌گذار همراه خانواده",
    desc: "Threshold rises to minimum <strong>€30,000</strong> when relocating with a spouse or dependents to cover full family living capital.",
    descFa: "هنگام جابه‌جایی با همسر یا افراد تحت تکفل، آستانه برای پوشش کامل سرمایه‌ی زندگی خانواده به حداقل <strong>۳۰٬۰۰۰ یورو</strong> افزایش می‌یابد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    title: "Facilitator Can Sponsor",
    titleFa: "تسهیل‌گر می‌تواند حمایت مالی کند",
    desc: "Your recognized facilitator may cover your living costs directly. This <strong>must be explicitly written</strong> into your signed facilitator agreement — eliminating the need to show personal savings.",
    descFa: "تسهیل‌گر شناخته‌شده‌ی شما می‌تواند مستقیماً هزینه‌های زندگی شما را پوشش دهد. این موضوع <strong>باید صراحتاً</strong> در توافق‌نامه‌ی امضاشده‌ی تسهیل‌گر نوشته شود — که نیاز به نشان دادن پس‌انداز شخصی را از بین می‌برد.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <path d="M3 10h18M7 14h3" />
      </svg>
    ),
  },
];

const CHIPS: { en: string; fa: string }[] = [
  { en: "Certified bank statements", fa: "صورت‌حساب‌های بانکی تأییدشده" },
  { en: "Dutch notary escrow", fa: "امانت‌سپاری نزد دفتر اسناد رسمی هلند" },
  { en: "VC funding letters", fa: "نامه‌های تأمین مالی سرمایه‌گذاری خطرپذیر" },
  { en: "Facilitator sponsorship", fa: "حمایت مالی تسهیل‌گر" },
];

export default function FinancialRequirements() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "#000" }}>
      {/* Glow */}
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.3), transparent 65%)" }}
      />

      <Row>
        <Reveal variant="up" className="relative z-10 mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center text-white">
            {t("Financial Requirements", "الزامات مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 items-stretch relative z-10">
          {/* Hero card */}
          <Reveal variant="left" delay={100}>
            <div
              className="rounded-[20px] p-10 flex flex-col gap-5 h-full"
              style={{ background: "#0E0E10", border: "1px solid #1f1f24" }}
            >
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[.12em] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.3)", color: "#FFE600" }}
              >
                {t("Personal Liquid Funds Threshold", "آستانه‌ی دارایی نقدی شخصی")}
              </span>
              <div className="text-[72px] font-bold tracking-[-0.04em] leading-[0.9] text-white">
                €21K
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: "#B5B5BA" }}>
                {t("Minimum personal liquid funds for a", "حداقل دارایی نقدی شخصی برای یک")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>{t("solo founder", "بنیان‌گذار منفرد")}</strong>
                {t(". With family, the threshold rises to", "است. با خانواده، آستانه به")}{" "}
                <strong className="font-semibold" style={{ color: "#FFE600" }}>{t("€30,000", "۳۰٬۰۰۰ یورو")}</strong>{t(".", " افزایش می‌یابد.")}
              </p>
              <div
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid #1f1f24" }}
              >
                {CHIPS.map((chip) => (
                  <span
                    key={chip.en}
                    className="text-[12px] font-medium text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:border-white/30"
                    style={{ border: "1px solid #2a2a30" }}
                  >
                    {t(chip.en, chip.fa)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 80 + 150}>
                <div
                  className="rounded-[14px] p-6 flex gap-5 items-start h-full"
                  style={{
                    background: "#0E0E10",
                    border: "1px solid #1f1f24",
                    transition: "border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#8F27FF";
                    (e.currentTarget as HTMLDivElement).style.background = "#150026";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f24";
                    (e.currentTarget as HTMLDivElement).style.background = "#0E0E10";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[#8F27FF]"
                    style={{ background: "rgba(143,39,255,0.15)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1.5">{t(c.title, c.titleFa)}</h4>
                    <p
                      className="text-[13px] leading-[1.6] m-0 [&_strong]:text-white [&_strong]:font-semibold"
                      style={{ color: "#B5B5BA" }}
                      dangerouslySetInnerHTML={{ __html: t(c.desc, c.descFa) }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
