"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Phase 1 · Weeks 1–3",
    metaFa: "۱ — هفته‌های اول تا سوم",
    title: "Capital Allocation & Asset Certification",
    titleFa: "تخصیص سرمایه و تأیید دارایی",
    desc: "Execute the asset purchase or capital deposit. Titles cleared through DLD, or fund letters generated via accredited institutions.",
    descFa: "سرمایه‌گذاری ملکی یا سرمایه‌ای را انجام دهید. اسناد ملک از طریق DLD یا مدارک سرمایه‌گذاری از طریق مؤسسات معتبر تهیه و تأیید می‌شوند.",
  },
  {
    num: "2",
    meta: "Phase 2 · Days 3–7",
    metaFa: "۲ — روزهای سوم تا هفتم",
    title: "Entry Permit Issuance",
    titleFa: "صدور مجوز ورود",
    desc: "A 6-month multiple-entry visa processed via the ICP portal to facilitate physical arrival and asset finalization inside the UAE.",
    descFa: "مجوز ورود چندبار ورود برای فراهم کردن امکان حضور متقاضی در امارات و تکمیل مراحل اقامت صادر می‌شود.",
  },
  {
    num: "3",
    meta: "Phase 3 · Days 1–3 (In-Country)",
    metaFa: "۳ — روزهای اول تا سوم در داخل امارات",
    title: "Medical Fitness & Security Vetting",
    titleFa: "معاینه پزشکی و بررسی‌های امنیتی",
    desc: "Mandatory blood tests and chest X-ray at an authorized government facility. Global background checks finalized simultaneously.",
    descFa: "آزمایش‌های پزشکی و عکس قفسه سینه در مراکز مورد تأیید انجام می‌شود و بررسی‌های امنیتی نیز تکمیل خواهد شد.",
  },
  {
    num: "4",
    meta: "Phase 4 · Days 2–5",
    metaFa: "۴ — روزهای دوم تا پنجم",
    title: "Biometric Enrollment & Emirates ID",
    titleFa: "ثبت اطلاعات بیومتریک و Emirates ID",
    desc: "Attend an ICP center for fingerprinting and biometric logging, initiating production of your 10-year Emirates ID.",
    descFa: "متقاضی برای ثبت اثر انگشت و اطلاعات بیومتریک به مرکز مربوطه مراجعه کرده و فرایند صدور Emirates ID آغاز می‌شود.",
  },
  {
    num: "5",
    meta: "Phase 5 · Days 5–10",
    metaFa: "۵ — روزهای پنجم تا دهم",
    title: "Residency Activation & Family Deployment",
    titleFa: "فعال‌سازی اقامت و الحاق خانواده",
    desc: "Electronic residency permit issued — no physical passport sticker required. Dependent sponsorship then unlocked for spouse, children, and staff.",
    descFa: "اقامت الکترونیکی صادر می‌شود و پس از آن امکان آغاز فرایند اسپانسرشیپ همسر، فرزندان و افراد واجد شرایط خانواده فراهم خواهد شد.",
  },
];

export default function ProcessSteps() {
  const { t } = useLang();
  return (
    <section id="process" className="py-20 md:py-24" style={{ background: "#F7F6F9" }}>
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-start">

          {/* Left — sticky */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="left">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                {t("5-Phase Application Pipeline", "مسیر ۵ مرحله‌ای درخواست")}
              </h2>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <blockquote
                className="text-[18px] italic font-medium leading-[1.5] text-black py-5 mb-4"
                style={{ borderLeft: "3px solid #8F27FF", paddingLeft: "24px" }}
              >
                &ldquo;{t("We treat the application timeline as a synchronous critical path — data validation occurs well before capital deployment.", "ما فرایند درخواست را به‌صورت یک مسیر یکپارچه مدیریت می‌کنیم تا پیش از انتقال سرمایه، تمام اطلاعات و مدارک مورد نیاز اعتبارسنجی شوند.")}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="left" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                {t("From asset certification to physical Emirates ID activation, the complete pipeline spans 2 to 6 weeks once capital is deployed. Nexa manages the entire architecture — asset diligence, ICP filing, medical coordination, and family sponsorship deployment.", "پس از آماده بودن سرمایه‌گذاری و مدارک، فرایند دریافت اقامت می‌تواند در مدت کوتاهی انجام شود. نکسا ساختار پرونده، بررسی دارایی، درخواست اقامت، هماهنگی معاینات پزشکی و فرایند اقامت خانواده را مدیریت می‌کند.")}
              </p>
            </Reveal>
          </div>

          {/* Right — each step scrolls in individually */}
          <div className="relative pl-[52px]">
            <div
              className="absolute top-[22px] bottom-[22px] left-[20px] w-[2px] rounded-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)",
              }}
            />
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <Reveal key={i} variant="up" delay={i * 80} threshold={0.12}>
                  <StepItem step={step} isLast={i === steps.length - 1} />
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </Row>
    </section>
  );
}

function StepItem({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  const { t, n } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative ${isLast ? "" : "pb-8"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle */}
      <div
        className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold border-2 transition-all duration-300"
        style={{
          borderColor: "#8F27FF",
          background: hovered ? "#8F27FF" : "white",
          color: hovered ? "white" : "#8F27FF",
          boxShadow: hovered
            ? "0 0 0 5px #FAF6FF, 0 6px 18px rgba(143,39,255,0.3)"
            : "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {n(step.num)}
      </div>

      {/* Card */}
      <div
        className="rounded-[14px] p-[18px_22px] bg-white transition-all duration-200"
        style={{
          border: hovered ? "1px solid rgba(143,39,255,0.18)" : "1px solid #E2E2E2",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <div className="text-[11px] font-bold text-[#8F27FF] uppercase tracking-[0.08em] mb-1.5">
          {t(step.meta, step.metaFa)}
        </div>
        <h4 className="text-[16px] font-semibold text-black mb-1.5">{t(step.title, step.titleFa)}</h4>
        <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(step.desc, step.descFa)}</p>
      </div>
    </div>
  );
}
