'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLang } from '@/components/global/LanguageProvider';

/* ─── Data ─── */

/* Persian for the Gregorian month abbreviations used in the timeline */
const MONTH_FA: Record<string, string> = {
  Jan: 'ژانویه', Feb: 'فوریه', Mar: 'مارس', Apr: 'آوریل', May: 'مه', Jun: 'ژوئن',
  Jul: 'ژوئیه', Aug: 'اوت', Sep: 'سپتامبر', Oct: 'اکتبر', Nov: 'نوامبر', Dec: 'دسامبر',
};

const timelineItems = [
  {
    year: '2017',
    month: '',
    tag: 'Education',
    tagFa: 'آموزش',
    title: 'The Spark – Landa Academy is Born',
    titleFa: 'جرقه‌ای برای شروع — تولد آکادمی لاندا',
    desc: "Hadi established Landa Academy in Isfahan to mentor students – creating fertile ground for Nexa's first ventures.",
    descFa: 'هادی فعالیت خود را با راه‌اندازی آکادمی لاندا در اصفهان و با هدف آموزش و همراهی دانش‌آموزان آغاز کرد؛ تجربه‌ای که بستری مناسب برای شکل‌گیری نخستین کسب‌وکارهای نکسا فراهم کرد.',
    img: '/images/about/Landa Academy.jpg',
    logo: '/images/about/academylanda.svg',
    side: 'left' as const,
  },
  {
    year: '2021',
    month: 'Jul',
    tag: 'Automation',
    tagFa: 'اتوماسیون',
    title: 'First Venture – Diaco',
    titleFa: 'نخستین کسب‌وکار — Diaco',
    desc: 'Diaco was launched to address factory automation challenges by translating technical expertise into operational solutions.',
    descFa: 'دیاکو با هدف پاسخ به چالش‌های اتوماسیون صنعتی شکل گرفت و دانش تخصصی مهندسی را به راهکارهای عملیاتی برای کارخانه‌ها تبدیل کرد.',
    img: '/images/about/Diacoo.jpg',
    logo: '/images/landing/diaco.svg',
    side: 'right' as const,
  },
  {
    year: '2022',
    month: 'Jun',
    tag: 'EdTech & AR',
    tagFa: 'EdTech و واقعیت افزوده',
    title: 'Reimagining Education – Vision Raft',
    titleFa: 'بازتعریف آموزش — Vision Raft',
    desc: 'Vision Raft brought augmented reality into learning, helping children engage beyond traditional classroom methods.',
    descFa: 'ویژن‌رفت با وارد کردن فناوری واقعیت افزوده به فرآیند آموزش، به کودکان کمک کرد تجربه‌ای فراتر از روش‌های سنتی کلاس درس داشته باشند.',
    img: '/images/about/Vision Raft.jpg',
    logo: '/images/landing/raft.svg',
    side: 'left' as const,
  },
  {
    year: '2023',
    month: 'Jul',
    tag: 'Travel',
    tagFa: 'سفر',
    title: 'Learning Without Borders – Landa Trip',
    titleFa: 'یادگیری بدون مرز — Landa Trip',
    desc: 'LandaTrip redefined education beyond traditional settings by integrating learning with purposeful travel.',
    descFa: 'لاندا تریپ مرزهای آموزش سنتی را جابه‌جا کرد و با پیوند دادن یادگیری و سفرهای هدفمند، تجربه‌ای متفاوت از آموزش ایجاد کرد.',
    img: '/images/about/Landa Trip.jpg',
    logo: '/images/landing/Landa Trip.svg',
    side: 'right' as const,
  },
  {
    year: '2023',
    month: 'Nov',
    tag: 'Marketplace',
    tagFa: 'مارکت‌پلیس',
    title: 'The Innovation Hub – Diaco Center',
    titleFa: 'هاب نوآوری — Diaco Center',
    desc: 'Diaco Center connects technology seekers with validated technology providers.',
    descFa: 'دیاکو سنتر، متقاضیان فناوری را به ارائه‌دهندگان فناوری معتبر و ارزیابی‌شده متصل می‌کند.',
    img: '/images/about/Diaco Center.jpg',
    logo: '/images/about/Diaco.svg',
    side: 'left' as const,
  },
  {
    year: '2024',
    month: 'Dec',
    tag: 'HealthTech & AI',
    tagFa: 'HealthTech و هوش مصنوعی',
    title: 'Engineering a Healthier Future – PreventiGene',
    titleFa: 'مهندسی آینده‌ای سالم‌تر — PreventiGene',
    desc: 'PreventiGene applies AI and genetic analysis in early breast cancer risk prevention.',
    descFa: 'پریونتی‌ژن با بهره‌گیری از هوش مصنوعی و تحلیل‌های ژنتیکی، بر پیشگیری و شناسایی زودهنگام ریسک ابتلا به سرطان پستان تمرکز دارد.',
    img: '/images/about/PreventiGenee.jpg',
    logo: '/images/landing/preventigene.svg',
    side: 'right' as const,
  },
  {
    year: '2025',
    month: 'May',
    tag: 'AI & Health',
    tagFa: 'هوش مصنوعی و سلامت',
    title: 'A Platform for Hope – AutiLab',
    titleFa: 'پلتفرمی برای امید — AutiLab',
    desc: 'AutiLab enables early autism detection combining AI-driven systems with specialist expertise.',
    descFa: 'اوتی‌لب با ترکیب سیستم‌های مبتنی بر هوش مصنوعی و تخصص متخصصان، به شناسایی زودهنگام اوتیسم کمک می‌کند.',
    img: '/images/about/AutiLabb.jpg',
    logo: '/images/landing/Autilab.svg',
    side: 'left' as const,
  },
  {
    year: '2025',
    month: 'Oct',
    tag: 'Creative',
    tagFa: 'خلاقیت',
    title: 'Protecting Artisans – Landa Craft',
    titleFa: 'حمایت از هنرمندان — Landa Craft',
    desc: 'Landa Craft enables secure and transparent exchange within the art and creative economy.',
    descFa: 'لانداکرفت بستری امن و شفاف برای مبادله و تعامل در اقتصاد هنر و صنایع خلاق فراهم می‌کند.',
    img: '/images/about/Landa Craft (2).jpg',
    logo: '/images/landing/craft.svg',
    side: 'right' as const,
  },
];

const certificates = [
  {
    img: '/images/about/Small Certificate.webp',
    title: 'Professional Affiliation',
    titleFa: 'عضویت و همکاری حرفه‌ای',
    desc: 'Certified partnership with internationally recognized advisory and investment networks, ensuring credibility across all operational jurisdictions.',
    descFa: 'همکاری و مشارکت رسمی با شبکه‌های بین‌المللی معتبر در حوزه مشاوره و سرمایه‌گذاری که اعتبار و استانداردهای حرفه‌ای نکسا را در بازارهای مختلف تقویت می‌کند.',
  },
  {
    img: '/images/about/Small Certificate2.webp',
    title: 'Official Registration Certificate',
    titleFa: 'گواهی ثبت رسمی',
    desc: 'Registered legal entity in Canada – British Columbia Registry. Compliant and active in international business advisory and consulting services.',
    descFa: 'نکسا به‌عنوان یک شخصیت حقوقی در استان بریتیش کلمبیا، کانادا به ثبت رسیده و در حوزه مشاوره و خدمات کسب‌وکار بین‌المللی، به‌صورت قانونی و فعال فعالیت می‌کند.',
  },
  {
    img: '/images/about/IMG_6819.webp',
    title: 'Official Entrepreneurship & Consulting Center License',
    titleFa: 'مجوز رسمی مرکز کارآفرینی و مشاوره',
    desc: 'Officially licensed to provide entrepreneurship consulting, business development services, and support for entrepreneurs and businesses.',
    descFa: 'دارای مجوز رسمی برای ارائه خدمات مشاوره کارآفرینی، توسعه کسب‌وکار و پشتیبانی از کارآفرینان و شرکت‌ها.',
  },
  {
    img: '/images/about/IMG_6820.webp',
    title: 'Official Coworking Space License',
    titleFa: 'مجوز رسمی فضای کار اشتراکی',
    desc: 'Officially licensed to operate a coworking space and collaborative environment for entrepreneurs, startups, and growing businesses.',
    descFa: 'دارای مجوز رسمی برای راه‌اندازی و مدیریت فضای کار اشتراکی و محیط‌های همکاری برای کارآفرینان، استارتاپ‌ها و کسب‌وکارهای در حال رشد.',
  },
];

/* ─── Component ─── */

export default function OurStoryPage() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  useEffect(() => {
    // Fade-up observer for general animated elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('os-vis');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.os-anim').forEach((el) => observer.observe(el));

    // VM cards stagger
    const vmObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>('.os-vmcard');
            cards.forEach((c, i) => {
              setTimeout(() => {
                c.classList.add('os-vmcard-vis');
                setTimeout(() => c.classList.add('os-vmcard-ready'), 800 + i * 180);
              }, i * 180);
            });
            vmObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.os-vmgrid').forEach((el) => vmObserver.observe(el));

    // Timeline rows
    const tlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('os-tlrow-vis');
            tlObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.os-tlrow').forEach((el) => tlObserver.observe(el));

    return () => {
      observer.disconnect();
      vmObserver.disconnect();
      tlObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .os-anim { opacity: 0; transform: translateY(26px); transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .os-anim.os-vis { opacity: 1; transform: translateY(0); }
        .os-d1{transition-delay:.06s}.os-d2{transition-delay:.13s}.os-d3{transition-delay:.20s}
        .os-d4{transition-delay:.27s}.os-d5{transition-delay:.34s}

        .os-vmcard { opacity: 0; transform: translateY(48px) scale(.97); }
        @keyframes osCardReveal { 0%{opacity:0;transform:translateY(48px) scale(.97)} 60%{opacity:1} 100%{opacity:1;transform:translateY(0) scale(1)} }
        .os-vmcard.os-vmcard-vis { animation: osCardReveal .8s cubic-bezier(.22,1,.36,1) forwards; }
        .os-vmcard.os-vmcard-ready { animation: none; opacity: 1; transform: translateY(0) scale(1); transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s, border-color .35s; }
        .os-vmcard.os-vmcard-ready:hover { transform: translateY(-7px) scale(1.01); border-color: rgba(143,39,255,.45) !important; box-shadow: 0 24px 60px rgba(143,39,255,.18), 0 0 0 1.5px rgba(143,39,255,.25); }

        .os-tlrow { opacity: 0; transform: translateY(24px); transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
        .os-tlrow.os-tlrow-vis { opacity: 1; transform: translateY(0); }

        @keyframes osNodePulse {
          0%,100%{box-shadow:0 4px 16px rgba(0,0,0,.08),0 1px 4px rgba(0,0,0,.04)}
          50%{box-shadow:0 8px 36px 6px rgba(0,0,0,.12),0 2px 10px rgba(0,0,0,.07)}
        }
        .os-node { animation: osNodePulse 3s ease-in-out infinite; }
        .os-tlrow:hover .os-node { animation: none; transform: scale(1.06); box-shadow: 0 8px 32px rgba(0,0,0,.13); }

        .os-tlcard { transition: border-color .25s, box-shadow .25s, transform .25s; }
        .os-tlcard:hover { border-color: #DEC8FF !important; box-shadow: 0 0 0 3px rgba(143,39,255,.07), 0 16px 48px rgba(143,39,255,.1); transform: translateY(-4px); }
        .os-tlcard:hover .os-tlcard-img { transform: scale(1.05); filter: brightness(.92); }
        .os-tlcard:hover .os-tlcard-tag { background: #8F27FF; color: #fff; }


        .os-certcard { position: relative; overflow: hidden; }
        .os-certcard::before { content:''; position:absolute; top:0; left:0; width:2px; height:0; background:#FFE600; transition:height .35s; z-index:10; }
        .os-certcard:hover::before { height: 100%; }
        .os-certcard:hover { background: #222222 !important; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: 'radial-gradient(ellipse 70% 80% at 15% 50%, #FAF6FF 0%, #fff 60%)' }}>

        {/* MOBILE: image on top, text below */}
        <div className="px-4 pb-10 pt-6 md:hidden">
          {/* image always visible, no animation wrapper */}
          <div className="mb-6 overflow-hidden rounded-[20px]" style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
            <Image
              src="/images/ourteam/Teams.webp"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="100vw"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
          <h1
            className="os-anim mb-4 font-extrabold text-[#0D0D0D]"
            style={{ fontSize: '30px', letterSpacing: '-0.8px', lineHeight: '1.1' }}
          >
            {t('Where Bold Founders Come', 'اینجا، ایده‌های جسورانه')}{' '}
            <em
              className="not-italic"
              style={{ background: '#FFE600', color: '#0D0D0D', padding: '2px 10px 4px', borderRadius: '8px', display: 'inline-block', lineHeight: '1.2' }}
            >
              {t('to Grow', 'جهانی می‌شوند')}
            </em>
          </h1>
          <p className="os-anim os-d2 text-[15px] leading-7 text-[#5A5A5A]">
            {t(
              'Nexa is guided by a team shaped around Hadi Hasanpour, whose multidisciplinary engineering background and analytical expertise established a structured approach to building ventures worldwide.',
              'نکسا با هدایت تیمی شکل گرفته که رویکرد آن بر پایه تجربه چندرشته‌ای و دانش مهندسی هادی حسن‌پور بنا شده است؛ ترکیبی از تفکر تحلیلی و تخصص فنی که مسیر نکسا را برای ساخت و توسعه کسب‌وکارها در سراسر جهان شکل داده است.'
            )}
          </p>
        </div>

        {/* DESKTOP: text left, image right */}
        <div className="mx-auto hidden max-w-[1200px] grid-cols-2 items-center gap-14 px-16 py-20 md:grid">
          <div>
            <h1 className="os-anim mb-5 font-extrabold text-[#0D0D0D]" style={{ fontSize: '52px', letterSpacing: '-1.8px', lineHeight: '1.08' }}>
              {t('Where Bold', 'اینجا،')}<br />{t('Founders Come', 'ایده‌های جسورانه')}<br />
              <em className="not-italic" style={{ background: '#FFE600', color: '#0D0D0D', padding: '2px 10px 4px', borderRadius: '8px', display: 'inline-block', lineHeight: '1.2' }}>
                {t('to Grow', 'جهانی می‌شوند')}
              </em>
            </h1>
            <p className="os-anim os-d2 text-base text-[#5A5A5A]" style={{ lineHeight: '1.78', maxWidth: '440px' }}>
              {t(
                'Nexa is guided by a team shaped around Hadi Hasanpour, whose multidisciplinary engineering background and analytical expertise established a structured approach to building ventures worldwide.',
                'نکسا با هدایت تیمی شکل گرفته که رویکرد آن بر پایه تجربه چندرشته‌ای و دانش مهندسی هادی حسن‌پور بنا شده است؛ ترکیبی از تفکر تحلیلی و تخصص فنی که مسیر نکسا را برای ساخت و توسعه کسب‌وکارها در سراسر جهان شکل داده است.'
              )}
            </p>
          </div>
          <div className="os-anim os-d3 overflow-hidden rounded-[20px]" style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
            <Image
              src="/images/ourteam/Teams.webp"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="50vw"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION ── */}
      <section className="px-4 pt-16 pb-0 md:px-16 md:pt-[88px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="os-anim mb-14 text-center">
            <h2 className="font-extrabold text-[#0D0D0D]" style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-1.2px' }}>
              {t('Vision & Mission', 'چشم‌انداز و مأموریت')}
            </h2>
          </div>
          <div className="os-vmgrid grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Vision */}
            <div
              className="os-vmcard relative overflow-hidden rounded-[20px] transition-all duration-300"
              style={{ background: '#0D0D0D', border: '1.5px solid rgba(255,255,255,.08)' }}
            >
              <div className="pointer-events-none absolute" style={{ top: '-80px', right: '-80px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(143,39,255,.22) 0%, transparent 70%)' }} />
              <div className="relative z-10 p-9 md:p-11">
                <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]" style={{ background: 'rgba(143,39,255,.2)', border: '1.5px solid rgba(143,39,255,.3)' }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#DEC8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h4m12 0h4M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" /><circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h2 className="mb-4 font-extrabold text-white" style={{ fontSize: '24px', letterSpacing: '-0.4px' }}>{t('Vision', 'چشم‌انداز')}</h2>
                <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,.6)' }}>
                  {t(
                    'To build a world without entrepreneurial borders. A world where ideas travel freely, capital follows courage, and founders from every corner of the globe have the power to scale beyond limits. Nexa aims to become the bridge that turns ambition into global influence and vision into international reality.',
                    'ساختن جهانی بدون مرز برای کارآفرینی؛ جهانی که در آن ایده‌ها آزادانه از مرزها عبور می‌کنند، سرمایه به دنبال جسارت حرکت می‌کند و بنیان‌گذاران از هر نقطه جهان می‌توانند ایده‌های خود را فراتر از محدودیت‌ها توسعه دهند. نکسا پلی خواهد بود میان جاه‌طلبی و اثرگذاری جهانی؛ پلی که چشم‌اندازهای بزرگ را به واقعیتی بین‌المللی تبدیل می‌کند.'
                  )}
                </p>
              </div>
            </div>
            {/* Mission */}
            <div
              className="os-vmcard relative overflow-hidden rounded-[20px] transition-all duration-300"
              style={{ background: '#0D0D0D', border: '1.5px solid rgba(255,255,255,.08)' }}
            >
              <div className="pointer-events-none absolute" style={{ top: '-80px', right: '-80px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(143,39,255,.22) 0%, transparent 70%)' }} />
              <div className="relative z-10 p-9 md:p-11">
                <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]" style={{ background: 'rgba(143,39,255,.2)', border: '1.5px solid rgba(143,39,255,.3)' }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#DEC8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h2 className="mb-4 font-extrabold text-white" style={{ fontSize: '24px', letterSpacing: '-0.4px' }}>{t('Mission', 'مأموریت')}</h2>
                <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,.6)' }}>
                  {t(
                    "Nexa's mission is to build a trusted global hub for capital transfer and business relocation – empowering entrepreneurs and investors to expand across borders through structured advisory, strategic investment pathways, and direct access to international markets.",
                    'مأموریت نکسا ایجاد یک هاب جهانی قابل‌اعتماد برای انتقال سرمایه و توسعه کسب‌وکار در بازارهای بین‌المللی است؛ بستری که به کارآفرینان و سرمایه‌گذاران کمک می‌کند با تکیه بر مشاوره تخصصی، مسیرهای استراتژیک سرمایه‌گذاری و دسترسی مستقیم به بازارهای بین‌المللی، کسب‌وکار خود را فراتر از مرزها گسترش دهند.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-white py-[100px]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-16">
          <div className="os-anim mb-16 text-center">
            <h2 className="font-extrabold text-[#0D0D0D]" style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-1.2px' }}>
              {t('NEXA Timeline', 'مسیر رشد نکسا')}
            </h2>
          </div>

          {/* Desktop zigzag */}
          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0" style={{ top: '36px', bottom: '36px', width: '1.5px', background: 'rgba(0,0,0,.15)' }} />
            <div className="mx-auto max-w-[960px]">
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  className="os-tlrow relative z-10 grid items-center"
                  style={{
                    gridTemplateColumns: '1fr 100px 1fr',
                    marginBottom: i < timelineItems.length - 1 ? '-120px' : '0',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {item.side === 'left' ? (
                    <div className="relative pr-3">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '20px', height: '1px', background: 'linear-gradient(to right, transparent, #DEC8FF)' }} />
                      <TlCard item={item} />
                    </div>
                  ) : <div />}

                  <div className="flex items-center justify-center relative z-20">
                    <div className="os-node flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-300" style={{ boxShadow: '0 4px 16px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,.04)' }}>
                      <Image src={item.logo} alt={item.title} width={58} height={58} className="object-contain" style={{ width: '80%', height: '80%', padding: '6px' }} />
                    </div>
                  </div>

                  {item.side === 'right' ? (
                    <div className="relative pl-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '20px', height: '1px', background: 'linear-gradient(to left, transparent, #DEC8FF)' }} />
                      <TlCard item={item} />
                    </div>
                  ) : <div />}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stacked cards */}
          <div className="flex flex-col gap-5 md:hidden">
            {timelineItems.map((item, i) => (
              <div key={i} className="w-full overflow-hidden rounded-[20px] border bg-white" style={{ borderColor: '#E8E8E8', boxShadow: '0 4px 16px rgba(0,0,0,.06)' }}>
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '55%', overflow: 'hidden', background: '#FAF6FF', borderBottom: '1px solid #E8E8E8' }}>
                  <Image src={item.img} alt={item.title} fill className="object-cover" sizes="100vw" style={{ position: 'absolute', top: 0, left: 0 }} />
                </div>
                {/* Body */}
                <div className="px-5 pb-6 pt-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.08)', border: '1px solid #E8E8E8' }}>
                      <Image src={item.logo} alt={item.title} width={32} height={32} className="object-contain" style={{ padding: '3px' }} />
                    </div>
                    <div className="flex-1">
                      <span className="font-extrabold text-[#8F27FF]" style={{ fontSize: '18px', letterSpacing: '-0.4px' }}>
                        {item.year}
                        {item.month && <span className="ml-1.5 align-middle text-[10px] font-semibold uppercase tracking-[0.8px] text-[#A0A0A0]">{t(item.month, MONTH_FA[item.month] ?? item.month)}</span>}
                      </span>
                    </div>
                    <span className="shrink-0 rounded-full px-3 py-0.5 text-[10px] font-bold" style={{ background: '#F3EAFF', color: '#8F27FF' }}>{t(item.tag, item.tagFa)}</span>
                  </div>
                  <h3 className="mb-2 font-bold text-[#0D0D0D]" style={{ fontSize: '15px', lineHeight: '1.35' }}>{t(item.title, item.titleFa)}</h3>
                  <p className="text-[13px] leading-7 text-[#5A5A5A]">{t(item.desc, item.descFa)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section style={{ background: '#0D0D0D', padding: '88px 0' }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-16">
          <h2 className="os-anim mb-2 text-center font-extrabold text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '-1.2px' }}>
            {t('NEXA', 'گواهی‌ها و مجوزهای')} <span style={{ color: '#FFE600' }}>{t('Certificate', 'نکسا')}</span>
          </h2>
          <p className="os-anim os-d2 mb-14 text-center text-sm" style={{ color: 'rgba(255,255,255,.45)' }}>
            {t('Recognized and certified across multiple international jurisdictions.', 'نکسا در چندین حوزه قضایی بین‌المللی، دارای ثبت، مجوز و گواهی‌های حرفه‌ای است.')}
          </p>

          <div className="overflow-hidden rounded-[20px]" style={{ border: '1px solid rgba(255,255,255,.07)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', background: 'rgba(255,255,255,.07)' }}>
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className={`os-certcard os-anim ${i === 0 ? 'os-d2' : 'os-d3'}`}
                  style={{ background: '#161616' }}
                >
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div
                      onClick={() => setLightbox({ img: cert.img, title: cert.title })}
                      style={{ position: 'relative', width: '100%', paddingBottom: '65%', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,.07)', cursor: 'zoom-in' }}
                    >
                      <Image
                        src={cert.img}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-bold text-white" style={{ fontSize: '15px' }}>{t(cert.title, cert.titleFa)}</h3>
                      <p className="text-[13px] leading-7" style={{ color: 'rgba(255,255,255,.5)' }}>{t(cert.desc, cert.descFa)}</p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden items-center gap-8 px-10 py-11 md:flex">
                    <div
                      onClick={() => setLightbox({ img: cert.img, title: cert.title })}
                      style={{ position: 'relative', flexShrink: 0, width: '100px', height: '130px', borderRadius: '10px', overflow: 'hidden', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', cursor: 'zoom-in' }}
                    >
                      <Image
                        src={cert.img}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="120px"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-bold text-white" style={{ fontSize: '16px', letterSpacing: '-0.2px' }}>{t(cert.title, cert.titleFa)}</h3>
                      <p className="text-[13px] leading-7" style={{ color: 'rgba(255,255,255,.5)' }}>{t(cert.desc, cert.descFa)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE LIGHTBOX ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
            animation: 'osFadeIn .2s ease',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label={t('Close', 'بستن')}
            style={{
              position: 'absolute', top: '24px', right: '24px', width: '44px', height: '44px',
              borderRadius: '999px', border: '1px solid rgba(255,255,255,.25)',
              background: 'rgba(255,255,255,.1)', color: '#fff', fontSize: '22px',
              display: 'grid', placeItems: 'center', cursor: 'pointer',
            }}
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: 'min(92vw, 820px)', height: 'min(88vh, 1060px)' }}
          >
            <Image
              src={lightbox.img}
              alt={lightbox.title}
              fill
              className="object-contain"
              sizes="92vw"
            />
          </div>
        </div>
      )}

      <style>{`@keyframes osFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </>
  );
}

/* ── Timeline Card ── */
function TlCard({ item }: { item: (typeof timelineItems)[0] }) {
  const { t } = useLang();
  return (
    <div className="os-tlcard overflow-hidden rounded-[20px] bg-white" style={{ border: '1.5px solid #E8E8E8' }}>
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: '#FAF6FF', borderBottom: '1.5px solid #E8E8E8' }}>
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="os-tlcard-img object-cover"
          sizes="440px"
          style={{ position: 'absolute', top: 0, left: 0, transition: 'transform .5s cubic-bezier(.22,1,.36,1), filter .4s' }}
        />
      </div>
      <div className="px-[22px] pb-6 pt-5">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="font-extrabold text-[#8F27FF]" style={{ fontSize: '20px', letterSpacing: '-0.5px', lineHeight: '1' }}>{item.year}</span>
          {item.month && (
            <>
              <span className="inline-block rounded-full bg-[#DEC8FF]" style={{ width: '3px', height: '3px' }} />
              <span className="font-bold uppercase text-[#A0A0A0]" style={{ fontSize: '10px', letterSpacing: '1px' }}>{t(item.month, MONTH_FA[item.month] ?? item.month)}</span>
            </>
          )}
        </div>
        <span className="os-tlcard-tag mb-2.5 inline-block rounded-full px-[11px] py-[3px] font-bold transition-colors duration-200" style={{ background: '#F3EAFF', color: '#8F27FF', fontSize: '11px' }}>
          {t(item.tag, item.tagFa)}
        </span>
        <p className="mb-2 font-bold text-[#0D0D0D]" style={{ fontSize: '16px', letterSpacing: '-0.3px', lineHeight: '1.3' }}>{t(item.title, item.titleFa)}</p>
        <p className="text-[13px] leading-7 text-[#5A5A5A]">{t(item.desc, item.descFa)}</p>
      </div>
    </div>
  );
}
