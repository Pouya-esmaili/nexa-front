import Row from "../global/Row";


export default function PreviousProjectsSection() {
  const projects = [
    {
      title: "Arshia Gallery",
      image: "/images/Entrepreneurship/galleryy.svg",
    },
    {
      title: "Afra Cafe",
      image: "/images/Entrepreneurship/afra.svg",
    },
    {
      title: "Green Frame",
      image: "/images/Entrepreneurship/green.svg",
    },
    {
      title: "Aurora Clinic",
      image: "/images/Entrepreneurship/clinic.svg",
    },
  ];

  return (
    <section className="w-full py-20">
        <Row className="w-full">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14">
          Our Previous Projects
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-18">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Label */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-[#0000004D] backdrop-blur-sm">
                <span className="text-white text-sm font-medium">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Row>
    </section>
  );
}