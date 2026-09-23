"use client";

import { useLang } from "@/components/global/LanguageProvider";

const ROWS = [
  { num: "01", title: "No direction", titleFa: "بدون مسیر مشخص", desc: "Ideas change every week because no shared message guides what gets made.", descFa: "هر هفته ایده‌ها تغییر می‌کنند، چون پیام واحدی وجود ندارد که مسیر تولید محتوا را مشخص کند." },
  { num: "02", title: "No consistency", titleFa: "بدون انسجام", desc: "Every post looks and sounds different, so the brand never becomes recognizable.", descFa: "هر پست ظاهر و لحن متفاوتی دارد و در نتیجه، برند به تصویری متمایز و قابل‌تشخیص تبدیل نمی‌شود." },
  { num: "03", title: "No business role", titleFa: "بدون نقش مشخص در کسب‌وکار", desc: "Content gets published without a clear job—attention, trust, demand or conversion.", descFa: "محتوا منتشر می‌شود، بدون اینکه مشخص باشد قرار است چه کاری انجام دهد؛ جلب توجه، ایجاد اعتماد، ایجاد تقاضا یا تبدیل مخاطب به مشتری." },
];

export default function Problem() {
  const { t, n } = useLang();
  return (
    <section className="vi-section cc-problem2">
      <div className="wrap">
        <div>
          <span className="vi-label">{t("/ THE PROBLEM", "/ مشکل چیست؟")}</span>
          <h2 className="editorial-h2">
            <span className="eh2-outline">{t("RANDOM POSTS", "پست‌های پراکنده،")}</span>
            <span className="eh2-purple">{t("DON'T BUILD A BRAND.", "برند نمی‌سازند.")}</span>
          </h2>
        </div>
        <div className="cc-problem2__stage">
          <div className="cc-problem2__noise">
            <img className="cc-problem2__visual" src="/images/content-creation/002-problem-visual.jpg" alt={t("Nexa Visa social content examples", "نمونه‌های محتوای اجتماعی نکسا ویزا")} loading="lazy" />
          </div>
          <div className="cc-problem2__diagnosis">
            {ROWS.map((r) => (
              <div className="cc-problem2__row" key={r.num}>
                <span className="cc-problem2__num">{n(r.num)}</span>
                <h3>{t(r.title, r.titleFa)}</h3>
                <p>{t(r.desc, r.descFa)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
