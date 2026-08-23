"use client";

import { useLang } from "@/components/global/LanguageProvider";

const STEPS = [
  { num: "01", title: "Discover", titleFa: "شناخت و کشف", artifact: "Research Map", artifactFa: "نقشه راه" },
  { num: "02", title: "Define", titleFa: "تعریف و برنامه‌ریزی", artifact: "Sitemap", artifactFa: "نقشه سایت" },
  { num: "03", title: "Wireframe", titleFa: "طراحی وایرفریم", artifact: "Wireframe", artifactFa: "وایرفریم" },
  { num: "04", title: "Design", titleFa: "طراحی رابط کاربری", artifact: "UI System", artifactFa: "سیستم UI" },
  { num: "05", title: "Build", titleFa: "توسعه", artifact: "Working Website", artifactFa: "وب‌سایت کاربردی" },
  { num: "06", title: "Launch", titleFa: "راه‌اندازی", artifact: "Live Interface", artifactFa: "وب‌سایت آنلاین" },
];

function ArtDiscover() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <path className="m-draw" d="M40 90 Q65 60 95 65" stroke="rgba(255,255,255,.3)" strokeWidth="1.6" strokeDasharray="1 6" fill="none" />
      <path className="m-draw" d="M95 65 Q120 70 150 40" stroke="rgba(255,255,255,.3)" strokeWidth="1.6" strokeDasharray="1 6" fill="none" style={{ animationDelay: ".3s" }} />
      <path className="m-draw" d="M95 65 Q100 90 130 95" stroke="rgba(255,255,255,.3)" strokeWidth="1.6" strokeDasharray="1 6" fill="none" style={{ animationDelay: ".6s" }} />
      <circle className="m-pulse" cx="40" cy="90" r="4" fill="var(--yellow)" />
      <circle cx="95" cy="65" r="6" fill="var(--purple)" />
      <circle className="m-pulse" cx="150" cy="40" r="4" fill="var(--yellow)" style={{ animationDelay: ".5s" }} />
      <circle className="m-pulse" cx="130" cy="95" r="4" fill="var(--yellow)" style={{ animationDelay: "1s" }} />
    </svg>
  );
}

function ArtDefine() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <rect className="m-float" x="86" y="18" width="28" height="16" rx="3" fill="var(--purple)" />
      <path className="m-draw" d="M100 34 V48" stroke="rgba(255,255,255,.35)" strokeWidth="1.6" strokeDasharray="1 4" />
      <path d="M100 48 H60 M100 48 H140" stroke="rgba(255,255,255,.35)" strokeWidth="1.6" />
      <path d="M60 48 V62 M140 48 V62 M100 48 V62" stroke="rgba(255,255,255,.35)" strokeWidth="1.6" />
      <rect x="48" y="62" width="24" height="14" rx="2.5" fill="#232529" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" />
      <rect x="88" y="62" width="24" height="14" rx="2.5" fill="#232529" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" />
      <rect x="128" y="62" width="24" height="14" rx="2.5" fill="#232529" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" />
      <circle className="m-pulse" cx="60" cy="69" r="2" fill="var(--yellow)" />
      <circle className="m-pulse" cx="100" cy="69" r="2" fill="var(--yellow)" style={{ animationDelay: ".4s" }} />
      <circle className="m-pulse" cx="140" cy="69" r="2" fill="var(--yellow)" style={{ animationDelay: ".8s" }} />
    </svg>
  );
}

function ArtWireframe() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <rect x="40" y="20" width="120" height="80" rx="4" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.6" />
      <path d="M40 34 H160" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" />
      <rect className="m-float" x="50" y="44" width="42" height="42" fill="none" stroke="var(--yellow)" strokeWidth="1.4" strokeDasharray="2 3" />
      <path className="m-draw" d="M100 48 H150 M100 58 H140 M100 68 H150 M100 78 H130" stroke="rgba(255,255,255,.35)" strokeWidth="1.6" strokeDasharray="1 5" />
    </svg>
  );
}

function ArtDesign() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <rect className="m-float" x="40" y="24" width="34" height="34" rx="8" fill="var(--purple)" />
      <rect x="82" y="24" width="34" height="34" rx="8" fill="var(--yellow)" />
      <rect x="124" y="24" width="34" height="34" rx="8" fill="#232529" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" />
      <rect x="40" y="66" width="76" height="18" rx="9" fill="none" stroke="var(--yellow)" strokeWidth="1.6" />
      <rect className="m-float" x="124" y="66" width="34" height="18" rx="9" fill="var(--purple)" style={{ animationDelay: ".6s" }} />
    </svg>
  );
}

function ArtBuild() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <rect x="40" y="20" width="120" height="80" rx="4" fill="#101114" stroke="rgba(255,255,255,.3)" strokeWidth="1.6" />
      <path d="M40 34 H160" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" />
      <circle cx="48" cy="27" r="2" fill="rgba(255,255,255,.3)" />
      <circle cx="55" cy="27" r="2" fill="rgba(255,255,255,.3)" />
      <path d="M50 46 H70" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 56 H90" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 66 H100" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 76 H80" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
      <rect className="m-blink" x="83" y="73" width="6" height="8" fill="var(--yellow)" />
    </svg>
  );
}

function ArtLaunch() {
  return (
    <svg viewBox="0 0 200 120" fill="none">
      <rect x="40" y="20" width="120" height="80" rx="4" fill="#fff" stroke="rgba(255,255,255,.2)" strokeWidth="1.2" />
      <path d="M40 32 H160" stroke="var(--line)" strokeWidth="1.2" />
      <rect x="48" y="24" width="16" height="4" rx="2" fill="var(--near-black)" />
      <rect x="130" y="24" width="20" height="5" rx="2.5" fill="var(--purple)" />
      <rect x="50" y="46" width="46" height="7" rx="2" fill="var(--near-black)" opacity=".8" />
      <rect x="50" y="58" width="34" height="4" rx="2" fill="var(--line)" />
      <rect x="50" y="72" width="28" height="12" rx="6" fill="var(--purple)" />
      <rect x="104" y="46" width="48" height="38" rx="4" fill="var(--lav)" />
      <circle className="m-pulse" cx="150" cy="28" r="3" fill="#2ecc71" />
    </svg>
  );
}

const ARTS = [ArtDiscover, ArtDefine, ArtWireframe, ArtDesign, ArtBuild, ArtLaunch];

export default function Process() {
  const { t, n } = useLang();
  return (
    <section id="process" className="section process">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("/ Our Process", "/ فرآیند ما")}</span>
          <h2 className="h2">
            <span className="outline">{t("From Brief", "از ایده")}</span>
            <span className="solid">{t("to", "تا")}</span>
            <span className="purple">{t("Launch.", "راه‌اندازی.")}</span>
          </h2>
          <p>{t("Six stages. Six outputs. One continuous thread.", "شش مرحله، شش خروجی مشخص و یک مسیر منسجم از ایده اولیه تا نسخه نهایی.")}</p>
        </div>
        <div className="pgrid">
          {STEPS.map((s, i) => {
            const Art = ARTS[i];
            return (
              <div className="pcard2" key={s.num}>
                <div className="pcard2__art">
                  <Art />
                </div>
                <div className="pcard2__body">
                  <span className="pcard2__num">{n(s.num)} / {n("06")}</span>
                  <h3 className="pcard2__title">{t(s.title, s.titleFa)}</h3>
                  <p className="pcard2__artifact">{t("Artifact:", "خروجی:")} <b>{t(s.artifact, s.artifactFa)}</b></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
