"use client";
import { useState, FormEvent } from "react";
import Row from "@/components/global/Row";
import Reveal from "@/components/global/Reveal";
import PhoneField from "@/components/global/PhoneField";

const inputCls =
  "w-full bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] px-4 py-[13px] text-[15px] text-black outline-none transition-all duration-[200ms] placeholder:text-[#D9D9D9] focus:border-[#8F27FF] focus:bg-[#FAF6FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,.1)]";

const selectCls =
  "w-full bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] px-4 py-[13px] text-[15px] text-black outline-none transition-all duration-[200ms] appearance-none cursor-pointer focus:border-[#8F27FF] focus:bg-[#FAF6FF]";

const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23929292' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 14px center",
  backgroundSize: "16px",
  paddingRight: 42,
};

const labelCls = "text-[12px] font-semibold tracking-[.08em] uppercase text-[#929292]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-[100px] bg-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-[300px] -right-[200px] w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(143,39,255,.06) 0%,transparent 65%)" }}
      />
      <Row>
        <Reveal variant="up">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              Ready to Take Your Business <span className="highlight">Global?</span>
            </h2>
          </div>
        </Reveal>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-[28px] p-14 text-center max-w-xl mx-auto"
            style={{ background: "#FAF6FF", border: "1.5px solid rgba(143,39,255,0.2)" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#8F27FF]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="w-7 h-7">
                <path d="M5 12l4 4 10-10" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold">Thank you!</h3>
            <p className="text-[#929292] text-[15px]">A Nexa advisor will reach out within 48 hours.</p>
          </div>
        ) : (
          <Reveal variant="up" delay={100}>
            <div
              className="max-w-[860px] mx-auto bg-white rounded-[28px] px-[52px] py-[48px] relative overflow-hidden"
              style={{
                border: "1px solid rgba(143,39,255,.15)",
                boxShadow: "0 24px 80px rgba(143,39,255,.05),0 4px 24px rgba(0,0,0,.05)",
              }}
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px] gap-y-[22px]">

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>First Name <span className="text-[#8F27FF]">*</span></label>
                  <input type="text" required placeholder="Your first name" className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Last Name <span className="text-[#8F27FF]">*</span></label>
                  <input type="text" required placeholder="Your last name" className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Email Address <span className="text-[#8F27FF]">*</span></label>
                  <input type="email" required placeholder="you@example.com" className={inputCls} />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Phone Number <span className="text-[#8F27FF]">*</span></label>
                  <PhoneField defaultCountryCode="+1" />
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Country of Interest <span className="text-[#8F27FF]">*</span></label>
                  <select required className={selectCls} style={selectStyle}>
                    <option value="">Select a country…</option>
                    <option>Canada — Start-Up Visa</option>
                    <option>Spain — Entrepreneur Visa</option>
                    <option>Finland — Startup Permit</option>
                    <option>Portugal — D2 Visa</option>
                    <option>Netherlands — Startup Visa</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Industry / Business Type <span className="text-[#8F27FF]">*</span></label>
                  <select required className={selectCls} style={selectStyle}>
                    <option value="">Select your industry…</option>
                    <option>Technology / SaaS</option>
                    <option>E-commerce / Retail</option>
                    <option>Healthcare / Medical</option>
                    <option>Food &amp; Beverage</option>
                    <option>Education / EdTech</option>
                    <option>Finance / FinTech</option>
                    <option>Manufacturing</option>
                    <option>Creative / Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Current Business Stage</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">Select stage…</option>
                    <option>Idea / Pre-revenue</option>
                    <option>MVP / Early Traction</option>
                    <option>Established (1–3 years)</option>
                    <option>Scaling / Growth Stage</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>Estimated Available Capital</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">Select range…</option>
                    <option>Under $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000 – $250,000</option>
                    <option>$250,000 – $500,000</option>
                    <option>$500,000+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[7px]">
                  <label className={labelCls}>How Did You Hear About Us?</label>
                  <select className={selectCls} style={selectStyle}>
                    <option value="">Select…</option>
                    <option>Google</option>
                    <option>Social Media</option>
                    <option>Friend / Referral</option>
                    <option>Attorney</option>
                    <option>Webinar</option>
                    <option>Tradeshow / Conference</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Full-width: empty cell to balance grid before textarea */}
                <div className="hidden sm:block" />

                <div className="flex flex-col gap-[7px] col-span-1 sm:col-span-2">
                  <label className={labelCls}>Tell Us About Your Project</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your business, goals, and what you're looking to achieve through international expansion…"
                    className={`${inputCls} resize-y min-h-[120px] leading-[1.65]`}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 mt-2 border-t border-[#F4F4F4]">
                  <span className="flex items-center gap-[6px] text-[13px] text-[#929292] leading-[1.5]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="flex-shrink-0">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Your information is kept strictly confidential.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-[10px] px-10 py-[14px] bg-[#8F27FF] text-white font-semibold rounded-full text-[15px] transition-all duration-[250ms] hover:bg-[#7A1FE0] hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(143,39,255,.28)]"
                  >
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-4 h-4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>
          </Reveal>
        )}
      </Row>
    </section>
  );
}
