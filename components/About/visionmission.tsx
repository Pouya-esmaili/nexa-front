import Image from "next/image";
import Row from "../global/Row";

export default function VisionMission() {
  return (
    <section className="w-full py-16">

      {/* ================= MOBILE ================= */}
      <div className="px-4 md:hidden">
        <div className="grid gap-12">

          {/* Vision */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/about/path.svg"
                alt="Vision icon"
                width={40}
                height={40}
                className="h-12 w-12"
              />

              <h2 className="text-2xl font-bold text-black">
                Vision
              </h2>
            </div>

            <p className="text-base leading-8 text-black">
              To build a world without entrepreneurial borders. A world where
              ideas travel freely, capital follows courage, and founders from
              every corner of the globe have the power to scale beyond limits.
              Nexa aims to become the bridge that turns ambition into global
              influence and vision into international reality.
            </p>
          </div>

          {/* Mission */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/about/mission.svg"
                alt="Mission icon"
                width={40}
                height={40}
                className="h-12 w-12"
              />

              <h2 className="text-2xl font-bold text-black">
                Mission
              </h2>
            </div>

            <p className="text-base leading-8 text-black">
              Nexa’s mission is to build a trusted global hub for capital
              transfer and business relocation empowering entrepreneurs and
              investors to expand across borders through structured advisory,
              strategic investment pathways, and direct access to international
              markets. We exist to turn cross-border ambition into sustainable
              growth and long-term impact.
            </p>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Row>
          <div className="mx-auto">
            <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">

              {/* Vision */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src="/images/about/path.svg"
                    alt="Vision icon"
                    width={40}
                    height={40}
                    className="h-20 w-20"
                  />

                  <h2 className="text-4xl font-bold text-black">
                    Vision
                  </h2>
                </div>

                <p className="text-lg text-black">
                  To build a world without entrepreneurial borders. A world where
                  ideas travel freely, capital follows courage, and founders from
                  every corner of the globe have the power to scale beyond limits.
                  Nexa aims to become the bridge that turns ambition into global
                  influence and vision into international reality.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src="/images/about/mission.svg"
                    alt="Mission icon"
                    width={40}
                    height={40}
                    className="h-20 w-20"
                  />

                  <h2 className="text-4xl font-bold text-black">
                    Mission
                  </h2>
                </div>

                <p className="text-lg text-black">
                  Nexa’s mission is to build a trusted global hub for capital
                  transfer and business relocation empowering entrepreneurs and
                  investors to expand across borders through structured advisory,
                  strategic investment pathways, and direct access to international
                  markets. We exist to turn cross-border ambition into sustainable
                  growth and long-term impact.
                </p>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}