"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  const description = t(
    "At NEXA, Global Launchpad for Entrepreneurship, Startup Acceleration, and Strategic Investment, Backed by Over 10 Years of Proven Expertise in Business Development, Strategic Planning, and International Market Access.",
    "نکسا, سکوی پرتاب جهانی برای کارآفرینی، شتاب‌دهی استارتاپ‌ها و سرمایه‌گذاری راهبردی؛ با بیش از ۱۰ سال تجربه در توسعه کسب‌وکار، برنامه‌ریزی استراتژیک و گسترش فعالیت در بازارهای بین‌المللی."
  );

  const serviceLinks: [string, string, string][] = [
    ["Entrepreneurship", "کارآفرینی", "/Entrepreneurship"],
    ["Startup", "استارتاپ", "/startup"],
    ["Investment", "سرمایه‌گذاری", "/investment"],
    ["Advisory", "مشاوره", "/advisory"],
  ];

  const aboutLinks: [string, string, string][] = [
    ["Our Story", "داستان ما", "/our-story"],
    ["Our Team", "تیم ما", "/our-team"],
    ["Contact Us", "تماس با ما", "/contact"],
  ];

  return (
    <footer style={{ background: "#E3E3E3", borderTop: "1px solid #C8C8C8" }} className="pt-12">

      {/* ── Top Row: Logo / Services / About ── */}
      <div className="max-w-[1240px] mx-auto px-6">
        {/* ── Mobile: Brand full-width, then 2-col links ── */}
        {/* ── Desktop: 3-col grid (brand + services + about) ── */}

        {/* Desktop 3-col */}
        <div className="hidden md:grid md:grid-cols-[1.8fr_1fr_1fr] gap-12 pb-9" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <div>
            <Image src="/images/logo.svg" alt="Nexa" width={110} height={38} className="mb-4" />
            <p className="text-[14px] text-[#555] leading-[1.7] max-w-[400px]">
              {description}
            </p>
          </div>
          <div className="md:text-center">
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">{t("Services", "خدمات")}</h5>
            <ul className="space-y-[5px]">
              {serviceLinks.map(([en, fa, h]) => (
                <li key={h}><Link href={h} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">{t(en, fa)}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:text-center">
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">{t("About Nexa", "درباره نکسا")}</h5>
            <ul className="space-y-[5px]">
              {aboutLinks.map(([en, fa, h]) => (
                <li key={h}><Link href={h} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">{t(en, fa)}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: brand full-width */}
        <div className="md:hidden pb-6" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <Image src="/images/logo.svg" alt="Nexa" width={110} height={38} className="mb-4" />
          <p className="text-[14px] text-[#555] leading-[1.7]">
            {description}
          </p>
        </div>

        {/* Mobile: 2-col links */}
        <div className="md:hidden grid grid-cols-2 gap-8 py-6" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <div>
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">{t("Services", "خدمات")}</h5>
            <ul className="space-y-[10px]">
              {serviceLinks.map(([en, fa, h]) => (
                <li key={h}><Link href={h} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">{t(en, fa)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">{t("About Nexa", "درباره نکسا")}</h5>
            <ul className="space-y-[10px]">
              {aboutLinks.map(([en, fa, h]) => (
                <li key={h}><Link href={h} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">{t(en, fa)}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Offices Row ── */}
        <div className="py-7" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-5">{t("Our Offices", "دفاتر ما")}</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <strong className="block text-[14px] font-semibold text-[#1a1a1a] mb-2">{t("Canada", "کانادا")}</strong>
              <div className="flex items-start gap-2 text-[14px] text-[#555] mb-1.5 leading-[1.6]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {t("301-1414 Barclay St, Vancouver, British Columbia, Canada", "۳۰۱-۱۴۱۴ خیابان بارکلی، ونکوور، بریتیش کلمبیا، کانادا")}
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#555]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+16043515951" dir="ltr" className="hover:text-[#8F27FF] transition-colors">+1 (604) 351-5951</a>
              </div>
            </div>

            <div>
              <strong className="block text-[14px] font-semibold text-[#1a1a1a] mb-2">{t("Iran", "ایران")}</strong>
              <div className="flex items-start gap-2 text-[14px] text-[#555] mb-1.5 leading-[1.6]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {t("No. 27, Neom Building (Next to the Tandis Complex), Tajrish Square, Tehran, Iran", "تهران، میدان تجریش، مجتمع نئوم (کنار مجتمع تندیس)، پلاک ۲۷")}
              </div>
              <div className="flex items-start gap-2 text-[14px] text-[#555] mb-1.5 leading-[1.6]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {t("Tala Building, Saadat Abad, Azadi Square, Esfahan", "اصفهان، میدان آزادی، سعادت‌آباد، ساختمان طلا")}
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#555]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+983131311914" dir="ltr" className="hover:text-[#8F27FF] transition-colors">+98 (31) 3131-1914</a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-[18px] flex flex-col items-center md:flex-row md:justify-between gap-4 text-[14px] text-[#555]">
          <span className="order-2 md:order-1">{t("Copyright © 2025 Nexa. All rights reserved.", "© ۲۰۲۵ نکسا. تمام حقوق محفوظ است.")}</span>
          <div className="order-1 md:order-2 flex gap-2.5">
            {/* WhatsApp */}
            <SocialLink href="https://wa.me/message/W72AGOQ5NUN3E1" label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="!w-[21px] !h-[21px]"><path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z" /><path fillRule="evenodd" clipRule="evenodd" d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z" /></svg>
            </SocialLink>
            {/* Telegram */}
            <SocialLink href="#" label="Telegram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="!w-[21px] !h-[21px]"><path fillRule="evenodd" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" strokeLinejoin="round" /></svg>
            </SocialLink>
            {/* Bale */}
            <SocialLink href="#" label="Bale">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.425 23.987a12.218 12.218 0 0 1-2.95-.514 6.578 6.578 0 0 0-.336-.116C4.936 22.303 2.22 19.763.913 16.599a11.92 11.92 0 0 1-.9-4.063C.005 12.377.001 10.246 0 6.74 0 .71-.005 1.137.07.903.23.394.673.05 1.224.005c.421-.034.7.088 1.603.699.562.38 1.119.78 1.796 1.289.315.237.353.261.376.247l.35-.23c.58-.381 1.11-.677 1.7-.945A11.913 11.913 0 0 1 9.766.21a11.19 11.19 0 0 1 2.041-.2c1.14-.016 2.077.091 3.152.36 3.55.888 6.538 3.411 8.028 6.78.492 1.113.845 2.43.945 3.522.033.366.039.43.053.611.008.105.015.406.015.669 0 .783-.065 1.57-.169 2.064a5.474 5.474 0 0 0-.046.26c-.056.378-.214.987-.399 1.535-.205.613-.367.999-.684 1.633a11.95 11.95 0 0 1-2.623 3.436c-.44.396-.829.705-1.26 1.003-.647.445-1.307.812-2.039 1.134-.6.265-1.44.539-2.101.686a11.165 11.165 0 0 1-1.178.202 12.28 12.28 0 0 1-2.076.082zm-.61-5.92c.294-.06.678-.209.864-.337.144-.099.428-.376 2.064-2.013a161.8 161.8 0 0 1 1.764-1.753c.017 0 1.687-1.67 1.687-1.689 0-.02 1.64-1.648 1.661-1.648.01 0 .063-.047.118-.106.467-.495.682-.957.716-1.547.026-.433-.06-.909-.217-1.196a2.552 2.552 0 0 0-.983-1.024c-.281-.163-.512-.233-.888-.27-.306-.031-.688 0-.948.075-.243.07-.603.274-.853.481-.042.035-1.279 1.265-2.748 2.733l-2.671 2.67-1.093-1.09c-.6-.6-1.12-1.114-1.155-1.142a2.419 2.419 0 0 0-1.338-.51c-.404-.013-.91.09-1.224.25a2.89 2.89 0 0 0-.659.526c-.108.12-.287.357-.29.385-.003.03-.009.044-.065.16a2.312 2.312 0 0 0-.224.91c-.011.229-.01.265.019.491.045.353.24.781.51 1.115.05.063.97.992 2.044 2.064 1.507 1.505 1.98 1.97 2.074 2.039.327.24.683.388 1.101.456.182.03.5.016.734-.03z" /></svg>
            </SocialLink>
            {/* Instagram */}
            <SocialLink href="https://www.instagram.com/thenexa.vc?igsh=aHV4N3ZlZzQwdzNn&utm_source=qr" label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </SocialLink>
            {/* LinkedIn */}
            <SocialLink href="https://www.linkedin.com/company/nexa-venture/" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </SocialLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} aria-label={label}
      className="w-10 h-10 bg-[#F4F4F4] border border-[#E2E2E2] rounded-[10px] grid place-items-center text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white hover:border-[#8F27FF] hover:-translate-y-0.5 transition-all [&>svg]:w-[18px] [&>svg]:h-[18px]">
      {children}
    </a>
  );
}
