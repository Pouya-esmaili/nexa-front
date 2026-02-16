'use client';

import { useRouter } from 'next/navigation';

export default function StepFivePage() {

  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();

    console.log('Step 5 submitted');

    // رفتن به step-6
    router.push('/form/step-6');
  };

  const handlePrev = (e) => {
    e.preventDefault();
    router.push('/form/step-4');
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
              What problem are you solving?
              <span className="text-red-500">*</span>
            </label>

            <p className="text-xs text-gray-500">
              What is the specific problem that you are aiming to solve? Maximum 600 characters.
            </p>

            <textarea
              maxLength={600}
              className="w-full max-w-[680px] h-[160px] rounded-xl px-4 py-3 bg-white outline-none shadow-sm resize-none"
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
