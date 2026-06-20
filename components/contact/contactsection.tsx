"use client";

import Image from "next/image";
import { useState } from "react";

const contactItems = [
  {
    title: "Email Address",
    icon: "/images/contact/sms.svg",
    content: ["info@nexavc.com"],
  },
  {
    title: "Phone Number",
    icon: "/images/contact/call-calling.svg",
    content: ["+98 (31) 3131-1914", "+1 (604) 351 - 5951"],
  },
  {
    title: "Office Location",
    icon: "/images/contact/location-tick.svg",
    content: [
      "No. 27, Neom Building (Next to the Tandis Complex), Tajrish Square, Tehran, Iran",
      "906-935 Marine Dr, West Vancouver, British Columbia, Canada",
    ],
  },
];

type FormData = {
  fullName: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.service) errors.service = "Please select a service type.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all border border-transparent focus:border-[#8F27FF]";
  const inputErr = "border-red-400 focus:border-red-400";

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-5 w-full">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border-[0.5px] border-[#8F27FF] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0px_18px_45px_rgba(143,39,255,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8F27FF] shadow-[0px_4px_12px_rgba(143,39,255,0.35)]">
                    <Image src={item.icon} alt={item.title} width={22} height={22} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md text-[#8F27FF]">{item.title}</h3>
                    <div className="space-y-1">
                      {item.content.map((text) => (
                        <p key={text} className="text-md leading-6 text-[#474747]">
                          {item.title === "Phone Number" ? (
                            <a
                              href={`tel:${text.replace(/[^\d+]/g, "")}`}
                              className="transition-colors hover:text-[#8F27FF]"
                            >
                              {text}
                            </a>
                          ) : (
                            text
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Form */}
          <div className="rounded-4xl border-[0.5px] border-[#929292] bg-[#F7F6F9] md:p-8 p-6 lg:p-8">

            {submitted ? (
              /* ── Success State ── */
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[420px] gap-5">
                <div className="w-20 h-20 rounded-full bg-[#8F27FF] grid place-items-center shadow-[0_8px_32px_rgba(143,39,255,0.35)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black">Message Sent!</h2>
                <p className="text-[15px] text-[#929292] max-w-[320px] leading-relaxed">
                  Thank you for reaching out. We&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", service: "", message: "" }); }}
                  className="mt-2 px-7 py-3 rounded-full border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold text-[14px] hover:bg-[#8F27FF] hover:text-white transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <h2 className="md:text-4xl text-2xl font-bold">Send a Message</h2>
                <p className="mt-2 text-sm text-[#474747]">Most inquiries receive a response within 48 hours.</p>

                <form className="mt-10" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="mb-2 block text-md text-[#222]">Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={(e) => set("fullName", e.target.value)}
                        className={`${inputBase} ${errors.fullName ? inputErr : ""}`}
                      />
                      {errors.fullName && <p className="mt-1.5 text-[12px] text-red-500">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-md text-[#222]">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={`${inputBase} ${errors.email ? inputErr : ""}`}
                      />
                      {errors.email && <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mt-5">
                    <label className="mb-2 block text-md text-[#222]">Service Type</label>
                    <select
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={`h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all border border-transparent focus:border-[#8F27FF] ${errors.service ? inputErr : ""} ${!form.service ? "text-[#929292]" : "text-[#222]"}`}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Startup">Startup</option>
                      <option value="Entrepreneurship">Entrepreneurship</option>
                      <option value="Investment">Investment</option>
                      <option value="Advisory">Advisory</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1.5 text-[12px] text-red-500">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label className="mb-2 block text-md text-[#222]">Your Message</label>
                    <textarea
                      rows={7}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={`w-full resize-none rounded-xl bg-white p-4 text-sm outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all border border-transparent focus:border-[#8F27FF] ${errors.message ? inputErr : ""}`}
                    />
                    {errors.message && <p className="mt-1.5 text-[12px] text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-8 h-14 w-full rounded-full bg-[#8F27FF] text-md text-white transition-all hover:bg-[#7A1FE0] hover:-translate-y-px disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : "Submit"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
