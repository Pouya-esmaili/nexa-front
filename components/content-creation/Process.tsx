"use client";

import { Fragment } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const STEPS = [
  { num: "01", title: "Discover", titleFa: "شناخت", desc: "Understand the business & audience", descFa: "کسب‌وکار و مخاطبان شما را به‌خوبی می‌شناسیم.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg> },
  { num: "02", title: "Strategize", titleFa: "استراتژی", desc: "Define pillars & direction", descFa: "ستون‌های محتوایی و مسیر خلاقانه برند را مشخص می‌کنیم.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> },
  { num: "03", title: "Create", titleFa: "تولید", desc: "Turn ideas into content", descFa: "ایده‌ها را به محتوای واقعی و قابل انتشار تبدیل می‌کنیم.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg> },
  { num: "04", title: "Optimize", titleFa: "بهینه‌سازی", desc: "Refine for consistency", descFa: "محتوا را برای حفظ انسجام و اثربخشی بهتر، refine می‌کنیم.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg> },
  { num: "05", title: "Distribute", titleFa: "انتشار", desc: "Publish to the right channels", descFa: "محتوا را در کانال درست و در زمان مناسب به دست مخاطب می‌رسانیم.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg> },
];

function ArrowIcon() {
  return <svg className="cc-pipe__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>;
}

export default function Process() {
  const { t, n } = useLang();
  return (
    <section className="vi-section cc-rail-section" id="process">
      <div className="wrap">
        <span className="vi-label">{t("/ HOW WE WORK", "/ فرآیند همکاری")}</span>
        <h2 className="editorial-h2">
          <span className="eh2-outline">{t("FROM IDEA", "از ایده")}</span> <span className="eh2-solid">{t("TO", "تا")}</span> <span className="eh2-purple">{t("OUTPUT.", "انتشار.")}</span>
        </h2>
        <div className="cc-pipe">
          {STEPS.map((s, i) => (
            <Fragment key={s.num}>
              <div className="cc-pipe__seg">
                <span className="cc-pipe__num">{n(s.num)}</span>
                <div className="cc-pipe__icon">{s.icon}</div>
                <h4>{t(s.title, s.titleFa)}</h4>
                <p>{t(s.desc, s.descFa)}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="cc-pipe__connector"><ArrowIcon /></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
