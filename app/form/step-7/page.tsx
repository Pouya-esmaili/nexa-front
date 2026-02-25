'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function StepSevenPage() {

  const router = useRouter();
  const [selected, setSelected] = useState('TRIAL');

  // تایپ فرم
  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/form/step-8');
  };

  // دکمه قبلی
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/form/step-6');
  };

  const options = [
    'IDEA',
    'TRIAL',
    'MVP',
    'FirstSale',
    'SaleDevelopment'
  ];

  return (
    <div className="w-full">

      <form onSubmit={handleNext} className="flex flex-col h-full justify-between">

        {/* بالا */}
        <div className="flex flex-col gap-4">

          {options.map((item) => (
            <label
              key={item}
              className={`
                flex items-center gap-4
                rounded-xl px-5 h-12 shadow-lg
                bg-white cursor-pointer transition
                ${selected === item ? 'border-[#8F27FF]' : 'border-gray-300'}
              `}
            >

              {/* radio واقعی */}
              <input
                type="radio"
                name="stage"
                value={item}
                checked={selected === item}
                onChange={() => setSelected(item)}
                className="w-6 h-6"
                style={{ accentColor: '#8F27FF' }}
              />

              <span className="text-sm">{item}</span>

            </label>
          ))}

        </div>

        {/* دکمه ها */}
        <div className="flex justify-between mt-12">

          <button
            type="button"
            onClick={handlePrev}
            className="border border-[#8F27FF] text-[#8F27FF] px-8 h-11 rounded-xl hover:bg-[#8F27FF] hover:text-white transition"
          >
            ← Prev
          </button>

          <button
            type="submit"
            className="border border-[#8F27FF] text-[#8F27FF] px-8 h-11 rounded-xl hover:bg-[#8F27FF] hover:text-white transition"
          >
            Next →
          </button>

        </div>

      </form>

    </div>
  );
}