import { useRef } from "react";
import { ArrowDown, ShieldCheck, Activity, Users, ArrowUpRight, Award } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function SantalHero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Apple-grade scroll tracking while hero card is in viewport (0 to 450px)
  const { scrollY } = useScroll();
  const rawProgress = useTransform(scrollY, [0, 450], [0, 1], { clamp: true });

  // Apple physics-based spring smoothing (weighted inertia without jitter)
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  // Parallax translation for the card container (differential speed)
  const cardY = useTransform(smoothProgress, [0, 1], [0, -42]);
  const cardScale = useTransform(smoothProgress, [0, 1], [1.0, 1.04]);

  // Apple optical dolly zoom: avatar enlarges smoothly as you scroll down
  const avatarScale = useTransform(smoothProgress, [0, 1], [1.0, 1.28]);
  const avatarY = useTransform(smoothProgress, [0, 1], [0, 12]); // Counter-parallax for cinematic focal depth

  const metrics = [
    {
      value: "4+ Years",
      label: "Production Track Record",
      detail: "Junior to Senior & Team Lead",
      icon: Award,
    },
    {
      value: "6 Engineers",
      label: "Team Leadership",
      detail: "Code Reviews & Engineering Standards",
      icon: Users,
    },
    {
      value: "30%",
      label: "Technical Debt Reduced",
      detail: "CI/CD & Architecture Refactoring",
      icon: Activity,
    },
    {
      value: "90%+",
      label: "Unit Test Coverage",
      detail: "Critical Production Modules",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 md:pt-36 pb-20 flex flex-col justify-between border-b border-black/[0.08] dark:border-white/[0.08] bg-[#faf9f6] dark:bg-[#0c0d0f] overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="border-l border-r border-black/[0.03] dark:border-white/[0.03] h-full"></div>
          <div className="border-r border-black/[0.03] dark:border-white/[0.03] h-full hidden md:block"></div>
          <div className="border-r border-black/[0.03] dark:border-white/[0.03] h-full hidden md:block"></div>
          <div className="border-r border-black/[0.03] dark:border-white/[0.03] h-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Index label & coordinate tag */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
            <span>DEVELOPER PROFILE // 001</span>
          </div>
          <span>ROLE: SOFTWARE DEVELOPER & TEAM LEAD</span>
        </div>

        {/* Main Hero Grid: Left Content + Right Bitmoji Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Typography & Intro */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#121316] dark:text-[#f4f4f6] uppercase font-sans leading-[0.95]">
              Senior <br className="hidden sm:inline" />
              <span className="text-neutral-500 dark:text-neutral-400 font-light">Software</span> <br />
              Developer.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-2xl">
              I build scalable, high-performance web applications with{" "}
              <span className="text-[#121316] dark:text-white font-semibold">Next.js, React, and TypeScript</span>. Over 4+ years in production,
              I have led frontend teams, established modern design systems and CI/CD pipelines, and scaled applications to 10,000+ daily active users.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToPhilosophy}
                className="px-6 py-3 bg-[#121316] dark:bg-white text-white dark:text-[#121316] text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>See Engineering Approach</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-white dark:bg-[#15171e] border border-black/15 dark:border-white/15 text-[#121316] dark:text-white text-xs font-mono uppercase tracking-widest hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Personal Bitmoji Spotlight Card with Apple Parallax & Optical Dolly Zoom */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              style={{
                y: cardY,
                scale: cardScale,
              }}
              className="w-full max-w-sm bg-white dark:bg-[#15171e] border border-black/[0.08] dark:border-white/[0.08] p-6 shadow-sm flex flex-col items-center text-center relative group hover:border-black/20 dark:hover:border-white/25 transition-colors duration-300 will-change-transform"
            >
              {/* Bitmoji Portrait Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 mb-5 shadow-inner">
                <motion.img
                  src="/bitmoji.png"
                  alt="Rohan Khurana Bitmoji Avatar"
                  style={{
                    scale: avatarScale,
                    y: avatarY,
                    transformOrigin: "center 38%",
                  }}
                  className="w-full h-full object-cover will-change-transform"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/75 dark:bg-black/90 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider rounded-md">
                  Rohan.dev
                </div>
              </div>

              {/* Identity & Status */}
              <div className="space-y-1 mb-4">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight font-sans">
                  Rohan Khurana
                </h2>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Software Developer & Team Lead
                </p>
                <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  Ink In Caps • Mumbai, India
                </p>
              </div>

              {/* Status Indicator */}
              <div className="w-full pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500 dark:text-neutral-400">Status</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Telemetry Grid (Santalarch-style hairline boxes) */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/[0.08] dark:border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] dark:divide-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="p-6 md:p-8 flex flex-col justify-between group hover:bg-neutral-50/80 dark:hover:bg-neutral-900/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-500 mb-6">
                  <span className="text-[11px] font-mono">0{i + 1} // METRIC</span>
                  <Icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-[#121316] dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-800 dark:text-neutral-200 mb-1 font-semibold">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
        <button
          onClick={scrollToPhilosophy}
          className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
        >
          <div className="w-6 h-6 border border-black/20 dark:border-white/20 rounded-full flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-neutral-700 dark:text-neutral-300" />
          </div>
          <span>Scroll to Explore Architecture</span>
        </button>

        <span className="hidden sm:inline">
          SECTION 01 / 05 // SYSTEM MONOLITHS
        </span>
      </div>
    </section>
  );
}
