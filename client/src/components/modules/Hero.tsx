import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SplineInteractive from "@/components/SplineInteractive";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Sparkles, MessageSquare, Briefcase } from "lucide-react";

/**
 * MODULE: Hero Section
 * ====================
 * Mục đích: Phần tiêu đề chính với animation mượt mà
 * 
 * Thay đổi Spline URL:
 * 1. Vào https://spline.design
 * 2. Tạo hoặc mở project 3D
 * 3. Nhấn "Share" → "Share as embed"
 * 4. Copy URL từ iframe src
 * 5. Dán vào splineUrl dưới đây
 */

// URL mô hình 3D từ Spline - Thay đổi URL này bằng mô hình của bạn
const SPLINE_URL = "https://prod.spline.design/wgI90cJyjVIqgKwS/scene";

export default function Hero() {
  const [splineTrigger, setSplineTrigger] = useState<string>("");

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const card = document.getElementById("contact-card");
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // Ignite quầng sáng tím 180px lập tức
      card.classList.add("contact-card-highlight");
      
      // Gỡ bỏ sau 600ms
      setTimeout(() => {
        card.classList.remove("contact-card-highlight");
      }, 600);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants cho text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container flex items-center justify-between h-20">
          <motion.div
            className="text-2xl font-black text-white tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            PATTO<span className="text-[#6366F1]">.</span>
          </motion.div>

          <motion.div
            className="hidden md:flex gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#about" className="text-gray-300 hover:text-[#6366F1] transition-colors">
              About
            </a>
            <a href="#clients" className="text-gray-300 hover:text-[#6366F1] transition-colors">
              Customers
            </a>
            <a href="#projects" className="text-gray-300 hover:text-[#6366F1] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#6366F1] transition-colors">
              Contact
            </a>
            <div className="w-px h-6 bg-[#6366F1]/20"></div>
            <LanguageSwitcher />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#contact" onClick={handleContactClick} className="btn-main hidden md:inline-flex group">
              <Sparkles className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 pt-32 pb-20">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            HI, I'M
            <br />
            <span className="gradient-text">PATTO</span>
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I'm a 3D Designer & Creative Technologist specializing in immersive digital experiences.
            Transforming ideas into stunning visual realities.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-lg"
            variants={itemVariants}
          >
            With 5+ years of experience in 3D modeling, animation, and product design, I've worked
            with leading brands to create memorable digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-6 flex-wrap"
            variants={itemVariants}
          >
            <a href="#contact" onClick={handleContactClick} className="btn-main group">
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              CONTACT ME
            </a>
            <a href="#projects" className="btn-sec group">
              <Briefcase className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              VIEW MY WORK
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 mt-12"
            variants={itemVariants}
          >
            <a href="https://www.facebook.com/pham.tuan.anh.29784" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Facebook
            </a>
            <a href="https://www.instagram.com/patto_2o4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Instagram
            </a>
            <a href="https://www.behance.net/lnguyn106" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Behance
            </a>
            <a href="https://www.tiktok.com/@tuananhcutehehe?lang=vi-VN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Tiktok
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Model */}
        <motion.div
          className="flex-1 relative h-96 md:h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/10 rounded-full blur-3xl"></div>

          {/* Spline 3D Model - Click/Hover to interact */}
          <SplineInteractive 
            url={SPLINE_URL} 
            title="Interactive 3D Model"
            onTrigger={(trigger) => setSplineTrigger(trigger)}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-500 text-sm">Scroll to explore</p>
          <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
