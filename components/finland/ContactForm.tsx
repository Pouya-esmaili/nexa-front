"use client";

import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'finland_contact',
      firstName: fd.get('firstName')?.toString() || '',
      lastName: fd.get('lastName')?.toString() || '',
      email: fd.get('email')?.toString() || '',
      phone: fd.get('phone')?.toString() || '',
      message: fd.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) setSent(true);
      else console.error('Submit failed', await res.json());
    } catch (err) {
      console.error('Submit error', err);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <Row>
        <Reveal variant="up" className="text-center mb-10 md:mb-14">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em]">
            Start Your Finland Startup Journey
          </h2>
        </Reveal>

        {sent ? (
          <Reveal variant="scale">
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
          </Reveal>
        ) : (
          <Reveal variant="up" delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] p-5 sm:p-8 md:p-11 flex flex-col gap-5"
            style={{ background: "#F7F6F9", border: "1px solid #E2E2E2" }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="flex items-center gap-1 text-[#474747]">First Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                <input name="firstName" type="text" required placeholder="Your first name"
                  className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                  style={{ boxShadow: "none" }}
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="flex items-center gap-1 text-[#474747]">Last Name <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                <input name="lastName" type="text" required placeholder="Your last name"
                  className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="flex items-center gap-1 text-[#474747]">Email <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                <input name="email" type="email" required placeholder="you@example.com"
                  className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors"
                />
              </label>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="flex items-center gap-1 text-[#474747]">Phone Number <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                <PhoneField name="phone" defaultCountryCode="+358" />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="flex items-center gap-1 text-[#474747]">Your Role <em className="text-[#8F27FF] not-italic font-semibold">*</em></span>
                <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                  <option>Lead Founder</option>
                  <option>Co-Founder</option>
                  <option>Sole Founder (exploring options)</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">Primary Objective</span>
                <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                  <option>EU Residency via Startup Permit</option>
                  <option>Finnish Citizenship (Long-term)</option>
                  <option>Explore Program Eligibility</option>
                </select>
              </label>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">Startup Stage</span>
                <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                  <option>Idea / Pre-product</option>
                  <option>MVP / Early Stage</option>
                  <option>Revenue-generating</option>
                  <option>Scaling</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">Industry / Sector</span>
                <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                  <option>Technology / SaaS</option>
                  <option>Fintech</option>
                  <option>Healthtech</option>
                  <option>Cleantech</option>
                  <option>E-commerce</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium">
                <span className="text-[#474747]">Number of Co-Founders</span>
                <select className="h-11 px-3.5 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors">
                  <option>2 founders</option>
                  <option>3 founders</option>
                  <option>4+ founders</option>
                  <option>Solo (need guidance)</option>
                </select>
              </label>
            </div>

            {/* Textarea */}
            <label className="flex flex-col gap-2 text-[13px] font-medium">
              <span className="text-[#474747]">Tell us about your startup & goals</span>
              <textarea
                rows={4}
                placeholder="Describe your business idea, target market, and what you're looking to achieve in Finland…"
                name="message"
                className="px-3.5 py-3 rounded-[10px] border border-gray-200 bg-white text-[14px] font-medium outline-none focus:border-[#8F27FF] transition-colors resize-y"
              />
            </label>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <small className="text-[12px] text-gray-500 leading-relaxed max-w-[50ch]">
                Your information is reviewed confidentially by Nexa's advisory team. We typically respond within 48 hours.
              </small>
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[14px] transition-all hover:-translate-y-0.5"
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
