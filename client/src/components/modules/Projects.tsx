export default function Projects() {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Luxury Watch Visualization",
      client: "Premium Timepieces Inc.",
      description: "Create detailed 3D visualization for luxury watch collection. Increased online sales by 45%.",
      image: "W",
      category: "Product Design",
      liveLink: "#",
    },
    {
      id: 2,
      number: "02",
      title: "Architectural Animation",
      client: "Urban Development Co.",
      description: "3D architecture animation for large real estate project. Help customers visualize space.",
      image: "B",
      category: "Architecture",
      liveLink: "#",
    },
    {
      id: 3,
      number: "03",
      title: "Brand Identity Motion",
      client: "Tech Startup XYZ",
      description: "Create motion graphics for brand identity and video ads. Enhance brand recognition.",
      image: "M",
      category: "Motion Graphics",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-sm font-bold text-[#FF006E] uppercase tracking-widest mb-4">
                  Project {project.number}
                </p>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-400 mb-6">
                  <span className="font-semibold text-white">Client:</span> {project.client}
                </p>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mb-8">
                  <span className="px-4 py-2 rounded-full bg-[#FF006E]/10 border border-[#FF006E] text-[#FF006E] text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <a href={project.liveLink}>
                  <button className="btn-primary">
                    View Live Project -&gt;
                  </button>
                </a>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-[#FF006E]/20 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF006E]/0 via-[#FF006E]/10 to-[#FF006E]/0 animate-pulse"></div>
                  </div>

                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <a href="#gallery">
            <button className="btn-secondary">
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
