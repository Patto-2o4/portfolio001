import { motion } from "framer-motion";
import { Sparkles, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const isHome = location === "/";
  const { theme, setTheme } = useTheme(); // Sử dụng hook mới
  const [isDark, setIsDark] = useState(theme === 'dark');

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.location.reload(); // Bắt buộc tải lại trang để hiển thị màn hình Loading chuẩn màu
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (!isHome) return; 
    e.preventDefault();
    const card = document.getElementById("contact-card");
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("contact-card-highlight");
      setTimeout(() => {
        card.classList.remove("contact-card-highlight");
      }, 600);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar w-full z-50">
      <div className="container flex items-center justify-between h-20 px-6 mx-auto">
        <motion.div
          className="text-2xl font-black text-foreground tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            PATTO<span className="text-[#6366F1]">.</span>
          </Link>
        </motion.div>

        <motion.div
          className="hidden md:flex gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href={isHome ? "#about" : "/#about"} className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href={isHome ? "#clients" : "/#clients"} className="text-muted-foreground hover:text-primary transition-colors">
            Customers
          </a>
          <a href={isHome ? "#projects" : "/#projects"} className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href={isHome ? "#contact" : "/#contact"} className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Theme Toggle Button - Tinh chỉnh lại */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
            title="Toggle theme"
          >
            <Sun className={`w-5 h-5 transition-transform duration-500 ${isDark ? 'transform rotate-90 scale-0' : 'transform rotate-0 scale-100'}`} />
            <Moon className={`absolute w-5 h-5 transition-transform duration-500 ${isDark ? 'transform rotate-0 scale-100' : 'transform -rotate-90 scale-0'}`} />
            <span className="sr-only">Toggle theme</span>
          </button>

          <LanguageSwitcher />

          <a href={isHome ? "#contact" : "/#contact"} onClick={handleContactClick} className="btn-main hidden md:inline-flex group ml-2">
            <Sparkles className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
