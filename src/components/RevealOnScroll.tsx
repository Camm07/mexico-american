import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  // Opcional: Personaliza duración, dirección, etc.
  duration?: number;
  y?: number;
  amount?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  className,
  duration = 0.7,
  y = 50,
  amount = 0.22,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.17, 0.67, 0.83, 0.67] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
