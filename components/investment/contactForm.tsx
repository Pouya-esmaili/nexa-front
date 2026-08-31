"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/global/Reveal";
import { useLang } from "@/components/global/LanguageProvider";

const COUNTRIES = [
  { flag: "🇨🇦", name: "Canada",         dial: "+1" },
  { flag: "🇮🇷", name: "Iran",           dial: "+98" },
  { flag: "🇺🇸", name: "United States",  dial: "+1" },
  { flag: "🇬🇧", name: "United Kingdom", dial: "+44" },
  { flag: "🇩🇪", name: "Germany",        dial: "+49" },
  { flag: "🇫🇷", name: "France",         dial: "+33" },
  { flag: "🇪🇸", name: "Spain",          dial: "+34" },
  { flag: "🇮🇹", name: "Italy",          dial: "+39" },
  { flag: "🇳🇱", name: "Netherlands",    dial: "+31" },
  { flag: "🇵🇹", name: "Portugal",       dial: "+351" },
  { flag: "🇦🇺", name: "Australia",      dial: "+61" },
  { flag: "🇦🇪", name: "UAE",            dial: "+971" },
  { flag: "🇹🇷", name: "Turkey",         dial: "+90" },
  { flag: "🇬🇷", name: "Greece",         dial: "+30" },
  { flag: "🇫🇮", name: "Finland",        dial: "+358" },
  { flag: "🇸🇪", name: "Sweden",         dial: "+46" },
  { flag: "🇸🇦", name: "Saudi Arabia",   dial: "+966" },
  { flag: "🇯🇵", name: "Japan",          dial: "+81" },
  { flag: "🇨🇳", name: "China",          dial: "+86" },
  { flag: "🇮🇳", name: "India",          dial: "+91" },
];

export default function InvestmentContactForm() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const body = {
      formName: 'investment_contact',
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

      if (res.ok) setSubmitted(true);
      else console.error('Submit failed', await res.json());
    } catch (err) {
      console.error('Submit error', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#fff", padding: "100px 0" }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -300, right: -200,
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(143,39,255,.06) 0%, transparent 65%)",
        }}
      />

      <div className="px-6 mx-auto w-full" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.6,
                color: "#000",
              }}
            >
              {t("Ready to", "آماده")}{" "}
              <mark style={{ display: "inline", background: "#FFE600", borderRadius: 3, padding: "0 5px", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
                {t("Invest", "جذب سرمایه")}
              </mark>{" "}
              {t("or Raise Capital?", "یا سرمایه گذاری هستید؟")}
            </h2>
          </div>
        </Reveal>

        {/* Card */}
        <Reveal>
          <div
            className="form-card-inner mx-auto relative overflow-hidden"
            style={{
              maxWidth: 860,
              background: "#fff",
              border: "1px solid rgba(143,39,255,.15)",
              borderRadius: 28,
              boxShadow: "0 24px 80px rgba(143,39,255,.05), 0 4px 24px rgba(0,0,0,.05)",
              padding: "48px 52px",
            }}
          >
            <form
              className="nform-grid grid gap-[22px_28px]"
              style={{ gridTemplateColumns: "1fr 1fr" }}
              onSubmit={handleSubmit}
            >
              {/* First Name */}
              <FormGroup label={t("First Name", "نام")} required>
                <input
                  name="firstName"
                  className="nform-input"
                  type="text"
                  placeholder={t("Your first name", "نام شما")}
                  required
                />
              </FormGroup>

              {/* Last Name */}
              <FormGroup label={t("Last Name", "نام خانوادگی")} required>
                <input
                  name="lastName"
                  className="nform-input"
                  type="text"
                  placeholder={t("Your last name", "نام خانوادگی شما")}
                  required
                />
              </FormGroup>

              {/* Email */}
              <FormGroup label={t("Email Address", "آدرس ایمیل")} required>
                <input
                  name="email"
                  className="nform-input"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </FormGroup>

              {/* Phone */}
              <FormGroup label={t("Phone Number", "شماره تماس")} required>
                <PhoneField name="phone" />
              </FormGroup>

              {/* I Am A */}
              <FormGroup label={t("I Am a", "من در جایگاهِ")} required>
                <select className="nform-input nform-select" required>
                  <option value="">{t("Select your role…", "انتخاب کنید…")}</option>
                  <option>{t("Entrepreneur / Founder seeking investment", "کارآفرین / بنیان‌گذار، متقاضی جذب سرمایه")}</option>
                  <option>{t("Investor looking for opportunities", "سرمایه‌گذار، به‌دنبال فرصت‌های سرمایه‌گذاری")}</option>
                  <option>{t("Company seeking strategic partnership", "شرکت، متقاضی همکاری استراتژیک")}</option>
                  <option>{t("Project owner seeking capital structuring", "مالک پروژه، متقاضی ساختاردهی سرمایه")}</option>
                  <option>{t("Other", "سایر")}</option>
                </select>
              </FormGroup>

              {/* Investment Sector */}
              <FormGroup label={t("Investment Sector", "حوزه سرمایه‌گذاری")} required>
                <select className="nform-input nform-select" required>
                  <option value="">{t("Select sector…", "انتخاب حوزه…")}</option>
                  <option>{t("Real Estate", "املاک و مستغلات")}</option>
                  <option>{t("Energy & Renewables", "انرژی و انرژی‌های تجدیدپذیر")}</option>
                  <option>{t("Information Technology", "فناوری اطلاعات")}</option>
                  <option>{t("Technology & Innovation", "فناوری و نوآوری")}</option>
                  <option>{t("Healthcare & Medical", "سلامت و پزشکی")}</option>
                  <option>{t("Tourism & Hospitality", "گردشگری و هتلداری")}</option>
                  <option>{t("Other", "سایر")}</option>
                </select>
              </FormGroup>

              {/* Business Stage */}
              <FormGroup label={t("Project / Business Stage", "مرحله پروژه / کسب‌وکار")}>
                <select className="nform-input nform-select">
                  <option value="">{t("Select stage…", "انتخاب مرحله…")}</option>
                  <option>{t("Idea / Pre-revenue", "ایده / پیش از درآمدزایی")}</option>
                  <option>{t("Growth Stage (Seed / Series A)", "مرحله رشد (Seed / Series A)")}</option>
                  <option>{t("Expansion Phase", "مرحله توسعه و گسترش")}</option>
                  <option>{t("Established — Seeking M&A or Restructuring", "کسب‌وکار فعال — متقاضی ادغام، تملک یا بازسازی")}</option>
                </select>
              </FormGroup>

              {/* Capital Range */}
              <FormGroup label={t("Capital Range", "محدوده سرمایه")}>
                <select className="nform-input nform-select">
                  <option value="">{t("Select range…", "انتخاب بازه…")}</option>
                  <option>{t("Under $100,000", "کمتر از ۱۰۰,۰۰۰ دلار")}</option>
                  <option>{t("$100,000 – $500,000", "۱۰۰,۰۰۰ تا ۵۰۰,۰۰۰ دلار")}</option>
                  <option>{t("$500,000 – $1,000,000", "۵۰۰,۰۰۰ تا ۱,۰۰۰,۰۰۰ دلار")}</option>
                  <option>{t("$1,000,000 – $5,000,000", "۱,۰۰۰,۰۰۰ تا ۵,۰۰۰,۰۰۰ دلار")}</option>
                  <option>{t("$5,000,000+", "بیش از ۵,۰۰۰,۰۰۰ دلار")}</option>
                </select>
              </FormGroup>

              {/* How Did You Hear */}
              <FormGroup label={t("How Did You Hear About Us?", "چطور با ما آشنا شدید؟")}>
                <select className="nform-input nform-select">
                  <option value="">{t("Select…", "انتخاب کنید…")}</option>
                  <option>{t("Google", "گوگل")}</option>
                  <option>{t("Social Media", "شبکه‌های اجتماعی")}</option>
                  <option>{t("Friend / Referral", "معرفی دوستان / آشنایان")}</option>
                  <option>{t("Attorney", "وکیل")}</option>
                  <option>{t("Webinar", "وبینار")}</option>
                  <option>{t("Tradeshow / Conference", "نمایشگاه / کنفرانس")}</option>
                  <option>{t("Other", "سایر")}</option>
                </select>
              </FormGroup>

              {/* Tell Us (full width) */}
              <FormGroup label={t("Tell Us About Your Project", "درباره پروژه‌تان برای ما بنویسید")} fullWidth>
                <textarea
                  name="message"
                  className="nform-input"
                  placeholder={t("Briefly describe your business or project, the sector, current stage, and what kind of investment or partnership you are seeking…", "به‌طور خلاصه کسب‌وکار یا پروژه، بخش، مرحله‌ی فعلی و نوع سرمایه‌گذاری یا مشارکتی که به دنبال آن هستید را شرح دهید…")}
                  style={{ minHeight: 120, resize: "vertical", lineHeight: 1.65 }}
                />
              </FormGroup>

              {/* Footer */}
              <div
                className="nform-footer flex items-center justify-between flex-wrap gap-4"
                style={{
                  gridColumn: "span 2",
                  marginTop: 8,
                  paddingTop: 16,
                  borderTop: "1px solid #F4F4F4",
                }}
              >
                <span
                  className="flex items-center gap-1.5"
                  style={{ fontSize: 13, color: "#929292", lineHeight: 1.5 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  {t("Your information is kept strictly confidential.", "اطلاعات شما کاملاً محرمانه خواهد ماند.")}
                </span>
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className="nform-submit inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-px"
                  style={{
                    padding: "14px 40px",
                    background: submitted ? "#10b981" : "#8F27FF",
                    color: "#fff",
                    fontSize: 15,
                    borderRadius: 999,
                    border: "none",
                    cursor: submitted || submitting ? "default" : "pointer",
                  }}
                >
                  {submitted
                    ? t("Sent ✓", "ارسال شد ✓")
                    : submitting
                    ? t("Sending…", "در حال ارسال…")
                    : (
                      <>
                        {t("Send Message", "ارسال پیام")}
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" className={lang === "fa" ? "rotate-180" : ""}>
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>

      {/* Shared input styles */}
      <style>{`
        .nform-input {
          background: #F7F6F9;
          border: 1.5px solid #E2E2E2;
          border-radius: 12px;
          padding: 13px 16px;
          font-size: 15px;
          color: #000;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          width: 100%;
          transition: border-color .2s, background .2s, box-shadow .2s;
        }
        .nform-input::placeholder { color: #D9D9D9; }
        .nform-input:focus {
          border-color: #8F27FF;
          background: #FAF6FF;
          box-shadow: 0 0 0 3px rgba(143,39,255,.1);
        }
        .nform-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23929292' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 16px;
          padding-right: 42px;
          cursor: pointer;
          background-color: #F7F6F9;
        }
        @media (max-width: 767px) {
          .nform-grid { grid-template-columns: 1fr !important; }
          .nform-full { grid-column: span 1 !important; }
          .nform-footer { grid-column: span 1 !important; flex-direction: column; align-items: stretch; }
          .nform-submit { width: 100%; justify-content: center; }
          .form-card-inner { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}

function FormGroup({
  label,
  required,
  fullWidth,
  children,
}: {
  label: string;
  required?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-[7px]${fullWidth ? " nform-full" : ""}`}
      style={{ gridColumn: fullWidth ? "span 2" : undefined }}
    >
      <label
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#929292",
        }}
      >
        {label}
        {required && <span style={{ color: "#8F27FF", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function PhoneField({ name }: { name?: string }) {
  const { t } = useLang();
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);

  const filtered = search
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRIES;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative flex" dir="ltr" ref={dropRef}>
      {/* Flag button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 transition-all duration-200 flex-shrink-0"
        style={{
          padding: "0 12px",
          background: open ? "#FAF6FF" : "#F7F6F9",
          border: `1.5px solid ${open ? "#8F27FF" : "#E2E2E2"}`,
          borderRight: "none",
          borderRadius: "12px 0 0 12px",
          minWidth: 88,
          cursor: "pointer",
          fontFamily: "inherit",
          whiteSpace: "nowrap",
          height: "100%",
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>{selected.flag}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#474747" }}>{selected.dial}</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#929292"
          strokeWidth="2.5"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", marginLeft: 2 }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute z-50 overflow-hidden"
          style={{
            top: "calc(100% + 6px)",
            left: 0,
            width: 300,
            background: "#fff",
            border: "1.5px solid #E2E2E2",
            borderRadius: 14,
            boxShadow: "0 12px 40px rgba(0,0,0,.12)",
          }}
        >
          {/* Search */}
          <div style={{ padding: "10px 10px 6px" }}>
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("Search country…", "جستجوی کشور…")}
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #E2E2E2",
                borderRadius: 8,
                fontSize: 14,
                fontFamily: "inherit",
                outline: "none",
                background: "#F7F6F9",
                color: "#000",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#8F27FF")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E2E2")}
            />
          </div>
          {/* List */}
          <ul
            style={{
              listStyle: "none",
              maxHeight: 220,
              overflowY: "auto",
              padding: "4px 0 8px",
            }}
          >
            {filtered.map((c) => (
              <li
                key={c.name + c.dial}
                onClick={() => { setSelected(c); setOpen(false); setSearch(""); }}
                className="flex items-center gap-2.5 cursor-pointer transition-colors duration-100"
                style={{
                  padding: "9px 14px",
                  fontSize: 14,
                  color: c === selected ? "#8F27FF" : "#474747",
                  background: c === selected ? "#FAF6FF" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (c !== selected) (e.currentTarget as HTMLElement).style.background = "#FAF6FF";
                }}
                onMouseLeave={(e) => {
                  if (c !== selected) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span style={{ fontSize: 18, width: 24, textAlign: "center", flexShrink: 0 }}>{c.flag}</span>
                <span style={{ flex: 1, fontWeight: 500 }}>{c.name}</span>
                <span style={{ fontSize: 13, color: c === selected ? "#8F27FF" : "#929292", fontWeight: 600 }}>{c.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Phone input */}
      <input
        name={name}
        className="nform-input"
        type="tel"
        placeholder={t("Phone number", "شماره تماس")}
        required
        style={{
          borderRadius: "0 12px 12px 0",
          flex: 1,
          minWidth: 0,
        }}
      />
    </div>
  );
}
