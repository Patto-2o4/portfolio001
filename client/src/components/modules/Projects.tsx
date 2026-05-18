import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * MODULE: Projects Section
 * ========================
 * Mục đích: Hiển thị danh sách các dự án nổi bật, liên kết đến trang chi tiết chuyên biệt.
 */

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">{t("projectsHeading")}</h2>
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
                {/* Content block */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="text-sm font-bold text-[#6366F1] uppercase tracking-widest mb-4 font-mono">
                    Project {project.number}
                  </p>

                  <h3 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 font-medium">
                    <span className="font-semibold text-foreground">Client:</span> {project.client}
                  </p>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mb-8">
                    <span className="px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <CtaButton
                    href={`/projects`}
                    variant="sec"
                    className="inline-flex items-center gap-2"
                  >
                    <span>View All Projects</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </CtaButton>
                </div>

                {/* 3D Mockup Visual block */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Link href={`/projects`}>
                    <div
                      className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-[#6366F1]/20 group cursor-pointer bg-gradient-to-br from-[#121212] to-[#050505] hover:border-[#6366F1]/50 transition-all duration-500 shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/10 to-[#6366F1]/0 animate-pulse"></div>
                      </div>

                      {/* Glassmorphic static click indicator for Mobile & Desktop */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#6366F1]/30 bg-background/60 backdrop-blur-md flex items-center justify-center text-[#6366F1] group-hover:text-foreground group-hover:border-[#6366F1]/80 transition-all duration-300 shadow-lg z-10">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>

                      {/* Display Real Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Nút xem tất cả dự án (Lava Lamp) */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="mt-20 flex justify-center">
            <Link href="/projects" className="btn-main">
              <span>{t("viewAllProjects")}</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
