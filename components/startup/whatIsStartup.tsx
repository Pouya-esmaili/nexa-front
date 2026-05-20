import Image from "next/image";
import Row from "../global/Row";

const bulletPoints = [
  "Team-Driven Vision And Collaborative Execution",
  "Innovative Solutions For Real Market Needs",
  "Sustainable Revenue And Wealth Creation Models",
  "Scalable Structure With Global Growth Potential",
];

const WhatIsStartup = () => {
  return (
    <div className="w-full">

      {/* Mobile */}
      <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "40px 20px" }}>
        <Image
          width={800}
          height={500}
          src="/images/Entrepreneurship/programs.svg"
          alt="Startup"
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "16px" }}
        />
        <h2 style={{ fontSize: "20px", fontWeight: 700 }}>What is the Startup?</h2>
        <div style={{ width: "64px", height: "3px", backgroundColor: "#8F27FF" }} />
        <h3 style={{ fontSize: "15px", fontWeight: 600 }}>Built To Innovate. Designed To Scale.</h3>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7" }}>
          A Startup Is A Team-Driven Venture Focused On Solving Real Market Needs
          Through Innovation and Technology, While Building Sustainable Revenue
          Models Designed For Scalable, Long-Term Growth.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {bulletPoints.map((text, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ marginTop: "5px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#F5C518", flexShrink: 0, display: "inline-block" }} />
              <p style={{ fontSize: "13px", color: "#333" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <Row>
          <div style={{ display: "flex", alignItems: "center", gap: "72px", margin: "80px 0" }}>

            {/* Image */}
            <div style={{ flex: 1 }}>
              <Image
                width={1500}
                height={1500}
                src="/images/Entrepreneurship/programs.svg"
                alt="Startup"
                style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "16px" }}
              />
            </div>

            {/* Text */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 style={{ fontSize: "30px", fontWeight: 700 }}>What is the Startup?</h2>
              <div style={{ width: "272px", height: "3px", backgroundColor: "#8F27FF" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 600 }}>Built To Innovate. Designed To Scale.</h3>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.7" }}>
                A Startup Is A Team-Driven Venture Focused On Solving Real Market
                Needs Through Innovation and Technology, While Building Sustainable
                Revenue Models Designed For Scalable, Long-Term Growth.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
                {bulletPoints.map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ marginTop: "5px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#F5C518", flexShrink: 0, display: "inline-block" }} />
                    <p style={{ fontSize: "15px", color: "#333" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Row>
      </div>

    </div>
  );
};

export default WhatIsStartup;
