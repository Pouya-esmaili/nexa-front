import Image from "next/image";

export default function Results() {
    return (
        <section className="relative w-full h-[330px] md:h-[550px]">

            <Image
                src="/images/landing/plan.svg"
                alt="map"
                fill
                className="object-cover hidden sm:block"
            />
            <Image
                src="/images/landing/plan1.svg"
                alt="map mobile"
                fill
                className="object-cover block sm:hidden w-full"
            />

            <div className="absolute inset-0 flex flex-col justify-start items-center text-center z-10 px-4 sm:px-0 pt-4 sm:pt-0">

                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-34  sm:mt-6">
                    Our Results Tell the Story
                </h2>

                <div className="flex flex-row flex-wrap sm:flex-row justify-between gap-4 sm:gap-16 md:gap-28 lg:gap-40 xl:gap-60 w-full sm:w-auto mt-46 sm:mt-20">

                    <div className="flex flex-col items-center flex-1">
                        <p className="text-2xl sm:text-4xl font-bold text-[#8F27FF]">89%</p>
                        <p className="text-gray-700 text-xs sm:text-sm">Successful Case</p>
                        <div className="w-10 h-[3px] bg-[#FFCE00] mt-1"></div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <p className="text-2xl sm:text-4xl font-bold text-[#8F27FF]">400+</p>
                        <p className="text-gray-700 text-xs sm:text-sm">Client</p>
                        <div className="w-10 h-[3px] bg-[#FFCE00] mt-1"></div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <p className="text-2xl sm:text-4xl font-bold text-[#8F27FF]">+7 Years</p>
                        <p className="text-gray-700 text-xs sm:text-sm">Experience</p>
                        <div className="w-10 h-[3px] bg-[#FFCE00] mt-1"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
