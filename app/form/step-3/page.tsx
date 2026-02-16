'use client';

import { useRouter } from 'next/navigation';

export default function StepThreePage() {

  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    router.push('/form/step-4');
  };

  const handlePrev = (e) => {
    e.preventDefault();
    router.push('/form/step-2');
  };

  return (
    <div className="w-full">

      <form onSubmit={handleNext} className="flex flex-col h-full justify-between">

        {/* قسمت بالا */}
        <div>

          {/* Street Address */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-medium">
              Street Address <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              className="w-full max-w-[680px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
            />
          </div>

          {/* Address Line 2 */}
          <div className="flex flex-col gap-2 mb-10">
            <label className="text-sm font-medium">
              Address Line 2
            </label>

            <input
              type="text"
              className="w-full max-w-[680px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
            />
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                City <span className="text-red-500">*</span>
              </label>

              <select className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm">
                <option value=""></option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                State / Province <span className="text-red-500">*</span>
              </label>

              <select className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm">
                <option value=""></option>
              </select>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Postal / ZIP Code
              </label>

              <input
                type="text"
                className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Country <span className="text-red-500">*</span>
              </label>

              <select className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm">
                <option value=""></option>
              </select>
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
  );
}
