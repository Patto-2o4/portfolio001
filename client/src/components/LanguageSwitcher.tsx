import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "EN" | "VI" | "ZH";

interface LanguageSwitcherProps {
  onLanguageChange?: (language: Language) => void;
}

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "VI", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ZH", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const { language: currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language);
    window.location.reload();
  };

  const currentLang = LANGUAGES.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-colors text-muted-foreground hover:text-[#6366F1]"
        title="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-card border border-[#6366F1]/20 shadow-lg z-50 overflow-hidden"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                  currentLanguage === lang.code
                    ? "bg-[#6366F1]/20 text-[#6366F1]"
                    : "text-muted-foreground hover:bg-[#6366F1]/10 hover:text-[#6366F1]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div>
                  <p className="font-medium text-foreground">{lang.name}</p>
                  <p className="text-xs text-muted-foreground">{lang.code}</p>
                </div>
                {currentLanguage === lang.code && (
                  <span className="ml-auto text-[#6366F1]">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
