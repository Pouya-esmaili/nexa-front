"use client";
import Link from "next/link";
import Image from "next/image";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const markets = [
  {
    name: "Canada",
    nameFa: "کانادا",
    flag: "/images/Entrepreneurship/cn.svg",
    desc: "Entrepreneur Visa with permanent residency pathway",
    descFa: "ویزای کارآفرینی با مسیر دریافت اقامت دائم",
    href: "/Entrepreneurship/canada",
    img: "/images/Entrepreneurship/canada.webp",
  },
  {
    name: "Spain",
    nameFa: "اسپانیا",
    flag: "/images/Entrepreneurship/ES.svg",
    desc: "Entrepreneur Visa with 20-day fast-track approval",
    descFa: "ویزای کارآفرینی با بررسی سریع ۲۰ روزه",
    href: "/Entrepreneurship/spain",
    img: "/images/Entrepreneurship/spain.webp",
  },
  {
    name: "Finland",
    nameFa: "فنلاند",
    flag: "/images/Entrepreneurship/FI.svg",
    desc: "Entrepreneur Permit for business owners entering EU markets",
    descFa: "مجوز کارآفرینی برای ورود صاحبان کسب‌وکار به بازارهای اتحادیه اروپا",
    href: "/Entrepreneurship/finland",
    img: "/images/Entrepreneurship/finland.webp",
  },
  {
    name: "Portugal",
    nameFa: "پرتغال",
    flag: "/images/Entrepreneurship/PT.svg",
    desc: "D2 Entrepreneur Visa with EU residency path",
    descFa: "ویزای کارآفرینی D2 با مسیر دریافت اقامت اروپا",
    href: "/Entrepreneurship/portugal",
    img: "/images/Entrepreneurship/portugal.webp",
  },
  {
    name: "Netherlands",
    nameFa: "هلند",
    flag: "/images/Entrepreneurship/NT (1).svg",
    desc: "Entrepreneur Visa in Europe's most connected business hub",
    descFa: "ویزای کارآفرینی در یکی از پیشرفته‌ترین مراکز کسب‌وکار اروپا",
    href: "/Entrepreneurship/netherlands",
    img: "/images/Entrepreneurship/netherland.webp",
  },
];

export default function Markets() {
  const { t, lang } = useLang();
  return (
    <section className="py-[90px] bg-[#F7F6F9]">
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14 ">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              {t("Choose Your Market", "مقصد کسب‌وکار خود را انتخاب کنید")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[14px]">
          {markets.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 70}>
              <Link
                href={m.href}
                className="group relative block overflow-hidden text-inherit no-underline"
                style={{
                  borderRadius: 20,
                  height: 300,
                  background: "#000",
                  transition: "transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 24px 48px rgba(0,0,0,.35)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 group-hover:scale-[1.06] transition-transform duration-[600ms] "
                  style={{ filter: "brightness(.72)" }}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover"
                    quality={75}
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 100vw"
                    priority={i < 3}
                  />
                </div>
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg,rgba(0,0,0,.05) 0%,rgba(0,0,0,.72) 100%)" }}
                />

                {/* Flag top-left */}
                <div
                  className="absolute top-[14px] left-[14px] z-[3] rounded-[5px] overflow-hidden leading-none"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,.35)" }}
                >
                  <Image src={m.flag} alt={m.name} width={40} height={26} className="object-contain" />
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 px-[20px] py-[22px] z-[2]">
                  <div className="text-white font-bold text-[16px] mb-1 tracking-[-0.01em]">{t(m.name, m.nameFa)}</div>
                  <p className="text-white/65 text-[12px] leading-[1.5] mb-3">{t(m.desc, m.descFa)}</p>
                  <span
                    className={`inline-flex items-center gap-[7px] text-[13px] font-semibold text-white px-4 py-2 rounded-full backdrop-blur-[8px] border border-white/30 bg-white/15 transition-all duration-[250ms] group-hover:bg-[#8F27FF] group-hover:border-[#8F27FF] ${lang === "fa" ? "group-hover:-translate-x-[3px]" : "group-hover:translate-x-[3px]"}`}
                  >
                    {t("Explore Program", "مشاهده برنامه")}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className={`w-[13px] h-[13px] transition-transform duration-[250ms] ${lang === "fa" ? "rotate-180 group-hover:-translate-x-[3px]" : "group-hover:translate-x-[3px]"}`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Row>
    </section>
  );
}
