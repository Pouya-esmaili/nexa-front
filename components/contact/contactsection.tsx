"use client";

import Image from "next/image";
import { useState } from "react";
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
                    className="text-[13px] text-[#8F27FF] font-bold hover:underline"
                  >
                    {office.phone}
                  </a>
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
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
