"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const docs = [
  {
    num: "1",
    title: "Valid Passport",
    titleFa: "گذرنامه معتبر",
    desc: "Must remain valid for the entire duration of the requested permit period.",
    descFa: "گذرنامه باید در تمام مدت دوره اقامتی مورد درخواست، اعتبار داشته باشد.",
  },
  {
    num: "2",
    title: "Business ID (Y-tunnus)",
    titleFa: "شماره ثبت کسب‌وکار (Y-tunnus)",
    desc: "Obtained via YTJ registration with the Finnish Patent and Registration Office (PRH).",
    descFa: "شماره ثبت کسب‌وکار از طریق سامانه YTJ و ثبت نزد اداره ثبت اختراعات و ثبت تجاری فنلاند (PRH) دریافت می‌شود.",
  },
  {
    num: "3",
    title: "Comprehensive Business Plan",
    titleFa: "بیزنس‌پلن جامع",
    desc: "Operations, target demographics, marketing strategies, and value proposition — no generic templates.",
    descFa: "شامل ساختار و نحوه فعالیت کسب‌وکار، جامعه هدف، استراتژی‌های بازاریابی و ارزش پیشنهادی؛ طرح‌های عمومی و قالب‌های آماده قابل اتکا نیستند.",
  },
  {
    num: "4",
    title: "2-Year Financial Forecast",
    titleFa: "پیش‌بینی مالی دوساله",
    desc: "Month-by-month profit-and-loss projection and cash flow statement for the next 24 months.",
    descFa: "پیش‌بینی ماه‌به‌ماه سود و زیان و صورت جریان نقدی برای ۲۴ ماه آینده.",
  },
  {
    num: "5",
    title: "Proof of Qualifications",
    titleFa: "مدارک اثبات صلاحیت",
    desc: "Academic degrees, professional certifications, and employment references validating your sector expertise.",
    descFa: "مدارک تحصیلی، گواهینامه‌های حرفه‌ای و سوابق شغلی که تخصص و تجربه شما در حوزه فعالیت موردنظر را اثبات می‌کنند.",
  },
  {
    num: "6",
    title: "Regulatory Documentation",
    titleFa: "مدارک و الزامات قانونی",
    desc: "All non-English, non-Finnish, or non-Swedish documents must be legalized and translated into English or Finnish.",
    descFa: "تمام مدارکی که به زبان‌های انگلیسی، فنلاندی یا سوئدی نیستند، باید قانونی‌سازی و به انگلیسی یا فنلاندی ترجمه شوند.",
  },
];

export default function Documents() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] text-center mb-14">
            {t("Mandatory Document Checklist", "چک‌لیست مدارک")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {docs.map((d, i) => (
            <Reveal key={i} variant="up" delay={i * 50}>
              <div
                className="bg-white rounded-[14px] p-[28px_24px] flex gap-4 items-start transition-all duration-200"
                style={{ border: "1px solid #E2E2E2" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(143,39,255,0.35)";
                  el.style.boxShadow = "0 8px 24px rgba(143,39,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#E2E2E2";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                  style={{ background: "#EDE8FB", color: "#8F27FF" }}
                >
                  {d.num}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-black mb-1">{t(d.title, d.titleFa)}</h4>
                  <p className="text-[13px] text-[#929292] leading-[1.55] m-0">{t(d.desc, d.descFa)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
