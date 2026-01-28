import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FolderOpen, Mail } from "lucide-react";
import { MeshGradientBackground } from "@/components/mesh-gradient-background";
import { GrainTexture } from "@/components/grain-texture";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Premium animated backgrounds */}
      <MeshGradientBackground />

      {/* Scroll-reactive parallax layer */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, oklch(0.98 0.01 250 / 0.03) 0%, transparent 50%)",
        }}
        animate={{
          scale: 1 + (scrollY * 0.0001),
          y: scrollY * 0.1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <GrainTexture />

      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 md:space-y-4"
          >
            <p className="text-base md:text-lg text-primary font-medium">
              Hi, I'm
            </p>

            {/* Name with gradient effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-primary inline-block"
              >
                Rohan
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block"
              >
                Khurana
              </motion.span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                Senior
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                Frontend
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                Developer
              </motion.span>
            </h2>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 mb-8"
          >
            I build exceptional digital experiences with React, TypeScript, and
            modern web technologies. Transforming ideas into polished,
            performant applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group relative overflow-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <FolderOpen className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  View My Work
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Get In Touch
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 md:pt-12"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Scroll to about section"
              className="h-10 w-10 animate-bounce"
            >
              <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
