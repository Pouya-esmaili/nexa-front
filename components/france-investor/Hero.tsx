"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Row from "@/components/global/Row";
import { useLang } from "@/components/global/LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="pt-[100px] pb-[80px] relative overflow-hidden">
      <div
        className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.05), transparent 70%)" }}
      />
      <Row>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          <div
            className="order-2 md:order-1 transition-all duration-700"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(24px)" }}
          >
            <h1 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[1.06] mb-[22px]">
              {t("Europe's premier", "با سرمایه‌گذاری فعال،")}{" "}
              <em className="text-[#8F27FF] not-italic">{t("active residency", "اقامت فرانسه")}</em>{" "}
              {t("for investors and founders.", "را به دست آورید")}
            </h1>
            <p className="text-[16px] text-[#474747] mb-8 leading-[1.65] max-w-[520px]">
              {t("The France Talent Passport – Economic Investor embeds you directly into the EU's largest tech and industrial ecosystem. A 4-year renewable card, full family inclusion, and a clear 5-year path to permanent residency.", "Talent Passport – Economic Investor فرانسه، شما را مستقیماً وارد یکی از بزرگ‌ترین اکوسیستم‌های فناوری و صنعت اروپا می‌کند. با یک کارت اقامت چندساله، امکان همراهی خانواده، حق کار کامل و مسیری روشن برای دریافت اقامت دائم، می‌توانید کسب‌وکار خود را در فرانسه توسعه دهید و هم‌زمان جایگاه خود را در بازار اروپا تثبیت کنید.")}
            </p>

            <div
              className="grid grid-cols-3 my-8 py-6"
              style={{ borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2" }}
            >
              {[
                { num: "€300K", numFa: "۳۰۰ هزار یورو", label: "Min Investment", labelFa: "حداقل سرمایه‌گذاری" },
                { num: "4 yr", numFa: "۴ سال", label: "Residence Card", labelFa: "اعتبار کارت اقامت" },
                { num: "5 yr", numFa: "۵ سال", label: "Path to PR", labelFa: "مسیر اقامت دائم" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[26px] font-bold tracking-[-0.03em] leading-none">{t(s.num, s.numFa)}</div>
                  <div className="text-[11px] text-[#929292] mt-1.5 font-medium uppercase tracking-[0.06em]">{t(s.label, s.labelFa)}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
            >
              {t("Book an Appointment →", "مشاوره و ارزیابی پرونده ←")}
            </a>
          </div>

          <div
            className="order-1 md:order-2 relative h-[240px] md:h-[520px] transition-all duration-700 delay-150"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(24px)" }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: "32px 120px 32px 32px", boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
            >
              <Image
                src="/images/investment/investment france.webp"
                alt="Paris, France"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.12))" }}
              />
            </div>
          </div>
        </div>
      </Row>
    </section>
  );
}
