"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10 md:mb-14">
            Start Your Spain Entrepreneur Visa Journey
          </h2>
        </Reveal>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-[20px] p-14 text-center max-w-xl mx-auto"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#8F27FF]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="w-7 h-7">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold">Thank you!</h3>
            <p className="text-gray-500 text-[15px]">A Nexa advisor will reach out within 24 hours.</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] p-8 md:p-11 flex flex-col gap-5"
              style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">First Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="text" required placeholder="Your first name"
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">Last Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="text" required placeholder="Your last name"
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">Email <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <input type="email" required placeholder="you@example.com"
                    className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                  />
                </label>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="flex items-center gap-1 text-[#474747]">Phone Number <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                  <div className="h-11 flex items-center border border-gray-200 rounded-[10px] overflow-hidden bg-white focus-within:border-[#8F27FF] transition-colors">
                    <span className="px-3 text-[13px] font-semibold border-r border-gray-200 h-full flex items-center bg-[#F4F4F4] flex-shrink-0 whitespace-nowrap">🇪🇸 +34</span>
                    <input type="tel" required placeholder="Phone number"
                      className="flex-1 h-full px-3 text-[14px] outline-none bg-transparent font-medium"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">Your Role</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>Lead Founder</option>
                    <option>Co-Founder</option>
                    <option>Currently in Spain (Tourist Entry)</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-medium">
                  <span className="text-[#474747]">Industry / Sector</span>
                  <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                    <option>Technology / SaaS</option>
                    <option>Fintech</option>
                    <option>Healthtech</option>
                    <option>Cleantech</option>
                    <option>Tourism &amp; Hospitality</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              {/* Textarea */}
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">Tell us about your startup &amp; goals</span>
                <textarea
                  rows={4}
                  placeholder="Describe your business idea, innovation credentials, and what you're looking to achieve in Spain…"
                  className="px-3.5 py-3 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors resize-y"
                />
              </label>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <small className="text-[12px] text-gray-500 leading-relaxed max-w-[50ch]">
                  Your information is reviewed confidentially by Nexa&apos;s advisory team. We typically respond within 24 hours.
                </small>
                <button
                  type="submit"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}
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
