import Row from "../global/Row";

export default function EntrepreneurshipDesignedSection() {
  return (
    <section
      className="relative w-full h-130 flex items-center justify-center bg-cover bg-center px-6 py-20"
      style={{
        backgroundImage:
          "url('/images/Entrepreneurship/Designed.svg')",
      }}
    >
        <Row className="w-full">
      {/* Overlay Dark Layer (optional for better readability) */}
      <div className="absolute"></div>

      <div className="relative z-10 w-full text-center">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-14">
          Who Entrepreneurship Program is Designed For?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl px-6 py-8 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040]">
            <p className="font-medium">
              Experienced Business Owners Looking To Expand Internationally
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl px-6 py-8 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040]">
            <p className="font-medium">
              Investors Seeking High-Potential Opportunities
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl px-6 py-8 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040]">
            <p className="font-medium">
              Professionals Aiming To Relocate Their Business Or Career
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl px-6 py-8 text-center bg-white/50 backdrop-blur-[30px] shadow-[0px_10px_15px_0px_#00000040]">
            <p className="font-medium">
              Business Owners Expanding From Their Home Country
            </p>
          </div>
        </div>
      </div>
      </Row>
    </section>
  );
}