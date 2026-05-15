import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

/**
 * COMPONENT: AnimatedSection
 * ==========================
 * Mục đích: Tạo hiệu ứng animation khi section xuất hiện trong viewport
 * 
 * Cách sử dụng:
 * <AnimatedSection>
 *   <YourContent />
 * </AnimatedSection>
 */

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Xác định hướng animation
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 100, opacity: 0 };
      case "down":
        return { y: -100, opacity: 0 };
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      default:
        return { y: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={
        inView
          ? { x: 0, y: 0, opacity: 1 }
          : getInitialPosition()
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
