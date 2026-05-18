import { motion } from "framer-motion";
import { Sparkles, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const isHome = location === "/";
  const [isDark, setIsDark] = useState(true);

  // Khởi tạo theme với localStorage, mặc định Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // Mặc định là Dark Mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (!isHome) return; // Nếu không ở Home thì để mặc định link tới /#contact
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
          {/* Theme Toggle Switch */}
          <div 
            onClick={toggleTheme}
            className={`w-[60px] h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border border-border shadow-inner ${isDark ? 'bg-card' : 'bg-gray-200'}`}
            title="Toggle theme"
          >
            <motion.div 
              layout
              className={`w-6 h-6 rounded-full shadow flex items-center justify-center ${isDark ? 'bg-primary' : 'bg-white'}`}
              animate={{ x: isDark ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isDark ? <Moon className="w-3.5 h-3.5 text-white" /> : <Sun className="w-3.5 h-3.5 text-orange-500" />}
            </motion.div>
          </div>

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
