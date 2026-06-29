import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageTransition({ children }) {
  useEffect(() => {
    // Clean up any GSAP ScrollTriggers when page changes
    return () => {
      // Force cleanup of any remaining GSAP instances
      if (typeof window !== 'undefined' && window.gsap) {
        const triggers = window.gsap.ScrollTrigger?.getAll();
        if (triggers) {
          triggers.forEach(trigger => trigger.kill());
        }
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
