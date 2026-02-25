'use client';

import React from "react";
import { useRouter } from 'next/navigation';

export default function StepOnePage() {

  const router = useRouter();

  // تایپ فرم
  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/form/step-3');
  };

  // تایپ کلیک دکمه
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="w-full">

      {/* card */}
      <div className="w-full">

        <form onSubmit={handleNext} className="flex flex-col h-full justify-between">

          {/* قسمت بالا */}
          <div>

            {/* row 1 */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10">

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                />
              </div>

              {/* Industry / Sector */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Industry / Sector <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                >
                  <option value="">Select Industry</option>
                  <option>Fintech</option>
                  <option>Healthtech</option>
                  <option>Edtech</option>
                  <option>Ecommerce</option>
                  <option>SaaS</option>
                  <option>AI</option>
                </select>
              </div>

            </div>

            {/* row 2 */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">

              {/* Company Website */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Company Website
                </label>
                <input
                  type="text"
                  placeholder="https://"
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                />
              </div>

            </div>

          </div>

          {/* buttons پایین */}
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
    </div>
  );
}
