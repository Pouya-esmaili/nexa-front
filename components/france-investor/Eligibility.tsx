"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const reqs = [
  {
    num: "A",
    title: "Minimum Capital Deployment",
    titleFa: "حداقل سرمایه‌گذاری",
    desc: <>A baseline investment of <strong className="text-black font-semibold">€300,000</strong> in tangible or intangible fixed assets within a qualifying French commercial, industrial, artisanal, or agricultural enterprise.</>,
    descFa: <>حداقل <strong className="text-black font-semibold">۳۰۰ هزار یورو</strong> در دارایی‌های ثابت مشهود یا نامشهود یک شرکت تجاری، صنعتی، صنایع‌دستی یا کشاورزی واجد شرایط در فرانسه.</>,
  },
  {
    num: "B",
    title: "Job Creation or Preservation Commitment",
    titleFa: "تعهد به ایجاد یا حفظ اشتغال",
    desc: <>The investor must explicitly commit to <strong className="text-black font-semibold">creating or maintaining permanent jobs</strong> within 4 years following the initial capital deployment.</>,
    descFa: <>سرمایه‌گذار باید متعهد شود که طی ۴ سال پس از سرمایه‌گذاری، <strong className="text-black font-semibold">فرصت‌های شغلی دائمی ایجاد یا مشاغل موجود را حفظ</strong> خواهد کرد.</>,
  },
  {
    num: "C",
    title: "Active Corporate Position",
    titleFa: "نقش فعال در شرکت",
    desc: <>The applicant must either <strong className="text-black font-semibold">manage the enterprise personally</strong> or hold a director / legal representative status within the recipient entity — passive shareholders do not qualify.</>,
    descFa: <>متقاضی باید شخصاً <strong className="text-black font-semibold">در مدیریت کسب‌وکار نقش داشته باشد</strong> یا به‌عنوان مدیر یا نماینده قانونی شرکت فعالیت کند. صرفاً سهامدار بودن برای استفاده از این مسیر کافی نیست.</>,
  },
  {
    num: "D",
    title: "Personal Financial Liquidity",
    titleFa: "توانایی مالی شخصی",
    desc: <>Separate from the €300K investment capital, personal resources must equal or exceed the French minimum wage (SMIC): <strong className="text-black font-semibold">€21,621.60 gross per year</strong> in accessible personal bank accounts.</>,
    descFa: <>علاوه بر سرمایه‌گذاری ۳۰۰ هزار یورویی، متقاضی باید <strong className="text-black font-semibold">منابع مالی شخصی کافی</strong> برای تأمین هزینه‌های زندگی خود داشته باشد.</>,
  },
];

const rights: { en: string; fa: string }[] = [
  { en: "4-year Talent Passport card, renewable", fa: "کارت اقامت ۴ ساله Talent Passport با امکان تمدید" },
  { en: "Full work authorization — no separate permit", fa: "حق کامل کار و فعالیت حرفه‌ای بدون نیاز به مجوز کار جداگانه" },
  { en: "Spouse receives Talent (Family) permit with full work rights", fa: "امکان دریافت اقامت Talent – Family برای همسر" },
  { en: "Spouse full work rights", fa: "حق کار کامل برای همسر" },
  { en: "Minor children included without separate docs", fa: "امکان همراهی فرزندان زیر ۱۸ سال" },
  { en: "No language requirement at initial stage", fa: "بدون الزام به ارائه مدرک زبان در مرحله اولیه" },
  { en: "Schengen travel across 29 countries", fa: "امکان سفر در سراسر ۲۹ کشور حوزه شنگن" },
];

const CheckIcon = () => (
  <span
    className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
    style={{ background: "#8F27FF" }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12l4 4 10-10" />
    </svg>
  </span>
);

export default function Eligibility() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Core Eligibility Requirements", "شرایط اصلی دریافت اقامت")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Reveal variant="left">
            <div
              className="bg-white rounded-[20px] p-8 md:p-11"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-7 pb-7" style={{ borderBottom: "1px solid #E2E2E2" }}>
                {t("To qualify under the", "برای استفاده از مسیر")} <strong className="text-black font-semibold">{t("Talent – Economic Investor", "Talent – Economic Investor")}</strong> {t("stream, your application must satisfy three statutory conditions — beyond the €300K capital deployment.", "، علاوه بر سرمایه‌گذاری ۳۰۰ هزار یورویی، باید چند شرط اصلی نیز احراز شود.")}
              </p>

              {reqs.slice(0, 3).map((r, i) => (
                <div
                  key={i}
                  className="grid gap-[18px] items-start py-4 transition-all duration-200 hover:pl-1.5"
                  style={{
                    gridTemplateColumns: "44px 1fr",
                    borderBottom: "1px solid #E2E2E2",
                  }}
                >
                  <div
                    className="w-11 h-[30px] rounded-[8px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                    style={{ background: "#FAF6FF", color: "#8F27FF" }}
                  >
                    {r.num}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-black mb-1">{t(r.title, r.titleFa)}</h4>
                    <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{lang === "fa" ? r.descFa : r.desc}</p>
                  </div>
                </div>
              ))}

              <div className="text-[12px] font-bold text-[#929292] uppercase tracking-[0.1em] mt-5 mb-3.5">
                {t("Personal Financial Safeguards (SMIC)", "پشتوانه‌های مالی شخصی (SMIC)")}
              </div>

              <div
                className="grid gap-[18px] items-start py-4"
                style={{ gridTemplateColumns: "44px 1fr" }}
              >
                <div
                  className="w-11 h-[30px] rounded-[8px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                  style={{ background: "#FAF6FF", color: "#8F27FF" }}
                >
                  D
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-black mb-1">{t(reqs[3].title, reqs[3].titleFa)}</h4>
                  <p className="text-[13px] text-[#929292] leading-[1.6] m-0">{lang === "fa" ? reqs[3].descFa : reqs[3].desc}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="flex flex-col gap-4 md:sticky md:top-[100px]">
              <div
                className="rounded-[20px] p-8"
                style={{ background: "#FAF6FF", border: "1px solid rgba(143,39,255,0.18)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.1em] px-3 py-1.5 bg-white rounded-full mb-5"
                  style={{ border: "1px solid rgba(143,39,255,0.18)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t("What You Get", "آنچه دریافت می‌کنید")}
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-4">{t("Key permit rights", "آنچه این اقامت در اختیار شما قرار می‌دهد")}</h3>
                <ul className="flex flex-col gap-3">
                  {rights.map((r, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-black leading-[1.45]">
                      <CheckIcon />
                      {t(r.en, r.fa)}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-[14px] p-6"
                style={{ background: "white", border: "1.5px solid #E2E2E2" }}
              >
                <div className="text-[11px] font-bold text-[#929292] uppercase tracking-[0.08em] mb-2">
                  {t("Personal Liquidity Minimum", "حداقل منابع مالی شخصی")}
                </div>
                <div
                  className="font-extrabold tabular-nums leading-none mb-2"
                  style={{ fontSize: "32px", color: "#8F27FF", letterSpacing: "-0.04em" }}
                >
                  {t("€21,621", "€۲۱,۶۲۱")}
                </div>
                <p className="text-[13px] text-[#929292] leading-[1.55] m-0">
                  {t("Gross annual SMIC baseline — required in accessible personal bank accounts, separate from the €300K investment capital.", "حداقل منابع مالی شخصی معادل درآمد ناخالص سالانه SMIC که باید جدا از سرمایه‌گذاری ۳۰۰ هزار یورویی در اختیار متقاضی باشد.")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
