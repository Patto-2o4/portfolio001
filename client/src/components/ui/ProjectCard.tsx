import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  githubUrl, 
  liveUrl, 
  isFeatured = false
}: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      variants={cardVariants}
      className={`bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 ${isFeatured ? 'col-span-1 md:col-span-2' : ''}`}>
      <div className="relative aspect-video overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {isFeatured && <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Featured</div>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 h-20 overflow-hidden">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-semibold px-2 py-1 bg-muted text-muted-foreground rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
