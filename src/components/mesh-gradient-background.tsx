import { motion } from "framer-motion";

export function MeshGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 - Primary mesh gradient */}
      <motion.div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          background: `
            radial-gradient(at 40% 20%, oklch(0.55 0.12 250 / 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, oklch(0.60 0.10 280 / 0.12) 0px, transparent 50%),
            radial-gradient(at 0% 50%, oklch(0.50 0.15 220 / 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, oklch(0.58 0.08 260 / 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, oklch(0.52 0.14 240 / 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 100%, oklch(0.55 0.11 270 / 0.1) 0px, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Layer 2 - Secondary accent gradients */}
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          background: `
            radial-gradient(circle at 15% 50%, oklch(0.62 0.18 200 / 0.08) 0%, transparent 25%),
            radial-gradient(circle at 85% 30%, oklch(0.65 0.16 300 / 0.06) 0%, transparent 25%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
