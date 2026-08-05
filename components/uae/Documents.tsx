"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const docGroups = [
  {
    title: "Asset & Corporate Documents",
    titleFa: "اسناد دارایی و شرکتی",
    items: [
      { strong: "DLD Title Deed", strongFa: "سند مالکیت DLD", text: "Proving unencumbered asset value of AED 2,000,000+.", textFa: "اثبات ارزش دارایی بدون قید ۲٬۰۰۰٬۰۰۰ درهم به بالا." },
      { strong: "Audited Balance Sheets / Fund Letters", strongFa: "ترازنامه‌های حسابرسی‌شده / نامه‌های صندوق", text: "For public investment channels.", textFa: "برای مسیرهای سرمایه‌گذاری عمومی." },
      { strong: "Trade License & Articles of Incorporation", strongFa: "پروانه‌ی کسب و اساسنامه‌ی شرکت", text: "For corporate capital channel.", textFa: "برای مسیر سرمایه‌ی شرکتی." },
    ],
  },
  {
    title: "Admissibility Requirements",
    titleFa: "الزامات پذیرش",
    items: [
      { strong: "Medical Screening", strongFa: "غربالگری پزشکی", text: "Blood tests & chest X-ray inside UAE for all adults.", textFa: "آزمایش خون و رادیوگرافی قفسه‌ی سینه در داخل امارات برای همه‌ی بزرگسالان." },
      { strong: "Police Clearance Certificate (PCC)", strongFa: "گواهی عدم سوءپیشینه (PCC)", text: "From country of origin.", textFa: "از کشور مبدأ." },
      { strong: "UAE-Compliant Health Insurance", strongFa: "بیمه‌ی درمانی منطبق با امارات", text: "Mandatory for residency activation.", textFa: "برای فعال‌سازی اقامت الزامی است." },
    ],
  },
];

const tableRows = [
  {
    vector: "Real Estate (Mortgaged)",
    vectorFa: "املاک (رهنی)",
    sub: "NOC from financing bank required",
    subFa: "نامه‌ی عدم‌اعتراض از بانک تأمین‌کننده لازم است",
    threshold: "AED 2,000,000",
    thresholdFa: "۲٬۰۰۰٬۰۰۰ درهم",
    thresholdSub: "Paid equity",
    thresholdSubFa: "سهام پرداخت‌شده",
    tag: "6 Months",
    tagFa: "۶ ماه",
    tagColor: "purple",
  },
  {
    vector: "Public Investments",
    vectorFa: "سرمایه‌گذاری‌های عمومی",
    sub: "Fund deposit channel",
    subFa: "مسیر سپرده‌ی صندوق",
    threshold: "AED 2,000,000",
    thresholdFa: "۲٬۰۰۰٬۰۰۰ درهم",
    thresholdSub: "Fixed deposit",
    thresholdSubFa: "سپرده‌ی ثابت",
    tag: "2-Year Lock-in",
    tagFa: "قفل ۲ ساله",
    tagColor: "yellow",
  },
  {
    vector: "Corporate Establishments",
    vectorFa: "تأسیس شرکتی",
    sub: "Paid-up share capital",
    subFa: "سرمایه‌ی سهام پرداخت‌شده",
    threshold: "AED 2,000,000",
    thresholdFa: "۲٬۰۰۰٬۰۰۰ درهم",
    thresholdSub: "Audited corporate",
    thresholdSubFa: "شرکتی حسابرسی‌شده",
    tag: "6 Months",
    tagFa: "۶ ماه",
    tagColor: "purple",
  },
  {
    vector: "Dependent Sponsorship",
    vectorFa: "حمایت از افراد تحت تکفل",
    sub: "Variable liquidity buffers",
    subFa: "ذخایر نقدینگی متغیر",
    threshold: "Variable",
    thresholdFa: "متغیر",
    thresholdSub: "Disposable income path",
    thresholdSubFa: "مسیر درآمد قابل‌تصرف",
    tag: "3 Months",
    tagFa: "۳ ماه",
    tagColor: "yellow",
  },
];

export default function Documents() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Required Documents & Financial Compliance", "اسناد موردنیاز و انطباق مالی")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left — doc groups */}
          <Reveal variant="left" delay={60}>
            <div className="flex flex-col gap-3">
              {docGroups.map((group, gi) => (
                <div
                  key={gi}
                  className="rounded-[14px] p-7 sm:p-8"
                  style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
                >
                  <div className="text-[13px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-4">
                    {t(group.title, group.titleFa)}
                  </div>
                  <ul className="flex flex-col gap-0">
                    {group.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-2.5"
                        style={{
                          borderBottom: ii < group.items.length - 1 ? "1px solid #E2E2E2" : "none",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                          style={{ background: "#8F27FF" }}
                        />
                        <span>
                          <strong className="text-black font-semibold">{t(item.strong, item.strongFa)}</strong>{" "}
                          {t(item.text, item.textFa)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — table */}
          <Reveal variant="right" delay={60}>
            <div>
              <div className="rounded-[14px] overflow-hidden" style={{ border: "1px solid #E2E2E2" }}>
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr style={{ background: "#000000" }}>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        {t("Investment Vector", "مسیر سرمایه‌گذاری")}
                      </th>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        {t("Bank Balance Threshold", "آستانه‌ی موجودی بانکی")}
                      </th>
                      <th className="py-3 px-4 text-left text-[12px] font-semibold text-white uppercase tracking-[0.06em]">
                        {t("Statement History", "سابقه‌ی صورت‌حساب")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 1 ? "#F7F6F9" : "white" }}>
                        <td
                          className="py-3 px-4 text-[#474747] leading-[1.5] align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <strong className="text-black font-semibold block">{t(row.vector, row.vectorFa)}</strong>
                          <span className="text-[12px] text-[#929292]">{t(row.sub, row.subFa)}</span>
                        </td>
                        <td
                          className="py-3 px-4 text-[#474747] leading-[1.5] align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <strong className="text-black font-semibold block">{t(row.threshold, row.thresholdFa)}</strong>
                          <span className="text-[12px] text-[#929292]">{t(row.thresholdSub, row.thresholdSubFa)}</span>
                        </td>
                        <td
                          className="py-3 px-4 align-top"
                          style={{ borderBottom: i < tableRows.length - 1 ? "1px solid #E2E2E2" : "none" }}
                        >
                          <span
                            className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={
                              row.tagColor === "purple"
                                ? { background: "#FAF6FF", color: "#8F27FF" }
                                : { background: "#FFFBE6", color: "#7A6800" }
                            }
                          >
                            {t(row.tag, row.tagFa)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="mt-3.5 p-4 sm:p-5 rounded-lg text-[13px] text-[#929292] leading-[1.6]"
                style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
              >
                {t("UAE financial institutions (ADCB, Emirates NBD) must issue formal, standardized letters verifying that capital allocation meets non-leverage constraints before the file is routed for final ICP vetting.", "مؤسسات مالی امارات (ADCB، Emirates NBD) باید نامه‌های رسمی و استانداردی صادر کنند که تأیید کند تخصیص سرمایه پیش از ارجاع پرونده برای بررسی نهایی ICP، محدودیت‌های عدم‌اهرم را برآورده می‌کند.")}
              </div>
            </div>
          </Reveal>
        </div>
      </Row>
    </section>
  );
}
