import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}

const directionOffset = {
  bottom: { y: 56, x: 0 },
  left: { x: -56, y: 0 },
  right: { x: 56, y: 0 },
};

const ScrollReveal = ({ children, delay = 0, className = "", from = "bottom" }: Props) => {
  const { x, y } = directionOffset[from];
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
