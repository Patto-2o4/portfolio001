import AnimatedSection from "@/components/AnimatedSection";
import AnimatedItem from "@/components/AnimatedItem";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      title: "3D Character Design",
      category: "3D Modeling",
      image: "C",
      description: "Character design 3D for games",
    },
    {
      id: 2,
      title: "Product Visualization",
      category: "3D Rendering",
      image: "P",
      description: "Product visualization for e-commerce",
    },
    {
      id: 3,
      title: "Architectural Animation",
      category: "3D Animation",
      image: "A",
      description: "Architecture animation for real estate",
    },
    {
      id: 4,
      title: "Motion Graphics",
      category: "Animation",
      image: "M",
      description: "Motion graphics for video ads",
    },
    {
      id: 5,
      title: "UI/UX 3D Elements",
      category: "Design",
      image: "U",
      description: "Interactive 3D elements for web UI",
    },
    {
      id: 6,
      title: "VR Experience",
      category: "3D Development",
      image: "V",
      description: "Immersive VR experience",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">Featured Works</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            <button className="px-6 py-2 rounded-full border border-[#6366F1] text-[#6366F1] font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300">
              All
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-400 font-semibold hover:border-[#6366F1] hover:text-[#6366F1] transition-all duration-300">
              3D Modeling
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-400 font-semibold hover:border-accent hover:text-accent transition-all duration-300">
              Animation
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-400 font-semibold hover:border-accent hover:text-accent transition-all duration-300">
              Design
            </button>
          </div>
        </AnimatedSection>

        <div className="grid-3">
          {projects.map((project, index) => (
            <AnimatedItem key={project.id} index={index}>
              <div className="project-card group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/20 to-[#6366F1]/0"></div>
                  </div>

                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300 z-10">
                    {project.image}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366F1] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#6366F1] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    View Project
                    <span>-&gt;</span>
                  </a>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div className="flex justify-center mt-16">
            <button className="btn-primary">
              View All Projects
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
