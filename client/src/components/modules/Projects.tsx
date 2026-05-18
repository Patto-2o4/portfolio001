import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudiesModal from "@/components/CaseStudiesModal";

/**
 * MODULE: Projects Section
 * ========================
 * Muc dich: Hien thi cac du an noi bat voi modal chi tiet
 * 
 * Cach them du an moi:
 * 1. Them object vao projects array
 * 2. Dien day du cac truong: id, number, title, client, description, etc.
 * 3. Them chi tiet cho fullDescription, challenge, solution, results
 */

interface Project {
  id: number;
  number: string;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  tools: string[];
  year: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      number: "01",
      title: "Luxury Watch Visualization",
      client: "Premium Timepieces Inc.",
      description: "Create detailed 3D visualization for luxury watch collection. Increased online sales by 45%.",
      image: "W",
      category: "Product Design",
      fullDescription: "Detailed 3D visualization created for a luxury watch collection, allowing clients to examine every delicate design detail in high fidelity before purchase.",
      challenge: "Achieving extreme realism and high-fidelity rendering for microscopic watch components while maintaining high performance and fast loading times on web browsers.",
      solution: "Leveraged Blender and Spline to construct highly detailed 3D models. Optimized textures, custom materials, and light maps to achieve maximum web-rendering efficiency.",
      results: "Boosted online timepiece sales by 45%, increased customer on-page dwell time by 60%, and elevated overall conversion rates by 35%.",
      tools: ["Blender", "Spline", "Substance Painter", "WebGL"],
      year: "2024",
    },
    {
      id: 2,
      number: "02",
      title: "Architectural Animation",
      client: "Urban Development Co.",
      description: "3D architecture animation for large real estate project. Help customers visualize space.",
      image: "B",
      category: "Architecture",
      fullDescription: "Fully immersive 3D architectural animation developed for a major real estate development, helping buyers visualize the entire neighborhood and amenities.",
      challenge: "Creating ultra-smooth, ultra-realistic walkthrough animations for massive structural plans without visual lag, ensuring every apartment layout is clearly visible.",
      solution: "Utilized Cinema 4D and Unreal Engine to compile stunning 4K architectural flythrough animations. Optimized rendering passes and image quality for optimal visualization.",
      results: "Generated an 80% increase in inquiries, raised direct pre-bookings by 50%, and shortened the client decision-making lifecycle by 30%.",
      tools: ["Cinema 4D", "Unreal Engine", "After Effects", "V-Ray"],
      year: "2023",
    },
    {
      id: 3,
      number: "03",
      title: "Brand Identity Motion",
      client: "Tech Startup XYZ",
      description: "Create motion graphics for brand identity and video ads. Enhance brand recognition.",
      image: "M",
      category: "Motion Graphics",
      fullDescription: "High-impact motion graphics designed for brand identity rollouts and social media advertisements, tailored to grab attention in the digital landscape.",
      challenge: "Capturing viewer interest in the crucial first 3 seconds while communicating a technology startup's core identity in a highly polished manner.",
      solution: "Engineered smooth motion graphics using After Effects and Premiere Pro. Optimized compression ratios, sound design integration, and color profiles.",
      results: "Achieved a 200% increase in video advertising views, raised engagement rates by 150%, and elevated brand recognition by 90%.",
      tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Figma"],
      year: "2024",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">Featured Projects</h2>
        </AnimatedSection>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="text-sm font-bold text-[#6366F1] uppercase tracking-widest mb-4">
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
                    <span className="px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1] text-[#6366F1] text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary"
                  >
                    View Case Study -&gt;
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-[#6366F1]/20 group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/10 to-[#6366F1]/0 animate-pulse"></div>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Case Studies Modal */}
      {selectedProject && (
        <CaseStudiesModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
