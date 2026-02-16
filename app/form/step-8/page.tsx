'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function StepEightPage() {

  const router = useRouter();
  const [fileName, setFileName] = useState('');
  const [basedInCanada, setBasedInCanada] = useState('yes');

  const handleNext = (e) => {
    e.preventDefault();
    router.push('/form/step-9'); // اگر مرحله بعد داری
  };

  const handlePrev = () => {
    router.push('/form/step-7');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full">

      <form onSubmit={handleNext} className="flex flex-col h-full justify-between gap-10">

        {/* بالا */}
        <div className="flex flex-col gap-8">

          {/* Upload Section */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">
              Upload your investor deck for review <span className="text-red-500">*</span>
            </label>

            <p className="text-xs text-gray-500">
              Please send us your investor/pitch deck (PDF ONLY - 20MB max).
              We will review ALL applications and get back to you.
            </p>

            <label className="shadow-lg rounded-xl bg-white  p-8     flex flex-col items-center justify-center cursor-pointer hover:border-[#8F27FF] transition">

              <Image
                src="/images/form/upload.svg"
                alt="upload"
                width={18}
                height={18}
              />

              <span className="text-xs text-gray-400 mt-2">
                {fileName ? fileName : 'Click to upload'}
              </span>

              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />

            </label>

          </div>


          {/* Canada Question */}
          <div className="flex flex-col gap-3">

            <label className="text-sm font-medium">
              My company is based in Canada <span className="text-red-500">*</span>
            </label>

            {/* YES */}
            <label
              className={`
                flex items-center gap-4
                shadow-lg rounded-2xl px-5 h-12 bg-white cursor-pointer transition
                ${basedInCanada === 'yes' ? 'border-[#8F27FF]' : 'border-gray-300'}
              `}
            >
              <input
                type="radio"
                name="canada"
                value="yes"
                checked={basedInCanada === 'yes'}
                onChange={() => setBasedInCanada('yes')}
                className="w-4 h-4"
                style={{ accentColor: '#8F27FF' }}
              />

              <span className="text-sm">
                YES, My company is based in Canada.
              </span>
            </label>

            {/* NO */}
            <label
              className={`
                flex items-center gap-4
                shadow-lg rounded-2xl px-5 h-12 bg-white cursor-pointer transition
                ${basedInCanada === 'no' ? 'border-[#8F27FF]' : 'border-gray-300'}
              `}
            >
              <input
                type="radio"
                name="canada"
                value="no"
                checked={basedInCanada === 'no'}
                onChange={() => setBasedInCanada('no')}
                className="w-4 h-4"
                style={{ accentColor: '#8F27FF' }}
              />

              <span className="text-sm">
                NO, My company is based in Canada.
              </span>
            </label>

          </div>

        </div>


        {/* دکمه ها پایین */}
        <div className="flex justify-between ">

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