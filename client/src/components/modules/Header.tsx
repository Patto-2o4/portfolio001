import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();
  const isHome = location === "/";

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
          className="text-2xl font-black text-white tracking-wider"
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
          <a href={isHome ? "#about" : "/#about"} className="text-gray-300 hover:text-[#6366F1] transition-colors">
            About
          </a>
          <a href={isHome ? "#clients" : "/#clients"} className="text-gray-300 hover:text-[#6366F1] transition-colors">
            Customers
          </a>
          <a href={isHome ? "#projects" : "/#projects"} className="text-gray-300 hover:text-[#6366F1] transition-colors">
            Projects
          </a>
          <a href={isHome ? "#contact" : "/#contact"} className="text-gray-300 hover:text-[#6366F1] transition-colors">
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
          <a href={isHome ? "#contact" : "/#contact"} onClick={handleContactClick} className="btn-main hidden md:inline-flex group">
            <Sparkles className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
