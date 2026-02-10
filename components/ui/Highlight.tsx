type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="relative inline-block px-2 overflow-visible">
      {/* تعریف فیلتر SVG برای ایجاد بافت ناصاف - این بخش در خروجی دیده نمی‌شود */}
      <svg className="absolute w-0 h-0">
        <filter id="rough-edge">
          {/* ایجاد نویز تصادفی */}
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          {/* ترکیب نویز با لبه‌های مستطیل برای دندانه‌دار کردن آن */}
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
      </svg>

      {/* متن اصلی */}
      <span className="relative z-10 font-bold text-black">
        {children}
      </span>

      {/* لایه هایلایت با فیلتر اعمال شده */}
      <span
        aria-hidden
        className="absolute inset-x-[-6px] top-[10%] bottom-[5%] z-0"
        style={{
          backgroundColor: '#FFE600',
          filter: 'url(#rough-edge)', // اعمال جادوی ماژیک
          transform: 'rotate(-0.8deg)', // کجی ملایم مشابه عکس
          borderRadius: '20% 5% 20% 5% / 5% 20% 5% 20%', // فرم نامتقارن
        }}
      />
    </span>
  );
};

export default Highlight;