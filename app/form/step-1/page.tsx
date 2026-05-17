'use client';

import React from "react";
import { useRouter } from 'next/navigation';

export default function StepOnePage() {

  const router = useRouter();

  // تایپ فرم
  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/form/step-2');
  };

  // تایپ کلیک دکمه
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="w-full">

      {/* card */}
      <form onSubmit={handleNext} className="flex flex-col h-full justify-between ">

        {/* قسمت بالا */}
        <div className=''>

          {/* row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-10">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="w-full h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="w-full h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
              />
            </div>

          </div>

          {/* row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="+91"
                className="w-full h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                className="w-full h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
              />
            </div>

          </div>

        </div>

        {/* buttons پایین */}
        <div className="flex justify-between mt-12">

          <button
            type="button"
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#8F27FF] text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white transition"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            type="submit"
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#8F27FF] text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white transition"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

      </form>

    </div>
  );
}