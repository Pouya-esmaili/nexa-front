"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function AlertBanner() {
  const { t } = useLang();
  return (
    <div style={{ background: "#FFE600" }} className="py-14">
      <Row>
        <Reveal variant="up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-[22px] font-bold text-black tracking-[-0.02em] mb-2">
                {t("2026 Program Update — Applications Now Open", "به‌روزرسانی برنامه ۲۰۲۶ — پذیرش درخواست‌ها فعال است")}
              </h3>
              <p className="text-[14.5px] text-[#333] leading-relaxed max-w-[56ch]">
                {t("Business Finland is actively evaluating applications for the Finland Startup Permit. Financial thresholds and program criteria are current as of 2026. Our team can assess your eligibility within 48 hours.", "Business Finland در حال حاضر درخواست‌های مربوط به Finland Startup Permit را بررسی می‌کند. الزامات مالی و معیارهای برنامه در این صفحه بر اساس شرایط سال ۲۰۲۶ تنظیم شده‌اند. تیم نکسا می‌تواند ظرف ۴۸ ساعت شرایط اولیه شما را ارزیابی کند.")}
              </p>
            </div>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-semibold rounded-full text-[14px] transition-all hover:bg-[#8F27FF] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              {t("Check My Eligibility →", "واجد شرایط بودنم را بررسی کنید ←")}
            </a>
          </div>
        </Reveal>
      </Row>
    </div>
  );
}
