"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import type { ReactNode } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const cards: { type: "warn" | "ok"; icon: ReactNode; title: string; titleFa: string; body: ReactNode; bodyFa: ReactNode }[] = [
  {
    type: "warn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    title: "The Airbnb Proscription",
    titleFa: "ممنوعیت اجاره کوتاه‌مدت",
    body: <>Golden Visa properties <strong className="text-[#DC2626] font-bold">cannot be placed on Airbnb, Booking.com, or VRBO</strong>. Only personal use or long-term traditional residential leases are permitted. Violation triggers immediate permit revocation and a <strong className="text-[#DC2626] font-bold">€50,000 statutory fine</strong>.</>,
    bodyFa: <>املاک خریداری‌شده از طریق گلدن ویزا <strong className="text-[#DC2626] font-bold">نمی‌توانند در Airbnb، Booking.com یا VRBO عرضه شوند</strong>. استفاده شخصی یا اجاره‌های سنتی بلندمدت مجاز است. نقض این مقررات می‌تواند به <strong className="text-[#DC2626] font-bold">لغو اقامت و اعمال جریمه قانونی</strong> منجر شود.</>,
  },
  {
    type: "warn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    title: "No Commercial Registration",
    titleFa: "ممنوعیت ثبت شرکت در برخی املاک",
    body: <>Properties acquired via the <strong className="text-[#DC2626] font-bold">€250,000 conversion pathway</strong> cannot be used as the registered legal corporate seat or branch of any business entity.</>,
    bodyFa: <>املاکی که از طریق <strong className="text-[#DC2626] font-bold">مسیر €۲۵۰,۰۰۰ و با تبدیل کاربری</strong> خریداری شده‌اند، نمی‌توانند به‌عنوان دفتر مرکزی یا شعبه ثبت‌شده یک شرکت مورد استفاده قرار گیرند.</>,
  },
  {
    type: "warn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 14h3"/></svg>,
    title: "Banned Payment Instruments",
    titleFa: "روش‌های پرداخت غیرمجاز",
    body: <>Cash payments, crypto-asset settlements, and <strong className="text-[#DC2626] font-bold">third-party bank transfers</strong> from individuals not listed on the application are strictly illegal and will fully invalidate your file.</>,
    bodyFa: <>پرداخت نقدی، پرداخت با رمزارز یا <strong className="text-[#DC2626] font-bold">انتقال وجه از حساب اشخاص ثالثی</strong> که در پرونده متقاضی درج نشده‌اند، مورد قبول نیست و می‌تواند اعتبار پرونده را از بین ببرد.</>,
  },
  {
    type: "ok",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12l4 4 10-10"/></svg>,
    title: "Full-Payment at Deed Execution",
    titleFa: "پرداخت کامل هنگام انتقال سند",
    body: <>The <strong className="text-black font-semibold">entire investment amount</strong> must be paid in full at the time of executing the final property deed. Installment structures or partial payments are legally ineligible for residency issuance.</>,
    bodyFa: <>کل <strong className="text-black font-semibold">مبلغ سرمایه‌گذاری</strong> باید هم‌زمان با تنظیم سند نهایی ملک پرداخت شود. پرداخت اقساطی یا پرداخت بخشی از مبلغ، برای صدور اقامت قابل قبول نیست.</>,
  },
];

export default function Compliance() {
  const { t, lang } = useLang();
  return (
    <section className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-14">
            {t("Absolute Restrictions & Compliance Rules", "محدودیت‌ها و الزامات مهم")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} variant="up" delay={i * 80}>
              <div className={`rounded-[14px] p-7 flex gap-5 items-start ${
                c.type === "warn"
                  ? "bg-[#FFF8F8] border-[1.5px] border-[#FECACA]"
                  : "bg-[#F7F6F9] border border-[#E2E2E2]"
              }`}>
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 ${
                  c.type === "warn" ? "bg-[#FEE2E2] text-[#DC2626]" : "bg-[#FAF6FF] text-[#8F27FF]"
                }`}>
                  {c.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-black mb-1.5 tracking-tight">{t(c.title, c.titleFa)}</h4>
                  <p className={`text-[13.5px] leading-[1.6] ${c.type === "warn" ? "text-[#7F1D1D]" : "text-[#929292]"}`}>
                    {lang === "fa" ? c.bodyFa : c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
