"use client";

import { useLang } from "@/components/global/LanguageProvider";

export default function Cta() {
  const { t } = useLang();
  return (
    <section className="vi-cta" id="cta">
      <div className="wrap">
        <span className="vi-label" style={{ color: "var(--yellow)" }}>{t("/ READY?", "/ آماده‌اید؟")}</span>
        <h2 className="editorial-h2">
          <span className="eh2-outline" style={{ WebkitTextStrokeColor: "#fff" }}>{t("READY TO BUILD A BRAND", "آماده‌اید برندی بسازید")}</span>
          <br />
          <span className="eh2-purple" style={{ color: "var(--yellow)" }}>{t("THAT LOOKS THE PART?", "که ظاهرش هم در حد کارش باشد؟")}</span>
        </h2>
        <p>{t("Tell us about your business. We'll tell you exactly what we'd design and what it costs — no pitch decks, no upsells.", "درباره‌ی کسب‌وکارتان به ما بگویید. دقیقاً می‌گوییم چه چیزی طراحی می‌کنیم و چقدر هزینه دارد — بدون پیچ‌دک، بدون فروش اضافه.")}</p>
        <a href="#cta" className="btn-primary">{t("Book Discovery Call", "رزرو تماس کشف")}</a>
        <div className="vi-cta__note">{t("Fixed price · Proposal in 48 hours · Cancel anytime", "قیمت ثابت · ارائه‌ی پیشنهاد ظرف ۴۸ ساعت · هر زمان قابل‌لغو")}</div>
      </div>
    </section>
  );
}
