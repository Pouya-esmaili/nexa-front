"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useLang } from "@/components/global/LanguageProvider";

/* Persian labels for roles */
const ROLE_FA: Record<string, string> = {
  "Operations Manager": "مدیر عملیات",
  COO: "مدیر ارشد عملیات",
  "HR & Administrative": "منابع انسانی و اداری",
  "Sales Officer": "کارشناس فروش",
  "Business Advisor": "مشاور کسب‌وکار",
  "Front-End Developer": "توسعه‌دهنده‌ی فرانت‌اند",
  "AI Engineer": "مهندس هوش مصنوعی",
  Accountant: "مدیر مالی",
  "UI/UX Designer": "طراح UI/UX",
  "Back-End Developer": "توسعه‌دهنده‌ی بک‌اند",
  "Marketing Specialist": "کارشناس بازاریابی",
  "WordPress Developer": "توسعه‌دهنده وردپرس",
};

/* Persian labels for departments */
const DEPT_FA: Record<string, string> = {
  Operations: "عملیات",
  Leadership: "رهبری",
  Sales: "فروش",
  Advisory: "مشاوره",
  Tech: "فناوری",
  Finance: "مالی",
  Design: "طراحی",
  Marketing: "بازاریابی",
};

/* Persian names */
const NAME_FA: Record<string, string> = {
  "Mahsa Esmaeili": "مهسا اسماعیلی",
  "Iman Nasr Esfahani": "ایمان نصر اصفهانی",
  "Lida Parvizi": "لیدا پرویزی",
  "Gelareh Bahrami": "گلاره بهرامی",
  "Parastoo Sanaifar": "پرستو صنایفَر",
  "Milad Fatemi": "میلاد فاطمی",
  "Mehdi Esmaeili": "مهدی اسماعیلی",
  "Sajjad Momeni": "سجاد مومنی",
  "Ali Soleimani": "علی سلیمانی",
  "Narjes Orouji": "نرگس اوروجی",
  "Amir Esfahanizade": "امیر اصفهانی‌زاده",
  "Pouya Shafaghatiyan": "پویا شفقتیان",
  "Kiyana Mehrasa": "کیانا مهرآسا",
};

type Member = {
  name: string;
  role: string;
  dept: string;
  image: string;
  linkedin: string;

  /** CSS object-position for the photo, e.g. "center 20%" */
  pos?: string;

  /** Extra zoom applied to the photo, e.g. 1.15 */
  zoom?: number;
};

const team: Member[] = [
  {
    name: "Mahsa Esmaeili",
    role: "Operations Manager",
    dept: "Operations",
    image: "/images/ourteam/mahsa.jpg",
    linkedin: "https://www.linkedin.com/in/mahsa-esmaili",
  },

  {
    name: "Iman Nasr Esfahani",
    role: "COO",
    dept: "Leadership",
    image: "/images/ourteam/iman.jpg",
    linkedin: "https://www.linkedin.com/in/iman-nasr-esfahani",
  },

  {
    name: "Lida Parvizi",
    role: "HR & Administrative",
    dept: "Operations",
    image: "/images/ourteam/lidaa.JPG",
    linkedin: "https://www.linkedin.com/in/lida-parvizi-ab7b8721a",
  },

  {
    name: "Gelareh Bahrami",
    role: "Sales Officer",
    dept: "Sales",
    image: "/images/ourteam/gelareh.jpg",
    linkedin:
      "https://www.linkedin.com/in/gelareh-bahrami-baba59185",
    pos: "center 20%",
  },

  {
    name: "Parastoo Sanaifar",
    role: "Business Advisor",
    dept: "Advisory",
    image: "/images/ourteam/parastoo.jpg",
    linkedin: "https://www.linkedin.com/in/parastoo-sanaifar",
  },

  {
    name: "Milad Fatemi",
    role: "Business Advisor",
    dept: "Advisory",
    image: "/images/ourteam/milad.jpg",
    linkedin: "https://www.linkedin.com/in/miladfatemi",
    pos: "center 20%",
  },

  {
    name: "Mehdi Esmaeili",
    role: "Front-End Developer",
    dept: "Tech",
    image: "/images/ourteam/pouya.jpg",
    linkedin: "",
  },

  {
    name: "Sajjad Momeni",
    role: "AI Engineer",
    dept: "Tech",
    image: "/images/ourteam/sajjad.jpg",
    linkedin: "https://www.linkedin.com/in/sajjad-momeni-17ab4778",
  },

  {
    name: "Ali Soleimani",
    role: "Accountant",
    dept: "Finance",
    image: "/images/ourteam/ali.jpg",
    linkedin: "https://www.linkedin.com/in/ali-soleimani-b761b6223",
  },

  {
    name: "Narjes Orouji",
    role: "UI/UX Designer",
    dept: "Design",
    image: "/images/ourteam/narges.jpg",
    linkedin: "https://www.linkedin.com/in/narges-orouji-7ab846214",
  },

  {
    name: "Amir Esfahanizade",
    role: "Back-End Developer",
    dept: "Tech",
    image: "/images/ourteam/amir.jpg",
    linkedin:
      "https://www.linkedin.com/in/amir-esfahanizadeh-151522364",
  },

  {
    name: "Pouya Shafaghatiyan",
    role: "Marketing Specialist",
    dept: "Marketing",
    image: "/images/ourteam/pooya.JPG",
    linkedin:
      "https://www.linkedin.com/in/pouya-shafaghatian-a772a82b4",
    zoom: 1.45,
  },

  {
    name: "Kiyana Mehrasa",
    role: "WordPress Developer",
    dept: "Marketing",
    image: "/images/ourteam/kiana.JPG",
    linkedin:
      "https://www.linkedin.com/in/kiana-mehrasa-00aa38380",
  },
];

const DELAYS = [
  60, 130, 200, 270, 340, 410, 480,
  550, 620, 690, 760, 830, 900,
];

export default function TeamGrid() {
  const { t } = useLang();

  const [headVis, setHeadVis] = useState(false);
  const [gridVis, setGridVis] = useState(false);

  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showIfVisible = (
      el: HTMLElement | null,
      set: (v: boolean) => void
    ) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        set(true);
        return;
      }

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            set(true);
            obs.disconnect();
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      obs.observe(el);

      return () => obs.disconnect();
    };

    const cleanupHead = showIfVisible(
      headRef.current,
      setHeadVis
    );

    const cleanupGrid = showIfVisible(
      gridRef.current,
      setGridVis
    );

    return () => {
      cleanupHead?.();
      cleanupGrid?.();
    };
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pt-[60px] pb-[88px]">

      {/* Header */}
      <div
        ref={headRef}
        className={`
          text-center mb-[52px]
          transition-all duration-700
          delay-75
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            headVis
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-1.2px] leading-[1.1]">
          {t("Full Team", "تیم ما")}
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-[14px] lg:gap-[18px]"
      >
        {team.map((member, i) => {
          const name = member.name.trim();
          const role = member.role.trim();
          const dept = member.dept.trim();

          return (
            <div
              key={member.name}
              className={`
                border border-[#E8E8E8]
                rounded-[12px]
                overflow-hidden
                bg-white
                transition-all duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:border-[#DEC8FF]
                hover:shadow-[0_10px_40px_rgba(143,39,255,0.09)]
                hover:-translate-y-1
                group
                ${
                  gridVis
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{
                transitionDelay: gridVis
                  ? `${DELAYS[i]}ms`
                  : "0ms",
              }}
            >
              {/* Photo */}
              <div className="relative w-full overflow-hidden bg-[#FAF6FF] aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  style={{
                    ...(member.pos
                      ? { objectPosition: member.pos }
                      : {}),
                    ...(member.zoom
                      ? { transform: `scale(${member.zoom})` }
                      : {}),
                  }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="p-4 pb-[18px]">

                {/* Name */}
                <div className="text-[14px] font-bold mb-[3px] tracking-[-0.2px]">
                  {t(
                    name,
                    NAME_FA[name] ?? name
                  )}
                </div>

                {/* Role */}
                <div className="text-[12px] text-[#8F27FF] font-semibold mb-[9px]">
                  {t(
                    role,
                    ROLE_FA[role] ?? role
                  )}
                </div>

                {/* Department */}
                <div className="inline-block bg-[#F7F7F7] border border-[#E8E8E8] text-[#A0A0A0] text-[11px] px-[9px] py-[3px] rounded-full font-medium mb-[9px]">
                  {t(
                    dept,
                    DEPT_FA[dept] ?? dept
                  )}
                </div>

                {/* LinkedIn */}
                {member.linkedin && (
                  <div className="flex gap-[6px]">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="
                        w-[26px]
                        h-[26px]
                        border border-[#E8E8E8]
                        rounded-md
                        flex items-center justify-center
                        text-[#A0A0A0]
                        text-[10px]
                        font-bold
                        no-underline
                        transition-colors duration-200
                        hover:border-[#8F27FF]
                        hover:text-[#8F27FF]
                      "
                    >
                      in
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}