import { ArrowDown, ShieldCheck, Zap, Activity, Users, ArrowUpRight } from "lucide-react";

export function SantalHero() {
  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const metrics = [
    {
      value: "< 100ms",
      label: "Message Latency",
      detail: "Real-Time WebSocket & Socket.IO",
      icon: Zap,
    },
    {
      value: "10,000+",
      label: "Concurrent Users",
      detail: "Event-Driven UI Synchronization",
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
      className="relative min-h-screen pt-28 md:pt-36 pb-20 flex flex-col justify-between border-b border-black/[0.08] bg-[#faf9f6] overflow-hidden"
    >
      {/* Subtle Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="border-l border-r border-black/[0.03] h-full"></div>
          <div className="border-r border-black/[0.03] h-full hidden md:block"></div>
          <div className="border-r border-black/[0.03] h-full hidden md:block"></div>
          <div className="border-r border-black/[0.03] h-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Index label & coordinate tag */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.08] text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black"></span>
            <span>DEVELOPER PROFILE // 001</span>
          </div>
          <span>ROLE: SOFTWARE DEVELOPER & TEAM LEAD</span>
        </div>

        {/* Main Hero Grid: Left Content + Right Bitmoji Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Typography & Intro */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#121316] uppercase font-sans leading-[0.95]">
              Senior <br className="hidden sm:inline" />
              <span className="text-neutral-500 font-light">Software</span> <br />
              Developer.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-2xl">
              Building high-traffic, real-time web applications with{" "}
              <span className="text-[#121316] font-semibold">Next.js, React, TypeScript</span>, and{" "}
              <span className="text-[#121316] font-semibold">WebSockets</span>. Experienced in team
              leadership, sub-second state synchronization, and scaling frontend performance.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToPhilosophy}
                className="px-6 py-3 bg-[#121316] text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <span>View Engineering Philosophy</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-white border border-black/15 text-[#121316] text-xs font-mono uppercase tracking-widest hover:bg-black/[0.03] transition-colors flex items-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Personal Bitmoji Spotlight Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white border border-black/[0.08] p-6 shadow-sm flex flex-col items-center text-center relative group hover:border-black/20 transition-all duration-300">
              {/* Bitmoji Portrait Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 mb-5 shadow-inner">
                <img
                  src="/bitmoji.png"
                  alt="Rohan Khurana Bitmoji Avatar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider rounded-md">
                  Rohan.dev
                </div>
              </div>

              {/* Identity & Status */}
              <div className="space-y-1 mb-4">
                <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-sans">
                  Rohan Khurana
                </h2>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Software Developer & Team Lead
                </p>
                <p className="text-[11px] font-mono text-neutral-400">
                  Ink In Caps • Mumbai, India
                </p>
              </div>

              {/* Status Indicator */}
              <div className="w-full pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500">Status</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Grid (Santalarch-style hairline boxes, Light Mode) */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] bg-white shadow-xs">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="p-6 md:p-8 flex flex-col justify-between group hover:bg-neutral-50/80 transition-colors duration-300"
              >
                <div className="flex items-center justify-between text-neutral-400 mb-6">
                  <span className="text-[11px] font-mono">0{i + 1} // METRIC</span>
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-[#121316] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-800 mb-1 font-semibold">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-neutral-500 leading-normal">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-widest">
        <button
          onClick={scrollToPhilosophy}
          className="flex items-center gap-3 text-neutral-600 hover:text-black transition-colors group"
        >
          <div className="w-6 h-6 border border-black/20 rounded-full flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <span>Scroll to Discover Engineering Philosophy</span>
        </button>

        <span className="hidden sm:inline">
          SECTION 01 / 05 // SYSTEM MONOLITHS
        </span>
      </div>
    </section>
  );
}
