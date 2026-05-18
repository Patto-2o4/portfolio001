import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Palette, Users, Sparkles, MessageSquare } from "lucide-react";

/**
 * COMPONENT: DiscordPopup
 * =======================
 * Mục đích: Hiển thị popup giới thiệu Discord server của Patto với quầng sáng neon và phong cách 3D kính mờ
 */

const DISCORD_URL = "https://discord.gg/XCfkTu7ma6"; // Discord server invite của Patto

export default function DiscordPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hiển thị popup 1.5 giây sau khi trang tải xong
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden border border-[#A78BFA]/20 shadow-2xl"
          >
            {/* Banner */}
            <div className="relative h-44 bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A78BFA] overflow-hidden flex flex-col items-center justify-center text-center px-6">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 border border-white/10"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Banner content */}
              <MessageSquare className="w-12 h-12 text-white mb-3 animate-bounce" />
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                JOIN MY CREATIVE SPACE
              </h2>
              <p className="text-white/80 text-sm mt-1">Connect directly and collaborate on 3D projects</p>
            </div>

            {/* Content */}
            <div className="bg-[#111111] p-8">
              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed text-center">
                Step into my Discord creative server! Share your works, get direct design reviews and feedback from me, and hang out with other talented designers and developers.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 rounded-xl bg-[#1A1A1A] border border-[#A78BFA]/10 hover:border-[#A78BFA]/30 transition-all duration-300">
                  <Palette className="w-6 h-6 text-[#A78BFA] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white">3D Art</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#1A1A1A] border border-[#A78BFA]/10 hover:border-[#A78BFA]/30 transition-all duration-300">
                  <Users className="w-6 h-6 text-[#A78BFA] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white">Hangout</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#1A1A1A] border border-[#A78BFA]/10 hover:border-[#A78BFA]/30 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-[#A78BFA] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white">Feedback</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main flex-1 text-center font-bold text-sm tracking-wide"
                >
                  Join Discord
                </a>
                <button
                  onClick={handleClose}
                  className="btn-sec flex-1 text-center font-bold text-sm tracking-wide"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-[10px] text-gray-600 text-center mt-4 uppercase tracking-widest">
                This invitation popup appears once per session
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
