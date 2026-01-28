import { motion } from "framer-motion";

export function AnimatedGradientBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 - Slow animated gradient (20s) */}
      <motion.div
        className="absolute inset-0 opacity-70 dark:opacity-50"
        style={{
          backgroundSize: "200% 200%",
          backgroundImage: `
            radial-gradient(circle at 0% 50%, oklch(0.55 0.18 280) 0%, transparent 50%),
            radial-gradient(circle at 100% 50%, oklch(0.6 0.16 320) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, oklch(0.65 0.14 45) 0%, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Layer 2 - Fast animated gradient (15s) */}
      <motion.div
        className="absolute inset-0 opacity-50 dark:opacity-40"
        style={{
          backgroundSize: "200% 200%",
          backgroundImage: `
            radial-gradient(circle at 50% 0%, oklch(0.6 0.16 210) 0%, transparent 40%),
            radial-gradient(circle at 50% 100%, oklch(0.55 0.18 250) 0%, transparent 40%)
          `
        }}
        animate={{
          backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
