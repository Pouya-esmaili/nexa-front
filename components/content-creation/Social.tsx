"use client";

import { useLang } from "@/components/global/LanguageProvider";

const COL1 = [
  { img: "social-01.jpg", alt: "Cream product campaign artwork" },
  { img: "social-02.jpg", alt: "Yam Yam product content" },
  { img: "social-03.png", alt: "Colorful fruit gummies product content" },
  { img: "social-04.png", alt: "Yara perfume product content" },
];
const COL2 = [
  { img: "social-05.jpg", alt: "Lumina skincare campaign artwork" },
  { img: "social-06.png", alt: "Macaron social campaign artwork" },
  { img: "social-07.png", alt: "Libre perfume product content" },
];

function MarqueeColumn({ items, direction }: { items: typeof COL1; direction: "up" | "down" }) {
  return (
    <div className="cc-social-col">
      <div className={`cc-social-track cc-social-track--${direction}`}>
        {[0, 1].map((copy) => (
          <div className="cc-social-sequence" key={copy} aria-hidden={copy === 1}>
            {items.map((it) => (
              <div className="cc-social-card" key={it.img}>
                <img src={`/images/content-creation/${it.img}`} alt={copy === 0 ? it.alt : ""} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Social() {
  const { t } = useLang();
  return (
    <section className="vi-section cc-showcase" id="social">
      <div className="wrap">
        <div className="cc-showcase__grid">
          <div className="cc-social-gallery">
            <MarqueeColumn items={COL1} direction="up" />
            <MarqueeColumn items={COL2} direction="down" />
            <div className="cc-mq-fade cc-mq-fade--top"></div>
            <div className="cc-mq-fade cc-mq-fade--bottom"></div>
          </div>
          <div className="cc-showcase__content">
            <span className="vi-label">{t("/ SOCIAL CONTENT", "/ محتوای شبکه‌های اجتماعی")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("SOCIAL", "شبکه‌های")}</span>
              <span className="eh2-purple">{t("CONTENT.", "اجتماعی.")}</span>
            </h2>
            <p className="cc-showcase__desc">
              {t(
                "Scroll-stopping posts, carousels and campaigns built for how people actually use social platforms — fast, visual, native to each channel.",
                "پست‌های چشم‌گیر، کاروسل‌ها و کمپین‌هایی که متناسب با رفتار واقعی مخاطبان در شبکه‌های اجتماعی طراحی می‌شوند؛ سریع، بصری و متناسب با زبان هر پلتفرم."
              )}
            </p>
            <div className="cc-cat__tags cc-showcase__tags">
              <span className="cc-cat__tag">{t("Carousels", "کاروسل‌ها")}</span>
              <span className="cc-cat__tag">{t("Static Posts", "پست‌های گرافیکی")}</span>
              <span className="cc-cat__tag">{t("Stories", "استوری")}</span>
              <span className="cc-cat__tag">{t("Social Campaigns", "کمپین‌های شبکه‌های اجتماعی")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
