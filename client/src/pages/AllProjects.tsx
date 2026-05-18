import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function AllProjects() {
  // Cuộn lên đầu trang khi vào
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <AnimatedSection direction="down">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              All Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A complete archive of all featured 3D CGI, motion graphics, and digital product designs.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.1}
              direction="up"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="group relative h-full flex flex-col bg-[#111111] border border-[#222] rounded-3xl overflow-hidden hover:border-[#6366F1]/50 transition-all duration-500 cursor-pointer">
                  {/* Thumbnail / Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[#181818] to-[#0A0A0A] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Giả lập ảnh 3D hoặc hiển thị ảnh thật nếu có */}
                    <div className="text-7xl font-black text-white/5 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500 font-mono">
                      {project.image}
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-[#6366F1] group-hover:border-[#6366F1] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#6366F1] uppercase tracking-wider font-mono">
                        {project.number}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
