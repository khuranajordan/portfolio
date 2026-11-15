import { Terminal, Database, Cpu, Cloud } from "lucide-react";

export function SantalSpec() {
  const specs = [
    {
      code: "SPEC-01",
      category: "Protocols & Real-Time Sync",
      icon: Terminal,
      focus: "Event-driven sub-second bidirectional state pipelines",
      items: [
        { name: "Socket.IO", detail: "Custom rooms, packet serialization, fallback polling" },
        { name: "Native WebSockets", detail: "Binary frames, persistent full-duplex TCP streams" },
        { name: "Event-Driven UI", detail: "Optimistic updates, state hydration, queue draining" },
        { name: "Resilient Reconnect", detail: "Exponential backoff, heartbeat keepalive detection" },
      ],
    },
    {
      code: "SPEC-02",
      category: "Core Frameworks & Runtimes",
      icon: Cpu,
      focus: "High-concurrency modern typed JavaScript runtimes",
      items: [
        { name: "TypeScript (Strict)", detail: "End-to-end typed contracts, zero any-casts" },
        { name: "Next.js", detail: "App Router, Server Components, hybrid SSR/SSG" },
        { name: "React 19", detail: "Hooks, concurrent rendering, Suspense streaming" },
        { name: "Node.js / Hono.js", detail: "High-throughput microservices, edge workers" },
      ],
    },
    {
      code: "SPEC-03",
      category: "Performance & Memory Profiling",
      icon: Database,
      focus: "Low-end device optimization and millisecond budgets",
      items: [
        { name: "DOM Virtualization", detail: "Virtualized lists handling 10k+ rows with zero lag" },
        { name: "Code Splitting", detail: "Route-level dynamic chunks via Suspense & React.lazy" },
        { name: "Memory Profiling", detail: "Heap snapshot tracing, memory leak elimination" },
        { name: "Performance Budgets", detail: "Lighthouse FCP < 3s, Core Web Vitals enforcement" },
      ],
    },
    {
      code: "SPEC-04",
      category: "Cloud, Infrastructure & CI/CD",
      icon: Cloud,
      focus: "Production deployment, automated testing, and CDN edges",
      items: [
        { name: "Cloudflare Workers & R2", detail: "Edge compute storage, zero-egress asset caching" },
        { name: "AWS EC2 & Lambda", detail: "Scalable cloud instances and serverless functions" },
        { name: "CI/CD Pipelines", detail: "Automated linting, bundle validation, zero-downtime deploy" },
        { name: "Sentry & CloudWatch", detail: "Real-time client telemetry, anomaly alerting" },
      ],
    },
  ];

  return (
    <section id="spec" className="py-24 md:py-32 border-b border-black/[0.08] bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-black/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black"></span>
              <span>SECTION 03 // TECHNICAL SPECIFICATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-neutral-900 uppercase tracking-tight">
              Tech Stack & Tooling.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 max-w-sm uppercase leading-relaxed">
            Technologies and engineering standards applied across modern web applications.
          </p>
        </div>

        {/* Spec Ledger Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] bg-white shadow-xs">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-10 flex flex-col justify-between hover:bg-neutral-50/50 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06]">
                    <span className="text-xs font-mono text-neutral-400">{spec.code}</span>
                    <Icon className="w-4 h-4 text-neutral-500" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-neutral-900 uppercase tracking-tight mb-2">
                    {spec.category}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-8">
                    {spec.focus}
                  </p>

                  <div className="space-y-4">
                    {spec.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-neutral-50 border border-black/[0.06] flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold font-sans text-neutral-900 tracking-wide">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase">
                            Verified
                          </span>
                        </div>
                        <span className="text-xs text-neutral-600 font-mono">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
                  <span>Standard: Production Grade</span>
                  <span>Clean Code & Maintainability</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
