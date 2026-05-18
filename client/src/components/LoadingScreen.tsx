import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải tài nguyên hoặc đợi Spline load xong
    // Trong thực tế, bạn có thể truyền props isLoading từ App.tsx
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Đợi 2.5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo Animation */}
          <motion.div
            className="text-4xl md:text-5xl font-black text-foreground tracking-widest mb-8 flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            PATTO<span className="text-primary">.</span>
          </motion.div>

          {/* Progress Line */}
          <div className="w-48 h-1 bg-border rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          <motion.p
            className="text-sm text-muted-foreground mt-4 font-mono tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Preparing Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
