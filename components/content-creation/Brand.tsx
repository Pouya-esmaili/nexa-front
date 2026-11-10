"use client";

import { useLang } from "@/components/global/LanguageProvider";

const COL1 = ["01.png", "02.png", "03.png", "04.png", ];
const COL2 = ["05.png", "06.png", "07.png", "08.png",];

function MarqueeColumn({ items, direction }: { items: string[]; direction: "up" | "down" }) {
  return (
    <div className="cc-mq-col">
      <div className={`cc-mq-track cc-mq-track--${direction}`}>
        {[0, 1].map((copy) =>
          items.map((img) => (
            <div className="cc-mq-card" key={`${copy}-${img}`}>
              <img className="cc-mq-card__img" src={`/images/content-creation/${img}`} alt={copy === 0 ? "Content sample" : ""} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function Brand() {
  const { t } = useLang();
  return (
    <section className="vi-section cc-showcase" id="brand">
      <div className="wrap">
        <div className="cc-showcase__grid">
          <div className="cc-mq-wrap">
            <MarqueeColumn items={COL1} direction="up" />
            <MarqueeColumn items={COL2} direction="down" />
            <div className="cc-mq-fade cc-mq-fade--top"></div>
            <div className="cc-mq-fade cc-mq-fade--bottom"></div>
          </div>
          <div className="cc-showcase__content">
            <span className="vi-label">{t("/ BRAND CONTENT", "/ محتوای برند")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("BRAND", "محتوای")}</span>
              <span className="eh2-purple">{t("CONTENT.", "برند.")}</span>
            </h2>
            <p className="cc-showcase__desc">
              {t(
                "The story behind the brand — founders, culture, values and thought leadership — turned into content that makes people care, not just look.",
                "داستان برند، بنیان‌گذاران، فرهنگ، ارزش‌ها و دیدگاه‌های تخصصی شما را به محتوایی تبدیل می‌کنیم که مخاطب را درگیر می‌کند؛ محتوایی که فقط دیده نمی‌شود، بلکه ارتباط می‌سازد."
              )}
            </p>
            <div className="cc-cat__tags cc-showcase__tags">
              <span className="cc-cat__tag">{t("Brand Stories", "داستان برند")}</span>
              <span className="cc-cat__tag">{t("Thought Leadership", "رهبری فکری")}</span>
              <span className="cc-cat__tag">{t("Educational", "محتوای آموزشی")}</span>
              <span className="cc-cat__tag">{t("Founder Content", "محتوای بنیان‌گذاران")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
