"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";

const inputCls = "font-[inherit] text-[14px] bg-white border border-[#E2E2E2] rounded-[10px] px-[14px] py-3 text-black font-medium transition-all duration-150 outline-none focus:border-[#8F27FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,0.12)] w-full";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10">
            Start Your Greece Golden Visa Journey
          </h2>
        </Reveal>

        {sent ? (
          <div className="mt-4 px-[14px] py-3.5 bg-[#FAF6FF] border border-[rgba(143,39,255,0.18)] rounded-[10px] text-[#8F27FF] font-semibold text-[14px] text-center max-w-xl mx-auto">
            ✓ Thank you — a Nexa advisor will reach out within 24 hours.
          </div>
        ) : (
          <Reveal variant="up" delay={80}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#F7F6F9] border border-[#E2E2E2] rounded-[20px] p-5 sm:p-8 md:p-[44px]"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>First Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="text" required placeholder="Your first name" className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Last Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="text" required placeholder="Your last name" className={inputCls} />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Email <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="email" required placeholder="you@example.com" className={inputCls} />
                </label>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Phone Number <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <PhoneField defaultCountryCode="+30" bg="white" />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Investment Tier</span>
                  <select className={inputCls}>
                    <option>€800,000 — Prime Markets</option>
                    <option>€400,000 — Regional Zones</option>
                    <option>€250,000 — Special Category</option>
                    <option>€500,000 — Financial Instruments</option>
                    <option>Exploring Options</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Family Composition</span>
                  <select className={inputCls}>
                    <option>Main applicant only</option>
                    <option>Main applicant + spouse</option>
                    <option>Full family (children included)</option>
                    <option>Three-generation (parents included)</option>
                  </select>
                </label>
              </div>

              {/* Textarea */}
              <div className="mb-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium text-black">
                  <span>Tell us about your goals & investment profile</span>
                  <textarea
                    rows={4}
                    placeholder="Describe your investment interests, preferred region in Greece, family situation, and long-term residency goals…"
                    className={`${inputCls} resize-y min-h-[110px]`}
                  />
                </label>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-2">
                <small className="text-[12px] text-[#929292] leading-[1.5]">
                  Your information is reviewed confidentially by Nexa&apos;s advisory team. We typically respond within 48 hours.
                </small>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-[10px] px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5 flex-shrink-0"
                  style={{ boxShadow: "0 12px 28px rgba(143,39,255,0.28)" }}
                >
                  Submit Application →
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
