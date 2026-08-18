"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import IconArrow from '@/components/global/IconArrow';
import { useLang } from "@/components/global/LanguageProvider";

const stages = [
  {
    num: "01",
    label: "Initial Permit",
    labelFa: "مجوز اقامت اولیه",
    year: "Years 1–2",
    yearFa: "سال‌های اول تا دوم",
    detail: "Initial Startup Permit",
    detailFa: "مجوز اولیه استارتاپ",
    desc: "Live in Finland and actively develop your company under your initial 2-year residence permit. Travel across Schengen freely.",
    descFa: "در فنلاند مستقر می‌شوید و طی دوره اقامت اولیه دو ساله، به‌صورت فعال استارتاپ خود را توسعه می‌دهید. در این مدت امکان تردد آزادانه در منطقه شنگن را نیز خواهید داشت.",
  },
  {
    num: "02",
    label: "Extended Permit",
    labelFa: "تمدید اقامت",
    year: "Up to Year 4",
    yearFa: "تا سال چهارم",
    detail: "Extended Permit",
    detailFa: "تمدید اقامت",
    desc: "Before expiry, apply for extension. Immigration verifies your company is in the Finnish Trade Register and actively operating.",
    descFa: "پیش از پایان اعتبار مجوز، برای تمدید آن اقدام می‌کنید. مراجع مهاجرتی بررسی می‌کنند که شرکت شما در ثبت تجاری فنلاند ثبت شده و فعالیت واقعی و مستمر دارد.",
  },
  {
    num: "03",
    label: "Permanent Residency",
    labelFa: "اقامت دائم",
    year: "Year 4",
    yearFa: "سال چهارم",
    detail: "Permanent Residency",
    detailFa: "اقامت دائم",
    desc: "After 4 consecutive years on continuous permits, your right to live and work in Europe is permanently yours — startup or not.",
    descFa: "پس از ۴ سال اقامت مستمر با مجوزهای اقامت متوالی، در صورت احراز شرایط، می‌توانید برای اقامت دائم اقدام کنید و ادامه اقامت شما دیگر صرفاً به فعالیت استارتاپ وابسته نخواهد بود.",
  },
  {
    num: "04",
    label: "Finnish Passport",
    labelFa: "تابعیت فنلاند",
    year: "Year 6",
    yearFa: "سال ششم",
    detail: "Finnish Citizenship",
    detailFa: "تابعیت فنلاند",
    desc: "After ~6 years of continuous residence plus a basic Finnish or Swedish language test — full EU voting rights and a top-tier passport.",
    descFa: "پس از حدود ۶ سال اقامت مستمر و در صورت احراز سایر شرایط، از جمله قبولی در آزمون زبان پایه فنلاندی یا سوئدی، می‌توانید برای تابعیت اقدام کنید و از حقوق کامل شهروندی اتحادیه اروپا برخوردار شوید.",
  },
];

export default function PathwayToPassport() {
  const { t } = useLang();
  const [openMobile, setOpenMobile] = useState<number>(0);
  const [selectedDesktop, setSelectedDesktop] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            {t("Path to Permanent Residency & Passport", "مسیر اقامت دائم و تابعیت")}
          </h2>
        </Reveal>

        {/* Desktop track */}
        <div className="hidden md:block">
          <Reveal variant="up" delay={100}>
            <div className="relative grid grid-cols-4 mb-10">
              {/* connecting line */}
              <div
                className="absolute top-7 left-[10%] right-[10%] h-0.5"
                style={{ background: "linear-gradient(90deg, #8F27FF, rgba(143,39,255,0.2))" }}
              />
              {stages.map((s, i) => (
                <div key={s.num} className="flex flex-col items-center text-center relative z-10 px-3">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-bold mb-4 transition-all duration-200 cursor-pointer hover:scale-[1.08] ${
                      selectedDesktop === i
                        ? "bg-[#8F27FF] text-white"
                        : "bg-white text-[#8F27FF] hover:bg-[#FAF6FF]"
                    }`}
                    style={{
                      border: "2.5px solid #8F27FF",
                      boxShadow: selectedDesktop === i
                        ? "0 0 0 6px #FAF6FF, 0 8px 24px rgba(143,39,255,0.25)"
                        : "0 0 0 6px #FAF6FF",
                    }}
                    onClick={() => setSelectedDesktop(i)}
                  >
                    {s.num}
                  </div>
                  <div className="font-semibold text-[15px] mb-1 tracking-[-0.015em]">{t(s.label, s.labelFa)}</div>
                  <span
                    className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "#FAF6FF", color: "#8F27FF" }}
                  >
                    {t(s.year, s.yearFa)}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-4 gap-4 items-stretch">
            {stages.map((s, i) => (
              <Reveal key={s.num} variant="up" delay={i * 80 + 150} className="h-full">
                <div className="h-full bg-[#F7F6F9] border border-gray-200 rounded-[14px] p-5 transition-all duration-300 hover:border-[rgba(143,39,255,0.3)] hover:bg-[#FAF6FF]">
                  <h5 className="font-semibold text-[14px] mb-2 tracking-[-0.01em]">{t(s.detail, s.detailFa)}</h5>
                  <p className="text-[13px] text-gray-500 leading-relaxed m-0">{t(s.desc, s.descFa)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <Reveal variant="up" delay={100} className="md:hidden">
          <div className="flex flex-col gap-3">
            {stages.map((s, i) => (
              <div key={s.num} className="rounded-[16px] overflow-hidden border border-gray-200">
                <button
                  className={`w-full flex items-center gap-3.5 px-5 py-[18px] text-left transition-colors duration-200 ${openMobile === i ? "bg-[#FAF6FF]" : "bg-white hover:bg-gray-50"}`}
                  onClick={() => setOpenMobile(openMobile === i ? -1 : i)}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold transition-all duration-300
                      ${openMobile === i ? "bg-[#8F27FF] text-white" : "bg-white border-2 border-[#8F27FF] text-[#8F27FF]"}`}
                    style={{ boxShadow: "0 0 0 4px #FAF6FF" }}
                  >
                    {s.num}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-[14px]">{t(s.label, s.labelFa)}</div>
                    <span
                      className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mt-0.5"
                      style={{ background: "#FAF6FF", color: "#8F27FF" }}
                    >
                      {t(s.year, s.yearFa)}
                    </span>
                  </div>
                  <IconArrow className="w-4 h-4 transition-transform duration-300" style={{ transform: openMobile === i ? 'rotate(180deg)' : undefined }} />
                </button>
                {openMobile === i && (
                  <div className="px-5 pb-4 pt-1 text-[13.5px] text-[#474747] leading-relaxed pl-[70px]">
                    {t(s.desc, s.descFa)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

      </Row>
    </section>
  );
}
