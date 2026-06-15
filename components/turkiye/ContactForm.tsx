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
      formName: 'turkiye_contact',
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
    <section id="contact" className="py-16 md:py-20 bg-[#faf9f5]">
      <Row>
        <Reveal variant="up" className="mb-10">
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-tight mb-3">
            Start Your Türkiye Investment Pathway
          </h2>
          <p className="text-[15px] text-gray-500">
            Your information is reviewed confidentially by Nexa&apos;s advisory team.
          </p>
        </Reveal>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-2xl p-14 text-center"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "#8F27FF" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="w-7 h-7">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold">Thank you!</h3>
            <p className="text-gray-500 text-[15px]">A Nexa advisor will reach out within 48 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white rounded-2xl p-5 sm:p-7 md:p-10"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">First Name <em className="text-[#8F27FF] not-italic">*</em></span>
                <input name="firstName" type="text" required className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Last Name <em className="text-[#8F27FF] not-italic">*</em></span>
                <input name="lastName" type="text" required className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Email <em className="text-[#8F27FF] not-italic">*</em></span>
                <input name="email" type="email" required className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors" />
              </label>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Phone Number <em className="text-[#8F27FF] not-italic">*</em></span>
                <PhoneField name="phone" defaultCountryCode="+90" bg="white" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Which best describes you? <em className="text-[#8F27FF] not-italic">*</em></span>
                <select className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors bg-white">
                  <option>Investor</option>
                  <option>Entrepreneur</option>
                  <option>Family relocation</option>
                  <option>Digital entrepreneur</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Primary objective</span>
                <select className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors bg-white">
                  <option>Citizenship by Investment</option>
                  <option>Long-term residency</option>
                  <option>Rental yield</option>
                  <option>Capital appreciation</option>
                </select>
              </label>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Property type</span>
                <select className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors bg-white">
                  <option>Residential apartment</option>
                  <option>Commercial unit</option>
                  <option>Villa</option>
                  <option>Government-approved development</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Target city</span>
                <select className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors bg-white">
                  <option>Istanbul</option>
                  <option>Ankara</option>
                  <option>Antalya</option>
                  <option>Izmir</option>
                  <option>Bodrum</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-700">Investment size</span>
                <select className="h-11 px-4 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors bg-white">
                  <option>USD 600,000 – 1M</option>
                  <option>USD 1M – 2M</option>
                  <option>USD 2M+</option>
                </select>
              </label>
            </div>

            {/* Details */}
            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-medium text-gray-700">Details</span>
              <textarea
                rows={4}
                placeholder="Tell us about your goals, timeline, and family structure…"
                name="message"
                className="px-4 py-3 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#8F27FF] transition-colors resize-none"
              />
            </label>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
              <small className="text-[12px] text-gray-400">Your information is reviewed confidentially by Nexa's advisory team.</small>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#8F27FF] text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 flex-shrink-0 inline-flex items-center justify-center"
                style={{ boxShadow: "0 10px 24px rgba(143,39,255,0.28)" }}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Row>
    </section>
  );
}
