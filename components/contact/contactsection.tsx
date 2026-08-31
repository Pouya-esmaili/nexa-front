"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { useLang } from "@/components/global/LanguageProvider";


const contactItem = [
  {
    flag: "/images/Entrepreneurship/cn.svg",
    country: "Vancouver, Canada",
    countryFa: "ونکوور، کانادا",
    address: "301-1414 Barclay St, Vancouver, British Columbia, Canada",
    addressFa: "۳۰۱-۱۴۱۴ خیابان بارکلی، ونکوور، بریتیش کلمبیا، کانادا",
    phone: "+1 (604) 351-5951",
    tel: "+16043515951",
  },
  {
    flag: "/images/about/IR.svg",
    country: "Tehran, Iran",
    countryFa: "تهران، ایران",
    address: "No. 27, Neom Building, Tajrish Square, Tehran",
    addressFa: "تهران، میدان تجریش، مجتمع نئوم، پلاک ۲۷",
    phone: "+98 (31) 3131-1914",
    tel: "+983131311914",
  },
  {
    flag: "/images/about/IR.svg",
    country: "Esfahan, Iran",
    countryFa: "اصفهان، ایران",
    address: "Tala Building, Saadat Abad,Azadi Square, Esfahan",
    addressFa: "اصفهان، میدان آزادی، سعادت‌آباد، ساختمان طلا",
    phone: "+98 (31) 3131-1914",
    tel: "+983131311914",
  },
];


type FormData = {
  fullName: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData, t: (en: string, fa: string) => string): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = t("Full name is required.", "نام کامل الزامی است.");
  if (!data.email.trim()) {
    errors.email = t("Email address is required.", "آدرس ایمیل الزامی است.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = t("Please enter a valid email address.", "لطفاً یک آدرس ایمیل معتبر وارد کنید.");
  }
  if (!data.service) errors.service = t("Please select a service type.", "لطفاً نوع خدمت را انتخاب کنید.");
  if (!data.message.trim()) errors.message = t("Message is required.", "متن پیام الزامی است.");
  else if (data.message.trim().length < 10) errors.message = t("Message must be at least 10 characters.", "پیام باید حداقل ۱۰ کاراکتر باشد.");
  return errors;
}

export default function ContactSection() {
  const { t } = useLang();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form, t);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "contact_page",
          firstName: form.fullName,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit contact form", err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all border border-transparent focus:border-[#8F27FF]";
  const inputErr = "border-red-400 focus:border-red-400";

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">

          {/* Left Side */}
          <div className=" p-1 md:px-6 space-y-8  max-w-[480px]">
            {contactItem.map((office) => (
              <div
                key={office.country}
                className="border border-[#E8E8E8] rounded-[12px] px-[34px] py-[30px] flex gap-[18px] items-start transition-all duration-300 hover:border-[#DEC8FF]"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <Image
                    src={office.flag}
                    alt={office.country}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.3px] mb-[5px]">
                    {t(office.country, office.countryFa)}
                  </div>

                  <div className="text-[13px] text-[#5A5A5A] leading-[1.65] whitespace-pre-line mb-[7px]">
                    {t(office.address, office.addressFa)}
                  </div>

                  <a
                    href={`tel:${office.tel}`}
                    dir="ltr"
                    className="text-[13px] text-[#8F27FF] font-bold hover:underline"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-2.5 pt-2">
              <SocialLink href="https://wa.me/message/W72AGOQ5NUN3E1" label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="!w-[21px] !h-[21px]"><path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z" /><path fillRule="evenodd" clipRule="evenodd" d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z" /></svg>
              </SocialLink>
              <SocialLink href="https://t.me/nexavc" label="Telegram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="!w-[21px] !h-[21px]"><path fillRule="evenodd" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" strokeLinejoin="round" /></svg>
              </SocialLink>
              <SocialLink href="https://ble.ir/nexa_support" label="Bale">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.425 23.987a12.218 12.218 0 0 1-2.95-.514 6.578 6.578 0 0 0-.336-.116C4.936 22.303 2.22 19.763.913 16.599a11.92 11.92 0 0 1-.9-4.063C.005 12.377.001 10.246 0 6.74 0 .71-.005 1.137.07.903.23.394.673.05 1.224.005c.421-.034.7.088 1.603.699.562.38 1.119.78 1.796 1.289.315.237.353.261.376.247l.35-.23c.58-.381 1.11-.677 1.7-.945A11.913 11.913 0 0 1 9.766.21a11.19 11.19 0 0 1 2.041-.2c1.14-.016 2.077.091 3.152.36 3.55.888 6.538 3.411 8.028 6.78.492 1.113.845 2.43.945 3.522.033.366.039.43.053.611.008.105.015.406.015.669 0 .783-.065 1.57-.169 2.064a5.474 5.474 0 0 0-.046.26c-.056.378-.214.987-.399 1.535-.205.613-.367.999-.684 1.633a11.95 11.95 0 0 1-2.623 3.436c-.44.396-.829.705-1.26 1.003-.647.445-1.307.812-2.039 1.134-.6.265-1.44.539-2.101.686a11.165 11.165 0 0 1-1.178.202 12.28 12.28 0 0 1-2.076.082zm-.61-5.92c.294-.06.678-.209.864-.337.144-.099.428-.376 2.064-2.013a161.8 161.8 0 0 1 1.764-1.753c.017 0 1.687-1.67 1.687-1.689 0-.02 1.64-1.648 1.661-1.648.01 0 .063-.047.118-.106.467-.495.682-.957.716-1.547.026-.433-.06-.909-.217-1.196a2.552 2.552 0 0 0-.983-1.024c-.281-.163-.512-.233-.888-.27-.306-.031-.688 0-.948.075-.243.07-.603.274-.853.481-.042.035-1.279 1.265-2.748 2.733l-2.671 2.67-1.093-1.09c-.6-.6-1.12-1.114-1.155-1.142a2.419 2.419 0 0 0-1.338-.51c-.404-.013-.91.09-1.224.25a2.89 2.89 0 0 0-.659.526c-.108.12-.287.357-.29.385-.003.03-.009.044-.065.16a2.312 2.312 0 0 0-.224.91c-.011.229-.01.265.019.491.045.353.24.781.51 1.115.05.063.97.992 2.044 2.064 1.507 1.505 1.98 1.97 2.074 2.039.327.24.683.388 1.101.456.182.03.5.016.734-.03z" /></svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/thenexa.vc?igsh=aHV4N3ZlZzQwdzNn&utm_source=qr" label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/nexa-venture/" label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </SocialLink>
              <SocialLink href="mailto:info@nexavc.com" label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" strokeLinecap="round" /></svg>
              </SocialLink>
            </div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-black">{t("Message Sent!", "پیام ارسال شد!")}</h2>
                <p className="text-[15px] text-[#929292] max-w-[320px] leading-relaxed">
                  {t("Thank you for reaching out. We'll get back to you within 48 hours.", "از پیام شما سپاسگزاریم. ظرف ۴۸ ساعت با شما تماس می‌گیریم.")}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", service: "", message: "" }); }}
                  className="mt-2 px-7 py-3 rounded-full border-[1.5px] border-[#8F27FF] text-[#8F27FF] font-semibold text-[14px] hover:bg-[#8F27FF] hover:text-white transition-all duration-200"
                >
                  {t("Send Another Message", "ارسال پیام دیگر")}
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <h2 className="md:text-4xl text-2xl font-bold">{t("Send a Message", "ارسال پیام")}</h2>
                <p className="mt-2 text-sm text-[#474747]">{t("Most inquiries receive a response within 48 hours.", "به بیشتر درخواست‌ها ظرف ۴۸ ساعت پاسخ داده می‌شود.")}</p>

                <form className="mt-10" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="mb-2 block text-md text-[#222]">{t("Full Name", "نام کامل")}</label>
                      <input
                        type="text"
                        placeholder={t("Full Name", "نام کامل")}
                        value={form.fullName}
                        onChange={(e) => set("fullName", e.target.value)}
                        className={`${inputBase} ${errors.fullName ? inputErr : ""}`}
                      />
                      {errors.fullName && <p className="mt-1.5 text-[12px] text-red-500">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-md text-[#222]">{t("Email Address", "آدرس ایمیل")}</label>
                      <input
                        type="email"
                        placeholder={t("Email", "ایمیل")}
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={`${inputBase} ${errors.email ? inputErr : ""}`}
                      />
                      {errors.email && <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mt-5">
                    <label className="mb-2 block text-md text-[#222]">{t("Service Type", "نوع خدمت")}</label>
                    <select
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={`h-12 w-full rounded-xl bg-white px-4 text-md outline-none shadow-[0px_3px_8px_rgba(0,0,0,0.08)] transition-all border border-transparent focus:border-[#8F27FF] ${errors.service ? inputErr : ""} ${!form.service ? "text-[#929292]" : "text-[#222]"}`}
                    >
                      <option value="" disabled>{t("Select a service", "یک خدمت را انتخاب کنید")}</option>
                      <option value="Startup">{t("Startup", "استارتاپ")}</option>
                      <option value="Entrepreneurship">{t("Entrepreneurship", "کارآفرینی")}</option>
                      <option value="Investment">{t("Investment", "سرمایه‌گذاری")}</option>
                      <option value="Advisory">{t("Advisory", "مشاوره")}</option>
                      <option value="Other">{t("Other", "سایر")}</option>
                    </select>
                    {errors.service && <p className="mt-1.5 text-[12px] text-red-500">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label className="mb-2 block text-md text-[#222]">{t("Your Message", "پیام شما")}</label>
                    <textarea
                      rows={7}
                      placeholder={t("Write your message here...", "پیام خود را اینجا بنویسید...")}
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
                        {t("Sending...", "در حال ارسال...")}
                      </>
                    ) : t("Submit", "ارسال")}
                  </button>
                  {submitError && (
                    <p className="mt-3 text-center text-[13px] text-red-500">
                      {t("Something went wrong. Please try again.", "خطایی رخ داد. لطفاً دوباره تلاش کنید.")}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
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
