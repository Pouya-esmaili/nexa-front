"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const structures = [
  {
    num: "01",
    title: "Private Trader / Sole Proprietor",
    titleFa: "تاجر یا مالک کسب‌وکار شخصی",
    desc: (
      <>
        <em>Yksityinen elinkeinonharjoittaja</em> or <em>Toiminimi</em> — the most straightforward entry
        structure for individual freelancers and consultants.
      </>
    ),
    descFa: (
      <>
        <em>Yksityinen elinkeinonharjoittaja</em> یا <em>Toiminimi</em> — ساده‌ترین ساختار برای ورود
        فریلنسرها و مشاورانی که قصد دارند فعالیت حرفه‌ای خود را به‌صورت مستقل در فنلاند دنبال کنند.
      </>
    ),
  },
  {
    num: "02",
    title: "Partner in a General Partnership",
    titleFa: "شریک در شرکت تضامنی",
    desc: (
      <>
        <em>Avoin yhtiö</em> — full active partnership with shared liability and operational
        responsibility in a registered Finnish entity.
      </>
    ),
    descFa: (
      <>
        <em>Avoin yhtiö</em> — ساختاری مبتنی بر مشارکت فعال که در آن شریک، علاوه بر سهم در کسب‌وکار،
        مسئولیت و نقش عملیاتی مشخصی در شرکت ثبت‌شده فنلاندی دارد.
      </>
    ),
  },
  {
    num: "03",
    title: "General Partner in a Limited Partnership",
    titleFa: "شریک ضامن در شرکت مختلط",
    desc: (
      <>
        <em>Kommandiittiyhtiö</em> — active management role in a Finnish limited partnership structure.
      </>
    ),
    descFa: (
      <>
        <em>Kommandiittiyhtiö</em> — امکان فعالیت در نقش شریک فعال و مدیریتی در ساختار شرکت مختلط
        فنلاندی.
      </>
    ),
  },
  {
    num: "04",
    title: "Shareholder in a Managerial Position (Oy)",
    titleFa: "سهام‌دار دارای سمت مدیریتی در شرکت Oy",
    desc: (
      <>
        Operative shareholder in a <strong className="text-black font-semibold">Finnish Limited Liability Company</strong>{" "}
        (<em>Osakeyhtiö</em>). You must personally own at least{" "}
        <strong className="text-black font-semibold">30% of share capital</strong> or hold at least{" "}
        <strong className="text-black font-semibold">30% of voting rights</strong>.
      </>
    ),
    descFa: (
      <>
        در صورتی که در یک شرکت فنلاندی (<em>Osakeyhtiö</em>) نقش اجرایی داشته باشید، باید شخصاً حداقل{" "}
        <strong className="text-black font-semibold">۳۰٪ از سرمایه شرکت</strong> را در اختیار داشته باشید یا
        حداقل <strong className="text-black font-semibold">۳۰٪ از حق رأی</strong> را کنترل کنید.
      </>
    ),
  },
];

const benefits: { en: string; fa: string }[] = [
  { en: "Continuous A-permit valid 1–2 years, renewable to 4", fa: "دریافت مجوز اقامت A با اعتبار اولیه ۱ تا ۲ سال و امکان تمدید تا ۴ سال" },
  { en: "Full EU Schengen zone travel rights", fa: "امکان تردد آزاد در سراسر منطقه شنگن" },
  { en: "Universal public healthcare access", fa: "دسترسی به خدمات عمومی سلامت در فنلاند" },
  { en: "Spouse + children under 18 sponsored simultaneously", fa: "امکان همراهی همسر و فرزندان زیر ۱۸ سال" },
  { en: "PR eligible after 4 continuous years", fa: "امکان درخواست اقامت دائم پس از ۴ سال اقامت مستمر" },
  { en: "Citizenship eligible after 5 years", fa: "امکان درخواست تابعیت پس از ۵ سال، در صورت احراز شرایط قانونی" },
];

export default function Eligibility() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              {t("Core Eligibility & Business Structures", "شرایط اصلی و ساختارهای قابل قبول کسب‌وکار")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: main panel */}
          <Reveal variant="left" delay={60}>
            <div
              className="bg-white rounded-[20px] p-7 md:p-11 flex flex-col"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p
                className="text-[16px] text-[#474747] leading-[1.65] mb-8 pb-8"
                style={{ borderBottom: "1px solid #E2E2E2" }}
              >
                {t("Migri categorizes self-employed individuals under the", "اداره مهاجرت فنلاند (Migri) افراد خوداشتغال را تحت عنوان")}{" "}
                <strong className="text-black font-semibold">{t("Residence Permit for an Entrepreneur", "مجوز اقامت کارآفرینی")}</strong>{t(". You must actively operate your business", " ارزیابی می‌کند. برای واجد شرایط بودن، باید کسب‌وکار خود را")}{" "}
                <strong className="text-black font-semibold">{t("within Finland", "به‌صورت فعال در فنلاند")}</strong> {t("— owning shares or property remotely does not qualify.", "اداره کنید؛ صرفاً مالکیت سهام یا املاک در فنلاند، بدون فعالیت عملیاتی، برای دریافت این مجوز کافی نیست.")}
              </p>

              <div className="text-[11px] font-bold text-[#929292] uppercase tracking-[0.1em] mb-4">
                {t("Eligible Business Structures (via PRH / YTJ)", "ساختارهای واجد شرایط کسب‌وکار (از طریق PRH / YTJ)")}
              </div>

              <div className="flex flex-col">
                {structures.map((s, i) => (
                  <div
                    key={i}
                    className="grid gap-5 py-[18px] transition-all duration-200 hover:pl-1.5"
                    style={{
                      gridTemplateColumns: "48px 1fr",
                      borderBottom: i < structures.length - 1 ? "1px solid #E2E2E2" : "none",
                    }}
                  >
                    <div
                      className="w-12 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                      style={{ background: "#FAF6FF", color: "#8F27FF" }}
                    >
                      {s.num}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-black mb-1">{t(s.title, s.titleFa)}</h4>
                      <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{lang === "fa" ? s.descFa : s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: aside */}
          <div className="flex flex-col gap-4 md:sticky md:top-[100px] md:self-start">
            <Reveal variant="right" delay={80}>
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "white", border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t("What You Get", "آنچه به دست می‌آورید")}
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-4">{t("Key permit benefits", "مزایای کلیدی مجوز اقامت")}</h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] font-medium text-black leading-[1.45]">
                      <span
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#8F27FF" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      {t(b.en, b.fa)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div
                className="rounded-[14px] p-5 flex gap-3.5 items-start"
                style={{ background: "#FFF8F8", border: "1px solid #FECACA" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[13.5px] leading-[1.55] m-0" style={{ color: "#7F1D1D" }}>
                  {lang === "fa" ? (
                    <>
                      <strong className="font-semibold" style={{ color: "#991B1B" }}>
                        «کارآفرینی سبک» مشمول این مسیر نیست.
                      </strong>{" "}
                      استفاده از خدمات شرکت‌های واسط برای صدور فاکتور (<em>kevytyrittäjä</em>)، بدون داشتن شماره ثبت
                      کسب‌وکار شخصی (<em>Y-tunnus</em>)، برای این مجوز کافی نیست. برای واجد شرایط بودن، باید
                      کسب‌وکار مستقل خود را در فنلاند ایجاد و ثبت کنید.
                    </>
                  ) : (
                    <>
                      <strong className="font-semibold" style={{ color: "#991B1B" }}>
                        &ldquo;Light entrepreneurs&rdquo; are excluded.
                      </strong>{" "}
                      Using third-party invoicing services (<em>kevytyrittäjä</em>) without your own Business ID
                      (<em>Y-tunnus</em>) does not qualify. You must establish a dedicated company.
                    </>
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Row>
    </section>
  );
}
