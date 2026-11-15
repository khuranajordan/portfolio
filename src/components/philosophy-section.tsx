import { useEffect, useRef, useState } from "react";
import { PhilosophyCubes } from "./philosophy-cubes";
import { ShieldAlert, Cpu, Network } from "lucide-react";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = el.offsetHeight - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress 0.0 to 1.0 when container is in view
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active phase based on scroll progress
  let activePhase = 0;
  if (scrollProgress < 0.35) activePhase = 0;
  else if (scrollProgress < 0.7) activePhase = 1;
  else activePhase = 2;

  const phases = [
    {
      index: "01",
      title: "Resilience",
      tagline: "Software That Refuses to Fail",
      description:
        "Building fault-tolerant WebSocket pipelines, heartbeat recovery mechanisms, and self-healing connection pooling. Ensuring real-time event delivery even under unstable mobile networks and packet loss.",
      icon: ShieldAlert,
      metrics: ["Sub-100ms message delivery", "60% faster reconnects", "Zero dropped socket events"],
    },
    {
      index: "02",
      title: "Precision",
      tagline: "Resolved to the Millisecond",
      description:
        "Frontend engineering with zero fluff: virtualized list pipelines, lazy-loaded media streaming, aggressive memory profiling for low-end devices, and strict performance budgets enforced through CI/CD.",
      icon: Cpu,
      metrics: ["Lighthouse budget < 3s", "90%+ unit test coverage", "40% bundle size optimization"],
    },
    {
      index: "03",
      title: "Scale",
      tagline: "Quiet Reliability Under Load",
      description:
        "Engineering discipline that coordinates thousands of concurrent users across distributed event-driven rooms without memory leaks or UI degradation. Scaled from 0 to 10,000+ daily active users.",
      icon: Network,
      metrics: ["10k+ daily active users", "Distributed room broadcasting", "Sub-second UI state sync"],
    },
  ];

  const current = phases[activePhase];
  const Icon = current.icon;

  const scrollToPhase = (phaseIndex: number) => {
    const el = containerRef.current;
    if (!el) return;
    const windowHeight = window.innerHeight;
    const totalDistance = el.offsetHeight - windowHeight;
    const targetScroll = el.offsetTop + totalDistance * (phaseIndex * 0.45);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative h-[280vh] border-b border-black/[0.08] bg-[#faf9f6]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#faf9f6]">
        {/* Section Top Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-24 z-20">
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-black"></span>
              <span>SECTION 01 // ENGINEERING PHILOSOPHY</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-700 font-semibold">STATE: {current.title.toUpperCase()}</span>
              <span>PROGRESS // {Math.round(scrollProgress * 100)}%</span>
            </div>
          </div>
        </div>

        {/* Center Content Grid: 3D Canvas + Editorial Typography */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 z-10">
          {/* Left Column: 3D Kinetic Geometric Monoliths */}
          <div className="lg:col-span-7 h-[340px] sm:h-[450px] lg:h-[550px] w-full relative flex items-center justify-center">
            {/* Subtle light background ambient circle */}
            <div className="absolute w-80 h-80 rounded-full bg-neutral-200/50 blur-3xl pointer-events-none"></div>
            <PhilosophyCubes progress={scrollProgress} />
          </div>

          {/* Right Column: Editorial Architecture Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Icon className="w-4 h-4 text-black" />
                <span>PHASE {current.index} / 03</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-neutral-900 uppercase tracking-tight">
                {current.title}
              </h2>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                {current.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
              {current.description}
            </p>

            {/* Metrics Checklist */}
            <div className="pt-2 border-t border-black/[0.08] space-y-2">
              {current.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs font-mono text-neutral-600"
                >
                  <span className="w-1.5 h-1.5 bg-black/70"></span>
                  <span>{m}</span>
                </div>
              ))}
            </div>

            {/* Phase Selectors */}
            <div className="pt-4 flex items-center gap-2">
              {phases.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToPhase(idx)}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider border transition-all ${
                    activePhase === idx
                      ? "border-black text-white bg-black font-semibold shadow-xs"
                      : "border-black/10 text-neutral-500 hover:text-black hover:border-black/30 bg-white"
                  }`}
                >
                  {p.index} // {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section Status Rule */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 z-20">
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
            <span>KINETIC MONOLITH ENGINE // THREE.JS WEBGL</span>
            <span className="hidden sm:inline">SCROLL TO EXPAND & RECONFIGURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
