import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "@/components/ui/ProjectCard";

export default function AllProjects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <AnimatedSection direction="down">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">
              {t("projectsHeading")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t("allProjectsDesc")}
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary text-primary-foreground border border-primary" 
                  : "bg-transparent text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {t(cat as any)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.1}
              direction="up"
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                tags={[project.category]}
                liveUrl={`/projects/${project.id}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
