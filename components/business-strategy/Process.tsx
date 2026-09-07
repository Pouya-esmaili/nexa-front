"use client";

import { Fragment } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const STEPS = [
  { num: "01", icon: "proc-ico-discover", title: "Discover", titleFa: "کشف و شناخت", desc: "Understand ambition, context, constraints, and the decision at hand.", descFa: "درک اهداف، شرایط، محدودیت‌ها و تصمیمی که کسب‌وکار با آن روبه‌روست." },
  { num: "02", icon: "proc-ico-analyze", title: "Analyze", titleFa: "تحلیل", desc: "Study customers, markets, competitors, signals, and internal realities.", descFa: "بررسی مشتریان، بازار، رقبا، روندها و واقعیت‌های درون کسب‌وکار." },
  { num: "03", icon: "proc-ico-define", title: "Define", titleFa: "تعیین مسیر", desc: "Frame the opportunity and make the critical strategic choices explicit.", descFa: "تعریف فرصت و روشن‌کردن مهم‌ترین انتخاب‌ها و اولویت‌های استراتژیک." },
  { num: "04", icon: "proc-ico-design", title: "Design", titleFa: "طراحی", desc: "Build the business, brand, market, and activation system.", descFa: "ساخت یک سیستم منسجم برای مدل کسب‌وکار، برند، ورود به بازار و رشد." },
  { num: "05", icon: "proc-ico-activate", title: "Activate", titleFa: "اجرا", desc: "Translate strategy into priorities, owners, experiments, and measurement.", descFa: "تبدیل استراتژی به اولویت‌های مشخص، مسئولیت‌ها، اقدامات آزمایشی و معیارهای سنجش." },
];

export default function Process() {
  const { t, n } = useLang();
  return (
    <section id="process" className="process-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="ey">{t("/ Our Process", "/ فرآیند ما")}</span>
            <h2 className="title">
              <span className="out">{t("Clarity Before", "شفافیت،")}</span>
              <span>{t("Complexity.", "نقطه‌ی شروع")}</span>
              <span className="purple">{t("Always.", "هر تصمیمی")}</span>
            </h2>
          </div>
          <p>
            {t(
              "A focused process that turns evidence and stakeholder knowledge into decisions teams can use.",
              "فرآیندی متمرکز که داده‌ها، شناخت بازار و دیدگاه ذی‌نفعان را به تصمیم‌هایی روشن و قابل اجرا تبدیل می‌کند."
            )}
          </p>
        </div>
        <div className="process-path">
          {STEPS.map((s, i) => (
            <Fragment key={s.num}>
              <article className="proc-step">
                <div className="proc-top">
                  <span className="proc-no">{n(s.num)}</span>
                  <div className={`proc-ico ${s.icon}`}><i></i></div>
                </div>
                <h3>{t(s.title, s.titleFa)}</h3>
                <p>{t(s.desc, s.descFa)}</p>
              </article>
              {i < STEPS.length - 1 && <i className="proc-arrow"></i>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
