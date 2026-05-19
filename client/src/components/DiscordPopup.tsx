import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Palette, Users, Sparkles } from "lucide-react";
import Particles from "@/components/ui/Particles";
import DiscordBanner from "@/assets/images/DiscordBanner.png";

const DISCORD_URL = "https://discord.gg/XCfkTu7ma6";

export default function DiscordPopup() {
  const [isOpen, setIsOpen] = useState(true);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop & Particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          >
            <Particles />
          </motion.div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 200, delay: 0.1 } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
            className="relative z-10 w-full max-w-md rounded-xl overflow-hidden border border-primary/20 bg-card/80 shadow-2xl shadow-primary/25"
          >
             {/* Close button */}
             <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            {/* Banner */}
            <div className="aspect-w-16 aspect-h-9">
                <img src={DiscordBanner} alt="Discord Banner" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Join My Creative Server
                </h2>
                <p className="text-muted-foreground text-sm mt-1 mb-4">Get direct feedback & collaborate on projects.</p>

              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="text-center py-2 px-1 rounded-lg bg-white/5 border border-white/10">
                  <Palette className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">3D Art</p>
                </div>
                <div className="text-center py-2 px-1 rounded-lg bg-white/5 border border-white/10">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">Community</p>
                </div>
                <div className="text-center py-2 px-1 rounded-lg bg-white/5 border border-white/10">
                  <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">Feedback</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
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
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
