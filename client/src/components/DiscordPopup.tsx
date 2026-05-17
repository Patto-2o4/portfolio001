import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * COMPONENT: DiscordPopup
 * =======================
 * Muc dich: Hien thi popup gioi thieu Discord server khi mo web hoac reload
 * 
 * Cach su dung:
 * <DiscordPopup />
 * 
 * Thay doi Discord URL:
 * 1. Mo file nay
 * 2. Tim dong: const DISCORD_URL = "https://discord.gg/..."
 * 3. Thay bang URL Discord cua ban
 */

const DISCORD_URL = "https://discord.gg/"; // Thay bang URL Discord cua ban

export default function DiscordPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hien thi popup 1.5 giay sau khi trang tai
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden"
          >
            {/* Banner */}
            <div className="relative h-48 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#A78BFA] overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Banner content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4 animate-bounce">💬</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Join Our Discord Community
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[#1A1A1A] p-8 md:p-12">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed text-center">
                Connect with our community, share your projects, get feedback, and collaborate with
                other designers and developers. Join thousands of members already part of our
                growing community!
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#6366F1]/20">
                  <div className="text-2xl mb-2">🎮</div>
                  <p className="text-sm text-gray-400">Gaming</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#6366F1]/20">
                  <div className="text-2xl mb-2">👥</div>
                  <p className="text-sm text-gray-400">Community</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#6366F1]/20">
                  <div className="text-2xl mb-2">💡</div>
                  <p className="text-sm text-gray-400">Support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:from-[#7C3AED] hover:to-[#A78BFA] transition-all duration-300 text-center"
                >
                  Join Discord
                </a>
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 border-2 border-[#6366F1] text-[#6366F1] font-semibold rounded-lg hover:bg-[#6366F1] hover:text-white transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Popup nay se hien thi moi lan ban reload trang
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
