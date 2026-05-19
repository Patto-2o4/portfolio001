import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { projects as allProjects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects({ projects }: { projects?: Project[] }) {
  const { t } = useLanguage();
  const projectsToDisplay = projects || allProjects.filter(p => p.isFeatured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">{t("projectsHeading")}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToDisplay.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.1}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                tags={[project.category]}
                liveUrl={`/projects/${project.id}`}
                isFeatured={project.isFeatured}
              />
            </AnimatedSection>
          ))}
        </div>

        {!projects && <AnimatedSection direction="up" delay={0.4}>
          <div className="mt-20 flex justify-center">
            <Link href="/projects">
              <a className="btn-main">
                <span>{t("viewAllProjects")}</span>
              </a>
            </Link>
          </div>
        </AnimatedSection>}
      </div>
    </section>
  );
}
