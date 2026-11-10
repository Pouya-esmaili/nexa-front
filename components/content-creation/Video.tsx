"use client";

import { useRef } from "react";
import { useLang } from "@/components/global/LanguageProvider";

const CARDS = [
  {
    type: "video" as const,
    src: "video_2026-09-23_12-13-19.mp4",
    w: 900,
    h: 600,
    title: "Content Motion",
    titleFa: "محتوای موشن",
  },
  {
    type: "video" as const,
    src: "video_2026-09-23_12-13-31.mp4",
    w: 720,
    h: 720,
    title: "Content Motion",
    titleFa: "محتوای موشن",
  },
  {
    type: "video" as const,
    src: "motion-03.mp4",
    w: 700,
    h: 584,
    title: "Brand Motion",
    titleFa: "برند موشن",
  },
  {
    type: "video" as const,
    src: "video_2026-09-23_12-34-30.mp4",
    w: 640,
    h: 240,
    title: "Business Motion",
    titleFa: " بیزینس موشن",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function MotionCard({
  card,
  hint,
}: {
  card: (typeof CARDS)[number];
  hint: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pause = () => {
    videoRef.current?.pause();
  };

  return (
    <figure
      className="cc-motion-card"
      tabIndex={0}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <video
        ref={videoRef}
        className="cc-motion-media"
        muted
        loop
        playsInline
        preload="metadata"
        width={card.w}
        height={card.h}
      >
        <source
          src={`/images/content-creation/${card.src}`}
          type="video/mp4"
        />
      </video>

      <span className="cc-motion-play" aria-hidden="true">
        <PlayIcon />
      </span>

      <figcaption className="cc-motion-caption">
        <strong>{card.title}</strong>
        <span>{hint}</span>
      </figcaption>
    </figure>
  );
}

export default function Video() {
  const { t } = useLang();

  return (
    <section
      className="vi-section cc-showcase cc-showcase--visual-right cc-showcase--dark"
      id="video"
    >
      <div className="wrap">
        <div className="cc-showcase__grid">
          <div className="cc-motion-gallery">
            <div className="cc-motion-track">
              {[0, 1].map((copy) => (
                <div className="cc-motion-sequence" key={copy}>
                  {CARDS.map((c) => (
                    <MotionCard
                      card={c}
                      key={`${copy}-${c.src}`}
                      hint={t("Hover or click", "هاور یا کلیک کنید")}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="cc-motion-fade cc-motion-fade--top"></div>
            <div className="cc-motion-fade cc-motion-fade--bottom"></div>
          </div>

          <div className="cc-showcase__content">
            <span className="vi-label">
              {t("/ VIDEO & MOTION", "/ ویدئو و موشن")}
            </span>

            <h2 className="editorial-h2">
              <span className="eh2-outline">
                {t("VIDEO", "ویدئو")}
              </span>

              <span className="eh2-purple">
                {t("& MOTION.", "و موشن.")}
              </span>
            </h2>

            <p className="cc-showcase__desc">
              {t(
                "Short-form video, motion graphics and reels that bring the brand to life in movement — built for sound-off scrolling and full-attention watching alike.",
                "ویدئوهای کوتاه، موشن‌گرافیک و ریلزهایی که هویت برند را در قالب حرکت و تصویر زنده می‌کنند؛ چه مخاطب بدون صدا تماشا کند، چه با تمام توجه پای ویدئو بنشیند."
              )}
            </p>

            <div className="cc-cat__tags cc-showcase__tags">
              <span className="cc-cat__tag">
                {t("Short-form Video", "ویدئوهای کوتاه")}
              </span>

              <span className="cc-cat__tag">
                {t("Motion Graphics", "موشن‌گرافیک")}
              </span>

              <span className="cc-cat__tag">
                {t("Reels", "ریلز")}
              </span>

              <span className="cc-cat__tag">
                {t("Brand Videos", "ویدئوهای برند")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}