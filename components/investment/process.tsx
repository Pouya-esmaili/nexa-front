import Image from "next/image";
import Row from "../global/Row";

export default function InvestmentProcess() {
  return (
    <section className="w-full py-10 md:py-16">
      
      {/* Title */}
      <h2 className="mb-8 md:mb-12 text-center text-3xl md:text-5xl font-bold text-black">
        Investment Process
      </h2>

      {/* Mobile بدون Row */}
      <div className="block md:hidden">
        <Image
          src="/images/investment/processmobile.svg"
          alt="Investment Process Mobile"
          width={800}
          height={1200}
          className="w-full h-auto p-8"
          priority
        />
      </div>

      {/* Desktop داخل Row */}
      <div className="hidden md:block">
        <Row>
          <Image
            src="/images/investment/process.svg"
            alt="Investment Process"
            width={1400}
            height={700}
            className="w-full h-auto"
            priority
          />
        </Row>
      </div>
    </section>
  );
}