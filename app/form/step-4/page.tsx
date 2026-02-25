'use client';

import React from "react";
import { useRouter } from 'next/navigation';

export default function StepFourPage() {

  const router = useRouter();

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/form/step-5');
  };
  console.log('Form submitted');
  
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/form/step-2');
  };

  return (

    <div className="w-full">

      <form
        onSubmit={handleNext}
        className="flex flex-col h-full justify-between"
      >

        {/* بالا */}
        <div>

          <div className="flex flex-col gap-2 mb-10">

            <label className="text-sm font-medium">
              Short company description
              <span className="text-red-500">*</span>
            </label>

            <p className="text-xs text-gray-500">
              A one-line 'elevator pitch' for your company. Maximum 300 characters.
            </p>

            <textarea
              maxLength={300}
              className="w-full max-w-[680px] h-[140px] rounded-xl px-4 py-3 bg-white outline-none shadow-sm resize-none"
            />

          </div>

        </div>


        {/* buttons */}
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
