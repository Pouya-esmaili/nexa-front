"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const items: { en: string; fa: string }[] = [
  { en: "Spouse, children (any age), and domestic staff included", fa: "امکان پوشش همسر و فرزندان واجد شرایط" },
  { en: "No age caps on sons or unmarried daughters", fa: "امکان پوشش کارکنان خانگی در شرایط مقرر" },
  { en: "Family residency survives investor's death until permit expiry", fa: "تداوم اقامت اعضای خانواده تا پایان مدت اعتبار، مشروط به رعایت مقررات" },
];

export default function MobilityCTA() {
  const { t } = useLang();
  return (
    <section className="py-20 bg-white" style={{ borderTop: "1px solid #E2E2E2" }}>
      <Row>
        <Reveal variant="up">
          <div
            className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[24px]"
            style={{ border: "1.5px solid #E2E2E2" }}
          >
            {/* Left */}
            <div
              className="flex flex-col gap-6 p-8 sm:p-10 md:p-[52px_48px]"
              style={{ background: "#F7F6F9", borderBottom: "1px solid #E2E2E2" }}
            >
              <h2
                className="text-[26px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-black"
              >
                {t("Family security that", "امنیت خانواده؛")}
                <br />
                <em className="not-italic" style={{ color: "#8F27FF" }}>
                  {t("outlives the investor.", "حتی پس از سرمایه‌گذار")}
                </em>
              </h2>

              <p className="text-[14.5px] text-[#929292] leading-[1.65]">
                {t("If the primary investor passes away during the 10-year term, dependents maintain UAE residency until the permit's natural expiration.", "در صورت فوت دارنده اصلی Golden Visa در طول اعتبار اقامت، اعضای خانواده واجد شرایط می‌توانند مطابق مقررات جاری، اقامت خود را تا پایان اعتبار مجوز حفظ کنند.")}
              </p>

              <ul className="flex flex-col gap-0">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-[14px] font-medium text-black py-3.5 leading-[1.45]"
                    style={{
                      borderBottom: i < items.length - 1 ? "1px solid #E2E2E2" : "none",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-[5px]"
                      style={{ background: "#8F27FF" }}
                    />
                    {t(item.en, item.fa)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div
              className="flex flex-col gap-7 justify-center p-8 sm:p-10 md:p-[52px_48px] relative overflow-hidden"
              style={{ background: "#000000" }}
            >
              {/* Glow */}
              <div
                className="absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,230,0,0.08), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {t("Travel Restriction Waived", "بدون محدودیت معمول ۱۸۰ روزه خروج")}
                </div>
                <div
                  className="text-[80px] sm:text-[90px] font-extrabold leading-[0.9] tracking-[-0.05em] tabular-nums"
                  style={{ color: "#FFE600" }}
                >
                  ∞
                </div>
                <div className="text-[16px] font-semibold text-white mt-3">
                  {t("Days outside UAE permitted", "روزهای مجاز خارج از امارات")}
                </div>
              </div>

              <p
                className="text-[13.5px] leading-[1.65] max-w-[34ch] relative z-10"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {t("Standard UAE residency visas void after 180 days abroad. The Golden Visa explicitly waives this restriction — maintain active global operations with no residency risk.", "برخلاف بسیاری از اقامت‌های عادی، Golden Visa مشمول محدودیت استاندارد ۱۸۰ روزه برای حضور خارج از امارات نیست. بنابراین می‌توانید کسب‌وکار و فعالیت‌های بین‌المللی خود را مدیریت کنید، بدون اینکه صرفاً به دلیل اقامت طولانی‌مدت خارج از امارات، وضعیت اقامتتان از بین برود.")}
              </p>

              <a
                href="#contact"
                className="self-start inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[14px] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,230,0,0.3)] relative z-10"
                style={{ background: "#FFE600", color: "#000000" }}
              >
                {t("Book a Consultation →", "رزرو مشاوره ←")}
              </a>
            </div>
          </div>
        </Reveal>
      </Row>
    </section>
  );
}
