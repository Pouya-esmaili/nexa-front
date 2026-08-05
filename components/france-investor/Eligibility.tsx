"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const reqs = [
  {
    num: "A",
    title: "Minimum Capital Deployment",
    titleFa: "حداقل به‌کارگیری سرمایه",
    desc: <>A baseline investment of <strong className="text-black font-semibold">€300,000</strong> in tangible or intangible fixed assets within a qualifying French commercial, industrial, artisanal, or agricultural enterprise.</>,
    descFa: <>یک سرمایه‌گذاری پایه‌ی <strong className="text-black font-semibold">۳۰۰٬۰۰۰ یورو</strong> در دارایی‌های ثابت مشهود یا نامشهود در یک بنگاه تجاری، صنعتی، صنایع‌دستی یا کشاورزی فرانسوی واجد شرایط.</>,
  },
  {
    num: "B",
    title: "Job Creation or Preservation Commitment",
    titleFa: "تعهد به ایجاد یا حفظ اشتغال",
    desc: <>The investor must explicitly commit to <strong className="text-black font-semibold">creating or maintaining permanent jobs</strong> within 4 years following the initial capital deployment.</>,
    descFa: <>سرمایه‌گذار باید صراحتاً متعهد به <strong className="text-black font-semibold">ایجاد یا حفظ مشاغل دائمی</strong> ظرف ۴ سال پس از به‌کارگیری اولیه‌ی سرمایه شود.</>,
  },
  {
    num: "C",
    title: "Active Corporate Position",
    titleFa: "سمت شرکتی فعال",
    desc: <>The applicant must either <strong className="text-black font-semibold">manage the enterprise personally</strong> or hold a director / legal representative status within the recipient entity — passive shareholders do not qualify.</>,
    descFa: <>متقاضی باید یا <strong className="text-black font-semibold">شخصاً بنگاه را مدیریت کند</strong> یا در نهاد دریافت‌کننده سمت مدیر / نماینده‌ی قانونی داشته باشد — سهام‌داران منفعل واجد شرایط نیستند.</>,
  },
  {
    num: "D",
    title: "Personal Financial Liquidity",
    titleFa: "نقدینگی مالی شخصی",
    desc: <>Separate from the €300K investment capital, personal resources must equal or exceed the French minimum wage (SMIC): <strong className="text-black font-semibold">€21,621.60 gross per year</strong> in accessible personal bank accounts.</>,
    descFa: <>جدا از سرمایه‌ی سرمایه‌گذاری ۳۰۰ هزار یورویی، منابع شخصی باید برابر یا بیش از حداقل دستمزد فرانسه (SMIC) باشد: <strong className="text-black font-semibold">۲۱٬۶۲۱٫۶۰ یورو ناخالص در سال</strong> در حساب‌های بانکی شخصی قابل‌دسترس.</>,
  },
];

const rights: { en: string; fa: string }[] = [
  { en: "4-year Talent Passport card, renewable", fa: "کارت پاسپورت استعداد ۴ ساله، قابل‌تمدید" },
  { en: "Full work authorization — no separate permit", fa: "مجوز کامل کار — بدون مجوز جداگانه" },
  { en: "Spouse receives Talent (Family) permit with full work rights", fa: "همسر مجوز استعداد (خانواده) با حقوق کامل کار دریافت می‌کند" },
  { en: "Minor children included without separate docs", fa: "فرزندان صغیر بدون اسناد جداگانه گنجانده می‌شوند" },
  { en: "No language requirement at initial stage", fa: "بدون الزام زبانی در مرحله‌ی اولیه" },
  { en: "Schengen travel across 29 countries", fa: "سفر شنگن در ۲۹ کشور" },
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
            {t("Core Eligibility Requirements", "الزامات اصلی واجد بودن")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Reveal variant="left">
            <div
              className="bg-white rounded-[20px] p-8 md:p-11"
              style={{ border: "1px solid #E2E2E2" }}
            >
              <p className="text-[15px] text-[#474747] leading-[1.65] mb-7 pb-7" style={{ borderBottom: "1px solid #E2E2E2" }}>
                {t("To qualify under the", "برای واجد شرایط شدن تحت جریان")} <strong className="text-black font-semibold">{t("Talent – Economic Investor", "استعداد – سرمایه‌گذار اقتصادی")}</strong> {t("stream, your application must satisfy three statutory conditions — beyond the €300K capital deployment.", "، درخواست شما باید سه شرط قانونی را — فراتر از به‌کارگیری سرمایه‌ی ۳۰۰ هزار یورویی — برآورده کند.")}
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
                <h3 className="text-[17px] font-semibold text-black mb-4">{t("Key permit rights", "حقوق کلیدی مجوز")}</h3>
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
                  {t("Personal Liquidity Minimum", "حداقل نقدینگی شخصی")}
                </div>
                <div
                  className="font-extrabold tabular-nums leading-none mb-2"
                  style={{ fontSize: "32px", color: "#8F27FF", letterSpacing: "-0.04em" }}
                >
                  {t("€21,621", "۲۱٬۶۲۱ یورو")}
                </div>
                <p className="text-[13px] text-[#929292] leading-[1.55] m-0">
                  {t("Gross annual SMIC baseline — required in accessible personal bank accounts, separate from the €300K investment capital.", "پایه‌ی سالانه‌ی ناخالص SMIC — که در حساب‌های بانکی شخصی قابل‌دسترس، جدا از سرمایه‌ی سرمایه‌گذاری ۳۰۰ هزار یورویی، لازم است.")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
