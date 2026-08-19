"use client";

import { useRef } from "react";
import { useStaggerReveal } from "./useStaggerReveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function Process() {
  const { t, n } = useLang();
  const ref = useRef<HTMLElement>(null);
  useStaggerReveal(ref, ".hc-card", "hc-visible", (i) => i * 100, 0.15);

  return (
    <section className="how-section" ref={ref}>
      <div className="wrap">
        <div className="how-header">

          <div className="how-cards">
            <div className="hc-card hc-card--01">
              <div className="hc-dot"></div>
              <div className="hc-num">{n("01")}</div>
              <div>
                <div className="hc-tag">{t("DIAGNOSE", "تحلیل")}</div>
                <h4>{t("Discovery", "مرحله")}<br />{t("Sprint", "شناخت و تحلیل")}</h4>
                <p>{t("We audit the business model, market and brand footprint — and build the business plan and financial model behind it.", "مدل کسب‌وکار، بازار و جایگاه برند شما را بررسی می‌کنیم و بر اساس آن، بیزنس‌پلن و مدل مالی بیزینس را طراحی می‌کنیم.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--02">
              <div className="hc-dot"></div>
              <div className="hc-num">{n("02")}</div>
              <div>
                <div className="hc-tag">{t("DESIGN", "طراحی")}</div>
                <h4>{t("Strategy", "استراتژی")}<br />{t("& System", "و سیستم")}</h4>
                <p>{t("Brand, GTM and marketing strategy built as one connected system.", "استراتژی برند، ورود به بازار (GTM) و بازاریابی را به‌عنوان اجزای یک سیستم یکپارچه طراحی می‌کنیم.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--03">
              <div className="hc-dot"></div>
              <div className="hc-num">{n("03")}</div>
              <div>
                <div className="hc-tag">{t("BUILD", "ساخت")}</div>
                <h4>{t("Identity", "هویت برند")}<br />{t("& Web", "و وب سایت")}</h4>
                <p>{t("Visual identity and website produced to match the strategy exactly.", "هویت بصری و وب‌سایت را متناسب با استراتژی تدوین‌شده طراحی و اجرا می‌کنیم؛ دقیق، یکپارچه و هدفمند.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--04">
              <div className="hc-dot"></div>
              <div className="hc-num">{n("04")}</div>
              <div>
                <div className="hc-tag">{t("LAUNCH", "عرضه")}</div>
                <h4>{t("Content", "محتوا")}<br />{t("& Rollout", "و اجرای نهایی")}</h4>
                <p>{t("Launch content ships across channels, KPIs tracked from day one.", "محتوای لازم برای حضور برند در کانال‌های مختلف را آماده و منتشر می‌کنیم و از همان روز اول، عملکرد و شاخص‌های کلیدی (KPI) را زیر نظر می‌گیریم.")}</p>
              </div>
            </div>
          </div>

          <div className="how-title">
            <span className="editorial-label">{t("/ HOW IT WORKS", "/فرآیند همکاری ما")}</span>
            <h2 className="editorial-h2"><span className="eh2-outline">{t("ONE", "یک")}</span><br /><span className="eh2-solid">{t("STUDIO,", "استودیو،")}</span><br /><span className="eh2-purple">{t("FOUR MOVES.", "چهار حرکت.")}</span></h2>
            <p>{t("Four connected moves — from diagnosis to launch — run as one continuous system, not four separate hand-offs.", "از شناخت تا عرضه، چهار مرحله به‌هم‌پیوسته را طی می‌کنیم؛ فرآیندی یکپارچه که بدون مرزبندی میان مراحل، مسیر رشد کسب‌وکار را شکل می‌دهد.")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
