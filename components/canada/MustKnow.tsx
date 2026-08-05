"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const cards = [
  {
    num: "01",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Federal SUV Closure Reshapes the Landscape",
    titleFa: "بسته شدن SUV فدرال چشم‌انداز را دگرگون می‌کند",
    body: "With federal Start-Up Visa intake controls in effect, serious entrepreneurs are now relying on Provincial Nominee Programs or Quebec's independent streams. The center of gravity has fully shifted.",
    bodyFa: "با اعمال کنترل‌های پذیرش ویزای استارتاپ فدرال، کارآفرینان جدی اکنون به برنامه‌های نامزدی استانی یا جریان‌های مستقل کبک تکیه می‌کنند. مرکز ثقل به‌طور کامل جابه‌جا شده است.",
  },
  {
    num: "02",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Performance Milestones Are Non-Negotiable",
    titleFa: "نقاط عطف عملکرد غیرقابل‌مذاکره‌اند",
    body: "Every provincial program enforces specific investment and operational milestones. Falling short of any threshold can void your nomination — regardless of intent or capital deployed.",
    bodyFa: "هر برنامه‌ی استانی نقاط عطف سرمایه‌گذاری و عملیاتی مشخصی را اعمال می‌کند. عقب ماندن از هر آستانه‌ای می‌تواند نامزدی شما را باطل کند — صرف‌نظر از قصد یا سرمایه‌ی به‌کارگرفته‌شده.",
  },
  {
    num: "03",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "Local Alignment Outweighs Capital",
    titleFa: "همسویی محلی بر سرمایه ارجحیت دارد",
    body: "A generic business plan rarely succeeds. Your venture must align tightly with the province's economic objectives — sector priorities, regional impact, and long-term sustainability.",
    bodyFa: "یک طرح کسب‌وکار عمومی به‌ندرت موفق می‌شود. کسب‌وکار شما باید به‌شدت با اهداف اقتصادی استان همسو باشد — اولویت‌های حوزه‌ای، تأثیر منطقه‌ای و پایداری بلندمدت.",
  },
  {
    num: "04",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>,
    title: "Documentation Determines Outcomes",
    titleFa: "مستندسازی نتایج را تعیین می‌کند",
    body: "Immigration law evolves continuously. Even minor documentation errors can trigger refusals — the regulatory environment leaves little room for ambiguity or improvisation.",
    bodyFa: "قوانین مهاجرت پیوسته در حال تحول‌اند. حتی خطاهای جزئی در مستندسازی می‌توانند منجر به رد شدن شوند — محیط قانون‌گذاری جای کمی برای ابهام یا بداهه‌پردازی باقی می‌گذارد.",
  },
];

export default function MustKnow() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-28 bg-black relative overflow-hidden">
      {/* radial bg glow */}
      <div className="pointer-events-none absolute -top-52 -right-52 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(143,39,255,0.18), transparent 60%)" }} />

      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-white text-center mb-12 relative z-10">
            {t("What Every Entrepreneur Must Know", "آنچه هر کارآفرین باید بداند")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {cards.map((c, i) => (
            <Reveal key={c.num} variant="up" delay={i * 80 + 100}>
              <div
                className="rounded-[20px] p-9 relative overflow-hidden transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#8F27FF";
                  el.style.background = "rgba(143,39,255,0.06)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Background number */}
                <div className="absolute top-5 right-7 text-[76px] font-extrabold tracking-[-0.04em] leading-none pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.35)" }}>
                  {c.num}
                </div>
                {/* Icon */}
                <div className="inline-flex w-[50px] h-[50px] rounded-[12px] items-center justify-center mb-5 text-[#8F27FF]"
                  style={{ background: "rgba(143,39,255,0.15)", border: "1px solid rgba(143,39,255,0.3)" }}>
                  {c.icon}
                </div>
                <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-white mb-3 relative z-10">{t(c.title, c.titleFa)}</h3>
                <p className="text-[14.5px] leading-[1.65] relative z-10" style={{ color: "rgba(255,255,255,0.7)" }}>{t(c.body, c.bodyFa)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
