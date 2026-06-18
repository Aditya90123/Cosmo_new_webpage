import { motion } from "framer-motion";

export default function AnimatedIcon({ path }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563eb"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.path d={path} />
    </motion.svg>
  );
}
