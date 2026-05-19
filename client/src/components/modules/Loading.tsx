import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loading.css";

export default function Loading() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <motion.div
      className={`loading-screen ${theme}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="loading-logo"
      >
        PATTO<span className="loading-logo-dot">.</span>
      </motion.div>
    </motion.div>
  );
}
