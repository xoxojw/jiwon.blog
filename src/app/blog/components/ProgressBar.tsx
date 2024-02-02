"use client";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primary-300 dark:bg-primary origin-[0] z-20"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar