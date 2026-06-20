"use client";

import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function AlertBanner() {
  return (
    <div style={{ background: "#FFE600" }} className="py-14">
      <Row>
        <Reveal variant="up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-[22px] font-bold text-black tracking-[-0.02em] mb-2">
                2026 Program Update — Applications Now Open
              </h3>
              <p className="text-[14.5px] text-[#333] leading-relaxed max-w-[56ch]">
                Business Finland is actively evaluating applications for the Finland Startup Permit. Financial thresholds and program criteria are current as of 2026. Our team can assess your eligibility within 48 hours.
              </p>
            </div>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-semibold rounded-full text-[14px] transition-all hover:bg-[#8F27FF] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              Check My Eligibility →
            </a>
          </div>
        </Reveal>
      </Row>
    </div>
  );
}
