'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useLang } from '@/components/global/LanguageProvider';

// ─── Validation message translations ──────────────────────────────────────────

const ERR_FA: Record<string, string> = {
  'First name is required.': 'نام الزامی است.',
  'Last name is required.': 'نام خانوادگی الزامی است.',
  'Phone number is required.': 'شماره تماس الزامی است.',
  'Enter a valid phone number.': 'یک شماره تماس معتبر وارد کنید.',
  'Email is required.': 'ایمیل الزامی است.',
  'Enter a valid email address.': 'یک آدرس ایمیل معتبر وارد کنید.',
  'Company name is required.': 'نام شرکت الزامی است.',
  'Please select an industry.': 'لطفاً یک صنعت انتخاب کنید.',
  'Website must start with http:// or https://': 'وب‌سایت باید با http:// یا https:// شروع شود',
  'Street address is required.': 'نشانی خیابان الزامی است.',
  'City is required.': 'شهر الزامی است.',
  'State / Province is required.': 'ایالت / استان الزامی است.',
  'Country is required.': 'کشور الزامی است.',
  'Business summary is required.': 'خلاصه‌ی کسب‌وکار الزامی است.',
  'Please describe the problem.': 'لطفاً مشکل را شرح دهید.',
  'Please describe your solution.': 'لطفاً راه‌حل خود را شرح دهید.',
  'Please select a stage.': 'لطفاً یک مرحله انتخاب کنید.',
  'Please upload your pitch deck (PDF).': 'لطفاً ارائه‌ی خود را بارگذاری کنید (PDF).',
  'Please answer this question.': 'لطفاً به این پرسش پاسخ دهید.',
  'You must agree to the terms to continue.': 'برای ادامه باید با شرایط موافقت کنید.',
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  companyName: string;
  industry: string;
  website: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  businessSummary: string;
  problem: string;
  solution: string;
  stage: string;
  pitchDeck: File | null;
  basedInCanada: string;
  agreedToTerms: boolean;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;

// ─── Sidebar config ───────────────────────────────────────────────────────────

const sidebarGroups = [
  {
    id: 1,
    title: 'Personal Information',
    titleFa: 'اطلاعات شخصی',
    items: [
      { label: 'Contact Information', labelFa: 'اطلاعات تماس', step: 1 },
      { label: 'Company Overview', labelFa: 'معرفی شرکت', step: 2 },
      { label: 'Company Address', labelFa: 'آدرس شرکت', step: 3 },
    ],
  },
  {
    id: 2,
    title: 'Company Business Model',
    titleFa: 'مدل کسب‌وکار شرکت',
    items: [
      { label: 'Business Summary', labelFa: 'معرفی کسب‌وکار', step: 4 },
      { label: 'Problem', labelFa: 'مسئله', step: 5 },
      { label: 'Solution', labelFa: 'راهکار', step: 6 },
    ],
  },
  {
    id: 3,
    title: 'Company Stage & Growth',
    titleFa: 'مرحله و رشد شرکت',
    items: [{ label: 'Stage & Growth', labelFa: 'مرحله و روند رشد', step: 7 }],
  },
  {
    id: 4,
    title: 'Documents & Confirmation',
    titleFa: 'مدارک و تأییدیه‌ها',
    items: [
      { label: 'Supporting Documents', labelFa: 'مدارک پشتیبان', step: 8 },
      { label: 'Legal Declarations', labelFa: 'اظهارات و تأییدیه‌های قانونی', step: 9 },
    ],
  },
];

const allStepItems = sidebarGroups.flatMap((g) => g.items);
const TOTAL_STEPS = allStepItems.length;

// ─── Validation ───────────────────────────────────────────────────────────────

function validateStep(step: number, data: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (step === 1) {
    if (!data.firstName.trim()) errors.firstName = 'First name is required.';
    if (!data.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!data.phone.trim()) errors.phone = 'Phone number is required.';
    else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.phone))
      errors.phone = 'Enter a valid phone number.';
    if (!data.email.trim()) errors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = 'Enter a valid email address.';
  }

  if (step === 2) {
    if (!data.companyName.trim()) errors.companyName = 'Company name is required.';
    if (!data.industry) errors.industry = 'Please select an industry.';
    if (
      data.website.trim() &&
      !/^https?:\/\/.+/.test(data.website.trim())
    )
      errors.website = 'Website must start with http:// or https://';
  }

  if (step === 3) {
    if (!data.streetAddress.trim()) errors.streetAddress = 'Street address is required.';
    if (!data.city.trim()) errors.city = 'City is required.';
    if (!data.state.trim()) errors.state = 'State / Province is required.';
    if (!data.country.trim()) errors.country = 'Country is required.';
  }

  if (step === 4) {
    if (!data.businessSummary.trim())
      errors.businessSummary = 'Business summary is required.';
  }

  if (step === 5) {
    if (!data.problem.trim()) errors.problem = 'Please describe the problem.';
  }

  if (step === 6) {
    if (!data.solution.trim()) errors.solution = 'Please describe your solution.';
  }

  if (step === 7) {
    if (!data.stage) errors.stage = 'Please select a stage.';
  }

  if (step === 8) {
    if (!data.pitchDeck) errors.pitchDeck = 'Please upload your pitch deck (PDF).';
    if (!data.basedInCanada) errors.basedInCanada = 'Please answer this question.';
  }

  if (step === 9) {
    if (!data.agreedToTerms)
      errors.agreedToTerms = 'You must agree to the terms to continue.';
  }

  return errors;
}

// ─── Shared input classes ─────────────────────────────────────────────────────

const inputBase =
  'w-full h-11 rounded-xl px-4 bg-white outline-none shadow-sm border transition-colors';
const inputNormal = `${inputBase} border-transparent focus:border-[#8F27FF]`;
const inputError = `${inputBase} border-red-400 focus:border-red-500`;

function FieldError({ msg }: { msg?: string }) {
  const { t } = useLang();
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1">{t(msg, ERR_FA[msg] ?? msg)}</p>;
}

// ─── Step components ──────────────────────────────────────────────────────────

function Step1({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('First Name', 'نام')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className={errors.firstName ? inputError : inputNormal}
          />
          <FieldError msg={errors.firstName} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Last Name', 'نام خانوادگی')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className={errors.lastName ? inputError : inputNormal}
          />
          <FieldError msg={errors.lastName} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Phone Number', 'شماره تماس')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1 000 000 0000"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className={errors.phone ? inputError : inputNormal}
          />
          <FieldError msg={errors.phone} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Email', 'ایمیل')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className={errors.email ? inputError : inputNormal}
          />
          <FieldError msg={errors.email} />
        </div>
      </div>
    </div>
  );
}

function Step2({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Company Name', 'نام شرکت')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
            className={errors.companyName ? inputError : inputNormal}
          />
          <FieldError msg={errors.companyName} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Industry / Sector', 'حوزه فعالیت / صنعت')} <span className="text-red-500">*</span>
          </label>
          <select
            value={data.industry}
            onChange={(e) => onChange('industry', e.target.value)}
            className={errors.industry ? inputError : inputNormal}
          >
            <option value="">{t('Select Industry', 'انتخاب حوزه')}</option>
            <option>{t('Fintech', 'فین‌تک')}</option>
            <option>{t('Healthtech', 'هلث‌تک')}</option>
            <option>{t('Edtech', 'اِدتک')}</option>
            <option>{t('Ecommerce', 'تجارت الکترونیک')}</option>
            <option>{t('SaaS', 'SaaS')}</option>
            <option>{t('AI', 'هوش مصنوعی')}</option>
          </select>
          <FieldError msg={errors.industry} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">{t('Company Website', 'وب‌سایت شرکت')}</label>
          <input
            type="text"
            placeholder="https://"
            value={data.website}
            onChange={(e) => onChange('website', e.target.value)}
            className={errors.website ? inputError : inputNormal}
          />
          <FieldError msg={errors.website} />
        </div>
      </div>
    </div>
  );
}

function Step3({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">
          {t('Street Address', 'آدرس')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={data.streetAddress}
          onChange={(e) => onChange('streetAddress', e.target.value)}
          className={errors.streetAddress ? inputError : inputNormal}
        />
        <FieldError msg={errors.streetAddress} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">{t('Address Line 2', 'آدرس، خط ۲')}</label>
        <input
          type="text"
          value={data.addressLine2}
          onChange={(e) => onChange('addressLine2', e.target.value)}
          className={inputNormal}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('City', 'شهر')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => onChange('city', e.target.value)}
            className={errors.city ? inputError : inputNormal}
          />
          <FieldError msg={errors.city} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('State / Province', 'استان / ایالت')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.state}
            onChange={(e) => onChange('state', e.target.value)}
            className={errors.state ? inputError : inputNormal}
          />
          <FieldError msg={errors.state} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">{t('Postal / ZIP Code', 'کد پستی')}</label>
          <input
            type="text"
            value={data.postalCode}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className={inputNormal}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium">
            {t('Country', 'کشور')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.country}
            onChange={(e) => onChange('country', e.target.value)}
            className={errors.country ? inputError : inputNormal}
          />
          <FieldError msg={errors.country} />
        </div>
      </div>
    </div>
  );
}

function Step4({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {t('Short company description', 'توضیح کوتاه درباره شرکت')} <span className="text-red-500">*</span>
      </label>
      <p className="text-xs text-gray-500">
        {t("A one-line 'elevator pitch' for your company. Maximum 300 characters.", "یک معرفی یک‌خطی و مختصر از شرکت شما؛ در قالب یک Elevator Pitch. حداکثر ۳۰۰ کاراکتر.")}
      </p>
      <textarea
        maxLength={300}
        value={data.businessSummary}
        onChange={(e) => onChange('businessSummary', e.target.value)}
        className={`w-full h-40 rounded-xl px-4 py-3 bg-white outline-none shadow-sm border resize-none transition-colors ${
          errors.businessSummary
            ? 'border-red-400 focus:border-red-500'
            : 'border-transparent focus:border-[#8F27FF]'
        }`}
      />
      <div className="flex justify-between items-center">
        <FieldError msg={errors.businessSummary} />
        <span className="text-xs text-gray-400 ml-auto">
          {data.businessSummary.length}/300
        </span>
      </div>
    </div>
  );
}

function Step5({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {t('What problem are you solving?', 'چه مسئله‌ای را حل می‌کنید؟')} <span className="text-red-500">*</span>
      </label>
      <p className="text-xs text-gray-500">
        {t('What is the specific problem that you are aiming to solve? Maximum 600 characters.', 'مشخصاً توضیح دهید کسب‌وکار شما برای حل چه مسئله‌ای شکل گرفته است. حداکثر ۶۰۰ کاراکتر.')}
      </p>
      <textarea
        maxLength={600}
        value={data.problem}
        onChange={(e) => onChange('problem', e.target.value)}
        className={`w-full h-44 rounded-xl px-4 py-3 bg-white outline-none shadow-sm border resize-none transition-colors ${
          errors.problem
            ? 'border-red-400 focus:border-red-500'
            : 'border-transparent focus:border-[#8F27FF]'
        }`}
      />
      <div className="flex justify-between items-center">
        <FieldError msg={errors.problem} />
        <span className="text-xs text-gray-400 ml-auto">{data.problem.length}/600</span>
      </div>
    </div>
  );
}

function Step6({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {t('What is your solution to the problem?', 'راهکار شما برای حل این مسئله چیست؟')} <span className="text-red-500">*</span>
      </label>
      <p className="text-xs text-gray-500">
        {t('What is your product/service, and how does it solve the problem? Maximum 600 characters.', 'محصول یا خدمت شما چیست و چگونه این مسئله را حل می‌کند؟ حداکثر ۶۰۰ کاراکتر.')}
      </p>
      <textarea
        maxLength={600}
        value={data.solution}
        onChange={(e) => onChange('solution', e.target.value)}
        className={`w-full h-44 rounded-xl px-4 py-3 bg-white outline-none shadow-sm border resize-none transition-colors ${
          errors.solution
            ? 'border-red-400 focus:border-red-500'
            : 'border-transparent focus:border-[#8F27FF]'
        }`}
      />
      <div className="flex justify-between items-center">
        <FieldError msg={errors.solution} />
        <span className="text-xs text-gray-400 ml-auto">{data.solution.length}/600</span>
      </div>
    </div>
  );
}

const stageOptions = [
  { value: 'IDEA', label: 'Idea', labelFa: 'ایده', desc: 'Concept stage, no product yet', descFa: 'در مرحله ایده هستید و هنوز محصولی ندارید.' },
  { value: 'TRIAL', label: 'Trial', labelFa: 'آزمایشی', desc: 'Testing the idea with early users', descFa: 'در حال آزمودن ایده با کاربران اولیه هستید.' },
  { value: 'MVP', label: 'MVP', labelFa: 'MVP', desc: 'Minimum viable product built', descFa: 'حداقل محصول قابل ارائه (MVP) ساخته شده است.' },
  { value: 'FIRST_SALE', label: 'First Sale', labelFa: 'اولین فروش', desc: 'First paying customers', descFa: 'اولین مشتریان پرداخت‌کننده خود را جذب کرده‌اید.' },
  { value: 'SALE_DEVELOPMENT', label: 'Sale Development', labelFa: 'مرحله توسعه فروش', desc: 'Growing revenue', descFa: 'درآمد شرکت در حال رشد است.' },
];

function Step7({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium mb-1">
        {t('Current Stage', 'مرحله فعلی')} <span className="text-red-500">*</span>
      </label>
      {stageOptions.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-4 rounded-xl px-5 py-3 min-h-14 bg-white cursor-pointer transition border ${
            data.stage === opt.value
              ? 'border-[#8F27FF] shadow-[0_0_0_1px_#8F27FF]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <input
            type="radio"
            name="stage"
            value={opt.value}
            checked={data.stage === opt.value}
            onChange={() => onChange('stage', opt.value)}
            className="w-4 h-4 shrink-0 accent-[#8F27FF]"
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
            <span className="text-sm font-medium">{t(opt.label, opt.labelFa)}</span>
            <span className="text-xs text-gray-400">{t(opt.desc, opt.descFa)}</span>
          </div>
        </label>
      ))}
      <FieldError msg={errors.stage} />
    </div>
  );
}

function Step8({
  data,
  errors,
  onFileChange,
  onChange,
}: {
  data: FormData;
  errors: FieldErrors;
  onFileChange: (file: File | null) => void;
  onChange: (field: keyof FormData, value: string) => void;
}) {
  const { t } = useLang();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onFileChange(file);
    } else if (file) {
      onFileChange(null);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          {t('Upload your investor deck for review', 'آپلود فایل معرفی سرمایه‌گذاری')} <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-500">
          {t('Please send us your investor/pitch deck (PDF ONLY – 20MB max).', 'لطفاً فایل معرفی شرکت یا Pitch Deck خود را برای بررسی ارسال کنید. فقط PDF — حداکثر حجم ۲۰ مگابایت')}
        </p>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className={`rounded-xl bg-white p-8 flex flex-col items-center justify-center cursor-pointer border-2 border-dashed transition ${
            errors.pitchDeck
              ? 'border-red-400'
              : data.pitchDeck
              ? 'border-[#8F27FF]'
              : 'border-gray-200 hover:border-[#8F27FF]'
          }`}
        >
          <Image src="/images/form/upload.svg" alt="upload" width={24} height={24} />
          <span
            className={`text-xs mt-2 ${
              data.pitchDeck ? 'text-[#8F27FF] font-medium' : 'text-gray-400'
            }`}
          >
            {data.pitchDeck ? data.pitchDeck.name : t('Click to upload PDF', 'برای آپلود PDF کلیک کنید')}
          </span>
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/pdf"
          onChange={handleFile}
          className="hidden"
        />
        <FieldError msg={errors.pitchDeck} />
      </div>

      {/* Canada question */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">
          {t('My company is based in Canada', 'شرکت من در کانادا مستقر است')} <span className="text-red-500">*</span>
        </label>
        {[
          { value: 'yes', label: 'YES, My company is based in Canada.', labelFa: 'بله، شرکت من در کانادا مستقر است.' },
          { value: 'no', label: 'NO, My company is not based in Canada.', labelFa: 'خیر، شرکت من در کانادا مستقر نیست.' },
        ].map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-4 rounded-xl px-5 h-12 bg-white cursor-pointer border transition ${
              data.basedInCanada === opt.value
                ? 'border-[#8F27FF] shadow-[0_0_0_1px_#8F27FF]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="canada"
              value={opt.value}
              checked={data.basedInCanada === opt.value}
              onChange={() => onChange('basedInCanada', opt.value)}
              className="w-4 h-4 accent-[#8F27FF]"
            />
            <span className="text-sm">{t(opt.label, opt.labelFa)}</span>
          </label>
        ))}
        <FieldError msg={errors.basedInCanada} />
      </div>
    </div>
  );
}

function Step9({
  data,
  errors,
  onToggle,
}: {
  data: FormData;
  errors: FieldErrors;
  onToggle: () => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-bold mb-4 text-black">
          {t('Acknowledgement – Canadian Companies', 'تأییدیه — شرکت‌های کانادایی')}{' '}
          <span className="text-red-500">*</span>
        </h2>
        <div className="text-sm text-black leading-7 space-y-3 mb-6">
          <p>{t('Nexa Venture Inc. is a Canadian Corporation.', 'Nexa Venture Inc. یک شرکت ثبت‌شده در کانادا است.')}</p>
          <p>
            {t('Participation fees may apply only after passing the screening process and agreeing to present.', 'هزینه مشارکت تنها پس از عبور از مرحله ارزیابی اولیه و موافقت با ارائه پروژه ممکن است اعمال شود.')}
          </p>
          <p>
            {t('Nexa Venture Inc. does not take equity, success fees, or commissions.', 'Nexa Venture Inc. هیچ‌گونه سهام، کارمزد موفقیت یا کمیسیون دریافت نمی‌کند.')}
          </p>
          <p>
            {t('Investors act in their individual capacity and applicants are responsible for their own due diligence.', 'سرمایه‌گذاران به‌صورت مستقل و شخصی تصمیم‌گیری می‌کنند و مسئولیت انجام بررسی‌های لازم (Due Diligence) بر عهده متقاضیان است.')}
          </p>
        </div>
        <hr className="border-gray-300 mb-6" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-4">
          <button
            type="button"
            onClick={onToggle}
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
              data.agreedToTerms
                ? 'bg-[#8F27FF] border-[#8F27FF]'
                : errors.agreedToTerms
                ? 'border-red-400 bg-white'
                : 'border-[#8F27FF] bg-white'
            }`}
          >
            {data.agreedToTerms && (
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
          <span className="text-sm font-medium text-gray-800">
            {t('I have read and agree to the Terms and Legal Declarations', 'با مطالعه و پذیرش شرایط و اظهارات قانونی موافقم.')}{' '}
            <span className="text-red-500">*</span>
          </span>
        </div>
        <FieldError msg={errors.agreedToTerms} />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const initialData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  companyName: '',
  industry: '',
  website: '',
  streetAddress: '',
  addressLine2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  businessSummary: '',
  problem: '',
  solution: '',
  stage: '',
  pitchDeck: null,
  basedInCanada: '',
  agreedToTerms: false,
};

export default function MultiStepForm() {
  const { t } = useLang();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const currentItem = allStepItems.find((s) => s.step === currentStep);
  const currentLabel = currentItem ? t(currentItem.label, currentItem.labelFa) : '';
  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-black">{t('Application Submitted!', 'درخواست ارسال شد!')}</h2>
        <p className="text-gray-500 max-w-md">
          {t('Thank you for applying. We will review your application and get back to you within 2–3 business days.', 'از درخواست شما سپاسگزاریم. درخواست شما را بررسی می‌کنیم و ظرف ۲ تا ۳ روز کاری با شما تماس می‌گیریم.')}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-6">{t('Apply For Funding', 'درخواست جذب سرمایه')}</h1>

      {/* Mobile progress */}
      <div className="lg:hidden mb-6 px-1">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{t('Step', 'گام')} {currentStep} {t('of', 'از')} {TOTAL_STEPS}</span>
          <span>{currentLabel}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8F27FF] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">

        {/* Sidebar */}
        <aside className="hidden lg:flex w-[280px] shrink-0 flex-col p-5 rounded-2xl border border-[#929292] bg-[#F4F4F4]">
          {sidebarGroups.map((group) => {
            const stepNumbers = group.items.map((i) => i.step);
            const min = Math.min(...stepNumbers);
            const max = Math.max(...stepNumbers);
            const isActive = currentStep >= min && currentStep <= max;
            const isCompleted = currentStep > max;

            return (
              <div key={group.id} className="flex gap-3 mb-5">
                <div className="flex flex-col items-center">
                  <div
                    className="w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center text-[13px] font-semibold shrink-0"
                    style={{
                      backgroundColor: isActive || isCompleted ? '#22c55e' : '#fff',
                      color: isActive || isCompleted ? '#fff' : '#000',
                      borderColor: isActive || isCompleted ? '#22c55e' : '#ccc',
                    }}
                  >
                    {isCompleted ? '✓' : group.id}
                  </div>
                  {group.id !== sidebarGroups.length && (
                    <div className="w-0.5 h-10 bg-[#ddd] mt-1" />
                  )}
                </div>

                <div>
                  <p
                    className="text-sm"
                    style={{
                      color: isActive || isCompleted ? '#22c55e' : '#000',
                      fontWeight: isActive ? '600' : '400',
                    }}
                  >
                    {t(group.title, group.titleFa)}
                  </p>
                  <ul className="pl-3.5 mt-1">
                    {group.items.map((item) => {
                      const isItemActive = currentStep === item.step;
                      const isItemDone = currentStep > item.step;
                      return (
                        <li
                          key={item.step}
                          className="text-xs mb-1"
                          style={{
                            color: isItemActive || isItemDone ? '#22c55e' : '#777',
                            fontWeight: isItemActive ? '600' : '400',
                          }}
                        >
                          • {t(item.label, item.labelFa)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </aside>

       
        <div className="flex-1 flex flex-col rounded-2xl border border-[#929292] bg-[#F4F4F4] p-6 md:p-8 lg:h-[620px]">

          {/* Step title */}
          <div className="mb-6">
            <p className="text-xs font-medium text-[#8F27FF] uppercase tracking-wider mb-1">
              {t('Step', 'گام')} {currentStep} {t('of', 'از')} {TOTAL_STEPS}
            </p>
            <h2 className="text-lg font-bold text-black">{currentLabel}</h2>
          </div>

          
          <div className="flex-1 overflow-y-auto pb-2">
            {currentStep === 1 && (
              <Step1 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 2 && (
              <Step2 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 3 && (
              <Step3 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 4 && (
              <Step4 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 5 && (
              <Step5 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 6 && (
              <Step6 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 7 && (
              <Step7 data={formData} errors={errors} onChange={handleChange} />
            )}
            {currentStep === 8 && (
              <Step8
                data={formData}
                errors={errors}
                onFileChange={(file) =>
                  setFormData((prev) => ({ ...prev, pitchDeck: file }))
                }
                onChange={handleChange}
              />
            )}
            {currentStep === 9 && (
              <Step9
                data={formData}
                errors={errors}
                onToggle={() => {
                  setFormData((prev) => ({
                    ...prev,
                    agreedToTerms: !prev.agreedToTerms,
                  }));
                  if (errors.agreedToTerms)
                    setErrors((prev) => ({ ...prev, agreedToTerms: undefined }));
                }}
              />
            )}
          </div>

          {/* Buttons — pinned to bottom */}
          <div className="flex justify-between items-center mt-6 pt-5 border-t border-gray-200 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 h-11 rounded-xl border border-[#8F27FF] text-[#8F27FF] text-sm font-medium hover:bg-[#8F27FF] hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t('Prev', 'قبلی')}
            </button>

            {currentStep < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 h-11 rounded-xl bg-[#8F27FF] text-white text-sm font-medium hover:bg-[#7a1fdb] transition"
              >
                {t('Next', 'بعدی')}
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 h-11 rounded-xl bg-[#8F27FF] text-white text-sm font-semibold hover:bg-[#7a1fdb] transition shadow-md"
              >
                {t('Submit Application', 'ارسال درخواست')}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
