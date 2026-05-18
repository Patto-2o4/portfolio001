import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { projects } from "@/data/projects";
import * as Icons from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  const project = projects.find((p) => p.id === parseInt(id || "1", 10));

  // Cuộn lên đầu trang khi chuyển dự án hoặc load trang lần đầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollY } = useScroll();

  // 1. Parallax cho số thứ tự dự án cực lớn nằm dưới nền (di chuyển chậm xuống khi cuộn)
  const numberY = useTransform(scrollY, [0, 800], [0, 200]);

  // 2. Parallax & Fade-out cho tiêu đề chính (di chuyển chậm lên và mờ dần)
  const heroTextY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroTextOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // 3. Parallax cho các quả cầu ánh sáng nền (tạo chiều sâu 3D nhiều lớp)
  const glow1Y = useTransform(scrollY, [0, 1500], [0, -180]);
  const glow2Y = useTransform(scrollY, [0, 1500], [0, 120]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <Icons.AlertTriangle className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-black mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">The project you are looking for does not exist or has been removed.</p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  // Xác định dự án tiếp theo để chuyển hướng nhanh
  const nextProjectId = project.id === projects.length ? 1 : project.id + 1;
  const nextProject = projects.find((p) => p.id === nextProjectId);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#6366F1]/30 relative overflow-hidden">
      {/* Background ambient lighting effects with parallax motion */}
      <motion.div 
        style={{ y: glow1Y }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[180px] -z-10 pointer-events-none" 
      />
      <motion.div 
        style={{ y: glow2Y }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#9917FF]/5 rounded-full blur-[200px] -z-10 pointer-events-none" 
      />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#6366F1]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Main Content Area */}
      <div className="container py-12 md:py-20 relative max-w-6xl">
        {/* Navigation / Back Header */}
        <div className="mb-12 flex justify-between items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#6366F1]/30"
          >
            <Icons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>

          <span className="text-sm text-gray-500 font-mono">
            {project.id} / {projects.length}
          </span>
        </div>

        {/* Hero Section */}
        <header className="relative mb-16 select-none">
          {/* Huge Decorative Project Number with Parallax scrolling */}
          <motion.div 
            style={{ y: numberY }}
            className="absolute -right-6 -top-12 text-[10rem] md:text-[18rem] font-black text-white/[0.015] leading-none pointer-events-none font-mono"
          >
            {project.number}
          </motion.div>

          <motion.div 
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-ping" />
              {project.category}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-none">
              {project.title}
            </h1>
          </motion.div>

          {/* Glassmorphic Metadata Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-3xl bg-[#121212]/40 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/5 to-[#9917FF]/5 pointer-events-none" />
            
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Client</p>
              <p className="text-base font-semibold text-white/90">{project.client}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Release Year</p>
              <p className="text-base font-semibold text-white/90">{project.year}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Production Role</p>
              <p className="text-base font-semibold text-white/90">{project.category}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">CGI Pipeline Tools</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-2xs px-2.5 py-0.5 rounded-md bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20 font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Detailed Description */}
        <section className="mb-16">
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl">
            {project.fullDescription}
          </div>
        </section>

        {/* Challenge and Solution Side-by-Side with Scroll Entrance Animations */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Challenge Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-8 rounded-3xl bg-[#120B10]/60 border border-red-500/10 hover:border-red-500/20 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors pointer-events-none" />
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                <Icons.AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Challenge</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-base font-normal">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="p-8 rounded-3xl bg-[#090C1A]/60 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-[#6366F1]/10 text-indigo-400">
                <Icons.CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Solution</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-base font-normal">
              {project.solution}
            </p>
          </motion.div>
        </section>

        {/* Business Results Banner */}
        <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#100C24] via-[#080612] to-black border border-[#6366F1]/20 shadow-3xl text-center relative overflow-hidden mb-20 group">
          <div className="absolute inset-0 bg-[#6366F1]/5 blur-3xl -z-10 group-hover:bg-[#6366F1]/10 transition-colors duration-500" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#9917FF]/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="inline-block text-xs font-bold text-[#6366F1] uppercase tracking-widest mb-4">
            Key Outcomes & Impact
          </span>
          <p className="text-2xl md:text-3xl text-white font-extrabold leading-relaxed max-w-3xl mx-auto italic font-serif">
            "{project.results}"
          </p>
        </section>

        {/* 3D Production Pipeline Pipeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              3D Production Pipeline
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Our systematic approach to engineering, animating, and presenting state-of-the-art 3D assets.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {project.process.map((step, idx) => {
              // Lấy icon tương ứng từ Lucide động
              const DynamicIcon = (Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Cpu;

              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                  }}
                  className="p-6 rounded-2xl bg-[#0D0D0D]/60 border border-white/5 hover:border-[#6366F1]/30 transition-all hover:-translate-y-1 duration-300 relative group"
                >
                  <span className="text-xs text-gray-500 font-mono font-bold mb-3 tracking-widest uppercase block">
                    {step.stage}
                  </span>
                  
                  <div className="p-3 rounded-xl bg-[#6366F1]/5 text-[#6366F1] w-fit mb-5 group-hover:bg-[#6366F1]/15 transition-colors border border-[#6366F1]/10">
                    <DynamicIcon className="w-5 h-5" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Technical Specifications */}
        <section className="p-8 rounded-3xl bg-[#080808]/80 border border-white/5 relative overflow-hidden mb-20">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <Icons.Sliders className="w-5 h-5 text-[#9917FF]" />
            <h4 className="text-xl font-bold text-white tracking-wide">
              Technical Specifications (CGI Asset Engine)
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.technicalSpecs).map(([key, val]) => (
              <div key={key} className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-mono font-semibold">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <p className="text-base font-semibold text-gray-300">
                  {val}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Project Footer Navigation */}
        <footer className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <Link
            href="/#contact"
            className="btn-sec w-full sm:w-auto"
          >
            <Icons.Mail className="w-4 h-4 mr-2" />
            Discuss a Similar Project
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              <span>Next Case Study: {nextProject.title}</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
