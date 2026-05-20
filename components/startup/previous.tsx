import Row from "../global/Row";

const projects = [
  { title: "Arshia Gallery", image: "/images/Entrepreneurship/galleryy.svg" },
  { title: "Afra Cafe", image: "/images/Entrepreneurship/afra.svg" },
  { title: "Green Frame", image: "/images/Entrepreneurship/green.svg" },
  { title: "Aurora Clinic", image: "/images/Entrepreneurship/clinic.svg" },
];

export default function StartupPreviousProjects() {
  return (
    <section className="w-full py-12 md:py-20">

      {/* Mobile — 2×2 grid */}
      <div className="md:hidden" style={{ padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: 600, marginBottom: "32px" }}>
          Our Previous Projects
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              style={{ position: "relative", borderRadius: "16px", overflow: "hidden", cursor: "pointer" }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "144px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",
                  padding: "4px 12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span style={{ color: "white", fontSize: "11px", fontWeight: 500 }}>{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 4-column grid */}
      <div className="hidden md:block">
        <Row className="w-full">
          <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 600, marginBottom: "56px" }}>
            Our Previous Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "32px" }}>
            {projects.map((project, i) => (
              <div
                key={i}
                style={{ position: "relative", borderRadius: "16px", overflow: "hidden", cursor: "pointer" }}
                className="group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                  className="group-hover:scale-105"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span style={{ color: "white", fontSize: "14px", fontWeight: 500 }}>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </div>

    </section>
  );
}
