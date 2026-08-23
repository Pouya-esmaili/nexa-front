"use client";

import { useLang } from "@/components/global/LanguageProvider";

const DELIVERABLES = [
  { title: "UX Strategy", titleFa: "استراتژی UX" },
  { title: "Information Architecture", titleFa: "معماری اطلاعات" },
  { title: "Wireframes", titleFa: "وایرفریم" },
  { title: "UI Design", titleFa: "طراحی رابط کاربری" },
  { title: "Design System", titleFa: "سیستم طراحی" },
  { title: "Responsive Design", titleFa: "طراحی واکنش‌گرا" },
  { title: "Prototype", titleFa: "پروتوتایپ" },
  { title: "Interaction Design", titleFa: "طراحی تعامل" },
];

export default function Output() {
  const { t, n } = useLang();
  return (
    <section className="section output">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("/ What You Get", "/ آنچه دریافت می‌کنید")}</span>
          <h2 className="h2">
            <span className="outline">{t("What You'll", "خروجی")}</span>
            <span className="solid">{t("Take", "پروژه شما")}</span>
            <span className="purple">{t("Away.", "چیست؟")}</span>
          </h2>
        </div>

        <div className="deliverables-strip" aria-label="Web design deliverables">
          {DELIVERABLES.map((d, i) => (
            <div className="deliverable" key={d.title}>
              <span className="deliverable__n">{n(String(i + 1).padStart(2, "0"))}</span>
              <span className="deliverable__title">{t(d.title, d.titleFa)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
