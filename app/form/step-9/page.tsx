'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StepNinePage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms first.");
      return;
    }
    console.log('Final Submit');
  };

  const handlePrev = (e) => {
    e.preventDefault();
    router.push('/form/step-8');
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
        
        {/* محتوای متنی */}
        <div>
          <h2 className="text-[16px] font-bold mb-6 text-black">
            Acknowledgement - Canadian Companies <span className="text-red-500">*</span>
          </h2>

          <div className="text-[14px] text-black leading-7 space-y-4 mb-8">
            <p>Nexa Venture Inc. is a Canadian Corporation.</p>
            <p>Participation fees may apply only after passing the screening process and agreeing to present.</p>
            <p>Nexa Venture Inc. does not take equity, success fees, or commissions.</p>
            <p>Investors act in their individual capacity and applicants are responsible for their own due diligence.</p>
          </div>

          <hr className="border-gray-300 mb-8" />

          {/* چک‌باکس سفارشی */}
          <div className="flex items-center gap-4 ">
            <div 
              onClick={() => setAgreed(!agreed)}
              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all border border-[#8F27FF] cursor-pointer
                ${agreed ? 'bg-[#8F27FF] border-[#8F27FF]' : 'border-[#8F27FF] bg-white'}
              `}
            >
              {agreed && (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-[14px] font-medium text-gray-800">
              I have read and agree to the Terms and Legal Declarations <span className="text-red-500">*</span>
            </span>
          </div>
        </div>

        {/* دکمه‌های پایین صفحه */}
        <div className="flex justify-between items-center mt-12">
          
          <button
            type="button"
            onClick={handlePrev}
            className="border border-[#8F27FF] text-[#8F27FF] px-10 h-12 rounded-2xl hover:bg-[#f3e8ff] transition-all flex items-center font-medium"
          >
            ← Prev
          </button>

          <button
            type="submit"
            className="bg-[#8F27FF] text-white px-10 h-12 rounded-2xl hover:bg-[#7a1fdb] transition-all flex items-center justify-center text-[16px] shadow-md"
          >
            Submit
          </button>

        </div>
      </form>
    </div>
  );
}