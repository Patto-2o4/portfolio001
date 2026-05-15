import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

/**
 * COMPONENT: AnimatedItem
 * =======================
 * Mục đích: Tạo hiệu ứng animation cho từng item trong lưới (grid)
 * 
 * Cách sử dụng:
 * <AnimatedItem index={0}>
 *   <YourCard />
 * </AnimatedItem>
 */

interface AnimatedItemProps {
  children: ReactNode;
  index?: number;
}

export default function AnimatedItem({
  children,
  index = 0,
}: AnimatedItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
