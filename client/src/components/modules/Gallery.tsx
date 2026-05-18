import AnimatedSection from "@/components/AnimatedSection";
import AnimatedItem from "@/components/AnimatedItem";
import { useState } from "react";
import { Link } from "wouter";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "3D Character Design",
      category: "3D Modeling",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop",
      description: "Character design 3D for games",
    },
    {
      id: 2,
      title: "Product Visualization",
      category: "3D Rendering",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
      description: "Product visualization for e-commerce",
    },
    {
      id: 3,
      title: "Architectural Animation",
      category: "3D Animation",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
      description: "Architecture animation for real estate",
    },
    {
      id: 4,
      title: "Motion Graphics",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
      description: "Motion graphics for video ads",
    },
    {
      id: 5,
      title: "UI/UX 3D Elements",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      description: "Interactive 3D elements for web UI",
    },
    {
      id: 6,
      title: "VR Experience",
      category: "3D Development",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000&auto=format&fit=crop",
      description: "Immersive VR experience",
    },
  ];

  const categories = ["All", "3D Modeling", "3D Rendering", "Animation", "Design"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || filter.includes(p.category.split(' ')[1] || p.category));

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">Featured Works</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 font-semibold ${
                  filter === cat 
                    ? "border-[#6366F1] bg-[#6366F1] text-white" 
                    : "border-border text-muted-foreground hover:border-[#6366F1] hover:text-[#6366F1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid-3">
          {filteredProjects.map((project, index) => (
            <AnimatedItem key={project.id} index={index}>
              <div className="project-card group cursor-pointer bg-card border border-border hover:border-[#6366F1]/50 rounded-2xl overflow-hidden transition-all shadow-lg">
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-64 bg-card flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/20 to-[#6366F1]/0"></div>
                    </div>

                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#6366F1] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <Link href={`/projects/${project.id}`}>
                    <a className="inline-flex items-center gap-2 text-[#6366F1] font-semibold hover:gap-3 transition-all duration-300">
                      View Project
                      <span>-&gt;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div className="flex justify-center mt-16">
            <Link href="/projects">
              <a className="btn-primary">
                View All Projects
              </a>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
