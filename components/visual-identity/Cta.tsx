"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Cta() {
  const { t } = useLang();
  return (
    <section className="vi-cta" id="cta">
      <div className="wrap">
        <span className="vi-label" style={{ color: "var(--yellow)" }}>{t("/ READY?", "/ آماده‌اید؟")}</span>
        <h2 className="editorial-h2">
          <span className="eh2-outline" style={{ WebkitTextStrokeColor: "#fff" }}>{t("READY TO BUILD A BRAND", "وقت آن است برندی بسازید")}</span>
          <br />
          <span className="eh2-purple" style={{ color: "var(--yellow)" }}>{t("THAT LOOKS THE PART?", "که درخور کسب‌وکارتان باشد.")}</span>
        </h2>
        <p>{t("Tell us about your business. We'll tell you exactly what we'd design and what it costs — no pitch decks, no upsells.", "درباره کسب‌وکارتان با ما صحبت کنید. دقیقاً به شما می‌گوییم چه هویتی برای آن طراحی می‌کنیم و هزینه آن چقدر خواهد بود؛ بدون ارائه‌های تبلیغاتی، بدون فروش خدمات اضافه.")}</p>
        <a href="#cta" className="btn-primary">{t("Book Discovery Call", "رزرو جلسه آشنایی →")}</a>
        <div className="vi-cta__note">{t("Fixed price · Proposal in 48 hours · Cancel anytime", "قیمت ثابت · ارائه پیشنهاد ظرف ۴۸ ساعت · امکان لغو در هر زمان")}</div>
      </div>
    </section>
  );
}
