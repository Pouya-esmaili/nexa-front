export default function Choose() {
  const items = [
    "Partnered With Government-Certified Canadian Lawyers",
    "Full Service From Contract To Settlement In Canada",
    "Global Team Of Young Professionals And Experts",
    "Registered Legal Entity In Canada, Compliant & Active",
    "Connected To A Strong Nationwide Network",
    "Supported By Senior Business Consultants",
  ];

  return (
    <section className="bg-[#9A3BFF] py-14 px-4 md:px-14 mt-18">
      <div className="mx-auto bg-white rounded-2xl p-8 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">
          Why Choose Us?
        </h2>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start text-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E9E9E9] flex items-center justify-center shadow-lg font-bold text-[#8F27FF]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-black text-medium font-semibold">{item}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8 items-center text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E9E9E9] flex items-center justify-center shadow-md font-bold text-[#8F27FF]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-black text-center text-medium font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
