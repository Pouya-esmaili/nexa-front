"use client";

import { useRef } from "react";
import { useStaggerReveal } from "./useStaggerReveal";
import { useLang } from "@/components/global/LanguageProvider";

export default function Process() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  useStaggerReveal(ref, ".hc-card", "hc-visible", (i) => i * 100, 0.15);

  return (
    <section className="how-section" ref={ref}>
      <div className="wrap">
        <div className="how-header">

          <div className="how-cards">
            <div className="hc-card hc-card--01">
              <div className="hc-dot"></div>
              <div className="hc-num">01</div>
              <div>
                <div className="hc-tag">{t("DIAGNOSE", "تشخیص")}</div>
                <h4>{t("Discovery", "اسپرینت")}<br />{t("Sprint", "کشف")}</h4>
                <p>{t("We audit the business model, market and brand footprint — and build the business plan and financial model behind it.", "مدل کسب‌وکار، بازار و رد پای برند را ممیزی می‌کنیم — و طرح کسب‌وکار و مدل مالی پشت آن را می‌سازیم.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--02">
              <div className="hc-dot"></div>
              <div className="hc-num">02</div>
              <div>
                <div className="hc-tag">{t("DESIGN", "طراحی")}</div>
                <h4>{t("Strategy", "استراتژی")}<br />{t("& System", "و سیستم")}</h4>
                <p>{t("Brand, GTM and marketing strategy built as one connected system.", "برند، استراتژی ورود به بازار و بازاریابی، به‌صورت یک سیستم به‌هم‌پیوسته ساخته می‌شود.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--03">
              <div className="hc-dot"></div>
              <div className="hc-num">03</div>
              <div>
                <div className="hc-tag">{t("BUILD", "ساخت")}</div>
                <h4>{t("Identity", "هویت")}<br />{t("& Web", "و وب")}</h4>
                <p>{t("Visual identity and website produced to match the strategy exactly.", "هویت بصری و وب‌سایت، دقیقاً هماهنگ با استراتژی تولید می‌شود.")}</p>
              </div>
            </div>

            <div className="hc-card hc-card--04">
              <div className="hc-dot"></div>
              <div className="hc-num">04</div>
              <div>
                <div className="hc-tag">{t("LAUNCH", "راه‌اندازی")}</div>
                <h4>{t("Content", "محتوا")}<br />{t("& Rollout", "و عرضه")}</h4>
                <p>{t("Launch content ships across channels, KPIs tracked from day one.", "محتوای راه‌اندازی در همه‌ی کانال‌ها عرضه می‌شود و شاخص‌های کلیدی از روز نخست پایش می‌شوند.")}</p>
              </div>
            </div>
          </div>

          <div className="how-title">
            <span className="editorial-label">{t("/ HOW IT WORKS", "/ چطور کار می‌کند")}</span>
            <h2 className="editorial-h2"><span className="eh2-outline">{t("ONE", "یک")}</span><br /><span className="eh2-solid">{t("STUDIO,", "استودیو،")}</span><br /><span className="eh2-purple">{t("FOUR MOVES.", "چهار حرکت.")}</span></h2>
            <p>{t("Four connected moves — from diagnosis to launch — run as one continuous system, not four separate hand-offs.", "چهار حرکت به‌هم‌پیوسته — از تشخیص تا راه‌اندازی — به‌صورت یک سیستم پیوسته اجرا می‌شوند، نه چهار تحویل جداگانه.")}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
