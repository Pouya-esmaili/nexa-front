"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function InvestmentHero() {
  const { t, lang } = useLang();
  return (
    <section className="relative overflow-hidden bg-white investment-hero-section" style={{ padding: "64px 0 72px" }}>
      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        <div
          className="investment-hero-grid grid items-center gap-12"
          style={{ gridTemplateColumns: "1fr 1.15fr" }}
        >
          {/* ── Left: Text ── */}
          <Reveal variant="left">

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.032em",
                color: "#000",
                marginBottom: 20,
              }}
            >
              {t("Invest With", "سرمایه گذاری")}{" "}
              <mark
                style={{
                  display: "inline",
                  background: "#FFE600",
                  borderRadius: 3,
                  padding: "0 5px 3px",
                }}
              >
                {t("Confidence,", "برای آینده ای")}
              </mark>{" "}
              {t("Grow With Vision", "  بزرگ تر")}
            </h1>

            {/* Lead */}
            <p
              style={{
                fontSize: 15.5,
                color: "#929292",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              {t(
                "Nexa is a global investor and strategic business partner — combining capital, expert guidance, and international networks to help ventures scale and succeed across markets worldwide.",
                "نکسا یک سرمایه گذار جهانی و شریک تجاری استراتژیک است که سرمایه، راهنمایی کارشناسان و شبکه های بین المللی را برای کمک به مقیاس گذاری و موفقیت شرکت ها در سراسر بازارهای جهانی ترکیب می کند."
              )}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-px"
                style={{
                  padding: "14px 28px",
                  background: "#8F27FF",
                  color: "white",
                  borderRadius: 999,
                  fontSize: 14,
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#7A1FE0";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 22px rgba(143,39,255,.28)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#8F27FF";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "none";
                }}
              >
                {t("Submit Your Proposal", "ارسال پیشنهاد خود")}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={lang === "fa" ? "rotate-180" : ""}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* ── Right: Image ── */}
          <Reveal variant="right" className="investment-hero-image">
            <div
              className="relative w-full overflow-hidden"
              style={{ borderRadius: "140px 20px 20px 20px", height: 380 }}
            >
              <Image
                src="/images/investment/hero.webp"
                alt="Investment strategy"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(143,39,255,.05) 0%,rgba(0,0,0,.08) 100%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes nexaPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(1.4); }
        }
        @media (max-width: 767px) {
          .investment-hero-section {
            padding: 32px 0 48px !important;
          }
          .investment-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .investment-hero-image {
            order: -1;
          }
          .investment-hero-image > div {
            height: 240px !important;
            border-radius: 20px 20px 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
