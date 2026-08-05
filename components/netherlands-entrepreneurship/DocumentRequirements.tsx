"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const blocks = [
  {
    title: "Non-Negotiable Entry Requirements",
    titleFa: "الزامات ورود غیرقابل‌مذاکره",
    items: [
      {
        strong: "Valid International Passport",
        strongFa: "پاسپورت بین‌المللی معتبر",
        text: "Minimum 6 months remaining validity at time of submission.",
        textFa: "حداقل ۶ ماه اعتبار باقی‌مانده در زمان ثبت درخواست.",
      },
      {
        strong: "Antecedents Certificate",
        strongFa: "گواهی سوابق",
        text: "Signed declaration confirming a clean global criminal record; no threat to Dutch public order.",
        textFa: "اظهارنامه‌ی امضاشده که سوءپیشینه‌ی جهانی پاک را تأیید می‌کند؛ بدون تهدید برای نظم عمومی هلند.",
      },
      {
        strong: "TB Medical Screening",
        strongFa: "غربالگری پزشکی سل",
        text: "Mandatory chest X-ray at a public health service (GGD) within 3 months of arrival, unless nationality is exempt.",
        textFa: "رادیوگرافی قفسه‌ی سینه‌ی الزامی در یک مرکز بهداشت عمومی (GGD) ظرف ۳ ماه از ورود، مگر اینکه تابعیت معاف باشد.",
      },
      {
        strong: "Dutch Health Insurance",
        strongFa: "بیمه‌ی درمانی هلند",
        text: "Immediate enrollment in a compliant policy is required upon establishing residency.",
        textFa: "ثبت‌نام فوری در یک بیمه‌نامه‌ی منطبق هنگام برقراری اقامت لازم است.",
      },
    ],
  },
  {
    title: "Corporate & Sectoral Compliance",
    titleFa: "انطباق شرکتی و بخشی",
    items: [
      {
        strong: "KvK Registration",
        strongFa: "ثبت KvK",
        text: "Immediate registration with the Dutch Chamber of Commerce (Kamer van Koophandel) to secure your corporate identifier.",
        textFa: "ثبت فوری در اتاق بازرگانی هلند (Kamer van Koophandel) برای دریافت شناسه‌ی شرکتی شما.",
      },
      {
        strong: "Belastingdienst Alignment",
        strongFa: "هماهنگی با Belastingdienst",
        text: "Registration with the Dutch Tax Authority for corporate income tax and VAT (BTW) obligations.",
        textFa: "ثبت‌نام نزد اداره‌ی مالیات هلند برای تعهدات مالیات بر درآمد شرکتی و مالیات بر ارزش افزوده (BTW).",
      },
      {
        strong: "Professional Licensing",
        strongFa: "مجوز حرفه‌ای",
        text: "Sector-specific operational licenses, certifications, or regulatory clearances required to trade legally in the Netherlands.",
        textFa: "مجوزهای عملیاتی خاص هر بخش، گواهی‌ها یا تأییدیه‌های نظارتی لازم برای تجارت قانونی در هلند.",
      },
      {
        strong: "RVO Business Plan",
        strongFa: "طرح کسب‌وکار RVO",
        text: "A localized, data-backed operational blueprint with signed LOIs, MOUs, or client contracts — no generic templates.",
        textFa: "یک نقشه‌ی عملیاتی بومی‌شده و مبتنی بر داده با LOIها، تفاهم‌نامه‌ها یا قراردادهای مشتری امضاشده — بدون قالب‌های عمومی.",
      },
    ],
  },
];

export default function DocumentRequirements() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Document Requirements", "الزامات اسناد")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((block, bi) => (
            <Reveal key={bi} variant="up" delay={bi * 80}>
              <div
                className="bg-white rounded-[20px] p-7 sm:p-8 flex flex-col h-full"
                style={{ border: "1px solid #E2E2E2" }}
              >
                {/* Block title */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-4 rounded-sm flex-shrink-0" style={{ background: "#8F27FF" }} />
                  <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#8F27FF]">
                    {t(block.title, block.titleFa)}
                  </span>
                </div>

                <ul className="flex flex-col gap-0">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13.5px] text-[#474747] leading-[1.55] py-3"
                      style={{
                        borderBottom: i < block.items.length - 1 ? "1px solid #1a1a1f" : "none",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                        style={{ background: "#8F27FF" }}
                      />
                      <div>
                        <strong className="block mb-0.5 text-black font-semibold">{t(item.strong, item.strongFa)}</strong>
                        {t(item.text, item.textFa)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
