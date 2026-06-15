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
      formName: 'canada_contact',
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
    <section id="contact" className="py-20 md:py-24 bg-white">
      <Row>
        <Reveal variant="up">
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] text-center mb-10">
            Book an Appointment
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
            <p className="text-gray-500 text-[15px]">A Nexa advisor will reach out within 48 hours.</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            {/* Outer dashed wrapper */}
            <div className="max-w-[1100px] mx-auto rounded-[28px] p-5 sm:p-8 md:p-9"
              style={{ background: "#F4F4F4", border: "1.5px dashed #B8C5FF" }}>
              {/* Inner white card */}
              <div className="bg-white rounded-[20px] p-5 sm:p-7 md:p-8 border border-[#E2E2E2]">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Row 1 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    First Name <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="firstName" type="text" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Last Name <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="lastName" type="text" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Email <em className="text-[#8F27FF] not-italic">*</em>
                    <input name="email" type="email" required
                      className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors"
                    />
                  </label>

                  {/* Row 2 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Phone Number <em className="text-[#8F27FF] not-italic">*</em>
                    <PhoneField name="phone" defaultCountryCode="+1" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Which best describes you? <em className="text-[#8F27FF] not-italic">*</em>
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>Investor</option>
                      <option>Entrepreneur</option>
                      <option>Startup Founder</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    What is your primary objective?
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>Seeking Investment</option>
                      <option>Start a business in Canada</option>
                      <option>Obtain Permanent Residence</option>
                      <option>Expand existing business</option>
                    </select>
                  </label>

                  {/* Row 3 */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Industry / Sector <em className="text-[#8F27FF] not-italic">*</em>
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>Real Estate</option>
                      <option>Technology &amp; Innovation</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Clean Energy</option>
                      <option>Tourism &amp; Hospitality</option>
                      <option>Agriculture</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Target Province
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>Ontario</option>
                      <option>British Columbia</option>
                      <option>Alberta</option>
                      <option>Quebec</option>
                      <option>Manitoba</option>
                      <option>Saskatchewan</option>
                      <option>Atlantic Provinces</option>
                      <option>Not decided yet</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747]">
                    Available Investment
                    <select className="h-10 px-3.5 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors">
                      <option>Under CAD 150K</option>
                      <option>CAD 150K – 300K</option>
                      <option>CAD 300K – 600K</option>
                      <option>CAD 600K+</option>
                    </select>
                  </label>

                  {/* Textarea full-width */}
                  <label className="flex flex-col gap-1.5 text-[12.5px] font-medium text-[#474747] col-span-full">
                    Tell us about your startup &amp; goals
                    <textarea
                      rows={4}
                      placeholder="Describe your business idea, target province, and what you're looking to achieve in Canada…"
                      name="message"
                      className="px-3.5 py-3 rounded-[10px] border border-[#E2E2E2] bg-[#F4F4F4] text-[13.5px] outline-none focus:border-[#8F27FF] focus:bg-white transition-colors resize-y"
                    />
                  </label>

                  {/* Footer */}
                  <div className="col-span-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-1">
                    <small className="text-[12px] text-gray-400">Your information is reviewed confidentially by Nexa&apos;s advisory team.</small>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] tracking-[-0.01em] transition-all hover:-translate-y-0.5"
                      style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.3)" }}
                    >
                      Submit Application →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
