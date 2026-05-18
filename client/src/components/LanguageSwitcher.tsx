import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

/**
 * COMPONENT: LanguageSwitcher
 * ===========================
 * Muc dich: Chuyen doi ngon ngu (EN, VI, ZH)
 * 
 * Cach su dung:
 * <LanguageSwitcher />
 * 
 * Ngon ngu ho tro:
 * - EN: English
 * - VI: Tieng Viet
 * - ZH: Tieng Trung (Simplified)
 * 
 * Luu y: Hien tai chi la UI, chua tich hop i18n
 * De tich hop day du, can su dung i18next hoac react-i18next
 */

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("preferredLanguage");
    return (stored as Language) || "EN";
  });

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language);

    // Luu vao localStorage
    localStorage.setItem("preferredLanguage", language);

    // Thiet lap cookie googtrans cho Google Translate
    const domain = window.location.hostname;
    
    // Xoa cookie cu truoc khi set cookie moi
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;

    if (language === "VI") {
      document.cookie = "googtrans=/en/vi; path=/;";
      document.cookie = `googtrans=/en/vi; path=/; domain=${domain};`;
      document.cookie = `googtrans=/en/vi; path=/; domain=.${domain};`;
    } else if (language === "ZH") {
      document.cookie = "googtrans=/en/zh-CN; path=/;";
      document.cookie = `googtrans=/en/zh-CN; path=/; domain=${domain};`;
      document.cookie = `googtrans=/en/zh-CN; path=/; domain=.${domain};`;
    }

    // Reload trang de ap dung ngon ngu moi
    window.location.reload();
  };

  const currentLang = LANGUAGES.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-colors text-gray-300 hover:text-[#6366F1]"
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
            className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-[#1A1A1A] border border-[#6366F1]/20 shadow-lg z-50 overflow-hidden"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                  currentLanguage === lang.code
                    ? "bg-[#6366F1]/20 text-[#6366F1]"
                    : "text-gray-300 hover:bg-[#6366F1]/10 hover:text-[#6366F1]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div>
                  <p className="font-medium">{lang.name}</p>
                  <p className="text-xs text-gray-500">{lang.code}</p>
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
