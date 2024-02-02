"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primary-300 dark:bg-primary origin-[0] z-20"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar