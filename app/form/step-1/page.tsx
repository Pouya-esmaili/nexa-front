'use client';

import { useRouter } from 'next/navigation';

export default function StepOnePage() {

  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    router.push('/form/step-2');
  };

  const handlePrev = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (

    <div className="w-full ">

      {/* card */}
     

        <form onSubmit={handleNext} className="flex flex-col h-full justify-between ">

          {/* قسمت بالا */}
          <div className=''>

            {/* row 1 */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10 ">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                />
              </div>


              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                />
              </div>

            </div>


            {/* row 2 */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="+91"
                  className="w-full max-w-[320px] h-11 rounded-xl px-4 bg-white outline-none shadow-sm"
                />
              </div>


              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
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



  );
}
