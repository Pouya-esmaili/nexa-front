"use client";

import { useState, useRef, useEffect, type FormEvent, type ReactNode } from "react";
import Reveal from "@/components/global/LazyReveal";
import { useLang } from "@/components/global/LanguageProvider";

/* ── Country codes ── */
const COUNTRIES = [
  { code: "+1",    flag: "🇨🇦", name: "Canada"              },
  { code: "+1",    flag: "🇺🇸", name: "United States"        },
  { code: "+44",   flag: "🇬🇧", name: "United Kingdom"       },
  { code: "+61",   flag: "🇦🇺", name: "Australia"            },
  { code: "+49",   flag: "🇩🇪", name: "Germany"              },
  { code: "+33",   flag: "🇫🇷", name: "France"               },
  { code: "+34",   flag: "🇪🇸", name: "Spain"                },
  { code: "+351",  flag: "🇵🇹", name: "Portugal"             },
  { code: "+31",   flag: "🇳🇱", name: "Netherlands"          },
  { code: "+46",   flag: "🇸🇪", name: "Sweden"               },
  { code: "+47",   flag: "🇳🇴", name: "Norway"               },
  { code: "+358",  flag: "🇫🇮", name: "Finland"              },
  { code: "+45",   flag: "🇩🇰", name: "Denmark"              },
  { code: "+41",   flag: "🇨🇭", name: "Switzerland"          },
  { code: "+43",   flag: "🇦🇹", name: "Austria"              },
  { code: "+32",   flag: "🇧🇪", name: "Belgium"              },
  { code: "+39",   flag: "🇮🇹", name: "Italy"                },
  { code: "+90",   flag: "🇹🇷", name: "Turkey"               },
  { code: "+98",   flag: "🇮🇷", name: "Iran"                 },
  { code: "+971",  flag: "🇦🇪", name: "UAE"                  },
  { code: "+966",  flag: "🇸🇦", name: "Saudi Arabia"         },
  { code: "+974",  flag: "🇶🇦", name: "Qatar"                },
  { code: "+965",  flag: "🇰🇼", name: "Kuwait"               },
  { code: "+973",  flag: "🇧🇭", name: "Bahrain"              },
  { code: "+968",  flag: "🇴🇲", name: "Oman"                 },
  { code: "+20",   flag: "🇪🇬", name: "Egypt"                },
  { code: "+212",  flag: "🇲🇦", name: "Morocco"              },
  { code: "+213",  flag: "🇩🇿", name: "Algeria"              },
  { code: "+216",  flag: "🇹🇳", name: "Tunisia"              },
  { code: "+27",   flag: "🇿🇦", name: "South Africa"         },
  { code: "+234",  flag: "🇳🇬", name: "Nigeria"              },
  { code: "+254",  flag: "🇰🇪", name: "Kenya"                },
  { code: "+91",   flag: "🇮🇳", name: "India"                },
  { code: "+92",   flag: "🇵🇰", name: "Pakistan"             },
  { code: "+880",  flag: "🇧🇩", name: "Bangladesh"           },
  { code: "+94",   flag: "🇱🇰", name: "Sri Lanka"            },
  { code: "+977",  flag: "🇳🇵", name: "Nepal"                },
  { code: "+86",   flag: "🇨🇳", name: "China"                },
  { code: "+81",   flag: "🇯🇵", name: "Japan"                },
  { code: "+82",   flag: "🇰🇷", name: "South Korea"          },
  { code: "+65",   flag: "🇸🇬", name: "Singapore"            },
  { code: "+60",   flag: "🇲🇾", name: "Malaysia"             },
  { code: "+62",   flag: "🇮🇩", name: "Indonesia"            },
  { code: "+63",   flag: "🇵🇭", name: "Philippines"          },
  { code: "+66",   flag: "🇹🇭", name: "Thailand"             },
  { code: "+84",   flag: "🇻🇳", name: "Vietnam"              },
  { code: "+55",   flag: "🇧🇷", name: "Brazil"               },
  { code: "+52",   flag: "🇲🇽", name: "Mexico"               },
  { code: "+54",   flag: "🇦🇷", name: "Argentina"            },
  { code: "+56",   flag: "🇨🇱", name: "Chile"                },
  { code: "+57",   flag: "🇨🇴", name: "Colombia"             },
  { code: "+51",   flag: "🇵🇪", name: "Peru"                 },
  { code: "+58",   flag: "🇻🇪", name: "Venezuela"            },
  { code: "+7",    flag: "🇷🇺", name: "Russia"               },
  { code: "+380",  flag: "🇺🇦", name: "Ukraine"              },
  { code: "+48",   flag: "🇵🇱", name: "Poland"               },
  { code: "+420",  flag: "🇨🇿", name: "Czech Republic"       },
  { code: "+36",   flag: "🇭🇺", name: "Hungary"              },
  { code: "+40",   flag: "🇷🇴", name: "Romania"              },
  { code: "+30",   flag: "🇬🇷", name: "Greece"               },
  { code: "+353",  flag: "🇮🇪", name: "Ireland"              },
  { code: "+64",   flag: "🇳🇿", name: "New Zealand"          },
  { code: "+972",  flag: "🇮🇱", name: "Israel"               },
  { code: "+961",  flag: "🇱🇧", name: "Lebanon"              },
  { code: "+962",  flag: "🇯🇴", name: "Jordan"               },
  { code: "+964",  flag: "🇮🇶", name: "Iraq"                 },
  { code: "+963",  flag: "🇸🇾", name: "Syria"                },
  { code: "+967",  flag: "🇾🇪", name: "Yemen"                },
  { code: "+93",   flag: "🇦🇫", name: "Afghanistan"          },
  { code: "+995",  flag: "🇬🇪", name: "Georgia"              },
  { code: "+994",  flag: "🇦🇿", name: "Azerbaijan"           },
  { code: "+374",  flag: "🇦🇲", name: "Armenia"              },
  { code: "+7",    flag: "🇰🇿", name: "Kazakhstan"           },
  { code: "+998",  flag: "🇺🇿", name: "Uzbekistan"           },
];

/* ── Chevron SVG ── */
const ChevronDown = ({ open = false }: { open?: boolean }) => (
  <svg
    className={`w-4 h-4 text-[#8F27FF] flex-shrink-0 pointer-events-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Custom country-code picker ── */
function CountryPicker({
  selected,
  onChange,
}: {
  selected: (typeof COUNTRIES)[0];
  onChange: (c: (typeof COUNTRIES)[0]) => void;
}) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const filtered = search
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.code.includes(search)
      )
    : COUNTRIES;

  return (
    <div ref={ref} className="relative flex-shrink-0">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setSearch(""); }}
        className="flex items-center gap-1.5 h-[52px] pl-3 pr-2.5 bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] border-r-0 rounded-l-[12px] text-[13px] font-semibold text-[#474747] outline-none hover:border-[#8F27FF] transition-all whitespace-nowrap"
      >
        <span className="text-[20px] leading-none">{selected.flag}</span>
        <span>{selected.code}</span>
        <ChevronDown open={open} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[56px] left-0 z-50 w-[260px] bg-white border border-[#E2E2E2] rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-[#F0F0F0]">
            <input
              autoFocus
              type="text"
              placeholder={t("Search country...", "جستجوی کشور...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-9 px-3 text-[13px] bg-[#F7F6F9] border border-[#E2E2E2] rounded-[8px] outline-none focus:border-[#8F27FF] transition-all"
            />
          </div>
          {/* List */}
          <ul className="max-h-[220px] overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-[13px] text-[#929292]">{t("No results", "نتیجه‌ای یافت نشد")}</li>
            )}
            {filtered.map((c, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => { onChange(c); setOpen(false); setSearch(""); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] hover:bg-[#FAF6FF] hover:text-[#8F27FF] transition-colors text-left ${
                    c.code === selected.code && c.name === selected.name
                      ? "bg-[#FAF6FF] text-[#8F27FF] font-semibold"
                      : "text-[#474747]"
                  }`}
                >
                  <span className="text-[20px] leading-none">{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-[#929292] font-medium">{c.code}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      formName: 'home_contact',
      firstName: fd.get('firstName')?.toString() || '',
      lastName: fd.get('lastName')?.toString() || '',
      email: fd.get('email')?.toString() || '',
      phone: fd.get('phone')?.toString() || '',
      countryCode: fd.get('countryCode')?.toString() || selectedCountry.code,
      message: fd.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setSent(true);
      } else {
        console.error('Submit failed', await res.json());
      }
    } catch (err) {
      console.error('Submit error', err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* bg glow */}
      <div className="pointer-events-none absolute -top-[300px] -right-[200px] w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(143,39,255,.06) 0%,transparent 65%)" }} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">

        <Reveal variant="up">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.1]">
              {t("Start Your Journey", "آغاز مسیر رشد شما")}
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div
            className="max-w-[860px] mx-auto rounded-[28px] p-5 sm:p-8 md:p-14 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid rgba(143,39,255,0.15)",
              boxShadow: "0 24px 80px rgba(143,39,255,.05), 0 4px 24px rgba(0,0,0,.05)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#8F27FF] grid place-items-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12l4 4 10-10" /></svg>
                </div>
                <h3 className="text-[22px] font-bold">{t("Message Sent!", "پیام ارسال شد!")}</h3>
                <p className="text-[15px] text-[#929292]">{t("A Nexa advisor will reach out within 48 hours.", "یکی از مشاوران نکسا ظرف ۴۸ ساعت با شما تماس می‌گیرد.")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">

                  {/* First Name */}
                  <FormGroup label={t("First Name", "نام")} required>
                    <input name="firstName" type="text" required placeholder={t("e.g., John", "مثلاً: علی")} className={inputCls} />
                  </FormGroup>

                  {/* Last Name */}
                  <FormGroup label={t("Last Name", "نام خانوادگی")} required>
                    <input name="lastName" type="text" required placeholder={t("e.g., Doe", "مثلاً: رضایی")} className={inputCls} />
                  </FormGroup>

                  {/* Email */}
                  <FormGroup label={t("Email Address", "آدرس ایمیل")} required>
                    <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                  </FormGroup>

                  {/* Phone */}
                  <FormGroup label={t("Phone Number", "شماره تماس")} required>
                    <div className="flex gap-0">
                      <CountryPicker
                        selected={selectedCountry}
                        onChange={setSelectedCountry}
                      />
                      <input type="hidden" name="countryCode" value={selectedCountry.code} />
                      <input name="phone" type="tel" required placeholder="(000) 000-0000"
                        className="flex-1 h-[52px] px-4 bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] border-l-0 rounded-r-[12px] text-[15px] text-black outline-none focus:border-[#8F27FF] focus:bg-[#FAF6FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,0.1)] transition-all" />
                    </div>
                  </FormGroup>

                  {/* Service interest */}
                  <FormGroup label={t("Service of Interest", "خدمت موردنظر")}>
                    <div className="relative">
                      <select className={selectCls}>
                        <option value="">{t("Select a service...", "انتخاب خدمت...")}</option>
                        <option>{t("Entrepreneurship", "خدمات کارآفرینی")}</option>
                        <option>{t("Startup Acceleration", "شتاب‌دهی استارتاپ")}</option>
                        <option>{t("Investment", "سرمایه‌گذاری")}</option>
                        <option>{t("Business Advisory", "مشاوره کسب‌وکار")}</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown />
                      </span>
                    </div>
                  </FormGroup>

                  {/* How did you hear */}
                  <FormGroup label={t("How Did You Hear About Us?", "چطور با ما آشنا شدید؟")}>
                    <div className="relative">
                      <select className={selectCls}>
                        <option value="">{t("Select...", "انتخاب کنید...")}</option>
                        <option>{t("Google", "گوگل")}</option>
                        <option>{t("Social Media", "شبکه‌های اجتماعی")}</option>
                        <option>{t("Friend / Referral", "معرفی دوستان / آشنایان")}</option>
                        <option>{t("Attorney", "وکیل")}</option>
                        <option>{t("Webinar", "وبینار")}</option>
                        <option>{t("Tradeshow / Conference", "نمایشگاه / کنفرانس")}</option>
                        <option>{t("Other", "سایر")}</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown />
                      </span>
                    </div>
                  </FormGroup>

                  {/* Message — full width */}
                  <div className="md:col-span-2">
                    <FormGroup label={t("Tell Us About Your Project", "درباره پروژه‌تان برای ما بنویسید")}>
                      <textarea
                        rows={4}
                        placeholder={t("Describe your business goals and what you're looking to achieve…", "اهداف کسب‌وکار و آنچه می‌خواهید به آن برسید را شرح دهید…")}
                        name="message"
                        className={`${inputCls} min-h-[120px] resize-y`}
                      />
                    </FormGroup>
                  </div>

                  {/* Footer */}
                  <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#F4F4F4]">
                    <p className="text-[13px] text-[#929292] flex items-center gap-1.5">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      {t("Your information is kept strictly confidential.", "اطلاعات شما کاملاً محرمانه نگهداری می‌شود.")}
                    </p>
                    <button type="submit" disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-[#8F27FF] text-white font-bold text-[15px] rounded-full hover:bg-[#7A1FE0] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(143,39,255,0.35)] disabled:opacity-70 transition-all flex-shrink-0">
                      {sending ? t("Sending…", "در حال ارسال…") : (
                        <>{t("Send Message", "ارسال پیام")} <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" /></svg></>
                      )}
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── helpers ── */
const inputCls = "w-full h-[52px] px-4 bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] text-[15px] text-black outline-none focus:border-[#8F27FF] focus:bg-[#FAF6FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,0.1)] transition-all placeholder:text-[#D9D9D9]";
const selectCls = "w-full h-[52px] pl-4 pr-10 bg-[#F7F6F9] border-[1.5px] border-[#E2E2E2] rounded-[12px] text-[15px] text-black outline-none focus:border-[#8F27FF] focus:bg-[#FAF6FF] focus:shadow-[0_0_0_3px_rgba(143,39,255,0.1)] transition-all appearance-none cursor-pointer";

function FormGroup({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#929292]">
        {label}{required && <span className="text-[#8F27FF] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
