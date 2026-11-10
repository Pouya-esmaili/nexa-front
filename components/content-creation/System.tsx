"use client";

import { useLang } from "@/components/global/LanguageProvider";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  );
}

export default function System() {
  const { t } = useLang();
  return (
    <section className="vi-section cc-system">
      <div className="wrap">
        <div className="cc-system__head">
          <div>
            <span className="vi-label">{t("/ HOW WE THINK", "/ رویکرد ما")}</span>
            <h2 className="editorial-h2">
              <span className="eh2-outline">{t("FROM STRATEGY", "از استراتژی")}</span>
              <span className="eh2-solid">{t("TO CONTENT.", "تا محتوا.")}</span>
            </h2>
          </div>
        </div>
        <div className="cc-flow">
          <article className="cc-flow__group cc-flow__group--define">
            <div className="cc-flow__phase"><span>{t("01 / Define", "۰۱ / تعریف")}</span><b>{t("Strategy", "استراتژی")}</b></div>
            <h3>{t("Find the spark.", "نقطه شروع را پیدا کنید.")}</h3>
            <p>{t("Discover the reason to create—and the people it should move.", "دلیل خلق محتوا را مشخص می‌کنیم و می‌فهمیم قرار است چه کسانی را تحت تأثیر قرار دهد.")}</p>
            <div className="cc-flow__items">
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg></div>
                <div><h4>{t("Business Goal", "هدف کسب‌وکار")}</h4><p>{t("What should content achieve?", "محتوا قرار است چه نتیجه‌ای ایجاد کند؟")}</p></div>
              </div>
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg></div>
                <div><h4>{t("Audience", "مخاطب")}</h4><p>{t("Who needs to care?", "چه کسی باید به این محتوا اهمیت بدهد؟")}</p></div>
              </div>
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                <div><h4>{t("Message", "پیام")}</h4><p>{t("What should they remember?", "مخاطب در نهایت باید چه چیزی را به خاطر بسپارد؟")}</p></div>
              </div>
            </div>
          </article>
          <div className="cc-flow__arrow" aria-hidden="true"><ArrowIcon /></div>
          <article className="cc-flow__group cc-flow__group--build">
            <div className="cc-flow__phase"><span>{t("02 / Build", "۰۲ / ساخت")}</span><b>{t("System", "سیستم")}</b></div>
            <h3>{t("Shape the idea.", "ایده را به یک هویت محتوایی تبدیل کنید.")}</h3>
            <p>{t("Turn the spark into themes, stories, and a visual voice of its own.", "ایده اصلی را به موضوعات، روایت‌ها و یک زبان بصری و محتوایی منسجم تبدیل می‌کنیم.")}</p>
            <div className="cc-flow__items">
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></div>
                <div><h4>{t("Content Pillars", "ستون‌های محتوا")}</h4><p>{t("What will the brand own?", "برند قرار است مالک چه موضوعاتی باشد؟")}</p></div>
              </div>
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.7 1.7-1.7h2c3 0 5.5-2.5 5.5-5.5C22 6 17.5 2 12 2z" /></svg></div>
                <div><h4>{t("Creative Direction", "جهت‌گیری خلاقانه")}</h4><p>{t("How should it look and sound?", "محتوا باید چه ظاهر و لحنی داشته باشد؟")}</p></div>
              </div>
            </div>
          </article>
          <div className="cc-flow__arrow" aria-hidden="true"><ArrowIcon /></div>
          <article className="cc-flow__group cc-flow__group--activate">
            <div className="cc-flow__phase"><span>{t("03 / Activate", "۰۳ / اجرا")}</span><b>{t("Delivery", "انتشار")}</b></div>
            <h3>{t("Put it in motion.", "محتوا را وارد چرخه نمایش کنید.")}</h3>
            <p>{t("Make the right pieces, release them, learn, and keep the story moving.", "محتوای درست را تولید می‌کنیم، در زمان مناسب منتشر می‌کنیم، از بازخوردها یاد می‌گیریم و روایت برند را به‌صورت مستمر پیش می‌بریم.")}</p>
            <div className="cc-flow__items">
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                <div><h4>{t("Content", "محتوا")}</h4><p>{t("Create the right formats.", "فرمت مناسب برای هر پیام را تولید کنید.")}</p></div>
              </div>
              <div className="cc-flow__item">
                <div className="cc-flow__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg></div>
                <div><h4>{t("Distribution", "توزیع")}</h4><p>{t("Reach people at the right moment.", "محتوا را در زمان و کانال درست به مخاطب برسانید.")}</p></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
