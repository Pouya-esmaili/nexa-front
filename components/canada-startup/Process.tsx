"use client";

import { useState } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const steps = [
  {
    num: "1",
    meta: "Step 1 · Completed in 2025",
    metaFa: "۰۱ — انجام‌شده در سال ۲۰۲۵",
    title: "Venture Architecture & Support Letter Issuance",
    titleFa: "طراحی ساختار استارتاپ و دریافت Letter of Support",
    desc: "The startup was pitched to a designated organization (VC, Angel, or Incubator). The entity issued an official Letter of Support and transmitted the matching Commitment Certificate directly to IRCC.",
    descFa: "استارتاپ به یک سازمان تعیین‌شده شامل VC، سرمایه‌گذار فرشته یا انکوباتور ارائه شده است. پس از تأیید، سازمان مربوطه Letter of Support را صادر کرده و Commitment Certificate مربوطه را مستقیماً برای IRCC ارسال می‌کند.",
    urgent: false,
  },
  {
    num: "2",
    meta: "Step 2 · Deadline: June 30, 2026",
    metaFa: "۰۲ — مهلت: ۳۰ ژوئن ۲۰۲۶",
    title: "PR Portal Compilation & Complete Group Submission",
    titleFa: "تکمیل پرونده PR و ثبت هم‌زمان اعضای گروه",
    desc: "All co-founders compile civil documents, police clearances, CLB 5 language transcripts, and settlement fund statements. Every team member submits their PR file simultaneously via the online Permanent Residence Portal. One missing submission invalidates the entire group file.",
    descFa: "تمام هم‌بنیان‌گذاران مدارک هویتی، گواهی‌های عدم سوءپیشینه، نتایج زبان در سطح CLB 5 و مدارک تمکن مالی را آماده می‌کنند. سپس هر عضو، پرونده اقامت دائم خود را به‌صورت هم‌زمان از طریق Permanent Residence Portal ثبت می‌کند. ثبت نشدن پرونده حتی یکی از اعضا می‌تواند کل پرونده گروه را تحت تأثیر قرار دهد.",
    urgent: false,
  },
  {
    num: "3",
    meta: "Step 3 · Post-Submission",
    metaFa: "۰۳ — پس از ثبت درخواست",
    title: "Triage, Backlog Management & Biometrics",
    titleFa: "بررسی اولیه، مدیریت پرونده و انگشت‌نگاری",
    desc: "IRCC assesses for completeness. Priority processing is applied to founders holding active SUV work permits onshore in Canada. Applicants complete biometric screening and mandatory medical examinations upon notice.",
    descFa: "IRCC کامل بودن پرونده را بررسی می‌کند. برای بنیان‌گذارانی که در کانادا حضور دارند و دارای مجوز کار معتبر Start-Up Visa هستند، اولویت‌های پردازشی مربوط اعمال می‌شود. پس از اعلام IRCC، متقاضیان مراحل بیومتریک و معاینات پزشکی را انجام می‌دهند.",
    urgent: false,
  },
  {
    num: "4",
    meta: "Step 4 · Final Approval",
    metaFa: "۰۴ — تأیید نهایی",
    title: "PR Confirmation & Canadian Settlement",
    titleFa: "دریافت تأییدیه اقامت دائم و استقرار در کانادا",
    desc: "Upon successful vetting, IRCC issues the Confirmation of Permanent Residence (COPR). Founders land in Canada as full permanent residents and immediately begin scaling their ventures within the North American market.",
    descFa: "پس از تکمیل بررسی‌ها، IRCC Confirmation of Permanent Residence (COPR) را صادر می‌کند. بنیان‌گذاران سپس به‌عنوان مقیم دائم وارد کانادا می‌شوند و می‌توانند توسعه کسب‌وکار خود را در بازار آمریکای شمالی آغاز کنند.",
    urgent: false,
  },
];

export default function Process() {
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-24 bg-[#F7F6F9]">
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[70px] items-start">

          {/* Left — sticky lead */}
          <div className="md:sticky md:top-[100px]">
            <Reveal variant="up">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
                {t("2026 Application Workflow", "فرآیند درخواست در سال ۲۰۲۶")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <blockquote className="text-[18px] italic font-medium leading-[1.5] text-black py-5 pl-6 mb-4"
                style={{ borderLeft: "3px solid #8F27FF" }}>
                &ldquo;{t("Nexa structures your deployment pipeline into clear chronological checkpoints, aligned to the strict June 2026 regulatory timeline.", "نکسا کل فرآیند را به نقاط عطف مشخص و زمان‌بندی‌شده تبدیل می‌کند تا هر مرحله مطابق الزامات و مهلت‌های قانونی پیش برود.")}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <p className="text-[14.5px] text-[#929292] leading-[1.7]">
                {t("The current intake window is open exclusively to founders holding a valid 2025 Commitment Certificate. Every step must be completed before the hard June 30, 2026 deadline.", "در شرایط فعلی، این مسیر فقط برای بنیان‌گذارانی باز است که Commitment Certificate معتبر سال ۲۰۲۵ در اختیار دارند. تمام مراحل باید پیش از مهلت نهایی ۳۰ ژوئن ۲۰۲۶ تکمیل و ثبت شوند.")}
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <Reveal variant="up" delay={80}>
            <div className="relative pl-[52px]">
              <div className="absolute top-[22px] bottom-[22px] left-[20px] w-[2px] rounded-[2px]"
                style={{ background: "linear-gradient(180deg, #8F27FF 0%, rgba(143,39,255,0.15) 100%)" }} />

              {steps.map((s, i) => {
                const isActive = active === s.num;
                return (
                <div key={s.num} className={`relative group ${i < steps.length - 1 ? "pb-8" : ""}`}>
                  <div
                    onClick={() => setActive(isActive ? null : s.num)}
                    className="absolute -left-[52px] top-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 cursor-pointer group-hover:bg-[#8F27FF] group-hover:text-white"
                    style={{
                      border: "2px solid #8F27FF",
                      boxShadow: "0 0 0 5px #FAF6FF, 0 4px 12px rgba(143,39,255,0.12)",
                      background: isActive ? "#8F27FF" : "#fff",
                      color: isActive ? "#fff" : "#8F27FF",
                    }}>
                    {s.num}
                  </div>

                  <div className={`rounded-[14px] p-[18px_22px] transition-all duration-200 group-hover:translate-x-1 ${
                    s.urgent
                      ? "border-[#FCA5A5] bg-[#FFF8F8]"
                      : "border-[#E2E2E2] bg-white group-hover:border-[rgba(143,39,255,0.18)]"
                  } border`}>
                    <div className={`text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5 ${s.urgent ? "text-[#DC2626]" : "text-[#8F27FF]"}`}>
                      {t(s.meta, s.metaFa)}
                    </div>
                    <h4 className="text-[16px] font-semibold text-black mb-1.5">{t(s.title, s.titleFa)}</h4>
                    <p className="text-[13.5px] text-[#929292] leading-[1.6] m-0">{t(s.desc, s.descFa)}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </Row>
    </section>
  );
}
